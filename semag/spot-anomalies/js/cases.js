/**
 * Comprehensive Question Bank for Spot the Anomalies
 * 30 Authentic Forensic Cases across 3 Progressive Tiers:
 * - CA Foundation (Easy): 10 Cases
 * - CA Intermediate (Medium): 10 Cases
 * - CA Final (Highest Level): 10 Cases
 */

const QUESTION_BANK = {
    foundation: [
        {
            id: "f-01",
            tier: "CA Foundation",
            tierKey: "foundation",
            difficulty: "Easy (Trial Balance)",
            company: "Chai-Pani Refreshments Pvt. Ltd.",
            year: "FY 2024-25",
            statementType: "Trial Balance Extract",
            story: "The accountant was rushing home for the weekend. The Debit side was ₹50,000 short of the Credit side. Can you spot the outrageous adjustment he made to force the Trial Balance to tally?",
            aiGreeting: "Cadet Auditor! Check the balances carefully. In double-entry bookkeeping, Debits must equal Credits naturally without secret stash accounts!",
            clue: "Look closely at the account names. Is there an account where lazy accountants dump un-reconciled differences?",
            botRemark: "Wait a minute... since when does an unexplained plug figure belong on a clean Trial Balance?!",
            items: [
                { id: "row-1", label: "Cash & Bank Balance (Dr)", value: "₹ 1,20,000", isAnomaly: false },
                { id: "row-2", label: "Capital Account (Cr)", value: "₹ 5,00,000", isAnomaly: false },
                { id: "row-3", label: "Suspense Account (Dr Difference Plugged)", value: "₹ 50,000", isAnomaly: true },
                { id: "row-4", label: "Office Equipment & Furniture (Dr)", value: "₹ 2,30,000", isAnomaly: false },
                { id: "row-5", label: "Sales Revenue (Cr)", value: "₹ 4,50,000", isAnomaly: false },
                { id: "row-6", label: "Salaries & Tea Expenses (Dr)", value: "₹ 6,50,000", isAnomaly: false }
            ],
            explanation: "🎯 **Busted: Unresolved Suspense Account!** Under CA Foundation accounting principles, a Suspense Account is only a temporary ledger created when the Trial Balance does not balance. Forcing it into the final accounts without investigating the error violates foundational double-entry rules!",
            standardTag: "CA Foundation: Trial Balance & Rectification of Errors"
        },
        {
            id: "f-02",
            tier: "CA Foundation",
            tierKey: "foundation",
            difficulty: "Easy (Bank Reconciliation)",
            company: "Speedy Courier Services",
            year: "March 31, 2025",
            statementType: "Bank Reconciliation Statement (BRS)",
            story: "The cashier says the bank account has ₹4,50,000, but the HDFC Bank statement shows only ₹50,000! He added a mysterious item to make them match. Spot the blunder!",
            aiGreeting: "Inspector, compare the Cash Book against the Bank Passbook! Cheques deposited but not cleared are standard, but check the date on this one.",
            clue: "Check the date on the unpresented cheques! How long is a bank cheque valid in India before it becomes stale?",
            botRemark: "A cheque from 2 years ago?! In India, cheques become stale after 3 months! You cannot add that to BRS!",
            items: [
                { id: "row-1", label: "Balance as per Bank Passbook", value: "₹ 50,000", isAnomaly: false },
                { id: "row-2", label: "Add: Cheques issued to vendors on March 29 not yet presented", value: "₹ 60,000", isAnomaly: false },
                { id: "row-3", label: "Add: Customer Cheque dated Jan 2023 still shown as 'Deposit in Transit'", value: "₹ 3,40,000", isAnomaly: true },
                { id: "row-4", label: "Less: Bank Charges debited by bank not in cash book", value: "-₹ 2,000", isAnomaly: false },
                { id: "row-5", label: "Reported Balance as per Cash Book", value: "₹ 4,50,000", isAnomaly: false }
            ],
            explanation: "🎯 **Busted: Stale Cheque Window Dressing!** Cheques in India are valid for only 3 months. Carrying a 2-year-old stale cheque as a valid reconciling addition to artificially inflate the book balance is a severe error and window dressing!",
            standardTag: "CA Foundation: Bank Reconciliation Statement (BRS)"
        },
        {
            id: "f-03",
            tier: "CA Foundation",
            tierKey: "foundation",
            difficulty: "Easy (Capital vs Revenue)",
            company: "Gamerz Hub Internet Cafe",
            year: "FY 2024-25",
            statementType: "Trading & Profit & Loss Account",
            story: "The owner bought 10 high-end Gaming PCs for ₹6,00,000. But to show zero profit and pay no tax, he recorded them directly inside the Trading Account! Spot the foul play!",
            aiGreeting: "Auditor on deck! Remember the distinction between Capital Expenditure and Revenue Expenditure. Which account should long-term assets go to?",
            clue: "Purchases in Trading Account are only for goods meant for resale. Did they buy PCs to sell, or to use as fixed assets?",
            botRemark: "Sneaky! They charged the entire purchase of Gaming PCs directly as 'Goods Purchases' to crush their Net Profit!",
            items: [
                { id: "row-1", label: "Opening Stock of Snacks & Beverages", value: "₹ 25,000", isAnomaly: false },
                { id: "row-2", label: "Purchases: Included ₹6,00,000 of Gaming PCs for Cafe Use", value: "₹ 7,80,000", isAnomaly: true },
                { id: "row-3", label: "Electricity & High-Speed Internet Bill", value: "₹ 1,40,000", isAnomaly: false },
                { id: "row-4", label: "Revenue from Gaming Hours Billed", value: "₹ 8,20,000", isAnomaly: false },
                { id: "row-5", label: "Staff Salaries & Shop Rent", value: "₹ 1,80,000", isAnomaly: false }
            ],
            explanation: "🎯 **Busted: Capital Expenditure Treated as Revenue!** Buying computers for business use provides enduring economic benefit over multiple years and must be capitalized on the Balance Sheet. Recording it under 'Purchases' artificially depresses profit!",
            standardTag: "CA Foundation: Capital and Revenue Expenditures"
        },
        {
            id: "f-04",
            tier: "CA Foundation",
            tierKey: "foundation",
            difficulty: "Easy (Bad Debts vs Drawings)",
            company: "Royal Hardware & Sanitary Store",
            year: "FY 2024-25",
            statementType: "Debtors & Cash Ledger Summary",
            story: "Customer Sharmaji went bankrupt and fled to the Himalayas owing ₹1,50,000. Instead of writing off Bad Debts, the accountant secretly transferred the loss to the proprietor's drawings!",
            aiGreeting: "Stay sharp! When a debtor becomes insolvent, the entry is Bad Debts Dr to Debtor Cr. What did they do here?",
            clue: "Check the Drawings Account. Did the owner take cash, or did the accountant secretly shift Sharmaji's loss to drawings?",
            botRemark: "Hold on! The accountant transferred Sharmaji's default into 'Proprietor Personal Drawings' so the business P&L looks profitable!",
            items: [
                { id: "row-1", label: "Total Credit Sales Billed", value: "₹ 18,00,000", isAnomaly: false },
                { id: "row-2", label: "Cash Collected from Customers", value: "₹ 14,50,000", isAnomaly: false },
                { id: "row-3", label: "Proprietor Drawings: Debited Sharmaji's uncollected ₹1,50,000", value: "₹ 2,10,000", isAnomaly: true },
                { id: "row-4", label: "Provision for Doubtful Debts (5%)", value: "₹ 10,000", isAnomaly: false },
                { id: "row-5", label: "Trade Receivables Balance", value: "₹ 2,00,000", isAnomaly: false }
            ],
            explanation: "🎯 **Busted: Hiding Bad Debts in Personal Drawings!** Insolvent debtors cannot be arbitrarily debited to the proprietor's drawings account without consent to conceal the loss from the P&L account!",
            standardTag: "CA Foundation: Accounting for Bad Debts & Provisions"
        },
        {
            id: "f-05",
            tier: "CA Foundation",
            tierKey: "foundation",
            difficulty: "Easy (Machinery Installation)",
            company: "Shree Ganesh Textiles Mill",
            year: "FY 2024-25",
            statementType: "Manufacturing & Wages Account",
            story: "The mill installed a new automatic weaving machine. The engineer's specialized foundation and installation fees of ₹75,000 were added into ordinary factory labor wages! Spot the error!",
            aiGreeting: "Any expense incurred to bring an asset to its working condition for its intended use must be capitalized to that asset!",
            clue: "Where should installation and foundation costs of a newly acquired machine go? P&L Wages or Machinery Account?",
            botRemark: "Installation wages must be debited to Machinery Account, NOT ordinary Factory Wages!",
            items: [
                { id: "row-1", label: "Factory Power & Fuel Charges", value: "₹ 3,20,000", isAnomaly: false },
                { id: "row-2", label: "Raw Cotton Consumed in Spinning", value: "₹ 14,50,000", isAnomaly: false },
                { id: "row-3", label: "Direct Factory Wages (Includes ₹75,000 for installing new loom)", value: "₹ 4,85,000", isAnomaly: true },
                { id: "row-4", label: "Consumable Stores & Spares", value: "₹ 80,000", isAnomaly: false },
                { id: "row-5", label: "Factory Supervisor Salaries", value: "₹ 2,10,000", isAnomaly: false }
            ],
            explanation: "🎯 **Busted: Capital Installation Cost Debited to Revenue Wages!** Direct costs incurred to bring an asset to working condition (such as installation, site preparation, and foundation) must be capitalized to the Machinery Account, not charged to P&L Wages!",
            standardTag: "CA Foundation: Capitalization of Fixed Asset Costs"
        },
        {
            id: "f-06",
            tier: "CA Foundation",
            tierKey: "foundation",
            difficulty: "Easy (Goods Withdrawn for Personal Use)",
            company: "Kalyan Jewellers & Gift Emporium",
            year: "FY 2024-25",
            statementType: "Sales Register Summary",
            story: "The owner took a diamond ring costing ₹80,000 as a birthday gift for his spouse. The accountant recorded it as a regular credit sale at ₹1,20,000 to inflate turnover! Spot the manipulation!",
            aiGreeting: "When goods are withdrawn by the proprietor for personal use, what is the entry? Drawings Dr to Purchases Cr at COST!",
            clue: "Can you record personal withdrawal of goods as a customer sale with profit margin? Check the sales register.",
            botRemark: "Proprietor taking goods for home is Drawings at COST, not a ₹1,20,000 Sale with imaginary profit!",
            items: [
                { id: "row-1", label: "Counter Cash Sales (with GST receipt)", value: "₹ 24,00,000", isAnomaly: false },
                { id: "row-2", label: "Credit Sales to Regular Corporate Clients", value: "₹ 18,50,000", isAnomaly: false },
                { id: "row-3", label: "Credit Sale to 'Proprietor Home' billed at Selling Price ₹1,20,000", value: "₹ 1,20,000", isAnomaly: true },
                { id: "row-4", label: "Sales Returns & Replacements", value: "-₹ 45,000", isAnomaly: false },
                { id: "row-5", label: "Card & UPI Settlement Inflows", value: "₹ 19,80,000", isAnomaly: false }
            ],
            explanation: "🎯 **Busted: Drawings Recorded as Revenue Sales!** When a proprietor withdraws goods for personal use, the transaction must be debited to Drawings A/c and credited to Purchases A/c at cost. Treating it as a sale at selling price fabricates artificial revenue and unrealized profit!",
            standardTag: "CA Foundation: Rectification of Goods Withdrawn for Personal Use"
        },
        {
            id: "f-07",
            tier: "CA Foundation",
            tierKey: "foundation",
            difficulty: "Easy (Depreciation on Land)",
            company: "Evergreen Real Estate & Plantations",
            year: "FY 2024-25",
            statementType: "Fixed Assets & Depreciation Schedule",
            story: "To reduce taxable income, the firm charged 10% depreciation on Freehold Agricultural Land! Spot the fundamental accounting blunder!",
            aiGreeting: "Does freehold land ever wear out or get depreciated under accounting principles?",
            clue: "Look at the asset categories in the depreciation schedule. Which asset has an infinite useful life?",
            botRemark: "Freehold Land has an unlimited useful life and is NEVER depreciated! Charging depreciation on land is a total blunder!",
            items: [
                { id: "row-1", label: "Office Building: Cost ₹50L (Depreciated at 5%)", value: "₹ 2,50,000", isAnomaly: false },
                { id: "row-2", label: "Delivery Vans: Cost ₹20L (Depreciated at 15%)", value: "₹ 3,00,000", isAnomaly: false },
                { id: "row-3", label: "Freehold Farmland: Cost ₹1.5 Cr (Depreciated at 10%)", value: "₹ 15,00,000", isAnomaly: true },
                { id: "row-4", label: "Office Computers: Cost ₹8L (Depreciated at 40%)", value: "₹ 3,20,000", isAnomaly: false },
                { id: "row-5", label: "Office Air Conditioners (Depreciated at 10%)", value: "₹ 60,000", isAnomaly: false }
            ],
            explanation: "🎯 **Busted: Depreciation Charged on Freehold Land!** Under foundational accounting principles, Freehold Land has an unlimited economic life and does not lose value through wear and tear. Therefore, land is never subject to depreciation!",
            standardTag: "CA Foundation: Concept of Depreciation on Fixed Assets"
        },
        {
            id: "f-08",
            tier: "CA Foundation",
            tierKey: "foundation",
            difficulty: "Easy (Advance Received from Customer)",
            company: "Modern Modular Kitchens",
            year: "FY 2024-25",
            statementType: "Income Statement & Receipts",
            story: "A client paid ₹5,00,000 as advance booking for kitchen work to be started next year in October 2025. The accountant immediately booked the full ₹5,00,000 as current year sales revenue! Spot the violation!",
            aiGreeting: "Cash received does not equal revenue earned! What principle dictates recognizing revenue only when performance is complete?",
            clue: "An advance received for work not yet begun is an unearned liability, not earned sales revenue!",
            botRemark: "You cannot book sales when you haven't even laid a single brick! That's an Advance from Customer (Liability)!",
            items: [
                { id: "row-1", label: "Kitchen Installations Completed & Handed Over", value: "₹ 32,00,000", isAnomaly: false },
                { id: "row-2", label: "Repair & Annual Maintenance Contracts Rendered", value: "₹ 4,50,000", isAnomaly: false },
                { id: "row-3", label: "Advance Booking Deposit for FY 2025-26 project booked as Current Revenue", value: "₹ 5,00,000", isAnomaly: true },
                { id: "row-4", label: "Sale of Scrap Wood & Trim Materials", value: "₹ 35,000", isAnomaly: false },
                { id: "row-5", label: "Architect Design Consultation Fees Earned", value: "₹ 2,10,000", isAnomaly: false }
            ],
            explanation: "🎯 **Busted: Advance from Customer Treated as Revenue!** Under the Revenue Recognition and Accrual concepts, advance receipts for work to be performed in subsequent periods are unearned revenues and must be classified as a Current Liability until goods/services are delivered!",
            standardTag: "CA Foundation: Accrual & Realisation Principles"
        },
        {
            id: "f-09",
            tier: "CA Foundation",
            tierKey: "foundation",
            difficulty: "Easy (Petty Cash Manipulation)",
            company: "City Law Associates",
            year: "FY 2024-25",
            statementType: "Petty Cash Book Summary",
            story: "The law firm operates 100% paperless with digital filings. Yet the petty cash book shows ₹45,000 spent on 'Postage Stamps and Telegrams' with zero postal receipts! Spot the cashier embezzlement!",
            aiGreeting: "Inspect petty cash vouchers! A paperless digital firm buying mountains of postage stamps?",
            clue: "Look for expenses that contradict the basic nature of the business operations.",
            botRemark: "A modern paperless law firm spending ₹45,000 on Telegrams and physical stamps?! The cashier pocketed the cash!",
            items: [
                { id: "row-1", label: "Office Tea & Client Coffee Vouchers", value: "₹ 12,400", isAnomaly: false },
                { id: "row-2", label: "Local Auto-rickshaw & Metro Travel for Court Clerks", value: "₹ 18,200", isAnomaly: false },
                { id: "row-3", label: "Postage Stamps & Telegrams (Digital Law Firm, No Postal Receipts)", value: "₹ 45,000", isAnomaly: true },
                { id: "row-4", label: "Photocopying Paper & Highlighters", value: "₹ 8,900", isAnomaly: false },
                { id: "row-5", label: "Office Cleaning Supplies & Dusters", value: "₹ 4,300", isAnomaly: false }
            ],
            explanation: "🎯 **Busted: Fictitious Petty Cash Expenses!** In a paperless legal firm with digital filings, claiming ₹45,000 for physical postage stamps without supporting postal receipts is a classic petty cash embezzlement scam!",
            standardTag: "CA Foundation: Petty Cash Imprest System & Vouching"
        },
        {
            id: "f-10",
            tier: "CA Foundation",
            tierKey: "foundation",
            difficulty: "Easy (Closing Stock Under-valuation)",
            company: "Shakti Cement Agency",
            year: "FY 2024-25",
            statementType: "Trading Account Stock Sheet",
            story: "The trader wanted to depress gross profit to evade income tax. He deliberately omitted 1,000 bags of cement worth ₹3,50,000 from the Closing Stock sheet! Spot the missing stock anomaly!",
            aiGreeting: "Closing stock directly affects gross profit! If you artificially decrease closing stock, what happens to gross profit?",
            clue: "Check the note on physical stock count vs reported closing stock in the trading account.",
            botRemark: "Omitting ₹3.5 Lakhs of physical stock directly suppresses Gross Profit by ₹3.5 Lakhs! Intentional tax fraud!",
            items: [
                { id: "row-1", label: "Opening Stock of Cement Bags (at cost)", value: "₹ 4,00,000", isAnomaly: false },
                { id: "row-2", label: "Total Cement Purchases during year", value: "₹ 28,00,000", isAnomaly: false },
                { id: "row-3", label: "Closing Stock: 1,000 Physical Bags worth ₹3,50,000 omitted from inventory sheet", value: "₹ 2,10,000", isAnomaly: true },
                { id: "row-4", label: "Freight & Inward Cartage Paid", value: "₹ 1,20,000", isAnomaly: false },
                { id: "row-5", label: "Total Cement Sales Billed", value: "₹ 34,50,000", isAnomaly: false }
            ],
            explanation: "🎯 **Busted: Intentional Suppression of Closing Stock!** Deliberately omitting 1,000 bags of physical inventory from the closing stock sheet artificially inflates Cost of Goods Sold and suppresses Gross Profit, violating the full disclosure principle!",
            standardTag: "CA Foundation: Inventory Valuation & Matching Concept"
        }
    ],

    inter: [
        {
            id: "i-01",
            tier: "CA Intermediate",
            tierKey: "inter",
            difficulty: "Medium (AS 2 / Inventory)",
            company: "Zenith Electronics & Mobile Spares Ltd.",
            year: "FY 2024-25",
            statementType: "Balance Sheet: Current Assets (Inventory Note)",
            story: "The company holds 5,000 units of obsolete 3G mobile chips. The global market value crashed to scrap levels, but management kept it on the balance sheet at original cost to avoid reporting a loss. Spot the AS 2 violation!",
            aiGreeting: "Welcome to CA Inter! AS 2 says inventories must be valued at the LOWER of Cost or Net Realizable Value (NRV). Let's see if they obeyed!",
            clue: "Check the valuation basis of the Obsolete 3G Chips inventory. Is historical cost higher than the actual market selling price?",
            botRemark: "NRV is only ₹2 Lakhs, but they are holding it at ₹15 Lakhs cost! That is a straight ₹13 Lakh overstatement!",
            items: [
                { id: "row-1", label: "Raw Materials: Copper Wires (Valued at Cost < Replacement Value)", value: "₹ 8,50,000", isAnomaly: false },
                { id: "row-2", label: "Finished Goods: 5G Handsets (Valued at Lower of Cost or NRV)", value: "₹ 34,00,000", isAnomaly: false },
                { id: "row-3", label: "Obsolete 3G Chipsets (Carried at Historical Cost ₹15L; Current NRV ₹2L)", value: "₹ 15,00,000", isAnomaly: true },
                { id: "row-4", label: "Work-in-Progress (Valued at Stage-wise Factory Cost)", value: "₹ 6,20,000", isAnomaly: false },
                { id: "row-5", label: "Packing Materials & Stores", value: "₹ 1,80,000", isAnomaly: false }
            ],
            explanation: "🎯 **Busted: Violation of AS 2 (Valuation of Inventories)!** Inventories must strictly be valued at the LOWER of historical cost and Net Realizable Value (NRV). Carrying obsolete 3G inventory at ₹15 Lakhs when its NRV is only ₹2 Lakhs overstates current assets and profits by ₹13 Lakhs!",
            standardTag: "CA Intermediate: AS 2 Valuation of Inventories"
        },
        {
            id: "i-02",
            tier: "CA Intermediate",
            tierKey: "inter",
            difficulty: "Medium (AS 10 / PPE Capitalization)",
            company: "Bumper Auto Forge Ltd.",
            year: "FY 2024-25",
            statementType: "Property, Plant & Equipment (PPE) Ledger",
            story: "The company spent ₹12,00,000 on annual factory whitewashing, filter cleaning, and routine lubricants. Instead of charging it to Profit & Loss, they capitalized it into Machine No. 4! Spot the anomaly!",
            aiGreeting: "AS 10 (Property, Plant and Equipment) has strict rules! Routine maintenance contracts and oil replacements cannot increase future economic capacity.",
            clue: "Which item in the PPE additions schedule is merely routine annual maintenance rather than a capacity expansion?",
            botRemark: "Annual repainting and lubricating oil does NOT increase machine speed or life! It must be debited to P&L Repairs!",
            items: [
                { id: "row-1", label: "Purchase of German CNC Lathe (Invoice + Import Duty)", value: "₹ 45,00,000", isAnomaly: false },
                { id: "row-2", label: "Installation & Foundation Costs for CNC Lathe", value: "₹ 3,50,000", isAnomaly: false },
                { id: "row-3", label: "Annual Lubricant Replacement & Factory Whitewash added to PPE", value: "₹ 12,00,000", isAnomaly: true },
                { id: "row-4", label: "Trial Run & Test Production Expense (Net of scrap sale)", value: "₹ 1,80,000", isAnomaly: false },
                { id: "row-5", label: "Total Gross Block Additions Reported", value: "₹ 62,30,000", isAnomaly: false }
            ],
            explanation: "🎯 **Busted: Violation of AS 10 (Property, Plant & Equipment)!** Paragraph 12 of AS 10 explicitly prohibits capitalizing the costs of day-to-day servicing (repairs and maintenance). Routine lubricant changes and factory whitewashing must be recognized in the Statement of Profit and Loss as incurred!",
            standardTag: "CA Intermediate: AS 10 Property, Plant and Equipment"
        },
        {
            id: "i-03",
            tier: "CA Intermediate",
            tierKey: "inter",
            difficulty: "Medium (Schedule III / Debt Classification)",
            company: "Apex Healthcare & Pharma Ltd.",
            year: "FY 2024-25",
            statementType: "Schedule III Balance Sheet: Non-Current vs Current",
            story: "The company has a bank term loan installment of ₹80,00,000 due for payment next month on May 15, 2025. To avoid showing poor working capital, the CFO hid it under Long-Term Borrowings. Spot the Schedule III violation!",
            aiGreeting: "Schedule III of the Companies Act 2013 has clear rules for Operating Cycles and Current vs Non-Current classification. Keep your eyes peeled!",
            clue: "When a long-term loan has an installment payable within the next 12 months, where must that upcoming portion be presented?",
            botRemark: "A loan payable in 45 days is a CURRENT LIABILITY (Current Maturities of Long Term Debt), not a Long-Term Borrowing!",
            items: [
                { id: "row-1", label: "Share Capital: 10,00,000 Equity Shares of ₹10 each", value: "₹ 1,00,00,000", isAnomaly: false },
                { id: "row-2", label: "Reserves & Surplus (General Reserve)", value: "₹ 75,00,000", isAnomaly: false },
                { id: "row-3", label: "Long-Term Borrowings (Includes ₹80L installment due May 15, 2025)", value: "₹ 2,40,00,000", isAnomaly: true },
                { id: "row-4", label: "Trade Payables (MSME Vendors under 45 days)", value: "₹ 35,00,000", isAnomaly: false },
                { id: "row-5", label: "Short-Term Provisions (Tax Provision)", value: "₹ 14,00,000", isAnomaly: false }
            ],
            explanation: "🎯 **Busted: Schedule III Misclassification of Current Maturities!** Under Division I / II of Schedule III to the Companies Act 2013, the portion of long-term debt due for settlement within 12 months from the reporting date must be classified as a Current Liability ('Current maturities of long-term borrowings')!",
            standardTag: "CA Intermediate: Companies Act 2013 Schedule III Presentation"
        },
        {
            id: "i-04",
            tier: "CA Intermediate",
            tierKey: "inter",
            difficulty: "Medium (AS 9 / Revenue Cut-Off)",
            company: "Prime Retail Distribution Ltd.",
            year: "FY 2024-25",
            statementType: "Sales Ledger & Delivery Note Reconciliation",
            story: "To hit the CEO's quarterly bonus target before March 31, the sales team billed ₹45,00,000 on March 31 for goods that were not even manufactured or dispatched until April 12! Spot the fraudulent cut-off entry!",
            aiGreeting: "Revenue recognition time! Under AS 9, revenue is recognized only when significant risks and rewards of ownership are transferred to the buyer.",
            clue: "Look at the dispatch date and customer delivery acknowledgment. Can you recognize revenue when the trucks haven't even loaded?",
            botRemark: "Dispatched on April 12, but billed on March 31 with zero delivery?! That's textbook Channel Stuffing / Cut-off fraud!",
            items: [
                { id: "row-1", label: "Sale to BigMart: Dispatched March 24, Proof of Delivery on March 27", value: "₹ 22,00,000", isAnomaly: false },
                { id: "row-2", label: "Sale to Metro Store: Dispatched March 28, Accepted March 30", value: "₹ 18,50,000", isAnomaly: false },
                { id: "row-3", label: "Invoice #982 Billed March 31: Goods in factory, dispatched April 12", value: "₹ 45,00,000", isAnomaly: true },
                { id: "row-4", label: "Export Sale: FOB Port Mumbai, Bill of Lading dated March 26", value: "₹ 31,00,000", isAnomaly: false },
                { id: "row-5", label: "Cash Sales over retail counter through March 31", value: "₹ 8,40,000", isAnomaly: false }
            ],
            explanation: "🎯 **Busted: Premature Revenue Cut-off (AS 9)!** Revenue from sale of goods cannot be recognized until significant risks and rewards of ownership have transferred to the buyer. Biling sales on March 31 for items physically held in the seller's factory and dispatched weeks later violates revenue cut-off rules!",
            standardTag: "CA Intermediate: AS 9 Revenue Recognition & Auditing Cut-Off"
        },
        {
            id: "i-05",
            tier: "CA Intermediate",
            tierKey: "inter",
            difficulty: "Medium (AS 16 / Borrowing Costs)",
            company: "Shine Solar Power Ltd.",
            year: "FY 2024-25",
            statementType: "Borrowing Costs & Asset Schedule",
            story: "The company took a loan at 12% to buy off-the-shelf commercial laptops and delivery scooters (which were ready for use on day one). They capitalized ₹6,00,000 of interest into the laptop costs! Spot the AS 16 violation!",
            aiGreeting: "Under AS 16, interest can ONLY be capitalized on Qualifying Assets—assets that take a substantial period of time to get ready for use!",
            clue: "Do off-the-shelf laptops take substantial time to get ready for use? Look at the interest capitalized.",
            botRemark: "Laptops take 5 minutes to unbox! They are NOT qualifying assets under AS 16. Interest must be charged to P&L Finance Cost!",
            items: [
                { id: "row-1", label: "Interest capitalized on Solar Plant Construction (Qualifying Asset - 18 months)", value: "₹ 42,00,000", isAnomaly: false },
                { id: "row-2", label: "Interest on Working Capital overdraft debited to P&L Finance Costs", value: "₹ 18,50,000", isAnomaly: false },
                { id: "row-3", label: "Interest of ₹6,00,000 capitalized into Ready-to-use Laptops & Scooters", value: "₹ 6,00,000", isAnomaly: true },
                { id: "row-4", label: "Bank Processing fees on term loans amortized over tenure", value: "₹ 2,40,000", isAnomaly: false },
                { id: "row-5", label: "Interest earned on temporary deployment of project funds deducted from capex", value: "-₹ 5,10,000", isAnomaly: false }
            ],
            explanation: "🎯 **Busted: AS 16 Non-Qualifying Asset Capitalization!** AS 16 permits capitalization of borrowing costs only if the asset necessarily takes a substantial period of time to get ready for its intended use. Readymade laptops and scooters are not qualifying assets!",
            standardTag: "CA Intermediate: AS 16 Borrowing Costs"
        },
        {
            id: "i-06",
            tier: "CA Intermediate",
            tierKey: "inter",
            difficulty: "Medium (GST Input Tax Credit / Blocked Credit)",
            company: "Falcon Agrochem Ltd.",
            year: "FY 2024-25",
            statementType: "GST Electronic Credit Ledger Reconciliation",
            story: "The Managing Director purchased a luxury Mercedes-Benz for his personal weekend trips. The accountant claimed ₹18,00,000 GST Input Tax Credit (ITC) under 'Plant Equipment'! Spot the Section 17(5) blocked credit violation!",
            aiGreeting: "Section 17(5) of the CGST Act lists blocked credits! Motor vehicles for passenger transportation (seating <= 13) are strictly blocked.",
            clue: "Can a chemical manufacturing company claim GST input tax credit on a personal luxury motor car?",
            botRemark: "Section 17(5)(a) BLOCKS GST credit on passenger cars! Claiming ₹18 Lakhs ITC is an illegal tax fraud!",
            items: [
                { id: "row-1", label: "ITC on Industrial Boiler & Pipes (Valid Tax Invoice & GSTR-2B match)", value: "₹ 32,00,000", isAnomaly: false },
                { id: "row-2", label: "ITC on Chemical Raw Material Imports (Bill of Entry cleared)", value: "₹ 64,00,000", isAnomaly: false },
                { id: "row-3", label: "ITC of ₹18,00,000 claimed on MD's personal Mercedes Sedan (Blocked Credit)", value: "₹ 18,00,000", isAnomaly: true },
                { id: "row-4", label: "ITC on Factory Electricity sub-station transformers", value: "₹ 8,50,000", isAnomaly: false },
                { id: "row-5", label: "Reversal of ITC on normal process loss scrap (Rule 42)", value: "-₹ 1,20,000", isAnomaly: false }
            ],
            explanation: "🎯 **Busted: Claiming Blocked Credit under Section 17(5) CGST Act!** Input Tax Credit on motor vehicles for transportation of persons having seating capacity of 13 or less is strictly blocked under Section 17(5)(a) of the CGST Act 2017 for non-vehicle transport businesses!",
            standardTag: "CA Intermediate: Taxation - Blocked Credit under Section 17(5)"
        },
        {
            id: "i-07",
            tier: "CA Intermediate",
            tierKey: "inter",
            difficulty: "Medium (AS 22 / Deferred Tax Asset)",
            company: "Nova Star Loss-Making App Ltd.",
            year: "FY 2024-25",
            statementType: "Tax Expense & Deferred Tax Note",
            story: "The startup has suffered continuous heavy operating cash losses for 5 straight years with zero pipeline revenue. Yet they recognized a massive Deferred Tax Asset of ₹1.2 Crores on unabsorbed business losses! Spot the AS 22 breach!",
            aiGreeting: "Under AS 22, when an entity has unabsorbed depreciation or carry-forward losses, what level of certainty is required to recognize a DTA?",
            clue: "AS 22 requires 'Virtual Certainty supported by convincing evidence'—not mere hope! A dying company cannot create artificial assets.",
            botRemark: "Continuous loss-making company with no contracts recognizing DTA on unabsorbed losses? Violates AS 22 Virtual Certainty rule!",
            items: [
                { id: "row-1", label: "Operating Loss Before Tax (Negative Earnings)", value: "-₹ 3,80,00,000", isAnomaly: false },
                { id: "row-2", label: "Depreciation as per Companies Act", value: "₹ 45,00,000", isAnomaly: false },
                { id: "row-3", label: "Deferred Tax Asset of ₹1.2 Cr recognized on unabsorbed losses without virtual certainty", value: "₹ 1,20,00,000", isAnomaly: true },
                { id: "row-4", label: "Disallowed Penalties under Income Tax Act", value: "₹ 12,00,000", isAnomaly: false },
                { id: "row-5", label: "Net Loss After Tax reported in financials", value: "-₹ 2,60,00,000", isAnomaly: false }
            ],
            explanation: "🎯 **Busted: AS 22 Breach of Virtual Certainty!** Where an enterprise has unabsorbed depreciation or carry-forward tax losses, Deferred Tax Assets should only be recognized to the extent there is virtual certainty supported by convincing evidence that sufficient future taxable income will be available. Fabricating DTA without virtual certainty inflates equity!",
            standardTag: "CA Intermediate: AS 22 Accounting for Taxes on Income"
        },
        {
            id: "i-08",
            tier: "CA Intermediate",
            tierKey: "inter",
            difficulty: "Medium (AS 4 / Contingencies & Post Balance Sheet)",
            company: "Coastal Marine Shipping Ltd.",
            year: "FY 2024-25",
            statementType: "Notes to Accounts: Subsequent Events Note",
            story: "On April 10, 2025 (before board approval), a major container ship sank without insurance, causing a ₹15 Crore loss that threatens the company's Going Concern. The CFO hid the event from the annual report! Spot the omission!",
            aiGreeting: "Events occurring after the balance sheet date! Under AS 4, if a subsequent event affects the Going Concern assumption, how must it be treated?",
            clue: "An event destroying the going concern status must be reflected in the financial statements, not kept secret!",
            botRemark: "A ship sinking on April 10 that destroys the company's going concern status CANNOT be omitted from the annual report!",
            items: [
                { id: "row-1", label: "Note 14: Dividend recommended by Board on May 2 (Non-adjusting event)", value: "₹ 80,00,000", isAnomaly: false },
                { id: "row-2", label: "Note 15: Debtor declared insolvent on April 4 for invoice dated March 15 (Adjusting event)", value: "₹ 12,00,000", isAnomaly: false },
                { id: "row-3", label: "Note 16: Complete omission of Uninsured Ship sinking on April 10 threatening Going Concern", value: "₹ 0.00", isAnomaly: true },
                { id: "row-4", label: "Note 17: Normal foreign currency rate fluctuations post March 31", value: "₹ 4,50,000", isAnomaly: false },
                { id: "row-5", label: "Note 18: Routine enterprise agreement signed in April", value: "₹ 50,00,000", isAnomaly: false }
            ],
            explanation: "🎯 **Busted: Violation of AS 4 (Going Concern Impact of Subsequent Events)!** Under AS 4, if events occurring after the balance sheet date indicate that the Going Concern assumption is no longer appropriate, the financial statements must be prepared on a liquidation basis or fully adjusted/disclosed. Total omission conceals insolvency!",
            standardTag: "CA Intermediate: AS 4 Contingencies and Subsequent Events"
        },
        {
            id: "i-09",
            tier: "CA Intermediate",
            tierKey: "inter",
            difficulty: "Medium (AS 11 / ForeX Capitalization)",
            company: "Orbit Global Importers Ltd.",
            year: "FY 2024-25",
            statementType: "Foreign Exchange Fluctuation Schedule",
            story: "The company imported trade raw materials on 90-day credit. The US Dollar spiked, causing a ₹25,00,000 ForeX loss on trade payables. Instead of charging P&L, they capitalized it into their Office Building! Spot the AS 11 blunder!",
            aiGreeting: "ForeX fluctuations on working capital trade payables! Does AS 11 allow adding raw material currency loss into an office building?",
            clue: "Exchange differences on current trade liabilities must be recognized in the P&L in the period they arise!",
            botRemark: "Capitalizing currency exchange losses from raw material purchases into an office building? That is a wild AS 11 violation!",
            items: [
                { id: "row-1", label: "ForeX Gain on Export Receivables realized during year (Credited to P&L)", value: "₹ 14,00,000", isAnomaly: false },
                { id: "row-2", label: "Exchange difference on long-term capital liability under Paragraph 46A", value: "₹ 8,00,000", isAnomaly: false },
                { id: "row-3", label: "₹25 Lakhs ForeX Loss on Raw Material Payables capitalized into Office Building Block", value: "₹ 25,00,000", isAnomaly: true },
                { id: "row-4", label: "Bank Charges on Foreign Letters of Credit charged to P&L", value: "₹ 2,80,000", isAnomaly: false },
                { id: "row-5", label: "Closing Foreign Currency Bank Account restated at closing rate", value: "₹ 1,20,000", isAnomaly: false }
            ],
            explanation: "🎯 **Busted: AS 11 Violation of Exchange Difference Recognition!** Exchange differences arising on the settlement or reporting of monetary items relating to short-term trading operations (such as trade payables for raw materials) must be recognized as income or expense in the Statement of Profit and Loss, and cannot be capitalized to fixed assets!",
            standardTag: "CA Intermediate: AS 11 Effects of Changes in Foreign Exchange Rates"
        },
        {
            id: "i-10",
            tier: "CA Intermediate",
            tierKey: "inter",
            difficulty: "Medium (CARO 2020 / Statutory Dues)",
            company: "Hindustan Heavy Castings Ltd.",
            year: "FY 2024-25",
            statementType: "Statutory Dues & CARO Compliance Note",
            story: "The company deducted ₹42,00,000 of Provident Fund (PF) and ESI from workers' salaries 8 months ago, but never deposited it with the government. The note falsely claims 'All statutory dues paid without delay'! Spot the CARO clause vii falsehood!",
            aiGreeting: "Under CARO 2020 Clause (vii), statutory auditors must report any statutory dues outstanding for more than 6 months from the date they became payable!",
            clue: "Look at the employee PF deductions pending over 6 months. Can management claim clean compliance?",
            botRemark: "Withholding workers' PF for 8 months and claiming 'zero defaults' under CARO Clause (vii) is a criminal falsehood!",
            items: [
                { id: "row-1", label: "Goods and Services Tax (GST) paid regularly by 20th of succeeding month", value: "₹ 88,00,000", isAnomaly: false },
                { id: "row-2", label: "Income Tax TDS deducted and deposited within due dates", value: "₹ 34,00,000", isAnomaly: false },
                { id: "row-3", label: "Note falsely certifying 'Zero statutory arrears' while ₹42L PF is overdue > 6 months", value: "₹ 42,00,000", isAnomaly: true },
                { id: "row-4", label: "Advance Corporate Income Tax deposited in quarterly tranches", value: "₹ 55,00,000", isAnomaly: false },
                { id: "row-5", label: "Municipal Property Tax paid under protest with appeal pending", value: "₹ 6,50,000", isAnomaly: false }
            ],
            explanation: "🎯 **Busted: CARO 2020 Clause (vii) Statutory Dues Concealment!** CARO 2020 Clause (vii)(a) requires auditors to explicitly report undisputed statutory dues (including Provident Fund, Employees' State Insurance, and GST) outstanding for more than six months from the date they became payable. Concealing overdue workers' PF is a reportable violation!",
            standardTag: "CA Intermediate: CARO 2020 Clause (vii) Statutory Dues"
        }
    ],

    final: [
        {
            id: "fn-01",
            tier: "CA Final",
            tierKey: "final",
            difficulty: "Master Level (Ind AS 115 / Bill-and-Hold)",
            company: "Titan Cloud & Enterprise Software Ltd.",
            year: "FY 2025-26",
            statementType: "Revenue from Contracts with Customers (Ind AS 115)",
            story: "Titan Cloud recognized ₹120 Crores on March 30 under a 'Bill-and-Hold' agreement with a Dubai distributor. But the software licenses haven't been provisioned, the customer has an unconditional right of return, and payment is deferred for 360 days without interest. Spot the Ind AS 115 breach!",
            aiGreeting: "Welcome to CA Final, Master Auditor! Ind AS 115 has a rigorous 5-Step Model. Pay keen attention to control transfer, significant financing components, and performance obligations.",
            clue: "Check Note 1 on the Multi-Year Enterprise License. Does it satisfy all 4 criteria for Bill-and-Hold recognition under Ind AS 115?",
            botRemark: "Under Ind AS 115 App B, Bill-and-Hold requires customer request, separate identification, readiness for delivery, and no vendor ability to redirect. None of these were met!",
            items: [
                { id: "row-1", label: "Annual SaaS Cloud Subscriptions (Recognized Over Time as consumed)", value: "₹ 350.00 Cr", isAnomaly: false },
                { id: "row-2", label: "Professional Implementation Services (Recognized on Milestone Completion)", value: "₹ 85.00 Cr", isAnomaly: false },
                { id: "row-3", label: "Unbilled License: ₹120 Cr recognized March 30 with 360-day right of return", value: "₹ 120.00 Cr", isAnomaly: true },
                { id: "row-4", label: "Hardware Infrastructure Server Supply (Recognized upon Port Delivery)", value: "₹ 140.00 Cr", isAnomaly: false },
                { id: "row-5", label: "Total Operational Revenue Reported", value: "₹ 695.00 Cr", isAnomaly: false }
            ],
            explanation: "🎯 **Busted: Ind AS 115 Step 5 Violation!** Control of the license was not transferred. The customer holds an unconditional right of return, payment is deferred for nearly a year (indicating an unseparated financing component), and acceptance criteria were unfulfilled. Under Ind AS 115, revenue cannot be recognized until performance obligations are satisfied!",
            standardTag: "CA Final: Ind AS 115 Revenue from Contracts with Customers"
        },
        {
            id: "fn-02",
            tier: "CA Final",
            tierKey: "final",
            difficulty: "Master Level (CARO 2020 / Round-Tripping)",
            company: "Kestrel Infrastructure & Highways Ltd.",
            year: "FY 2025-26",
            statementType: "Cash Flow & Bank Borrowings Audit Dossier",
            story: "The company raised ₹250 Crores in term loans sanctioned specifically for constructing Highway NH-44. On the exact same day, ₹245 Crores was transferred to three newly formed LLPs owned by the promoter's cousins as 'interest-free business advances'. Spot the CARO 2020 violation!",
            aiGreeting: "Time to inspect statutory audit reporting under CARO 2020! Clause (ix) requires auditors to report on diversion and round-tripping of term loans.",
            clue: "Look at the destination of the fresh term loan funds in the financing and investing schedules.",
            botRemark: "Siphoning loan funds to promoter shell LLPs on day one?! That triggers CARO 2020 Clause (ix)(c) and Section 185 criminal prosecution!",
            items: [
                { id: "row-1", label: "Highway Project Phase 1 Equipment Procurement (Capex)", value: "₹ 65.00 Cr", isAnomaly: false },
                { id: "row-2", label: "Term Loan Inflow from SBI Consortium for Highway NH-44", value: "₹ 250.00 Cr", isAnomaly: false },
                { id: "row-3", label: "₹245 Cr of Loan Proceeds diverted as 'Advances' to Promoter-owned LLPs", value: "-₹ 245.00 Cr", isAnomaly: true },
                { id: "row-4", label: "Repayment of Principal on maturing Debentures", value: "-₹ 30.00 Cr", isAnomaly: false },
                { id: "row-5", label: "Interest Paid to Consortium Banks", value: "-₹ 22.00 Cr", isAnomaly: false }
            ],
            explanation: "🎯 **Busted: CARO 2020 Clause (ix)(c) & Section 185 Breach!** CARO 2020 mandates statutory auditors to report whether term loans were applied for the purpose for which they were obtained. Diverting highway loan proceeds to promoter-related shell LLPs without commercial substance represents criminal siphoning of bank funds!",
            standardTag: "CA Final: CARO 2020 Clause (ix) & SA 240 Fraud in Financial Statements"
        },
        {
            id: "fn-03",
            tier: "CA Final",
            tierKey: "final",
            difficulty: "Master Level (Benford's Law & Vendor Fraud)",
            company: "Global Logistics & Cold Chain Corp.",
            year: "FY 2025-26",
            statementType: "Forensic Digital Ledger & Vendor Invoice Audit",
            story: "An internal whistleblower tipped off forensic auditors about massive kickbacks. The company has an internal policy: any purchase above ₹5,00,000 requires 2 Director signatures. Spot the fraudulent invoice splitting cluster!",
            aiGreeting: "Benford's Law and digital forensics time! When employees commit fraud beneath approval thresholds, they repeatedly split invoices just below the radar.",
            clue: "Look at the invoice amounts! Are there dozens of invoices clustered right under ₹5,00,000 (e.g. ₹4,98,000) to bypass management authorization?",
            botRemark: "Look at that! 45 invoices of ₹4,95,000 paid to a single shell vendor within 10 days! Classic invoice splitting under Section 447!",
            items: [
                { id: "row-1", label: "Diesel & Fuel Contracts (Approved via Open Tender)", value: "₹ 180.00 Cr", isAnomaly: false },
                { id: "row-2", label: "Toll Booth FastTag Payments (Automated RFID Electronic Clearing)", value: "₹ 42.00 Cr", isAnomaly: false },
                { id: "row-3", label: "45 Split Invoices of ₹4,95,000 each to Single Unverified Vendor (No 2-Dir sign)", value: "₹ 2.22 Cr", isAnomaly: true },
                { id: "row-4", label: "Truck Fleet Maintenance through Authorized Tata Motors Centers", value: "₹ 38.00 Cr", isAnomaly: false },
                { id: "row-5", label: "Warehouse Lease Rentals under Ind AS 116", value: "₹ 55.00 Cr", isAnomaly: false }
            ],
            explanation: "🎯 **Busted: Threshold Avoidance & Fictitious Vendor Splitting!** Splitting large transactions into multiple sub-threshold batches (smurfing/structuring) to circumvent internal financial controls (IFC) and audit committee oversight is a primary red flag under SA 240 and Section 143(12) of Companies Act 2013!",
            standardTag: "CA Final: Forensic Accounting, IFC & SA 240 Fraud Detection"
        },
        {
            id: "fn-04",
            tier: "CA Final",
            tierKey: "final",
            difficulty: "Master Level (Off-Balance Sheet Guarantees)",
            company: "BlueHorizon Conglomerate Ltd.",
            year: "FY 2025-26",
            statementType: "Contingent Liabilities & Ind AS 37 Notes",
            story: "The company claims a pristine debt-free balance sheet with Net Worth of ₹600 Crores. But hidden away in the microscopic text of Note 28 is a catastrophic off-balance-sheet commitment that could wipe out the entire company overnight. Spot the bomb!",
            aiGreeting: "The Final Boss of Forensic Auditing! Corporate giants don't just cook numbers on the face of the Balance Sheet; they conceal existential time-bombs in the footnotes!",
            clue: "Read Note 28 carefully. Did the company guarantee debts of a bankrupt foreign affiliate that exceed the company's entire net worth?",
            botRemark: "HOLY AUDIT! A ₹1,200 Crore unconditional corporate guarantee for a defaulting overseas subsidiary?! That's 200% of the entire company's net worth!",
            items: [
                { id: "row-1", label: "Note 26: Disputed Income Tax Demands under CIT(A) Appeal", value: "₹ 14.50 Cr", isAnomaly: false },
                { id: "row-2", label: "Note 27: Uncalled liability on partly paid equity shares held as investment", value: "₹ 5.00 Cr", isAnomaly: false },
                { id: "row-3", label: "Note 28: Undisclosed ₹1,200 Cr Bank Guarantee for Defaulting Promoter Offshore Firm", value: "₹ 1,200.00 Cr", isAnomaly: true },
                { id: "row-4", label: "Note 29: Bank Guarantees given in normal course of trade against performance", value: "₹ 28.00 Cr", isAnomaly: false },
                { id: "row-5", label: "Note 30: Capital Commitments remaining to be executed on new plant", value: "₹ 45.00 Cr", isAnomaly: false }
            ],
            explanation: "🎯 **Busted: Existential Off-Balance Sheet Corporate Guarantee!** Extending ₹1,200 Crores of uncollateralized corporate guarantees (200% of net worth) to a defaulting promoter affiliate without board approval under Section 186 and omitting provision under Ind AS 37 constitutes gross auditor negligence and insolvency concealment!",
            standardTag: "CA Final: Ind AS 37 Provisions, Contingent Liabilities & Section 186"
        },
        {
            id: "fn-05",
            tier: "CA Final",
            tierKey: "final",
            difficulty: "Master Level (Ind AS 24 / Related Party Siphoning)",
            company: "Zenith Lifesciences & BioTech Ltd.",
            year: "FY 2025-26",
            statementType: "Related Party Disclosures (Ind AS 24)",
            story: "The company paid ₹140 Crores as 'Clinical Trial Strategy Advisory' to a firm incorporated in Mauritius 2 weeks before year-end, owned by the CEO's spouse. Zero clinical research papers or trials were ever delivered! Spot the Ind AS 24 scam!",
            aiGreeting: "Related Party transactions under Ind AS 24 and Section 188! Look for payments to offshore entities owned by Key Managerial Personnel (KMP) relatives without transfer pricing benchmarks.",
            clue: "Check the Mauritius consultancy entity. Who owns it, and was there any actual commercial substance?",
            botRemark: "₹140 Crores sent to Mauritius entity owned by CEO's spouse with zero deliverables?! Massive Section 188 fraud!",
            items: [
                { id: "row-1", label: "Remuneration to Key Management Personnel approved by Nomination & Remuneration Committee", value: "₹ 12.50 Cr", isAnomaly: false },
                { id: "row-2", label: "Purchase of active pharmaceutical ingredients from arm's length overseas suppliers", value: "₹ 210.00 Cr", isAnomaly: false },
                { id: "row-3", label: "₹140 Cr Advisory Fee paid to Mauritius entity owned by CEO's spouse (No work done)", value: "₹ 140.00 Cr", isAnomaly: true },
                { id: "row-4", label: "Royalty paid to technical parent company under approved technology agreement", value: "₹ 24.00 Cr", isAnomaly: false },
                { id: "row-5", label: "Lease rent paid for registered office to independent commercial REIT", value: "₹ 8.50 Cr", isAnomaly: false }
            ],
            explanation: "🎯 **Busted: Fraudulent Related Party Siphoning (Ind AS 24 & Sec 188)!** Siphoning corporate funds under the guise of fake advisory fees to offshore entities owned by KMP relatives without commercial substance or Audit Committee approval under Section 177 is a major corporate fraud!",
            standardTag: "CA Final: Ind AS 24 Related Party Disclosures & Section 188 Companies Act"
        },
        {
            id: "fn-06",
            tier: "CA Final",
            tierKey: "final",
            difficulty: "Master Level (Ind AS 109 / ECL Under-provisioning)",
            company: "Starlight Non-Banking Financial Corp (NBFC)",
            year: "FY 2025-26",
            statementType: "Loan Assets & Expected Credit Loss (ECL) Note",
            story: "A real estate builder defaulted on ₹300 Crores of commercial loans for over 450 days (Stage 3 Credit Impaired). Yet management classified it as 'Stage 1 Performing' and made only a 0.4% nominal provision! Spot the Ind AS 109 violation!",
            aiGreeting: "Ind AS 109 Financial Instruments! When loans are overdue > 90 days, they enter Stage 3 and require significant lifetime ECL provisioning!",
            clue: "A loan defaulted for 450 days is in Stage 3 Credit Impairment. You cannot pretend it is Stage 1 with 0.4% provision!",
            botRemark: "450 days overdue, debtor under NCLT insolvency, and they provided 0.4%?! That's a massive ₹200+ Cr under-provisioning!",
            items: [
                { id: "row-1", label: "Stage 1 Retail Home Loans (Current & Up-to-date, 0.4% 12-month ECL)", value: "₹ 2,400.00 Cr", isAnomaly: false },
                { id: "row-2", label: "Stage 2 MSME Loans (31-90 days overdue, Lifetime ECL provided)", value: "₹ 380.00 Cr", isAnomaly: false },
                { id: "row-3", label: "Builder Loan 450 days overdue (NCLT case) classified as Stage 1 with 0.4% provision", value: "₹ 300.00 Cr", isAnomaly: true },
                { id: "row-4", label: "Gold Loan portfolio (Secured with 140% collateral cover)", value: "₹ 520.00 Cr", isAnomaly: false },
                { id: "row-5", label: "Total Gross Loan Assets Disclosed", value: "₹ 3,600.00 Cr", isAnomaly: false }
            ],
            explanation: "🎯 **Busted: Ind AS 109 Staging Fraud & ECL Suppression!** Under Ind AS 109, loans with significant increase in credit risk or in default (> 90 days overdue) must be categorized under Stage 2/3 with Lifetime Expected Credit Losses. Misclassifying an insolvent 450-day overdue builder loan as Stage 1 artificially inflates net profits by hundreds of crores!",
            standardTag: "CA Final: Ind AS 109 Financial Instruments - Expected Credit Loss (ECL)"
        },
        {
            id: "fn-07",
            tier: "CA Final",
            tierKey: "final",
            difficulty: "Master Level (Ind AS 7 / Encumbered Cash)",
            company: "Falcon Aviation & Charters Ltd.",
            year: "FY 2025-26",
            statementType: "Cash & Cash Equivalents (Ind AS 7)",
            story: "The airline reported ₹500 Crores in 'Cash and Cash Equivalents' on the face of the balance sheet, pretending it has ample liquidity. But 98% of that cash is locked under judicial court attachment and bank escrow liens! Spot the presentation fraud!",
            aiGreeting: "Cash Presentation under Ind AS 7! Paragraph 48 mandates explicit disclosure of significant cash and cash equivalent balances held by the enterprise that are NOT available for use.",
            clue: "Read Note 8 on Bank Balances: How much of that ₹500 Cr can actually be freely withdrawn for operations?",
            botRemark: "₹490 Crores is under court freeze and lien! Calling it free 'Cash & Cash Equivalents' masks imminent insolvency!",
            items: [
                { id: "row-1", label: "Current Account balances with scheduled domestic commercial banks", value: "₹ 8.50 Cr", isAnomaly: false },
                { id: "row-2", label: "Foreign Currency Nostro balances held overseas for fuel payments", value: "₹ 1.50 Cr", isAnomaly: false },
                { id: "row-3", label: "₹490 Cr under court attachment & bank escrow reported as free Cash & Cash Equivalents", value: "₹ 490.00 Cr", isAnomaly: true },
                { id: "row-4", label: "Short-term Treasury Bills with 30-day maturity", value: "₹ 0.00 Cr", isAnomaly: false },
                { id: "row-5", label: "Total Cash and Cash Equivalents reported on Balance Sheet", value: "₹ 500.00 Cr", isAnomaly: false }
            ],
            explanation: "🎯 **Busted: Ind AS 7 Concealment of Restricted Cash!** Paragraph 48 of Ind AS 7 requires an entity to disclose, together with a commentary by management, the amount of significant cash and cash equivalent balances held by the entity that are not available for use. Presenting encumbered and frozen bank accounts as free liquid cash is fraudulent misrepresentation!",
            standardTag: "CA Final: Ind AS 7 Statement of Cash Flows (Restricted Balances)"
        },
        {
            id: "fn-08",
            tier: "CA Final",
            tierKey: "final",
            difficulty: "Master Level (Ind AS 103 / Goodwill & Impairment)",
            company: "Hyperion Digital Media Network Ltd.",
            year: "FY 2025-26",
            statementType: "Intangible Assets & Goodwill Impairment (Ind AS 36)",
            story: "Hyperion acquired an OTT streaming startup 3 years ago for ₹400 Crores. The OTT platform shut down all operations and has zero users left. Yet management refuses to record an impairment loss, claiming 'brand nostalgia value'! Spot the Ind AS 36 breach!",
            aiGreeting: "Impairment of Goodwill under Ind AS 36! Goodwill must be tested for impairment annually. When a Cash-Generating Unit (CGU) has ceased operations, what is its recoverable amount?",
            clue: "A shut-down platform with zero subscribers and zero future cash flows has a Recoverable Amount of ZERO!",
            botRemark: "Zero users, platform shut down, and carrying ₹400 Cr Goodwill for 'nostalgia'?! That requires an immediate 100% impairment write-down!",
            items: [
                { id: "row-1", label: "Software Intellectual Property & Streaming Code (Amortized over 5 years)", value: "₹ 45.00 Cr", isAnomaly: false },
                { id: "row-2", label: "Trademarks & Domain Names in active commercial deployment", value: "₹ 28.00 Cr", isAnomaly: false },
                { id: "row-3", label: "₹400 Cr Goodwill of defunct, shut-down OTT platform held at 100% carrying value", value: "₹ 400.00 Cr", isAnomaly: true },
                { id: "row-4", label: "Content Licensing Rights (Amortized based on viewership consumption)", value: "₹ 110.00 Cr", isAnomaly: false },
                { id: "row-5", label: "Total Non-Current Intangible Assets Disclosed", value: "₹ 583.00 Cr", isAnomaly: false }
            ],
            explanation: "🎯 **Busted: Ind AS 36 Failure to Impair Defunct Goodwill!** Under Ind AS 36, an asset must be written down to its Recoverable Amount if its carrying amount exceeds its value in use. Retaining ₹400 Crores of goodwill for a permanently shuttered business with zero cash generation is a direct violation of Ind AS 36!",
            standardTag: "CA Final: Ind AS 36 Impairment of Assets & Ind AS 103 Business Combinations"
        },
        {
            id: "fn-09",
            tier: "CA Final",
            tierKey: "final",
            difficulty: "Master Level (CARO 2020 / Benami Property)",
            company: "Vanguard Minerals & Mining Corp.",
            year: "FY 2025-26",
            statementType: "CARO 2020 Clause (i)(c) & Benami Disclosures",
            story: "The company purchased 200 acres of prime bauxite mining land in Odisha in the name of the office peon and junior driver using company funds. The note falsely certifies that 'No proceedings have been initiated under the Benami Transactions Act'! Spot the fraud!",
            aiGreeting: "CARO 2020 Clause (i)(e) requires auditors to verify whether any proceedings have been initiated or are pending against the company for holding any Benami property under the Prohibition of Benami Property Transactions Act, 1988!",
            clue: "Company funds used to buy land held in dummy employees' names? That is textbook Benami property!",
            botRemark: "Mining land registered in the office peon's name with corporate funds? That's a criminal Benami violation under CARO 2020 Clause (i)(e)!",
            items: [
                { id: "row-1", label: "Freehold Mining Leases directly registered in company's corporate name", value: "₹ 680.00 Cr", isAnomaly: false },
                { id: "row-2", label: "Crushing Plant & Heavy Earthmoving Excavators (Hypothecated to banks)", value: "₹ 240.00 Cr", isAnomaly: false },
                { id: "row-3", label: "200 Acres of Land bought with company cash held in Peon's name (Benami Property)", value: "₹ 95.00 Cr", isAnomaly: true },
                { id: "row-4", label: "Railway Siding Infrastructure built under public-private partnership", value: "₹ 115.00 Cr", isAnomaly: false },
                { id: "row-5", label: "Capital Work-in-Progress for Beneficiation Plant expansion", value: "₹ 75.00 Cr", isAnomaly: false }
            ],
            explanation: "🎯 **Busted: CARO 2020 Clause (i)(e) Benami Property Concealment!** Holding real estate in the names of third-party dummy individuals while the consideration is paid by the company violates the Prohibition of Benami Property Transactions Act, 1988, and must be specifically disclosed and qualified under CARO 2020 Clause (i)(e)!",
            standardTag: "CA Final: CARO 2020 Clause (i)(e) Benami Property Disclosures"
        },
        {
            id: "fn-10",
            tier: "CA Final",
            tierKey: "final",
            difficulty: "Master Level (Ind AS 116 / Leases Concealment)",
            company: "QuickMart Hypermarkets Ltd.",
            year: "FY 2025-26",
            statementType: "Lease Commitments & Ind AS 116 Disclosures",
            story: "QuickMart leases 50 hypermarket properties across India for 15-year non-cancellable terms. To keep debt off the balance sheet, they classified them all as 'Short-Term Low Value Service Leases' and concealed ₹850 Crores of Lease Liabilities! Spot the Ind AS 116 fraud!",
            aiGreeting: "Ind AS 116 requires all leases to be recognized on the Balance Sheet as Right-of-Use (ROU) Assets and Lease Liabilities, with exemptions only for leases <= 12 months or low-value items!",
            clue: "A 15-year commercial store lease is neither short-term nor low-value! It CANNOT be hidden off-balance-sheet!",
            botRemark: "15-year anchor store leases disguised as 'low-value short-term service contracts' to hide ₹850 Cr debt?! Classic off-balance sheet fraud!",
            items: [
                { id: "row-1", label: "Water Cooler & Coffee Machine rental (Short-term lease exemption applied)", value: "₹ 0.15 Cr", isAnomaly: false },
                { id: "row-2", label: "Forklift Leases on 11-month contract (Short-term lease exemption applied)", value: "₹ 1.20 Cr", isAnomaly: false },
                { id: "row-3", label: "50 Anchor Store 15-Year Leases disguised as 'Short-Term' to conceal ₹850 Cr liability", value: "₹ 850.00 Cr", isAnomaly: true },
                { id: "row-4", label: "Warehouse ROU Asset recognized and amortized over 10-year tenure", value: "₹ 140.00 Cr", isAnomaly: false },
                { id: "row-5", label: "Interest expense on recognized lease liabilities charged to finance costs", value: "₹ 16.00 Cr", isAnomaly: false }
            ],
            explanation: "🎯 **Busted: Ind AS 116 Off-Balance Sheet Lease Concealment!** Ind AS 116 eliminated off-balance sheet operating leases for lessees. Disguising 15-year long-term retail store leases as short-term exemptions to conceal hundreds of crores of debt violates Ind AS 116 and misleads credit rating agencies!",
            standardTag: "CA Final: Ind AS 116 Leases & Right-of-Use Asset Recognition"
        }
    ]
};

if (typeof module !== "undefined" && module.exports) {
    module.exports = { QUESTION_BANK };
}
