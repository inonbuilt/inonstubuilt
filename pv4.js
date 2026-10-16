/* =========================================
   STUDY REACTOR SCRIPT (pv4.js)
   Flicker-Free Precision CA Planner & Squad Integration
========================================= */

const CA_SUBJECTS = {
  foundation: [
    { id: "f_acc", name: "ACC", class: "sub-fr", eventClass: "event-fr" },
    { id: "f_law", name: "LAW", class: "sub-afm", eventClass: "event-afm" },
    { id: "f_qa",  name: "QA",  class: "sub-audit", eventClass: "event-audit" },
    { id: "f_eco", name: "ECO", class: "sub-dt", eventClass: "event-dt" }
  ],
  inter: [
    { id: "i_adv", name: "ADV ACC", class: "sub-fr", eventClass: "event-fr" },
    { id: "i_law", name: "LAW",     class: "sub-afm", eventClass: "event-afm" },
    { id: "i_tax", name: "TAX",     class: "sub-dt", eventClass: "event-dt" },
    { id: "i_cma", name: "CMA",     class: "sub-ibs", eventClass: "event-ibs" },
    { id: "i_aud", name: "AUDIT",   class: "sub-audit", eventClass: "event-audit" },
    { id: "i_fm",  name: "FM-SM",   class: "sub-idt", eventClass: "event-idt" }
  ],
  final: [
    { id: "fr",    name: "FR",    class: "sub-fr", eventClass: "event-fr" },
    { id: "afm",   name: "AFM",   class: "sub-afm", eventClass: "event-afm" },
    { id: "audit", name: "AUDIT", class: "sub-audit", eventClass: "event-audit" },
    { id: "dt",    name: "DT",    class: "sub-dt", eventClass: "event-dt" },
    { id: "idt",   name: "IDT",   class: "sub-idt", eventClass: "event-idt" },
    { id: "ibs",   name: "IBS",   class: "sub-ibs", eventClass: "event-ibs" }
  ]
};

let currentLevel = localStorage.getItem("calcium_ca_level") || "final";
let currentDate = new Date();
let selectedDate = new Date();
const MINUTE_MULTIPLIER = 0.75; // 45px per hour / 60 mins

function toDateKey(d) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function getAllData() {
  return JSON.parse(localStorage.getItem("calcium_ca_data_v5") || "{}");
}

function saveAllData(data) {
  localStorage.setItem("calcium_ca_data_v5", JSON.stringify(data));
}

function getPlanForDate(dStr) {
  const all = getAllData();
  if (all[dStr] && all[dStr].length > 0) return all[dStr];
  const subs = CA_SUBJECTS[currentLevel] || CA_SUBJECTS.final;
  const starter = [
    { id: subs[0].id, startTime: "06:00", endTime: "08:00", estimated: "02:00", actual: "00:00", timerState: false, timerStart: null, accumulatedMs: 0, manualLock: false },
    { id: subs[1] ? subs[1].id : subs[0].id, startTime: "09:00", endTime: "11:00", estimated: "02:00", actual: "00:00", timerState: false, timerStart: null, accumulatedMs: 0, manualLock: false }
  ];
  all[dStr] = starter;
  saveAllData(all);
  return starter;
}

function savePlanForDate(dStr, plan) {
  const all = getAllData();
  all[dStr] = plan;
  saveAllData(all);
}

function hhmmToDecimal(val) {
  if (!val) return 0;
  const str = val.toString();
  if (str.includes("h") || (!str.includes(":") && str.includes("."))) {
    return parseFloat(str.replace(/[^0-9.]/g, "")) || 0;
  }
  const parts = str.replace(/[^0-9:]/g, "").split(":");
  const h = parseInt(parts[0], 10) || 0;
  const m = parts.length > 1 ? parseInt(parts[1], 10) || 0 : 0;
  return h + (m / 60);
}

function decimalToHHMM(decimalHours, includeSign = false) {
  if (isNaN(decimalHours)) return "00:00";
  const isNeg = decimalHours < 0;
  const absVal = Math.abs(decimalHours);
  let h = Math.floor(absVal);
  let m = Math.round((absVal - h) * 60);
  if (m === 60) { h += 1; m = 0; }
  const sign = isNeg ? "-" : (includeSign && (h > 0 || m > 0) ? "+" : "");
  return `${sign}${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

function timeToMinutes(t) {
  if (!t) return 0;
  const [h, m] = t.split(":").map(Number);
  return (h * 60) + (m || 0);
}

/* =========================================
   CALENDAR & TIMELINE
========================================= */
function initTimeline() {
  const container = document.getElementById("hour-blocks");
  if (!container) return;
  container.innerHTML = "";
  for (let i = 0; i < 24; i++) {
    const label = i === 0 ? "12 AM" : i < 12 ? `${i} AM` : i === 12 ? "12 PM" : `${i - 12} PM`;
    const block = document.createElement("div");
    block.className = "hour-block";
    block.innerHTML = `<div class="hour-label">${label}</div>`;
    container.appendChild(block);
  }
}

function renderCalendar() {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const todayStr = toDateKey(new Date());
  const selectedStr = toDateKey(selectedDate);
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  document.getElementById("cal-month-year").innerHTML = `
    <span onclick="prevMonth()" style="cursor:pointer; padding:0 6px;">&lt;</span>
    <span>${monthNames[month]} ${year}</span>
    <span onclick="nextMonth()" style="cursor:pointer; padding:0 6px;">&gt;</span>
  `;

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const container = document.getElementById("cal-days");
  container.innerHTML = "";

  for (let i = 0; i < firstDay; i++) {
    container.innerHTML += `<span class="empty"></span>`;
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dObj = new Date(year, month, day);
    const dStr = toDateKey(dObj);
    const cls = [dStr === todayStr ? "today" : "", dStr === selectedStr ? "selected" : ""].join(" ").trim();
    container.innerHTML += `<span class="${cls}" onclick="pickDate('${dStr}')">${day}</span>`;
  }
}

window.prevMonth = function() {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
};

window.nextMonth = function() {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
};

window.pickDate = function(dStr) {
  const [y, m, d] = dStr.split("-");
  selectedDate = new Date(y, m - 1, d);
  renderCalendar();
  renderDateDisplay();
  renderTable();
  renderTimelineEvents();
};

function renderDateDisplay() {
  const options = { weekday: "short", month: "short", day: "numeric" };
  document.getElementById("current-date-display").textContent = selectedDate.toLocaleDateString("en-US", options);
}

function renderTimelineEvents() {
  document.querySelectorAll(".timeline-event").forEach(e => e.remove());
  const container = document.getElementById("timeline-container");
  const plan = getPlanForDate(toDateKey(selectedDate));
  const subs = CA_SUBJECTS[currentLevel] || CA_SUBJECTS.final;

  plan.forEach(item => {
    if (item.startTime && item.endTime) {
      const sMins = timeToMinutes(item.startTime);
      let eMins = timeToMinutes(item.endTime);
      if (eMins <= sMins) eMins += 1440;
      const sub = subs.find(s => s.id === item.id) || subs[0];

      const div = document.createElement("div");
      div.className = `timeline-event ${sub.eventClass || 'event-fr'}`;
      div.style.top = `${sMins * MINUTE_MULTIPLIER}px`;
      div.style.height = `${Math.max(16, (eMins - sMins) * MINUTE_MULTIPLIER)}px`;
      div.textContent = `${sub.name} (${item.startTime} - ${item.endTime})`;
      container.appendChild(div);
    }
  });
}

/* =========================================
   TABLE & VARIANCE ENGINE (FLICKER-FREE)
========================================= */
function renderTable() {
  const tbody = document.getElementById("planner-body");
  if (!tbody) return;
  const dStr = toDateKey(selectedDate);
  const plan = getPlanForDate(dStr);
  const subs = CA_SUBJECTS[currentLevel] || CA_SUBJECTS.final;

  tbody.innerHTML = "";
  plan.forEach((item, idx) => {
    const sub = subs.find(s => s.id === item.id) || subs[0];
    const opts = subs.map(s => `<option value="${s.id}" ${s.id === sub.id ? 'selected' : ''}>${s.name}</option>`).join("");
    const estStr = decimalToHHMM(hhmmToDecimal(item.estimated));
    const actStr = decimalToHHMM(hhmmToDecimal(item.actual));

    const tr = document.createElement("tr");
    tr.id = `planner-row-${idx}`;
    tr.innerHTML = `
      <td>
        <input type="time" class="time-picker start-time-input" value="${item.startTime}" onchange="updateRow(${idx}, 'startTime', this.value)" />
        <span class="time-separator">-</span>
        <input type="time" class="time-picker end-time-input" value="${item.endTime}" onchange="updateRow(${idx}, 'endTime', this.value)" />
      </td>
      <td>
        <select class="subject-select ${sub.class || 'sub-fr'}" onchange="updateRow(${idx}, 'id', this.value)">
          ${opts}
        </select>
      </td>
      <td><input class="time-input est-time-display" value="${estStr}" readonly style="color:#94a3b8;" /></td>
      <td>
        <div class="actual-flex">
          <button class="timer-btn ${item.timerState ? 'timer-btn-pause' : 'timer-btn-play'}" onclick="toggleTimer(${idx})">
            ${item.timerState ? '⏸' : '▶'}
          </button>
          <input class="time-input actual-time-input" value="${actStr}" onchange="updateRow(${idx}, 'actual', this.value)" style="display:${item.timerState ? 'none' : 'inline-block'};" />
          <span id="pv4-live-timer-${idx}" class="live-timer-text" style="display:${item.timerState ? 'inline-block' : 'none'};">00:00:00</span>
        </div>
      </td>
      <td><span class="variance-cell" style="font-family:'Roboto Mono',monospace; font-weight:700;">00:00</span></td>
      <td><button class="delete-btn" onclick="deleteRow(${idx})">×</button></td>
    `;
    tbody.appendChild(tr);
  });

  calculateAnalytics();
  renderTimelineEvents();
}

// In-place updates without destroying inputs while the user is typing/clicking
window.updateRow = function(idx, field, val) {
  const dStr = toDateKey(selectedDate);
  const plan = getPlanForDate(dStr);
  if (!plan[idx]) return;

  plan[idx][field] = val;

  if (field === "startTime" || field === "endTime") {
    const s = timeToMinutes(plan[idx].startTime);
    let e = timeToMinutes(plan[idx].endTime);
    if (e <= s) e += 1440;
    plan[idx].estimated = decimalToHHMM((e - s) / 60);

    // Update estimated cell in place
    const row = document.getElementById(`planner-row-${idx}`);
    if (row) {
      const estInput = row.querySelector(".est-time-display");
      if (estInput) estInput.value = plan[idx].estimated;
    }
  }

  if (field === "actual") {
    plan[idx].accumulatedMs = hhmmToDecimal(val) * 3600000;
  }

  savePlanForDate(dStr, plan);

  if (field === "id") {
    // Subject changed, update CSS class
    const subs = CA_SUBJECTS[currentLevel] || CA_SUBJECTS.final;
    const sub = subs.find(s => s.id === val) || subs[0];
    const row = document.getElementById(`planner-row-${idx}`);
    if (row) {
      const sel = row.querySelector(".subject-select");
      if (sel) sel.className = `subject-select ${sub.class || 'sub-fr'}`;
    }
  }

  calculateAnalytics();
  renderTimelineEvents();
};

window.deleteRow = function(idx) {
  const dStr = toDateKey(selectedDate);
  const plan = getPlanForDate(dStr);
  plan.splice(idx, 1);
  savePlanForDate(dStr, plan);
  renderTable();
};

document.querySelector(".add-row-btn").addEventListener("click", () => {
  const dStr = toDateKey(selectedDate);
  const plan = getPlanForDate(dStr);
  const subs = CA_SUBJECTS[currentLevel] || CA_SUBJECTS.final;
  plan.push({
    id: subs[0].id,
    startTime: "19:00",
    endTime: "21:00",
    estimated: "02:00",
    actual: "00:00",
    timerState: false,
    timerStart: null,
    accumulatedMs: 0,
    manualLock: false
  });
  savePlanForDate(dStr, plan);
  renderTable();
});

window.toggleTimer = function(idx) {
  const dStr = toDateKey(selectedDate);
  const plan = getPlanForDate(dStr);
  const item = plan[idx];

  if (item.timerState) {
    const elapsed = Date.now() - (item.timerStart || Date.now());
    item.accumulatedMs = (item.accumulatedMs || 0) + elapsed;
    item.timerState = false;
    item.actual = decimalToHHMM(item.accumulatedMs / 3600000);
  } else {
    // Pause any other running timer
    plan.forEach((other, i) => {
      if (i !== idx && other.timerState) {
        const el = Date.now() - (other.timerStart || Date.now());
        other.accumulatedMs = (other.accumulatedMs || 0) + el;
        other.timerState = false;
        other.actual = decimalToHHMM(other.accumulatedMs / 3600000);
      }
    });
    item.timerState = true;
    item.timerStart = Date.now();
    item.accumulatedMs = hhmmToDecimal(item.actual) * 3600000;

    // --- NEW: Trigger Reading Mode & Sync to Squad ---
    if (window.parent && typeof window.parent.triggerSharedFocusSession === "function") {
      window.parent.triggerSharedFocusSession(item.estimated);
    }
  }

  savePlanForDate(dStr, plan);
  renderTable();
};

function calculateAnalytics() {
  const dStr = toDateKey(selectedDate);
  const plan = getPlanForDate(dStr);
  const tbody = document.getElementById("planner-body");

  let totalEst = 0;
  let totalAct = 0;

  plan.forEach((item, i) => {
    const est = hhmmToDecimal(item.estimated);
    const act = hhmmToDecimal(item.actual);
    totalEst += est;
    totalAct += act;

    const row = tbody ? tbody.children[i] : null;
    if (row) {
      const diff = act - est;
      const vCell = row.querySelector(".variance-cell");
      if (vCell) {
        vCell.textContent = decimalToHHMM(diff, true);
        vCell.style.color = diff < 0 ? "#f87171" : diff > 0 ? "#4ade80" : "#94a3b8";
      }
    }
  });

  const eff = totalEst > 0 ? Math.min(100, Math.round((totalAct / totalEst) * 100)) : 0;
  document.getElementById("efficiency-val").textContent = `${eff}%`;
  document.getElementById("purity-bar").style.width = `${eff}%`;
  document.getElementById("total-actual-val").textContent = `${decimalToHHMM(totalAct)}h`;

  updateChart();
}

/* =========================================
   PERFORMANCE TREND CHART
========================================= */
let trendChart = null;

window.updateChart = function() {
  const canvas = document.getElementById("trendChart");
  if (!canvas || typeof Chart === "undefined") return;

  const tf = document.getElementById("chart-timeframe").value;
  const count = tf === "months" ? 6 : tf === "weeks" ? 4 : 7;
  const allData = getAllData();

  const labels = [];
  const estArr = [];
  const actArr = [];
  const today = new Date();

  for (let i = count - 1; i >= 0; i--) {
    const d = new Date(today);
    if (tf === "months") {
      d.setMonth(d.getMonth() - i);
      labels.push(d.toLocaleDateString("en-US", { month: "short" }));
    } else if (tf === "weeks") {
      d.setDate(d.getDate() - i * 7);
      labels.push(`Wk ${count - i}`);
    } else {
      d.setDate(d.getDate() - i);
      labels.push(d.toLocaleDateString("en-US", { month: "short", day: "numeric" }));
    }

    const key = toDateKey(d);
    let e = 0, a = 0;
    if (allData[key]) {
      allData[key].forEach(slot => {
        e += hhmmToDecimal(slot.estimated);
        a += hhmmToDecimal(slot.actual);
      });
    }
    estArr.push(Number(e.toFixed(2)));
    actArr.push(Number(a.toFixed(2)));
  }

  if (trendChart) trendChart.destroy();
  trendChart = new Chart(canvas.getContext("2d"), {
    type: "line",
    data: {
      labels,
      datasets: [
        { label: "Actual Hours", data: actArr, borderColor: "#38bdf8", backgroundColor: "rgba(56, 189, 248, 0.15)", tension: 0.3, fill: true },
        { label: "Planned Hours", data: estArr, borderColor: "#94a3b8", borderDash: [5, 5], tension: 0.3 }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { labels: { color: "#e2e8f0" } } },
      scales: {
        x: { ticks: { color: "#94a3b8" }, grid: { color: "rgba(255,255,255,0.05)" } },
        y: { ticks: { color: "#94a3b8" }, grid: { color: "rgba(255,255,255,0.05)" } }
      }
    }
  });
};

window.changeLevel = function(lvl) {
  currentLevel = lvl;
  localStorage.setItem("calcium_ca_level", currentLevel);
  renderTable();
};

/* =========================================
   SQUAD & PARENT INTEGRATION
========================================= */
window.updatePv4UserName = function(val) {
  const clean = val.trim() || "CA Aspirant";
  localStorage.setItem("calcium_user_name", clean);
  if (window.parent && typeof window.parent.saveDisplayName === "function") {
    window.parent.saveDisplayName(clean);
  }
};

window.openParentSquadModal = function() {
  if (window.parent && typeof window.parent.openSquadModal === "function") {
    window.parent.openSquadModal();
  }
};

window.openParentShareModal = function() {
  if (window.parent && typeof window.parent.openShareModal === "function") {
    window.parent.openShareModal();
  }
};

window.broadcastMyPlanToSquad = function() {
  const dStr = toDateKey(selectedDate);
  const plan = getPlanForDate(dStr);
  if (window.parent && typeof window.parent.pushPlanToSquad === "function") {
    window.parent.pushPlanToSquad(plan, currentLevel);
  }
};

function renderSquadStripFromStorage() {
  const list = JSON.parse(localStorage.getItem("calcium_squad_roster") || "[]");
  const countEl = document.getElementById("pv4-squad-count");
  if (countEl) countEl.textContent = list.length || 1;

  const room = localStorage.getItem("calcium_active_room");
  const badge = document.getElementById("pv4-room-badge");
  if (badge) badge.textContent = room ? `Room ${room} (${list.length} Members)` : "Solo Mode";

  const container = document.getElementById("pv4-squad-list");
  if (!container) return;
  container.innerHTML = list.map(m => `
    <div class="pv4-member-chip ${m.isStudying ? 'live' : ''}">
      <div style="font-weight:700; font-size:12px; color:#f8fafc; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${m.name}</div>
      <div style="font-size:10px; color:#7dd3fc; font-weight:700;">${m.activeSubject} • ${(m.level || 'final').toUpperCase()}</div>
      <div style="font-family:'Roboto Mono',monospace; font-size:11px; color:${m.isStudying ? '#4ade80' : '#cbd5e1'};">
        ${m.isStudying ? '▶ ' + m.activeTimerStr : m.totalActualHours + 'h'}
      </div>
    </div>
  `).join("");
}

/* =========================================
   INITIALIZATION & 1-SECOND TICK (STABLE)
========================================= */
window.addEventListener("DOMContentLoaded", () => {
  const savedName = localStorage.getItem("calcium_user_name") || "CA Aspirant";
  const nameInput = document.getElementById("pv4-user-name");
  if (nameInput) nameInput.value = savedName;

  const levelSelect = document.getElementById("ca-level-select");
  if (levelSelect) levelSelect.value = currentLevel;

  initTimeline();
  renderCalendar();
  renderDateDisplay();
  renderTable();

  // 1-second interval ONLY updates clock, timeline line & running timers (DOES NOT TOUCH INPUTS)
  setInterval(() => {
    const now = new Date();
    const timeEl = document.getElementById("current-time-display");
    if (timeEl) {
      timeEl.textContent = now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    }

    // Timeline red line
    const mins = now.getHours() * 60 + now.getMinutes();
    const line = document.getElementById("current-time-line");
    if (line) line.style.top = `${mins * MINUTE_MULTIPLIER}px`;

    // Live running timer text (only updates text, never re-renders table)
    const dStr = toDateKey(selectedDate);
    const plan = getPlanForDate(dStr);
    plan.forEach((slot, idx) => {
      if (slot.timerState) {
        const el = Date.now() - (slot.timerStart || Date.now());
        const totMs = (slot.accumulatedMs || 0) + el;
        const totSec = Math.floor(totMs / 1000);
        const h = Math.floor(totSec / 3600);
        const m = Math.floor((totSec % 3600) / 60);
        const s = totSec % 60;
        const tStr = `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
        const span = document.getElementById(`pv4-live-timer-${idx}`);
        if (span) span.textContent = tStr;
      }
    });

    renderSquadStripFromStorage();
  }, 1000);
});

// ONLY update squad strip on storage event; NEVER re-render table while user is editing
window.addEventListener("storage", (e) => {
  if (e.key === "calcium_squad_roster" || e.key === "calcium_active_room") {
    renderSquadStripFromStorage();
  }
});