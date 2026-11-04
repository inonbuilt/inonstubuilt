/**
 * Calcium Notes - SPOM Exam Results Tracker
 * Stores and manages exam attempts, scores, and analytics in localStorage.
 */

const SPOM_STORAGE_KEY = "calcium_spom_results";

/**
 * Save an exam attempt to localStorage
 * @param {Object} data - Exam result metadata and scores
 * @returns {Object} Saved record
 */
function saveSpomResult(data) {
    try {
        if (!data) return null;
        const history = getSpomResults();

        const totalMarks = Number(data.totalMarks) || 100;
        const score = Number(data.score) || 0;
        let percentage = data.percentage;
        if (percentage === undefined || percentage === null || isNaN(percentage)) {
            percentage = totalMarks > 0 ? Number(((score / totalMarks) * 100).toFixed(2)) : 0;
        } else {
            percentage = Number(Number(percentage).toFixed(2));
        }

        const passMark = Number(data.passMark) || 50;
        const isPass = data.isPass !== undefined 
            ? Boolean(data.isPass) 
            : (score >= passMark || percentage >= 50);

        const now = new Date();
        const entry = {
            id: "spom_" + Date.now() + "_" + Math.floor(Math.random() * 1000),
            set: data.set || "SPOM", // e.g. "SET A", "SET B", "SET C", "SET D"
            title: data.title || (data.set ? data.set + " Exam" : "SPOM Mock Exam"),
            subject: data.subject || data.title || "SPOM Mock",
            mode: data.mode || "Full Mock", // "Full Mock" or "Chapter-Wise"
            score: score,
            totalMarks: totalMarks,
            percentage: percentage,
            grade: data.grade || (isPass ? "Pass" : "Fail"),
            status: isPass ? "PASS" : "FAIL",
            passMark: passMark,
            correctCount: Number(data.correctCount) || 0,
            wrongCount: Number(data.wrongCount) || 0,
            unanswered: Number(data.unanswered) || 0,
            timestamp: now.getTime(),
            dateStr: now.toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "short",
                year: "numeric"
            }),
            timeStr: now.toLocaleTimeString("en-IN", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true
            })
        };

        history.unshift(entry);

        // Keep last 150 attempts to maintain performance
        if (history.length > 150) {
            history.length = 150;
        }

        localStorage.setItem(SPOM_STORAGE_KEY, JSON.stringify(history));
        return entry;
    } catch (e) {
        console.warn("SPOM Tracker: Failed to save result to localStorage:", e);
        return null;
    }
}

/**
 * Retrieve all saved exam results
 * @returns {Array} List of exam attempts
 */
function getSpomResults() {
    try {
        const raw = localStorage.getItem(SPOM_STORAGE_KEY);
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
        console.warn("SPOM Tracker: Failed to read results:", e);
        return [];
    }
}

/**
 * Delete a specific result by ID
 * @param {string} id
 * @returns {boolean} True if deleted
 */
function deleteSpomResult(id) {
    try {
        const list = getSpomResults().filter(item => item.id !== id);
        localStorage.setItem(SPOM_STORAGE_KEY, JSON.stringify(list));
        return true;
    } catch (e) {
        console.warn("SPOM Tracker: Failed to delete result:", e);
        return false;
    }
}

/**
 * Clear all SPOM exam results from localStorage
 */
function clearSpomResults() {
    try {
        localStorage.removeItem(SPOM_STORAGE_KEY);
        return true;
    } catch (e) {
        console.warn("SPOM Tracker: Failed to clear results:", e);
        return false;
    }
}

/**
 * Get aggregated statistics for the dashboard
 * @returns {Object} Summary stats
 */
function getSpomStats() {
    const list = getSpomResults();
    if (!list.length) {
        return {
            total: 0,
            passed: 0,
            failed: 0,
            passRate: 0,
            avgPercentage: 0,
            highestScore: 0,
            sets: {
                "SET A": { count: 0, passed: 0, avg: 0 },
                "SET B": { count: 0, passed: 0, avg: 0 },
                "SET C": { count: 0, passed: 0, avg: 0 },
                "SET D": { count: 0, passed: 0, avg: 0 }
            }
        };
    }

    let passed = 0;
    let totalScoreSum = 0;
    let highestScore = 0;

    const sets = {
        "SET A": { count: 0, passed: 0, totalPct: 0, avg: 0 },
        "SET B": { count: 0, passed: 0, totalPct: 0, avg: 0 },
        "SET C": { count: 0, passed: 0, totalPct: 0, avg: 0 },
        "SET D": { count: 0, passed: 0, totalPct: 0, avg: 0 }
    };

    list.forEach(item => {
        if (item.status === "PASS") passed++;
        const pct = Number(item.percentage) || 0;
        totalScoreSum += pct;
        if ((item.score || 0) > highestScore) highestScore = item.score;

        const setKey = (item.set || "").toUpperCase();
        if (sets[setKey]) {
            sets[setKey].count++;
            if (item.status === "PASS") sets[setKey].passed++;
            sets[setKey].totalPct += pct;
        }
    });

    Object.keys(sets).forEach(k => {
        if (sets[k].count > 0) {
            sets[k].avg = Number((sets[k].totalPct / sets[k].count).toFixed(1));
        }
    });

    return {
        total: list.length,
        passed: passed,
        failed: list.length - passed,
        passRate: Number(((passed / list.length) * 100).toFixed(1)),
        avgPercentage: Number((totalScoreSum / list.length).toFixed(1)),
        highestScore: highestScore,
        sets: sets
    };
}

/**
 * Export exam results as CSV file download
 */
function exportSpomResultsCSV() {
    const list = getSpomResults();
    if (!list.length) {
        alert("No exam records to export.");
        return;
    }

    const headers = ["Date", "Time", "Set", "Subject", "Mode", "Score", "Total Marks", "Percentage", "Grade", "Status", "Correct", "Wrong", "Unanswered"];
    const rows = list.map(item => [
        `"${item.dateStr || ''}"`,
        `"${item.timeStr || ''}"`,
        `"${item.set || ''}"`,
        `"${(item.subject || item.title || '').replace(/"/g, '""')}"`,
        `"${item.mode || ''}"`,
        item.score,
        item.totalMarks,
        `"${item.percentage}%"`,
        `"${item.grade || ''}"`,
        `"${item.status || ''}"`,
        item.correctCount || 0,
        item.wrongCount || 0,
        item.unanswered || 0
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(r => r.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `calcium_spom_results_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Make functions accessible globally on window
if (typeof window !== "undefined") {
    window.saveSpomResult = saveSpomResult;
    window.getSpomResults = getSpomResults;
    window.deleteSpomResult = deleteSpomResult;
    window.clearSpomResults = clearSpomResults;
    window.getSpomStats = getSpomStats;
    window.exportSpomResultsCSV = exportSpomResultsCSV;
}
