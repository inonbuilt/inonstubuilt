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

{
  case_id: "afm_mtpsep24i_cs1",
  case_chapter: ["Financial Markets and Instruments"],
  caseText: `
    <p>Bank A is in need of fund for a period of 14 days. To meet this financial need on 20th September 2023, Bank A enters into an agreement with Bank B under which it will sell 10% Government of India Bonds issued on 1st January 2023 @ 5.65% for ₹ 8 crore (Face value is ₹ 10,000 per Bond).</p>

    <p>The clean price of the same Bond is ₹ 9,942 and the Initial Margin is 2%. The maturity date of the Bond is 31st December 2028.</p>

    <p><em>Note: Consider 360 days in a year and interest is payable annually.</em></p>

    <p><strong>Based on the above case scenario, choose the most appropriate answer to the following:</strong></p>
  `,
  questions: [
    {
      question_id: "afm_mtpsep24i_cs1_1",
      chapter_name: ["Financial Markets and Instruments"],
      question: "The arrangement entered into between Bank A and Bank B will be called…………",
      options: [
        "Call Money Arrangement",
        "Commercial Bill Arrangement",
        "Commercial Paper",
        "Repurchase Option"
      ],
      answer: 3
    },
    {
      question_id: "afm_mtpsep24i_cs1_2",
      chapter_name: ["Financial Markets and Instruments"],
      question: "Dirty Price of the Bond will approximately be…………",
      options: [
        "₹ 10,353",
        "₹ 10,670",
        "₹ 10,499",
        "₹ 10,816"
      ],
      answer: 1
    },
    {
      question_id: "afm_mtpsep24i_cs1_3",
      chapter_name: ["Financial Markets and Instruments"],
      question: "The start proceeds of the transaction shall be approximately…………",
      options: [
        "₹ 8,38,36,804",
        "₹ 8,36,53,000",
        "₹ 8,58,36,804",
        "₹ 8,48,52,585"
      ],
      answer: 1
    },
    {
      question_id: "afm_mtpsep24i_cs1_4",
      chapter_name: ["Financial Markets and Instruments"],
      question: "The second leg of the transaction shall be approximately…………",
      options: [
        "₹ 8,38,36,804",
        "₹ 8,36,53,000",
        "₹ 8,58,36,804",
        "₹ 8,48,52,585"
      ],
      answer: 0
    },
    {
      question_id: "afm_mtpsep24i_cs1_5",
      chapter_name: ["Financial Markets and Instruments"],
      question: "The amount of Accrued Interest per Bond shall be approximately…………",
      options: [
        "₹ 728",
        "₹ 720",
        "₹ 734",
        "₹ 714"
      ],
      answer: 0
    }
  ]
},
{
  case_id: "afm_mtpsep24i_cs2",
  case_chapter: ["Mutual Funds"],
  caseText: `
    <p>The Asset Management Company (AMC) of a Mutual Fund has declared a dividend of 9.98% on the units under the dividend reinvestment plan for the year ended 31st March 2021. The investors are issued additional units for the dividend at the closing Net Asset Value (NAV) for the year as per the conditions of the scheme.</p>

    <p>The closing NAV was ₹ 24.95 as on 31st March 2021. An investor, Mr. X, holding 20,800 units at the year-end had made the investment before the declaration of dividend at the rate of opening NAV plus an entry load of ₹ 0.04. The NAV appreciated by 25% during the year.</p>

    <p><em>Note: Assume the face value of each unit is ₹ 10.00.</em></p>

    <p><strong>Based on the above case scenario, choose the most appropriate answer to the following:</strong></p>
  `,
  questions: [
    {
      question_id: "afm_mtpsep24i_cs2_1",
      chapter_name: ["Mutual Funds"],
      question: "The Opening NAV of the Asset Management Company shall be…………",
      options: [
        "₹ 20.24",
        "₹ 19.96",
        "₹ 18.75",
        "₹ 17.65"
      ],
      answer: 1
    },
    {
      question_id: "afm_mtpsep24i_cs2_2",
      chapter_name: ["Mutual Funds"],
      question: "The number of units purchased shall be…………",
      options: [
        "18,750",
        "17,500",
        "20,450",
        "20,000"
      ],
      answer: 3
    },
    {
      question_id: "afm_mtpsep24i_cs2_3",
      chapter_name: ["Mutual Funds"],
      question: "Original amount of the investment shall be…………",
      options: [
        "₹ 4,00,000",
        "₹ 6,50,000",
        "₹ 3,55,000",
        "₹ 5,65,000"
      ],
      answer: 0
    },
    {
      question_id: "afm_mtpsep24i_cs2_4",
      chapter_name: ["Mutual Funds"],
      question: "Which of the following statement(s) about Expense Ratio is/are incorrect?<br><br>(i) It is the percentage of income that is spent to run a Mutual Fund.<br>(ii) It includes advisory fees, travel costs, registrar fees, custodian fees, etc.<br>(iii) It includes brokerage costs for trading of portfolio.<br>(iv) High Expense Ratio can seriously undermine the performance of a Mutual Fund scheme.",
      options: [
        "(i), (ii), (iii)",
        "(i), (iii)",
        "Only (iii)",
        "Only (i)"
      ],
      answer: 2
    },
    {
      question_id: "afm_mtpsep24i_cs2_5",
      chapter_name: ["Mutual Funds"],
      question: "……………… considers and uses downside deviation instead of total standard deviation in the denominator.",
      options: [
        "Expense Ratio",
        "Sharpe Ratio",
        "Treynor Ratio",
        "Sortino Ratio"
      ],
      answer: 3
    }
  ]
},

{
  case_id: "afm_mtpsep24i_cs3",
  case_chapter: ["Derivatives"],
  caseText: `
    <p>You, as an investor, purchased a 4-month European Call Option on the equity shares of X Ltd. for a premium of ₹ 10 per share. The current market price of the share is ₹ 132 per share and the exercise price is ₹ 150 per share. You expect the share price at maturity to range between ₹ 120 and ₹ 190.</p>

    <p>The expected share prices of X Ltd. at the end of 4 months and their related probabilities are as follows:</p>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Expected Price (₹)</th>
        <td>120</td>
        <td>140</td>
        <td>160</td>
        <td>180</td>
        <td>190</td>
      </tr>
      <tr>
        <th>Probability</th>
        <td>0.05</td>
        <td>0.20</td>
        <td>0.50</td>
        <td>0.10</td>
        <td>0.15</td>
      </tr>
    </table>

    <p><strong>Based on the above case scenario, choose the most appropriate answer to the following:</strong></p>
  `,
  questions: [
    {
      question_id: "afm_mtpsep24i_cs3_1",
      chapter_name: ["Derivatives"],
      question: "Expected price of the share of X Ltd. at the end of 4 months shall be…………",
      options: [
        "₹ 160.00",
        "₹ 160.50",
        "₹ 158.00",
        "₹ 140.00"
      ],
      answer: 1
    },
    {
      question_id: "afm_mtpsep24i_cs3_2",
      chapter_name: ["Derivatives"],
      question: "Suppose the exercise price prevails at the end of 4 months. The value of the Call Option shall be…………",
      options: [
        "₹ 0",
        "₹ 18",
        "₹ 10",
        "₹ 14"
      ],
      answer: 0
    },
    {
      question_id: "afm_mtpsep24i_cs3_3",
      chapter_name: ["Derivatives"],
      question: "In case the option is held till maturity, the expected value of the Call Option shall be…………",
      options: [
        "₹ 0",
        "₹ 18",
        "₹ 10",
        "₹ 14"
      ],
      answer: 3
    },
    {
      question_id: "afm_mtpsep24i_cs3_4",
      chapter_name: ["Derivatives"],
      question: "In the given different scenarios of expected share prices of X Ltd. at the time of maturity, the option shall be in-the-money in…………scenarios.",
      options: [
        "Two",
        "Three",
        "Five",
        "In none of the scenarios"
      ],
      answer: 1
    },
    {
      question_id: "afm_mtpsep24i_cs3_5",
      chapter_name: ["Derivatives"],
      question: "In the given different scenarios of expected share prices of X Ltd. at the time of maturity, the option shall be at-the-money in…………scenarios.",
      options: [
        "Two",
        "Three",
        "Five",
        "In none of the scenarios"
      ],
      answer: 3
    }
  ]
},

{
  case_id: "AFM_MTPNOV24II_CS1",
  case_chapter: ["Credit Default Swaps"],
  caseText: `
    <p>Suppose you are a risk manager at a financial institution, and your company has loaned a significant amount of ₹ 500 crore to a company X Ltd. for a period of 3 years at 6-month MCLR plus 200 bps. You are concerned about X Ltd.'s ability to repay the debt due to recent market volatility. To protect your institution from potential default, you decide to purchase a Credit Default Swap (CDS) from ABC Bank Ltd. for the same notional amount at a premium quoted at 1% per year through cash settlement.</p>

    <p>On the respective reset dates for the same period actual MCLR interest rate comes out as follows:</p>

    <table border="1" cellspacing="0" cellpadding="5">
      <thead>
        <tr>
          <th>Reset</th>
          <th>MCLR</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>9.75%</td>
        </tr>
        <tr>
          <td>2</td>
          <td>10.00%</td>
        </tr>
        <tr>
          <td>3</td>
          <td>10.25%</td>
        </tr>
        <tr>
          <td>4</td>
          <td>10.35%</td>
        </tr>
        <tr>
          <td>5</td>
          <td>10.50%</td>
        </tr>
        <tr>
          <td>6</td>
          <td>10.60%</td>
        </tr>
      </tbody>
    </table>

    <p><strong>Based on the above case scenario, choose the most appropriate answer to the following:</strong></p>
  `,
  questions: [
    {
      question_id: "AFM_MTPNOV24II_CS1_1",
      chapter_name: ["Credit Default Swaps"],
      question: "The primary purpose of a Credit Default Swap (CDS) is...................",
      options: [
        "to increase the value of bonds.",
        "to protect against default risk of a debt obligation.",
        "to provide guaranteed profit to the buyer.",
        "to create a new form of loan."
      ],
      answer: 1
    },
    {
      question_id: "AFM_MTPNOV24II_CS1_2",
      chapter_name: ["Credit Default Swaps"],
      question: "Which of the following statements is true about CDS contracts?",
      options: [
        "CDS contracts cannot be used for speculation.",
        "CDS contracts are governed by government regulations.",
        "CDS contracts are private agreements between two parties.",
        "CDS contracts eliminate all risks for the buyer."
      ],
      answer: 2
    },
    {
      question_id: "AFM_MTPNOV24II_CS1_3",
      chapter_name: ["Credit Default Swaps"],
      question: "Which organization publishes the guidelines and rules for conducting Credit Default Swap transactions?",
      options: [
        "Federal Reserve",
        "International Swap and Derivative Association (ISDA)",
        "Securities and Exchange Commission (SEC)",
        "World Trade Organization (WTO)"
      ],
      answer: 1
    },
    {
      question_id: "AFM_MTPNOV24II_CS1_4",
      chapter_name: ["Credit Default Swaps"],
      question: "Assuming no default occurs, the total premium your company will pay during the designated loan period shall be........",
      options: [
        "₹ 5 crore",
        "₹ 10 crore",
        "₹ 15 crore",
        "₹ 30 crore"
      ],
      answer: 2
    },
    {
      question_id: "AFM_MTPNOV24II_CS1_5",
      chapter_name: ["Credit Default Swaps"],
      question: "Suppose if the lender defaults somewhere in the beginning of third year of loan (after payment of interest upto 2 years) and the market value of a reference loan falls to 75% of its par value, then ABC Bank will pay your company ...........in a cash settlement.",
      options: [
        "₹ 15 crore",
        "₹ 30 crore",
        "₹ 125 crore",
        "₹ 500 crore"
      ],
      answer: 2
    }
  ]
},
{
  case_id: "AFM_MTPNOV24II_CS2",
  case_chapter: ["Capital Budgeting"],
  caseText: `
    <p>XYZ Ltd. is a mid-sized manufacturing company that produces industrial equipment. The company is considering a new investment project—a state-of-the-art automated production line, which is expected to improve production efficiency.</p>

    <p>The details of the project are as follows:</p>

    <table border="1" cellspacing="0" cellpadding="5">
      <tbody>
        <tr>
          <th>Particulars</th>
          <th>Amount</th>
        </tr>
        <tr>
          <td>Initial Cost of the Project</td>
          <td>₹ 10,00,000</td>
        </tr>
        <tr>
          <td>Sales Price per Unit</td>
          <td>₹ 60</td>
        </tr>
        <tr>
          <td>Cost per Unit</td>
          <td>₹ 40</td>
        </tr>
        <tr>
          <td>Sales Volume - Year 1</td>
          <td>20,000 units</td>
        </tr>
        <tr>
          <td>Sales Volume - Year 2</td>
          <td>30,000 units</td>
        </tr>
        <tr>
          <td>Sales Volume - Year 3</td>
          <td>30,000 units</td>
        </tr>
      </tbody>
    </table>

    <p>The applicable discount rate is <strong>10% p.a.</strong></p>

    <p><strong>Based on the above case scenario, choose the most appropriate answer to the following:</strong></p>
  `,
  questions: [
    {
      question_id: "AFM_MTPNOV24II_CS2_1",
      chapter_name: ["Capital Budgeting"],
      question: "Sensitivity analysis helps to identify…………………..",
      options: [
        "the exact profitability of the project.",
        "the break-even point.",
        "the degree to which a change in each variable affects the NPV.",
        "the amount of investment required."
      ],
      answer: 2
    },
    {
      question_id: "AFM_MTPNOV24II_CS2_2",
      chapter_name: ["Capital Budgeting"],
      question: "The sale price per unit so that the project would break even with zero NPV shall be approximately…………..",
      options: [
        "₹ 40.00",
        "₹ 55.28",
        "₹ 60.00",
        "₹ 44.74"
      ],
      answer: 1
    },
    {
      question_id: "AFM_MTPNOV24II_CS2_3",
      chapter_name: ["Capital Budgeting"],
      question: "The cost per unit so that the project would break even with zero NPV shall be approximately…………..",
      options: [
        "₹ 40.00",
        "₹ 55.28",
        "₹ 60.00",
        "₹ 44.74"
      ],
      answer: 3
    },
    {
      question_id: "AFM_MTPNOV24II_CS2_4",
      chapter_name: ["Capital Budgeting"],
      question: "Overall ………… in the sale volume will lead to the project to break even with zero NPV.",
      options: [
        "increase of 23.68%",
        "fall of 23.68%",
        "increase of 31.03%",
        "fall of 31.03%"
      ],
      answer: 1
    },
    {
      question_id: "AFM_MTPNOV24II_CS2_5",
      chapter_name: ["Capital Budgeting"],
      question: "A/an ………… in the initial outlay will lead to the project to break even with zero NPV.",
      options: [
        "increase of 23.68%",
        "fall of 23.68%",
        "increase of 31.03%",
        "fall of 31.03%"
      ],
      answer: 2
    }
  ]
},
{
  case_id: "AFM_MTPNOV24II_CS3",
  case_chapter: ["Fixed Income Securities"],
  caseText: `
    <p>You are an investment analyst working for a financial advisory firm. You have been asked to analyze the bond market's yield curve to assist your clients in making investment decisions. The yield curve represents the relationship between the interest rates (yield) and the time to maturity for debt securities, usually government bonds.</p>

    <p>For simplicity, assume the following yield data for government bonds over various maturities (measured in years):</p>

    <table border="1" cellspacing="0" cellpadding="5">
      <thead>
        <tr>
          <th>Maturity (Years)</th>
          <th>Yield (%)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1 Year</td>
          <td>3.00%</td>
        </tr>
        <tr>
          <td>2 Years</td>
          <td>4.00%</td>
        </tr>
        <tr>
          <td>3 Years</td>
          <td>5.00%</td>
        </tr>
        <tr>
          <td>5 Years</td>
          <td>6.00%</td>
        </tr>
        <tr>
          <td>7 Years</td>
          <td>6.40%</td>
        </tr>
        <tr>
          <td>10 Years</td>
          <td>7.00%</td>
        </tr>
        <tr>
          <td>15 Years</td>
          <td>7.40%</td>
        </tr>
        <tr>
          <td>30 Years</td>
          <td>7.60%</td>
        </tr>
      </tbody>
    </table>

    <p><strong>Based on the above case scenario, choose the most appropriate answer to the following:</strong></p>
  `,
  questions: [
    {
      question_id: "AFM_MTPNOV24II_CS3_1",
      chapter_name: ["Fixed Income Securities"],
      question: "The main characteristic of a normal yield curve is……………….",
      options: [
        "Short-term yields are higher than long-term yields.",
        "Short-term yields are lower than long-term yields.",
        "Yields remain the same across all maturities.",
        "Yields fluctuate randomly over different maturities."
      ],
      answer: 1
    },
    {
      question_id: "AFM_MTPNOV24II_CS3_2",
      chapter_name: ["Fixed Income Securities"],
      question: "Based on the revised yield data, what is the yield spread between the 10-year bond and the 1-year bond?",
      options: [
        "2.0%",
        "3.5%",
        "4.0%",
        "5.0%"
      ],
      answer: 2
    },
    {
      question_id: "AFM_MTPNOV24II_CS3_3",
      chapter_name: ["Fixed Income Securities"],
      question: "An inverted yield curve typically indicates………………",
      options: [
        "Economic growth",
        "Economic uncertainty",
        "An upcoming recession",
        "Inflationary pressure"
      ],
      answer: 2
    },
    {
      question_id: "AFM_MTPNOV24II_CS3_4",
      chapter_name: ["Fixed Income Securities"],
      question: "If an investor is looking to invest for 2 years starting 3 years from now, the forward rate he would expect shall be………",
      options: [
        "7.41%",
        "7.52%",
        "7.76%",
        "7.93%"
      ],
      answer: 1
    },
    {
      question_id: "AFM_MTPNOV24II_CS3_5",
      chapter_name: ["Fixed Income Securities"],
      question: "If an investor is looking to invest for 2 years starting 5 years from now, the forward rate he would expect shall be………",
      options: [
        "7.41%",
        "7.52%",
        "7.76%",
        "7.93%"
      ],
      answer: 0
    }
  ]
},
{
  case_id: "afm_MAR25_I_cs1",
  case_chapter: ["Mutual Funds", "Tracking Error", "Side Pocketing"],
  caseText: `
    <p>Mr. Ramesh, a 40-year-old investor, has invested ₹ 10,00,000 in an actively managed Equity Mutual Fund. The fund has an Expense Ratio of 2.50% and follows the Nifty 50 Index as its benchmark.</p>

    <p>Upon analyzing the Fund details, he comes across the concept of Tracking Error (TE) and finds out that the same Fund has a Tracking Error (TE) of 3.20%.</p>

    <p>A few months later, Mr. Ramesh receives a notification that the Fund has implemented Side Pocketing. The Fund has an exposure of 15% of his investment in a debt instrument of XYZ Ltd., a company facing a severe financial crisis. Since XYZ Ltd. has defaulted on its payments, the Fund Manager has moved this portion into a side pocket.</p>

    <p>Following the decision of Fund Manager, Mr. Ramesh decides to reconsider any of the following options:</p>

    <ol>
      <li>Should he stay invested in this Fund and wait for the Side-Pocketed assets to recover?</li>
      <li>Should he switch to a Passive Index Fund that has a lower Tracking Error and lower Expense Ratio?</li>
      <li>Should he redeem his remaining liquid holdings and invest in a better-performing actively managed Fund?</li>
    </ol>

    <p><strong>Based on the above scenario and given his current situation, choose the most appropriate answer for the following multiple-choice questions.</strong></p>
  `,
  questions: [
    {
      question_id: "afm_mcq_cs1_1",
      chapter_name: ["Mutual Funds"],
      question: "Is it necessary for investors to pay close attention to the Expense Ratio of a Mutual Fund because………………..",
      options: [
        "a high expense ratio can significantly reduce net returns over time.",
        "a higher expense ratio always guarantees better fund performance.",
        "the expense ratio only matters in the first year of investment.",
        "funds with higher expense ratios are always risk-free."
      ],
      answer: 0
    },
    {
      question_id: "afm_mcq_cs1_2",
      chapter_name: ["Tracking Error"],
      question: "The Fund has been ……………… in replicating return on Nifty 50.",
      options: [
        "Successful",
        "Unsuccessful",
        "Can't say",
        "Data is insufficient"
      ],
      answer: 1
    },
    {
      question_id: "afm_mcq_cs1_3",
      chapter_name: ["Side Pocketing"],
      question: "After the decision of Fund Manager for side-pocketing, the equivalent portion of Mr. Ramesh's investment shall _____",
      options: [
        "remains illiquid until the Fund Manager decides to sell it or the company recovers.",
        "be immediately written off, and Mr. Ramesh loses that portion.",
        "be returned to Mr. Ramesh in proportion to his holdings.",
        "be moved into a different Mutual Fund Scheme with no risk."
      ],
      answer: 2
    },
    {
      question_id: "afm_mcq_cs1_4",
      chapter_name: ["Mutual Funds"],
      question: "If Mr. Ramesh switches to a Passive Index Fund with an expense ratio of 0.8%, then he will save annually compared to his current Expense Ratio of 2.50%?",
      options: [
        "₹ 8,000",
        "₹ 10,000",
        "₹ 17,000",
        "₹ 18,000"
      ],
      answer: 2
    },
    {
      question_id: "afm_mcq_cs1_5",
      chapter_name: ["Passive Investing"],
      question: "The advantage for Mr. Ramesh to switch over to a Passive Index Fund shall be _____",
      options: [
        "lower expense ratio and lower tracking error.",
        "guaranteed recovery of side-pocketed assets.",
        "higher risk exposure compared to active funds.",
        "avoiding capital gains tax on redemption."
      ],
      answer: 1
    }
  ]
},
{
  case_id: "afm_MAR25_I_cs2",
  case_chapter: ["Foreign Exchange Management", "NOSTRO Account"],
  caseText: `
    <p>On 20.10.2024, the credit balance of an Indian bank in NOSTRO account with LMN Bank in London was £ 1,60,000 and the overbought position was £ 1,00,000.</p>

    <p>During the day, the following transactions have taken place:</p>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Time</th>
        <th>Events</th>
        <th>Amount (£)</th>
      </tr>
      <tr>
        <td>11:08</td>
        <td>DD Purchased</td>
        <td>50,000</td>
      </tr>
      <tr>
        <td>11:50</td>
        <td>Purchased a bill on London</td>
        <td>150,000</td>
      </tr>
      <tr>
        <td>13:15</td>
        <td>Sold forward TT</td>
        <td>100,000</td>
      </tr>
      <tr>
        <td>13:55</td>
        <td>Forward purchased contract cancelled</td>
        <td>50,000</td>
      </tr>
      <tr>
        <td>14:45</td>
        <td>Remitted by TT</td>
        <td>85,000</td>
      </tr>
      <tr>
        <td>15:00</td>
        <td>Draft in London cancelled</td>
        <td>40,000</td>
      </tr>
    </table>

    <p><strong>Based on the above scenario, choose the most appropriate answer for the following multiple-choice questions.</strong></p>
  `,
  questions: [
    {
      question_id: "afm_mcq_cs2_0",
      chapter_name: ["Foreign Exchange Management"],
      question: "How much was the total amount of purchase commitments made during the day by the Indian Bank?",
      options: [
        "£ 2,00,000",
        "£ 1,50,000",
        "£ 3,40,000",
        "£ 50,000"
      ],
      answer: 3
    },
    {
      question_id: "afm_mcq_cs2_1",
      chapter_name: ["NOSTRO Account"],
      question: "The final cash balance in the NOSTRO account at the end of 20.10.2024 stands at ………….",
      options: [
        "£ 85,000",
        "£ 75,000",
        "£ 20,000",
        "£ 1,60,000"
      ],
      answer: 2
    },
    {
      question_id: "afm_mcq_cs2_2",
      chapter_name: ["Foreign Exchange Management"],
      question: "The transaction took place at ………. shall affect both exchange and cash position of the bank with LMN Bank.",
      options: [
        "11:08",
        "11:50",
        "14:45",
        "15:00"
      ],
      answer: 2
    },
    {
      question_id: "afm_mcq_cs2_3",
      chapter_name: ["NOSTRO Account"],
      question: "If at the end of day bank is required to maintain a credit balance of £ 20,000 in the NOSTRO account, then it ………….",
      options: [
        "shall buy forward £ 15,000",
        "shall sell spot TT £ 55,000",
        "shall buy spot TT £ 55,000",
        "shall sell forward £ 55,000"
      ],
      answer: 1
    },
    {
      question_id: "afm_mcq_cs2_4",
      chapter_name: ["Foreign Exchange Management"],
      question: "If bank takes required steps to maintain a credit balance of £ 20,000 in the NOSTRO account, then what additional step was required to achieve the overbought position of £ 65,000?",
      options: [
        "Buying forward £ 15,000",
        "Selling forward £ 65,000",
        "Buying forward £ 60,000",
        "Selling forward £ 15,000"
      ],
      answer: 0
    }
  ]
},
{
  case_id: "afm_MAR25_I_cs3",
  case_chapter: ["Corporate Valuation", "Dividend Discount Model", "Sustainable Growth Rate"],
  caseText: `
    <p>Following financial data are available for PQR Ltd. for the financial year ending 2023:</p>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Particulars</th>
        <th>₹ in lakh</th>
      </tr>
      <tr>
        <td>8% Debentures</td>
        <td>125</td>
      </tr>
      <tr>
        <td>10% Bonds (2022)</td>
        <td>50</td>
      </tr>
      <tr>
        <td>Equity Shares (₹ 10 each)</td>
        <td>100</td>
      </tr>
      <tr>
        <td>Reserves and Surplus</td>
        <td>300</td>
      </tr>
      <tr>
        <td>Total Assets</td>
        <td>600</td>
      </tr>
      <tr>
        <td>Assets Turnover Ratio</td>
        <td>1.1</td>
      </tr>
      <tr>
        <td>Effective Interest Rate</td>
        <td>8%</td>
      </tr>
      <tr>
        <td>Effective Tax Rate</td>
        <td>40%</td>
      </tr>
      <tr>
        <td>Operating Margin</td>
        <td>10%</td>
      </tr>
      <tr>
        <td>Dividend Payout Ratio</td>
        <td>16.67%</td>
      </tr>
      <tr>
        <td>Current Market Price per Share</td>
        <td>₹ 14</td>
      </tr>
      <tr>
        <td>Required Rate of Return of Investors</td>
        <td>15%</td>
      </tr>
    </table>

    <p><strong>From the information given above, choose the correct answer to the following questions:</strong></p>
  `,
  questions: [
    {
      question_id: "afm_mcq_cs3_0",
      chapter_name: ["Corporate Valuation"],
      question: "Amount of retained earnings for the financial year 2023 approximately is…………..",
      options: [
        "₹ 26.00 lakh",
        "₹ 5.20 lakh",
        "₹ 52.00 lakh",
        "₹ 31.20 lakh"
      ],
      answer: 0
    },
    {
      question_id: "afm_mcq_cs3_1",
      chapter_name: ["Corporate Finance"],
      question: "10% Bonds must have been issued in the month of…………….",
      options: [
        "July 2022",
        "June 2022",
        "August 2022",
        "May 2022"
      ],
      answer: 1
    },
    {
      question_id: "afm_mcq_cs3_2",
      chapter_name: ["Dividend Discount Model"],
      question: "Fair price of share of PQR Ltd. using Dividend Discount Model shall be approximately………….",
      options: [
        "₹ 6.12",
        "₹ 6.51",
        "₹ 10.00",
        "₹ 14.00"
      ],
      answer: 1
    },
    {
      question_id: "afm_mcq_cs3_3",
      chapter_name: ["Sustainable Growth Rate"],
      question: "Sustainable Growth Rate of PQR Ltd. shall be approximately…………..",
      options: [
        "10.00%",
        "6.50%",
        "15.00%",
        "7.80%"
      ],
      answer: 1
    },
    {
      question_id: "afm_mcq_cs3_4",
      chapter_name: ["Return on Equity"],
      question: "Return on Equity (ROE) of PQR Ltd. is…………..",
      options: [
        "7.80%",
        "6.50%",
        "10.00%",
        "15.00%"
      ],
      answer: 0
    }
  ]
},
// mtp m25 II
  {
    case_id: "afm_APR25_II_cs1",
    case_chapter: ["Fixed Income Securities", "Bond Valuation", "Portfolio Strategies"],
    caseText: `
      <p>Zenith Capital, a boutique investment firm, manages portfolios for high-net-worth individuals (HNIs). Their lead portfolio manager, Mr. R, has been closely analyzing market trends to optimize returns for their fixed-income portfolio. Over the past few months, he has observed fluctuations in interest rates and anticipates a significant shift in the near future.</p>
      <p>To optimise returns, Mr. R is considering three different investment strategies for clients having ₹ 10 crore of fund and are interested in Fixed Income Portfolio. Each strategy is designed to align with the client’s risk appetite and future liquidity needs.</p>
      <ul>
        <li><strong>Strategy A:</strong> Investing the entire ₹ 10 crore in a single bond with a 7-year maturity to match a specific financial obligation in the future.</li>
        <li><strong>Strategy B:</strong> Allocating ₹ 5 crore in short-term bonds (1-year maturity) and ₹ 5 crore in long-term bonds (7-year maturity) to balance risk and return.</li>
        <li><strong>Strategy C:</strong> Spreading the ₹ 10 crore investment equally across bonds with maturities of 1 to 5 years to ensure periodic liquidity.</li>
      </ul>
      <p>Meanwhile, Mr. R is also considering forecasting models to predict interest rate movements. He is evaluating economic indicators such as inflation, historical rate trends, and a combination of multiple economic factors to enhance the firm's forecasting accuracy.</p>
      <p>Mr. R suggested Strategy B for Mr. H (a HNI) having a sum of ₹ 10 crore for investment in Fixed Income Portfolio. As per the strategy half amount on fund is proposed to be invested in 7-year bonds yielding 8% per annum and balance in 1-year short term bond yielding 6% per annum. Interest on these bonds is compounded annually.</p>
      <p><strong>Based on the above case scenario, choose the correct answer to the following questions:</strong></p>
    `,
    questions: [
      {
        question_id: "afm_mcq_cs1_0",
        chapter_name: ["Fixed Income Securities"],
        question: "What is the primary objective of an active bond portfolio strategy?",
        options: [
          "To maintain a fixed return irrespective of market conditions",
          "To outperform the market by making informed investment decisions",
          "To minimize volatility and ensure steady returns",
          "To invest in government bonds only"
        ],
        answer: 1
      },
      {
        question_id: "afm_mcq_cs1_1",
        chapter_name: ["Portfolio Strategies"],
        question: "If any HNI follows Strategy A, then ………………of fixed-income portfolio strategy is being followed.",
        options: [
          "Barbell Strategy",
          "Ladder Strategy",
          "Bullet Strategy",
          "Duration Matching"
        ],
        answer: 2
      },
      {
        question_id: "afm_mcq_cs1_2",
        chapter_name: ["Portfolio Strategies"],
        question: "In the Barbell Strategy, the funds are typically allocated……………..",
        options: [
          "by making entire investment in bonds with the same maturity period.",
          "by dividing investment equally between short-term and long-term bonds.",
          "by dividing equal amount in bonds with different maturity periods.",
          "by investing only in short-term bonds."
        ],
        answer: 1
      },
      {
        question_id: "afm_mcq_cs1_3",
        chapter_name: ["Portfolio Strategies"],
        question: "In the ladder Strategy, the funds are typically allocated………………….",
        options: [
          "by making entire investment in bonds with the same maturity period.",
          "by dividing investment equally between short-term and long-term bonds.",
          "by dividing equal amount in bonds with different maturity periods.",
          "by investing only in short-term bonds."
        ],
        answer: 2
      },
      {
        question_id: "afm_mcq_cs1_4",
        chapter_name: ["Bond Valuation"],
        question: "It is expected that interest rate in coming 8 years are expected to fall by 25 bps each year and if Mr. H does not withdraw any amount from the Fund during these 7 years the total value of the investment at the end of the 7th year shall be approximately………………",
        options: [
          "₹ 15.036 crore",
          "₹ 15.721 crore",
          "₹ 15.739 crore",
          "₹ 15.829 crore"
        ],
        answer: 1
      }
    ]
  },
  {
    case_id: "afm_APR25_II_cs2",
    case_chapter: ["Security Analysis", "Fundamental Analysis", "Economic Analysis"],
    caseText: `
      <p>An American institutional investor is exploring investment opportunities in different countries. Before proceeding, they believe a thorough analysis of options in the securities available to ensure a higher return while minimizing risk.</p>
      <p>To achieve this objective, it formed a team consisting of following persons with respective assigned tasks:</p>
      <ul>
        <li><strong>Mr. A –</strong> He is entrusted with the task of analysing various Macro-economic factors e.g. historical performance of the economies in the past/ present and expectations in future, growth of different sectors of the economies in future with signs of stagnation/degradation at present. In addition to that he also analysed the trends in peoples’ income and expenditure.</li>
        <li><strong>Ms. B –</strong> After receiving inputs/ recommendations from Mr. A she is entrusted with the task of assessment regarding all the conditions and factors relating to demand of the particular product, cost structure of the industry and other economic and Government constraints in the same country.</li>
        <li><strong>Mr. C –</strong> After receiving inputs/ recommendations from Ms. B he is entrusted with the task of careful examination of the company's quantitative and qualitative fundamentals. Which includes a comparison of price earning ratios of different companies. Further, In addition to examine the financial solvency, liquidity of the company he is also advised for the evaluation of future growth prospects of the company identified.</li>
      </ul>
      <p><strong>Based on the above case scenario, choose the correct answer to the following questions:</strong></p>
    `,
    questions: [
      {
        question_id: "afm_mcq_cs2_0",
        chapter_name: ["Economic Analysis"],
        question: "If Mr. A want to evaluate the impact of macroeconomic trends on their potential investment. Which of the following factors is least likely to influence their decision?",
        options: [
          "Growth rates of national income",
          "Inflation rates",
          "Market speculation trends",
          "Barometer indicators"
        ],
        answer: 2
      },
      {
        question_id: "afm_mcq_cs2_1",
        chapter_name: ["Economic Analysis"],
        question: "The investor learns that inflation is expected to rise. Based on economic analysis, how might this affect their stock investment decision?",
        options: [
          "Stock prices are expected to decline due to reduced consumer demand",
          "Stock prices are expected to rise as stocks act as a hedge against inflation",
          "Stock prices will remain unaffected as inflation only affects bond markets",
          "Stock prices will become highly volatile, but long-term growth remains unchanged"
        ],
        answer: 1
      },
      {
        question_id: "afm_mcq_cs2_2",
        chapter_name: ["Industry Analysis"],
        question: "Which of the techniques shall be primarily used by Ms. B to carry out the required analysis at his part?",
        options: [
          "Anticipatory Surveys",
          "Indicator Approach",
          "Input-Output Analysis",
          "Decision Tree Analysis"
        ],
        answer: 2
      },
      {
        question_id: "afm_mcq_cs2_3",
        chapter_name: ["Economic Analysis"],
        question: "Mr. A while analyzing industry growth, finds that certain indicators tend to peak before the economy’s overall growth. These indicators are best classified as................",
        options: [
          "Lagging indicators",
          "Leading indicators",
          "Coincidental indicators",
          "Random indicators"
        ],
        answer: 1
      },
      {
        question_id: "afm_mcq_cs2_4",
        chapter_name: ["Security Analysis"],
        question: "Specifically the team of Mr. A, Ms. B, and Mr. C are entrusted with the task of carrying out...............",
        options: [
          "Fundamental Analysis",
          "Technical Analysis",
          "Market Analysis",
          "Security Analysis"
        ],
        answer: 0
      }
    ]
  },
  {
    case_id: "afm_APR25_II_cs3",
    case_chapter: ["Credit Risk Management", "Credit Derivatives", "Derivatives Analysis and Valuation"],
    caseText: `
      <p>Suppose you are a risk manager at a financial institution, and your company has loaned a significant amount of ₹ 500 crore to a company X Ltd. for a period of 3 years at 6-month at MCLR plus 200 bps. You are concerned about X Ltd.'s ability to repay the debt due to recent market volatility. To protect your institution from potential default, you decide to purchase a Credit Default Swap (CDS) from ABC Bank Ltd. for same notional amount at a premium quoted at 1% per year through cash settlement.</p>
      <p>On the respective reset dates for the same period actual MCLR interest rate comes out as follows:</p>
      <table border="1" cellspacing="0" cellpadding="5">
        <thead>
          <tr>
            <th>Reset</th>
            <th>MCLR</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>9.75%</td>
          </tr>
          <tr>
            <td>2</td>
            <td>10.00%</td>
          </tr>
          <tr>
            <td>3</td>
            <td>10.25%</td>
          </tr>
          <tr>
            <td>4</td>
            <td>10.35%</td>
          </tr>
          <tr>
            <td>5</td>
            <td>10.50%</td>
          </tr>
          <tr>
            <td>6</td>
            <td>10.60%</td>
          </tr>
        </tbody>
      </table>
      <p><strong>From the information given above, choose the correct answer to the following questions:</strong></p>
    `,
    questions: [
      {
        question_id: "afm_mcq_cs3_0",
        chapter_name: ["Credit Derivatives"],
        question: "The primary purpose of a Credit Default Swap (CDS) is...................",
        options: [
          "to increase the value of bonds.",
          "to protect against default risk of a debt obligation.",
          "to provide guaranteed profit to the buyer.",
          "to create a new form of loan."
        ],
        answer: 1
      },
      {
        question_id: "afm_mcq_cs3_1",
        chapter_name: ["Credit Derivatives"],
        question: "Which of the following statements is true about CDS contracts?",
        options: [
          "CDS contracts cannot be used for speculation.",
          "CDS contracts are governed by government regulations.",
          "CDS contracts are private agreements between two parties.",
          "CDS contracts eliminate all risks for the buyer."
        ],
        answer: 2
      },
      {
        question_id: "afm_mcq_cs3_2",
        chapter_name: ["Derivatives Analysis and Valuation"],
        question: "Which organization publishes the guidelines and rules for conducting Credit Default Swap transactions?",
        options: [
          "Federal Reserve",
          "International Swap and Derivative Association (ISDA)",
          "Securities and Exchange Commission (SEC)",
          "World Trade Organization (WTO)"
        ],
        answer: 1
      },
      {
        question_id: "afm_mcq_cs3_3",
        chapter_name: ["Credit Derivatives"],
        question: "Assuming no default occurs the total premium your company will pay during the designated loan period shall be........",
        options: [
          "₹ 5 crore",
          "₹ 10 crore",
          "₹ 15 crore",
          "₹ 30 crore"
        ],
        answer: 2
      },
      {
        question_id: "afm_mcq_cs3_4",
        chapter_name: ["Credit Derivatives"],
        question: "Suppose if the lender defaults somewhere in the beginning of third year of loan (after payment of interest upto 2 years) and the market value of a reference loans falls to 75% of its par value, then ABC Bank will pay your company ...........in a cash settlement.",
        options: [
          "₹ 15 crore",
          "₹ 30 crore",
          "₹ 125 crore",
          "₹ 500 crore"
        ],
        answer: 2
      }
    ]
  },
  // sept25
  {
  case_id: "afm_jul25_I_cs1",
  case_chapter: ["Financial Policy and Corporate Strategy"],
  caseText: `
    <p>XYZ Ltd., a medium-sized company in the renewable energy sector, is experiencing steady sales growth. The company’s management, however, is concerned about balancing rapid growth with long-term sustainability. In the past year, XYZ’s growth objectives have led to aggressive expansion plans, but management now realizes that such growth might not be financially sustainable in the long run. This raises concerns about how to maintain the company's financial health while meeting its ambitious growth targets.</p>

    <p>The CFO of XYZ Ltd. highlights the importance of Sustainable Growth Rate (SGR).</p>

    <p>The company now needs to ensure that its operational and financial policies align with its growth goals. XYZ must avoid expanding too quickly, which could strain its financial resources and lead to excessive borrowing. Moreover, management must also consider the long-term implications of resource consumption, particularly in the renewable energy industry, where sustainability is key to both current and future stakeholders.</p>

    <p>XYZ Ltd. also realizes that it needs to focus on building its growth capability alongside its growth strategy. Without the necessary infrastructure and financial planning in place, the company's efforts to achieve long-term, sustainable growth could be in jeopardy. Furthermore, the company is aware of the risks of relying too much on external financing and recognizes the need for a balance between maintaining sufficient equity and minimizing debt.</p>

    <p>Given the importance of these considerations, XYZ’s management team must now review their growth strategy and financial policies to ensure they are consistent with the firm’s sustainable growth objectives.</p>

    <p><strong>From the information given above, choose the correct answer to the following questions:</strong></p>
  `,
  questions: [
    {
      question_id: "afm_jul25_I_cs1_0",
      chapter_name: ["Financial Policy and Corporate Strategy"],
      question: "The concept of Sustainable Growth Rate introduced by...................",
      options: [
        "Harry Markowitz",
        "William Sharpe",
        "Black Scholes",
        "Robert C. Higgins"
      ],
      answer: 3
    },
    {
      question_id: "afm_jul25_I_cs1_1",
      chapter_name: ["Financial Policy and Corporate Strategy"],
      question: "The Sustainable Growth Rate (SGR) represents.................",
      options: [
        "the rate at which the company can grow by issuing more equity.",
        "the maximum rate of growth in sales that can be achieved without borrowing additional funds.",
        "the growth rate determined by market demand for XYZ’s products.",
        "the rate of growth determined by inflationary pressures."
      ],
      answer: 1
    },
    {
      question_id: "afm_jul25_I_cs1_2",
      chapter_name: ["Financial Policy and Corporate Strategy"],
      question: "According to the case scenario the risk associated with growing too quickly is that...........",
      options: [
        "the company might not be able to retain competent staff.",
        "the company could face liquidity issues due to over-expansion.",
        "the company’s stock price might decline.",
        "it could reduce the company's market share."
      ],
      answer: 1
    },
    {
      question_id: "afm_jul25_I_cs1_3",
      chapter_name: ["Financial Policy and Corporate Strategy"],
      question: "Which of the following twin cornerstones are necessary for XYZ Ltd. to achieve sustainable growth?",
      options: [
        "Market conditions and competition.",
        "Growth capability and growth strategy.",
        "Product innovation and marketing strategy.",
        "Cost-cutting measures and increased sales."
      ],
      answer: 1
    },
    {
      question_id: "afm_jul25_I_cs1_4",
      chapter_name: ["Financial Policy and Corporate Strategy"],
      question: "In an inflationary condition if creditors require that XYZ Ltd.’s historical cost debt-to-equity ratio stay constant, the inflation......",
      options: [
        "reduces the need for external financing.",
        "increases the sustainable growth rate by lowering costs.",
        "lowers the sustainable growth rate.",
        "It has no effect on the company's growth rate."
      ],
      answer: 2
    }
  ]
},
{
  case_id: "afm_jul25_I_cs2",
  case_chapter: ["Security Valuation"],
  caseText: `
    <p>You are an investment analyst working for a financial advisory firm. You have been asked to analyze the bond market's yield curve to assist your clients in making investment decisions. The yield curve represents the relationship between the interest rates (yield) and the time to maturity for debt securities, usually government bonds.</p>

    <p>For simplicity, assume the following yield data for government bonds over various maturities (measured in years):</p>

    <p><strong>Yield Curve Table</strong></p>
    <table border="1" cellspacing="0" cellpadding="5">
      <thead>
        <tr>
          <th>Maturity (Years)</th>
          <th>Yield (%)</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>1 Year</td><td>3.00%</td></tr>
        <tr><td>2 Years</td><td>4.00%</td></tr>
        <tr><td>3 Years</td><td>5.00%</td></tr>
        <tr><td>5 Years</td><td>6.00%</td></tr>
        <tr><td>7 Years</td><td>6.40%</td></tr>
        <tr><td>10 Years</td><td>7.00%</td></tr>
        <tr><td>15 Years</td><td>7.40%</td></tr>
        <tr><td>30 Years</td><td>7.60%</td></tr>
      </tbody>
    </table>

    <p><strong>From the information given above, choose the correct answer to the following questions:</strong></p>
  `,
  questions: [
    {
      question_id: "afm_jul25_I_cs2_0",
      chapter_name: ["Security Valuation"],
      question: "The main characteristic of a normal yield curve is……………….",
      options: [
        "Short-term yields are higher than long-term yields.",
        "Short-term yields are lower than long-term yields.",
        "Yields remain the same across all maturities.",
        "Yields fluctuate randomly over different maturities."
      ],
      answer: 1
    },
    {
      question_id: "afm_jul25_I_cs2_1",
      chapter_name: ["Security Valuation"],
      question: "Based on the given yield data, what is the yield spread between the 10-year bond and the 1-year bond?",
      options: [
        "2.0%",
        "3.5%",
        "4.0%",
        "5.0%"
      ],
      answer: 2
    },
    {
      question_id: "afm_jul25_I_cs2_2",
      chapter_name: ["Security Valuation"],
      question: "An inverted yield curve typically indicates……………….",
      options: [
        "Economic growth",
        "Economic uncertainty",
        "An upcoming recession",
        "Inflationary pressure"
      ],
      answer: 2
    },
    {
      question_id: "afm_jul25_I_cs2_3",
      chapter_name: ["Security Valuation"],
      question: "If an investor is looking to invest for 2 years starting at the end of 3 years from now, the forward rate he would expect shall be approximately………",
      options: [
        "7.41%",
        "7.52%",
        "7.76%",
        "7.93%"
      ],
      answer: 1
    },
    {
      question_id: "afm_jul25_I_cs2_4",
      chapter_name: ["Security Valuation"],
      question: "If an investor is looking to invest for 2 years starting 5 years from now, the forward rate he would expect shall be approximately………",
      options: [
        "7.41%",
        "7.52%",
        "7.76%",
        "7.93%"
      ],
      answer: 0
    }
  ]
},
{
  case_id: "afm_jul25_I_cs3",
  case_chapter: ["Foreign Exchange Exposure and Risk Management", "International Financial Management"],
  caseText: `
    <p>XYZ Ltd., a U.S. firm, will require £ 300,000 in 180 days and is evaluating different strategies to hedge against currency risk. The available market data is as follows:</p>

    <p><strong>Current Spot Rate:</strong> 1 £ = $ 2.00</p>
    <p><strong>180-Day Forward Rate:</strong> 1 £ = $ 1.96</p>

    <p><strong>Interest Rates:</strong></p>
    <table border="1" cellspacing="0" cellpadding="5">
      <thead>
        <tr>
          <th>Country</th>
          <th>Period</th>
          <th>Deposit Rate</th>
          <th>Borrowing Rate</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>UK</td>
          <td>180 days</td>
          <td>4.50%</td>
          <td>5.00%</td>
        </tr>
        <tr>
          <td>US</td>
          <td>180 days</td>
          <td>5.00%</td>
          <td>5.50%</td>
        </tr>
      </tbody>
    </table>

    <p><strong>Option Contract:</strong></p>
    <p>Call option available on £, expiring in 180 days with:</p>
    <ul>
      <li>Exercise Price: $ 1.97</li>
      <li>Premium: $ 0.04</li>
    </ul>

    <p>XYZ Ltd. has forecasted the following probabilities for spot rates after 180 days:</p>
    <table border="1" cellspacing="0" cellpadding="5">
      <thead>
        <tr>
          <th>Spot Rate</th>
          <th>Probability</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>$ 1.91</td><td>25%</td></tr>
        <tr><td>$ 1.95</td><td>60%</td></tr>
        <tr><td>$ 2.05</td><td>15%</td></tr>
      </tbody>
    </table>

    <p><strong>From the information given above, choose the correct answer to the following questions:</strong></p>
  `,
  questions: [
    {
      question_id: "afm_jul25_I_cs3_0",
      chapter_name: ["Foreign Exchange Exposure and Risk Management"],
      question: "The expected dollar amount needed if XYZ Ltd. does not hedge.",
      options: [
        "$ 5,88,000",
        "$ 6,05,741",
        "$ 5,95,560",
        "$ 5,86,500"
      ],
      answer: 3
    },
    {
      question_id: "afm_jul25_I_cs3_1",
      chapter_name: ["Foreign Exchange Exposure and Risk Management"],
      question: "If XYZ Ltd. chooses the forward contract option, the expected dollar amount needed in 180 days, the total dollar amount required shall be....................",
      options: [
        "$ 5,88,000",
        "$ 6,05,741",
        "$ 5,95,560",
        "$ 5,86,500"
      ],
      answer: 0
    },
    {
      question_id: "afm_jul25_I_cs3_2",
      chapter_name: ["Foreign Exchange Exposure and Risk Management"],
      question: "Under the money market hedge, approximately how much amount in dollars will XYZ Ltd. need to repay after 180 days?",
      options: [
        "$ 5,88,000",
        "$ 6,05,741",
        "$ 5,95,560",
        "$ 5,86,500"
      ],
      answer: 1
    },
    {
      question_id: "afm_jul25_I_cs3_3",
      chapter_name: ["Foreign Exchange Exposure and Risk Management"],
      question: "If XYZ Ltd. chooses the call option contract, after 180 days the total cost in dollar for £ 300,000 (inclusive of interest on Premium amount) shall be....................",
      options: [
        "$ 5,88,000",
        "$ 6,05,741",
        "$ 5,95,560",
        "$ 5,86,500"
      ],
      answer: 2
    },
    {
      question_id: "afm_jul25_I_cs3_4",
      chapter_name: ["Foreign Exchange Exposure and Risk Management"],
      question: "The expected spot rate per £ after 180 days shall be approximately.................",
      options: [
        "$ 1.91",
        "$ 1.94",
        "$ 1.96",
        "$ 2.05"
      ],
      answer: 2
    }
  ]
},
// spt25
{
  case_id: "afm_aug25_II_cs1",
  case_chapter: ["Advanced Capital Budgeting Decisions"],
  caseText: `
    <p>XYZ Ltd. plans to invest ₹ 800,000 in a new unit. The project is expected to have a useful life of 4 years, with no salvage value at the end of its life. The annual depreciation charge for the project is ₹ 200,000.</p>

    <p>Projected revenues and costs for the project, ignoring inflation, are provided as follows:</p>

    <table border="1" cellspacing="0" cellpadding="5">
      <thead>
        <tr>
          <th>Year</th>
          <th>Revenues (₹)</th>
          <th>Costs (₹)</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>600,000</td><td>300,000</td></tr>
        <tr><td>2</td><td>700,000</td><td>400,000</td></tr>
        <tr><td>3</td><td>800,000</td><td>400,000</td></tr>
        <tr><td>4</td><td>800,000</td><td>400,000</td></tr>
      </tbody>
    </table>

    <p>XYZ Ltd. is subject to a corporate tax rate of 60%, and the cost of capital for the project, including inflation premium, is 10%.</p>

    <p>Depreciation provides a tax benefit, and inflation rates for revenues and costs over the project's lifespan are as follows:</p>

    <table border="1" cellspacing="0" cellpadding="5">
      <thead>
        <tr>
          <th>Year</th>
          <th>Revenue Inflation</th>
          <th>Cost Inflation</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>10%</td><td>12%</td></tr>
        <tr><td>2</td><td>9%</td><td>10%</td></tr>
        <tr><td>3</td><td>8%</td><td>9%</td></tr>
        <tr><td>4</td><td>7%</td><td>8%</td></tr>
      </tbody>
    </table>

    <p><strong>From the information given above, choose the correct answer to the following questions:</strong></p>
  `,
  questions: [
    {
      question_id: "afm_aug25_II_cs1_0",
      chapter_name: ["Advanced Capital Budgeting Decisions"],
      question: "The depreciation tax benefit for the project per year shall be……………",
      options: [
        "₹ 120,000",
        "₹ 150,000",
        "₹ 200,000",
        "₹ 180,000"
      ],
      answer: 0
    },
    {
      question_id: "afm_aug25_II_cs1_1",
      chapter_name: ["Advanced Capital Budgeting Decisions"],
      question: "The inflation-adjusted revenue in Year 2 shall be……………",
      options: [
        "₹ 700,000",
        "₹ 839,300",
        "₹ 492,800",
        "₹ 501,760"
      ],
      answer: 1
    },
    {
      question_id: "afm_aug25_II_cs1_2",
      chapter_name: ["Advanced Capital Budgeting Decisions"],
      question: "The total cash inflow in Year 1 after adjusting for inflation and tax benefit on depreciation shall be…………",
      options: [
        "₹ 330,000",
        "₹ 336,000",
        "₹ 249,600",
        "₹ 492,800"
      ],
      answer: 2
    },
    {
      question_id: "afm_aug25_II_cs1_3",
      chapter_name: ["Advanced Capital Budgeting Decisions"],
      question: "The inflation-adjusted cost in Year 2 shall be……………",
      options: [
        "₹ 700,000",
        "₹ 839,300",
        "₹ 492,800",
        "₹ 501,760"
      ],
      answer: 2
    },
    {
      question_id: "afm_aug25_II_cs1_4",
      chapter_name: ["Advanced Capital Budgeting Decisions"],
      question: "The present value of cash inflow for the year 3 shall be approximately………..",
      options: [
        "₹ 213,604",
        "₹ 226,299",
        "₹ 226,886",
        "₹ 239,949"
      ],
      answer: 3
    }
  ]
},
{
  case_id: "afm_aug25_II_cs2",
  case_chapter: ["Credit Risk Management", "Credit Derivatives", "Derivatives Analysis and Valuation"],
  caseText: `
    <p>Suppose you are a risk manager at a financial institution, and your company has loaned a significant amount of ₹ 500 crore to a company X Ltd. for a period of 3 years at 6-month MCLR plus 200 bps.</p>

    <p>You are concerned about X Ltd.'s ability to repay the debt due to recent market volatility. To protect your institution from potential default, you decide to purchase a Credit Default Swap (CDS) from ABC Bank Ltd. for the same notional amount at a premium quoted at 1% per year through cash settlement.</p>

    <p><strong>On the respective reset dates for the same period, the actual MCLR interest rate comes out as follows:</strong></p>

    <table border="1" cellspacing="0" cellpadding="5">
      <thead>
        <tr>
          <th>Reset</th>
          <th>MCLR</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>9.75%</td></tr>
        <tr><td>2</td><td>10.00%</td></tr>
        <tr><td>3</td><td>10.25%</td></tr>
        <tr><td>4</td><td>10.35%</td></tr>
        <tr><td>5</td><td>10.50%</td></tr>
        <tr><td>6</td><td>10.60%</td></tr>
      </tbody>
    </table>

    <p><strong>From the information given above, choose the correct answer to the following questions:</strong></p>
  `,
  questions: [
    {
      question_id: "afm_aug25_II_cs2_0",
      chapter_name: ["Credit Risk Management", "Credit Derivatives"],
      question: "The primary purpose of a Credit Default Swap (CDS) is...................",
      options: [
        "To increase the value of bonds.",
        "To protect against default risk of a debt obligation.",
        "To provide guaranteed profit to the buyer.",
        "To create a new form of loan."
      ],
      answer: 1
    },
    {
      question_id: "afm_aug25_II_cs2_1",
      chapter_name: ["Credit Risk Management", "Credit Derivatives"],
      question: "Which of the following statements is true about CDS contracts?",
      options: [
        "CDS contracts cannot be used for speculation.",
        "CDS contracts are governed by government regulations.",
        "CDS contracts are private agreements between two parties.",
        "CDS contracts eliminate all risks for the buyer."
      ],
      answer: 2
    },
    {
      question_id: "afm_aug25_II_cs2_2",
      chapter_name: ["Credit Risk Management", "Credit Derivatives"],
      question: "Which organization publishes the guidelines and rules for conducting Credit Default Swap transactions?",
      options: [
        "Federal Reserve",
        "International Swap and Derivative Association (ISDA)",
        "Securities and Exchange Commission (SEC)",
        "World Trade Organization (WTO)"
      ],
      answer: 1
    },
    {
      question_id: "afm_aug25_II_cs2_3",
      chapter_name: ["Credit Risk Management", "Credit Derivatives"],
      question: "Assuming no default occurs, the total premium your company will pay during the designated loan period shall be........",
      options: [
        "₹ 5 crore",
        "₹ 10 crore",
        "₹ 15 crore",
        "₹ 30 crore"
      ],
      answer: 2
    }
  ]
},
{
  case_id: "afm_aug25_II_cs3",
  case_chapter: ["Financial Policy and Corporate Strategy"],
  caseText: `
    <p>During one business meeting at XYZ Ltd., one of the members pointed out that while evaluating the performance of any company, one should not only consider its Operating Income but should also analyse its Capital Structure. Weighted Average Cost of Capital changes on the basis of capital structure, keeping all other factors unchanged.</p>

    <p>He presented data relating to three companies, Alpha Ltd., Beta Ltd. and Gama Ltd., whose operating incomes are equal, but their capital structures are different.</p>

    <p><strong>The following information relating to these three companies is available:</strong></p>

    <p><strong>(₹ in thousands)</strong></p>

    <table border="1" cellspacing="0" cellpadding="5">
      <thead>
        <tr>
          <th>Particulars</th>
          <th>Alpha Ltd.</th>
          <th>Beta Ltd.</th>
          <th>Gama Ltd.</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Total Invested Capital</td>
          <td>20,00,000</td>
          <td>20,00,000</td>
          <td>20,00,000</td>
        </tr>
        <tr>
          <td>Debt / Assets Ratio</td>
          <td>0.8</td>
          <td>0.5</td>
          <td>0.2</td>
        </tr>
        <tr>
          <td>Shares Outstanding</td>
          <td>61,000</td>
          <td>83,000</td>
          <td>1,00,000</td>
        </tr>
        <tr>
          <td>Pre-tax Cost of Debt</td>
          <td>16%</td>
          <td>13%</td>
          <td>15%</td>
        </tr>
        <tr>
          <td>Cost of Equity</td>
          <td>26%</td>
          <td>22%</td>
          <td>20%</td>
        </tr>
        <tr>
          <td>Operating Income (EBIT)</td>
          <td>5,00,000</td>
          <td>5,00,000</td>
          <td>5,00,000</td>
        </tr>
      </tbody>
    </table>

    <p>The tax rate is uniform at 35% in all cases. The industry P/E ratio is 11X.</p>

    <p><strong>From the information given above, choose the correct answer to the following questions:</strong></p>
  `,
  questions: [
    {
      question_id: "afm_aug25_II_cs3_0",
      chapter_name: ["Financial Policy and Corporate Strategy"],
      question: "The Weighted Average Cost of Capital (WACC) of Alpha Ltd. shall approximately be……………",
      options: [
        "13.520%",
        "15.225%",
        "17.950%",
        "18.000%"
      ],
      answer: 0
    },
    {
      question_id: "afm_aug25_II_cs3_1",
      chapter_name: ["Financial Policy and Corporate Strategy"],
      question: "The Economic Value Added (EVA) of Beta Ltd. is……………",
      options: [
        "₹ 54,600 thousand",
        "₹ 20,500 thousand",
        "(-) ₹ 34,000 thousand",
        "₹ 21,500 thousand"
      ],
      answer: 1
    },
    {
      question_id: "afm_aug25_II_cs3_2",
      chapter_name: ["Financial Policy and Corporate Strategy"],
      question: "The price per share of Gama Ltd. shall be……………",
      options: [
        "₹ 28.60",
        "₹ 31.90",
        "₹ 31.46",
        "₹ 29.45"
      ],
      answer: 2
    }
  ]
},
{
  case_id: "afm_aug25_II_cs4",
  case_chapter: ["International Financial Management", "Foreign Exchange Exposure and Risk Management"],
  caseText: `
    <p>A US parent company has subsidiaries in France, Germany, UK and Italy. The amounts due to and from the affiliates is converted into a common currency viz. US dollar and entered in the following matrix.</p>

    <p><strong>Inter Subsidiary Payments Matrix (US $ Thousands)</strong></p>

    <table border="1" cellspacing="0" cellpadding="5">
      <thead>
        <tr>
          <th>Receiving Affiliate / Paying Affiliate</th>
          <th>France</th>
          <th>Germany</th>
          <th>UK</th>
          <th>Italy</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>France</td>
          <td>—</td>
          <td>80</td>
          <td>120</td>
          <td>200</td>
          <td>400</td>
        </tr>
        <tr>
          <td>Germany</td>
          <td>120</td>
          <td>—</td>
          <td>80</td>
          <td>160</td>
          <td>360</td>
        </tr>
        <tr>
          <td>UK</td>
          <td>160</td>
          <td>120</td>
          <td>—</td>
          <td>140</td>
          <td>420</td>
        </tr>
        <tr>
          <td>Italy</td>
          <td>200</td>
          <td>60</td>
          <td>120</td>
          <td>—</td>
          <td>380</td>
        </tr>
        <tr>
          <td><strong>Total</strong></td>
          <td><strong>480</strong></td>
          <td><strong>260</strong></td>
          <td><strong>320</strong></td>
          <td><strong>500</strong></td>
          <td><strong>1,560</strong></td>
        </tr>
      </tbody>
    </table>

    <p>The treasurer of US Parent company is suggesting that by applying Multilateral Netting system the company can save a lot of transfer/ exchange costs. The company’s Board agreed with Treasurer’s proposal.</p>

    <p><strong>From the information given above, choose the correct answer to the following questions:</strong></p>
  `,
  questions: [
    {
      question_id: "afm_aug25_II_cs4_0",
      chapter_name: ["International Financial Management"],
      question: "Before applying Multilateral Netting it is necessary to apply……………….",
      options: [
        "Unilateral Netting",
        "Bilateral Netting",
        "Multilateral Netting",
        "Interest Rate Swapping"
      ],
      answer: 1
    },
    {
      question_id: "afm_aug25_II_cs4_1",
      chapter_name: ["International Financial Management"],
      question: "Through Multinational Netting these transfers will be reduced to ……………………….",
      options: [
        "$ 50,000",
        "$ 100,000",
        "$ 150,000",
        "$ 200,000"
      ],
      answer: 3
    },
    {
      question_id: "afm_aug25_II_cs4_2",
      chapter_name: ["International Financial Management"],
      question: "The Net Payment/ Net Receipts for France after netting off shall be…………….",
      options: [
        "Net Receipt $ 40,000",
        "Net Payment $ 80,000",
        "Net Payment $ 40,000",
        "Net Receipt $ 80,000"
      ],
      answer: 1
    }
  ]
},
// jan 26 series I
{
  case_id: "afm_nov25_I_cs1",
  case_chapter: ["Derivatives Analysis and Valuation", "Advanced Capital Budgeting Decisions"],
  caseText: `
    <p>X and Y are two friends. Since Y has earned a lot of profit from trading in financial derivative market, X is also considering speculating on Gamma Corporation’s shares which is currently trading at ₹ 700 per share through taking positions in options in stocks of same company. Accordingly, X took following contract positions in the options on Gama Corporation’s stock:</p>
    <ol type="i">
      <li>Purchasing one contract of 2-month call option with a premium of ₹ 35 and an exercise price of ₹ 750.</li>
      <li>Purchasing one contract of 2-month put option with a premium of ₹ 25 and an exercise price of ₹ 600.</li>
    </ol>
    <p>After some time, trading in Option Market and understanding the nitty-gritties of same, X being CEO in an organization advised his team to implement the concept of Financial Options in the Capital Budgeting decisions called ‘Real Option’.</p>
    <p><strong>Based on the above information answer the following questions:</strong></p>
  `,
  questions: [
    {
      question_id: "afm_nov25_I_cs1_1",
      chapter_name: ["Derivatives Analysis and Valuation"],
      question: "Assuming that the contract size of each option contract is 100 and the price of Gama Corporation’s share after two months falls to ₹ 550, the net pay-off of X will be………",
      options: [
        "₹ 1,000 loss",
        "₹ 1,000 profit",
        "₹ 3,000 profit",
        "₹ 3,000 loss"
      ],
      answer: 0
    },
    {
      question_id: "afm_nov25_I_cs1_2",
      chapter_name: ["Derivatives Analysis and Valuation"],
      question: "The per share price of Gama Corporation’s stock after 2 months at which X shall be at Break Even is……….",
      options: [
        "₹ 540",
        "₹ 600",
        "₹ 625",
        "₹ 785"
      ],
      answer: 0
    },
    {
      question_id: "afm_nov25_I_cs1_3",
      chapter_name: ["Advanced Capital Budgeting Decisions"],
      question: "Which of the following statement is false regarding Real Options?",
      options: [
        "Real Options methodology is an approach to capital budgeting that relies on Option Pricing theory to evaluate projects.",
        "Real options approach is intended to supplement, and not replace, capital budgeting analyses based on standard Discounted Cash Flow (DCF) methodologies.",
        "Real options are different from financial options as their periods start from the end of 1st year and are higher than financial options.",
        "Real options are normally traded in the market and are priced."
      ],
      answer: 3
    }
  ]
},
{
  case_id: "afm_nov25_I_cs2",
  case_chapter: ["Mergers, Acquisitions and Corporate Restructuring"],
  caseText: `
    <p>P Ltd. is studying the possible acquisition of Q Ltd. by way of merger. The following data are available:</p>
    <table border="1" cellpadding="6" cellspacing="0" style="border-collapse: collapse; text-align: center; margin-bottom: 12px; width: 100%;">
      <thead>
        <tr style="background-color: #f2f2f2;">
          <th style="text-align: left;">Firm</th>
          <th style="text-align: right;">After-tax earnings (₹)</th>
          <th style="text-align: right;">No. of equity shares</th>
          <th style="text-align: right;">Market price per share (₹)</th>
          <th style="text-align: right;">Book Value Per share (₹)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="text-align: left;">P Ltd.</td>
          <td style="text-align: right;">10,00,000</td>
          <td style="text-align: right;">2,00,000</td>
          <td style="text-align: right;">75</td>
          <td style="text-align: right;">210</td>
        </tr>
        <tr>
          <td style="text-align: left;">Q Ltd.</td>
          <td style="text-align: right;">3,00,000</td>
          <td style="text-align: right;">50,00,0</td>
          <td style="text-align: right;">60</td>
          <td style="text-align: right;">105</td>
        </tr>
      </tbody>
    </table>
    <p>The merger shall be gone through by exchange of equity shares and the exchange ratio is set according to different weights assigned to different basis as mentioned below:</p>
    <ul>
      <li>EPS: 50%</li>
      <li>Market Price: 25%</li>
      <li>Book Value: 25%</li>
    </ul>
    <p><strong>From the information given above, choose the correct answer to the following questions:</strong></p>
  `,
  questions: [
    {
      question_id: "afm_nov25_I_cs2_4",
      chapter_name: ["Mergers, Acquisitions and Corporate Restructuring"],
      question: "The swap ratio based on given weights shall be........................................",
      options: [
        "0.825",
        "0.925",
        "0.952",
        "0.752"
      ],
      answer: 1
    },
    {
      question_id: "afm_nov25_I_cs2_5",
      chapter_name: ["Mergers, Acquisitions and Corporate Restructuring"],
      question: "Based on swap ratio as per assigned weights the total number of shares issued by P Ltd to Q Ltd. shall be............",
      options: [
        "46250",
        "41250",
        "47600",
        "37600"
      ],
      answer: 0
    },
    {
      question_id: "afm_nov25_I_cs2_6",
      chapter_name: ["Mergers, Acquisitions and Corporate Restructuring"],
      question: "Post merger the EPS of the P Ltd. shall be.................",
      options: [
        "5.39",
        "5.25",
        "5.28",
        "5.47"
      ],
      answer: 2
    },
    {
      question_id: "afm_nov25_I_cs2_7",
      chapter_name: ["Mergers, Acquisitions and Corporate Restructuring"],
      question: "In case Q Ltd. wants to be sure that its EPS is not diminished by the merger, the relevant exchange ratio to achieve the same objective should be....................",
      options: [
        "0.83",
        "1.20",
        "1.30",
        "1.10"
      ],
      answer: 1
    }
  ]
},
{
  case_id: "afm_nov25_I_cs3",
  case_chapter: ["Security Valuation", "Interest Rate Risk Management"],
  caseText: `
    <p>The following information is available in respect of Bond A and Bond B:</p>
    <table border="1" cellpadding="6" cellspacing="0" style="border-collapse: collapse; text-align: center; margin-bottom: 12px; width: 80%;">
      <thead>
        <tr style="background-color: #f2f2f2;">
          <th style="text-align: left;">Particulars</th>
          <th>Bond A</th>
          <th>Bond B</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="text-align: left;">Face value, redeemable at par</td>
          <td>₹ 1,000</td>
          <td>₹ 1,000</td>
        </tr>
        <tr>
          <td style="text-align: left;">Coupon rate, payable annually (%)</td>
          <td>6%</td>
          <td>10%</td>
        </tr>
        <tr>
          <td style="text-align: left;">Time to maturity (years)</td>
          <td>5</td>
          <td>3</td>
        </tr>
      </tbody>
    </table>
    <p>An investor has a portfolio consisting of 75% of Bond A and 25% of Bond B. The current YTM prevailing in the market is 10%.</p>
    <table border="1" cellpadding="6" cellspacing="0" style="border-collapse: collapse; text-align: center; margin-bottom: 12px; width: 85%;">
      <thead>
        <tr style="background-color: #f2f2f2;">
          <th>Year (n)</th>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th>4</th>
          <th>5</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><b>PVIF (10%, n)</b></td>
          <td>0.9091</td>
          <td>0.8264</td>
          <td>0.7513</td>
          <td>0.6830</td>
          <td>0.6209</td>
        </tr>
      </tbody>
    </table>
    <p><strong>From the information given above, choose the correct answer to the following questions:</strong></p>
  `,
  questions: [
    {
      question_id: "afm_nov25_I_cs3_8",
      chapter_name: ["Security Valuation"],
      question: "The price and duration of Bond B shall be approximately .................... respectively.",
      options: [
        "₹ 826.43 and 2.49",
        "₹ 1,000 and 2.74",
        "₹ 924.85 and 2.74",
        "₹ 1,000 and 2.49"
      ],
      answer: 1
    },
    {
      question_id: "afm_nov25_I_cs3_9",
      chapter_name: ["Security Valuation"],
      question: "The price and duration of Bond A shall be approximately .................... respectively.",
      options: [
        "₹ 848.34 and 4.41",
        "₹ 811.09 and 4.38",
        "₹ 1,227.44 and 4.41",
        "₹ 658.15 and 3.90"
      ],
      answer: 0
    },
    {
      question_id: "afm_nov25_I_cs3_10",
      chapter_name: ["Security Valuation", "Interest Rate Risk Management"],
      question: "The price sensitivity of the portfolio approximately is……………………..",
      options: [
        "-4.03",
        "-2.49",
        "-3.63",
        "-3.98"
      ],
      answer: 2
    }
  ]
},
{
  case_id: "afm_nov25_I_cs4",
  case_chapter: ["Advanced Capital Budgeting Decisions"],
  caseText: `
    <p>XYZ Ltd. is a mid-sized manufacturing company that produces industrial equipment. The company is considering a new investment project—a state-of-the-art automated production line, which is expected to improve production efficiency. The details of the same project are as follows:</p>
    <table border="1" cellpadding="6" cellspacing="0" style="border-collapse: collapse; margin-bottom: 12px; width: 60%;">
      <tbody>
        <tr>
          <td style="text-align: left;">Initial Cost of the project</td>
          <td style="text-align: right;">₹ 10,00,000</td>
        </tr>
        <tr>
          <td style="text-align: left;">Sales price/unit</td>
          <td style="text-align: right;">₹ 60</td>
        </tr>
        <tr>
          <td style="text-align: left;">Cost/unit</td>
          <td style="text-align: right;">₹ 40</td>
        </tr>
      </tbody>
    </table>
    <p><b>Sales volumes:</b></p>
    <ul>
      <li>Year 1: 20,000 units</li>
      <li>Year 2: 30,000 units</li>
      <li>Year 3: 30,000 units</li>
    </ul>
    <p>The applicable discount rate is 10% p.a.</p>
    <p><strong>From the information given above, choose the correct answer to the following questions:</strong></p>
  `,
  questions: [
    {
      question_id: "afm_nov25_I_cs4_11",
      chapter_name: ["Advanced Capital Budgeting Decisions"],
      question: "Sensitivity analysis helps to identify…………………..",
      options: [
        "the exact profitability of the project",
        "the break-even point.",
        "the degree to which a change in each variable affects the NPV.",
        "the amount of investment required"
      ],
      answer: 2
    },
    {
      question_id: "afm_nov25_I_cs4_12",
      chapter_name: ["Advanced Capital Budgeting Decisions"],
      question: "The sale price per unit so that the project would break even with zero NPV shall be approximately………….",
      options: [
        "₹ 40.00",
        "₹ 55.26",
        "₹ 60.00.",
        "₹ 44.74"
      ],
      answer: 1
    },
    {
      question_id: "afm_nov25_I_cs4_13",
      chapter_name: ["Advanced Capital Budgeting Decisions"],
      question: "The cost per unit so that the project would break even with zero NPV shall be approximately…………..",
      options: [
        "₹ 40.00",
        "₹ 55.26",
        "₹ 60.00.",
        "₹ 44.74"
      ],
      answer: 3
    },
    {
      question_id: "afm_nov25_I_cs4_14",
      chapter_name: ["Advanced Capital Budgeting Decisions"],
      question: "Overall .................... in the sale volume will lead to the project to break even with zero NPV.",
      options: [
        "increase of 23.68%",
        "fall of 23.68%",
        "Increase of 31.03%",
        "fall of 31.03%"
      ],
      answer: 1
    },
    {
      question_id: "afm_nov25_I_cs4_15",
      chapter_name: ["Advanced Capital Budgeting Decisions"],
      question: "A/an .................... in the initial outlay will lead to the project to break even with zero NPV.",
      options: [
        "increase of 23.68%",
        "fall of 23.68%",
        "Increase of 31.03%",
        "fall of 31.03%"
      ],
      answer: 2
    }
  ]
}
];
