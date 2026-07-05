const mcqData = [
  {
    case_id: "afm_mcq_cs1",
    case_chapter: ["Foreign Exchange Exposure", "Derivatives"],
    caseText: `
    <p>ABC Ltd., an Indian export company, has exported goods to a US client worth USD 500,000. The payment is due in 3 months. The current spot rate is USD 1 = ₹ 82.50. The 3-month forward rate is quoted at USD 1 = ₹ 83.10.</p>
    <p>To hedge its foreign exchange risk, the company is evaluating the forward market and the currency options market. The premium for a 3-month USD put option at a strike price of ₹ 82.80 is ₹ 0.40 per USD. Assume the cost of capital/interest rate is negligible for this short period.</p>
      <p><strong>Based on the above facts, answer the following questions:</strong></p>
    `,
    questions: [
      {
        question_id: "afm_mcq_cs1_1",
        chapter_name: ["Foreign Exchange Exposure"],
        question:
          "If ABC Ltd. decides to hedge using the forward market, what will be its total expected realization in INR after 3 months?",
        options: [
          "₹ 4,12,50,000",
          "₹ 4,15,50,000",
          "₹ 4,14,00,000",
          "₹ 4,17,50,000",
        ],
        answer: 1, // USD 500,000 * 83.10 = 4,15,50,000
      },
      {
        question_id: "afm_mcq_cs1_2",
        chapter_name: ["Derivatives"],
        question:
          "If ABC Ltd. hedges using the put option and the spot rate after 3 months turns out to be ₹ 82.00, what will be the net realization in INR (after deducting the option premium)?",
        options: [
          "₹ 4,12,00,000",
          "₹ 4,10,00,000",
          "₹ 4,14,00,000",
          "₹ 4,15,50,000",
        ],
        answer: 0, // Exercise option at 82.80. Realization = (82.80 - 0.40 premium) * 500,000 = 82.40 * 500,000 = 4,12,00,000
      },
      {
        question_id: "afm_mcq_cs1_3",
        chapter_name: ["Foreign Exchange Exposure"],
        question:
          "Which of the following hedging techniques gives the exporter protection against downside risk while retaining upside potential?",
        options: [
          "Forward Contract",
          "Money Market Hedge",
          "Currency Put Option",
          "Currency Futures",
        ],
        answer: 2,
      },
    ],
  },
  {
    case_id: "afm_mcq_cs2",
    case_chapter: ["Portfolio Management"],
    caseText: `
      <p>Mr. Sharma holds a portfolio consisting of two stocks: Stock A and Stock B. The expected return of Stock A is 12% with a standard deviation of 15%. The expected return of Stock B is 18% with a standard deviation of 25%. The correlation coefficient between the two stocks is 0.4.</p>
      <p>Mr. Sharma has invested 60% of his funds in Stock A and 40% in Stock B. The risk-free rate of return is currently 6%.</p>
    `,
    questions: [
      {
        question_id: "afm_mcq_cs2_1",
        chapter_name: ["Portfolio Management"],
        question: "What is the expected return of Mr. Sharma's portfolio?",
        options: ["14.4%", "15.0%", "13.8%", "16.2%"],
        answer: 0, // (0.6 * 12) + (0.4 * 18) = 7.2 + 7.2 = 14.4%
      },
      {
        question_id: "afm_mcq_cs2_2",
        chapter_name: ["Portfolio Management"],
        question:
          "If the correlation coefficient between Stock A and Stock B was -1, what would be the primary benefit to the portfolio?",
        options: [
          "Maximization of returns",
          "Complete elimination of systematic risk",
          "Reduction of unsystematic risk to the lowest possible level",
          "Increase in the portfolio's beta",
        ],
        answer: 2,
      },
    ],
  },
];
