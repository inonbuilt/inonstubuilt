const mcqData = [
  {
    case_id: "dt_mcq_cs1",
    case_chapter: ["Capital Gains", "Tax Rates"],
    caseText: `
      <p>Mr. Raghav (aged 45 years), an Indian resident, sold a residential house on 15th December 2023 for ₹ 1.20 Crores. The house was acquired by him on 1st May 2010 for ₹ 25 Lakhs. He paid brokerage of 1% on the sale consideration.</p>
      <p>In order to claim exemption under section 54, he purchased a new residential house property on 25th March 2024 for ₹ 60 Lakhs.</p>
      <p>(Cost Inflation Indices: FY 2010-11 = 167; FY 2023-24 = 348).</p>
      <p><strong>Based on the above facts, answer the following questions:</strong></p>
    `,
    questions: [
      {
        question_id: "dt_mcq_cs1_1",
        chapter_name: ["Capital Gains"],
        question: "What is the amount of indexed cost of acquisition for the residential house sold by Mr. Raghav?",
        options: [
          "₹ 25,00,000",
          "₹ 52,09,581",
          "₹ 55,20,000",
          "₹ 60,00,000"
        ],
        answer: 1 // (25,00,000 * 348) / 167 = 52,09,580.83 -> ₹ 52,09,581
      },
      {
        question_id: "dt_mcq_cs1_2",
        chapter_name: ["Capital Gains"],
        question: "Calculate the net long-term capital gain taxable in the hands of Mr. Raghav after claiming exemption under section 54.",
        options: [
          "₹ 6,70,419",
          "₹ 5,50,419",
          "₹ 7,90,419",
          "Nil"
        ],
        answer: 0 // Net sale consideration = 1.20 Cr - 1.2L (1%) = 1,18,80,000. Gross LTCG = 1,18,80,000 - 52,09,581 = 66,70,419. Exemption u/s 54 = 60,00,000. Net LTCG = 66,70,419 - 60,00,000 = 6,70,419.
      },
      {
        question_id: "dt_mcq_cs1_3",
        chapter_name: ["Capital Gains"],
        question: "If Mr. Raghav transfers the newly acquired residential house in October 2025 for ₹ 70 Lakhs, what will be the cost of acquisition of this new house for calculating capital gains?",
        options: [
          "₹ 60 Lakhs",
          "Nil",
          "₹ 10 Lakhs",
          "₹ 66.70 Lakhs"
        ],
        answer: 1 // Because the new house is transferred within 3 years, the cost of acquisition is reduced by the exempted capital gain. Cost = 60L. Exemption claimed = 60L. So, revised cost = 60L - 60L = Nil.
      }
    ]
  },
  {
    case_id: "dt_mcq_cs2",
    case_chapter: ["International Taxation", "Transfer Pricing"],
    caseText: `
      <p>ABC Inc., a US-based company, holds 30% of the voting power in XYZ Ltd., an Indian company. XYZ Ltd. imports raw materials exclusively from ABC Inc. During the financial year 2023-24, XYZ Ltd. imported 10,000 units at a price of USD 50 per unit.</p>
      <p>XYZ Ltd. sells the finished goods in the Indian market. The Assessing Officer refers the matter to the Transfer Pricing Officer (TPO) to determine the Arm's Length Price (ALP) of the import transaction.</p>
    `,
    questions: [
      {
        question_id: "dt_mcq_cs2_1",
        chapter_name: ["Transfer Pricing"],
        question: "Does the relationship between ABC Inc. and XYZ Ltd. constitute an 'Associated Enterprise' (AE) relationship under Section 92A of the Income Tax Act, 1961?",
        options: [
          "No, because ABC Inc. is a foreign company.",
          "Yes, because ABC Inc. holds more than 26% of the voting power in XYZ Ltd.",
          "No, because the import transaction involves raw materials.",
          "Yes, but only if they share common directors."
        ],
        answer: 1 // Under Section 92A, holding 26% or more of voting power creates an AE relationship.
      },
      {
        question_id: "dt_mcq_cs2_2",
        chapter_name: ["Transfer Pricing"],
        question: "If the TPO determines the Arm's Length Price (ALP) of the raw material to be USD 40 per unit, what will be the primary transfer pricing adjustment to the total income of XYZ Ltd. (assuming USD 1 = ₹ 80)?",
        options: [
          "Decrease in total income by ₹ 80 Lakhs",
          "Increase in total income by ₹ 80 Lakhs",
          "Increase in total income by ₹ 40 Lakhs",
          "No adjustment is required."
        ],
        answer: 1 // Overpricing of imports reduces profit. Adjustment = (50 - 40) * 10,000 units = 100,000 USD. In INR = 100,000 * 80 = ₹ 80,00,000 increase to income.
      }
    ]
  }
];