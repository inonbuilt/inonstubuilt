// --- NEW: UNIVERSAL CA SUBJECT MAP ---
const CA_SUBJECTS = {
    foundation: [
        { id: "f_acc", name: "ACC", class: "sub-fr", eventClass: "event-fr" },
        { id: "f_law", name: "LAW", class: "sub-afm", eventClass: "event-afm" },
        { id: "f_qa", name: "QA", class: "sub-audit", eventClass: "event-audit" },
        { id: "f_eco", name: "ECO", class: "sub-dt", eventClass: "event-dt" }
    ],
    inter: [
        { id: "i_adv", name: "ADV ACC", class: "sub-fr", eventClass: "event-fr" },
        { id: "i_law", name: "LAW", class: "sub-afm", eventClass: "event-afm" },
        { id: "i_tax", name: "TAX", class: "sub-audit", eventClass: "event-audit" },
        { id: "i_cma", name: "CMA", class: "sub-dt", eventClass: "event-dt" },
        { id: "i_aud", name: "AUDIT", class: "sub-idt", eventClass: "event-idt" },
        { id: "i_fm", name: "FM-SM", class: "sub-ibs", eventClass: "event-ibs" }
    ],
    final: [
        { id: "fr", name: "FR", class: "sub-fr", eventClass: "event-fr" },
        { id: "afm", name: "AFM", class: "sub-afm", eventClass: "event-afm" },
        { id: "audit", name: "AUDIT", class: "sub-audit", eventClass: "event-audit" },
        { id: "dt", name: "DT", class: "sub-dt", eventClass: "event-dt" },
        { id: "idt", name: "IDT", class: "sub-idt", eventClass: "event-idt" },
        { id: "ibs", name: "IBS", class: "sub-ibs", eventClass: "event-ibs" }
    ]
};

// Controls which level the app is currently displaying
let currentLevel = localStorage.getItem("calcium_ca_level") || "final";

const MINUTE_MULTIPLIER = 0.75;
const tbody = document.getElementById("planner-body");
const hourBlocks = document.getElementById("hour-blocks");

// --- 1. STATE & DATE HELPERS ---
function toYYYYMMDD(dateObj) {
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

let navDate = new Date(); 
let selectedDateStr = toYYYYMMDD(new Date()); 

// --- 2. DATA PERSISTENCE & INHERITANCE ---
const getAllData = () => JSON.parse(localStorage.getItem("calcium_ca_data_v5") || "{}");
const saveAllData = (data) => localStorage.setItem("calcium_ca_data_v5", JSON.stringify(data));

function getPlanForSelectedDate() {
    const allData = getAllData();
    if (allData[selectedDateStr]) return allData[selectedDateStr];

    const sortedDates = Object.keys(allData).sort();
    let pastDate = null;
    for (let i = sortedDates.length - 1; i >= 0; i--) {
        if (sortedDates[i] < selectedDateStr) {
            pastDate = sortedDates[i];
            break;
        }
    }

    if (pastDate) {
        let inheritedPlan = JSON.parse(JSON.stringify(allData[pastDate]));
        inheritedPlan.forEach(p => p.actual = "0h");
        return inheritedPlan;
    }

    // Default start uses the first subject of whatever their current level is
    const startId = CA_SUBJECTS[currentLevel][0].id;
    return [{ id: startId, startTime: "06:00", endTime: "08:00", estimated: "2.0h", actual: "0h" }];
}

function savePlanForSelectedDate(plan) {
    const allData = getAllData();
    allData[selectedDateStr] = plan;
    saveAllData(allData);
}

// --- LEVEL CHANGER ---
window.changeLevel = (lvl) => {
    currentLevel = lvl;
    localStorage.setItem("calcium_ca_level", currentLevel);
    renderTable(); 
    calculateMath();
}

// --- 3. ACTUAL CALENDAR LOGIC ---
function renderCalendar() {
    const year = navDate.getFullYear();
    const month = navDate.getMonth();
    const todayStr = toYYYYMMDD(new Date());
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    document.getElementById("cal-month-year").innerHTML = `
        <span onclick="changeMonth(-1)" style="cursor:pointer; padding: 0 10px; font-size:16px;">&lt;</span>
        ${monthNames[month]} ${year}
        <span onclick="changeMonth(1)" style="cursor:pointer; padding: 0 10px; font-size:16px;">&gt;</span>
    `;

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysContainer = document.getElementById("cal-days");
    daysContainer.innerHTML = "";

    for (let i = 0; i < firstDay; i++) daysContainer.innerHTML += `<span class="empty"></span>`;
    for (let i = 1; i <= daysInMonth; i++) {
        const thisDate = new Date(year, month, i);
        const thisDateStr = toYYYYMMDD(thisDate);
        let classNames = [];
        if (thisDateStr === todayStr) classNames.push('today');
        if (thisDateStr === selectedDateStr) classNames.push('selected');
        daysContainer.innerHTML += `<span class="${classNames.join(' ')}" onclick="selectDate('${thisDateStr}')">${i}</span>`;
    }
}

window.changeMonth = (dir) => {
    navDate.setMonth(navDate.getMonth() + dir);
    renderCalendar();
};

window.selectDate = (dateStr) => {
    selectedDateStr = dateStr;
    const [y, m, d] = dateStr.split('-');
    const dateObj = new Date(y, m - 1, d);
    document.getElementById("current-date-display").innerText = "Plan for: " + dateObj.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
    navDate = new Date(dateObj); 
    renderCalendar();
    renderTable(); 
    updateTimeAndLine(); 
};

// --- 4. 24-HOUR TIMELINE LOGIC ---
function initTimeline() {
    hourBlocks.innerHTML = "";
    for (let i = 0; i <= 23; i++) {
        let hourFormat = i === 0 ? "12 AM" : i < 12 ? `${i} AM` : i === 12 ? "12 PM" : `${i - 12} PM`;
        const block = document.createElement("div");
        block.className = "hour-block";
        block.innerHTML = `<div class="hour-label">${hourFormat}</div>`;
        hourBlocks.appendChild(block);
    }
    updateTimeAndLine();
    setInterval(updateTimeAndLine, 60000); 
}

function updateTimeAndLine() {
    const now = new Date();
    const todayStr = toYYYYMMDD(now);
    
    if (!document.getElementById("current-date-display").innerText.includes("Plan for:")) {
        document.getElementById("current-date-display").innerText = "Plan for: " + now.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
    }
    document.getElementById("current-time-display").innerText = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

    const timeLine = document.getElementById("current-time-line");
    
    if (selectedDateStr === todayStr) {
        if (timeLine) timeLine.style.display = 'block';
        const totalMinutes = (now.getHours() * 60) + now.getMinutes();
        const topPosition = totalMinutes * MINUTE_MULTIPLIER;
        if (timeLine) timeLine.style.top = `${topPosition}px`;
        
        if(!window.scrolledOnce) {
            const container = document.getElementById("timeline-container");
            if (container) container.scrollTop = topPosition - 80; 
            window.scrolledOnce = true;
        }
    } else {
        if (timeLine) timeLine.style.display = 'none'; 
    }
}

function timeToMinutes(timeStr) {
    if (!timeStr) return 0;
    const [h, m] = timeStr.split(':').map(Number);
    return (h * 60) + m;
}

function renderTimelineEvents() {
    document.querySelectorAll('.timeline-event').forEach(e => e.remove());
    const container = document.getElementById("timeline-container");
    const data = getPlanForSelectedDate();
    const activeSubjects = CA_SUBJECTS[currentLevel];

    data.forEach(item => {
        if (item.startTime && item.endTime) {
            const startMins = timeToMinutes(item.startTime);
            let endMins = timeToMinutes(item.endTime);
            if (endMins <= startMins) endMins += (24 * 60);

            const topPosition = startMins * MINUTE_MULTIPLIER; 
            const blockHeight = (endMins - startMins) * MINUTE_MULTIPLIER;

            // Fallback ensures no crashes if they switch levels while having a plan
            const subjectMeta = activeSubjects.find(s => s.id === item.id) || activeSubjects[0];
            
            const eventDiv = document.createElement("div");
            eventDiv.className = `timeline-event ${subjectMeta.eventClass}`;
            eventDiv.style.top = `${topPosition}px`;
            eventDiv.style.height = `${blockHeight}px`;
            eventDiv.innerText = subjectMeta.name; 
            
            container.appendChild(eventDiv);
        }
    });
}

// --- 5. REACTOR TABLE LOGIC ---
document.querySelector(".add-row-btn").addEventListener("click", () => {
    const data = getPlanForSelectedDate();
    const startId = CA_SUBJECTS[currentLevel][0].id;
    data.push({ 
        id: startId, 
        startTime: "09:00", 
        endTime: "11:00", 
        estimated: "2.0h", 
        actual: "0h" 
    });
    savePlanForSelectedDate(data);
    renderTable();
});

window.removeRow = (index) => {
    const data = getPlanForSelectedDate();
    data.splice(index, 1); 
    savePlanForSelectedDate(data);
    renderTable();
};

function renderTable() {
    const data = getPlanForSelectedDate();
    const activeSubjects = CA_SUBJECTS[currentLevel];
    tbody.innerHTML = "";
    
    data.forEach((item, index) => {
        const subjectMeta = activeSubjects.find(s => s.id === item.id) || activeSubjects[0];
        
        const optionsHTML = activeSubjects.map(sub => 
            `<option value="${sub.id}" ${subjectMeta.id === sub.id ? 'selected' : ''}>${sub.name}</option>`
        ).join('');

        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td style="white-space: nowrap;">
                <input type="time" class="time-picker" value="${item.startTime}" onchange="updateField(${index}, 'startTime', this.value)">
                <span class="time-separator">-</span>
                <input type="time" class="time-picker" value="${item.endTime}" onchange="updateField(${index}, 'endTime', this.value)">
            </td>
            <td>
                <select class="subject-select ${subjectMeta.class}" onchange="updateField(${index}, 'id', this.value)">
                    ${optionsHTML}
                </select>
            </td>
            <td><input class="time-input" value="${item.estimated}" oninput="updateField(${index}, 'estimated', this.value)" readonly style="color:#94a3b8; cursor:not-allowed;"></td>
            <td><input class="time-input" value="${item.actual}" oninput="updateField(${index}, 'actual', this.value)"></td>
            <td><span class="variance-cell" style="font-family:'Roboto Mono', monospace; font-weight:700;">0h</span></td>
            <td><button class="delete-btn" onclick="removeRow(${index})" title="Delete Row">×</button></td>
        `;
        tbody.appendChild(tr);
    });
    calculateMath();
}

window.updateField = (index, field, value) => {
    const data = getPlanForSelectedDate();
    data[index][field] = value;
    
    if(field === 'startTime' || field === 'endTime') {
        const startMins = timeToMinutes(data[index].startTime);
        let endMins = timeToMinutes(data[index].endTime);
        if (endMins <= startMins) endMins += (24 * 60); 
        
        const diffHours = (endMins - startMins) / 60;
        data[index].estimated = diffHours.toFixed(1) + 'h';
    }

    savePlanForSelectedDate(data);
    
    if(field === 'startTime' || field === 'endTime' || field === 'id') {
        renderTable(); 
    } else {
        calculateMath();
    }
};

function parseHours(val) {
    if (!val) return 0;
    return parseFloat(val.toString().replace(/[^0-9.]/g, "")) || 0;
}

function calculateMath() {
    const data = getPlanForSelectedDate();
    let totalEst = 0; let totalAct = 0;
    
    data.forEach((item, index) => {
        const est = parseHours(item.estimated);
        const act = parseHours(item.actual);
        totalEst += est; totalAct += act;
        
        const row = tbody.children[index];
        if(row) {
            const diff = act - est;
            const vCell = row.querySelector(".variance-cell");
            vCell.innerText = (diff > 0 ? "+" : "") + diff.toFixed(1) + "h";
            vCell.style.color = diff < 0 ? "#ef4444" : diff > 0 ? "#22c55e" : "#94a3b8"; 
        }
    });

    const efficiency = totalEst > 0 ? Math.round((totalAct / totalEst) * 100) : 0;
    document.getElementById("efficiency-val").innerText = efficiency + "%";
    document.getElementById("purity-bar").style.width = Math.min(efficiency, 100) + "%";
    document.getElementById("total-actual-val").innerText = totalAct.toFixed(1) + "h";

    renderTimelineEvents(); 
    updateChart(); 
}

// --- 6. CHART.JS LOGIC ---
let trendChartInstance = null;

function getChartData(timeframe) {
    const allData = getAllData();
    const labels = [];
    const estimatedData = [];
    const actualData = [];
    const varianceData = [];

    const today = new Date();
    today.setHours(0,0,0,0);

    if (timeframe === 'days') {
        for (let i = 6; i >= 0; i--) {
            const d = new Date(today);
            d.setDate(d.getDate() - i);
            const dateStr = toYYYYMMDD(d);
            labels.push(d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));

            let est = 0, act = 0;
            if (allData[dateStr]) {
                allData[dateStr].forEach(item => {
                    est += parseHours(item.estimated);
                    act += parseHours(item.actual);
                });
            }
            estimatedData.push(est);
            actualData.push(act);
            varianceData.push(act - est);
        }
    } else if (timeframe === 'weeks') {
        for (let i = 3; i >= 0; i--) {
            labels.push(i === 0 ? "This Week" : `-${i} Weeks`);
            let est = 0, act = 0;
            for(let j = 0; j < 7; j++) {
                const d = new Date(today);
                d.setDate(d.getDate() - ((i * 7) + j));
                const dateStr = toYYYYMMDD(d);
                if (allData[dateStr]) {
                    allData[dateStr].forEach(item => {
                        est += parseHours(item.estimated);
                        act += parseHours(item.actual);
                    });
                }
            }
            estimatedData.push(est);
            actualData.push(act);
            varianceData.push(act - est);
        }
    } else if (timeframe === 'months') {
        for (let i = 5; i >= 0; i--) {
            const d = new Date(today.getFullYear(), today.getMonth() - i, 1);
            labels.push(d.toLocaleDateString('en-US', { month: 'short', year: '2-digit' }));

            let est = 0, act = 0;
            Object.keys(allData).forEach(dateStr => {
                const [y, m, day] = dateStr.split('-');
                if (parseInt(y) === d.getFullYear() && parseInt(m) - 1 === d.getMonth()) {
                    allData[dateStr].forEach(item => {
                        est += parseHours(item.estimated);
                        act += parseHours(item.actual);
                    });
                }
            });
            estimatedData.push(est);
            actualData.push(act);
            varianceData.push(act - est);
        }
    }

    return { labels, estimatedData, actualData, varianceData };
}

window.updateChart = () => {
    const timeframe = document.getElementById("chart-timeframe").value;
    const chartData = getChartData(timeframe);
    const ctx = document.getElementById('trendChart').getContext('2d');

    if (trendChartInstance) {
        trendChartInstance.destroy();
    }

    trendChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: chartData.labels,
            datasets: [
                { label: 'Actual (Hrs)', data: chartData.actualData, borderColor: '#3b82f6', backgroundColor: 'rgba(59, 130, 246, 0.1)', tension: 0.3, fill: true },
                { label: 'Estimated (Hrs)', data: chartData.estimatedData, borderColor: '#94a3b8', borderDash: [5, 5], tension: 0.3 },
                { label: 'Variance', data: chartData.varianceData, borderColor: '#f59e0b', tension: 0.3 }
            ]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            plugins: { legend: { labels: { color: '#e2e8f0', font: {family: 'Inter'} } } },
            scales: {
                x: { ticks: { color: '#94a3b8', font: {family: 'Inter'} }, grid: { color: 'rgba(255,255,255,0.05)' } },
                y: { ticks: { color: '#94a3b8', font: {family: 'Roboto Mono'} }, grid: { color: 'rgba(255,255,255,0.05)' } }
            }
        }
    });
};

document.addEventListener("DOMContentLoaded", () => {
    // Make sure dropdown reflects the saved level
    const selectEl = document.getElementById("ca-level-select");
    if (selectEl) selectEl.value = currentLevel;

    renderCalendar();
    initTimeline();
    selectDate(toYYYYMMDD(new Date())); 
});