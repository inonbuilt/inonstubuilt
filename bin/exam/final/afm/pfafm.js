// ==========================================
// 1. GLOBAL STATE & UTILITIES
// ==========================================
let rawExamElements = [];
let selectedOptions = new Set(); 
let examCompleted = false;
let physicsBound = false;
let selectedMCQs = []; 
let selectedDescriptive = []; 

const TEXT_CHUNK_LIMIT = 90;
const SESSION_MCQ_KEY = "cn_afm_seen_mcqs";
const SESSION_DESC_KEY = "cn_afm_seen_desc";

// Official ICAI AFM Chapter Weightage Percentages
const ICAI_WEIGHTS = {
    "Financial Policy and Corporate Strategy": 10,
    "Risk Management": 10,
    "Advanced Capital Budgeting Decisions": 15,
    "Security Analysis": 8,
    "Security Valuation": 15,
    "Portfolio Management": 20,
    "Securitization": 8,
    "Mutual Funds": 10,
    "Derivatives Analysis and Valuation": 15,
    "Derivatives": 15,
    "Foreign Exchange Exposure and Risk Management": 20,
    "Foreign Exchange Risk Management": 20,
    "International Financial Management": 8,
    "Interest Rate Risk Management": 10,
    "Business Valuation": 12,
    "Corporate Valuation": 12,
    "Mergers, Acquisitions and Corporate Restructuring": 15,
    "Corporate Restructuring": 15,
    "Startup Finance": 8
};

// --- Session Storage Helpers ---
function getSessionSeenSet(key) {
    try {
        const raw = sessionStorage.getItem(key);
        return raw ? new Set(JSON.parse(raw)) : new Set();
    } catch (e) {
        return new Set();
    }
}

function saveSessionSeenSet(key, setObj) {
    try {
        sessionStorage.setItem(key, JSON.stringify(Array.from(setObj)));
    } catch (e) {
        console.warn("SessionStorage unavailable:", e);
    }
}

// Generates a normalized text fingerprint so identical questions across different MTPs aren't repeated
function getItemSignature(item) {
    if (!item) return "";
    const raw = item.question_html || item.caseText || item.question || "";
    const clean = String(raw).replace(/<[^>]+>/g, '').replace(/[^a-z0-9]/gi, '').toLowerCase();
    return clean.slice(0, 140) || (item.question_id || item.case_id || "");
}

function isItemSeen(item, seenSet) {
    const id = item.question_id || item.case_id;
    const sig = getItemSignature(item);
    return (id && seenSet.has(id)) || (sig && seenSet.has(sig));
}

function markItemSeen(item, seenSet) {
    const id = item.question_id || item.case_id;
    const sig = getItemSignature(item);
    if (id) seenSet.add(id);
    if (sig) seenSet.add(sig);
}

// --- Original Utility Helpers ---
function shuffleArray(array) {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

function getCurrentExamDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    return `${day}-${month}-${year}`;
}

function readCssPx(styles, propertyName, fallbackValue) {
    const value = parseFloat(styles.getPropertyValue(propertyName));
    return Number.isFinite(value) ? value : fallbackValue;
}

function getMtpPlacement(q) {
    const match = q.question_id && q.question_id.match(/_Q([1-6])/i);
    if (match) {
        return parseInt(match[1], 10);
    }
    return Number(q.placement) || 1;
}

function splitPlainTextForPagination(text) {
    if (/<[^>]+>/.test(text)) return [text];
    if (/\$|\\\(|\\\[|\\frac|\\times|\\text|\\sigma|\\Delta/.test(text)) return [text];

    const chunks = [];
    const softParts = text
        .replace(/([,;:])\s+/g, '$1 [SOFT_SPLIT]')
        .split('[SOFT_SPLIT]');

    softParts.forEach(part => {
        const trimmed = part.trim();
        if (!trimmed) return;

        if (trimmed.length <= TEXT_CHUNK_LIMIT) {
            chunks.push(trimmed);
            return;
        }

        let current = "";
        trimmed.split(/\s+/).forEach(word => {
            const next = current ? `${current} ${word}` : word;

            if (next.length > TEXT_CHUNK_LIMIT && current) {
                chunks.push(current);
                current = word;
            } else {
                current = next;
            }
        });

        if (current) chunks.push(current);
    });

    return chunks.length ? chunks : [text];
}

function formatTableForDisplay(tableNode) {
    if (!tableNode || !tableNode.querySelectorAll) return;
    const allRows = Array.from(tableNode.querySelectorAll('tr'));
    if (allRows.length === 0) return;
    const isAmountContent = (text) => {
        const clean = text.replace(/<[^>]+>/g, '').trim();
        if (!clean || clean === '-' || clean === '–' || clean === '—' || /^nil$/i.test(clean) || /^none$/i.test(clean)) return true;
        const lines = clean.split('\n').map(l => l.trim()).filter(Boolean);
        if (lines.length === 0) return true;
        let numCount = 0;
        for (const line of lines) {
            if (/^[₹$€£\s\(\)\d,.\-%—–/]+$/.test(line) || /^nil$/i.test(line) || /^none$/i.test(line) || line === '-') {
                numCount++;
            }
        }
        return numCount > 0 && (numCount / lines.length >= 0.6);
    };
    const amountPattern = /(\b(amount|rs|inr|usd|value|price|cost|rate|tax|total|dr|cr|lakh|crore|million|cfat|pv|bal)\b|[₹$€£%])/i;
    const particularsPattern = /\b(particulars?|descs?|details?|narrations?|nature|reasons?|transactions?)\b/i;
    const snoPattern = /\b(s\.?\s*no|sl\.?\s*no|sr\.?\s*no|item)\b/i;
    const colRoles = {};
    const firstRowCells = Array.from(allRows[0].children);
    firstRowCells.forEach((cell, cIdx) => {
        const cleanText = cell.textContent.trim();
        if (particularsPattern.test(cleanText)) { colRoles[cIdx] = 'particulars'; }
        else if (amountPattern.test(cleanText)) { colRoles[cIdx] = 'amount'; }
        else if (snoPattern.test(cleanText)) { colRoles[cIdx] = 'sno'; }
    });
    const dataCounts = {};
    allRows.slice(1).forEach(row => {
        const cells = Array.from(row.children);
        cells.forEach((cell, cIdx) => {
            if (cell.getAttribute('colspan') && parseInt(cell.getAttribute('colspan')) > 1) return;
            if (!dataCounts[cIdx]) dataCounts[cIdx] = { total: 0, numeric: 0 };
            const text = cell.textContent.trim();
            if (text) {
                dataCounts[cIdx].total++;
                if (isAmountContent(text)) dataCounts[cIdx].numeric++;
            }
        });
    });
    Object.keys(dataCounts).forEach(cIdx => {
        if (!colRoles[cIdx]) {
            const counts = dataCounts[cIdx];
            if (counts.total > 0 && (counts.numeric / counts.total >= 0.5)) colRoles[cIdx] = 'amount';
        }
    });
    if (firstRowCells.length === 2) {
        if (!colRoles[0] && !colRoles[1]) { colRoles[0] = 'particulars'; colRoles[1] = 'amount'; }
        else if (colRoles[0] === 'particulars' && !colRoles[1]) { colRoles[1] = 'amount'; }
    }
    allRows.forEach(row => {
        const cells = Array.from(row.children);
        cells.forEach((cell, cIdx) => {
            if (cell.getAttribute('colspan') && parseInt(cell.getAttribute('colspan')) > 1) return;
            const role = colRoles[cIdx];
            if (role === 'amount') cell.classList.add('col-amount');
            else if (role === 'particulars') cell.classList.add('col-particulars');
            else if (role === 'sno') cell.classList.add('col-sno');
            if (isAmountContent(cell.textContent.trim()) && cell.textContent.trim().length > 0) cell.classList.add('cell-amount');
        });
    });
}

function splitTableIntoElements(tableNode) {
    formatTableForDisplay(tableNode);
    const allRows = Array.from(tableNode.querySelectorAll('tr'));
    if (allRows.length <= 4) return [`<div class="table-wrapper">${tableNode.outerHTML}</div>`];
    let headerRows = [];
    let dataRows = [];
    const thead = tableNode.querySelector('thead');
    if (thead) {
        headerRows = Array.from(thead.querySelectorAll('tr'));
        const tbody = tableNode.querySelector('tbody') || tableNode;
        dataRows = Array.from(tbody.querySelectorAll('tr')).filter(r => !headerRows.includes(r));
    } else {
        let headerDone = false;
        for (let i = 0; i < allRows.length; i++) {
            const row = allRows[i];
            if (row.querySelectorAll('th').length > 0 && !headerDone) { headerRows.push(row); } 
            else { headerDone = true; dataRows.push(row); }
        }
        if (headerRows.length === 0 && allRows.length > 0) { headerRows.push(allRows[0]); dataRows = allRows.slice(1); }
    }
    if (dataRows.length <= 4) return [`<div class="table-wrapper">${tableNode.outerHTML}</div>`];
    const headerHtml = headerRows.map(r => r.outerHTML).join('');
    const rowHtmls = dataRows.map(r => r.outerHTML);
    let attrs = '';
    if (tableNode.attributes) {
        for (let i = 0; i < tableNode.attributes.length; i++) attrs += ` ${tableNode.attributes[i].name}="${tableNode.attributes[i].value}"`;
    }
    return [{ type: 'splittable-table', attrs: attrs, headerHtml: headerHtml, rows: rowHtmls }];
}

function splitListIntoElements(listNode) {
    const items = Array.from(listNode.children).filter(item => item.tagName === 'LI');
    if (items.length <= 2) return [listNode.outerHTML];
    return items.map((item, index) => {
        const list = listNode.cloneNode(false);
        list.style.margin = "4px 0";
        list.style.paddingLeft = "22px";
        if (list.tagName === 'OL') list.start = index + 1;
        list.appendChild(item.cloneNode(true));
        return list.outerHTML;
    });
}

function splitHtmlIntoElements(htmlString) {
    const temp = document.createElement('div');
    temp.innerHTML = htmlString;
    let elements = [];
    const blockTags = ['P', 'DIV', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'BLOCKQUOTE', 'PRE', 'HR', 'LI'];
    Array.from(temp.childNodes).forEach(node => {
        if (node.nodeType === 1) { 
            const isBlock = blockTags.includes(node.tagName);
            if (node.classList && node.classList.contains('no-split')) {
                elements.push(node.outerHTML);
                if (isBlock) elements.push(`<div style="display:block; height:10px; width:100%;"></div>`);
            } 
            else if (node.tagName === 'TABLE') {
                elements = elements.concat(splitTableIntoElements(node));
                elements.push(`<div style="display:block; height:10px; width:100%;"></div>`);
            } 
            else if (node.tagName === 'UL' || node.tagName === 'OL') {
                elements = elements.concat(splitListIntoElements(node));
                elements.push(`<div style="display:block; height:10px; width:100%;"></div>`);
            } 
            else if (node.querySelector('table, ul, ol')) {
                Array.from(node.childNodes).forEach(child => {
                    if (child.nodeType === 1) {
                        elements = elements.concat(splitHtmlIntoElements(child.outerHTML));
                    } else if (child.nodeType === 3 && child.textContent.trim() !== '') {
                        splitPlainTextForPagination(child.textContent).forEach(chunk => {
                            elements.push(`<span style="display:inline;">${chunk.trim()} </span>`);
                        });
                    }
                });
            } 
            else {
                const innerText = node.innerHTML || '';
                if (innerText.includes('$$') || innerText.includes('\\[') || (node.classList && node.classList.contains('math-block'))) {
                    if (node.classList) node.classList.add('no-split');
                    elements.push(node.outerHTML);
                    if (isBlock) elements.push(`<div style="display:block; height:10px; width:100%;"></div>`);
                    return;
                }
                let safeHtml = node.innerHTML.replace(/<br\s*\/?>/gi, '<br>[SPLIT]').replace(/(\.|\?|!)\s+/g, '$1[SPLIT]');
                let sentences = safeHtml.split('[SPLIT]');
                sentences.forEach((sentence) => {
                    splitPlainTextForPagination(sentence).forEach(chunk => {
                        if (chunk.trim() === "") return;
                        let clone = node.cloneNode(false);
                        clone.innerHTML = chunk.trim() + " ";
                        clone.style.display = "inline"; 
                        elements.push(clone.outerHTML);
                    });
                });
                if (isBlock) {
                    elements.push(`<div style="display:block; height:10px; width:100%;"></div>`);
                }
            }
        } else if (node.nodeType === 3 && node.textContent.trim() !== '') {
            splitPlainTextForPagination(node.textContent).forEach(chunk => {
                elements.push(`<span style="display:inline;">${chunk.trim()} </span>`);
            });
        }
    });
    return elements;
}

function getQuestionWeight(q) {
    if (!q.chapter_name) return 10;
    const chapters = Array.isArray(q.chapter_name) ? q.chapter_name : [q.chapter_name];
    let maxWeight = 5;
    for (let ch of chapters) {
        for (let [key, val] of Object.entries(ICAI_WEIGHTS)) {
            if (ch.toLowerCase().includes(key.toLowerCase()) || key.toLowerCase().includes(ch.toLowerCase())) {
                if (val > maxWeight) maxWeight = val;
            }
        }
    }
    return maxWeight;
}

function pickWeightedQuestion(candidates) {
    if (!candidates || candidates.length === 0) return null;
    let totalWeight = candidates.reduce((sum, q) => sum + getQuestionWeight(q), 0);
    let rand = Math.random() * totalWeight;
    for (let q of candidates) {
        rand -= getQuestionWeight(q);
        if (rand <= 0) return q;
    }
    return candidates[candidates.length - 1];
}

function pickSessionMCQs(pool, count = 3) {
    if (!Array.isArray(pool) || pool.length === 0) return [];
    let seenMcqs = getSessionSeenSet(SESSION_MCQ_KEY);
    let chosen = [];
    let currentPaperSigs = new Set();
    let unseenPool = shuffleArray(pool.filter(cs => !isItemSeen(cs, seenMcqs)));
    for (const cs of unseenPool) {
        if (chosen.length >= count) break;
        const sig = getItemSignature(cs);
        if (!currentPaperSigs.has(sig)) { chosen.push(cs); currentPaperSigs.add(sig); }
    }
    if (chosen.length < count) {
        seenMcqs.clear();
        chosen.forEach(cs => markItemSeen(cs, seenMcqs));
        let fallbackPool = shuffleArray(pool);
        for (const cs of fallbackPool) {
            if (chosen.length >= count) break;
            const sig = getItemSignature(cs);
            if (!currentPaperSigs.has(sig)) { chosen.push(cs); currentPaperSigs.add(sig); }
        }
    }
    chosen.forEach(cs => markItemSeen(cs, seenMcqs));
    saveSessionSeenSet(SESSION_MCQ_KEY, seenMcqs);
    return chosen;
}

// ==========================================
// 2. DYNAMIC 40:60 EXAM PAPER GENERATOR (WITH PLACEMENT & REFRESH MEMORY)
// ==========================================
function generateRandomPaper() {
    const TOTAL_DESCRIPTIVE_MARKS = 84; 
    const TARGET_MTP_MARKS = 34;        
    const MARK_PATTERNS = [[8, 6], [6, 8], [10, 4], [4, 10], [6, 4, 4], [4, 6, 4], [4, 4, 6], [8, 4, 2], [6, 6, 2]];

    let seenDesc = getSessionSeenSet(SESSION_DESC_KEY);
    const mtpPool = descriptiveQuestions.map(q => ({ ...q, _source: 'MTP' }));
    const icaiPool = icaibookData.map(q => ({ ...q, _source: 'ICAI' }));

    for (let attempt = 0; attempt < 500; attempt++) {
        const strictUnseenOnly = attempt < 350;
        let usedIds = new Set();
        let usedSigs = new Set();
        
        let remainingMtpMarks = TARGET_MTP_MARKS;
        let remainingTotalMarks = TOTAL_DESCRIPTIVE_MARKS;
        let questions = [];
        let success = true;

        for (let qNum = 1; qNum <= 6; qNum++) {
            let pattern = MARK_PATTERNS[Math.floor(Math.random() * MARK_PATTERNS.length)];
            let chosenParts = [];

            for (let mark of pattern) {
                let pMtp = Math.max(0, Math.min(1, remainingMtpMarks / remainingTotalMarks));
                let preferMtp = Math.random() < pMtp;

                let mtpAll = mtpPool.filter(q => getMtpPlacement(q) === qNum && Number(q.marks) === mark && !usedIds.has(q.question_id) && !usedSigs.has(getItemSignature(q)));
                let icaiAll = icaiPool.filter(q => Number(q.marks) === mark && !usedIds.has(q.question_id) && !usedSigs.has(getItemSignature(q)));

                let mtpUnseen = mtpAll.filter(q => !isItemSeen(q, seenDesc));
                let icaiUnseen = icaiAll.filter(q => !isItemSeen(q, seenDesc));

                let mtpCandidates = strictUnseenOnly ? mtpUnseen : (mtpUnseen.length > 0 ? mtpUnseen : mtpAll);
                let icaiCandidates = strictUnseenOnly ? icaiUnseen : (icaiUnseen.length > 0 ? icaiUnseen : icaiAll);

                let candidate = null;
                if (preferMtp && mtpCandidates.length > 0) {
                    candidate = mtpCandidates[Math.floor(Math.random() * mtpCandidates.length)];
                } else if (!preferMtp && icaiCandidates.length > 0) {
                    candidate = pickWeightedQuestion(icaiCandidates);
                } else if (mtpCandidates.length > 0) {
                    candidate = mtpCandidates[Math.floor(Math.random() * mtpCandidates.length)];
                } else if (icaiCandidates.length > 0) {
                    candidate = pickWeightedQuestion(icaiCandidates);
                }

                if (!candidate) { success = false; break; }

                usedIds.add(candidate.question_id);
                usedSigs.add(getItemSignature(candidate));
                if (candidate._source === 'MTP') { remainingMtpMarks -= mark; }
                remainingTotalMarks -= mark;
                chosenParts.push(candidate);
            }

            if (!success) break;
            questions.push({ placement: qNum, parts: shuffleArray(chosenParts) });
        }

        let actualMtpMarks = TARGET_MTP_MARKS - remainingMtpMarks;
        if (success && actualMtpMarks >= 30 && actualMtpMarks <= 38) {
            if (!strictUnseenOnly) { seenDesc.clear(); }
            questions.forEach(group => group.parts.forEach(part => markItemSeen(part, seenDesc)));
            saveSessionSeenSet(SESSION_DESC_KEY, seenDesc);
            return questions;
        }
    }

    seenDesc.clear();
    let fallbackQuestions = [];
    let fallbackUsedSigs = new Set();
    for (let qNum = 1; qNum <= 6; qNum++) {
        let mtpAvailable = descriptiveQuestions.filter(q => getMtpPlacement(q) === qNum && !fallbackUsedSigs.has(getItemSignature(q)));
        let parts = [];
        if (mtpAvailable.length > 0) {
            let mtpQ = mtpAvailable[Math.floor(Math.random() * mtpAvailable.length)];
            parts.push(mtpQ);
            fallbackUsedSigs.add(getItemSignature(mtpQ));
            let remaining = 14 - (Number(mtpQ.marks) || 0);
            let icaiMatches = icaibookData.filter(q => Number(q.marks) === remaining && !fallbackUsedSigs.has(getItemSignature(q)));
            if (icaiMatches.length > 0) {
                let icaiQ = pickWeightedQuestion(icaiMatches);
                parts.push(icaiQ);
                fallbackUsedSigs.add(getItemSignature(icaiQ));
            }
        }
        fallbackQuestions.push({ placement: qNum, parts: shuffleArray(parts) });
    }
    fallbackQuestions.forEach(group => group.parts.forEach(part => markItemSeen(part, seenDesc)));
    saveSessionSeenSet(SESSION_DESC_KEY, seenDesc);
    return fallbackQuestions;
}

// ==========================================
// 3. INITIALIZATION & DATA RENDERING
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    if (typeof mcqData !== 'undefined') {
        selectedMCQs = pickSessionMCQs(mcqData, 3);
    }
    if (typeof descriptiveQuestions !== 'undefined' && typeof icaibookData !== 'undefined') {
        selectedDescriptive = generateRandomPaper();
    }
    generateExamData(); 
    renderBookPages();  
    window.addEventListener('resize', debounce(() => { renderBookPages(); }, 300));
});

function generateExamData() {
    rawExamElements = []; 
    const examDate = getCurrentExamDate();

    rawExamElements.push(`
        <div class="watermark">CAM2</div>
        <div class="header-center">FINAL EXAM<br>PAPER - 2<br>${examDate}<br>ADVANCED FINANCIAL MANAGEMENT</div>
        <div style="text-align: right; font-weight: bold; margin: 10px 0;">Maximum Marks - 100</div>
        <div class="header-center" style="margin-top: 10px; text-decoration: underline;">GENERAL INSTRUCTIONS</div>
        <ul class="instructions">
            <li>Part I: Objective Type Questions (30 Marks).</li>
            <li>Part II: Descriptive Answers (70 Marks). Question 1 is compulsory.</li>
            <li>Duration of the examination is 3 hours.</li>
        </ul>
    `);

    if (selectedMCQs.length > 0) {
        selectedMCQs.forEach((block, bIdx) => {
            rawExamElements.push(`<h3 class="no-split" style="color:#2563eb; border-bottom:1px solid #ccc; padding-bottom:5px; margin-top:15px; display:block;">Case Study ${bIdx + 1}</h3>`);
            rawExamElements = rawExamElements.concat(splitHtmlIntoElements(sanitizeInsertedMathHtml(block.caseText)));
            block.questions.forEach((q, qIdx) => {
                rawExamElements.push(`<div class="mcq-item no-split" data-qid="${q.question_id}" style="height:14px; display:block;"></div>`);
                splitPlainTextForPagination(sanitizeInsertedMathHtml(q.question)).forEach((chunk, chunkIdx) => {
                    const label = chunkIdx === 0 ? `<strong>Q${qIdx+1}:</strong> ` : "";
                    rawExamElements.push(`<span class="mcq-question-text" data-qid="${q.question_id}" style="display:inline; line-height:1.5; font-size:calc(15px * var(--font-scale));">${label}${chunk} </span>`);
                });
                rawExamElements.push(`<div style="display:block; height:8px; width:100%;"></div>`);
                q.options.forEach((opt, i) => {
                    const isCorrect = examCompleted && (i === q.answer) ? "correct-ans" : "";
                    const optionHtml = `<div class="mcq-option no-split ${isCorrect}" data-qid="${q.question_id}" onclick="selectOption(this)" id="q-${bIdx}-${qIdx}-${i}">${sanitizeInsertedMathHtml(opt)}</div>`;
                    rawExamElements.push(optionHtml);
                });
                if (examCompleted) {
                    rawExamElements.push(`<div class="solution-box no-split" style="margin-bottom:15px; display:block;">Correct Answer: ${sanitizeInsertedMathHtml(q.options[q.answer])}</div>`);
                }
            });
        });
    }

    if (selectedDescriptive.length > 0) {
        selectedDescriptive.forEach(group => {
            rawExamElements.push(`<h3 class="no-split" style="color:#2563eb; border-bottom:1px solid #ccc; padding-bottom:5px; margin-top:25px; display:block;">Question ${group.placement}</h3>`);
            group.parts.forEach((part, index) => {
                const label = group.parts.length > 1 ? `<strong>(${String.fromCharCode(97 + index)})</strong> ` : "";
                if (!examCompleted) {
                    const marksBadge = `<div class="no-split" style="background-color: #fee2e2; color: #991b1b; border: 1px solid #fca5a5; padding: 4px 8px; border-radius: 4px; font-weight: bold; font-size: 13px; display: inline-block; margin-bottom: 8px;">[ ${part.marks} Marks ]</div>`;
                    const wrappedHtml = `${marksBadge}<br>${label}${part.question_html}`;
                    rawExamElements = rawExamElements.concat(splitHtmlIntoElements(sanitizeInsertedMathHtml(wrappedHtml)));
                } else {
                    const solBadge = `<div class="no-split" style="background-color: #dcfce7; color: #166534; border: 1px solid #4ade80; padding: 4px 8px; border-radius: 4px; font-weight: bold; font-size: 13px; display: inline-block; margin-bottom: 8px; margin-top: 15px;">Solution Q${group.placement} ${label}</div>`;
                    rawExamElements.push(solBadge);
                    rawExamElements = rawExamElements.concat(splitHtmlIntoElements(sanitizeInsertedMathHtml(part.solution_html)));
                }
            });
        });
    }

    rawExamElements.push(`<div class="header-center no-split" style="margin-top: 30%; color: #999; display:block;">[End of Booklet]</div>`);

    if (!examCompleted) {
        rawExamElements.push(`<button id="finish-btn" class="finish-exam-btn no-split" style="display:block;" onclick="revealAnswers()">Finish & Show Solutions</button>`);
    } else {
        rawExamElements.push(`<button id="home-btn" class="finish-exam-btn no-split" style="display:block; background:#0f172a; color:white; margin-top:15px;" onclick="window.location.href='./eafm.html'">Return to Home</button>`);
    }
}

// ==========================================
// 4. THE REACTIVE PAGINATION ENGINE
// ==========================================
function sanitizeInsertedMathHtml(html = "") {
    if (!html || typeof html !== 'string') return html;

    let clean = html
        .replace(/\[cite\s*:\s*\d+\]/gi, '')
        .replace(/`+/g, '')
        .trim();

    // Protect currency patterns so they are not mistaken for math delimiters (without touching $$)
    clean = clean.replace(/\b(US|HK|AU|CAD|SGD|NZ|S)\s*\$(?!\$)/gi, '<span class="no-math">$1$</span>');
    clean = clean.replace(/(\/|\bper\s*)\$(?!\$)/gi, '$1<span class="no-math">$</span>');
    clean = clean.replace(/(?<!\$)\$(\s*\/)/gi, '<span class="no-math">$</span>$1');
    clean = clean.replace(/(?<!\$)\$(\s*[\d,]+(?:\.\d+)?(?!\s*[\\+=_^\-a-zA-Z]))(?!\$)/g, '<span class="no-math">$</span>$1');

    return clean;
}

function renderMathInBook(targetElement) {
    const container = targetElement || document.getElementById("book");
    if (!container || typeof window.renderMathInElement !== 'function') return;

    try {
        window.renderMathInElement(container, {
            delimiters: [
                { left: '$$', right: '$$', display: true },
                { left: '\\[', right: '\\]', display: true },
                { left: '\\(', right: '\\)', display: false },
                { left: '$', right: '$', display: false }
            ],
            ignoredClasses: ["no-math", "mcq-option-code", "katex-ignore"],
            throwOnError: false,
            strict: 'ignore',
            trust: true
        });
    } catch (error) {
        console.warn('KaTeX render failed:', error);
    }
}

function renderBookPages() {
    const bookContainer = document.getElementById("book");
    bookContainer.innerHTML = ""; 
    bookContainer.style.transform = 'translateX(0px) rotateX(5deg)'; 

    const rootStyles = getComputedStyle(document.documentElement);
    const tapeWidth = rootStyles.getPropertyValue('--page-width').trim() || '450px';
    const pageHeight = readCssPx(rootStyles, '--page-height', 636);
    const pagePadding = readCssPx(rootStyles, '--page-padding', 35);
    
    const SAFE_HEIGHT = pageHeight - (pagePadding * 2) - 15; 

    const tape = document.createElement('div');
    tape.className = "front"; 
    tape.style.visibility = "hidden";
    tape.style.position = "absolute";
    tape.style.top = "0"; tape.style.left = "0";
    tape.style.width = tapeWidth; tape.style.height = "auto"; 
    tape.style.padding = `${pagePadding}px`; 
    document.body.appendChild(tape);

    let finalizedPages = [];
    let currentPageHtml = "";

    for (let i = 0; i < rawExamElements.length; i++) {
        let el = rawExamElements[i];
        if (typeof el === 'string') {
            el = sanitizeInsertedMathHtml(el);
        }

        if (typeof el === 'object' && el !== null && el.type === 'splittable-table') {
            const tableAttrs = el.attrs || '';
            const headerHtml = el.headerHtml || '';
            const rows = el.rows || [];

            if (rows.length === 0) continue;

            const buildTableHtml = (rowList, isContd) => {
                const contdBadge = isContd
                    ? `<div class="table-continued-badge">(Table continued from previous page)</div>`
                    : ``;
                const thead = headerHtml ? `<thead>${headerHtml}</thead>` : ``;
                return `<div class="table-wrapper">${contdBadge}<table ${tableAttrs}>${thead}<tbody>${rowList.join('')}</tbody></table></div>`;
            };

            let isContd = false;
            let currentTableRows = [];

            if (currentPageHtml.trim() !== "") {
                const minTestRows = rows.slice(0, Math.min(2, rows.length));
                tape.innerHTML = currentPageHtml + buildTableHtml(minTestRows, false);
                if (tape.scrollHeight > SAFE_HEIGHT) {
                    finalizedPages.push(currentPageHtml);
                    currentPageHtml = "";
                }
            }

            for (let rIdx = 0; rIdx < rows.length; rIdx++) {
                const row = rows[rIdx];
                const testRows = [...currentTableRows, row];
                const testHtml = currentPageHtml + buildTableHtml(testRows, isContd);

                tape.innerHTML = testHtml;

                if (tape.scrollHeight > SAFE_HEIGHT && currentTableRows.length > 0) {
                    currentPageHtml += buildTableHtml(currentTableRows, isContd);
                    finalizedPages.push(currentPageHtml);
                    currentPageHtml = "";
                    isContd = true;
                    currentTableRows = [row];
                } else {
                    currentTableRows.push(row);
                }
            }

            if (currentTableRows.length > 0) {
                currentPageHtml += buildTableHtml(currentTableRows, isContd);
            }
            continue;
        }

        tape.innerHTML = currentPageHtml + el;

        if (typeof window.renderMathInElement === 'function' && typeof el === 'string' && (el.includes('$$') || el.includes('$') || el.includes('\\('))) {
            renderMathInBook(tape);
        }

        if (tape.scrollHeight > SAFE_HEIGHT && currentPageHtml !== "") {
            finalizedPages.push(currentPageHtml); 
            currentPageHtml = el; 
            tape.innerHTML = el;
            if (typeof window.renderMathInElement === 'function' && typeof el === 'string' && (el.includes('$$') || el.includes('$') || el.includes('\\('))) {
                renderMathInBook(tape);
            }
        } else {
            currentPageHtml += el; 
        }
    }
    if (currentPageHtml !== "") finalizedPages.push(currentPageHtml);
    document.body.removeChild(tape); 

    let pageCount = 1;
    for (let i = 0; i < finalizedPages.length; i += 2) {
        const frontContent = finalizedPages[i];
        const backContent = finalizedPages[i+1] || `<div class="header-center" style="margin-top: 50%; color: #999;">[Blank Page]</div>`;
        
        const pageDiv = document.createElement("div");
        pageDiv.className = "page";
        pageDiv.innerHTML = `
            <div class="front"><div class="page-num">(${pageCount})</div>${frontContent}</div>
            <div class="back"><div class="page-num">(${pageCount + 1})</div><div class="watermark" style="left:20px; right:auto;">CAM2</div>${backContent}</div>
        `;
        bookContainer.appendChild(pageDiv);
        pageCount += 2;
    }
    renderMathInBook(bookContainer);

    selectedOptions.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.style.borderColor = '#2563eb';
            if (examCompleted && !el.classList.contains('correct-ans')) {
                el.style.backgroundColor = '#fee2e2';
                el.style.borderColor = '#ef4444';
            }
        }
    });

    initBookPhysics();
}

// ==========================================
// 5. EXAM LOGIC & TIMER
// ==========================================
let timerInterval;

function selectOption(el) {
    if (examCompleted) return; 
    const qid = el.dataset.qid;
    const options = qid 
        ? Array.from(document.querySelectorAll('.mcq-option')).filter(opt => opt.dataset.qid === qid)
        : Array.from(el.parentElement.querySelectorAll('.mcq-option'));

    options.forEach(opt => {
        opt.style.borderColor = '#cbd5e1';
        selectedOptions.delete(opt.id); 
    });
    el.style.borderColor = '#2563eb';
    selectedOptions.add(el.id); 
}

function revealAnswers() {
    examCompleted = true;
    clearInterval(timerInterval);
    const timerDiv = document.getElementById("exam-timer");
    if (timerDiv) {
        timerDiv.innerText = "SUBMITTED";
        timerDiv.classList.remove("timer-warning");
    }
    const homeBtn = document.getElementById("home-btn");
    if (homeBtn) homeBtn.style.display = "block";
    
    generateExamData(); 
    renderBookPages(); 
    
    document.querySelectorAll('.page.flipped').forEach(page => {
        page.style.transform = `rotateY(0deg)`;
        page.classList.remove('flipped');
    });
    updateBookPosition(); 
    setTimeout(() => resetZIndexes(), 600);
}

function startExamTimer() {
    if (document.getElementById("exam-timer")) return; 
    
    const timerDiv = document.createElement("div");
    timerDiv.id = "exam-timer";
    timerDiv.className = "timer-container";
    timerDiv.innerText = "03:15:00";
    document.body.appendChild(timerDiv);

    let totalSeconds = (3 * 60 * 60) + (15 * 60); 

    timerInterval = setInterval(() => {
        totalSeconds--;
        let h = Math.floor(totalSeconds / 3600);
        let m = Math.floor((totalSeconds % 3600) / 60);
        let s = totalSeconds % 60;

        timerDiv.innerText = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        if (totalSeconds <= 300) { timerDiv.classList.add("timer-warning"); }

        if (totalSeconds <= 0) {
            clearInterval(timerInterval);
            timerDiv.innerText = "TIME UP";
            alert("Time is up! Automatically submitting your paper.");
            revealAnswers(); 
        }
    }, 1000);
}

// ==========================================
// 6. 3D BOOK PHYSICS ENGINE & BALANCER
// ==========================================
let pages = [];
let isDragging = false, activePage = null, currentAngle = 0;

function resetZIndexes() {
    pages.forEach((page, i) => {
        if (page.classList.contains('flipped')) { page.style.zIndex = i + 1; } 
        else { page.style.zIndex = pages.length - i; }
    });
}

function updateBookPosition() {
    const book = document.getElementById('book');
    const flippedCount = document.querySelectorAll('.page.flipped').length;
    const shift = getComputedStyle(document.documentElement).getPropertyValue('--book-shift').trim() || '225px';
    
    if (flippedCount === 0) {
        book.style.transform = 'translateX(0px) rotateX(5deg)';
    } else {
        book.style.transform = `translateX(${shift}) rotateX(5deg)`;
    }
}

function isScrollbarHit(e) {
    let el = e.target;
    while (el && el !== document.body && el !== document.documentElement) {
        const rect = el.getBoundingClientRect();
        const style = window.getComputedStyle(el);
        
        // Vertical scrollbar check: present when scrollHeight > clientHeight
        if (el.scrollHeight > el.clientHeight + 1 && (style.overflowY === 'auto' || style.overflowY === 'scroll')) {
            if (e.clientX >= rect.right - 24 && e.clientX <= rect.right + 4) {
                return true;
            }
        }
        
        // Horizontal scrollbar check: present when scrollWidth > clientWidth
        if (el.scrollWidth > el.clientWidth + 1 && (style.overflowX === 'auto' || style.overflowX === 'scroll')) {
            if (e.clientY >= rect.bottom - 22 && e.clientY <= rect.bottom + 4) {
                return true;
            }
        }
        el = el.parentElement;
    }
    return false;
}

function initBookPhysics() {
    const book = document.getElementById('book');
    pages = Array.from(document.querySelectorAll('.page'));
    resetZIndexes();

    if (physicsBound) return; 
    physicsBound = true;

    startExamTimer();

    let isPointerDown = false;
    let startX = 0, startY = 0;
    let dragCandidatePage = null;

    document.addEventListener('pointerdown', (e) => {
        if (!e.target.closest('.book')) return;
        if (e.target.closest('button, .mcq-option, a, input, select, .table-wrapper, .katex-display, .math-block, table')) return;
        if (isScrollbarHit(e)) return;

        const spineX = book.getBoundingClientRect().left;

        if (e.clientX > spineX) {
            dragCandidatePage = pages.find(p => !p.classList.contains('flipped'));
            currentAngle = 0;
        } else {
            const flippedPages = pages.filter(p => p.classList.contains('flipped'));
            dragCandidatePage = flippedPages[flippedPages.length - 1];
            currentAngle = -180;
        }

        if (!dragCandidatePage) return;

        isPointerDown = true;
        isDragging = false;
        startX = e.clientX;
        startY = e.clientY;
    });

    document.addEventListener('pointermove', (e) => {
        if (!isPointerDown || !dragCandidatePage) return;

        const deltaX = e.clientX - startX;
        const deltaY = e.clientY - startY;

        if (!isDragging) {
            // If movement is predominantly vertical, user is trying to scroll! Cancel flip gesture
            if (Math.abs(deltaY) > 8 && Math.abs(deltaY) >= Math.abs(deltaX)) {
                isPointerDown = false;
                dragCandidatePage = null;
                return;
            }

            // Only engage 3D page flip if horizontal swipe exceeds threshold and is clearly horizontal
            if (Math.abs(deltaX) > 12 && Math.abs(deltaX) > Math.abs(deltaY)) {
                isDragging = true;
                activePage = dragCandidatePage;
                activePage.style.transition = 'none';
                activePage.style.zIndex = pages.length + 5;
            } else {
                return;
            }
        }

        const pageWidth = book.getBoundingClientRect().width;
        let angle = ((e.clientX - book.getBoundingClientRect().left) / pageWidth) * 90 - 90;
        angle = Math.max(-180, Math.min(0, angle));
        activePage.style.transform = `rotateY(${angle}deg)`;
        currentAngle = angle;
    });

    document.addEventListener('pointerup', () => {
        if (!isPointerDown) return;
        isPointerDown = false;

        if (isDragging && activePage) {
            isDragging = false;
            activePage.style.transition = 'transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)';
            
            if (currentAngle < -90) { 
                activePage.style.transform = `rotateY(-180deg)`; 
                activePage.classList.add('flipped'); 
            } else { 
                activePage.style.transform = `rotateY(0deg)`; 
                activePage.classList.remove('flipped'); 
            }

            updateBookPosition(); 
            const targetPage = activePage;
            setTimeout(() => { targetPage.style.transform = ''; resetZIndexes(); }, 600);
            activePage = null;
        }

        dragCandidatePage = null;
    });

    document.addEventListener('pointercancel', () => {
        if (isDragging && activePage) {
            activePage.style.transition = 'transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)';
            if (currentAngle < -90) {
                activePage.style.transform = `rotateY(-180deg)`;
                activePage.classList.add('flipped');
            } else {
                activePage.style.transform = `rotateY(0deg)`;
                activePage.classList.remove('flipped');
            }
            updateBookPosition();
            const targetPage = activePage;
            setTimeout(() => { targetPage.style.transform = ''; resetZIndexes(); }, 600);
        }
        isPointerDown = false;
        isDragging = false;
        activePage = null;
        dragCandidatePage = null;
    });

    const nextBtn = document.getElementById('next-btn');
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const unflippedPages = pages.filter(p => !p.classList.contains('flipped'));
            if (unflippedPages.length === 0) return;
            const p = unflippedPages[0];
            p.style.transition = 'transform 0.6s'; p.style.zIndex = pages.length + 5;
            p.style.transform = `rotateY(-180deg)`; p.classList.add('flipped');
            updateBookPosition(); 
            setTimeout(() => { p.style.transform = ''; resetZIndexes(); }, 600);
        });
    }

    const prevBtn = document.getElementById('prev-btn');
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            const flippedPages = pages.filter(p => p.classList.contains('flipped'));
            if (flippedPages.length === 0) return;
            const p = flippedPages[flippedPages.length - 1];
            p.style.transition = 'transform 0.6s'; p.style.zIndex = pages.length + 5;
            p.style.transform = `rotateY(0deg)`; p.classList.remove('flipped');
            updateBookPosition();
            setTimeout(() => { p.style.transform = ''; resetZIndexes(); }, 600);
        });
    }

    // Keyboard shortcuts: Left/Right arrows and PageUp/PageDown flip pages
    window.addEventListener('keydown', (e) => {
        if (e.target.closest('input, textarea, select')) return;
        if (e.key === 'ArrowRight' || e.key === 'PageDown') {
            const nextBtn = document.getElementById('next-btn');
            if (nextBtn) nextBtn.click();
        } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
            const prevBtn = document.getElementById('prev-btn');
            if (prevBtn) prevBtn.click();
        }
    });
}

// Window load and fallback retry listeners for KaTeX rendering
window.addEventListener('load', () => {
    renderMathInBook();
});

if (typeof window.renderMathInElement !== 'function') {
    const katexReadyTimer = setInterval(() => {
        if (typeof window.renderMathInElement === 'function') {
            clearInterval(katexReadyTimer);
            renderMathInBook();
        }
    }, 150);
    setTimeout(() => clearInterval(katexReadyTimer), 6000);
}