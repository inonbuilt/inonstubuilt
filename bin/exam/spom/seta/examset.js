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

// 🔥 NEW (fix for case switching)
let lastCase = null;

// ==========================
// SHUFFLE FUNCTION
// ==========================
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// ==========================
// INIT EXAM
// ==========================
function initExam() {

    // Read aiPercent from URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const aiPercentParam = urlParams.get('aiPercent');
    let aiPercent = aiPercentParam !== null ? parseInt(aiPercentParam, 10) : 50;
    if (isNaN(aiPercent) || aiPercent < 0) aiPercent = 0;
    if (aiPercent > 100) aiPercent = 100;

    const targetAI = Math.round(TOTAL_QUESTIONS * (aiPercent / 100));
    const targetStandard = TOTAL_QUESTIONS - targetAI;

    // Helper to extract questions from case studies array up to maxCount
    function extractQuestionsFromCases(casesArray, maxCount) {
        if (!casesArray || !Array.isArray(casesArray) || maxCount <= 0) return [];

        let shuffled = [...casesArray];
        shuffleArray(shuffled);

        let extracted = [];
        for (let cs of shuffled) {
            if (!cs || !cs.questions) continue;

            for (let q of cs.questions) {
                if (extracted.length >= maxCount) break;
                if (!q.question || !q.options || q.answer === undefined) continue;

                extracted.push({
                    caseContent: cs.caseText || "",
                    question: q.question,
                    options: q.options,
                    correct: q.answer,
                    solution: q.reason || q.solution || "No reason provided"
                });
            }
            if (extracted.length >= maxCount) break;
        }
        return extracted;
    }

    // Helper to extract AI questions with difficulty distribution:
    // 50% Easy, 30% Medium, 20% Hard
    function extractAIQuestionsWithDifficulty(casesArray, maxCount) {
        if (!casesArray || !Array.isArray(casesArray) || maxCount <= 0) return [];

        // Separate case studies by difficulty
        const easyCases = casesArray.filter(cs => cs && (cs.difficulty || "").toLowerCase() === "easy");
        const mediumCases = casesArray.filter(cs => cs && (cs.difficulty || "").toLowerCase() === "medium");
        const hardCases = casesArray.filter(cs => cs && (cs.difficulty || "").toLowerCase() === "hard");

        // Calculate target counts per difficulty: 50% easy, 30% medium, 20% hard
        let targetEasy = Math.round(maxCount * 0.50);
        let targetMedium = Math.round(maxCount * 0.30);
        let targetHard = maxCount - targetEasy - targetMedium; // remainder goes to hard

        // Extract from each difficulty pool
        let easyQs = extractQuestionsFromCases(easyCases, targetEasy);
        let mediumQs = extractQuestionsFromCases(mediumCases, targetMedium);
        let hardQs = extractQuestionsFromCases(hardCases, targetHard);

        // If any pool didn't have enough, fill the shortfall from other pools
        let total = easyQs.length + mediumQs.length + hardQs.length;
        if (total < maxCount) {
            const shortfall = maxCount - total;
            const usedQuestions = new Set(
                [...easyQs, ...mediumQs, ...hardQs].map(q => q.question)
            );

            // Try to fill from pools that have leftover questions
            const fallbackOrder = [easyCases, mediumCases, hardCases];
            let extra = [];
            for (let pool of fallbackOrder) {
                if (extra.length >= shortfall) break;
                let shuffledPool = [...pool];
                shuffleArray(shuffledPool);
                for (let cs of shuffledPool) {
                    if (!cs || !cs.questions) continue;
                    for (let q of cs.questions) {
                        if (extra.length >= shortfall) break;
                        if (!q.question || !q.options || q.answer === undefined) continue;
                        if (usedQuestions.has(q.question)) continue;
                        usedQuestions.add(q.question);
                        extra.push({
                            caseContent: cs.caseText || "",
                            question: q.question,
                            options: q.options,
                            correct: q.answer,
                            solution: q.reason || q.solution || "No reason provided"
                        });
                    }
                }
            }
            return [...easyQs, ...mediumQs, ...hardQs, ...extra];
        }

        return [...easyQs, ...mediumQs, ...hardQs];
    }

    // Extract AI questions with difficulty-based selection (50% easy, 30% medium, 20% hard)
    const aiCases = (typeof AICaseStudies !== 'undefined' && Array.isArray(AICaseStudies)) ? AICaseStudies : [];
    let aiQuestions = extractAIQuestionsWithDifficulty(aiCases, targetAI);

    // Extract Standard questions (needed = TOTAL_QUESTIONS - aiQuestions.length)
    const stdCases = (typeof caseStudies !== 'undefined' && Array.isArray(caseStudies)) ? caseStudies : [];
    const neededStandard = TOTAL_QUESTIONS - aiQuestions.length;
    let stdQuestions = extractQuestionsFromCases(stdCases, neededStandard);

    // Combine picked questions
    let combinedQuestions = [...aiQuestions, ...stdQuestions];

    // If still less than TOTAL_QUESTIONS, top up from standard case studies
    if (combinedQuestions.length < TOTAL_QUESTIONS) {
        const topUpNeeded = TOTAL_QUESTIONS - combinedQuestions.length;
        let existingQuestionsSet = new Set(combinedQuestions.map(q => q.question));
        let extraQuestions = [];
        let shuffledStd = [...stdCases];
        shuffleArray(shuffledStd);

        for (let cs of shuffledStd) {
            if (!cs || !cs.questions) continue;
            for (let q of cs.questions) {
                if (extraQuestions.length >= topUpNeeded) break;
                if (!q.question || !q.options || q.answer === undefined) continue;
                if (!existingQuestionsSet.has(q.question)) {
                    extraQuestions.push({
                        caseContent: cs.caseText || "",
                        question: q.question,
                        options: q.options,
                        correct: q.answer,
                        solution: q.reason || q.solution || "No reason provided"
                    });
                }
            }
            if (extraQuestions.length >= topUpNeeded) break;
        }
        combinedQuestions = [...combinedQuestions, ...extraQuestions];
    }

    // Group questions by caseContent so questions sharing a case stay together
    let caseMap = new Map();
    for (let q of combinedQuestions) {
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

    const total = selectedQuestions.length;

    userAnswers = new Array(total).fill(null);
    markedForReview = new Array(total).fill(false);
    visitedQuestions = new Array(total).fill(false);

    loadQuestion();
    startTimer();
    updateGrid();
}

// ==========================
// LOAD QUESTION (FIXED)
// ==========================
function loadQuestion() {

    if (!selectedQuestions[currentQuestion]) return;

    visitedQuestions[currentQuestion] = true;

    const q = selectedQuestions[currentQuestion];

    // ✅ FIXED: Always update case correctly
    if (lastCase !== q.caseContent) {
        document.getElementById("caseBox").innerHTML = q.caseContent;
        lastCase = q.caseContent;
    }

    document.getElementById("questionText").innerText = q.question;
    document.getElementById("questionNumber").innerText =
        `Question ${currentQuestion + 1} of ${selectedQuestions.length}`;

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

// 🔥 FIXED jump navigation
function goToQuestion(index) {
    currentQuestion = index;
    lastCase = null; // force case reload
    loadQuestion();
}

// ==========================
// MARK FOR REVIEW
// ==========================
function toggleReview() {
    markedForReview[currentQuestion] =
        !markedForReview[currentQuestion];
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

        document.getElementById("timer").innerText =
            `${hours}:${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

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

    showResult(score, percentage, grade, correctCount, wrongCount, unanswered);
}

// ==========================
// RESULT
// ==========================
function showResult(score, percentage, grade, correctCount, wrongCount, unanswered) {

    document.getElementById("examArea").style.display = "none";
    const resultDiv = document.getElementById("resultArea");
    resultDiv.style.display = "block";

    let html = `
        <div class="social-updates-box">
            <p>No need to follow us. Just drop by Calcium Notes whenever you need the latest updates!</p>
            <div class="social-btn-group">
                <a href="https://www.instagram.com/calciumnotes" class="social-btn instagram-btn" target="_blank">
                    Instagram
                </a>
                <a href="https://x.com/Calciumnotes" class="social-btn twitter-btn" target="_blank">
                    Twitter
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
        <hr>
        <h3>Detailed Solution Review</h3>
    `;

    selectedQuestions.forEach((q, index) => {
        html += `
            <div class="reviewBox">
                <p><strong>Q${index + 1}:</strong> ${q.question}</p>
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