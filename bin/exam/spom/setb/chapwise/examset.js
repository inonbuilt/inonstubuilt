// ==============================================================
// CALCIUM NOTES - SPOM SET B CHAPTER PRACTICE ENGINE
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
const SET_B_CHAPTER_TITLES = {
    'chapter1': 'Chapter 1: Introduction to Strategic Cost Management',
    'chapter2': 'Chapter 2: Modern Business Environment',
    'chapter3': 'Chapter 3: Lean System and Innovation',
    'chapter4': 'Chapter 4: Specialist Cost Management Techniques',
    'chapter5': 'Chapter 5: Cost Management for Emerging Business Models',
    'chapter6': 'Chapter 6: Strategic Revenue Management',
    'chapter7': 'Chapter 7: Strategic Profit Management',
    'chapter8': 'Chapter 8: Introduction to Strategic Performance Management',
    'chapter9': 'Chapter 9: Strategic Performance Measures in Private Sector',
    'chapter10': 'Chapter 10: Performance Measures in Not-for-Profit Organisations',
    'chapter11': 'Chapter 11: Preparation of Performance Reports',
    'chapter12': 'Chapter 12: Divisional Transfer Pricing',
    'chapter13': 'Chapter 13: Standard Costing & Advanced Variances',
    'chapter14': 'Chapter 14: Comprehensive Case Studies & Integrated Applications'
};

// SHUFFLE UTILITY (Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// CHAPTER NORMALIZATION
function normalizeChapterKey(chap) {
    if (!chap) return '';
    let c = chap.toLowerCase().trim().replace(/[^a-z0-9]/g, '');
    if (c === '1' || c === 'ch1' || c === 'chapter1' || c === 'scm' || c.includes('introductiontostrategiccost')) return 'chapter1';
    if (c === '2' || c === 'ch2' || c === 'chapter2' || c === 'mbe' || c.includes('modernbusinessenvironment')) return 'chapter2';
    if (c === '3' || c === 'ch3' || c === 'chapter3' || c === 'lean' || c.includes('leansystem') || c.includes('innovation')) return 'chapter3';
    if (c === '4' || c === 'ch4' || c === 'chapter4' || c === 'specialist' || c.includes('specialistcost')) return 'chapter4';
    if (c === '5' || c === 'ch5' || c === 'chapter5' || c === 'ebm' || c.includes('emerging') || c.includes('businessmodel')) return 'chapter5';
    if (c === '6' || c === 'ch6' || c === 'chapter6' || c === 'srm' || c.includes('revenue') || c.includes('revenuemanagement')) return 'chapter6';
    if (c === '7' || c === 'ch7' || c === 'chapter7' || c === 'profit' || c.includes('profitmanagement')) return 'chapter7';
    if (c === '8' || c === 'ch8' || c === 'chapter8' || c === 'spm' || c.includes('strategicperformance') || c.includes('spmintro')) return 'chapter8';
    if (c === '9' || c === 'ch9' || c === 'chapter9' || c === 'private' || c.includes('privatesector') || c.includes('balancedscorecard')) return 'chapter9';
    if (c === '10' || c === 'ch10' || c === 'chapter10' || c === 'npo' || c.includes('notforprofit') || c.includes('nonprofit')) return 'chapter10';
    if (c === '11' || c === 'ch11' || c === 'chapter11' || c === 'report' || c.includes('performancereport')) return 'chapter11';
    if (c === '12' || c === 'ch12' || c === 'chapter12' || c === 'tp' || c.includes('transferprice') || c.includes('transferpricing') || c.includes('divisional')) return 'chapter12';
    if (c === '13' || c === 'ch13' || c === 'chapter13' || c === 'standardcosting' || c.includes('variance')) return 'chapter13';
    if (c === '14' || c === 'ch14' || c === 'chapter14' || c.includes('casestudy') || c.includes('integrated')) return 'chapter14';
    return c;
}

// Fallback topic classifier for cases without explicit case_chapter
function inferCaseChapter(cs) {
    if (cs.case_chapter) return normalizeChapterKey(cs.case_chapter);
    const text = ((cs.caseText || '') + ' ' + (cs.questions ? cs.questions.map(q => q.question || '').join(' ') : '')).toLowerCase();
    
    if (text.includes('transfer price') || text.includes('transfer pricing') || text.includes('divisions of the shenzhen')) return 'chapter12';
    if (text.includes('sales volume contribution') || text.includes('planning variance') || text.includes('sales mix variance') || text.includes('standard and marginal costing')) return 'chapter13';
    if (text.includes('akanksha foundation') || text.includes('caregiver hospital') || text.includes('not-for-profit') || text.includes('non-profit')) return 'chapter10';
    if (text.includes('fitzgerald') || text.includes('building block') || text.includes('balanced scorecard') || text.includes('residual income') || text.includes('bhatia & sharma') || text.includes('power gym')) return 'chapter9';
    if (text.includes('profitability per customer') || text.includes('sunrise footwear') || text.includes('direct product profitability') || text.includes('dpp') || text.includes('customer profitability')) return 'chapter7';
    if (text.includes('performance report') || text.includes('division and performance tracking') || text.includes('division a division b') || text.includes('reporting framework')) return 'chapter11';
    if (text.includes('customer profit') || text.includes('oxford medical') || text.includes('xyz electronics') || text.includes('pareto') || text.includes('revenue management')) return 'chapter6';
    if (text.includes('readers diary') || text.includes('business canvas') || text.includes('kuber') || text.includes('yoyo') || text.includes('vserveu') || text.includes('be informed') || text.includes('buymore') || text.includes('business model canvas') || text.includes('freemium')) return 'chapter5';
    if (text.includes('mckinsey') || text.includes('7-s') || text.includes('speed auto-mobile') || text.includes('luxemart')) return 'chapter8';
    if (text.includes('kaizen') || text.includes('5s') || text.includes('jit') || text.includes('nimbus') || text.includes('tpm') || text.includes('oee') || text.includes('single-minute exchange') || text.includes('dubai uni') || text.includes('made to order')) return 'chapter3';
    if (text.includes('target price') || text.includes('target cost') || text.includes('lifecycle') || text.includes('life cycle') || text.includes('cellwell') || text.includes('environmental') || text.includes('flow cost') || text.includes('ema') || text.includes('learning curve') || text.includes('activity based') || text.includes('durable limited') || text.includes('volt hydro') || text.includes('b-parts') || text.includes('boeing')) return 'chapter4';
    if (text.includes('cost of quality') || text.includes('conformance cost') || text.includes('7 star sports') || text.includes('prevention costs') || text.includes('hindustan bikes') || text.includes('total quality')) return 'chapter2';
    if (text.includes('value chain') || text.includes('royal tea') || text.includes('critical success factor') || text.includes('traditional cost') || text.includes('fresh milk enterprises')) return 'chapter1';
    
    return 'chapter14';
}

// ==============================================================
// INIT EXAM & CENTRIFUGE
// ==============================================================
function initExam() {
    // 1. Read Chapter from URL
    const urlParams = new URLSearchParams(window.location.search);
    const selectedChapter = urlParams.get('chapter');
    const targetNorm = normalizeChapterKey(selectedChapter);

    // 2. Set dynamic title in header
    currentChapterTitle = SET_B_CHAPTER_TITLES[targetNorm] || (selectedChapter ? selectedChapter : "Chapter Practice");
    const headerEl = document.getElementById("examHeader");
    if (headerEl) {
        headerEl.innerHTML = `Calcium Notes - Premium Chapter Practice (Set B)<div class="header-sub">${currentChapterTitle}</div>`;
    }

    // 3. Prioritized Source Selection:
    // Priority 1: questionsetbAI.js (AICaseStudies)
    // Priority 2: quessetb.js (caseStudies) fallback
    let filteredCases = [];

    // Step 1: Check Priority 1 (questionsetbAI.js)
    if (typeof AICaseStudies !== 'undefined' && Array.isArray(AICaseStudies)) {
        filteredCases = AICaseStudies.filter(cs => inferCaseChapter(cs) === targetNorm);
        if (filteredCases.length === 0 && selectedChapter) {
            const rawLower = selectedChapter.toLowerCase();
            filteredCases = AICaseStudies.filter(cs => cs.case_chapter && cs.case_chapter.toLowerCase().includes(rawLower));
        }
    }

    // Step 2: Fallback to Priority 2 (quessetb.js) if no questions in AICaseStudies
    if (filteredCases.length === 0 && typeof caseStudies !== 'undefined' && Array.isArray(caseStudies)) {
        filteredCases = caseStudies.filter(cs => inferCaseChapter(cs) === targetNorm);

        // Substring / partial check
        if (filteredCases.length === 0 && selectedChapter) {
            const rawLower = selectedChapter.toLowerCase();
            filteredCases = caseStudies.filter(cs => cs.case_chapter && cs.case_chapter.toLowerCase().includes(rawLower));
        }

        // Related module fallback for chapters without isolated cases
        if (filteredCases.length === 0) {
            if (targetNorm === 'chapter7') {
                filteredCases = caseStudies.filter(cs => {
                    const c = inferCaseChapter(cs);
                    return c === 'chapter6' || c === 'chapter4' || c === 'chapter7';
                });
            } else if (targetNorm === 'chapter11') {
                filteredCases = caseStudies.filter(cs => {
                    const c = inferCaseChapter(cs);
                    return c === 'chapter8' || c === 'chapter9' || c === 'chapter11';
                });
            }
        }
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
