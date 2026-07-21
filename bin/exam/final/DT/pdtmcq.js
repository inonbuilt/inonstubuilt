const mcqData = [
  {
  case_id: "dt_mtp_I_cs1",
  case_chapter: ["Non-resident Taxation", "Deductions", "Appeals & Revision"],
  caseText: `
    
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
},
{
  case_id: "dt_aprmtp24_II_cs1",
  case_chapter: [
    "Special Provisions Relating to Certain Incomes of Non-Residents (Chapter XII-A)",
    "Dividend",
    "Tax Deduction at Source (TDS)",
    "Capital Gains"
  ],
  caseText: `
    

    <p>The following information pertains to Mr. Apoorv, an Indian citizen and non-resident in India, for the previous year 2023-24:</p>

    <ol type="i">
      <li>Dividend from TPO Ltd., an Indian Company (gross) of ₹ 1,30,000.</li>

      <li>Interest on debentures of SLP Pvt. Ltd. (subscribed in convertible foreign exchange) of ₹ 1,35,000 (gross).</li>

      <li>He incurred interest on loan taken for purchase of shares of TPO Ltd. and for purchase of debentures of SLP Pvt. Ltd. of ₹ 30,000 and ₹ 20,000, respectively.</li>

      <li>On 15th March 2024, he sold debentures of Fix Ltd. for ₹ 18,25,000 which were subscribed in convertible foreign exchange on 10th June 2004 in dollars equivalent to ₹ 4,65,000. He paid commission to broker of ₹ 7,000 at the time of sale.</li>

      <li>On 30th April, 2024, he reinvested the sale proceeds of debentures of ₹ 4,80,000 for purchase of listed shares of an Indian company, Fly High Ltd.</li>
    </ol>

    <p><strong>Cost Inflation Index:</strong> F.Y. 2004-05 - 113; F.Y. 2023-24 – 348.</p>

    <p><strong>Based on the facts of the above case scenario, choose the most appropriate answer to Q.1 to Q.5 below:</strong></p>
  `,
  questions: [
    {
      question_id: "dt_aprmtp24_II_q1",
      chapter_name: [
        "Dividend",
        "Tax Deduction at Source (TDS)"
      ],
      question: "What is the amount of dividend taxable in the hands of Mr. Apoorv and at what rate TPO Ltd. is required to deduct tax at source on dividend income distributed to Mr. Apoorv?",
      options: [
        "₹ 1,30,000 and 10%",
        "₹ 1,04,000 and 10%",
        "₹ 1,00,000 and 20.8%",
        "₹ 1,30,000 and 20.8%"
      ],
      answer: 4 // Being a non-resident, the entire dividend of ₹1,30,000 is taxable. TDS on dividend to a non-resident is deductible under section 195 at 20% plus surcharge and health & education cess (effective rate assumed in the question: 20.8%).
    },
    {
      question_id: "dt_aprmtp24_II_q2",
      chapter_name: [
        "Dividend",
        "Tax Deduction at Source (TDS)"
      ],
      question: "Assuming for the purpose of this MCQ that Mr. Apoorv is a resident in India for the P.Y. 2023-24, determine the amount of dividend taxable in his hands and at what rate TPO Ltd. is required to deduct tax at source on dividend income distributed to him?",
      options: [
        "₹ 1,30,000 and 10%",
        "₹ 1,04,000 and 10%",
        "₹ 1,00,000 and 20%",
        "₹ 1,30,000 and 20%"
      ],
      answer: 2 // For a resident, deduction of interest expenditure up to 20% of dividend income is allowable. Dividend taxable = ₹1,30,000 − ₹26,000 = ₹1,04,000. TDS under section 194 is deductible @10%.
    },
    {
      question_id: "dt_aprmtp24_II_q3",
      chapter_name: [
        "Special Provisions Relating to Certain Incomes of Non-Residents (Chapter XII-A)"
      ],
      question: "What is the amount of interest on debentures of SLP Pvt. Ltd. taxable in the hands of Mr. Apoorv and at what rate? Ignore surcharge and cess.",
      options: [
        "₹ 1,35,000 taxable @20%",
        "₹ 1,05,000 taxable @20%",
        "₹ 1,08,000 taxable at slab rates",
        "₹ 1,05,000 taxable at slab rates"
      ],
      answer: 1 // Interest on specified debentures subscribed in convertible foreign exchange is taxable under Chapter XII-A at 20% on the gross amount without deduction of expenditure.
    },
    {
      question_id: "dt_aprmtp24_II_q4",
      chapter_name: [
        "Capital Gains",
        "Special Provisions Relating to Certain Incomes of Non-Residents (Chapter XII-A)"
      ],
      question: "What would be the amount of long-term capital gains taxable in the hands of Mr. Apoorv on sale of debentures of Fix Ltd., as per the provisions of Chapter XII-A of the Income-tax Act, 1961? Ignore the effect of first proviso to section 48 (benefit of foreign currency conversion).",
      options: [
        "₹ 13,53,000",
        "₹ 9,95,772",
        "₹ 9,97,142",
        "₹ 13,60,000"
      ],
      answer: 2 // Under Chapter XII-A, indexation benefit is not available. Exemption under section 115F is available on proportionate reinvestment, resulting in taxable LTCG of ₹9,95,772.
    },
    {
      question_id: "dt_aprmtp24_II_q5",
      chapter_name: [
        "Capital Gains"
      ],
      question: "Assuming for the purpose of this MCQ that Mr. Apoorv is a resident in India for the previous year 2023-24, what would be the amount of taxable capital gains on sale of debentures of Fix Ltd. in the hands of Mr. Apoorv?",
      options: [
        "₹ 13,53,000",
        "₹ 3,85,965",
        "₹ 9,95,772",
        "₹ 13,60,000"
      ],
      answer: 1 // Being a resident, Chapter XII-A does not apply. Long-term capital gain is computed with indexation benefit under section 48, resulting in taxable LTCG of ₹13,53,000.
    }
  ]
},
{
  case_id: "dt_aprmtp24_II_cs1",
  case_chapter: [
    "Special Provisions Relating to Certain Incomes of Non-Residents (Chapter XII-A)",
    "Dividend",
    "Tax Deduction at Source (TDS)",
    "Capital Gains"
  ],
  caseText: `

    <p>The following information pertains to Mr. Apoorv, an Indian citizen and non-resident in India, for the previous year 2023-24:</p>

    <ol type="i">
      <li>Dividend from TPO Ltd., an Indian Company (gross) of ₹ 1,30,000.</li>

      <li>Interest on debentures of SLP Pvt. Ltd. (subscribed in convertible foreign exchange) of ₹ 1,35,000 (gross).</li>

      <li>He incurred interest on loan taken for purchase of shares of TPO Ltd. and for purchase of debentures of SLP Pvt. Ltd. of ₹ 30,000 and ₹ 20,000, respectively.</li>

      <li>On 15th March 2024, he sold debentures of Fix Ltd. for ₹ 18,25,000 which were subscribed in convertible foreign exchange on 10th June 2004 in dollars equivalent to ₹ 4,65,000. He paid commission to broker of ₹ 7,000 at the time of sale.</li>

      <li>On 30th April, 2024, he reinvested the sale proceeds of debentures of ₹ 4,80,000 for purchase of listed shares of an Indian company, Fly High Ltd.</li>
    </ol>

    <p><strong>Cost Inflation Index:</strong> F.Y. 2004-05 - 113; F.Y. 2023-24 – 348.</p>

    <p><strong>Based on the facts of the above case scenario, choose the most appropriate answer to Q.1 to Q.5 below:</strong></p>
  `,
  questions: [
    {
      question_id: "dt_aprmtp24_II_q1",
      chapter_name: [
        "Dividend",
        "Tax Deduction at Source (TDS)"
      ],
      question: "What is the amount of dividend taxable in the hands of Mr. Apoorv and at what rate TPO Ltd. is required to deduct tax at source on dividend income distributed to Mr. Apoorv?",
      options: [
        "₹ 1,30,000 and 10%",
        "₹ 1,04,000 and 10%",
        "₹ 1,00,000 and 20.8%",
        "₹ 1,30,000 and 20.8%"
      ],
      answer: 3 // (d) Being a non-resident, the entire dividend of ₹1,30,000 is taxable. TDS is deductible under section 195 @20% plus applicable surcharge and cess (effective rate assumed in the question: 20.8%).
    },
    {
      question_id: "dt_aprmtp24_II_q2",
      chapter_name: [
        "Dividend",
        "Tax Deduction at Source (TDS)"
      ],
      question: "Assuming for the purpose of this MCQ that Mr. Apoorv is a resident in India for the P.Y. 2023-24, determine the amount of dividend taxable in his hands and at what rate TPO Ltd. is required to deduct tax at source on dividend income distributed to him?",
      options: [
        "₹ 1,30,000 and 10%",
        "₹ 1,04,000 and 10%",
        "₹ 1,00,000 and 20%",
        "₹ 1,30,000 and 20%"
      ],
      answer: 1 // (b) Interest deduction is restricted to 20% of dividend income. Taxable dividend = ₹1,30,000 − ₹26,000 = ₹1,04,000. TDS under section 194 is @10%.
    },
    {
      question_id: "dt_aprmtp24_II_q3",
      chapter_name: [
        "Special Provisions Relating to Certain Incomes of Non-Residents (Chapter XII-A)"
      ],
      question: "What is the amount of interest on debentures of SLP Pvt. Ltd. taxable in the hands of Mr. Apoorv and at what rate? Ignore surcharge and cess.",
      options: [
        "₹ 1,35,000 taxable @20%",
        "₹ 1,05,000 taxable @20%",
        "₹ 1,08,000 taxable at slab rates",
        "₹ 1,05,000 taxable at slab rates"
      ],
      answer: 0 // (a) Interest on specified debentures subscribed in convertible foreign exchange is taxable on the gross amount @20% under Chapter XII-A without allowing deduction for expenditure.
    },
    {
      question_id: "dt_aprmtp24_II_q4",
      chapter_name: [
        "Capital Gains",
        "Special Provisions Relating to Certain Incomes of Non-Residents (Chapter XII-A)"
      ],
      question: "What would be the amount of long-term capital gains taxable in the hands of Mr. Apoorv on sale of debentures of Fix Ltd., as per the provisions of Chapter XII-A of the Income-tax Act, 1961? Ignore the effect of first proviso to section 48 (benefit of foreign currency conversion).",
      options: [
        "₹ 13,53,000",
        "₹ 9,95,772",
        "₹ 9,97,142",
        "₹ 13,60,000"
      ],
      answer: 1 // (b) Under Chapter XII-A, exemption under section 115F is available on proportionate reinvestment. Taxable LTCG works out to ₹9,95,772.
    },
    {
      question_id: "dt_aprmtp24_II_q5",
      chapter_name: [
        "Capital Gains"
      ],
      question: "Assuming for the purpose of this MCQ that Mr. Apoorv is a resident in India for the previous year 2023-24, what would be the amount of taxable capital gains on sale of debentures of Fix Ltd. in the hands of Mr. Apoorv?",
      options: [
        "₹ 13,53,000",
        "₹ 3,85,965",
        "₹ 9,95,772",
        "₹ 13,60,000"
      ],
      answer: 0 // (a) Being a resident, indexation benefit under section 48 is available. Taxable long-term capital gain is ₹13,53,000.
    }
  ]
},
{
  case_id: "dt_aprmtp24_II_cs2",
  case_chapter: [
    "Royalty",
    "Equalisation Levy",
    "Tax Deduction at Source (TDS)",
    "Double Taxation Avoidance Agreement (DTAA)"
  ],
  caseText: `
    <p><strong>Case Scenario II</strong></p>

    <p>Omega Inc., a Country F company, maintains an online web-platform through which it provides end user computer software through an End-user Licence Agreement (EULA). Trailor Ltd., an Indian company, has entered into a contract for ₹ 6.7 crores with Omega Inc., for the Financial Year 2023-24, which is approved by the Central Government.</p>

    <p><strong>The broad terms of the EULA between the two companies are as follows-</strong></p>

    <p><strong>Grant of licence.</strong> Omega Inc. grants Trailor Ltd. a limited non-exclusive licence to install, use, access, display and run the click wrap web-based Computer Software (CWCS) on a single local hard disk(s) or other permanent storage media of one computer. Trailor Ltd. should not make CWCS available over a network where it could be used by multiple computers at the same time.</p>

    <p><strong>Reservation of rights and ownership.</strong> Omega Inc. reserves all rights not expressly granted to Trailor Ltd. in this EULA. The CWCS is protected by copyright and other intellectual property laws and treaties. Omega Inc. owns the title, copyright and other intellectual property rights in the CWCS. The CWCS is licenced (only for use and not any other purpose), not sold.</p>

    <p>Omega Inc. does not have any offices outside Country F.</p>

    <p><strong>Extract of Article 12 of India-Country F DTAA</strong></p>

    <p><strong>Royalties and Fees for Technical Services</strong></p>

    <ol>
      <li>Royalties and fees for technical services arising in a Contracting State and paid to a resident of the other Contracting State may be taxed in that other State.</li>

      <li>However, such royalties and fees for technical services may also be taxed in the Contracting State in which they arise and according to the laws of that Contracting State, but if the recipient is the beneficial owner of the royalties or fees for technical services, the tax so charged shall not exceed 10 per cent.</li>

      <li>The term <strong>"royalties"</strong> as used in this Article means payments of any kind received as a consideration for the use of, or the right to use:
        <ol type="a">
          <li>any copyright of a literary, artistic or scientific work, including cinematograph film or films or tapes used for radio or television broadcasting, any patent, trade mark, design or model, plan, secret formula or process, or for information concerning industrial, commercial or scientific experience, including gains derived from the alienation of any such right, property or information.</li>
        </ol>
      </li>
    </ol>

    <p><strong>Based on the facts of the above case scenario, choose the most appropriate answer to Q.6 to Q.9 below:</strong></p>
  `,
  questions: [
    {
      question_id: "dt_aprmtp24_II_q6",
      chapter_name: [
        "Royalty",
        "Tax Deduction at Source (TDS)",
        "DTAA"
      ],
      question: "Is Trailor Ltd., India required to deduct tax at source on the payment made to Omega Inc.? If yes, what amount of tax is required to be deducted at source on the said payment?",
      options: [
        "Yes, Trailor Ltd. is required to deduct tax at source of ₹ 1,42,14,720.",
        "No, Trailor Ltd. is not required to deduct tax at source.",
        "Yes, Trailor Ltd. is required to deduct tax at source of ₹ 2,84,29,440.",
        "Yes, Trailor Ltd. is required to deduct tax at source of ₹ 67,00,000."
      ],
      answer: 1 // (b) Payment for purchase of copyrighted article under the EULA is not royalty in view of the Supreme Court decision in Engineering Analysis Centre of Excellence Pvt. Ltd.; hence no TDS is deductible.
    },
    {
      question_id: "dt_aprmtp24_II_q7",
      chapter_name: [
        "Equalisation Levy"
      ],
      question: "Is equalisation levy attracted in respect of the consideration received by Omega Inc., Country F from Trailor Ltd.? If so, in whose hands and at what rate?",
      options: [
        "Omega Inc. has to pay equalisation levy @6% of the consideration.",
        "Trailor Ltd. is required to deduct equalisation levy @6% of the consideration.",
        "Trailor Ltd. is required to deduct equalisation levy @2% of the consideration.",
        "Omega Inc. has to pay equalisation levy @2% of the consideration."
      ],
      answer: 3 // (d) Omega Inc., being an e-commerce operator, is liable to equalisation levy @2% on e-commerce supply or services.
    },
    {
      question_id: "dt_aprmtp24_II_q8",
      chapter_name: [
        "Royalty",
        "Tax Deduction at Source (TDS)"
      ],
      question: "Would Trailor Ltd., India be required to deduct tax at source on the payment made to Omega Inc., if there was no DTAA between India and Country F? If so, what amount of tax is required to be deducted at source on the said payment?",
      options: [
        "Yes, Trailor Ltd. is required to deduct tax at source of ₹ 1,42,14,720.",
        "No, Trailor Ltd. is not required to deduct tax at source, since such sum is not taxable in the hands of Omega Inc.",
        "Yes, Trailor Ltd. is required to deduct tax at source of ₹ 2,84,29,440.",
        "Yes, Trailor Ltd. is required to deduct tax at source of ₹ 71,07,360."
      ],
      answer: 0 // (a) In the absence of a DTAA, the payment is taxable as royalty under the Income-tax Act and TDS is deductible accordingly.
    },
    {
      question_id: "dt_aprmtp24_II_q9",
      chapter_name: [
        "Equalisation Levy"
      ],
      question: "Is equalisation levy attracted in respect of the consideration received by Omega Inc., Country F from Trailor Ltd., if there is no DTAA between India and Country F? If so, in whose hands and at what rate?",
      options: [
        "Omega Inc. has to pay equalisation levy @6% of the consideration.",
        "Trailor Ltd. is required to pay equalisation levy @2% of the consideration.",
        "Omega Inc. has to pay equalisation levy @2% of the consideration.",
        "No, equalisation levy is not attracted."
      ],
      answer: 3 // (d) Equalisation levy is not attracted where the consideration is chargeable to tax as royalty under the Income-tax Act.
    }
  ]
},
{
  case_id: "dt_aprmtp24_II_cs3",
  case_chapter: [
    "Penalty",
    "Under-reported Income and Misreported Income",
    "Assessment",
    "Reassessment"
  ],
  caseText: `
    <p><strong>Case Scenario III</strong></p>

    <p>Sharma Pvt. Ltd. ("S") files its return of income for the P.Y. 2023-24 on 30th September 2024 declaring loss of ₹ 18,00,000. The rate of income-tax applicable to the company is 25%.</p>

    <p>The tax auditor of S, in his audit report submitted under section 44AB, has reported a disallowance of ₹ 2,80,000 towards personal expenditure of directors as no evidence was produced by S in support of this expenditure. However, S did not disallow the same in its computation and return of income.</p>

    <p>The return of income was processed by the Centralised Processing Centre making an addition of ₹ 2,80,000 towards personal expenditure and the loss under section 143(1) was computed at ₹ 15,20,000.</p>

    <p>The return of income was selected for scrutiny assessment and by order passed under section 143(3), the loss as per normal provisions was reduced to ₹ 11,60,000 by making an addition of ₹ 3,60,000.</p>

    <p>The assessment was reopened under section 147 and by order passed under section 147, the loss as per preceding order under section 143(3) was converted into income of ₹ 3,20,000.</p>

    <p><strong>Based on the facts of the above case scenario, choose the most appropriate answer to Q.10 to Q.12 below:</strong></p>
  `,
  questions: [
    {
      question_id: "dt_aprmtp24_II_q10",
      chapter_name: [
        "Penalty",
        "Under-reported Income and Misreported Income"
      ],
      question: "Which of the following statements regarding penalty on addition of ₹ 2,80,000 towards personal expenditure is correct?",
      options: [
        "(i) and (iv)",
        "(ii) and (iv)",
        "(iv) only",
        "(iii) only"
      ],
      answer: 3 // (d) Since the addition is an adjustment made under section 143(1)(a), no penalty under section 270A is leviable in respect of such adjustment.
    },
    {
      question_id: "dt_aprmtp24_II_q11",
      chapter_name: [
        "Penalty",
        "Reassessment"
      ],
      question: "What is the amount of penalty leviable under section 270A as a consequence of assessment under section 147, if the addition was not on account of misreporting?",
      options: [
        "₹ 1,09,200",
        "₹ 1,92,400",
        "₹ 41,600",
        "₹ 1,85,000"
      ],
      answer: 1 // (b) Penalty for under-reporting of income is 50% of the tax payable on under-reported income, which works out to ₹1,92,400.
    },
    {
      question_id: "dt_aprmtp24_II_q12",
      chapter_name: [
        "Penalty",
        "Immunity from Penalty"
      ],
      question: "Assuming that the additions made in the order under section 147 are not on account of misreporting of income but only on account of under-reporting, S seeks to claim immunity from imposition of penalty under section 270A and initiation of proceedings under section 276C of the Act by filing an application before the Assessing Officer. What are the other conditions that need to be satisfied by S in this regard?",
      options: [
        "(ii) and (iv)",
        "(i) and (iv)",
        "(i) and (iii)",
        "(ii) and (iii)"
      ],
      answer: 1 // (b) Immunity is available where tax and interest as per the order are paid within the prescribed time and no appeal has been filed against the assessment order.
    }
  ]
},
{
  case_id: "dt_sepmtp24_I_cs1",
  case_chapter: [
    "Interest Limitation",
    "Transfer Pricing",
    "Secondary Adjustment",
    "Associated Enterprises",
    "International Transaction"
  ],
  caseText: `
    <p><strong>Case Scenario I</strong></p>

    <p>On 1.4.2023, Focus Ltd., an Indian company, borrowed ₹ 50 crores @ 9.5% p.a. from Max Inc., a US entity, thereby increasing its total borrowings to ₹ 65 crores. The said loan is guaranteed by Hik Inc., another US entity. The place of effective management of both Max Inc. and Hik Inc. is in the USA. The book value of total assets of Focus Ltd. is ₹ 180 crores.</p>

    <p>Focus Ltd. imported turbo equipment worth ₹ 30 crores from Hik Inc. Import duty of ₹ 4.50 crores on the same was paid by Focus Ltd. The equipment was sold to T Ltd., an unrelated party for ₹ 40 crores. Normal GP margin of Focus Ltd. in similar uncontrolled transaction is 20%.</p>

    <p>Net profit of Focus Ltd. of A.Y. 2024-25 was ₹ 8 crores after debiting interest of ₹ 6 crores (out of which ₹ 1.25 crores interest pertaining to local borrowings), depreciation of ₹ 2.5 crores and income-tax of ₹ 1.5 crores.</p>

    <p><strong>Based on the facts of the above case scenario, choose the most appropriate answer to Q.1 to Q.6 below:</strong></p>
  `,
  questions: [
    {
      question_id: "dt_sepmtp24_I_q1",
      chapter_name: [
        "Interest Limitation",
        "Section 94B"
      ],
      question: "What is the amount of interest to be allowed in the computation of total income of Focus Ltd. for A.Y.2024-25, if for A.Y.2023-24 there was an interest expenditure disallowed to the extent of ₹ 4 crores under section 94B?",
      options: [
        "₹ 6,65,00,000",
        "₹ 4,75,00,000",
        "₹ 6,00,00,000",
        "₹ 3,65,00,000"
      ],
      answer: 0 // (a)
    },
    {
      question_id: "dt_sepmtp24_I_q2",
      chapter_name: [
        "Transfer Pricing",
        "Arm's Length Price"
      ],
      question: "The transfer pricing adjustment for the arm's length purchase price to be made in the computation of total income of Focus Ltd. for A.Y.2024-25 would be-",
      options: [
        "₹ 3,00,00,000",
        "₹ 2,50,00,000",
        "₹ 2,00,00,000",
        "No adjustment is required, since transfer pricing adjustment cannot result in reduction of income"
      ],
      answer: 1 // (b)
    },
    {
      question_id: "dt_sepmtp24_I_q3",
      chapter_name: [
        "Transfer Pricing",
        "Secondary Adjustment"
      ],
      question: "If Focus Ltd. repatriated the excess money on 31.03.2025, what will be the interest income that would be added to its total income of A.Y.2025-26, if SBI's one-year marginal cost of lending rate is 11.25% on 1.4.2024 and 10.25% on 1.4.2025? Assume that Focus Ltd. suo motu made the primary adjustment in its books of account and filed its return for A.Y.2024-25 on 30.11.2024.",
      options: [
        "₹ 12,01,712",
        "₹ 12,08,333",
        "₹ 9,32,363",
        "₹ 8,49,486"
      ],
      answer: 0 // (a)
    },
    {
      question_id: "dt_sepmtp24_I_q4",
      chapter_name: [
        "Transfer Pricing",
        "Secondary Adjustment"
      ],
      question: "If Focus Ltd. decides not to repatriate the excess money and instead, pay additional income-tax on the entire excess money, then, what would be the additional income-tax payable?",
      options: [
        "₹ 62,89,920",
        "₹ 52,41,600",
        "₹ 41,93,280",
        "₹ 53,87,200"
      ],
      answer: 1 // (b)
    },
    {
      question_id: "dt_sepmtp24_I_q5",
      chapter_name: [
        "Transfer Pricing",
        "Secondary Adjustment"
      ],
      question: "If Focus Ltd. decides to pay additional income-tax on the entire excess money on 15.03.2025, should interest be calculated and added to its total income of A.Y.2025-26? If so, what is the amount to be added? Assume that SBI one-year marginal cost of lending rate is 11.25% on 1.4.2024 and 10.25% on 1.4.2025.",
      options: [
        "No, since it has paid additional income-tax on the entire excess money in the P.Y.2024-25.",
        "Yes; ₹ 9,70,890",
        "Yes; ₹ 10,42,808",
        "Yes; ₹ 8,09,075"
      ],
      answer: 2 // (c)
    },
    {
      question_id: "dt_sepmtp24_I_q6",
      chapter_name: [
        "Associated Enterprises",
        "International Transaction"
      ],
      question: "In addition to the facts given in the case scenario, assuming that (i) on 23.08.2023, Focus Ltd. has entered into an agreement for sale of turbo equipment with Y Ltd., an Indian company not related to Focus Ltd.; (ii) Y Ltd. had already entered into an agreement on 21.8.2023 for the sale of the same goods to Kite Inc. (unrelated to Y Ltd.), a UK entity whose place of effective management is also in the UK; and (iii) Focus Ltd. holds shares carrying 28% voting power in Kite Inc. With which of the following enterprises would a transaction with Focus Ltd. be considered an international transaction or a deemed international transaction?",
      options: [
        "Hik Inc. and Kite Inc.",
        "Max Inc. and Kite Inc.",
        "Hik Inc., Kite Inc. and Y Ltd.",
        "Max Inc., Hik Inc. and Kite Inc."
      ],
      answer: 2 // (c)
    }
  ]
},
{
  case_id: "dt_sepmtp24_I_cs2",
  case_chapter: [
    "Survey",
    "Powers of Income-tax Authority"
  ],
  caseText: `
    <p><strong>Case Scenario II</strong></p>

    <p>The Assessing Officer surveyed Surabhi & Hotels, which was within his jurisdiction, at 11:30 p.m. on 15.8.2023 for the purpose of obtaining information which may be relevant to the proceedings under the Income-tax Act, 1961. The restaurant is kept open for business every day between 11 a.m. and 12 a.m.</p>

    <p>On 25.8.2023, the Assessing Officer entered Suraj & Hotels, which was also within his jurisdiction, at 9:15 p.m. for the purpose of collecting information which may be useful for the purposes of the Income-tax Act, 1961. This restaurant is kept open for business every day between 7 a.m. and 10:30 p.m.</p>

    <p>In both the above cases, the Assessing Officer impounded and retained in his custody for a period of 13 days (exclusive of 3 holidays), books of account and other documents inspected by him, after recording reasons for doing so. The Assessing Officer, however, did not take prior permission from income-tax authority equivalent to Chief Commissioner or above for doing so.</p>

    <p>The owners of these restaurants claim that the Assessing Officer could not enter the restaurants after sunset and take away with him the books of account kept at the restaurants. The owners also claimed that the Assessing Officer ought to have obtained the prior approval of income-tax authority equivalent to Chief Commissioner or above before entering the restaurants.</p>

    <p><strong>Based on the facts of the above case scenario, choose the most appropriate answer to Q.7 to Q.11 below:</strong></p>
  `,
  questions: [
    {
      question_id: "dt_sepmtp24_I_q7",
      chapter_name: [
        "Survey"
      ],
      question: "Is the action of the Assessing Officer entering Surabhi & Hotels at 11:30 p.m. valid?",
      options: [
        "Not valid, since Assessing Officer entered the restaurant after the sunset.",
        "Valid, since Assessing Officer entered during the hours at which such place is open for the conduct of business and prior permission of higher authorities is not required to be obtained for survey.",
        "Not valid, since prior permission of income-tax authority equivalent to Chief Commissioner or above is not obtained by the Assessing Officer though he entered during the hours at which such place is open for the conduct of business.",
        "Not valid, since Assessing Officer entered after the sunset and prior permission of Chief Commissioner or above was not obtained."
      ],
      answer: 2 // (c)
    },
    {
      question_id: "dt_sepmtp24_I_q8",
      chapter_name: [
        "Survey",
        "TDS/TCS Survey"
      ],
      question: "Would your answer to Question No. 7 change if the Assessing Officer had surveyed Surabhi & Hotels only for the purpose of verifying whether tax has been deducted/collected at source in accordance with the provisions of the Income-tax Act, 1961?",
      options: [
        "The action of Assessing Officer is not valid, since he entered the place after sunset and permission of income-tax authority equivalent to Chief Commissioner or above is not obtained.",
        "The action of Assessing Officer is valid, since he entered the place during the hours at which such place is open for conduct of business and permission of Chief Commissioner or above authorities not required to be obtained.",
        "The action of Assessing Officer is not valid, since he has not obtained the permission of Chief Commissioner.",
        "The action of Assessing Officer is not valid, since he entered the place after 10 p.m."
      ],
      answer: 0 // (a)
    },
    {
      question_id: "dt_sepmtp24_I_q9",
      chapter_name: [
        "Survey"
      ],
      question: "Is the action of the Assessing Officer entering Suraj & Hotels at 9:15 p.m. valid?",
      options: [
        "Not valid, since Assessing Officer entered the restaurant after the sunset.",
        "Valid, since Assessing Officer entered during the hours at which such place is open for the conduct of business and prior permission of higher authorities is not required to be obtained.",
        "Not valid, since prior permission of Chief Commissioner or above is not obtained by the Assessing Officer though he entered the place during the hours at which such place is open for the conduct of business.",
        "Not valid, since Assessing Officer entered after the sunset and prior permission of Chief Commissioner or above is not obtained."
      ],
      answer: 1 // (b)
    },
    {
      question_id: "dt_sepmtp24_I_q10",
      chapter_name: [
        "Survey",
        "Impounding of Books"
      ],
      question: "Is the action of the Assessing Officer in impounding and retaining in his custody books of account and other documents of Surabhi & Hotels, after recording reasons for doing so, valid if prior permission from income-tax authority equivalent to Chief Commissioner or above has been taken only for the purpose of survey and not for retaining books of accounts etc.?",
      options: [
        "The action of Assessing Officer is not valid, since prior approval of Chief Commissioner or above authority is not obtained for retaining the impounded books of account etc.",
        "The action of Assessing Officer is valid.",
        "The action of Assessing Officer is not valid, since he cannot retain impounded books of accounts for period exceeding 15 days (inclusive of holidays) without prior approval of Chief Commissioner or above authority.",
        "The action of Assessing Officer is not valid, since he cannot retain impounded books of accounts or other documents for a period exceeding 10 days (exclusive of holidays)."
      ],
      answer: 1 // (b)
    },
    {
      question_id: "dt_sepmtp24_I_q11",
      chapter_name: [
        "Survey",
        "TDS/TCS Survey"
      ],
      question: "Would your answer to Question No. 10 change if the Assessing Officer had surveyed Surabhi & Hotels only for the purpose of verifying whether tax has been deducted/collected at source in accordance with the provisions of the Income-tax Act, 1961?",
      options: [
        "The action of Assessing Officer is not valid, since prior approval of Commissioner or above is not obtained for retaining impounded books of accounts.",
        "The action of Assessing Officer is valid.",
        "The action of Assessing Officer is not valid, since he cannot impound or retain books of accounts or other documents.",
        "The action of Assessing Officer is not valid, since he cannot retain impounded books of accounts or other documents for a period exceeding 10 days."
      ],
      answer: 2 // (c)
    }
  ]
},

  
];