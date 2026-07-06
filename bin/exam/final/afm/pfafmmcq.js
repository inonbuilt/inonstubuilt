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
},
{
  case_id: "afm_mtpapr24ii_cs1",
  case_chapter: ["Strategic Financial Decision Making"],
  caseText: `
    <p>During one business meeting at XYZ Ltd., one of the member pointed out that while evaluating the performance of any company one should not only see its Operating Income but should also analyse its Capital structure as well. Weighted Average Cost of Capital changes on the basis of capital structure keeping all other factors unchanged.</p>
    <p>He presented data relating to 3 companies Alpha Ltd., Beta Ltd. and Gama Ltd. whose operating Income are equal, but their capital structure is different.</p>
    <p>The following information relating to these 3 companies is as follows:</p>
    <p style="text-align: right; padding-right: 20px;">(in ₹ '000)</p>
    <div style="overflow-x:auto;">
      <table border="1" cellpadding="6" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: center;">
        <thead>
          <tr>
            <th style="text-align: left;">Particulars</th>
            <th>Alpha Ltd.</th>
            <th>Beta Ltd.</th>
            <th>Gama Ltd.</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align: left;">Total invested capital</td>
            <td>20,00,000</td>
            <td>20,00,000</td>
            <td>20,00,000</td>
          </tr>
          <tr>
            <td style="text-align: left;">Debt/Assets ratio</td>
            <td>0.8</td>
            <td>0.5</td>
            <td>0.2</td>
          </tr>
          <tr>
            <td style="text-align: left;">Shares outstanding</td>
            <td>61,000</td>
            <td>83,000</td>
            <td>1,00,000</td>
          </tr>
          <tr>
            <td style="text-align: left;">Pre tax Cost of Debt</td>
            <td>16%</td>
            <td>13%</td>
            <td>15%</td>
          </tr>
          <tr>
            <td style="text-align: left;">Cost of Equity</td>
            <td>26%</td>
            <td>22%</td>
            <td>20%</td>
          </tr>
          <tr>
            <td style="text-align: left;">Operating Income (EBIT)</td>
            <td>5,00,000</td>
            <td>5,00,000</td>
            <td>5,00,000</td>
          </tr>
        </tbody>
      </table>
    </div>
    <br>
    <p>The Tax rate is uniform 35% in all cases. The industry PE ratio is 11X.</p>
    <p><strong>On the basis of above information, choose the most appropriate answer to the MCQs.</strong></p>
  `,
  questions: [
    {
      question_id: "afm_mtpapr24ii_cs1_1",
      chapter_name: ["Strategic Financial Decision Making"],
      question: "The weighted average cost of capital of Alpha Ltd. shall approximately be ………………..",
      options: [
        "13.520%",
        "15.225%",
        "17.950%",
        "18.000%"
      ],
      answer: 0
    },
    {
      question_id: "afm_mtpapr24ii_cs1_2",
      chapter_name: ["Strategic Financial Decision Making"],
      question: "The Economic Value Added (EVA) for Beta Ltd. is…………….",
      options: [
        "₹ 54600 Thousand",
        "₹ 20500 Thousand",
        "(-) ₹ 34000 Thousand",
        "₹ 21500 Thousand"
      ],
      answer: 1
    },
    {
      question_id: "afm_mtpapr24ii_cs1_3",
      chapter_name: ["Strategic Financial Decision Making"],
      question: "The price per share of Gama Ltd. shall be ……………..",
      options: [
        "₹ 28.60",
        "₹ 31.90",
        "₹ 31.46",
        "₹ 29.45"
      ],
      answer: 2
    },
    {
      question_id: "afm_mtpapr24ii_cs1_4",
      chapter_name: ["Strategic Financial Decision Making"],
      question: "The estimated market capitalisation for Alpha Ltd. is…………….",
      options: [
        "₹ 26,47,700 Thousand",
        "₹ 31,46,000 Thousand",
        "₹ 17,44,600 Thousand",
        "₹ 23,73,800 Thousand"
      ],
      answer: 2
    },
    {
      question_id: "afm_mtpapr24ii_cs1_5",
      chapter_name: ["Strategic Financial Decision Making"],
      question: "Earning per share of Beta Ltd. is……………..",
      options: [
        "₹ 2.60",
        "₹ 2.90",
        "₹ 2.86",
        "₹ 2.15"
      ],
      answer: 1
    }
  ]
},
{
  case_id: "afm_mtpapr24ii_cs3",
  case_chapter: ["International Financial Management"],
  caseText: `
    <p>A US parent company has subsidiaries in France, Germany, UK and Italy. The amounts due to and from the affiliates is converted into a common currency viz. US dollar and entered in the following matrix.</p>
    
    <p><strong>Inter Subsidiary Payments Matrix (US $ Thousands)</strong></p>
    <table border="1" cellspacing="0" cellpadding="5" style="text-align: center;">
      <thead>
        <tr>
          <th>Receiving affiliate</th>
          <th>France</th>
          <th>Germany</th>
          <th>UK</th>
          <th>Italy</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="text-align: left;">France</td>
          <td>---</td>
          <td>80</td>
          <td>120</td>
          <td>200</td>
          <td>400</td>
        </tr>
        <tr>
          <td style="text-align: left;">Germany</td>
          <td>120</td>
          <td>---</td>
          <td>80</td>
          <td>160</td>
          <td>360</td>
        </tr>
        <tr>
          <td style="text-align: left;">UK</td>
          <td>160</td>
          <td>120</td>
          <td>---</td>
          <td>140</td>
          <td>420</td>
        </tr>
        <tr>
          <td style="text-align: left;">Italy</td>
          <td>200</td>
          <td>60</td>
          <td>120</td>
          <td>---</td>
          <td>380</td>
        </tr>
        <tr style="font-weight: bold;">
          <td style="text-align: left;">Total</td>
          <td>480</td>
          <td>260</td>
          <td>320</td>
          <td>500</td>
          <td>1560</td>
        </tr>
      </tbody>
    </table>

    <p>The treasurer of US Parent company is suggesting that by applying Multilateral Netting system the company can save a lot of transfer/ exchange costs. The company’s Board agreed with Treasurer’s proposal.</p>
    <p><strong>From the above case scenario, choose the most appropriate answer of following MCQs.</strong></p>
  `,
  questions: [
    {
      question_id: "afm_mtpapr24ii_cs3_1",
      chapter_name: ["International Financial Management"],
      question: "Before applying Multilateral Netting it is necessary to apply…………&hellip;&hellip;.",
      options: [
        "Unilateral Netting",
        "Bilateral Netting",
        "Multilateral Netting",
        "Interest Rate Swapping"
      ],
      answer: 1
    },
    {
      question_id: "afm_mtpapr24ii_cs3_2",
      chapter_name: ["International Financial Management"],
      question: "Through Multinational Netting these transfers will be reduced to &hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;.",
      options: [
        "$ 50,000",
        "$ 100,000",
        "$ 150,000",
        "$ 200,000"
      ],
      answer: 3
    },
    {
      question_id: "afm_mtpapr24ii_cs3_3",
      chapter_name: ["International Financial Management"],
      question: "The Net Payment/ Net Receipts for France after netting off shall be&hellip;&hellip;&hellip;&hellip;.",
      options: [
        "Net Receipt $ 40,000",
        "Net Payment $ 80,000",
        "Net Payment $ 40,000",
        "Net Receipt $ 80,000"
      ],
      answer: 1
    },
    {
      question_id: "afm_mtpapr24ii_cs3_4",
      chapter_name: ["International Financial Management"],
      question: "The Net Payment/ Net Receipts for Italy after netting off shall be&hellip;&hellip;&hellip;&hellip;.",
      options: [
        "Net Receipt $ 60,000",
        "Net Payment $ 120,000",
        "Net Payment $ 60,000",
        "Net Receipt $ 120,000"
      ],
      answer: 1
    },
    {
      question_id: "afm_mtpapr24ii_cs3_5",
      chapter_name: ["International Financial Management"],
      question: "Suppose if the transfer charges are 0.01% of the amount transferred then by applying multilateral netting techniques there will be reduction in overall cost of transfer by &hellip;&hellip;&hellip;&hellip;..",
      options: [
        "US $ 136",
        "US $ 156",
        "US $ 1,360",
        "US $ 1,560"
      ],
      answer: 0
    }
  ]
},
{
  case_id: "afm_mtpapr24ii_cs2",
  case_chapter: ["Foreign Exchange Exposure and Risk Management"],
  caseText: `
    <p>On 1 October 2023 Mr. X an exporter enters into a forward contract with a BNP Bank to sell US$ 1,00,000 on 31 December 2023 at ₹ 85.40/$. However, due to the request of the importer, Mr. X received the amount on 28 November 2023. Mr. X requested the bank the take delivery of the remittance on 30 November 2023 i.e., before due date. The inter-banking rates on 28 November 2023 was as follows:</p>
    
    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Particulars</th>
        <th>Value</th>
      </tr>
      <tr>
        <td>Spot</td>
        <td>₹ 85.22/85.27</td>
      </tr>
      <tr>
        <td>One Month Premium</td>
        <td>10/15</td>
      </tr>
    </table>

    <p><em>Note: (1) Consider 365 days in a year. (2) Prevailing Prime Lending Rate is 12%</em></p>
    <p><strong>Based on above case scenario, choose the most appropriate answer of the following:</strong></p>
  `,
  questions: [
    {
      question_id: "afm_mtpapr24ii_cs2_1",
      chapter_name: ["Foreign Exchange Exposure and Risk Management"],
      question: "The bank may accept the request of customer of delivery before due date of forward contract provided the customer is ready to bear the loss if any consisting of…………",
      options: [
        "Swap Difference",
        "Interest on Outlay of Fund",
        "Swap Difference Plus Interest on Outlay of Fund",
        "Fixed Charges Plus Swap Difference and Interest on Outlay of Fund"
      ],
      answer: 3
    },
    {
      question_id: "afm_mtpapr24ii_cs2_2",
      chapter_name: ["Foreign Exchange Exposure and Risk Management"],
      question: "In case of early delivery bank shall charge interest on outlay of fund at a rate not less than……………..",
      options: [
        "8%",
        "10%",
        "12%",
        "18%"
      ],
      answer: 2
    },
    {
      question_id: "afm_mtpapr24ii_cs2_3",
      chapter_name: ["Foreign Exchange Exposure and Risk Management"],
      question: "Swap Difference for US$ 1,00,000 is………………..",
      options: [
        "₹ 5,000",
        "₹ 20,000",
        "₹ 18,000",
        "₹ 8,000"
      ],
      answer: 1
    },
    {
      question_id: "afm_mtpapr24ii_cs2_4",
      chapter_name: ["Foreign Exchange Exposure and Risk Management"],
      question: "Interest on outlay of funds shall be approximately…………&hellip;&hellip;&hellip;&hellip;&hellip;.",
      options: [
        "₹ 92 payable by X",
        "₹ 183 payable by X",
        "₹ 183 payable by Bank",
        "₹ 122 payable by Bank"
      ],
      answer: 1
    },
    {
      question_id: "afm_mtpapr24ii_cs2_5",
      chapter_name: ["Foreign Exchange Exposure and Risk Management"],
      question: "Net inflow to Mr. X is approximately&hellip;&hellip;&hellip;&hellip;&hellip;..",
      options: [
        "₹ 85,42,183",
        "₹ 85,20,000",
        "₹ 85,19,817",
        "₹ 85,40,000"
      ],
      answer: 2
    }
  ]
},
];
