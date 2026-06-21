// ==========================================
// 1. GLOBAL STATE & UTILITIES
// ==========================================
let rawExamElements = [];
let selectedOptions = new Set(); 
let examCompleted = false;
let physicsBound = false;
let selectedMCQs = []; 
let selectedDescriptive = []; // MUST be declared globally here!

const TEXT_CHUNK_LIMIT = 90;

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

function splitPlainTextForPagination(text) {
    if (/<[^>]+>/.test(text)) return [text];

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

function splitTableIntoElements(tableNode) {
    return [tableNode.outerHTML];
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

    Array.from(temp.childNodes).forEach(node => {
        if (node.nodeType === 1) { 
            if (node.tagName === 'TABLE') {
                elements = elements.concat(splitTableIntoElements(node));
            } else if (node.tagName === 'UL' || node.tagName === 'OL') {
                elements = elements.concat(splitListIntoElements(node));
            } else if (node.querySelector('table, ul, ol')) {
                elements.push(node.outerHTML);
            } else {
                let safeHtml = node.innerHTML
                    .replace(/(\.|\?|!)\s+/g, '$1 [SPLIT]')
                    .replace(/(<br\s*\/?>)/gi, '$1[SPLIT]');
                
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
                
                let spacer = document.createElement('div');
                spacer.style.display = 'block'; spacer.style.height = '12px'; spacer.style.width = '100%';
                if (node.classList.contains('desc-q-text')) spacer.classList.add('desc-q-text');
                elements.push(spacer.outerHTML);
            }
        } else if (node.nodeType === 3 && node.textContent.trim() !== '') {
            splitPlainTextForPagination(node.textContent).forEach(chunk => {
                elements.push(`<span class="desc-q-text" style="display:inline;">${chunk.trim()} </span>`);
            });
        }
    });
    return elements;
}

// Sub-setting algorithm to ensure marks always equal 14 perfectly
function getRandomCombinationForMarks(questions, targetMarks) {
    let validCombinations = [];

    function findCombos(startIndex, currentCombo, currentSum) {
        if (currentSum === targetMarks) {
            validCombinations.push([...currentCombo]);
            return;
        }
        if (currentSum > targetMarks) return;

        for (let i = startIndex; i < questions.length; i++) {
            currentCombo.push(questions[i]);
            // Number() ensures strings like "8" become integers, preventing math errors
            findCombos(i + 1, currentCombo, currentSum + (Number(questions[i].marks) || 0));
            currentCombo.pop();
        }
    }

    findCombos(0, [], 0);

    if (validCombinations.length > 0) {
        const randomIndex = Math.floor(Math.random() * validCombinations.length);
        return shuffleArray(validCombinations[randomIndex]); 
    } else {
        // Fallback: Greedy approach if no perfect combination exists
        let greedyCombo = [];
        let sum = 0;
        let shuffled = shuffleArray(questions);
        for (let q of shuffled) {
            let m = Number(q.marks) || 0;
            if (sum + m <= targetMarks) {
                greedyCombo.push(q);
                sum += m;
            }
        }
        return greedyCombo;
    }
}

// ==========================================
// 2. INITIALIZATION & GENERATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    // 1. Fetch & Shuffle MCQs
    if (typeof mcqData !== 'undefined') {
        selectedMCQs = shuffleArray(mcqData).slice(0, 3);
    }

    // 2. Fetch, Subset, & Shuffle Descriptive
    if (typeof descriptiveQuestions !== 'undefined') {
        const uniquePlacements = [...new Set(descriptiveQuestions.map(q => q.placement))].sort((a,b) => a-b);
        uniquePlacements.forEach(num => {
            let availableParts = descriptiveQuestions.filter(q => q.placement === num);
            let selectedParts = getRandomCombinationForMarks(availableParts, 14);
            selectedDescriptive.push({ placement: num, parts: selectedParts });
        });
    }

    // 3. Build & Render
    generateExamData(); 
    renderBookPages();  
    
    window.addEventListener('resize', debounce(() => {
        renderBookPages();
    }, 300));
});

function generateExamData() {
    rawExamElements = []; 

    const examDate = getCurrentExamDate();

    rawExamElements.push(`
        <div class="watermark">CAM2</div>
        <div class="header-center">FINAL EXAM<br>PAPER - 1<br>${examDate}<br>FINANCIAL REPORTING - Testing (Alpha) </div>
        <div style="text-align: right; font-weight: bold; margin: 10px 0;">Maximum Marks - 100</div>
        <div class="header-center" style="margin-top: 10px; text-decoration: underline;">GENERAL INSTRUCTIONS</div>
        <ul class="instructions">
            <li>Part I: Objective Type Questions (30 Marks).</li>
            <li>Part II: Descriptive Answers (70 Marks). Question 1 is compulsory.</li>
            <li>Duration of the examination is 3 hours.</li>
        </ul>
    `);

    // --- MCQ GENERATION ---
    if (selectedMCQs.length > 0) {
        selectedMCQs.forEach((block, bIdx) => {
            rawExamElements.push(`<h3 style="color:#2563eb; border-bottom:1px solid #ccc; padding-bottom:5px; margin-top:15px; display:block;">Case Study ${bIdx + 1}</h3>`);
            rawExamElements = rawExamElements.concat(splitHtmlIntoElements(block.caseText));

            block.questions.forEach((q, qIdx) => {
                rawExamElements.push(`<div class="mcq-item" data-qid="${q.question_id}" style="height:14px; display:block;"></div>`);
                splitPlainTextForPagination(q.question).forEach((chunk, chunkIdx) => {
                    const label = chunkIdx === 0 ? `<strong>Q${qIdx+1}:</strong> ` : "";
                    rawExamElements.push(`<span class="mcq-question-text" data-qid="${q.question_id}" style="display:inline; line-height:1.5; font-size:calc(15px * var(--font-scale));">${label}${chunk} </span>`);
                });

                q.options.forEach((opt, i) => {
                    const isCorrect = examCompleted && (i === q.answer) ? "correct-ans" : "";
                    const optionHtml = `<div class="mcq-option ${isCorrect}" data-qid="${q.question_id}" onclick="selectOption(this)" id="q-${bIdx}-${qIdx}-${i}">${opt}</div>`;
                    rawExamElements.push(optionHtml);
                });

                if (examCompleted) {
                    rawExamElements.push(`<div class="solution-box" style="margin-bottom:15px; display:block;">Correct Answer: ${q.options[q.answer]}</div>`);
                }
            });
        });
    }

    // --- DESCRIPTIVE GENERATION ---
    if (selectedDescriptive.length > 0) {
        selectedDescriptive.forEach(group => {
            rawExamElements.push(`<h3 style="color:#2563eb; border-bottom:1px solid #ccc; padding-bottom:5px; margin-top:25px; display:block;">Question ${group.placement}</h3>`);
            
            group.parts.forEach((part, index) => {
                const label = group.parts.length > 1 ? `<strong>(${String.fromCharCode(97 + index)})</strong> ` : "";

                if (!examCompleted) {
                    rawExamElements.push(`<div class="marks desc-q-text" style="margin-top:15px; font-weight:bold; display:block;">[${part.marks} Marks]</div>`);
                    const wrappedHtml = `<div class="desc-q-text">${label}${part.question_html}</div>`;
                    rawExamElements = rawExamElements.concat(splitHtmlIntoElements(wrappedHtml));
                } else {
                    rawExamElements.push(`<div class="marks" style="margin-top:15px; font-weight:bold; display:block;">[Solution for Q${group.placement} ${label}]</div>`);
                    rawExamElements.push(`<div style="color:#166534; font-weight:bold; margin-bottom: 10px; display:block;">Answer:</div>`);
                    rawExamElements = rawExamElements.concat(splitHtmlIntoElements(part.solution_html));
                }
            });
        });
    }

    rawExamElements.push(`
        <div class="header-center" style="margin-top: 30%; color: #999; display:block;">[End of Booklet]</div>
    `);

    if (!examCompleted) {
        rawExamElements.push(`<button id="finish-btn" class="finish-exam-btn" style="display:block;" onclick="revealAnswers()">Finish & Show Solutions</button>`);
    } else {
        rawExamElements.push(`<button id="home-btn" class="finish-exam-btn" style="display:block; background:#0f172a; color:white; margin-top:15px;" onclick="window.location.href='./efr.html'">Return to Home</button>`);
    }
}

// ==========================================
// 3. THE REACTIVE PAGINATION ENGINE
// ==========================================
function renderBookPages() {
    const bookContainer = document.getElementById("book");
    bookContainer.innerHTML = ""; 
    bookContainer.style.transform = 'translateX(0px) rotateX(5deg)'; 

    const rootStyles = getComputedStyle(document.documentElement);
    const tapeWidth = rootStyles.getPropertyValue('--page-width').trim() || '450px';
    const pageHeight = readCssPx(rootStyles, '--page-height', 636);
    const pageSafetyMargin = Math.max(12, Math.min(22, pageHeight * 0.025));
    const SAFE_HEIGHT = pageHeight - pageSafetyMargin;

    const tape = document.createElement('div');
    tape.className = "front"; 
    tape.style.visibility = "hidden";
    tape.style.position = "absolute";
    tape.style.top = "0"; tape.style.left = "0";
    tape.style.width = tapeWidth; tape.style.height = "auto"; 
    document.body.appendChild(tape);

    let finalizedPages = [];
    let currentPageHtml = "";

    for (let i = 0; i < rawExamElements.length; i++) {
        let el = rawExamElements[i];
        tape.innerHTML = currentPageHtml + el;

        if (tape.scrollHeight > SAFE_HEIGHT && currentPageHtml !== "") {
            finalizedPages.push(currentPageHtml); 
            currentPageHtml = el; 
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

    selectedOptions.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.borderColor = '#2563eb';
    });

    initBookPhysics();
}

// ==========================================
// 4. EXAM LOGIC & TIMER
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
// 5. 3D BOOK PHYSICS ENGINE & BALANCER
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

function initBookPhysics() {
    const book = document.getElementById('book');
    pages = Array.from(document.querySelectorAll('.page'));
    resetZIndexes();

    if (physicsBound) return; 
    physicsBound = true;

    startExamTimer();

    document.addEventListener('pointerdown', (e) => {
        if (!e.target.closest('.book')) return;
        const spineX = book.getBoundingClientRect().left;

        if (e.clientX > spineX) { activePage = pages.find(p => !p.classList.contains('flipped')); } 
        else { const flippedPages = pages.filter(p => p.classList.contains('flipped')); activePage = flippedPages[flippedPages.length - 1]; }

        if (activePage) { isDragging = true; activePage.style.transition = 'none'; activePage.style.zIndex = pages.length + 5; }
    });

    document.addEventListener('pointermove', (e) => {
        if (!isDragging || !activePage) return;
        const pageWidth = book.getBoundingClientRect().width;
        let angle = ((e.clientX - book.getBoundingClientRect().left) / pageWidth) * 90 - 90;
        angle = Math.max(-180, Math.min(0, angle));
        activePage.style.transform = `rotateY(${angle}deg)`;
        currentAngle = angle;
    });

    document.addEventListener('pointerup', () => {
        if (!isDragging || !activePage) return;
        isDragging = false;
        activePage.style.transition = 'transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)';
        
        if (currentAngle < -90) { activePage.style.transform = `rotateY(-180deg)`; activePage.classList.add('flipped'); } 
        else { activePage.style.transform = `rotateY(0deg)`; activePage.classList.remove('flipped'); }

        updateBookPosition(); 
        const targetPage = activePage;
        setTimeout(() => { targetPage.style.transform = ''; resetZIndexes(); }, 600);
        activePage = null;
    });

    const nextBtn = document.getElementById('next-btn');
    if(nextBtn) {
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
    if(prevBtn) {
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
}