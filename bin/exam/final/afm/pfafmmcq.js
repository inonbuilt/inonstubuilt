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
];
