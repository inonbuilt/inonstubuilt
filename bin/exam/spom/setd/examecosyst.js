// ==========================
// CONFIG
// ==========================
const TARGET_CASE_QUESTIONS = 25;
const TARGET_INDIVIDUAL_QUESTIONS = 50;
const TOTAL_QUESTIONS = 75;
const PASS_MARK = 50;
const TOTAL_TIME = 2 * 60 * 60; // 2 hours = 7200 seconds

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

// Track last case to handle case switching
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
// INIT EXAM (Mixed format: 25 Case Scenario Questions [2m] + 50 Individual MCQs [1m] = 75 Questions / 100 Marks / 2 Hours)
// Each case scenario's sub-questions stay together as a contiguous block.
// ==========================
function initExam() {
    selectedQuestions = [];

    if (typeof caseStudies !== 'undefined') {
        let caseBlocks = [];
        let standaloneList = [];

        // Separate Case Studies and Standalone MCQs
        for (let item of caseStudies) {
            if (item.questions && Array.isArray(item.questions) && item.questions.length > 0) {
                caseBlocks.push(item);
            } else if (item.question && item.options && item.answer !== undefined) {
                standaloneList.push(item);
            }
        }

        // Shuffle candidate pools
        shuffleArray(caseBlocks);
        shuffleArray(standaloneList);

        let questionUnits = [];

        // 1. Select Case Scenario blocks (Target: 25 sub-questions total)
        // Keep each case scenario's sub-questions grouped together in a contiguous array unit
        let caseQuestionsCount = 0;
        for (let block of caseBlocks) {
            if (caseQuestionsCount >= TARGET_CASE_QUESTIONS) break;

            let cText = block.caseText || "";
            let blockUnit = [];
            for (let q of block.questions) {
                if (caseQuestionsCount + blockUnit.length >= TARGET_CASE_QUESTIONS) break;
                if (!q.question || !q.options || q.answer === undefined) continue;

                blockUnit.push({
                    caseContent: cText,
                    question: q.question,
                    options: q.options,
                    correct: q.answer,
                    solution: q.reason || q.solution || q.solution_html || "No reason provided",
                    marks: 2,
                    questionType: "Case Scenario"
                });
            }

            if (blockUnit.length > 0) {
                caseQuestionsCount += blockUnit.length;
                questionUnits.push(blockUnit);
            }
        }

        // 2. Select 50 Individual MCQs (each as a 1-item array unit)
        let individualCount = 0;
        for (let q of standaloneList) {
            if (individualCount >= TARGET_INDIVIDUAL_QUESTIONS) break;

            questionUnits.push([{
                caseContent: "",
                question: q.question,
                options: q.options,
                correct: q.answer,
                solution: q.reason || q.solution || q.solution_html || "No reason provided",
                marks: 1,
                questionType: "Individual MCQ"
            }]);
            individualCount++;
        }

        // 3. Shuffle all units together (intersperses case scenario blocks and individual MCQs randomly)
        shuffleArray(questionUnits);

        // 4. Flatten mixed units into selectedQuestions
        for (let unit of questionUnits) {
            selectedQuestions.push(...unit);
        }
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
        const caseBoxElement = document.getElementById("caseBox");
        if (caseBoxElement) {
            caseBoxElement.innerHTML = q.caseContent;
            caseBoxElement.style.display = q.caseContent.trim() === "" ? "none" : "block";
        }
        lastCase = q.caseContent;
    }

    document.getElementById("questionText").innerText = q.question;
    document.getElementById("questionNumber").innerText =
        `Question ${currentQuestion + 1} of ${selectedQuestions.length} (${q.questionType} - ${q.marks} Mark${q.marks > 1 ? 's' : ''})`;

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
    let totalPossibleMarks = 0;
    let correctCount = 0;
    let wrongCount = 0;
    let unanswered = 0;

    let caseCorrect = 0, caseWrong = 0, caseUnanswered = 0;
    let indCorrect = 0, indWrong = 0, indUnanswered = 0;

    selectedQuestions.forEach((q, index) => {
        totalPossibleMarks += q.marks;

        if (userAnswers[index] === null) {
            unanswered++;
            if (q.marks === 2) caseUnanswered++;
            else indUnanswered++;
        }
        else if (userAnswers[index] === q.correct) {
            score += q.marks;
            correctCount++;
            if (q.marks === 2) caseCorrect++;
            else indCorrect++;
        }
        else {
            wrongCount++;
            if (q.marks === 2) caseWrong++;
            else indWrong++;
        }
    });

    let percentage = (
        (score / (totalPossibleMarks || 100)) * 100
    ).toFixed(2);

    let grade = "";
    if (percentage >= 75) grade = "A+";
    else if (percentage >= 60) grade = "A";
    else if (percentage >= 50) grade = "B";
    else grade = "Fail";

    showResult(score, totalPossibleMarks, percentage, grade, correctCount, wrongCount, unanswered, {
        caseCorrect, caseWrong, caseUnanswered,
        indCorrect, indWrong, indUnanswered
    });
}

// ==========================
// RESULT
// ==========================
function showResult(score, totalPossibleMarks, percentage, grade, correctCount, wrongCount, unanswered, breakdown) {

    document.getElementById("examArea").style.display = "none";
    const resultDiv = document.getElementById("resultArea");
    resultDiv.style.display = "block";

    let html = `
        <div class="social-updates-box">
            <p>For more updates, follow us on:</p>
            <div class="social-btn-group">
                <a href="https://www.instagram.com/calciumnotes" class="social-btn instagram-btn" target="_blank">
                    Instagram
                </a>
                <a href="https://x.com/Calciumnotes" class="social-btn twitter-btn" target="_blank">
                    Twitter
                </a>
            </div>
        </div>

        <h2>Exam Result</h2>
        <p><strong>Total Marks:</strong> ${score} / ${totalPossibleMarks}</p>
        <p><strong>Percentage:</strong> ${percentage}%</p>
        <p><strong>Grade:</strong> ${grade}</p>
        <p><strong>Status:</strong> ${score >= PASS_MARK ? "PASS ✅" : "FAIL ❌"}</p>
        <hr>
        <h3>Performance Analytics</h3>
        <p><strong>Total Questions:</strong> ${selectedQuestions.length} (Correct: ${correctCount}, Wrong: ${wrongCount}, Unanswered: ${unanswered})</p>
        <p><strong>Case Scenario MCQs (2 Marks each):</strong> Correct: ${breakdown.caseCorrect}/25 | Wrong: ${breakdown.caseWrong} | Unanswered: ${breakdown.caseUnanswered}</p>
        <p><strong>Individual MCQs (1 Mark each):</strong> Correct: ${breakdown.indCorrect}/50 | Wrong: ${breakdown.indWrong} | Unanswered: ${breakdown.indUnanswered}</p>
        <hr>
        <h3>Detailed Solution Review</h3>
    `;

    selectedQuestions.forEach((q, index) => {
        html += `
            <div class="reviewBox">
                <p><strong>Q${index + 1} (${q.questionType} - ${q.marks} Mark${q.marks > 1 ? 's' : ''}):</strong> ${q.question}</p>
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
