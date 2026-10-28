/* =========================================
   CALCIUM NOTES — READ MODE ENGINE (read.js)
   Includes Integrated Planning Mode Variance & Actual Hours Tracker
========================================= */

const CA_SUBJECTS = {
  foundation: [
    { id: "f_acc", name: "ACC", class: "sub-fr" },
    { id: "f_law", name: "LAW", class: "sub-afm" },
    { id: "f_qa",  name: "QA",  class: "sub-audit" },
    { id: "f_eco", name: "ECO", class: "sub-dt" }
  ],
  inter: [
    { id: "i_adv", name: "ADV ACC", class: "sub-fr" },
    { id: "i_law", name: "LAW",     class: "sub-afm" },
    { id: "i_tax", name: "TAX",     class: "sub-dt" },
    { id: "i_cma", name: "CMA",     class: "sub-ibs" },
    { id: "i_aud", name: "AUDIT",   class: "sub-audit" },
    { id: "i_fm",  name: "FM-SM",   class: "sub-idt" }
  ],
  final: [
    { id: "fr",    name: "FR",    class: "sub-fr" },
    { id: "afm",   name: "AFM",   class: "sub-afm" },
    { id: "audit", name: "AUDIT", class: "sub-audit" },
    { id: "dt",    name: "DT",    class: "sub-dt" },
    { id: "idt",   name: "IDT",   class: "sub-idt" },
    { id: "ibs",   name: "IBS",   class: "sub-ibs" }
  ]
};

function toDateKey(d) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
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

function cloneSlotsForNewDay(slots, isAutoCarried = true) {
  return slots.map(slot => ({
    id: slot.id,
    startTime: slot.startTime,
    endTime: slot.endTime,
    estimated: slot.estimated,
    actual: "00:00",
    timerState: false,
    timerStart: null,
    accumulatedMs: 0,
    manualLock: false,
    autoCarried: isAutoCarried
  }));
}

function getTodayPlanData() {
  const dStr = toDateKey(new Date());
  const all = JSON.parse(localStorage.getItem("calcium_ca_data_v5") || "{}");
  if (all[dStr] && all[dStr].length > 0) return all[dStr];

  // Carry over timetable from most recent previous date if today has none yet
  const existingDates = Object.keys(all)
    .filter(k => Array.isArray(all[k]) && all[k].length > 0)
    .sort();

  let sourcePlan = null;
  const prevDates = existingDates.filter(k => k < dStr);
  if (prevDates.length > 0) {
    sourcePlan = all[prevDates[prevDates.length - 1]];
  } else if (existingDates.length > 0) {
    sourcePlan = all[existingDates[existingDates.length - 1]];
  } else {
    const savedTemplate = JSON.parse(localStorage.getItem("calcium_default_timetable") || "null");
    if (Array.isArray(savedTemplate) && savedTemplate.length > 0) {
      sourcePlan = savedTemplate;
    }
  }

  const level = localStorage.getItem("calcium_ca_level") || "final";
  const subs = CA_SUBJECTS[level] || CA_SUBJECTS.final;
  const todayPlan = sourcePlan
    ? cloneSlotsForNewDay(sourcePlan, true)
    : [
        { id: subs[0].id, startTime: "06:00", endTime: "08:00", estimated: "02:00", actual: "00:00", timerState: false, timerStart: null, accumulatedMs: 0, manualLock: false, autoCarried: true },
        { id: subs[1] ? subs[1].id : subs[0].id, startTime: "09:00", endTime: "11:00", estimated: "02:00", actual: "00:00", timerState: false, timerStart: null, accumulatedMs: 0, manualLock: false, autoCarried: true }
      ];

  all[dStr] = todayPlan;
  localStorage.setItem("calcium_ca_data_v5", JSON.stringify(all));
  return todayPlan;
}

function saveTodayPlanData(todayPlan) {
  const dStr = toDateKey(new Date());
  const all = JSON.parse(localStorage.getItem("calcium_ca_data_v5") || "{}");
  all[dStr] = todayPlan;
  localStorage.setItem("calcium_ca_data_v5", JSON.stringify(all));
}

function formatSlotLiveHMS(slot) {
  const el = slot.timerState ? (Date.now() - (slot.timerStart || Date.now())) : 0;
  const totMs = (slot.accumulatedMs || 0) + el;
  const totSec = Math.floor(totMs / 1000);
  const h = Math.floor(totSec / 3600);
  const m = Math.floor((totSec % 3600) / 60);
  const s = totSec % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

/* ── INTEGRATED VARIANCE & ACTUAL HOURS TRACKER (START/STOP IN READ MODE ONLY) ── */
window.renderVarianceTrackerInReadMode = function() {
  const tbody = document.getElementById("vrTableBody");
  if (!tbody) return;

  const level = localStorage.getItem("calcium_ca_level") || "final";
  const subs = CA_SUBJECTS[level] || CA_SUBJECTS.final;
  const levelBadge = document.getElementById("vrLevelBadge");
  if (levelBadge) levelBadge.textContent = `CA ${level.toUpperCase()}`;

  const plan = getTodayPlanData();
  if (plan.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; color:#64748b; padding:18px;">No study slots planned for today. Click "Edit Timetable in Plan Mode" to add slots.</td></tr>`;
    updateVarianceSummaryAndRows(plan);
    return;
  }

  tbody.innerHTML = plan.map((item, idx) => {
    const sub = subs.find(s => s.id === item.id) || subs[0];
    const estStr = decimalToHHMM(hhmmToDecimal(item.estimated));
    const actStr = decimalToHHMM(hhmmToDecimal(item.actual));
    const isRunning = !!item.timerState;

    return `
      <tr>
        <td><span class="vr-time-badge">${item.startTime} - ${item.endTime}</span></td>
        <td><span class="vr-sub-pill ${sub.class}">${sub.name}</span></td>
        <td><span class="vr-est-text">${estStr}h</span></td>
        <td>
          <div class="vr-actual-controls">
            <button class="vr-action-btn ${isRunning ? 'pause' : 'play'}" onclick="toggleReadRoomSlotTimer(${idx})">
              ${isRunning ? '⏸ Stop' : '▶ Start'}
            </button>
            <span id="vr-live-readout-${idx}" class="vr-actual-readout ${isRunning ? 'live' : ''}">
              ${isRunning ? formatSlotLiveHMS(item) : actStr + 'h'}
            </span>
          </div>
        </td>
        <td><span id="vr-variance-${idx}" class="vr-variance-val">00:00</span></td>
      </tr>
    `;
  }).join("");

  updateVarianceSummaryAndRows(plan);
};

function updateVarianceSummaryAndRows(plan) {
  let totalEst = 0;
  let totalAct = 0;

  plan.forEach((slot, idx) => {
    const est = hhmmToDecimal(slot.estimated);
    let act = hhmmToDecimal(slot.actual);

    if (slot.timerState) {
      const elapsed = Date.now() - (slot.timerStart || Date.now());
      const totMs = (slot.accumulatedMs || 0) + elapsed;
      act = totMs / 3600000;
      const readoutEl = document.getElementById(`vr-live-readout-${idx}`);
      if (readoutEl) {
        readoutEl.textContent = formatSlotLiveHMS(slot);
      }
    }

    totalEst += est;
    totalAct += act;

    const diff = act - est;
    const varEl = document.getElementById(`vr-variance-${idx}`);
    if (varEl) {
      varEl.textContent = decimalToHHMM(diff, true);
      varEl.style.color = diff < 0 ? "#f87171" : diff > 0 ? "#4ade80" : "#94a3b8";
    }
  });

  const eff = totalEst > 0 ? Math.min(100, Math.round((totalAct / totalEst) * 100)) : 0;
  const plannedEl = document.getElementById("vrTotalPlanned");
  const actualEl = document.getElementById("vrTotalActual");
  const effEl = document.getElementById("vrEfficiency");
  const barEl = document.getElementById("vrPurityBar");

  if (plannedEl) plannedEl.textContent = `${decimalToHHMM(totalEst)}h`;
  if (actualEl) actualEl.textContent = `${decimalToHHMM(totalAct)}h`;
  if (effEl) effEl.textContent = `${eff}%`;
  if (barEl) barEl.style.width = `${eff}%`;
}

window.toggleReadRoomSlotTimer = function(idx) {
  initAudio();
  const plan = getTodayPlanData();
  const item = plan[idx];
  if (!item) return;

  if (item.timerState) {
    // Stop / Pause this slot's actual hours timer
    const elapsed = Date.now() - (item.timerStart || Date.now());
    item.accumulatedMs = (item.accumulatedMs || 0) + elapsed;
    item.timerState = false;
    item.timerStart = null;
    item.actual = decimalToHHMM(item.accumulatedMs / 3600000);
  } else {
    // Pause any other running slot first
    plan.forEach((other, i) => {
      if (i !== idx && other.timerState) {
        const el = Date.now() - (other.timerStart || Date.now());
        other.accumulatedMs = (other.accumulatedMs || 0) + el;
        other.timerState = false;
        other.timerStart = null;
        other.actual = decimalToHHMM(other.accumulatedMs / 3600000);
      }
    });
    item.accumulatedMs = item.accumulatedMs || (hhmmToDecimal(item.actual) * 3600000);
    item.timerState = true;
    item.timerStart = Date.now();
  }

  saveTodayPlanData(plan);
  renderVarianceTrackerInReadMode();

  // Notify parent & Planning Mode iframe
  if (window.parent) {
    if (typeof window.parent.updateAndBroadcastMyState === "function") {
      window.parent.updateAndBroadcastMyState();
    }
    if (typeof window.parent.syncPlanIframeFromReadRoom === "function") {
      window.parent.syncPlanIframeFromReadRoom();
    }
  }
};

window.openPlanningFromRead = function() {
  if (window.parent && typeof window.parent.switchToPlanMode === "function") {
    window.parent.switchToPlanMode();
  }
};

window.highlightVarianceTracker = function() {
  renderVarianceTrackerInReadMode();
  const panel = document.getElementById("planVariancePanel");
  if (panel) {
    panel.scrollIntoView({ behavior: "smooth", block: "center" });
    panel.classList.add("highlight-pulse");
    setTimeout(() => panel.classList.remove("highlight-pulse"), 1800);
  }
};

/* ── 1. CLOCK ENGINE ── */
function updateClock() {
  const now = new Date();
  const H = String(now.getHours()).padStart(2, "0");
  const M = String(now.getMinutes()).padStart(2, "0");
  const S = String(now.getSeconds()).padStart(2, "0");

  document.getElementById("clockHM").textContent = `${H}:${M}`;
  document.getElementById("clockSec").textContent = `:${S}`;

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const dayName = days[now.getDay()];
  const dateNum = String(now.getDate()).padStart(2, "0");
  const monthName = months[now.getMonth()];
  const year = now.getFullYear();

  document.getElementById("clockDate").textContent = `${dayName}, ${dateNum} ${monthName} ${year}`;

  const hr = now.getHours();
  const savedName = localStorage.getItem("calcium_user_name") || "CA Aspirant";
  let greeting = "Welcome";
  if (hr >= 4 && hr < 12) greeting = "Good Morning";
  else if (hr >= 12 && hr < 17) greeting = "Good Afternoon";
  else if (hr >= 17 && hr < 22) greeting = "Good Evening";
  else greeting = "Late Night Study Grind";

  document.getElementById("clockGreeting").textContent = `${greeting}, ${savedName} 🔥`;
}

/* ── 2. WEB AUDIO ALERT (NO EXTERNAL FILES REQUIRED) ── */
let audioCtx = null;
function initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }
}

function playAlarmBeep() {
  initAudio();
  if (!audioCtx) return;
  const now = audioCtx.currentTime;

  [0, 0.25, 0.5, 0.75].forEach((offset) => {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.type = "sine";
    osc.frequency.setValueAtTime(880, now + offset); // A5 note

    gain.gain.setValueAtTime(0.3, now + offset);
    gain.gain.exponentialRampToValueAtTime(0.001, now + offset + 0.18);

    osc.start(now + offset);
    osc.stop(now + offset + 0.2);
  });
}

/* ── 3. FOCUS TIMER (COUNTDOWN) ── */
let timerInterval = null;
let timerRemainingSecs = 1500; // 25 mins default
let timerRunning = false;

window.padNum = function(el) {
  if (el.value.length === 1) el.value = "0" + el.value;
  if (!timerRunning) updateTimerDisplayFromInputs();
};

function getInputsTotalSecs() {
  const h = parseInt(document.getElementById("tH").value, 10) || 0;
  const m = parseInt(document.getElementById("tM").value, 10) || 0;
  const s = parseInt(document.getElementById("tS").value, 10) || 0;
  return h * 3600 + m * 60 + s;
}

function formatSecs(totSecs) {
  const h = Math.floor(totSecs / 3600);
  const m = Math.floor((totSecs % 3600) / 60);
  const s = totSecs % 60;
  if (h > 0) {
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function updateTimerDisplayFromInputs() {
  timerRemainingSecs = getInputsTotalSecs();
  document.getElementById("timerDisplay").textContent = formatSecs(timerRemainingSecs);
}

window.timerToggle = function() {
  initAudio();
  const btn = document.getElementById("btnTimerGo");

  if (!timerRunning) {
    if (timerRemainingSecs <= 0) timerRemainingSecs = getInputsTotalSecs();
    if (timerRemainingSecs <= 0) return;

    timerRunning = true;
    btn.textContent = "Pause";
    btn.className = "t-btn stop";

    timerInterval = setInterval(() => {
      timerRemainingSecs--;
      document.getElementById("timerDisplay").textContent = formatSecs(Math.max(0, timerRemainingSecs));

      if (timerRemainingSecs <= 0) {
        clearInterval(timerInterval);
        timerRunning = false;
        btn.textContent = "Start";
        btn.className = "t-btn go";
        playAlarmBeep();
        showToast("⏰ Focus Session Complete!", "Great revision block. Take a 5-minute break.");
      }
    }, 1000);
  } else {
    clearInterval(timerInterval);
    timerRunning = false;
    btn.textContent = "Resume";
    btn.className = "t-btn go";
  }
};

window.timerReset = function() {
  clearInterval(timerInterval);
  timerRunning = false;
  const btn = document.getElementById("btnTimerGo");
  btn.textContent = "Start";
  btn.className = "t-btn go";
  updateTimerDisplayFromInputs();
};

/* ── 4. STOPWATCH ── */
let swInterval = null;
let swStartTime = 0;
let swElapsedMs = 0;
let swRunning = false;
let swLapsList = [];

window.setTimerMode = function(mode) {
  document.getElementById("subTimer").style.display = mode === "timer" ? "block" : "none";
  document.getElementById("subSW").style.display = mode === "sw" ? "block" : "none";
  document.getElementById("tabTimer").className = mode === "timer" ? "t-tab on" : "t-tab";
  document.getElementById("tabSW").className = mode === "sw" ? "t-tab on" : "t-tab";
};

function formatStopwatch(ms) {
  const totSec = Math.floor(ms / 1000);
  const m = Math.floor(totSec / 60);
  const s = totSec % 60;
  const tenths = Math.floor((ms % 1000) / 100);
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}.${tenths}`;
}

window.swToggle = function() {
  initAudio();
  const btn = document.getElementById("btnSWGo");

  if (!swRunning) {
    swRunning = true;
    btn.textContent = "Pause";
    btn.className = "t-btn stop";
    swStartTime = Date.now() - swElapsedMs;

    swInterval = setInterval(() => {
      swElapsedMs = Date.now() - swStartTime;
      document.getElementById("swDisplay").textContent = formatStopwatch(swElapsedMs);
    }, 100);
  } else {
    clearInterval(swInterval);
    swRunning = false;
    btn.textContent = "Resume";
    btn.className = "t-btn go";
  }
};

window.swReset = function() {
  clearInterval(swInterval);
  swRunning = false;
  swElapsedMs = 0;
  swLapsList = [];
  const btn = document.getElementById("btnSWGo");
  btn.textContent = "Start";
  btn.className = "t-btn go";
  document.getElementById("swDisplay").textContent = "00:00.0";
  document.getElementById("swLaps").innerHTML = "";
};

window.swLap = function() {
  if (swElapsedMs === 0) return;
  swLapsList.unshift(formatStopwatch(swElapsedMs));
  document.getElementById("swLaps").innerHTML = swLapsList
    .slice(0, 5)
    .map((lap, i) => `<div>Lap ${swLapsList.length - i}: ${lap}</div>`)
    .join("");
};

/* ── 5. STUDY ALARMS ENGINE ── */
let alarms = JSON.parse(localStorage.getItem("cn_alarms") || "[]");

function renderAlarms() {
  const container = document.getElementById("alarmList");
  if (!container) return;

  if (alarms.length === 0) {
    container.innerHTML = `<div style="font-size:0.8rem; color:#64748b; text-align:center; padding:10px 0;">No alarms active.</div>`;
    return;
  }

  container.innerHTML = alarms
    .map(
      (al, i) => `
    <div class="al-item">
      <span>🔔</span>
      <span class="al-time">${al.time}</span>
      <span style="font-size:0.85rem; color:#cbd5e1; flex:1;">${escapeHtml(al.label || "Study Alert")}</span>
      <button class="t-btn rst" style="padding:4px 8px; font-size:0.75rem;" onclick="removeAlarm(${i})">✕</button>
    </div>
  `
    )
    .join("");
}

window.addAlarm = function() {
  initAudio();
  const timeInput = document.getElementById("alTime");
  const labelInput = document.getElementById("alLabel");
  const timeVal = timeInput.value;
  if (!timeVal) return;

  alarms.push({
    time: timeVal,
    label: labelInput.value.trim() || "Study Alert",
    triggeredToday: false,
  });

  localStorage.setItem("cn_alarms", JSON.stringify(alarms));
  labelInput.value = "";
  renderAlarms();
};

window.removeAlarm = function(idx) {
  alarms.splice(idx, 1);
  localStorage.setItem("cn_alarms", JSON.stringify(alarms));
  renderAlarms();
};

function checkAlarms() {
  const now = new Date();
  const currentHM = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;

  alarms.forEach((al) => {
    if (al.time === currentHM && !al.triggeredToday) {
      al.triggeredToday = true;
      playAlarmBeep();
      showToast("⏰ " + (al.label || "Study Alarm"), "It's " + al.time + " — stay focused on your CA goal!");
    }
  });

  // Reset at midnight
  if (currentHM === "00:00") {
    alarms.forEach((al) => (al.triggeredToday = false));
  }
}

/* ── 6. REVISION TASKS ── */
let tasks = JSON.parse(localStorage.getItem("cn_tasks") || "[]");

function renderTasks() {
  const container = document.getElementById("taskList");
  if (!container) return;

  const total = tasks.length;
  const done = tasks.filter((t) => t.done).length;
  const pending = total - done;

  document.getElementById("tkTotal").textContent = total;
  document.getElementById("tkDone").textContent = done;
  document.getElementById("tkPending").textContent = pending;

  if (tasks.length === 0) {
    container.innerHTML = `<div style="font-size:0.8rem; color:#64748b; text-align:center; padding:15px 0;">No revision tasks yet. Add one above!</div>`;
    return;
  }

  const priEmojis = { high: "🔴", med: "🟡", low: "🟢" };

  container.innerHTML = tasks
    .map(
      (t, i) => `
    <div class="tk-item ${t.done ? "done" : ""}">
      <span style="cursor:pointer; display:flex; align-items:center; gap:8px;" onclick="toggleTask(${i})">
        <span>${t.done ? "☑️" : "⬜"}</span>
        <span>${priEmojis[t.pri] || "🟡"}</span>
        <span>${escapeHtml(t.text)}</span>
      </span>
      <button class="t-btn rst" style="padding:4px 8px; font-size:0.75rem;" onclick="deleteTask(${i})">✕</button>
    </div>
  `
    )
    .join("");
}

window.addTask = function() {
  const inp = document.getElementById("tkInput");
  const pri = document.getElementById("tkPri").value;
  const val = inp.value.trim();
  if (!val) return;

  tasks.unshift({ text: val, pri, done: false, id: Date.now() });
  localStorage.setItem("cn_tasks", JSON.stringify(tasks));
  inp.value = "";
  renderTasks();
};

window.toggleTask = function(idx) {
  tasks[idx].done = !tasks[idx].done;
  localStorage.setItem("cn_tasks", JSON.stringify(tasks));
  renderTasks();
};

window.deleteTask = function(idx) {
  tasks.splice(idx, 1);
  localStorage.setItem("cn_tasks", JSON.stringify(tasks));
  renderTasks();
};

/* ── 7. QUICK NOTES ── */
window.saveNotes = function() {
  const val = document.getElementById("quickNotes").value;
  localStorage.setItem("cn_notes", val);
  const status = document.getElementById("noteStatus");
  status.textContent = "Saving...";
  setTimeout(() => {
    status.textContent = "Saved";
  }, 400);
};

window.clearNotes = function() {
  if (confirm("Clear all quick notes?")) {
    document.getElementById("quickNotes").value = "";
    localStorage.removeItem("cn_notes");
    document.getElementById("noteStatus").textContent = "Cleared";
  }
};

/* ── 8. TOAST NOTIFICATIONS ── */
let toastTimeout = null;
function showToast(title, msg) {
  const toast = document.getElementById("alarmToast");
  document.getElementById("toastTitle").textContent = title;
  document.getElementById("toastMsg").textContent = msg;
  toast.classList.add("show");

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 7000);
}

window.dismissToast = function() {
  document.getElementById("alarmToast").classList.remove("show");
};

function escapeHtml(str) {
  const d = document.createElement("div");
  d.textContent = str;
  return d.innerHTML;
}

/* =========================================
   SPOTIFY PROFILE & PLAYLIST CONNECT ENGINE
========================================= */
const SPOTIFY_PRESETS = {
  lofi: "https://open.spotify.com/embed/playlist/0vvXsWCC9xrXsKd4FyS8kM?utm_source=generator&theme=0",
  deep: "https://open.spotify.com/embed/playlist/37i9dQZF1DX8Uebhn9wzrS?utm_source=generator&theme=0",
  piano: "https://open.spotify.com/embed/playlist/37i9dQZF1DX4sWSpwq3LiO?utm_source=generator&theme=0",
  classical: "https://open.spotify.com/embed/playlist/37i9dQZF1DWZeKCadgRdKQ?utm_source=generator&theme=0"
};

function parseSpotifyEmbedUrl(url) {
  const raw = (url || "").trim();
  if (!raw) return { url: null, kind: "empty" };

  if (raw.includes("open.spotify.com/embed/")) {
    return { url: raw, kind: "embed" };
  }

  const m = raw.match(/open\.spotify\.com\/(playlist|album|track|artist|show|episode)\/([a-zA-Z0-9]+)/);
  if (m) {
    return {
      url: `https://open.spotify.com/embed/${m[1]}/${m[2]}?utm_source=generator&theme=0`,
      kind: m[1]
    };
  }

  const m2 = raw.match(/spotify:(playlist|album|track|artist|show|episode):([a-zA-Z0-9]+)/);
  if (m2) {
    return {
      url: `https://open.spotify.com/embed/${m2[1]}/${m2[2]}?utm_source=generator&theme=0`,
      kind: m2[1]
    };
  }

  const m3 = raw.match(/open\.spotify\.com\/user\/([a-zA-Z0-9_.-]+)/);
  if (m3) {
    return {
      url: null,
      kind: "user_profile",
      userId: m3[1]
    };
  }

  return { url: null, kind: "invalid" };
}

window.loadSpotifyPreset = function(presetKey) {
  const embedUrl = SPOTIFY_PRESETS[presetKey] || SPOTIFY_PRESETS.lofi;
  const iframe = document.getElementById("spotifyPlayerIframe");
  if (iframe) iframe.src = embedUrl;

  localStorage.removeItem("cn_spotify_custom_embed");
  localStorage.removeItem("cn_spotify_user_input");
  localStorage.setItem("cn_spotify_active_preset", presetKey);

  const input = document.getElementById("spotifyCustomUrl");
  if (input) input.value = "";

  document.querySelectorAll(".sp-preset-btn").forEach(b => b.classList.remove("active"));
  const btn = document.getElementById(`spPreset${presetKey.charAt(0).toUpperCase() + presetKey.slice(1)}`);
  if (btn) btn.classList.add("active");

  const badge = document.getElementById("spotifyStatusBadge");
  if (badge) {
    badge.innerHTML = `<span class="spotify-dot"></span> Preset: ${presetKey.toUpperCase()}`;
  }
};

window.applyCustomSpotifyUrl = function() {
  const input = document.getElementById("spotifyCustomUrl");
  const tip = document.getElementById("spotifyTipText");
  const badge = document.getElementById("spotifyStatusBadge");
  const iframe = document.getElementById("spotifyPlayerIframe");
  if (!input) return;

  const raw = input.value.trim();
  if (!raw) {
    if (tip) tip.textContent = "⚠️ Please paste a valid Spotify playlist, album, or track link.";
    return;
  }

  const res = parseSpotifyEmbedUrl(raw);
  if (res.kind === "user_profile") {
    if (tip) {
      tip.innerHTML = `👤 User profile <b>${escapeHtml(res.userId)}</b> recognized! Open your profile and copy any playlist link to play here.`;
    }
    return;
  }

  if (!res.url) {
    if (tip) tip.textContent = "❌ Invalid Spotify link. Please paste a link like https://open.spotify.com/playlist/...";
    return;
  }

  if (iframe) iframe.src = res.url;
  localStorage.setItem("cn_spotify_custom_embed", res.url);
  localStorage.setItem("cn_spotify_user_input", raw);
  localStorage.removeItem("cn_spotify_active_preset");

  document.querySelectorAll(".sp-preset-btn").forEach(b => b.classList.remove("active"));

  if (badge) {
    badge.innerHTML = `<span class="spotify-dot" style="background:#38bdf8; box-shadow:0 0 8px #38bdf8;"></span> Custom: ${res.kind.toUpperCase()}`;
  }
  if (tip) {
    tip.textContent = "✅ Connected! Spotify music updated and saved.";
  }
};

window.clearCustomSpotifyUrl = function() {
  localStorage.removeItem("cn_spotify_custom_embed");
  localStorage.removeItem("cn_spotify_user_input");
  const input = document.getElementById("spotifyCustomUrl");
  if (input) input.value = "";
  loadSpotifyPreset("lofi");
  const tip = document.getElementById("spotifyTipText");
  if (tip) tip.textContent = "💡 Reset to default study Lo-Fi stream.";
};

function initSpotifyPlayer() {
  const customEmbed = localStorage.getItem("cn_spotify_custom_embed");
  const customInput = localStorage.getItem("cn_spotify_user_input");
  const activePreset = localStorage.getItem("cn_spotify_active_preset") || "lofi";
  const iframe = document.getElementById("spotifyPlayerIframe");
  const input = document.getElementById("spotifyCustomUrl");
  const badge = document.getElementById("spotifyStatusBadge");

  if (customEmbed && iframe) {
    iframe.src = customEmbed;
    if (input && customInput) input.value = customInput;
    document.querySelectorAll(".sp-preset-btn").forEach(b => b.classList.remove("active"));
    if (badge) {
      badge.innerHTML = `<span class="spotify-dot" style="background:#38bdf8; box-shadow:0 0 8px #38bdf8;"></span> Custom Music Connected`;
    }
  } else {
    loadSpotifyPreset(activePreset);
  }
}

/* ── INITIALIZATION ── */
window.addEventListener("DOMContentLoaded", () => {
  updateClock();
  renderVarianceTrackerInReadMode();

  setInterval(() => {
    updateClock();
    checkAlarms();
    const plan = getTodayPlanData();
    updateVarianceSummaryAndRows(plan);
  }, 1000);

  updateTimerDisplayFromInputs();
  renderAlarms();
  renderTasks();

  const savedNotes = localStorage.getItem("cn_notes") || "";
  document.getElementById("quickNotes").value = savedNotes;
  initSpotifyPlayer();
});

window.addEventListener("storage", (e) => {
  if (e.key === "calcium_ca_data_v5" || e.key === "calcium_ca_level") {
    renderVarianceTrackerInReadMode();
  }
});
