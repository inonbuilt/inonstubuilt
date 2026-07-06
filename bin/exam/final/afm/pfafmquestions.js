const descriptiveQuestions = [
  {
  question_id: "AFM_MTPMAR24I_Q1",
  source: "ICAI Mock Test Paper - Series I, March 2024",
  chapter_name: "Foreign Exchange Risk Management, CAPM, Unicorn",
  placement: 1,
  marks: 6,
  question_html: `
    <p><strong>(a)</strong> XYZ Ltd. an Indian firm needs to pay JAPANESE YEN (JY) 1 crore on 30<sup>th</sup> June. In order to hedge the risk involved in foreign currency transaction, the firm is considering two alternative methods i.e. forward market cover and currency option contract.</p>

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

    <p><strong>(b)</strong> The expected returns and Beta of three stocks are given below</p>

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

    <p><strong>(c)</strong> What do you mean by the term Unicorn? State the features a Start-up should possess to be referred as a Unicorn?</p>
  `,
  solution_html: `
    <strong>Solution:</strong><br><br>

    <strong>(a)</strong><br><br>

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

    <strong>(b)</strong><br><br>

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

    <strong>(c)</strong><br><br>

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
    <strong>Solution:</strong><br><br>

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
    <strong>Solution:</strong><br><br>

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
    <strong>Solution:</strong><br><br>

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
    <strong>Solution:</strong><br><br>

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
    <strong>Solution:</strong><br><br>

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
    <strong>Solution:</strong><br><br>

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
    <strong>Solution:</strong><br><br>

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
    <strong>Solution:</strong><br><br>

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
    <strong>Solution:</strong><br><br>

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
    <strong>Solution:</strong><br><br>

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
    <strong>Solution:</strong><br><br>

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
    <strong>Solution:</strong><br><br>

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
    <strong>Solution:</strong><br><br>

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
    <strong>Solution:</strong><br><br>

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

];