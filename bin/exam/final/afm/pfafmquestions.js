const descriptiveQuestions = [
  {
  question_id: "AFM_MTPMAR24I_Q1",
  source: "ICAI Mock Test Paper - Series I, March 2024",
  chapter_name: "Foreign Exchange Risk Management, CAPM, Unicorn",
  placement: 1,
  marks: 6,
  question_html: `
    <p> XYZ Ltd. an Indian firm needs to pay JAPANESE YEN (JY) 1 crore on 30<sup>th</sup> June. In order to hedge the risk involved in foreign currency transaction, the firm is considering two alternative methods i.e. forward market cover and currency option contract.</p>

    <p>On 1<sup>st</sup> April, following quotations (JY/INR) are made available:</p>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th></th>
        <th>Spot</th>
        <th>3 months forward</th>
      </tr>
      <tr>
        <td>JY/INR</td>
        <td>1.7825/1.8245</td>
        <td>1.8726/1.8923</td>
      </tr>
    </table>

    <p>The prices for forex currency option on purchase are as follows:</p>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Strike Price</th>
        <th>JY 1.8855</th>
      </tr>
      <tr>
        <td>Call option (June)</td>
        <td>JY 0.047</td>
      </tr>
      <tr>
        <td>Put option (June)</td>
        <td>JY 0.098</td>
      </tr>
    </table>

    <p>For excess or balance of JY covered, the firm would use forward rate as future spot rate.</p>

    <p><strong>You are required to recommend cheaper hedging alternative for XYZ LTD.</strong></p>

    <p><strong>Note:</strong> Except rates round off other calculations to nearest rupees.</p>

    <br>

    <p> The expected returns and Beta of three stocks are given below</p>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Stock</th>
        <th>A</th>
        <th>B</th>
        <th>C</th>
      </tr>
      <tr>
        <td>Expected Return (%)</td>
        <td>20</td>
        <td>13</td>
        <td>17</td>
      </tr>
      <tr>
        <td>Beta Factor</td>
        <td>1.9</td>
        <td>0.8</td>
        <td>1.4</td>
      </tr>
    </table>

    <p>If the risk-free rate is 9% and the expected rate of return on the market portfolio is 14%, examine which of the above stocks are over, under or correctly valued in the market? What shall be the strategy?</p>

    <br>

    <p> What do you mean by the term Unicorn? State the features a Start-up should possess to be referred as a Unicorn?</p>
  `,
  solution_html: `
    

    <br><br>

    <strong>(i) Forward Cover</strong><br>

    <p>3-month Forward Rate = <strong>1 / 1.8726 = ₹ 0.5340/JY</strong></p>

    <p>Accordingly, INR required for JY 1,00,00,000 = 1,00,00,000 × ₹ 0.5340 = <strong>₹ 53,40,000</strong>.</p>

    <br>

    <strong>(ii) Option Cover</strong><br>

    <p>To purchase JY 1,00,00,000, XYZ LTD shall enter into a Put Option @ JY 1.8855/INR.</p>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Particulars</th>
        <th>₹</th>
      </tr>
      <tr>
        <td>Outflow in INR (JY 1,00,00,000 / 1.8855)</td>
        <td>53,03,633</td>
      </tr>
      <tr>
        <td>Premium (₹ 53,03,633 × 0.098 / 1.7825)</td>
        <td>2,91,588</td>
      </tr>
      <tr>
        <th>Total Outflow</th>
        <th>55,95,221</th>
      </tr>
    </table>

    <p><strong>Since outflow of cash is least in case of Forward Cover, the same should be opted for.</strong></p>

    <br>

    <br><br>

    <p>Required Rate of Return is given by:</p>

    <p><strong>R<sub>j</sub> = R<sub>f</sub> + β(R<sub>m</sub> − R<sub>f</sub>)</strong></p>

    <ul>
      <li><strong>Stock A:</strong> 9% + 1.9 (14% − 9%) = <strong>18.50%</strong></li>
      <li><strong>Stock B:</strong> 9% + 0.8 (14% − 9%) = <strong>13.00%</strong></li>
      <li><strong>Stock C:</strong> 9% + 1.4 (14% − 9%) = <strong>16.00%</strong></li>
    </ul>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Stock</th>
        <th>Required Return (%)</th>
        <th>Expected Return (%)</th>
        <th>Valuation</th>
        <th>Decision</th>
      </tr>
      <tr>
        <td>A</td>
        <td>18.50</td>
        <td>20.00</td>
        <td>Under Valued</td>
        <td>Buy</td>
      </tr>
      <tr>
        <td>B</td>
        <td>13.00</td>
        <td>13.00</td>
        <td>Correctly Valued</td>
        <td>Hold</td>
      </tr>
      <tr>
        <td>C</td>
        <td>16.00</td>
        <td>17.00</td>
        <td>Under Valued</td>
        <td>Buy</td>
      </tr>
    </table>

    <br>

    <br><br>

    <p>A Unicorn is a privately held start-up company which has achieved a valuation US$ 1 billion. This term was coined by venture capitalist Aileen Lee, first time in 2013. Unicorn, a mythical animal represents the statistical rarity of successful ventures.</p>

    <p>A start-up is referred as a Unicorn if it has following features:</p>

    <ol type="i">
      <li>A privately held start-up.</li>
      <li>Valuation of start-up reaches US$ 1 Billion.</li>
      <li>Emphasis is on the rarity of success of such start-up.</li>
      <li>Other common features are new ideas, disruptive innovation, consumer focus, high on technology etc.</li>
    </ol>

    <p>However, it is important to note that in case the valuation of any start-up slips below US$ 1 billion it can lose its status of 'Unicorn'. Hence a start-up may be Unicorn at one point of time and may not be at another point of time.</p>
  `
},

{
  question_id: "AFM_MTPMAR24I_Q1_B",
  source: "ICAI Mock Test Paper - Series I, March 2024",
  chapter_name: "Capital Asset Pricing Model (CAPM)",
  placement: 1,
  marks: 4,
  question_html: `
    <p>The expected returns and Beta of three stocks are given below:</p>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Stock</th>
        <th>A</th>
        <th>B</th>
        <th>C</th>
      </tr>
      <tr>
        <td>Expected Return (%)</td>
        <td>20</td>
        <td>13</td>
        <td>17</td>
      </tr>
      <tr>
        <td>Beta Factor</td>
        <td>1.9</td>
        <td>0.8</td>
        <td>1.4</td>
      </tr>
    </table>

    <p>If the risk-free rate is 9% and the expected rate of return on the market portfolio is 14%, examine which of the above stocks are over, under or correctly valued in the market? What shall be the strategy?</p>
  `,
  solution_html: `
    

    <p><strong>Required Rate of Return is given by:</strong></p>

    <p><strong>R<sub>j</sub> = R<sub>f</sub> + β(R<sub>m</sub> − R<sub>f</sub>)</strong></p>

    <p><strong>For Stock A:</strong></p>
    <p>R<sub>j</sub> = 9% + 1.9 (14% − 9%) = <strong>18.50%</strong></p>

    <p><strong>For Stock B:</strong></p>
    <p>R<sub>j</sub> = 9% + 0.8 (14% − 9%) = <strong>13.00%</strong></p>

    <p><strong>For Stock C:</strong></p>
    <p>R<sub>j</sub> = 9% + 1.4 (14% − 9%) = <strong>16.00%</strong></p>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Stock</th>
        <th>Required Return %</th>
        <th>Expected Return %</th>
        <th>Valuation</th>
        <th>Decision</th>
      </tr>
      <tr>
        <td>A</td>
        <td>18.50%</td>
        <td>20.00%</td>
        <td>Under Valued</td>
        <td>Buy</td>
      </tr>
      <tr>
        <td>B</td>
        <td>13.00%</td>
        <td>13.00%</td>
        <td>Correctly Valued</td>
        <td>Hold</td>
      </tr>
      <tr>
        <td>C</td>
        <td>16.00%</td>
        <td>17.00%</td>
        <td>Under Valued</td>
        <td>Buy</td>
      </tr>
    </table>
  `
},

{
  question_id: "AFM_MTPMAR24I_Q1_C",
  source: "ICAI Mock Test Paper - Series I, March 2024",
  chapter_name: "FinTech - Unicorn",
  placement: 1,
  marks: 4,
  question_html: `
    <p>What do you mean by the term Unicorn? State the features a Start-up should possess to be referred as a Unicorn?</p>
  `,
  solution_html: `
    

    <p>A Unicorn is a privately held start-up company which has achieved a valuation US$ 1 billion. This term was coined by venture capitalist Aileen Lee, first time in 2013. Unicorn, a mythical animal represents the statistical rarity of successful ventures.</p>

    <p>A start-up is referred as a Unicorn if it has following features:</p>

    <ol type="i">
      <li>A privately held start-up.</li>
      <li>Valuation of start-up reaches US$ 1 Billion.</li>
      <li>Emphasis is on the rarity of success of such start-up.</li>
      <li>Other common features are new ideas, disruptive innovation, consumer focus, high on technology etc.</li>
    </ol>

    <p>However, it is important to note that in case the valuation of any start-up slips below US$ 1 billion it can lose its status of 'Unicorn'. Hence a start-up may be Unicorn at one point of time and may not be at another point of time.</p>
  `
},

{
  question_id: "AFM_MTPMAR24I_Q2_A",
  source: "ICAI Mock Test Paper - Series I, March 2024",
  chapter_name: "International Capital Budgeting",
  placement: 2,
  marks: 6,
  question_html: `
    <p>DK Ltd. is considering an investment proposal in Sri Lanka involving an initial investment of LKR 25 billion. The current spot exchange rate is INR/LKR 0.370. The risk free rate in India is 6% and the same in Sri Lanka is 5.02%.</p>

    <p>The project will generate a cash flow of LKR 5 billion in the first year. The cash flow will increase by LKR 1 billion each year for the next 4 years. The project will wind up on completion of 5 years with no salvage value. The required rate of return for the project is 8%.</p>

    <p><strong>(i)</strong> You are required to find out the investment worth of the project by using:</p>

    <ol>
      <li>Home Currency Approach</li>
      <li>Foreign Currency Approach</li>
    </ol>

    <p><strong>(ii)</strong> Compare the outcome under both the approaches.</p>

    <p><strong>Given:</strong></p>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>PVIF</th>
        <th>Year 1</th>
        <th>Year 2</th>
        <th>Year 3</th>
        <th>Year 4</th>
        <th>Year 5</th>
      </tr>
      <tr>
        <td>8%</td>
        <td>0.92593</td>
        <td>0.85734</td>
        <td>0.79383</td>
        <td>0.73503</td>
        <td>0.68058</td>
      </tr>
      <tr>
        <td>7%</td>
        <td>0.93457</td>
        <td>0.87344</td>
        <td>0.81630</td>
        <td>0.76290</td>
        <td>0.71299</td>
      </tr>
    </table>

    <p><strong>Note:</strong> Except rates show all calculations in Billion upto four decimal points.</p>
  `,
  solution_html: `
    

    <strong>Working Notes:</strong><br><br>

    <strong>Calculation of Forward Exchange Rates</strong>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>End of Year</th>
        <th>Calculation</th>
        <th>₹/LKR</th>
      </tr>
      <tr>
        <td>1</td>
        <td>0.37 × (1.06 / 1.0502)</td>
        <td>0.373</td>
      </tr>
      <tr>
        <td>2</td>
        <td>0.373 × (1.06 / 1.0502)</td>
        <td>0.376</td>
      </tr>
      <tr>
        <td>3</td>
        <td>0.376 × (1.06 / 1.0502)</td>
        <td>0.379</td>
      </tr>
      <tr>
        <td>4</td>
        <td>0.379 × (1.06 / 1.0502)</td>
        <td>0.382</td>
      </tr>
      <tr>
        <td>5</td>
        <td>0.382 × (1.06 / 1.0502)</td>
        <td>0.385</td>
      </tr>
    </table>

    <br>

    <strong>1. Home Currency Approach</strong>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Year</th>
        <th>Cash Flow (Billion LKR)</th>
        <th>₹/LKR</th>
        <th>Cash Flow (Billion ₹)</th>
        <th>PVF @ 8%</th>
        <th>PV (Billion ₹)</th>
      </tr>
      <tr>
        <td>1</td>
        <td>5</td>
        <td>0.373</td>
        <td>1.865</td>
        <td>0.92593</td>
        <td>1.7269</td>
      </tr>
      <tr>
        <td>2</td>
        <td>6</td>
        <td>0.376</td>
        <td>2.256</td>
        <td>0.85734</td>
        <td>1.9342</td>
      </tr>
      <tr>
        <td>3</td>
        <td>7</td>
        <td>0.379</td>
        <td>2.653</td>
        <td>0.79383</td>
        <td>2.1060</td>
      </tr>
      <tr>
        <td>4</td>
        <td>8</td>
        <td>0.382</td>
        <td>3.056</td>
        <td>0.73503</td>
        <td>2.2463</td>
      </tr>
      <tr>
        <td>5</td>
        <td>9</td>
        <td>0.385</td>
        <td>3.465</td>
        <td>0.68058</td>
        <td>2.3582</td>
      </tr>
      <tr>
        <th colspan="5" align="right">Total PV</th>
        <th>10.3716</th>
      </tr>
      <tr>
        <td colspan="5">Less: Investment (25 × 0.37)</td>
        <td>9.2500</td>
      </tr>
      <tr>
        <th colspan="5" align="right">NPV</th>
        <th>1.1216</th>
      </tr>
    </table>

    <br>

    <strong>2. Foreign Currency Approach</strong>

    <p>(1 + 0.06) (1 + Risk Premium) = 1.08</p>

    <p>1 + Risk Premium = 1.08 / 1.06 = 1.01887</p>

    <p>Therefore, Risk adjusted LKR Rate = 1.01887 × 1.0502 − 1 = <strong>7%</strong></p>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Year</th>
        <th>Cash Flow (Billion LKR)</th>
        <th>PVF @ 7%</th>
        <th>PV (Billion LKR)</th>
      </tr>
      <tr>
        <td>1</td>
        <td>5</td>
        <td>0.93457</td>
        <td>4.6729</td>
      </tr>
      <tr>
        <td>2</td>
        <td>6</td>
        <td>0.87344</td>
        <td>5.2406</td>
      </tr>
      <tr>
        <td>3</td>
        <td>7</td>
        <td>0.81630</td>
        <td>5.7141</td>
      </tr>
      <tr>
        <td>4</td>
        <td>8</td>
        <td>0.76290</td>
        <td>6.1032</td>
      </tr>
      <tr>
        <td>5</td>
        <td>9</td>
        <td>0.71299</td>
        <td>6.4169</td>
      </tr>
      <tr>
        <th colspan="3" align="right">Total PV</th>
        <th>28.1477</th>
      </tr>
      <tr>
        <td colspan="3">Less: Investment</td>
        <td>25.0000</td>
      </tr>
      <tr>
        <th colspan="3" align="right">NPV (Billion LKR)</th>
        <th>3.1477</th>
      </tr>
    </table>

    <p>Thus, Rupee NPV of the Project = ₹ 0.37 × 3.1477 = <strong>₹ 1.1646 billion</strong>.</p>

    <p><strong>Decision:</strong> NPV is positive in both the approaches. Hence, the project is worth investment.</p>
  `
},
{
  question_id: "AFM_MTPMAR24I_Q2_B",
  source: "ICAI Mock Test Paper - Series I, March 2024",
  chapter_name: "Dividend Valuation Model",
  placement: 2,
  marks: 4,
  question_html: `
    <p>On the basis of the following information:</p>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <td>Current dividend (D<sub>0</sub>)</td>
        <td>=</td>
        <td>₹ 5</td>
      </tr>
      <tr>
        <td>Discount rate (k)</td>
        <td>=</td>
        <td>10.5%</td>
      </tr>
      <tr>
        <td>Growth rate (g)</td>
        <td>=</td>
        <td>4%</td>
      </tr>
    </table>

    <p><strong>(i)</strong> Calculate the present value of stock of ABC Ltd.</p>

    <p><strong>(ii)</strong> Evaluate whether the stock is overvalued if stock price is ₹ 70, ROE = 18% and EPS (E<sub>0</sub>) = ₹ 4.50 applying:</p>

    <ol>
      <li>PE Multiple Approach and</li>
      <li>Earning Growth Model (using discount rate of 10.5%).</li>
    </ol>
  `,
  solution_html: `
    

    <strong>(i) Present Value of the Stock of ABC Ltd.</strong><br><br>

    <p>
      V<sub>0</sub> =
      <strong>
      D<sub>0</sub>(1 + g) / (k - g)
      </strong>
    </p>

    <p>
      = 5(1.04) / (0.105 - 0.04)
    </p>

    <p>
      = <strong>₹ 80.00</strong>
    </p>

    <br>

    <strong>(ii) (A) Value of Stock under the PE Multiple Approach</strong>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Particulars</th>
        <th>Amount</th>
      </tr>
      <tr>
        <td>Actual Stock Price</td>
        <td>₹ 70.00</td>
      </tr>
      <tr>
        <td>Return on Equity (ROE)</td>
        <td>18%</td>
      </tr>
      <tr>
        <td>EPS</td>
        <td>₹ 4.50</td>
      </tr>
      <tr>
        <td>PE Multiple (1 / Return on Equity)</td>
        <td>5.56</td>
      </tr>
      <tr>
        <td>Market Price per Share</td>
        <td>₹ 25.02</td>
      </tr>
    </table>

    <p><strong>Since Actual Stock Price is higher, hence it is overvalued.</strong></p>

    <br>

    <strong>(B) Value of the Stock under the Earnings Growth Model</strong>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Particulars</th>
        <th>Amount</th>
      </tr>
      <tr>
        <td>Actual Stock Price</td>
        <td>₹ 70.00</td>
      </tr>
      <tr>
        <td>Return on Equity (ROE)</td>
        <td>18%</td>
      </tr>
      <tr>
        <td>EPS</td>
        <td>₹ 4.50</td>
      </tr>
      <tr>
        <td>Growth Rate</td>
        <td>4%</td>
      </tr>
      <tr>
        <td>Market Price per Share = [EPS × (1 + g)] / (K<sub>e</sub> − g)</td>
        <td>₹ 72.00</td>
      </tr>
    </table>

    <p>
      = ₹ 4.50 × 1.04 / (0.105 − 0.04)
    </p>

    <p><strong>Since Actual Stock Price is lower, hence it is slightly undervalued.</strong></p>
  `
},
{
  question_id: "AFM_MTPMAR24I_Q2_C",
  source: "ICAI Mock Test Paper - Series I, March 2024",
  chapter_name: "Sustainable Growth Rate",
  placement: 2,
  marks: 4,
  question_html: `
    <p>Explain the concept of Sustainable Growth Rate and also state assumptions of Sustainable growth model.</p>
  `,
  solution_html: `
    

    <p>The sustainable growth rate (SGR), concept by Robert C. Higgins, of a firm is the maximum rate of growth in sales that can be achieved, given the firm's profitability, asset utilization, and desired dividend payout and debt (financial leverage) ratios. The sustainable growth rate is a measure of how much a firm can grow without borrowing more money. After the firm has passed this rate, it must borrow funds from another source to facilitate growth. Variables typically include the net profit margin on new and existing revenues; the asset turnover ratio, which is the ratio of sales revenues to total assets; the assets to equity ratio; and the retention rate, which is defined as the fraction of earnings retained in the business.</p>

    <p><strong>SGR = ROE × (1 − Dividend payment ratio)</strong></p>

    <p><strong>Sustainable growth model assume that the business wants to:</strong></p>

    <ol>
      <li>maintain a target capital structure without issuing new equity;</li>
      <li>maintain a target dividend payment ratio; and</li>
      <li>increase sales as rapidly as market conditions allow.</li>
    </ol>
  `
},
{
  question_id: "AFM_MTPMAR24I_Q3_A",
  source: "ICAI Mock Test Paper - Series I, March 2024",
  chapter_name: "Portfolio Theory",
  placement: 3,
  marks: 10,
  question_html: `
    <p>Mr. X is interested in investing ₹ 4,00,000 for which he is considering following three alternatives:</p>

    <ol type="i">
      <li>Invest ₹ 4,00,000 in Security A</li>
      <li>Invest ₹ 4,00,000 in Security B</li>
      <li>Invest ₹ 2,40,000 in Security A and ₹ 1,60,000 in Security B</li>
    </ol>

    <p>Average annual return earned on Security A and Security B is 15% and 14% respectively. Risk free rate of return is 10% and Market Rate of Return is 12%.</p>

    <p>Covariance of returns of Security A, Security B and Market portfolio are as follows:</p>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th></th>
        <th>Security A</th>
        <th>Security B</th>
        <th>Market</th>
      </tr>
      <tr>
        <td>Security A</td>
        <td>4.800</td>
        <td>4.300</td>
        <td>3.370</td>
      </tr>
      <tr>
        <td>Security B</td>
        <td>4.300</td>
        <td>4.250</td>
        <td>2.800</td>
      </tr>
      <tr>
        <td>Market</td>
        <td>3.370</td>
        <td>2.800</td>
        <td>3.100</td>
      </tr>
    </table>

    <p>On the basis of above information evaluate the following:</p>

    <ol type="i">
      <li>Expected Return of Security A, B and Portfolio.</li>
      <li>Variance of return of Security A, Security B and Market.</li>
      <li>Variance and Standard Deviation of Portfolio.</li>
      <li>Systematic and Unsystematic Risks of Security A, Security B and Portfolio.</li>
    </ol>
  `,
  solution_html: `
    

    <strong>Working Notes:</strong><br><br>

    <strong>(1) Beta of each Security</strong>

    <p>
      β = Cov(Security, Market) / Variance of Market
    </p>

    <p><strong>Security A:</strong></p>

    <p>
      β = 3.370 / 3.100 = <strong>1.087</strong>
    </p>

    <p><strong>Security B:</strong></p>

    <p>
      β = 2.800 / 3.100 = <strong>0.903</strong>
    </p>

    <br>

    <strong>(2) Portfolio Weights</strong>

    <p>Weight of Security A = 2,40,000 / 4,00,000 = <strong>0.60</strong></p>

    <p>Weight of Security B = 1,60,000 / 4,00,000 = <strong>0.40</strong></p>

    <br>

    <strong>(3) Portfolio Beta</strong>

    <p>
      = (0.60 × 1.087) + (0.40 × 0.903)
      = <strong>1.013</strong>
    </p>

    <br>

    <strong>(i) Expected Return</strong>

    <p>Security A Return = 10% + 1.087(12% − 10%) = <strong>12.17%</strong></p>

    <p>Security B Return = 10% + 0.903(12% − 10%) = <strong>11.81%</strong></p>

    <p>Portfolio Return = 10% + 1.013(12% − 10%) = <strong>12.03%</strong></p>

    <br>

    <strong>(ii) Variance of Returns</strong>

    <p>
      Cor(i,j) = Cov(i,j) / (σ<sub>i</sub> × σ<sub>j</sub>)
    </p>

    <p>Accordingly,</p>

    <ul>
      <li>Variance of Security A = <strong>4.800</strong></li>
      <li>Variance of Security B = <strong>4.250</strong></li>
      <li>Variance of Market = <strong>3.100</strong></li>
    </ul>

    <br>

    <strong>(iii) Variance and Standard Deviation of Portfolio</strong>

    <p>
      σ²<sub>AB</sub> =
      w²<sub>A</sub>σ²<sub>A</sub> +
      w²<sub>B</sub>σ²<sub>B</sub> +
      2w<sub>A</sub>w<sub>B</sub>Cov(A,B)
    </p>

    <p>
      = (0.60)²(4.800) + (0.40)²(4.250) + 2(0.60)(0.40)(4.300)
    </p>

    <p>Portfolio Variance = <strong>4.472</strong></p>

    <p>Portfolio Standard Deviation = √4.472 = <strong>2.115</strong></p>

    <br>

    <strong>(iv) Systematic and Unsystematic Risks</strong>

    <p><strong>Systematic Risk = β² × σ²<sub>m</sub></strong></p>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Particulars</th>
        <th>Security A</th>
        <th>Security B</th>
        <th>Portfolio</th>
      </tr>
      <tr>
        <td>Systematic Risk</td>
        <td>3.663</td>
        <td>2.528</td>
        <td>3.181</td>
      </tr>
      <tr>
        <td>Unsystematic Risk</td>
        <td>1.137</td>
        <td>1.722</td>
        <td>1.291</td>
      </tr>
    </table>

    <p><strong>Calculation of Unsystematic Risk:</strong></p>

    <ul>
      <li>Security A = 4.800 − 3.663 = <strong>1.137</strong></li>
      <li>Security B = 4.250 − 2.528 = <strong>1.722</strong></li>
      <li>Portfolio = 4.472 − 3.181 = <strong>1.291</strong></li>
    </ul>
  `
},

{
  question_id: "AFM_MTPMAR24I_Q3_B",
  source: "ICAI Mock Test Paper - Series I, March 2024",
  chapter_name: "Tokenization and CDOs",
  placement: 3,
  marks: 4,
  question_html: `
    <p><strong>Either</strong></p>

    <p>Tokenization to some extent resembles the process of Securitization. Explain the term <strong>"Tokenization"</strong> and also illustrate the similarities between Tokenization and Securitization.</p>

    <p><strong>Or</strong></p>

    <p>While in securitization the securities issued by SPV are backed by the loans and receivables, the CDOs are backed by pool of bonds, asset backed securities, REITs, and other CDOs. Describe the main types of risk associated with investment in CDOs.</p>
  `,
  solution_html: `
    

    <strong>Either</strong><br><br>

    <p>Tokenization is a process of converting tangible and intangible assets into blockchain tokens. Digitally representing anything has recently acquired a lot of traction. It can be effective in conventional industries like real estate, artwork etc.</p>

    <p><strong>Tokenization and Securitization</strong></p>

    <p>Since tokenization of illiquid assets attempts to convert illiquid assets into a product that is liquid and tradable and hence to some extent it resembles the process of Securitization. Hence, following are some similarities between Tokenization and Securitization:</p>

    <ol type="i">
      <li><strong>Liquidity:</strong> First and foremost both Securitization and Tokenization inject liquidity in the market for the assets which are otherwise illiquid assets.</li>

      <li><strong>Diversification:</strong> Both help investors to diversify their portfolio thus managing risk and optimizing returns.</li>

      <li><strong>Trading:</strong> Both are tradable hence helps to generate wealth.</li>

      <li><strong>New Opportunities:</strong> Both provide opportunities for financial institutions and related agencies to earn income through collection of fees.</li>
    </ol>

    <br>

    <strong>OR</strong><br><br>

    <p>The main types of risk associated with investment in CDOs are as follows:</p>

    <ol type="i">
      <li><strong>Default Risk:</strong> Also called 'credit risk', it emanates from the default of underlying party to the instruments. The prime sufferers of these types of risks are equity or junior tranche in the waterfall.</li>

      <li><strong>Interest Rate Risk:</strong> Also called Basis risk and mainly arises due to different basis of interest rates. For example, asset may be based on floating interest rate but the liability may be based on fixed interest rates. Though this type of risk is quite difficult to manage fully but commonly used techniques such as swaps, caps, floors, collars etc. can be used to mitigate the interest rate risk.</li>

      <li><strong>Liquidity Risk:</strong> Another major type of risk by which CDOs are affected is liquidity risks as there may be mismatch in coupon receipts and payments.</li>

      <li><strong>Prepayment Risk:</strong> This risk results from unscheduled or unexpected repayment of principal amount underlying the security. Generally, this risk arises in case assets are subject to fixed rate of interest and the debtors have a call option. Since, in case of falling interest rates they may pay back the money.</li>

      <li><strong>Reinvestment Risk:</strong> This risk is generic in nature as the CDO manager may not find adequate opportunity to reinvest the proceeds when allowed for substitutions.</li>

      <li><strong>Foreign Exchange Risk:</strong> Sometimes CDOs are comprised of debts and loans from countries other than the country of issue. In such a case, in addition to above mentioned risks, CDOs are also subject to the foreign exchange rate risk.</li>
    </ol>
  `
},

{
  question_id: "AFM_MTPMAR24I_Q4_A",
  source: "ICAI Mock Test Paper - Series I, March 2024",
  chapter_name: "Bond Refunding",
  placement: 4,
  marks: 6,
  question_html: `
    <p>ABC Ltd. has ₹ 600 million, 12 per cent bonds outstanding with six years remaining to maturity. Since interest rates are falling, ABC Ltd. is contemplating of refunding these bonds with a ₹ 600 million issue of 6 year bonds carrying a coupon rate of 10 per cent. Issue cost of the new bond will be ₹ 12 million and the call premium is 4 per cent. ₹ 18 million being the unamortized portion of issue cost of old bonds can be written off no sooner the old bonds are called off. Marginal tax rate of ABC Ltd. is 30 per cent. Examine the bond refunding decision.</p>

    <p><strong>Given:</strong> PVIFA (7%, 6 years) = 4.766</p>

    <p><strong>Note:</strong> Carry out calculations in ₹ Million and round off calculations upto 4 decimal points.</p>
  `,
  solution_html: `
    

    <strong>(i) Calculation of Initial Outlay:</strong>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Particulars</th>
        <th>₹ Million</th>
      </tr>
      <tr>
        <td>Face value of old bonds</td>
        <td>600.00</td>
      </tr>
      <tr>
        <td>Add: Call premium (4% × 600)</td>
        <td>24.00</td>
      </tr>
      <tr>
        <td><strong>Cost of calling old bonds</strong></td>
        <td><strong>624.00</strong></td>
      </tr>
      <tr>
        <td>Gross proceeds of new issue</td>
        <td>600.00</td>
      </tr>
      <tr>
        <td>Less: Issue cost</td>
        <td>12.00</td>
      </tr>
      <tr>
        <td><strong>Net proceeds of new issue</strong></td>
        <td><strong>588.00</strong></td>
      </tr>
      <tr>
        <td>Tax saving on call premium and unamortized issue cost = 30% × (24 + 18)</td>
        <td>12.60</td>
      </tr>
    </table>

    <p>
      <strong>Initial Outlay = ₹ 624.00 − ₹ 588.00 − ₹ 12.60 = ₹ 23.40 Million</strong>
    </p>

    <br>

    <strong>(ii) Calculation of Net Present Value of Refunding the Bond:</strong>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Particulars</th>
        <th>₹ Million</th>
      </tr>
      <tr>
        <td>Saving in annual interest expenses [600 × (12% − 10%)]</td>
        <td>12.00</td>
      </tr>
      <tr>
        <td>Less: Tax saving on interest and amortization [30% × {12 + (18 − 12)/6}]</td>
        <td>3.90</td>
      </tr>
      <tr>
        <td><strong>Annual Net Cash Saving</strong></td>
        <td><strong>8.10</strong></td>
      </tr>
      <tr>
        <td>Present Value of Net Annual Cash Saving (8.10 × 4.766)</td>
        <td>38.6046</td>
      </tr>
      <tr>
        <td>Less: Initial Outlay</td>
        <td>23.4000</td>
      </tr>
      <tr>
        <td><strong>Net Present Value of Refunding the Bond</strong></td>
        <td><strong>15.2046</strong></td>
      </tr>
    </table>

    <p><strong>Decision:</strong> The bonds should be refunded.</p>
  `
},

{
  question_id: "AFM_MTPMAR24I_Q4_B",
  source: "ICAI Mock Test Paper - Series I, March 2024",
  chapter_name: "Options",
  placement: 4,
  marks: 4,
  question_html: `
    <p>Mr. A established the following strategy on the stock of D Ltd. which is currently trading at ₹ 1000 per share:</p>

    <ol>
      <li>Purchased one 3-month call option with a premium of ₹ 60 at an exercise price of ₹ 1100 per share.</li>
      <li>Purchased one 3-month put option with a premium of ₹ 10 at an exercise price of ₹ 900 per share.</li>
    </ol>

    <p>Appraise the position of Mr. A if after 3-months the price of D Ltd. stock:</p>

    <ol type="i">
      <li>remains at ₹ 1000.</li>
      <li>falls at ₹ 700.</li>
      <li>rises to ₹ 1300.</li>
    </ol>

    <p>Assume the option size is 100 shares of D Ltd.</p>
  `,
  solution_html: `
    

    <p><strong>Total premium paid on purchasing a Call and Put option</strong></p>

    <p>
      = (₹ 60 per share × 100) + (₹ 10 per share × 100)
    </p>

    <p>
      = ₹ 6,000 + ₹ 1,000
    </p>

    <p>
      = <strong>₹ 7,000</strong>
    </p>

    <br>

    <strong>(i) If the stock price remains at ₹ 1000</strong>

    <p>In this case, Mr. A exercises neither the Call option nor the Put option as both will result in a loss for him.</p>

    <p>Ending Value = − ₹ 7,000 + Zero Gain = <strong>− ₹ 7,000</strong></p>

    <p><strong>Net Loss = ₹ 7,000</strong></p>

    <br>

    <strong>(ii) If the stock price falls to ₹ 700</strong>

    <p>Since the price of the stock is below the exercise price of the Call, the Call will not be exercised. Only Put is valuable and hence is exercised.</p>

    <p>Total Premium Paid = ₹ 7,000</p>

    <p>Ending Value = − ₹ 7,000 + [(₹ 900 − ₹ 700) × 100]</p>

    <p>= − ₹ 7,000 + ₹ 20,000 = <strong>₹ 13,000</strong></p>

    <p><strong>Net Gain = ₹ 13,000</strong></p>

    <br>

    <strong>(iii) If the stock price rises to ₹ 1300</strong>

    <p>Since the price of stock rises above the exercise price of Put, the Put will not be exercised. Only Call is valuable and hence is exercised.</p>

    <p>Total Premium Paid = ₹ 7,000</p>

    <p>Ending Value = − ₹ 7,000 + [(₹ 1300 − ₹ 1100) × 100]</p>

    <p>= − ₹ 7,000 + ₹ 20,000 = <strong>₹ 13,000</strong></p>

    <p><strong>Net Gain = ₹ 13,000</strong></p>
  `
},

{
  question_id: "AFM_MTPMAR24I_Q4_C",
  source: "ICAI Mock Test Paper - Series I, March 2024",
  chapter_name: "Value at Risk (VaR)",
  placement: 4,
  marks: 4,
  question_html: `
    <p>List out the areas where the concept of Value at Risk (VAR) can be applied?</p>
  `,
  solution_html: `
    

    <p>VAR can be applied in the following areas:</p>

    <ol type="a">
      <li>to measure the maximum possible loss on any portfolio or a trading position.</li>

      <li>as a benchmark for performance measurement of any operation or trading.</li>

      <li>to fix limits for individuals dealing in front office of a treasury department.</li>

      <li>to enable the management to decide the trading strategies.</li>

      <li>as a tool for Asset and Liability Management especially in banks.</li>
    </ol>
  `
},

{
  question_id: "AFM_MTPMAR24I_Q5_A",
  source: "ICAI Mock Test Paper - Series I, March 2024",
  chapter_name: "Business Valuation - FCFF",
  placement: 5,
  marks: 8,
  question_html: `
    <p>Following information is given in respect of Alpha Ltd., which is expected to grow at a rate of 20% p.a. for the next three years, after which the growth rate will stabilize at 8% p.a. normal level, in perpetuity.</p>

    <p><strong>For the year ended March 31, 2023</strong></p>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Particulars</th>
        <th>₹ Crores</th>
      </tr>
      <tr>
        <td>Revenues</td>
        <td>15,000</td>
      </tr>
      <tr>
        <td>Cost of Goods Sold (COGS)</td>
        <td>6,000</td>
      </tr>
      <tr>
        <td>Operating Expenses</td>
        <td>4,500</td>
      </tr>
      <tr>
        <td>Capital Expenditure</td>
        <td>1,500</td>
      </tr>
      <tr>
        <td>Depreciation (included in Operating Expenses)</td>
        <td>1,200</td>
      </tr>
    </table>

    <p>During high growth period, Revenues & Earnings before Interest & Tax (EBIT) will grow at 20% p.a. and capital expenditure net of depreciation will grow at 15% p.a.</p>

    <p>From year 4 onwards, i.e. normal growth period revenues and EBIT will grow at 8% p.a. and incremental capital expenditure will be offset by the depreciation. During both high growth & normal growth period, net working capital requirement will be 25% of revenues.</p>

    <p>Out of total capital, 60% constitute Equity and rest is Debt. The cost of equity is 17.53% and pre-tax cost of debt is 16%.</p>

    <p>Corporate Income Tax rate is 30%.</p>

    <p><strong>Required:</strong></p>

    <p>Estimate the value of Alpha Ltd. using Free Cash Flows to the Firm (FCFF).</p>

    <p><strong>The PVIF @ 15% for the three years are as below:</strong></p>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Year</th>
        <th>t1</th>
        <th>t2</th>
        <th>t3</th>
      </tr>
      <tr>
        <td>PVIF</td>
        <td>0.8696</td>
        <td>0.7561</td>
        <td>0.6575</td>
      </tr>
    </table>

    <p><strong>Note:</strong> Carry out calculation in ₹ Crore and round off figures upto two decimal points.</p>
  `,
  solution_html: `
    

    <strong>Determination of Forecasted Free Cash Flow to the Firm (FCFF)</strong>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Particulars (₹ Crores)</th>
        <th>Year 1</th>
        <th>Year 2</th>
        <th>Year 3</th>
        <th>Terminal Year</th>
      </tr>
      <tr>
        <td>Revenue</td>
        <td>18,000.00</td>
        <td>21,600.00</td>
        <td>25,920.00</td>
        <td>27,993.60</td>
      </tr>
      <tr>
        <td>COGS</td>
        <td>7,200.00</td>
        <td>8,640.00</td>
        <td>10,368.00</td>
        <td>11,197.44</td>
      </tr>
      <tr>
        <td>Operating Expenses*</td>
        <td>3,960.00</td>
        <td>4,752.00</td>
        <td>5,702.40</td>
        <td>6,158.59</td>
      </tr>
      <tr>
        <td>Depreciation</td>
        <td>1,440.00</td>
        <td>1,728.00</td>
        <td>2,073.60</td>
        <td>2,239.49</td>
      </tr>
      <tr>
        <td>EBIT</td>
        <td>5,400.00</td>
        <td>6,480.00</td>
        <td>7,776.00</td>
        <td>8,398.08</td>
      </tr>
      <tr>
        <td>Tax @ 30%</td>
        <td>1,620.00</td>
        <td>1,944.00</td>
        <td>2,332.80</td>
        <td>2,519.42</td>
      </tr>
      <tr>
        <td>EAT</td>
        <td>3,780.00</td>
        <td>4,536.00</td>
        <td>5,443.20</td>
        <td>5,878.66</td>
      </tr>
      <tr>
        <td>Capital Expenditure – Depreciation</td>
        <td>345.00</td>
        <td>396.76</td>
        <td>456.26</td>
        <td>-</td>
      </tr>
      <tr>
        <td>Δ Working Capital</td>
        <td>750.00</td>
        <td>900.00</td>
        <td>1,080.00</td>
        <td>518.40</td>
      </tr>
      <tr>
        <th>Free Cash Flow (FCFF)</th>
        <th>2,685.00</th>
        <th>3,239.24</th>
        <th>3,906.94</th>
        <th>5,360.26</th>
      </tr>
    </table>

    <p><em>*Excluding Depreciation.</em></p>

    <br>

    <strong>Calculation of WACC</strong>

    <p>
      = 60% × 17.53% + 40% × 16% × (1 − 0.30)
    </p>

    <p>
      = <strong>15%</strong>
    </p>

    <br>

    <strong>Present Value (PV) of FCFF during the Explicit Forecast Period</strong>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>FCFF (₹ Crores)</th>
        <th>PVIF @ 15%</th>
        <th>PV (₹ Crores)</th>
      </tr>
      <tr>
        <td>2,685.00</td>
        <td>0.8696</td>
        <td>2,334.88</td>
      </tr>
      <tr>
        <td>3,239.24</td>
        <td>0.7561</td>
        <td>2,449.19</td>
      </tr>
      <tr>
        <td>3,906.94</td>
        <td>0.6575</td>
        <td>2,568.81</td>
      </tr>
      <tr>
        <th colspan="2">Total</th>
        <th>7,352.88</th>
      </tr>
    </table>

    <br>

    <strong>Present Value of Terminal Value</strong>

    <p>
      = [5,360.26 / (0.15 − 0.08)] × [1 / (1.15)<sup>3</sup>]
    </p>

    <p>
      = ₹ 76,575.14 Crores × 0.6575
    </p>

    <p>
      = <strong>₹ 50,348.16 Crores</strong>
    </p>

    <br>

    <strong>Value of the Firm</strong>

    <p>
      = ₹ 7,352.88 Crores + ₹ 50,348.16 Crores
    </p>

    <p>
      = <strong>₹ 57,701.04 Crores</strong>
    </p>
  `
},

{
  question_id: "AFM_MTPMAR24I_Q5_B",
  source: "ICAI Mock Test Paper - Series I, March 2024",
  chapter_name: "Portfolio Beta and Stock Index Futures",
  placement: 5,
  marks: 6,
  question_html: `
    <p>A trader is having in its portfolio shares worth ₹ 170 lakhs at current price and cash ₹ 30 lakhs. The beta of share portfolio is 1.6.</p>

    <p><strong>Evaluate:</strong></p>

    <ol type="i">
      <li>Current portfolio beta.</li>
      <li>Portfolio beta after 3 months if the trader on current date goes for long position on ₹ 200 lakhs Nifty futures and after 3 months the price of shares dropped by 3.2%.</li>
    </ol>
  `,
  solution_html: `
    

    <strong>(i) Current Portfolio Beta</strong>

    <p>Current Beta for share portfolio = <strong>1.6</strong></p>

    <p>Beta for cash = <strong>0</strong></p>

    <p>
      Current Portfolio Beta
      = (170 / 200 × 1.6) + (30 / 200 × 0)
      = <strong>1.36</strong>
    </p>

    <br>

    <strong>(ii) Portfolio Beta after 3 Months</strong>

    <p>
      Beta for portfolio of shares:
    </p>

    <p>
      1.6 =
      <br>
      Change in value of portfolio of shares
      <br>
      ───────────────────────────────────────
      <br>
      Change in value of market portfolio (Index)
    </p>

    <p>
      1.6 = 0.032 / Change in value of market portfolio (Index)
    </p>

    <p>
      Change in value of market portfolio (Index)
      = (0.032 / 1.6) × 100
      = <strong>2%</strong>
    </p>

    <p>
      Position taken on ₹ 200 lakh Nifty futures: <strong>Long</strong>
    </p>

    <p>
      Value of index after 3 months
      = ₹ 200 lakh × (1.00 − 0.02)
      = <strong>₹ 196 lakh</strong>
    </p>

    <p>
      Mark-to-market paid
      = <strong>₹ 4 lakh</strong>
    </p>

    <p>
      Cash balance after payment of mark-to-market
      = <strong>₹ 26 lakh</strong>
    </p>

    <p>
      Value of portfolio after 3 months
      = ₹ 170 lakh × (1 − 0.032) + ₹ 26 lakh
      = <strong>₹ 190.56 lakh</strong>
    </p>

    <p>
      Change in value of portfolio
      = (200 lakh − 190.56 lakh) / 200 lakh
      = <strong>4.72%</strong>
    </p>

    <p>
      Portfolio Beta
      = 0.0472 / 0.02
      = <strong>2.36</strong>
    </p>
  `
},

{
  question_id: "AFM_MTPMAR24I_Q6_A",
  source: "ICAI Mock Test Paper - Series I, March 2024",
  chapter_name: "Interest Rate Swaps",
  placement: 6,
  marks: 6,
  question_html: `
    <p>Suppose a dealer quotes 'All-in-cost' for a generic swap at 8% against six-month MIBOR flat. If the notional principal amount of swap is ₹ 10,00,000.</p>

    <p><strong>Required:</strong></p>

    <ol type="i">
      <li>Calculate semi-annual fixed payment.</li>
      <li>Produce the first floating rate payment for (i) above if the six month period from the effective date of swap to the settlement date comprises 181 days and that the corresponding MIBOR was 6% on the effective date of swap.</li>
    </ol>

    <p>In (ii) above, if the settlement is on 'Net' basis, how much the fixed rate payer would pay to the floating rate payer?</p>

    <p><strong>Generic swap is based on 30/360 days basis.</strong></p>
  `,
  solution_html: `
    

    <strong>(i) Semi-annual Fixed Payment</strong>

    <p>
      Semi-annual Fixed Payment = (N) (AIC) (Period)
    </p>

    <p>
      Where,<br>
      N = Notional Principal Amount = ₹ 10,00,000<br>
      AIC = All-in-cost = 8% = 0.08
    </p>

    <p>
      = 10,00,000 × 0.08 × (180 / 360)
    </p>

    <p>
      = 10,00,000 × 0.08 × 0.50
    </p>

    <p>
      = 10,00,000 × 0.04
    </p>

    <p>
      = <strong>₹ 40,000</strong>
    </p>

    <br>

    <strong>(ii) Floating Rate Payment</strong>

    <p>
      Floating Rate Payment
      = N × MIBOR × (dt / 360)
    </p>

    <p>
      = 10,00,000 × 0.06 × (181 / 360)
    </p>

    <p>
      = 10,00,000 × 0.06 × 0.503
    </p>

    <p>
      = 10,00,000 × 0.03018
    </p>

    <p>
      = <strong>₹ 30,180</strong><br>
      <strong>or</strong><br>
      = 10,00,000 × 0.06 × 0.502777<br>
      = <strong>₹ 30,167</strong>
    </p>

    <br>

    <strong>(iii) Net Amount</strong>

    <p>
      = Fixed Payment − Floating Payment
    </p>

    <p>
      = ₹ 40,000 − ₹ 30,180
    </p>

    <p>
      = <strong>₹ 9,820</strong>
    </p>

    <p><strong>or</strong></p>

    <p>
      = ₹ 40,000 − ₹ 30,167
    </p>

    <p>
      = <strong>₹ 9,833</strong>
    </p>
  `
},

{
  question_id: "AFM_MTPMAR24I_Q6_B",
  source: "ICAI Mock Test Paper - Series I, March 2024",
  chapter_name: "Capital Budgeting under Risk - Certainty Equivalent Approach",
  placement: 6,
  marks: 8,
  question_html: `
    <p>The Textile Manufacturing Company Ltd. is considering one of two mutually exclusive proposals, Projects M and N, which require cash outlays of ₹ 17,00,000 and ₹ 16,50,000 respectively. The certainty-equivalent (C.E.) approach is used in incorporating risk in capital budgeting decisions. The current yield on Treasury bond is 6%. The expected net cash flows and their respective certainty equivalents are as follows:</p>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th rowspan="2">Year-end</th>
        <th colspan="2">Project M</th>
        <th colspan="2">Project N</th>
      </tr>
      <tr>
        <th>Cash Flow (₹)</th>
        <th>C.E.</th>
        <th>Cash Flow (₹)</th>
        <th>C.E.</th>
      </tr>
      <tr>
        <td>1</td>
        <td>9,00,000</td>
        <td>0.8</td>
        <td>9,00,000</td>
        <td>0.9</td>
      </tr>
      <tr>
        <td>2</td>
        <td>10,00,000</td>
        <td>0.7</td>
        <td>9,00,000</td>
        <td>0.8</td>
      </tr>
      <tr>
        <td>3</td>
        <td>10,00,000</td>
        <td>0.5</td>
        <td>10,00,000</td>
        <td>0.7</td>
      </tr>
    </table>

    <p>Present value factors of ₹ 1 discounted at 6% at the end of year 1, 2 and 3 are 0.943, 0.890 and 0.840 respectively.</p>

    <p><strong>Required:</strong></p>

    <ol type="i">
      <li>Recommend which project should be accepted?</li>
      <li>Suppose if risk adjusted discount rate method is to be used for evaluation then which project would be appraised with a higher discount rate and why?</li>
    </ol>
  `,
  solution_html: `
    

    <strong>(i) Statement Showing the Net Present Value of Project M</strong>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Year End</th>
        <th>Cash Flow (₹)<br>(a)</th>
        <th>C.E.<br>(b)</th>
        <th>Adjusted Cash Flow (₹)<br>(c) = (a) × (b)</th>
        <th>Present Value Factor @ 6%<br>(d)</th>
        <th>Total Present Value (₹)<br>(e) = (c) × (d)</th>
      </tr>
      <tr>
        <td>1</td>
        <td>9,00,000</td>
        <td>0.8</td>
        <td>7,20,000</td>
        <td>0.943</td>
        <td>6,78,960</td>
      </tr>
      <tr>
        <td>2</td>
        <td>10,00,000</td>
        <td>0.7</td>
        <td>7,00,000</td>
        <td>0.890</td>
        <td>6,23,000</td>
      </tr>
      <tr>
        <td>3</td>
        <td>10,00,000</td>
        <td>0.5</td>
        <td>5,00,000</td>
        <td>0.840</td>
        <td>4,20,000</td>
      </tr>
      <tr>
        <td colspan="5"><strong>Total Present Value</strong></td>
        <td><strong>17,21,960</strong></td>
      </tr>
      <tr>
        <td colspan="5">Less: Initial Investment</td>
        <td>17,00,000</td>
      </tr>
      <tr>
        <td colspan="5"><strong>Net Present Value</strong></td>
        <td><strong>21,960</strong></td>
      </tr>
    </table>

    <br>

    <strong>Statement Showing the Net Present Value of Project N</strong>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Year End</th>
        <th>Cash Flow (₹)<br>(a)</th>
        <th>C.E.<br>(b)</th>
        <th>Adjusted Cash Flow (₹)<br>(c) = (a) × (b)</th>
        <th>Present Value Factor @ 6%<br>(d)</th>
        <th>Total Present Value (₹)<br>(e) = (c) × (d)</th>
      </tr>
      <tr>
        <td>1</td>
        <td>9,00,000</td>
        <td>0.9</td>
        <td>8,10,000</td>
        <td>0.943</td>
        <td>7,63,830</td>
      </tr>
      <tr>
        <td>2</td>
        <td>9,00,000</td>
        <td>0.8</td>
        <td>7,20,000</td>
        <td>0.890</td>
        <td>6,40,800</td>
      </tr>
      <tr>
        <td>3</td>
        <td>10,00,000</td>
        <td>0.7</td>
        <td>7,00,000</td>
        <td>0.840</td>
        <td>5,88,000</td>
      </tr>
      <tr>
        <td colspan="5"><strong>Total Present Value</strong></td>
        <td><strong>19,92,630</strong></td>
      </tr>
      <tr>
        <td colspan="5">Less: Initial Investment</td>
        <td>16,50,000</td>
      </tr>
      <tr>
        <td colspan="5"><strong>Net Present Value</strong></td>
        <td><strong>3,42,630</strong></td>
      </tr>
    </table>

    <p><strong>Decision:</strong> Since the Net Present Value of <strong>Project N</strong> is higher, <strong>Project N should be accepted.</strong></p>

    <br>

    <strong>(ii)</strong>

    <p>Since Certainty-Equivalent (C.E.) Co-efficient of <strong>Project M (2.0)</strong> is lower than <strong>Project N (2.4)</strong>, Project M is riskier than Project N and as "higher the riskiness of a cash flow, the lower will be the CE factor". Thus, if Risk Adjusted Discount Rate (RADR) method is used, <strong>Project M would be analysed with a higher discount rate.</strong></p>
  `
},
{
  question_id: "AFM_MTPAPR24II_Q1A",
  source: "ICAI Mock Test Paper - Series II, April 2024",
  chapter_name: "Derivatives Analysis and Valuation",
  placement: 1,
  marks: 6,
  question_html: `
    <p> You as an investor had purchased a 4-month call option on the equity shares of ABC Ltd. of ₹ 10, of which the current market price is ₹ 660 per share and the exercise price ₹ 750. You expect the price to range between ₹ 600 to ₹ 950. The expected share price of ABC Ltd. and related probability is given below:</p>
    
    <div style="overflow-x:auto;">
      <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: center;">
        <tbody>
          <tr>
            <th style="text-align: left;">Expected Price (₹)</th>
            <td>600</td>
            <td>700</td>
            <td>800</td>
            <td>900</td>
            <td>950</td>
          </tr>
          <tr>
            <th style="text-align: left;">Probability</th>
            <td>0.05</td>
            <td>0.20</td>
            <td>0.50</td>
            <td>0.10</td>
            <td>0.15</td>
          </tr>
        </tbody>
      </table>
    </div>
    <br>
    <p>Evaluate the following:</p>
    <ol type="i">
      <li>Expected Share price at the end of 4 months.</li>
      <li>Value of Call Option at the end of 4 months if the exercise price prevails.</li>
      <li>In case the option is held to its maturity, estimate expected value of the call option?</li>
    </ol>
  `,
  solution_html: `
    
    <ol type="i">
      <li><strong>Expected Share Price</strong><br>
      = ₹ 600 &times; 0.05 + ₹ 700 &times; 0.20 + ₹ 800 &times; 0.50 + ₹ 900 &times; 0.10 + ₹ 950 &times; 0.15<br>
      = ₹ 30 + ₹ 140 + ₹ 400 + ₹ 90 + ₹ 142.50 = <strong>₹ 802.50</strong></li>
      <br>
      
      <li><strong>Value of Call Option</strong><br>
      = ₹ 750 - ₹ 750 = <strong>Nil</strong></li>
      <br>
      
      <li><strong>If the option is held till maturity the expected Value of Call Option:</strong><br><br>
      <div style="overflow-x:auto;">
        <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: center;">
          <thead>
            <tr>
              <th>Expected price (X)</th>
              <th>Value of call (C)</th>
              <th>Probability (P)</th>
              <th>CP</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>₹ 600</td>
              <td>0</td>
              <td>0.05</td>
              <td>0</td>
            </tr>
            <tr>
              <td>₹ 700</td>
              <td>0</td>
              <td>0.20</td>
              <td>0</td>
            </tr>
            <tr>
              <td>₹ 800</td>
              <td>₹ 50</td>
              <td>0.50</td>
              <td>₹ 25</td>
            </tr>
            <tr>
              <td>₹ 900</td>
              <td>₹ 150</td>
              <td>0.10</td>
              <td>₹ 15</td>
            </tr>
            <tr>
              <td>₹ 950</td>
              <td>₹ 200</td>
              <td>0.15</td>
              <td>₹ 30</td>
            </tr>
            <tr style="font-weight: bold;">
              <td colspan="3" style="text-align:right; padding-right: 15px;">Total</td>
              <td>₹ 70</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br>
      <p><em>* If the stock price goes below ₹ 750, option is not exercised at all.</em></p>
      </li>
    </ol>
  `
},
{
  question_id: "AFM_MTPAPR24II_Q1B",
  source: "ICAI Mock Test Paper - Series II, April 2024",
  chapter_name: "Security Valuation",
  placement: 1,
  marks: 4,
  question_html: `
    <p> Share of Beta Ltd. is being quoted at a Price-Earning ratio of 10 times. In the coming year the company is expected to retain ₹ 10 per share which is 45% of its Earning Per Share.</p>
    <p>You are required to evaluate:</p>
    <ol type="i">
      <li>The cost of equity to the company if the market expects a growth rate of 10% p.a.</li>
      <li>If the anticipated growth rate is 12% per annum, calculate the indicative market price with the same cost of capital.</li>
    </ol>
  `,
  solution_html: `
    
    <ol type="i">
      <li><strong>Cost of equity capital</strong><br>
      <div style="overflow-x:auto;">
        <table border="0" cellpadding="4" cellspacing="0" style="width: 100%; max-width: 400px;">
          <tbody>
            <tr>
              <td>Retained earnings (45%)</td>
              <td>₹ 10.00 per share</td>
            </tr>
            <tr>
              <td>Dividend (55%)</td>
              <td>₹ 12.22 per share</td>
            </tr>
            <tr>
              <td>EPS (100%)</td>
              <td>₹ 22.22 per share</td>
            </tr>
            <tr>
              <td>P/E Ratio</td>
              <td>10 times</td>
            </tr>
            <tr>
              <td>Market price</td>
              <td>₹ 22.22 &times; 10 = <strong>₹ 222.20</strong></td>
            </tr>
          </tbody>
        </table>
      </div>
      <br>
      <p>Cost of equity capital<br>
      = [ (Dividend / Price) &times; 100 ] + Growth %<br>
      = [ (12.22 / 222.20) &times; 100 ] + 10% = <strong>15.50%</strong></p>
      </li>
      <br>
      
      <li><strong>Indicative market price with the same cost of capital</strong><br>
      <p>Market Price = Dividend / [Cost of Capital (%) - Growth Rate (%)]<br>
      = ₹ 12.22 / (15.50% - 12.00%)<br>
      = ₹ 12.22 / 3.50% = <strong>₹ 349.14 per share</strong></p>
      </li>
    </ol>
  `
},
{
  question_id: "AFM_MTPAPR24II_Q2A",
  source: "ICAI Mock Test Paper - Series II, April 2024",
  chapter_name: "Foreign Exchange Exposure and Risk Management",
  placement: 1,
  marks: 6,
  question_html: `
    <p> On January 28, 2023, an importer customer requested a Bank to remit Singapore Dollar (SGD) 2,500,000 under an irrevocable Letter of Credit (LC). However, due to unavoidable factors, the Bank could affect the remittances only on February 4, 2023. The inter-bank market rates were as follows:</p>
    
    <div style="overflow-x:auto;">
      <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
        <thead>
          <tr>
            <th>Currency Pair</th>
            <th>January 28, 2023</th>
            <th>February 4, 2023</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>US$ 1 =</td>
            <td>₹ 80.91 / 80.97</td>
            <td>₹ 80.85 / 80.90</td>
          </tr>
          <tr>
            <td>GBP &pound; 1 =</td>
            <td>US$ 1.7765 / 1.7775</td>
            <td>US$ 1.7840 / 1.7850</td>
          </tr>
          <tr>
            <td>GBP &pound; 1 =</td>
            <td>SGD 2.1380 / 2.1390</td>
            <td>SGD 2.1575 / 2.1590</td>
          </tr>
        </tbody>
      </table>
    </div>
    <br>
    <p>The Bank wishes to retain an exchange margin of 0.125% on ₹ / SGD.</p>
    <p><strong>Required:</strong><br>
    Estimate how much does the customer stand to gain or lose due to the delay?</p>
    <p><em>(Note: Calculate the rate in multiples of 0.0001)</em></p>
  `,
  solution_html: `
    
    <p>On January 28, 2023, the importer customer requested to remit SGD 25 lakhs.</p>
    <p><strong>To consider sell rate for the bank (January 28, 2023):</strong></p>
    <ul>
      <li>US$ 1 = ₹ 80.97</li>
      <li>Pound &pound; 1 = US$ 1.7775</li>
      <li>Pound &pound; 1 = SGD 2.1380</li>
    </ul>
    <p>Therefore, SGD 1 = (₹ 80.97 &times; 1.7775) / SGD 2.1380</p>
    <p>SGD 1 = ₹ 67.3172<br>
    Add: Exchange margin (0.125%) = ₹ 0.0841<br>
    <strong>Total Rate on Jan 28 = ₹ 67.4013</strong></p>
    <br>
    <p><strong>On February 4, 2023 the rates are:</strong></p>
    <ul>
      <li>US$ 1 = ₹ 80.90</li>
      <li>Pound &pound; 1 = US$ 1.7850</li>
      <li>Pound &pound; 1 = SGD 2.1575</li>
    </ul>
    <p>Therefore, SGD 1 = (₹ 80.90 &times; 1.7850) / SGD 2.1575</p>
    <p>SGD 1 = ₹ 66.9323<br>
    Add: Exchange margin (0.125%) = ₹ 0.0837<br>
    <strong>Total Rate on Feb 4 = ₹ 67.0160</strong></p>
    <br>
    <p><strong>Hence, Gain to the importer:</strong><br>
    = SGD 25,00,000 &times; (₹ 67.4013 &ndash; ₹ 67.0160)<br>
    = SGD 25,00,000 &times; 0.3853<br>
    = <strong>₹ 9,63,250</strong></p>
  `
},
{
  question_id: "AFM_MTPAPR24II_Q2B",
  source: "ICAI Mock Test Paper - Series II, April 2024",
  chapter_name: "Interest Rate Risk Management",
  placement: 2,
  marks: 4,
  question_html: `
    <p> Bank A enter into a Repo for 14 days with Bank B in 10% Government of India Bonds 2028 @ 5.65% for ₹ 8 crore. Assuming that clean price (the price that does not have accrued interest) be ₹ 99.42 and initial Margin be 3% and days of accrued interest be 272 days.</p>
    <p>You are required to calculate:</p>
    <ol type="i">
      <li>Dirty Price</li>
      <li>Approximate Repayment amount at maturity.</li>
    </ol>
    <p><em>Note: (1) Consider 360 days in a year. (2) Round off calculations upto 2 decimals points.</em></p>
  `,
  solution_html: `
    
    <ol type="i">
      <li><strong>Dirty Price</strong><br>
      = Clean Price + Interest Accrued<br>
      = 99.42 + [100 &times; (10 / 100) &times; (272 / 360)]<br>
      = 99.42 + 7.5555...<br>
      = <strong>106.98</strong></li>
      <br>
      
      <li><strong>Approximate Repayment amount at maturity</strong><br>
      <p><u>First Leg (Start Proceed)</u><br>
      = Nominal Value &times; (Dirty Price / 100) &times; [(100 - Initial Margin) / 100]<br>
      = ₹ 8,00,00,000 &times; (106.98 / 100) &times; [(100 - 3) / 100]<br>
      = ₹ 8,00,00,000 &times; 1.0698 &times; 0.97<br>
      = <strong>₹ 8,30,16,480</strong></p>
      
      <p><u>Second Leg (Repayment at Maturity)</u><br>
      = Start Proceed &times; [1 + (Repo rate &times; No. of days / 360)]<br>
      = ₹ 8,30,16,480 &times; [1 + (0.0565 &times; 14 / 360)]<br>
      = <strong>₹ 8,31,98,885.65 (Approx.)</strong></p>
      </li>
    </ol>
  `
},
{
  question_id: "AFM_MTPAPR24II_Q2C",
  source: "ICAI Mock Test Paper - Series II, April 2024",
  chapter_name: "Foreign Exchange Exposure and Risk Management",
  placement: 3,
  marks: 4,
  question_html: `
    <p> What are the parameters to identify currency risk? List out the ways to minimize such risk.</p>
  `,
  solution_html: `
    
    <p><strong>Some of the parameters to identify the currency risk are as follows:</strong></p>
    <ol type="i">
      <li><strong>Government Action:</strong> The Government action of any country has visual impact in its currency. For example, the UK Govt. decision to divorce from European Union i.e. Brexit brought the pound to its lowest since 1980’s.</li>
      <li><strong>Nominal Interest Rate:</strong> As per interest rate parity (IRP) the currency exchange rate depends on the nominal interest of that country.</li>
      <li><strong>Inflation Rate:</strong> Purchasing power parity theory discussed in later chapters impact the value of currency.</li>
      <li><strong>Natural Calamities:</strong> Any natural calamity can have negative impact.</li>
      <li><strong>War, Coup, Rebellion etc.:</strong> All these actions can have far reaching impact on currency’s exchange rates.</li>
      <li><strong>Change of Government:</strong> The change of government and its attitude towards foreign investment also helps to identify the currency risk.</li>
    </ol>
    <br>
    <p><strong>Ways to minimize such risk are:</strong></p>
    <ol>
      <li>Money Market Hedging.</li>
      <li>Currency Options.</li>
      <li>Forward Contract.</li>
      <li>Make Invoice in Home Currency.</li>
    </ol>
  `
},
{
  question_id: "AFM_MTPAPR24II_Q1C",
  source: "ICAI Mock Test Paper - Series II, April 2024",
  chapter_name: "Financial Policy and Corporate Strategy",
  placement: 1,
  marks: 4,
  question_html: `
    <p> Why is there a need for succession planning in business? Explain.</p>
  `,
  solution_html: `
    
    <p>Need for succession planning in business is explained below:</p>
    <ul>
      <li><strong>Risk mitigation</strong> &ndash; If existing leader quits, then searches can take six-nine months for suitable candidate to close. Keeping an organization without leader can invite disruption, uncertainty, conflict and endangers future competitiveness.</li>
      <li><strong>Cause removal</strong> &ndash; If the existing leader is culpable of gross negligence, fraud, willful misconduct, or material breach while discharging duties and has been barred from undertaking further activities by court, arbitral tribunal, management, stakeholders or any other agency.</li>
      <li><strong>Talent pipeline</strong> &ndash; Succession planning keep employees motivated and determined as it can help them obtaining more visibility around career paths expected, which would help in retaining the knowledge bank created by company over a period of time and leverage upon the same.</li>
      <li><strong>Conflict Resolution Mechanism</strong> &ndash; This planning is very helpful in promoting open and transparent communication and settlement of conflicts.</li>
      <li><strong>Aligning</strong> &ndash; In family owned business succession planning helps to align with the culture, vision, direction and values of the business.</li>
    </ul>
  `
},
{
  question_id: "AFM_MTPAPR24II_Q3C",
  source: "ICAI Mock Test Paper - Series II, April 2024",
  chapter_name: "Startup Finance / Mutual Funds",
  placement: 3,
  marks: 4,
  question_html: `
    <p><strong>(c) Either</strong><br>
    Briefly explain Blockchain transaction. List the risks associated with Blockchain.</p>
    <p style="text-align: center; font-weight: bold;">Or</p>
    <p><strong>(c) Or</strong><br>
    Explain briefly the financial measures that help in evaluation of performance of any Mutual Fund.</p>
  `,
  solution_html: `
    
    
    <p><u><strong>Either</strong></u></p>
    <p>Blockchain, sometimes referred to as Distributed Ledger Technology (DLT) is a shared, peer-to-peer, and decentralized open ledger of transactions system with no trusted third parties in between. This ledger database has every entry as permanent as it is an append-only database which cannot be changed or altered. All transactions are fully irreversible with any change in the transaction being recorded as a new transaction.</p>
    <p><strong>Some of the risk associated with the use blockchain technology are as follows:</strong></p>
    <ol type="i">
      <li>With the use of blockchain, organizations need to consider risks with a wider perspective as different members of a particular blockchain may have different risk appetite/risk tolerances that may further lead to conflict when monitoring controls are designed for a blockchain. There may be questions about who is responsible for managing risks if no one party is in-charge, and how proper accountability is to be achieved in a blockchain.</li>
      <li>The reliability of financial transactions is dependent on the underlying technology and if this underlying consensus mechanism has been tampered with, it could render the financial information stored in the ledger to be inaccurate and unreliable.</li>
      <li>In the absence of any central authority to administer and enforce protocol amendments, there could be a challenge in the development and maintenance of process control activities and in such case, users of public blockchains find difficult to obtain an understanding of the general IT controls implemented and the effectiveness of these controls.</li>
      <li>As blockchain involves humongous data getting updated frequently, risk related to information overload could potentially challenge the level of monitoring required. Furthermore, to find competent people to design and perform effective monitoring controls may again prove to be difficult.</li>
    </ol>
    
    <hr style="margin: 20px 0;">
    
    <p><u><strong>OR</strong></u></p>
    <p><strong>Financial Measures: -</strong> There are some financial measures that help in evaluation of performance of any Mutual Fund which are as follows:</p>
    <ol type="a">
      <li><strong>Expense Ratio:</strong> Discussed in earlier section, it ultimately impacts the return of a Mutual Fund Scheme.</li>
      <li><strong>Sharpe Ratio:</strong> As discussed in the chapter on Portfolio Management, this ratio measures the Mutual Fund’s performance measured against the total risk (both systematic and unsystematic) taken.</li>
      <li><strong>Treynor Ratio:</strong> As discussed in the chapter on Portfolio Management, beta measures the volatility of return of a security vis-&agrave;-vis to the market, in mutual funds the Beta of a mutual fund measures volatility of a fund’s return to return from its Benchmark. Treynor Ratio measures performance of a mutual fund against the systematic risk it has taken.</li>
      <li><strong>Sortino Ratio:</strong> A variation of Sharpe Ratio that considers and uses downside deviation instead of total standard deviation in denominator.</li>
    </ol>
  `
},

{
  question_id: "AFM_MTPAPR24II_Q3B",
  source: "ICAI Mock Test Paper - Series II, April 2024",
  chapter_name: "Portfolio Management",
  placement: 2,
  marks: 4,
  question_html: `
    <p> An investor has two portfolios known to be on minimum variance set for a population of three securities X, Y and Z having below mentioned weights:</p>
    
    <div style="overflow-x:auto;">
      <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: center;">
        <thead>
          <tr>
            <th>Portfolio</th>
            <th>W<sub>X</sub></th>
            <th>W<sub>Y</sub></th>
            <th>W<sub>Z</sub></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align: left;">Portfolio A</td>
            <td>0.30</td>
            <td>0.40</td>
            <td>0.30</td>
          </tr>
          <tr>
            <td style="text-align: left;">Portfolio B</td>
            <td>0.20</td>
            <td>0.50</td>
            <td>0.30</td>
          </tr>
        </tbody>
      </table>
    </div>
    <br>
    <p>Calculate the weight for each stock for a portfolio constructed by investing ₹ 10,00,000 in portfolio A and ₹ 6,00,000 in portfolio B.</p>
  `,
  solution_html: `
    
    <p>Investment committed to each security would be:</p>
    
    <div style="overflow-x:auto;">
      <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: right;">
        <thead>
          <tr>
            <th style="text-align: left;">Particulars</th>
            <th style="text-align: center;">X (₹)</th>
            <th style="text-align: center;">Y (₹)</th>
            <th style="text-align: center;">Z (₹)</th>
            <th style="text-align: center;">Total (₹)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align: left;">Portfolio A (₹ 10L)</td>
            <td>3,00,000</td>
            <td>4,00,000</td>
            <td>3,00,000</td>
            <td>10,00,000</td>
          </tr>
          <tr>
            <td style="text-align: left;">Portfolio B (₹ 6L)</td>
            <td>1,20,000</td>
            <td>3,00,000</td>
            <td>1,80,000</td>
            <td>6,00,000</td>
          </tr>
          <tr style="font-weight: bold;">
            <td style="text-align: left;">Combined Portfolio</td>
            <td>4,20,000</td>
            <td>7,00,000</td>
            <td>4,80,000</td>
            <td>16,00,000</td>
          </tr>
          <tr>
            <td style="text-align: left; font-weight: bold;">&therefore; Stock weights</td>
            <td><strong>0.2625</strong><br>(Or 0.26)</td>
            <td><strong>0.4375</strong><br>(Or 0.44)</td>
            <td><strong>0.3000</strong><br>(Or 0.30)</td>
            <td><strong>1.00</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
  `
},
{
  question_id: "AFM_MTPAPR24II_Q3A",
  source: "ICAI Mock Test Paper - Series II, April 2024",
  chapter_name: "Portfolio Management",
  placement: 1,
  marks: 6,
  question_html: `
    <p> Suppose that economy A is growing rapidly, and you are managing a global equity fund and so far you have invested only in developed-country stocks only. Now you have decided to add stocks of economy A to your portfolio. The table below shows the expected rates of return, standard deviations, and correlation coefficients (all estimates are for aggregate stock market of developed countries and stock market of Economy A).</p>
    
    <div style="overflow-x:auto;">
      <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: center;">
        <thead>
          <tr>
            <th style="text-align: left;">Particulars</th>
            <th>Developed Country Stocks</th>
            <th>Stocks of Economy A</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align: left;">Expected rate of return (annualized percentage)</td>
            <td>20</td>
            <td>30</td>
          </tr>
          <tr>
            <td style="text-align: left;">Risk [Annualized Standard Deviation (%)]</td>
            <td>16</td>
            <td>30</td>
          </tr>
          <tr>
            <td style="text-align: left;">Correlation Coefficient (&rho;) between stock of two economies</td>
            <td colspan="2">0.30</td>
          </tr>
        </tbody>
      </table>
    </div>
    <br>
    <p>Assuming the risk-free interest rate to be 6%, you are required to determine:</p>
    <ol type="i">
      <li>What percentage of your portfolio should you allocate to stocks of Economy A if you want to increase the expected rate of return on your portfolio by 1%?</li>
      <li>What will be the standard deviation of your portfolio assuming that stocks of Economy A are included in the portfolio as calculated above?</li>
      <li>Also show how well the Fund will be compensated for the risk undertaken due to inclusion of stocks of Economy A in the portfolio?</li>
    </ol>
  `,
  solution_html: `
    
    <ol type="i">
      <li><strong>Percentage allocation to stocks of Economy A:</strong><br>
      Let the weight of stocks of Economy A be expressed as w, then:<br>
      (1 - w) &times; 20% + w &times; 30% = 21%<br>
      20 - 20w + 30w = 21<br>
      10w = 1<br>
      i.e. w = 0.1 or <strong>10%</strong>.</li>
      <br>
      
      <li><strong>Standard deviation of the portfolio:</strong><br>
      Variance of portfolio shall be:<br>
      = (w<sub>1</sub>)<sup>2</sup>(&sigma;<sub>1</sub>)<sup>2</sup> + (w<sub>2</sub>)<sup>2</sup>(&sigma;<sub>2</sub>)<sup>2</sup> + 2(w<sub>1</sub>)(w<sub>2</sub>)(&sigma;<sub>1</sub>)(&sigma;<sub>2</sub>)(&rho;)<br>
      = (0.9)<sup>2</sup>(0.16)<sup>2</sup> + (0.1)<sup>2</sup>(0.30)<sup>2</sup> + 2(0.9)(0.1)(0.16)(0.30)(0.30)<br>
      = 0.020736 + 0.0009 + 0.002592 = <strong>0.02423</strong><br>
      Standard deviation is (0.02423)<sup>1/2</sup> = 0.15565 or <strong>15.56%</strong>.</li>
      <br>
      
      <li><strong>Compensation for risk undertaken (Sharpe Ratio):</strong><br>
      <p>Sharpe Ratio = (Expected Return - Risk Free Rate of Return) / Standard Deviation</p>
      <p><u>Investment in stock of developed countries only:</u><br>
      = (20 &minus; 6) / 16 = <strong>0.875</strong></p>
      <p><u>Investment with inclusion of stocks of Economy A:</u><br>
      = (21 &minus; 6) / 15.56 = <strong>0.964</strong></p>
      <p>The Sharpe ratio will improve by approximately <strong>0.09</strong>, showing better compensation for the risk undertaken.</p>
      </li>
    </ol>
  `
},

{
  question_id: "AFM_MTPAPR24II_Q4A",
  source: "ICAI Mock Test Paper - Series II, April 2024",
  chapter_name: "Portfolio Management",
  placement: 1,
  marks: 6,
  question_html: `
    <p> Your client is holding the following securities:</p>
    
    <div style="overflow-x:auto;">
      <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: center;">
        <thead>
          <tr>
            <th style="text-align: left;">Particulars of Securities</th>
            <th>Cost (₹)</th>
            <th>Dividends / Interest (₹)</th>
            <th>Market price at the end of holding period (₹)</th>
            <th>Beta</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align: left; font-weight: bold;" colspan="5">Equity Shares:</td>
          </tr>
          <tr>
            <td style="text-align: left;">G Ltd.</td>
            <td>20,000</td>
            <td>1,450</td>
            <td>19,600</td>
            <td>0.6</td>
          </tr>
          <tr>
            <td style="text-align: left;">S Ltd.</td>
            <td>30,000</td>
            <td>1,000</td>
            <td>30,400</td>
            <td>0.8</td>
          </tr>
          <tr>
            <td style="text-align: left;">B Ltd.</td>
            <td>28,000</td>
            <td>1,400</td>
            <td>32,000</td>
            <td>0.6</td>
          </tr>
          <tr>
            <td style="text-align: left;">GOI Bonds</td>
            <td>72,000</td>
            <td>5,060</td>
            <td>71,980</td>
            <td>0.01</td>
          </tr>
        </tbody>
      </table>
    </div>
    <br>
    <p>Evaluate:</p>
    <ol type="i">
      <li>Risk free rate of return.</li>
      <li>Expected rate of return of each security (except GOI Bond), using the Capital Asset Pricing Model (CAPM).</li>
    </ol>
    <p><em>Note: (1) Use weighted average Beta in calculations. (2) Round off calculations upto 3 decimal points.</em></p>
  `,
  solution_html: `
    
    
    <div style="overflow-x:auto;">
      <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: right;">
        <thead>
          <tr>
            <th style="text-align: left;">Particulars of Securities</th>
            <th style="text-align: center;">Cost (₹)</th>
            <th style="text-align: center;">Market Price (₹)</th>
            <th style="text-align: center;">Capital gain (₹)</th>
            <th style="text-align: center;">Dividend / Interest (₹)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align: left;">G Ltd.</td>
            <td>20,000</td>
            <td>19,600</td>
            <td>-400</td>
            <td>1,450</td>
          </tr>
          <tr>
            <td style="text-align: left;">S Ltd.</td>
            <td>30,000</td>
            <td>30,400</td>
            <td>400</td>
            <td>1,000</td>
          </tr>
          <tr>
            <td style="text-align: left;">B Ltd.</td>
            <td>28,000</td>
            <td>32,000</td>
            <td>4,000</td>
            <td>1,400</td>
          </tr>
          <tr>
            <td style="text-align: left;">GOI Bonds</td>
            <td>72,000</td>
            <td>71,980</td>
            <td>-20</td>
            <td>5,060</td>
          </tr>
          <tr style="font-weight: bold;">
            <td style="text-align: left;">Total</td>
            <td>1,50,000</td>
            <td>1,53,980</td>
            <td>3,980</td>
            <td>8,910</td>
          </tr>
        </tbody>
      </table>
    </div>
    <br>
    
    <ol type="i">
      <li><strong>Risk free rate of return [Return on Govt. Security (GOI Bond)]</strong><br>
      = [ 5,060 + (72,000 &ndash; 71,980) ] / 72,000<br>
      = <strong>7%</strong></li>
      <br>
      
      <li><strong>Expected rate of return of each security (CAPM)</strong><br>
      <p><u>Weighted Average of Beta</u><br>
      = [0.6 &times; (19,600 / 1,53,980)] + [0.8 &times; (30,400 / 1,53,980)] + [0.60 &times; (32,000 / 1,53,980)] + [0.01 &times; (71,980 / 1,53,980)]<br>
      = 0.076 + 0.158 + 0.125 + 0.005 = <strong>0.364</strong></p>
      
      <p><u>Average Return on Portfolio</u><br>
      = (8,910 + 3,980) / 1,50,000 &times; 100% = <strong>8.593%</strong></p>
      
      <p><u>Market Return</u><br>
      8.593% = 7% + (Rm &ndash; 7%) &times; 0.364<br>
      Rm = <strong>11.376%</strong></p>
      
      <p><u>Expected Rate of Return for each security (Rate of Return = Rf + &beta; (Rm &ndash; Rf))</u><br>
      <strong>G Ltd.</strong> = 7.000% + 0.6 (11.376% &ndash; 7.000%) = <strong>9.626%</strong><br>
      <strong>S Ltd.</strong> = 7.000% + 0.8 (11.376% &ndash; 7.000%) = <strong>10.501%</strong><br>
      <strong>B Ltd.</strong> = 7.000% + 0.6 (11.376% &ndash; 7.000%) = <strong>9.626%</strong></p>
      </li>
    </ol>
  `
},

{
  question_id: "AFM_MTPAPR24II_Q4B",
  source: "ICAI Mock Test Paper - Series II, April 2024",
  chapter_name: "Mutual Funds",
  placement: 2,
  marks: 4,
  question_html: `
    <p> XYZ Plan, a hedge fund currently has assets of ₹ 40 crore. Mr. A, the manager of fund charges fee of 0.10% of portfolio asset. In addition to it he charges an incentive fee of 2%. The incentive will be linked to gross return each year in excess of the portfolio maximum value since the inception of fund. The maximum value the fund achieved so far since inception of fund about one and half year ago was ₹ 42 crores.</p>
    <p>Evaluate:</p>
    <ol type="i">
      <li>Benchmark Return to make Mr. A eligible for incentive fee.</li>
      <li>The fee payable to Mr. A if return on the fund this year turns out to be:
        <ol type="1">
          <li>29%</li>
          <li>4.5%</li>
        </ol>
      </li>
    </ol>
  `,
  solution_html: `
    
    <ol type="i">
      <li><strong>Benchmark Return</strong><br>
      = (42 crore - 40 crore) / 40 crore &times; 100%<br>
      = <strong>5%</strong></li>
      <br>
      
      <li><strong>Fee payable to Mr. A:</strong><br>
      <p><strong>(1) If return is 29%</strong></p>
      <div style="overflow-x:auto;">
        <table border="0" cellpadding="4" cellspacing="0" style="width: 100%; max-width: 500px;">
          <tbody>
            <tr>
              <td>Fixed fee (A) 0.10% of ₹ 40 crore</td>
              <td style="text-align: right;">₹ 4,00,000</td>
            </tr>
            <tr>
              <td>New Fund Value (1.29 &times; ₹ 40 crore)</td>
              <td style="text-align: right;">₹ 51.60 crore</td>
            </tr>
            <tr>
              <td>Excess Value of best achieved (51.60 crore &ndash; 42.00 crore)</td>
              <td style="text-align: right;">₹ 9.60 crore</td>
            </tr>
            <tr>
              <td>Incentive Fee (2% of 9.60 crores) (B)</td>
              <td style="text-align: right;">₹ 19,20,000</td>
            </tr>
            <tr style="font-weight: bold;">
              <td>Total Fee (A) + (B)</td>
              <td style="text-align: right;">₹ 23,20,000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br>
      
      <p><strong>(2) If return is 4.5%</strong></p>
      <div style="overflow-x:auto;">
        <table border="0" cellpadding="4" cellspacing="0" style="width: 100%; max-width: 500px;">
          <tbody>
            <tr>
              <td>Fixed (A) 0.10% of ₹ 40 crore</td>
              <td style="text-align: right;">₹ 4,00,000</td>
            </tr>
            <tr>
              <td>New Fund Value (1.045 &times; ₹ 40 crore)</td>
              <td style="text-align: right;">₹ 41.80 crore</td>
            </tr>
            <tr>
              <td>Excess Value of best achieved (41.80 crore &ndash; 42.00 crore)</td>
              <td style="text-align: right;">(₹ 0.20 crore)</td>
            </tr>
            <tr>
              <td>Incentive Fee (as does not exceed best achieved) (B)</td>
              <td style="text-align: right;">Nil</td>
            </tr>
            <tr style="font-weight: bold;">
              <td>Total Fee (A) + (B)</td>
              <td style="text-align: right;">₹ 4,00,000</td>
            </tr>
          </tbody>
        </table>
      </div>
      </li>
    </ol>
  `
},

{
  question_id: "AFM_MTPAPR24II_Q4C",
  source: "ICAI Mock Test Paper - Series II, April 2024",
  chapter_name: "Financial Policy and Corporate Strategy",
  placement: 3,
  marks: 4,
  question_html: `
    <p> What do you mean by Corporate Level Strategy. Also explain three basic questions Corporate Level Strategy should be able to answer.</p>
  `,
  solution_html: `
    
    <p>Corporate level strategy fundamentally is concerned with selection of businesses in which a company should compete and with the development and coordination of that portfolio of businesses.</p>
    <p><strong>Corporate level strategy should be able to answer three basic questions:</strong></p>
    
    <div style="overflow-x:auto;">
      <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%;">
        <tbody>
          <tr>
            <td style="font-weight: bold; width: 20%;">Suitability</td>
            <td>Whether the strategy would work for the accomplishment of common objective of the company.</td>
          </tr>
          <tr>
            <td style="font-weight: bold; width: 20%;">Feasibility</td>
            <td>Determines the kind and number of resources required to formulate and implement the strategy.</td>
          </tr>
          <tr>
            <td style="font-weight: bold; width: 20%;">Acceptability</td>
            <td>It is concerned with the stakeholders’ satisfaction and can be financial and non-financial.</td>
          </tr>
        </tbody>
      </table>
    </div>
  `
},
{
  question_id: "AFM_MTPAPR24II_Q5A",
  source: "ICAI Mock Test Paper - Series II, April 2024",
  chapter_name: "Mergers, Acquisitions and Corporate Restructuring",
  placement: 1,
  marks: 6,
  question_html: `
    <p> T plc wants to acquire L plc. The balance sheet of L plc as on 31st March 2022 is as follows:</p>
    
    <div style="overflow-x:auto;">
      <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%;">
        <thead>
          <tr>
            <th style="text-align: left;">Liabilities</th>
            <th style="text-align: right;">&pound;</th>
            <th style="text-align: left;">Assets</th>
            <th style="text-align: right;">&pound;</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Equity Capital (35,00,000 shares)</td>
            <td style="text-align: right;">35,00,000</td>
            <td>Cash</td>
            <td style="text-align: right;">2,50,000</td>
          </tr>
          <tr>
            <td>Retained earnings</td>
            <td style="text-align: right;">15,00,000</td>
            <td>Debtors</td>
            <td style="text-align: right;">3,50,000</td>
          </tr>
          <tr>
            <td>12% Debentures</td>
            <td style="text-align: right;">15,00,000</td>
            <td>Inventories</td>
            <td style="text-align: right;">10,00,000</td>
          </tr>
          <tr>
            <td>Creditors and other liabilities</td>
            <td style="text-align: right;">16,00,000</td>
            <td>Plants &amp; Eqpt.</td>
            <td style="text-align: right;">65,00,000</td>
          </tr>
          <tr style="font-weight: bold;">
            <td>Total</td>
            <td style="text-align: right;">81,00,000</td>
            <td>Total</td>
            <td style="text-align: right;">81,00,000</td>
          </tr>
        </tbody>
      </table>
    </div>
    <br>
    <p><strong>Additional Information:</strong></p>
    <ol type="i">
      <li>Shareholders of L plc will get one share in T plc for every two shares. External liabilities are expected to be settled at &pound; 2.50 Million. Shares of T plc would be issued at its current price of &pound; 1.50 per share. Debenture holders will get 13% convertible debentures in the purchasing company for the same amount. Debtors and inventories are expected to realize &pound; 1 Million.</li>
      <li>T plc has decided to operate the business of L plc as a separate division. The division is likely to give cash flows (after tax) to the extent of &pound; 2.50 Million per year for 6 years. T plc has planned that, after 6 years, this division would be demerged and disposed of for &pound; 1 Million.</li>
      <li>The company’s cost of capital is 16%.</li>
    </ol>
    <p>Advise the Board of the company about the financial feasibility of this acquisition.</p>
    <p>Net present values for 16% for &pound; 1 are as follows:</p>
    <div style="overflow-x:auto;">
      <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: center;">
        <tbody>
          <tr>
            <th>Years</th>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
          </tr>
          <tr>
            <th>PV</th>
            <td>0.862</td>
            <td>0.743</td>
            <td>0.641</td>
            <td>0.552</td>
            <td>0.476</td>
            <td>0.410</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  solution_html: `
    
    <p><strong>Calculation of Purchase Consideration</strong></p>
    <div style="overflow-x:auto;">
      <table border="0" cellpadding="4" cellspacing="0" style="width: 100%; max-width: 500px;">
        <tbody>
          <tr>
            <td>Issue of Share 17,50,000 x &pound;1.50</td>
            <td style="text-align: right;">26,25,000</td>
          </tr>
          <tr>
            <td>External Liabilities settled</td>
            <td style="text-align: right;">25,00,000</td>
          </tr>
          <tr>
            <td>13% Debentures</td>
            <td style="text-align: right;"><u>15,00,000</u></td>
          </tr>
          <tr>
            <td></td>
            <td style="text-align: right;"><strong>66,25,000</strong></td>
          </tr>
          <tr>
            <td colspan="2"><strong>Less:</strong> Realization of Debtors and Inventories</td>
          </tr>
          <tr>
            <td>Debtors &amp; Inventories</td>
            <td style="text-align: right;">(10,00,000)</td>
          </tr>
          <tr>
            <td>Cash</td>
            <td style="text-align: right;"><u>(2,50,000)</u></td>
          </tr>
          <tr style="font-weight: bold;">
            <td>Net Cash Outflow</td>
            <td style="text-align: right;">&pound; 53,75,000</td>
          </tr>
        </tbody>
      </table>
    </div>
    <br>
    <p>Net Present Value = PV of Cash Inflow + PV of Demerger of L plc &ndash; Cash Outflow<br>
    = &pound; 25,00,000 &times; PVAF(16%, 6) + &pound; 10,00,000 &times; PVF(16%, 6) &ndash; &pound; 53,75,000<br>
    = &pound; 25,00,000 &times; 3.684 + &pound; 10,00,000 &times; 0.410 &ndash; &pound; 53,75,000<br>
    = &pound; 92,10,000 + &pound; 4,10,000 &ndash; &pound; 53,75,000<br>
    = <strong>&pound; 42,45,000</strong></p>
    <br>
    <p>Since NPV of the decision is positive it is advantageous to acquire L plc.</p>
  `
},
{
  question_id: "AFM_MTPAPR24II_Q5B",
  source: "ICAI Mock Test Paper - Series II, April 2024",
  chapter_name: "Mutual Funds",
  placement: 2,
  marks: 8,
  question_html: `
    <p> A mutual fund company introduces two schemes i.e. Dividend plan (Plan-D) and Bonus plan (Plan-B). The face value of the unit is ₹ 10. On 1-4-2018 Mr. K invested ₹ 2,00,000 each in Plan-D and Plan-B when the NAV was ₹ 38.20 and ₹ 35.60 respectively. Both the plans matured on 31-3-2023.</p>
    <p>Particulars of dividend and bonus declared over the period are as follows:</p>
    <div style="overflow-x:auto;">
      <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: center;">
        <thead>
          <tr>
            <th>Date</th>
            <th>Dividend %</th>
            <th>Bonus Ratio</th>
            <th colspan="2">Net Asset Value (₹)</th>
          </tr>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th>Plan D</th>
            <th>Plan B</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>30-09-2018</td>
            <td>10</td>
            <td>--</td>
            <td>39.10</td>
            <td>35.60</td>
          </tr>
          <tr>
            <td>30-06-2019</td>
            <td>--</td>
            <td>1:5</td>
            <td>41.15</td>
            <td>36.25</td>
          </tr>
          <tr>
            <td>31-03-2020</td>
            <td>15</td>
            <td>--</td>
            <td>44.20</td>
            <td>33.10</td>
          </tr>
          <tr>
            <td>15-09-2021</td>
            <td>13</td>
            <td>--</td>
            <td>45.05</td>
            <td>37.25</td>
          </tr>
          <tr>
            <td>30-10-2021</td>
            <td>--</td>
            <td>1:8</td>
            <td>42.70</td>
            <td>38.30</td>
          </tr>
          <tr>
            <td>27-03-2022</td>
            <td>16</td>
            <td>--</td>
            <td>44.80</td>
            <td>39.10</td>
          </tr>
          <tr>
            <td>11-04-2022</td>
            <td>--</td>
            <td>1:10</td>
            <td>40.25</td>
            <td>38.90</td>
          </tr>
          <tr>
            <td>31-03-2023</td>
            <td>--</td>
            <td>--</td>
            <td>40.40</td>
            <td>39.70</td>
          </tr>
        </tbody>
      </table>
    </div>
    <br>
    <p>Evaluate the Effective Yield Per Annum in respect of the above two plans.</p>
    <p><strong>Note:</strong><br>
    1. Use following PV Factors:<br>
    PVIF (2%,5) = 0.9057, PVIF (4%,5) = 0.8219, PVIF (8%,5) = 0.6806, PVIF (13%,5) = 0.5428<br>
    2. Round off calculations upto 2 decimal points.</p>
  `,
  solution_html: `
    
    
    <p><strong><u>Plan &ndash; D</u></strong></p>
    <p>Units acquired = 2,00,000 / 38.20 = <strong>5235.60</strong></p>
    <div style="overflow-x:auto;">
      <table border="1" cellpadding="6" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: center;">
        <thead>
          <tr>
            <th>Date</th>
            <th>Units held</th>
            <th>Dividend %</th>
            <th>Amount (₹)</th>
            <th>Reinvestment Rate (₹)</th>
            <th>New Units</th>
            <th>Total Units</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01.04.2018</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>5235.60</td>
          </tr>
          <tr>
            <td>30.09.2018</td>
            <td>5235.60</td>
            <td>10</td>
            <td>5235.60</td>
            <td>39.10</td>
            <td>133.90</td>
            <td>5369.50</td>
          </tr>
          <tr>
            <td>31.03.2020</td>
            <td>5369.50</td>
            <td>15</td>
            <td>8054.25</td>
            <td>44.20</td>
            <td>182.22</td>
            <td>5551.72</td>
          </tr>
          <tr>
            <td>15.09.2021</td>
            <td>5551.72</td>
            <td>13</td>
            <td>7217.24</td>
            <td>45.05</td>
            <td>160.20</td>
            <td>5711.92</td>
          </tr>
          <tr>
            <td>27.03.2022</td>
            <td>5711.92</td>
            <td>16</td>
            <td>9139.07</td>
            <td>44.80</td>
            <td>204.00</td>
            <td>5915.92</td>
          </tr>
        </tbody>
      </table>
    </div>
    <br>
    <p>31.03.2023 Maturity Value (₹ 40.40 &times; 5915.92) = <strong>₹ 2,39,003.17</strong><br>
    Less: Cost of Acquisition = ₹ 2,00,000.00<br>
    <strong>Total Gain = ₹ 39,003.17</strong></p>
    
    <p>&therefore; Approximate Effective Yield = (₹ 39,003.17 / ₹ 2,00,000) &times; (1 / 5) &times; 100 = <strong>3.90%</strong></p>
    
    <p>Now more accurate effective yield can be computed by using the IRR method as follows:<br>
    NPV at 4% = - ₹ 2,00,000 + ₹ 1,96,436.71 = - ₹ 3,563.29<br>
    NPV at 2% = - ₹ 2,00,000 + ₹ 2,16,465.17 = ₹ 16,465.17</p>
    <p>IRR = LR + [ NPV at LR / (NPV at LR - NPV at HR) ] &times; (HR - LR)<br>
    = 2% + [ 16465.17 / (16465.17 &ndash; (-3563.29)) ] &times; (4% - 2%)<br>
    = <strong>3.64%</strong></p>
    
    <hr style="margin: 20px 0;">
    
    <p><strong><u>Plan &ndash; B</u></strong></p>
    <div style="overflow-x:auto;">
      <table border="1" cellpadding="6" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
        <thead>
          <tr>
            <th>Date</th>
            <th>Particulars</th>
            <th>Calculation Working</th>
            <th>No. of Units</th>
            <th>NAV (₹)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01.04.2018</td>
            <td>Investment</td>
            <td>₹ 2,00,000 / 35.60 =</td>
            <td>5617.98</td>
            <td>35.60</td>
          </tr>
          <tr>
            <td>30.06.2019</td>
            <td>Bonus</td>
            <td>5617.98 / 5 =</td>
            <td><u>1123.60</u><br>6741.58</td>
            <td>36.25</td>
          </tr>
          <tr>
            <td>30.10.2021</td>
            <td>Bonus</td>
            <td>6741.58 / 8 =</td>
            <td><u>842.70</u><br>7584.28</td>
            <td>38.30</td>
          </tr>
          <tr>
            <td>11.04.2022</td>
            <td>Bonus</td>
            <td>7584.28 / 10 =</td>
            <td><u>758.43</u><br>8342.71</td>
            <td>38.90</td>
          </tr>
          <tr>
            <td>31.03.2023</td>
            <td>Maturity Value</td>
            <td>8342.71 &times; ₹ 39.70 =</td>
            <td></td>
            <td><strong>3,31,205.59</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
    <br>
    <p>Less: Investment = ₹ 2,00,000.00<br>
    <strong>Gain = ₹ 1,31,205.59</strong></p>
    
    <p>&therefore; Approximate Effective Yield = (1,31,205.59 / 2,00,000) &times; (1 / 5) &times; 100 = <strong>13.12%</strong></p>
    
    <p>Now more accurate effective yield can be computed by using the IRR method as follows:<br>
    NPV at 13% = - ₹ 2,00,000 + ₹ 1,79,778.39 = - ₹ 20,221.61<br>
    NPV at 8% = - ₹ 2,00,000 + ₹ 2,25,418.52 = ₹ 25,418.52</p>
    <p>IRR = LR + [ NPV at LR / (NPV at LR - NPV at HR) ] &times; (HR - LR)<br>
    = 8% + [ 25418.52 / (25418.52 &ndash; (-20221.61)) ] &times; (13% - 8%)<br>
    = <strong>10.78%</strong></p>
  `
},
{
  question_id: "AFM_MTPAPR24II_Q6A",
  source: "ICAI Mock Test Paper - Series II, April 2024",
  chapter_name: "Advanced Capital Budgeting Decisions",
  placement: 1,
  marks: 8,
  question_html: `
    <p> R Ltd. is considering a project with the following Cash flows:</p>
    <p style="text-align: right; padding-right: 20px;">in ₹</p>
    <div style="overflow-x:auto;">
      <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: center;">
        <thead>
          <tr>
            <th>Years</th>
            <th>Cost of Plant</th>
            <th>Recurring Cost</th>
            <th>Savings</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0</td>
            <td>20,00,000</td>
            <td>&mdash;</td>
            <td>&mdash;</td>
          </tr>
          <tr>
            <td>1</td>
            <td>&mdash;</td>
            <td>8,000</td>
            <td>24,000</td>
          </tr>
          <tr>
            <td>2</td>
            <td>&mdash;</td>
            <td>10,000</td>
            <td>28,000</td>
          </tr>
        </tbody>
      </table>
    </div>
    <br>
    <p>The cost of capital is 9%.</p>
    <p>Evaluate the sensitivity of the project in respect of all factors except time such that:</p>
    <ol type="i">
      <li>NPV become zero and</li>
      <li>adversely varying factors value by 10%.</li>
    </ol>
    <p>The P.V. factor at 9% are as under:</p>
    <div style="overflow-x:auto;">
      <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 50%; max-width: 300px; text-align: center;">
        <thead>
          <tr>
            <th>Year</th>
            <th>Factor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0</td>
            <td>1</td>
          </tr>
          <tr>
            <td>1</td>
            <td>0.917</td>
          </tr>
          <tr>
            <td>2</td>
            <td>0.842</td>
          </tr>
        </tbody>
      </table>
    </div>
    <br>
    <p><em>Note: Round off calculation upto 2 decimal points.</em></p>
  `,
  solution_html: `
    
    <p><strong>Working Note: Base Case Net Present Value (NPV) Calculation</strong></p>
    <ul>
      <li><strong>Year 0 Outflow (Plant Cost):</strong> ₹ 20,000 &times; 1 = (₹ 20,000)</li>
      <li><strong>Year 1 Present Values:</strong><br>
        &bull; Recurring Cost = ₹ 8,000 &times; 0.917 = (₹ 7,336)<br>
        &bull; Savings = ₹ 24,000 &times; 0.917 = ₹ 22,008
      </li>
      <li><strong>Year 2 Present Values:</strong><br>
        &bull; Recurring Cost = ₹ 10,000 &times; 0.842 = (₹ 8,420)<br>
        &bull; Savings = ₹ 28,000 &times; 0.842 = ₹ 23,576
      </li>
    </ul>
    <p><strong>Summary of Present Values:</strong><br>
    &bull; Total PV of Savings = ₹ 22,008 + ₹ 23,576 = ₹ 45,584<br>
    &bull; Total PV of Recurring Costs = ₹ 7,336 + ₹ 8,420 = ₹ 15,756<br>
    &bull; PV of Outflow = ₹ 20,000<br>
    <strong>Base NPV</strong> = PV of Savings &minus; PV of Recurring Costs &minus; PV of Outflow<br>
    = ₹ 45,584 &minus; ₹ 15,756 &minus; ₹ 20,000 = <strong>₹ 9,828</strong></p>
    <br>

    <ol type="i">
      <li><strong>Sensitivity Analysis (by making NPV Zero)</strong><br><br>
        <ul>
          <li><strong>(1) Increase of Plant Value by ₹ 9,828:</strong><br>
            Percentage Change = (9,828 / 20,000) &times; 100 = <strong>49.14%</strong>
          </li>
          <br>
          <li><strong>(2) Increase of Running Cost by ₹ 9,828:</strong><br>
            Percentage Change = 9,828 / (7,336 + 8,420) = 9,828 / 15,756 &times; 100 = <strong>62.38%</strong>
          </li>
          <br>
          <li><strong>(3) Fall in Savings by ₹ 9,828:</strong><br>
            Percentage Change = 9,828 / (22,008 + 23,576) = 9,828 / 45,584 &times; 100 = <strong>21.56%</strong>
          </li>
        </ul>
        <br>
        <p><em>Conclusion: Savings factor is the most sensitive to affect the acceptability of the project as in comparison of other two factors a slight % change in this factor shall more affect the NPV than others.</em></p>
      </li>
      <br>

      <li><strong>Sensitivity Analysis if there is a variation of 10% in the factors:</strong><br><br>
        <ul>
          <li><strong>(1) If the initial project cost is varied adversely by 10%:</strong><br>
            Revised Outflow = ₹ 20,000 &times; 1.10 = ₹ 22,000<br>
            NPV (Revised) = ₹ 9,828 &minus; ₹ 2,000 = ₹ 7,828<br>
            Percentage Change in NPV = (₹ 9,828 &minus; ₹ 7,828) / ₹ 9,828 = <strong>20.35%</strong>
          </li>
          <br>
          <li><strong>(2) If Annual Running Cost is varied adversely by 10%:</strong><br>
            NPV (Revised) = ₹ 9,828 &minus; (₹ 800 &times; 0.917) &minus; (₹ 1,000 &times; 0.842)<br>
            = ₹ 9,828 &minus; ₹ 733.60 &minus; ₹ 842.00 = ₹ 8,252.40<br>
            Percentage Change in NPV = (₹ 9,828 &minus; ₹ 8,252.40) / ₹ 9,828 = <strong>16.03%</strong>
          </li>
          <br>
          <li><strong>(3) If Savings are varied adversely by 10%:</strong><br>
            NPV (Revised) = ₹ 9,828 &minus; (₹ 2,400 &times; 0.917) &minus; (₹ 2,800 &times; 0.842)<br>
            = ₹ 9,828 &minus; ₹ 2,200.80 &minus; ₹ 2,357.60 = ₹ 5,269.60<br>
            Percentage Change in NPV = (₹ 9,828 &minus; ₹ 5,269.60) / ₹ 9,828 &times; 100% = <strong>46.38%</strong>
          </li>
        </ul>
        <br>
        <p><em>Conclusion: Savings factor is the most sensitive to affect the acceptability of the project.</em></p>
      </li>
    </ol>
  `
},
{
  question_id: "AFM_MTPAPR24II_Q6B",
  source: "ICAI Mock Test Paper - Series II, April 2024",
  chapter_name: "Interest Rate Risk Management",
  placement: 2,
  marks: 6,
  question_html: `
    <p> Bank entered a plain vanilla swap through on OIS (Overnight Index Swap) on a principal of ₹ 20 crores and agreed to receive MIBOR overnight floating rate for a fixed payment on the principal. The swap was entered into on Monday, 2nd August 2020 and was to commence on 3rd August 2020 and run for a period of 7 days.</p>
    <p>Respective MIBOR rates for Tuesday to Monday were:<br>
    7.75%, 8.15%, 8.12%, 7.95%, 7.98% and 8.15%.</p>
    <p>If Bank received ₹ 634 net on settlement, calculate the applicable Fixed rate for the same swap period.</p>
    <p><em>Notes:<br>
    (i) Sunday is Holiday.<br>
    (ii) Work in rounded rupees and avoid decimal working.<br>
    (iii) Consider 365 days a year.</em></p>
  `,
  solution_html: `
    
    
    <div style="overflow-x:auto;">
      <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: center;">
        <thead>
          <tr>
            <th>Day</th>
            <th>Principal (₹)</th>
            <th>MIBOR (%)</th>
            <th>Interest (₹)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align: left;">Tuesday</td>
            <td>20,00,00,000</td>
            <td>7.75</td>
            <td>42,466</td>
          </tr>
          <tr>
            <td style="text-align: left;">Wednesday</td>
            <td>20,00,42,466</td>
            <td>8.15</td>
            <td>44,667</td>
          </tr>
          <tr>
            <td style="text-align: left;">Thursday</td>
            <td>20,00,87,133</td>
            <td>8.12</td>
            <td>44,513</td>
          </tr>
          <tr>
            <td style="text-align: left;">Friday</td>
            <td>20,01,31,646</td>
            <td>7.95</td>
            <td>43,590</td>
          </tr>
          <tr>
            <td style="text-align: left;">Saturday &amp; Sunday (*)</td>
            <td>20,01,75,236</td>
            <td>7.98</td>
            <td>87,529</td>
          </tr>
          <tr>
            <td style="text-align: left;">Monday</td>
            <td>20,02,62,765</td>
            <td>8.15</td>
            <td>44,716</td>
          </tr>
          <tr style="font-weight: bold;">
            <td style="text-align: left;" colspan="3">Total Interest @ Floating</td>
            <td>3,07,481</td>
          </tr>
        </tbody>
      </table>
    </div>
    <br>
    <p><em>(*) Note: Saturday &amp; Sunday interest covers two days on the compounded principal balance at Friday's closing MIBOR rate.</em></p>
    <br>

    <div style="overflow-x:auto;">
      <table border="0" cellpadding="4" cellspacing="0" style="width: 100%; max-width: 500px;">
        <tbody>
          <tr>
            <td>Total Interest under Floating rate</td>
            <td style="text-align: right;">₹ 3,07,481</td>
          </tr>
          <tr>
            <td>Less: Net Amount Received by Bank</td>
            <td style="text-align: right;">₹ 634</td>
          </tr>
          <tr style="font-weight: bold;">
            <td>Expected Interest under Fixed rate</td>
            <td style="text-align: right;">₹ 3,06,847</td>
          </tr>
        </tbody>
      </table>
    </div>
    <br>

    <p><strong>Calculation of Fixed Rate of Interest:</strong></p>
    <p>Fixed Interest = Principal &times; Fixed Rate &times; (Days / 365)<br>
    ₹ 3,06,847 = ₹ 20,00,00,000 &times; Fixed Rate &times; (7 / 365)<br>
    Fixed Rate = (3,06,847 &times; 365) / (20,00,00,000 &times; 7)<br>
    Fixed Rate = 111,999,155 / 1,400,00,000<br>
    Fixed Rate = 0.079999... or <strong>0.08</strong></p>
    
    <p>Thus, Fixed Rate of Interest shall be approx. <strong>8% p.a.</strong></p>
  `
},
{
  question_id: "AFM_MTPSEP24I_Q1A",
  source: "ICAI Mock Test Paper - Series I, September 2024",
  chapter_name: "Value at Risk (VaR)",
  placement: 1,
  marks: 8,
  question_html: `
    <p> On Tuesday morning (before opening of the capital market) an investor, while going through his bank statement, has observed that an amount of ₹ 7 lakhs is lying in his bank account. This amount is available for use from Tuesday till Friday. The Bank requires a minimum balance of ₹ 1,000 all the time. The investor desires to take a maximum possible exposure in the market where Value at Risk (VaR) should not exceed the balance lying in his bank account. The standard deviation of index of the same market is 1.5% per day. The required confidence level is 99%.</p>

    <p><strong>Given:</strong></p>

    <div style="overflow-x:auto;">
      <table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse;width:100%;text-align:center;">
        <thead>
          <tr>
            <th>z</th>
            <th>0.00</th>
            <th>0.01</th>
            <th>0.02</th>
            <th>0.03</th>
            <th>0.04</th>
            <th>0.05</th>
            <th>0.06</th>
            <th>0.07</th>
            <th>0.08</th>
            <th>0.09</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>2.2</strong></td>
            <td>.9861</td>
            <td>.9864</td>
            <td>.9868</td>
            <td>.9871</td>
            <td>.9875</td>
            <td>.9878</td>
            <td>.9881</td>
            <td>.9884</td>
            <td>.9887</td>
            <td>.9890</td>
          </tr>
          <tr>
            <td><strong>2.3</strong></td>
            <td>.9893</td>
            <td>.9896</td>
            <td>.9898</td>
            <td>.9901</td>
            <td>.9904</td>
            <td>.9906</td>
            <td>.9909</td>
            <td>.9911</td>
            <td>.9913</td>
            <td>.9916</td>
          </tr>
          <tr>
            <td><strong>2.4</strong></td>
            <td>.9918</td>
            <td>.9920</td>
            <td>.9922</td>
            <td>.9923</td>
            <td>.9925</td>
            <td>.9929</td>
            <td>.9931</td>
            <td>.9932</td>
            <td>.9934</td>
            <td>.9936</td>
          </tr>
        </tbody>
      </table>
    </div>

    <br>

    <p>You are required to determine the maximum possible exposure investor can take in the market.</p>
  `,
  solution_html: `
    

    <div style="overflow-x:auto;">
      <table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse;width:100%;">
        <thead>
          <tr>
            <th style="text-align:left;">Particulars</th>
            <th style="text-align:right;">Amount (₹)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Amount available in bank account</td>
            <td style="text-align:right;">7,00,000</td>
          </tr>
          <tr>
            <td>Minimum balance to be kept</td>
            <td style="text-align:right;">1,000</td>
          </tr>
          <tr>
            <td>Available amount which can be used for potential exposure in market for 4 days</td>
            <td style="text-align:right;">6,99,000</td>
          </tr>
          <tr>
            <td>Maximum Loss for 4 days at 99% level</td>
            <td style="text-align:right;">6,99,000</td>
          </tr>
          <tr>
            <td>Maximum Loss for 1 day at 99% level = Maximum Loss for 4 days / √No. of days = 6,99,000 / √4</td>
            <td style="text-align:right;">3,49,500</td>
          </tr>
          <tr>
            <td>Z Score at 99% Level</td>
            <td style="text-align:right;">2.33</td>
          </tr>
          <tr>
            <td>Volatility in terms of Rupees (Maximum Loss / Z Score at 99% level) = 3,49,500 / 2.33</td>
            <td style="text-align:right;">1,50,000</td>
          </tr>
          <tr>
            <td>Maximum Possible Exposure (Volatility in Rupees / Standard Deviation) = 1,50,000 / 0.015</td>
            <td style="text-align:right;"><strong>1,00,00,000</strong></td>
          </tr>
        </tbody>
      </table>
    </div>

    <br>

    <p><strong>Maximum Possible Exposure = ₹ 1,00,00,000</strong></p>
  `
},
{
  question_id: "AFM_MTPSEP24I_Q1B",
  source: "ICAI Mock Test Paper - Series I, September 2024",
  chapter_name: "Dividend Valuation Model (Multi-Stage Growth Model)",
  placement: 1,
  marks: 2,
  question_html: `
    <p> MNP Ltd. has declared and paid annual dividend of ₹ 4 per share. It is expected to grow @ 20% for the next two years and 10% thereafter. The required rate of return of equity investors is 15%.</p>

    <p>Compute the current price at which equity shares should sell.</p>

    <p><em>Note: Use PVF upto 4 decimal points and round off calculation upto 2 decimal points.</em></p>
  `,
  solution_html: `
    

    <p>
      D<sub>0</sub> = ₹ 4
    </p>

    <p>
      D<sub>1</sub> = ₹ 4 × (1.20) = <strong>₹ 4.80</strong>
    </p>

    <p>
      D<sub>2</sub> = ₹ 4 × (1.20)<sup>2</sup> = <strong>₹ 5.76</strong>
    </p>

    <p>
      D<sub>3</sub> = ₹ 4 × (1.20)<sup>2</sup> × (1.10) = <strong>₹ 6.34</strong>
    </p>

    <p>
      Terminal Value (TV) =
      <strong>D<sub>3</sub> / (K<sub>e</sub> − g)</strong>
    </p>

    <p>
      = 6.34 / (0.15 − 0.10)
    </p>

    <p>
      = <strong>₹ 126.80</strong>
    </p>

    <p>
      P =
      D<sub>1</sub>/(1 + K<sub>e</sub>)
      +
      D<sub>2</sub>/(1 + K<sub>e</sub>)<sup>2</sup>
      +
      TV/(1 + K<sub>e</sub>)<sup>2</sup>
    </p>

    <p>
      = 4.80/(1 + 0.15)
      +
      5.76/(1 + 0.15)<sup>2</sup>
      +
      126.80/(1 + 0.15)<sup>2</sup>
    </p>

    <p>
      = ₹ 4.80 × 0.8696
      + ₹ 5.76 × 0.7561
      + ₹ 126.80 × 0.7561
    </p>

    <div style="overflow-x:auto;">
      <table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse;width:100%;">
        <thead>
          <tr>
            <th style="text-align:left;">Particulars</th>
            <th style="text-align:right;">Amount (₹)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Present Value of D₁</td>
            <td style="text-align:right;">4.17</td>
          </tr>
          <tr>
            <td>Present Value of D₂</td>
            <td style="text-align:right;">4.36</td>
          </tr>
          <tr>
            <td>Present Value of Terminal Value</td>
            <td style="text-align:right;">95.87</td>
          </tr>
          <tr style="font-weight:bold;">
            <td>Current Price of Equity Share</td>
            <td style="text-align:right;">104.40</td>
          </tr>
        </tbody>
      </table>
    </div>

    <br>

    <p><strong>Current Price of Equity Share = ₹ 104.40</strong></p>
  `
},
{
  question_id: "AFM_MTPSEP24I_Q1C",
  source: "ICAI Mock Test Paper - Series I, September 2024",
  chapter_name: "Venture Capital Financing",
  placement: 1,
  marks: 4,
  question_html: `
    <p> Explain the concept of Unicorn.</p>
  `,
  solution_html: `
    

    <p>A <strong>Unicorn</strong> is a privately held start-up company which has achieved a valuation of <strong>US$ 1 billion</strong>. This term was coined by venture capitalist <strong>Aileen Lee</strong>, first time in 2013. Unicorn, a mythical animal, represents the statistical rarity of successful ventures.</p>

    <p>A start-up is referred as a Unicorn if it has following features:</p>

    <ol type="i">
      <li>A privately held start-up.</li>
      <li>Valuation of start-up reaches <strong>US$ 1 Billion</strong>.</li>
      <li>Emphasis is on the rarity of success of such start-up.</li>
      <li>Other common features are new ideas, disruptive innovation, consumer focus, high on technology etc.</li>
    </ol>

    <p>However, it is important to note that in case the valuation of any start-up slips below <strong>US$ 1 billion</strong>, it can lose its status of <strong>'Unicorn'</strong>. Hence, a start-up may be Unicorn at one point of time and may not be at another point of time.</p>

    <p>In September 2011, <strong>InMobi</strong>, an ad-tech startup, became the first Unicorn of India. SoftBank invested <strong>US$ 200 million</strong> in InMobi valuing the mobile advertising company at over <strong>US$ 1 billion</strong>, making it India's first unicorn. InMobi was founded in 2007 and took four years to achieve the Unicorn status in 2011.</p>

    <p>In 2018, <strong>Udaan</strong>, a B2B e-commerce marketplace, became the fastest growing startup by becoming a Unicorn in just over two years' time.</p>
  `
},
{
  question_id: "AFM_MTPSEP24I_Q2A",
  source: "ICAI Mock Test Paper - Series I, September 2024",
  chapter_name: "Foreign Exchange Risk Management",
  placement: 2,
  marks: 6,
  question_html: `
    <p> Mr. H as Treasure for your bank working under you sold HK$ 10 million value Spot to your customer at ₹ 10.53/ HK$ and covered yourself in the London market on the same day when the exchange rates were:</p>

    <p><strong>US$ 1 = H.K.$ 7.8880 / 7.8920</strong></p>

    <p><strong>Local interbank market rates for US$ were:</strong></p>

    <p><strong>Spot US$ 1 = ₹ 82.70 / 82.85</strong></p>

    <p><strong>Required:</strong></p>

    <ol type="i">
      <li>Calculate Cover Rate.</li>
      <li>Calculate Profit or loss in the transaction.</li>
      <li>Do you agree with the views of the Internal Auditor that Mr. H has a speculative nature?</li>
    </ol>

    <p><em>Note: Ignore brokerage.</em></p>
  `,
  solution_html: `
    

    <p><strong>(i) Calculation of Cover Rate</strong></p>

    <p>
      <strong>Rupee – Dollar Selling Rate</strong> = ₹ 82.85
    </p>

    <p>
      <strong>Dollar – Hong Kong Dollar Buying Rate</strong> = HK$ 7.8880
    </p>

    <p>
      <strong>Hong Kong Dollar (Selling) Cross Rate</strong>
    </p>

    <p>
      = ₹ 82.85 ÷ 7.8880
    </p>

    <p>
      = <strong>₹ 10.5033 per HK$</strong>
    </p>

    <br>

    <p><strong>(ii) Profit / Loss to the Bank</strong></p>

    <div style="overflow-x:auto;">
      <table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse;width:100%;">
        <thead>
          <tr>
            <th style="text-align:left;">Particulars</th>
            <th style="text-align:right;">Amount (₹)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Amount received from customer (HK$ 10 million × ₹ 10.55)</td>
            <td style="text-align:right;">10,55,00,000</td>
          </tr>
          <tr>
            <td>Amount paid on cover deal (HK$ 10 million × ₹ 10.5033)</td>
            <td style="text-align:right;">10,50,33,000</td>
          </tr>
          <tr style="font-weight:bold;">
            <td>Profit to Bank</td>
            <td style="text-align:right;">₹ 4,67,000</td>
          </tr>
        </tbody>
      </table>
    </div>

    <br>

    <p><strong>(iii) Comment on Internal Auditor's Observation</strong></p>

    <p>
      To some extent, we agree with the views of the Internal Auditor as the gain on the same transaction is bit lesser keeping in view the amount involved.
    </p>
  `
},
{
  question_id: "AFM_MTPSEP24I_Q2B",
  source: "ICAI Mock Test Paper - Series I, September 2024",
  chapter_name: "Real Options Analysis",
  placement: 2,
  marks: 4,
  question_html: `
    <p> PFL is already in production of Fertilizer is considering a proposal of building a new plant to produce pesticides. The Net Present Value of proposal is ₹ 200 crore without the abandonment option.</p>

    <p>However, if market conditions for pesticide turns out to be favourable the NPV of proposal shall increase by 30%. On the other hand, market conditions remain sluggish the NPV of the proposal shall be reduced by 40%. In case company is not interested in continuation of the project it can be disposed of for ₹ 160 crore.</p>

    <p>If the risk-free rate of interest is 8% then what will be value of abandonment option.</p>
  `,
  solution_html: `
    

    <p><strong>Decision Tree showing Payoff</strong></p>

    <div style="overflow-x:auto;">
      <table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse; width:100%; text-align:center;">
        <thead>
          <tr>
            <th>Year 0</th>
            <th>Year 1</th>
            <th>Payoff (₹ Crore)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowspan="2">200</td>
            <td>260</td>
            <td>0</td>
          </tr>
          <tr>
            <td>120</td>
            <td>160 − 120 = 40</td>
          </tr>
        </tbody>
      </table>
    </div>

    <br>

    <p>First of all we shall calculate probability of high demand (<strong>p</strong>) using risk neutral method as follows:</p>

    <p>
      8% = p × 30% + (1 − p) × (−40%)
    </p>

    <p>
      0.08 = 0.30p − 0.40 + 0.40p
    </p>

    <p>
      p = 0.48 / 0.70 = <strong>0.686</strong>
    </p>

    <br>

    <p><strong>Value of Abandonment Option</strong></p>

    <p>
      Expected Payoff at Year 1
    </p>

    <p>
      = p × 0 + [(1 − p) × 40]
    </p>

    <p>
      = 0.686 × 0 + (0.314 × 40)
    </p>

    <p>
      = <strong>₹ 12.56 crore</strong>
    </p>

    <p>
      Since expected payoff at Year 1 is ₹ 12.56 crore, Present Value of expected payoff will be:
    </p>

    <p>
      = 12.56 / 1.08
    </p>

    <p>
      = <strong>₹ 11.63 crore</strong>
    </p>

    <br>

    <p>Therefore, the <strong>value of abandonment option (Put Option)</strong> is:</p>

    <p><strong>₹ 11.63 crore</strong></p>
  `
},

{
  question_id: "AFM_MTPSEP24I_Q2C",
  source: "ICAI Mock Test Paper - Series I, September 2024",
  chapter_name: "Mutual Funds",
  placement: 2,
  marks: 4,
  question_html: `
    <p> Explain the various Qualitative factors that need to be taken into account in addition to Quantitative Factors to evaluate the performance of any Mutual Fund.</p>
  `,
  solution_html: `
    

    <p>Some of the <strong>Qualitative factors</strong> that need to be taken into account in addition to Quantitative Factors are as follows:</p>

    <ol>
      <li>
        <strong>Quality of Portfolio:</strong>
        <p>Quality of stocks and securities in the portfolio of the Mutual Funds is an important qualitative parameter. The reason is that the quality of the portfolio plays a big role in achieving superior returns.</p>

        <p>The qualitative characteristic of portfolio of Equity Mutual Fund involves allocation of funds in top Blue-chip companies, large companies and how diversified is the portfolio. The style followed can be growth, value or blend of the same.</p>

        <p>In Debt Funds, the quality of portfolio is measured on the basis of credit quality, average maturity and modified duration of the fixed asset securities.</p>

        <p>Not only that it is necessary that Mutual Fund should hold good quality stocks or securities, but it is also necessary the investment should be as per the objective of the Fund. Under normal circumstances, the fund having lower Portfolio Turnover Ratio is considered to be better.</p>
      </li>

      <li>
        <strong>Track Record and Competence of Fund Manager:</strong>
        <p>Since Fund Manager decides about the selection of securities and takes investment decisions, his/her competence and conviction plays a very big role. The competence of a Fund Manager is assessed from his/her knowledge and ability to manage in addition to past performance.</p>
      </li>

      <li>
        <strong>Credibility of Fund House Team:</strong>
        <p>Team of Fund House also plays a big role towards the investors' interest. In addition to investment decisions, there are some other administrative tasks also such as redemption of units, crediting of dividend, providing adequate information etc. which play a crucial role in qualitative assessment of any Mutual Fund House.</p>
      </li>
    </ol>
  `
},

{
  question_id: "AFM_MTPSEP24I_Q3A",
  source: "ICAI Mock Test Paper - Series I, September 2024",
  chapter_name: "Portfolio Management",
  placement: 1,
  marks: 6,
  question_html: `
    <p> Mr. A owns a portfolio with the following characteristics:</p>
    
    <table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%;">
      <thead>
        <tr>
          <th style="text-align: left;">Particulars</th>
          <th style="text-align: center;">Security X</th>
          <th style="text-align: center;">Security Y</th>
          <th style="text-align: center;">Risk Free security</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Factor 1 sensitivity (&lambda;<sub>1</sub>)</td>
          <td style="text-align: center;">0.80</td>
          <td style="text-align: center;">1.50</td>
          <td style="text-align: center;">0</td>
        </tr>
        <tr>
          <td>Factor 2 sensitivity (&lambda;<sub>2</sub>)</td>
          <td style="text-align: center;">0.60</td>
          <td style="text-align: center;">1.20</td>
          <td style="text-align: center;">0</td>
        </tr>
        <tr>
          <td>Expected Return*</td>
          <td style="text-align: center;">15%</td>
          <td style="text-align: center;">20%</td>
          <td style="text-align: center;">10%</td>
        </tr>
      </tbody>
    </table>
    
    <p><em>* Generated by a two-factor model.</em></p>
    
    <p><strong>Required:</strong></p>
    <ol style="list-style-type: lower-roman;">
      <li>Compute the sensitivity of Mr. A&rsquo;s portfolio to the two factors if Mr. A has ₹ 3,00,000 to invest and sells short ₹ 1,50,000 of security Y and purchases ₹ 4,50,000 of security X.</li>
      <li>Compute the sensitivity of the portfolio to the two factors if Mr. A borrows ₹ 3,00,000 at the risk free rate and invests the amount he borrows along with the original amount of ₹ 3,00,000 in security X and Y in the same proportion as described in part (i).</li>
      <li>Suppose Mr. D, one of the friend of Mr. A says the expected return premium of factor 2 is zero. Do you agree with this statement. Substantiate your answer with required calculations.</li>
    </ol>
  `,
  solution_html: `
    

    <ol style="list-style-type: lower-roman;">
      <li>
        <p>Mr. A&rsquo;s position in the two securities are +1.50 in security X and -0.50 in security Y. Hence the portfolio sensitivities to the two factors:</p>
        <p>&lambda;<sub>1</sub> = 1.50 &times; 0.80 + (-0.50 &times; 1.50) = 0.45</p>
        <p>&lambda;<sub>2</sub> = 1.50 &times; 0.60 + (-0.50 &times; 1.20) = 0.30</p>
      </li>

      <li>
        <p>Mr. A&rsquo;s revised position:</p>
        <ul>
          <li>Security X = ₹ 9,00,000 / ₹ 3,00,000 = 3</li>
          <li>Security Y = -₹ 3,00,000 / ₹ 3,00,000 = -1</li>
          <li>Risk free asset = -₹ 3,00,000 / ₹ 3,00,000 = -1</li>
        </ul>
        <p>&lambda;<sub>1</sub> = 3.0 &times; 0.80 + (-1 &times; 1.50) + (-1 &times; 0) = 0.90</p>
        <p>&lambda;<sub>2</sub> = 3.0 &times; 0.60 + (-1 &times; 1.20) + (-1 &times; 0) = 0.60</p>
      </li>

      <li>
        <p>Expected Return = Risk Free Rate of Return + Risk Premium for each sensitivity factor</p>
        <p>Accordingly,</p>
        <p>15 = 10 + 0.80&lambda;<sub>1</sub> + 0.60&lambda;<sub>2</sub></p>
        <p>20 = 10 + 1.50&lambda;<sub>1</sub> + 1.20&lambda;<sub>2</sub></p>
        <p>On solving equation, the value of &lambda;<sub>1</sub> = 0</p>
        <p>Yes, Mr. D is correct in his observation.</p>
      </li>
    </ol>
  `
},

{
  question_id: "AFM_MTPSEP24I_Q3B",
  source: "ICAI Mock Test Paper - Series I, September 2024",
  chapter_name: "Corporate Valuation",
  placement: 2,
  marks: 4,
  question_html: `
    <p> There is a privately held company X Pvt. Ltd that is operating into the retail space, and is now scouting for angel investors. The unleveraged beta based on the industry in which it operates is 1.8, and the average debt to equity ratio of X Pvt. Ltd. is hovering at 40:60. The rate of return provided by risk free GOI Bonds is 5%. The rate of market return for the industry is 11%. The FCFs for the next 3 years are as follows:</p>
    
    <table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%;">
      <thead>
        <tr>
          <th style="text-align: left;">Free Cash Flows (₹ Crore)</th>
          <th style="text-align: center;">Year 1</th>
          <th style="text-align: center;">Year 2</th>
          <th style="text-align: center;">Year 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td style="text-align: center;">10</td>
          <td style="text-align: center;">12</td>
          <td style="text-align: center;">15</td>
        </tr>
      </tbody>
    </table>
    
    <p>The pre-tax cost of debt is 12%. Assume a tax regime of 30%.</p>
    <p>Determine the potential value to be placed for X Pvt. Ltd, based on above-mentioned FCFs.</p>
    <p><em>Note: Use PVF and round off calculations upto 3 decimal points.</em></p>
  `,
  solution_html: `
    

    <p>To compute the value of X Pvt. Ltd. first, we shall calculate WACC of the company. Since its share is not trading in the market, we shall use proxy beta to calculate the cost of equity. Since the unlevered beta of the industry is 1.8 the levered beta of the company will be:</p>
    
    <p>Levered &beta; = 1.8 [1 + (1 - 0.3) &times; 40 / 60)] = 2.64</p>
    
    <p>The Cost of equity in accordance with CAPM = R<sub>f</sub> + &beta; (R<sub>m</sub> &ndash; R<sub>f</sub>)</p>
    <p>= 5% + 2.64 (11% - 5%) = 20.84%</p>
    
    <p>The WACC = Cost of Equity + Cost of Debt</p>
    <p>= 20.84 (60 / 100) + 12.0 (1 - 0.3) (40 / 100) = 15.864%</p>
    
    <p>Finally, the free cash flows can be discounted at the WACC obtained above as under &ndash;</p>

    <table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%;">
      <thead>
        <tr>
          <th style="text-align: left;">Particulars</th>
          <th style="text-align: center;">Year 1</th>
          <th style="text-align: center;">Year 2</th>
          <th style="text-align: center;">Year 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Free Cash Flows</td>
          <td style="text-align: center;">10</td>
          <td style="text-align: center;">12</td>
          <td style="text-align: center;">15</td>
        </tr>
        <tr>
          <td>Discount factor (15.864%)</td>
          <td style="text-align: center;">0.863</td>
          <td style="text-align: center;">0.745</td>
          <td style="text-align: center;">0.643</td>
        </tr>
        <tr>
          <td>PVs of cash flows</td>
          <td style="text-align: center;">8.630</td>
          <td style="text-align: center;">8.940</td>
          <td style="text-align: center;">9.645</td>
        </tr>
      </tbody>
    </table>
    
    <p><strong>Value of X Pvt. Ltd. (₹ Crore) = 27.215</strong></p>
  `
},

{
  question_id: "AFM_MTPSEP24I_Q3C",
  source: "ICAI Mock Test Paper - Series I, September 2024",
  chapter_name: "Derivatives Analysis and Valuation / Portfolio Management",
  placement: 3,
  marks: 4,
  question_html: `
    <p><strong>(c) Either</strong></p>
    <p>Explain various types of Swaps.</p>
    
    <p><strong>Or</strong></p>
    <p>Explain briefly principles of an Active Portfolio Strategy (APS).</p>
  `,
  solution_html: `
    

    <p><strong>The various types of Swaps are as follows:</strong></p>
    <ol style="list-style-type: lower-roman;">
      <li>
        <strong>Plain Vanilla Swap:</strong> 
        <p>Also called Generic Swap or Coupon Swap and it involves the exchange of a fixed rate loan to a floating rate loan over a period of time and that too on notional principal. Floating rate basis can be LIBOR, MIBOR, Prime Lending Rate etc.</p>
        <p>For example, Fixed interest payments on a generic swap are calculated assuming each month has 30 days and the quoted interest rate is based on a 360-day year. Given an All-In-Cost of the swap, the semi-annual fixed-rate payment would be:</p>
        <p><strong>(N)(AIC)(180/360)</strong></p>
        <p>Where,</p>
        <ul>
          <li><strong>N</strong> denotes the notional principal amount of the agreement.</li>
          <li><strong>AIC</strong> denotes the fixed rate.</li>
        </ul>
        <p>Then, the floating-rate receipt is determined by the formula:</p>
        <p><strong>(N)(R)(dt/360)</strong></p>
        <p>Where,</p>
        <ul>
          <li><strong>dt</strong> denotes the number of days since the last settlement date.</li>
          <li><strong>R</strong> denotes the reference rate such as LIBOR, MIBOR etc.</li>
        </ul>
      </li>

      <li>
        <strong>Basis Rate Swap:</strong> 
        <p>Also, called Non-Generic Swap. Similar to plain vanilla swap with the difference that payments are based on the difference between two different variable rates. For example, one rate may be 1 month LIBOR and other may be 3-month LIBOR. In other words, two legs of swap are floating but measured against different benchmarks.</p>
      </li>

      <li>
        <strong>Asset Swap:</strong> 
        <p>Like plain vanilla swaps with the difference that it is the exchange fixed rate investments such as bonds which pay a guaranteed coupon rate with floating rate investments such as an index.</p>
      </li>

      <li>
        <strong>Amortising Swap:</strong> 
        <p>An interest rate swap in which the notional principal for the interest payments declines during the life of the swap. They are particularly useful for borrowers who have issued redeemable bonds or debentures. It enables them to do interest rate risk hedging attached with redemption profile of bonds or debentures.</p>
      </li>
    </ol>

    <hr style="margin: 20px 0;">

    <p><strong>OR</strong></p>

    <p><strong>There are four principles of an Active Portfolio Strategy (APS). These are:</strong></p>
    <ol style="list-style-type: lower-roman;">
      <li>
        <strong>Market Timing:</strong> 
        <p>This involves departing from the normal i.e., strategy for long run asset mix to reflect assessment of the prospect of various assets in the near future. Market timing is based on an explicit or implicit forecast of general market movement. In most cases investors may go largely by their market sense. Those who reveal the fluctuation in the market may be tempted to play the game of market timing but few will succeed in this game. Further an investment manager has to forecast the market correctly and 75% of the time he is only able to break even after taking into account the cost of errors and cost of transactions.</p>
      </li>

      <li>
        <strong>Sector Rotation:</strong> 
        <p>Sector or group rotation may apply to both stock and bond component of the portfolio. It is used more compulsorily with respect to strategy. The components of the portfolio are used when it involves shifting. The weighting for various industry sectors is based on their asset outlook.</p>
        <p>With respect to bond portfolio sector rotation it implies a shift in the composition of the bond portfolio in terms of quality as reflected in credit rating, coupon rate, term of maturity etc.</p>
      </li>

      <li>
        <strong>Security Selection:</strong> 
        <p>Security selection involves a search for under-priced security. If one has to resort to active stock selection he may employ fundamental / technical analysis to identify stocks which seems to promise superior return and concentrate the stock components of portfolio on them.</p>
        <p>As far as bonds are concerned security selection calls for choosing bonds which offer the highest yields to maturity and at a given level of risk.</p>
      </li>

      <li>
        <strong>Use of Specialised Investment Concept:</strong> 
        <p>To achieve superior return, one has to employ a specialised concept/philosophy particularly with respect to investment in stocks. The concept which have been exploited successfully are growth stock, neglected or out of favour stocks, asset stocks, technology stocks and cyclical stocks.</p>
      </li>
    </ol>
  `
},
{
  question_id: "AFM_MTPSEP24I_Q4A",
  source: "ICAI Mock Test Paper - Series I, September 2024",
  chapter_name: "Foreign Exchange Exposure and Risk Management",
  placement: 1,
  marks: 8,
  question_html: `
    <p> BDR Ltd. is an Indian export business house. The company prepares invoice in customers' currency. It has debtors amounting US$ 10 Million which are due to be received on April 1, 2023.</p>
    
    <p>Market information as at January 1, 2023 is:</p>
    <table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%;">
      <thead>
        <tr>
          <th style="text-align: left;" colspan="2">Exchange rates US$/INR</th>
          <th style="text-align: left;" colspan="2">Currency Futures US$/INR</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Spot</td>
          <td style="text-align: center;">0.012500</td>
          <td>Contract size:</td>
          <td style="text-align: center;">₹ 32,816,474</td>
        </tr>
        <tr>
          <td>1-month forward</td>
          <td style="text-align: center;">0.012422</td>
          <td>1-month</td>
          <td style="text-align: center;">0.012417</td>
        </tr>
        <tr>
          <td>3-months forward</td>
          <td style="text-align: center;">0.012195</td>
          <td>3-month</td>
          <td style="text-align: center;">0.012189</td>
        </tr>
        <tr>
          <th style="text-align: left;" colspan="2">Initial Margin</th>
          <th style="text-align: left;" colspan="2">Interest rates in India</th>
        </tr>
        <tr>
          <td>1-Month</td>
          <td style="text-align: center;">₹ 22,500</td>
          <td style="text-align: center;" colspan="2">6.5%</td>
        </tr>
        <tr>
          <td>3-Months</td>
          <td style="text-align: center;">₹ 27,500</td>
          <td style="text-align: center;" colspan="2">7%</td>
        </tr>
      </tbody>
    </table>
    
    <p>On April 1, 2023, the spot rate US$/INR is 0.012199 and Currency Futures rate is 0.012198.</p>
    
    <p>Advise which of the following methods would be most advantageous to BDR Ltd. or keep the exposure unhedged.</p>
    <ol style="list-style-type: lower-roman;">
      <li>Using forward contract</li>
      <li>Using currency futures.</li>
    </ol>
  `,
  solution_html: `
    

    <ol style="list-style-type: lower-roman;">
      <li>
        <p><strong>Receipts using a Forward Contract</strong> = US$ 10 Million / 0.012195</p>
        <p>= <strong>₹ 820,008,200</strong></p>
      </li>

      <li>
        <p><strong>Receipts using Currency Futures</strong></p>
        <p>The number of contracts needed is (US$ 10 Million / 0.012189) / 32,816,474 = 25 contracts</p>
        <p>Initial margin payable is 25 contracts &times; ₹ 27,500 = ₹ 687,500</p>
        <p>On April 1, 2023 Close at 0.012198</p>
        <p>Receipts = US$ 10 Million / 0.012199 = ₹ 819,739,323</p>
        <p>Variation Margin = [(0.012198 &ndash; 0.012189) &times; 25 &times; 32,816,474] / 0.012199</p>
        <p>OR</p>
        <p>(0.000009 &times; 25 &times; 32,816,474) / 0.012199</p>
        <p>= 7383.71 / 0.012199 = ₹ 605,271</p>
        
        <table border="0" cellpadding="3" cellspacing="0" style="width: 100%; max-width: 400px;">
          <tbody>
            <tr>
              <td>Receipts</td>
              <td style="text-align: right;">₹ 819,739,323</td>
            </tr>
            <tr>
              <td>Add: Variation Margin</td>
              <td style="text-align: right;">₹ 605,271</td>
            </tr>
            <tr>
              <td>Less: Interest Cost (₹ 687,500 &times; 0.07 &times; 3/12)</td>
              <td style="text-align: right;">(₹ 12,031)</td>
            </tr>
            <tr>
              <td><strong>Net Receipts</strong></td>
              <td style="text-align: right;"><strong>₹ 820,332,563</strong></td>
            </tr>
          </tbody>
        </table>
      </li>

      <li>
        <p><strong>Receipt if exposure is kept unhedged</strong></p>
        <p>US$ 10 Million / 0.012199 = <strong>₹ 819,739,323</strong></p>
      </li>
    </ol>
    
    <p><strong>Advise:</strong> The most advantageous option would be to hedge with <strong>Futures</strong> because it yields the highest net receipt.</p>
  `
},
{
  question_id: "AFM_MTPSEP24I_Q4B",
  source: "ICAI Mock Test Paper - Series I, September 2024",
  chapter_name: "Security Valuation",
  placement: 2,
  marks: 2,
  question_html: `
    <p> A convertible bond with a face value of ₹ 5,000 is issued at ₹ 6,750 with a coupon rate of 10.5%. The conversion rate is 14 shares per bond. The current market price of the bond and share is ₹ 7,375 and ₹ 400 respectively.</p>
    
    <p>Determine:</p>
    <ol style="list-style-type: lower-roman;">
      <li>Stock Value of Bond.</li>
      <li>The premium over conversion value.</li>
    </ol>
  `,
  solution_html: `
    

    <ol style="list-style-type: lower-roman;">
      <li>
        <p>Conversion rate is 14 shares per bond and Market price of share is ₹ 400, then</p>
        <p><strong>Stock Value of Bond</strong> shall be: 14 &times; ₹ 400 = <strong>₹ 5,600</strong></p>
      </li>
      <li>
        <p><strong>Premium over Conversion Value</strong> = (₹ 7,375 - ₹ 5,600) / ₹ 5,600 &times; 100</p>
        <p>= 1,775 / 5,600 &times; 100 = <strong>31.70%</strong></p>
      </li>
    </ol>
  `
},
{
  question_id: "AFM_MTPSEP24I_Q4C",
  source: "ICAI Mock Test Paper - Series I, September 2024",
  chapter_name: "Securitization",
  placement: 3,
  marks: 4,
  question_html: `
    <p> Although rating agency is secondary to the process of securitization but it plays a vital role. Explain.</p>
  `,
  solution_html: `
    

    <p>Yes, this statement is correct since the securitization is based on the pools of assets rather than the originators, the assets must be assessed in terms of its credit quality and credit support available. Rating agency assesses the following:</p>
    <ul>
      <li>Strength of the Cash Flow.</li>
      <li>Mechanism to ensure timely payment of interest and principle repayment.</li>
      <li>Credit quality of obligors.</li>
      <li>Liquidity support.</li>
      <li>Strength of legal framework.</li>
    </ul>
  `
},
{
  question_id: "AFM_MTPSEP24I_Q5A",
  source: "ICAI Mock Test Paper - Series I, September 2024",
  chapter_name: "Mergers, Acquisitions and Corporate Restructuring",
  placement: 1,
  marks: 10,
  question_html: `
    <p> During the audit of the Weak Bank (W), RBI suggested that the Bank should either merge with another bank or may close down. Strong Bank (S) has submitted a proposal for the merger of Weak Bank with itself. The relevant information and Balance Sheets of both the companies are as follows:</p>
    
    <table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; margin-bottom: 20px;">
      <thead>
        <tr>
          <th style="text-align: left;">Particulars</th>
          <th style="text-align: center;">Weak Bank (W)</th>
          <th style="text-align: center;">Strong Bank (S)</th>
          <th style="text-align: center;">Assigned Weights (%)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Gross NPA (%)</td>
          <td style="text-align: center;">8</td>
          <td style="text-align: center;">1</td>
          <td style="text-align: center;">30%</td>
        </tr>
        <tr>
          <td>Capital Adequacy Ratio (CAR)</td>
          <td style="text-align: center;">5</td>
          <td style="text-align: center;">16</td>
          <td style="text-align: center;">28%</td>
        </tr>
        <tr>
          <td>Market price per Share (MPS) (₹)</td>
          <td style="text-align: center;">12</td>
          <td style="text-align: center;">96</td>
          <td style="text-align: center;">32%</td>
        </tr>
        <tr>
          <td>Book value</td>
          <td style="text-align: center;"></td>
          <td style="text-align: center;"></td>
          <td style="text-align: center;">10%</td>
        </tr>
        <tr>
          <td>Trading on Stock Exchange</td>
          <td style="text-align: center;">Irregular</td>
          <td style="text-align: center;">Frequent</td>
          <td style="text-align: center;"></td>
        </tr>
      </tbody>
    </table>

    <p><strong>Balance Sheets (₹ in Lakhs)</strong></p>
    <table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%;">
      <thead>
        <tr>
          <th style="text-align: left;">Particulars</th>
          <th style="text-align: right;">Weak Bank (W)</th>
          <th style="text-align: right;">Strong Bank (S)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Paid-up Share Capital (₹ 10/share)</td>
          <td style="text-align: right;">300</td>
          <td style="text-align: right;">1000</td>
        </tr>
        <tr>
          <td>Reserves & Surplus</td>
          <td style="text-align: right;">160</td>
          <td style="text-align: right;">11000</td>
        </tr>
        <tr>
          <td>Deposits</td>
          <td style="text-align: right;">8000</td>
          <td style="text-align: right;">88000</td>
        </tr>
        <tr>
          <td>Other Liabilities</td>
          <td style="text-align: right;">1780</td>
          <td style="text-align: right;">5000</td>
        </tr>
        <tr>
          <td><strong>Total Liabilities</strong></td>
          <td style="text-align: right;"><strong>10240</strong></td>
          <td style="text-align: right;"><strong>105000</strong></td>
        </tr>
        <tr>
          <td colspan="3">&nbsp;</td>
        </tr>
        <tr>
          <td>Cash in Hand & with RBI</td>
          <td style="text-align: right;">800</td>
          <td style="text-align: right;">5000</td>
        </tr>
        <tr>
          <td>Balance with Other Banks</td>
          <td style="text-align: right;">-</td>
          <td style="text-align: right;">4000</td>
        </tr>
        <tr>
          <td>Investments</td>
          <td style="text-align: right;">2200</td>
          <td style="text-align: right;">38000</td>
        </tr>
        <tr>
          <td>Advances</td>
          <td style="text-align: right;">7000</td>
          <td style="text-align: right;">54000</td>
        </tr>
        <tr>
          <td>Other Assets</td>
          <td style="text-align: right;">140</td>
          <td style="text-align: right;">4000</td>
        </tr>
        <tr>
          <td>Preliminary Expenses</td>
          <td style="text-align: right;">100</td>
          <td style="text-align: right;">-</td>
        </tr>
        <tr>
          <td><strong>Total Assets</strong></td>
          <td style="text-align: right;"><strong>10240</strong></td>
          <td style="text-align: right;"><strong>105000</strong></td>
        </tr>
      </tbody>
    </table>
    
    <p>You are required to prepare the Balance Sheet after the merger duly supported by adequate workings.</p>
  `,
  solution_html: `
    

    <p><strong>Working Notes:</strong></p>
    <p>To prepare Revised Balance Sheet we need to calculate swap ratio, number of shares to be issued to Weak Bank and Capital Reserve or Goodwill on merger as follows:</p>

    <p><strong>(1) Calculation of Book Value per Share</strong></p>
    <table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; margin-bottom: 20px;">
      <thead>
        <tr>
          <th style="text-align: left;">Particulars</th>
          <th style="text-align: right;">Weak Bank (W)</th>
          <th style="text-align: right;">Strong Bank (S)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Share Capital (₹ Lakhs)</td>
          <td style="text-align: right;">300</td>
          <td style="text-align: right;">1,000</td>
        </tr>
        <tr>
          <td>Reserves & Surplus (₹ Lakhs)</td>
          <td style="text-align: right;">160</td>
          <td style="text-align: right;">11,000</td>
        </tr>
        <tr>
          <td>Less: Preliminary Expenses (₹ Lakhs)</td>
          <td style="text-align: right;">100</td>
          <td style="text-align: right;">--</td>
        </tr>
        <tr>
          <td><strong>Net Worth or Book Value (₹ Lakhs)</strong></td>
          <td style="text-align: right;"><strong>360</strong></td>
          <td style="text-align: right;"><strong>12,000</strong></td>
        </tr>
        <tr>
          <td>No. of Outstanding Shares (Lakhs)</td>
          <td style="text-align: right;">30</td>
          <td style="text-align: right;">100</td>
        </tr>
        <tr>
          <td><strong>Book Value Per Share (₹)</strong></td>
          <td style="text-align: right;"><strong>12</strong></td>
          <td style="text-align: right;"><strong>120</strong></td>
        </tr>
      </tbody>
    </table>

    <p><strong>(2) Swap Ratio</strong></p>
    <table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; margin-bottom: 20px;">
      <thead>
        <tr>
          <th style="text-align: left;">Particulars</th>
          <th style="text-align: center;">Ratio</th>
          <th style="text-align: center;">Weight</th>
          <th style="text-align: center;">Product</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Gross NPA</td>
          <td style="text-align: center;">1:8</td>
          <td style="text-align: center;">1/8 &times; 30%</td>
          <td style="text-align: center;">0.0375</td>
        </tr>
        <tr>
          <td>CAR</td>
          <td style="text-align: center;">5:16</td>
          <td style="text-align: center;">5/16 &times; 28%</td>
          <td style="text-align: center;">0.0875</td>
        </tr>
        <tr>
          <td>Market Price</td>
          <td style="text-align: center;">12:96</td>
          <td style="text-align: center;">12/96 &times; 32%</td>
          <td style="text-align: center;">0.0400</td>
        </tr>
        <tr>
          <td>Book Value Per Share</td>
          <td style="text-align: center;">12:120</td>
          <td style="text-align: center;">12/120 &times; 10%</td>
          <td style="text-align: center;">0.0100</td>
        </tr>
        <tr>
          <td colspan="3" style="text-align: right;"><strong>Total Swap Ratio</strong></td>
          <td style="text-align: center;"><strong>0.1750</strong></td>
        </tr>
      </tbody>
    </table>
    <p>Thus, for every share of Weak Bank, 0.1750 share of Strong Bank shall be issued.</p>

    <p><strong>(3) No. of equity shares to be issued:</strong></p>
    <p>(300 / 10) &times; 0.1750 = <strong>5.25 lakh shares</strong></p>

    <p><strong>(4) Calculation of Capital Reserve</strong></p>
    <table border="0" cellpadding="3" cellspacing="0" style="width: 100%; max-width: 400px; margin-bottom: 20px;">
      <tbody>
        <tr>
          <td>Book Value of Shares</td>
          <td style="text-align: right;">₹ 360.00 lac</td>
        </tr>
        <tr>
          <td>Less: Value of Shares issued (5.25 &times; ₹ 10)</td>
          <td style="text-align: right;">₹ 52.50 lac</td>
        </tr>
        <tr>
          <td><strong>Capital Reserve</strong></td>
          <td style="text-align: right;"><strong>₹ 307.50 lac</strong></td>
        </tr>
      </tbody>
    </table>

    <p><strong>Balance Sheet after Merger</strong></p>
    <table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%;">
      <thead>
        <tr>
          <th style="text-align: left;">Liabilities</th>
          <th style="text-align: right;">₹ lac</th>
          <th style="text-align: left;">Assets</th>
          <th style="text-align: right;">₹ lac</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Paid up Share Capital (1000 + 52.50)</td>
          <td style="text-align: right;">1052.50</td>
          <td>Cash in Hand & RBI (800 + 5000)</td>
          <td style="text-align: right;">5800.00</td>
        </tr>
        <tr>
          <td>Reserves & Surplus</td>
          <td style="text-align: right;">11000.00</td>
          <td>Balance with other banks (0 + 4000)</td>
          <td style="text-align: right;">4000.00</td>
        </tr>
        <tr>
          <td>Capital Reserve</td>
          <td style="text-align: right;">307.50</td>
          <td>Investment (2200 + 38000)</td>
          <td style="text-align: right;">40200.00</td>
        </tr>
        <tr>
          <td>Deposits (8000 + 88000)</td>
          <td style="text-align: right;">96000.00</td>
          <td>Advances (7000 + 54000)</td>
          <td style="text-align: right;">61000.00</td>
        </tr>
        <tr>
          <td>Other Liabilities (1780 + 5000)</td>
          <td style="text-align: right;">6780.00</td>
          <td>Other Assets (140 + 4000)</td>
          <td style="text-align: right;">4140.00</td>
        </tr>
        <tr>
          <td><strong>Total</strong></td>
          <td style="text-align: right;"><strong>115140.00</strong></td>
          <td><strong>Total</strong></td>
          <td style="text-align: right;"><strong>115140.00</strong></td>
        </tr>
      </tbody>
    </table>
  `
},
{
  question_id: "AFM_MTPSEP24I_Q5B",
  source: "ICAI Mock Test Paper - Series I, September 2024",
  chapter_name: "Foreign Exchange Exposure and Risk Management",
  placement: 2,
  marks: 4,
  question_html: `
    <p> The SWIFT plays an important role in Foreign Exchange dealings. Explain.</p>
  `,
  solution_html: `
    

    <p>The SWIFT plays an important role in Foreign Exchange dealings because of the following reasons:</p>
    <ul>
      <li>In addition to validation statements and documentation it is a form of quick settlement as messaging takes place within seconds.</li>
      <li>Because of security and reliability helps to reduce Operational Risk.</li>
      <li>Since it enables its customers to standardise transaction it brings operational efficiencies and reduced costs.</li>
      <li>It also ensures full backup and recovery system.</li>
      <li>Acts as a catalyst that brings financial agencies to work together in a collaborative manner for mutual interest.</li>
    </ul>
  `
},
{
  question_id: "AFM_MTPSEP24I_Q6A",
  source: "ICAI Mock Test Paper - Series I, September 2024",
  chapter_name: "Advanced Capital Budgeting Decisions",
  placement: 1,
  marks: 6,
  question_html: `
    <p> XYZ Ltd. is considering taking up one of the two projects-Project-X and Project-Y. Both the projects having same life require equal investment of ₹ 1600 lakhs each. Both are estimated to have almost the same yield. As the company is new to this type of business, the cash flow arising from the projects cannot be estimated with certainty. An attempt was therefore, made to use probability to analyse the pattern of cash flow from other projects during the first year of operations. This pattern is likely to continue during the life of these projects. The results of the analysis are as follows:</p>
    
    <p><strong>Project X</strong></p>
    <table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; max-width: 400px; margin-bottom: 20px;">
      <thead>
        <tr>
          <th style="text-align: center;">Cash Flow (in ₹ Lakh)</th>
          <th style="text-align: center;">Probability</th>
        </tr>
      </thead>
      <tbody>
        <tr><td style="text-align: center;">220</td><td style="text-align: center;">0.10</td></tr>
        <tr><td style="text-align: center;">260</td><td style="text-align: center;">0.20</td></tr>
        <tr><td style="text-align: center;">300</td><td style="text-align: center;">0.40</td></tr>
        <tr><td style="text-align: center;">340</td><td style="text-align: center;">0.20</td></tr>
        <tr><td style="text-align: center;">380</td><td style="text-align: center;">0.10</td></tr>
      </tbody>
    </table>

    <p><strong>Project Y</strong></p>
    <table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; max-width: 400px; margin-bottom: 20px;">
      <thead>
        <tr>
          <th style="text-align: center;">Cash Flow (in ₹ Lakh)</th>
          <th style="text-align: center;">Probability</th>
        </tr>
      </thead>
      <tbody>
        <tr><td style="text-align: center;">180</td><td style="text-align: center;">0.10</td></tr>
        <tr><td style="text-align: center;">260</td><td style="text-align: center;">0.25</td></tr>
        <tr><td style="text-align: center;">340</td><td style="text-align: center;">0.30</td></tr>
        <tr><td style="text-align: center;">420</td><td style="text-align: center;">0.25</td></tr>
        <tr><td style="text-align: center;">500</td><td style="text-align: center;">0.10</td></tr>
      </tbody>
    </table>

    <p><strong>Required:</strong></p>
    <p>Evaluate which of the two projects bears more risk for every percent of expected return.</p>
  `,
  solution_html: `
    

    <p>To determine which of the two projects bears more risk for every percent of expected return first we shall calculate Variance and Standard Deviation of both the projects.</p>

    <ol style="list-style-type: lower-roman;">
      <li>
        <p><strong>Project X</strong></p>
        <p>Expected Net Cash Flow<br>
        = (0.10 &times; 220) + (0.20 &times; 260) + (0.40 &times; 300) + (0.20 &times; 340) + (0.10 &times; 380)<br>
        = 22 + 52 + 120 + 68 + 38 = <strong>300</strong></p>
        
        <p>&sigma;<sup>2</sup> = 0.10(220 &ndash; 300)<sup>2</sup> + 0.20(260 &ndash; 300)<sup>2</sup> + 0.40(300 &ndash; 300)<sup>2</sup> + 0.20(340 &ndash; 300)<sup>2</sup> + 0.10(380 &ndash; 300)<sup>2</sup><br>
        = 640 + 320 + 0 + 320 + 640 = <strong>1920</strong></p>
        
        <p>&sigma; = &radic;1920 = <strong>43.82</strong></p>
      </li>

      <li>
        <p><strong>Project Y</strong></p>
        <p>Expected Net Cash Flow<br>
        = (0.10 &times; 180) + (0.25 &times; 260) + (0.30 &times; 340) + (0.25 &times; 420) + (0.10 &times; 500)<br>
        = 18 + 65 + 102 + 105 + 50 = <strong>340</strong></p>
        
        <p>&sigma;<sup>2</sup> = 0.10(180 &ndash; 340)<sup>2</sup> + 0.25(260 &ndash; 340)<sup>2</sup> + 0.30(340 &ndash; 340)<sup>2</sup> + 0.25(420 &ndash; 340)<sup>2</sup> + 0.10(500 &ndash; 340)<sup>2</sup><br>
        = 2560 + 1600 + 0 + 1600 + 2560 = <strong>8320</strong></p>
        
        <p>&sigma; = &radic;8320 = <strong>91.21</strong></p>
      </li>
    </ol>

    <p>Now we shall calculate Coefficient of Variation</p>
    <p>Coefficient of Variation = Standard Deviation / Mean</p>
    <ul>
      <li>Project X = 43.82 / 300 = <strong>0.146 or 14.61%</strong></li>
      <li>Project Y = 91.21 / 340 = <strong>0.268 or 26.83%</strong></li>
    </ul>
    
    <p><strong>Project Y bears more risk for every percent of expected return.</strong></p>
  `
},
{
  question_id: "AFM_MTPSEP24I_Q6B",
  source: "ICAI Mock Test Paper - Series I, September 2024",
  chapter_name: "Corporate Valuation",
  placement: 2,
  marks: 4,
  question_html: `
    <p> The following data pertains to HPS Inc. engaged in software consultancy business as on 31 December 2023:</p>
    
    <table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; max-width: 400px; margin-bottom: 20px;">
      <thead>
        <tr>
          <th style="text-align: left;">Particulars</th>
          <th style="text-align: right;">($ Million)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Income from consultancy</td>
          <td style="text-align: right;">1870.00</td>
        </tr>
        <tr>
          <td>EBIT</td>
          <td style="text-align: right;">360.00</td>
        </tr>
        <tr>
          <td>Less: Interest on Loan</td>
          <td style="text-align: right;">36.00</td>
        </tr>
        <tr>
          <td>EBT</td>
          <td style="text-align: right;">324.00</td>
        </tr>
        <tr>
          <td>Tax @ 35%</td>
          <td style="text-align: right;">113.40</td>
        </tr>
        <tr>
          <td><strong>Net Income</strong></td>
          <td style="text-align: right;"><strong>210.60</strong></td>
        </tr>
      </tbody>
    </table>

    <p><strong>Balance Sheet</strong></p>
    <table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; margin-bottom: 20px;">
      <thead>
        <tr>
          <th style="text-align: left;">Liabilities</th>
          <th style="text-align: right;">Amount ($ Million)</th>
          <th style="text-align: left;">Assets</th>
          <th style="text-align: right;">Amount ($ Million)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Equity Stock (20 million share @ $ 10 each)</td>
          <td style="text-align: right;">200</td>
          <td>Land and Building</td>
          <td style="text-align: right;">400</td>
        </tr>
        <tr>
          <td>Reserves & Surplus</td>
          <td style="text-align: right;">650</td>
          <td>Computers & Softwares</td>
          <td style="text-align: right;">590</td>
        </tr>
        <tr>
          <td>Loans</td>
          <td style="text-align: right;">360</td>
          <td><strong>Current Assets:</strong></td>
          <td style="text-align: right;"></td>
        </tr>
        <tr>
          <td>Current Liabilities</td>
          <td style="text-align: right;">360</td>
          <td>Debtors</td>
          <td style="text-align: right;">300</td>
        </tr>
        <tr>
          <td></td>
          <td style="text-align: right;"></td>
          <td>Bank</td>
          <td style="text-align: right;">200</td>
        </tr>
        <tr>
          <td></td>
          <td style="text-align: right;"></td>
          <td>Cash</td>
          <td style="text-align: right;">80</td>
        </tr>
        <tr>
          <td><strong>Total</strong></td>
          <td style="text-align: right;"><strong>1570</strong></td>
          <td><strong>Total</strong></td>
          <td style="text-align: right;"><strong>1570</strong></td>
        </tr>
      </tbody>
    </table>

    <p>With the above information and following assumption you are required to compute:</p>
    <ol style="list-style-type: lower-roman;">
      <li>Economic Value Added</li>
      <li>Market Value Added.</li>
    </ol>
    <p><strong>Assuming that:</strong></p>
    <ol>
      <li>WACC is 12%.</li>
      <li>The share of company currently quoted at $ 50 each.</li>
    </ol>
  `,
  solution_html: `
    

    <p><strong>(i) Determination of Economic Value Added (EVA)</strong></p>
    <table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; max-width: 500px; margin-bottom: 20px;">
      <tbody>
        <tr>
          <td>EBIT</td>
          <td style="text-align: right;">$ 360.00 Million</td>
        </tr>
        <tr>
          <td>Less: Taxes @ 35%</td>
          <td style="text-align: right;">$ 126.00 Million</td>
        </tr>
        <tr>
          <td><strong>Net Operating Profit after Tax (NOPAT)</strong></td>
          <td style="text-align: right;"><strong>$ 234.00 Million</strong></td>
        </tr>
        <tr>
          <td>Less: Cost of Capital Employed [W. No.1]</td>
          <td style="text-align: right;">$ 145.20 Million</td>
        </tr>
        <tr>
          <td><strong>Economic Value Added</strong></td>
          <td style="text-align: right;"><strong>$ 88.80 Million</strong></td>
        </tr>
      </tbody>
    </table>

    <p><strong>(ii) Determination of Market Value Added (MVA)</strong></p>
    <table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; max-width: 500px; margin-bottom: 20px;">
      <tbody>
        <tr>
          <td>Market value of Equity Stock [W. No. 2]</td>
          <td style="text-align: right;">$ 1000 Million</td>
        </tr>
        <tr>
          <td>Less: Equity Fund [W. No. 3]</td>
          <td style="text-align: right;">$ 850 Million</td>
        </tr>
        <tr>
          <td><strong>Market Value Added</strong></td>
          <td style="text-align: right;"><strong>$ 150 Million</strong></td>
        </tr>
      </tbody>
    </table>

    <hr style="margin: 20px 0;">

    <p><strong>Working Notes:</strong></p>

    <p><strong>(1) Total Capital Employed</strong></p>
    <table border="0" cellpadding="3" cellspacing="0" style="width: 100%; max-width: 400px; margin-bottom: 20px;">
      <tbody>
        <tr>
          <td>Equity Stock</td>
          <td style="text-align: right;">$ 200 Million</td>
        </tr>
        <tr>
          <td>Reserves and Surplus</td>
          <td style="text-align: right;">$ 650 Million</td>
        </tr>
        <tr>
          <td>Loan</td>
          <td style="text-align: right;">$ 360 Million</td>
        </tr>
        <tr>
          <td><strong>Total Capital Employed</strong></td>
          <td style="text-align: right;"><strong>$ 1210 Million</strong></td>
        </tr>
        <tr><td colspan="2">&nbsp;</td></tr>
        <tr>
          <td>WACC</td>
          <td style="text-align: right;">12%</td>
        </tr>
        <tr>
          <td><strong>Cost of Capital employed</strong> ($ 1210 Million &times; 12%)</td>
          <td style="text-align: right;"><strong>$ 145.20 Million</strong></td>
        </tr>
      </tbody>
    </table>

    <p><strong>(2) Market Price and Value of Equity</strong></p>
    <table border="0" cellpadding="3" cellspacing="0" style="width: 100%; max-width: 400px; margin-bottom: 20px;">
      <tbody>
        <tr>
          <td>Market Price per equity share (A)</td>
          <td style="text-align: right;">$ 50</td>
        </tr>
        <tr>
          <td>No. of equity share outstanding (B)</td>
          <td style="text-align: right;">20 Million</td>
        </tr>
        <tr>
          <td><strong>Market value of equity stock (A) &times; (B)</strong></td>
          <td style="text-align: right;"><strong>$ 1000 Million</strong></td>
        </tr>
      </tbody>
    </table>

    <p><strong>(3) Equity Fund</strong></p>
    <table border="0" cellpadding="3" cellspacing="0" style="width: 100%; max-width: 400px;">
      <tbody>
        <tr>
          <td>Equity Stock</td>
          <td style="text-align: right;">$ 200 Million</td>
        </tr>
        <tr>
          <td>Reserves & Surplus</td>
          <td style="text-align: right;">$ 650 Million</td>
        </tr>
        <tr>
          <td><strong>Total Equity Fund</strong></td>
          <td style="text-align: right;"><strong>$ 850 Million</strong></td>
        </tr>
      </tbody>
    </table>
  `
},
{
  question_id: "AFM_MTPSEP24I_Q6C",
  source: "ICAI Mock Test Paper - Series I, September 2024",
  chapter_name: "Startup Finance",
  placement: 3,
  marks: 4,
  question_html: `
    <p> Explain Venture Capital Method of valuing Startups.</p>
  `,
  solution_html: `
    

    <p>The <strong>Venture Capital (VC) Method</strong> is a popular valuation method primarily used for early-stage and pre-revenue startups where traditional valuation methods (like DCF) are difficult to apply due to lack of historical data and uncertain cash flows. It works backwards from an expected exit value to determine the current valuation and the equity stake the investor should get.</p>
    
    <p>The method involves the following key steps:</p>
    
    <ol>
      <li>
        <strong>Estimate the Exit Valuation (Terminal Value):</strong> 
        <p>Determine the expected value of the startup at the time the venture capitalist plans to exit the investment (usually in 5 to 8 years). This is typically estimated using industry multiples, such as Price-to-Earnings (P/E) or Price-to-Sales multiples, applied to the projected financial metrics of the exit year.</p>
      </li>
      <li>
        <strong>Determine the Target Return on Investment (ROI):</strong> 
        <p>Identify the required rate of return expected by the VC. Since early-stage investments carry high risk, VCs usually demand a very high expected rate of return (often ranging between 30% to 50% or even higher, depending on the stage of the startup).</p>
      </li>
      <li>
        <strong>Calculate the Post-Money Valuation:</strong> 
        <p>Discount the estimated Exit Valuation back to its present value using the VC's Target ROI. This gives the valuation of the company immediately <em>after</em> the VC's investment.</p>
        <p><em>Post-Money Valuation = Exit Valuation / (1 + Target ROI)<sup>n</sup></em></p>
        <p>(where 'n' is the number of years until the expected exit).</p>
      </li>
      <li>
        <strong>Calculate the Pre-Money Valuation:</strong> 
        <p>Deduct the investment amount from the Post-Money Valuation to find out what the startup is worth today, immediately <em>before</em> the investment is made.</p>
        <p><em>Pre-Money Valuation = Post-Money Valuation &ndash; Investment Amount</em></p>
      </li>
      <li>
        <strong>Determine the Equity Stake:</strong> 
        <p>Calculate the percentage of ownership the VC will require in exchange for their investment.</p>
        <p><em>VC Ownership % = Investment Amount / Post-Money Valuation</em></p>
      </li>
    </ol>
  `
},
{
  question_id: "AFM_MTPNOV24II_Q1A",
  source: "ICAI Mock Test Paper - Series II, October 2024",
  chapter_name: "Startup Finance",
  placement: 1,
  marks: 8,
  question_html: `
    <p> The ABC Startup has the following expected profits under different scenarios along respective probabilities:</p>

    <table border="1" cellspacing="0" cellpadding="6">
      <thead>
        <tr>
          <th rowspan="2">Year</th>
          <th colspan="2">Best Case</th>
          <th colspan="2">Base Case</th>
          <th colspan="2">Worst Case</th>
        </tr>
        <tr>
          <th>Revenue</th>
          <th>Expenses</th>
          <th>Revenue</th>
          <th>Expenses</th>
          <th>Revenue</th>
          <th>Expenses</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>₹ 100,00,000</td>
          <td>₹ 80,00,000</td>
          <td>₹ 100,00,000</td>
          <td>₹ 90,00,000</td>
          <td>₹ 100,00,000</td>
          <td>₹ 95,00,000</td>
        </tr>
        <tr>
          <td>2</td>
          <td>₹ 120,00,000</td>
          <td>₹ 92,40,000</td>
          <td>₹ 110,00,000</td>
          <td>₹ 95,70,000</td>
          <td>₹ 102,00,000</td>
          <td>₹ 98,94,000</td>
        </tr>
        <tr>
          <td>3</td>
          <td>₹ 144,00,000</td>
          <td>₹ 108,00,000</td>
          <td>₹ 121,00,000</td>
          <td>₹ 102,85,000</td>
          <td>₹ 104,04,000</td>
          <td>₹ 101,95,920</td>
        </tr>
        <tr>
          <td><strong>Probability</strong></td>
          <td colspan="2" align="center">30%</td>
          <td colspan="2" align="center">60%</td>
          <td colspan="2" align="center">10%</td>
        </tr>
      </tbody>
    </table>

    <p>You are required to suggest the value of ABC Startup using <strong>First Chicago Method</strong> assuming that:</p>

    <ol type="i">
      <li>Applicable discounting rate is 20%.</li>
      <li>Startup is located in Tax-free Zone.</li>
      <li>The multiple for Terminal is 10.</li>
      <li>No depreciable assets are held by the ABC Startup.</li>
    </ol>

    <p><strong>Note:</strong></p>

    <p><strong>1. Present Value Factor (PVF)</strong></p>

    <table border="1" cellspacing="0" cellpadding="6">
      <thead>
        <tr>
          <th>Year</th>
          <th>1</th>
          <th>2</th>
          <th>3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>PVF @ 20%</strong></td>
          <td>0.8333</td>
          <td>0.6944</td>
          <td>0.5787</td>
        </tr>
      </tbody>
    </table>

    <p>2. Round off the calculation to whole numbers.</p>
  `,
  solution_html: `
    

    <p><strong>Valuation of Startup under different scenarios:</strong></p>

    <p><strong>(i) Best Case Scenario</strong></p>

    <table border="1" cellspacing="0" cellpadding="6">
      <thead>
        <tr>
          <th>Particulars</th>
          <th>Year 1</th>
          <th>Year 2</th>
          <th>Year 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Revenue</td>
          <td>₹ 100,00,000</td>
          <td>₹ 120,00,000</td>
          <td>₹ 144,00,000</td>
        </tr>
        <tr>
          <td>Expenses</td>
          <td>₹ 80,00,000</td>
          <td>₹ 92,40,000</td>
          <td>₹ 108,00,000</td>
        </tr>
        <tr>
          <td>Cash Flow / Earnings</td>
          <td>₹ 20,00,000</td>
          <td>₹ 27,60,000</td>
          <td>₹ 36,00,000</td>
        </tr>
        <tr>
          <td>Terminal Value</td>
          <td>-</td>
          <td>-</td>
          <td>₹ 3,60,00,000</td>
        </tr>
        <tr>
          <td>PVF @ 20%</td>
          <td>0.8333</td>
          <td>0.6944</td>
          <td>0.5787</td>
        </tr>
        <tr>
          <td>PV of Cash Flow</td>
          <td>₹ 16,66,600</td>
          <td>₹ 19,16,544</td>
          <td>₹ 20,83,320</td>
        </tr>
        <tr>
          <td>PV of Terminal Value</td>
          <td>-</td>
          <td>-</td>
          <td>₹ 2,08,33,200</td>
        </tr>
        <tr>
          <td><strong>Value of Startup</strong></td>
          <td colspan="3"><strong>₹ 2,64,99,664</strong></td>
        </tr>
      </tbody>
    </table>

    <p><strong>(ii) Base Case Scenario</strong></p>

    <table border="1" cellspacing="0" cellpadding="6">
      <thead>
        <tr>
          <th>Particulars</th>
          <th>Year 1</th>
          <th>Year 2</th>
          <th>Year 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Revenue</td>
          <td>₹ 100,00,000</td>
          <td>₹ 110,00,000</td>
          <td>₹ 121,00,000</td>
        </tr>
        <tr>
          <td>Expenses</td>
          <td>₹ 90,00,000</td>
          <td>₹ 95,70,000</td>
          <td>₹ 102,85,000</td>
        </tr>
        <tr>
          <td>Cash Flow / Earnings</td>
          <td>₹ 10,00,000</td>
          <td>₹ 14,30,000</td>
          <td>₹ 18,15,000</td>
        </tr>
        <tr>
          <td>Terminal Value</td>
          <td>-</td>
          <td>-</td>
          <td>₹ 1,81,50,000</td>
        </tr>
        <tr>
          <td>PVF @ 20%</td>
          <td>0.8333</td>
          <td>0.6944</td>
          <td>0.5787</td>
        </tr>
        <tr>
          <td>PV of Cash Flow</td>
          <td>₹ 8,33,300</td>
          <td>₹ 9,92,992</td>
          <td>₹ 10,50,341</td>
        </tr>
        <tr>
          <td>PV of Terminal Value</td>
          <td>-</td>
          <td>-</td>
          <td>₹ 1,05,03,405</td>
        </tr>
        <tr>
          <td><strong>Value of Startup</strong></td>
          <td colspan="3"><strong>₹ 1,33,80,038</strong></td>
        </tr>
      </tbody>
    </table>

    <p><strong>(iii) Worst Case Scenario</strong></p>

    <table border="1" cellspacing="0" cellpadding="6">
      <thead>
        <tr>
          <th>Particulars</th>
          <th>Year 1</th>
          <th>Year 2</th>
          <th>Year 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Revenue</td>
          <td>₹ 100,00,000</td>
          <td>₹ 102,00,000</td>
          <td>₹ 104,04,000</td>
        </tr>
        <tr>
          <td>Expenses</td>
          <td>₹ 95,00,000</td>
          <td>₹ 98,94,000</td>
          <td>₹ 101,95,920</td>
        </tr>
        <tr>
          <td>Cash Flow / Earnings</td>
          <td>₹ 5,00,000</td>
          <td>₹ 3,06,000</td>
          <td>₹ 2,08,080</td>
        </tr>
        <tr>
          <td>Terminal Value</td>
          <td>-</td>
          <td>-</td>
          <td>₹ 20,80,800</td>
        </tr>
        <tr>
          <td>PVF @ 20%</td>
          <td>0.8333</td>
          <td>0.6944</td>
          <td>0.5787</td>
        </tr>
        <tr>
          <td>PV of Cash Flow</td>
          <td>₹ 4,16,650</td>
          <td>₹ 2,12,486</td>
          <td>₹ 1,20,416</td>
        </tr>
        <tr>
          <td>PV of Terminal Value</td>
          <td>-</td>
          <td>-</td>
          <td>₹ 12,04,159</td>
        </tr>
        <tr>
          <td><strong>Value of Startup</strong></td>
          <td colspan="3"><strong>₹ 19,53,711</strong></td>
        </tr>
      </tbody>
    </table>

    <p><strong>Value of ABC Startup as per First Chicago Method</strong></p>

    <p>
      = 0.30 × ₹ 2,64,99,664 + 0.60 × ₹ 1,33,80,038 + 0.10 × ₹ 19,53,711
    </p>

    <p>
      = ₹ 79,49,899 + ₹ 80,28,023 + ₹ 1,95,371
    </p>

    <p>
      <strong>= ₹ 1,61,73,293</strong>
    </p>
  `
},
{
  question_id: "AFM_MTPNOV24II_Q1B",
  source: "ICAI Mock Test Paper - Series II, October 2024",
  chapter_name: "Startup Finance",
  placement: 1,
  marks: 6,
  question_html: `
    <p> List out the points to be kept in mind while preparing a Pitch Presentation. What are the basic documents that are included in financial projections that make up a business’s financial statement.</p>
  `,
  solution_html: `
    

    <p><strong>Some points to be kept in mind while preparing a Pitch Presentation are as follows:</strong></p>

    <ol type="i">
      <li>Introduction</li>
      <li>Team</li>
      <li>Problem</li>
      <li>Solution</li>
      <li>Marketing/Sales</li>
      <li>Projections or Milestones</li>
      <li>Competition</li>
      <li>Business Model</li>
    </ol>

    <p><strong>Financial projections include three basic documents that make up a business’s financial statements.</strong></p>

    <ul>
      <li>
        <p><strong>Income statement:</strong> This estimate how much money the business will generate by projecting income and expenses. It will show:</p>

        <ul>
          <li>How much revenue did the business generate?</li>
          <li>How much did it cost to generate and support that revenue?</li>
          <li>How much did the business pay its employees?</li>
          <li>How much did it pay towards rent?</li>
        </ul>

        <p>For your first year in business, you’ll want to create a monthly income statement. For the second year, quarterly statements will suffice. For the following years, you’ll just need an annual income statement.</p>
      </li>

      <li>
        <p><strong>Cash flow statement:</strong> A projected cash flow statement will depict how much cash will be coming into the business and how much cash will be utilized. At the end of each period (e.g. monthly, quarterly, annually), one can tally it all up to show either the cash burn or the cash generated during the period and the cash balance remaining at the end of the period.</p>
      </li>

      <li>
        <p><strong>Balance sheet:</strong> The balance sheet shows the business’s overall finances including assets, liabilities and equity. Typically, one will create an annual balance sheet for one’s financial projections. It shows:</p>

        <ul>
          <li>How much cash is in the bank?</li>
          <li>How much money does the company owe to suppliers?</li>
          <li>How much money has been invested in the company?</li>
        </ul>
      </li>
    </ul>
  `
},
{
  question_id: "AFM_MTPNOV24II_Q2A",
  source: "ICAI Mock Test Paper - Series II, October 2024",
  chapter_name: "Business Valuation",
  placement: 2,
  marks: 6,
  question_html: `
    <p> Calculate the value of one equity share of X Ltd. from the following Information:</p>

    <table border="1" cellspacing="0" cellpadding="6">
      <tbody>
        <tr>
          <td>Profit of the company (Before tax)</td>
          <td>₹ 8000 crores</td>
        </tr>
        <tr>
          <td>Equity share capital of the Company</td>
          <td>₹ 19000 crores</td>
        </tr>
        <tr>
          <td>No. of Equity Shares</td>
          <td>380 crores</td>
        </tr>
        <tr>
          <td>Long run growth rate of the company</td>
          <td>7%</td>
        </tr>
        <tr>
          <td>Risk free Rate of Return</td>
          <td>9.50%</td>
        </tr>
        <tr>
          <td>Beta of the company</td>
          <td>0.1</td>
        </tr>
        <tr>
          <td>Market Risk Premium</td>
          <td>3.10%</td>
        </tr>
        <tr>
          <td>Total Capital expenditure</td>
          <td>₹ 20140 crore</td>
        </tr>
        <tr>
          <td>Chargeable Depreciation</td>
          <td>₹ 17100 crore</td>
        </tr>
        <tr>
          <td>Total Increase in working capital</td>
          <td>₹ 1755.60 crore</td>
        </tr>
        <tr>
          <td>New Debt to be issued for funding</td>
          <td>₹ 2062.108 crore</td>
        </tr>
        <tr>
          <td>Tax Rate</td>
          <td>30%</td>
        </tr>
      </tbody>
    </table>

    <p><strong>Note:</strong> All calculation to rounded off upto 4 decimal points and final value of equity share to be rounded off upto 2 decimal points.</p>
  `,
  solution_html: `
    

    <p>
      <strong>Profit After Tax (PAT) or Net Income</strong><br>
      = ₹ 8000 crores (1 − 0.30)<br>
      = <strong>₹ 5600 crores</strong>
    </p>

    <p>
      <strong>Free Cash Flow to Equity (FCFE)</strong> = Net Income − Capital Expenditures + Depreciation −/+ Change in Net Working Capital + New Debt Issued − Debt Repayments + Net issue of Preference Shares − Preference Share Dividends
    </p>

    <p>
      FCFE = ₹ 5600 crores − ₹ 20140 crore + ₹ 17100 crore − ₹ 1755.60 crore + ₹ 2062.108 crore
    </p>

    <p>
      <strong>FCFE = ₹ 2866.508 crore</strong>
    </p>

    <p>
      <strong>Cost of Equity (K<sub>e</sub>)</strong> = R<sub>f</sub> + β (R<sub>m</sub> − R<sub>f</sub>)<br>
      or R<sub>f</sub> + β × Market Risk Premium
    </p>

    <p>
      = 9.50% + 0.1 × 3.10%<br>
      = <strong>9.81%</strong>
    </p>

    <p>
      <strong>Value of Equity</strong>
    </p>

    <p>
      = FCFE (1 + g) / (K<sub>e</sub> − g)
    </p>

    <p>
      = ₹ 2866.508 crore (1.07) / (0.0981 − 0.07)
    </p>

    <p>
      = ₹ 3067.1636 crore / 0.0281
    </p>

    <p>
      = <strong>₹ 109151.7295 crore</strong>
    </p>

    <p>
      <strong>Value of one Equity Share</strong>
    </p>

    <p>
      = ₹ 109151.7295 crore / 380 crore
    </p>

    <p>
      = <strong>₹ 287.24</strong>
    </p>

    <p><strong>Alternatively, it can also be calculated by using per share basis as follows:</strong></p>

    <p>
      <strong>FCFE per share</strong>
    </p>

    <p>
      = FCFE / No. of Equity Shares
    </p>

    <p>
      = ₹ 2866.508 crore / 380 crore
    </p>

    <p>
      = <strong>₹ 7.5434</strong>
    </p>

    <p>
      <strong>Value of per equity share</strong>
    </p>

    <p>
      = FCFE (1 + g) / (K<sub>e</sub> − g)
    </p>

    <p>
      = 7.5434 (1.07) / (0.0981 − 0.07)
    </p>

    <p>
      = 8.0714 / 0.0281
    </p>

    <p>
      = <strong>₹ 287.24</strong>
    </p>
  `
},
{
  question_id: "AFM_MTPNOV24II_Q2B",
  source: "ICAI Mock Test Paper - Series II, October 2024",
  chapter_name: "Capital Budgeting",
  placement: 2,
  marks: 8,
  question_html: `
    <p> A multinational company is planning to set up a subsidiary company in India (where hitherto it was exporting) in view of growing demand for its product and competition from other MNCs. The initial project cost (consisting of Plant and Machinery including installation) is estimated to be US$ 500 million. The net working capital requirements are estimated at US$ 50 million. The company follows straight line method of depreciation. Presently, the company is exporting two million units every year at a unit price of US$ 80, its variable cost per unit being US$ 40.</p>

    <p>The Chief Financial Officer has estimated the following operating cost and other data in respect of proposed project:</p>

    <ol type="i">
      <li>Variable operating cost will be US$ 20 per unit of production;</li>
      <li>Additional cash fixed cost will be US$ 30 million p.a. and project's share of allocated fixed cost will be US$ 3 million p.a. based on principle of ability to share;</li>
      <li>Production capacity of the proposed project in India will be 5 million units;</li>
      <li>Expected useful life of the proposed plant is five years with no salvage value;</li>
      <li>Existing working capital investment for production &amp; sale of two million units through exports was US$ 15 million;</li>
      <li>Export of the product in the coming year will decrease to 1.5 million units in case the company does not open subsidiary company in India, in view of the presence of competing MNCs that are in the process of setting up their subsidiaries in India;</li>
      <li>Applicable Corporate Income Tax rate is 35%; and</li>
      <li>Required rate of return for such project is 12%.</li>
    </ol>

    <p>Assuming that there will be no variation in the exchange rate of two currencies and all profits will be repatriated, as there will be no withholding tax, estimate <strong>Net Present Value (NPV)</strong> of the proposed project in India.</p>

    <p><strong>Present Value Interest Factors (PVIF) @ 12% for five years are as below:</strong></p>

    <table border="1" cellspacing="0" cellpadding="6">
      <thead>
        <tr>
          <th>Year</th>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th>4</th>
          <th>5</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>PVIF</strong></td>
          <td>0.8929</td>
          <td>0.7972</td>
          <td>0.7118</td>
          <td>0.6355</td>
          <td>0.5674</td>
        </tr>
      </tbody>
    </table>
  `,
  solution_html: `
    

    <p><strong>Financial Analysis whether to set up the manufacturing units in India or not may be carried using NPV technique as follows:</strong></p>

    <p><strong>I. Incremental Cash Outflows</strong></p>

    <table border="1" cellspacing="0" cellpadding="6">
      <thead>
        <tr>
          <th>Particulars</th>
          <th>US$ Million</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cost of Plant and Machinery</td>
          <td>500.00</td>
        </tr>
        <tr>
          <td>Working Capital</td>
          <td>50.00</td>
        </tr>
        <tr>
          <td>Less: Release of existing Working Capital</td>
          <td>(15.00)</td>
        </tr>
        <tr>
          <td><strong>Total Initial Outflow</strong></td>
          <td><strong>535.00</strong></td>
        </tr>
      </tbody>
    </table>

    <p><strong>II. Incremental Cash Inflow after Tax (CFAT)</strong></p>

    <p><strong>(1) Generated by investment in India for 5 years</strong></p>

    <table border="1" cellspacing="0" cellpadding="6">
      <thead>
        <tr>
          <th>Particulars</th>
          <th>US$ Million</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Sales Revenue (5 Million × US$ 80)</td>
          <td>400.00</td>
        </tr>
        <tr>
          <td colspan="2"><strong>Less: Costs</strong></td>
        </tr>
        <tr>
          <td>Variable Cost (5 Million × US$ 20)</td>
          <td>100.00</td>
        </tr>
        <tr>
          <td>Fixed Cost</td>
          <td>30.00</td>
        </tr>
        <tr>
          <td>Depreciation (US$ 500 Million ÷ 5)</td>
          <td>100.00</td>
        </tr>
        <tr>
          <td>EBIT</td>
          <td>170.00</td>
        </tr>
        <tr>
          <td>Taxes @ 35%</td>
          <td>59.50</td>
        </tr>
        <tr>
          <td>EAT</td>
          <td>110.50</td>
        </tr>
        <tr>
          <td>Add: Depreciation</td>
          <td>100.00</td>
        </tr>
        <tr>
          <td><strong>CFAT (Years 1–5)</strong></td>
          <td><strong>210.50</strong></td>
        </tr>
      </tbody>
    </table>

    <p><strong>(2) Cash flow at the end of the 5 years (Release of Working Capital)</strong></p>

    <table border="1" cellspacing="0" cellpadding="6">
      <thead>
        <tr>
          <th>Particulars</th>
          <th>US$ Million</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Release of Working Capital</td>
          <td>35.00</td>
        </tr>
      </tbody>
    </table>

    <p><strong>(3) Cash generation by exports (Opportunity Cost)</strong></p>

    <table border="1" cellspacing="0" cellpadding="6">
      <thead>
        <tr>
          <th>Particulars</th>
          <th>US$ Million</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Sales Revenue (1.5 Million × US$ 80)</td>
          <td>120.00</td>
        </tr>
        <tr>
          <td>Less: Variable Cost (1.5 Million × US$ 40)</td>
          <td>60.00</td>
        </tr>
        <tr>
          <td>Contribution before tax</td>
          <td>60.00</td>
        </tr>
        <tr>
          <td>Tax @ 35%</td>
          <td>21.00</td>
        </tr>
        <tr>
          <td><strong>CFAT (Years 1–5)</strong></td>
          <td><strong>39.00</strong></td>
        </tr>
      </tbody>
    </table>

    <p><strong>(4) Additional CFAT attributable to Foreign Investment</strong></p>

    <table border="1" cellspacing="0" cellpadding="6">
      <thead>
        <tr>
          <th>Particulars</th>
          <th>US$ Million</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Through setting up subsidiary in India</td>
          <td>210.50</td>
        </tr>
        <tr>
          <td>Less: Through Exports in India</td>
          <td>39.00</td>
        </tr>
        <tr>
          <td><strong>CFAT (Years 1–5)</strong></td>
          <td><strong>171.50</strong></td>
        </tr>
      </tbody>
    </table>

    <p><strong>III. Determination of NPV</strong></p>

    <table border="1" cellspacing="0" cellpadding="6">
      <thead>
        <tr>
          <th>Year</th>
          <th>CFAT (US$ Million)</th>
          <th>PVF @ 12%</th>
          <th>PV (US$ Million)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1–5</td>
          <td>171.50</td>
          <td>3.6048</td>
          <td>618.2232</td>
        </tr>
        <tr>
          <td>5</td>
          <td>35.00</td>
          <td>0.5674</td>
          <td>19.8590</td>
        </tr>
        <tr>
          <td colspan="3"><strong>Total Present Value of Cash Inflows</strong></td>
          <td><strong>638.0822</strong></td>
        </tr>
        <tr>
          <td colspan="3">Less: Initial Outflow</td>
          <td>535.0000</td>
        </tr>
        <tr>
          <td colspan="3"><strong>Net Present Value (NPV)</strong></td>
          <td><strong>103.0822</strong></td>
        </tr>
      </tbody>
    </table>

    <p><strong>Since NPV is positive, the proposal should be accepted.</strong></p>
  `
},
{
  question_id: "AFM_MTPNOV24II_Q3A",
  source: "ICAI Mock Test Paper - Series II, October 2024",
  chapter_name: "Security Analysis & Portfolio Management",
  placement: 3,
  marks: 10,
  question_html: `
    <p> Following are the details of a portfolio consisting of three shares:</p>

    <table border="1" cellspacing="0" cellpadding="6">
      <thead>
        <tr>
          <th>Share</th>
          <th>Portfolio Weight</th>
          <th>Beta</th>
          <th>Expected Return (%)</th>
          <th>Total Variance</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>A</td>
          <td>0.20</td>
          <td>0.40</td>
          <td>14</td>
          <td>0.015</td>
        </tr>
        <tr>
          <td>B</td>
          <td>0.50</td>
          <td>0.50</td>
          <td>15</td>
          <td>0.025</td>
        </tr>
        <tr>
          <td>C</td>
          <td>0.30</td>
          <td>1.10</td>
          <td>21</td>
          <td>0.100</td>
        </tr>
      </tbody>
    </table>

    <p><strong>Standard Deviation of Market Portfolio Returns = 10%</strong></p>

    <p>You are given the following additional data:</p>

    <table border="1" cellspacing="0" cellpadding="6">
      <tbody>
        <tr>
          <td>Covariance (A, B)</td>
          <td>0.030</td>
        </tr>
        <tr>
          <td>Covariance (A, C)</td>
          <td>0.020</td>
        </tr>
        <tr>
          <td>Covariance (B, C)</td>
          <td>0.040</td>
        </tr>
      </tbody>
    </table>

    <p>Calculate the following:</p>

    <ol type="i">
      <li>The Portfolio Beta</li>
      <li>Residual variance of each of the three shares</li>
      <li>Portfolio variance using Sharpe Index Model</li>
      <li>Portfolio variance (on the basis of modern portfolio theory given by Markowitz)</li>
    </ol>
  `,
  solution_html: `
    

    <p><strong>(i) Portfolio Beta</strong></p>

    <p>
      = (0.20 × 0.40) + (0.50 × 0.50) + (0.30 × 1.10)
    </p>

    <p>
      = 0.08 + 0.25 + 0.33
    </p>

    <p>
      <strong>= 0.66</strong>
    </p>

    <p><strong>(ii) Residual Variance</strong></p>

    <p>To determine Residual Variance first of all we shall compute the Systematic Risk as follows:</p>

    <table border="1" cellspacing="0" cellpadding="6">
      <thead>
        <tr>
          <th>Share</th>
          <th>Systematic Risk (β<sup>2</sup> × σ<sub>M</sub><sup>2</sup>)</th>
          <th>Residual Variance</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>A</td>
          <td>(0.40)<sup>2</sup> × (0.01) = 0.0016</td>
          <td>0.015 − 0.0016 = <strong>0.0134</strong></td>
        </tr>
        <tr>
          <td>B</td>
          <td>(0.50)<sup>2</sup> × (0.01) = 0.0025</td>
          <td>0.025 − 0.0025 = <strong>0.0225</strong></td>
        </tr>
        <tr>
          <td>C</td>
          <td>(1.10)<sup>2</sup> × (0.01) = 0.0121</td>
          <td>0.100 − 0.0121 = <strong>0.0879</strong></td>
        </tr>
      </tbody>
    </table>

    <p><strong>(iii) Portfolio Variance using Sharpe Index Model</strong></p>

    <p>
      Systematic Variance of Portfolio
      = (0.10)<sup>2</sup> × (0.66)<sup>2</sup>
      = <strong>0.004356</strong>
    </p>

    <p>
      Unsystematic Variance of Portfolio
      = 0.0134 × (0.20)<sup>2</sup>
      + 0.0225 × (0.50)<sup>2</sup>
      + 0.0879 × (0.30)<sup>2</sup>
      = <strong>0.014072</strong>
    </p>

    <p>
      Total Variance
      = 0.004356 + 0.014072
      = <strong>0.018428</strong>
    </p>

    <p><strong>(iv) Portfolio Variance on the basis of Markowitz Theory</strong></p>

    <p>
      = (w<sub>A</sub> × w<sub>A</sub> × σ<sub>A</sub><sup>2</sup>)
      + (w<sub>A</sub> × w<sub>B</sub> × Cov<sub>AB</sub>)
      + (w<sub>A</sub> × w<sub>C</sub> × Cov<sub>AC</sub>)
      + (w<sub>B</sub> × w<sub>A</sub> × Cov<sub>AB</sub>)
      + (w<sub>B</sub> × w<sub>B</sub> × σ<sub>B</sub><sup>2</sup>)
      + (w<sub>B</sub> × w<sub>C</sub> × Cov<sub>BC</sub>)
      + (w<sub>C</sub> × w<sub>A</sub> × Cov<sub>CA</sub>)
      + (w<sub>C</sub> × w<sub>B</sub> × Cov<sub>CB</sub>)
      + (w<sub>C</sub> × w<sub>C</sub> × σ<sub>C</sub><sup>2</sup>)
    </p>

    <p>
      = (0.20 × 0.20 × 0.015)
      + (0.20 × 0.50 × 0.030)
      + (0.20 × 0.30 × 0.020)
      + (0.20 × 0.50 × 0.030)
      + (0.50 × 0.50 × 0.025)
      + (0.50 × 0.30 × 0.040)
      + (0.30 × 0.20 × 0.020)
      + (0.30 × 0.50 × 0.040)
      + (0.30 × 0.30 × 0.100)
    </p>

    <p>
      = 0.0006
      + 0.0030
      + 0.0012
      + 0.0030
      + 0.00625
      + 0.0060
      + 0.0012
      + 0.0060
      + 0.0090
    </p>

    <p>
      <strong>= 0.0363</strong>
    </p>
  `
},
{
  question_id: "AFM_MTPNOV24II_Q3B",
  source: "ICAI Mock Test Paper - Series II, October 2024",
  chapter_name: "Risk Management",
  placement: 3,
  marks: 4,
  question_html: `
    <p><strong>(b) Either</strong></p>

    <p>Explain briefly various types of interest rate risk faced by companies/banks.</p>
  `,
  solution_html: `
    

    <p><strong>Various types of Interest rate risk faced by companies/banks are as follows:</strong></p>

    <ol>
      <li>
        <p><strong>Gap Exposure:</strong> A gap or mismatch risk arises from holding assets and liabilities and off-balance sheet items with different principal amounts, maturity dates or re-pricing dates, thereby creating exposure to unexpected changes in the level of market interest rates. This exposure is more important in relation to banking business.</p>
      </li>

      <li>
        <p><strong>Basis Risk:</strong> Market interest rates of various instruments seldom change by the same degree during a given period of time. The risk that the interest rate of different assets, liabilities and off-balance sheet items may change in different magnitude is termed as basis risk. For example, while assets may be benchmarked to Fixed Rate of Interest, liabilities may be benchmarked to floating rate of interest. The degree of basis risk is fairly high in respect of banks that create composite assets out of composite liabilities.</p>
      </li>

      <li>
        <p><strong>Embedded Option Risk:</strong> Significant changes in market interest rates create another source of risk to banks’ profitability by encouraging prepayment of cash credit/demand loans/term loans and exercise of call/put options on bonds/debentures and/or premature withdrawal of term deposits before their stated maturities.</p>
      </li>

      <li>
        <p><strong>Yield Curve Risk:</strong> The movements in yield curve are rather frequent when the economy moves through business cycles. Thus, banks should evaluate the movement in yield curves and its impact on the portfolio values and income.</p>
      </li>

      <li>
        <p><strong>Price Risk:</strong> Price risk occurs when assets are sold before their stated maturities. In the financial market, bond prices and yields are inversely related. The price risk is closely associated with the trading book, which is created for making profit out of short-term movements in interest rates.</p>

        <p>Banks which have an active trading book should, therefore, formulate policies to limit the portfolio size, holding period, duration, defeasance period, stop loss limits, marking to market, etc.</p>
      </li>

      <li>
        <p><strong>Reinvestment Risk:</strong> Uncertainty with regard to interest rate at which the future cash flows could be reinvested is called reinvestment risk. Any mismatches in cash flows would expose the banks to variations in NII as the market interest rates move in different directions.</p>
      </li>
    </ol>
  `
},
{
  question_id: "AFM_MTPNOV24II_Q3B_OR",
  source: "ICAI Mock Test Paper - Series II, October 2024",
  chapter_name: "FinTech",
  placement: 3,
  marks: 4,
  question_html: `
    <p><strong>(b) Or</strong></p>

    <p>Explain the various areas where Blockchain can be applied.</p>
  `,
  solution_html: `
    

    <p><strong>Some of the areas where the Blockchain can be applied are as follows:</strong></p>

    <ol type="i">
      <li>
        <p><strong>Financial Services:</strong> Blockchain can be used to provide an automated trade lifecycle in terms of the transaction log of any transaction of asset or property - whether physical or digital such as laptops, smartphones, automobiles, real estate, etc. from one person to another.</p>
      </li>

      <li>
        <p><strong>Healthcare:</strong> Blockchain provides secure sharing of data in healthcare industry by increasing the privacy, security, and interoperability of the data by eliminating the interference of third party and avoiding the overhead costs.</p>
      </li>

      <li>
        <p><strong>Government:</strong> At the government front, there are instances where the technical decentralization is necessary but politically should be governed by governments like land registration, vehicle registration and management, e-voting etc. Blockchain improves the transparency and provides a better way to monitor and audit the transactions in these systems.</p>
      </li>

      <li>
        <p><strong>Travel Industry:</strong> Blockchain can be applied in money transactions and in storing important documents like passports/other identification cards, reservations and managing travel insurance, loyalty, and rewards thus, changing the working of travel and hospitality industry.</p>
      </li>

      <li>
        <p><strong>Economic Forecasts:</strong> Blockchain makes possible the financial and economic forecasts based on decentralized prediction markets, decentralized voting, and stock trading, thus enabling the organizations to plan and shape their businesses.</p>
      </li>
    </ol>
  `
},
{
  question_id: "AFM_MTPNOV24II_Q4A",
  source: "ICAI Mock Test Paper - Series II, October 2024",
  chapter_name: "Mutual Funds",
  placement: 4,
  marks: 10,
  question_html: `
    <p> On 1st April, an open ended scheme of mutual fund had 300 lakh units outstanding with Net Assets Value (NAV) of ₹ 18.75. At the end of April, it issued 6 lakh units at opening NAV plus 2% load, adjusted for dividend equalization. At the end of May, 3 lakh units were repurchased at opening NAV less 2% exit load adjusted for dividend equalization. At the end of June, 70% of its available income was distributed.</p>

    <p>In respect of April-June quarter, the following additional information are available:</p>

    <table border="1" cellspacing="0" cellpadding="6">
      <thead>
        <tr>
          <th>Particulars</th>
          <th>₹ in lakh</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Portfolio value appreciation</td>
          <td>425.47</td>
        </tr>
        <tr>
          <td>Income of April</td>
          <td>22.950</td>
        </tr>
        <tr>
          <td>Income for May</td>
          <td>34.425</td>
        </tr>
        <tr>
          <td>Income for June</td>
          <td>45.450</td>
        </tr>
      </tbody>
    </table>

    <p>You are required to calculate:</p>

    <ol type="i">
      <li>Income available for distribution;</li>
      <li>Issue price at the end of April;</li>
      <li>Repurchase price at the end of May; and</li>
      <li>Net Asset Value (NAV) as on 30th June.</li>
    </ol>
  `,
  solution_html: `
    

    <p><strong>(i) Calculation of Income available for Distribution</strong></p>

    <table border="1" cellspacing="0" cellpadding="6">
      <thead>
        <tr>
          <th>Particulars</th>
          <th>Units (Lakh)</th>
          <th>Per Unit (₹)</th>
          <th>Total (₹ in lakh)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Income from April</td>
          <td>300</td>
          <td>0.0765</td>
          <td>22.9500</td>
        </tr>
        <tr>
          <td>Add: Dividend equalization collected on issue</td>
          <td>6</td>
          <td>0.0765</td>
          <td>0.4590</td>
        </tr>
        <tr>
          <td></td>
          <td>306</td>
          <td>0.0765</td>
          <td>23.4090</td>
        </tr>
        <tr>
          <td>Add: Income from May</td>
          <td>306</td>
          <td>0.1125</td>
          <td>34.4250</td>
        </tr>
        <tr>
          <td></td>
          <td>306</td>
          <td>0.1890</td>
          <td>57.8340</td>
        </tr>
        <tr>
          <td>Less: Dividend equalization paid on repurchase</td>
          <td>3</td>
          <td>0.1890</td>
          <td>(0.5670)</td>
        </tr>
        <tr>
          <td></td>
          <td>303</td>
          <td>0.1890</td>
          <td>57.2670</td>
        </tr>
        <tr>
          <td>Add: Income from June</td>
          <td>303</td>
          <td>0.1500</td>
          <td>45.4500</td>
        </tr>
        <tr>
          <td></td>
          <td>303</td>
          <td>0.3390</td>
          <td>102.7170</td>
        </tr>
        <tr>
          <td>Less: Dividend Paid</td>
          <td>303</td>
          <td>0.2373</td>
          <td>(71.9019)</td>
        </tr>
        <tr>
          <td><strong>Income available for distribution</strong></td>
          <td>303</td>
          <td>0.1017</td>
          <td><strong>30.8151</strong></td>
        </tr>
      </tbody>
    </table>

    <p><strong>(ii) Calculation of Issue Price at the end of April</strong></p>

    <table border="1" cellspacing="0" cellpadding="6">
      <tbody>
        <tr>
          <td>Opening NAV</td>
          <td>18.750</td>
        </tr>
        <tr>
          <td>Add: Entry Load (2% of ₹ 18.750)</td>
          <td>0.375</td>
        </tr>
        <tr>
          <td></td>
          <td>19.125</td>
        </tr>
        <tr>
          <td>Add: Dividend Equalization paid on Issue Price</td>
          <td>0.0765</td>
        </tr>
        <tr>
          <td><strong>Issue Price</strong></td>
          <td><strong>19.2015</strong></td>
        </tr>
      </tbody>
    </table>

    <p><strong>(iii) Calculation of Repurchase Price at the end of May</strong></p>

    <table border="1" cellspacing="0" cellpadding="6">
      <tbody>
        <tr>
          <td>Opening NAV</td>
          <td>18.750</td>
        </tr>
        <tr>
          <td>Less: Exit Load (2% of ₹ 18.750)</td>
          <td>(0.375)</td>
        </tr>
        <tr>
          <td></td>
          <td>18.375</td>
        </tr>
        <tr>
          <td>Add: Dividend Equalization paid on Issue Price</td>
          <td>0.1890</td>
        </tr>
        <tr>
          <td><strong>Repurchase Price</strong></td>
          <td><strong>18.5640</strong></td>
        </tr>
      </tbody>
    </table>

    <p><strong>(iv) Closing NAV</strong></p>

    <table border="1" cellspacing="0" cellpadding="6">
      <thead>
        <tr>
          <th>Particulars</th>
          <th>₹ (Lakh)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Opening Net Asset Value (₹ 18.75 × 300)</td>
          <td>5625.0000</td>
        </tr>
        <tr>
          <td>Portfolio Value Appreciation</td>
          <td>425.4700</td>
        </tr>
        <tr>
          <td>Issue of Fresh Units (6 × 19.2015)</td>
          <td>115.2090</td>
        </tr>
        <tr>
          <td>Income Received (22.950 + 34.425 + 45.450)</td>
          <td>102.8250</td>
        </tr>
        <tr>
          <td></td>
          <td>6268.5040</td>
        </tr>
        <tr>
          <td>Less: Units repurchased (3 × 18.564)</td>
          <td>(55.6920)</td>
        </tr>
        <tr>
          <td>Income Distributed</td>
          <td>(71.9019)</td>
        </tr>
        <tr>
          <td><strong>Closing Net Asset Value</strong></td>
          <td><strong>6140.9101</strong></td>
        </tr>
      </tbody>
    </table>

    <p>
      Closing Units = (300 + 6 − 3) lakh = <strong>303 lakh</strong>
    </p>

    <p>
      <strong>Closing NAV as on 30th June</strong><br>
      = ₹ 6140.9101 lakh / 303 lakh<br>
      = <strong>₹ 20.2670</strong>
    </p>
  `
},
{
  question_id: "AFM_MTPNOV24II_Q4B",
  source: "ICAI Mock Test Paper - Series II, October 2024",
  chapter_name: "Foreign Exchange Risk Management",
  placement: 4,
  marks: 4,
  question_html: `
    <p> Followings are the spot exchange rates quoted at three different forex markets:</p>

    <table border="1" cellspacing="0" cellpadding="6">
      <thead>
        <tr>
          <th>Currency Pair</th>
          <th>Spot Exchange Rate</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>USD/INR</td>
          <td>48.30 in Mumbai</td>
        </tr>
        <tr>
          <td>GBP/INR</td>
          <td>77.52 in London</td>
        </tr>
        <tr>
          <td>GBP/USD</td>
          <td>1.6231 in New York</td>
        </tr>
      </tbody>
    </table>

    <p>The arbitrageur has <strong>USD 1,00,00,000</strong>. Assuming that there are no transaction costs, explain whether there is any arbitrage gain possible from the quoted spot exchange rates.</p>
  `,
  solution_html: `
    

    <p>The arbitrageur can proceed as stated below to realize arbitrage gains.</p>

    <p><strong>(i) Buy ₹ from USD 10,000,000 at Mumbai</strong></p>

    <p>
      ₹ = 48.30 × 10,000,000
    </p>

    <p>
      <strong>₹ 483,000,000</strong>
    </p>

    <p><strong>(ii) Convert these ₹ to GBP at London</strong></p>

    <p>
      GBP = ₹ 483,000,000 / ₹ 77.52
    </p>

    <p>
      <strong>GBP 6,230,650.155</strong>
    </p>

    <p><strong>(iii) Convert GBP to USD at New York</strong></p>

    <p>
      USD = GBP 6,230,650.155 × 1.6231
    </p>

    <p>
      <strong>USD 10,112,968.26</strong>
    </p>

    <p>
      <strong>Net Arbitrage Gain</strong>
    </p>

    <p>
      = USD 10,112,968.26 − USD 10,000,000
    </p>

    <p>
      = <strong>USD 112,968.26</strong>
    </p>

    <p><strong>Hence, there is an arbitrage gain of USD 112,968.26.</strong></p>
  `
},
{
  question_id: "AFM_MTPNOV24II_Q5A",
  source: "ICAI Mock Test Paper - Series II, October 2024",
  chapter_name: "Corporate Restructuring",
  placement: 5,
  marks: 10,
  question_html: `
    <p>ICL is proposing to take over SVL with an objective to diversify. While ICL growth rate is 18%, the SVL growth rate is 15%. Both the companies pay dividend regularly. The summarized Profit &amp; Loss Account of both the companies are as follows:</p>

    <p><strong>₹ in Crores</strong></p>

    <table border="1" cellspacing="0" cellpadding="6">
      <thead>
        <tr>
          <th>Particulars</th>
          <th>ICL</th>
          <th>SVL</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Net Sales</td>
          <td>9090</td>
          <td>3000</td>
        </tr>
        <tr>
          <td>PBIT</td>
          <td>5960</td>
          <td>1440</td>
        </tr>
        <tr>
          <td>Interest</td>
          <td>1500</td>
          <td>50</td>
        </tr>
        <tr>
          <td>Provision for Tax</td>
          <td>2880</td>
          <td>890</td>
        </tr>
        <tr>
          <td>PAT</td>
          <td>1580</td>
          <td>500</td>
        </tr>
        <tr>
          <td>Dividends</td>
          <td>470</td>
          <td>304.35</td>
        </tr>
      </tbody>
    </table>

    <table border="1" cellspacing="0" cellpadding="6">
      <thead>
        <tr>
          <th>Particulars</th>
          <th>ICL</th>
          <th>SVL</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Land &amp; Building (Net)</td>
          <td>1440</td>
          <td>380</td>
        </tr>
        <tr>
          <td>Plant &amp; Machinery (Net)</td>
          <td>1800</td>
          <td>700</td>
        </tr>
        <tr>
          <td>Furniture &amp; Fixtures (Net)</td>
          <td>60</td>
          <td>20</td>
        </tr>
        <tr>
          <td><strong>Fixed Assets</strong></td>
          <td>3300</td>
          <td>1100</td>
        </tr>
        <tr>
          <td>Current Assets</td>
          <td>1550</td>
          <td>470</td>
        </tr>
        <tr>
          <td><strong>Total Assets</strong></td>
          <td>4850</td>
          <td>1570</td>
        </tr>
        <tr>
          <td>Creditors</td>
          <td>460</td>
          <td>260</td>
        </tr>
        <tr>
          <td>Overdrafts</td>
          <td>70</td>
          <td>20</td>
        </tr>
        <tr>
          <td>Provision for Tax</td>
          <td>290</td>
          <td>100</td>
        </tr>
        <tr>
          <td>Provision for Dividends</td>
          <td>120</td>
          <td>100</td>
        </tr>
        <tr>
          <td><strong>Current Liabilities</strong></td>
          <td>940</td>
          <td>480</td>
        </tr>
        <tr>
          <td><strong>Net Assets</strong></td>
          <td>3910</td>
          <td>1090</td>
        </tr>
        <tr>
          <td>Paid up Share Capital (₹ 10 per share)</td>
          <td>500</td>
          <td>250</td>
        </tr>
        <tr>
          <td>Reserves and Surplus</td>
          <td>2100</td>
          <td>1310</td>
        </tr>
        <tr>
          <td>Borrowing</td>
          <td>1310</td>
          <td>210</td>
        </tr>
        <tr>
          <td><strong>Capital Employed</strong></td>
          <td>3910</td>
          <td>1780</td>
        </tr>
        <tr>
          <td>Market Price per Share (₹)</td>
          <td>175</td>
          <td>98</td>
        </tr>
        <tr>
          <td>Cost of Equity</td>
          <td>25%</td>
          <td>20%</td>
        </tr>
      </tbody>
    </table>

    <p>ICL’s Land &amp; Buildings are stated at current prices. SVL’s Land &amp; Buildings are revalued three years ago. There has been an increase of 7.65% per year in the value of Land &amp; Buildings.</p>

    <p>SVL is expected to grow @ 18% each year, after merger.</p>

    <p>ICL is interested to do justice to the shareholders of both the Companies. For the swap ratio weights are assigned to different parameters by the Board of Directors as follows:</p>

    <table border="1" cellspacing="0" cellpadding="6">
      <tbody>
        <tr>
          <td>Net Worth Per Share*</td>
          <td>25%</td>
        </tr>
        <tr>
          <td>EPS (Earning per share)</td>
          <td>30%</td>
        </tr>
        <tr>
          <td>Share price as per Dividend Growth Model</td>
          <td>20%</td>
        </tr>
        <tr>
          <td>Market Price per share</td>
          <td>25%</td>
        </tr>
      </tbody>
    </table>

    <p>* After required adjustment.</p>

    <p>You are required to suggest the swap ratio based on above weights and total number of shares.</p>

    <p><strong>Note:</strong> Round off calculations upto two decimal points.</p>
  `,
  solution_html: `
    <p><strong>Working Notes:</strong></p>

    <p><strong>(i) Computation of Net Worth Per Share of SVL</strong></p>

    <table border="1" cellspacing="0" cellpadding="6">
      <tbody>
        <tr>
          <td>Total Assets (Fixed Assets + Current Assets)</td>
          <td>₹ 2260 Crores</td>
        </tr>
        <tr>
          <td>Less: Liabilities (Current Liabilities + Borrowings)</td>
          <td>(₹ 690 Crores)</td>
        </tr>
        <tr>
          <td>Net Assets Value</td>
          <td>₹ 1570 Crores</td>
        </tr>
        <tr>
          <td>Current Value of Land after growing for three years @ 7.65% p.a.</td>
          <td>₹ 474.05 Crores*</td>
        </tr>
        <tr>
          <td>Less: Book Value</td>
          <td>(₹ 380.00 Crores)</td>
        </tr>
        <tr>
          <td>Increase in Value of Land</td>
          <td>₹ 94.05 Crores</td>
        </tr>
        <tr>
          <td>Adjusted NAV</td>
          <td>₹ 1664.05 Crores</td>
        </tr>
        <tr>
          <td>No. of Shares</td>
          <td>25 Crores</td>
        </tr>
        <tr>
          <td><strong>Net Worth Per Share</strong></td>
          <td><strong>₹ 66.56</strong></td>
        </tr>
      </tbody>
    </table>

    <p><em>* Alternatively, this value can also be computed as ₹ 475 Crores.</em></p>

    <p><strong>(ii) Computation of Net Worth Per Share of ICL</strong></p>

    <p>
      Share Capital + Reserves &amp; Surplus = ₹ 2600 Crores<br>
      Total Number of Shares = 50 Crores
    </p>

    <p>
      <strong>Net Worth Per Share = ₹ 2600 Crores / 50 Crores = ₹ 52.00</strong>
    </p>

    <p><strong>(iii) Earnings Per Share (EPS)</strong></p>

    <table border="1" cellspacing="0" cellpadding="6">
      <thead>
        <tr>
          <th>Particulars</th>
          <th>ICL</th>
          <th>SVL</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>PAT</td>
          <td>₹ 1580 Crores</td>
          <td>₹ 500 Crores</td>
        </tr>
        <tr>
          <td>No. of Shares</td>
          <td>50 Crores</td>
          <td>25 Crores</td>
        </tr>
        <tr>
          <td><strong>EPS</strong></td>
          <td><strong>₹ 31.60</strong></td>
          <td><strong>₹ 20.00</strong></td>
        </tr>
      </tbody>
    </table>

    <p><strong>(iv) Share Price as per Dividend Growth Model</strong></p>

    <table border="1" cellspacing="0" cellpadding="6">
      <thead>
        <tr>
          <th>Particulars</th>
          <th>ICL</th>
          <th>SVL</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Total Dividend</td>
          <td>₹ 470 Crores</td>
          <td>₹ 304.35 Crores</td>
        </tr>
        <tr>
          <td>No. of Shares</td>
          <td>50 Crores</td>
          <td>25 Crores</td>
        </tr>
        <tr>
          <td>Dividend Per Share (D₀)</td>
          <td>₹ 9.40</td>
          <td>₹ 12.17</td>
        </tr>
        <tr>
          <td>Expected Dividend (D₁)</td>
          <td>₹ 9.40 × (1 + 0.18) = ₹ 11.09</td>
          <td>₹ 12.17 × (1 + 0.15) = ₹ 14.00</td>
        </tr>
        <tr>
          <td>Value per Share</td>
          <td>11.09 / (0.25 − 0.18) = <strong>₹ 158.43</strong></td>
          <td>14.00 / (0.20 − 0.15) = <strong>₹ 280.00</strong></td>
        </tr>
      </tbody>
    </table>

    <p><strong>Calculation of Swap Ratio</strong></p>

    <table border="1" cellspacing="0" cellpadding="6">
      <thead>
        <tr>
          <th>Basis</th>
          <th>Swap Ratio</th>
          <th>Weighted Ratio</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Net Worth Per Share</td>
          <td>1 : 1.28</td>
          <td>0.32</td>
        </tr>
        <tr>
          <td>EPS</td>
          <td>1 : 0.63</td>
          <td>0.19</td>
        </tr>
        <tr>
          <td>Share Price as per Dividend Growth Model</td>
          <td>1 : 1.77</td>
          <td>0.35</td>
        </tr>
        <tr>
          <td>Market Price</td>
          <td>1 : 0.56</td>
          <td>0.14</td>
        </tr>
        <tr>
          <td colspan="2"><strong>Total</strong></td>
          <td><strong>1.00</strong></td>
        </tr>
      </tbody>
    </table>

    <p><strong>Swap ratio is for every one share of SVL, to issue 1 share of ICL.</strong></p>

    <p><strong>Hence, total number of shares to be issued = 25 crores.</strong></p>
  `
},
{
  question_id: "AFM_MTPNOV24II_Q5B",
  source: "ICAI Mock Test Paper - Series II, October 2024",
  chapter_name: "International Finance",
  placement: 5,
  marks: 4,
  question_html: `
    <p>Explain the characteristics of Global Depository Receipts (GDRs).</p>
  `,
  solution_html: `
    <p>The characteristics of Global Depository Receipts (GDRs) are as follows:</p>

    <ol type="i">
      <li>
        Holders of GDRs participate in the economic benefits of being ordinary shareholders, though they do not have voting rights.
      </li>

      <li>
        GDRs are settled through <strong>CEDEL</strong> &amp; <strong>Euro-clear</strong> international book entry systems.
      </li>

      <li>
        GDRs are listed on the <strong>Luxemburg Stock Exchange</strong>.
      </li>

      <li>
        Trading takes place between professional market makers on an <strong>OTC (Over the Counter)</strong> basis.
      </li>

      <li>
        The instruments are freely traded.
      </li>

      <li>
        They are marketed globally without being confined to borders of any market or country, as they can be traded in more than one currency.
      </li>

      <li>
        Investors earn fixed income by way of dividends which are paid in the issuer's currency, converted into dollars by the depository and paid to investors. Hence, the exchange risk is borne by the investor.
      </li>

      <li>
        As far as the case of liquidation of GDRs is concerned, an investor may get the GDR cancelled any time after a cooling period of 45 days. A non-resident holder of GDRs may ask the overseas bank (depository) to redeem (cancel) the GDRs. In that case, the overseas depository bank shall request the domestic custodian bank to cancel the GDR and to get the corresponding underlying shares released in favour of the non-resident investor. The price of the ordinary shares of the issuing company prevailing on the Bombay Stock Exchange or the National Stock Exchange on the date of advice of redemption shall be taken as the cost of acquisition of the underlying ordinary share.
      </li>
    </ol>
  `
},
{
  question_id: "AFM_MTPNOV24II_Q6A",
  source: "ICAI Mock Test Paper - Series II, October 2024",
  chapter_name: "Derivatives",
  placement: 6,
  marks: 8,
  question_html: `
    <p>Sensex futures are traded at a multiple of 50. Consider the following quotations of Sensex futures in the 10 trading days during February, 2009:</p>

    <table border="1" cellspacing="0" cellpadding="6">
      <thead>
        <tr>
          <th>Day</th>
          <th>High</th>
          <th>Low</th>
          <th>Closing</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>4-2-09</td>
          <td>3306.4</td>
          <td>3290.00</td>
          <td>3296.50</td>
        </tr>
        <tr>
          <td>5-2-09</td>
          <td>3298.00</td>
          <td>3262.50</td>
          <td>3294.40</td>
        </tr>
        <tr>
          <td>6-2-09</td>
          <td>3256.20</td>
          <td>3227.00</td>
          <td>3230.40</td>
        </tr>
        <tr>
          <td>7-2-09</td>
          <td>3233.00</td>
          <td>3201.50</td>
          <td>3212.30</td>
        </tr>
        <tr>
          <td>10-2-09</td>
          <td>3281.50</td>
          <td>3256.00</td>
          <td>3267.50</td>
        </tr>
        <tr>
          <td>11-2-09</td>
          <td>3283.50</td>
          <td>3260.00</td>
          <td>3263.80</td>
        </tr>
        <tr>
          <td>12-2-09</td>
          <td>3315.00</td>
          <td>3286.30</td>
          <td>3292.00</td>
        </tr>
        <tr>
          <td>14-2-09</td>
          <td>3315.00</td>
          <td>3257.10</td>
          <td>3309.30</td>
        </tr>
        <tr>
          <td>17-2-09</td>
          <td>3278.00</td>
          <td>3249.50</td>
          <td>3257.80</td>
        </tr>
        <tr>
          <td>18-2-09</td>
          <td>3118.00</td>
          <td>3091.40</td>
          <td>3102.60</td>
        </tr>
      </tbody>
    </table>

    <p>Abshishek bought one Sensex Futures contract on February, 04. The average daily absolute change in the value of contract is ₹ 10,000 and standard deviation of these changes is ₹ 2,000. The maintenance margin is 75% of initial margin.</p>

    <p>You are required to determine the daily balances in the margin account and payment on margin calls, if any.</p>
  `,
  solution_html: `
    <p><strong>Initial Margin</strong></p>

    <p>
      Initial Margin = μ + 3σ
    </p>

    <p>Where,</p>

    <p>
      μ = Daily Absolute Change
    </p>

    <p>
      σ = Standard Deviation
    </p>

    <p>
      Initial Margin = ₹ 10,000 + ₹ 6,000 = <strong>₹ 16,000</strong>
    </p>

    <p>
      Maintenance Margin = ₹ 16,000 × 0.75 = <strong>₹ 12,000</strong>
    </p>

    <table border="1" cellspacing="0" cellpadding="6">
      <thead>
        <tr>
          <th>Day</th>
          <th>Changes in Future Values (₹)</th>
          <th>Margin A/c (₹)</th>
          <th>Call Money (₹)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>4/2/09</td>
          <td>50 × (3294.40 − 3296.50) = -105</td>
          <td>16,000</td>
          <td>-</td>
        </tr>
        <tr>
          <td>5/2/09</td>
          <td>50 × (3230.40 − 3294.40) = -3,200</td>
          <td>15,895</td>
          <td>-</td>
        </tr>
        <tr>
          <td>6/2/09</td>
          <td>50 × (3212.30 − 3230.40) = -905</td>
          <td>12,695</td>
          <td>-</td>
        </tr>
        <tr>
          <td>7/2/09</td>
          <td>50 × (3267.50 − 3212.30) = 2,760</td>
          <td>16,000</td>
          <td>4,210</td>
        </tr>
        <tr>
          <td>10/2/09</td>
          <td>50 × (3263.80 − 3267.50) = -185</td>
          <td>18,760</td>
          <td>-</td>
        </tr>
        <tr>
          <td>11/2/09</td>
          <td>50 × (3292.00 − 3263.80) = 1,410</td>
          <td>18,575</td>
          <td>-</td>
        </tr>
        <tr>
          <td>12/2/09</td>
          <td>50 × (3309.30 − 3292.00) = 865</td>
          <td>19,985</td>
          <td>-</td>
        </tr>
        <tr>
          <td>14/2/09</td>
          <td>50 × (3257.80 − 3309.30) = -2,575</td>
          <td>20,850</td>
          <td>-</td>
        </tr>
        <tr>
          <td>17/2/09</td>
          <td>50 × (3102.60 − 3257.80) = -7,760</td>
          <td>18,275</td>
          <td>-</td>
        </tr>
        <tr>
          <td>18/2/09</td>
          <td>-</td>
          <td>16,000</td>
          <td>5,485</td>
        </tr>
      </tbody>
    </table>
  `
},
{
  question_id: "AFM_MTPNOV24II_Q6B",
  source: "ICAI Mock Test Paper - Series II, October 2024",
  chapter_name: "Security Analysis",
  placement: 6,
  marks: 6,
  question_html: `
    <p>“Technical Analysis has several supporters as well several critics.” Explain this statement.</p>
  `,
  solution_html: `
    <p>To some extent this statement is correct. The advocates of technical analysis offer the following interrelated arguments in their favour:</p>

    <ol type="i">
      <li>
        Under the influence of crowd psychology, trends persist for some time. Tools of technical analysis help in identifying these trends early and assist in investment decision making.
      </li>

      <li>
        Shift in demand and supply are gradual rather than instantaneous. Technical analysis helps in detecting this shift rather early and hence provides clues to future price movements.
      </li>

      <li>
        Fundamental information about a company is observed and assimilated by the market over a period of time. Hence, price movement tends to continue more or less in the same direction till the information is fully assimilated in the stock price.
      </li>
    </ol>

    <p>Detractors of technical analysis believe that it is a useless exercise. Their arguments are as follows:</p>

    <ol type="i">
      <li>
        Most technical analysts are not able to offer a convincing explanation for the tools employed by them.
      </li>

      <li>
        Empirical evidence in support of the Random Walk Hypothesis casts its shadow over the usefulness of technical analysis.
      </li>

      <li>
        By the time an uptrend or downtrend may have been signalled by technical analysis, it may already have taken place.
      </li>

      <li>
        Ultimately, technical analysis must be a self-defeating proposition. With more and more people employing it, the value of such analysis tends to decline.
      </li>
    </ol>
  `
},
{
  question_id: "AFM_MTPMAR25_I_Q1A",
  source: "ICAI Mock Test Paper - Series I, March 2025",
  chapter_name: "Portfolio Theory",
  placement: 1,
  marks: 8,
  question_html: `
    <p>Following are the details of a portfolio consisting of three shares:</p>

    <table border="1" cellpadding="5" cellspacing="0">
      <tr>
        <th>Share</th>
        <th>Portfolio Weight</th>
        <th>Beta</th>
        <th>Expected Return (%)</th>
        <th>Total Variance</th>
      </tr>
      <tr>
        <td>A</td>
        <td>0.20</td>
        <td>0.40</td>
        <td>14</td>
        <td>0.015</td>
      </tr>
      <tr>
        <td>B</td>
        <td>0.50</td>
        <td>0.50</td>
        <td>15</td>
        <td>0.025</td>
      </tr>
      <tr>
        <td>C</td>
        <td>0.30</td>
        <td>1.10</td>
        <td>21</td>
        <td>0.100</td>
      </tr>
    </table>

    <p>Standard Deviation of Market Portfolio Returns = 10%</p>

    <p>You are given the following additional data:</p>

    <p>Covariance (A, B) = 0.030</p>
    <p>Covariance (A, C) = 0.020</p>
    <p>Covariance (B, C) = 0.040</p>

    <p>Calculate the following:</p>

    <ol type="i">
      <li>The Portfolio Beta</li>
      <li>Residual variance of each of the three shares</li>
      <li>Portfolio variance using Sharpe Index Model</li>
      <li>Portfolio variance (on the basis of modern portfolio theory given by Markowitz)</li>
    </ol>
  `,
  solution_html: `
    

    <p><strong>(i) Portfolio Beta</strong></p>

    <p>
      Portfolio Beta = (0.20 × 0.40) + (0.50 × 0.50) + (0.30 × 1.10)
    </p>

    <p>
      = 0.08 + 0.25 + 0.33
    </p>

    <p>
      = <strong>0.66</strong>
    </p>

    <p><strong>(ii) Residual Variance of each share</strong></p>

    <p>To determine Residual Variance, first compute the Systematic Risk:</p>

    <p>
      β²A × σ²M = (0.40)² × (0.10)²
      = 0.16 × 0.01
      = 0.0016
    </p>

    <p>
      β²B × σ²M = (0.50)² × (0.10)²
      = 0.25 × 0.01
      = 0.0025
    </p>

    <p>
      β²C × σ²M = (1.10)² × (0.10)²
      = 1.21 × 0.01
      = 0.0121
    </p>

    <table border="1" cellpadding="5" cellspacing="0">
      <tr>
        <th>Share</th>
        <th>Total Variance</th>
        <th>Systematic Variance</th>
        <th>Residual Variance</th>
      </tr>
      <tr>
        <td>A</td>
        <td>0.0150</td>
        <td>0.0016</td>
        <td>0.0134</td>
      </tr>
      <tr>
        <td>B</td>
        <td>0.0250</td>
        <td>0.0025</td>
        <td>0.0225</td>
      </tr>
      <tr>
        <td>C</td>
        <td>0.1000</td>
        <td>0.0121</td>
        <td>0.0879</td>
      </tr>
    </table>

    <p><strong>(iii) Portfolio Variance using Sharpe Index Model</strong></p>

    <p>
      Systematic Variance of Portfolio
      = (0.10)² × (0.66)²
      = 0.01 × 0.4356
      = <strong>0.004356</strong>
    </p>

    <p>
      Unsystematic Variance of Portfolio
      = (0.0134 × 0.20²)
      + (0.0225 × 0.50²)
      + (0.0879 × 0.30²)
    </p>

    <p>
      = (0.0134 × 0.04)
      + (0.0225 × 0.25)
      + (0.0879 × 0.09)
    </p>

    <p>
      = 0.000536 + 0.005625 + 0.007911
      = <strong>0.014072</strong>
    </p>

    <p>
      Total Variance
      = 0.004356 + 0.014072
      = <strong>0.018428</strong>
    </p>

    <p><strong>(iv) Portfolio Variance as per Markowitz Theory</strong></p>

    <p>
      Portfolio Variance =
      (wA × wA × σ²A)
      + (wA × wB × CovAB)
      + (wA × wC × CovAC)
      + (wB × wA × CovAB)
      + (wB × wB × σ²B)
      + (wB × wC × CovBC)
      + (wC × wA × CovCA)
      + (wC × wB × CovCB)
      + (wC × wC × σ²C)
    </p>

    <p>
      = (0.20 × 0.20 × 0.015)
      + (0.20 × 0.50 × 0.030)
      + (0.20 × 0.30 × 0.020)
      + (0.20 × 0.50 × 0.030)
      + (0.50 × 0.50 × 0.025)
      + (0.50 × 0.30 × 0.040)
      + (0.30 × 0.20 × 0.020)
      + (0.30 × 0.50 × 0.040)
      + (0.30 × 0.30 × 0.100)
    </p>

    <p>
      = 0.0006 + 0.0030 + 0.0012 + 0.0030 + 0.00625 + 0.0060 + 0.0012 + 0.0060 + 0.0090
    </p>

    <p>
      = 0.03625 ≈ <strong>0.0363</strong>
    </p>

    <p><strong>Answer:</strong></p>

    <ol type="i">
      <li>Portfolio Beta = <strong>0.66</strong></li>
      <li>
        Residual Variance:
        <ul>
          <li>A = <strong>0.0134</strong></li>
          <li>B = <strong>0.0225</strong></li>
          <li>C = <strong>0.0879</strong></li>
        </ul>
      </li>
      <li>Portfolio Variance using Sharpe Index Model = <strong>0.018428</strong></li>
      <li>Portfolio Variance using Markowitz Theory = <strong>0.0363</strong></li>
    </ol>
  `
},
{
  question_id: "AFM_MTPMAR25_I_Q1B",
  source: "ICAI Mock Test Paper - Series I, March 2025",
  chapter_name: "Risk Management - Value at Risk (VaR)",
  placement: 1,
  marks: 4,
  question_html: `
    <p>Consider a portfolio consisting of a ₹ 200,00,000 investment in share XYZ and a ₹ 2,00,00,000 investment in share ABC. The daily standard deviation of both shares is 1% and that the coefficient of correlation between them is 0.3.</p>

    <p>You are required to determine the <strong>10-day 99% Value at Risk (VaR)</strong> for the portfolio.</p>
  `,
  solution_html: `

    <p>
      Investment in XYZ = ₹ 200 lakh<br>
      Investment in ABC = ₹ 200 lakh<br>
      Total Portfolio Value = ₹ 400 lakh
    </p>

    <p>
      Daily Standard Deviation of each share = 1%
    </p>

    <p>
      Correlation Coefficient (ρ) = 0.3
    </p>

    <p><strong>Step 1: Calculate Portfolio Variance</strong></p>

    <p>
      Standard deviation of daily change in investment of each asset:
    </p>

    <p>
      = 1% × ₹ 200 lakh
    </p>

    <p>
      = ₹ 2 lakh
    </p>

    <p>
      Portfolio Variance (V)
    </p>

    <p>
      = 2² + 2² + 2 × 0.3 × 2 × 2
    </p>

    <p>
      = 4 + 4 + 2.4
    </p>

    <p>
      = 10.4
    </p>

    <p>
      Portfolio Standard Deviation
    </p>

    <p>
      = √10.4
    </p>

    <p>
      = <strong>₹ 3.22 lakh</strong>
    </p>

    <p><strong>Alternative Computation</strong></p>

    <p>
      Portfolio Variance (%)
    </p>

    <p>
      = (1)²(0.50)² + (1)²(0.50)² + 2(1)(1)(0.3)(0.50)(0.50)
    </p>

    <p>
      = 0.25 + 0.25 + 0.15
    </p>

    <p>
      = 0.65%
    </p>

    <p>
      Portfolio Standard Deviation
    </p>

    <p>
      = √0.65
    </p>

    <p>
      = 0.80623%
    </p>

    <p>
      Standard Deviation in Amount
    </p>

    <p>
      = ₹ 400 lakh × 0.80623%
    </p>

    <p>
      = <strong>₹ 3.22 lakh</strong>
    </p>

    <p><strong>Step 2: Calculate 10-Day Standard Deviation</strong></p>

    <p>
      10-Day Standard Deviation
    </p>

    <p>
      = ₹ 3.22 lakh × √10
    </p>

    <p>
      = <strong>₹ 10.18 lakh</strong>
    </p>

    <p><strong>Step 3: Calculate 10-Day 99% VaR</strong></p>

    <p>
      Z-score for 99% confidence level = 2.33
    </p>

    <p>
      VaR = Z × Standard Deviation
    </p>

    <p>
      = 2.33 × ₹ 10.18 lakh
    </p>

    <p>
      = <strong>₹ 23.72 lakh</strong>
    </p>

    <p>
      Therefore, the <strong>10-day 99% Value at Risk (VaR)</strong> for the portfolio is:
    </p>

    <p>
      <strong>₹ 23.72 lakh</strong>
    </p>
  `
},

{
  question_id: "AFM_MTPMAR25_I_Q1C",
  source: "ICAI Mock Test Paper - Series I, March 2025",
  chapter_name: "Securitization",
  placement: 1,
  marks: 2,
  question_html: `
    <p>The pricing of securitized instruments is an important aspect of securitization. Explain this statement.</p>
  `,
  solution_html: `
    <p>Pricing of securitized instruments is an important aspect of securitization. While pricing the instruments, it is important that it should be acceptable to both originators as well as to the investors. On the same basis pricing of securities can be divided into following two categories:</p>

    <p><strong>(i) From Originator’s Angle</strong></p>

    <p>From originator’s point of view, the instruments can be priced at a rate at which originator has to incur an outflow and if that outflow can be amortized over a period of time by investing the amount raised through securitization.</p>

    <p><strong>(ii) From Investor’s Angle</strong></p>

    <p>From an investor’s angle security price can be determined by discounting best estimate of expected future cash flows using rate of yield to maturity of a comparable security with respect to credit quality and average life of the securities.</p>
  `
},
{
  question_id: "AFM_MTPMAR25_I_Q2A",
  source: "ICAI Mock Test Paper - Series I, March 2025",
  chapter_name: "Capital Budgeting - Sensitivity Analysis",
  placement: 2,
  marks: 6,
  question_html: `
    <p>JKL Ltd. is considering a project for which the following estimates are available:</p>

    <table border="1" cellpadding="5" cellspacing="0">
      <tr>
        <td>Initial Cost of the Project</td>
        <td>₹ 20,00,00,000</td>
      </tr>
      <tr>
        <td>Sales Price per Unit</td>
        <td>₹ 800</td>
      </tr>
      <tr>
        <td>Cost per Unit</td>
        <td>₹ 500</td>
      </tr>
    </table>

    <p><strong>Sales Volumes:</strong></p>

    <table border="1" cellpadding="5" cellspacing="0">
      <tr>
        <th>Year</th>
        <th>Units</th>
      </tr>
      <tr>
        <td>1</td>
        <td>4,00,000</td>
      </tr>
      <tr>
        <td>2</td>
        <td>6,00,000</td>
      </tr>
      <tr>
        <td>3</td>
        <td>6,00,000</td>
      </tr>
    </table>

    <p>Discount Rate = 12% p.a.</p>

    <p>You are required to measure the sensitivity (based on break-even approach) of the project in relation to each of the following parameters:</p>

    <ol type="i">
      <li>Sales Price per Unit</li>
      <li>Unit Cost</li>
      <li>Sales Volume</li>
      <li>Initial Outlay</li>
    </ol>

    <p><strong>Notes:</strong></p>
    <ol type="i">
      <li>Taxation may be ignored.</li>
      <li>
        PVF Table:
        <table border="1" cellpadding="5" cellspacing="0">
          <tr>
            <th>Year</th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
          </tr>
          <tr>
            <td>PVF @ 12%</td>
            <td>0.893</td>
            <td>0.797</td>
            <td>0.712</td>
          </tr>
        </table>
      </li>
      <li>Assume 360 days in a year.</li>
    </ol>
  `,
  solution_html: `
    <p><strong>Calculation of NPV</strong></p>

    <p>
      NPV = -20,00,00,000 + (4,00,000 × 300 × 0.893)
      + (6,00,000 × 300 × 0.797)
      + (6,00,000 × 300 × 0.712)
    </p>

    <p>
      = -20,00,00,000 + 10,71,60,000 + 14,34,60,000 + 12,81,60,000
    </p>

    <p>
      = 37,87,80,000 - 20,00,00,000
    </p>

    <p>
      = ₹ 17,87,80,000
    </p>

    <p><strong>Measurement of Sensitivity</strong></p>

    <p><strong>(i) Sales Price per Unit</strong></p>

    <p>
      Let the Sales Price per Unit be S so that the project breaks even at NPV = 0.
    </p>

    <p>
      20,00,00,000 =
      4,00,000(S - 500)(0.893)
      + 6,00,000(S - 500)(0.797)
      + 6,00,000(S - 500)(0.712)
    </p>

    <p>
      20,00,00,000 = 12,62,600(S - 500)
    </p>

    <p>
      S - 500 = 20,00,00,000 ÷ 12,62,600
    </p>

    <p>
      S - 500 = ₹ 158.40
    </p>

    <p>
      S = ₹ 658.40
    </p>

    <p>
      Percentage fall in Sales Price
      = (800 - 658.40) ÷ 800 × 100
    </p>

    <p>
      = <strong>17.70%</strong>
    </p>

    <p><strong>(ii) Unit Cost</strong></p>

    <p>
      Let the Cost per Unit be C so that the project breaks even at NPV = 0.
    </p>

    <p>
      20,00,00,000 =
      4,00,000(800 - C)(0.893)
      + 6,00,000(800 - C)(0.797)
      + 6,00,000(800 - C)(0.712)
    </p>

    <p>
      20,00,00,000 = 12,62,600(800 - C)
    </p>

    <p>
      800 - C = 20,00,00,000 ÷ 12,62,600
    </p>

    <p>
      800 - C = ₹ 158.40
    </p>

    <p>
      C = ₹ 641.60
    </p>

    <p>
      Percentage increase in Cost
      = (641.60 - 500) ÷ 500 × 100
    </p>

    <p>
      = <strong>28.32%</strong>
    </p>

    <p><strong>(iii) Sales Volume</strong></p>

    <p>
      Required percentage fall in sales volume
    </p>

    <p>
      = NPV ÷ Present Value of Inflows × 100
    </p>

    <p>
      = 17,87,80,000 ÷ 37,87,80,000 × 100
    </p>

    <p>
      = <strong>47.20%</strong>
    </p>

    <p><strong>(iv) Initial Outlay</strong></p>

    <p>
      Since the present value of inflows remains at ₹ 37,87,80,000,
      the initial outlay can increase up to this amount.
    </p>

    <p>
      Percentage increase in Initial Outlay
    </p>

    <p>
      = 17,87,80,000 ÷ 20,00,00,000 × 100
    </p>

    <p>
      = <strong>89.39%</strong>
    </p>

    <p><strong>Answer:</strong></p>

    <table border="1" cellpadding="5" cellspacing="0">
      <tr>
        <th>Parameter</th>
        <th>Sensitivity (%)</th>
      </tr>
      <tr>
        <td>Sales Price per Unit (Decrease)</td>
        <td>17.70%</td>
      </tr>
      <tr>
        <td>Unit Cost (Increase)</td>
        <td>28.32%</td>
      </tr>
      <tr>
        <td>Sales Volume (Decrease)</td>
        <td>47.20%</td>
      </tr>
      <tr>
        <td>Initial Outlay (Increase)</td>
        <td>89.39%</td>
      </tr>
    </table>
  `
},
{
  question_id: "AFM_MTPMAR25_I_Q2B",
  source: "ICAI Mock Test Paper - Series I, March 2025",
  chapter_name: "Security Valuation",
  placement: 2,
  marks: 4,
  question_html: `
    <p>The risk free rate of return (Rf) is 9 percent. The expected rate of return on the market portfolio (Rm) is 13 percent. The expected rate of growth for the dividend of Platinum Ltd. is 7 percent. The last dividend paid on the equity stock of Platinum Ltd. was ₹ 2.00. The beta of Platinum Ltd. equity stock is 1.2.</p>

    <p>Required:</p>

    <ol type="i">
      <li>What is the equilibrium price of the equity stock of Platinum Ltd.?</li>
      <li>
        How would the equilibrium price change when changes (in absolute terms) in various parameters takes place as follows:
        <ul>
          <li>The inflation premium increases by 2 percent;</li>
          <li>The expected growth rate increases by 3 percent; and</li>
          <li>The equity beta of Platinum Ltd. rises to 1.3.</li>
        </ul>
      </li>
    </ol>
  `,
  solution_html: `
    <p><strong>(i) Equilibrium Price of Equity using CAPM</strong></p>

    <p>
      Cost of Equity (Ke)
      = Rf + β(Rm − Rf)
    </p>

    <p>
      = 9% + 1.20(13% − 9%)
    </p>

    <p>
      = 9% + 4.80%
    </p>

    <p>
      = 13.80%
    </p>

    <p>
      Expected Dividend (D₁)
      = D₀(1 + g)
    </p>

    <p>
      = 2.00(1.07)
    </p>

    <p>
      = ₹ 2.14
    </p>

    <p>
      Price of Share (P)
      = D₁ / (Ke − g)
    </p>

    <p>
      = 2.14 / (0.138 − 0.07)
    </p>

    <p>
      = 2.14 / 0.068
    </p>

    <p>
      = <strong>₹ 31.47</strong>
    </p>

    <p><strong>(ii) Revised Equilibrium Price after Changes</strong></p>

    <p>
      Revised Risk-free Rate
      = 9% + 2%
      = 11%
    </p>

    <p>
      Revised Market Return
      = 13% + 2%
      = 15%
    </p>

    <p>
      Revised Growth Rate
      = 7% + 3%
      = 10%
    </p>

    <p>
      Revised Beta
      = 1.30
    </p>

    <p>
      Revised Cost of Equity (Ke)
      = 11% + 1.30(15% − 11%)
    </p>

    <p>
      = 11% + 5.20%
    </p>

    <p>
      = 16.20%
    </p>

    <p>
      Revised Expected Dividend (D₁)
      = 2.00(1.10)
    </p>

    <p>
      = ₹ 2.20
    </p>

    <p>
      Revised Price of Share (P)
      = 2.20 / (0.162 − 0.10)
    </p>

    <p>
      = 2.20 / 0.062
    </p>

    <p>
      = <strong>₹ 35.48</strong>
    </p>

    <p><strong>Answer:</strong></p>

    <ol type="i">
      <li>Equilibrium Price of Equity Stock = <strong>₹ 31.47</strong></li>
      <li>Revised Equilibrium Price = <strong>₹ 35.48</strong></li>
    </ol>
  `
},
{
  question_id: "AFM_MTPMAR25_I_Q3A",
  source: "ICAI Mock Test Paper - Series I, March 2025",
  chapter_name: "Mutual Funds",
  placement: 3,
  marks: 6,
  question_html: `
    <p>On 1st April 2023 Fair Return Mutual Fund has 8,00,000 units and is having the following assets with respective prices at 4.00 p.m.</p>

    <table border="1" cellpadding="5" cellspacing="0">
      <tr>
        <th>Shares</th>
        <th>No. of Shares</th>
        <th>Market Price Per Share (₹)</th>
      </tr>
      <tr>
        <td>A Ltd.</td>
        <td>20,000</td>
        <td>19.70</td>
      </tr>
      <tr>
        <td>B Ltd.</td>
        <td>1,00,000</td>
        <td>482.60</td>
      </tr>
      <tr>
        <td>C Ltd.</td>
        <td>20,000</td>
        <td>264.40</td>
      </tr>
      <tr>
        <td>D Ltd.</td>
        <td>2,00,000</td>
        <td>675.17</td>
      </tr>
      <tr>
        <td>E Ltd.</td>
        <td>60,000</td>
        <td>25.00</td>
      </tr>
    </table>

    <p>Required:</p>

    <ol type="i">
      <li>Calculate NAV per unit of the Fund on 1st April 2023.</li>
      <li>
        Assuming that on 1st April 2023, Mr. X, a HNI, transfers an amount of ₹ 50,00,100 to the Fund and Fund Manager immediately purchases shares of E Ltd. and balance is held in bank. Advise Fund Manager:
        <ol type="A">
          <li>Number of units to be issued to Mr. X.</li>
          <li>The number of shares of E Ltd. to be purchased if a cash balance of ₹ 4,76,000 is required to be maintained to meet some cash expenses.</li>
        </ol>
      </li>
      <li>
        Now suppose on 2nd April 2023 at 4.00 p.m. the market price of shares is as follows:
        <table border="1" cellpadding="5" cellspacing="0">
          <tr>
            <th>Shares</th>
            <th>Price (₹)</th>
          </tr>
          <tr>
            <td>A Ltd.</td>
            <td>20.30</td>
          </tr>
          <tr>
            <td>B Ltd.</td>
            <td>513.70</td>
          </tr>
          <tr>
            <td>C Ltd.</td>
            <td>290.80</td>
          </tr>
          <tr>
            <td>D Ltd.</td>
            <td>671.90</td>
          </tr>
          <tr>
            <td>E Ltd.</td>
            <td>44.00</td>
          </tr>
        </table>

        Determine the new NAV per unit.
      </li>
    </ol>

    <p><em>Note: Round off calculations upto 2 decimal points.</em></p>
  `,
  solution_html: `
    <p><strong>(i) NAV per Unit on 1st April 2023</strong></p>

    <table border="1" cellpadding="5" cellspacing="0">
      <tr><th>Particulars</th><th>Amount (₹)</th></tr>
      <tr><td>A Ltd. (20,000 × 19.70)</td><td>3,94,000</td></tr>
      <tr><td>B Ltd. (1,00,000 × 482.60)</td><td>4,82,60,000</td></tr>
      <tr><td>C Ltd. (20,000 × 264.40)</td><td>52,88,000</td></tr>
      <tr><td>D Ltd. (2,00,000 × 675.17)</td><td>13,50,34,000</td></tr>
      <tr><td>E Ltd. (60,000 × 25)</td><td>15,00,000</td></tr>
      <tr><th>Total Assets</th><th>19,04,76,000</th></tr>
    </table>

    <p>
      NAV per Unit = 19,04,76,000 ÷ 8,00,000
    </p>

    <p>
      = ₹ 238.095 ≈ <strong>₹ 238.10</strong>
    </p>

    <p><strong>(ii)(A) Number of Units to be issued to Mr. X</strong></p>

    <p>
      Units = 50,00,100 ÷ 238.10
    </p>

    <p>
      = <strong>21,000 Units</strong>
    </p>

    <p><strong>(ii)(B) Number of Shares of E Ltd. to be purchased</strong></p>

    <p>
      Amount received from Mr. X = ₹ 50,00,100
    </p>

    <p>
      Less: Cash balance to be maintained = ₹ 4,76,000
    </p>

    <p>
      Amount available for purchase of E Ltd. shares
      = ₹ 45,24,100
    </p>

    <p>
      Number of shares to be purchased
      = 45,24,100 ÷ 25
    </p>

    <p>
      = <strong>1,80,964 Shares</strong>
    </p>

    <p><strong>(iii) NAV per Unit on 2nd April 2023</strong></p>

    <table border="1" cellpadding="5" cellspacing="0">
      <tr>
        <th>Particulars</th>
        <th>Amount (₹)</th>
      </tr>
      <tr>
        <td>A Ltd. (20,000 × 20.30)</td>
        <td>4,06,000</td>
      </tr>
      <tr>
        <td>B Ltd. (1,00,000 × 513.70)</td>
        <td>5,13,70,000</td>
      </tr>
      <tr>
        <td>C Ltd. (20,000 × 290.80)</td>
        <td>58,16,000</td>
      </tr>
      <tr>
        <td>D Ltd. (2,00,000 × 671.90)</td>
        <td>13,43,80,000</td>
      </tr>
      <tr>
        <td>E Ltd. (2,40,964 × 44)</td>
        <td>1,06,02,416</td>
      </tr>
      <tr>
        <td>Cash</td>
        <td>4,76,000</td>
      </tr>
      <tr>
        <th>Total Net Assets</th>
        <th>20,30,50,416</th>
      </tr>
    </table>

    <p>
      Total Units = 8,00,000 + 21,000 = 8,21,000 Units
    </p>

    <p>
      NAV per Unit = 20,30,50,416 ÷ 8,21,000
    </p>

    <p>
      = <strong>₹ 247.32 per unit</strong>
    </p>
  `
},
{
  question_id: "AFM_MTPMAR25_I_Q3B",
  source: "ICAI Mock Test Paper - Series I, March 2025",
  chapter_name: "Startup Valuation",
  placement: 3,
  marks: 4,
  question_html: `
    <p>There is a privately held company X Pvt. Ltd that is operating into the retail space, and is now scouting for angel investors. The details pertinent to valuing X Pvt. Ltd are as follows:</p>

    <p>The company has achieved break even this year and has an EBITDA of ₹ 90 crore. The unleveraged beta based on the industry in which it operates is 1.8, and the average debt to equity ratio is hovering at 40:60. The rate of return provided by risk free liquid bonds is 5%. The EV is to be taken at a multiple of 5 on EBITDA.</p>

    <p>The accountant has informed that the EBITDA of ₹ 90 crore includes an extraordinary gain of ₹ 10 crore for the year, and a potential write off of preliminary sales promotion costs of ₹ 20 crore are still pending.</p>

    <p>The internal assessment of rate of market return for the industry is 11%. The FCFs for the next 3 years are as follows:</p>

    <table border="1" cellpadding="5" cellspacing="0">
      <tr>
        <th>Year</th>
        <th>FCF (₹ crore)</th>
      </tr>
      <tr>
        <td>Y1</td>
        <td>100</td>
      </tr>
      <tr>
        <td>Y2</td>
        <td>120</td>
      </tr>
      <tr>
        <td>Y3</td>
        <td>150</td>
      </tr>
    </table>

    <p>Post-tax Cost of Debt = 8.40%</p>
    <p>Tax Rate = 30%</p>

    <p>What is the potential value to be placed on X Pvt. Ltd?</p>

    <p><em>Note: While PV Factors values are to be rounded off to 3 decimal points, other calculations should be rounded off to 2 decimal points.</em></p>
  `,
  solution_html: `
    <p><strong>Levered Beta</strong></p>

    <p>
      βL = 1.8[1 + (1 - 0.30)(40/60)]
    </p>

    <p>
      = 1.8[1 + 0.4667]
    </p>

    <p>
      = <strong>2.64</strong>
    </p>

    <p><strong>Adjusted EBITDA</strong></p>

    <p>
      EBITDA = ₹ 90 crore
    </p>

    <p>
      Less: Extraordinary Gain = ₹ 10 crore
    </p>

    <p>
      Less: Pending Write-off = ₹ 20 crore
    </p>

    <p>
      Adjusted EBITDA = <strong>₹ 60 crore</strong>
    </p>

    <p><strong>Enterprise Value</strong></p>

    <p>
      EV = 5 × ₹ 60 crore
    </p>

    <p>
      = <strong>₹ 300 crore</strong>
    </p>

    <p><strong>Cost of Equity (CAPM)</strong></p>

    <p>
      Ke = Rf + β(Rm − Rf)
    </p>

    <p>
      = 5% + 2.64(11% − 5%)
    </p>

    <p>
      = 5% + 15.84%
    </p>

    <p>
      = <strong>20.84%</strong>
    </p>

    <p><strong>Weighted Average Cost of Capital (WACC)</strong></p>

    <p>
      WACC = (20.84 × 60/100) + (8.40 × 40/100)
    </p>

    <p>
      = 12.504 + 3.36
    </p>

    <p>
      = <strong>15.864%</strong>
    </p>

    <table border="1" cellpadding="5" cellspacing="0">
      <tr>
        <th>Year</th>
        <th>FCF (₹ crore)</th>
        <th>Discount Factor</th>
        <th>PV (₹ crore)</th>
      </tr>
      <tr>
        <td>Y1</td>
        <td>100</td>
        <td>0.863</td>
        <td>86.30</td>
      </tr>
      <tr>
        <td>Y2</td>
        <td>120</td>
        <td>0.745</td>
        <td>89.40</td>
      </tr>
      <tr>
        <td>Y3</td>
        <td>150</td>
        <td>0.643</td>
        <td>96.45</td>
      </tr>
    </table>

    <p>
      Value of Firm = 86.30 + 89.40 + 96.45
    </p>

    <p>
      = <strong>₹ 272.15 crore</strong>
    </p>

    <p>
      Therefore, the <strong>potential value of X Pvt. Ltd. is ₹ 272.15 crore.</strong>
    </p>
  `
},
{
  question_id: "AFM_MTPMAR25_I_Q3C",
  source: "ICAI Mock Test Paper - Series I, March 2025",
  chapter_name: "Technical Analysis",
  placement: 3,
  marks: 4,
  question_html: `
    <p>Describe briefly the Dow Theory for technical analysis and how it classifies the market movements.</p>

    <p><strong>OR</strong></p>

    <p>Explain briefly the concept of the Efficient Frontier. If an investor's portfolio is not efficient, then what action should he/she take as per this concept.</p>
  `,
  solution_html: `
    <p><strong>Either</strong></p>

    <p><strong>Dow Theory</strong></p>

    <p>The Dow Theory’s purpose is to determine where the market is and where it is going, although not how far or how high. The theory states that if the cyclical swings of the stock market averages are successively higher and the successive lows are higher, then the market trend is upward and a bullish market exists. Conversely, if the successive highs and successive lows are lower, then the market trend is downward and a bearish market exists.</p>

    <p>The Dow Theory is based upon the movements of two indices constructed by Charles Dow:</p>

    <ol>
      <li>Dow Jones Industrial Average (DJIA)</li>
      <li>Dow Jones Transportation Average (DJTA)</li>
    </ol>

    <p>The movements of the market are divided into three classifications:</p>

    <ol type="i">
      <li><strong>Primary Movement:</strong> The main trend of the market lasting from one year to thirty-six months or longer. It is commonly known as a bull market or bear market.</li>
      <li><strong>Secondary Movement:</strong> A shorter movement opposite in direction to the primary trend. It generally lasts from two weeks to a month or more.</li>
      <li><strong>Daily Fluctuations:</strong> Narrow day-to-day market movements.</li>
    </ol>

    <hr>

    <p><strong>OR</strong></p>

    <p><strong>Efficient Frontier</strong></p>

    <p>Markowitz formalized the risk-return relationship and developed the concept of the Efficient Frontier using the Mean-Variance Dominance Principle. For portfolio selection, comparison among alternative portfolios is essential.</p>

    <p>A portfolio dominates another portfolio if there exists another portfolio with:</p>

    <ol type="a">
      <li>A higher expected return with the same level of risk, or</li>
      <li>A lower risk with the same level of expected return.</li>
    </ol>

    <p>Markowitz defined diversification as the process of combining assets that are less than perfectly positively correlated in order to reduce portfolio risk without sacrificing expected return.</p>

    <p>If an investor’s portfolio is not efficient, he/she may:</p>

    <ol type="i">
      <li>Increase the expected return without increasing risk.</li>
      <li>Decrease risk without decreasing expected return.</li>
      <li>Achieve a combination of higher expected return and lower risk.</li>
    </ol>
  `
},
{
  question_id: "AFM_MTPMAR25_I_Q4A",
  source: "ICAI Mock Test Paper - Series I, March 2025",
  chapter_name: "International Capital Budgeting",
  placement: 4,
  marks: 8,
  question_html: `
    <p>A multinational company is planning to set up a subsidiary company in India (where hitherto it was exporting) in view of growing demand for its product and competition from other MNCs.</p>

    <p>The initial project cost (consisting of Plant and Machinery including installation) is estimated to be US$ 500 million. The net working capital requirements are estimated at US$ 50 million. The company follows straight line method of depreciation.</p>

    <p>Presently, the company is exporting two million units every year at a unit price of US$ 80, its variable cost per unit being US$ 40.</p>

    <p>The Chief Financial Officer has estimated the following operating cost and other data in respect of proposed project:</p>

    <ol type="i">
      <li>Variable operating cost will be US$ 20 per unit of production.</li>
      <li>Additional cash fixed cost will be US$ 30 million p.a. and project's share of allocated fixed cost will be US$ 3 million p.a. based on principle of ability to share.</li>
      <li>Production capacity of the proposed project in India will be 5 million units.</li>
      <li>Expected useful life of the proposed plant is five years with no salvage value.</li>
      <li>Existing working capital investment for production and sale of two million units through exports was US$ 15 million.</li>
      <li>Export of the product in the coming year will decrease to 1.5 million units in case the company does not open subsidiary company in India, in view of the presence of competing MNCs.</li>
      <li>Applicable Corporate Income Tax rate is 35%.</li>
      <li>Required rate of return for such project is 12%.</li>
    </ol>

    <p>Assuming that there will be no variation in the exchange rate of two currencies and all profits will be repatriated, as there will be no withholding tax, estimate the Net Present Value (NPV) of the proposed project in India.</p>

    <p>Present Value Interest Factors (PVIF) @ 12%:</p>

    <table border="1" cellpadding="5" cellspacing="0">
      <tr>
        <th>Year</th>
        <th>1</th>
        <th>2</th>
        <th>3</th>
        <th>4</th>
        <th>5</th>
      </tr>
      <tr>
        <td>PVIF</td>
        <td>0.8929</td>
        <td>0.7972</td>
        <td>0.7118</td>
        <td>0.6355</td>
        <td>0.5674</td>
      </tr>
    </table>
  `,
  solution_html: `
    <p><strong>I. Incremental Cash Outflows</strong></p>

    <table border="1" cellpadding="5" cellspacing="0">
      <tr>
        <th>Particulars</th>
        <th>US$ Million</th>
      </tr>
      <tr>
        <td>Cost of Plant and Machinery</td>
        <td>500.00</td>
      </tr>
      <tr>
        <td>Working Capital Requirement</td>
        <td>50.00</td>
      </tr>
      <tr>
        <td>Less: Release of Existing Working Capital</td>
        <td>(15.00)</td>
      </tr>
      <tr>
        <th>Net Initial Outflow</th>
        <th>535.00</th>
      </tr>
    </table>

    <p><strong>II. Incremental Cash Inflow after Tax (CFAT)</strong></p>

    <p><strong>(a) Generated by Investment in India</strong></p>

    <table border="1" cellpadding="5" cellspacing="0">
      <tr>
        <th>Particulars</th>
        <th>US$ Million</th>
      </tr>
      <tr>
        <td>Sales Revenue (5 Million × $80)</td>
        <td>400.00</td>
      </tr>
      <tr>
        <td>Less: Variable Cost (5 Million × $20)</td>
        <td>100.00</td>
      </tr>
      <tr>
        <td>Less: Fixed Cost</td>
        <td>30.00</td>
      </tr>
      <tr>
        <td>Less: Depreciation (500/5)</td>
        <td>100.00</td>
      </tr>
      <tr>
        <td>EBIT</td>
        <td>170.00</td>
      </tr>
      <tr>
        <td>Less: Tax @ 35%</td>
        <td>59.50</td>
      </tr>
      <tr>
        <td>EAT</td>
        <td>110.50</td>
      </tr>
      <tr>
        <td>Add: Depreciation</td>
        <td>100.00</td>
      </tr>
      <tr>
        <th>CFAT (Years 1-5)</th>
        <th>210.50</th>
      </tr>
    </table>

    <p><strong>(b) Recovery of Working Capital at end of Year 5</strong></p>

    <p>US$ 35 Million</p>

    <p><strong>(c) Opportunity Cost - Export Contribution Forgone</strong></p>

    <table border="1" cellpadding="5" cellspacing="0">
      <tr>
        <th>Particulars</th>
        <th>US$ Million</th>
      </tr>
      <tr>
        <td>Sales Revenue (1.5 Million × $80)</td>
        <td>120.00</td>
      </tr>
      <tr>
        <td>Less: Variable Cost (1.5 Million × $40)</td>
        <td>60.00</td>
      </tr>
      <tr>
        <td>Contribution before Tax</td>
        <td>60.00</td>
      </tr>
      <tr>
        <td>Less: Tax @ 35%</td>
        <td>21.00</td>
      </tr>
      <tr>
        <th>CFAT (Years 1-5)</th>
        <th>39.00</th>
      </tr>
    </table>

    <p><strong>(d) Additional CFAT attributable to Foreign Investment</strong></p>

    <p>
      CFAT from Indian Subsidiary = US$ 210.50 Million
    </p>

    <p>
      Less: CFAT from Exports = US$ 39.00 Million
    </p>

    <p>
      Additional CFAT = <strong>US$ 171.50 Million</strong>
    </p>

    <p><strong>III. Determination of NPV</strong></p>

    <table border="1" cellpadding="5" cellspacing="0">
      <tr>
        <th>Year</th>
        <th>Cash Flow (US$ Million)</th>
        <th>PV Factor @12%</th>
        <th>Present Value (US$ Million)</th>
      </tr>
      <tr>
        <td>1-5</td>
        <td>171.50</td>
        <td>3.6048</td>
        <td>618.2232</td>
      </tr>
      <tr>
        <td>5</td>
        <td>35.00</td>
        <td>0.5674</td>
        <td>19.8590</td>
      </tr>
      <tr>
        <th colspan="3">Total PV of Inflows</th>
        <th>638.0822</th>
      </tr>
      <tr>
        <th colspan="3">Less: Initial Outflow</th>
        <th>535.0000</th>
      </tr>
      <tr>
        <th colspan="3">NPV</th>
        <th>103.0822</th>
      </tr>
    </table>

    <p>
      Since the NPV is positive, the proposal should be accepted.
    </p>

    <p>
      <strong>Net Present Value (NPV) = US$ 103.0822 Million</strong>
    </p>
  `
},
{
  question_id: "AFM_MTPMAR25_I_Q4B",
  source: "ICAI Mock Test Paper - Series I, March 2025",
  chapter_name: "Portfolio Hedging using Index Futures",
  placement: 4,
  marks: 6,
  question_html: `
    <p>Details about portfolio of shares of an investor are as below:</p>

    <table border="1" cellpadding="5" cellspacing="0">
      <tr>
        <th>Shares</th>
        <th>No. of Shares (Lakh)</th>
        <th>Price per Share (₹)</th>
        <th>Beta</th>
      </tr>
      <tr>
        <td>A Ltd.</td>
        <td>3.00</td>
        <td>500</td>
        <td>1.40</td>
      </tr>
      <tr>
        <td>B Ltd.</td>
        <td>4.00</td>
        <td>750</td>
        <td>1.20</td>
      </tr>
      <tr>
        <td>C Ltd.</td>
        <td>2.00</td>
        <td>250</td>
        <td>1.60</td>
      </tr>
    </table>

    <p>The investor thinks that the risk of portfolio is very high and wants to reduce the portfolio beta to 0.91.</p>

    <p>He is considering two alternatives:</p>

    <ol type="i">
      <li>Dispose off a part of his existing portfolio to acquire risk free securities; or</li>
      <li>Take appropriate position on Nifty Futures which are currently traded at 8,125 and each Nifty point is worth ₹ 200.</li>
    </ol>

    <p>You are required to determine:</p>

    <ol>
      <li>Portfolio Beta</li>
      <li>The value of risk free securities to be acquired</li>
      <li>The number of shares of each company to be disposed off</li>
      <li>The number of Nifty contracts to be bought/sold</li>
      <li>The value of portfolio beta for 2% rise in Nifty</li>
    </ol>
  `,
  solution_html: `
    <table border="1" cellpadding="5" cellspacing="0">
      <tr>
        <th>Shares</th>
        <th>No. of Shares (Lakh)</th>
        <th>Price per Share (₹)</th>
        <th>Value (₹ Lakh)</th>
        <th>Weight (w)</th>
        <th>Beta (β)</th>
        <th>wβ</th>
      </tr>
      <tr>
        <td>A Ltd.</td>
        <td>3.00</td>
        <td>500</td>
        <td>1,500</td>
        <td>0.30</td>
        <td>1.40</td>
        <td>0.42</td>
      </tr>
      <tr>
        <td>B Ltd.</td>
        <td>4.00</td>
        <td>750</td>
        <td>3,000</td>
        <td>0.60</td>
        <td>1.20</td>
        <td>0.72</td>
      </tr>
      <tr>
        <td>C Ltd.</td>
        <td>2.00</td>
        <td>250</td>
        <td>500</td>
        <td>0.10</td>
        <td>1.60</td>
        <td>0.16</td>
      </tr>
      <tr>
        <th colspan="3">Total</th>
        <th>5,000</th>
        <th>1.00</th>
        <th></th>
        <th>1.30</th>
      </tr>
    </table>

    <p><strong>(1) Portfolio Beta</strong></p>

    <p>
      Portfolio Beta = <strong>1.30</strong>
    </p>

    <p><strong>(2) Value of Risk Free Securities to be Acquired</strong></p>

    <p>
      Let proportion invested in Risk Free Securities = p
    </p>

    <p>
      0.91 = 0 × p + 1.30(1 − p)
    </p>

    <p>
      p = 0.30
    </p>

    <p>
      Therefore, 30% of the portfolio should be invested in risk free securities.
    </p>

    <p>
      Value = 30% × ₹ 5,000 lakh
    </p>

    <p>
      = <strong>₹ 1,500 lakh</strong>
    </p>

    <p><strong>(3) Number of Shares to be Disposed Off</strong></p>

    <table border="1" cellpadding="5" cellspacing="0">
      <tr>
        <th>Shares</th>
        <th>Weight</th>
        <th>Amount to be Sold (₹ Lakh)</th>
        <th>Price per Share (₹)</th>
        <th>Shares to be Sold (Lakh)</th>
      </tr>
      <tr>
        <td>A Ltd.</td>
        <td>0.30</td>
        <td>450</td>
        <td>500</td>
        <td>0.90</td>
      </tr>
      <tr>
        <td>B Ltd.</td>
        <td>0.60</td>
        <td>900</td>
        <td>750</td>
        <td>1.20</td>
      </tr>
      <tr>
        <td>C Ltd.</td>
        <td>0.10</td>
        <td>150</td>
        <td>250</td>
        <td>0.60</td>
      </tr>
    </table>

    <p><strong>(4) Number of Nifty Futures Contracts to be Sold</strong></p>

    <p>
      Contracts = [(1.30 − 0.91) × ₹ 5,000 lakh]
      ÷ (8,125 × 200)
    </p>

    <p>
      = <strong>120 Contracts</strong>
    </p>

    <p>
      Since beta is to be reduced, Nifty Futures should be <strong>sold</strong>.
    </p>

    <p><strong>(5) Portfolio Beta for 2% Rise in Nifty</strong></p>

    <p>
      Rise in Portfolio Value = 2% × 1.30 = 2.6%
    </p>

    <table border="1" cellpadding="5" cellspacing="0">
      <tr>
        <th>Particulars</th>
        <th>₹ Lakh</th>
      </tr>
      <tr>
        <td>Current Portfolio Value</td>
        <td>5,000</td>
      </tr>
      <tr>
        <td>Value after 2.6% Rise</td>
        <td>5,130</td>
      </tr>
      <tr>
        <td>Less: MTM Loss on Futures (8125 × 2% × 200 × 120)</td>
        <td>39</td>
      </tr>
      <tr>
        <td>Net Portfolio Value</td>
        <td>5,091</td>
      </tr>
    </table>

    <p>
      Percentage Change = (5,091 − 5,000) ÷ 5,000 × 100
    </p>

    <p>
      = 1.82%
    </p>

    <p>
      Beta = 1.82% ÷ 2%
    </p>

    <p>
      = <strong>0.91</strong>
    </p>
  `
},
{
  question_id: "AFM_MTPMAR25_I_Q5A",
  source: "ICAI Mock Test Paper - Series I, March 2025",
  chapter_name: "Merger & Acquisition",
  placement: 5,
  marks: 10,
  question_html: `
    <p>BA Ltd. and DA Ltd. both operate in the same industry. The Financial Statements of both companies for the current financial year are as follows:</p>

    <p><strong>Balance Sheet</strong></p>

    <table border="1" cellpadding="5" cellspacing="0">
      <tr>
        <th>Particulars</th>
        <th>BA Ltd. (₹)</th>
        <th>DA Ltd. (₹)</th>
      </tr>
      <tr>
        <td>Current Assets</td>
        <td>14,00,000</td>
        <td>10,00,000</td>
      </tr>
      <tr>
        <td>Fixed Assets (Net)</td>
        <td>10,00,000</td>
        <td>5,00,000</td>
      </tr>
      <tr>
        <td><strong>Total Assets</strong></td>
        <td><strong>24,00,000</strong></td>
        <td><strong>15,00,000</strong></td>
      </tr>
      <tr>
        <td>Equity Capital (₹10 each)</td>
        <td>10,00,000</td>
        <td>8,00,000</td>
      </tr>
      <tr>
        <td>Retained Earnings</td>
        <td>2,00,000</td>
        <td>--</td>
      </tr>
      <tr>
        <td>14% Long-term Debt</td>
        <td>5,00,000</td>
        <td>3,00,000</td>
      </tr>
      <tr>
        <td>Current Liabilities</td>
        <td>7,00,000</td>
        <td>4,00,000</td>
      </tr>
      <tr>
        <td><strong>Total</strong></td>
        <td><strong>24,00,000</strong></td>
        <td><strong>15,00,000</strong></td>
      </tr>
    </table>

    <p><strong>Income Statement</strong></p>

    <table border="1" cellpadding="5" cellspacing="0">
      <tr>
        <th>Particulars</th>
        <th>BA Ltd. (₹)</th>
        <th>DA Ltd. (₹)</th>
      </tr>
      <tr>
        <td>Net Sales</td>
        <td>34,50,000</td>
        <td>17,00,000</td>
      </tr>
      <tr>
        <td>Cost of Goods Sold</td>
        <td>27,60,000</td>
        <td>13,60,000</td>
      </tr>
      <tr>
        <td>Gross Profit</td>
        <td>6,90,000</td>
        <td>3,40,000</td>
      </tr>
      <tr>
        <td>Operating Expenses</td>
        <td>2,00,000</td>
        <td>1,00,000</td>
      </tr>
      <tr>
        <td>Interest</td>
        <td>70,000</td>
        <td>42,000</td>
      </tr>
      <tr>
        <td>Earnings Before Tax</td>
        <td>4,20,000</td>
        <td>1,98,000</td>
      </tr>
      <tr>
        <td>Tax @ 50%</td>
        <td>2,10,000</td>
        <td>99,000</td>
      </tr>
      <tr>
        <td>Earnings After Tax (EAT)</td>
        <td>2,10,000</td>
        <td>99,000</td>
      </tr>
      <tr>
        <td>No. of Equity Shares</td>
        <td>1,00,000</td>
        <td>80,000</td>
      </tr>
      <tr>
        <td>Dividend Payout Ratio</td>
        <td>40%</td>
        <td>60%</td>
      </tr>
      <tr>
        <td>Market Price per Share</td>
        <td>₹ 40</td>
        <td>₹ 15</td>
      </tr>
    </table>

    <p>Assume that both companies are negotiating a merger through an exchange of equity shares. You are required to:</p>

    <ol type="i">
      <li>Decompose the share price of both companies into EPS and P/E components and segregate EPS into ROE and Book Value per Share components.</li>
      <li>Estimate future EPS growth rates for each company.</li>
      <li>Develop a range of justifiable equity share exchange ratios.</li>
      <li>Calculate post-merger EPS based on exchange ratio of 0.4:1 and indicate EPS accretion/dilution.</li>
      <li>Estimate post-merger market price and resulting accretion/dilution.</li>
    </ol>
  `,
  solution_html: `
    <p><strong>(i) Determination of EPS, P/E Ratio, ROE and BVPS</strong></p>

    <table border="1" cellpadding="5" cellspacing="0">
      <tr>
        <th>Particulars</th>
        <th>BA Ltd.</th>
        <th>DA Ltd.</th>
      </tr>
      <tr>
        <td>EAT</td>
        <td>₹ 2,10,000</td>
        <td>₹ 99,000</td>
      </tr>
      <tr>
        <td>No. of Shares</td>
        <td>1,00,000</td>
        <td>80,000</td>
      </tr>
      <tr>
        <td>EPS</td>
        <td>₹ 2.10</td>
        <td>₹ 1.2375</td>
      </tr>
      <tr>
        <td>Market Price per Share</td>
        <td>₹ 40</td>
        <td>₹ 15</td>
      </tr>
      <tr>
        <td>P/E Ratio</td>
        <td>19.05</td>
        <td>12.12</td>
      </tr>
      <tr>
        <td>Equity Funds</td>
        <td>₹ 12,00,000</td>
        <td>₹ 8,00,000</td>
      </tr>
      <tr>
        <td>BVPS</td>
        <td>₹ 12</td>
        <td>₹ 10</td>
      </tr>
      <tr>
        <td>ROE</td>
        <td>17.50%</td>
        <td>12.37%</td>
      </tr>
    </table>

    <p><strong>(ii) Estimation of Growth Rate in EPS</strong></p>

    <table border="1" cellpadding="5" cellspacing="0">
      <tr>
        <th>Particulars</th>
        <th>BA Ltd.</th>
        <th>DA Ltd.</th>
      </tr>
      <tr>
        <td>Retention Ratio</td>
        <td>0.60</td>
        <td>0.40</td>
      </tr>
      <tr>
        <td>Growth Rate = ROE × Retention Ratio</td>
        <td>10.50%</td>
        <td>4.95%</td>
      </tr>
    </table>

    <p><strong>(iii) Justifiable Equity Share Exchange Ratio</strong></p>

    <p>
      Based on Intrinsic Value:
    </p>

    <p>
      = ₹ 20 ÷ ₹ 40
    </p>

    <p>
      = <strong>0.50 : 1 (Upper Limit)</strong>
    </p>

    <p>
      Based on Market Price:
    </p>

    <p>
      = ₹ 15 ÷ ₹ 40
    </p>

    <p>
      = <strong>0.375 : 1 (Lower Limit)</strong>
    </p>

    <p>
      Since BA Ltd. has higher EPS, ROE, P/E Ratio and Growth Rate, the negotiated ratio is expected to be closer to the lower limit.
    </p>

    <p><strong>(iv) Post-Merger EPS and EPS Accretion/Dilution</strong></p>

    <table border="1" cellpadding="5" cellspacing="0">
      <tr>
        <th>Particulars</th>
        <th>BA Ltd.</th>
        <th>DA Ltd.</th>
        <th>Combined</th>
      </tr>
      <tr>
        <td>EAT (₹)</td>
        <td>2,10,000</td>
        <td>99,000</td>
        <td>3,09,000</td>
      </tr>
      <tr>
        <td>Shares Outstanding</td>
        <td>1,00,000</td>
        <td>80,000</td>
        <td>1,32,000</td>
      </tr>
      <tr>
        <td>EPS (₹)</td>
        <td>2.10</td>
        <td>1.2375</td>
        <td>2.341</td>
      </tr>
    </table>

    <p>
      EPS Accretion to BA Shareholders
      = ₹ 2.341 − ₹ 2.10
      = <strong>₹ 0.241</strong>
    </p>

    <p>
      EPS available to DA Shareholders
      = ₹ 2.341 × 0.40
      = ₹ 0.936
    </p>

    <p>
      EPS Dilution to DA Shareholders
      = ₹ 1.2375 − ₹ 0.936
      = <strong>₹ 0.301</strong>
    </p>

    <p><strong>(v) Post-Merger Market Price and Accretion/Dilution</strong></p>

    <table border="1" cellpadding="5" cellspacing="0">
      <tr>
        <th>Particulars</th>
        <th>BA Ltd.</th>
        <th>DA Ltd.</th>
        <th>Combined</th>
      </tr>
      <tr>
        <td>EPS (₹)</td>
        <td>2.10</td>
        <td>1.2375</td>
        <td>2.341</td>
      </tr>
      <tr>
        <td>P/E Ratio</td>
        <td>19.05</td>
        <td>12.12</td>
        <td>19.05</td>
      </tr>
      <tr>
        <td>Market Price (₹)</td>
        <td>40.00</td>
        <td>15.00</td>
        <td>44.60</td>
      </tr>
    </table>

    <p>
      Accretion to BA Shareholders
      = ₹ 44.60 − ₹ 40.00
      = <strong>₹ 4.60</strong>
    </p>

    <p>
      Value available to DA Shareholders
      = ₹ 44.60 × 0.40
      = ₹ 17.84
    </p>

    <p>
      Accretion to DA Shareholders
      = ₹ 17.84 − ₹ 15.00
      = <strong>₹ 2.84</strong>
    </p>
  `
},
{
  question_id: "AFM_MTPMAR25_I_Q5B",
  source: "ICAI Mock Test Paper - Series I, March 2025",
  chapter_name: "Forward Rate Agreement (FRA)",
  placement: 5,
  marks: 4,
  question_html: `
    <p>TM Fincorp has bought a 6 × 9 ₹ 100 crore Forward Rate Agreement (FRA) at 5.25%.</p>

    <p>On fixing date, the reference rate (MIBOR) is as follows:</p>

    <table border="1" cellpadding="5" cellspacing="0">
      <tr>
        <th>Period</th>
        <th>Rate (%)</th>
      </tr>
      <tr>
        <td>3 Months</td>
        <td>5.50</td>
      </tr>
      <tr>
        <td>6 Months</td>
        <td>5.70</td>
      </tr>
      <tr>
        <td>9 Months</td>
        <td>5.85</td>
      </tr>
    </table>

    <p>You are required to determine:</p>

    <ol type="i">
      <li>Profit/Loss to TM Fincorp in terms of basis points.</li>
      <li>The settlement amount.</li>
    </ol>

    <p><em>Assume 360 days in a year.</em></p>
  `,
  solution_html: `
    <p><strong>(i) Profit/Loss in Basis Points</strong></p>

    <p>
      A 6 × 9 FRA is a contract on the 3-month interest rate commencing after 6 months.
    </p>

    <p>
      Relevant Reference Rate = 3-Month MIBOR = 5.50%
    </p>

    <p>
      FRA Rate = 5.25%
    </p>

    <p>
      Difference = 5.50% − 5.25%
    </p>

    <p>
      = 0.25%
    </p>

    <p>
      = <strong>25 Basis Points Profit</strong>
    </p>

    <p><strong>(ii) Settlement Amount</strong></p>

    <p>
      Settlement Amount =
    </p>

    <p>
      [N(RR − FR)(dtm/360)]
      ÷ [1 + RR(dtm/360)]
    </p>

    <p>Where:</p>

    <ul>
      <li>N = Notional Principal Amount</li>
      <li>RR = Reference Rate</li>
      <li>FR = FRA Rate</li>
      <li>dtm = FRA Period in Days</li>
    </ul>

    <p>
      = [100 crore × (5.50% − 5.25%) × (90/360)]
      ÷ [1 + 0.055 × (90/360)]
    </p>

    <p>
      = <strong>₹ 6,16,523</strong>
    </p>

    <p>
      Therefore, TM Fincorp will receive a profit of <strong>₹ 6,16,523</strong>.
    </p>
  `
},
{
  question_id: "AFM_MTPMAR25_I_Q6A",
  source: "ICAI Mock Test Paper - Series I, March 2025",
  chapter_name: "Technical Analysis - Exponential Moving Average (EMA)",
  placement: 6,
  marks: 6,
  question_html: `
    <p>Closing values of NSE Nifty from 6th to 17th day of January 2020 were as follows:</p>

    <table border="1" cellpadding="5" cellspacing="0">
      <tr>
        <th>Day</th>
        <th>Date</th>
        <th>Day</th>
        <th>Sensex</th>
      </tr>
      <tr><td>1</td><td>6</td><td>THU</td><td>14522</td></tr>
      <tr><td>2</td><td>7</td><td>FRI</td><td>14925</td></tr>
      <tr><td>3</td><td>8</td><td>SAT</td><td>No Trading</td></tr>
      <tr><td>4</td><td>9</td><td>SUN</td><td>No Trading</td></tr>
      <tr><td>5</td><td>10</td><td>MON</td><td>15222</td></tr>
      <tr><td>6</td><td>11</td><td>TUE</td><td>16000</td></tr>
      <tr><td>7</td><td>12</td><td>WED</td><td>16400</td></tr>
      <tr><td>8</td><td>13</td><td>THU</td><td>17000</td></tr>
      <tr><td>9</td><td>14</td><td>FRI</td><td>No Trading</td></tr>
      <tr><td>10</td><td>15</td><td>SAT</td><td>No Trading</td></tr>
      <tr><td>11</td><td>16</td><td>SUN</td><td>No Trading</td></tr>
      <tr><td>12</td><td>17</td><td>MON</td><td>18000</td></tr>
    </table>

    <p>Calculate Exponential Moving Average (EMA) of Sensex during the above period. The previous day EMA of Sensex can be assumed as 15,000.</p>

    <p>The value of exponent for 31 days EMA is 0.062.</p>

    <p>Give detailed analysis on the basis of your calculations.</p>

    <p><em>Note: Round off final calculations upto 3 decimal points.</em></p>
  `,
  solution_html: `
    <table border="1" cellpadding="5" cellspacing="0">
      <tr>
        <th>Date</th>
        <th>Sensex</th>
        <th>Previous EMA</th>
        <th>Difference (1-2)</th>
        <th>Difference × 0.062</th>
        <th>New EMA</th>
      </tr>
      <tr>
        <td>6</td>
        <td>14522</td>
        <td>15000.000</td>
        <td>(478.000)</td>
        <td>(29.636)</td>
        <td>14970.364</td>
      </tr>
      <tr>
        <td>7</td>
        <td>14925</td>
        <td>14970.364</td>
        <td>(45.364)</td>
        <td>(2.812)</td>
        <td>14967.552</td>
      </tr>
      <tr>
        <td>10</td>
        <td>15222</td>
        <td>14967.552</td>
        <td>254.448</td>
        <td>15.776</td>
        <td>14983.328</td>
      </tr>
      <tr>
        <td>11</td>
        <td>16000</td>
        <td>14983.328</td>
        <td>1016.672</td>
        <td>63.034</td>
        <td>15046.362</td>
      </tr>
      <tr>
        <td>12</td>
        <td>16400</td>
        <td>15046.362</td>
        <td>1353.638</td>
        <td>83.926</td>
        <td>15130.288</td>
      </tr>
      <tr>
        <td>13</td>
        <td>17000</td>
        <td>15130.288</td>
        <td>1869.712</td>
        <td>115.922</td>
        <td>15246.210</td>
      </tr>
      <tr>
        <td>17</td>
        <td>18000</td>
        <td>15246.210</td>
        <td>2753.790</td>
        <td>170.735</td>
        <td>15416.945</td>
      </tr>
    </table>

    <p><strong>Conclusion:</strong></p>

    <p>
      The market is <strong>bullish</strong>. The market is likely to remain bullish in the short term to medium term if other factors remain unchanged.
    </p>

    <p>
      On the basis of EMA indicator, investors and brokers can take a <strong>long position</strong>.
    </p>
  `
},
{
  question_id: "AFM_MTPMAR25_I_Q6B",
  source: "ICAI Mock Test Paper - Series I, March 2025",
  chapter_name: "Foreign Exchange Risk Management",
  placement: 6,
  marks: 4,
  question_html: `
    <p>Sun Ltd. is planning to import equipment from Japan at a cost of 3,400 lakh yen.</p>

    <p>The company may avail loans at 18% per annum with quarterly rests with which it can import the equipment.</p>

    <p>The company has also an offer from Osaka branch of an India based bank extending credit of 180 days at 2% per annum against opening of an irrevocable letter of credit.</p>

    <p><strong>Additional Information:</strong></p>

    <table border="1" cellpadding="5" cellspacing="0">
      <tr>
        <td>Present Exchange Rate</td>
        <td>₹ 100 = 340 Yen</td>
      </tr>
      <tr>
        <td>180 Days Forward Rate</td>
        <td>₹ 100 = 345 Yen</td>
      </tr>
      <tr>
        <td>Commission Charges for Letter of Credit</td>
        <td>2% p.a.</td>
      </tr>
    </table>

    <p>Advise the company whether the offer from the foreign branch should be accepted.</p>
  `,
  solution_html: `
    <p><strong>Option I: Finance Purchase through Domestic Loan</strong></p>

    <table border="1" cellpadding="5" cellspacing="0">
      <tr>
        <th>Particulars</th>
        <th>₹ in Lakh</th>
      </tr>
      <tr>
        <td>Cost of Equipment (3400 lakh yen at ₹100 = 340 yen)</td>
        <td>1,000.00</td>
      </tr>
      <tr>
        <td>Add: Interest @ 4.5% for First Quarter</td>
        <td>45.00</td>
      </tr>
      <tr>
        <td>Add: Interest @ 4.5% for Second Quarter on ₹1,045 lakh</td>
        <td>47.03</td>
      </tr>
      <tr>
        <th>Total Outflow</th>
        <th>1,092.03</th>
      </tr>
    </table>

    <p>
      Alternatively:
    </p>

    <p>
      ₹ 1,000 × (1.045)² = ₹ 1,092.03 lakh
    </p>

    <p><strong>Option II: Accept Foreign Branch Offer</strong></p>

    <p><strong>(A) Cost of Letter of Credit</strong></p>

    <p>
      Commission @ 1% (for 180 days)
    </p>

    <p>
      = 3400 lakh yen × (₹100 / 340 yen) × 1%
    </p>

    <p>
      = ₹ 10.00 lakh
    </p>

    <p>
      Add: Interest for 2 Quarters = ₹ 0.90 lakh
    </p>

    <p>
      Total (A) = <strong>₹ 10.90 lakh</strong>
    </p>

    <p><strong>(B) Payment after 180 Days</strong></p>

    <p>
      Principal = 3400 lakh yen
    </p>

    <p>
      Interest = 3400 × 2% × (180/365)
    </p>

    <p>
      = 33.53 lakh yen
    </p>

    <p>
      Amount payable = 3433.53 lakh yen
    </p>

    <p>
      Converted at Forward Rate:
    </p>

    <p>
      = (3433.53 ÷ 345) × 100
    </p>

    <p>
      = ₹ 995.23 lakh
    </p>

    <p>
      Total Cost = (A) + (B)
    </p>

    <p>
      = ₹ 10.90 lakh + ₹ 995.23 lakh
    </p>

    <p>
      = <strong>₹ 1,006.13 lakh</strong>
    </p>

    <p><strong>Advice:</strong></p>

    <p>
      Cost under Option I = ₹ 1,092.03 lakh
    </p>

    <p>
      Cost under Option II = ₹ 1,006.13 lakh
    </p>

    <p>
      Savings = ₹ 85.90 lakh
    </p>

    <p>
      Therefore, the company should <strong>accept the offer from the foreign branch</strong> as it is cheaper by <strong>₹ 85.90 lakh</strong>.
    </p>
  `
},
{
  question_id: "AFM_MTPMAR25_I_Q6C",
  source: "ICAI Mock Test Paper - Series I, March 2025",
  chapter_name: "Startup Financing",
  placement: 6,
  marks: 4,
  question_html: `
    <p>Why do traditional lenders like banks hesitate to finance startups? List out the alternative financing options available to entrepreneurs.</p>
  `,
  solution_html: `
    <p>Traditional lenders such as banks are generally reluctant to finance startups because, at the initial stage, startups usually do not possess sufficient assets to offer as security and do not have a stable operating history or predictable cash flows. As a result, lenders find it difficult to assess repayment capacity and investment risk with certainty.</p>

    <p>In such situations, entrepreneurs often explore alternative sources of finance.</p>

    <p><strong>Alternative Financing Options Available to Entrepreneurs:</strong></p>

    <ol type="i">
      <li>Personal Financing</li>
      <li>Personal Credit Lines</li>
      <li>Family and Friends</li>
      <li>Peer-to-Peer Lending</li>
      <li>Crowdfunding</li>
    </ol>
  `
},


];