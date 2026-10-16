/* =========================================
   CALCIUM NOTES — READ MODE ENGINE (read.js)
========================================= */

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

/* ── INITIALIZATION ── */
window.addEventListener("DOMContentLoaded", () => {
  updateClock();
  setInterval(updateClock, 1000);
  setInterval(checkAlarms, 1000);

  updateTimerDisplayFromInputs();
  renderAlarms();
  renderTasks();

  const savedNotes = localStorage.getItem("cn_notes") || "";
  document.getElementById("quickNotes").value = savedNotes;
});