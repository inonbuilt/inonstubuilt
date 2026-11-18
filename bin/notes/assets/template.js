/**
 * Calcium Notes - Shared Unified Interactive Script (template.js)
 * Provides sidebar toggle, dynamic gradual reading progress, and MCQ interactions.
 */

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const btn = document.querySelector(".toggle-btn") || document.getElementById("sidebar-toggle");
    if (!sidebar) return;

    if (window.innerWidth <= 900) {
        sidebar.classList.toggle("mobile-open");
    } else {
        sidebar.classList.toggle("hidden");
    }

    if (btn) {
        const isHidden = sidebar.classList.contains("hidden") || (!sidebar.classList.contains("mobile-open") && window.innerWidth <= 900);
        btn.textContent = isHidden ? "☰ Contents" : "✕ Close";
    }
}

// Dynamic smooth reading progress calculation with gradual color interpolation:
// 0% - 33%: Red (239, 68, 68) to Yellow (234, 179, 8)
// 33% - 66%: Yellow (234, 179, 8) to Green (34, 197, 94)
// 66% - 100%: Green (34, 197, 94) to Vibrant Deep Emerald (16, 185, 129)
function getProgressGradientColor(p) {
    let r, g, b;
    if (p <= 33) {
        const t = Math.max(0, p) / 33;
        r = Math.round(239 + (234 - 239) * t);
        g = Math.round(68 + (179 - 68) * t);
        b = Math.round(68 + (8 - 68) * t);
    } else if (p <= 66) {
        const t = (p - 33) / 33;
        r = Math.round(234 + (34 - 234) * t);
        g = Math.round(179 + (197 - 179) * t);
        b = Math.round(8 + (94 - 8) * t);
    } else {
        const t = Math.min(1, (p - 66) / 34);
        r = Math.round(34 + (16 - 34) * t);
        g = Math.round(197 + (185 - 197) * t);
        b = Math.round(94 + (129 - 94) * t);
    }
    return {
        rgb: 'rgb(' + r + ',' + g + ',' + b + ')',
        glow: '0 0 8px rgba(' + r + ',' + g + ',' + b + ', 0.45)'
    };
}

function initReadingProgress() {
    const content = document.querySelector('.content');
    const progressBar = document.getElementById('reading-progress') || document.querySelector('.progress-bar');
    if (!progressBar) return;

    // Immediately show initial active red pill indicator (3% width)
    const initialColor = getProgressGradientColor(0);
    progressBar.style.width = '3%';
    progressBar.style.backgroundColor = initialColor.rgb;
    progressBar.style.boxShadow = initialColor.glow;

    const sections = document.querySelectorAll('.section-card, .quick-card, .card, .block-card, .topic-card, .content-section, .theory-topic, .problem-card, .header-section, .topic-section, section[id]');
    const sidebarLinks = document.querySelectorAll('.sidebar a, .sidebar nav a');

    function updateProgress(scrollTop, totalScroll) {
        const progress = totalScroll > 0 ? Math.min(100, Math.max(0, (scrollTop / totalScroll) * 100)) : 0;
        const displayWidth = progress <= 0 ? 3 : Math.min(100, Math.max(3, progress));
        progressBar.style.width = displayWidth + '%';

        const colorData = getProgressGradientColor(progress);
        progressBar.style.backgroundColor = colorData.rgb;
        progressBar.style.boxShadow = colorData.glow;

        // Active sidebar link tracking
        let currentSectionId = '';
        const offsetReference = content ? content.offsetTop : 0;
        sections.forEach(function(sec) {
            const secTop = sec.offsetTop - offsetReference;
            if (scrollTop >= secTop - 140) {
                const id = sec.getAttribute('id');
                if (id) currentSectionId = id;
            }
        });

        if (currentSectionId && sidebarLinks.length > 0) {
            sidebarLinks.forEach(function(link) {
                const href = link.getAttribute('href');
                if (href === '#' + currentSectionId) {
                    link.classList.add('active');
                } else if (href && href.startsWith('#')) {
                    link.classList.remove('active');
                }
            });
        }
    }

    if (content) {
        content.addEventListener('scroll', function() {
            const totalScroll = content.scrollHeight - content.clientHeight;
            updateProgress(content.scrollTop, totalScroll);
        });
    }

    // Fallback if window or body scrolls
    window.addEventListener('scroll', function() {
        if (!content || content.scrollHeight <= content.clientHeight + 10) {
            const winScroll = window.scrollY || document.documentElement.scrollTop;
            const winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            updateProgress(winScroll, winHeight);
        }
    });
}

// Global MCQ Option Checker for all Interactive Questions
function checkOption(optEl, isCorrect, ansId) {
    if (!optEl) return;
    const parent = optEl.closest('.mcq-options-grid') || optEl.closest('.mcq-options') || optEl.parentElement;
    if (!parent) return;

    // Prevent re-selection once answered
    const alreadyAnswered = parent.querySelector('.selected-correct') || parent.querySelector('.selected-wrong');
    if (alreadyAnswered) return;

    const allOptions = parent.querySelectorAll('.mcq-option-item');
    allOptions.forEach(function(opt) {
        opt.classList.remove('selected-correct', 'selected-wrong', 'reveal-correct');
    });

    if (isCorrect) {
        optEl.classList.add('selected-correct');
    } else {
        optEl.classList.add('selected-wrong');
        allOptions.forEach(function(opt) {
            const oc = opt.getAttribute('onclick') || '';
            const isOptCorrect = opt.getAttribute('data-correct') === 'true' || oc.indexOf('true') !== -1;
            if (isOptCorrect && opt !== optEl) {
                opt.classList.add('reveal-correct');
            }
        });
    }

    if (ansId) {
        const ansEl = document.getElementById(ansId);
        if (ansEl) {
            ansEl.style.display = 'block';
        }
    }
}

// Toggle Answer Explanation supporting either toggleAnswer('ans-id') or toggleAnswer(this, 'ans-id')
function toggleAnswer(arg1, arg2) {
    const id = typeof arg1 === 'string' ? arg1 : arg2;
    const btn = typeof arg1 === 'string' ? (arg2 && arg2.nodeType ? arg2 : null) : arg1;
    const ansEl = document.getElementById(id);
    if (!ansEl) return;
    const isShowing = ansEl.style.display === 'block';
    ansEl.style.display = isShowing ? 'none' : 'block';
    if (btn && btn.textContent) {
        btn.textContent = isShowing ? 'Show Answer & Explanation' : 'Hide Explanation';
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initReadingProgress);
} else {
    initReadingProgress();
}
