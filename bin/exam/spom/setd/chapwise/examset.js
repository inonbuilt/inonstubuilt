// ==============================================================
// CALCIUM NOTES - SPOM SET D CHAPTER PRACTICE ENGINE
// ==============================================================

// CONFIG
let TOTAL_QUESTIONS = 0;
const MARK_PER_QUESTION = 2;
const MAX_CASES = 4;       // Target: 4 Case Scenarios
const MAX_STANDALONE = 30; // Target: 30 Individual MCQs

// GLOBAL STATE
let selectedQuestions = [];
let currentQuestion = 0;
let userAnswers = [];
let markedForReview = [];
let visitedQuestions = [];
let lastCase = null;
let currentChapterTitle = "";

// CHAPTER METADATA
const SET_D_CHAPTER_TITLES = {
    // Part 1: Psychology
    'psy_chapter1': 'Psychology - Chapter 1: Introduction to Psychology & Behavioural Foundations',
    'psy_chapter2': 'Psychology - Chapter 2: Personality, Attitudes & Perception',
    'psy_chapter3': 'Psychology - Chapter 3: Motivation, Decision-Making & Learning',
    'psy_chapter4': 'Psychology - Chapter 4: Emotional Intelligence, Leadership & Group Dynamics',
    
    // Part 2: Philosophy (Starts at Chapter 5 per routing)
    'psy_chapter5': 'Philosophy - Chapter 1: General Discussions on Philosophy and Reasoning',
    'psy_chapter6': 'Philosophy - Chapter 2: Schools of Indian Philosophy',
    'psy_chapter7': 'Philosophy - Chapter 3: Ethical Frameworks',
    'psy_chapter8': 'Philosophy - Chapter 4: Business Ethics & Professional Conduct',

    // Start-up Chapters
    'strt_chapter1': 'Startup - Chapter 1: Fundamentals of Entrepreneurship & Startup Mindset',
    'strt_chapter2': 'Startup - Chapter 2: Design Thinking, Lean Operations & Business Model Canvas',
    'strt_chapter3': 'Startup - Chapter 3: Growth Strategies, Startup India Initiative & Ecosystem'
};

// SHUFFLE UTILITY (Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// CHAPTER NORMALIZATION (Dynamic Routing)
function normalizeChapterKey(subject, chap) {
    if (!chap) return '';
    let s = (subject || '').toLowerCase().trim();
    let c = chap.toLowerCase().trim().replace(/[^a-z0-9]/g, '');
    let digitMatch = c.match(/\d+/);
    let digit = digitMatch ? digitMatch[0] : '1';

    if (s.includes('start') || s.includes('strt')) {
        return 'strt_chapter' + digit;
    }
    
    return 'psy_chapter' + digit;
}

// INFER ITEM CHAPTER
function inferItemChapter(item, index, subject) {
    let s = (subject || '').toLowerCase();
    let isStartup = s.includes('start') || s.includes('strt');
    let prefix = isStartup ? 'strt_chapter' : 'psy_chapter';

    // 1. Check explicit JSON chapter property
    if (item.chapter) {
        let digitMatch = String(item.chapter).match(/\d+/);
        if (digitMatch) return prefix + digitMatch[0];
    }
    if (item.case_chapter) {
        let digitMatch = String(item.case_chapter).match(/\d+/);
        if (digitMatch) return prefix + digitMatch[0];
    }
    
    // 2. Check case_id for CH[X]
    if (item.case_id) {
        let idMatch = String(item.case_id).match(/CH(\d+)/i);
        if (idMatch) return prefix + idMatch[1];
    }

    // 3. Fallbacks based on index (if no metadata is available)
    if (isStartup) {
        if (index <= 30) return 'strt_chapter1';
        if (index <= 75) return 'strt_chapter2';
        return 'strt_chapter3';
    } else {
        if (index <= 30) return 'psy_chapter1';
        if (index <= 70) return 'psy_chapter2';
        if (index <= 110) return 'psy_chapter3';
        if (index <= 150) return 'psy_chapter4';
        if (index <= 190) return 'psy_chapter5';
        if (index <= 230) return 'psy_chapter6';
        if (index <= 270) return 'psy_chapter7';
        return 'psy_chapter8';
    }
}

// ==============================================================
// INIT EXAM
// ==============================================================
function initExam() {
    const urlParams = new URLSearchParams(window.location.search);
    const subjectParam = urlParams.get('subject') || 'psy';
    const selectedChapter = urlParams.get('chapter') || 'chapter1';
    const targetNorm = normalizeChapterKey(subjectParam, selectedChapter);

    currentChapterTitle = SET_D_CHAPTER_TITLES[targetNorm] || (selectedChapter ? selectedChapter.toUpperCase() : "Chapter Practice");
    const headerEl = document.getElementById("examHeader");
    if (headerEl) {
        headerEl.innerHTML = `Calcium Notes - Premium Chapter Practice (Set D)<div class="header-sub">${currentChapterTitle}</div>`;
    }

    let sourcePool = [];
    if (typeof caseStudies !== 'undefined' && Array.isArray(caseStudies)) {
        sourcePool = caseStudies;
    }

    let matchingItems = [];
    sourcePool.forEach((item, idx) => {
        let ch = inferItemChapter(item, idx, subjectParam);
        if (ch === targetNorm) {
            matchingItems.push(item);
        }
    });

    // Fallback digit matching
    if (matchingItems.length === 0) {
        const rawDig = selectedChapter.replace(/[^0-9]/g, '');
        matchingItems = sourcePool.filter((item, idx) => {
            let ch = inferItemChapter(item, idx, subjectParam);
            return rawDig && ch.includes(rawDig);
        });
    }

    if (matchingItems.length === 0) {
        matchingItems = sourcePool.slice(0, 30);
    }

    let caseBlocks = [];
    let standaloneList = [];
    
    // Separate cases from standalone MCQs
    for (let item of matchingItems) {
        if (item.questions && Array.isArray(item.questions) && item.questions.length > 0) {
            caseBlocks.push(item);
        } else if (item.question && item.options && item.answer !== undefined) {
            standaloneList.push(item);
        }
    }

    shuffleArray(caseBlocks);
    shuffleArray(standaloneList);

    let extractedBlocks = []; // Will store individual question objects or grouped sub-arrays

    // 1. Extract exactly 4 Case Scenarios (keeping their block of 5 questions intact together)
    let extractedCasesCount = 0;
    for (let cs of caseBlocks) {
        if (extractedCasesCount >= MAX_CASES) break;
        
        let cText = (cs.caseText || "").trim();
        let blockQuestions = [];

        for (let q of cs.questions) {
            if (!q.question || !q.options || q.answer === undefined) continue;
            let ans = typeof q.answer === 'string' ? parseInt(q.answer, 10) : q.answer;
            if (ans === 4 && q.options.length === 4) ans = 3;
            if (isNaN(ans) || ans < 0 || ans >= q.options.length) ans = 0;

            blockQuestions.push({
                caseContent: cText,
                question: q.question,
                options: q.options,
                correct: ans,
                solution: q.reason || q.solution || "No detailed explanation provided."
            });
        }
        
        if (blockQuestions.length > 0) {
            extractedBlocks.push(blockQuestions); // Push the group of linear case questions together
            extractedCasesCount++;
        }
    }

    // 2. Extract up to 30 Standalone MCQs (treated as individual blocks of 1)
    let standaloneCount = 0;
    for (let q of standaloneList) {
        if (standaloneCount >= MAX_STANDALONE) break;
        
        let ans = typeof q.answer === 'string' ? parseInt(q.answer, 10) : q.answer;
        if (ans === 4 && q.options.length === 4) ans = 3;
        if (isNaN(ans) || ans < 0 || ans >= q.options.length) ans = 0;

        extractedBlocks.push([{
            caseContent: "",
            question: q.question,
            options: q.options,
            correct: ans,
            solution: q.reason || q.solution || "No detailed explanation provided."
        }]);
        standaloneCount++;
    }

    // 3. Shuffle the blocks so Case blocks and Standalone blocks are randomized across the exam
    shuffleArray(extractedBlocks);

    // 4. Flatten into the final `selectedQuestions` array while keeping case questions strictly linear within their block
    let extracted = [];
    extractedBlocks.forEach(block => {
        block.forEach(q => {
            extracted.push(q);
        });
    });

    if (extracted.length === 0) {
        document.getElementById("examArea").innerHTML = `
            <div style="padding: 50px; text-align: center; width: 100%; background: white; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
                <h2 style="color: #ef4444; margin-bottom: 15px;">No Questions Found</h2>
                <p style="font-size: 16px; color: #4b5563;">No questions found for <strong>${currentChapterTitle}</strong>.</p>
                <button class="primary" style="margin-top: 25px;" onclick="window.location.href='./chapgate.html';">Return to Chapter List</button>
            </div>`;
        return;
    }

    selectedQuestions = extracted;
    TOTAL_QUESTIONS = selectedQuestions.length;

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

    const prevBtn = document.getElementById("prevBtn");
    if (prevBtn) prevBtn.disabled = (currentQuestion === 0);

    const nextBtn = document.getElementById("nextBtn");
    if (nextBtn) nextBtn.disabled = (currentQuestion === TOTAL_QUESTIONS - 1);

    const reviewBtn = document.getElementById("reviewBtn");
    if (reviewBtn) {
        reviewBtn.innerText = markedForReview[currentQuestion] ? "Unmark Review" : "Mark for Review";
    }

    updateGrid();
}

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

function toggleReview() {
    markedForReview[currentQuestion] = !markedForReview[currentQuestion];
    loadQuestion();
}

function jumpToQuestion(index) {
    currentQuestion = index;
    loadQuestion();
}

function updateGrid() {
    const grid = document.getElementById("questionGrid");
    if (!grid) return;
    grid.innerHTML = "";

    for (let i = 0; i < TOTAL_QUESTIONS; i++) {
        const btn = document.createElement("button");
        btn.innerText = i + 1;

        if (i === currentQuestion) btn.classList.add("current");

        if (markedForReview[i]) {
            btn.classList.add("review");
        } else if (userAnswers[i] !== null) {
            btn.classList.add("answered");
        } else if (visitedQuestions[i]) {
            btn.classList.add("not-attempted");
        }

        btn.onclick = () => jumpToQuestion(i);
        grid.appendChild(btn);
    }
}

// ==============================================================
// SUBMIT EXAM & DETAILED REVIEW
// ==============================================================
function submitExam() {
    let attempted = userAnswers.filter(a => a !== null).length;
    let unattempted = TOTAL_QUESTIONS - attempted;

    let confirmMsg = `Are you sure you want to submit?\n\nTotal Questions: ${TOTAL_QUESTIONS}\nAttempted: ${attempted}\nUnattempted: ${unattempted}`;
    if (!confirm(confirmMsg)) return;

    let score = 0;
    let correctCount = 0;
    let wrongCount = 0;
    let skippedCount = 0;

    selectedQuestions.forEach((q, index) => {
        if (userAnswers[index] === null) {
            skippedCount++;
        } else if (userAnswers[index] === q.correct) {
            score += MARK_PER_QUESTION;
            correctCount++;
        } else {
            wrongCount++;
        }
    });

    const totalMarks = TOTAL_QUESTIONS * MARK_PER_QUESTION;
    const percentage = totalMarks > 0 ? ((score / totalMarks) * 100).toFixed(1) : 0;
    const passed = percentage >= 50;

    document.getElementById("examArea").style.display = "none";
    const headerEl = document.getElementById("examHeader");
    if (headerEl) {
        headerEl.innerText = "Chapter Practice - Result & Performance Analysis";
    }

    const resultArea = document.getElementById("resultArea");
    resultArea.style.display = "block";

    let html = `
        <div style="background: white; border-radius: 12px; padding: 30px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); margin-bottom: 30px; text-align: center;">
            <h2 style="font-size: 26px; color: ${passed ? '#16a34a' : '#dc2626'}; margin-bottom: 10px;">
                ${passed ? '🎉 Congratulations! You Passed' : '⚠️ Keep Practicing! Needs Improvement'}
            </h2>
            <p style="font-size: 16px; color: #64748b; margin-bottom: 25px;">${currentChapterTitle}</p>
            
            <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; margin-bottom: 25px;">
                <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 15px 25px; min-width: 140px;">
                    <div style="font-size: 13px; color: #64748b; font-weight: 600;">SCORE</div>
                    <div style="font-size: 24px; font-weight: 800; color: #1e293b;">${score} / ${totalMarks}</div>
                </div>
                <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 15px 25px; min-width: 140px;">
                    <div style="font-size: 13px; color: #64748b; font-weight: 600;">PERCENTAGE</div>
                    <div style="font-size: 24px; font-weight: 800; color: #2563eb;">${percentage}%</div>
                </div>
                <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 15px 25px; min-width: 140px;">
                    <div style="font-size: 13px; color: #64748b; font-weight: 600;">CORRECT</div>
                    <div style="font-size: 24px; font-weight: 800; color: #16a34a;">${correctCount}</div>
                </div>
                <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 15px 25px; min-width: 140px;">
                    <div style="font-size: 13px; color: #64748b; font-weight: 600;">WRONG</div>
                    <div style="font-size: 24px; font-weight: 800; color: #ef4444;">${wrongCount}</div>
                </div>
                <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 15px 25px; min-width: 140px;">
                    <div style="font-size: 13px; color: #64748b; font-weight: 600;">SKIPPED</div>
                    <div style="font-size: 24px; font-weight: 800; color: #94a3b8;">${skippedCount}</div>
                </div>
            </div>

            <div style="display: flex; justify-content: center; gap: 15px;">
                <button class="primary" onclick="window.location.reload();">Retry Chapter</button>
                <button class="warning" onclick="window.location.href='./chapgate.html';">Back to Chapter List</button>
                <button class="success" onclick="window.location.href='../espom.html';">SPOM Home</button>
            </div>
        </div>

        <h3 style="font-size: 20px; font-weight: 700; color: #0f172a; margin-bottom: 20px;">Detailed Solutions & Explanations</h3>
    `;

    const optLabels = ['A', 'B', 'C', 'D', 'E', 'F'];
    selectedQuestions.forEach((q, index) => {
        let isCorrect = userAnswers[index] === q.correct;
        let isSkipped = userAnswers[index] === null;
        let boxClass = isCorrect ? "correct-box" : (isSkipped ? "skipped-box" : "wrong-box");
        let statusBadge = isCorrect 
            ? '<span class="status-badge badge-correct">✓ Correct (+2m)</span>' 
            : (isSkipped 
                ? '<span class="status-badge badge-skipped">○ Skipped (0m)</span>' 
                : '<span class="status-badge badge-wrong">✕ Incorrect (0m)</span>');

        html += `
            <div class="reviewBox ${boxClass}">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                    <h4 style="font-size: 15px; color: #1e293b;">Question ${index + 1} of ${TOTAL_QUESTIONS}</h4>
                    ${statusBadge}
                </div>
                
                ${q.caseContent ? `<div style="background: #f1f5f9; padding: 12px; border-radius: 6px; font-size: 13px; margin-bottom: 12px; max-height: 180px; overflow-y: auto;">${q.caseContent}</div>` : ''}

                <p style="font-size: 15px; font-weight: 600; color: #0f172a; margin-bottom: 14px;">${q.question}</p>

                <div style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 14px;">
                    ${q.options.map((opt, optIdx) => {
                        let optBorder = "#e2e8f0";
                        let optBg = "#ffffff";
                        let optColor = "#1e293b";
                        let note = "";

                        if (optIdx === q.correct) {
                            optBorder = "#16a34a";
                            optBg = "#dcfce7";
                            optColor = "#15803d";
                            note = " <strong>(Correct Answer)</strong>";
                        }
                        if (userAnswers[index] === optIdx && !isCorrect) {
                            optBorder = "#ef4444";
                            optBg = "#fee2e2";
                            optColor = "#b91c1c";
                            note = " <strong>(Your Selection)</strong>";
                        }

                        return `
                            <div style="padding: 10px 14px; border: 1.5px solid ${optBorder}; background: ${optBg}; color:${optColor}; border-radius: 6px; font-size: 14px;">
                                <span class="opt-label">${optLabels[optIdx] || optIdx + 1}</span>${opt}${note}
                            </div>
                        `;
                    }).join('')}
                </div>

                <div style="background: #f8fafc; border-left: 3px solid #3b82f6; padding: 12px; border-radius: 4px; font-size: 13.5px; color: #334155;">
                    <strong style="color: #1e40af;">Solution / Rationale:</strong><br>
                    ${q.solution}
                </div>
            </div>
        `;
    });

    resultArea.innerHTML = html;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Auto-run on load
window.addEventListener("DOMContentLoaded", initExam);