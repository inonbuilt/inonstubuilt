/**
 * Master Game Engine for Spot the Anomalies
 * Features:
 * - Sudden Death Mode: 1 Mistake = Instant Game Over!
 * - No Timer: Deep forensic inspection at the player's own pace
 * - Dynamic Procedural Question Generation: Questions & rows change every session
 * - Progressive Tiers: CA Foundation (Easy) -> CA Inter (Medium) -> CA Final (Highest Level)
 */

class SpotAnomaliesGame {
    constructor() {
        this.questionBank = QUESTION_BANK;
        this.activeLevels = [];
        this.currentLevelIndex = 0;
        this.currentLevel = null;
        this.score = 0;
        this.combo = 1;
        this.levelSolved = false;

        // Lifelines state (reset each campaign)
        this.lifelines = {
            scan5050: true,
            hint: true,
            changeCase: true
        };
    }

    init() {
        this.bindGlobalEvents();
    }

    /**
     * Helper: Fisher-Yates Array Shuffle
     */
    shuffleArray(array) {
        const arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    /**
     * Start Campaign: 4 Random Foundation + 4 Random Inter + 4 Random Final
     */
    startCampaign() {
        const foundShuffled = this.shuffleArray(this.questionBank.foundation).slice(0, 4);
        const interShuffled = this.shuffleArray(this.questionBank.inter).slice(0, 4);
        const finalShuffled = this.shuffleArray(this.questionBank.final).slice(0, 4);

        // Combine into 12 progressive levels
        this.activeLevels = [...foundShuffled, ...interShuffled, ...finalShuffled];
        this.beginPlay(0);
    }

    /**
     * Start Single Tier Mode with all questions randomized from that pool
     */
    startTierMode(tierKey) {
        const pool = this.questionBank[tierKey] || this.questionBank.foundation;
        this.activeLevels = this.shuffleArray(pool);
        this.beginPlay(0);
    }

    beginPlay(startIndex = 0) {
        this.currentLevelIndex = startIndex;
        this.score = 0;
        this.combo = 1;
        this.resetLifelines();

        document.getElementById("startScreen").style.display = "none";
        document.getElementById("winScreen").style.display = "none";
        document.getElementById("gameOverScreen").style.display = "none";
        document.getElementById("gameContainer").style.display = "grid";

        this.loadLevel(this.currentLevelIndex);
    }

    resetLifelines() {
        this.lifelines = { scan5050: true, hint: true, changeCase: true };
        const btn5050 = document.getElementById("life5050");
        const btnHint = document.getElementById("lifeHint");
        const btnChange = document.getElementById("lifeChange");

        if (btn5050) { btn5050.disabled = false; btn5050.classList.remove("used"); }
        if (btnHint) { btnHint.disabled = false; btnHint.classList.remove("used"); }
        if (btnChange) { btnChange.disabled = false; btnChange.classList.remove("used"); }
    }

    loadLevel(index) {
        this.levelSolved = false;
        this.currentLevelIndex = index;

        if (index >= this.activeLevels.length) {
            this.showVictoryScreen();
            return;
        }

        // Deep copy and shuffle the rows so answers are never in the same place
        const rawCase = this.activeLevels[index];
        this.currentLevel = {
            ...rawCase,
            items: this.shuffleArray(rawCase.items)
        };

        AuditBot.setLevel(this.currentLevel);

        // Check if advancing into a new tier to celebrate
        if (this.activeLevels.length === 12) {
            if (index === 4) {
                AudioEngine.playLevelUp();
                this.showTierPromoModal("🎉 PROMOTED TO CA INTERMEDIATE!", "You conquered CA Foundation! Welcome to Level 2: Accounting Standards (AS), Inventory Valuation (AS 2), and Schedule III rules.");
                return;
            } else if (index === 8) {
                AudioEngine.playLevelUp();
                this.showTierPromoModal("🔥 PROMOTED TO CA FINAL!", "Elite status achieved! Welcome to Level 3: Forensic Auditing, Ind AS 115, Shell Companies, CARO 2020 & Off-Balance Sheet Bombs!");
                return;
            }
        }

        this.renderLevelUI();
        this.updateLadder();
    }

    renderLevelUI() {
        const lvl = this.currentLevel;

        // HUD elements
        const tierBadge = document.getElementById("hudTierBadge");
        const levelIndicator = document.getElementById("hudLevelIndicator");
        const companyName = document.getElementById("cardCompanyName");
        const statementBadge = document.getElementById("cardStatementBadge");
        const storyBox = document.getElementById("cardStoryText");
        const itemsList = document.getElementById("statementItemsList");
        const explanationBox = document.getElementById("explanationBox");

        if (tierBadge) {
            tierBadge.textContent = lvl.tier;
            tierBadge.className = `tier-badge ${lvl.tierKey}`;
        }
        if (levelIndicator) {
            levelIndicator.textContent = `Case ${this.currentLevelIndex + 1} of ${this.activeLevels.length}`;
        }
        if (companyName) companyName.textContent = lvl.company;
        if (statementBadge) statementBadge.textContent = `${lvl.statementType} • ${lvl.year}`;
        if (storyBox) storyBox.textContent = lvl.story;

        // Reset explanation card
        if (explanationBox) {
            explanationBox.style.display = "none";
            explanationBox.innerHTML = "";
        }

        // Render interactive statement items
        if (itemsList) {
            itemsList.innerHTML = lvl.items.map((item, idx) => `
                <div class="statement-row" data-id="${item.id}" data-index="${idx}">
                    <div class="row-left">
                        <span class="row-index">#${idx + 1}</span>
                        <span class="row-label">${item.label}</span>
                    </div>
                    <div class="row-right">
                        <span class="row-value">${item.value}</span>
                        <button class="btn-flag">🚩 Flag Fraud</button>
                    </div>
                </div>
            `).join("");

            // Bind click to each row
            itemsList.querySelectorAll(".statement-row").forEach(row => {
                row.addEventListener("click", () => {
                    const idx = parseInt(row.dataset.index);
                    this.handleRowClick(idx, row);
                });
            });
        }

        // Update AuditBot Bubble
        this.setBotSpeech(AuditBot.getGreeting());
        this.updateHUD();
    }

    handleRowClick(index, rowEl) {
        if (this.levelSolved) return;

        const item = this.currentLevel.items[index];

        if (item.isAnomaly) {
            // SUCCESS!
            this.levelSolved = true;
            AudioEngine.playSuccess();

            rowEl.classList.add("correct-row");

            // Calculate points: 150 base + combo
            const earnedPoints = Math.round(150 * this.combo);
            this.score += earnedPoints;
            this.combo = Math.min(4, +(this.combo + 0.5).toFixed(1));

            this.setBotSpeech(AuditBot.getSuccessCommentary());
            this.showExplanation(earnedPoints);
            this.updateHUD();

        } else {
            // SUDDEN DEATH: 1 MISTAKE = LOST!
            AudioEngine.playWrong();
            rowEl.classList.add("wrong-row");

            this.setBotSpeech(AuditBot.getFailCommentary());
            
            setTimeout(() => {
                this.showGameOverModal(
                    `💀 Sudden Death! You flagged an innocent accounting entry ("${item.label}"). In a high-stakes audit, false accusations breach ethics and client trust. Audit license suspended!`
                );
            }, 700);
        }
    }

    showExplanation(earnedPoints) {
        const box = document.getElementById("explanationBox");
        if (!box) return;

        box.style.display = "block";
        box.innerHTML = `
            <div class="explanation-content">
                <div class="exp-header">
                    <span class="exp-badge">🏆 FRAUD BUSTED! +${earnedPoints} PTS (Streak: ${this.combo}x)</span>
                    <span class="std-tag">${this.currentLevel.standardTag}</span>
                </div>
                <div class="exp-body">
                    ${this.currentLevel.explanation}
                </div>
                <div class="exp-footer">
                    <button class="btn-next" id="btnNextLevel">Next Case →</button>
                </div>
            </div>
        `;

        document.getElementById("btnNextLevel")?.addEventListener("click", () => {
            AudioEngine.playClick();
            this.loadLevel(this.currentLevelIndex + 1);
        });
    }

    updateHUD() {
        const scoreEl = document.getElementById("hudScore");
        const comboEl = document.getElementById("hudCombo");

        if (scoreEl) scoreEl.textContent = this.score;
        if (comboEl) comboEl.textContent = `${this.combo}x`;
    }

    updateLadder() {
        const container = document.getElementById("ladderStepsContainer");
        if (!container) return;

        container.innerHTML = this.activeLevels.map((lvl, idx) => {
            let stateClass = "";
            if (idx === this.currentLevelIndex) stateClass = "active";
            else if (idx < this.currentLevelIndex) stateClass = "completed";

            return `
                <div class="ladder-step ${stateClass}" data-step="${idx}">
                    <span class="step-num">${idx + 1}</span>
                    <span class="step-title">${lvl.tier}: ${lvl.company.substring(0, 22)}...</span>
                </div>
            `;
        }).join("");
    }

    setBotSpeech(text) {
        const bubble = document.getElementById("botSpeechBubble");
        if (bubble) {
            bubble.innerHTML = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
        }
    }

    // ==========================================
    // LIFELINES
    // ==========================================
    use5050() {
        if (!this.lifelines.scan5050 || this.levelSolved) return;
        AudioEngine.playZap();
        this.lifelines.scan5050 = false;

        const btn = document.getElementById("life5050");
        if (btn) { btn.disabled = true; btn.classList.add("used"); }

        const rows = Array.from(document.querySelectorAll(".statement-row"));
        const innocentRows = rows.filter((r, idx) => !this.currentLevel.items[idx].isAnomaly);

        // Randomly hide 2 innocent rows
        const shuffledInnocents = this.shuffleArray(innocentRows);
        if (shuffledInnocents[0]) shuffledInnocents[0].style.opacity = "0.2";
        if (shuffledInnocents[1]) shuffledInnocents[1].style.opacity = "0.2";

        this.setBotSpeech("⚡ **AI 50:50 Scan:** Eliminated 2 innocent rows from your suspect list!");
    }

    useHint() {
        if (!this.lifelines.hint || this.levelSolved) return;
        AudioEngine.playClick();
        this.lifelines.hint = false;

        const btn = document.getElementById("lifeHint");
        if (btn) { btn.disabled = true; btn.classList.add("used"); }

        this.setBotSpeech(AuditBot.getClue());
    }

    useChangeCase() {
        if (!this.lifelines.changeCase || this.levelSolved) return;
        AudioEngine.playClick();
        this.lifelines.changeCase = false;

        const btn = document.getElementById("lifeChange");
        if (btn) { btn.disabled = true; btn.classList.add("used"); }

        // Find another unused case from the current tier's pool
        const currentTierKey = this.currentLevel.tierKey;
        const pool = this.questionBank[currentTierKey] || [];
        const currentId = this.currentLevel.id;
        const availableCases = pool.filter(c => c.id !== currentId && !this.activeLevels.some(al => al.id === c.id));

        if (availableCases.length > 0) {
            const replacement = this.shuffleArray(availableCases)[0];
            this.activeLevels[this.currentLevelIndex] = replacement;
            this.setBotSpeech("🔄 **Case Replaced!** A new forensic assignment has been dispatched to your desk.");
            this.loadLevel(this.currentLevelIndex);
        } else {
            // Re-shuffle the items of the current case as fallback
            this.currentLevel.items = this.shuffleArray(this.currentLevel.items);
            this.renderLevelUI();
            this.setBotSpeech("🔄 **Evidence Re-Shuffled!** Question bank exhausted for this tier; statement entries scrambled!");
        }
    }

    showTierPromoModal(title, msg) {
        const modal = document.getElementById("tierPromoModal");
        const tEl = document.getElementById("promoTitle");
        const mEl = document.getElementById("promoMessage");

        if (tEl) tEl.textContent = title;
        if (mEl) mEl.textContent = msg;
        if (modal) modal.style.display = "flex";
    }

    dismissPromoModal() {
        const modal = document.getElementById("tierPromoModal");
        if (modal) modal.style.display = "none";
        this.renderLevelUI();
        this.updateLadder();
    }

    showGameOverModal(reason) {
        document.getElementById("gameContainer").style.display = "none";
        const screen = document.getElementById("gameOverScreen");
        const reasonEl = document.getElementById("gameOverReason");
        const finalScoreEl = document.getElementById("gameOverScore");

        if (reasonEl) reasonEl.textContent = reason;
        if (finalScoreEl) finalScoreEl.textContent = `Score at dismissal: ${this.score} pts (Reached Case #${this.currentLevelIndex + 1})`;
        if (screen) screen.style.display = "flex";
    }

    showVictoryScreen() {
        AudioEngine.playLevelUp();
        document.getElementById("gameContainer").style.display = "none";
        const winScreen = document.getElementById("winScreen");
        const scoreEl = document.getElementById("victoryScore");

        if (scoreEl) scoreEl.textContent = `${this.score} Points`;
        if (winScreen) winScreen.style.display = "flex";
    }

    bindGlobalEvents() {
        // Start Screen Actions
        document.getElementById("btnStartCampaign")?.addEventListener("click", () => {
            AudioEngine.playClick();
            this.startCampaign();
        });

        document.getElementById("btnStartFoundation")?.addEventListener("click", () => {
            AudioEngine.playClick();
            this.startTierMode("foundation");
        });

        document.getElementById("btnStartInter")?.addEventListener("click", () => {
            AudioEngine.playClick();
            this.startTierMode("inter");
        });

        document.getElementById("btnStartFinal")?.addEventListener("click", () => {
            AudioEngine.playClick();
            this.startTierMode("final");
        });

        // Lifelines
        document.getElementById("life5050")?.addEventListener("click", () => this.use5050());
        document.getElementById("lifeHint")?.addEventListener("click", () => this.useHint());
        document.getElementById("lifeChange")?.addEventListener("click", () => this.useChangeCase());

        // Promo modal continue
        document.getElementById("btnContinueTier")?.addEventListener("click", () => this.dismissPromoModal());

        // Retry & Play Again buttons
        document.getElementById("btnRetryGame")?.addEventListener("click", () => {
            AudioEngine.playClick();
            this.startCampaign();
        });

        document.getElementById("btnPlayAgain")?.addEventListener("click", () => {
            AudioEngine.playClick();
            this.startCampaign();
        });

        // Sound Toggle
        document.getElementById("btnSoundToggle")?.addEventListener("click", () => {
            const enabled = AudioEngine.toggleMute();
            document.getElementById("btnSoundToggle").textContent = enabled ? "🔊 Sound On" : "🔇 Muted";
        });

        // Interactive AI Chat Query
        const botInput = document.getElementById("botQueryInput");
        const botSendBtn = document.getElementById("btnSendBotQuery");

        const handleBotChat = () => {
            const text = botInput.value.trim();
            if (!text) return;
            AudioEngine.playClick();
            botInput.value = "";
            const reply = AuditBot.answerQuery(text);
            this.setBotSpeech(reply);
        };

        botSendBtn?.addEventListener("click", handleBotChat);
        botInput?.addEventListener("keydown", (e) => {
            if (e.key === "Enter") handleBotChat();
        });
    }
}

// Launch on DOM ready
document.addEventListener("DOMContentLoaded", () => {
    window.game = new SpotAnomaliesGame();
    window.game.init();
});
