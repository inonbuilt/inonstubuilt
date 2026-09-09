// ==============================================================
// CALCIUM NOTES - SPOM SET A CHAPTER PRACTICE ENGINE
// ==============================================================

// CONFIG
let TOTAL_QUESTIONS = 0; 
const MARK_PER_QUESTION = 2;
const MAX_CASES = 6; // Limits the test to 6 random case studies

// GLOBAL STATE
let selectedQuestions = [];
let currentQuestion = 0;
let userAnswers = [];
let markedForReview = [];
let visitedQuestions = [];
let lastCase = null;
let currentChapterTitle = "";

// CHAPTER METADATA
const SET_A_CHAPTER_TITLES = {
    'chapter1': 'Chapter 1: Appointment & Qualifications of Directors',
    'chapter2': 'Chapter 2: Appointment & Remuneration of Managerial Personnel',
    'chapter3': 'Chapter 3: Meetings of Board and its Powers',
    'chapter4': 'Chapter 4: Inspection, Inquiry and Investigation',
    'chapter5': 'Chapter 5: Compromises, Arrangements and Amalgamations',
    'chapter6': 'Chapter 6: Prevention of Oppression and Mismanagement',
    'chapter7': 'Chapter 7: Winding Up',
    'chapter8': 'Chapter 8: Miscellaneous Provisions',
    'chapter9': 'Chapter 9: Adjudication, Special Courts, NCLT & NCLAT',
    'chapter10': 'Chapter 10: e-Filing & XBRL Compliance',
    'sebi': 'Securities Laws - Chapter 1: The SEBI Act, 1992',
    'sebilodr': 'Securities Laws - Chapter 2: SEBI (LODR) Regulations, 2015',
    'sebiicdr': 'Securities Laws - Chapter 3: SEBI (ICDR) Regulations, 2018',
    'sebisast': 'Securities Laws - Chapter 4: SEBI (SAST) & Insider Trading (PIT)',
    'fema': 'Economic Laws - Chapter 1: Foreign Exchange Management Act (FEMA), 1999',
    'fcra': 'Economic Laws - Chapter 2: Foreign Contribution Regulation Act (FCRA), 2010',
    'ibc': 'Economic Laws - Chapter 3: Insolvency and Bankruptcy Code (IBC), 2016'
};

// SHUFFLE UTILITY (Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// CHAPTER NORMALIZATION
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

// Fallback topic classifier for cases without case_chapter
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

// ==============================================================
// INIT EXAM
// ==============================================================
function initExam() {
    // 1. Read Chapter from URL
    const urlParams = new URLSearchParams(window.location.search);
    const selectedChapter = urlParams.get('chapter');
    const targetNorm = normalizeSetAChapterKey(selectedChapter);

    // 2. Set dynamic title in header
    currentChapterTitle = SET_A_CHAPTER_TITLES[targetNorm] || (selectedChapter ? selectedChapter : "Chapter Practice");
    const headerEl = document.getElementById("examHeader");
    if (headerEl) {
        headerEl.innerHTML = `Calcium Notes - Premium Chapter Practice (Set A)<div class="header-sub">${currentChapterTitle}</div>`;
    }

    // 3. Prioritized Source Selection
    let filteredCases = [];

    // Priority 1: quessetaAI.js (AICaseStudies)
    if (typeof AICaseStudies !== 'undefined' && Array.isArray(AICaseStudies)) {
        filteredCases = AICaseStudies.filter(cs => {
            const c = cs.case_chapter ? normalizeSetAChapterKey(cs.case_chapter) : inferSetACaseChapter(cs);
            return c === targetNorm;
        });

        if (filteredCases.length === 0 && selectedChapter) {
            const rawLower = selectedChapter.toLowerCase();
            filteredCases = AICaseStudies.filter(cs => cs.case_chapter && cs.case_chapter.toLowerCase().includes(rawLower));
        }
    }

    // Priority 2: quesseta.js (caseStudies) fallback
    if (filteredCases.length === 0 && typeof caseStudies !== 'undefined' && Array.isArray(caseStudies)) {
        filteredCases = caseStudies.filter(cs => {
            const c = cs.case_chapter ? normalizeSetAChapterKey(cs.case_chapter) : inferSetACaseChapter(cs);
            return c === targetNorm;
        });
    }

    // 4. Shuffle and Select up to MAX_CASES
    shuffleArray(filteredCases);
    let finalCases = filteredCases.slice(0, MAX_CASES);

    // 5. Extract Questions with robust sanitization
    let extractedQuestions = [];
    for (let cs of finalCases) {
        if (!cs || !cs.questions) continue;
        for (let q of cs.questions) {
            if (!q.question || !q.options || q.answer === undefined) continue;

            // Defensive answer indexing (ensures 0-based valid index)
            let ans = typeof q.answer === 'string' ? parseInt(q.answer, 10) : q.answer;
            if (ans === 4 && q.options.length === 4) ans = 3;
            if (isNaN(ans) || ans < 0 || ans >= q.options.length) ans = 0;

            extractedQuestions.push({
                caseContent: (cs.caseText || "").trim(),
                question: q.question,
                options: q.options,
                correct: ans,
                solution: q.reason || q.solution || "No detailed explanation provided."
            });
        }
    }

    selectedQuestions = extractedQuestions;
    TOTAL_QUESTIONS = selectedQuestions.length; 

    // Failsafe: Handle empty results gracefully
    if (TOTAL_QUESTIONS === 0) {
        document.getElementById("examArea").innerHTML = `
            <div style="padding: 50px; text-align: center; width: 100%; background: white; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
                <h2 style="color: #ef4444; margin-bottom: 15px;">No Questions Found</h2>
                <p style="font-size: 16px; color: #4b5563;">No case scenarios were found for <strong>${selectedChapter || "this selection"}</strong>.</p>
                <button class="primary" style="margin-top: 25px;" onclick="if(window.history.length > 1){window.history.back();}else{window.location.href='./chapgate.html';}">Return to Chapter List</button>
            </div>`;
        return;
    }

    // Initialize state arrays
    userAnswers = new Array(TOTAL_QUESTIONS).fill(null);
    markedForReview = new Array(TOTAL_QUESTIONS).fill(false);
    visitedQuestions = new Array(TOTAL_QUESTIONS).fill(false);

    loadQuestion();
    updateGrid();
}

// ==============================================================
// LOAD QUESTION
// ==============================================================
function loadQuestion() {
    if (!selectedQuestions[currentQuestion]) return;
    visitedQuestions[currentQuestion] = true;
    const q = selectedQuestions[currentQuestion];

    // Manage caseBox visibility
    const caseBox = document.getElementById("caseBox");
    if (q.caseContent && q.caseContent.length > 0) {
        caseBox.style.display = "block";
        if (lastCase !== q.caseContent) {
            caseBox.innerHTML = q.caseContent;
            lastCase = q.caseContent;
        }
    } else {
        caseBox.style.display = "none";
        caseBox.innerHTML = "";
        lastCase = "";
    }

    document.getElementById("questionText").innerText = q.question;
    document.getElementById("questionNumber").innerText = `Question ${currentQuestion + 1} of ${TOTAL_QUESTIONS}`;

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    const optLabels = ['A', 'B', 'C', 'D', 'E', 'F'];
    q.options.forEach((opt, index) => {
        const div = document.createElement("div");
        div.classList.add("option");
        if (userAnswers[currentQuestion] === index) div.classList.add("selected");
        const lbl = optLabels[index] || (index + 1);
        div.innerHTML = `<span class="opt-label">${lbl}</span>${opt}`;
        div.onclick = () => selectOption(index);
        optionsDiv.appendChild(div);
    });

    // Update navigation button states
    const prevBtn = document.getElementById("prevBtn");
    if (prevBtn) prevBtn.disabled = (currentQuestion === 0);

    const nextBtn = document.getElementById("nextBtn");
    if (nextBtn) {
        if (currentQuestion === TOTAL_QUESTIONS - 1) {
            nextBtn.innerText = "Finish Exam";
            nextBtn.onclick = () => submitExam();
        } else {
            nextBtn.innerText = "Next";
            nextBtn.onclick = () => nextQuestion();
        }
    }

    const reviewBtn = document.getElementById("reviewBtn");
    if (reviewBtn) {
        reviewBtn.innerText = markedForReview[currentQuestion] ? "Unmark Review" : "Mark for Review";
    }

    updateGrid();
}

// ==============================================================
// USER INTERACTIONS
// ==============================================================
function selectOption(index) {
    userAnswers[currentQuestion] = index;
    loadQuestion();
}

function nextQuestion() {
    if (currentQuestion < TOTAL_QUESTIONS - 1) {
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
    loadQuestion();
}

function toggleReview() {
    markedForReview[currentQuestion] = !markedForReview[currentQuestion];
    loadQuestion();
}

// ==============================================================
// UPDATE QUESTION GRID
// ==============================================================
function updateGrid() {
    const grid = document.getElementById("questionGrid");
    if (!grid) return;
    grid.innerHTML = "";

    for (let i = 0; i < TOTAL_QUESTIONS; i++) {
        const btn = document.createElement("button");
        btn.innerText = i + 1;

        if (userAnswers[i] !== null) btn.classList.add("answered");
        else if (visitedQuestions[i]) btn.classList.add("not-attempted");

        if (markedForReview[i]) {
            btn.classList.remove("answered", "not-attempted");
            btn.classList.add("review");
        }
        if (i === currentQuestion) btn.classList.add("current");

        btn.onclick = () => goToQuestion(i);
        grid.appendChild(btn);
    }
}

// ==============================================================
// SUBMIT & RESULT
// ==============================================================
function submitExam() {
    let unanswered = 0;
    selectedQuestions.forEach((q, index) => {
        if (userAnswers[index] === null) unanswered++;
    });

    let confirmMsg = "Are you sure you want to submit your chapter practice test?";
    if (unanswered > 0) {
        confirmMsg = `You have ${unanswered} unanswered question${unanswered > 1 ? 's' : ''} out of ${TOTAL_QUESTIONS}. Are you sure you want to submit?`;
    }
    if (!confirm(confirmMsg)) {
        return;
    }

    let score = 0;
    let correctCount = 0;
    let wrongCount = 0;

    selectedQuestions.forEach((q, index) => {
        if (userAnswers[index] === null) {
            // Skipped
        } else if (userAnswers[index] === q.correct) {
            score += MARK_PER_QUESTION;
            correctCount++;
        } else {
            wrongCount++;
        }
    });

    let totalPossibleMarks = TOTAL_QUESTIONS * MARK_PER_QUESTION;
    let percentage = totalPossibleMarks > 0 ? ((score / totalPossibleMarks) * 100).toFixed(2) : 0;

    let grade = "";
    let isPass = percentage >= 50;
    if (percentage >= 75) grade = "A+ (Distinction)";
    else if (percentage >= 60) grade = "A (First Class)";
    else if (percentage >= 50) grade = "B (Qualified)";
    else grade = "Fail (Needs Revision)";

    showResult(score, totalPossibleMarks, percentage, grade, isPass, correctCount, wrongCount, unanswered);
}

function showResult(score, totalPossibleMarks, percentage, grade, isPass, correctCount, wrongCount, unanswered) {
    document.getElementById("examArea").style.display = "none";
    const resultDiv = document.getElementById("resultArea");
    resultDiv.style.display = "block";
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const passBadge = isPass 
        ? `<span class="status-badge badge-pass">PASSED</span>` 
        : `<span class="status-badge badge-fail">FAILED (50% Required)</span>`;

    let html = `
        <div class="social-updates-box">
            <p>For more updates, join the Calcium Notes community:</p>
            <div class="social-btn-group">
                <a href="https://www.instagram.com/calciumnotes" class="social-btn instagram-btn" target="_blank" rel="noopener">Instagram</a>
                <a href="https://x.com/Calciumnotes" class="social-btn twitter-btn" target="_blank" rel="noopener">Twitter / X</a>
            </div>
        </div>

        <div class="result-stats-card">
            <h2>${currentChapterTitle} - Practice Result</h2>
            <div style="margin-top: 10px; font-size: 16px;">
                Result Status: ${passBadge}
            </div>

            <div class="result-stat-row">
                <div class="result-stat-pill pill-score">
                    <span>Score</span>
                    <strong>${score} / ${totalPossibleMarks}</strong>
                </div>
                <div class="result-stat-pill">
                    <span>Percentage</span>
                    <strong>${percentage}%</strong>
                </div>
                <div class="result-stat-pill">
                    <span>Grade</span>
                    <strong style="font-size: 16px; margin-top: 8px;">${grade}</strong>
                </div>
                <div class="result-stat-pill pill-correct">
                    <span>Correct</span>
                    <strong>${correctCount}</strong>
                </div>
                <div class="result-stat-pill pill-wrong">
                    <span>Incorrect</span>
                    <strong>${wrongCount}</strong>
                </div>
                <div class="result-stat-pill pill-unanswered">
                    <span>Skipped</span>
                    <strong>${unanswered}</strong>
                </div>
            </div>

            <div style="display: flex; gap: 12px; flex-wrap: wrap; margin-top: 20px;">
                <button class="primary" onclick="window.location.reload();">🔄 Retake Chapter Practice</button>
                <button class="primary" style="background: #475569;" onclick="if(window.history.length > 1){window.history.back();}else{window.location.href='./chapgate.html';}">← Return to Chapter Directory</button>
            </div>
        </div>

        <h3 style="margin-bottom: 20px; font-size: 22px; color: #1e293b;">Detailed Solution Review</h3>
    `;

    selectedQuestions.forEach((q, index) => {
        const isUserCorrect = (userAnswers[index] === q.correct);
        const isSkipped = (userAnswers[index] === null);

        let boxClass = "reviewBox ";
        let answerFeedbackHtml = "";

        if (isSkipped) {
            boxClass += "skipped-box";
            answerFeedbackHtml = `
                <p style="margin-top:10px; color:#64748b;">
                    <strong>Your Answer:</strong> <em>Not Answered</em> <span class="status-badge badge-skipped">Skipped</span>
                </p>
                <p style="color:#16a34a; font-weight: 600; margin-top: 6px;">
                    <strong>Correct Answer:</strong> ${q.options[q.correct]}
                </p>
            `;
        } else if (isUserCorrect) {
            boxClass += "correct-box";
            answerFeedbackHtml = `
                <p style="margin-top:10px; color:#16a34a; font-weight: 600;">
                    <strong>Your Answer:</strong> ${q.options[userAnswers[index]]} <span class="status-badge badge-correct">✓ Correct</span>
                </p>
            `;
        } else {
            boxClass += "wrong-box";
            answerFeedbackHtml = `
                <p style="margin-top:10px; color:#ef4444; font-weight: 600;">
                    <strong>Your Answer:</strong> ${q.options[userAnswers[index]]} <span class="status-badge badge-wrong">✗ Incorrect</span>
                </p>
                <p style="color:#16a34a; font-weight: 600; margin-top: 6px;">
                    <strong>Correct Answer:</strong> ${q.options[q.correct]}
                </p>
            `;
        }

        html += `
            <div class="${boxClass}">
                <p style="font-size: 16px; color: #0f172a;"><strong>Q${index + 1}:</strong> ${q.question}</p>
                ${answerFeedbackHtml}
                <p style="margin-top:12px; font-size: 14px; color: #334155; line-height: 1.5; background: #f8fafc; padding: 10px; border-radius: 6px; border: 1px solid #e2e8f0;">
                    <strong>Explanation / Reason:</strong> ${q.solution}
                </p>
            </div>
        `;
    });

    resultDiv.innerHTML = html;
}

// ==============================================================
// KEYBOARD SHORTCUTS
// ==============================================================
document.addEventListener('keydown', (e) => {
    const examArea = document.getElementById("examArea");
    if (!examArea || examArea.style.display === "none") return;
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    if (e.key === 'ArrowRight' || e.key.toLowerCase() === 'n') {
        nextQuestion();
    } else if (e.key === 'ArrowLeft' || e.key.toLowerCase() === 'p') {
        prevQuestion();
    } else if (e.key.toLowerCase() === 'm' || e.key.toLowerCase() === 'r') {
        toggleReview();
    } else if (['1', '2', '3', '4'].includes(e.key)) {
        selectOption(parseInt(e.key, 10) - 1);
    } else if (['a', 'b', 'c', 'd'].includes(e.key.toLowerCase())) {
        const map = { 'a': 0, 'b': 1, 'c': 2, 'd': 3 };
        selectOption(map[e.key.toLowerCase()]);
    }
});

// START
initExam();
