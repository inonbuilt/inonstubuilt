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
        if (typeof sessionStorage !== 'undefined') {
            const raw = sessionStorage.getItem(key);
            return raw ? new Set(JSON.parse(raw)) : new Set();
        }
    } catch (e) {}
    return new Set();
}

function saveSessionSeenSet(key, setObj) {
    try {
        if (typeof sessionStorage !== 'undefined') {
            sessionStorage.setItem(key, JSON.stringify(Array.from(setObj)));
        }
    } catch (e) {}
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

function pad2(num) {
    return Number(num) < 10 ? '0' + Number(num) : String(num);
}

function getCurrentExamDate() {
    const today = new Date();
    const day = pad2(today.getDate());
    const month = pad2(today.getMonth() + 1);
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
                if (isBlock) {
                    const spacerHeight = node.classList.contains('case-bullet') ? '4px' : '10px';
                    elements.push(`<div style="display:block; height:${spacerHeight}; width:100%;"></div>`);
                }
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
    for (let i = 0; i < chapters.length; i++) {
        let ch = chapters[i];
        let keys = Object.keys(ICAI_WEIGHTS);
        for (let j = 0; j < keys.length; j++) {
            let key = keys[j];
            let val = ICAI_WEIGHTS[key];
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

function sampleDifficulty(easyPct = 34, medPct = 33, hardPct = 33) {
    let rand = Math.random() * 100;
    if (rand < hardPct) return 'hard';
    if (rand < hardPct + medPct) return 'medium';
    return 'easy';
}

function getExamDistribution() {
    let aiPct = 50;
    let diffEasy = 34;
    let diffMed = 33;
    let diffHard = 33;

    try {
        let aiParam = null;
        let easyParam = null;
        let medParam = null;
        let hardParam = null;

        if (typeof URLSearchParams !== 'undefined') {
            const urlParams = new URLSearchParams(window.location.search);
            if (urlParams.has('ai_pct')) aiParam = urlParams.get('ai_pct');
            if (urlParams.has('diff_easy')) easyParam = urlParams.get('diff_easy');
            if (urlParams.has('diff_med')) medParam = urlParams.get('diff_med');
            if (urlParams.has('diff_hard')) hardParam = urlParams.get('diff_hard');
            if (urlParams.has('difficulty')) {
                const diffMode = (urlParams.get('difficulty') || '').toLowerCase();
                if (diffMode === 'easy') { easyParam = '100'; medParam = '0'; hardParam = '0'; }
                else if (diffMode === 'medium') { easyParam = '0'; medParam = '100'; hardParam = '0'; }
                else if (diffMode === 'hard') { easyParam = '0'; medParam = '0'; hardParam = '100'; }
            }
        }
        if (aiParam === null && window.location && window.location.search) {
            const match = window.location.search.match(/[?&]ai_pct=([^&]*)/);
            if (match) aiParam = decodeURIComponent(match[1]);
        }
        if (medParam === null && window.location && window.location.search) {
            const match = window.location.search.match(/[?&]diff_med=([^&]*)/);
            if (match) medParam = decodeURIComponent(match[1]);
        }
        if (hardParam === null && window.location && window.location.search) {
            const match = window.location.search.match(/[?&]diff_hard=([^&]*)/);
            if (match) hardParam = decodeURIComponent(match[1]);
        }
        if (easyParam === null && window.location && window.location.search) {
            const match = window.location.search.match(/[?&]diff_easy=([^&]*)/);
            if (match) easyParam = decodeURIComponent(match[1]);
        }

        if (aiParam !== null) {
            aiPct = parseInt(aiParam, 10);
        } else {
            const saved = localStorage.getItem('afm_exam_ai_pct');
            if (saved !== null) aiPct = parseInt(saved, 10);
        }

        if (medParam !== null) {
            diffMed = parseInt(medParam, 10);
        } else {
            const savedMed = localStorage.getItem('afm_diff_med');
            if (savedMed !== null) diffMed = parseInt(savedMed, 10);
        }

        if (hardParam !== null) {
            diffHard = parseInt(hardParam, 10);
        } else {
            const savedHard = localStorage.getItem('afm_diff_hard');
            if (savedHard !== null) diffHard = parseInt(savedHard, 10);
        }

        if (easyParam !== null) {
            diffEasy = parseInt(easyParam, 10);
        } else {
            const savedEasy = localStorage.getItem('afm_diff_easy');
            if (savedEasy !== null) diffEasy = parseInt(savedEasy, 10);
            else diffEasy = 100 - (diffMed + diffHard);
        }
    } catch (e) {
        aiPct = 50;
        diffEasy = 34;
        diffMed = 33;
        diffHard = 33;
    }

    if (isNaN(aiPct) || aiPct < 0) aiPct = 0;
    if (aiPct > 100) aiPct = 100;

    if (isNaN(diffMed) || diffMed < 0) diffMed = 0;
    if (isNaN(diffHard) || diffHard < 0) diffHard = 0;
    if (diffMed + diffHard > 100) {
        let total = diffMed + diffHard;
        diffMed = Math.round((diffMed / total) * 100);
        diffHard = 100 - diffMed;
    }
    diffEasy = Math.max(0, 100 - diffMed - diffHard);

    return {
        aiPct: aiPct,
        qbPct: 100 - aiPct,
        diffEasy: diffEasy,
        diffMed: diffMed,
        diffHard: diffHard
    };
}

let currentExamDistribution = { aiPct: 50, qbPct: 50, diffEasy: 34, diffMed: 33, diffHard: 33 };

const AFM_CHAPTER_METADATA = [
    { num: 1, name: "Financial Policy and Corporate Strategy", section: 1, theoryTier: 1, weight: 6 },
    { num: 2, name: "Risk Management", section: 1, theoryTier: 1, weight: 4 },
    { num: 3, name: "Advanced Capital Budgeting Decisions", section: 1, theoryTier: 2, weight: 8 },
    { num: 4, name: "Security Analysis", section: 2, theoryTier: 2, weight: 6 },
    { num: 5, name: "Security Valuation", section: 2, theoryTier: 3, weight: 10 },
    { num: 6, name: "Portfolio Management", section: 2, theoryTier: 3, weight: 12 },
    { num: 7, name: "Securitization", section: 3, theoryTier: 1, weight: 6 },
    { num: 8, name: "Mutual Funds", section: 3, theoryTier: 3, weight: 8 },
    { num: 9, name: "Derivatives Analysis and Valuation", section: 3, theoryTier: 3, weight: 12 },
    { num: 10, name: "Foreign Exchange Exposure and Risk Management", section: 4, theoryTier: 3, weight: 14 },
    { num: 11, name: "International Financial Management", section: 4, theoryTier: 2, weight: 6 },
    { num: 12, name: "Interest Rate Risk Management", section: 4, theoryTier: 2, weight: 6 },
    { num: 13, name: "Business Valuation", section: 5, theoryTier: 3, weight: 6 },
    { num: 14, name: "Mergers, Acquisitions and Corporate Restructuring", section: 5, theoryTier: 2, weight: 8 },
    { num: 15, name: "Startup Finance", section: 6, theoryTier: 1, weight: 4 }
];

function identifyAfmChapter(q) {
    if (!q) return AFM_CHAPTER_METADATA[0];
    const text = ((q.chapter_name || "") + " " + (q.chapter || "") + " " + (q.question_id || "") + " " + (q.question_html || "").substring(0, 300)).toLowerCase();
    if (/startup|venture capital|angel investor|pitch deck|unicorn|fintech/i.test(text)) return AFM_CHAPTER_METADATA[14];
    if (/merger|acquisition|corporate restructuring|takeover|swap ratio|demerger/i.test(text)) return AFM_CHAPTER_METADATA[13];
    if (/business valuation|corporate valuation|fcff|fcfe|economic value added|\beva\b/i.test(text)) return AFM_CHAPTER_METADATA[12];
    if (/interest rate risk|interest rate swap|\bfra\b|forward rate agreement|\bcap\b|\bfloor\b|\bcollar\b/i.test(text)) return AFM_CHAPTER_METADATA[11];
    if (/international financial|international capital|nostro|vostro|\badr\b|\bgdr\b|eurobond/i.test(text)) return AFM_CHAPTER_METADATA[10];
    if (/foreign exchange|forex|cross rate|currency swap|exchange rate/i.test(text)) return AFM_CHAPTER_METADATA[9];
    if (/derivatives analysis|\bderivatives\b|\boptions\b|\bfutures\b|black.scholes|\bgreeks\b|\bcds\b/i.test(text)) return AFM_CHAPTER_METADATA[8];
    if (/mutual fund|\bnav\b|side pocketing|expense ratio/i.test(text)) return AFM_CHAPTER_METADATA[7];
    if (/securiti|tokenization|\bcdo\b|pass.through|tranche/i.test(text)) return AFM_CHAPTER_METADATA[6];
    if (/portfolio|capm|capital asset pricing|tracking error|\bbeta\b|arbitrage pricing|\bapt\b|treynor|sharpe/i.test(text)) return AFM_CHAPTER_METADATA[5];
    if (/security valuation|bond valuation|bond refunding|dividend discount|dividend valuation|convertible|fixed income|sustainable growth/i.test(text)) return AFM_CHAPTER_METADATA[4];
    if (/security analysis|fundamental analysis|technical analysis|economic analysis|moving average|\bema\b|dow theory|elliott wave/i.test(text)) return AFM_CHAPTER_METADATA[3];
    if (/capital budgeting|real options|certainty equivalent|sensitivity analysis/i.test(text)) return AFM_CHAPTER_METADATA[2];
    if (/risk management|value at risk|\bvar\b|credit risk|enterprise risk/i.test(text)) return AFM_CHAPTER_METADATA[1];
    if (/financial policy|corporate strategy|strategic financial/i.test(text)) return AFM_CHAPTER_METADATA[0];
    return AFM_CHAPTER_METADATA[0];
}

function identifyCaseChapter(cs) {
    if (!cs) return AFM_CHAPTER_METADATA[0];
    const chs = (cs.case_chapter || []).join(" ") + " " + (cs.chapter || "") + " " + (cs.caseText || "").substring(0, 300);
    const text = chs.toLowerCase();
    if (/startup|venture capital|angel investor|pitch deck|unicorn|fintech/i.test(text)) return AFM_CHAPTER_METADATA[14];
    if (/merger|acquisition|corporate restructuring|takeover|swap ratio|demerger/i.test(text)) return AFM_CHAPTER_METADATA[13];
    if (/business valuation|corporate valuation|fcff|fcfe|economic value added|\beva\b/i.test(text)) return AFM_CHAPTER_METADATA[12];
    if (/interest rate risk|interest rate swap|\bfra\b|forward rate agreement|\bcap\b|\bfloor\b|\bcollar\b/i.test(text)) return AFM_CHAPTER_METADATA[11];
    if (/international financial|international capital|nostro|vostro|\badr\b|\bgdr\b|eurobond/i.test(text)) return AFM_CHAPTER_METADATA[10];
    if (/foreign exchange|forex|cross rate|currency swap|exchange rate/i.test(text)) return AFM_CHAPTER_METADATA[9];
    if (/derivatives analysis|\bderivatives\b|\boptions\b|\bfutures\b|black.scholes|\bgreeks\b|\bcds\b/i.test(text)) return AFM_CHAPTER_METADATA[8];
    if (/mutual fund|\bnav\b|side pocketing|expense ratio/i.test(text)) return AFM_CHAPTER_METADATA[7];
    if (/securiti|tokenization|\bcdo\b|pass.through|tranche/i.test(text)) return AFM_CHAPTER_METADATA[6];
    if (/portfolio|capm|capital asset pricing|tracking error|\bbeta\b|arbitrage pricing|\bapt\b|treynor|sharpe/i.test(text)) return AFM_CHAPTER_METADATA[5];
    if (/security valuation|bond valuation|bond refunding|dividend discount|dividend valuation|convertible|fixed income|sustainable growth/i.test(text)) return AFM_CHAPTER_METADATA[4];
    if (/security analysis|fundamental analysis|technical analysis|economic analysis|moving average|\bema\b|dow theory|elliott wave/i.test(text)) return AFM_CHAPTER_METADATA[3];
    if (/capital budgeting|real options|certainty equivalent|sensitivity analysis/i.test(text)) return AFM_CHAPTER_METADATA[2];
    if (/risk management|value at risk|\bvar\b|credit risk|enterprise risk/i.test(text)) return AFM_CHAPTER_METADATA[1];
    if (/financial policy|corporate strategy|strategic financial/i.test(text)) return AFM_CHAPTER_METADATA[0];
    return AFM_CHAPTER_METADATA[0];
}

function pickSessionMCQs(qbPool, aiPool, count = 3, aiPct = 50, diffDist = { diffEasy: 34, diffMed: 33, diffHard: 33 }) {
    if (!Array.isArray(qbPool)) qbPool = [];
    if (!Array.isArray(aiPool)) aiPool = [];

    let seenMcqs = getSessionSeenSet(SESSION_MCQ_KEY);
    let chosen = [];
    let currentPaperSigs = new Set();
    let chosenSections = new Set();

    let targetAiCases = 0;
    if (aiPct === 100) {
        targetAiCases = count;
    } else if (aiPct === 0) {
        targetAiCases = 0;
    } else if (aiPct >= 67) {
        targetAiCases = 2;
    } else if (aiPct <= 33) {
        targetAiCases = 1;
    } else {
        targetAiCases = (Math.random() * 100 < aiPct) ? 2 : 1;
    }
    let targetQbCases = count - targetAiCases;

    function pickFromPool(sourcePool, n, sourceLabel, dist) {
        if (!Array.isArray(sourcePool) || sourcePool.length === 0 || n <= 0) return [];
        let taggedPool = sourcePool.map(cs => Object.assign({}, cs, { _sourceBank: sourceLabel, _meta: identifyCaseChapter(cs) }));
        let unseen = shuffleArray(taggedPool.filter(cs => !isItemSeen(cs, seenMcqs)));
        let picked = [];

        for (let k = 0; k < n; k++) {
            let targetDiff = (sourceLabel === 'AI Bank' && dist)
                ? sampleDifficulty(dist.diffEasy, dist.diffMed, dist.diffHard)
                : null;

            // Prioritize picking a case from an unrepresented ICAI section to ensure broad syllabus coverage
            let candidate = null;
            if (targetDiff) {
                candidate = unseen.find(cs => {
                    let d = (cs.difficulty || cs.diffuculty || '').toLowerCase();
                    let sec = cs._meta ? cs._meta.section : 1;
                    return d === targetDiff && !currentPaperSigs.has(getItemSignature(cs)) && !chosenSections.has(sec);
                });
                if (!candidate) {
                    candidate = unseen.find(cs => {
                        let d = (cs.difficulty || cs.diffuculty || '').toLowerCase();
                        return d === targetDiff && !currentPaperSigs.has(getItemSignature(cs));
                    });
                }
            }
            if (!candidate) {
                candidate = unseen.find(cs => {
                    let sec = cs._meta ? cs._meta.section : 1;
                    return !currentPaperSigs.has(getItemSignature(cs)) && !chosenSections.has(sec);
                });
            }
            if (!candidate) {
                candidate = unseen.find(cs => !currentPaperSigs.has(getItemSignature(cs)));
            }
            if (candidate) {
                picked.push(candidate);
                currentPaperSigs.add(getItemSignature(candidate));
                if (candidate._meta) chosenSections.add(candidate._meta.section);
                unseen = unseen.filter(cs => cs !== candidate);
            }
        }

        if (picked.length < n) {
            let fallback = shuffleArray(taggedPool);
            for (let i = 0; i < fallback.length; i++) {
                let cs = fallback[i];
                if (picked.length >= n) break;
                let sig = getItemSignature(cs);
                if (!currentPaperSigs.has(sig)) {
                    picked.push(cs);
                    currentPaperSigs.add(sig);
                    if (cs._meta) chosenSections.add(cs._meta.section);
                }
            }
        }
        return picked;
    }

    let pickedAi = pickFromPool(aiPool, targetAiCases, 'AI Bank', diffDist);
    let pickedQb = pickFromPool(qbPool, targetQbCases, 'Question Bank', null);

    chosen = shuffleArray(pickedAi.concat(pickedQb));

    if (chosen.length < count) {
        let combined = qbPool.map(cs => Object.assign({}, cs, { _sourceBank: 'Question Bank', _meta: identifyCaseChapter(cs) }))
            .concat(aiPool.map(cs => Object.assign({}, cs, { _sourceBank: 'AI Bank', _meta: identifyCaseChapter(cs) })));
        let fallback = shuffleArray(combined);
        for (let i = 0; i < fallback.length; i++) {
            let cs = fallback[i];
            if (chosen.length >= count) break;
            let sig = getItemSignature(cs);
            if (!currentPaperSigs.has(sig)) {
                chosen.push(cs);
                currentPaperSigs.add(sig);
            }
        }
    }

    chosen.forEach(cs => markItemSeen(cs, seenMcqs));
    saveSessionSeenSet(SESSION_MCQ_KEY, seenMcqs);
    return chosen;
}

// Helper to determine if a question is theoretical
function isTheoryQuestion(q) {
    if (!q) return false;
    if (q.question_type) {
        return String(q.question_type).toLowerCase() === 'theory';
    }
    return false;
}

// ==========================================
// 2. DYNAMIC EXAM PAPER GENERATOR (ICAI SECTION WEIGHTS & THEORY CONCENTRATION)
// ==========================================
function generateRandomPaper(aiPct = 50, diffDist = { diffEasy: 34, diffMed: 33, diffHard: 33 }) {
    const TOTAL_DESCRIPTIVE_MARKS = 84; 
    const MAX_THEORY_MARKS = 18; // Maximum theory in descriptive paper is 18 marks (ICAI standard)
    const MIN_THEORY_MARKS = 10; // Minimum theory marks in descriptive paper
    const targetAiMarks = Math.round(TOTAL_DESCRIPTIVE_MARKS * (aiPct / 100));
    const MARK_PATTERNS_NORMAL = [[8, 6], [6, 8], [10, 4], [4, 10], [6, 4, 4], [4, 6, 4], [4, 4, 6], [8, 4, 2], [6, 6, 2]];
    const MARK_PATTERNS_Q1 = [[8, 6], [10, 4], [7, 7], [6, 8]];
    const MARK_PATTERNS_Q6 = [[6, 4, 4], [8, 6], [8, 4, 2], [6, 8]];

    // Official ICAI Section Weight Limits across the 84-mark Descriptive Paper:
    // Section I (Ch 1, 2, 3): 8% - 15% (Target 8 to 16 marks)
    // Section II (Ch 4, 5, 6): 20% - 30% (Target 14 to 28 marks)
    // Section III (Ch 7, 8, 9): 20% - 30% (Target 14 to 28 marks)
    // Section IV (Ch 10, 11, 12): 20% - 25% (Target 14 to 26 marks)
    // Section V (Ch 13, 14): 10% - 15% (Target 8 to 16 marks)
    // Section VI (Ch 15): 2% - 5% (Target 4 to 8 marks)
    const SEC_LIMITS = {
        1: { min: 8, max: 16 },
        2: { min: 14, max: 28 },
        3: { min: 14, max: 28 },
        4: { min: 14, max: 26 },
        5: { min: 8, max: 16 },
        6: { min: 4, max: 8 }
    };

    let seenDesc = getSessionSeenSet(SESSION_DESC_KEY);
    const mtpPool = (typeof descriptiveQuestions !== 'undefined' ? descriptiveQuestions : []).map(q => Object.assign({}, q, { _sourceBank: 'Question Bank', _subSource: 'MTP', _meta: identifyAfmChapter(q) }));
    const icaiPool = (typeof icaibookData !== 'undefined' ? icaibookData : []).map(q => Object.assign({}, q, { _sourceBank: 'Question Bank', _subSource: 'ICAI', _meta: identifyAfmChapter(q) }));
    const aiPool = (typeof pfa1_21_17es !== 'undefined' ? pfa1_21_17es : []).map(q => Object.assign({}, q, { _sourceBank: 'AI Bank', _meta: identifyAfmChapter(q) }));
    const allPool = aiPool.concat(mtpPool).concat(icaiPool);

    for (let attempt = 0; attempt < 400; attempt++) {
        const strictUnseenOnly = attempt < 250;
        let usedIds = new Set();
        let usedSigs = new Set();
        
        let remainingAiMarks = targetAiMarks;
        let remainingTotalMarks = TOTAL_DESCRIPTIVE_MARKS;
        let currentTheoryMarks = 0;
        let secMarks = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
        let questions = [];
        let success = true;

        for (let qNum = 1; qNum <= 6; qNum++) {
            let patterns = (qNum === 1) ? MARK_PATTERNS_Q1 :
                           (qNum === 6) ? MARK_PATTERNS_Q6 :
                           MARK_PATTERNS_NORMAL;
            let pattern = patterns[Math.floor(Math.random() * patterns.length)];
            let chosenParts = [];

            for (let i = 0; i < pattern.length; i++) {
                let mark = pattern[i];
                let pAi = remainingTotalMarks > 0 ? Math.max(0, Math.min(1, remainingAiMarks / remainingTotalMarks)) : 0;
                let preferAi = (aiPct === 100) ? true : (aiPct === 0) ? false : (Math.random() < pAi);

                // Theory budget check:
                // Q1 is strictly practical as per ICAI CA Final AFM pattern
                // Q2-Q5: theory capped at max 6M combined to reserve theory for Q6
                // Q6: theory sub-parts preferred (from Tier 1 dedicated theory chapters)
                let theoryBudgetLeft = MAX_THEORY_MARKS - currentTheoryMarks;
                let allowTheory = (qNum !== 1) && (mark <= theoryBudgetLeft);
                if (qNum >= 2 && qNum <= 5 && currentTheoryMarks >= 6) {
                    allowTheory = false;
                }
                let isQ6TheoryPart = (qNum === 6 && i > 0 && allowTheory);

                function filterPool(pool) {
                    return pool.filter(q => {
                        if (Number(q.marks) !== mark) return false;
                        if (usedIds.has(q.question_id) || usedSigs.has(getItemSignature(q))) return false;
                        let isTh = isTheoryQuestion(q);
                        if (qNum === 1 && isTh) return false;
                        if (!allowTheory && isTh) return false;
                        if (isQ6TheoryPart && !isTh) return false;

                        let sec = (q._meta && q._meta.section) || 1;
                        let maxAllowed = SEC_LIMITS[sec].max + (attempt > 150 ? 8 : 0);
                        if (secMarks[sec] + mark > maxAllowed) return false;
                        return true;
                    });
                }

                let candidates = filterPool(allPool);

                if (candidates.length === 0 && isQ6TheoryPart) {
                    // Relax section limit for Q6 theory
                    candidates = allPool.filter(q => {
                        if (Number(q.marks) !== mark) return false;
                        if (usedIds.has(q.question_id) || usedSigs.has(getItemSignature(q))) return false;
                        return isTheoryQuestion(q);
                    });
                }

                if (candidates.length === 0) {
                    candidates = allPool.filter(q => {
                        if (Number(q.marks) !== mark) return false;
                        if (usedIds.has(q.question_id) || usedSigs.has(getItemSignature(q))) return false;
                        let isTh = isTheoryQuestion(q);
                        if (qNum === 1 && isTh) return false;
                        if (!allowTheory && isTh) return false;
                        return true;
                    });
                }

                if (candidates.length === 0) { success = false; break; }

                // Selection with Theory Concentration:
                let candidate = null;
                let thCands = candidates.filter(q => isTheoryQuestion(q));
                if (isQ6TheoryPart && thCands.length > 0) {
                    // Concentrating theory from dedicated theory chapters (Tier 1: Ch 1, 15, 7, 2)
                    let tier1 = thCands.filter(q => q._meta && q._meta.theoryTier === 1);
                    let tier2 = thCands.filter(q => q._meta && q._meta.theoryTier === 2);
                    let targetPool = (tier1.length > 0) ? tier1 : (tier2.length > 0 ? tier2 : thCands);
                    candidate = targetPool[Math.floor(Math.random() * targetPool.length)];
                } else {
                    let aiMatches = candidates.filter(q => q._sourceBank === 'AI Bank');
                    let qbMatches = candidates.filter(q => q._sourceBank !== 'AI Bank');
                    let poolToUse = (preferAi && aiMatches.length > 0) ? aiMatches : (qbMatches.length > 0 ? qbMatches : candidates);

                    // If a theory question is picked in other questions, still prioritize Tier 1 dedicated theory chapters
                    let tier1Th = poolToUse.filter(q => isTheoryQuestion(q) && q._meta && q._meta.theoryTier === 1);
                    if (tier1Th.length > 0 && Math.random() < 0.7) {
                        candidate = tier1Th[Math.floor(Math.random() * tier1Th.length)];
                    } else if (preferAi && aiMatches.length > 0) {
                        let targetDiff = sampleDifficulty(diffDist.diffEasy, diffDist.diffMed, diffDist.diffHard);
                        let matchedDiff = aiMatches.filter(q => (q.difficulty || q.diffuculty || '').toLowerCase() === targetDiff);
                        candidate = (matchedDiff.length > 0) ? matchedDiff[Math.floor(Math.random() * matchedDiff.length)] : aiMatches[Math.floor(Math.random() * aiMatches.length)];
                    } else {
                        candidate = poolToUse[Math.floor(Math.random() * poolToUse.length)];
                    }
                }

                if (!candidate) { success = false; break; }

                usedIds.add(candidate.question_id);
                usedSigs.add(getItemSignature(candidate));
                if (candidate._meta) {
                    secMarks[candidate._meta.section] = (secMarks[candidate._meta.section] || 0) + mark;
                }
                if (candidate._sourceBank === 'AI Bank') { remainingAiMarks -= mark; }
                remainingTotalMarks -= mark;
                if (isTheoryQuestion(candidate)) {
                    currentTheoryMarks += mark;
                }
                chosenParts.push(candidate);
            }

            if (!success) break;
            questions.push({ placement: qNum, parts: chosenParts });
        }

        if (success && currentTheoryMarks >= MIN_THEORY_MARKS && currentTheoryMarks <= MAX_THEORY_MARKS) {
            let actualAiMarks = targetAiMarks - remainingAiMarks;
            let acceptable = false;
            if (aiPct === 100) acceptable = (actualAiMarks >= 70);
            else if (aiPct === 0) acceptable = (actualAiMarks === 0);
            else acceptable = Math.abs(actualAiMarks - targetAiMarks) <= 10;

            let q1IsPractical = questions[0].parts.every(p => !isTheoryQuestion(p));
            let q6HasTheory = questions[5].parts.some(p => isTheoryQuestion(p));

            if (q1IsPractical && (q6HasTheory || attempt > 250) && (acceptable || attempt > 300)) {
                if (!strictUnseenOnly) { seenDesc.clear(); }
                questions.forEach(group => group.parts.forEach(part => markItemSeen(part, seenDesc)));
                saveSessionSeenSet(SESSION_DESC_KEY, seenDesc);
                return questions;
            }
        }
    }

    seenDesc.clear();
    let fallbackQuestions = [];
    let fallbackUsedSigs = new Set();
    let fallbackTheoryMarks = 0;
    for (let qNum = 1; qNum <= 6; qNum++) {
        let parts = [];
        let preferAi = (aiPct >= 50);
        let cand = null;
        let isQ1 = (qNum === 1);
        if (preferAi && aiPool.length > 0) {
            let match = aiPool.filter(q => Number(q.marks) >= 6 && Number(q.marks) <= 10 && !fallbackUsedSigs.has(getItemSignature(q)) && (!isQ1 || !isTheoryQuestion(q)) && (fallbackTheoryMarks + Number(q.marks) <= MAX_THEORY_MARKS || !isTheoryQuestion(q)));
            if (match.length > 0) cand = match[Math.floor(Math.random() * match.length)];
        }
        if (!cand) {
            let mtpAvailable = mtpPool.filter(q => getMtpPlacement(q) === qNum && !fallbackUsedSigs.has(getItemSignature(q)) && (!isQ1 || !isTheoryQuestion(q)) && (fallbackTheoryMarks + Number(q.marks) <= MAX_THEORY_MARKS || !isTheoryQuestion(q)));
            if (mtpAvailable.length > 0) cand = mtpAvailable[Math.floor(Math.random() * mtpAvailable.length)];
        }
        if (!cand && icaiPool.length > 0) {
            let icaiAvail = icaiPool.filter(q => !fallbackUsedSigs.has(getItemSignature(q)) && (!isQ1 || !isTheoryQuestion(q)) && (fallbackTheoryMarks + Number(q.marks) <= MAX_THEORY_MARKS || !isTheoryQuestion(q)));
            if (icaiAvail.length > 0) cand = icaiAvail[Math.floor(Math.random() * icaiAvail.length)];
        }
        if (cand) {
            parts.push(cand);
            fallbackUsedSigs.add(getItemSignature(cand));
            if (isTheoryQuestion(cand)) fallbackTheoryMarks += Number(cand.marks) || 0;
            let remaining = 14 - (Number(cand.marks) || 0);
            let secondMatch = icaiPool.concat(aiPool).filter(q => Number(q.marks) === remaining && !fallbackUsedSigs.has(getItemSignature(q)) && (!isQ1 || !isTheoryQuestion(q)) && (fallbackTheoryMarks + remaining <= MAX_THEORY_MARKS || !isTheoryQuestion(q)));
            if (secondMatch.length > 0) {
                let secondQ = secondMatch[Math.floor(Math.random() * secondMatch.length)];
                parts.push(secondQ);
                fallbackUsedSigs.add(getItemSignature(secondQ));
                if (isTheoryQuestion(secondQ)) fallbackTheoryMarks += remaining;
            }
        }
        fallbackQuestions.push({ placement: qNum, parts: parts });
    }
    fallbackQuestions.forEach(group => group.parts.forEach(part => markItemSeen(part, seenDesc)));
    saveSessionSeenSet(SESSION_DESC_KEY, seenDesc);
    return fallbackQuestions;
}

// ==========================================
// 3. INITIALIZATION & DATA RENDERING
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    currentExamDistribution = getExamDistribution();

    if (typeof mcqData !== 'undefined' || typeof pf1_21_130317 !== 'undefined') {
        const qbCases = (typeof mcqData !== 'undefined' && Array.isArray(mcqData)) ? mcqData : [];
        const aiCases = (typeof pf1_21_130317 !== 'undefined' && Array.isArray(pf1_21_130317)) ? pf1_21_130317 : [];
        selectedMCQs = pickSessionMCQs(qbCases, aiCases, 3, currentExamDistribution.aiPct, currentExamDistribution);
    }
    if (typeof descriptiveQuestions !== 'undefined' || typeof icaibookData !== 'undefined' || typeof pfa1_21_17es !== 'undefined') {
        selectedDescriptive = generateRandomPaper(currentExamDistribution.aiPct, currentExamDistribution);
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
            <li>Duration of the examination is 3 hours (180 Minutes).</li>
            <li>Working notes should form part of the respective answers.</li>
            <li>Appropriate assumptions should be stated clearly, wherever necessary.</li>
        </ul>
    `);

    if (selectedMCQs.length > 0) {
        rawExamElements.push(`
            <div class="header-center section-divider no-split" style="margin: 25px 0 15px 0; font-size: 15px; font-weight: bold; border-top: 2px solid #0f172a; padding-top: 12px; text-transform: uppercase;">
                PART I &ndash; MULTIPLE CHOICE QUESTIONS (30 MARKS)
            </div>
        `);
        selectedMCQs.forEach((block, bIdx) => {
            rawExamElements.push(`<h3 class="no-split" style="color:#0f172a; border-bottom:1.5px solid #0f172a; padding-bottom:4px; margin-top:18px; margin-bottom:10px; font-size:15px; font-weight:bold; display:block; letter-spacing:0.5px;">CASE SCENARIO ${bIdx + 1}</h3>`);
            rawExamElements = rawExamElements.concat(splitHtmlIntoElements(prepareCaseStudyHtml(block.caseText)));
            block.questions.forEach((q, qIdx) => {
                rawExamElements.push(`<div class="mcq-item no-split" data-qid="${q.question_id}" style="height:14px; display:block;"></div>`);
                splitPlainTextForPagination(formatQuestionText(q.question)).forEach((chunk, chunkIdx) => {
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
                    const explHtml = q.explanation ? `<br><span style="font-size:13px; color:#475569; margin-top:6px; display:block; line-height:1.45;"><strong>Explanation:</strong> ${formatExplanationHtml(q.explanation)}</span>` : "";
                    rawExamElements.push(`<div class="solution-box no-split" style="margin-bottom:15px; display:block;"><strong>Correct Answer:</strong> Option ${String.fromCharCode(65 + q.answer)} &ndash; ${sanitizeInsertedMathHtml(q.options[q.answer])}${explHtml}</div>`);
                }
            });
        });
    }

    if (selectedDescriptive.length > 0) {
        rawExamElements.push(`
            <div class="header-center section-divider no-split" style="margin: 30px 0 15px 0; font-size: 15px; font-weight: bold; border-top: 2px solid #0f172a; padding-top: 14px; text-transform: uppercase;">
                PART II &ndash; DESCRIPTIVE QUESTIONS (70 MARKS)<br>
                <span style="font-size: 13px; font-weight: normal; color: #475569;">Question 1 is compulsory. Answer any four from Questions 2 to 6.</span>
            </div>
        `);
        selectedDescriptive.forEach(group => {
            const compLabel = group.placement === 1 ? " (Compulsory)" : "";
            rawExamElements.push(`<h3 class="no-split" style="color:#0f172a; border-bottom:1.5px solid #0f172a; padding-bottom:4px; margin-top:22px; margin-bottom:8px; font-size:15px; font-weight:bold; display:block;">Question ${group.placement}${compLabel}</h3>`);
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

    // Strip any difficulty/topic badge divs and question titles to ensure pure exam content
    clean = clean.replace(/<div style="margin-bottom:\s*8px;">\s*<span[^>]*>[^<]*?(?:DIFFICULTY|Difficulty)[^<]*?<\/span>[\s\S]*?<\/div>\s*/gi, '');
    clean = clean.replace(/<p><strong>Case\s*(?:Scenario|Study|Sinario):[^<]*<\/strong><\/p>\s*/gi, '');

    // 1. Normalize literal \r\n and \n into real newlines
    clean = clean.replace(/\\r\\n|\\n/g, '\n');

    const mathTokens = [];
    function pushToken(m) {
        mathTokens.push(m);
        return `___MATH_TOKEN_${mathTokens.length - 1}___`;
    }

    // 2. Temporarily protect existing properly-delimited display and inline math:
    // $$...$$, \[...\], and \(...\)
    clean = clean.replace(/(\$\$[\s\S]*?\$\$|\\\[[\s\S]*?\\\]|\\\([\s\S]*?\\\))/g, pushToken);

    // 3. Handle escaped LaTeX math: \$...\$
    clean = clean.replace(/\\\$([^\$\n\r]+?)\\\$/g, (match, expr) => {
        let trimmed = expr.trim();
        if (/^\d[\d,]*(?:\.\d+)?(?:\s*(?:Billion|Million|Trillion|Crore|Lakh|lakhs|Lakhs|Cr))?$/i.test(trimmed)) {
            return `<span class="no-math">$</span>${trimmed}`;
        }
        return pushToken(`\\(${trimmed}\\)`);
    });

    // 4. Handle paired inline math: $...$
    clean = clean.replace(/\$([^\$\n\r]+?)\$/g, (match, expr) => {
        let trimmed = expr.trim();
        if (/^\d[\d,]*(?:\.\d+)?(?:\s*(?:Billion|Million|Trillion|Crore|Lakh|lakhs|Lakhs|Cr))?$/i.test(trimmed)) {
            return `<span class="no-math">$</span>${trimmed}`;
        }
        if (/^\d[\d,]*(?:\.\d+)?\s*\/\s*\$?\s*\d[\d,]*(?:\.\d+)?$/.test(trimmed)) {
            return `<span class="no-math">$</span>${trimmed}`;
        }
        return pushToken(`\\(${trimmed}\\)`);
    });

    // 5. Multi-currency slash or range patterns:
    clean = clean.replace(/\\?\$\s*(\d[\d,]*(?:\.\d+)?)\s*\/\s*\\?\$\s*(\d[\d,]*(?:\.\d+)?)/g, '<span class="no-math">$$</span>$1 / <span class="no-math">$$</span>$2');

    // 6. Currency with prefix (US$, CAD$, AUD$, SGD$, HK$, NZ$)
    clean = clean.replace(/\b(US|HK|AU|CAD|SGD|NZ)\s*\\?\$(?!\$)/gi, '<span class="no-math">$1$</span>');
    clean = clean.replace(/\bS\s*\\?\$(?=\s*[\d,])/g, '<span class="no-math">S$</span>');

    // 7. Protect "/ $" or "per $"
    clean = clean.replace(/(\/|\bper\s*)\\?\$(?!\$)/gi, '$1<span class="no-math">$</span>');
    clean = clean.replace(/(?:^|[^\$a-zA-Z0-9_\\])\\?\$\s*(\/)/g, '$1<span class="no-math">$</span>');

    // 8. Protect numeric currency amounts
    clean = clean.replace(/\\?\$\s*(\d[\d,]*(?:\.\d+)?(?:\s*(?:Billion|Million|Trillion|Crore|Lakh|lakhs|Lakhs|Cr|per\s+[a-zA-Z]+|cents|ton|bushel|shares|par|spot))?)/gi, (match, p1) => {
        return `<span class="no-math">$</span>${p1}`;
    });

    // 9. Any remaining standalone \$ or bare $ is just currency symbol
    clean = clean.replace(/\\?\$/g, '<span class="no-math">$</span>');

    // 10. Restore protected math blocks
    clean = clean.replace(/___MATH_TOKEN_(\d+)___/g, (match, idx) => mathTokens[idx]);

    return clean;
}

function prepareCaseStudyHtml(caseText) {
    if (!caseText || typeof caseText !== 'string') return '';
    let text = sanitizeInsertedMathHtml(caseText);

    // Strip any leading Case Scenario / Case Study heading so direct content is rendered
    text = text.replace(/^(?:<p>)?(?:<strong>|<b>)?\s*Case\s*(?:Scenario|Study|Sinario)\s*:[^<\n]*(?:<\/strong>|<\/b>)?(?:<\/p>)?\s*/i, '');

    // If it already contains block HTML tags (<p>, <div>, <table>, <ul>, <ol>, etc.), return as is
    if (/<(?:p|div|table|ul|ol|h[1-6]|blockquote)\b/i.test(text)) {
        return text;
    }

    // Split into paragraphs by double newlines (\n\s*\n+)
    const paragraphs = text.split(/\n\s*\n+/);
    const htmlBlocks = [];

    paragraphs.forEach(para => {
        let trimmed = para.trim();
        if (!trimmed) return;

        let lines = trimmed.split(/\n+/);
        // If multiple lines with bullets or numbered lists
        if (lines.length > 1 && lines.some(l => /^(\s*[•\-\*]|\s*\d+[\.\)])\s+/.test(l))) {
            lines.forEach(line => {
                let lTrim = line.trim();
                if (!lTrim) return;
                if (/^([•\-\*]|\d+[\.\)])\s+/.test(lTrim)) {
                    htmlBlocks.push(`<div class="case-bullet no-split" style="margin: 3px 0 3px 14px; text-indent: -14px; line-height: 1.5; font-size: calc(14px * var(--font-scale));">${lTrim}</div>`);
                } else {
                    htmlBlocks.push(`<div class="case-heading no-split" style="font-weight: 700; margin-top: 10px; margin-bottom: 4px; font-size: calc(14.5px * var(--font-scale)); color: #1e293b;">${lTrim}</div>`);
                }
            });
        } else {
            let pContent = lines.map(l => l.trim()).join('<br>');
            htmlBlocks.push(`<p class="case-p" style="margin-bottom: 8px; line-height: 1.55; font-size: calc(14.5px * var(--font-scale));">${pContent}</p>`);
        }
    });

    return htmlBlocks.join('');
}

function formatQuestionText(qText) {
    if (!qText || typeof qText !== 'string') return '';
    let clean = sanitizeInsertedMathHtml(qText);
    return clean.replace(/\n\s*\n+/g, '<br><br>').replace(/\n+/g, '<br>');
}

function formatExplanationHtml(expl) {
    if (!expl || typeof expl !== 'string') return '';
    let clean = sanitizeInsertedMathHtml(expl);
    return clean.replace(/\n\s*\n+/g, '<br><br>').replace(/\n+/g, '<br>');
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

        timerDiv.innerText = `${pad2(h)}:${pad2(m)}:${pad2(s)}`;
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