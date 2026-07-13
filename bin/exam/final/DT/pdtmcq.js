const mcqData = [
  {
  case_id: "dt_mtp_I_cs1",
  case_chapter: ["Non-resident Taxation", "Deductions", "Appeals & Revision"],
  caseText: `
    <p><strong>Case Scenario I</strong></p>
    <p>Falcon Ltd of Country X is an associated enterprise of Max Inc. of USA. Falcon Ltd. has a branch in India since 2010. It was selling goods to Indian customers by importing from various countries besides sale in India of goods manufactured by it in Country X.</p>
    <p>The adjusted total income of the Indian branch of Falcon Ltd for the year ended 31st March, 2024 is ₹ 80 lakhs. The branch incurred ₹ 12 lakhs by way of executive and general administrative expenditure during the financial year 2023-24. The head office has allocated ₹ 18 lakhs as the branch's share of head office expenditure including the expenditure of ₹ 12 lakhs incurred by the branch.</p>
    <p>A survey under section 133A of the Act was conducted in its branch premises in January, 2023 and undisclosed assets of ₹ 90 lakhs were found. Assessment for the assessment year 2023-24 was completed by making addition of the entire undisclosed asset of ₹ 90 lakhs. The assessee preferred appeal before CIT (Appeals) who gave complete relief to the assessee. The Income-tax Department wants to file an appeal before ITAT.</p>
    <p>T (P) Ltd. an Indian company, a wholly owned subsidiary of Falcon Ltd., paid ₹ 50 lakhs to XYZ Inc. of Country M as fee for technical services. Services were rendered by the employees of the branch of XYZ Inc. in India. There is no DTAA between India and Country M. T(P) Ltd. has entered into certain international transactions during the P.Y. 2022-23 and P.Y. 2023-24.</p>
    <p>T (P) Ltd. invested in SS (P) Ltd of Country Y and received dividend of ₹ 550 lakhs during the financial year 2023-24. It declared and distributed interim dividend of ₹ 250 lakhs on 10.11.2023 and a final dividend of ₹ 230 lakhs on 12.11.2024. T (P) Ltd. has filed its return of income on 15.11.2023 for A.Y. 2023-24 and on 30.11.2024 for A.Y. 2024-25.</p>
    <p><strong>Based on the facts of the above case scenario, choose the most appropriate answer to Q.1 to Q. 4 below:</strong></p>
  `,
  questions: [
    {
      question_id: "dt_mtp_I_q1",
      chapter_name: ["Non-resident Taxation", "TDS"],
      question: "How much tax to be deductible at source by T (P) Ltd on the fee for technical services paid to XYZ Inc.?",
      options: [
        "₹ 20,80,000",
        "₹ 20,00,000",
        "₹ 5,00,000",
        "₹ 10,40,000"
      ],
      answer: 0 // Since services are rendered by the employees of the Indian branch of XYZ Inc., it forms a Permanent Establishment (PE) under Section 44DA. Tax is deductible under Section 195 at the rate applicable to a foreign company's business income: 40% + 4% Health and Education Cess = 41.6%. Thus, 41.6% of ₹ 50,00,000 = ₹ 20,80,000.
    },
    {
      question_id: "dt_mtp_I_q2",
      chapter_name: ["Deductions"],
      question: "How much of the dividend received by T (P) Ltd would be liable to tax for the assessment year 2024-25?",
      options: [
        "₹ 70 lakhs",
        "₹ 320 lakhs",
        "₹ 300 lakhs",
        "₹ 550 lakhs"
      ],
      answer: 2 // Total dividend received = ₹ 550 lakhs. Under Section 80M, deduction is allowed to the extent of dividend distributed on or before the due date under Section 139(1) (which is 30.11.2024). The interim dividend of ₹ 250 lakhs distributed on 10.11.2023 qualifies for deduction. Net taxable dividend = ₹ 550 lakhs - ₹ 250 lakhs = ₹ 300 lakhs.
    },
    {
      question_id: "dt_mtp_I_q3",
      chapter_name: ["Non-resident Taxation"],
      question: "How much of head office expenditure can be claimed by the Indian branch of Falcon Ltd for the assessment year 2024-25?",
      options: [
        "₹ 4,00,000",
        "₹ 6,00,000",
        "₹ 12,00,000",
        "₹ 18,00,000"
      ],
      answer: 0 // Under Section 44C, head office expenditure deduction is limited to the lower of: (i) 5% of adjusted total income (5% of ₹ 80 lakhs = ₹ 4 lakhs) or (ii) Actual HO expenditure attributable to the branch (₹ 18 lakhs - ₹ 12 lakhs branch-incurred expenditure = ₹ 6 lakhs). Lower is ₹ 4,00,000.
    },
    {
      question_id: "dt_mtp_I_q4",
      chapter_name: ["Appeals & Revision"],
      question: "Can the Income-tax Department prefer appeal before ITAT in respect of the complete relief obtained by Falcon Ltd from CIT (Appeals)?",
      options: [
        "No, as the tax liability is less than ₹ 50 lakhs.",
        "Yes, as the tax liability is more than ₹ 25 lakhs.",
        "Yes, as the tax liability is more than ₹ 50 lakhs.",
        "No, as the undisclosed asset is less than ₹ 100 lakhs."
      ],
      answer: 2 // The undisclosed asset of ₹ 90 lakhs is taxable under Section 115BBE at 78% (60% tax + 25% surcharge + 4% cess). Tax effect = 78% of ₹ 90 lakhs = ₹ 70.2 lakhs. Since the tax effect exceeds the statutory ITAT appeal monetary threshold of ₹ 50 lakhs for the Department, the appeal can be filed.
    }
  ]
},
{
  case_id: "dt_mtp_I_cs2",
  case_chapter: ["TDS", "TCS"],
  caseText: `
    <p><strong>Case Scenario II</strong></p>
    <p>Mr. Abhay, a resident Indian, is in retail business in Delhi and his turnover for F.Y.2022-23 was ₹ 9.8 crores. He regularly purchases goods from another resident, Mr. Kunal, a wholesaler in Delhi, and the aggregate payments made by Mr. Abhay to Mr. Kunal during the F.Y.2023-24 was ₹ 90 lakh (₹ 25 lakh on 8.5.2023, ₹ 20 lakh on 27.8.2023, ₹ 25 lakh on 18.10.2023 and ₹ 20 lakh on 11.2.2024). Mr. Kunal’s turnover for F.Y.2022-23 was ₹ 13.5 crores.</p>
    <p>Mr. Kunal remitted ₹ 6.5 lakh on 28.3.2024, out of his personal savings, through Canara Bank, Delhi branch, which is an authorised dealer, under the Liberalised Remittance Scheme of RBI, as gift to his elder brother residing in Dubai (since 1995), on the occasion of his 60th birthday.</p>
    <p>Mr. Kunal paid ₹ 8.8 lakhs on 1.11.2023 to World Travels for a holiday package to Singapore for a week with his family, comprising of his wife and two children, being twins aged 19 years, in the last week of November.</p>
    <p>He also took an education loan of ₹ 13 lakhs on 1.2.2024 from Canara Bank, Delhi Branch, for his son’s two-year Master of Public Administration program in UWA University, Australia and remitted the said amount through the same bank under LRS. For his daughter’s Research program in PSL Research University, USA, he remitted ₹ 12 lakhs on 15.2.2024, out of his personal savings, through Bank of India, Delhi branch, which is also an authorised dealer, under LRS.</p>
    <p>Mr. Kunal has furnished undertaking containing the details of earlier remittance to Canara Bank and Bank of India.</p>
    <p><strong>Based on the facts of the above case scenario, choose the most appropriate answer to Q.5 to Q. 9 below:</strong></p>
  `,
  questions: [
    {
      question_id: "dt_mtp_I_q5",
      chapter_name: ["TDS", "TCS"],
      question: "Are provisions of TDS/TCS under the Income-tax Act, 1961 attracted in respect of purchase/sale transaction between Mr. Abhay and Mr. Kunal? If so, what is the quantum of tax to be deducted/collected for the P.Y.2023-24?",
      options: [
        "No; TDS/TCS provisions are not attracted for P.Y.2023-24, since the turnover of Mr. Abhay in the immediately preceding financial year i.e., F.Y.2022-23 does not exceed ₹ 10 crores.",
        "Yes, Mr. Abhay has to deduct tax@0.1% of ₹ 40 lakhs (₹ 20 lakhs on 18.10.2023 and ₹ 20 lakhs on 11.2.2024)",
        "Yes, Mr. Kunal has to collect tax@0.1% of ₹ 40 lakhs (₹ 20 lakhs on 18.10.2023 and ₹ 20 lakhs on 11.2.2024)",
        "Yes, Mr. Kunal has to collect tax@0.1% of ₹ 90 lakhs"
      ],
      answer: 2 // Mr. Abhay's turnover in the preceding FY is ₹ 9.8 Cr (less than ₹ 10 Cr), so Section 194Q (TDS) is not applicable to him. However, Mr. Kunal's turnover is ₹ 13.5 Cr (exceeds ₹ 10 Cr), meaning TCS under Section 206C(1H) is triggered on receipts exceeding ₹ 50 lakhs. Total receipt is ₹ 90 lakhs, so the excess ₹ 40 lakhs is subject to TCS by Mr. Kunal.
    },
    {
      question_id: "dt_mtp_I_q6",
      chapter_name: ["TCS"],
      question: "In case of failure to furnish PAN by the deductee/collectee as required based on the answer to Q.5 above, what would be the applicable rate of TDS/TCS?",
      options: [
        "Not applicable, since there is no requirement to deduct or collect tax at source",
        "20%",
        "5%",
        "1%"
      ],
      answer: 3 // As per Section 206CC, if the collectee fails to furnish PAN for transactions covered under Section 206C(1H), the tax collection rate is explicitly fixed at 1% instead of the standard higher rate of 5%.
    },
    {
      question_id: "dt_mtp_I_q7",
      chapter_name: ["TCS"],
      question: "Is World Travels required to collect tax at source on receipt of ₹ 8.8 lakhs from Mr. Kunal for holiday package to Singapore? If so, what is the amount of tax to be collected?",
      options: [
        "Yes; ₹ 36,000",
        "Yes; ₹ 71,000",
        "Yes; ₹ 44,000",
        "No tax is required to be collected at source in respect of this transaction"
      ],
      answer: 1 // Post 01.10.2023, TCS on overseas tour packages is 5% up to ₹ 7 lakhs and 20% on the amount exceeding ₹ 7 lakhs. Calculation: (5% of ₹ 7,00,000) + (20% of ₹ 1,80,000) = ₹ 35,000 + ₹ 36,000 = ₹ 71,000.
    },
    {
      question_id: "dt_mtp_I_q8",
      chapter_name: ["TCS"],
      question: "What is the amount of tax to be collected from Mr. Kunal in respect of the remittance of amounts overseas for his son’s and daughter’s education?",
      options: [
        "TCS @0.5% of ₹ 6 lakhs and ₹ 5 lakhs is attracted in respect of remittance for son’s and daughter’s education, respectively.",
        "TCS @5% of ₹ 6 lakhs and ₹ 12 lakhs is attracted in respect of remittance for son’s and daughter’s education, respectively",
        "TCS @0.5% of ₹ 6 lakhs and TCS@5% of ₹ 5 lakhs are attracted in respect of remittance for son’s and daughter’s education, respectively.",
        "TCS @0.5% of ₹ 6 lakhs and TCS@5% of ₹ 12 lakhs are attracted in respect of remittance for son’s and daughter’s education, respectively."
      ],
      answer: 3 // The basic LRS threshold of ₹ 7 lakhs applies chronologically. On 01.02.2024, the son's education remittance via loan (₹ 13 lakhs) absorbs the ₹ 7 lakh exemption, leaving ₹ 6 lakhs taxable at the concessional rate of 0.5%. The subsequent remittance on 15.02.2024 for the daughter (₹ 12 lakhs) from personal savings is fully taxable at 5% because the threshold has already been completely exhausted.
    },
    {
      question_id: "dt_mtp_I_q9",
      chapter_name: ["TCS"],
      question: "Are TCS provisions attracted in respect of remittance of gift to brother? If so, what is the amount of tax to be collected from Mr. Kunal?",
      options: [
        "No, since the remittance is out of personal savings for a personal purpose",
        "No, since the amount remitted to his brother is less than ₹ 7 lakhs",
        "Yes, ₹ 1,30,000",
        "Yes, ₹ 32,500"
      ],
      answer: 2 // Since the common ₹ 7 lakh threshold for LRS was completely exhausted by the educational remittances in February, the entire subsequent gift remittance of ₹ 6.5 lakhs on 28.03.2024 falls under 'other purposes' and is subject to TCS at the post-October rate of 20%. Calculation: 20% of ₹ 6,50,000 = ₹ 1,30,000.
    }
  ]
},
{
  case_id: "dt_mtp_I_cs3",
  case_chapter: ["Equalisation Levy"],
  caseText: `
    <p><strong>Case Scenario III</strong></p>
    <p>Flax (P) Ltd. availed online digital advertisement service provided by Marshall Inc. of USA in March 2024. It paid ₹ 10 lakhs and the amount outstanding as on 31st March, 2024 was ₹ 2 lakhs for the said online digital advertisement service.</p>
    <p>Marshall Inc. is also an e-commerce operator who sold its goods to customers resident in India for ₹ 180 lakhs during the financial year 2023-24. Also, during the same year, Marshall Inc. sold goods for ₹ 70 lakhs to customers outside India but has used IP address in India for the purchase of those goods.</p>
    <p><strong>Based on the facts of the above case scenario, choose the most appropriate answer to Q.10 to Q. 12 below:</strong></p>
  `,
  questions: [
    {
      question_id: "dt_mtp_I_q10",
      chapter_name: ["Equalisation Levy"],
      question: "In respect of amount paid/payable by Flax (P) Ltd. for advertising services provided by Marshall Inc., which of the following statements are correct?",
      options: [
        "Equalization levy of ₹ 60,000 is to be deducted and paid by Flax (P) Ltd.",
        "Equalization levy of ₹ 72,000 is to be deducted and paid by Flax (P) Ltd.",
        "Equalization levy of ₹ 24,000 is to be paid by Marshall Inc.",
        "Equalization levy of ₹ 72,000 is to be paid by Marshall Inc."
      ],
      answer: 1 // Equalisation levy on specified services (online advertisement) is attracted at 6% on the total consideration paid/payable. Total consideration = ₹ 10 lakhs + ₹ 2 lakhs = ₹ 12 lakhs. Levy = 6% of ₹ 12,00,000 = ₹ 72,000, which must be deducted and paid by the resident payer, Flax (P) Ltd.
    },
    {
      question_id: "dt_mtp_I_q11",
      chapter_name: ["Equalisation Levy"],
      question: "Would Flax (P) Ltd. be liable to pay any interest and/or penalty if the amount of the equalisation levy remitted on 20.6.2024?",
      options: [
        "No, it would not be liable to pay any interest or penalty since the amount is remitted within the prescribed time limit.",
        "It would be liable to pay interest but no penalty is attracted.",
        "Yes, it would be liable to pay both interest and penalty.",
        "It would be liable to pay penalty but no interest is payable."
      ],
      answer: 2 // The equalisation levy deducted during March 2024 ought to have been credited to the Central Government by 7th April 2024. Delayed payment attracts simple interest @ 1% for every month or part of a month u/s 170, and failure to pay the deducted levy attracts a penalty u/s 171 equal to the amount of levy failed to be paid.
    },
    {
      question_id: "dt_mtp_I_q12",
      chapter_name: ["Equalisation Levy"],
      question: "Would equalization levy be attracted in the hands of Marshall Inc., being an e-commerce operator for sale of goods in India?",
      options: [
        "Yes, Equalization levy of ₹ 15,00,000 is to be paid by Marshall Inc.",
        "Yes, Equalization levy of ₹ 5,00,000 is to be paid by Marshall Inc.",
        "No, equalization levy is not attracted in the hands of Marshall Inc.",
        "Yes, Equalization levy of ₹ 3,60,000 is to be paid by Marshall Inc."
      ],
      answer: 1 // Equalisation levy is attracted @ 2% on the amount of consideration received/receivable by an e-commerce operator from e-commerce supply or services. The scope covers sales to Indian residents (₹ 180 lakhs) and sales to non-residents using an Indian IP address (₹ 70 lakhs). Total gross consideration = ₹ 250 lakhs, which exceeds the ₹ 50 lakh threshold. Levy = 2% of ₹ 2,50,00,000 = ₹ 5,00,000.
    }
  ]
}

  
];