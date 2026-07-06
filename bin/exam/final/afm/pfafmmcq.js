const mcqData = [
  {
  case_id: "afm_mcq_cs1",
  case_chapter: ["Mutual Funds"],
  caseText: `
    <p>Mr. Y has invested in the three mutual funds (MF) as per the following details:</p>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Particulars</th>
        <th>MF ‘X’</th>
        <th>MF ‘Y’</th>
        <th>MF ‘Z’</th>
      </tr>
      <tr>
        <td>Amount of Investment (₹)</td>
        <td>4,00,000</td>
        <td>8,00,000</td>
        <td>4,00,000</td>
      </tr>
      <tr>
        <td>Net Asset Value (NAV) at the time of purchase (₹)</td>
        <td>10.30</td>
        <td>10.10</td>
        <td>10</td>
      </tr>
      <tr>
        <td>Dividend Received up to 31.03.2023 (₹)</td>
        <td>9,000</td>
        <td>0</td>
        <td>6,000</td>
      </tr>
      <tr>
        <td>NAV as on 31.03.2023 (₹)</td>
        <td>10.35</td>
        <td>10</td>
        <td>10.30</td>
      </tr>
      <tr>
        <td>Effective Yield per annum as on 31.03.2023 (percent)</td>
        <td>9.66</td>
        <td>-11.66</td>
        <td>24.15</td>
      </tr>
    </table>

    <p>Assume 1 Year = 365 days.</p>
    <p>On the basis of above information, choose the most appropriate answer to the following questions:</p>
  `,
  questions: [
    {
      question_id: "afm_mcq_cs1_1",
      question: "Total NAV of MF ‘Y’ as on 31.03.2023 would be approximately ……………",
      options: [
        "₹ 401941.73",
        "₹ 412000.00",
        "₹ 792079.20",
        "₹ 82500.00"
      ],
      answer: 2
    },
    {
      question_id: "afm_mcq_cs1_2",
      question: "Total Yield of MF ‘X’ in terms of ₹ would be approximately ……………..",
      options: [
        "₹ 10941.73",
        "₹ 7,920.80",
        "₹ 18,000.00",
        "₹ 12450.45"
      ],
      answer: 0
    },
    {
      question_id: "afm_mcq_cs1_3",
      question: "Number of days for which MF ‘X’ is held would be approximately………….",
      options: [
        "31 Days",
        "68 Days",
        "103 Days",
        "85 Days"
      ],
      answer: 2
    },
    {
      question_id: "afm_mcq_cs1_4",
      question: "Number of days for which MF ‘Y’ is held would be………….",
      options: [
        "31 Days",
        "68 Days",
        "103 Days",
        "85 Days"
      ],
      answer: 0
    }
  ]
},

{
  case_id: "afm_mcq_cs2",
  case_chapter: ["Corporate Finance", "Convertible Securities"],
  caseText: `
    <p>ABC Ltd. is planning to expand its business and therefore raising fund by issuing a convertible bond of ₹ 10 crore. An investor “Mr. X” is interested to invest in the bond of ABC Ltd. Mr. X has following data related to the convertible bond.</p>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Particulars</th>
        <th>Value</th>
      </tr>
      <tr>
        <td>Face Value</td>
        <td>₹ 250</td>
      </tr>
      <tr>
        <td>Coupon Rate</td>
        <td>12%</td>
      </tr>
      <tr>
        <td>No. of shares per bond</td>
        <td>20</td>
      </tr>
      <tr>
        <td>Market price of share</td>
        <td>₹ 12</td>
      </tr>
      <tr>
        <td>Straight value of bond</td>
        <td>₹ 235</td>
      </tr>
      <tr>
        <td>Market price of convertible bond</td>
        <td>₹ 265</td>
      </tr>
      <tr>
        <td>Maturity</td>
        <td>5 Years</td>
      </tr>
    </table>

    <p><strong>On the basis of above information, choose the most appropriate answer to the MCQs.</strong></p>
  `,
  questions: [
    {
      question_id: "afm_mcq_cs2_1",
      chapter_name: ["Convertible Securities"],
      question: "The percentage of downside risk of the bond is approximately……………..",
      options: [
        "10.42%",
        "6.38%",
        "2.13%",
        "12.77%"
      ],
      answer: 3
    },
    {
      question_id: "afm_mcq_cs2_2",
      chapter_name: ["Convertible Securities"],
      question: "The conversion premium in percentage term of the bond is……………..",
      options: [
        "12.77%",
        "10.42%",
        "2.18%",
        "13.45%"
      ],
      answer: 1
    },
    {
      question_id: "afm_mcq_cs2_3",
      chapter_name: ["Convertible Securities"],
      question: "The conversion parity price of the stock is…………….",
      options: [
        "₹ 11.75",
        "₹ 12.00",
        "₹ 13.25",
        "₹ 12.50"
      ],
      answer: 2
    },
    {
      question_id: "afm_mcq_cs2_4",
      chapter_name: ["Convertible Securities"],
      question: "If he wants a yield of 15% the maximum price he should be ready to pay for is…………… .",
      options: [
        "217.41",
        "224.81",
        "240.00",
        "232.32"
      ],
      answer: 1
    }
  ]
},

{
  case_id: "afm_mcq_cs4",
  case_chapter: ["Mergers and Acquisitions", "Valuation"],
  caseText: `
    <p>AES Ltd. wants to acquire DNF Ltd. and has offered a swap ratio of 1:2 (0.5 shares for every one share of DNF Ltd.). Following information is provided:</p>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Particulars</th>
        <th>AES Ltd.</th>
        <th>DNF Ltd.</th>
      </tr>
      <tr>
        <td>Profit after tax</td>
        <td>₹ 36,00,000</td>
        <td>₹ 7,20,000</td>
      </tr>
      <tr>
        <td>Equity shares outstanding</td>
        <td>12,00,000</td>
        <td>3,60,000</td>
      </tr>
      <tr>
        <td>PE Ratio</td>
        <td>10 times</td>
        <td>7 times</td>
      </tr>
      <tr>
        <td>Market price per share</td>
        <td>₹ 30</td>
        <td>₹ 14</td>
      </tr>
    </table>

    <p><strong>On the basis of above information, choose the most appropriate answer to the MCQs.</strong></p>
  `,
  questions: [
    {
      question_id: "afm_mcq_cs4_1",
      chapter_name: ["Mergers and Acquisitions"],
      question: "The number of equity shares to be issued by AES Ltd. for acquisition of DNF Ltd. would be………………",
      options: [
        "1,68,000",
        "1,80,000",
        "2,40,000",
        "3,00,000"
      ],
      answer: 1
    },
    {
      question_id: "afm_mcq_cs4_2",
      chapter_name: ["Mergers and Acquisitions"],
      question: "The EPS of AES Ltd. after the acquisition would be………………",
      options: [
        "₹ 2",
        "₹ 3",
        "₹ 3.13",
        "₹ 4.00"
      ],
      answer: 2
    },
    {
      question_id: "afm_mcq_cs4_3",
      chapter_name: ["Mergers and Acquisitions"],
      question: "The equivalent earnings per share of DNF Ltd. would be……………..",
      options: [
        "₹ 1",
        "₹ 1.50",
        "₹ 1.57",
        "₹ 2.00"
      ],
      answer: 2
    },
    {
      question_id: "afm_mcq_cs4_4",
      chapter_name: ["Mergers and Acquisitions"],
      question: "If AES Ltd. PE multiple remains unchanged then its expected market price per share after the acquisition would be………………",
      options: [
        "₹ 14",
        "₹ 30",
        "₹ 31.30",
        "₹ 40.00"
      ],
      answer: 2
    }
  ]
}
];
