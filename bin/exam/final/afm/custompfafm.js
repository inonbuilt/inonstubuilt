// ==========================================
// 1. CHAPTER DEFINITIONS & GLOBAL STATE
// ==========================================
const CHAPTER_DEFS = [
    {
        id: "financial_policy",
        num: "01",
        name: "Financial Policy and Corporate Strategy",
        section: 1,
        theoryTier: 1,
        icaiWeight: 6,
        keywords: ["financial policy", "corporate strategy", "strategic financial", "financial markets"],
        fallbackKeywords: ["strategic", "policy", "corporate"]
    },
    {
        id: "risk_management",
        num: "02",
        name: "Risk Management",
        section: 1,
        theoryTier: 1,
        icaiWeight: 4,
        keywords: ["risk management", "value at risk", "var", "credit risk"],
        fallbackKeywords: ["risk", "derivatives"]
    },
    {
        id: "capital_budgeting",
        num: "03",
        name: "Advanced Capital Budgeting Decisions",
        section: 1,
        theoryTier: 2,
        icaiWeight: 8,
        keywords: ["capital budgeting", "real options", "certainty equivalent", "sensitivity analysis"],
        fallbackKeywords: ["budgeting", "project", "investment decision"]
    },
    {
        id: "security_analysis",
        num: "04",
        name: "Security Analysis",
        section: 2,
        theoryTier: 2,
        icaiWeight: 6,
        keywords: ["security analysis", "fundamental analysis", "technical analysis", "economic analysis", "moving average", "ema"],
        fallbackKeywords: ["analysis", "equity", "valuation"]
    },
    {
        id: "security_valuation",
        num: "05",
        name: "Security Valuation",
        section: 2,
        theoryTier: 3,
        icaiWeight: 10,
        keywords: ["security valuation", "bond valuation", "bond refunding", "dividend valuation", "dividend discount", "convertible", "fixed income", "sustainable growth"],
        fallbackKeywords: ["valuation", "bond", "share", "equity valuation"]
    },
    {
        id: "portfolio_management",
        num: "06",
        name: "Portfolio Management",
        section: 2,
        theoryTier: 3,
        icaiWeight: 12,
        keywords: ["portfolio", "capm", "capital asset pricing", "tracking error", "beta"],
        fallbackKeywords: ["portfolio", "investment", "sharpe", "treynor"]
    },
    {
        id: "securitization",
        num: "07",
        name: "Securitization",
        section: 3,
        theoryTier: 1,
        icaiWeight: 6,
        keywords: ["securit", "tokenization", "cdo", "pass through", "tranche"],
        fallbackKeywords: ["securit", "debt", "financial instruments"]
    },
    {
        id: "mutual_funds",
        num: "08",
        name: "Mutual Funds",
        section: 3,
        theoryTier: 3,
        icaiWeight: 8,
        keywords: ["mutual fund", "side pocketing", "nav", "open-ended", "close-ended"],
        fallbackKeywords: ["mutual", "fund", "etf"]
    },
    {
        id: "derivatives",
        num: "09",
        name: "Derivatives Analysis and Valuation",
        section: 3,
        theoryTier: 3,
        icaiWeight: 12,
        keywords: ["derivatives analysis", "derivatives", "options", "futures", "credit default swaps", "cds", "hedging"],
        fallbackKeywords: ["derivatives", "swap", "option", "future"]
    },
    {
        id: "forex",
        num: "10",
        name: "Foreign Exchange Exposure and Risk Management",
        section: 4,
        theoryTier: 3,
        icaiWeight: 14,
        keywords: ["foreign exchange", "forex", "nostro", "currency swap", "cross rate", "fwd rate"],
        fallbackKeywords: ["forex", "exchange rate", "international", "hedging"]
    },
    {
        id: "international_finance",
        num: "11",
        name: "International Financial Management",
        section: 4,
        theoryTier: 2,
        icaiWeight: 6,
        keywords: ["international financial", "international capital", "international finance", "adr", "gdr", "euro"],
        fallbackKeywords: ["international", "foreign", "global"]
    },
    {
        id: "interest_rate_risk",
        num: "12",
        name: "Interest Rate Risk Management",
        section: 4,
        theoryTier: 2,
        icaiWeight: 6,
        keywords: ["interest rate", "fra", "forward rate agreement", "interest rate swap", "cap", "floor", "collar"],
        fallbackKeywords: ["interest", "swap", "fra", "rate risk"]
    },
    {
        id: "business_valuation",
        num: "13",
        name: "Business Valuation",
        section: 5,
        theoryTier: 3,
        icaiWeight: 6,
        keywords: ["business valuation", "corporate valuation", "fcff", "fcfe", "enterprise value", "economic value added", "eva"],
        fallbackKeywords: ["valuation", "merger", "corporate"]
    },
    {
        id: "mergers_acquisitions",
        num: "14",
        name: "Mergers, Acquisitions and Corporate Restructuring",
        section: 5,
        theoryTier: 2,
        icaiWeight: 8,
        keywords: ["merger", "acquisition", "corporate restructuring", "takeover", "swap ratio", "demerger"],
        fallbackKeywords: ["merger", "acquisition", "restructuring"]
    },
    {
        id: "startup_finance",
        num: "15",
        name: "Startup Finance",
        section: 6,
        theoryTier: 1,
        icaiWeight: 4,
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
let activeChapters = [];
let currentExamDistribution = { aiPct: 50, qbPct: 50 };

const TEXT_CHUNK_LIMIT = 90;
const SESSION_MCQ_KEY = "cn_afm_custom_seen_mcqs";
const SESSION_DESC_KEY = "cn_afm_custom_seen_desc";

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

function matchesKeywords(text, keywords) {
    if (!text || !keywords || keywords.length === 0) return false;
    const lower = text.toLowerCase();
    for (let i = 0; i < keywords.length; i++) {
        if (lower.indexOf(keywords[i].toLowerCase()) !== -1) return true;
    }
    return false;
}

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

// Config retrieval for Custom Exam
function getCustomExamConfig() {
    let chaps = [];
    let aiPct = 50;

    try {
        let chapsParam = null;
        let aiParam = null;

        if (typeof URLSearchParams !== 'undefined') {
            const urlParams = new URLSearchParams(window.location.search);
            if (urlParams.has('chapters')) chapsParam = urlParams.get('chapters');
            if (urlParams.has('ai_pct')) aiParam = urlParams.get('ai_pct');
        }

        if (chapsParam === null && window.location && window.location.search) {
            const mChap = window.location.search.match(/[?&]chapters=([^&]*)/);
            if (mChap) chapsParam = decodeURIComponent(mChap[1]);
        }
        if (aiParam === null && window.location && window.location.search) {
            const mAi = window.location.search.match(/[?&]ai_pct=([^&]*)/);
            if (mAi) aiParam = decodeURIComponent(mAi[1]);
        }

        if (chapsParam) {
            const ids = chapsParam.split(',').map(s => s.trim().toLowerCase()).filter(Boolean);
            chaps = CHAPTER_DEFS.filter(c => ids.includes(c.id.toLowerCase()));
        } else {
            const saved = localStorage.getItem('afm_custom_chapters');
            if (saved) {
                const parsed = JSON.parse(saved);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    chaps = CHAPTER_DEFS.filter(c => parsed.includes(c.id));
                }
            }
        }

        if (aiParam !== null) {
            aiPct = parseInt(aiParam, 10);
        } else {
            const savedAi = localStorage.getItem('afm_custom_ai_pct');
            if (savedAi !== null) aiPct = parseInt(savedAi, 10);
        }
    } catch (e) {
        chaps = CHAPTER_DEFS;
        aiPct = 50;
    }

    if (!chaps || chaps.length === 0) {
        chaps = CHAPTER_DEFS;
    }
    if (isNaN(aiPct) || aiPct < 0) aiPct = 0;
    if (aiPct > 100) aiPct = 100;

    return {
        activeChapters: chaps,
        aiPct: aiPct,
        qbPct: 100 - aiPct
    };
}

// ==========================================
// 2. TEXT SPLITTING & HTML UTILITIES
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

function splitHtmlIntoElements(htmlString) {
    if (!htmlString) return [];
    const temp = document.createElement('div');
    temp.innerHTML = htmlString;
    let elements = [];
    const blockTags = ['P', 'DIV', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'BLOCKQUOTE', 'PRE', 'HR', 'LI'];
    Array.from(temp.childNodes || []).forEach(node => {
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
                Array.from(node.childNodes || []).forEach(child => {
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

// ==========================================
// 3. CUSTOM QUESTION SELECTION ENGINE
// ==========================================
const MARK_PATTERNS = [
    [8, 6],
    [6, 8],
    [10, 4],
    [4, 10],
    [6, 4, 4],
    [4, 6, 4],
    [4, 4, 6],
    [8, 4, 2],
    [6, 6, 2]
];

function getChapterDefForQuestion(q) {
    if (!q) return CHAPTER_DEFS[0];
    const text = ((q.chapter_name || "") + " " + (q.chapter || "") + " " + (q.question_html || "").substring(0, 300)).toLowerCase();
    for (let i = 0; i < CHAPTER_DEFS.length; i++) {
        const c = CHAPTER_DEFS[i];
        if (isExactChapterMatch(q.chapter_name || q.chapter, c.name)) return c;
        if (matchesKeywords(text, c.keywords)) return c;
    }
    return CHAPTER_DEFS[0];
}

function pickCustomMCQs(chaps, aiPct = 50, count = 3) {
    let seenMcqs = getSessionSeenSet(SESSION_MCQ_KEY);
    let chosen = [];
    let currentPaperSigs = new Set();
    let chosenSections = new Set();

    // 1. Filter AI Bank pool for selected chapters
    const rawAiPool = (typeof pf1_21_130317 !== 'undefined' && Array.isArray(pf1_21_130317)) ? pf1_21_130317 : [];
    let directAiCases = rawAiPool.filter(cs => {
        return (cs.case_chapter || []).some(chStr => {
            return chaps.some(cDef => isExactChapterMatch(chStr, cDef.name));
        });
    }).map(cs => Object.assign({}, cs, { _sourceBank: 'AI Bank', _cDef: getChapterDefForQuestion(cs) }));

    // 2. Filter Question Bank pool for selected chapters
    const rawQbPool = (typeof mcqData !== 'undefined' && Array.isArray(mcqData)) ? mcqData : [];
    let directQbCases = rawQbPool.filter(cs => {
        const text = (cs.case_chapter || []).join(" ") + " " + (cs.chapter || "") + " " + (cs.caseText || "");
        return chaps.some(cDef => matchesKeywords(text, cDef.keywords));
    }).map(cs => Object.assign({}, cs, { _sourceBank: 'Question Bank', _cDef: getChapterDefForQuestion(cs) }));

    // Target case counts out of 3 total cases
    let targetAiCases = 0;
    if (aiPct === 100) targetAiCases = count;
    else if (aiPct === 0) targetAiCases = 0;
    else if (aiPct >= 67) targetAiCases = 2;
    else if (aiPct <= 33) targetAiCases = 1;
    else targetAiCases = (Math.random() * 100 < aiPct) ? 2 : 1;

    let targetQbCases = count - targetAiCases;

    function pickFromPool(pool, n) {
        if (!pool || pool.length === 0 || n <= 0) return [];
        let unseen = shuffleArray(pool.filter(cs => !isItemSeen(cs, seenMcqs)));
        let picked = [];

        // Try picking cases with distinct sections first
        for (let i = 0; i < unseen.length; i++) {
            let cs = unseen[i];
            if (picked.length >= n) break;
            let sig = getItemSignature(cs);
            let sec = cs._cDef ? cs._cDef.section : 1;
            if (!currentPaperSigs.has(sig) && !chosenSections.has(sec)) {
                picked.push(cs);
                currentPaperSigs.add(sig);
                chosenSections.add(sec);
            }
        }

        // Fill remaining from unseen
        for (let i = 0; i < unseen.length; i++) {
            let cs = unseen[i];
            if (picked.length >= n) break;
            let sig = getItemSignature(cs);
            if (!currentPaperSigs.has(sig)) {
                picked.push(cs);
                currentPaperSigs.add(sig);
            }
        }

        // Fallback if needed
        if (picked.length < n) {
            let fallback = shuffleArray(pool);
            for (let i = 0; i < fallback.length; i++) {
                let cs = fallback[i];
                if (picked.length >= n) break;
                let sig = getItemSignature(cs);
                if (!currentPaperSigs.has(sig)) {
                    picked.push(cs);
                    currentPaperSigs.add(sig);
                }
            }
        }
        return picked;
    }

    let pickedAi = pickFromPool(directAiCases, targetAiCases);
    let pickedQb = pickFromPool(directQbCases, targetQbCases);

    // If QB pool has fewer cases for these selected chapters, seamlessly fulfill from AI pool for these chapters
    if (pickedQb.length < targetQbCases && directAiCases.length > 0) {
        let needed = targetQbCases - pickedQb.length;
        let extraAi = pickFromPool(directAiCases, needed);
        pickedAi = pickedAi.concat(extraAi);
    }

    chosen = shuffleArray(pickedAi.concat(pickedQb));

    // Fallback if still less than count
    if (chosen.length < count) {
        let allCombined = directAiCases.concat(directQbCases);
        let fallback = shuffleArray(allCombined);
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

function generateCustomDescriptivePaper(chaps, aiPct = 50) {
    let seenDesc = getSessionSeenSet(SESSION_DESC_KEY);
    const TOTAL_MARKS = 84; // 6 questions x 14 marks
    const MAX_THEORY_MARKS = 18; // Maximum theory in descriptive paper is 18 marks (ICAI standard)
    const targetAiMarks = Math.round(TOTAL_MARKS * (aiPct / 100));

    // 1. AI Bank Pool for selected chapters
    const rawAiDescs = (typeof pfa1_21_17es !== 'undefined' && Array.isArray(pfa1_21_17es)) ? pfa1_21_17es : [];
    const aiPool = rawAiDescs.filter(q => {
        return chaps.some(cDef => isExactChapterMatch(q.chapter_name || q.chapter, cDef.name));
    }).map(q => Object.assign({}, q, { _sourceBank: 'AI Bank', _cDef: getChapterDefForQuestion(q) }));

    // 2. Question Bank Pool for selected chapters
    const rawMtps = (typeof descriptiveQuestions !== 'undefined' && Array.isArray(descriptiveQuestions)) ? descriptiveQuestions : [];
    const rawIcaibook = (typeof icaibookData !== 'undefined' && Array.isArray(icaibookData)) ? icaibookData : [];

    const qbPool = rawMtps.concat(rawIcaibook).filter(q => {
        const text = (q.chapter_name || "") + " " + (q.chapter || "") + " " + (q.question_html || "");
        return chaps.some(cDef => matchesKeywords(text, cDef.keywords));
    }).map(q => Object.assign({}, q, { _sourceBank: 'Question Bank', _cDef: getChapterDefForQuestion(q) }));

    let fallbackQbPool = rawMtps.concat(rawIcaibook).filter(q => {
        const text = (q.chapter_name || "") + " " + (q.chapter || "") + " " + (q.question_html || "");
        return chaps.some(cDef => matchesKeywords(text, cDef.fallbackKeywords));
    }).map(q => Object.assign({}, q, { _sourceBank: 'Question Bank', _cDef: getChapterDefForQuestion(q) }));

    const allPool = aiPool.concat(qbPool);
    const hasPracticalsInPool = allPool.some(q => !isTheoryQuestion(q));
    const hasTheoryInPool = allPool.some(q => isTheoryQuestion(q));

    let remainingAiMarks = targetAiMarks;
    let remainingTotalMarks = TOTAL_MARKS;
    let currentTheoryMarks = 0;
    let usedIds = new Set();
    let usedSigs = new Set();
    let questionsList = [];

    // Exactly 6 questions of 14 marks each (Q1 compulsory, answer any 4 of Q2-Q6)
    for (let qNum = 1; qNum <= 6; qNum++) {
        const pattern = MARK_PATTERNS[Math.floor(Math.random() * MARK_PATTERNS.length)];
        let chosenParts = [];

        for (let pIdx = 0; pIdx < pattern.length; pIdx++) {
            const targetMark = pattern[pIdx];
            let pAi = remainingTotalMarks > 0 ? Math.max(0, Math.min(1, remainingAiMarks / remainingTotalMarks)) : 0;
            let preferAi = (aiPct === 100) ? true : (aiPct === 0) ? false : (Math.random() < pAi);

            // Theory budget check:
            // Q1 is strictly practical as per ICAI if practicals exist in selected chapters
            // Q2-Q5: theory capped at max 6M combined to reserve theory for Q6
            // Q6: theory sub-parts preferred (concentrated from Tier 1 dedicated theory chapters)
            let theoryBudgetLeft = MAX_THEORY_MARKS - currentTheoryMarks;
            let allowTheory = hasPracticalsInPool ? (qNum !== 1 && targetMark <= theoryBudgetLeft) : true;
            if (qNum >= 2 && qNum <= 5 && currentTheoryMarks >= 6 && hasPracticalsInPool) {
                allowTheory = false; // Reserve main theory quota for Q6!
            }
            let isQ6TheoryPreferred = (qNum === 6 && pIdx > 0 && allowTheory && hasTheoryInPool);

            let aiAvail = aiPool.filter(q => !usedIds.has(q.question_id) && !usedSigs.has(getItemSignature(q)));
            let qbAvail = qbPool.filter(q => !usedIds.has(q.question_id) && !usedSigs.has(getItemSignature(q)));

            function pickFrom(pool) {
                if (!pool || pool.length === 0) return null;
                let unseen = pool.filter(q => !isItemSeen(q, seenDesc));
                let cands = unseen.length > 0 ? unseen : pool;

                if (hasPracticalsInPool && qNum === 1) {
                    let practicals = cands.filter(q => !isTheoryQuestion(q));
                    if (practicals.length > 0) cands = practicals;
                } else if (!allowTheory && hasPracticalsInPool) {
                    let practicals = cands.filter(q => !isTheoryQuestion(q));
                    if (practicals.length > 0) cands = practicals;
                }

                let exact = cands.filter(q => Number(q.marks) === targetMark);
                if (exact.length > 0) return exact[Math.floor(Math.random() * exact.length)];
                let close = cands.filter(q => Math.abs((Number(q.marks) || 6) - targetMark) <= 2);
                if (close.length > 0) return close[Math.floor(Math.random() * close.length)];
                return cands[Math.floor(Math.random() * cands.length)];
            }

            let candidate = null;

            // In Q6 sub-parts, strictly prioritize theory from Tier 1 dedicated theory chapters (Ch 1, 15, 7, 2)
            if (isQ6TheoryPreferred) {
                let thAvail = (preferAi && aiAvail.length > 0 ? aiAvail : allPool)
                    .filter(q => !usedIds.has(q.question_id) && !usedSigs.has(getItemSignature(q)) && isTheoryQuestion(q));
                if (thAvail.length > 0) {
                    let tier1 = thAvail.filter(q => q._cDef && q._cDef.theoryTier === 1);
                    let tier2 = thAvail.filter(q => q._cDef && q._cDef.theoryTier === 2);
                    let targetPool = (tier1.length > 0) ? tier1 : (tier2.length > 0 ? tier2 : thAvail);
                    let exact = targetPool.filter(q => Number(q.marks) === targetMark);
                    candidate = (exact.length > 0) ? exact[Math.floor(Math.random() * exact.length)] : targetPool[Math.floor(Math.random() * targetPool.length)];
                }
            }

            if (!candidate && preferAi && aiAvail.length > 0) {
                candidate = pickFrom(aiAvail);
            } else if (!candidate && !preferAi && qbAvail.length > 0) {
                candidate = pickFrom(qbAvail);
            }

            if (!candidate) {
                candidate = preferAi ? pickFrom(qbAvail) : pickFrom(aiAvail);
            }

            if (!candidate) {
                let fbAvail = fallbackQbPool.filter(q => !usedIds.has(q.question_id) && !usedSigs.has(getItemSignature(q)));
                candidate = pickFrom(fbAvail);
            }

            if (!candidate) {
                candidate = pickFrom(aiPool.length > 0 ? aiPool : qbPool);
            }

            if (candidate) {
                usedIds.add(candidate.question_id);
                usedSigs.add(getItemSignature(candidate));
                markItemSeen(candidate, seenDesc);
                if (candidate._sourceBank === 'AI Bank') {
                    remainingAiMarks -= targetMark;
                }
                remainingTotalMarks -= targetMark;
                if (isTheoryQuestion(candidate)) {
                    currentTheoryMarks += targetMark;
                }
                chosenParts.push(Object.assign({}, candidate, { assignedMarks: targetMark }));
            }
        }

        const totalQMarks = chosenParts.reduce((sum, p) => sum + p.assignedMarks, 0);
        questionsList.push({
            placement: qNum,
            isCompulsory: qNum === 1,
            totalMarks: totalQMarks || 14,
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
    const config = getCustomExamConfig();
    activeChapters = config.activeChapters;
    currentExamDistribution = { aiPct: config.aiPct, qbPct: config.qbPct };

    if (typeof mcqData !== 'undefined' || typeof pf1_21_130317 !== 'undefined') {
        selectedMCQs = pickCustomMCQs(activeChapters, currentExamDistribution.aiPct, 3);
    }
    if (typeof descriptiveQuestions !== 'undefined' || typeof icaibookData !== 'undefined' || typeof pfa1_21_17es !== 'undefined') {
        selectedDescriptive = generateCustomDescriptivePaper(activeChapters, currentExamDistribution.aiPct);
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

    // Render list of active chapter tags
    const chapterTagsHtml = activeChapters.map(c => `<span class="scope-tag">${c.name}</span>`).join(' ');

    // 1. Cover / Instructions Page
    rawExamElements.push(`
        <div class="watermark">CAM2</div>
        <div class="header-center">
            FINAL EXAMINATION<br>
            PAPER - 2: ADVANCED FINANCIAL MANAGEMENT<br>
            ${examDate}<br>
            <div class="custom-header-badge">
                CUSTOM MOCK EXAMINATION (${activeChapters.length} CHAPTERS)
            </div>
        </div>

        <div style="text-align: center; margin: 10px 0 6px 0;">
            <div class="scope-tag-wrap">${chapterTagsHtml}</div>
        </div>

        <div style="text-align: right; font-weight: bold; margin: 10px 0; font-size: 14.5px;">
            Maximum Marks &ndash; 100 &nbsp;|&nbsp; Time Allowed &ndash; 3 Hours
        </div>

        <div class="header-center" style="margin-top: 8px; text-decoration: underline; font-weight: bold;">
            GENERAL INSTRUCTIONS
        </div>

        <ul class="instructions">
            <li>Part I: Objective Type Questions (30 Marks). All 3 Case Scenarios are compulsory.</li>
            <li>Part II: Descriptive Answers (70 Marks). Question No. 1 is compulsory (14 Marks). Answer any <strong>four</strong> questions from Question Nos. 2 to 6 (14 Marks each).</li>
            <li>Duration of the examination is 3 hours (180 Minutes).</li>
            <li><strong>Syllabus Scope:</strong> All questions in this paper are selected strictly from your ${activeChapters.length} chosen chapter(s).</li>
            <li>Working notes should form part of the respective answers. Appropriate assumptions where necessary must be stated.</li>
        </ul>
    `);

    // Results Banner if exam completed
    if (examCompleted) {
        const result = calculateMcqScore();
        rawExamElements.push(`
            <div class="score-banner no-split">
                <h4>🎯 Custom Exam Scorecard</h4>
                <p>
                    <strong>Part I (MCQs):</strong> Scored <strong>${result.score}</strong> / <strong>${result.total}</strong> correct (${result.percent}%).
                </p>
                <p style="margin-top: 6px; font-size: 13.5px; color: #475569;">
                    <strong>Part II (Descriptive):</strong> Review model answers and marking breakdown for your selected topics below.
                </p>
            </div>
        `);
    }

    // 2. Part I - Objective Section
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
                    const label = chunkIdx === 0 ? `<strong>Q${qIdx + 1}:</strong> ` : "";
                    rawExamElements.push(`<span class="mcq-question-text" data-qid="${q.question_id}" style="display:inline; line-height:1.5; font-size:calc(15px * var(--font-scale));">${label}${chunk} </span>`);
                });
                rawExamElements.push(`<div style="display:block; height:8px; width:100%;"></div>`);

                q.options.forEach((opt, i) => {
                    const isCorrect = examCompleted && (i === q.answer) ? "correct-ans" : "";
                    const userSelectedIdx = userAnswersMap[q.question_id];
                    const isUserChoice = (userSelectedIdx === i) ? "selected" : "";
                    const optionHtml = `<div class="mcq-option no-split ${isCorrect} ${isUserChoice}" data-qid="${q.question_id}" onclick="selectOption(this)" id="q-${bIdx}-${qIdx}-${i}">${sanitizeInsertedMathHtml(opt)}</div>`;
                    rawExamElements.push(optionHtml);
                });

                if (examCompleted) {
                    const explHtml = q.explanation ? `<br><span style="font-size:13px; color:#475569; margin-top:4px; display:block; line-height:1.45;"><strong>Explanation:</strong> ${formatExplanationHtml(q.explanation)}</span>` : "";
                    rawExamElements.push(`<div class="solution-box no-split" style="margin-bottom:15px; display:block;"><strong>Correct Answer:</strong> Option ${String.fromCharCode(65 + q.answer)} &ndash; ${sanitizeInsertedMathHtml(q.options[q.answer])}${explHtml}</div>`);
                }
            });
        });
    }

    // 3. Part II - Descriptive Section
    if (selectedDescriptive.length > 0) {
        rawExamElements.push(`
            <div class="header-center section-divider no-split" style="margin: 30px 0 15px 0; font-size: 15px; font-weight: bold; border-top: 2px solid #0f172a; padding-top: 14px; text-transform: uppercase;">
                PART II &ndash; DESCRIPTIVE QUESTIONS (70 MARKS)<br>
                <span style="font-size: 13px; font-weight: normal; color: #475569;">Question 1 is compulsory (14 Marks). Answer any four from Questions 2 to 6 (14 Marks each).</span>
            </div>
        `);

        selectedDescriptive.forEach((group, gIdx) => {
            const qNum = group.placement || (gIdx + 1);
            const compLabel = (qNum === 1) ? " (Compulsory)" : "";

            rawExamElements.push(`<h3 class="no-split" style="color:#0f172a; border-bottom:1.5px solid #0f172a; padding-bottom:4px; margin-top:22px; margin-bottom:8px; font-size:15px; font-weight:bold; display:block;">Question ${qNum}${compLabel}</h3>`);

            group.parts.forEach((q, pIdx) => {
                const partLabel = String.fromCharCode(97 + pIdx); // 'a', 'b', 'c'
                const marksVal = q.assignedMarks || q.marks || 6;

                if (!examCompleted) {
                    const marksBadge = `<div class="no-split" style="background-color: #fee2e2; color: #991b1b; border: 1px solid #fca5a5; padding: 4px 8px; border-radius: 4px; font-weight: bold; font-size: 13px; display: inline-block; margin-bottom: 8px;">[ ${marksVal} Marks ]</div>`;
                    rawExamElements.push(marksBadge);
                }

                rawExamElements = rawExamElements.concat(splitHtmlIntoElements(sanitizeInsertedMathHtml(q.question_html)));

                if (examCompleted && q.solution_html) {
                    rawExamElements.push(`
                        <div class="solution-box no-split" style="margin-top: 12px; margin-bottom: 18px; display: block;">
                            <div style="font-weight: 700; color: #1e40af; margin-bottom: 6px; border-bottom: 1px solid #bfdbfe; padding-bottom: 3px;">
                                Model Solution &bull; Question ${qNum}(${partLabel}) &ndash; ${marksVal} Marks
                            </div>
                            ${sanitizeInsertedMathHtml(q.solution_html)}
                        </div>
                    `);
                }
            });
        });
    }

    // 4. End of Paper Submission & Solution Trigger
    if (!examCompleted) {
        rawExamElements.push(`
            <div class="finish-btn-container no-split" style="text-align: center; margin: 30px 0; display: block;">
                <button type="button" class="finish-exam-btn" onclick="finishExam()">Submit & Reveal Complete Solutions</button>
            </div>
        `);
    }
}

// ==========================================
// 5. 3D FLIPBOOK RENDERING & PAGE FLOW
// ==========================================
function renderBookPages() {
    const bookContainer = document.getElementById("book");
    if (!bookContainer) return;
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

    // Reapply selected styling on MCQ options
    Object.keys(userAnswersMap).forEach(qid => {
        const selectedIdx = userAnswersMap[qid];
        const opts = document.querySelectorAll(`.mcq-option[data-qid="${qid}"]`);
        if (opts && opts[selectedIdx]) {
            opts[selectedIdx].classList.add('selected');
            opts[selectedIdx].style.borderColor = '#2563eb';
            if (examCompleted && !opts[selectedIdx].classList.contains('correct-ans')) {
                opts[selectedIdx].style.backgroundColor = '#fee2e2';
                opts[selectedIdx].style.borderColor = '#ef4444';
            }
        }
    });

    initBookPhysics();
}

// ==========================================
// 6. EXAM LOGIC & TIMER
// ==========================================
let timerInterval;

function selectOption(el) {
    if (examCompleted) return;
    const qid = el.getAttribute('data-qid');
    const allOpts = document.querySelectorAll(`.mcq-option[data-qid="${qid}"]`);
    allOpts.forEach(opt => {
        opt.classList.remove('selected');
        opt.style.borderColor = '#cbd5e1';
    });
    el.classList.add('selected');
    el.style.borderColor = '#2563eb';

    const parts = el.id.split('-');
    const optIdx = parseInt(parts[parts.length - 1], 10);
    userAnswersMap[qid] = optIdx;
}

function finishExam() {
    if (examCompleted) return;
    if (!confirm("Are you sure you want to conclude the exam? Once submitted, your answers will be locked and complete solutions will be revealed.")) {
        return;
    }
    examCompleted = true;
    if (timerInterval) clearInterval(timerInterval);
    const timerDiv = document.getElementById("exam-timer");
    if (timerDiv) {
        timerDiv.innerText = "SUBMITTED";
        timerDiv.classList.remove("timer-warning");
    }
    const homeBtn = document.getElementById("home-btn");
    if (homeBtn) homeBtn.style.display = "block";

    generateExamData();
    renderBookPages();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function startExamTimer() {
    if (document.getElementById("exam-timer")) return; 
    
    const timerDiv = document.createElement("div");
    timerDiv.id = "exam-timer";
    timerDiv.className = "timer-container";
    timerDiv.innerText = "03:00:00";
    document.body.appendChild(timerDiv);

    let totalSeconds = 3 * 60 * 60; // 3 Hours

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
            finishExam(); 
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
    if (!book) return;
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
    if (!book) return;
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

    // Keyboard shortcuts
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
