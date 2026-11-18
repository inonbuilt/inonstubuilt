const mcqData = [
  {
    "case_id": "afm_bos_cs1",
    "case_chapter": [
      "Portfolio Management",
      "Interest Rate Risk Management",
      "Risk Management"
    ],
    "caseText": "\n<p>Equity Researchers have estimated the rate of returns for Stock A, Stock B and Market Portfolio under each state of the economy is as under:</p>\n\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"5\">\n  <tr><th>Economy</th><th>Probability</th><th>Return on Stock A (%)</th><th>Return on Stock B (%)</th><th>Market Portfolio (%)</th></tr>\n  <tr><td>Boom</td><td>0.3</td><td>16</td><td>19</td><td>18</td></tr>\n  <tr><td>Normal</td><td>0.4</td><td>14</td><td>16</td><td>15</td></tr>\n  <tr><td>Recession</td><td>0.3</td><td>-9</td><td>-7</td><td>-8</td></tr>\n</table>\n\n<p>The risk-free rate of return is expected to be 8%. The covariance between Stock A and the Market Portfolio is 122.70, while the covariance between Stock B and the Market Portfolio is 125.40. Assume that the CAPM framework is valid in this market.</p>\n",
    "questions": [
      {
        "question_id": "afm_bos_cs1_1",
        "question": "The expected rate of return (percentage) for Stocks A and B………………………",
        "options": [
          "7.70% and 9.00%",
          "10% and 9.00%",
          "7.70% and 10%",
          "13.1% and 14.20%"
        ],
        "answer": 2,
        "explanation": "Stock A = 0.3 x 16 + 0.4 x 14 + 0.3 x (-9) = 7.70 Stock B = 0.3 x 19 + 0.4 x 16 + 0.3 x (-7) = 10"
      },
      {
        "question_id": "afm_bos_cs1_2",
        "question": "What will be the variance of market portfolio?",
        "options": [
          "38.4",
          "- 4.8",
          "126.8",
          "125.4"
        ],
        "answer": 3,
        "explanation": "(18 – 9)20.3 + (15 – 9)20.4 + (-8 – 9)20.3 = 125.4"
      },
      {
        "question_id": "afm_bos_cs1_3",
        "question": "What will be the beta of Stock A and Stock B respectively?",
        "options": [
          "0.9542 and 1.00",
          "0.9862 and 1.24",
          "0.9785 and 1.00",
          "0.9785 and 1.24"
        ],
        "answer": 2,
        "explanation": "Stock A = 122.70/ 125.40 = 0.9785 Stock B = 125.40/ 125.40 = 1"
      },
      {
        "question_id": "afm_bos_cs1_4",
        "question": "Required rate of return of Stock A is _________ and Stock B is               _.",
        "options": [
          "8.9785 % and 9%",
          "9% and 8.978%",
          "8.9875% and 9%",
          "8.9785% and 10.4%"
        ],
        "answer": 0,
        "explanation": "Stock A = 8% + 0.9785(9% - 8%) = 8.9785% Stock B = 8% + 1(9% - 8%) = 9%"
      },
      {
        "question_id": "afm_bos_cs1_5",
        "question": "Which of the following statements is correct for purchase or sale of Stock A and Stock B?",
        "options": [
          "Stock A has a positive alpha, and Stock B has a negative alpha. This indicates  that  Stock  A  is  underpriced  and  Stock  B  is  overpriced. Therefore, purchase Stock A and sell Stock B.",
          "Both  Stock  A  and  Stock  B  have  positive  alpha  values,  suggesting they are underpriced. Therefore, purchase both stocks.",
          "Stock A has a negative alpha, while Stock B has a positive alpha. This means Stock A is overpriced and Stock B is underpriced. Therefore, sell Stock A and purchase Stock B.",
          "Both Stock A and Stock B have negative alpha values, indicating they are overpriced. Therefore, sell both stocks."
        ],
        "answer": 2,
        "explanation": "While  Stock  A’s  expected  rate  of  return  is  lower  than  that required return. However, for Stock B the reverse is true."
      }
    ]
  },
  {
    "case_id": "afm_bos_cs2",
    "case_chapter": [
      "Mutual Funds"
    ],
    "caseText": "\n<p>Steady Mutual Fund has the following assets in Scheme -  Star Gold at the close of business as on 31st March, 2025:</p>\n\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"5\">\n  <tr><th>Company</th><th>No. of Shares (units)</th><th>Market Price per share (₹ )</th></tr>\n  <tr><td>A Ltd.</td><td>20,000</td><td>25</td></tr>\n  <tr><td>B Ltd.</td><td>30,000</td><td>350</td></tr>\n  <tr><td>C Ltd.</td><td>38,000</td><td>290</td></tr>\n  <tr><td>D Ltd.</td><td>50,000</td><td>400</td></tr>\n</table>\n\n<p>The total numbers of units of Scheme -  Star Gold are 20 lakhs.</p>\n\n<p>The Scheme -  Star Gold has accrued expenses of ₹ 2,00,000 and other liabilities of ₹ 2,50,000.</p>\n",
    "questions": [
      {
        "question_id": "afm_bos_cs2_1",
        "question": "Total gross value of the Scheme -  Star Gold is ………………..",
        "options": [
          "₹ 325.00 lakhs",
          "₹ 420.20 lakhs",
          "₹ 480.40 lakhs",
          "₹ 520.30 lakhs"
        ],
        "answer": 1,
        "explanation": "20000 x 25 + 30000 x 350 + 38000 x 290 + 50000 x 400"
      },
      {
        "question_id": "afm_bos_cs2_2",
        "question": "Total net value of the Scheme -  Star Gold is ………………..",
        "options": [
          "₹ 422.70 lakhs",
          "₹ 420.70 lakhs",
          "₹ 415.70 lakhs",
          "₹ 424.70 lakhs"
        ],
        "answer": 2,
        "explanation": "₹ 420.20 lakhs - ₹ 4.50 lakhs = ₹ 415.70 lakhs"
      },
      {
        "question_id": "afm_bos_cs2_3",
        "question": "NAV  per unit of the Scheme- Star Gold is……………",
        "options": [
          "₹ 21.135",
          "₹ 21.035",
          "₹ 20.785",
          "₹ 21.235"
        ],
        "answer": 2,
        "explanation": "₹ 415.70 lakhs/ 20 lakhs = ₹ 20.785"
      }
    ]
  },
  {
    "case_id": "afm_bos_cs3",
    "case_chapter": [
      "Portfolio Management"
    ],
    "caseText": "\n<p>Mr. X, an investor buys the stocks of WBL Limited worth ₹ 21,60,000 due to very strong  fundamentals.  Since  last  3  months,  the  market  sentiment  is  weak  and witnessed a significant volatility and considered to remain weak for about the next three months. Keeping in the mind volatility in the market, Mr. X is planning to hedge his portfolio in the future market. The Beta of WBL stock is 1.3 and the current value of NIFTY is 2250 and 3 months future is selling at 2310. The current market price of the WBL stock is ₹ 240. Each Nifty future can be trade in units of 240 only.</p>\n\n<p>Assume there is no transaction cost and M to M Margin.</p>\n",
    "questions": [
      {
        "question_id": "afm_bos_cs3_1",
        "question": "Number  of  future  contract  to  be  buy/sell  to  hedge  WBL  stock  against expected fall in the market (rounded of contracts) -",
        "options": [
          "Buy 6 future contracts",
          "Sell 5 future contracts",
          "Buy 5 future contracts",
          "Sell 6 future contracts"
        ],
        "answer": 1,
        "explanation": "(₹ 2160000 x 1.3)/ (2310 x ₹ 240) = 5.06 rounded off to 5"
      },
      {
        "question_id": "afm_bos_cs3_2",
        "question": "If  Nifty  index  fall  by  10%  from  2250  to  2025  and  WBL  stock  falls  to  ₹ 212, what will be Net Gain/Loss if portfolio was hedged on NIFTY future?",
        "options": [
          "Net Gain ₹ 3,42,000",
          "Net Gain ₹ 3,02,100",
          "Net Gain ₹ 50,100",
          "Net Gain ₹ 90,000"
        ],
        "answer": 3,
        "explanation": "9000(₹ 212 – ₹ 240) + (2310 – 2025) x 5 x ₹ 240 = ₹ 90,000"
      },
      {
        "question_id": "afm_bos_cs3_3",
        "question": "If  NIFTY  index  rises  by  6%  from  2250  to  2385  and  WBL  stock  rises  to  ₹ 255, what will be Net Gain/Loss when portfolio was in hedged?",
        "options": [
          "Net Loss ₹ 90,000",
          "Net Gain ₹ 45,000",
          "Net Gain ₹ 1,35,000",
          "Net Gain ₹ 90,000"
        ],
        "answer": 1,
        "explanation": "9000(₹ 255 – ₹ 240) + (2310 – 2385) x 5 x ₹ 240 = ₹ 45,000"
      }
    ]
  },
  {
    "case_id": "afm_bos_cs4",
    "case_chapter": [
      "Foreign Exchange Exposure and Risk Management"
    ],
    "caseText": "\n<p>ABC Ltd., a UK firm, has a receivable $ 20 Million due in 6 months. The company wants to cover full exposure. Following information are available:</p>\n\n<p>Spot rate 1$ = £ 0.7720 / £ 0.7840</p>\n\n<p>6 months forward rate 1$ = £ 0.7910 / £ 0.8040 Interest rates are as follows:</p>\n\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"5\">\n  <tr><th>US</th><th>UK</th></tr>\n  <tr><td>6 months deposit rate</td><td>4.50% p.a.</td><td>5.50% p.a.</td></tr>\n  <tr><td>6 months borrowing rate</td><td>6.00% p.a.</td><td>7.50% p.a.</td></tr>\n</table>\n\n<p>Following options on pound are available:</p>\n\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"5\">\n  <tr><th>Option</th><th>Strike rate</th><th>Price</th></tr>\n  <tr><td>Call</td><td>£ 0.8100</td><td>£ 0.01</td></tr>\n  <tr><td>Put</td><td>£ 0.8100</td><td>£ 0.02</td></tr>\n</table>\n\n<p>ABC Limitedhas forecasted the spot rates for 6 months as follows:</p>\n\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"5\">\n  <tr><th>Future Rates of 1$</th><th>Probability</th></tr>\n  <tr><td>£ 0.7800</td><td>30%.</td></tr>\n  <tr><td>£ 0.8100</td><td>50%</td></tr>\n  <tr><td>£ 0.8300</td><td>20%</td></tr>\n</table>\n",
    "questions": [
      {
        "question_id": "afm_bos_cs4_1",
        "question": "What  will  be  the  total  expected  value  of  option  hedge  in  pounds,  if the  full exposure of 20 Million is covered?",
        "options": [
          "£ 16.125 million",
          "£ 16.50 million",
          "£ 15.88 million",
          "£ 15.70 million"
        ],
        "answer": 2,
        "explanation": "[(£ 0.81 x 0.30 + £ 0.81 x 0.50 + £ 0.83 x 0.20) x 20000000] - £ 400000"
      },
      {
        "question_id": "afm_bos_cs4_2",
        "question": "If  ABC  Ltd.  is  using  forward  hedge  strategy,  what  will  be  total  proceed in pound?",
        "options": [
          "£ 15.40 million",
          "£ 15.88 million",
          "£ 16.125 million",
          "£ 15.82 million"
        ],
        "answer": 3,
        "explanation": "£ 0.791 x $ 20000000"
      },
      {
        "question_id": "afm_bos_cs4_3",
        "question": "What will be expected spot rate at the end of 6 months and expected cost (proceed) if no hedge strategy is adopted by the company?",
        "options": [
          "£ 0.805/$, £ 16.10 million",
          "£ 0.85/$, £ 15.8 million",
          "£ 0.7720/$, £ 15.44 million",
          "£ 0.7910/$, £ 15.82 million"
        ],
        "answer": 0,
        "explanation": "(£  0.78  x  0.30  +  £  0.81  x  0.50  +  £  0.83  x  0.20)  =  £  0.805; £ 16.10 million"
      },
      {
        "question_id": "afm_bos_cs4_4",
        "question": "Identify which option gives the highest proceed.",
        "options": [
          "Option hedge",
          "Forward hedge",
          "Money market hedge",
          "No hedge"
        ],
        "answer": 3,
        "explanation": "As no hedging strategy has highest receipt of £."
      }
    ]
  },
  {
    "case_id": "afm_bos_cs5",
    "case_chapter": [
      "Advanced Capital Budgeting Decisions",
      "Risk Management"
    ],
    "caseText": "\n<p>P Ltd. is considering a new project with the following details:</p>\n\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"5\">\n  <tr><th>Initial project cost</th><th>₹ 4,80,000</th></tr>\n  <tr><td>Annual projected sales</td><td>₹ 4,00,000</td></tr>\n  <tr><td>Annual projected variable cost</td><td>₹ 1,60,000</td></tr>\n  <tr><td>Annual projected fixed cost</td><td>₹ 60,000</td></tr>\n  <tr><td>Project life</td><td>4 years</td></tr>\n  <tr><td>Cost of capital</td><td>10% p.a.</td></tr>\n</table>\n\n<p>Consider Cumm. PVF for 4 years @ 10% = 3.169 and @ 11% = 3.103</p>\n\n<p>Note:</p>\n\n<p>(a)        Ignore depreciation on initial project cost and taxation.</p>\n\n<p>(b)        Calculation up to 2 decimal places.</p>\n",
    "questions": [
      {
        "question_id": "afm_bos_cs5_1",
        "question": "If  initial  project  cost  is  varied  adversely  by  10%,  what  is  the  percentage change in NPV?",
        "options": [
          "42.42%",
          "52.80%",
          "53.09%",
          "63.09%"
        ],
        "answer": 2,
        "explanation": "[(90420 – 42420)/90420] x 100 = 53.09%"
      },
      {
        "question_id": "afm_bos_cs5_2",
        "question": "If annual cash inflow  is varied adversely  by  10%, what  is  the percentage change in NPV?",
        "options": [
          "33.38%",
          "53.09%",
          "63.09%",
          "52.80%"
        ],
        "answer": 2,
        "explanation": "[(90420 – 33378)/90420] x 100 = 63.09%"
      },
      {
        "question_id": "afm_bos_cs5_3",
        "question": "If cost of capital is varied adversely by 10%, what is the percentage change in NPV?",
        "options": [
          "11.00%",
          "12.10%",
          "13.14%",
          "14.45%"
        ],
        "answer": 2,
        "explanation": "[(90420 – 78540)]/90420 x 100 = 13.14%"
      }
    ]
  },
  {
    "case_id": "afm_bos_cs6",
    "case_chapter": [
      "Mutual Funds",
      "Securitization"
    ],
    "caseText": "\n<p>Fair  Return  Mutual  Fund  made  an  issue  of  5,00,000  units  @  ₹ 10  each  on 1st  April  2024.  No  entry  load  was  charged.  The  fund  made  the  following investments:</p>\n\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"5\">\n  <tr><th>Particulars</th><th>(₹ )</th></tr>\n  <tr><td>25,000 Equity Shares of ₹ 100 each @ ₹ 160</td><td>40,00,000</td></tr>\n  <tr><td>7% Government Securities (At Par)</td><td>4,00,000</td></tr>\n  <tr><td>9% Debentures (Unlisted) (At Par)</td><td>2,50,000</td></tr>\n  <tr><td>10% Debentures (Listed) (At Par)</td><td>2,50,000</td></tr>\n</table>\n\n<p>49,00,000</p>\n\n<p>During the year dividend of ₹ 6,00,000 were received on equity shares. Interest</p>\n\n<p>on  all  types  of  debt  securities  was  received  as  and  when  due.  Operating expenses paid during the year amounted to ₹ 2,50,000.</p>\n\n<p>At the end of the year equity shares and 10% debentures are quoted at 175% and 90% respectively of the face value. Other investments are valued at par.</p>\n",
    "questions": [
      {
        "question_id": "afm_bos_cs6_1",
        "question": "What is net cash balance of the Mutual Fund at the end of the year?",
        "options": [
          "₹ 1,00,000",
          "₹ 7,00,000",
          "₹ 7,75,500",
          "₹ 5,25,500"
        ],
        "answer": 3,
        "explanation": "₹ 1,00,000 + ₹ 6,00,000 + ₹ 28,000 + ₹ 22,500 + ₹ 25,000 - ₹ 2,50,000"
      },
      {
        "question_id": "afm_bos_cs6_2",
        "question": "What  is  Total  Net  Assets  Value  (NAV)  of  the  Mutual  Fund  at  the  end  of the year?",
        "options": [
          "₹ 52,50,000",
          "₹ 50,25,000",
          "₹ 57,75,500",
          "₹ 49,00,500"
        ],
        "answer": 2,
        "explanation": "175%  x  ₹ 25,00,000  +  ₹ 4,00,000  +  ₹ 2,50,000  +  90%  x  ₹ 2,50,000 + ₹ 5,25,500"
      },
      {
        "question_id": "afm_bos_cs6_3",
        "question": "If the Mutual Fund distributes a dividend of ₹ 0.60 per unit during the year to the unit holders, the NAV per unit at the end of the year will be",
        "options": [
          "₹ 11.551",
          "₹ 10.951",
          "₹ 10.051",
          "₹ 12.751"
        ],
        "answer": 1,
        "explanation": "(₹ 57,75,500 – 5,00,000 x ₹ 0.60)/ 5,00,000"
      }
    ]
  },
  {
    "case_id": "afm_bos_cs7",
    "case_chapter": [
      "Derivatives Analysis and Valuation"
    ],
    "caseText": "\n<p>HHM &amp; Co., is a famous consultant. It has established the following strategy on the stock of PLS Ltd:</p>\n\n<p>(a)      Purchased  one  3-month  call  option  with  a  premium  of  ₹ 25  and  an exercise price of ₹ 750.</p>\n\n<p>(b)      Purchased one 3-month put option with a premium of ₹ 8 and an exercise price of ₹ 600.</p>\n\n<p>The stock of PLS Ltd is currently selling at ₹ 680. The option size is 100 shares of PLS Ltd.</p>\n",
    "questions": [
      {
        "question_id": "afm_bos_cs7_1",
        "question": "What is the Net gain or loss, if the price of the stock remains at ₹ 680 after 3 months?",
        "options": [
          "Net loss of ₹ 3,300",
          "Net gain of ₹ 3,300",
          "Net gain of ₹ 6,700",
          "Net loss of ₹ 6,700"
        ],
        "answer": 0,
        "explanation": "₹ 25 x 100 + ₹ 8 x 100"
      },
      {
        "question_id": "afm_bos_cs7_2",
        "question": "What is the Net gain or loss, if the price of the stock falls to ₹ 500 after 3 months?",
        "options": [
          "Net loss of ₹ 3,300",
          "Net gain of ₹ 3,300",
          "Net gain of ₹ 6,700",
          "Net loss of ₹ 6,700"
        ],
        "answer": 2,
        "explanation": "100 (₹ 600 - ₹ 500) - ₹ 3,300"
      },
      {
        "question_id": "afm_bos_cs7_3",
        "question": "What is the Net gain or loss, if the price of the stock rises to ₹ 820?",
        "options": [
          "Net loss of ₹ 3,700",
          "Net gain of ₹ 3,700",
          "Net gain of ₹ 10,300",
          "Net loss of ₹ 10,300"
        ],
        "answer": 1,
        "explanation": "100 (₹ 820 - ₹ 750) - ₹ 3,300"
      }
    ]
  },
  {
    "case_id": "afm_bos_cs8",
    "case_chapter": [
      "Foreign Exchange Exposure and Risk Management"
    ],
    "caseText": "\n<p>On 3rd April, 2025, Royal Bank quotes the following:</p>\n\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"5\">\n  <tr><th>Bid</th><th>Ask</th></tr>\n  <tr><td>Spot Exchange Rate (US$ 1)</td><td>₹ 84.2525</td><td>₹ 85.5945</td></tr>\n  <tr><td>2 months’ swap points</td><td>60</td><td>80</td></tr>\n  <tr><td>3 months’ swap points</td><td>150</td><td>178</td></tr>\n</table>\n\n<p>In a spot transaction, delivery is made after two days.</p>\n\n<p>Assume spot date as 5th April, 2025 and 1 swap point = 0.0001. Calculation up to 4 decimal places.</p>\n",
    "questions": [
      {
        "question_id": "afm_bos_cs8_1",
        "question": "The swap points for 2 months & 15 days (i.e., for 20th June, 2025) will be",
        "options": [
          "Bid – 90 and Ask – 98",
          "Bid – 105 and Ask – 129",
          "Bid – 98 and Ask – 90",
          "Bid – 129 and Ask – 105"
        ],
        "answer": 1,
        "explanation": "60 + (150 - 60)15/30; 80 + (178 -  80) 15/30"
      },
      {
        "question_id": "afm_bos_cs8_2",
        "question": "Foreign exchange rate for 20th June, 2025 will be",
        "options": [
          "Bid – ₹ 85.2525 and Ask – ₹ 84.5945",
          "Bid – ₹ 84.5945 and Ask – ₹ 85.2525",
          "Bid – ₹ 84.2630 and Ask – ₹ 85.6074",
          "Bid – ₹ 85.6074 and Ask – ₹ 84.2630"
        ],
        "answer": 2,
        "explanation": "₹ 84.2525 + ₹ 0.0105; ₹ 85.5945 + ₹ 0.0129"
      },
      {
        "question_id": "afm_bos_cs8_3",
        "question": "On  an  average  rate,  the  annual  rate  of  premium/discount  of  US  $  on Indian ₹ will be",
        "options": [
          "Bid – 0.0498% and Ask – 0.0524% (Premium)",
          "Bid – 0.0598% and Ask – 0.0723% (Discount)",
          "Bid – 0.0723% and Ask – 0.0598 % (Premium)",
          "Bid – 0.0598% and Ask – 0.0723% (Premium)"
        ],
        "answer": 3,
        "explanation": "0.0105  × 12 ;    0.0129  × 12 84.25775   2.5    85.60095   2.5"
      }
    ]
  },
  {
    "case_id": "afm_bos_cs9",
    "case_chapter": [
      "Mergers, Acquisitions and Corporate Restructuring"
    ],
    "caseText": "\n<p>ABC Ltd. is planning to acquire XYZ Ltd. The following information is available in this respect:</p>\n\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"5\">\n  <tr><th>Company</th><th>No. of Shares</th><th>Market Price Per Share (₹ )</th><th>P/E Ratio</th></tr>\n  <tr><td>ABC Ltd.</td><td>12,00,000</td><td>16</td><td>20 times</td></tr>\n  <tr><td>XYZ Ltd.</td><td>4,00,000</td><td>20</td><td>10 times</td></tr>\n</table>\n\n<p>ABC Ltd. plans to acquire the whole of XYZ Ltd. by issuing shares at its market price of ₹ 16. It is expected that the price of ABC Ltd. share will remain constant after this acquisition. Purchase Consideration is ₹ 80,00,000.</p>\n\n<p>Calculation up to 2 decimal places.</p>\n",
    "questions": [
      {
        "question_id": "afm_bos_cs9_1",
        "question": "EPS of ABC Ltd. & XYZ Ltd. before acquisition are respectively",
        "options": [
          "₹ 0.8 & ₹ 2.0",
          "₹ 2.0 & ₹ 0.8",
          "₹ 0.8 & ₹ 1.04",
          "₹ 1.04 & ₹ 0.8"
        ],
        "answer": 0,
        "explanation": "16/20; 20/10"
      },
      {
        "question_id": "afm_bos_cs9_2",
        "question": "EPS of ABC Ltd. after acquisition is",
        "options": [
          "₹ 0.84",
          "₹ 0.96",
          "₹ 1.04",
          "₹ 1.14"
        ],
        "answer": 2,
        "explanation": "[(0.8 x 1200000) + (2.0 x 400000)]/[1200000 + (400000 x 20/16)]"
      },
      {
        "question_id": "afm_bos_cs9_3",
        "question": "P/E Ratio of ABC Ltd. after acquisition is",
        "options": [
          "20 times",
          "15.38 times",
          "10 times",
          "14.55 times"
        ],
        "answer": 1,
        "explanation": "₹ 16/ ₹ 1.04"
      }
    ]
  },
  {
    "case_id": "afm_bos_cs10",
    "case_chapter": [
      "Derivatives Analysis and Valuation"
    ],
    "caseText": "\n<p>A  and  B  are  two  friends.  Since  B  has  earned  a  lot  of  profit  from  trading  in financial derivative market, A is also considering speculating on G Ltd.’s shares which  is  currently  trading  at  ₹ 1,400  per  share  through  taking  positions  in options  in  stocks  of  same  company.  Accordingly,  A  took  following  contract positions in the options on G Ltd.’s stock:</p>\n\n<p>(i)       Selling one contract of 2-month call option with a premium of ₹ 70 and an exercise price of ₹ 1,500.</p>\n\n<p>(ii)      Purchasing one contract  of 2-month put option with a premium of ₹ 50 and an exercise price of ₹ 1,200.</p>\n",
    "questions": [
      {
        "question_id": "afm_bos_cs10_1",
        "question": "Assuming  that  the  contract  size  of  each  option  contract  is  200  and  the price of G Ltd.’s share after two months falls to ₹ 1,100, the net pay-off of A will be………",
        "options": [
          "₹ 24,000 loss",
          "₹ 24,000 profit",
          "₹ 40,000 profit",
          "₹ 40,000 loss"
        ],
        "answer": 1,
        "explanation": "(₹ 1,200 -  ₹ 1,100) x 200 + ₹ 70 x 200 - ₹ 50 x200 = ₹ 24,000"
      },
      {
        "question_id": "afm_bos_cs10_2",
        "question": "The per share price of G Ltd.’s stock after 2 months at which A shall be at Break Even is…..",
        "options": [
          "₹ 1,180",
          "₹ 1,200",
          "₹ 1,250",
          "₹ 1,570"
        ],
        "answer": 0,
        "explanation": "₹ 1,200 – (₹ 70 - ₹ 50) = ₹ 1,180"
      },
      {
        "question_id": "afm_bos_cs10_3",
        "question": "Assuming  that  the  contract  size  of  each  option  contract  is  300  and  the price of G Ltd.’s share after two months raises to ₹ 1,600, the net pay-off of A will be………",
        "options": [
          "₹ 24,000 loss",
          "₹ 66,000 loss",
          "₹ 24,000 profit",
          "₹ 66,000 profit"
        ],
        "answer": 0,
        "explanation": "(₹ 1,500 -  ₹ 1,600) x 300 + ₹ 70 x 300 - ₹ 50 x 300 = - ₹ 24,000"
      }
    ]
  },
  {
    "case_id": "afm_bos_cs11",
    "case_chapter": [
      "Mergers, Acquisitions and Corporate Restructuring"
    ],
    "caseText": "\n<p>A Ltd. wants to acquire D Ltd. and has offered a swap ratio of 1:2 (0.5 shares for every one share of D Ltd.). Following information is provided:</p>\n\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"5\">\n  <tr><th>A Ltd.</th><th>D Ltd.</th></tr>\n  <tr><td>Profit after tax</td><td>₹ 72,00,000</td><td>₹ 14,40,000</td></tr>\n  <tr><td>Equity shares outstanding (Nos.)</td><td>24,00,000</td><td>7,20,000</td></tr>\n  <tr><td>PE Ratio</td><td>5 times</td><td>3.5 times</td></tr>\n  <tr><td>Market price per share</td><td>₹ 15</td><td>₹ 7</td></tr>\n</table>\n",
    "questions": [
      {
        "question_id": "afm_bos_cs11_1",
        "question": "The  number of  equity  shares  to  be  issued  by  A  Ltd.  for acquisition  of D Ltd. would be………………",
        "options": [
          "3,36,000",
          "3,60,000",
          "4,80,000",
          "6,00,000"
        ],
        "answer": 1,
        "explanation": "720000 x 0.50 = 360000"
      },
      {
        "question_id": "afm_bos_cs11_2",
        "question": "The EPS of A Ltd. after the acquisition would be………………",
        "options": [
          "₹ 2",
          "₹ 3",
          "₹ 3.13",
          "₹ 4.00"
        ],
        "answer": 2,
        "explanation": "(₹ 72,00,000 + ₹ 14,40,000)/(2400000 + 360000) = ₹ 3.13"
      },
      {
        "question_id": "afm_bos_cs11_3",
        "question": "The equivalent earnings per share of D Ltd. would be………..",
        "options": [
          "₹ 1",
          "₹ 1.50",
          "₹ 1.57",
          "₹ 2.00"
        ],
        "answer": 2,
        "explanation": "₹ 3.13 x 0.50 = ₹ 1.57"
      },
      {
        "question_id": "afm_bos_cs11_4",
        "question": "If  A  Ltd. PE  multiple remains unchanged  then market capitalisation of A Ltd. after the acquisition would be………………",
        "options": [
          "₹ 50.40 Lakh",
          "₹ 360.00 Lakh",
          "₹ 431.94 Lakh",
          "₹ 400.00 Lakh"
        ],
        "answer": 2,
        "explanation": "(₹ 3.13 x 5 = ₹ 15.65) x 2760000"
      }
    ]
  },
  {
    "case_id": "afm_bos_cs12",
    "case_chapter": [
      "Business Valuation",
      "Financial Policy and Corporate Strategy"
    ],
    "caseText": "\n<p>During one business meeting at ABC Ltd., one of the members presented data relating  to 3  companies  X  Ltd., Y  Ltd. and  Z  Ltd.  whose  operating Income  are equal, but their capital structure is different.</p>\n\n<p>(in ₹ 000)</p>\n\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"5\">\n  <tr><th>X Ltd.</th><th>Y Ltd.</th><th>Z Ltd.</th></tr>\n  <tr><td>Total invested capital</td><td>40,00,000</td><td>40,00,000</td><td>40,00,000</td></tr>\n  <tr><td>Debt/Assets ratio</td><td>0.8</td><td>0.5</td><td>0.2</td></tr>\n  <tr><td>Shares outstanding</td><td>1,22,000</td><td>1,66,000</td><td>2,00,000</td></tr>\n  <tr><td>Post tax Cost of Debt</td><td>10.40%</td><td>8.45%</td><td>9.75%</td></tr>\n  <tr><td>Cost of Equity</td><td>26%</td><td>22%</td><td>20%</td></tr>\n  <tr><td>Operating Income (EBIT)</td><td>10,00,000</td><td>10,00,000</td><td>10,00,000</td></tr>\n</table>\n\n<p>The Tax rate is uniform 35% in all cases. The industry PE ratio is 10X.</p>\n",
    "questions": [
      {
        "question_id": "afm_bos_cs12_1",
        "question": "The  weighted  average  cost  of  capital  of  Y  Ltd.  shall  be  approximately …………….",
        "options": [
          "13.52%",
          "15.23%",
          "17.95%",
          "18.00%"
        ],
        "answer": 1,
        "explanation": "8.45% x 0.50 + 22% x 0.50 = 15.23%"
      },
      {
        "question_id": "afm_bos_cs12_2",
        "question": "The Economic Valued Added (EVA) of X Ltd. is…………….",
        "options": [
          "₹ 109200 Thousand",
          "₹ 171600 Thousand",
          "₹ 282000 Thousand",
          "₹ 391000 Thousand"
        ],
        "answer": 0,
        "explanation": "1000000(1 – 0.35) – [{10.40% x 0.80 + 26% x 0.20} 4000000]"
      },
      {
        "question_id": "afm_bos_cs12_3",
        "question": "The price per share of Z Ltd. shall be ……………..",
        "options": [
          "₹ 28.60",
          "₹ 31.90",
          "₹ 31.46",
          "₹ 29.45"
        ],
        "answer": 0,
        "explanation": "[{1000000(1 – 0.35)  – 0.20 x 4000000 x 9.75%} x 10]/200000"
      },
      {
        "question_id": "afm_bos_cs12_4",
        "question": "The estimated market capitalisation of Y Ltd. is…………….",
        "options": [
          "₹ 80,29,900 Thousand",
          "₹ 48,10,000 Thousand",
          "₹ 52,91,000 Thousand",
          "₹ 59,41,650 Thousand"
        ],
        "answer": 1,
        "explanation": "[{1000000 x (1 – 0.35) – 0.50 x 4000000 x 8.45%} x 10]"
      },
      {
        "question_id": "afm_bos_cs12_5",
        "question": "Earning per share of X Ltd. approximately is……………..",
        "options": [
          "₹ 2.60",
          "₹ 2.90",
          "₹ 2.86",
          "₹ 2.15"
        ],
        "answer": 0,
        "explanation": "[{1000000 x (1 – 0.35) – 0.80 x 4000000 x 10.40%} ]/ 122000"
      }
    ]
  },
  {
    "case_id": "afm_bos_cs13",
    "case_chapter": [
      "Security Valuation"
    ],
    "caseText": "\n<p>XYZ Ltd. is planning to expand its business and therefore raising fund by issuing a Convertible Bond of ₹ 10 crore. An investor “Mr. A” is interested to invest in the bond of XYZ Ltd. Mr. A has following data related to the Convertible Bond.</p>\n\n<p>The data given below relates to a convertible bond:</p>\n\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"5\">\n  <tr><th>Face value</th><th>₹ 1000</th></tr>\n  <tr><td>Coupon rate</td><td>12%</td></tr>\n  <tr><td>No. of shares per bond</td><td>20</td></tr>\n  <tr><td>Market price of share</td><td>₹ 48</td></tr>\n  <tr><td>Straight value of bond</td><td>₹ 940</td></tr>\n  <tr><td>Market price of convertible bond</td><td>₹ 1060</td></tr>\n  <tr><td>Maturity</td><td>5 Years</td></tr>\n</table>\n",
    "questions": [
      {
        "question_id": "afm_bos_cs13_1",
        "question": "The conversion value of the convertible bond is……………..",
        "options": [
          "₹ 960",
          "₹ 1000",
          "₹ 1060",
          "₹ 940"
        ],
        "answer": 0,
        "explanation": "Conversion  value  = Market price  of  share ×  No.  of  shares per bond = ₹ 48 × 20 = ₹ 960"
      },
      {
        "question_id": "afm_bos_cs13_2",
        "question": "The conversion premium of the bond in absolute terms is……………..",
        "options": [
          "₹ 60",
          "₹ 100",
          "₹ 120",
          "₹ 80"
        ],
        "answer": 1,
        "explanation": "Conversion premium = Market price of convertible bond − Conversion value = ₹ 1060 − ₹ 960 = ₹ 100"
      },
      {
        "question_id": "afm_bos_cs13_3",
        "question": "The floor value of the convertible bond is represented by…………",
        "options": [
          "Market price of share",
          "Conversion value",
          "Straight value of bond",
          "Face value of bond"
        ],
        "answer": 2,
        "explanation": "Straight   value   represents   the   downside   protection   or investment value for the investor."
      },
      {
        "question_id": "afm_bos_cs13_4",
        "question": "The   upside   potential   of   the   convertible   bond   primarily   depends on……………..",
        "options": [
          "Coupon rate of the bond",
          "Face value of the bond",
          "Market price movement of the equity shares",
          "Remaining maturity of the bond"
        ],
        "answer": 2,
        "explanation": "The  upside  potential  arises  from  the  appreciation  in  the underlying equity share price."
      },
      {
        "question_id": "afm_bos_cs13_5",
        "question": "By  approximately what percentage the market price of the share should rise so that the investor is indifferent between buying the share from the market and taking conversion route.",
        "options": [
          "12.77%",
          "10.42%",
          "5.11%",
          "9.23%"
        ],
        "answer": 1,
        "explanation": " 1060 -48     20                           48"
      }
    ]
  },
  {
    "case_id": "afm_bos_cs14",
    "case_chapter": [
      "Portfolio Management",
      "Security Valuation"
    ],
    "caseText": "\n<p>A Ltd. paid a dividend of ₹ 5 for the last year. The dividend is expected to grow at  25%  for  the  next  6  years  and  at  10%  per  annum  thereafter.  The  standard deviation of market return and A Ltd.’s share is 12% and 18% respectively. The correlation between market return and A Ltd. share return is 0.3733. The return of  government  bond  is  13%  per  annum  and  market  return  is  expected  to  be around 20%.</p>\n",
    "questions": [
      {
        "question_id": "afm_bos_cs14_1",
        "question": "The beta (β) of A Ltd.’s share is closest to……………………",
        "options": [
          "0.42",
          "0.56",
          "0.67",
          "0.84"
        ],
        "answer": 1,
        "explanation": "β = Correlation × (σ share / σ market) = 0.3733 × (18% / 12%) = 0.3733 × 1.5 ≈ 0.56"
      },
      {
        "question_id": "afm_bos_cs14_2",
        "question": "The equity risk premium as per the given data is…………………………",
        "options": [
          "5%",
          "6%",
          "7%",
          "8%"
        ],
        "answer": 2,
        "explanation": "Equity risk premium = Market return − Risk-free rate = 20% − 13% = 7%"
      },
      {
        "question_id": "afm_bos_cs14_3",
        "question": "The valuation approach can be used to compute the intrinsic  value of A Ltd. shares is……",
        "options": [
          "Single-stage Dividend Discount Model",
          "CAPM valuation model",
          "Two-stage Dividend Discount Model",
          "Price–Earnings valuation model"
        ],
        "answer": 2,
        "explanation": "Different   growth   rates   are   applicable  for   two   different phases."
      },
      {
        "question_id": "afm_bos_cs14_4",
        "question": "If  the  market  price  of  A  Ltd.  share  is  higher  than  its  intrinsic  value,  the share is said to be………………..",
        "options": [
          "Under-valued",
          "Over-valued",
          "Fairly valued",
          "Speculative"
        ],
        "answer": 1,
        "explanation": "Very often the price of over-valued share is driven by hype, speculation,   or   temporary   optimism   rather   than   solid fundamentals."
      }
    ]
  },
  {
    "case_id": "afm_bos_cs15",
    "case_chapter": [
      "Portfolio Management",
      "Security Valuation",
      "Interest Rate Risk Management",
      "Business Valuation",
      "Risk Management"
    ],
    "caseText": "\n<p>The following information is available in respect of Bond X and Bond Y.</p>\n\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"5\">\n  <tr><th>Bond X</th><th>Bond Y</th></tr>\n  <tr><td>Face value, redeemable at par</td><td>₹ 1000</td><td>₹ 1000</td></tr>\n  <tr><td>Coupon rate, payable annually (%)</td><td>6%</td><td>10%</td></tr>\n  <tr><td>Time to maturity (years)</td><td>5</td><td>3</td></tr>\n</table>\n\n<p>Mr.  A,  an  investor  has  the  portfolio  consisting  of  75%  of  Bond  X  and  25%  of Bond Y. The current YTMs prevailing in the market is 10%.</p>\n\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"5\">\n  <tr><th>Year (n) :</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr>\n  <tr><td>PVIF (10%, n) :</td><td>0.9091</td><td>0.8264</td><td>0.7513</td><td>0.6830</td><td>0.6209</td></tr>\n</table>\n",
    "questions": [
      {
        "question_id": "afm_bos_cs15_1",
        "question": "At the prevailing YTM the Bond X will trade at………………..",
        "options": [
          "Premium",
          "Discount",
          "Par",
          "Variable prices"
        ],
        "answer": 1,
        "explanation": "Since Coupon rate (6%) < YTM (10%), hence bond trades at a discount."
      },
      {
        "question_id": "afm_bos_cs15_2",
        "question": "The Macaulay duration of a bond is best described as……………",
        "options": [
          "Bond X",
          "Bond Y",
          "Both Bonds",
          "Cannot be determined"
        ],
        "answer": 1,
        "explanation": "It can be understood as the average time taken to receive the cash flows on a given bond."
      },
      {
        "question_id": "afm_bos_cs15_4",
        "question": "If  the  investor  wants  to  reduce  interest  rate  risk  of  the  portfolio,  he should……….",
        "options": [
          "increase weight of Bond X.",
          "increase weight of Bond Y.",
          "increase maturity of bonds.",
          "increase coupon rate of Bond X."
        ],
        "answer": 1,
        "explanation": "Bond Y has shorter duration hence lower interest rate risk."
      }
    ]
  },
  {
    "case_id": "afm_bos_cs16",
    "case_chapter": [
      "Derivatives Analysis and Valuation"
    ],
    "caseText": "\n<p>Following  information  is  related  to  actions  taken  in  different  situation  of financial options:</p>\n\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"5\">\n  <tr><th>Situation</th><th>Action</th><th>Exercise Price</th><th>Premium</th><th>Spot Price</th></tr>\n  <tr><td>I</td><td>Exercised</td><td>2800</td><td>400</td><td>3200</td></tr>\n  <tr><td>II</td><td>Exercised</td><td>4000</td><td>300</td><td>3500</td></tr>\n  <tr><td>III</td><td>Lapsed</td><td>6000</td><td>1000</td><td>8000</td></tr>\n</table>\n",
    "questions": [
      {
        "question_id": "afm_bos_cs16_1",
        "question": "The investor incurs a loss equal to the premium paid in……………..",
        "options": [
          "Situation I",
          "Situation II",
          "Situation III",
          "Situations I and II"
        ],
        "answer": 2,
        "explanation": "When   an   option   lapses,   the   maximum   loss   equals   the premium paid."
      },
      {
        "question_id": "afm_bos_cs16_2",
        "question": "In which situation, the option is classified as in-the-money.",
        "options": [
          "Situation I",
          "Situation II",
          "Situation III",
          "Situations I and II"
        ],
        "answer": 3,
        "explanation": "Spot price (160) > Exercise price (140), hence a call option is in-the-money. Spot price (175) < Exercise price (200), hence a call option is in-the-money."
      },
      {
        "question_id": "afm_bos_cs16_3",
        "question": "In Situation II, the intrinsic value of the option is…………………………..",
        "options": [
          "Situation I",
          "Situation II",
          "Situation III",
          "Situations I and II"
        ],
        "answer": 3,
        "explanation": "Intrinsic value of put option = Exercise price − Spot price = ₹ 4000 − ₹ 3500 = ₹ 500"
      },
      {
        "question_id": "afm_bos_cs16_5",
        "question": "The  relationship  between  spot  price  and  exercise  price  in  Situation  II indicates…………",
        "options": [
          "Call option in-the-money",
          "Call option out-of-the-money",
          "Put option in-the-money",
          "Put option out-of-the-money"
        ],
        "answer": 2,
        "explanation": "Spot  price  is  less  than  Exercise  Price  and  hence  Option  is exercised."
      }
    ]
  },
  {
    "case_id": "afm_bos_cs17",
    "case_chapter": [
      "Mergers, Acquisitions and Corporate Restructuring"
    ],
    "caseText": "\n<p>The  company  ABC  Ltd.  proposes  to  take  over  XYZ  Ltd.  The  chief  executive  of the company  thinks  that  shareholders  always  look  for  the  earnings  per  share. Therefore,   he   considers   maximization   of   the   earnings   per   share   as   his company’s  objective.  The  following  information  is  available  in  respect  of  ABC Ltd. and XYZ Ltd.</p>\n\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"5\">\n  <tr><th>ABC Ltd.</th><th>XYZ Ltd.</th></tr>\n  <tr><td>Net Profit (Post Tax)</td><td>₹ 400 Lakh</td><td>₹ 315 Lakh</td></tr>\n  <tr><td>P/E ratio</td><td>10.50</td><td>10.00</td></tr>\n  <tr><td>Current market price per share</td><td>₹ 840</td><td>₹ 1700</td></tr>\n</table>\n\n<p>The company is planning to borrow funds @ 15% rate of interest and buys out the target company by paying cash.</p>\n\n<p>Assume tax rate @30%.</p>\n",
    "questions": [
      {
        "question_id": "afm_bos_cs17_1",
        "question": "The total market value of equity of XYZ Ltd. is approximately……………..",
        "options": [
          "₹ 3150 lakh",
          "₹ 3400 lakh",
          "₹ 4200 lakh",
          "₹ 16800 lakh"
        ],
        "answer": 0,
        "explanation": "₹ 315 Lakh x 10.00 = ₹ 3150 Lakh"
      },
      {
        "question_id": "afm_bos_cs17_2",
        "question": "Suppose if XYZ Ltd. is borrowing funds at a high interest rate to finance acquisition it will affect its EPS mainly due to…………………",
        "options": [
          "increase in operating profit.",
          "increase in interest burden.",
          "increase in market price of shares.",
          "increase in tax liability."
        ],
        "answer": 1,
        "explanation": "This  will  increase  the  outflow  of  cash  on  account  of  higher interest as well as will increase in financial risk."
      },
      {
        "question_id": "afm_bos_cs17_3",
        "question": "Suppose  if  ABC  Ltd.  is  offering  about  ₹  4030  Lakh  to  XYZ  Ltd.  for  the proposed acquisition it will result in……………….",
        "options": [
          "EPS accretion",
          "EPS dilution",
          "No Change",
          "Risk free EPS"
        ],
        "answer": 1,
        "explanation": "Post acquisition the EPS will be reduced to ₹ 58.37."
      }
    ]
  },
  {
    "case_id": "afm_bos_cs18",
    "case_chapter": [
      "Derivatives Analysis and Valuation",
      "Security Valuation",
      "Interest Rate Risk Management"
    ],
    "caseText": "\n<p>A Ltd. is planning to borrow an amount of ₹ 300 crores for a period of 3 months in the coming 6 months’ time from now. The current rate of interest is 9% p.a., but it is likely  to go up in 6 months’ time. The company wants to hedge itself against the likely increase in interest rate.</p>\n\n<p>You  as  CFO  has  been  asked  to  suggest  both  traditional  as  well  as  modern methods to hedge interest rate risk.</p>\n\n<p>Suppose the banker of A Ltd. has quoted the following Forward Rate Agreement (FRA) rates:</p>\n\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"5\">\n  <tr><th>3 x 6</th><th>8.10%</th><th>8.15%</th></tr>\n  <tr><td>6 x 9</td><td>8.20%</td><td>8.30%</td></tr>\n  <tr><td>9 x 12</td><td>8.35%</td><td>8.45%</td></tr>\n</table>\n\n<p>A Ltd. has already issued redeemable bonds or debentures.</p>\n",
    "questions": [
      {
        "question_id": "afm_bos_cs18_1",
        "question": "In  an  FRA  contract,  the  company  intending  to  borrow  funds  in  future should……….",
        "options": [
          "buy FRA at bid rate.",
          "sell FRA at bid rate.",
          "buy FRA at offer rate.",
          "sell FRA at offer rate."
        ],
        "answer": 2,
        "explanation": "A  future  borrower  buys  FRA  at  the  offer  rate  to  lock  in borrowing cost."
      },
      {
        "question_id": "afm_bos_cs18_2",
        "question": "If interest rates rise above the FRA rate, the A Ltd. under FRA will……………",
        "options": [
          "incur loss and pay banker.",
          "neither gain nor lose.",
          "receive compensation from banker.",
          "cancel the contract."
        ],
        "answer": 2,
        "explanation": "FRA compensates the borrower when market rates exceed the agreed rate."
      },
      {
        "question_id": "afm_bos_cs18_3",
        "question": "The settlement under an FRA is made……………",
        "options": [
          "at the end of the loan period.",
          "at the beginning of the loan period.",
          "at the maturity of FRA.",
          "along with repayment of principal."
        ],
        "answer": 1,
        "explanation": "FRA is settled at the start of the underlying loan period."
      },
      {
        "question_id": "afm_bos_cs18_4",
        "question": "The FRA settlement amount is discounted because………………",
        "options": [
          "interest rates are uncertain",
          "FRA is settled in advance",
          "principals are not exchanged",
          "only interest differential is paid"
        ],
        "answer": 1,
        "explanation": "Settlement  relates  to  a  future  interest  period  but  is  paid upfront."
      },
      {
        "question_id": "afm_bos_cs18_5",
        "question": "Interest Rate Futures differ from FRAs mainly because Futures are…………",
        "options": [
          "OTC instruments",
          "tailor-made contracts",
          "standardised and exchange traded",
          "settled only at maturity"
        ],
        "answer": 2,
        "explanation": "Except (c) other points features are related to FRA."
      }
    ]
  },
  {
    "case_id": "afm_bos_cs19",
    "case_chapter": [
      "Derivatives Analysis and Valuation",
      "Foreign Exchange Exposure and Risk Management",
      "Business Valuation"
    ],
    "caseText": "\n<p>ABC  Inc.,  a  U.S.  firm,  will  require  £  600,000  in  6  months  and  is  evaluating different strategies to hedge against currency risk. The available market data is as follows:</p>\n\n<p>Current Spot Rate: 1 £ = $ 2.50</p>\n\n<p>6-months Forward Rate: 1 £ = $ 2.45</p>\n\n<p>Interest Rates:</p>\n\n<p>•         UK (per annuam):</p>\n\n<p>o        Deposit Rate: 9.00%</p>\n\n<p>o        Borrowing Rate: 10.00%</p>\n\n<p>•         US (per annuam):</p>\n\n<p>o        Deposit Rate: 10%</p>\n\n<p>o        Borrowing Rate: 11.00%</p>\n\n<p>Option Contract:</p>\n\n<p>•         Call option available on £, expiring in 6 months with:</p>\n\n<p>o        Exercise price: $ 2.46</p>\n\n<p>o        Premium: $ 0.05</p>\n\n<p>ABC Inc. has forecasted the following probabilities for spot rates after 6 months:</p>\n\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"5\">\n  <tr><th>Spot Rate</th><th>Probability</th></tr>\n  <tr><td>$ 2.39</td><td>25%</td></tr>\n  <tr><td>$ 2.44</td><td>60%</td></tr>\n  <tr><td>$ 2.56</td><td>15%</td></tr>\n</table>\n",
    "questions": [
      {
        "question_id": "afm_bos_cs19_1",
        "question": "Since ABC Inc. will require £ 600,000 in future, it is said to be…………………..",
        "options": [
          "Long in £",
          "Short in £",
          "Long in $",
          "Neutral in currency"
        ],
        "answer": 1,
        "explanation": "Future payment in pounds means exposure to appreciation of £."
      },
      {
        "question_id": "afm_bos_cs19_2",
        "question": "Under a forward contract, the dollar cost of £ 600,000 is…………………",
        "options": [
          "certain but flexible",
          "uncertain but capped",
          "certain and fixed",
          "nil"
        ],
        "answer": 2,
        "explanation": "Forward contract locks in the exchange rate."
      },
      {
        "question_id": "afm_bos_cs19_3",
        "question": "Which   hedging   technique   allows   ABC   Inc.   to   benefit   if   the   Pound depreciates while protecting against appreciation?",
        "options": [
          "Forward contract",
          "Money market hedge",
          "Call option on £",
          "Futures contract"
        ],
        "answer": 2,
        "explanation": "Options provide downside protection with upside benefit."
      },
      {
        "question_id": "afm_bos_cs19_4",
        "question": "If  the  spot  rate  after  6  months  happens  to  be  $  2.39/£,  ABC  Inc.  under option hedge will………..",
        "options": [
          "exercise the option.",
          "let the option lapse.",
          "cancel the contract.",
          "incur loss equal to intrinsic value."
        ],
        "answer": 1,
        "explanation": "Market rate is better than exercise price."
      },
      {
        "question_id": "afm_bos_cs19_5",
        "question": "Which of the following hedging methods involves borrowing and lending in two currencies simultaneously?",
        "options": [
          "Forward hedge",
          "Option hedge",
          "Money market hedge",
          "Futures hedge"
        ],
        "answer": 2,
        "explanation": "In remaining methods only one transaction in two currencies is involved."
      }
    ]
  },
  {
    "case_id": "afm_bos_cs20",
    "case_chapter": [
      "Portfolio Management",
      "Interest Rate Risk Management",
      "Business Valuation"
    ],
    "caseText": "\n<p>An investor is evaluating two companies, X Ltd. and Y Ltd., to determine which company  is  a  better  investment.  Both  companies  have  different  expected returns, standard deviations, and betas.</p>\n\n<p>•         X  Ltd.  has  an  expected  return  of  22%  and  a  standard  deviation  (risk)  of 40%. Its Beta is 0.86.</p>\n\n<p>•         Y Ltd. has an expected return of 24%, a standard deviation of 38%, and a Beta of 1.24.</p>\n\n<p>The correlation coefficient between the returns of X Ltd. and Y Ltd.is 0.72, and the standard deviation of the market return is 20%.</p>\n",
    "questions": [
      {
        "question_id": "afm_bos_cs20_1",
        "question": "Which company is expected to be more volatile in absolute terms?",
        "options": [
          "X Ltd.",
          "Y Ltd.",
          "Both have equal volatility",
          "Depends on correlation"
        ],
        "answer": 0,
        "explanation": "Volatility  is  measured  by  standard  deviation;  X  Ltd.  has higher SD (40%)."
      },
      {
        "question_id": "afm_bos_cs20_2",
        "question": "The  correlation  coefficient  of  0.72  between  X  Ltd.  and  Y  Ltd.  implies that……………",
        "options": [
          "the stocks move in opposite directions.",
          "the stocks are perfectly correlated.",
          "there is strong positive co-movement.",
          "there is no diversification benefit."
        ],
        "answer": 2,
        "explanation": "A correlation of 0.72 indicates strong positive relationship."
      },
      {
        "question_id": "afm_bos_cs20_3",
        "question": "If  the correlation  between  X  Ltd. and  Y Ltd. were zero,  the  portfolio  risk would…………..",
        "options": [
          "increase",
          "decrease",
          "remain unchanged",
          "become zero"
        ],
        "answer": 1,
        "explanation": "Lower correlation improves diversification benefits."
      },
      {
        "question_id": "afm_bos_cs20_4",
        "question": "Which type of risk can be reduced by forming a portfolio of X Ltd. and Y Ltd.?",
        "options": [
          "Political risk",
          "Market risk",
          "Unsystematic risk",
          "Interest rate risk"
        ],
        "answer": 2,
        "explanation": "Other  types  of  risks  are  systematic  risks  which  cannot  be reduced or eliminated through diversification."
      },
      {
        "question_id": "afm_bos_cs20_5",
        "question": "If  market  volatility  increases  but  betas  remain  unchanged,  the  expected return as per CAPM will………………",
        "options": [
          "Increase",
          "Decrease",
          "Remain unchanged",
          "Become zero"
        ],
        "answer": 2,
        "explanation": "CAPM depends on beta, not total volatility."
      }
    ]
  },
  {
    "case_id": "afm_bos_cs21",
    "case_chapter": [
      "Security Valuation"
    ],
    "caseText": "\n<p>ABC  Ltd.  plans  to  invest  ₹ 16,00,000  in  a  new  unit.  The  project  is  expected  to have  a  useful  life  of  4  years,  with  no  salvage  value  at  the  end  of  its  life.  The annual depreciation charge for the project is ₹ 4,00,000.</p>\n\n<p>Projected revenues and costs for the project, ignoring inflation, are provided as follows:</p>\n\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"5\">\n  <tr><th>Year</th><th>Revenues (₹ )</th><th>Costs (₹ )</th></tr>\n  <tr><td>1</td><td>12,00,000</td><td>6,00,000</td></tr>\n  <tr><td>2</td><td>14,00,000</td><td>8,00,000</td></tr>\n  <tr><td>3</td><td>16,00,000</td><td>8,00,000</td></tr>\n  <tr><td>4</td><td>16,00,000</td><td>8,00,000</td></tr>\n</table>\n\n<p>ABC Ltd. is subject to a corporate tax rate of 60%, and the cost of capital for the project, including inflation premium, is 10%.</p>\n\n<p>Depreciation provides a tax benefit, and inflation rates for revenues and costs over the project’s lifespan are as follows:</p>\n\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"5\">\n  <tr><th>Year</th><th>Revenue Inflation</th><th>Cost Inflation</th></tr>\n  <tr><td>1</td><td>10%</td><td>12%</td></tr>\n  <tr><td>2</td><td>9%</td><td>10%</td></tr>\n  <tr><td>3</td><td>8%</td><td>9%</td></tr>\n  <tr><td>4</td><td>7%</td><td>8%</td></tr>\n</table>\n",
    "questions": [
      {
        "question_id": "afm_bos_cs21_1",
        "question": "Inflation    adjustment    of    revenues    and    costs    is    required    mainly because………………………",
        "options": [
          "Cost of capital includes inflation",
          "Tax rate is high",
          "Depreciation is constant",
          "Project life is short"
        ],
        "answer": 0,
        "explanation": "Cash flows and discount rate must be consistent."
      },
      {
        "question_id": "afm_bos_cs21_2",
        "question": "If  inflation were  ignored  in cash flows but included  in discount rate, the project NPV would be……………………….",
        "options": [
          "Overstated",
          "Understated",
          "Correct",
          "Zero"
        ],
        "answer": 1,
        "explanation": "Ignoring inflation understates future cash flows."
      },
      {
        "question_id": "afm_bos_cs21_3",
        "question": "Which of the following cash flows is not affected by inflation directly?",
        "options": [
          "Revenue",
          "Operating cost",
          "Depreciation",
          "Tax payment"
        ],
        "answer": 2,
        "explanation": "Depreciation is based on historical cost."
      }
    ]
  },
  {
    "case_id": "afm_bos_cs22",
    "case_chapter": [
      "Derivatives Analysis and Valuation",
      "Advanced Capital Budgeting Decisions",
      "Business Valuation"
    ],
    "caseText": "\n<p>X  and  Y  are  two  friends.  Since  Y  has  earned  a  lot  of  profit  from  trading  in financial   derivative   market,   X   is   also   considering   speculating   on   Gamma Corporation’s  shares  which  is  currently  trading  at  ₹ 700  per  share  through taking  positions  in  options  in  stocks  of  same  company.  Accordingly,  X  took following contract positions in the options on Gama Corporation’s stock:</p>\n\n<p>(i)       Purchasing one contract  of 2-month call option with a premium of  ₹ 35 and an exercise price of ₹ 750.</p>\n\n<p>(ii)      Purchasing one contract  of 2-month put option with a premium of ₹ 25 and an exercise price of ₹ 600.</p>\n\n<p>After some time, trading in Option Market and understanding the nitty-gritties of  same,  X  being  CEO  in  an  organization  advised  his  team  to  implement  the concept  of  Financial  Options  in  the  Capital  Budgeting  decisions  called  ‘Real Option’.</p>\n",
    "questions": [
      {
        "question_id": "afm_bos_cs22_1",
        "question": "Assuming  that  the  contract  size  of  each  option  contract  is  100  and  the price of Gama Corporation’s share after two months falls to ₹ 550, the net pay-off of X will be………",
        "options": [
          "₹ 1,000 loss",
          "₹ 1,000 profit",
          "₹ 3,000 profit",
          "₹ 3,000 loss"
        ],
        "answer": 0,
        "explanation": "₹ 50 x 100 – [₹ 35 x 100 + ₹ 25 x100] = - ₹ 1,000"
      },
      {
        "question_id": "afm_bos_cs22_2",
        "question": "The per share price of Gama Corporation’s stock after 2 months at which X shall be at Break Even is…..",
        "options": [
          "₹ 540",
          "₹ 600",
          "₹ 625",
          "₹ 785"
        ],
        "answer": 0,
        "explanation": "₹ 600 – [₹ 35 + ₹ 25] = ₹ 540"
      },
      {
        "question_id": "afm_bos_cs22_3",
        "question": "Which of the following statement is false regarding Real Options?",
        "options": [
          "Real Options methodology is an approach to capital budgeting that relies on Option Pricing theory to evaluate projects.",
          "Real options approach is intended to supplement, and not replace, capital budgeting analyses based on standard Discounted Cash Flow (DCF) methodologies.",
          "Real  options  are  different  from  financial  options  as  their  periods start from the end of 1st year and are higher than financial options.",
          "Real options are normally traded in the market and are priced."
        ],
        "answer": 3,
        "explanation": "Refer difference between Financial and Real Options."
      }
    ]
  },
  {
    "case_id": "afm_bos_cs23",
    "case_chapter": [
      "Security Valuation"
    ],
    "caseText": "\n<p>The data given below relates to a convertible bond:</p>\n\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"5\">\n  <tr><th>Face value</th><th>₹ 450</th></tr>\n  <tr><td>Coupon rate</td><td>15%</td></tr>\n  <tr><td>No. of shares per bond</td><td>25</td></tr>\n  <tr><td>Market price of share</td><td>₹ 20</td></tr>\n</table>\n\n<p>Straight value of bond</p>\n\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"5\">\n  <tr><th>Market price of convertible bond</th><th>₹ 400</th></tr>\n</table>\n\n<p>₹ 550</p>\n",
    "questions": [
      {
        "question_id": "afm_bos_cs23_1",
        "question": "The stock value of bond would be …………",
        "options": [
          "₹ 500",
          "₹ 400",
          "₹ 550",
          "₹ 450"
        ],
        "answer": 0,
        "explanation": "₹ 20 x 25 = ₹ 500"
      },
      {
        "question_id": "afm_bos_cs23_2",
        "question": "The  percentage  of  downside  risk  based  on  market  price  of  convertible bond is…………",
        "options": [
          "10%",
          "27.27%",
          "18.18%",
          "11.11%"
        ],
        "answer": 1,
        "explanation": "550 - 400 ×100 550"
      },
      {
        "question_id": "afm_bos_cs23_3",
        "question": "The conversion premium is ………….",
        "options": [
          "10%",
          "27.27%",
          "18.18%",
          "11.11%"
        ],
        "answer": 0,
        "explanation": "550 -500 ×100 500"
      },
      {
        "question_id": "afm_bos_cs23_4",
        "question": "The conversion parity price of the stock is …………..",
        "options": [
          "₹ 25",
          "₹ 20",
          "₹ 22",
          "₹ 24"
        ],
        "answer": 2,
        "explanation": "550 = ₹ 25 25"
      }
    ]
  },
  {
    "case_id": "afm_bos_cs24",
    "case_chapter": [
      "Mutual Funds",
      "Portfolio Management",
      "Risk Management"
    ],
    "caseText": "\n<p>Mr. A is interested in investing ₹ 1,00,000 for which he is considering following three alternatives:</p>\n\n<p>(i)       Invest ₹ 1,00,000 in Mutual Fund X (MFX)</p>\n\n<p>(ii)      Invest ₹ 1,00,000 in Mutual Fund Y (MFY)</p>\n\n<p>(iii)     Portfolio - Invest ₹ 60,000 in Mutual Fund X (MFX) and ₹ 40,000 in Mutual Fund Y (MFY)</p>\n\n<p>Average  annual  return  earned  by  MFX  and  MFY  is 12%  and 11%  respectively. Risk free rate of return is 8% and market rate of return is 10%.</p>\n\n<p>Covariance of returns of MFX, MFY and market portfolio Mix are as follow:</p>\n\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"5\">\n  <tr><th>MFX</th><th>MFY</th><th>Portfolio</th></tr>\n  <tr><td>MFX</td><td>4.400</td><td>4.300</td><td>3.370</td></tr>\n  <tr><td>MFY</td><td>4.300</td><td>4.200</td><td>2.800</td></tr>\n  <tr><td>Portfolio</td><td>3.370</td><td>2.800</td><td>4.200</td></tr>\n</table>\n",
    "questions": [
      {
        "question_id": "afm_bos_cs24_1",
        "question": "Standard Deviation of MFX is ……………",
        "options": [
          "2.0736",
          "2.0976",
          "1.8358",
          "2.0494"
        ],
        "answer": 1,
        "explanation": "4.40 = 2.0976"
      },
      {
        "question_id": "afm_bos_cs24_2",
        "question": "Portfolio return would be ……………..",
        "options": [
          "11.00%",
          "12.00%",
          "11.50%",
          "11.60%"
        ],
        "answer": 3,
        "explanation": "12.00 x 0.60 + 11.00 x 40 = 11.60"
      },
      {
        "question_id": "afm_bos_cs24_3",
        "question": "Based  on  Standard  Deviation,  the  optimum  investment  for  Mr.  A  would be …………….",
        "options": [
          "Portfolio",
          "All investment in MFX",
          "All investment in MFY",
          "Both MFY and mix are indifferent"
        ],
        "answer": 1,
        "explanation": "Based on Coefficient of Variation"
      }
    ]
  },
  {
    "case_id": "afm_bos_cs25",
    "case_chapter": [
      "Mergers, Acquisitions and Corporate Restructuring",
      "Business Valuation"
    ],
    "caseText": "\n<p>P  Ltd.  is  studying  the  possible  acquisition  of  Q  Ltd.  by  way  of  merger.  The following data are available:</p>\n\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"5\">\n  <tr><th>Firm</th><th>After-tax earnings</th><th>No. of equity</th></tr>\n  <tr><td>shares</td><td>Market price per</td></tr>\n  <tr><td>share</td><td>Book Value Per share</td></tr>\n  <tr><td>P Ltd.</td><td>₹ 10,00,000</td><td>2,00,000</td><td>₹ 75</td><td>₹ 210</td></tr>\n  <tr><td>Q Ltd.</td><td>₹ 3,00,000</td><td>50,000</td><td>₹ 60</td><td>₹ 105</td></tr>\n</table>\n\n<p>The  merger  shall  be  gone  through  by  exchange  of  equity  shares  and  the exchange ratio is set according to different weights assigned to different basis as mentioned below :-</p>\n\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"5\">\n  <tr><th>EPS</th><th>50%</th></tr>\n  <tr><td>Market Price</td><td>25%</td></tr>\n  <tr><td>Book Value</td><td>25%</td></tr>\n</table>\n",
    "questions": [
      {
        "question_id": "afm_bos_cs25_1",
        "question": "The swap ratio based on given weights shall be........................................",
        "options": [
          "0.825",
          "0.925",
          "0.952",
          "0.752"
        ],
        "answer": 1,
        "explanation": "6 : 5 x 0.50            = 0.60 4 : 5 x 0.25            = 0.20 1 : 2 x 0.25          = 0.125 0.925"
      },
      {
        "question_id": "afm_bos_cs25_2",
        "question": "Based on swap ratio as per assigned weights the total number of shares issued by P Ltd to Q Ltd. shall be............",
        "options": [
          "46250",
          "41250",
          "47600",
          "37600"
        ],
        "answer": 0,
        "explanation": "0.925 x 50000 = 46,250"
      },
      {
        "question_id": "afm_bos_cs25_3",
        "question": "Post merger the EPS of the P Ltd. shall be.................",
        "options": [
          "5.39",
          "5.25",
          "5.28",
          "5.47"
        ],
        "answer": 2,
        "explanation": "(1000000 + 300000) / (200000 + 46250) = 5.28"
      },
      {
        "question_id": "afm_bos_cs25_4",
        "question": "In  case  Q  Ltd.  wants  to  be  sure  that  its  EPS  is  not  diminished  by  the merger, the relevant exchange ratio to achieve the same objective should be....................",
        "options": [
          "0.83",
          "1.20",
          "1.30",
          "1.10"
        ],
        "answer": 1,
        "explanation": "Ratio of EPS"
      }
    ]
  },
  {
    "case_id": "afm_bos_cs26",
    "case_chapter": [
      "Mutual Funds"
    ],
    "caseText": "\n<p>Mr. Y has invested in the three mutual funds (MF) as per the following details:</p>\n\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"5\">\n  <tr><th>Particulars</th><th>MF ‘X’</th><th>MF ‘Y’</th><th>MF ‘Z’</th></tr>\n  <tr><td>Amount of Investment (₹ )</td><td>4,00,000</td><td>8,00,000</td><td>4,00,000</td></tr>\n  <tr><td>Net   Assets   Value   (NAV)   at   the   time   of purchase (₹ )</td><td>10.30</td><td>10.10</td><td>10</td></tr>\n  <tr><td>Dividend Received up to 31.03.2023 (₹ )</td><td>9,000</td><td>0</td><td>6,00,000</td></tr>\n  <tr><td>NAV as on 31.03.2023 (₹ )</td><td>10.35</td><td>10</td><td>10.30</td></tr>\n  <tr><td>Effective  Yield  per  annum  as  on  31.03.2023 (percent)</td><td>9.66</td><td>-11.66</td><td>24.15</td></tr>\n</table>\n\n<p>Assume 1 Year = 365 days</p>\n",
    "questions": [
      {
        "question_id": "afm_bos_cs26_1",
        "question": "Total NAV of MF ‘Y’ as on 31.03.2023 would be approximately ……………",
        "options": [
          "₹ 401941.73",
          "₹ 412000.00",
          "₹ 792079.21",
          "₹ 82500.00"
        ],
        "answer": 2,
        "explanation": "800000 ×10= 792079.21 10.10"
      },
      {
        "question_id": "afm_bos_cs26_2",
        "question": "Total Yield of MF ‘X’ in terms of ₹ would be approximately ……………..",
        "options": [
          "₹ 10941.75",
          "₹ 7,920.80",
          "₹ 18,000.00",
          "₹ 12450.45"
        ],
        "answer": 0,
        "explanation": "400000 (10.35-10.30)+9000= 10941.75 10.30"
      },
      {
        "question_id": "afm_bos_cs26_3",
        "question": "Number of days for which MF ‘X’ is held would be approximately………….",
        "options": [
          "31 Days",
          "68 Days",
          "103 Days",
          "85 Days"
        ],
        "answer": 2,
        "explanation": "10941.75 × 365= 0.0966 400000         D"
      },
      {
        "question_id": "afm_bos_cs26_4",
        "question": "Number of days for which MF ‘Y’ is held would be………….",
        "options": [
          "31 Days",
          "68 Days",
          "103 Days",
          "85 Days"
        ],
        "answer": 0,
        "explanation": "800000 (10.00-10.10) 10.10 800000\"\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t×\t\"365 D\"\t\t\t=-11.66%"
      }
    ]
  },
  {
    "case_id": "afm_bos_cs27",
    "case_chapter": [
      "Security Valuation"
    ],
    "caseText": "\n<p>ABC Ltd. is planning to expand its business and therefore raising fund by issuing a convertible bond of ₹ 10 crore. An investor “Mr. X” is interested to invest in the bond of ABC Ltd. Mr. X has following data related to the convertible bond.</p>\n\n<p>The data given below relates to a convertible bond:</p>\n\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"5\">\n  <tr><th>Face value</th><th>₹ 250</th></tr>\n  <tr><td>Coupon rate</td><td>12%</td></tr>\n  <tr><td>No. of shares per bond</td><td>20</td></tr>\n  <tr><td>Market price of share</td><td>₹ 12</td></tr>\n  <tr><td>Straight value of bond</td><td>₹ 235</td></tr>\n  <tr><td>Market price of convertible bond</td><td>₹ 265</td></tr>\n  <tr><td>Maturity</td><td>5 Years</td></tr>\n</table>\n",
    "questions": [
      {
        "question_id": "afm_bos_cs27_1",
        "question": "The percentage of downside risk of the bond is approximately……………..",
        "options": [
          "10.42%",
          "6.38%",
          "2.13%",
          "12.77%"
        ],
        "answer": 3,
        "explanation": "265- 235 ×100= 12.77% 235"
      },
      {
        "question_id": "afm_bos_cs27_2",
        "question": "The conversion premium in percentage term of the bond is……………..",
        "options": [
          "12.77%",
          "10.42%",
          "2.18%",
          "13.45%"
        ],
        "answer": 1,
        "explanation": "265- 240 ×100= 10.42% 240"
      },
      {
        "question_id": "afm_bos_cs27_3",
        "question": "The conversion parity price of the stock is…………….",
        "options": [
          "₹ 11.75",
          "₹ 12.00",
          "₹ 13.25",
          "₹ 12.50"
        ],
        "answer": 2,
        "explanation": "₹ 265/20 = ₹ 13.25"
      },
      {
        "question_id": "afm_bos_cs27_4",
        "question": "If he wants approximately a yield of 15% the maximum price, he should be ready to pay for is…………….",
        "options": [
          "217.41",
          "224.81",
          "240.00",
          "232.32"
        ],
        "answer": 1,
        "explanation": "₹ 30(3.352) + ₹ 250(0.497) = ₹ 224.81"
      }
    ]
  },
  {
    "case_id": "afm_bos_cs28",
    "case_chapter": [
      "Security Valuation",
      "Securitization",
      "Business Valuation",
      "Security Analysis"
    ],
    "caseText": "\n<p>Suppose you are a financial consultant and following 3 clients have approached to  you  seeking  advise  on  the  investment  to  be  made  in  securities.  All  these clients have different background and risk appetite as well as perception to the market.</p>\n\n<p>       Client  A  wants  to  invest  in  Fixed  income  avenues  and  therefore  he  is looking at the credit rating of the securities as well as financial ratios such as interest coverage, earning power etc and the general prospect of the industry.</p>\n\n<p>       Client B wants to earn a fixed income over a period of time by holding the security till its maturity.</p>\n\n<p>       Client  C  wants  to  earn  more  by  taking  more  risk.  Therefore,  he  is  more interested to invest in stocks. He believes that Price reflects all information found in the record of past prices and volumes.</p>\n",
    "questions": [
      {
        "question_id": "afm_bos_cs28_1",
        "question": "The  main  factor  to  be  considered  in  selecting  fixed  income  avenue  for client A shall be………………..",
        "options": [
          "Yield to maturity",
          "Risk of Default",
          "Tax Shield",
          "Liquidity"
        ],
        "answer": 1,
        "explanation": "Client A is looking at Credit Rating."
      },
      {
        "question_id": "afm_bos_cs28_2",
        "question": "The  main  factor  that  have  to  be  evaluated  in  the  selection  of  Bond  for Client B shall be………………..",
        "options": [
          "Yield to maturity",
          "Risk of Default",
          "Tax Shield",
          "Liquidity"
        ],
        "answer": 0,
        "explanation": "Holding security till maturity."
      },
      {
        "question_id": "afm_bos_cs28_3",
        "question": "If Weak form efficiency is prevailing in the market then which approach is best for selection of Equity Shares?",
        "options": [
          "Technical Analysis",
          "Fundamental Analysis",
          "Random selection Analysis",
          "None of the above."
        ],
        "answer": 1,
        "explanation": "As market will react lately."
      }
    ]
  },
  {
    "case_id": "afm_bos_cs29",
    "case_chapter": [
      "Mergers, Acquisitions and Corporate Restructuring"
    ],
    "caseText": "\n<p>AES  Ltd.  wants  to  acquire  DNF  Ltd.  and  has  offered  a  swap  ratio  of  1:2  (0.5 shares for every one share of DNF Ltd.). Following information is provided:</p>\n\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"5\">\n  <tr><th>AES Ltd.</th><th>DNF Ltd.</th></tr>\n  <tr><td>Profit after tax</td><td>₹ 36,00,000</td><td>₹ 7,20,000</td></tr>\n  <tr><td>Equity shares outstanding (Nos.)</td><td>12,00,000</td><td>3,60,000</td></tr>\n  <tr><td>PE Ratio</td><td>10 times</td><td>7 times</td></tr>\n  <tr><td>Market price per share</td><td>₹ 30</td><td>₹ 14</td></tr>\n</table>\n",
    "questions": [
      {
        "question_id": "afm_bos_cs29_1",
        "question": "The  number  of  equity  shares  to  be  issued  by  AES  Ltd. for  acquisition  of DNF Ltd. would be………………",
        "options": [
          "1,68,000",
          "1,80,000",
          "2,40,000",
          "3,00,000"
        ],
        "answer": 1,
        "explanation": "360000 x 0.50 = 180000"
      },
      {
        "question_id": "afm_bos_cs29_2",
        "question": "The EPS of AES Ltd. after the acquisition would be………………",
        "options": [
          "₹ 2",
          "₹ 3",
          "₹ 3.13",
          "₹ 4.00"
        ],
        "answer": 2,
        "explanation": "(₹ 36,00,000 + ₹ 7,20,000)/(1200000 + 180000) = ₹ 3.13"
      },
      {
        "question_id": "afm_bos_cs29_3",
        "question": "The equivalent earnings per share of DNF Ltd. would be………..",
        "options": [
          "₹ 1",
          "₹ 1.50",
          "₹ 1.57",
          "₹ 2.00"
        ],
        "answer": 2,
        "explanation": "₹ 3.13 x 0.50 = ₹ 1.57"
      },
      {
        "question_id": "afm_bos_cs29_4",
        "question": "If AES Ltd. PE multiple remains unchanged then its expected market price per share after the acquisition would be………………",
        "options": [
          "₹ 14",
          "₹ 30",
          "₹ 31.30",
          "₹ 40.00"
        ],
        "answer": 2,
        "explanation": "₹ 3.13 x 10 = ₹ 31.30"
      }
    ]
  },
  {
    "case_id": "afm_bos_cs30",
    "case_chapter": [
      "Business Valuation",
      "Financial Policy and Corporate Strategy"
    ],
    "caseText": "\n<p>During one business meeting at XYZ Ltd., one of the member pointed out that while evaluating the performance of any company one should not only see its Operating   Income   but   should   also   analyse   its   Capital   structure   as   well. Weighted  Average  Cost  of  Capital  changes  on  the  basis  of  capital  structure keeping all other factors unchanged.</p>\n\n<p>He presented data relating to 3 companies Alpha Ltd., Beta Ltd. and Gama Ltd. whose operating Income are equal, but their capital structure is different.</p>\n\n<p>The following information relating to these 3 companies is as follows:</p>\n\n<p>(in ₹ 000)</p>\n\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"5\">\n  <tr><th>Alpha Ltd.</th><th>Beta Ltd.</th><th>Gama Ltd.</th></tr>\n  <tr><td>Total invested capital</td><td>20,00,000</td><td>20,00,000</td><td>20,00,000</td></tr>\n  <tr><td>Debt/Assets ratio</td><td>0.8</td><td>0.5</td><td>0.2</td></tr>\n  <tr><td>Shares outstanding</td><td>61,000</td><td>83,000</td><td>1,00,000</td></tr>\n  <tr><td>Pre tax Cost of Debt</td><td>16%</td><td>13%</td><td>15%</td></tr>\n  <tr><td>Cost of Equity</td><td>26%</td><td>22%</td><td>20%</td></tr>\n  <tr><td>Operating Income (EBIT)</td><td>5,00,000</td><td>5,00,000</td><td>5,00,000</td></tr>\n</table>\n\n<p>The Tax rate is uniform 35% in all cases. The industry PE ratio is 11X.</p>\n",
    "questions": [
      {
        "question_id": "afm_bos_cs30_1",
        "question": "The weighted average cost of capital of Alpha Ltd. shall approximately be …………….",
        "options": [
          "13.520%",
          "15.225%",
          "17.950%",
          "18.000%"
        ],
        "answer": 0,
        "explanation": "16%(1 – 0.35) x 0.80 + 26% x 0.20 = 13.52%"
      },
      {
        "question_id": "afm_bos_cs30_2",
        "question": "The Economic Valued Added (EVA) of Beta Ltd. is…………….",
        "options": [
          "₹ 54600 Thousand",
          "₹ 20500 Thousand",
          "(-) ₹ 34000 Thousand",
          "₹ 21500 Thousand"
        ],
        "answer": 1,
        "explanation": "500000(1  –  0.35)  –  [{13%(1  –  0.35)  x  0.50  +  22%  x  0.50} 2000000] = 20500"
      },
      {
        "question_id": "afm_bos_cs30_3",
        "question": "The price per share of Gama Ltd. shall be ……………..",
        "options": [
          "₹ 28.60",
          "₹ 31.90",
          "₹ 31.46",
          "₹ 29.45"
        ],
        "answer": 2,
        "explanation": "[(500000 – 0.20 x 2000000 x 15%) (1 – 0.35) x 11]/100000 = ₹ 31.46"
      },
      {
        "question_id": "afm_bos_cs30_4",
        "question": "The estimated market capitalisation of Alpha Ltd. is…………….",
        "options": [
          "₹ 26,47,700 Thousand",
          "₹ 31,46,000 Thousand",
          "₹ 17,44,600 Thousand",
          "₹ 23,73,800 Thousand"
        ],
        "answer": 2,
        "explanation": "[(500000 – 0.80 x 2000000 x 16%) (1 – 0.35) x 11] = 1744600"
      },
      {
        "question_id": "afm_bos_cs30_5",
        "question": "Earning per share of Beta Ltd. approximately is……………..",
        "options": [
          "₹ 2.60",
          "₹ 2.90",
          "₹ 2.86",
          "₹ 2.15"
        ],
        "answer": 1,
        "explanation": "[(500000 – 0.50 x 2000000 x 13%) (1 – 0.35)]/ 83000 = ₹ 2.90"
      }
    ]
  },
  {
    "case_id": "afm_bos_cs31",
    "case_chapter": [
      "Foreign Exchange Exposure and Risk Management",
      "Business Valuation"
    ],
    "caseText": "\n<p>On 1 October 2023 Mr. X an exporter enters into a forward contract with a BNP Bank to sell US$ 1,00,000 on 31 December 2023 at ₹ 85.40/$. However, due to the request of the importer, Mr. X received the amount on 28 November 2023. Mr. X requested the bank the take delivery of the remittance on 30 November 2023  i.e., before due date. The inter-banking rates on 28 November 2023 was as follows:</p>\n\n<p>Spot                                                 ₹ 85.22/85.27</p>\n\n<p>One Month Premium                   10/15</p>\n\n<p>Note:</p>\n\n<p>1.       Consider 365 days in a year.</p>\n\n<p>2.       Prevailing Prime Lending Rate is 12%</p>\n",
    "questions": [
      {
        "question_id": "afm_bos_cs31_1",
        "question": "The bank may accept the request of customer of delivery before due date of forward contract provided the customer is ready to bear the loss if any consisting of…………",
        "options": [
          "Swap Difference",
          "Interest on Outlay of Fund",
          "Swap Difference Plus Interest on Outlay of Fund",
          "Fixed Charges Plus Swap Difference and Interest on Outlay of Fund"
        ],
        "answer": 3,
        "explanation": "Refer  the  concept  of  Early  Delivery  under  Fate  of  Forward Contract."
      },
      {
        "question_id": "afm_bos_cs31_2",
        "question": "In case of early delivery bank shall charge interest on outlay of fund at a rate not less than……………..",
        "options": [
          "8%",
          "10%",
          "12%",
          "18%"
        ],
        "answer": 2,
        "explanation": "Refer  the  concept  of  Early  Delivery  under  Fate  of  Forward Contract."
      },
      {
        "question_id": "afm_bos_cs31_3",
        "question": "Swap Difference for US$ 1,00,000 is………………..",
        "options": [
          "₹ 5,000",
          "₹ 20,000",
          "₹ 18,000",
          "₹ 8,000"
        ],
        "answer": 1,
        "explanation": "Bank Sells at Spot Rate on 28 November 2023    ₹ 85.22 Bank  Buys  at  Forward  Rate  of  31  December    ₹ 85.42 2023 (85.27 + 0.15) Swap Loss per US$                                                  ₹ 00.20 Swap loss for US$ 1,00,000                                    ₹ 20,000"
      },
      {
        "question_id": "afm_bos_cs31_4",
        "question": "Interest on outlay of funds shall be approximately………………….",
        "options": [
          "₹ 92 payable by X",
          "₹ 183 payable by X",
          "₹ 183 payable by Bank",
          "₹ 122 payable by Bank"
        ],
        "answer": 1,
        "explanation": "On 28th November Bank sells at                           ₹ 85.22 It buys from customer at                                        ₹ 00.18 Interest  on  Outlay  fund for  US$  1,00,000  for    ₹ 00.20 31 days (US$100000 x 00.18 x 31/365 x 12%)                    ₹ 183"
      },
      {
        "question_id": "afm_bos_cs31_5",
        "question": "Net inflow to Mr. X is approximately……………..",
        "options": [
          "₹ 85,42,183",
          "₹ 85,20,000",
          "₹ 85,19,817",
          "₹ 85,40,000"
        ],
        "answer": 2,
        "explanation": "Amount   received   on   sale   (₹ 85.40    x    ₹ 85,40,000 1,00,000) Less: Charges for early delivery payable to bank                                                                       (₹ 20,183) ₹ 85,19,817"
      }
    ]
  },
  {
    "case_id": "afm_bos_cs32",
    "case_chapter": [
      "Interest Rate Risk Management"
    ],
    "caseText": "\n<p>A  US  parent  company  has  subsidiaries  in  France,  Germany,  UK  and  Italy.  The amounts  due  to  and  from  the  affiliates  is  converted  into  a  common  currency viz. US dollar and entered in the following matrix.</p>\n\n<p>Inter Subsidiary Payments Matrix                                (US $ Thousands)</p>\n\n<p>Paying affiliate</p>\n\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"5\">\n  <tr><th>France</th><th>Germany</th><th>UK</th><th>Italy</th><th>Total</th></tr>\n  <tr><td>Receiving affiliate</td><td>France</td><td>---</td><td>80</td><td>120</td><td>200</td><td>400</td></tr>\n  <tr><td>Germany</td><td>120</td><td>---</td><td>80</td><td>160</td><td>360</td></tr>\n  <tr><td>UK</td><td>160</td><td>120</td><td>---</td><td>140</td><td>420</td></tr>\n  <tr><td>Italy</td><td>200</td><td>60</td><td>120</td><td>---</td><td>380</td></tr>\n  <tr><td>Total</td><td>480</td><td>260</td><td>320</td><td>500</td><td>1560</td></tr>\n</table>\n\n<p>The treasurer of US Parent company is suggesting that by applying Multilateral Netting  system  the  company  can  save  a  lot  of  transfer/  exchange  costs.  The company’s Board agreed with Treasurer’s proposal.</p>\n",
    "questions": [
      {
        "question_id": "afm_bos_cs32_1",
        "question": "Before applying Multilateral Netting it is necessary to apply……………….",
        "options": [
          "Unilateral Netting",
          "Bilateral Netting",
          "Multilateral Netting",
          "Interest Rate Swapping"
        ],
        "answer": 1,
        "explanation": "First settle mutual obligation before proceeding further."
      },
      {
        "question_id": "afm_bos_cs32_2",
        "question": "Through Multinational Netting these transfers will be reduced to …………….",
        "options": [
          "$ 50,000",
          "$ 100,000",
          "$ 150,000",
          "$ 200,000"
        ],
        "answer": 3,
        "explanation": "Netting Schedule (US $ Thousands)"
      },
      {
        "question_id": "afm_bos_cs32_3",
        "question": "The Net Payment/ Net Receipts for France after netting off shall be………….",
        "options": [
          "Net Receipt $ 40,000",
          "Net Payment $ 80,000",
          "Net Payment $ 40,000",
          "Net Receipt $ 80,000"
        ],
        "answer": 1,
        "explanation": "Receipt\t\t\t\t\t\tPayment\t\t\t\t\t\t\t\t\tNet Receipt\t\t\t\t\t\t\t\t\tNet Payments"
      },
      {
        "question_id": "afm_bos_cs32_4",
        "question": "The Net Payment/ Net Receipts for Italy after netting off shall be…………….",
        "options": [
          "Net Receipt $ 60,000",
          "Net Payment $ 120,000",
          "Net Payment $ 60,000",
          "Net Receipt $ 120,000"
        ],
        "answer": 1,
        "explanation": "France\t\t\t\t\t\t\t\t\t400\t\t\t\t\t\t480\t\t\t\t\t\t\t\t\t---\t\t\t\t\t\t\t\t\t80 Germany\t\t\t\t\t\t\t\t\t360\t\t\t\t\t\t260\t\t\t\t\t\t\t\t\t100\t\t\t\t\t\t\t\t\t--- UK\t\t\t\t\t\t\t\t\t420\t\t\t\t\t\t320\t\t\t\t\t\t\t\t\t100\t\t\t\t\t\t\t\t\t--- Italy\t\t\t\t\t\t\t\t\t380\t\t\t\t\t\t500\t\t\t\t\t\t\t\t\t---\t\t\t\t\t\t\t\t\t120 200\t\t\t\t\t\t\t\t\t200"
      },
      {
        "question_id": "afm_bos_cs32_5",
        "question": "Suppose if the transfer charges are 0.01% of the amount transferred then by  applying  multilateral  netting  techniques  there  will  be  reduction  in overall cost of transfer by …………..",
        "options": [
          "US $ 136",
          "US $ 156",
          "US $ 1,360",
          "US $ 1,560"
        ],
        "answer": 0,
        "explanation": "(1560 – 200) x 0.01% x 1000 = 136"
      }
    ]
  },
  {
    "case_id": "afm_bos_cs33",
    "case_chapter": [
      "Security Valuation"
    ],
    "caseText": "\n<p>XYZ   Ltd.  needs  funds  for  a  short  tenure.  Some  functional  level  manager suggested   about   the  bank   credit/   overdraft   option.   On   conforming   from Finance Department, it was found that company exhausted its credit limits due to meeting recent contingency fund requirements. Then CA X, CFO suggested the idea of floating Commercial papers by XYZ Ltd.</p>\n\n<p>Accordingly, XYZ Ltd. is planning to issue Commercial Paper (CP), the details of which is given below:</p>\n\n<p>Issue Price of CP                          ₹ 97,550</p>\n\n<p>Face Value                                     ₹ 1,00,000</p>\n\n<p>Maturity Period                            3 Months Issue Expense</p>\n\n<p>Brokerage                         0.15% for 3 months</p>\n\n<p>Rating charges                 0.50% p.a.</p>\n\n<p>Stamp Duty                      0.175% for 3 months</p>\n",
    "questions": [
      {
        "question_id": "afm_bos_cs33_1",
        "question": "The Bond Equivalent yield for an investor of the same Commercial Paper shall be approximately……………..",
        "options": [
          "2.51%",
          "10.05%",
          "7.53%",
          "11.05%"
        ],
        "answer": 1,
        "explanation": "1000000  97550  12  10.05% 97550             3"
      },
      {
        "question_id": "afm_bos_cs33_2",
        "question": "The  Effective  Interest  Rate  per  annum  of  same  CP  shall  approximately be…………………",
        "options": [
          "10.44%",
          "10.05%",
          "2.51%",
          "11.05%"
        ],
        "answer": 0,
        "explanation": "     0.1005 4 1     4        1  10.44%                 "
      },
      {
        "question_id": "afm_bos_cs33_3",
        "question": "Based  on  effective  interest  rate  the  total  annual  cost  of  funds  to  the company shall approximately be………………………",
        "options": [
          "11.27%",
          "11.85%",
          "12.24%",
          "10.88%"
        ],
        "answer": 2,
        "explanation": "10.44% + 0.15 x 4 + 0.50 + 0.175 x 4 = 12.24%"
      },
      {
        "question_id": "afm_bos_cs33_4",
        "question": "Which of the following instruments cannot be used by a bank to meet its short-term funding requirements?",
        "options": [
          "Call/Notice Money",
          "Commercial Paper",
          "Certificate of Deposit",
          "Repurchase Agreement (Repo)"
        ],
        "answer": 1,
        "explanation": "Issued by  highly  rated corporate entities to meet the short- term fund requirements."
      },
      {
        "question_id": "afm_bos_cs33_5",
        "question": "The period of Commercial Paper ranges from……………….",
        "options": [
          "14 days to 364 days",
          "3 months to 6 months",
          "7 days to 1 year",
          "1 year to 3 years"
        ],
        "answer": 2,
        "explanation": "Refer the basic features of Commercial Papers."
      }
    ]
  },
  {
    "case_id": "afm_bos_cs34",
    "case_chapter": [
      "Securitization"
    ],
    "caseText": "\n<p>Grow More Ltd. an NBFC is in the need of funds and hence it sold its receivables to MAC Financial Corporation (MFC) for ₹ 100 million. MFC created a trust for this  purpose  called  General  Investment  Trust  (GIT)  through  which  it  issued securities carrying a different level of risk and return to the investors. Further, this  structure  also  permits  the  GIT  to  reinvest  surplus  funds  for  short  term  as per their requirement.</p>\n\n<p>MFC  also  appointed  a  third  party,  Safeguard  Pvt.  Ltd.  (SPL)  to  collect  the payment  due  from  obligor(s)  and  passes  it  to  GIT.  It  will  also  follow  up  with defaulting obligor and if required initiate appropriate legal action against them.</p>\n",
    "questions": [
      {
        "question_id": "afm_bos_cs34_1",
        "question": "The securitized instrument issued for ₹ 100 million by the GIT falls under category of ……….",
        "options": [
          "Pass Through certificate (PTCs)",
          "Pay Through Security (PTS)",
          "Stripped Security",
          "Debt Fund."
        ],
        "answer": 1,
        "explanation": "Refer the concept of Pay Through Security."
      },
      {
        "question_id": "afm_bos_cs34_2",
        "question": "In the above scenario, the Originator is………………….",
        "options": [
          "Grow More Ltd.",
          "MAC Financial Corporation (MFC)",
          "General Investment Trust (GIT)",
          "Safeguard Pvt. Ltd."
        ],
        "answer": 1,
        "explanation": "MAC bought receivables."
      },
      {
        "question_id": "afm_bos_cs34_3",
        "question": "In    the    above    scenario,    the    General    Investment    Trust    (GIT)    is a/an………………….",
        "options": [
          "Obligor",
          "Originator",
          "Special Purpose Vehicle (SPV)",
          "Receiving and Paying Agent (RPA)"
        ],
        "answer": 2,
        "explanation": "Only for the purpose of issuing securities."
      },
      {
        "question_id": "afm_bos_cs34_4",
        "question": "In the above scenario, the Safeguard Pvt. Ltd. (SPL) is a/an………………",
        "options": [
          "Obligor",
          "Originator",
          "Special Purpose Vehicle (SPV)",
          "Receiving and Paying Agent (RPA)"
        ],
        "answer": 3,
        "explanation": "Collects  the payments  from  the  receivables and pass  to  the SPV."
      },
      {
        "question_id": "afm_bos_cs34_5",
        "question": "Which of the following statement holds true?",
        "options": [
          "When Yield to Maturity in market rises, prices of Principle Only (PO) Securities tend to rise.",
          "When Yield to Maturity in market rises, prices of Principle Only (PO) Securities tend to fall.",
          "When Yield to Maturity in market falls, prices of Principle Only (PO) Securities tend to fall.",
          "When Yield to Maturity in market falls, prices of Principle Only (PO) Securities remain the same."
        ],
        "answer": 1,
        "explanation": "Refer the concept of Stripped Securities."
      }
    ]
  },
  {
    "case_id": "afm_bos_cs35",
    "case_chapter": [
      "Risk Management",
      "Security Analysis"
    ],
    "caseText": "\n<p>You are a financial analyst at a prominent investment firm and have been tasked with empirically  verifying the weak form of Efficient Market Hypothesis (EMH) Theory for the XYZ Stock Index, a collection of diverse stocks. You decided to conduct  three  different  tests  to  assess  whether  the  stock  market  follows  the principles of the weak form of EMH.</p>\n\n<p>Test 1</p>\n\n<p>For  the  past  five  years,  you  collected  daily  price  changes  of  the  stocks  in  the XYZ Stock Index. You calculated correlation coefficients for different lag periods and analyzed whether past price changes exhibit any significant correlation with future price changes. You considered price changes to be serially independent. The  results  indicated  that  most  auto  correlation  coefficients  are  close  to  zero and  statistically  insignificant,  suggesting  those  past  price  changes  do  not predict future price changes.</p>\n\n<p>Test 2</p>\n\n<p>You  further  investigated  the  randomness  of  price  changes  in  the  XYZ  Stock Index. Analyzing the sequence of daily price changes, you count the number of runs where price changes are consistently positive or negative. Upon comparing the observed number of runs with the expected number based on randomness, you find that they align closely, supporting the idea that price changes follow a random pattern.</p>\n\n<p>Test 3</p>\n\n<p>To  examine  the efficacy  of  trading  strategies  based  on  historical  price trends, you  implemented  a  simple  trading  rule  for  the  XYZ  Stock  Index.  The  rule involves buying when the price crosses a moving average of 5% threshold and selling  when  it  crosses  another  7%  threshold.  Over  a  period  of  testing,  you computed  the returns generated by  the trading strategy.  The results revealed that the returns are not consistently better than random chance, implying that past price trends do not reliably predict future price movements.</p>\n\n<p>Conclusion:</p>\n\n<p>After  conducting  the  three  tests  the  evidence  supports  the  weak  form  of Efficient Market Theory for the XYZ Stock Index you concluded that past price trends do not reliably predict future price movements.</p>\n",
    "questions": [
      {
        "question_id": "afm_bos_cs35_1",
        "question": "Test 1 is …………………",
        "options": [
          "Serial Correlation test",
          "Filter Rules test",
          "Run test",
          "Variance Ratio test."
        ],
        "answer": 0,
        "explanation": "Refer  topic  Empirical  Evidence  on  Weak  Form  of  Efficient Market Theory."
      },
      {
        "question_id": "afm_bos_cs35_4",
        "question": "The Filter Rule Test should not be applied for buy and hold strategy if………",
        "options": [
          "the behavior of stock price changes is predictable.",
          "the behavior of stock price changes is random.",
          "the behavior of stock price changes is correlated.",
          "the behavior of stock price changes is non-random."
        ],
        "answer": 1,
        "explanation": "Refer Filter Rules Test of Empirical Evidence on Weak Form of Efficient Market Theory."
      },
      {
        "question_id": "afm_bos_cs35_5",
        "question": "Results of your studies support the……………",
        "options": [
          "Semi-strong EMH Theory",
          "Strong EMH Theory",
          "Random Walk Theory",
          "Markowitz Theory"
        ],
        "answer": 2,
        "explanation": "Refer conclusion of Case Scenario."
      }
    ]
  },
  {
    "case_id": "afm_bos_cs36",
    "case_chapter": [
      "Security Valuation"
    ],
    "caseText": "\n<p>Bank A is in need of fund for a period of 14 days. To meet this financial need on 20th September 2023 Bank A enters into an agreement with Bank B under which it will sell 10% Government of India Bonds issued on 1st January 2023 @ 5.65% for ₹ 8 crore (Face value is ₹ 10,000 per Bond).</p>\n\n<p>The clean price of same Bond is ₹ 9,942 and the Initial Margin be 2% and the maturity date of Bond is 31st December 2028. Consider 360 days in a year and interest is payable annually.</p>\n\n<p>Based on above Case Scenario, answer the following questions:</p>\n",
    "questions": [
      {
        "question_id": "afm_bos_cs36_1",
        "question": "The arrangement entered between Bank A and Bank B will be called ………",
        "options": [
          "Call Money Arrangement",
          "Commercial Bill Arrangement",
          "Commercial Paper",
          "Repurchase Agreement"
        ],
        "answer": 3,
        "explanation": "Refer the concept of Repo and Reverse Repo."
      },
      {
        "question_id": "afm_bos_cs36_2",
        "question": "Dirty Price of the Bond will approximately be……………………….",
        "options": [
          "₹ 10,353",
          "₹ 10,670",
          "₹ 10,499",
          "₹ 10,816"
        ],
        "answer": 1,
        "explanation": "₹ 9,942 + ₹ 10,000 ×  10  × 262    ₹ 10,670 100             = 360"
      },
      {
        "question_id": "afm_bos_cs36_3",
        "question": "The start proceeds of the transaction shall be approximately ………………….",
        "options": [
          "₹ 8,38,36,604",
          "₹ 8,36,52,800",
          "₹ 8,58,36,804",
          "₹ 8,48,52,585"
        ],
        "answer": 1,
        "explanation": "₹ 8,00,00,000 × 10670 × 100-2= ₹ 8,36,52,800 10000        100"
      },
      {
        "question_id": "afm_bos_cs36_4",
        "question": "The second leg of the transaction shall be approximately.……………….",
        "options": [
          "₹ 8,38,36,604",
          "₹ 8,36,52,800",
          "₹ 8,58,36,804",
          "₹ 8,48,52,585"
        ],
        "answer": 0,
        "explanation": "₹ 8,36,52,800 × 1+ 5.65 × 14 = ₹ 8,38,36,604 100      360"
      },
      {
        "question_id": "afm_bos_cs36_5",
        "question": "The amount of Accrued Interest per Bond shall be approximately ……………",
        "options": [
          "₹ 728",
          "₹ 720",
          "₹ 734",
          "₹ 714"
        ],
        "answer": 0,
        "explanation": "₹ 10,000 × 10  × 262    ₹ 728 100            = 360"
      }
    ]
  },
  {
    "case_id": "afm_bos_cs37",
    "case_chapter": [
      "Portfolio Management"
    ],
    "caseText": "\n<p>Two friends Mr. A and Mr. N were discussing about the risks of market. While Mr. A is sort of risk averse, Mr. N is an aggressive investor and believes in taking risk.</p>\n\n<p>Mr. N said we cannot diversify the market risk at all and he quoted the Modern Portfolio Approach. Both of these friends analyse the market data for the few month  and  came  out  with  expected  returns  on  two  stocks  for  a  particular market.</p>\n\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"5\">\n  <tr><th>Market Return</th><th>Aggressive</th><th>Defensive</th></tr>\n  <tr><td>7%</td><td>4%</td><td>9%</td></tr>\n  <tr><td>25%</td><td>40%</td><td>18%</td></tr>\n</table>\n",
    "questions": [
      {
        "question_id": "afm_bos_cs37_1",
        "question": "The Beta of Defensive stock is…………",
        "options": [
          "2",
          "0.50",
          "4",
          "1"
        ],
        "answer": 1,
        "explanation": "18%-9% 25%-     = 0.50 7%"
      },
      {
        "question_id": "afm_bos_cs37_2",
        "question": "Expected return of Aggressive stock if the market return is equally  likely to be 7% or 25% shall be……..",
        "options": [
          "18%",
          "13.5%",
          "22%",
          "11%"
        ],
        "answer": 2,
        "explanation": "First  compute  Risk  Free  Rate  of  Return  using  simultaneous equations. Then use CAPM and compute the Expected Return under given scenario and multiply each return with 0.50 and add them."
      },
      {
        "question_id": "afm_bos_cs37_3",
        "question": "The Alpha of the Defensive stocks is……………….",
        "options": [
          "-10%",
          "22%",
          "5.5%",
          "12%"
        ],
        "answer": 2,
        "explanation": "18% = α + 0.50% 25%  or 9% = α + 0.50% 7% 4..\t\t\t\t(d)      Refer the concept of Modern Portfolio Theory 5\t\t\t\t(c)       Refer the concept of Capital Market Theory."
      },
      {
        "question_id": "afm_bos_cs37_4",
        "question": "The Modern Portfolio Theory is propounded by …………………",
        "options": [
          "William Sharpe",
          "Black Scholes",
          "Stephen Ross",
          "Harry Markowitz"
        ],
        "answer": 0,
        "explanation": ""
      },
      {
        "question_id": "afm_bos_cs37_5",
        "question": "As per Capital Market Line (CML) Theory the Portfolios lying on the CML over the market portfolio are called ……………….",
        "options": [
          "Lending Portfolio",
          "Borrowing Portfolio",
          "Diversified Portfolio",
          "Risk- Free Portfolio"
        ],
        "answer": 0,
        "explanation": ""
      }
    ]
  },
  {
    "case_id": "afm_bos_cs38",
    "case_chapter": [
      "Mutual Funds"
    ],
    "caseText": "\n<p>Mr. X on 1st July 2021, during the initial offer of some Mutual Fund invested in 10,000  units  having  face  value  of  ₹ 10  for  each  unit.  On  31st  March  2022,  the dividend  paid  by  the M.F. was 10%  and Mr.  X  found  that  his  annualized  yield was 153.33%. On 31st December 2023, 20% dividend was given. On 31st March 2024,  Mr.  X  redeemed  all  his  balance  of  11,296.11  units  when  his  annualized yield was 73.52%.</p>\n",
    "questions": [
      {
        "question_id": "afm_bos_cs38_1",
        "question": "NAV as on 31/03/2022 shall be approximately………………",
        "options": [
          "₹ 19.50",
          "₹ 20.50",
          "₹ 21.50",
          "₹ 22.50"
        ],
        "answer": 1,
        "explanation": "Yield for 9 months = (153.33 x 9/12) = 115% Market value of Investments as on 31.03.2022 = 1,00,000/- + (1,00,000x 115%) = ₹ 2,15,000/- Therefore, NAV as on 31.03.2022 = (2,15,000-10,000)/10,000 = ₹ 20.50"
      },
      {
        "question_id": "afm_bos_cs38_2",
        "question": "Total number of units as on 31/03/2022 shall be approximately………….",
        "options": [
          "10487.80 units",
          "12585.65 units",
          "9465.35 units",
          "11575.40 units"
        ],
        "answer": 0,
        "explanation": "Since  dividend  was  reinvested  by  Mr.  X,  additional  units acquired    10,000 = 487.80 units = 20.50 Therefore, units as on 31.03.2008 = 10, 000+ 487.80 = 10,487.80"
      },
      {
        "question_id": "afm_bos_cs38_3",
        "question": "Dividend as on 31/03/2023 shall be ………………",
        "options": [
          "₹ 20625.50",
          "₹ 20870.45",
          "₹ 20975.60",
          "₹ 21565.75"
        ],
        "answer": 2,
        "explanation": "Dividend  as  on  31.03.2023  =  10,487.80  x  ₹ 10  x  0.2  = ₹ 20,975.60"
      },
      {
        "question_id": "afm_bos_cs38_4",
        "question": "NAV as on 31/03/2023 shall be approximately………………",
        "options": [
          "24.65",
          "24.85",
          "25.95",
          "26.45"
        ],
        "answer": 2,
        "explanation": "Let X be the NAV on 31.03.2023, then number of new units reinvested will be ₹ 20,975.60/X. Accordingly 11296.11 units shall   consist   of   reinvested   units   and   10487.80   (as   on 31.03.2008).  Thus,  by  way  of  equation  it  can  be  shown  as follows: 11296.11 = 20975.60 + 10487.80 X Therefore,   NAV   as   on   31.03.2023=20,975.60/(11,296.11- 10,487.80) = ₹ 25.95"
      },
      {
        "question_id": "afm_bos_cs38_5",
        "question": "NAV as on 31/03/2024 shall be approximately………………",
        "options": [
          "20.50",
          "25.95",
          "26.75",
          "27.20"
        ],
        "answer": 2,
        "explanation": "NAV   as   on   31.03.2024   =   ₹ 1,00,000   (1+0.7352x33/12)/ 11296.11 = ₹ 26.75"
      }
    ]
  },
  {
    "case_id": "afm_bos_cs39",
    "case_chapter": [
      "Mutual Funds",
      "Portfolio Management"
    ],
    "caseText": "\n<p>The  Asset  Management  Company  of  the  mutual  fund  (MF)  has  declared  a dividend  of  9.98%  on  the  units  under  the  dividend  reinvestment  plan  for  the year  ended 31st March 2021. The  investors are issued additional  units for the dividend  at  the  rate  of  closing  Net  Asset  Value  (NAV)  for  the  year  as  per  the conditions of the scheme.</p>\n\n<p>The closing NAV was ₹ 24.95 as on 31st March 2021. An investor Mr. X who is having 20,800 units at the year-end has made an investment in the units before</p>\n\n<p>the declaration of the dividend at the rate of opening NAV plus an entry load of ₹ 0.04. The NAV has appreciated by 25% during the year.</p>\n\n<p>Assume the face value of the unit as ₹ 10.00.</p>\n",
    "questions": [
      {
        "question_id": "afm_bos_cs39_1",
        "question": "The Opening NAV of the Asset Management Company shall be …………",
        "options": [
          "₹ 20.24",
          "₹ 19.96",
          "₹ 18.75",
          "₹ 17.65"
        ],
        "answer": 1,
        "explanation": "Let N be the opening NAV, then N (1 + 0.25) = ₹ 24.95 N = ₹ 19.96 i.e., beginning NAV = ₹ 19.96"
      },
      {
        "question_id": "afm_bos_cs39_2",
        "question": "The Number of the units purchased shall be ………………….",
        "options": [
          "18750",
          "17500",
          "20450",
          "20000"
        ],
        "answer": 3,
        "explanation": "Let X be the number of units purchased Then ending units = 20,800 Accordingly, 20800  X  0.998X 24.95 20800  24.05X  0.998X 24.95 X = 20000"
      },
      {
        "question_id": "afm_bos_cs39_3",
        "question": "Original amount of the investment shall be ………………",
        "options": [
          "₹ 4,00,000",
          "₹ 6,50,000",
          "₹ 3,55,000",
          "₹ 5,65,000"
        ],
        "answer": 0,
        "explanation": "Initial NAV                                         ₹ 19.96 Entry Load                                         ₹ 0.04 ₹ 20.00 Number of funds purchased          20,000 Amount of investment                    ₹ 4,00,000"
      },
      {
        "question_id": "afm_bos_cs39_4",
        "question": "Which of the following statement about Expense ratio is/ are incorrect? (i)       It is the percentage of income that is spent to run a mutual fund. (ii)      It includes advisory fees, travel costs, registrar fees, custodian fees, etc. (iii)     It includes Brokerage costs for trading of Portfolio. (iv)     High Expense Ratio can seriously  undermine the  performance of a mutual fund scheme.",
        "options": [
          "(i), (ii), (iii)",
          "(i), (iii)",
          "only (iii)",
          "only (i)"
        ],
        "answer": 1,
        "explanation": "Refer the concept of Expense Ratio in Mutual Funds."
      },
      {
        "question_id": "afm_bos_cs39_5",
        "question": "…………………considers   and   uses   downside   deviation   instead   of   total standard deviation in denominator.",
        "options": [
          "Expense Ratio",
          "Sharpe Ratio",
          "Treynor Ratio",
          "Sortino Ratio"
        ],
        "answer": 3,
        "explanation": "Refer the topic financial measures to evaluate Mutual Funds."
      }
    ]
  },
  {
    "case_id": "afm_bos_cs40",
    "case_chapter": [
      "Derivatives Analysis and Valuation",
      "Business Valuation"
    ],
    "caseText": "\n<p>You  as  an  investor  had  purchased  a  4-month  European  Call  Option  on  the equity shares of X Ltd. for ₹ 10, of which the current market price is ₹ 132 per share and the exercise price ₹ 150. You expect the price to range between ₹ 120 to  ₹ 190.  The  expected  share  price  of  X  Ltd.  and  related  probability  is  given below:</p>\n\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"5\">\n  <tr><th>Expected Price (₹ )</th><th>120</th><th>140</th><th>160</th><th>180</th><th>190</th></tr>\n  <tr><td>Probability</td><td>0.05</td><td>0.20</td><td>0.50</td><td>0.10</td><td>0.15</td></tr>\n</table>\n",
    "questions": [
      {
        "question_id": "afm_bos_cs40_1",
        "question": "Expected price of share of X Ltd. at the end of 4 months shall be…….",
        "options": [
          "₹ 160.00",
          "₹ 160.50",
          "₹ 158.00",
          "₹ 140.00"
        ],
        "answer": 1,
        "explanation": "₹ 120 x 0.05 + ₹ 140 x 0.20 + ₹ 160 x 0.50 + ₹ 180 x 0.10 + ₹ 190 x 0.15 = ₹ 160.50"
      },
      {
        "question_id": "afm_bos_cs40_2",
        "question": "Suppose if the exercise price prevails at the end of 4 months the Value of Call Option shall be…………",
        "options": [
          "₹ 0",
          "₹ 18",
          "₹ 10",
          "₹ 14"
        ],
        "answer": 0,
        "explanation": "Share can either be purchased from market or from the seller of the option."
      },
      {
        "question_id": "afm_bos_cs40_3",
        "question": "In  case  the  option  is  held  to  its  maturity,  the  expected  value  of  the  call option shall be……………",
        "options": [
          "₹ 0",
          "₹ 18",
          "₹ 10",
          "₹ 14"
        ],
        "answer": 3,
        "explanation": "₹ 10 x 0.50 + ₹ 30 x 0.10 + ₹ 40 x 0.15 = ₹ 14"
      },
      {
        "question_id": "afm_bos_cs40_4",
        "question": "In the given different scenarios of expected prices of share of X Ltd. at the time of maturity the option shall be in-the-money in                 scenarios.",
        "options": [
          "two",
          "three",
          "five",
          "In none of the scenario"
        ],
        "answer": 1,
        "explanation": "When spot price exceeds exercise price it will be beneficial to purchase share from the option seller."
      },
      {
        "question_id": "afm_bos_cs40_5",
        "question": "In the given different scenarios of expected prices of share of X Ltd. at the time of maturity the option shall be at-the-money in                 scenarios.",
        "options": [
          "two",
          "three",
          "five",
          "In none of the scenario"
        ],
        "answer": 3,
        "explanation": "In none of the case the expected spot price is ₹ 150."
      }
    ]
  },
  {
    "case_id": "afm_bos_cs41",
    "case_chapter": [
      "Security Valuation",
      "Securitization",
      "Risk Management"
    ],
    "caseText": "\n<p>Suppose you are a risk manager at a financial institution, and your company has loaned a significant amount of ₹ 500 crore to a company X Ltd. for a period of 3  years  at  6-month  at  MCLR  plus  200  bps.  You  are  concerned  about  X  Ltd.'s ability  to  repay  the  debt  due  to  recent  market  volatility.  To  protect  your institution from potential default, you decide to purchase a Credit Default Swap (CDS)  from  ABC  Bank  Ltd.  for  same  notional  amount  at  a  premium  quoted  at 1% per year through cash settlement.</p>\n\n<p>On  the  respective  reset  dates  for  the  same  period  actual  MCLR  interest  rate comes out as follows:</p>\n\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"5\">\n  <tr><th>Reset</th><th>MCLR</th></tr>\n  <tr><td>1</td><td>9.75%</td></tr>\n  <tr><td>2</td><td>10.00%</td></tr>\n  <tr><td>3</td><td>10.25%</td></tr>\n  <tr><td>4</td><td>10.35%</td></tr>\n  <tr><td>5</td><td>10.50%</td></tr>\n  <tr><td>6</td><td>10.60%</td></tr>\n</table>\n",
    "questions": [
      {
        "question_id": "afm_bos_cs41_1",
        "question": "The primary purpose of a Credit Default Swap (CDS) is...................",
        "options": [
          "to increase the value of bonds.",
          "to protect against default risk of a debt obligation.",
          "to provide guaranteed profit to the buyer.",
          "to create a new form of loan."
        ],
        "answer": 1,
        "explanation": "Refer the concept of Credit Default Swap."
      },
      {
        "question_id": "afm_bos_cs41_2",
        "question": "Which of the following statements is true about CDS contracts?",
        "options": [
          "CDS contracts cannot be used for speculation.",
          "CDS contracts are governed by government regulations.",
          "CDS contracts are private agreements between two parties.",
          "CDS contracts eliminate all risks for the buyer."
        ],
        "answer": 2,
        "explanation": "CDS  Contracts  can  also  be  used  for  speculation  purpose  as well.   Regulated   by   ISDA.   CDS   provide   protection   against default risk only."
      },
      {
        "question_id": "afm_bos_cs41_3",
        "question": "Which  organization  publishes  the  guidelines  and  rules  for  conducting Credit Default Swap transactions?",
        "options": [
          "Federal Reserve",
          "International Swap and Derivative Association (ISDA)",
          "Securities and Exchange Commission (SEC)",
          "World Trade Organization (WTO)"
        ],
        "answer": 1,
        "explanation": "Being OTC in nature."
      },
      {
        "question_id": "afm_bos_cs41_4",
        "question": "Assuming  no  default  occurs  the  total  premium  your  company  will  pay during the designated loan period shall be........",
        "options": [
          "₹ 5 crore",
          "₹ 10 crore",
          "₹ 15 crore",
          "₹ 30 crore"
        ],
        "answer": 2,
        "explanation": "₹ 500 crore x 1% x 3 = ₹ 15 crore"
      },
      {
        "question_id": "afm_bos_cs41_5",
        "question": "Suppose if the lender defaults somewhere in the beginning of third year of loan (after payment of interest upto 2 years) and the market value of a reference loans falls to 75% of its par value, then ABC Bank will pay your company            in a cash settlement.",
        "options": [
          "₹ 15 crore",
          "₹ 30 crore",
          "₹ 125 crore",
          "₹ 500 crore"
        ],
        "answer": 2,
        "explanation": "₹ 500 crore(1 – 0.75) = ₹ 125 crore"
      }
    ]
  },
  {
    "case_id": "afm_bos_cs42",
    "case_chapter": [
      "Advanced Capital Budgeting Decisions",
      "Risk Management"
    ],
    "caseText": "\n<p>XYZ   Ltd.   is   a   mid-sized   manufacturing   company   that   produces   industrial equipment. The company is considering a new investment project—a state-of- the-art  automated  production  line,  which  is  expected  to  improve  production efficiency. The details of the same project are as follows:</p>\n\n<p>₹ </p>\n\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"5\">\n  <tr><th>Initial Cost of the project</th><th>10,00,000</th></tr>\n  <tr><td>Sales price/unit</td><td>60</td></tr>\n  <tr><td>Cost/unit</td><td>40</td></tr>\n</table>\n\n<p>Sales volumes</p>\n\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"5\">\n  <tr><th>Year 1</th><th>20000 units</th></tr>\n  <tr><td>Year 2</td><td>30000 units</td></tr>\n  <tr><td>Year 3</td><td>30000 units</td></tr>\n</table>\n\n<p>The applicable discount rate is 10% p.a.</p>\n",
    "questions": [
      {
        "question_id": "afm_bos_cs42_1",
        "question": "Sensitivity analysis helps to identify…………………..",
        "options": [
          "the exact profitability of the project",
          "the break-even point.",
          "the degree to which a change in each variable affects the NPV.",
          "the amount of investment required"
        ],
        "answer": 2,
        "explanation": "Other options are related to Profitability and Investment."
      },
      {
        "question_id": "afm_bos_cs42_2",
        "question": "The sale price per unit so that the project would break even with zero NPV shall be approximately…………..",
        "options": [
          "₹ 40.00",
          "₹ 55.26",
          "₹ 60.00.",
          "₹ 44.74"
        ],
        "answer": 1,
        "explanation": "Let  the  sale  price/Unit  be  S  so  that  the  project  would  break even with 0 NPV.  10,00,000 = 20,000 × (S- 40)  + 30,000 × (S-40)  + 30,000 (S-40) 1.1                             1.21                         1.331 S = ₹ 55.26"
      },
      {
        "question_id": "afm_bos_cs42_3",
        "question": "The cost per unit so that the project would break even with zero NPV shall be approximately…………..",
        "options": [
          "₹ 40.00",
          "₹ 55.26",
          "₹ 60.00.",
          "₹ 44.74"
        ],
        "answer": 3,
        "explanation": "If sales price = ₹ 60 the cost price required to give a margin of ₹ 15.26 is (₹ 60 – ₹ 15.26) or ₹ 44.74."
      },
      {
        "question_id": "afm_bos_cs42_4",
        "question": "Overall  …………in  the  sale  volume  will  lead  to  the  project  to  break  even with zero NPV.",
        "options": [
          "increase of 23.68%",
          "fall of 23.68%",
          "Increase of 31.03%",
          "fall of 31.03%"
        ],
        "answer": 1,
        "explanation": "The requisite percentage fall is:- 3,10,293/13,10,293   100 = 23.68%"
      },
      {
        "question_id": "afm_bos_cs42_5",
        "question": "A/an             in the initial outlay will lead to the project to break even with zero NPV.",
        "options": [
          "increase of 23.68%",
          "fall of 23.68%",
          "Increase of 31.03%",
          "fall of 31.03%"
        ],
        "answer": 2,
        "explanation": "Since  PV  of  inflows  remains  at  ₹ 13,10,293  the  initial  outlay must also be the same. Percentage rise = (3,10,293/10,00,000) x 100 = 31.03%."
      }
    ]
  },
  {
    "case_id": "afm_bos_cs43",
    "case_chapter": [
      "Security Valuation",
      "Securitization",
      "Risk Management"
    ],
    "caseText": "\n<p>You  are an  investment analyst working for  a financial  advisory  firm. You  have been  asked  to  analyze  the  bond  market's  yield  curve  to  assist  your  clients  in making   investment   decisions.   The   yield   curve   represents   the   relationship between the interest rates (yield) and the time to maturity for debt securities, usually government bonds.</p>\n\n<p>For  simplicity,  assume  the  following  yield  data  for  government  bonds  over various maturities (measured in years):</p>\n\n<p>Yield Curve Table</p>\n\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"5\">\n  <tr><th>Maturity (Years)</th><th>Yield (%)</th></tr>\n  <tr><td>1 Year</td><td>3.00%</td></tr>\n  <tr><td>2 Years</td><td>4.00%</td></tr>\n  <tr><td>3 Years</td><td>5.00%</td></tr>\n  <tr><td>5 Years</td><td>6.00%</td></tr>\n  <tr><td>7 Years</td><td>6.40%</td></tr>\n  <tr><td>10 Years</td><td>7.00%</td></tr>\n  <tr><td>15 Years</td><td>7.40%</td></tr>\n  <tr><td>30 Years</td><td>7.60%</td></tr>\n</table>\n",
    "questions": [
      {
        "question_id": "afm_bos_cs43_1",
        "question": "The main characteristic of a normal yield curve is……………….",
        "options": [
          "Short-term yields are higher than long-term yields.",
          "Short-term yields are lower than long-term yields.",
          "Yields remain the same across all maturities.",
          "Yields fluctuate randomly over different maturities."
        ],
        "answer": 1,
        "explanation": "Long term bonds carry higher interest rate risk."
      },
      {
        "question_id": "afm_bos_cs43_2",
        "question": "Based on the revised yield data, what is the yield spread between the 10- year bond and the 1-year bond?",
        "options": [
          "2.0%",
          "3.5%",
          "4.0%",
          "5.0%"
        ],
        "answer": 2,
        "explanation": "7.00% - 3.00% = 4.00%"
      },
      {
        "question_id": "afm_bos_cs43_3",
        "question": "An inverted yield curve typically indicates………………",
        "options": [
          "Economic growth",
          "Economic uncertainty",
          "An upcoming recession",
          "Inflationary pressure"
        ],
        "answer": 2,
        "explanation": "Investors  are  pessimistic  about  long  term  perspective  of  the economy."
      },
      {
        "question_id": "afm_bos_cs43_4",
        "question": "If  an  investor  is  looking  to  invest  for  2  years  starting  3  years  from  now, the forward rate he would expect shall be………",
        "options": [
          "7.41%",
          "7.52%",
          "7.76%",
          "7.93%"
        ],
        "answer": 1,
        "explanation": "[(1.06)5/(1.05)3]½ - 1 = 7.52%"
      },
      {
        "question_id": "afm_bos_cs43_5",
        "question": "If  an  investor  is  looking  to  invest  for  2  years  starting  5  years  from  now, the forward rate he would expect shall be………",
        "options": [
          "7.41%",
          "7.52%",
          "7.76%",
          "7.93%"
        ],
        "answer": 0,
        "explanation": "[(1.064)7/(1.06)5]½ - 1 = 7.41%"
      }
    ]
  },
  {
    "case_id": "afm_bos_cs44",
    "case_chapter": [
      "Security Valuation"
    ],
    "caseText": "\n<p>Following Financial data are available for PQR Ltd. for the financial year ending 2023:</p>\n\n<p>(₹ in lakh)</p>\n\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"5\">\n  <tr><th>8% Debentures</th><th>125</th></tr>\n  <tr><td>10% Bonds (2022)</td><td>50</td></tr>\n  <tr><td>Equity Shares (₹ 10 each)</td><td>100</td></tr>\n  <tr><td>Reserves and Surplus</td><td>300</td></tr>\n  <tr><td>Total Assets</td><td>600</td></tr>\n  <tr><td>Assets Turnovers ratio</td><td>1.1</td></tr>\n  <tr><td>Effective interest rate</td><td>8%</td></tr>\n  <tr><td>Effective tax rate</td><td>40%</td></tr>\n  <tr><td>Operating margin</td><td>10%</td></tr>\n  <tr><td>Dividend payout ratio</td><td>16.67%</td></tr>\n  <tr><td>Current market Price of Share</td><td>₹ 14</td></tr>\n  <tr><td>Required rate of return of investors</td><td>15%</td></tr>\n</table>\n",
    "questions": [
      {
        "question_id": "afm_bos_cs44_1",
        "question": "10% Bonds must have issued in the month of…………….",
        "options": [
          "May 2022",
          "June 2022",
          "July 2022",
          "August 2022"
        ],
        "answer": 1,
        "explanation": "175×8%-125×8% 50×10%        = 0.8 year i.e. 9.6 months prior to 31.03.2023"
      },
      {
        "question_id": "afm_bos_cs44_2",
        "question": "Amount  of  retailed  earning  for  the  financial  year  2023  approximately is…………..",
        "options": [
          "₹ 52.00 lakh",
          "₹ 31.20 lakh",
          "₹ 26.00 lakh",
          "₹ 5.20 lakh"
        ],
        "answer": 2,
        "explanation": "(1 – 16.67%) [(600 x 1.10 x 10% - 175 x 8%)(1 – 0.40)] = 26"
      },
      {
        "question_id": "afm_bos_cs44_3",
        "question": "Return on Equity (ROE) of PQR Ltd. is…………..",
        "options": [
          "15.00%",
          "6.50%",
          "10.00%",
          "7.80%"
        ],
        "answer": 3,
        "explanation": "[(600 x 1.10 x 10% - 175 x 8%)(1 – 0.40)]/ 400 = 7.80%"
      },
      {
        "question_id": "afm_bos_cs44_4",
        "question": "Sustainable Growth Rate of PQR Ltd. shall be approximately…………..",
        "options": [
          "15.00%",
          "6.50%",
          "10.00%",
          "7.80%"
        ],
        "answer": 1,
        "explanation": "ROE(1 – d) = 7.80 x (1 – 0.1667) =6.50%"
      },
      {
        "question_id": "afm_bos_cs44_5",
        "question": "Fair  price  of  share  of  PQR  Ltd.  using  Dividend  Discount  Model  shall  be approximately………….",
        "options": [
          "₹ 10",
          "₹ 14",
          "₹ 6.12",
          "₹ 6.51"
        ],
        "answer": 3,
        "explanation": "3.12(0.1667)(1.065)= 6.51 0.15- 0.065"
      }
    ]
  },
  {
    "case_id": "afm_bos_cs45",
    "case_chapter": [
      "Foreign Exchange Exposure and Risk Management"
    ],
    "caseText": "\n<p>An Indian exporting firm, Rohit and Bros. exported good worth of AUD 1 million to an importer in Sydney. Rohit and Bros. are worried about likely depreciation of AUD in near future as it is likely that the export sum will be received after 3 months. Today as such as there is no derivative contract is available in AUD to hedge itself from such depreciation.</p>\n\n<p>The following data is given:</p>\n\n<p>Spot rate                                                   :            ₹ 56.00/AUD</p>\n\n<p>3 months interest rate : India               :            12 per cent per annum</p>\n\n<p>: Australia         :           5 per cent per annum</p>\n",
    "questions": [
      {
        "question_id": "afm_bos_cs45_1",
        "question": "…………..  hedging  technique  can  be  used  Rohit  and  Bros.  to  hedge  itself against the risk of depreciation of AUD.",
        "options": [
          "Forward Contract",
          "Future Contract",
          "Option Contract",
          "Money Market Hedge"
        ],
        "answer": 3,
        "explanation": "Money Market Hedging technique is used when derivatives to hedge the risk are not available."
      },
      {
        "question_id": "afm_bos_cs45_2",
        "question": "Suppose if Rohit and Bros. want to borrow some amount in AUD in such a  manner  that  the  receivable  amount  can  be  used  to  repay  the  amount borrowed along with interest. The amount to be borrowed by Rohit and Bros. shall be approximately………",
        "options": [
          "AUD 1 million",
          "AUD 9,87,654",
          "₹ 5,53,08,624",
          "₹ 5,69,67,882"
        ],
        "answer": 1,
        "explanation": "AUD 1000000/(1+0.05/4) = AUD 987654"
      },
      {
        "question_id": "afm_bos_cs45_3",
        "question": "Suppose  if  Rohit  and  Bros.  borrows  a  designated  amount  in  AUD  for  3 months in such a manner that the receivable amount can be used to repay the amount borrowed along with interest and plan to invest same amount in Indian spot market. The same amount available for investment shall be approximately………",
        "options": [
          "AUD 1 million",
          "AUD 9,87,654",
          "₹ 5,53,08,624",
          "₹ 5,69,67,882"
        ],
        "answer": 2,
        "explanation": "AUD 987654 x ₹ 56.00 =  ₹ 55308624"
      },
      {
        "question_id": "afm_bos_cs45_4",
        "question": "Suppose if Rohit and Bros. borrows a designated amount for 3 months in AUD  in such a manner that the receivable amount can be used to repay the amount borrowed along with interest. Further he plans to invest same amount  in  Indian  spot  market.  The  amount  obtained  after  3  months  of investment shall be approximately………",
        "options": [
          "AUD 1 Million",
          "AUD 9,87,654",
          "₹ 5,53,08,624",
          "₹ 5,69,67,883"
        ],
        "answer": 3,
        "explanation": "₹ 55308624(1 + 0.12/4) = ₹ 56967883"
      },
      {
        "question_id": "afm_bos_cs45_5",
        "question": "Suppose if Interest Rate Parity theory is held between INR and AUD, then forward rate between INR and AUD for 6 month should be…………..",
        "options": [
          "₹ 51.54/AUD",
          "₹ 57.91/AUD",
          "₹ 52.50/AUD",
          "₹ 59.73/AUD"
        ],
        "answer": 1,
        "explanation": "₹ 56 (1 + 0.12/2)/(1 + 0.05/2) = ₹ 57.91"
      }
    ]
  },
  {
    "case_id": "afm_bos_cs46",
    "case_chapter": [
      "Portfolio Management",
      "Risk Management"
    ],
    "caseText": "\n<p>Mr. B is a rational risk taker. He takes his position in a single stock for 4 days in a week. He does not take a position on Friday to avoid weekend effect and takes position only for four days in a week i.e. Monday to Thursday. He transfers the amount on Monday morning and withdraws the balance on Friday morning. He desires to take a maximum exposure in the single stock (not the portfolio) where Value  at  Risk  (VAR)  should  not  exceed  the  balance  lying  in  his  bank  account. The position by his manager, as per standing instructions, is taken on the free balance lying in the bank account in the morning on each Monday.</p>\n\n<p>On Monday morning (before opening of the capital market) he has transferred an amount of ₹ 11 Crore to his bank account. A fixed deposit also matured on this  Monday.  The  maturity  amount  of  ₹ 63,42,560  was  also  credited  to  his account  by  the  bank  in  the  morning  of  the  Monday.  However, Mr.  B  received the intimation of the same in the evening. The bank needs a minimum balance of ₹ 1,000 all the time.</p>\n\n<p>The   other   information   with   respect   to   stocks   X   and   Y,   which   are   under consideration for this week, is as under:</p>\n\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"5\">\n  <tr><th>X</th><th>Y</th></tr>\n  <tr><td>Return</td><td>Probability</td><td>Return</td><td>Probability</td></tr>\n  <tr><td>6</td><td>0.10</td><td>4</td><td>0.10</td></tr>\n  <tr><td>7</td><td>0.25</td><td>6</td><td>0.20</td></tr>\n  <tr><td>8</td><td>0.30</td><td>8</td><td>0.40</td></tr>\n  <tr><td>9</td><td>0.25</td><td>10</td><td>0.20</td></tr>\n  <tr><td>10</td><td>0.10</td><td>12</td><td>0.10</td></tr>\n</table>\n",
    "questions": [
      {
        "question_id": "afm_bos_cs46_1",
        "question": "Available amount which can be used by Mr. B for potential exposure for 4 days on Monday morning shall be………………",
        "options": [
          "₹ 11,00,00,000",
          "₹ 11,63,41,560",
          "₹ 11,00,01,000",
          "₹ 11,63,42,560"
        ],
        "answer": 1,
        "explanation": "₹ 11,00,00,000 + ₹ 63,42,560 - ₹ 1,000 = ₹ 11,63,41,560"
      },
      {
        "question_id": "afm_bos_cs46_2",
        "question": "The  Z-score  at  a  99%  confidence  level  for  Mr.  B’s  Value  at  Risk  (VaR) is………….",
        "options": [
          "1.64",
          "1.96",
          "2.33",
          "2.58"
        ],
        "answer": 2,
        "explanation": "1.64 = 95%, 1.96 = 98% and 2.58 = 99.50%"
      },
      {
        "question_id": "afm_bos_cs46_3",
        "question": "The expected return for the stocks X is……….",
        "options": [
          "7%",
          "8%",
          "9%",
          "10%"
        ],
        "answer": 1,
        "explanation": "6 x 0.10 +7 x 0.25 +8 x 0.30 + 9 x 0.25 + 10 x 0.10 = 8%"
      },
      {
        "question_id": "afm_bos_cs46_4",
        "question": "The expected return for the stocks Y is……….",
        "options": [
          "7%",
          "8%",
          "9%",
          "10%"
        ],
        "answer": 1,
        "explanation": "4 x 0.10 + 6 x 0.20 + 8 x 0.40 + 10 x 0.20 + 12 x 0.10 = 8%"
      },
      {
        "question_id": "afm_bos_cs46_5",
        "question": "In  which  stock  should  Mr.  B  invest  in  to  maximize  his  returns  while maintaining his Value at Risk (VaR) within acceptable limits?",
        "options": [
          "Stock X",
          "Stock Y",
          "Both stocks are equally good",
          "Neither stock is suitable"
        ],
        "answer": 0,
        "explanation": "CVx  = 1.14= 0.1425 and CVY  = 2.19= 0.274 8                                            8"
      }
    ]
  },
  {
    "case_id": "afm_bos_cs47",
    "case_chapter": [
      "Security Valuation"
    ],
    "caseText": "\n<p>XYZ Ltd. plans to invest ₹ 800,000 in a new unit. The project is expected to have a useful life of 4 years, with no salvage value at the end of its life. The annual depreciation charge for the project is ₹ 200,000.</p>\n\n<p>Projected revenues and costs for the project, ignoring inflation, are provided as follows:</p>\n\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"5\">\n  <tr><th>Year</th><th>Revenues (₹ )</th><th>Costs (₹ )</th></tr>\n  <tr><td>1</td><td>600,000</td><td>300,000</td></tr>\n  <tr><td>2</td><td>700,000</td><td>400,000</td></tr>\n  <tr><td>3</td><td>800,000</td><td>400,000</td></tr>\n  <tr><td>4</td><td>800,000</td><td>400,000</td></tr>\n</table>\n\n<p>XYZ Ltd. is subject to a corporate tax rate of 60%, and the cost of capital for the project, including inflation premium, is 10%.</p>\n\n<p>Depreciation provides a tax benefit, and inflation rates for revenues and costs over the project’s lifespan are as follows:</p>\n\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"5\">\n  <tr><th>Year</th><th>Revenue Inflation</th><th>Cost Inflation</th></tr>\n  <tr><td>1</td><td>10%</td><td>12%</td></tr>\n  <tr><td>2</td><td>9%</td><td>10%</td></tr>\n  <tr><td>3</td><td>8%</td><td>9%</td></tr>\n  <tr><td>4</td><td>7%</td><td>8%</td></tr>\n</table>\n",
    "questions": [
      {
        "question_id": "afm_bos_cs47_1",
        "question": "The depreciation tax benefit for the project per year shall be……………",
        "options": [
          "₹ 120,000",
          "₹ 150,000",
          "₹ 200,000",
          "₹ 180,000"
        ],
        "answer": 0,
        "explanation": "₹ 2,00,000 x 0.60 = ₹ 1,20,000"
      },
      {
        "question_id": "afm_bos_cs47_2",
        "question": "The inflation-adjusted revenue in Year 2 shall be…………….",
        "options": [
          "₹ 700,000",
          "₹ 839,300",
          "₹ 492,800",
          "₹ 501,760"
        ],
        "answer": 1,
        "explanation": "₹ 7,00,000(1.10)(1.09) = ₹ 8,39,300"
      },
      {
        "question_id": "afm_bos_cs47_3",
        "question": "The total cash inflow in Year 1 after adjusting for inflation and tax benefit on depreciation shall be…………",
        "options": [
          "₹ 330,000",
          "₹ 336,000",
          "₹ 249,600",
          "₹ 492,800"
        ],
        "answer": 2,
        "explanation": "[₹ 6,00,000(1.10)   –   ₹ 3,00,000(1.12)]0.40   +   ₹ 1,20,000   = ₹ 2,49,600"
      },
      {
        "question_id": "afm_bos_cs47_4",
        "question": "The inflation-adjusted cost in Year 2 shall be…………….",
        "options": [
          "₹ 700,000",
          "₹ 839,300",
          "₹ 492,800",
          "₹ 501,760"
        ],
        "answer": 2,
        "explanation": "₹ 4,00,000(1.12)(1.10) = ₹ 4,92,800"
      },
      {
        "question_id": "afm_bos_cs47_5",
        "question": "The    present    value    of    cash    inflow    for    the    year    3    shall    be approximately………..",
        "options": [
          "₹ 213,604",
          "₹ 226,299",
          "₹ 226,886",
          "₹ 239,949"
        ],
        "answer": 3,
        "explanation": "[{₹ 8,00,000(1.10)(1.09)(1.08) - ₹ 4,00,000(1.12)(1.10)(1.09)}0.40 + ₹ 1,20,000] PVF (10%, 3)"
      }
    ]
  },
  {
    "case_id": "afm_bos_cs48",
    "case_chapter": [
      "Portfolio Management",
      "Business Valuation",
      "Risk Management"
    ],
    "caseText": "\n<p>An investor is evaluating two companies, A Ltd. and B Ltd., to determine which company  is  a  better  investment.  Both  companies  have  different  expected returns, standard deviations, and betas.</p>\n\n<p>•         A  Ltd.  has  an  expected  return  of  22%  and  a  standard  deviation  (risk)  of 40%. Its Beta is 0.86.</p>\n\n<p>•         B Ltd. has an expected return of 24%, a standard deviation of 38%, and a Beta of 1.24.</p>\n\n<p>The correlation coefficient between the returns of A Ltd. and B Ltd. is 0.72, and the standard deviation of the market return is 20%.</p>\n",
    "questions": [
      {
        "question_id": "afm_bos_cs48_1",
        "question": "The portfolio's expected rate of return, if the investor invests 30% in B Ltd. and 70% in A Ltd. shall be……………….",
        "options": [
          "22.00%",
          "22.60%",
          "23.40%",
          "24.00%"
        ],
        "answer": 1,
        "explanation": "22% X 0.70 + 24% X 0.30 = 22.60%"
      },
      {
        "question_id": "afm_bos_cs48_2",
        "question": "The standard deviation of the investor's portfolio if 30% is invested in B Ltd. and 70% in A Ltd. shall be approximately……………..",
        "options": [
          "40%",
          "39%",
          "37%",
          "35%"
        ],
        "answer": 2,
        "explanation": "Variance         =         (40)2(0.70)2         +         (38)2(0.30)2 2(0.70)(0.30)(40)(38)(0.72) = 1373.61, SD = √1375.61= 37.08\"\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t+"
      },
      {
        "question_id": "afm_bos_cs48_3",
        "question": "The  covariance  between  returns  of  Stock  of  A  Ltd.  and  B  Ltd.  shall  be approximately……….",
        "options": [
          "0.0230",
          "0.1094",
          "0.7200",
          "0.2189"
        ],
        "answer": 1,
        "explanation": "(0.72)(0.40)(0.38) = 0.1094"
      },
      {
        "question_id": "afm_bos_cs48_4",
        "question": "Based   on   the   data   given   the   Risk   Free   Rate   of   Return   shall   be approximately ………..",
        "options": [
          "17.48%",
          "18.00%",
          "20.00%",
          "22.74%"
        ],
        "answer": 0,
        "explanation": "Solve simultaneous equations 22 = Rf  + 0.86(Rm  - Rf) and 24 = Rf  + 1.24(Rm  - Rf)"
      },
      {
        "question_id": "afm_bos_cs48_5",
        "question": "Based    on    the    data    given    the   Market    Rate    of    Return    shall    be approximately……………",
        "options": [
          "17.48%",
          "18.00%",
          "20.00%",
          "22.74%"
        ],
        "answer": 3,
        "explanation": "Solve simultaneous equations 22 = Rf  + 0.86(Rm  - Rf) and 24 = Rf  + 1.24(Rm  - Rf)"
      }
    ]
  },
  {
    "case_id": "afm_bos_cs49",
    "case_chapter": [
      "Derivatives Analysis and Valuation",
      "Business Valuation"
    ],
    "caseText": "\n<p>XYZ Ltd., a U.S. firm, will require £ 300,000 in 180 days and is evaluating different strategies to hedge against currency risk. The available market data is as follows:</p>\n\n<p>Current Spot Rate: 1 £ = $ 2.00</p>\n\n<p>180-Day Forward Rate: 1 £ = $ 1.96</p>\n\n<p>Interest Rates:</p>\n\n<p>•         UK (180 days):</p>\n\n<p>o        Deposit Rate: 4.5%</p>\n\n<p>o        Borrowing Rate: 5%</p>\n\n<p>•         US (180 days):</p>\n\n<p>o        Deposit Rate: 5%</p>\n\n<p>o        Borrowing Rate: 5.5%</p>\n\n<p>Option Contract:</p>\n\n<p>•         Call option available on £, expiring in 180 days with: o        Exercise price: $ 1.97</p>\n\n<p>o        Premium: $ 0.04</p>\n\n<p>XYZ Ltd. has forecasted the following probabilities for spot rates after 180 days:</p>\n\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"5\">\n  <tr><th>Spot Rate</th><th>Probability</th></tr>\n  <tr><td>$ 1.91</td><td>25%</td></tr>\n  <tr><td>$ 1.95</td><td>60%</td></tr>\n  <tr><td>$ 2.05</td><td>15%</td></tr>\n</table>\n",
    "questions": [
      {
        "question_id": "afm_bos_cs49_1",
        "question": "The expected dollar amount needed                 if XYZ Ltd. does not hedge.",
        "options": [
          "$ 5,88,000",
          "$ 6,05,741",
          "$ 5,95,560",
          "$ 5,86,500"
        ],
        "answer": 3,
        "explanation": "($1.91  x  0.25  +  $1.95  x  0.60  +  $2.05  x  0.15)  £  300000  =  £ 5,86,500"
      },
      {
        "question_id": "afm_bos_cs49_2",
        "question": "If  XYZ  Ltd.  chooses  the  forward  contract  option,  the  expected  dollar amount  needed  in  180  days,  the  total  dollar  amount  required  shall be....................",
        "options": [
          "$ 5,88,000",
          "$ 6,05,741",
          "$ 5,95,560",
          "$ 5,86,500"
        ],
        "answer": 0,
        "explanation": "$1.96 x £ 300000 = $ 5,88,000"
      },
      {
        "question_id": "afm_bos_cs49_3",
        "question": "Under  the  money  market  hedge,  approximately  how  much  will  XYZ  Ltd. need to repay after 180 days?",
        "options": [
          "$ 5,88,000",
          "$ 6,05,741",
          "$ 5,95,560",
          "$ 5,86,500"
        ],
        "answer": 1,
        "explanation": "Borrow $, convert to £, invest £, repay $ loan in 180 days Amount in £ to be invested = 3,00,000/1.045 = £ 2,87,081 Amount  of  $  needed  to  convert  into  £  =  2,87,081  x  2  =  $ 5,74,162 Interest and principal on $ loan after 180 days = $5,74,162 x 1.055 = $ 6,05,741"
      },
      {
        "question_id": "afm_bos_cs49_4",
        "question": "If XYZ Ltd. chooses the call option contract, after 180 days the total cost in  dollar  for  £  300,000  (inclusive  of  interest  on  Premium  amount)  shall be....................",
        "options": [
          "$ 5,88,000",
          "$ 6,05,741",
          "$ 5,95,560",
          "$ 5,86,500"
        ],
        "answer": 2,
        "explanation": "[($1.91 + 0.04) x 0.25 + ($1.95 + 0.04) x 0.60 + ($1.97 + 0.04) x 0.15] £ 3,00,000 + $12,000 x 5.5% = $5,95,560"
      },
      {
        "question_id": "afm_bos_cs49_5",
        "question": "The     expected     spot     rate     per     £     after     180     days     shall     be approximately.................",
        "options": [
          "$ 1.91",
          "$ 1.94",
          "$ 1.96",
          "$ 2.05"
        ],
        "answer": 2,
        "explanation": "$1.91 x 0.25 + $1.95 x 0.60 + $2.05 x 0.15 = $1.955 say $1.96"
      }
    ]
  },
  {
    "case_id": "afm_bos_cs50",
    "case_chapter": [
      "Derivatives Analysis and Valuation",
      "Security Valuation",
      "Interest Rate Risk Management"
    ],
    "caseText": "\n<p>P Ltd. is planning to borrow an amount of ₹ 60 crores for a period of 3 months in the coming 6 month's time from now. The current rate of interest is 9% p.a., but it is likely  to go up in 6 month’s time. The company wants to hedge itself against the likely increase in interest rate.</p>\n\n<p>You  as  CFO  has  been  asked  to  suggest  both  traditional  as  well  as  modern methods to hedge interest rate risk.</p>\n\n<p>Suppose the banker of P Ltd. has quoted the following Forward Rate Agreement (FRA) rates:</p>\n\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"5\">\n  <tr><th>3 x 6</th><th>9.10%</th><th>9.15%</th></tr>\n  <tr><td>6 x 9</td><td>9.20%</td><td>9.30%</td></tr>\n  <tr><td>9 x 12</td><td>9.35%</td><td>9.45%</td></tr>\n</table>\n\n<p>P Ltd. has already issued redeemable bonds or debentures.</p>\n",
    "questions": [
      {
        "question_id": "afm_bos_cs50_1",
        "question": "Which  of  the  following  rate  shall  be  applicable  for  FRA  to  hedge  the interest rate risk if P Ltd. agrees to adopt this method to hedge interest rate risk?",
        "options": [
          "9.10% p.a.",
          "9.30% p.a.",
          "9.35% p.a.",
          "9.45% p.a."
        ],
        "answer": 1,
        "explanation": "P Ltd. is planning to borrow after 6 months for a period of 3 months and higher of two rates shall be taken."
      },
      {
        "question_id": "afm_bos_cs50_2",
        "question": "If   the  actual  rate  of  interest  after  6   months  happens  to  be  9.60%, approximately the settlement amount of.................",
        "options": [
          "₹ 733,855 shall be paid by P Ltd. to its Banker.",
          "₹ 439,453 shall be paid by P Ltd. to its Banker.",
          "₹ 439,453 shall be paid by Banker to P Ltd.",
          "₹ 733,855 shall be paid by Banker to P Ltd."
        ],
        "answer": 2,
        "explanation": "₹ 60 crore \t\t\t\t\t\t\t\t\t\"(9.60-9.30) 1+0.096 4\"\t\t\t\t\t\t×\t\"1 = ₹ 439,453 4"
      },
      {
        "question_id": "afm_bos_cs50_3",
        "question": "If   the  actual  rate  of  interest  after  6   months  happens  to  be  8.80%, approximately the settlement amount of.................",
        "options": [
          "₹ 733,855 shall be paid by P Ltd. to its Banker.",
          "₹ 439,453 shall be paid by P Ltd. to its Banker.",
          "₹ 439,453 shall be paid by Banker to P Ltd.",
          "₹ 733,855 shall be paid by Banker to P Ltd."
        ],
        "answer": 0,
        "explanation": "₹ 60 crore \t\t\t\t\t\t\t\t\t\"(8.80-9.30) 1+0.088 4\"\t\t\t\t\t\t×\t\"1 = ₹ 733,855 4"
      },
      {
        "question_id": "afm_bos_cs50_4",
        "question": "Which of the following technique is not the modern technique to hedge the interest rate risk.",
        "options": [
          "Interest Rate Futures",
          "Interest Rate Options",
          "Interest Rate Swaps",
          "Forward Rate Agreement"
        ],
        "answer": 3,
        "explanation": "FRA is a traditional technique to manage interest rate risk."
      }
    ]
  },
  {
    "case_id": "afm_bos_cs51",
    "case_chapter": [
      "Portfolio Management",
      "Interest Rate Risk Management"
    ],
    "caseText": "\n<p>XYZ   Ltd.,   a   medium-sized   company   in   the   renewable   energy   sector,   is experiencing  steady  sales  growth.  The  company’s  management,  however,  is concerned  about  balancing  rapid  growth  with  long-term  sustainability.  In  the past year, XYZ’s growth objectives have led to aggressive expansion plans, but management now realizes that such growth might not be financially sustainable in  the  long  run.  This  raises  concerns  about  how  to  maintain  the  company's financial health while meeting its ambitious growth targets.</p>\n\n<p>The  CFO  of  XYZ  Ltd.  highlights  the  importance  of  Sustainable  Growth  Rate (SGR).</p>\n\n<p>The  company  now  needs  to  ensure  that  its  operational  and  financial  policies align with its growth goals. XYZ must avoid expanding too quickly, which could strain   its   financial   resources   and   lead   to   excessive   borrowing.   Moreover, management   must   also   consider   the   long-term   implications   of   resource consumption, particularly in the renewable energy industry, where sustainability is key to both current and future stakeholders.</p>\n\n<p>XYZ  Ltd.  also  realizes  that  it  needs  to  focus  on  building  its  growth  capability alongside its growth strategy. Without the necessary infrastructure and financial planning  in  place,  the  company’s  efforts  to  achieve  long-term,  sustainable growth could be in jeopardy. Furthermore, the company is aware of the risks of relying too much on external financing and recognizes the need for a balance between maintaining sufficient equity and minimizing debt.</p>\n\n<p>Given  the  importance  of  these  considerations,  XYZ’s  management  team  must now  review  their  growth  strategy  and  financial  policies  to  ensure  they  are consistent with the firm’s sustainable growth objectives.</p>\n",
    "questions": [
      {
        "question_id": "afm_bos_cs51_1",
        "question": "The concept of Sustainable Growth Rate introduced by...................",
        "options": [
          "Harry Markowitz",
          "William Sharpe",
          "Black Scholes",
          "Robert C. Higgins"
        ],
        "answer": 3,
        "explanation": "Names of Harry Markowitz and William Sharpe are associated with   Portfolio   Theory   and   Black   Scholes   with   Derivative Valuation."
      },
      {
        "question_id": "afm_bos_cs51_2",
        "question": "The Sustainable Growth Rate (SGR) represents.................",
        "options": [
          "the rate at which the company can grow by issuing more equity.",
          "the maximum rate of growth in sales that can be achieved without borrowing additional funds.",
          "the growth rate determined by market demand for XYZ’s products.",
          "the rate of growth determined by inflationary pressures."
        ],
        "answer": 1,
        "explanation": "Refer the concept of Sustainable Growth Rate."
      },
      {
        "question_id": "afm_bos_cs51_3",
        "question": "According  to  the  case  scenario  the  risk  associated  with  growing  too quickly is that...........",
        "options": [
          "the company might not be able to retain competent staff.",
          "the company could face liquidity issues due to over-expansion.",
          "the company’s stock price might decline.",
          "it could reduce the company's market share."
        ],
        "answer": 1,
        "explanation": "Refer facts from case scenario."
      },
      {
        "question_id": "afm_bos_cs51_4",
        "question": "Which  of  the  following  twin  cornerstones  are  necessary  for  XYZ  Ltd.  to achieve sustainable growth?",
        "options": [
          "Market conditions and competition.",
          "Growth capability and growth strategy.",
          "Product innovation and marketing strategy.",
          "Cost-cutting measures and increased sales."
        ],
        "answer": 1,
        "explanation": "Refer the concept of Sustainable Growth Rate."
      },
      {
        "question_id": "afm_bos_cs51_5",
        "question": "In  an  inflationary  condition  if  creditors  require  that  XYZ  Ltd.’s  historical cost debt-to-equity ratio stay constant, the inflation......",
        "options": [
          "reduces the need for external financing.",
          "increases the sustainable growth rate by lowering costs.",
          "lowers the sustainable growth rate.",
          "It has no effect on the company's growth rate."
        ],
        "answer": 2,
        "explanation": "Refer the concept of Sustainable Growth Rate."
      }
    ]
  },
  {
    "case_id": "afm_bos_cs52",
    "case_chapter": [
      "Security Valuation"
    ],
    "caseText": "\n<p>The  company  X  Ltd.  proposes  to  take  over  Y  Ltd.  The  chief  executive  of  the company  thinks  that  shareholders  always  look  for  the  earnings  per  share. Therefore,   he   considers   maximization   of   the   earnings   per   share   as   his company’s objective. The following information is available in respect of X Ltd. and Y Ltd.</p>\n\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"5\">\n  <tr><th>X Ltd.</th><th>Y Ltd.</th></tr>\n  <tr><td>Net Profit</td><td>₹ 80 Lakh</td><td>₹ 15.75 Lakh</td></tr>\n  <tr><td>P/E ratio</td><td>10.50</td><td>10.00</td></tr>\n  <tr><td>Current market price per share</td><td>₹ 42</td><td>₹ 85</td></tr>\n</table>\n",
    "questions": [
      {
        "question_id": "afm_bos_cs52_1",
        "question": "If the company borrows funds @ 15% rate of interest and buys out Target Company  by  paying  cash,  how  much  it  should  offer  to  maintain  its  EPS assuming tax rate @30%.",
        "options": [
          "210 Lakhs",
          "315 Lakhs",
          "150 Lakhs",
          "0 Lakhs"
        ],
        "answer": 2,
        "explanation": "The   amount   available   for   Interest   Payment   =Total   PBT (₹ 136.79  Lakh)  Less PBT of  X  Ltd.  (₹ 114.29  Lakh)  =  ₹ 22.50 Lakh Cash can be offered = ₹ 22.50 Lakhs/0.15   = ₹ 150 Lakhs"
      },
      {
        "question_id": "afm_bos_cs52_2",
        "question": "Maximum  exchange  ratio  which  the  company  should  offer  so  that  the company could keep EPS at current level is............",
        "options": [
          "1:0.952",
          "1:2.125",
          "1:2.023",
          "1:0.196"
        ],
        "answer": 1,
        "explanation": "EPS (Y Ltd.) = ₹ 8.5 & EPS (X Ltd.) = ₹ 4 Exchange Ratio =   8.5/4  = 2.125"
      },
      {
        "question_id": "afm_bos_cs52_3",
        "question": "No. of shares to be issued by X Ltd. shall be approximately..........................",
        "options": [
          "3.9375 Lakhs",
          "1.7639 Lakhs",
          "3.7485 Lakhs",
          "0.3631 Lakhs"
        ],
        "answer": 0,
        "explanation": "No.  of  Shares  of  Y  Ltd.=1.8529  Lakh  Shares  [₹ 15.75  Lakh/ ₹ 8.50] No. of shares to be issued by X Ltd. = 1.8529 Lakh * 2.125 = 3.9375 Lakh"
      }
    ]
  },
  {
    "case_id": "afm_bos_cs53",
    "case_chapter": [
      "Derivatives Analysis and Valuation"
    ],
    "caseText": "\n<p>Following  information  is  related  to  actions  taken  in  different  situation  of financial options:</p>\n\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"5\">\n  <tr><th>Situation</th><th>Action</th><th>Exercise Price</th><th>Premium</th><th>Spot Price</th></tr>\n  <tr><td>I</td><td>Exercised</td><td>140</td><td>20</td><td>160</td></tr>\n  <tr><td>II</td><td>Exercised</td><td>200</td><td>15</td><td>175</td></tr>\n  <tr><td>III</td><td>Lapsed</td><td>300</td><td>25</td><td>400</td></tr>\n</table>\n",
    "questions": [
      {
        "question_id": "afm_bos_cs53_1",
        "question": "In  Situation  III,  the  investor’s  position  and  the  amount  of  profit  /  loss is..........................",
        "options": [
          "Put option, ₹ (25)",
          "Call option, ₹ 75",
          "Short position, ₹ 100",
          "Long position, ₹ (100)"
        ],
        "answer": 0,
        "explanation": "Since option is lapsed. Thus, only loss is the loss of premium i.e., ₹ 25."
      },
      {
        "question_id": "afm_bos_cs53_2",
        "question": "In Situation I, the investor’s position and the amount of profit or loss is…….",
        "options": [
          "Put option and ₹ 20",
          "Call option and ₹ 0",
          "Put option and ₹ 0",
          "Call option and ₹ 20"
        ],
        "answer": 1,
        "explanation": "Spot price is more than exercise price. Hence Call option. Profit          = ₹ 160 - ₹ 140 = ₹ 20 Net profit  = ₹ 20 - ₹ 20 = ₹ 0"
      },
      {
        "question_id": "afm_bos_cs53_3",
        "question": "In Situation II, the investor’s position and the amount of profit / loss is……..",
        "options": [
          "Put option and ₹ 10",
          "Call option and ₹ 10",
          "Put option and ₹ 25",
          "Call option and ₹ 25"
        ],
        "answer": 0,
        "explanation": "Spot price is Less than exercise price. Hence Put option. Profit          = ₹ 200 - ₹ 175 = ₹ 25 Net profit  = ₹ 25 - ₹ 15 = ₹ 10"
      }
    ]
  },
  {
    "case_id": "afm_bos_cs54",
    "case_chapter": [
      "Portfolio Management",
      "Security Valuation",
      "Business Valuation"
    ],
    "caseText": "\n<p>The following information is available in respect of Bond A and Bond B.</p>\n\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"5\">\n  <tr><th>Bond A</th><th>Bond B</th></tr>\n  <tr><td>Face value, redeemable at par</td><td>₹ 1000</td><td>₹ 1000</td></tr>\n  <tr><td>Coupon rate, payable annually (%)</td><td>6%</td><td>10%</td></tr>\n  <tr><td>Time to maturity (years)</td><td>5</td></tr>\n</table>\n\n<p>An investor has the portfolio consisting of 75% of Bond A and 25% of Bond B. The current YTMs prevailing in the market is 10%.</p>\n\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"5\">\n  <tr><th>Year (n) :</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr>\n  <tr><td>PVIF (10%, n) :</td><td>0.9091</td><td>0.8264</td><td>0.7513</td><td>0.6830</td><td>0.6209</td></tr>\n</table>\n",
    "questions": [
      {
        "question_id": "afm_bos_cs54_1",
        "question": "The    price    and    duration    of    the    Bond    B    shall    be    approximately ………………..respectively.",
        "options": [
          "₹ 826.43 and 2.49",
          "₹ 1,000 and 2.74",
          "₹ 924.85 and 2.74",
          "₹ 1,000 and 2.49"
        ],
        "answer": 1,
        "explanation": "Price of Bond B = 100*0.9091 + 100*0.8264 + 1100*0.7513 = ₹ 1000. Duration  of  Bond  B  =  [(90.91*1)  +  (82.64*2)  +  (826.43*3)]  / 1000  = 2.74"
      },
      {
        "question_id": "afm_bos_cs54_2",
        "question": "The    price   and    duration    of    the    Bond    A    shall    be   approximately ………………respectively.",
        "options": [
          "₹ 848.34 and 4.41",
          "₹ 811.09 and 4.38",
          "₹ 1,227.44 and 4.41",
          "₹ 658.15 and 3.90"
        ],
        "answer": 0,
        "explanation": "Price  of  Bond  A  =  60*0.9091  +  60*0.8264  +  60*0.7513  + 60*0.6830 + 1060*0.6209 = ₹ 848.34 Duration  of  Bond  A  =  [(54.55*1)  +  (49.58*2)  +  (45.08*3)  + (40.98*4) + (658.15*5)] /848.34 = 4.41 (Approx.)"
      },
      {
        "question_id": "afm_bos_cs54_3",
        "question": "The price sensitivity of the portfolio approximately is……………………..",
        "options": [
          "-4.03",
          "-2.49",
          "-3.63",
          "-3.98"
        ],
        "answer": 2,
        "explanation": "Weighted average of duration Bond-A\t\t\t\t\t\t\t\t4.41\t\t\t\t75%\t\t\t\t\t\t3.308 Bond-B\t\t\t\t\t\t\t\t2.74\t\t\t\t25%\t\t\t\t\t\t0.685 Average Duration\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t3.993 Price Sensitivity = 3.993/1.10 = 3.63"
      }
    ]
  },
  {
    "case_id": "afm_bos_cs55",
    "case_chapter": [
      "Security Valuation"
    ],
    "caseText": "\n<p>Z Ltd. paid a dividend of ₹ 5 for the current year. The dividend is expected to grow at 25% for the next 6 years and at 10% per annum thereafter. The return of  government  bond  is  13%  per  annum  and  market  return  is  expected  to  be around 20%. The correlation between market return and Z Ltd. share return is 0.3733. The standard deviation of market  return and Z  Ltd. shares  is 12%  and 18% respectively.</p>\n\n<p>Round off calculations to two decimal places.</p>\n",
    "questions": [
      {
        "question_id": "afm_bos_cs55_1",
        "question": "What is the expected return of Z Ltd shares?",
        "options": [
          "15%",
          "23.92%",
          "16.92%",
          "16.5%"
        ],
        "answer": 2,
        "explanation": "ß = 0.3733 × (18/12) = 0.560 Expected Return = 13% + 0.560 (20%-13%) = 16.92%"
      },
      {
        "question_id": "afm_bos_cs55_2",
        "question": "The intrinsic value of Z Ltd. shares approximately is……………………",
        "options": [
          "₹ 156.75",
          "₹ 303.14",
          "₹ 349.62",
          "₹ 341.30"
        ],
        "answer": 0,
        "explanation": "PV  of  dividend=  6.25*0.855  +  7.81*0.732  +  9.77*0.626  + 12.21*0.535 + 15.26*0.458 + 19.075*0.391 = ₹ 38.16 PV of Terminal Value = [(19.075(1.10)/(0.1692-0.10)] × 0.391 = ₹ 118.53"
      },
      {
        "question_id": "afm_bos_cs55_3",
        "question": "If current market price of the shares is ₹ 315 than stock is…………………….",
        "options": [
          "Over valued",
          "Under valued",
          "Fairley valued",
          "Cannot be determined"
        ],
        "answer": 0,
        "explanation": "Since  current  Market  Price  per  share  of  the  share  is  ₹ 315 higher than Intrinsic Value of the share, the stock is overvalued."
      }
    ]
  },
  {
    "case_id": "afm_bos_cs56",
    "case_chapter": [
      "Business Valuation"
    ],
    "caseText": "\n<p>SM Limited has a market capitalization of ₹ 3,000 crore and the current earnings per share (EPS) is ₹ 200 with a price earnings ratio (PER) of 15.   The Board of directors is considering a proposal to buy back 20% of the shares at a premium which can be supported by the financials of the company. The Boards expects post buy back market price per share (MPS) of ₹ 3057. Post buy back PER will remain same. The company proposes to fund the buy back by availing 8% bank loan since available resources are committed for expansion plans.</p>\n\n<p>Applicable income tax rate is 30%.</p>\n",
    "questions": [
      {
        "question_id": "afm_bos_cs56_1",
        "question": "The number of shares proposed to be bought back is…………………..",
        "options": [
          "12 lakhs",
          "15 lakhs",
          "20 lakhs",
          "22 lakhs"
        ],
        "answer": 2,
        "explanation": "MPS = ₹ 200 × 15 = ₹ 3000 per share Original shares = (₹ 3000 Crore)/( ₹ 3000) = 1 crores shares No. of shares proposed to be bought back = 1 crores × 20% = 20 Lakhs shares"
      },
      {
        "question_id": "afm_bos_cs56_2",
        "question": "The  interest  amount  which  can  be  paid  for  availing  the  bank  loan  shall be……………………",
        "options": [
          "₹ 5,280.00 Lakhs",
          "₹ 5,575.00 Lakhs",
          "₹ 4865.00 Lakhs",
          "₹ 6485.00 Lakhs"
        ],
        "answer": 0,
        "explanation": "Post buy back EPS = (₹ 3057 per share)/15 =₹ 203.80 per share Post buy back Earnings after tax = ₹ 203.80 × 80 Lakhs shares = ₹ 16,304 Lakhs Post buy back Earnings before tax (A) = (16,304)/(1 - 0.30) = ₹ 23,291. 43 Lakhs Pre buy back Earnings after tax = 200 × 100 Lakhs shares = ₹ 20,000 Lakhs Pre buy back Earnings before tax (B) = (20,000)/(1 - 0.30) = ₹ 28,571.43 Lakhs Interest to be paid for availing bank loan (A) - (B) = ₹ 5,280 Lakhs"
      },
      {
        "question_id": "afm_bos_cs56_3",
        "question": "The loan amount to be raised shall be……………………..",
        "options": [
          "₹ 55650 Lakhs",
          "₹ 62300 Lakhs",
          "₹ 66000 Lakhs",
          "₹ 72450 Lakhs"
        ],
        "answer": 2,
        "explanation": "Loan  amount  to  be  raised  =  ₹ 5,280  Lakhs  /0.08  =  ₹ 66,000 Lakhs"
      },
      {
        "question_id": "afm_bos_cs56_4",
        "question": "The premium per share paid over the current MPS shall be……………………..",
        "options": [
          "₹ 200",
          "₹ 250",
          "₹ 300",
          "₹ 350"
        ],
        "answer": 2,
        "explanation": "Buy back price per share = ₹ 66,000 Lakhs /20 Lakhs   = ₹ 3,300 per share Premium  per  share  paid  over  the  current  MPS  =  ₹ 3300  - ₹ 3000 = ₹ 300 per share"
      },
      {
        "question_id": "afm_bos_cs56_5",
        "question": "% premium over current MPS shall be……………………………..",
        "options": [
          "12%",
          "14%",
          "10%",
          "15%"
        ],
        "answer": 2,
        "explanation": "% Premium = ₹ 300/ ₹ 3000 × 100 = 10%"
      }
    ]
  },
  {
    "case_id": "afm_mtpsep24i_cs2",
    "case_chapter": [
      "Mutual Funds"
    ],
    "caseText": "\n    <p>The Asset Management Company (AMC) of a Mutual Fund has declared a dividend of 9.98% on the units under the dividend reinvestment plan for the year ended 31st March 2021. The investors are issued additional units for the dividend at the closing Net Asset Value (NAV) for the year as per the conditions of the scheme.</p>\n\n    <p>The closing NAV was ₹ 24.95 as on 31st March 2021. An investor, Mr. X, holding 20,800 units at the year-end had made the investment before the declaration of dividend at the rate of opening NAV plus an entry load of ₹ 0.04. The NAV appreciated by 25% during the year.</p>\n\n    <p><em>Note: Assume the face value of each unit is ₹ 10.00.</em></p>\n\n    <p><strong>Based on the above case scenario, choose the most appropriate answer to the following:</strong></p>\n  ",
    "questions": [
      {
        "question_id": "afm_mtpsep24i_cs2_1",
        "chapter_name": [
          "Mutual Funds"
        ],
        "question": "The Opening NAV of the Asset Management Company shall be…………",
        "options": [
          "₹ 20.24",
          "₹ 19.96",
          "₹ 18.75",
          "₹ 17.65"
        ],
        "answer": 1
      },
      {
        "question_id": "afm_mtpsep24i_cs2_2",
        "chapter_name": [
          "Mutual Funds"
        ],
        "question": "The number of units purchased shall be…………",
        "options": [
          "18,750",
          "17,500",
          "20,450",
          "20,000"
        ],
        "answer": 3
      },
      {
        "question_id": "afm_mtpsep24i_cs2_3",
        "chapter_name": [
          "Mutual Funds"
        ],
        "question": "Original amount of the investment shall be…………",
        "options": [
          "₹ 4,00,000",
          "₹ 6,50,000",
          "₹ 3,55,000",
          "₹ 5,65,000"
        ],
        "answer": 0
      },
      {
        "question_id": "afm_mtpsep24i_cs2_4",
        "chapter_name": [
          "Mutual Funds"
        ],
        "question": "Which of the following statement(s) about Expense Ratio is/are incorrect?<br><br>(i) It is the percentage of income that is spent to run a Mutual Fund.<br>(ii) It includes advisory fees, travel costs, registrar fees, custodian fees, etc.<br>(iii) It includes brokerage costs for trading of portfolio.<br>(iv) High Expense Ratio can seriously undermine the performance of a Mutual Fund scheme.",
        "options": [
          "(i), (ii), (iii)",
          "(i), (iii)",
          "Only (iii)",
          "Only (i)"
        ],
        "answer": 2
      },
      {
        "question_id": "afm_mtpsep24i_cs2_5",
        "chapter_name": [
          "Mutual Funds"
        ],
        "question": "……………… considers and uses downside deviation instead of total standard deviation in the denominator.",
        "options": [
          "Expense Ratio",
          "Sharpe Ratio",
          "Treynor Ratio",
          "Sortino Ratio"
        ],
        "answer": 3
      }
    ]
  },
  {
    "case_id": "afm_mtpsep24i_cs3",
    "case_chapter": [
      "Derivatives"
    ],
    "caseText": "\n    <p>You, as an investor, purchased a 4-month European Call Option on the equity shares of X Ltd. for a premium of ₹ 10 per share. The current market price of the share is ₹ 132 per share and the exercise price is ₹ 150 per share. You expect the share price at maturity to range between ₹ 120 and ₹ 190.</p>\n\n    <p>The expected share prices of X Ltd. at the end of 4 months and their related probabilities are as follows:</p>\n\n    <table border=\"1\" cellspacing=\"0\" cellpadding=\"5\">\n      <tr>\n        <th>Expected Price (₹)</th>\n        <td>120</td>\n        <td>140</td>\n        <td>160</td>\n        <td>180</td>\n        <td>190</td>\n      </tr>\n      <tr>\n        <th>Probability</th>\n        <td>0.05</td>\n        <td>0.20</td>\n        <td>0.50</td>\n        <td>0.10</td>\n        <td>0.15</td>\n      </tr>\n    </table>\n\n    <p><strong>Based on the above case scenario, choose the most appropriate answer to the following:</strong></p>\n  ",
    "questions": [
      {
        "question_id": "afm_mtpsep24i_cs3_1",
        "chapter_name": [
          "Derivatives"
        ],
        "question": "Expected price of the share of X Ltd. at the end of 4 months shall be…………",
        "options": [
          "₹ 160.00",
          "₹ 160.50",
          "₹ 158.00",
          "₹ 140.00"
        ],
        "answer": 1
      },
      {
        "question_id": "afm_mtpsep24i_cs3_2",
        "chapter_name": [
          "Derivatives"
        ],
        "question": "Suppose the exercise price prevails at the end of 4 months. The value of the Call Option shall be…………",
        "options": [
          "₹ 0",
          "₹ 18",
          "₹ 10",
          "₹ 14"
        ],
        "answer": 0
      },
      {
        "question_id": "afm_mtpsep24i_cs3_3",
        "chapter_name": [
          "Derivatives"
        ],
        "question": "In case the option is held till maturity, the expected value of the Call Option shall be…………",
        "options": [
          "₹ 0",
          "₹ 18",
          "₹ 10",
          "₹ 14"
        ],
        "answer": 3
      },
      {
        "question_id": "afm_mtpsep24i_cs3_4",
        "chapter_name": [
          "Derivatives"
        ],
        "question": "In the given different scenarios of expected share prices of X Ltd. at the time of maturity, the option shall be in-the-money in…………scenarios.",
        "options": [
          "Two",
          "Three",
          "Five",
          "In none of the scenarios"
        ],
        "answer": 1
      },
      {
        "question_id": "afm_mtpsep24i_cs3_5",
        "chapter_name": [
          "Derivatives"
        ],
        "question": "In the given different scenarios of expected share prices of X Ltd. at the time of maturity, the option shall be at-the-money in…………scenarios.",
        "options": [
          "Two",
          "Three",
          "Five",
          "In none of the scenarios"
        ],
        "answer": 3
      }
    ]
  },
  {
    "case_id": "afm_MAR25_I_cs1",
    "case_chapter": [
      "Mutual Funds",
      "Tracking Error",
      "Side Pocketing"
    ],
    "caseText": "\n    <p>Mr. Ramesh, a 40-year-old investor, has invested ₹ 10,00,000 in an actively managed Equity Mutual Fund. The fund has an Expense Ratio of 2.50% and follows the Nifty 50 Index as its benchmark.</p>\n\n    <p>Upon analyzing the Fund details, he comes across the concept of Tracking Error (TE) and finds out that the same Fund has a Tracking Error (TE) of 3.20%.</p>\n\n    <p>A few months later, Mr. Ramesh receives a notification that the Fund has implemented Side Pocketing. The Fund has an exposure of 15% of his investment in a debt instrument of XYZ Ltd., a company facing a severe financial crisis. Since XYZ Ltd. has defaulted on its payments, the Fund Manager has moved this portion into a side pocket.</p>\n\n    <p>Following the decision of Fund Manager, Mr. Ramesh decides to reconsider any of the following options:</p>\n\n    <ol>\n      <li>Should he stay invested in this Fund and wait for the Side-Pocketed assets to recover?</li>\n      <li>Should he switch to a Passive Index Fund that has a lower Tracking Error and lower Expense Ratio?</li>\n      <li>Should he redeem his remaining liquid holdings and invest in a better-performing actively managed Fund?</li>\n    </ol>\n\n    <p><strong>Based on the above scenario and given his current situation, choose the most appropriate answer for the following multiple-choice questions.</strong></p>\n  ",
    "questions": [
      {
        "question_id": "afm_mcq_cs1_1",
        "chapter_name": [
          "Mutual Funds"
        ],
        "question": "Is it necessary for investors to pay close attention to the Expense Ratio of a Mutual Fund because………………..",
        "options": [
          "a high expense ratio can significantly reduce net returns over time.",
          "a higher expense ratio always guarantees better fund performance.",
          "the expense ratio only matters in the first year of investment.",
          "funds with higher expense ratios are always risk-free."
        ],
        "answer": 0
      },
      {
        "question_id": "afm_mcq_cs1_2",
        "chapter_name": [
          "Tracking Error"
        ],
        "question": "The Fund has been ……………… in replicating return on Nifty 50.",
        "options": [
          "Successful",
          "Unsuccessful",
          "Can't say",
          "Data is insufficient"
        ],
        "answer": 1
      },
      {
        "question_id": "afm_mcq_cs1_3",
        "chapter_name": [
          "Side Pocketing"
        ],
        "question": "After the decision of Fund Manager for side-pocketing, the equivalent portion of Mr. Ramesh's investment shall _____",
        "options": [
          "remains illiquid until the Fund Manager decides to sell it or the company recovers.",
          "be immediately written off, and Mr. Ramesh loses that portion.",
          "be returned to Mr. Ramesh in proportion to his holdings.",
          "be moved into a different Mutual Fund Scheme with no risk."
        ],
        "answer": 2
      },
      {
        "question_id": "afm_mcq_cs1_4",
        "chapter_name": [
          "Mutual Funds"
        ],
        "question": "If Mr. Ramesh switches to a Passive Index Fund with an expense ratio of 0.8%, then he will save annually compared to his current Expense Ratio of 2.50%?",
        "options": [
          "₹ 8,000",
          "₹ 10,000",
          "₹ 17,000",
          "₹ 18,000"
        ],
        "answer": 2
      },
      {
        "question_id": "afm_mcq_cs1_4",
        "chapter_name": [
          "Passive Investing"
        ],
        "question": "The advantage for Mr. Ramesh to switch over to a Passive Index Fund shall be _____",
        "options": [
          "lower expense ratio and lower tracking error.",
          "guaranteed recovery of side-pocketed assets.",
          "higher risk exposure compared to active funds.",
          "avoiding capital gains tax on redemption."
        ],
        "answer": 1
      }
    ]
  },
  {
    "case_id": "afm_MAR25_I_cs2",
    "case_chapter": [
      "Foreign Exchange Management",
      "NOSTRO Account"
    ],
    "caseText": "\n    <p>On 20.10.2024, the credit balance of an Indian bank in NOSTRO account with LMN Bank in London was £ 1,60,000 and the overbought position was £ 1,00,000.</p>\n\n    <p>During the day, the following transactions have taken place:</p>\n\n    <table border=\"1\" cellspacing=\"0\" cellpadding=\"5\">\n      <tr>\n        <th>Time</th>\n        <th>Events</th>\n        <th>Amount (£)</th>\n      </tr>\n      <tr>\n        <td>11:08</td>\n        <td>DD Purchased</td>\n        <td>50,000</td>\n      </tr>\n      <tr>\n        <td>11:50</td>\n        <td>Purchased a bill on London</td>\n        <td>150,000</td>\n      </tr>\n      <tr>\n        <td>13:15</td>\n        <td>Sold forward TT</td>\n        <td>100,000</td>\n      </tr>\n      <tr>\n        <td>13:55</td>\n        <td>Forward purchased contract cancelled</td>\n        <td>50,000</td>\n      </tr>\n      <tr>\n        <td>14:45</td>\n        <td>Remitted by TT</td>\n        <td>85,000</td>\n      </tr>\n      <tr>\n        <td>15:00</td>\n        <td>Draft in London cancelled</td>\n        <td>40,000</td>\n      </tr>\n    </table>\n\n    <p><strong>Based on the above scenario, choose the most appropriate answer for the following multiple-choice questions.</strong></p>\n  ",
    "questions": [
      {
        "question_id": "afm_mcq_cs2_0",
        "chapter_name": [
          "Foreign Exchange Management"
        ],
        "question": "How much was the total amount of purchase commitments made during the day by the Indian Bank?",
        "options": [
          "£ 2,00,000",
          "£ 1,50,000",
          "£ 3,40,000",
          "£ 50,000"
        ],
        "answer": 3
      },
      {
        "question_id": "afm_mcq_cs2_1",
        "chapter_name": [
          "NOSTRO Account"
        ],
        "question": "The final cash balance in the NOSTRO account at the end of 20.10.2024 stands at ………….",
        "options": [
          "£ 85,000",
          "£ 75,000",
          "£ 20,000",
          "£ 1,60,000"
        ],
        "answer": 2
      },
      {
        "question_id": "afm_mcq_cs2_2",
        "chapter_name": [
          "Foreign Exchange Management"
        ],
        "question": "The transaction took place at ………. shall affect both exchange and cash position of the bank with LMN Bank.",
        "options": [
          "11:08",
          "11:50",
          "14:45",
          "15:00"
        ],
        "answer": 2
      },
      {
        "question_id": "afm_mcq_cs2_3",
        "chapter_name": [
          "NOSTRO Account"
        ],
        "question": "If at the end of day bank is required to maintain a credit balance of £ 20,000 in the NOSTRO account, then it ………….",
        "options": [
          "shall buy forward £ 15,000",
          "shall sell spot TT £ 55,000",
          "shall buy spot TT £ 55,000",
          "shall sell forward £ 55,000"
        ],
        "answer": 1
      },
      {
        "question_id": "afm_mcq_cs2_4",
        "chapter_name": [
          "Foreign Exchange Management"
        ],
        "question": "If bank takes required steps to maintain a credit balance of £ 20,000 in the NOSTRO account, then what additional step was required to achieve the overbought position of £ 65,000?",
        "options": [
          "Buying forward £ 15,000",
          "Selling forward £ 65,000",
          "Buying forward £ 60,000",
          "Selling forward £ 15,000"
        ],
        "answer": 0
      }
    ]
  },
  {
    "case_id": "afm_MAR25_I_cs3",
    "case_chapter": [
      "Corporate Valuation",
      "Dividend Discount Model",
      "Sustainable Growth Rate"
    ],
    "caseText": "\n    <p>Following financial data are available for PQR Ltd. for the financial year ending 2023:</p>\n\n    <table border=\"1\" cellspacing=\"0\" cellpadding=\"5\">\n      <tr>\n        <th>Particulars</th>\n        <th>₹ in lakh</th>\n      </tr>\n      <tr>\n        <td>8% Debentures</td>\n        <td>125</td>\n      </tr>\n      <tr>\n        <td>10% Bonds (2022)</td>\n        <td>50</td>\n      </tr>\n      <tr>\n        <td>Equity Shares (₹ 10 each)</td>\n        <td>100</td>\n      </tr>\n      <tr>\n        <td>Reserves and Surplus</td>\n        <td>300</td>\n      </tr>\n      <tr>\n        <td>Total Assets</td>\n        <td>600</td>\n      </tr>\n      <tr>\n        <td>Assets Turnover Ratio</td>\n        <td>1.1</td>\n      </tr>\n      <tr>\n        <td>Effective Interest Rate</td>\n        <td>8%</td>\n      </tr>\n      <tr>\n        <td>Effective Tax Rate</td>\n        <td>40%</td>\n      </tr>\n      <tr>\n        <td>Operating Margin</td>\n        <td>10%</td>\n      </tr>\n      <tr>\n        <td>Dividend Payout Ratio</td>\n        <td>16.67%</td>\n      </tr>\n      <tr>\n        <td>Current Market Price per Share</td>\n        <td>₹ 14</td>\n      </tr>\n      <tr>\n        <td>Required Rate of Return of Investors</td>\n        <td>15%</td>\n      </tr>\n    </table>\n\n    <p><strong>From the information given above, choose the correct answer to the following questions:</strong></p>\n  ",
    "questions": [
      {
        "question_id": "afm_mcq_cs3_0",
        "chapter_name": [
          "Corporate Valuation"
        ],
        "question": "Amount of retained earnings for the financial year 2023 approximately is…………..",
        "options": [
          "₹ 26.00 lakh",
          "₹ 5.20 lakh",
          "₹ 52.00 lakh",
          "₹ 31.20 lakh"
        ],
        "answer": 0
      },
      {
        "question_id": "afm_mcq_cs3_1",
        "chapter_name": [
          "Corporate Finance"
        ],
        "question": "10% Bonds must have been issued in the month of…………….",
        "options": [
          "July 2022",
          "June 2022",
          "August 2022",
          "May 2022"
        ],
        "answer": 1
      },
      {
        "question_id": "afm_mcq_cs3_2",
        "chapter_name": [
          "Dividend Discount Model"
        ],
        "question": "Fair price of share of PQR Ltd. using Dividend Discount Model shall be approximately………….",
        "options": [
          "₹ 6.12",
          "₹ 6.51",
          "₹ 10.00",
          "₹ 14.00"
        ],
        "answer": 1
      },
      {
        "question_id": "afm_mcq_cs3_3",
        "chapter_name": [
          "Sustainable Growth Rate"
        ],
        "question": "Sustainable Growth Rate of PQR Ltd. shall be approximately…………..",
        "options": [
          "10.00%",
          "6.50%",
          "15.00%",
          "7.80%"
        ],
        "answer": 1
      },
      {
        "question_id": "afm_mcq_cs3_4",
        "chapter_name": [
          "Return on Equity"
        ],
        "question": "Return on Equity (ROE) of PQR Ltd. is…………..",
        "options": [
          "7.80%",
          "6.50%",
          "10.00%",
          "15.00%"
        ],
        "answer": 0
      }
    ]
  },
  {
    "case_id": "afm_APR25_II_cs1",
    "case_chapter": [
      "Fixed Income Securities",
      "Bond Valuation",
      "Portfolio Strategies"
    ],
    "caseText": "\n      <p>Zenith Capital, a boutique investment firm, manages portfolios for high-net-worth individuals (HNIs). Their lead portfolio manager, Mr. R, has been closely analyzing market trends to optimize returns for their fixed-income portfolio. Over the past few months, he has observed fluctuations in interest rates and anticipates a significant shift in the near future.</p>\n      <p>To optimise returns, Mr. R is considering three different investment strategies for clients having ₹ 10 crore of fund and are interested in Fixed Income Portfolio. Each strategy is designed to align with the client’s risk appetite and future liquidity needs.</p>\n      <ul>\n        <li><strong>Strategy A:</strong> Investing the entire ₹ 10 crore in a single bond with a 7-year maturity to match a specific financial obligation in the future.</li>\n        <li><strong>Strategy B:</strong> Allocating ₹ 5 crore in short-term bonds (1-year maturity) and ₹ 5 crore in long-term bonds (7-year maturity) to balance risk and return.</li>\n        <li><strong>Strategy C:</strong> Spreading the ₹ 10 crore investment equally across bonds with maturities of 1 to 5 years to ensure periodic liquidity.</li>\n      </ul>\n      <p>Meanwhile, Mr. R is also considering forecasting models to predict interest rate movements. He is evaluating economic indicators such as inflation, historical rate trends, and a combination of multiple economic factors to enhance the firm's forecasting accuracy.</p>\n      <p>Mr. R suggested Strategy B for Mr. H (a HNI) having a sum of ₹ 10 crore for investment in Fixed Income Portfolio. As per the strategy half amount on fund is proposed to be invested in 7-year bonds yielding 8% per annum and balance in 1-year short term bond yielding 6% per annum. Interest on these bonds is compounded annually.</p>\n      <p><strong>Based on the above case scenario, choose the correct answer to the following questions:</strong></p>\n    ",
    "questions": [
      {
        "question_id": "afm_mcq_cs1_0",
        "chapter_name": [
          "Fixed Income Securities"
        ],
        "question": "What is the primary objective of an active bond portfolio strategy?",
        "options": [
          "To maintain a fixed return irrespective of market conditions",
          "To outperform the market by making informed investment decisions",
          "To minimize volatility and ensure steady returns",
          "To invest in government bonds only"
        ],
        "answer": 1
      },
      {
        "question_id": "afm_mcq_cs1_1",
        "chapter_name": [
          "Portfolio Strategies"
        ],
        "question": "If any HNI follows Strategy A, then ………………of fixed-income portfolio strategy is being followed.",
        "options": [
          "Barbell Strategy",
          "Ladder Strategy",
          "Bullet Strategy",
          "Duration Matching"
        ],
        "answer": 2
      },
      {
        "question_id": "afm_mcq_cs1_2",
        "chapter_name": [
          "Portfolio Strategies"
        ],
        "question": "In the Barbell Strategy, the funds are typically allocated……………..",
        "options": [
          "by making entire investment in bonds with the same maturity period.",
          "by dividing investment equally between short-term and long-term bonds.",
          "by dividing equal amount in bonds with different maturity periods.",
          "by investing only in short-term bonds."
        ],
        "answer": 1
      },
      {
        "question_id": "afm_mcq_cs1_3",
        "chapter_name": [
          "Portfolio Strategies"
        ],
        "question": "In the ladder Strategy, the funds are typically allocated………………….",
        "options": [
          "by making entire investment in bonds with the same maturity period.",
          "by dividing investment equally between short-term and long-term bonds.",
          "by dividing equal amount in bonds with different maturity periods.",
          "by investing only in short-term bonds."
        ],
        "answer": 2
      },
      {
        "question_id": "afm_mcq_cs1_4",
        "chapter_name": [
          "Bond Valuation"
        ],
        "question": "It is expected that interest rate in coming 8 years are expected to fall by 25 bps each year and if Mr. H does not withdraw any amount from the Fund during these 7 years the total value of the investment at the end of the 7th year shall be approximately………………",
        "options": [
          "₹ 15.036 crore",
          "₹ 15.721 crore",
          "₹ 15.739 crore",
          "₹ 15.829 crore"
        ],
        "answer": 1
      }
    ]
  },
  {
    "case_id": "afm_APR25_II_cs2",
    "case_chapter": [
      "Security Analysis",
      "Fundamental Analysis",
      "Economic Analysis"
    ],
    "caseText": "\n      <p>An American institutional investor is exploring investment opportunities in different countries. Before proceeding, they believe a thorough analysis of options in the securities available to ensure a higher return while minimizing risk.</p>\n      <p>To achieve this objective, it formed a team consisting of following persons with respective assigned tasks:</p>\n      <ul>\n        <li><strong>Mr. A –</strong> He is entrusted with the task of analysing various Macro-economic factors e.g. historical performance of the economies in the past/ present and expectations in future, growth of different sectors of the economies in future with signs of stagnation/degradation at present. In addition to that he also analysed the trends in peoples’ income and expenditure.</li>\n        <li><strong>Ms. B –</strong> After receiving inputs/ recommendations from Mr. A she is entrusted with the task of assessment regarding all the conditions and factors relating to demand of the particular product, cost structure of the industry and other economic and Government constraints in the same country.</li>\n        <li><strong>Mr. C –</strong> After receiving inputs/ recommendations from Ms. B he is entrusted with the task of careful examination of the company's quantitative and qualitative fundamentals. Which includes a comparison of price earning ratios of different companies. Further, In addition to examine the financial solvency, liquidity of the company he is also advised for the evaluation of future growth prospects of the company identified.</li>\n      </ul>\n      <p><strong>Based on the above case scenario, choose the correct answer to the following questions:</strong></p>\n    ",
    "questions": [
      {
        "question_id": "afm_mcq_cs2_0",
        "chapter_name": [
          "Economic Analysis"
        ],
        "question": "If Mr. A want to evaluate the impact of macroeconomic trends on their potential investment. Which of the following factors is least likely to influence their decision?",
        "options": [
          "Growth rates of national income",
          "Inflation rates",
          "Market speculation trends",
          "Barometer indicators"
        ],
        "answer": 2
      },
      {
        "question_id": "afm_mcq_cs2_1",
        "chapter_name": [
          "Economic Analysis"
        ],
        "question": "The investor learns that inflation is expected to rise. Based on economic analysis, how might this affect their stock investment decision?",
        "options": [
          "Stock prices are expected to decline due to reduced consumer demand",
          "Stock prices are expected to rise as stocks act as a hedge against inflation",
          "Stock prices will remain unaffected as inflation only affects bond markets",
          "Stock prices will become highly volatile, but long-term growth remains unchanged"
        ],
        "answer": 1
      },
      {
        "question_id": "afm_mcq_cs2_2",
        "chapter_name": [
          "Industry Analysis"
        ],
        "question": "Which of the techniques shall be primarily used by Ms. B to carry out the required analysis at his part?",
        "options": [
          "Anticipatory Surveys",
          "Indicator Approach",
          "Input-Output Analysis",
          "Decision Tree Analysis"
        ],
        "answer": 2
      },
      {
        "question_id": "afm_mcq_cs2_3",
        "chapter_name": [
          "Economic Analysis"
        ],
        "question": "Mr. A while analyzing industry growth, finds that certain indicators tend to peak before the economy’s overall growth. These indicators are best classified as................",
        "options": [
          "Lagging indicators",
          "Leading indicators",
          "Coincidental indicators",
          "Random indicators"
        ],
        "answer": 1
      },
      {
        "question_id": "afm_mcq_cs2_4",
        "chapter_name": [
          "Security Analysis"
        ],
        "question": "Specifically the team of Mr. A, Ms. B, and Mr. C are entrusted with the task of carrying out...............",
        "options": [
          "Fundamental Analysis",
          "Technical Analysis",
          "Market Analysis",
          "Security Analysis"
        ],
        "answer": 0
      }
    ]
  },
  {
    "case_id": "afm_aug25_II_cs3",
    "case_chapter": [
      "Financial Policy and Corporate Strategy"
    ],
    "caseText": "\n    <p>During one business meeting at XYZ Ltd., one of the members pointed out that while evaluating the performance of any company, one should not only consider its Operating Income but should also analyse its Capital Structure. Weighted Average Cost of Capital changes on the basis of capital structure, keeping all other factors unchanged.</p>\n\n    <p>He presented data relating to three companies, Alpha Ltd., Beta Ltd. and Gama Ltd., whose operating incomes are equal, but their capital structures are different.</p>\n\n    <p><strong>The following information relating to these three companies is available:</strong></p>\n\n    <p><strong>(₹ in thousands)</strong></p>\n\n    <table border=\"1\" cellspacing=\"0\" cellpadding=\"5\">\n      <thead>\n        <tr>\n          <th>Particulars</th>\n          <th>Alpha Ltd.</th>\n          <th>Beta Ltd.</th>\n          <th>Gama Ltd.</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>Total Invested Capital</td>\n          <td>20,00,000</td>\n          <td>20,00,000</td>\n          <td>20,00,000</td>\n        </tr>\n        <tr>\n          <td>Debt / Assets Ratio</td>\n          <td>0.8</td>\n          <td>0.5</td>\n          <td>0.2</td>\n        </tr>\n        <tr>\n          <td>Shares Outstanding</td>\n          <td>61,000</td>\n          <td>83,000</td>\n          <td>1,00,000</td>\n        </tr>\n        <tr>\n          <td>Pre-tax Cost of Debt</td>\n          <td>16%</td>\n          <td>13%</td>\n          <td>15%</td>\n        </tr>\n        <tr>\n          <td>Cost of Equity</td>\n          <td>26%</td>\n          <td>22%</td>\n          <td>20%</td>\n        </tr>\n        <tr>\n          <td>Operating Income (EBIT)</td>\n          <td>5,00,000</td>\n          <td>5,00,000</td>\n          <td>5,00,000</td>\n        </tr>\n      </tbody>\n    </table>\n\n    <p>The tax rate is uniform at 35% in all cases. The industry P/E ratio is 11X.</p>\n\n    <p><strong>From the information given above, choose the correct answer to the following questions:</strong></p>\n  ",
    "questions": [
      {
        "question_id": "afm_aug25_II_cs3_0",
        "chapter_name": [
          "Financial Policy and Corporate Strategy"
        ],
        "question": "The Weighted Average Cost of Capital (WACC) of Alpha Ltd. shall approximately be……………",
        "options": [
          "13.520%",
          "15.225%",
          "17.950%",
          "18.000%"
        ],
        "answer": 0
      },
      {
        "question_id": "afm_aug25_II_cs3_1",
        "chapter_name": [
          "Financial Policy and Corporate Strategy"
        ],
        "question": "The Economic Value Added (EVA) of Beta Ltd. is……………",
        "options": [
          "₹ 54,600 thousand",
          "₹ 20,500 thousand",
          "(-) ₹ 34,000 thousand",
          "₹ 21,500 thousand"
        ],
        "answer": 1
      },
      {
        "question_id": "afm_aug25_II_cs3_2",
        "chapter_name": [
          "Financial Policy and Corporate Strategy"
        ],
        "question": "The price per share of Gama Ltd. shall be……………",
        "options": [
          "₹ 28.60",
          "₹ 31.90",
          "₹ 31.46",
          "₹ 29.45"
        ],
        "answer": 2
      }
    ]
  },
  {
    "case_id": "afm_nov25_I_cs3",
    "case_chapter": [
      "Security Valuation",
      "Interest Rate Risk Management"
    ],
    "caseText": "\n    <p>The following information is available in respect of Bond A and Bond B:</p>\n    <table border=\"1\" cellpadding=\"6\" cellspacing=\"0\" style=\"border-collapse: collapse; text-align: center; margin-bottom: 12px; width: 80%;\">\n      <thead>\n        <tr style=\"background-color: #f2f2f2;\">\n          <th style=\"text-align: left;\">Particulars</th>\n          <th>Bond A</th>\n          <th>Bond B</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td style=\"text-align: left;\">Face value, redeemable at par</td>\n          <td>₹ 1,000</td>\n          <td>₹ 1,000</td>\n        </tr>\n        <tr>\n          <td style=\"text-align: left;\">Coupon rate, payable annually (%)</td>\n          <td>6%</td>\n          <td>10%</td>\n        </tr>\n        <tr>\n          <td style=\"text-align: left;\">Time to maturity (years)</td>\n          <td>5</td>\n          <td>3</td>\n        </tr>\n      </tbody>\n    </table>\n    <p>An investor has a portfolio consisting of 75% of Bond A and 25% of Bond B. The current YTM prevailing in the market is 10%.</p>\n    <table border=\"1\" cellpadding=\"6\" cellspacing=\"0\" style=\"border-collapse: collapse; text-align: center; margin-bottom: 12px; width: 85%;\">\n      <thead>\n        <tr style=\"background-color: #f2f2f2;\">\n          <th>Year (n)</th>\n          <th>1</th>\n          <th>2</th>\n          <th>3</th>\n          <th>4</th>\n          <th>5</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td><b>PVIF (10%, n)</b></td>\n          <td>0.9091</td>\n          <td>0.8264</td>\n          <td>0.7513</td>\n          <td>0.6830</td>\n          <td>0.6209</td>\n        </tr>\n      </tbody>\n    </table>\n    <p><strong>From the information given above, choose the correct answer to the following questions:</strong></p>\n  ",
    "questions": [
      {
        "question_id": "afm_nov25_I_cs3_8",
        "chapter_name": [
          "Security Valuation"
        ],
        "question": "The price and duration of Bond B shall be approximately .................... respectively.",
        "options": [
          "₹ 826.43 and 2.49",
          "₹ 1,000 and 2.74",
          "₹ 924.85 and 2.74",
          "₹ 1,000 and 2.49"
        ],
        "answer": 1
      },
      {
        "question_id": "afm_nov25_I_cs3_9",
        "chapter_name": [
          "Security Valuation"
        ],
        "question": "The price and duration of Bond A shall be approximately .................... respectively.",
        "options": [
          "₹ 848.34 and 4.41",
          "₹ 811.09 and 4.38",
          "₹ 1,227.44 and 4.41",
          "₹ 658.15 and 3.90"
        ],
        "answer": 0
      },
      {
        "question_id": "afm_nov25_I_cs3_10",
        "chapter_name": [
          "Security Valuation",
          "Interest Rate Risk Management"
        ],
        "question": "The price sensitivity of the portfolio approximately is……………………..",
        "options": [
          "-4.03",
          "-2.49",
          "-3.63",
          "-3.98"
        ],
        "answer": 2
      }
    ]
  },
  {
    "case_id": "afm_dec25_II_cs3",
    "case_chapter": [
      "Derivatives Analysis and Valuation"
    ],
    "caseText": "\n      <p>Following information is related to actions taken in different situations of financial options:</p>\n      <table border=\"1\" cellpadding=\"6\" cellspacing=\"0\" style=\"border-collapse: collapse; margin-bottom: 12px; width: 75%; text-align: center;\">\n        <thead>\n          <tr style=\"background-color: #f2f2f2;\">\n            <th style=\"text-align: center;\">Situation</th>\n            <th style=\"text-align: center;\">Action</th>\n            <th style=\"text-align: right;\">Exercise Price (₹)</th>\n            <th style=\"text-align: right;\">Premium (₹)</th>\n            <th style=\"text-align: right;\">Spot Price (₹)</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>I</td>\n            <td>Exercised</td>\n            <td style=\"text-align: right;\">140</td>\n            <td style=\"text-align: right;\">20</td>\n            <td style=\"text-align: right;\">160</td>\n          </tr>\n          <tr>\n            <td>II</td>\n            <td>Exercised</td>\n            <td style=\"text-align: right;\">200</td>\n            <td style=\"text-align: right;\">15</td>\n            <td style=\"text-align: right;\">175</td>\n          </tr>\n          <tr>\n            <td>III</td>\n            <td>Lapsed</td>\n            <td style=\"text-align: right;\">300</td>\n            <td style=\"text-align: right;\">25</td>\n            <td style=\"text-align: right;\">400</td>\n          </tr>\n        </tbody>\n      </table>\n      <p><strong>From the information given above, choose the correct answer to the following questions:</strong></p>\n    ",
    "questions": [
      {
        "question_id": "afm_dec25_II_cs3_10",
        "chapter_name": [
          "Derivatives Analysis and Valuation"
        ],
        "question": "In Situation III, the investor’s position and the amount of profit / loss is..........................",
        "options": [
          "Put option, ₹ (25)",
          "Call option, ₹ 75",
          "Short position, ₹ 100",
          "Long position, ₹ (100)"
        ],
        "answer": 0
      },
      {
        "question_id": "afm_dec25_II_cs3_11",
        "chapter_name": [
          "Derivatives Analysis and Valuation"
        ],
        "question": "In Situation I, the investor’s position and the amount of profit or loss is…….",
        "options": [
          "Put option and ₹ 20",
          "Call option and ₹ 0",
          "Put option and ₹ 0",
          "Call option and ₹ 20"
        ],
        "answer": 1
      },
      {
        "question_id": "afm_dec25_II_cs3_12",
        "chapter_name": [
          "Derivatives Analysis and Valuation"
        ],
        "question": "In Situation II, the investor’s position and the amount of profit / loss is……..",
        "options": [
          "Put option and ₹ 10",
          "Call option and ₹ 10",
          "Put option and ₹ 25",
          "Call option and ₹ 25"
        ],
        "answer": 0
      }
    ]
  },
  {
    "case_id": "afm_dec25_II_cs4",
    "case_chapter": [
      "Foreign Exchange Exposure and Risk Management"
    ],
    "caseText": "\n      <p>A company is considering hedging its foreign exchange risk. It has made a purchase on 1<sup>st</sup> July, 2024 for which it has to make a payment of US$ 60,000 on December 31, 2024. The present exchange rate is 1 US $ = ₹ 83. It can purchase forward 1 $ at ₹ 82. The company will have to make an upfront premium @ 2% of the forward amount purchased. The cost of funds to the company is 12% per annum.</p>\n      <p>The company hedges its foreign exchange risk using above-mentioned forward contract.</p>\n      <p><strong>From the information given above, choose the correct answer to the following questions:</strong></p>\n    ",
    "questions": [
      {
        "question_id": "afm_dec25_II_cs4_13",
        "chapter_name": [
          "Foreign Exchange Exposure and Risk Management"
        ],
        "question": "If exchange rate on 31<sup>st</sup> December, 2024 happens to be ₹ 86 per US $ then due to forward position taken the company will make……",
        "options": [
          "a loss of ₹ 1,04,304",
          "a profit of ₹ 1,35,696",
          "a loss of ₹ 2,24,304",
          "a profit of ₹ 2,55,696"
        ],
        "answer": 1
      },
      {
        "question_id": "afm_dec25_II_cs4_14",
        "chapter_name": [
          "Foreign Exchange Exposure and Risk Management"
        ],
        "question": "If exchange rate on 31<sup>st</sup> December, 2024 happens to be ₹ 80 per US $ then due to forward position taken the company will make……",
        "options": [
          "a loss of ₹ 1,04,304",
          "a profit of ₹ 1,35,696",
          "a loss of ₹ 2,24,304",
          "a profit of ₹ 2,55,696"
        ],
        "answer": 2
      },
      {
        "question_id": "afm_dec25_II_cs4_15",
        "chapter_name": [
          "Foreign Exchange Exposure and Risk Management"
        ],
        "question": "If exchange rate on 31<sup>st</sup> December, 2024 happens to be ₹ 88 per US $ then due to forward position taken the company will make……",
        "options": [
          "a loss of ₹ 1,04,304",
          "a profit of ₹ 1,35,696",
          "a loss of ₹ 2,24,304",
          "a profit of ₹ 2,55,696"
        ],
        "answer": 3
      }
    ]
  }
];