/**
 * AI Forensic Auditor Companion (AuditBot)
 * Provides witty commentary, hints, ICAI rule references, and dynamic interactive assistance.
 */

class AuditBotCompanion {
    constructor() {
        this.currentLevel = null;
        this.cluesUsedInLevel = 0;
    }

    setLevel(levelData) {
        this.currentLevel = levelData;
        this.cluesUsedInLevel = 0;
    }

    getGreeting() {
        if (!this.currentLevel) return "Let's crack this case wide open!";
        return this.currentLevel.aiGreeting;
    }

    getClue() {
        if (!this.currentLevel) return "Look for line items that violate double entry or standard matching!";
        this.cluesUsedInLevel++;
        return `💡 **AuditBot Clue:** ${this.currentLevel.clue}`;
    }

    getSuccessCommentary() {
        const compliments = [
            "BOOM! Objection sustained! That entry was as bogus as a ₹3 note!",
            "Textbook catch! The statutory auditors would be proud!",
            "Caught red-handed! You have the eagle eyes of an ICAI Rankholder!",
            "Fraud busted! That illegal entry didn't stand a chance against your scrutiny!"
        ];
        return compliments[Math.floor(Math.random() * compliments.length)];
    }

    getFailCommentary() {
        const roasts = [
            "Nope! That entry is 100% legit under accounting standards. Check the other rows!",
            "False alarm! That line item is totally innocent. Don't frame an innocent ledger!",
            "Careful! Raising frivolous audit queries wastes audit budget. Look closer!",
            "Not quite! That item is properly recorded. Re-read the clues!"
        ];
        return roasts[Math.floor(Math.random() * roasts.length)];
    }

    answerQuery(query) {
        if (!this.currentLevel) return "Select a level to start the audit investigation!";
        const q = query.toLowerCase().trim();
        const lvl = this.currentLevel;

        if (q.includes("clue") || q.includes("hint") || q.includes("help")) {
            return this.getClue();
        }

        if (q.includes("standard") || q.includes("rule") || q.includes("law")) {
            return `📜 **Relevant Standard:** ${lvl.standardTag}\n` +
                `Management is trying to manipulate the financial statements in violation of basic principles. Look for the row that contradicts this framework!`;
        }

        if (q.includes("anomaly") || q.includes("where") || q.includes("who")) {
            return `👀 Check the **${lvl.statementType}**. Look for amounts that look rounded, entries with strange explanations, or accounts that hide losses!`;
        }

        return `🔍 **AuditBot Analysis:** You're auditing **${lvl.company}** (${lvl.tier}). ${lvl.botRemark}`;
    }
}

const AuditBot = new AuditBotCompanion();
