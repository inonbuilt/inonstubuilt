// ==============================================================
// CALCIUM NOTES - SPOM CBT EXAM ENGINE (ICAI WEIGHTAGE ALIGNED)
// Supports SET A (Corporate & Economic Laws) and SET B (SCPM)
// ==============================================================

// ==========================
// CONFIG
// ==========================
const TOTAL_QUESTIONS = 50;
const MARK_PER_QUESTION = 2;
const PASS_MARK = 50;
const TOTAL_TIME = 3 * 60 * 60;

// ==========================
// GLOBAL VARIABLES
// ==========================
let selectedQuestions = [];
let currentQuestion = 0;
let userAnswers = [];
let markedForReview = [];
let visitedQuestions = [];
let timeLeft = TOTAL_TIME;
let timerInterval;
let lastCase = null;

// ==============================================================
// BLUEPRINTS
// ==============================================================

// SET A: Corporate and Economic Laws (50 Questions / 100 Marks)
// Corporate Laws: 70% (35 Questions / 70 Marks)
//   - Company Law: 50% (25 Questions / 50 Marks)
//       Group 1 (Directors Trio: Ch 1, 2, 3): 10 Questions (20 Marks) [35%-45%]
//       Group 2 (Inspection, Compromise/Amalgamation & Oppression: Ch 4, 5, 6): 7 Questions (14 Marks) [25%-30%]
//       Group 3 (Winding Up, Misc, Special Courts/NCLT, e-Filing: Ch 7, 8, 9, 10): 8 Questions (16 Marks) [30%-35%]
//   - Securities Laws: 20% (10 Questions / 20 Marks)
//       SEBI Act, LODR, ICDR, SAST & PIT
// Economic Laws: 30% (15 Questions / 30 Marks)
//   - Section 1 (FEMA 1999): 6 Questions (12 Marks) [35%-40%]
//   - Section 2 (FCRA 2010): 3 Questions (6 Marks) [20%-30%]
//   - Section 3 (IBC 2016): 6 Questions (12 Marks) [35%-40%]
const SET_A_BLUEPRINT = [
    {
        name: "Company Law - Group 1 (Directors, Managerial & Board Meetings)",
        targetQuestions: 10,
        chapters: ["chapter1", "chapter2", "chapter3"]
    },
    {
        name: "Company Law - Group 2 (Inspection, Amalgamation & Oppression)",
        targetQuestions: 7,
        chapters: ["chapter4", "chapter5", "chapter6"]
    },
    {
        name: "Company Law - Group 3 (Winding Up, Misc, NCLT & e-Filing)",
        targetQuestions: 8,
        chapters: ["chapter7", "chapter8", "chapter9", "chapter10"]
    },
    {
        name: "Securities Laws (SEBI Act, LODR, ICDR, SAST & PIT)",
        targetQuestions: 10,
        chapters: ["sebi", "sebilodr", "sebiicdr", "sebisast"]
    },
    {
        name: "Economic Laws - Section 1 (FEMA 1999)",
        targetQuestions: 6,
        chapters: ["fema"]
    },
    {
        name: "Economic Laws - Section 2 (FCRA 2010)",
        targetQuestions: 3,
        chapters: ["fcra"]
    },
    {
        name: "Economic Laws - Section 3 (IBC 2016)",
        targetQuestions: 6,
        chapters: ["ibc"]
    }
];

// SET B: Strategic Cost & Performance Management (50 Questions / 100 Marks)
// Module 1: Strategic Cost Management: 50% (25 Questions / 50 Marks)
//   - Sub-part 1 (Cost Management Techniques & Modern Business: Ch 1, 2, 3, 4): 14 Questions (28 Marks)
//   - Sub-part 2 (Strategic Decision Making, Revenue & Profit: Ch 5, 6, 7): 11 Questions (22 Marks)
// Module 2: Strategic Performance Management: 50% (25 Questions / 50 Marks)
//   - Sub-part 1 (Performance Measurement & Reporting: Ch 8, 9, 10, 11): 13 Questions (26 Marks)
//   - Sub-part 2 (Divisional Transfer Pricing & Standard Costing: Ch 12, 13): 12 Questions (24 Marks)
const SET_B_BLUEPRINT = [
    {
        name: "Strategic Cost Management - Techniques & Modern Business (Ch 1, 2, 3, 4)",
        targetQuestions: 14,
        chapters: ["chapter1", "chapter2", "chapter3", "chapter4"]
    },
    {
        name: "Strategic Cost Management - Decision Making, Revenue & Profit (Ch 5, 6, 7)",
        targetQuestions: 11,
        chapters: ["chapter5", "chapter6", "chapter7"]
    },
    {
        name: "Strategic Performance Management - Measurement & Reporting (Ch 8, 9, 10, 11)",
        targetQuestions: 13,
        chapters: ["chapter8", "chapter9", "chapter10", "chapter11"]
    },
    {
        name: "Strategic Performance Management - Transfer Pricing & Standard Costing (Ch 12, 13)",
        targetQuestions: 12,
        chapters: ["chapter12", "chapter13"]
    }
];

// ==========================
// UTILITY: SHUFFLE ARRAY
// ==========================
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// ==============================================================
// CHAPTER CLASSIFICATION & NORMALIZATION HELPERS
// ==============================================================
function normalizeSetAChapterKey(chap) {
    if (!chap) return '';
    let c = chap.toLowerCase().trim().replace(/[^a-z0-9]/g, '');
    if (c === '1' || c === 'ch1' || c === 'chapter1' || c.includes('director')) return 'chapter1';
    if (c === '2' || c === 'ch2' || c === 'chapter2' || c.includes('managerial') || c.includes('remuneration')) return 'chapter2';
    if (c === '3' || c === 'ch3' || c === 'chapter3' || c.includes('boardmeeting') || c.includes('meetingsofboard')) return 'chapter3';
    if (c === '4' || c === 'ch4' || c === 'chapter4' || c.includes('inspection') || c.includes('investigation')) return 'chapter4';
    if (c === '5' || c === 'ch5' || c === 'chapter5' || c.includes('compromise') || c.includes('amalgamation')) return 'chapter5';
    if (c === '6' || c === 'ch6' || c === 'chapter6' || c.includes('oppression') || c.includes('mismanagement')) return 'chapter6';
    if (c === '7' || c === 'ch7' || c === 'chapter7' || c.includes('windingup')) return 'chapter7';
    if (c === '8' || c === 'ch8' || c === 'chapter8' || c.includes('miscellaneous')) return 'chapter8';
    if (c === '9' || c === 'ch9' || c === 'chapter9' || c.includes('adjudication') || c.includes('nclt') || c.includes('specialcourt')) return 'chapter9';
    if (c === '10' || c === 'ch10' || c === 'chapter10' || c.includes('efiling') || c.includes('xbrl')) return 'chapter10';
    if (c === 'sebilodr' || c.includes('lodr') || c.includes('listingobligation')) return 'sebilodr';
    if (c === 'sebiicdr' || c.includes('icdr') || c.includes('issueofcapital')) return 'sebiicdr';
    if (c === 'sebisast' || c.includes('sast') || c.includes('insidertrading') || c.includes('pit')) return 'sebisast';
    if (c === 'sebi' || c.includes('sebiact')) return 'sebi';
    if (c === 'fema' || c.includes('foreignexchange')) return 'fema';
    if (c === 'fcra' || c.includes('foreigncontribution')) return 'fcra';
    if (c === 'ibc' || c.includes('insolvency') || c.includes('bankruptcy')) return 'ibc';
    return c;
}

function inferSetACaseChapter(cs) {
    if (cs.case_chapter) return normalizeSetAChapterKey(cs.case_chapter);
    const text = ((cs.caseText || '') + ' ' + (cs.questions ? cs.questions.map(q => q.question || '').join(' ') : '')).toLowerCase();

    if (text.includes('foreign exchange') || text.includes('fema') || text.includes('current account transaction') || text.includes('capital account transaction')) return 'fema';
    if (text.includes('foreign contribution') || text.includes('fcra')) return 'fcra';
    if (text.includes('insolvency') || text.includes('cirp') || text.includes('operational creditor') || text.includes('financial creditor') || text.includes('resolution professional')) return 'ibc';
    if (text.includes('takeover') || text.includes('sast') || text.includes('insider trading') || text.includes('upsi')) return 'sebisast';
    if (text.includes('icdr') || text.includes('issue of capital') || text.includes('anchor investor')) return 'sebiicdr';
    if (text.includes('lodr') || text.includes('listing obligation') || text.includes('audit committee')) return 'sebilodr';
    if (text.includes('sebi act') || text.includes('sebi')) return 'sebi';
    if (text.includes('e-filing') || text.includes('xbrl') || text.includes('mca21')) return 'chapter10';
    if (text.includes('nclt') || text.includes('special court') || text.includes('appellate tribunal')) return 'chapter9';
    if (text.includes('dormant company') || text.includes('registered valuer') || text.includes('miscellaneous')) return 'chapter8';
    if (text.includes('winding up') || text.includes('liquidator') || text.includes('official liquidator')) return 'chapter7';
    if (text.includes('oppression') || text.includes('mismanagement') || text.includes('class action')) return 'chapter6';
    if (text.includes('amalgamation') || text.includes('compromise') || text.includes('arrangement') || text.includes('merger')) return 'chapter5';
    if (text.includes('investigation') || text.includes('sfio') || text.includes('serious fraud') || text.includes('inspection') || text.includes('inquiry')) return 'chapter4';
    if (text.includes('board meeting') || text.includes('audit committee') || text.includes('powers of board') || text.includes('section 186') || text.includes('section 185')) return 'chapter3';
    if (text.includes('managerial personnel') || text.includes('managing director') || text.includes('schedule v') || text.includes('managerial remuneration')) return 'chapter2';
    if (text.includes('director') || text.includes('din') || text.includes('independent director') || text.includes('women director')) return 'chapter1';

    return 'chapter1';
}

function normalizeSetBChapterKey(chap) {
    if (!chap) return '';
    let c = chap.toLowerCase().trim().replace(/[^a-z0-9]/g, '');
    if (c === '1' || c === 'ch1' || c === 'chapter1' || c.includes('strategiccostmanagement')) return 'chapter1';
    if (c === '2' || c === 'ch2' || c === 'chapter2' || c.includes('modernbusiness')) return 'chapter2';
    if (c === '3' || c === 'ch3' || c === 'chapter3' || c.includes('leansystem')) return 'chapter3';
    if (c === '4' || c === 'ch4' || c === 'chapter4' || c.includes('specialist')) return 'chapter4';
    if (c === '5' || c === 'ch5' || c === 'chapter5' || c.includes('emergingbusiness')) return 'chapter5';
    if (c === '6' || c === 'ch6' || c === 'chapter6' || c.includes('strategicrevenue')) return 'chapter6';
    if (c === '7' || c === 'ch7' || c === 'chapter7' || c.includes('strategicprofit')) return 'chapter7';
    if (c === '8' || c === 'ch8' || c === 'chapter8' || c.includes('introspm')) return 'chapter8';
    if (c === '9' || c === 'ch9' || c === 'chapter9' || c.includes('privatesector')) return 'chapter9';
    if (c === '10' || c === 'ch10' || c === 'chapter10' || c.includes('notforprofit')) return 'chapter10';
    if (c === '11' || c === 'ch11' || c === 'chapter11' || c.includes('performancereport')) return 'chapter11';
    if (c === '12' || c === 'ch12' || c === 'chapter12' || c.includes('transferpricing')) return 'chapter12';
    if (c === '13' || c === 'ch13' || c === 'chapter13' || c.includes('standardcosting') || c.includes('variance')) return 'chapter13';
    return c;
}

function inferSetBCaseChapter(cs) {
    if (cs.case_chapter) return normalizeSetBChapterKey(cs.case_chapter);
    const text = ((cs.caseText || '') + ' ' + (cs.questions ? cs.questions.map(q => q.question || '').join(' ') : '')).toLowerCase();

    if (text.includes('transfer pricing') || text.includes('transfer price') || text.includes('divisional transfer')) return 'chapter12';
    if (text.includes('standard costing') || text.includes('variance analysis') || text.includes('planning variance') || text.includes('operational variance') || text.includes('mix variance') || text.includes('yield variance')) return 'chapter13';
    if (text.includes('balanced scorecard') || text.includes('building block model') || text.includes('performance pyramid') || text.includes('economic value added') || text.includes('eva') || text.includes('return on investment') || text.includes('roi')) return 'chapter9';
    if (text.includes('not-for-profit') || text.includes('value for money') || text.includes('non profit')) return 'chapter10';
    if (text.includes('performance report') || text.includes('variance report') || text.includes('earned value') || text.includes('trend report')) return 'chapter11';
    if (text.includes('performance management') || text.includes('responsibility center') || text.includes('responsibility accounting')) return 'chapter8';
    if (text.includes('pareto') || text.includes('activity based costing') || text.includes('abc') || text.includes('customer profitability')) return 'chapter7';
    if (text.includes('pricing strategy') || text.includes('revenue management') || text.includes('penetration pricing') || text.includes('skimming') || text.includes('price elasticity')) return 'chapter6';
    if (text.includes('emerging business') || text.includes('digital business') || text.includes('subscription model') || text.includes('platform') || text.includes('e-commerce')) return 'chapter5';
    if (text.includes('target costing') || text.includes('life cycle costing') || text.includes('environmental management') || text.includes('throughput accounting')) return 'chapter4';
    if (text.includes('lean') || text.includes('kaizen') || text.includes('5s') || text.includes('total productive maintenance') || text.includes('tpm') || text.includes('jit') || text.includes('just in time')) return 'chapter3';
    if (text.includes('total quality management') || text.includes('tqm') || text.includes('cost of quality') || text.includes('supply chain management')) return 'chapter2';

    return 'chapter1';
}

function normalizeDifficulty(val) {
    if (!val || typeof val !== 'string') return 'medium';
    const v = val.trim().toLowerCase();
    if (v.includes('easy')) return 'easy';
    if (v.includes('med') || v.includes('mod')) return 'medium';
    if (v.includes('hard') || v.includes('tough') || v.includes('extreme')) return 'hard';
    return 'medium';
}

function getCaseDifficulty(cs) {
    if (cs.difficulty) return normalizeDifficulty(cs.difficulty);
    if (cs.questions && Array.isArray(cs.questions)) {
        let counts = { easy: 0, medium: 0, hard: 0 };
        for (let q of cs.questions) {
            if (q.difficulty) counts[normalizeDifficulty(q.difficulty)]++;
        }
        if (counts.hard > counts.medium && counts.hard > counts.easy) return 'hard';
        if (counts.medium > counts.easy && counts.medium >= counts.hard) return 'medium';
        if (counts.easy > 0) return 'easy';
    }
    return 'medium';
}

// ==============================================================
// INIT EXAM (BLUEPRINT ENGINE)
// ==============================================================
function initExam() {

    // 1. Detect Set A vs Set B
    const isSetB = document.title.toLowerCase().includes("set b") ||
        window.location.pathname.toLowerCase().includes("setb") ||
        (typeof AICaseStudies !== "undefined" && AICaseStudies.length > 0 && AICaseStudies[0].case_id && AICaseStudies[0].case_id.startsWith("SCM"));

    const blueprint = isSetB ? SET_B_BLUEPRINT : SET_A_BLUEPRINT;

    // 2. Read aiPercent from URL query parameters (default 50%)
    const urlParams = new URLSearchParams(window.location.search);
    const aiPercentParam = urlParams.get('aiPercent');
    let aiPercent = aiPercentParam !== null ? parseInt(aiPercentParam, 10) : 50;
    if (isNaN(aiPercent) || aiPercent < 0) aiPercent = 0;
    if (aiPercent > 100) aiPercent = 100;

    const aiCases = (typeof AICaseStudies !== 'undefined' && Array.isArray(AICaseStudies)) ? AICaseStudies : [];
    const stdCases = (typeof caseStudies !== 'undefined' && Array.isArray(caseStudies)) ? caseStudies : [];

    // Global tracker to avoid duplicate questions across case scenarios
    const globalUsedQuestions = new Set();

    // Helper: Extract questions from case studies array up to maxCount
    function extractQuestionsFromCases(casesArray, maxCount, sectionName) {
        if (!casesArray || !Array.isArray(casesArray) || maxCount <= 0) return [];

        let shuffled = [...casesArray];
        shuffleArray(shuffled);

        let extracted = [];
        for (let cs of shuffled) {
            if (!cs || !cs.questions) continue;

            for (let q of cs.questions) {
                if (extracted.length >= maxCount) break;
                if (!q.question || !q.options || q.answer === undefined) continue;
                if (globalUsedQuestions.has(q.question)) continue;

                globalUsedQuestions.add(q.question);
                extracted.push({
                    caseContent: cs.caseText || "",
                    question: q.question,
                    options: q.options,
                    correct: (q.answer !== undefined ? q.answer : q.correct),
                    solution: q.reason || q.solution || "No reason provided",
                    sectionName: sectionName || ""
                });
            }
            if (extracted.length >= maxCount) break;
        }
        return extracted;
    }

    // Helper: Extract AI questions with difficulty distribution (50% easy, 30% medium, 20% hard)
    function extractAIQuestionsWithDifficulty(casesArray, maxCount, sectionName) {
        if (!casesArray || !Array.isArray(casesArray) || maxCount <= 0) return [];

        const easyCases = casesArray.filter(cs => getCaseDifficulty(cs) === "easy");
        const mediumCases = casesArray.filter(cs => getCaseDifficulty(cs) === "medium");
        const hardCases = casesArray.filter(cs => getCaseDifficulty(cs) === "hard");

        let targetEasy = Math.round(maxCount * 0.50);
        let targetMedium = Math.round(maxCount * 0.30);
        let targetHard = maxCount - targetEasy - targetMedium;

        let easyQs = extractQuestionsFromCases(easyCases, targetEasy, sectionName);
        let mediumQs = extractQuestionsFromCases(mediumCases, targetMedium, sectionName);
        let hardQs = extractQuestionsFromCases(hardCases, targetHard, sectionName);

        let total = easyQs.length + mediumQs.length + hardQs.length;
        if (total < maxCount) {
            const shortfall = maxCount - total;
            let extra = extractQuestionsFromCases(casesArray, shortfall, sectionName);
            return [...easyQs, ...mediumQs, ...hardQs, ...extra];
        }

        return [...easyQs, ...mediumQs, ...hardQs];
    }

    // 3. Extract questions per blueprint section adhering strictly to ICAI weightage
    let pickedQuestions = [];

    blueprint.forEach(bucket => {
        const bucketTarget = bucket.targetQuestions;
        const bucketChapters = new Set(bucket.chapters);

        // Filter AI and Standard pools matching this bucket's chapters
        const bucketAICases = aiCases.filter(cs => {
            const chap = isSetB ? inferSetBCaseChapter(cs) : inferSetACaseChapter(cs);
            return bucketChapters.has(chap);
        });

        const bucketStdCases = stdCases.filter(cs => {
            const chap = isSetB ? inferSetBCaseChapter(cs) : inferSetACaseChapter(cs);
            return bucketChapters.has(chap);
        });

        const targetAI = Math.round(bucketTarget * (aiPercent / 100));
        const targetStd = bucketTarget - targetAI;

        let aiQs = extractAIQuestionsWithDifficulty(bucketAICases, targetAI, bucket.name);
        let stdQs = extractQuestionsFromCases(bucketStdCases, targetStd, bucket.name);

        let bucketTotal = aiQs.length + stdQs.length;
        if (bucketTotal < bucketTarget) {
            const needed = bucketTarget - bucketTotal;
            let topUp = extractQuestionsFromCases(bucketAICases, needed, bucket.name);
            if (topUp.length < needed) {
                let extraStd = extractQuestionsFromCases(bucketStdCases, needed - topUp.length, bucket.name);
                topUp = [...topUp, ...extraStd];
            }
            pickedQuestions.push(...aiQs, ...stdQs, ...topUp);
        } else {
            pickedQuestions.push(...aiQs, ...stdQs);
        }
    });

    // 4. If any overall shortfall exists, top up from the broader pool
    if (pickedQuestions.length < TOTAL_QUESTIONS) {
        const topUpNeeded = TOTAL_QUESTIONS - pickedQuestions.length;
        let extra = extractQuestionsFromCases(aiCases, topUpNeeded, isSetB ? "Strategic Cost & Performance Management" : "Corporate & Economic Laws");
        if (extra.length < topUpNeeded) {
            let extraStd = extractQuestionsFromCases(stdCases, topUpNeeded - extra.length, isSetB ? "Strategic Cost & Performance Management" : "Corporate & Economic Laws");
            extra = [...extra, ...extraStd];
        }
        pickedQuestions.push(...extra);
    }

    // 5. Group questions by caseContent so questions sharing a case scenario stay together
    let caseMap = new Map();
    for (let q of pickedQuestions) {
        if (!caseMap.has(q.caseContent)) {
            caseMap.set(q.caseContent, []);
        }
        caseMap.get(q.caseContent).push(q);
    }

    let caseGroups = Array.from(caseMap.values());
    shuffleArray(caseGroups); // Shuffle order of case blocks

    selectedQuestions = [];
    for (let group of caseGroups) {
        selectedQuestions.push(...group);
    }

    if (selectedQuestions.length > TOTAL_QUESTIONS) {
        selectedQuestions = selectedQuestions.slice(0, TOTAL_QUESTIONS);
    }

    const total = selectedQuestions.length;

    userAnswers = new Array(total).fill(null);
    markedForReview = new Array(total).fill(false);
    visitedQuestions = new Array(total).fill(false);

    loadQuestion();
    startTimer();
    updateGrid();
}

// ==========================
// LOAD QUESTION
// ==========================
function loadQuestion() {

    if (!selectedQuestions[currentQuestion]) return;

    visitedQuestions[currentQuestion] = true;

    const q = selectedQuestions[currentQuestion];

    // Always update case content correctly
    if (lastCase !== q.caseContent) {
        document.getElementById("caseBox").innerHTML = q.caseContent;
        lastCase = q.caseContent;
    }

    document.getElementById("questionText").innerText = q.question;

    const qNumEl = document.getElementById("questionNumber");
    if (qNumEl) {
        // Standard clean exam view
        qNumEl.innerText = `Question ${currentQuestion + 1} of ${selectedQuestions.length}`;

        // 🔍 DEBUG: Uncomment below to inspect chapter/section weightage badge during test
        /*
        if (q.sectionName) {
            qNumEl.innerHTML = `Question ${currentQuestion + 1} of ${selectedQuestions.length} <span style="background: #eff6ff; color: #1d4ed8; font-size: 11px; padding: 3px 9px; border-radius: 6px; font-weight: 700; margin-left: 8px; border: 1px solid #bfdbfe; display: inline-block; vertical-align: middle;">${q.sectionName}</span>`;
        }
        */
    }

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    q.options.forEach((opt, index) => {
        const div = document.createElement("div");
        div.classList.add("option");

        if (userAnswers[currentQuestion] === index)
            div.classList.add("selected");

        div.innerHTML = opt;
        div.onclick = () => selectOption(index);
        optionsDiv.appendChild(div);
    });

    updateGrid();
}

// ==========================
// SELECT OPTION
// ==========================
function selectOption(index) {
    userAnswers[currentQuestion] = index;
    loadQuestion();
}

// ==========================
// NAVIGATION
// ==========================
function nextQuestion() {
    if (currentQuestion < selectedQuestions.length - 1) {
        currentQuestion++;
        loadQuestion();
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

function goToQuestion(index) {
    currentQuestion = index;
    lastCase = null; // force case reload
    loadQuestion();
}

// ==========================
// MARK FOR REVIEW
// ==========================
function toggleReview() {
    markedForReview[currentQuestion] = !markedForReview[currentQuestion];
    updateGrid();
}

// ==========================
// UPDATE GRID
// ==========================
function updateGrid() {

    const grid = document.getElementById("questionGrid");
    grid.innerHTML = "";

    for (let i = 0; i < selectedQuestions.length; i++) {

        const btn = document.createElement("button");
        btn.innerText = i + 1;

        if (userAnswers[i] !== null) {
            btn.classList.add("answered");
        }
        else if (visitedQuestions[i]) {
            btn.classList.add("not-attempted");
        }

        if (markedForReview[i]) {
            btn.classList.remove("answered");
            btn.classList.remove("not-attempted");
            btn.classList.add("review");
        }

        if (i === currentQuestion)
            btn.classList.add("current");

        btn.onclick = () => goToQuestion(i);
        grid.appendChild(btn);
    }
}

// ==========================
// TIMER
// ==========================
function startTimer() {
    timerInterval = setInterval(() => {

        timeLeft--;

        let hours = Math.floor(timeLeft / 3600);
        let minutes = Math.floor((timeLeft % 3600) / 60);
        let seconds = timeLeft % 60;

        const timerEl = document.getElementById("timer");
        if (timerEl) {
            timerEl.innerText = `${hours}:${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
        }

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            submitExam();
        }

    }, 1000);
}

// ==========================
// SUBMIT EXAM
// ==========================
function submitExam() {

    clearInterval(timerInterval);

    let score = 0;
    let correctCount = 0;
    let wrongCount = 0;
    let unanswered = 0;

    selectedQuestions.forEach((q, index) => {

        if (userAnswers[index] === null) {
            unanswered++;
        }
        else if (userAnswers[index] === q.correct) {
            score += MARK_PER_QUESTION;
            correctCount++;
        }
        else {
            wrongCount++;
        }
    });

    let percentage = (
        (score / (selectedQuestions.length * MARK_PER_QUESTION)) * 100
    ).toFixed(2);

    let grade = "";
    if (percentage >= 75) grade = "A+";
    else if (percentage >= 60) grade = "A";
    else if (percentage >= 50) grade = "B";
    else grade = "Fail";

    try {
        const isSetB = document.title.toLowerCase().includes("set b") ||
            window.location.pathname.toLowerCase().includes("setb") ||
            (typeof AICaseStudies !== "undefined" && AICaseStudies.length > 0 && AICaseStudies[0].case_id && AICaseStudies[0].case_id.startsWith("SCM"));

        const setLabel = isSetB ? "SET B" : "SET A";
        const subjectTitle = isSetB ? "Strategic Cost & Performance Management (SCPM)" : "Corporate and Economic Laws";

        if (typeof saveSpomResult === "function") {
            saveSpomResult({
                set: setLabel,
                title: `${setLabel} Prefinal Mock Exam`,
                subject: subjectTitle,
                mode: "Full Mock",
                score: score,
                totalMarks: selectedQuestions.length * MARK_PER_QUESTION,
                percentage: parseFloat(percentage),
                grade: grade,
                passMark: PASS_MARK,
                correctCount: correctCount,
                wrongCount: wrongCount,
                unanswered: unanswered
            });
        }
    } catch(err) {
        console.warn("Could not save to dashboard:", err);
    }

    showResult(score, percentage, grade, correctCount, wrongCount, unanswered);
}

// ==========================
// RESULT & SECTIONAL BREAKDOWN
// ==========================
function showResult(score, percentage, grade, correctCount, wrongCount, unanswered) {

    const examAreaEl = document.getElementById("examArea");
    if (examAreaEl) examAreaEl.style.display = "none";

    const resultDiv = document.getElementById("resultArea");
    if (!resultDiv) return;
    resultDiv.style.display = "block";

        // Compute sectional breakdown stats
    const sectionStats = {};
    selectedQuestions.forEach((q, idx) => {
        const sec = q.sectionName || "General Section";
        if (!sectionStats[sec]) {
            sectionStats[sec] = { total: 0, correct: 0, marks: 0 };
        }
        sectionStats[sec].total++;
        if (userAnswers[idx] === q.correct) {
            sectionStats[sec].correct++;
            sectionStats[sec].marks += MARK_PER_QUESTION;
        }
    });

    let sectionBreakdownHtml = `
        <div style="margin: 24px auto; max-width: 720px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 22px; text-align: left; box-shadow: 0 4px 15px rgba(0,0,0,0.03);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; border-bottom: 1px solid #f1f5f9; padding-bottom: 12px;">
                <h4 style="color: #0f172a; margin: 0; font-size: 16px; font-weight: 700; display: flex; align-items: center; gap: 8px;">
                    📊 Blueprint Performance Breakdown
                </h4>
                <span style="font-size: 12px; font-weight: 600; color: #64748b; background: #f8fafc; padding: 3px 10px; border-radius: 6px; border: 1px solid #e2e8f0;">Section Analytics</span>
            </div>
            <div style="display: grid; gap: 12px;">
    `;

    Object.entries(sectionStats).forEach(([secName, stat]) => {
        const maxMarks = stat.total * MARK_PER_QUESTION;
        const pct = Math.round((stat.correct / stat.total) * 100);
        const isPassedSec = pct >= 50;
        const barColor = isPassedSec ? "#10b981" : "#ef4444";
        const badgeBg = isPassedSec ? "#ecfdf5" : "#fef2f2";
        const badgeColor = isPassedSec ? "#047857" : "#b91c1c";
        const badgeBorder = isPassedSec ? "#a7f3d0" : "#fecaca";

        sectionBreakdownHtml += `
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 12px 16px; border-radius: 10px;">
                <div style="display: flex; justify-content: space-between; align-items: center; font-size: 13px; font-weight: 600; color: #1e293b; margin-bottom: 8px;">
                    <span style="display: flex; align-items: center; gap: 6px;">
                        <span style="color: ${isPassedSec ? '#10b981' : '#f59e0b'}; font-size: 14px;">${isPassedSec ? '✅' : '⚠️'}</span>
                        ${secName}
                    </span>
                    <span style="background: ${badgeBg}; color: ${badgeColor}; border: 1px solid ${badgeBorder}; padding: 2px 8px; border-radius: 6px; font-size: 12px; font-weight: 700;">
                        ${stat.marks} / ${maxMarks} Marks (${pct}%)
                    </span>
                </div>
                <div style="background: #e2e8f0; height: 7px; border-radius: 4px; overflow: hidden;">
                    <div style="background: ${barColor}; width: ${pct}%; height: 100%; border-radius: 4px; transition: width 0.5s ease;"></div>
                </div>
                <div style="display: flex; justify-content: space-between; font-size: 11px; color: #64748b; margin-top: 5px;">
                    <span>${stat.correct} of ${stat.total} MCQs Correct</span>
                    <span>${stat.total - stat.correct} Missed</span>
                </div>
            </div>
        `;
    });

    sectionBreakdownHtml += `
            </div>
        </div>
    `;

    let html = `
        <div class="social-updates-box">
            <p style="font-size: 15px; font-weight: 500; color: #374151; line-height: 1.6; margin-bottom: 10px;">
                If you notice any errors, bugs, incorrect answers, outdated information, or anything that needs improvement, please let us know through our social media channels.
            </p>
            <p style="font-size: 14px; font-weight: 500; color: #4b5563; line-height: 1.6; margin-bottom: 10px;">
                Your feedback helps us improve the accuracy, quality, and learning experience of Calcium Notes for all CA students.
            </p>
            <p style="font-size: 15px; font-weight: 600; color: #1f2937; margin-bottom: 6px;">
                Together, let's make Calcium Notes better!
            </p>
            <p style="font-size: 15px; font-weight: 600; color: #2563eb; margin-bottom: 16px;">
                Thank you for being a part of Calcium Notes. 🙌
            </p>
            <div class="social-btn-group">
                <a href="https://www.instagram.com/calciumnotes" class="social-btn instagram-btn" target="_blank" rel="noopener">
                    Instagram
                </a>
                <a href="https://x.com/Calciumnotes" class="social-btn twitter-btn" target="_blank" rel="noopener">
                    Twitter
                </a>
                <a href="mailto:calciumnotes@gmail.com" class="social-btn email-btn" target="_blank" rel="noopener" style="background: #ea4335;">
                    Email
                </a>
            </div>
        </div>

        <div class="result-disclaimer-box" style="background: #fef2f2; border: 1.5px solid #ef4444; border-radius: 8px; padding: 12px 18px; margin: 0 auto 24px auto; text-align: center; max-width: 720px;">
            <p style="color: #dc2626; font-size: 14px; font-weight: 600; margin: 0; line-height: 1.5;">
                ⚠️ <strong>Disclaimer:</strong> The model is good at making questions but is not good in validating the answers, so the result may not be accurate. This is only for practice.
            </p>
        </div>

        <h2>Exam Result</h2>
        <p><strong>Total Marks:</strong> ${score} / ${selectedQuestions.length * MARK_PER_QUESTION}</p>
        <p><strong>Percentage:</strong> ${percentage}%</p>
        <p><strong>Grade:</strong> ${grade}</p>
        <p><strong>Status:</strong> ${score >= PASS_MARK ? "PASS ✅" : "FAIL ❌"}</p>
        <hr>
        <h3>Performance Analytics</h3>
        <p>Correct: ${correctCount}</p>
        <p>Wrong: ${wrongCount}</p>
        <p>Unanswered: ${unanswered}</p>

        ${sectionBreakdownHtml}

        <div style="margin: 22px 0; display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
            <a href="../espom.html#dashboard" style="display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px; background: #2563eb; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 700; font-size: 14px; box-shadow: 0 4px 14px rgba(37,99,235,0.4);">📊 View Results on SPOM Dashboard</a>
            <button onclick="window.location.reload();" style="padding: 12px 24px; background: #374151; color: #ffffff; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; font-size: 14px;">🔄 Retake Test</button>
        </div>
        <hr>
        <h3>Detailed Solution Review</h3>
    `;

    selectedQuestions.forEach((q, index) => {
        // 🔍 DEBUG: Change '' to (q.sectionName ? ` (${q.sectionName})` : '') to show section in review
        const sectionBadge = '';

        html += `
            <div class="reviewBox">
                <p><strong>Q${index + 1}:</strong> ${q.question}${sectionBadge}</p>
                <p>Your Answer: ${
                    userAnswers[index] !== null
                        ? q.options[userAnswers[index]]
                        : "Not Answered"
                }</p>
                <p>Correct Answer: ${q.options[q.correct]}</p>
                <p><strong>Reason:</strong> ${q.solution}</p>
                <hr>
            </div>
        `;
    });

    resultDiv.innerHTML = html;
}

// ==========================
initExam();
