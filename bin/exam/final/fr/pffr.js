document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("exam-container");

    // 1. Get unique question numbers (1, 2, 3...) and sort them
    const questionNumbers = [...new Set(questions.map(q => q.placement))].sort((a, b) => a - b);

    questionNumbers.forEach(qNum => {
        // 2. Filter parts that belong to this specific question number
        const parts = questions.filter(q => q.placement === qNum);

        // 3. Create the main block
        const block = document.createElement("div");
        block.className = "question-block";
        block.innerHTML = `<div class="question-header">Question ${qNum}</div>`;

        // 4. Loop through parts to create sub-questions dynamically
        parts.forEach((part, index) => {
            // Automatically convert index 0 to 'a', 1 to 'b', 2 to 'c'
            const label = String.fromCharCode(97 + index); 

            const subDiv = document.createElement("div");
            subDiv.className = "sub-question";
            subDiv.innerHTML = `
                <div class="marks">(${part.marks} Marks)</div>
                <div class="question-content">
                    <p><strong>(${label})</strong> ${part.question_html}</p>
                </div>
            `;
            block.appendChild(subDiv);
        });

        container.appendChild(block);
    });
});