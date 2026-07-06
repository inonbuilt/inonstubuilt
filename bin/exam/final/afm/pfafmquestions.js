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
{
  question_id: "AFM_MTPAPR24II_Q1A",
  source: "ICAI Mock Test Paper - Series II, April 2024",
  chapter_name: "Derivatives Analysis and Valuation",
  placement: 1,
  marks: 6,
  question_html: `
    <p><strong>(a)</strong> You as an investor had purchased a 4-month call option on the equity shares of ABC Ltd. of ₹ 10, of which the current market price is ₹ 660 per share and the exercise price ₹ 750. You expect the price to range between ₹ 600 to ₹ 950. The expected share price of ABC Ltd. and related probability is given below:</p>
    
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
    <p><strong>Solution:</strong></p>
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
    <p><strong>(b)</strong> Share of Beta Ltd. is being quoted at a Price-Earning ratio of 10 times. In the coming year the company is expected to retain ₹ 10 per share which is 45% of its Earning Per Share.</p>
    <p>You are required to evaluate:</p>
    <ol type="i">
      <li>The cost of equity to the company if the market expects a growth rate of 10% p.a.</li>
      <li>If the anticipated growth rate is 12% per annum, calculate the indicative market price with the same cost of capital.</li>
    </ol>
  `,
  solution_html: `
    <p><strong>Solution:</strong></p>
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
    <p><strong>(a)</strong> On January 28, 2023, an importer customer requested a Bank to remit Singapore Dollar (SGD) 2,500,000 under an irrevocable Letter of Credit (LC). However, due to unavoidable factors, the Bank could affect the remittances only on February 4, 2023. The inter-bank market rates were as follows:</p>
    
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
    <p><strong>Solution:</strong></p>
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
    <p><strong>(b)</strong> Bank A enter into a Repo for 14 days with Bank B in 10% Government of India Bonds 2028 @ 5.65% for ₹ 8 crore. Assuming that clean price (the price that does not have accrued interest) be ₹ 99.42 and initial Margin be 3% and days of accrued interest be 272 days.</p>
    <p>You are required to calculate:</p>
    <ol type="i">
      <li>Dirty Price</li>
      <li>Approximate Repayment amount at maturity.</li>
    </ol>
    <p><em>Note: (1) Consider 360 days in a year. (2) Round off calculations upto 2 decimals points.</em></p>
  `,
  solution_html: `
    <p><strong>Solution:</strong></p>
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
    <p><strong>(c)</strong> What are the parameters to identify currency risk? List out the ways to minimize such risk.</p>
  `,
  solution_html: `
    <p><strong>Solution:</strong></p>
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
    <p><strong>(c)</strong> Why is there a need for succession planning in business? Explain.</p>
  `,
  solution_html: `
    <p><strong>Solution:</strong></p>
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
    <p><strong>Solution:</strong></p>
    
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
    <p><strong>(b)</strong> An investor has two portfolios known to be on minimum variance set for a population of three securities X, Y and Z having below mentioned weights:</p>
    
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
    <p><strong>Solution:</strong></p>
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
    <p><strong>(a)</strong> Suppose that economy A is growing rapidly, and you are managing a global equity fund and so far you have invested only in developed-country stocks only. Now you have decided to add stocks of economy A to your portfolio. The table below shows the expected rates of return, standard deviations, and correlation coefficients (all estimates are for aggregate stock market of developed countries and stock market of Economy A).</p>
    
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
    <p><strong>Solution:</strong></p>
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
    <p><strong>(a)</strong> Your client is holding the following securities:</p>
    
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
    <p><strong>Solution:</strong></p>
    
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
    <p><strong>(b)</strong> XYZ Plan, a hedge fund currently has assets of ₹ 40 crore. Mr. A, the manager of fund charges fee of 0.10% of portfolio asset. In addition to it he charges an incentive fee of 2%. The incentive will be linked to gross return each year in excess of the portfolio maximum value since the inception of fund. The maximum value the fund achieved so far since inception of fund about one and half year ago was ₹ 42 crores.</p>
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
    <p><strong>Solution:</strong></p>
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
    <p><strong>(c)</strong> What do you mean by Corporate Level Strategy. Also explain three basic questions Corporate Level Strategy should be able to answer.</p>
  `,
  solution_html: `
    <p><strong>Solution:</strong></p>
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
    <p><strong>(a)</strong> T plc wants to acquire L plc. The balance sheet of L plc as on 31st March 2022 is as follows:</p>
    
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
    <p><strong>Solution:</strong></p>
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
    <p><strong>(b)</strong> A mutual fund company introduces two schemes i.e. Dividend plan (Plan-D) and Bonus plan (Plan-B). The face value of the unit is ₹ 10. On 1-4-2018 Mr. K invested ₹ 2,00,000 each in Plan-D and Plan-B when the NAV was ₹ 38.20 and ₹ 35.60 respectively. Both the plans matured on 31-3-2023.</p>
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
    <p><strong>Solution:</strong></p>
    
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
    <p><strong>(a)</strong> R Ltd. is considering a project with the following Cash flows:</p>
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
    <p><strong>Solution:</strong></p>
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
    <p><strong>(b)</strong> Bank entered a plain vanilla swap through on OIS (Overnight Index Swap) on a principal of ₹ 20 crores and agreed to receive MIBOR overnight floating rate for a fixed payment on the principal. The swap was entered into on Monday, 2nd August 2020 and was to commence on 3rd August 2020 and run for a period of 7 days.</p>
    <p>Respective MIBOR rates for Tuesday to Monday were:<br>
    7.75%, 8.15%, 8.12%, 7.95%, 7.98% and 8.15%.</p>
    <p>If Bank received ₹ 634 net on settlement, calculate the applicable Fixed rate for the same swap period.</p>
    <p><em>Notes:<br>
    (i) Sunday is Holiday.<br>
    (ii) Work in rounded rupees and avoid decimal working.<br>
    (iii) Consider 365 days a year.</em></p>
  `,
  solution_html: `
    <p><strong>Solution:</strong></p>
    
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
}

];