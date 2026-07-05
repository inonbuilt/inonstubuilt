const mcqData = [
  {
    case_id: "aud_mcq_cs1",
    case_chapter: ["Professional Ethics", "Company Audit"],
    caseText: `
      <p>CA. Akash is a practicing chartered accountant and a partner in M/s Akash & Associates. The firm has been offered the statutory audit of XYZ Ltd., a listed entity, for the financial year 2026-27. Upon initial inquiry, it was noted that CA. Akash's wife holds 1,500 equity shares in XYZ Ltd., the face value of which is ₹ 10 each, but the current market value is ₹ 120 per share.</p>
      <p>Furthermore, another partner, CA. Vikas, took a loan of ₹ 4.5 lakhs from XYZ Ltd. three years ago to purchase a vehicle, which is currently outstanding at ₹ 1.2 lakhs.</p>
      <p><strong>Based on the facts provided, answer the following questions:</strong></p>
    `,
    questions: [
      {
        question_id: "aud_mcq_cs1_1",
        chapter_name: ["Company Audit"],
        question: "As per the provisions of Section 141(3) of the Companies Act, 2013, can M/s Akash & Associates accept the appointment as the statutory auditor of XYZ Ltd. considering the shareholding of CA. Akash's wife?",
        options: [
          "Yes, because the face value of the shares held by his wife does not exceed ₹ 1,00,000.",
          "No, because the market value of the shares held by his wife exceeds ₹ 1,00,000.",
          "No, because a relative of a partner cannot hold any security in the company.",
          "Yes, provided she disposes of the shares within 60 days of the firm's appointment."
        ],
        answer: 0 // Face value is considered, which is 1,500 * 10 = ₹ 15,000 (well within the ₹ 1,00,000 limit).
      },
      {
        question_id: "aud_mcq_cs1_2",
        chapter_name: ["Company Audit"],
        question: "Does the outstanding loan of CA. Vikas disqualify M/s Akash & Associates from being appointed as the auditor of XYZ Ltd.?",
        options: [
          "Yes, because any amount of loan taken from the company disqualifies the firm.",
          "No, because the outstanding loan amount does not exceed ₹ 5,00,000.",
          "Yes, because the original loan amount was ₹ 4.5 lakhs.",
          "No, provided the loan is repaid before the signing of the audit report."
        ],
        answer: 1 // Disqualification triggers if indebtedness exceeds ₹ 5,00,000.
      },
      {
        question_id: "aud_mcq_cs1_3",
        chapter_name: ["Professional Ethics"],
        question: "Under the Code of Ethics, which fundamental principle might be perceived as compromised if the audit is accepted without evaluating the significance of the loan transaction?",
        options: [
          "Confidentiality",
          "Professional Competence and Due Care",
          "Objectivity and Independence",
          "Integrity"
        ],
        answer: 2
      }
    ]
  },
  {
    case_id: "aud_mcq_cs2",
    case_chapter: ["SA 701 Key Audit Matters"],
    caseText: `
      <p>You are the audit engagement partner for PQR Ltd., a listed company. During the audit for the year ended 31st March 2026, you identified several significant risks of material misstatement. One area involved a complex valuation of unquoted financial instruments, which required significant auditor judgment and consultation with a valuation expert.</p>
    `,
    questions: [
      {
        question_id: "aud_mcq_cs2_1",
        chapter_name: ["SA 701"],
        question: "According to SA 701, how should the matter regarding the complex valuation of unquoted financial instruments be treated in the audit report?",
        options: [
          "It must be disclosed as an Emphasis of Matter paragraph.",
          "It should be communicated as a Key Audit Matter (KAM) if determined to be of most significance in the audit.",
          "It should trigger a qualified opinion due to the inherent uncertainty.",
          "It should only be communicated to those charged with governance, not in the audit report."
        ],
        answer: 1
      },
      {
        question_id: "aud_mcq_cs2_2",
        chapter_name: ["SA 701"],
        question: "If a matter is determined to be a KAM, but the auditor concludes that the public disclosure of the matter would reasonably be expected to outweigh the public interest benefits of such communication, the auditor should:",
        options: [
          "Describe the matter but omit the financial details.",
          "Withdraw from the audit engagement immediately.",
          "Not communicate the matter in the auditor's report (unless required by law/regulation).",
          "Modify the audit opinion to an Adverse Opinion."
        ],
        answer: 2
      }
    ]
  }
];