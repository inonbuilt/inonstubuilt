let audioCtx = null;
let blockAlarmsFired = {}; // Prevents multiple beeps when a block hits 0

function initAudio() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === "suspended") audioCtx.resume();
}
document.body.addEventListener('click', initAudio, { once: true });

// --- ADDED: PLANNER TIMER SYNC LOGIC ---
const CA_SUBJECTS = {
    foundation: [{ id: "f_acc", name: "ACC" }, { id: "f_law", name: "LAW" }, { id: "f_qa", name: "QA" }, { id: "f_eco", name: "ECO" }],
    inter: [{ id: "i_adv", name: "ADV ACC" }, { id: "i_law", name: "LAW" }, { id: "i_tax", name: "TAX" }, { id: "i_cma", name: "CMA" }, { id: "i_aud", name: "AUDIT" }, { id: "i_fm", name: "FM-SM" }],
    final: [{ id: "fr", name: "FR" }, { id: "afm", name: "AFM" }, { id: "audit", name: "AUDIT" }, { id: "dt", name: "DT" }, { id: "idt", name: "IDT" }, { id: "ibs", name: "IBS" }]
};

function getSubjectName(id) {
    for (const lvl in CA_SUBJECTS) {
        const sub = CA_SUBJECTS[lvl].find(s => s.id === id);
        if (sub) return sub.name;
    }
    return id.toUpperCase();
}

function hhmmToDecimal(val) {
    if (!val) return 0;
    const str = val.toString();
    if (str.includes('h') || (!str.includes(':') && str.includes('.'))) return parseFloat(str.replace(/[^0-9.]/g, "")) || 0;
    const parts = str.replace(/[^0-9:]/g, "").split(':');
    if (parts.length === 0 || parts[0] === "") return 0;
    const h = parseInt(parts[0], 10) || 0;
    const m = parts.length > 1 ? parseInt(parts[1], 10) || 0 : 0;
    return h + (m / 60);
}

function decimalToHHMM(decimalHours) {
    if (isNaN(decimalHours)) return "00:00";
    const absHours = Math.abs(decimalHours);
    let h = Math.floor(absHours);
    let m = Math.round((absHours - h) * 60);
    if (m === 60) { h += 1; m = 0; }
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
}

function getTodayDateStr() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function parseInputToMs(val) {
    if (!val) return 0;
    let isNeg = val.toString().trim().startsWith('-');
    let cleanVal = val.toString().replace('-', '').trim();
    let ms = 0;
    if (cleanVal.includes(':')) {
        let parts = cleanVal.split(':');
        let h = parseInt(parts[0]) || 0;
        let m = parseInt(parts[1]) || 0;
        let s = parseInt(parts[2]) || 0;
        ms = (h * 3600000) + (m * 60000) + (s * 1000);
    } else if (!isNaN(cleanVal)) {
        ms = parseFloat(cleanVal) * 3600000;
    }
    return isNeg ? -ms : ms;
}

// --- PRODUCTIVITY TIMER SYNC HELPER ---
function syncProductivityTimer(item) {
    const estMs = hhmmToDecimal(item.estimated) * 3600000;
    let remMs = estMs - (item.accumulatedMs || 0);
    if (remMs < 0) remMs = 0;

    const totalSec = Math.floor(remMs / 1000);
    const h = Math.floor(totalSec / 3600);
    const m = Math.floor((totalSec % 3600) / 60);
    const s = totalSec % 60;

    // Inject values into the Timer panel
    document.getElementById("tHr").value = h.toString().padStart(2, "0");
    document.getElementById("tMin").value = m.toString().padStart(2, "0");
    document.getElementById("tSec").value = s.toString().padStart(2, "0");

    setTimerTab('timer'); // Switch to Timer view
    timerPause(); // Clear any existing intervals safely
    timerLeft = getTimerSecs(); // Refresh internal values
    document.getElementById("timerDisp").textContent = fmtTime(timerLeft);
    timerStart(); // Auto-start the panel
}

function renderStudyBlocks() {
    const allData = JSON.parse(localStorage.getItem("calcium_ca_data_v5") || "{}");
    const todayStr = getTodayDateStr();
    const data = allData[todayStr] || [];
    const container = document.getElementById("rmStudyBlocks");
    if (!container) return;
    
    if (data.length === 0) {
        container.innerHTML = "<div style='opacity:0.5; font-size:12px; margin-top:10px;'>No active plan for today. Check Planning Mode.</div>";
        return;
    }

    container.innerHTML = data.map((item, index) => {
        const subName = getSubjectName(item.id);
        const estMs = hhmmToDecimal(item.estimated) * 3600000;
        
        let actMs = 0;
        if (item.timerState) {
            const elapsed = Date.now() - (item.timerStart || Date.now());
            actMs = (item.accumulatedMs || 0) + elapsed;
        } else {
            actMs = item.accumulatedMs || (hhmmToDecimal(item.actual) * 3600000);
        }

        // Calculate countdown (remaining time)
        let remMs = estMs - actMs;
        let isNegative = remMs < 0;
        let absRem = Math.abs(remMs);

        const totalSec = Math.floor(absRem / 1000);
        const h = Math.floor(totalSec / 3600);
        const m = Math.floor((totalSec % 3600) / 60);
        const s = totalSec % 60;
        const sign = isNegative ? "-" : "";
        
        const timeStr = `${sign}${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
        const staticTimeStr = `${sign}${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}`;

        return `
            <div style="display:flex; justify-content:space-between; align-items:center; margin-top:10px; padding-bottom:10px; border-bottom:1px solid rgba(255,255,255,0.1);">
                <div>
                    <div style="font-weight:bold; font-size:14px;">${subName}</div>
                    <div style="font-size:11px; color:#94a3b8;">${item.startTime} - ${item.endTime}</div>
                </div>
                <div style="display:flex; align-items:center; gap:10px;">
                    <input type="text"
                           value="${item.timerState ? timeStr : staticTimeStr}"
                           id="rm-live-timer-${index}"
                           onchange="manualUpdateRemaining(${index}, this.value)"
                           style="background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.1); color:${item.timerState ? '#ef4444' : '#60a5fa'}; font-family:'Roboto Mono', monospace; font-size:12px; width:75px; text-align:center; border-radius:4px; padding:4px; outline:none;"
                           ${item.timerState ? 'readonly title="Pause to edit"' : 'title="Edit remaining time"'}
                    >
                    <button onclick="toggleStudyTimer(${index})" style="background:rgba(255,255,255,0.1); border:none; color:white; padding:5px 10px; border-radius:4px; cursor:pointer;">
                        ${item.timerState ? '⏸' : '▶'}
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

window.manualUpdateRemaining = (index, val) => {
    const allData = JSON.parse(localStorage.getItem("calcium_ca_data_v5") || "{}");
    const todayStr = getTodayDateStr();
    const data = allData[todayStr];
    if (!data) return;

    const item = data[index];
    const estMs = hhmmToDecimal(item.estimated) * 3600000;
    const inputMs = parseInputToMs(val);

    let newActMs = estMs - inputMs;
    if (newActMs < 0) newActMs = 0;

    item.accumulatedMs = newActMs;
    item.actual = decimalToHHMM(newActMs / 3600000);
    item.manualLock = true;
    item.timerState = false; 

    // SYNC: Pause standalone timer if user manually edits
    timerPause();
    updateTimerDisplay();

    allData[todayStr] = data;
    localStorage.setItem("calcium_ca_data_v5", JSON.stringify(allData));
    window.dispatchEvent(new Event('storage'));
    renderStudyBlocks();
};

window.toggleStudyTimer = (index) => {
    initAudio();
    const allData = JSON.parse(localStorage.getItem("calcium_ca_data_v5") || "{}");
    const todayStr = getTodayDateStr();
    const data = allData[todayStr];
    if (!data) return;

    const item = data[index];
    if (item.timerState) {
        // --- PAUSE FLOW ---
        const elapsed = Date.now() - (item.timerStart || Date.now());
        item.accumulatedMs = (item.accumulatedMs || 0) + elapsed;
        item.timerState = false;
        item.actual = decimalToHHMM(item.accumulatedMs / (1000 * 60 * 60));

        // Sync: Pause the productivity timer
        timerPause();
    } else {
        // --- START FLOW ---
        data.forEach((otherItem, i) => {
            if (i !== index && otherItem.timerState) {
                const elapsed = Date.now() - (otherItem.timerStart || Date.now());
                otherItem.accumulatedMs = (otherItem.accumulatedMs || 0) + elapsed;
                otherItem.timerState = false;
                otherItem.actual = decimalToHHMM(otherItem.accumulatedMs / (1000 * 60 * 60));
            }
        });
        item.timerState = true;
        item.timerStart = Date.now();
        item.accumulatedMs = hhmmToDecimal(item.actual) * (1000 * 60 * 60);

        // Sync: Push remaining time to the Productivity Timer
        syncProductivityTimer(item);
    }
    allData[todayStr] = data;
    localStorage.setItem("calcium_ca_data_v5", JSON.stringify(allData));
    renderStudyBlocks();
};

// --- STATE & INITIALIZATION ---
window.addEventListener("load", () => {
  const savedNotes = localStorage.getItem("cn_notes");
  if (savedNotes !== null) {
    document.getElementById("noteArea").value = savedNotes;
  }
  const savedTasks = localStorage.getItem("cn_tasks");
  if (savedTasks) {
    tasks = JSON.parse(savedTasks);
    renderTasks();
  }
  const savedAlarms = localStorage.getItem("cn_alarms");
  if (savedAlarms) {
    alarms = JSON.parse(savedAlarms);
    renderAlarms();
  }
  renderStudyBlocks();
  tickClock();
});

// --- CROSS IFRAME EVENT LISTENER ---
window.addEventListener('storage', (e) => {
    if (e.key === "cn_tasks") {
        tasks = JSON.parse(e.newValue || "[]");
        renderTasks();
    }
    if (e.key === "cn_alarms") {
        alarms = JSON.parse(e.newValue || "[]");
        renderAlarms();
    }
    if (e.key === "calcium_ca_data_v5") {
        // DETECT REMOTE PLAY/PAUSE FOR PRODUCTIVITY TIMER
        try {
            const newData = JSON.parse(e.newValue || "{}");
            const oldData = JSON.parse(e.oldValue || "{}");
            const todayStr = getTodayDateStr();

            const newToday = newData[todayStr] || [];
            const oldToday = oldData[todayStr] || [];

            newToday.forEach((newItem, index) => {
                const oldItem = oldToday[index] || {};
                // If Timer was just started Remotely (e.g. from Planning Mode)
                if (newItem.timerState && !oldItem.timerState) {
                    syncProductivityTimer(newItem);
                } 
                // If Timer was paused Remotely
                else if (!newItem.timerState && oldItem.timerState) {
                    timerPause();
                }
            });
        } catch(err) {
            console.error("Timer Sync Error:", err);
        }
        
        renderStudyBlocks();
    }
});

// --- CLOCK ---
function tickClock() {
  const now = new Date();
  const H = String(now.getHours()).padStart(2, "0"),
    M = String(now.getMinutes()).padStart(2, "0"),
    S = String(now.getSeconds()).padStart(2, "0");
  document.getElementById("rmClockHM").textContent = H + ":" + M;
  document.getElementById("rmClockSec").textContent = ":" + S;
  document.getElementById("rmClockDate").textContent = now.toDateString();

  const h = now.getHours();
  document.getElementById("rmGreeting").textContent =
    h < 12 ? "Good Morning ☀️" : h < 17 ? "Good Afternoon ⚡" : h < 21 ? "Good Evening 🌙" : "Night Study 🌟";
}

// --- MASTER INTERVAL ---
setInterval(() => {
    tickClock();
    
    // Check Alarms
    const now = new Date();
    const hm = String(now.getHours()).padStart(2, "0") + ":" + String(now.getMinutes()).padStart(2, "0");
    alarms.forEach((a) => {
        if (a.time === hm && !alarmFired[a.id]) {
            alarmFired[a.id] = true;
            beep();
            toastShow("🔔 " + a.label, "Time: " + fmtAlarmListTime(a.time));
            setTimeout(() => delete alarmFired[a.id], 60000);
        }
    });
    
    // Run Active Study Blocks Countdown Timer
    const allData = JSON.parse(localStorage.getItem("calcium_ca_data_v5") || "{}");
    const todayStr = getTodayDateStr();
    const data = allData[todayStr] || [];
    data.forEach((item, index) => {
        if (item.timerState) {
            const estMs = hhmmToDecimal(item.estimated) * 3600000;
            const elapsed = Date.now() - (item.timerStart || Date.now());
            const actMs = (item.accumulatedMs || 0) + elapsed;
            
            let remMs = estMs - actMs;
            let isNegative = remMs < 0;
            let absRem = Math.abs(remMs);

            const totalSec = Math.floor(absRem / 1000);
            const h = Math.floor(totalSec / 3600);
            const m = Math.floor((totalSec % 3600) / 60);
            const s = totalSec % 60;
            
            const sign = isNegative ? "-" : "";
            const timeStr = `${sign}${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
            
            const timerInput = document.getElementById(`rm-live-timer-${index}`);
            if (timerInput) timerInput.value = timeStr;

            // Trigger countdown completion alarm precisely at 0
            const blockKey = `${todayStr}-${index}-${item.id}`;
            if (remMs <= 0 && remMs > -1000 && !blockAlarmsFired[blockKey]) {
                blockAlarmsFired[blockKey] = true;
                beep();
                toastShow("⏰ Time's Up!", `Study block for ${getSubjectName(item.id)} is complete.`);
            }
        }
    });
}, 1000);

// --- TIMER & STOPWATCH LOGIC ---
let timerIv = null, timerLeft = 0, timerOn = false;

function setTimerTab(t) {
  document.getElementById("timerSection").style.display = t === "timer" ? "block" : "none";
  document.getElementById("swSection").style.display = t === "sw" ? "block" : "none";
  document.getElementById("ttabTimer").classList.toggle("on", t === "timer");
  document.getElementById("ttabSW").classList.toggle("on", t === "sw");
}

function getTimerSecs() {
  return (parseInt(document.getElementById("tHr").value) || 0) * 3600 +
    (parseInt(document.getElementById("tMin").value) || 0) * 60 +
    (parseInt(document.getElementById("tSec").value) || 0);
}

function fmtTime(s) {
  const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60;
  return h ? String(h).padStart(2, "0") + ":" + String(m).padStart(2, "0") + ":" + String(sec).padStart(2, "0")
    : String(m).padStart(2, "0") + ":" + String(sec).padStart(2, "0");
}

function updateTimerDisplay() {
  if (timerOn) return;
  timerLeft = getTimerSecs();
  document.getElementById("timerDisp").textContent = fmtTime(timerLeft);
}

function timerStart() {
  initAudio();
  if (timerOn) return;
  if (!timerLeft) timerLeft = getTimerSecs();
  if (!timerLeft) return;
  timerOn = true;
  timerIv = setInterval(() => {
    if (--timerLeft <= 0) {
      clearInterval(timerIv);
      timerOn = false;
      beep();
      toastShow("⏰ Done!", "Study session complete.");
    }
    document.getElementById("timerDisp").textContent = fmtTime(timerLeft);
  }, 1000);
}
function timerPause() { clearInterval(timerIv); timerOn = false; }
function timerReset() { timerPause(); updateTimerDisplay(); }

// Stopwatch
let swOn = false, swIv = null, swMs = 0, swLaps = [];
function swStart() {
  if (swOn) return;
  swOn = true;
  const t0 = Date.now() - swMs;
  swIv = setInterval(() => {
    swMs = Date.now() - t0;
    document.getElementById("swDisp").textContent = fmtSW(swMs);
  }, 100);
}
function fmtSW(ms) {
  const m = Math.floor(ms / 60000), s = Math.floor((ms % 60000) / 1000), t = Math.floor((ms % 1000) / 100);
  return String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0") + "." + t;
}
function swPause() { clearInterval(swIv); swOn = false; }
function swReset() {
  swPause(); swMs = 0; swLaps = [];
  document.getElementById("swDisp").textContent = "00:00.0";
  document.getElementById("swLaps").innerHTML = "";
}
function swLap() {
  swLaps.push(fmtSW(swMs));
  document.getElementById("swLaps").innerHTML = swLaps.map((l, i) => `<div>Lap ${i + 1}: ${l}</div>`).join("");
}

// --- ALARMS & TASKS ---
let alarms = [], alarmFired = {}, tasks = [];

function fmtAlarmListTime(t24) {
  const [h, m] = t24.split(":");
  const hr = parseInt(h);
  const suffix = hr >= 12 ? "PM" : "AM";
  const displayHr = ((hr + 11) % 12) + 1;
  return displayHr + ":" + m + " " + suffix;
}

function alarmAdd() {
  initAudio();
  const t = document.getElementById("alTime").value;
  if (t) {
    alarms.push({ time: t, label: document.getElementById("alLabel").value || "Alarm", id: Date.now() });
    localStorage.setItem("cn_alarms", JSON.stringify(alarms));
    renderAlarms();
  }
}
function alarmDel(id) {
  alarms = alarms.filter((a) => a.id !== id);
  localStorage.setItem("cn_alarms", JSON.stringify(alarms));
  renderAlarms();
}
function renderAlarms() {
  document.getElementById("alarmList").innerHTML = alarms.map((a) => `
    <div class="al-item" style="padding:8px 0; border-bottom:1px solid rgba(255,255,255,0.05); display:flex; justify-content:space-between; align-items:center;">
        <span><strong style="color:#7dd3fc;">${fmtAlarmListTime(a.time)}</strong> - ${a.label}</span>
        <button onclick="alarmDel(${a.id})" class="delete-btn" title="Delete Alarm">×</button>
    </div>`).join("");
}

function taskAdd() {
  const txt = document.getElementById("tkInput").value.trim();
  if (txt) {
    tasks.push({ txt, pri: document.getElementById("tkPri").value, done: false, id: Date.now() });
    document.getElementById("tkInput").value = "";
    localStorage.setItem("cn_tasks", JSON.stringify(tasks));
    renderTasks();
  }
}
function taskToggle(id) {
  const t = tasks.find((x) => x.id === id);
  if (t) t.done = !t.done;
  localStorage.setItem("cn_tasks", JSON.stringify(tasks));
  renderTasks();
}
function taskDel(id) {
  tasks = tasks.filter((x) => x.id !== id);
  localStorage.setItem("cn_tasks", JSON.stringify(tasks));
  renderTasks();
}
function renderTasks() {
  document.getElementById("tkTotal").textContent = tasks.length;
  document.getElementById("tkDone").textContent = tasks.filter((x) => x.done).length;
  document.getElementById("tkPend").textContent = tasks.length - tasks.filter((x) => x.done).length;
  document.getElementById("taskList").innerHTML = tasks.map((t) => {
      const priColor = t.pri === 'high' ? '🔴' : t.pri === 'med' ? '🟡' : '🟢';
      return `
      <div class="tk-item" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; padding:4px 0; border-bottom:1px solid rgba(255,255,255,0.05);">
          <span style="cursor:pointer; ${t.done ? "text-decoration:line-through; color:gray;" : ""}" onclick="taskToggle(${t.id})">
              ${t.done ? "✅" : "⬜"} ${t.txt} <span style="font-size:10px; margin-left:5px;">${priColor}</span>
          </span>
          <button onclick="taskDel(${t.id})" class="delete-btn" title="Delete Task">×</button>
      </div>`;
  }).join("");
}

// --- NOTIFICATIONS & BEEP ---
function toastShow(title, label) {
  const toast = document.getElementById("alarmToast");
  document.getElementById("toastTitle").textContent = title;
  document.getElementById("toastLabel").textContent = label;
  toast.style.display = "flex";
  setTimeout(() => toast.classList.add("show"), 10);
  setTimeout(toastDismiss, 10000);
}
function toastDismiss() {
  const toast = document.getElementById("alarmToast");
  toast.classList.remove("show");
  setTimeout(() => toast.style.display = "none", 400);
}
function noteSave() { localStorage.setItem("cn_notes", document.getElementById("noteArea").value); }

function beep() {
  if (!audioCtx) return;
  const osc = audioCtx.createOscillator(), gain = audioCtx.createGain();
  osc.connect(gain); gain.connect(audioCtx.destination);
  osc.frequency.value = 880; osc.start();
  gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 1);
  osc.stop(audioCtx.currentTime + 1);
}

// --- UNIVERSAL MEDIA PLAYER ---
let mediaFiles = [], currentIdx = 0;
let engine, playButton, seekSlider, videoBox, db;

const dbRequest = indexedDB.open("CalciumMediaDB", 1);
dbRequest.onupgradeneeded = (e) => {
  let database = e.target.result;
  if (!database.objectStoreNames.contains("playlist")) {
    database.createObjectStore("playlist", { keyPath: "id", autoIncrement: true });
  }
};
dbRequest.onsuccess = (e) => { db = e.target.result; loadPlaylistFromDB(); };

window.addEventListener("DOMContentLoaded", () => {
  engine = document.getElementById("mediaEngine");
  playButton = document.getElementById("pBtn");
  seekSlider = document.getElementById("mSeek");
  videoBox = document.getElementById("vContainer");

  engine.onended = () => mediaNext();
  engine.ontimeupdate = () => {
    if (!isNaN(engine.duration)) {
      seekSlider.max = engine.duration;
      seekSlider.value = engine.currentTime;
      document.getElementById("mTime").textContent = fmt(engine.currentTime) + " / " + fmt(engine.duration);
    }
  };
});

function handleMediaFiles(files) {
  if (!db) return alert("Database not ready.");
  const transaction = db.transaction(["playlist"], "readwrite");
  const store = transaction.objectStore("playlist");
  for (let i = 0; i < files.length; i++) {
    store.add({ name: files[i].name, data: files[i], type: files[i].type });
  }
  transaction.oncomplete = () => loadPlaylistFromDB();
}

function loadPlaylistFromDB() {
  if (!db) return;
  const transaction = db.transaction(["playlist"], "readonly");
  const getRequest = transaction.objectStore("playlist").getAll();

  getRequest.onsuccess = () => {
    mediaFiles.forEach((f) => URL.revokeObjectURL(f.url));
    mediaFiles = getRequest.result.map((item) => ({
      name: item.name,
      url: URL.createObjectURL(item.data),
      isVid: item.type.includes("video") || item.name.toLowerCase().endsWith(".mov"),
    }));
    if (mediaFiles.length > 0) {
      drawPlaylist();
      loadMedia(0, false);
    }
  };
}

function loadMedia(idx, shouldPlay = true) {
  if (!mediaFiles[idx]) return;
  currentIdx = idx;
  engine.pause();
  videoBox.style.display = mediaFiles[idx].isVid ? "block" : "none";
  engine.src = mediaFiles[idx].url;
  engine.load();
  document.getElementById("mName").textContent = mediaFiles[idx].name;
  drawPlaylist();
  if (shouldPlay) {
    engine.play().then(() => playButton.textContent = "⏸").catch(() => playButton.textContent = "▶");
  }
}
function mediaToggle() {
  if (engine.paused) { engine.play(); playButton.textContent = "⏸"; }
  else { engine.pause(); playButton.textContent = "▶"; }
}
function mediaNext() { if (mediaFiles.length) loadMedia((currentIdx + 1) % mediaFiles.length); }
function mediaPrev() { if (mediaFiles.length) loadMedia((currentIdx - 1 + mediaFiles.length) % mediaFiles.length); }

function drawPlaylist() {
  document.getElementById("mPlaylist").innerHTML = mediaFiles.map((m, i) => `
    <div class="p-item ${i === currentIdx ? "active" : ""}" onclick="loadMedia(${i})">${i + 1}. ${m.name}</div>`).join("");
}
function mediaSeekChange() { engine.currentTime = seekSlider.value; }
function fmt(s) {
  const min = Math.floor(s / 60), sec = Math.floor(s % 60);
  return String(min).padStart(2, "0") + ":" + String(sec).padStart(2, "0");
}