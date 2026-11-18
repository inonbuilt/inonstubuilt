// ==========================================
// 1. CHAPTER DEFINITIONS & GLOBAL STATE
// ==========================================
const CHAPTER_DEFS = [
    {
        id: "financial_policy",
        name: "Financial Policy and Corporate Strategy",
        keywords: ["financial policy", "corporate strategy", "strategic financial", "financial markets"],
        fallbackKeywords: ["strategic", "policy", "corporate"]
    },
    {
        id: "risk_management",
        name: "Risk Management",
        keywords: ["risk management", "value at risk", "var", "credit risk"],
        fallbackKeywords: ["risk", "derivatives"]
    },
    {
        id: "capital_budgeting",
        name: "Advanced Capital Budgeting Decisions",
        keywords: ["capital budgeting", "real options", "certainty equivalent", "sensitivity analysis"],
        fallbackKeywords: ["budgeting", "project", "investment decision"]
    },
    {
        id: "security_analysis",
        name: "Security Analysis",
        keywords: ["security analysis", "fundamental analysis", "technical analysis", "economic analysis", "moving average", "ema"],
        fallbackKeywords: ["analysis", "equity", "valuation"]
    },
    {
        id: "security_valuation",
        name: "Security Valuation",
        keywords: ["security valuation", "bond valuation", "bond refunding", "dividend valuation", "dividend discount", "convertible", "fixed income", "sustainable growth"],
        fallbackKeywords: ["valuation", "bond", "share", "equity valuation"]
    },
    {
        id: "portfolio_management",
        name: "Portfolio Management",
        keywords: ["portfolio", "capm", "capital asset pricing", "tracking error", "beta"],
        fallbackKeywords: ["portfolio", "investment", "sharpe", "treynor"]
    },
    {
        id: "securitization",
        name: "Securitization",
        keywords: ["securit", "tokenization", "cdo", "pass through", "tranche"],
        fallbackKeywords: ["securit", "debt", "financial instruments"]
    },
    {
        id: "mutual_funds",
        name: "Mutual Funds",
        keywords: ["mutual fund", "side pocketing", "nav", "open-ended", "close-ended"],
        fallbackKeywords: ["mutual", "fund", "etf"]
    },
    {
        id: "derivatives",
        name: "Derivatives Analysis and Valuation",
        keywords: ["derivatives analysis", "derivatives", "options", "futures", "credit default swaps", "cds", "hedging"],
        fallbackKeywords: ["derivatives", "swap", "option", "future"]
    },
    {
        id: "forex",
        name: "Foreign Exchange Exposure and Risk Management",
        keywords: ["foreign exchange", "forex", "nostro", "currency swap", "cross rate", "fwd rate"],
        fallbackKeywords: ["forex", "exchange rate", "international", "hedging"]
    },
    {
        id: "international_finance",
        name: "International Financial Management",
        keywords: ["international financial", "international capital", "international finance", "adr", "gdr", "euro"],
        fallbackKeywords: ["international", "foreign", "global"]
    },
    {
        id: "interest_rate_risk",
        name: "Interest Rate Risk Management",
        keywords: ["interest rate", "fra", "forward rate agreement", "interest rate swap", "cap", "floor", "collar"],
        fallbackKeywords: ["interest", "swap", "fra", "rate risk"]
    },
    {
        id: "business_valuation",
        name: "Business Valuation",
        keywords: ["business valuation", "corporate valuation", "fcff", "fcfe", "enterprise value", "economic value added", "eva"],
        fallbackKeywords: ["valuation", "merger", "corporate"]
    },
    {
        id: "mergers_acquisitions",
        name: "Mergers, Acquisitions and Corporate Restructuring",
        keywords: ["merger", "acquisition", "corporate restructuring", "takeover", "swap ratio", "demerger"],
        fallbackKeywords: ["merger", "acquisition", "restructuring"]
    },
    {
        id: "startup_finance",
        name: "Startup Finance",
        keywords: ["startup", "unicorn", "fintech", "venture capital", "angel investor", "pitch deck", "bootstrapping"],
        fallbackKeywords: ["startup", "venture", "fintech"]
    }
];

let rawExamElements = [];
let selectedOptions = new Set();
let userAnswersMap = {}; // Maps question_id -> selected option index
let examCompleted = false;
let physicsBound = false;
let selectedMCQs = [];
let selectedDescriptive = [];
let activeChapterDef = null;

const TEXT_CHUNK_LIMIT = 90;
const SESSION_MCQ_KEY = "cn_afm_chap_seen_mcqs";
const SESSION_DESC_KEY = "cn_afm_chap_seen_desc";

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

function shuffleArray(array) {
    let shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = shuffled[i];
        shuffled[i] = shuffled[j];
        shuffled[j] = temp;
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
    return num < 10 ? '0' + num : String(num);
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

function matchesKeywords(text, keywords) {
    if (!text) return false;
    const lower = text.toLowerCase();
    return keywords.some(k => lower.indexOf(k.toLowerCase()) !== -1);
}

function getSelectedChapterDef() {
    let rawParam = '';
    try {
        if (typeof URLSearchParams !== 'undefined') {
            const params = new URLSearchParams(window.location.search);
            rawParam = params.get('chapter') || '';
        }
    } catch (e) {}

    if (!rawParam && typeof window !== 'undefined' && window.location && window.location.search) {
        const match = window.location.search.match(/[?&]chapter=([^&]+)/i);
        if (match) {
            try { rawParam = decodeURIComponent(match[1]); } catch (e) { rawParam = match[1]; }
        }
    }
    if (!rawParam) rawParam = 'financial_policy';
    const cleanParam = rawParam.toLowerCase().trim();

    let found = CHAPTER_DEFS.find(ch => ch.id === cleanParam);
    if (!found) {
        found = CHAPTER_DEFS.find(ch => ch.name.toLowerCase().indexOf(cleanParam) !== -1);
    }
    return found || CHAPTER_DEFS[0];
}

// ==========================================
// 2. TEXT, TABLE & HTML PAGINATION SPLITTERS
// ==========================================
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
        dataRows = Array.from(tbody.querySelectorAll('tr')).filter(r => headerRows.indexOf(r) === -1);
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
        if (listNode.tagName === 'OL') {
            const startVal = parseInt(listNode.getAttribute('start') || '1', 10);
            list.setAttribute('start', String(startVal + index));
        }
        list.appendChild(item.cloneNode(true));
        return list.outerHTML;
    });
}

function splitHtmlIntoElements(html) {
    if (!html) return [];
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    let elements = [];

    tempDiv.childNodes.forEach(node => {
        if (node.nodeType === Node.ELEMENT_NODE) {
            if (node.tagName === 'TABLE') {
                elements = elements.concat(splitTableIntoElements(node));
            } else if (node.tagName === 'UL' || node.tagName === 'OL') {
                elements = elements.concat(splitListIntoElements(node));
            } else if (node.querySelector('table, ul, ol')) {
                const subElements = splitHtmlIntoElements(node.innerHTML);
                elements = elements.concat(subElements);
            } else if (node.tagName === 'P') {
                const text = node.innerHTML.trim();
                const chunks = splitPlainTextForPagination(text);
                if (chunks.length > 1) {
                    chunks.forEach(chunk => {
                        elements.push(`<p class="split-paragraph">${chunk}</p>`);
                    });
                } else {
                    elements.push(node.outerHTML);
                }
            } else {
                elements.push(node.outerHTML);
            }
        } else if (node.nodeType === Node.TEXT_NODE && node.textContent.trim().length > 0) {
            const chunks = splitPlainTextForPagination(node.textContent.trim());
            chunks.forEach(chunk => {
                elements.push(`<p class="split-paragraph">${chunk}</p>`);
            });
        }
    });

    return elements;
}

function sampleDifficulty(easyPct = 34, medPct = 33, hardPct = 33) {
    let rand = Math.random() * 100;
    if (rand < hardPct) return 'hard';
    if (rand < hardPct + medPct) return 'medium';
    return 'easy';
}

function getChapterExamDistribution() {
    let aiPct = 50;
    let diffEasy = 34;
    let diffMed = 33;
    let diffHard = 33;

    try {
        let paramVal = null;
        let easyParam = null;
        let medParam = null;
        let hardParam = null;

        if (typeof URLSearchParams !== 'undefined') {
            const urlParams = new URLSearchParams(window.location.search);
            if (urlParams.has('ai_pct')) paramVal = urlParams.get('ai_pct');
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
        if (paramVal === null && window.location && window.location.search) {
            const match = window.location.search.match(/[?&]ai_pct=([^&]*)/);
            if (match) paramVal = decodeURIComponent(match[1]);
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

        if (paramVal !== null) {
            aiPct = parseInt(paramVal, 10);
        } else {
            const saved = localStorage.getItem('afm_chap_ai_pct');
            if (saved !== null) aiPct = parseInt(saved, 10);
        }

        if (medParam !== null) {
            diffMed = parseInt(medParam, 10);
        } else {
            const savedMed = localStorage.getItem('afm_chap_diff_med');
            if (savedMed !== null) diffMed = parseInt(savedMed, 10);
        }

        if (hardParam !== null) {
            diffHard = parseInt(hardParam, 10);
        } else {
            const savedHard = localStorage.getItem('afm_chap_diff_hard');
            if (savedHard !== null) diffHard = parseInt(savedHard, 10);
        }

        if (easyParam !== null) {
            diffEasy = parseInt(easyParam, 10);
        } else {
            const savedEasy = localStorage.getItem('afm_chap_diff_easy');
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

let currentChapDistribution = { aiPct: 50, qbPct: 50, diffEasy: 34, diffMed: 33, diffHard: 33 };

function isExactChapterMatch(itemChStr, targetChName) {
    if (!itemChStr || !targetChName) return false;
    const s = itemChStr.trim().toLowerCase();
    const t = targetChName.trim().toLowerCase();
    if (s === t) return true;
    if (t === "derivatives analysis and valuation" && s === "derivatives") return true;
    if (t === "foreign exchange exposure and risk management" && s === "foreign exchange risk management") return true;
    if (t === "risk management") {
        return s === "risk management" || (s.includes("risk management") && !s.includes("foreign") && !s.includes("interest"));
    }
    return false;
}

// ==========================================
// 3. CHAPTER QUESTION SELECTION ENGINE
// ==========================================
const MARK_PATTERNS = [
    [8, 7],
    [7, 8],
    [10, 5],
    [5, 10],
    [6, 5, 4],
    [5, 6, 4],
    [8, 4, 3],
    [6, 6, 3],
    [7, 4, 4]
];

function pickChapterMCQs(chapDef, aiPct = 50, diffDist = { diffEasy: 34, diffMed: 33, diffHard: 33 }) {
    let seenMcqs = getSessionSeenSet(SESSION_MCQ_KEY);
    let chosen = [];
    let currentPaperSigs = new Set();

    // 1. Filter AI Bank pool for this chapter (pf1_21_130317 has 21 cases per chapter)
    const rawAiPool = (typeof pf1_21_130317 !== 'undefined' && Array.isArray(pf1_21_130317)) ? pf1_21_130317 : [];
    let directAiCases = rawAiPool.filter(cs => {
        return (cs.case_chapter || []).some(ch => isExactChapterMatch(ch, chapDef.name));
    }).map(cs => Object.assign({}, cs, { _sourceBank: 'AI Bank' }));

    // 2. Filter Question Bank pool for this chapter (mcqData)
    const rawQbPool = (typeof mcqData !== 'undefined' && Array.isArray(mcqData)) ? mcqData : [];
    let directQbCases = rawQbPool.filter(cs => {
        const text = (cs.case_chapter || []).join(" ") + " " + (cs.chapter || "") + " " + (cs.caseText || "");
        return matchesKeywords(text, chapDef.keywords);
    }).map(cs => Object.assign({}, cs, { _sourceBank: 'Question Bank' }));

    // Target case counts out of 3 total cases (~15 MCQs)
    let targetAiCases = 0;
    if (aiPct === 100) targetAiCases = 3;
    else if (aiPct === 0) targetAiCases = 0;
    else if (aiPct >= 67) targetAiCases = 2;
    else if (aiPct <= 33) targetAiCases = 1;
    else targetAiCases = (Math.random() * 100 < aiPct) ? 2 : 1;

    let targetQbCases = 3 - targetAiCases;

    function pickFromPool(pool, count, isAi = false) {
        if (!pool || pool.length === 0 || count <= 0) return [];
        let unseen = shuffleArray(pool.filter(cs => !isItemSeen(cs, seenMcqs)));
        let picked = [];

        for (let k = 0; k < count; k++) {
            let targetDiff = (isAi && diffDist)
                ? sampleDifficulty(diffDist.diffEasy, diffDist.diffMed, diffDist.diffHard)
                : null;

            let candidate = null;
            if (targetDiff) {
                candidate = unseen.find(cs => {
                    let d = (cs.difficulty || cs.diffuculty || '').toLowerCase();
                    return d === targetDiff && !currentPaperSigs.has(getItemSignature(cs));
                });
            }
            if (!candidate) {
                candidate = unseen.find(cs => !currentPaperSigs.has(getItemSignature(cs)));
            }
            if (candidate) {
                picked.push(candidate);
                currentPaperSigs.add(getItemSignature(candidate));
                unseen = unseen.filter(cs => cs !== candidate);
            }
        }

        if (picked.length < count) {
            let fallback = shuffleArray(pool);
            for (let i = 0; i < fallback.length; i++) {
                let cs = fallback[i];
                if (picked.length >= count) break;
                let sig = getItemSignature(cs);
                if (!currentPaperSigs.has(sig)) {
                    picked.push(cs);
                    currentPaperSigs.add(sig);
                }
            }
        }
        return picked;
    }

    let pickedAi = pickFromPool(directAiCases, targetAiCases, true);
    let pickedQb = pickFromPool(directQbCases, targetQbCases, false);

    // If QB didn't have enough chapter-specific cases, supplement with general QB or AI
    if (pickedQb.length < targetQbCases) {
        let needed = targetQbCases - pickedQb.length;
        let otherQb = rawQbPool.filter(cs => {
            const text = (cs.case_chapter || []).join(" ") + " " + (cs.chapter || "") + " " + (cs.caseText || "");
            return matchesKeywords(text, chapDef.fallbackKeywords);
        }).map(cs => Object.assign({}, cs, { _sourceBank: 'Question Bank' }));
        let extraQb = pickFromPool(otherQb, needed);
        pickedQb = pickedQb.concat(extraQb);

        if (pickedQb.length < targetQbCases && directAiCases.length > 0) {
            let extraAi = pickFromPool(directAiCases, targetQbCases - pickedQb.length);
            pickedAi = pickedAi.concat(extraAi);
        }
    }

    chosen = shuffleArray(pickedAi.concat(pickedQb));

    // Cap to 3-4 cases or ~15 MCQs
    let trimmed = [];
    let mcqCount = 0;
    for (let i = 0; i < chosen.length; i++) {
        let cs = chosen[i];
        trimmed.push(cs);
        mcqCount += (cs.questions ? cs.questions.length : 1);
        if (mcqCount >= 15 && trimmed.length >= 3) break;
    }
    if (trimmed.length > 0) chosen = trimmed;

    chosen.forEach(cs => markItemSeen(cs, seenMcqs));
    saveSessionSeenSet(SESSION_MCQ_KEY, seenMcqs);
    return chosen;
}

function generateChapterDescriptivePaper(chapDef, aiPct = 50, diffDist = { diffEasy: 34, diffMed: 33, diffHard: 33 }) {
    let seenDesc = getSessionSeenSet(SESSION_DESC_KEY);
    const TOTAL_MARKS = 60; // 4 questions x 15 marks
    const targetAiMarks = Math.round(TOTAL_MARKS * (aiPct / 100));

    // 1. AI Bank Pool for this chapter (pfa1_21_17es has 21 problems per chapter)
    const rawAiDescs = (typeof pfa1_21_17es !== 'undefined' && Array.isArray(pfa1_21_17es)) ? pfa1_21_17es : [];
    const aiPool = rawAiDescs.filter(q => {
        return isExactChapterMatch(q.chapter_name || q.chapter, chapDef.name);
    }).map(q => Object.assign({}, q, { _sourceBank: 'AI Bank' }));

    // 2. Question Bank Pool for this chapter (MTP + ICAI)
    const rawMtps = (typeof descriptiveQuestions !== 'undefined' && Array.isArray(descriptiveQuestions)) ? descriptiveQuestions : [];
    const rawIcaibook = (typeof icaibookData !== 'undefined' && Array.isArray(icaibookData)) ? icaibookData : [];

    const qbPool = rawMtps.concat(rawIcaibook).filter(q => {
        const text = (q.chapter_name || "") + " " + (q.chapter || "") + " " + (q.question_html || "");
        return matchesKeywords(text, chapDef.keywords);
    }).map(q => Object.assign({}, q, { _sourceBank: 'Question Bank' }));

    let fallbackQbPool = rawMtps.concat(rawIcaibook).filter(q => {
        const text = (q.chapter_name || "") + " " + (q.chapter || "") + " " + (q.question_html || "");
        return matchesKeywords(text, chapDef.fallbackKeywords);
    }).map(q => Object.assign({}, q, { _sourceBank: 'Question Bank' }));

    let remainingAiMarks = targetAiMarks;
    let remainingTotalMarks = TOTAL_MARKS;
    let usedIds = new Set();
    let usedSigs = new Set();
    let questionsList = [];

    // Exactly 4 questions of 15 marks each (Question 1 compulsory, 2 out of Q2, Q3, Q4 to be answered)
    for (let qNum = 1; qNum <= 4; qNum++) {
        const pattern = MARK_PATTERNS[Math.floor(Math.random() * MARK_PATTERNS.length)];
        let chosenParts = [];

        for (let pIdx = 0; pIdx < pattern.length; pIdx++) {
            const targetMark = pattern[pIdx];
            let pAi = remainingTotalMarks > 0 ? Math.max(0, Math.min(1, remainingAiMarks / remainingTotalMarks)) : 0;
            let preferAi = (aiPct === 100) ? true : (aiPct === 0) ? false : (Math.random() < pAi);

            let aiAvail = aiPool.filter(q => !usedIds.has(q.question_id) && !usedSigs.has(getItemSignature(q)));
            let qbAvail = qbPool.filter(q => !usedIds.has(q.question_id) && !usedSigs.has(getItemSignature(q)));

            function pickFrom(pool, isAi = false) {
                if (!pool || pool.length === 0) return null;
                let unseen = pool.filter(q => !isItemSeen(q, seenDesc));
                let cands = unseen.length > 0 ? unseen : pool;
                if (isAi && diffDist) {
                    let targetDiff = sampleDifficulty(diffDist.diffEasy, diffDist.diffMed, diffDist.diffHard);
                    let diffMatched = cands.filter(q => (q.difficulty || q.diffuculty || '').toLowerCase() === targetDiff);
                    if (diffMatched.length > 0) cands = diffMatched;
                }
                let exact = cands.filter(q => Number(q.marks) === targetMark);
                if (exact.length > 0) return exact[Math.floor(Math.random() * exact.length)];
                let close = cands.filter(q => Math.abs((Number(q.marks) || 6) - targetMark) <= 2);
                if (close.length > 0) return close[Math.floor(Math.random() * close.length)];
                return cands[Math.floor(Math.random() * cands.length)];
            }

            let candidate = null;
            if (preferAi && aiAvail.length > 0) {
                candidate = pickFrom(aiAvail, true);
            } else if (!preferAi && qbAvail.length > 0) {
                candidate = pickFrom(qbAvail, false);
            }

            if (!candidate) {
                candidate = preferAi ? pickFrom(qbAvail, false) : pickFrom(aiAvail, true);
            }

            if (!candidate) {
                let fbAvail = fallbackQbPool.filter(q => !usedIds.has(q.question_id) && !usedSigs.has(getItemSignature(q)));
                candidate = pickFrom(fbAvail, false);
            }
            if (!candidate) {
                candidate = pickFrom(aiPool.length > 0 ? aiPool : qbPool, aiPool.length > 0);
            }

            if (candidate) {
                usedIds.add(candidate.question_id);
                usedSigs.add(getItemSignature(candidate));
                markItemSeen(candidate, seenDesc);
                if (candidate._sourceBank === 'AI Bank') {
                    remainingAiMarks -= targetMark;
                }
                remainingTotalMarks -= targetMark;
                chosenParts.push(Object.assign({}, candidate, { assignedMarks: targetMark }));
            }
        }

        const totalQMarks = chosenParts.reduce((sum, p) => sum + p.assignedMarks, 0);
        questionsList.push({
            placement: qNum,
            isCompulsory: qNum === 1,
            totalMarks: totalQMarks || 15,
            parts: chosenParts
        });
    }

    saveSessionSeenSet(SESSION_DESC_KEY, seenDesc);
    return questionsList;
}

// ==========================================
// 4. INITIALIZATION & DATA RENDERING
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    activeChapterDef = getSelectedChapterDef();
    currentChapDistribution = getChapterExamDistribution();

    if (typeof mcqData !== 'undefined' || typeof pf1_21_130317 !== 'undefined') {
        selectedMCQs = pickChapterMCQs(activeChapterDef, currentChapDistribution.aiPct, currentChapDistribution);
    }
    if (typeof descriptiveQuestions !== 'undefined' || typeof icaibookData !== 'undefined' || typeof pfa1_21_17es !== 'undefined') {
        selectedDescriptive = generateChapterDescriptivePaper(activeChapterDef, currentChapDistribution.aiPct, currentChapDistribution);
    }

    generateExamData();
    renderBookPages();
    window.addEventListener('resize', debounce(() => { renderBookPages(); }, 300));
});

function calculateMcqScore() {
    let totalPossible = 0;
    let score = 0;

    selectedMCQs.forEach(block => {
        (block.questions || []).forEach(q => {
            totalPossible++;
            const selectedOptIdx = userAnswersMap[q.question_id];
            if (selectedOptIdx !== undefined && selectedOptIdx === q.answer) {
                score++;
            }
        });
    });

    return {
        score: score,
        total: totalPossible,
        percent: totalPossible > 0 ? Math.round((score / totalPossible) * 100) : 0
    };
}

function generateExamData() {
    rawExamElements = [];
    const examDate = getCurrentExamDate();
    const chapNameUpper = activeChapterDef ? activeChapterDef.name.toUpperCase() : "ADVANCED FINANCIAL MANAGEMENT";

    // 1. Cover / Instructions Page
    rawExamElements.push(`
        <div class="watermark">CAM2</div>
        <div class="header-center">
            FINAL EXAMINATION<br>
            PAPER - 2: ADVANCED FINANCIAL MANAGEMENT<br>
            ${examDate}<br>
            <div class="chap-header-badge" style="margin-top: 10px; font-size: 14px;">
                CHAPTER TEST: ${chapNameUpper}
            </div>
        </div>

        <div style="text-align: right; font-weight: bold; margin: 12px 0 8px 0; font-size: 14.5px;">
            Maximum Marks &ndash; 60 &nbsp;|&nbsp; Time Allowed &ndash; 1.5 Hours
        </div>

        <div class="header-center" style="margin-top: 8px; text-decoration: underline; font-weight: bold;">
            GENERAL INSTRUCTIONS
        </div>

        <ul class="instructions">
            <li><strong>Total Marks:</strong> 60 Marks. Duration: 1.5 Hours (90 Minutes).</li>
            <li><strong>Part I:</strong> Case Scenario MCQs (15 Marks). All questions in Part I are compulsory.</li>
            <li><strong>Part II:</strong> Descriptive Questions (45 Marks). <strong>Question No. 1 is compulsory</strong>. Answer any <strong>two</strong> questions from the remaining three questions (Question Nos. 2 to 4).</li>
            <li>Each descriptive question carries 15 marks and contains structured sub-questions (e.g., <strong>1(a), 1(b)</strong>, <strong>2(a), 2(b)</strong>).</li>
            <li>Working notes should form part of the respective answers. Appropriate assumptions where necessary must be stated.</li>
            <li>Solutions and self-evaluation markings are revealed on submitting or when time expires.</li>
        </ul>
    `);

    // Results Banner if exam completed
    if (examCompleted) {
        const result = calculateMcqScore();
        rawExamElements.push(`
            <div class="score-banner no-split">
                <h4>🎯 Exam Submission & Scorecard</h4>
                <p>
                    <strong>Part I (MCQs):</strong> Scored <strong>${result.score}</strong> / <strong>${result.total}</strong> correct (${result.percent}%).
                </p>
                <p style="margin-top: 6px; font-size: 13.5px; color: #475569;">
                    <strong>Part II (Descriptive):</strong> Compare your written step-by-step calculations with the official ICAI model solutions and working notes detailed below.
                </p>
            </div>
        `);
    }

    // 2. Part I - Objective Section
    if (selectedMCQs.length > 0) {
        rawExamElements.push(`
            <div class="no-split" style="margin-top: 24px; margin-bottom: 12px; border-top: 2px solid #2563eb; padding-top: 10px;">
                <div style="font-weight: 800; font-size: 16px; color: #1e3a8a; text-align: center;">
                    PART I &ndash; CASE SCENARIOS &amp; OBJECTIVE QUESTIONS (15 Marks)
                </div>
                <div style="text-align: center; font-size: 13px; color: #64748b; margin-top: 3px;">
                    All questions are compulsory. Select the single most appropriate option.
                </div>
            </div>
        `);

        selectedMCQs.forEach((block, bIdx) => {
            rawExamElements.push(`<h3 class="no-split" style="color:#2563eb; border-bottom:1px solid #cbd5e1; padding-bottom:5px; margin-top:16px; display:block;">Case Scenario ${bIdx + 1}</h3>`);
            rawExamElements = rawExamElements.concat(splitHtmlIntoElements(prepareCaseStudyHtml(block.caseText)));

            (block.questions || []).forEach((q, qIdx) => {
                rawExamElements.push(`<div class="mcq-item no-split" data-qid="${q.question_id}" style="height:12px; display:block;"></div>`);

                splitPlainTextForPagination(formatQuestionText(q.question)).forEach((chunk, chunkIdx) => {
                    const label = chunkIdx === 0 ? `<strong>Q${qIdx + 1}:</strong> ` : "";
                    rawExamElements.push(`<span class="mcq-question-text" data-qid="${q.question_id}" style="display:inline; line-height:1.5; font-size:calc(15px * var(--font-scale));">${label}${chunk} </span>`);
                });

                rawExamElements.push(`<div style="display:block; height:8px; width:100%;"></div>`);

                q.options.forEach((opt, i) => {
                    let optionClasses = ["mcq-option", "no-split"];
                    if (examCompleted) {
                        if (i === q.answer) {
                            optionClasses.push("correct-ans");
                        }
                    }

                    const optId = `q-${bIdx}-${qIdx}-${i}`;
                    const optionHtml = `<div class="${optionClasses.join(' ')}" data-qid="${q.question_id}" data-optidx="${i}" onclick="selectOption(this)" id="${optId}">${sanitizeInsertedMathHtml(opt)}</div>`;
                    rawExamElements.push(optionHtml);
                });

                if (examCompleted) {
                    const correctText = sanitizeInsertedMathHtml(q.options[q.answer]);
                    const userSelectedIdx = userAnswersMap[q.question_id];
                    const userStatus = userSelectedIdx === undefined
                        ? `<span style="color:#64748b;">(Not Answered)</span>`
                        : (userSelectedIdx === q.answer
                            ? `<span style="color:#16a34a; font-weight:bold;">(Correct +1)</span>`
                            : `<span style="color:#dc2626; font-weight:bold;">(Incorrect)</span>`);
                    const explHtml = q.explanation ? `<br><span style="font-size:13px; color:#475569; margin-top:6px; display:block; line-height:1.45;"><strong>Explanation:</strong> ${formatExplanationHtml(q.explanation)}</span>` : "";

                    rawExamElements.push(`
                        <div class="solution-box no-split" style="margin-bottom:14px; display:block;">
                            <strong>Correct Answer:</strong> Option ${String.fromCharCode(65 + q.answer)} &ndash; ${correctText} ${userStatus}${explHtml}
                        </div>
                    `);
                }
            });
        });
    }

    // 3. Part II - Descriptive Section
    if (selectedDescriptive.length > 0) {
        rawExamElements.push(`
            <div class="no-split" style="margin-top: 35px; margin-bottom: 15px; border-top: 2px solid #2563eb; padding-top: 14px;">
                <div style="font-weight: 800; font-size: 16px; color: #1e3a8a; text-align: center;">
                    PART II &ndash; DESCRIPTIVE QUESTIONS (45 Marks)
                </div>
                <div style="background: #f8fafc; border-left: 4px solid #2563eb; padding: 10px 14px; margin-top: 10px; font-size: 13.5px; color: #334155; line-height: 1.5;">
                    <strong>Instructions:</strong> Question No. 1 is <strong>compulsory</strong>. Answer any <strong>two</strong> questions from the remaining three questions (Question Nos. 2 to 4). Working notes must form part of your calculations.
                </div>
            </div>
        `);

        selectedDescriptive.forEach(group => {
            const badgeType = group.isCompulsory
                ? `<span class="compulsory-badge">COMPULSORY &bull; 15 MARKS</span>`
                : `<span class="choice-badge">15 MARKS (CHOICE)</span>`;

            rawExamElements.push(`
                <h3 class="no-split" style="color:#2563eb; border-bottom:1px solid #cbd5e1; padding-bottom:6px; margin-top:26px; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap;">
                    <span>Question ${group.placement}</span>
                    ${badgeType}
                </h3>
            `);

            group.parts.forEach((part, index) => {
                const subChar = String.fromCharCode(97 + index); // a, b, c
                const subQuestionLabel = `<strong>${group.placement}(${subChar})</strong>`;

                if (!examCompleted) {
                    const marksBadge = `<div class="no-split" style="background-color: #fee2e2; color: #991b1b; border: 1px solid #fca5a5; padding: 3px 8px; border-radius: 4px; font-weight: bold; font-size: 13px; display: inline-block; margin-bottom: 8px;">[ ${part.assignedMarks || part.marks} Marks ]</div>`;
                    const wrappedHtml = `${marksBadge}<br>${subQuestionLabel} ${part.question_html}`;
                    rawExamElements = rawExamElements.concat(splitHtmlIntoElements(sanitizeInsertedMathHtml(wrappedHtml)));
                } else {
                    const solBadge = `<div class="no-split" style="background-color: #dcfce7; color: #166534; border: 1px solid #4ade80; padding: 4px 10px; border-radius: 4px; font-weight: bold; font-size: 13px; display: inline-block; margin-bottom: 8px; margin-top: 15px;">Solution Q${group.placement}(${subChar}) [${part.assignedMarks || part.marks} Marks]</div>`;
                    rawExamElements.push(solBadge);
                    rawExamElements = rawExamElements.concat(splitHtmlIntoElements(sanitizeInsertedMathHtml(part.solution_html)));
                }
            });
        });
    }

    rawExamElements.push(`<div class="header-center no-split" style="margin-top: 25%; color: #999; display:block;">[End of Question Paper Booklet]</div>`);

    if (!examCompleted) {
        rawExamElements.push(`<button id="finish-btn" class="finish-exam-btn no-split" style="display:block;" onclick="revealAnswers()">Finish &amp; Show Solutions</button>`);
    } else {
        rawExamElements.push(`
            <div class="no-split" style="display:flex; flex-direction:column; gap:10px; margin-top:20px;">
                <button id="booklet-chap-btn" class="finish-exam-btn" style="background:#0f172a; color:white;" onclick="window.location.href='./chapgate.html'">Select Another Chapter</button>
                <button id="booklet-home-btn" class="finish-exam-btn" style="background:#2563eb; color:white;" onclick="window.location.href='./eafm.html'">Return to AFM Home</button>
            </div>
        `);
    }
}

// ==========================================
// 5. THE REACTIVE PAGINATION ENGINE
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
                const testRows = currentTableRows.concat([row]);
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

        if (typeof window.renderMathInElement === 'function' && typeof el === 'string' && (el.indexOf('$$') !== -1 || el.indexOf('$') !== -1 || el.indexOf('\\(') !== -1)) {
            renderMathInBook(tape);
        }

        if (tape.scrollHeight > SAFE_HEIGHT && currentPageHtml !== "") {
            finalizedPages.push(currentPageHtml);
            currentPageHtml = el;
            tape.innerHTML = el;
            if (typeof window.renderMathInElement === 'function' && typeof el === 'string' && (el.indexOf('$$') !== -1 || el.indexOf('$') !== -1 || el.indexOf('\\(') !== -1)) {
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
        const backContent = finalizedPages[i + 1] || `<div class="header-center" style="margin-top: 50%; color: #999;">[Blank Page]</div>`;

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

    // Reapply user selections
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
// 6. EXAM LOGIC & 1.5 HOUR TIMER
// ==========================================
let timerInterval;

function selectOption(el) {
    if (examCompleted) return;
    const qid = el.dataset.qid;
    const optIdx = parseInt(el.dataset.optidx, 10);

    const options = qid
        ? Array.from(document.querySelectorAll('.mcq-option')).filter(opt => opt.dataset.qid === qid)
        : Array.from(el.parentElement.querySelectorAll('.mcq-option'));

    options.forEach(opt => {
        opt.style.borderColor = '#cbd5e1';
        selectedOptions.delete(opt.id);
    });

    el.style.borderColor = '#2563eb';
    selectedOptions.add(el.id);

    if (qid && !isNaN(optIdx)) {
        userAnswersMap[qid] = optIdx;
    }
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
    const afmHomeBtn = document.getElementById("afm-home-btn");
    if (afmHomeBtn) afmHomeBtn.style.display = "block";

    generateExamData();
    renderBookPages();

    // Flip back to page 1 for review
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
    timerDiv.innerText = "01:30:00"; // 1.5 Hours for 60 Marks
    document.body.appendChild(timerDiv);

    // 1.5 Hours = 90 Minutes = 5400 Seconds
    let totalSeconds = 90 * 60;

    timerInterval = setInterval(() => {
        totalSeconds--;
        let h = Math.floor(totalSeconds / 3600);
        let m = Math.floor((totalSeconds % 3600) / 60);
        let s = totalSeconds % 60;

        timerDiv.innerText = `${pad2(h)}:${pad2(m)}:${pad2(s)}`;
        if (totalSeconds <= 300) {
            timerDiv.classList.add("timer-warning");
        }

        if (totalSeconds <= 0) {
            clearInterval(timerInterval);
            timerDiv.innerText = "TIME UP";
            alert("Time is up! Automatically submitting your 60-mark chapter paper.");
            revealAnswers();
        }
    }, 1000);
}

// ==========================================
// 7. 3D BOOK PHYSICS ENGINE & BALANCER
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

        if (el.scrollHeight > el.clientHeight + 1 && (style.overflowY === 'auto' || style.overflowY === 'scroll')) {
            if (e.clientX >= rect.right - 24 && e.clientX <= rect.right + 4) {
                return true;
            }
        }

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
            if (Math.abs(deltaY) > 8 && Math.abs(deltaY) >= Math.abs(deltaX)) {
                isPointerDown = false;
                dragCandidatePage = null;
                return;
            }

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

    // Keyboard navigation
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

// Fallback retry listeners for KaTeX rendering
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
