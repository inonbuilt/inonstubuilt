const icaibookData = [
  {
    question_id: "AFM_ICAIBOOK_CH01_ILLUS_01",
    source: "ICAI Study Material",
    chapter_name: "Financial Policy and Corporate Strategy",
    placement: 1,
    marks: 8,
    question_html: `
      <p>The Balance Sheet of M/s. Sundry Ltd. as on 31-03-2023 is follows:</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width: 100%; border-collapse: collapse; text-align: left; margin: 12px 0;">
          <thead>
            <tr style="background-color: #f2f2f2;">
              <th style="padding: 8px; border: 1px solid #ddd;">Liabilities</th>
              <th style="padding: 8px; border: 1px solid #ddd; text-align: right;">₹ in lakhs</th>
              <th style="padding: 8px; border: 1px solid #ddd;">Assets</th>
              <th style="padding: 8px; border: 1px solid #ddd; text-align: right;">₹ in lakhs</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;">Share Capital</td>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">3,000</td>
              <td style="padding: 8px; border: 1px solid #ddd;">Fixed Assets</td>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">6,000</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;">Reserves</td>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">2,000</td>
              <td style="padding: 8px; border: 1px solid #ddd;">Inventory</td>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">5,000</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;">Long Term Loan</td>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">4,000</td>
              <td style="padding: 8px; border: 1px solid #ddd;">Receivables</td>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">2,400</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;">Short Term Loan</td>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">3,000</td>
              <td style="padding: 8px; border: 1px solid #ddd;">Cash</td>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">600</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;">Payables &amp; Provisions</td>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">2,000</td>
              <td style="padding: 8px; border: 1px solid #ddd;"></td>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: right;"></td>
            </tr>
            <tr style="font-weight: bold; background-color: #fafafa;">
              <td style="padding: 8px; border: 1px solid #ddd;">Total</td>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">14,000</td>
              <td style="padding: 8px; border: 1px solid #ddd;">Total</td>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">14,000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Sales for the year was ₹ 6,000 lakhs. The sales are expected to grow by 20% during the year. The profit margin and dividend pay-out ratio are expected to be 4% and 50% respectively.</p>
      <p>The company further desires that during the current year:</p>
      <ul>
        <li>Sales to Short Term Loan and Payables and Provision should be in the ratio of 4 : 3.</li>
        <li>Ratio of fixed assets to Long Term Loans should be 1.5.</li>
        <li>Debt Equity Ratio should not exceed 1.5.</li>
      </ul>
      <p><strong>You are required to determine:</strong></p>
      <ol type="i">
        <li>The amount of External Fund Requirement (EFR)</li>
        <li>The amount to be raised from Short Term &amp; Long Term Funds and issue of new Equity.</li>
      </ol>
    `,
    solution_html: `
      <h4>(i) Determination of External Funds Requirement (EFR)</h4>
      <div style="overflow-x:auto;">
        <table border="1" style="width: 100%; border-collapse: collapse; margin: 12px 0;">
          <thead>
            <tr style="background-color: #f2f2f2;">
              <th style="padding: 8px; border: 1px solid #ddd;">Particulars</th>
              <th style="padding: 8px; border: 1px solid #ddd; text-align: right;">₹ in lakhs</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;">Expected Sales (₹ 6,000 + 20% of ₹ 6,000)</td>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">7,200.00</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;">Profit Margin @ 4%</td>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">288.00</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;">Dividend Payout Ratio @ 50%</td>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">144.00</td>
            </tr>
            <tr style="font-weight: bold;">
              <td style="padding: 8px; border: 1px solid #ddd;">Balance to be ploughed back (A)</td>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">144.00</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;">Additional funds required: (₹ 14,000 - ₹ 2,000*) &times; 0.20 (B)</td>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">2,400.00</td>
            </tr>
            <tr style="font-weight: bold; background-color: #f9f9f9;">
              <td style="padding: 8px; border: 1px solid #ddd;">Balance to be met from external sources (B - A)</td>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">2,256.00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p><small>*<em>Note: Current liabilities (Payables &amp; Provisions) will increase spontaneously in proportion to the 20% increase in sales.</em></small></p>

      <h4>(ii) Amount to be Raised from Different Sources Under Given Conditions</h4>

      <p><strong>1. Amount to be raised from Short Term Funds:</strong></p>
      <ul>
        <li>New amount of Short-Term Loans and Payables &amp; Provisions:
          <br />$$\frac{3}{4} \times ₹ 7,200 = ₹ 5,400 \text{ lakhs}$$
        </li>
        <li>Less: Existing amount of Short-Term Loans and Payables &amp; Provisions:
          <br />$$(₹ 2,000 \times 1.20) + ₹ 3,000 = ₹ 2,400 + ₹ 3,000 = ₹ 5,400 \text{ lakhs}$$
        </li>
        <li><strong>Amount to be raised from Short-Term Funds:</strong> ₹ 5,400 - ₹ 5,400 = <strong>Nil</strong></li>
      </ul>

      <p><strong>2. Amount to be raised from Long Term Funds:</strong></p>
      <ul>
        <li>New Fixed Assets (₹ 6,000 + 20% of ₹ 6,000) = ₹ 7,200 lakhs</li>
        <li>Required Long-Term Loans (Fixed Assets / 1.5):
          <br />$$\frac{₹ 7,200}{1.5} = ₹ 4,800 \text{ lakhs}$$
        </li>
        <li>Less: Existing Long-Term Loans = ₹ 4,000 lakhs</li>
        <li><strong>Amount to be raised from Long-Term Funds:</strong> ₹ 4,800 - ₹ 4,000 = <strong>₹ 800.00 lakhs</strong></li>
      </ul>

      <p><strong>3. Amount to be raised from New Equity:</strong></p>
      <div style="overflow-x:auto;">
        <table border="1" style="width: 100%; border-collapse: collapse; margin: 12px 0;">
          <tbody>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;">Total External Funds Requirement (EFR)</td>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">₹ 2,256.00 lakhs</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;">Less: Amount raised from Short-Term Funds</td>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">₹ 0.00 lakhs</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;">Less: Amount raised from Long-Term Funds</td>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">₹ 800.00 lakhs</td>
            </tr>
            <tr style="font-weight: bold; background-color: #f9f9f9;">
              <td style="padding: 8px; border: 1px solid #ddd;">Balance amount to be raised from New Equity</td>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">₹ 1,456.00 lakhs</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p><strong>Debt-Equity Ratio Verification:</strong></p>
      <p>$$\text{Debt-Equity Ratio} = \frac{\text{Debt}}{\text{Shareholders' Funds}} = \frac{₹ 4,800}{₹ 3,000 + ₹ 1,456 + ₹ 2,000 + ₹ 144} = \frac{₹ 4,800}{₹ 6,600} = 0.727$$</p>
      <p>Since 0.727 is less than the upper ceiling of 1.5, the condition is satisfied.</p>

      <hr style="margin: 16px 0; border: none; border-top: 1px dashed #ccc;" />

      <h4>Alternative Solution (Formula Approach)</h4>
      <p>$$\text{EFR} = \left(\frac{\text{TA} - \text{P}}{\text{S}}\right) \times \Delta S - [m \times S_1 \times (1 - d)]$$</p>
      <p>Where:</p>
      <ul>
        <li>$\text{TA}$ = Total Assets = ₹ 14,000 lakhs</li>
        <li>$\text{P}$ = Spontaneous Payables &amp; Provisions = ₹ 2,000 lakhs</li>
        <li>$\text{S}$ = Current Sales = ₹ 6,000 lakhs</li>
        <li>$\Delta S$ = Change in Sales = ₹ 1,200 lakhs</li>
        <li>$S_1$ = Revised Projected Sales = ₹ 7,200 lakhs</li>
        <li>$m$ = Net Profit Margin Ratio = 0.04</li>
        <li>$d$ = Dividend Payout Ratio = 0.50</li>
      </ul>
      <p>$$\text{EFR} = \left(\frac{14,000 - 2,000}{6,000}\right) \times 1,200 - [0.04 \times 7,200 \times (1 - 0.50)]$$</p>
      <p>$$\text{EFR} = (2.0 \times 1,200) - 144 = 2,400 - 144 = ₹ 2,256 \text{ lakhs}$$</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_TYK_01",
    source: "ICAI Study Material",
    chapter_name: "Financial Policy and Corporate Strategy",
    placement: 2,
    marks: 6,
    question_html: `
      <p>Explain the Interface of Financial Policy and Strategic Management.</p>
    `,
    solution_html: `
      <p>The interface of strategic management and financial policy is anchored in the reality that the starting point of an organization is money and the end point is also money. No business can sustain existing operations or promote expansion projects without an adequate internally generated or externally mobilized financial base.</p>
      <p>The financial policy of a firm cannot be formulated in isolation from corporate strategy. The primary dimensions reflecting this interface are:</p>
      
      <h4>1. Sources of Finance and Capital Structure Decisions</h4>
      <ul>
        <li><strong>Fund Mobilization:</strong> Growth and expansion necessitate fund mobilization through ownership capital (equity/preference shares) or borrowed capital (debentures, public deposits, bank credit).</li>
        <li><strong>Capital Structure Norms:</strong> Policy makers must identify an optimal debt-equity mix to control financial risk. While general benchmarks exist (e.g., 1:1 for public sector entities and 2:1 for private sector companies), ideal leverage differs substantially by industry. Capital-intensive industries, priority sectors, and projects in underdeveloped regions often employ a much higher debt proportion.</li>
      </ul>

      <h4>2. Investment and Capital Allocation Decisions</h4>
      <ul>
        <li>Planners must design policies that regulate investments in long-term fixed assets while restraining unproductive locking of funds in current assets.</li>
        <li>Investment proposals generally fall into three categories:
          <ol>
            <li>Addition of a new product line.</li>
            <li>Capacity expansion of an existing product (expanding existing facilities or setting up a new plant).</li>
            <li>Cost reduction and efficient resource utilization via improved methods and closer operational monitoring.</li>
          </ol>
        </li>
        <li>Project evaluation and selection under conditions of capital constraints represent the core of strategic resource allocation.</li>
      </ul>

      <h4>3. Dividend Policy Decisions</h4>
      <ul>
        <li>Dividend policy determines the division of earnings between distribution to shareholders and retention for funding growth.</li>
        <li>Alternative payout policies include:
          <ul>
            <li>Maintaining a stable dividend payout (positively impacting share valuation).</li>
            <li>Paying a constant percentage of net profits (providing financial flexibility and lower perceived risk).</li>
            <li>Distributing a minimum base dividend per share with an additional dividend during exceptionally profitable periods.</li>
          </ul>
        </li>
        <li>The chosen policy must balance corporate capital requirements against investor preferences for regular dividends versus capital gains, alongside examining options like stock dividends (bonus shares).</li>
      </ul>

      <h4>4. Strategic Interdependence</h4>
      <p>Corporate strategy and financial policy share a reciprocal cause-and-effect relationship: corporate strategy serves as the cause and financial policy the effect, while financial limitations can frequently become the cause that restricts and shapes corporate strategy.</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_TYK_02",
    source: "ICAI Study Material",
    chapter_name: "Financial Policy and Corporate Strategy",
    placement: 3,
    marks: 6,
    question_html: `
      <p>Write a short note on Balancing Financial Goals vis-&agrave;-vis Sustainable Growth.</p>
    `,
    solution_html: `
      <h4>1. Concept of Sustainable Growth</h4>
      <p>Sustainable growth forces management to evaluate the financial consequences of sales increases and establish growth targets consistent with the firm's operational capabilities and financing policies. A strategic conflict emerges whenever revenue growth goals exceed the organization's sustainable capacity to finance that growth.</p>
      <p>In resource-constrained environments (e.g., the fuel industry), firms may adopt alternative stable growth strategies, such as demarketing campaigns (fuel conservation across generations), profit strategies, pause strategies, or incremental growth approaches.</p>

      <h4>2. Pillars of Financial Sustainability</h4>
      <p>According to CIVICUS ("Developing a Financing Strategy"), an organization achieves sustainability when it possesses:</p>
      <ul>
        <li>Multiple sources and mechanisms for generating income.</li>
        <li>Regular strategic, action, and financial planning mechanisms.</li>
        <li>Robust financial systems, governance, and financial autonomy.</li>
        <li>Clear organizational values, strong public image, and community engagement.</li>
      </ul>

      <h4>3. Sustainable Growth Rate (SGR) Model</h4>
      <p>Developed by <strong>Robert C. Higgins</strong>, the Sustainable Growth Rate represents the maximum rate of sales growth achievable given a firm's profitability, asset turnover, financial leverage, and dividend payout policies without raising external equity.</p>
      <p>$$\text{SGR} = \text{ROE} \times (1 - \text{Dividend Payout Ratio}) = \text{ROE} \times b$$</p>
      <p>Where $b$ is the retention ratio ($1 - \text{Payout Ratio}$).</p>
      <p><strong>Core Assumptions:</strong></p>
      <ol>
        <li>The firm maintains a constant target capital structure without issuing new equity.</li>
        <li>The firm adheres to a target dividend payout ratio.</li>
        <li>Sales are expanded as fast as market conditions allow within these financial boundaries.</li>
      </ol>

      <h4>4. Twin Cornerstones of Sustainable Growth</h4>
      <p>Sustainable growth requires harmonious alignment between two interdependent factors:</p>
      <ul>
        <li><strong>Growth Strategy:</strong> Long-term strategic planning and market positioning.</li>
        <li><strong>Growth Capability:</strong> The infrastructural, human, and operational capacity to execute the strategy.</li>
      </ul>

      <h4>5. Strategic Management of Growth Discrepancies</h4>
      <ul>
        <li><strong>Actual Growth &lt; SGR (Mature Firms):</strong> When actual expansion lags sustainable rates, firms accumulate surplus cash flows. Management can deploy excess cash by raising dividends, executing share repurchases, retiring debt, or acquiring fast-growing businesses.</li>
        <li><strong>Actual Growth &gt; SGR:</strong> Growth beyond sustainable limits causes financial strain. Management must raise fresh equity, increase financial leverage, or deliberate scale back the pace of expansion.</li>
        <li><strong>Impact of Inflation:</strong> Inflation increases the historical cost of replacing assets and boosts external financing needs, ultimately depressing the firm's sustainable growth rate if leverage ratios are held fixed.</li>
      </ul>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH02_EG_01",
    source: "ICAI Study Material",
    chapter_name: "Risk Management",
    placement: 1,
    marks: 4,
    question_html: `
      <p>Suppose you hold ₹ 2 crore worth of shares of X Ltd. whose market price standard deviation is 2% per day. Assuming 252 trading days a year, determine the maximum loss level over the period of 1 trading day and 10 trading days with a 99% confidence level.</p>
    `,
    solution_html: `
      <p>Assuming share prices are normally distributed, for a 99% confidence level, the equivalent Z-score from the Standard Normal Cumulative Distribution Table is <strong>2.33</strong>.</p>
      
      <h4>1. Daily Volatility (Standard Deviation) in Monetary Terms</h4>
      <p>$$\sigma_{\\text{daily}} = 2\\% \\times ₹ 2,00,00,000 = ₹ 4,00,000 \\text{ (₹ 4.00 lakhs)}$$</p>

      <h4>2. Maximum Loss for 1 Trading Day (99% Confidence Level)</h4>
      <p>$$\\text{VAR}_{1\\text{-day}} = \\text{Volatility} \\times Z = ₹ 4.00 \\text{ lakhs} \\times 2.33 = ₹ 9.32 \\text{ lakhs}$$</p>

      <h4>3. Expected Maximum Loss for 10 Trading Days</h4>
      <p>$$\\text{VAR}_{10\\text{-day}} = \\sqrt{T} \\times \\text{VAR}_{1\\text{-day}} = \\sqrt{10} \\times ₹ 9.32 \\text{ lakhs}$$</p>
      <p>$$\\text{VAR}_{10\\text{-day}} = 3.162277 \\times ₹ 9.32 \\text{ lakhs} = ₹ 29.47 \\text{ lakhs}$$</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH02_TYK_TH_01",
    source: "ICAI Study Material",
    chapter_name: "Risk Management",
    placement: 2,
    marks: 4,
    question_html: `
      <p>Explain the significance of Value-at-Risk (VAR).</p>
    `,
    solution_html: `
      <p><strong>Value-at-Risk (VAR)</strong> is a statistical measure of investment risk that estimates the maximum potential loss a portfolio or trading position might suffer under normal market conditions over a specified time horizon at a given confidence level (typically 95% or 99%).</p>
      <p>It addresses two fundamental questions:</p>
      <ol type="i">
        <li>What is the worst-case scenario?</li>
        <li>What will be the expected loss?</li>
      </ol>

      <h4>Significance and Applications of VAR</h4>
      <ul>
        <li><strong>Measurement of Potential Loss:</strong> It quantifies the maximum expected monetary loss on any portfolio, capital asset, or foreign exchange trading position over a specific holding period.</li>
        <li><strong>Performance Measurement Benchmark:</strong> It serves as a benchmark for risk-adjusted performance evaluation across different trading desks and operating units.</li>
        <li><strong>Setting Exposure &amp; Trading Limits:</strong> It enables risk officers to establish risk tolerance thresholds and trading limits for dealers and treasury personnel operating in the front office.</li>
        <li><strong>Formulation of Trading Strategies:</strong> It aids senior management in assessing risk-return trade-offs and developing hedging and portfolio management strategies.</li>
        <li><strong>Asset and Liability Management (ALM):</strong> It serves as a vital analytical instrument in banking and financial institutions to measure and mitigate maturity and cash flow mismatches.</li>
      </ul>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH02_TYK_TH_02",
    source: "ICAI Study Material",
    chapter_name: "Risk Management",
    placement: 3,
    marks: 6,
    question_html: `
      <p>The Financial Risk can be viewed from different perspectives. Explain.</p>
    `,
    solution_html: `
      <p>Financial risk refers to unexpected adverse fluctuations in financial parameters such as prices, exchange rates, credit ratings, and interest rates. It can be analyzed from three distinct perspectives:</p>

      <h4>1. From the Stakeholders' Point of View</h4>
      <ul>
        <li><strong>Equity Shareholders:</strong> As residual claimants, equity shareholders perceive high financial gearing (debt-to-equity ratio) as a major risk. In the event of bankruptcy or liquidation, equity holders have the lowest claim priority.</li>
        <li><strong>Lenders &amp; Creditors:</strong> High financial leverage also heightens default risk for debt providers, as substantial interest obligations impair the firm's capacity to service debt during business downturns.</li>
      </ul>

      <h4>2. From the Company's Point of View</h4>
      <ul>
        <li>Excessive debt borrowing or poor working capital management can trigger liquidity crises.</li>
        <li>If counter-parties default on their obligations or if cash inflows are insufficient to cover fixed interest and principal repayments, the company may be forced into insolvency and winding up.</li>
      </ul>

      <h4>3. From the Government's Point of View</h4>
      <ul>
        <li>From a macro-prudential angle, financial risk represents systemic risk—the failure of large financial institutions or banks (such as Lehman Brothers) that can trigger contagion and disrupt the financial system.</li>
        <li>It includes the erosion of public trust in financial markets, crises caused by willful defaulters, mounting non-performing assets (NPAs), and broader sovereign debt risks.</li>
      </ul>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH02_TYK_PR_01",
    source: "ICAI Study Material",
    chapter_name: "Risk Management",
    placement: 4,
    marks: 8,
    question_html: `
      <p>Consider a portfolio consisting of a ₹ 200,00,000 investment in share XYZ and a ₹ 200,00,000 investment in share ABC. The daily standard deviation of both shares is 1% and the coefficient of correlation between them is 0.3. You are required to determine the 10-day 99% value at risk for the portfolio.</p>
    `,
    solution_html: `
      <h4>1. Daily Standard Deviation of Individual Stocks</h4>
      <ul>
        <li>Standard deviation of Share XYZ ($₹$) = $1\\% \\times ₹ 200 \\text{ lakhs} = ₹ 2.00 \\text{ lakhs}$</li>
        <li>Standard deviation of Share ABC ($₹$) = $1\\% \\times ₹ 200 \\text{ lakhs} = ₹ 2.00 \\text{ lakhs}$</li>
        <li>Correlation coefficient ($r$) = $0.30$</li>
      </ul>

      <h4>2. Daily Variance and Standard Deviation of the Portfolio</h4>
      <p>$$\\sigma_p^2 = \\sigma_1^2 + \\sigma_2^2 + 2 \\cdot r \\cdot \\sigma_1 \\cdot \\sigma_2$$</p>
      <p>$$\\sigma_p^2 = (2)^2 + (2)^2 + (2 \\times 0.30 \\times 2 \\times 2) = 4 + 4 + 2.4 = 10.40 \\text{ (lakhs)}^2$$</p>
      <p>$$\\sigma_p = \\sqrt{10.40} \\approx ₹ 3.2249 \\text{ lakhs}$$</p>

      <hr style="margin: 12px 0; border: none; border-top: 1px dashed #ccc;" />
      
      <p><em>Alternative computation using portfolio weights:</em></p>
      <ul>
        <li>Total portfolio value = $₹ 200 \\text{ lakhs} + ₹ 200 \\text{ lakhs} = ₹ 400 \\text{ lakhs}$</li>
        <li>$w_1 = 0.50, \\quad w_2 = 0.50$</li>
      </ul>
      <p>$$\\sigma_p^2(\\%) = (1)^2(0.50)^2 + (1)^2(0.50)^2 + 2(1)(1)(0.30)(0.50)(0.50) = 0.25 + 0.25 + 0.15 = 0.65\\%$$</p>
      <p>$$\\sigma_p(\\%) = \\sqrt{0.65\\%} = 0.80623\\%$$</p>
      <p>$$\\sigma_p \\text{ in amount} = ₹ 400 \\text{ lakhs} \\times 0.80623\\% = ₹ 3.2249 \\text{ lakhs} \\approx ₹ 3.22 \\text{ lakhs}$$</p>

      <hr style="margin: 12px 0; border: none; border-top: 1px dashed #ccc;" />

      <h4>3. Standard Deviation for 10-Day Period</h4>
      <p>$$\\sigma_{10\\text{-day}} = \\sigma_p \\times \\sqrt{10} = ₹ 3.2249 \\text{ lakhs} \\times \\sqrt{10} = ₹ 3.2249 \\times 3.162277 = ₹ 10.18 \\text{ lakhs}$$</p>

      <h4>4. 10-Day 99% Value at Risk (VAR)</h4>
      <p>From the standard normal cumulative distribution table, the Z-score corresponding to a 99% confidence level (1% in the tail) is <strong>2.33</strong>.</p>
      <p>$$\\text{VAR}_{10\\text{-day, 99\\%}} = Z \\times \\sigma_{10\\text{-day}} = 2.33 \\times ₹ 10.18 \\text{ lakhs} = ₹ 23.72 \\text{ lakhs}$$</p>
    `
  },
//   CHapter3
  {
    question_id: "AFM_ICAIBOOK_CH03_TYK_TH_01",
    source: "ICAI Study Material",
    chapter_name: "Advanced Capital Budgeting Decisions",
    placement: 1,
    marks: 4,
    question_html: `
      <p>Write short note on Certainty Equivalent Approach.</p>
    `,
    solution_html: `
      <p>The <strong>Certainty Equivalent (CE) Approach</strong> incorporates risk in capital budgeting by adjusting risky future cash flows rather than the discount rate[cite: 1]. Risky cash flows are converted into equivalent certain cash flows that a risk-averse decision maker would accept with indifference[cite: 1].</p>
      <ul>
        <li><strong>CE Coefficient ($\alpha_t$):</strong> Calculated as $\alpha_t = \frac{\text{Certain Cash Flow}_t}{\text{Risky or Expected Cash Flow}_t}$[cite: 1]. Its value lies between $0$ and $1$[cite: 1]. The greater the riskiness of an expected cash flow, the lower the certainty equivalent coefficient for receipts[cite: 1].</li>
        <li><strong>Risk-Free Discounting:</strong> Once risky cash flows are scaled down to certain flows, they are discounted at the risk-free rate of return ($R_f$)[cite: 1]. Using a risk-adjusted rate here would result in double-counting of risk[cite: 1].</li>
        <li><strong>Net Present Value Formula:</strong>
          $$\text{NPV} = \sum_{t=1}^{n} \frac{\alpha_t \times \text{NCF}_t}{(1 + R_f)^t} - I_0$$[cite: 1]
        </li>
        <li><strong>Merits &amp; Demerits:</strong> Unlike the Risk-Adjusted Discount Rate (RADR) method, it does not assume that risk compounds monotonically at a constant rate over time[cite: 1]. However, determining objective $\alpha_t$ values across various future periods can be subjective[cite: 1].</li>
      </ul>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH03_TYK_TH_02",
    source: "ICAI Study Material",
    chapter_name: "Advanced Capital Budgeting Decisions",
    placement: 2,
    marks: 4,
    question_html: `
      <p>What is the sensitivity analysis in Capital Budgeting?</p>
    `,
    solution_html: `
      <p><strong>Sensitivity Analysis</strong> is a risk evaluation technique that studies how responsive a project's criterion of merit (such as NPV or IRR) is to changes in a single underlying parameter or input variable, holding all other variables constant ("what if" analysis)[cite: 1].</p>
      <h4>Steps Involved</h4>
      <ol>
        <li>Identify key variables influencing NPV/IRR (e.g., selling price, sales volume, initial capital expenditure, variable cost, project life)[cite: 1].</li>
        <li>Establish the mathematical relationship connecting these variables to NPV[cite: 1].</li>
        <li>Isolate and alter each variable by a specific percentage (e.g., 5%, 10%) or calculate the change required to reduce NPV to zero, identifying the most critical variables[cite: 1].</li>
      </ol>
      <h4>Advantages and Limitations</h4>
      <ul>
        <li><strong>Advantage:</strong> Pinpoints the critical variables that demand strict managerial attention and monitoring during implementation[cite: 1].</li>
        <li><strong>Limitation:</strong> Assumes input variables are completely independent of one another (unrealistic in practice) and ignores the probability distribution of changes occurring[cite: 1].</li>
      </ul>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH03_TYK_TH_03",
    source: "ICAI Study Material",
    chapter_name: "Advanced Capital Budgeting Decisions",
    placement: 3,
    marks: 4,
    question_html: `
      <p>Write a note on project appraisal under inflationary conditions.</p>
    `,
    solution_html: `
      <p>Inflation erodes consumer purchasing power, inflates capital costs, and increases operational expenses[cite: 1]. In investment appraisal, inflation creates distortions primarily because depreciation tax shields are tied to historical asset costs rather than replacement values, eroding real returns[cite: 1].</p>
      <h4>Methodologies for Appraisal</h4>
      <ul>
        <li><strong>Approach 1 (Real Cash Flows &amp; Real Rate):</strong> Deflate nominal expected cash flows to real cash flows using the inflation index and discount them using the real cost of capital[cite: 1].</li>
        <li><strong>Approach 2 (Nominal Cash Flows &amp; Nominal Rate):</strong> Project cash inflows/outflows using anticipated inflation rates and discount them using the nominal required rate of return ($R_N$)[cite: 1]:
          $$1 + R_N = (1 + R_R)(1 + P) \quad \text{or} \quad R_N \approx R_R + P$$[cite: 1]
        </li>
      </ul>
      <h4>Prudential Guidelines</h4>
      <ul>
        <li>Incorporate provisions for cost escalation across raw materials, equipment, and wages[cite: 1].</li>
        <li>Account for probable interest rate escalations by lenders pushing up funding costs[cite: 1].</li>
        <li>Firms favor projects with shorter payback periods during inflationary phases to mitigate long-term uncertainty[cite: 1].</li>
      </ul>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH03_TYK_TH_04",
    source: "ICAI Study Material",
    chapter_name: "Advanced Capital Budgeting Decisions",
    placement: 4,
    marks: 6,
    question_html: `
      <p>Explain the steps involved in Simulation Analysis.</p>
    `,
    solution_html: `
      <p><strong>Monte Carlo Simulation</strong> generates a full probability distribution of possible project outcomes (NPV/IRR) by repeatedly sampling randomly from probability distributions of stochastic exogenous variables[cite: 1].</p>
      <h4>Steps Involved</h4>
      <ol>
        <li><strong>Modelling the Project:</strong> Formulate a mathematical model linking the dependent outcome (NPV) with internal parameters (e.g., initial cost, tax rate) and exogenous variables (e.g., unit demand, operating costs)[cite: 1].</li>
        <li><strong>Specifying Probability Distributions:</strong> Assign probability distributions and cumulative probability ranges to each stochastic variable[cite: 1].</li>
        <li><strong>Assigning Random Numbers:</strong> Allocate continuous intervals of random digits corresponding to cumulative probabilities of the exogenous variables[cite: 1].</li>
        <li><strong>Random Sampling:</strong> Select values at random using a random number generating device or table for each variable[cite: 1].</li>
        <li><strong>Computing Trial Outcomes:</strong> Calculate the resulting project NPV for the set of values generated in each simulation run[cite: 1].</li>
        <li><strong>Repetition &amp; Statistical Inference:</strong> Repeat the simulation run a large number of times (e.g., hundreds or thousands of iterations) to plot the probability distribution of NPV, determining its mean and standard deviation to assess project risk[cite: 1].</li>
      </ol>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH03_TYK_PR_01",
    source: "ICAI Study Material",
    chapter_name: "Advanced Capital Budgeting Decisions",
    placement: 5,
    marks: 8,
    question_html: `
      <p>Skylark Airways is planning to acquire a light commercial aircraft for flying class clients at an investment of ₹ 50,00,000[cite: 1]. The expected cash flow after tax for the next three years is as follows (₹ in lakhs):</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th colspan="2" style="padding:6px; border:1px solid #ddd;">Year 1</th>
              <th colspan="2" style="padding:6px; border:1px solid #ddd;">Year 2</th>
              <th colspan="2" style="padding:6px; border:1px solid #ddd;">Year 3</th>
            </tr>
            <tr style="background-color:#fafafa;">
              <th style="padding:6px; border:1px solid #ddd;">CFAT</th>
              <th style="padding:6px; border:1px solid #ddd;">Probability</th>
              <th style="padding:6px; border:1px solid #ddd;">CFAT</th>
              <th style="padding:6px; border:1px solid #ddd;">Probability</th>
              <th style="padding:6px; border:1px solid #ddd;">CFAT</th>
              <th style="padding:6px; border:1px solid #ddd;">Probability</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>14.00</td><td>0.1</td><td>15.00</td><td>0.1</td><td>18.00</td><td>0.2</td></tr>
            <tr><td>18.00</td><td>0.2</td><td>20.00</td><td>0.3</td><td>25.00</td><td>0.5</td></tr>
            <tr><td>25.00</td><td>0.4</td><td>32.00</td><td>0.4</td><td>35.00</td><td>0.2</td></tr>
            <tr><td>40.00</td><td>0.3</td><td>45.00</td><td>0.2</td><td>48.00</td><td>0.1</td></tr>
          </tbody>
        </table>
      </div>
      <p>The Company wishes to take into consideration all possible risk factors relating to airline operations. The company wants to know:</p>
      <ol type="i">
        <li>The expected NPV of this venture assuming independent probability distribution with 6 per cent risk free rate of interest[cite: 1].</li>
        <li>The possible deviation in the expected value[cite: 1].</li>
        <li>How would standard deviation of the present value distribution help in Capital Budgeting decisions?[cite: 1]</li>
      </ol>
    `,
    solution_html: `
      <h4>(i) Expected Net Present Value (ENPV)</h4>
      <ul>
        <li>$\text{ENCF}_1 = (14 \times 0.1) + (18 \times 0.2) + (25 \times 0.4) + (40 \times 0.3) = 1.4 + 3.6 + 10.0 + 12.0 = ₹ 27.0 \text{ lakhs}$[cite: 1]</li>
        <li>$\text{ENCF}_2 = (15 \times 0.1) + (20 \times 0.3) + (32 \times 0.4) + (45 \times 0.2) = 1.5 + 6.0 + 12.8 + 9.0 = ₹ 29.3 \text{ lakhs}$[cite: 1]</li>
        <li>$\text{ENCF}_3 = (18 \times 0.2) + (25 \times 0.5) + (35 \times 0.2) + (48 \times 0.1) = 3.6 + 12.5 + 7.0 + 4.8 = ₹ 27.9 \text{ lakhs}$[cite: 1]</li>
      </ul>
      <p>Discounting at 6% risk-free rate ($PVF_1 = 0.943, PVF_2 = 0.890, PVF_3 = 0.840$)[cite: 1]:</p>
      <p>$$\text{PV of Inflows} = (27.0 \times 0.943) + (29.3 \times 0.890) + (27.9 \times 0.840) = 25.461 + 26.077 + 23.436 = ₹ 74.974 \text{ lakhs}$$[cite: 1]</p>
      <p>$$\text{Expected NPV} = ₹ 74.974 \text{ lakhs} - ₹ 50.00 \text{ lakhs} = \mathbf{₹ 24.974 \text{ lakhs}}$$[cite: 1]</p>

      <h4>(ii) Possible Deviation in Expected Value ($\sigma$)</h4>
      <ul>
        <li>$\sigma_1^2 = (14-27)^2(0.1) + (18-27)^2(0.2) + (25-27)^2(0.4) + (40-27)^2(0.3) = 16.9 + 16.2 + 1.6 + 50.7 = 85.4$[cite: 1]</li>
        <li>$\sigma_2^2 = (15-29.3)^2(0.1) + (20-29.3)^2(0.3) + (32-29.3)^2(0.4) + (45-29.3)^2(0.2) = 20.449 + 25.947 + 2.916 + 49.298 = 98.61$[cite: 1]</li>
        <li>$\sigma_3^2 = (18-27.9)^2(0.2) + (25-27.9)^2(0.5) + (35-27.9)^2(0.2) + (48-27.9)^2(0.1) = 19.602 + 4.205 + 10.082 + 40.401 = 74.29$[cite: 1]</li>
      </ul>
      <p>Since cash flows are independent over time[cite: 1]:</p>
      <p>$$\sigma = \sqrt{\frac{\sigma_1^2}{(1+i)^2} + \frac{\sigma_2^2}{(1+i)^4} + \frac{\sigma_3^2}{(1+i)^6}} = \sqrt{\frac{85.4}{(1.06)^2} + \frac{98.61}{(1.06)^4} + \frac{74.29}{(1.06)^6}}$$[cite: 1]</p>
      <p>$$\sigma = \sqrt{76.008 + 78.110 + 52.372} = \sqrt{206.49} = \mathbf{₹ 14.3696 \text{ lakhs}}$$[cite: 1]</p>

      <h4>(iii) Role of Standard Deviation in Decision Making</h4>
      <p>Standard deviation measures the dispersion of cash flows around the mean[cite: 1]. It enables management to quantify the volatility of expected returns[cite: 1]. When comparing projects of similar sizes and returns, the alternative with lower dispersion is chosen[cite: 1]. Assuming a normal distribution, $\sigma$ also allows management to evaluate the probability that NPV will fall below zero[cite: 1].</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH03_TYK_PR_02",
    source: "ICAI Study Material",
    chapter_name: "Advanced Capital Budgeting Decisions",
    placement: 6,
    marks: 6,
    question_html: `
      <p>Cyber Company is considering two mutually exclusive projects. Investment outlay of both the projects is ₹ 5,00,000 and each is expected to have a life of 5 years[cite: 1]. Under three possible situations their annual cash flows and probabilities are as under:</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Situation</th>
              <th style="padding:6px; border:1px solid #ddd;">Probabilities</th>
              <th style="padding:6px; border:1px solid #ddd;">Project A (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">Project B (₹)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Good</td><td>0.3</td><td>6,00,000</td><td>5,00,000</td></tr>
            <tr><td>Normal</td><td>0.4</td><td>4,00,000</td><td>4,00,000</td></tr>
            <tr><td>Worse</td><td>0.3</td><td>2,00,000</td><td>3,00,000</td></tr>
          </tbody>
        </table>
      </div>
      <p>The cost of capital is 7 per cent, which project should be accepted? Explain with workings[cite: 1].</p>
    `,
    solution_html: `
      <h4>1. Expected Annual Cash Flow (ENCF)</h4>
      <ul>
        <li><strong>Project A:</strong> $(6,00,000 \times 0.3) + (4,00,000 \times 0.4) + (2,00,000 \times 0.3) = ₹ 4,00,000$[cite: 1]</li>
        <li><strong>Project B:</strong> $(5,00,000 \times 0.3) + (4,00,000 \times 0.4) + (3,00,000 \times 0.3) = ₹ 4,00,000$[cite: 1]</li>
      </ul>

      <h4>2. Net Present Value (at 7% for 5 years, PVIFA = 4.100)</h4>
      <ul>
        <li>$$\text{NPV}_A = (₹ 4,00,000 \times 4.100) - ₹ 5,00,000 = ₹ 16,40,000 - ₹ 5,00,000 = ₹ 11,40,000$$[cite: 1]</li>
        <li>$$\text{NPV}_B = (₹ 4,00,000 \times 4.100) - ₹ 5,00,000 = ₹ 16,40,000 - ₹ 5,00,000 = ₹ 11,40,000$$[cite: 1]</li>
      </ul>

      <h4>3. Standard Deviation of Annual Cash Flows ($\sigma$)</h4>
      <p><strong>Project A:</strong></p>
      <p>$$\sigma_A^2 = 0.3(6,00,000 - 4,00,000)^2 + 0.4(4,00,000 - 4,00,000)^2 + 0.3(2,00,000 - 4,00,000)^2 = 2.4 \times 10^{10}$$[cite: 1]</p>
      <p>$$\sigma_A = \sqrt{24,00,00,00,000} \approx \mathbf{₹ 1,54,919.33}$$[cite: 1]</p>

      <p><strong>Project B:</strong></p>
      <p>$$\sigma_B^2 = 0.3(5,00,000 - 4,00,000)^2 + 0.4(4,00,000 - 4,00,000)^2 + 0.3(3,00,000 - 4,00,000)^2 = 0.6 \times 10^{10}$$[cite: 1]</p>
      <p>$$\sigma_B = \sqrt{6,00,00,00,000} \approx \mathbf{₹ 77,459.66}$$[cite: 1]</p>

      <h4>Recommendation</h4>
      <p>Both projects yield an identical Expected NPV of ₹ 11,40,000[cite: 1]. Therefore, the decision is made on the basis of standard deviation[cite: 1]. <strong>Project B</strong> is recommended because its standard deviation (₹ 77,459.66) is substantially lower than Project A (₹ 1,54,919.33), making it significantly less risky[cite: 1].</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH03_TYK_PR_03",
    source: "ICAI Study Material",
    chapter_name: "Advanced Capital Budgeting Decisions",
    placement: 7,
    marks: 4,
    question_html: `
      <p>A company is considering Projects X and Y with following information:</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Project</th>
              <th style="padding:6px; border:1px solid #ddd;">Expected NPV (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">Standard Deviation (₹)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>X</td><td>1,22,000</td><td>90,000</td></tr>
            <tr><td>Y</td><td>2,25,000</td><td>1,20,000</td></tr>
          </tbody>
        </table>
      </div>
      <ol type="i">
        <li>Which project will you recommend based on the above data?[cite: 1]</li>
        <li>Explain whether your opinion will change, if you use coefficient of variation as a measure of risk[cite: 1].</li>
        <li>Which measure is more appropriate in this situation and why?[cite: 1]</li>
      </ol>
    `,
    solution_html: `
      <h4>(i) Recommendation Based on Absolute Dispersion (Standard Deviation)</h4>
      <p>Based solely on standard deviation, <strong>Project X</strong> is recommended as it has a lower standard deviation (₹ 90,000) compared to Project Y (₹ 1,20,000), indicating lower absolute risk[cite: 1].</p>

      <h4>(ii) Evaluation Using Coefficient of Variation (CV)</h4>
      <p>$$\text{CV}_X = \frac{\sigma_X}{\text{ENPV}_X} = \frac{₹ 90,000}{₹ 1,22,000} \approx \mathbf{0.738}$$[cite: 1]</p>
      <p>$$\text{CV}_Y = \frac{\sigma_Y}{\text{ENPV}_Y} = \frac{₹ 1,20,000}{₹ 2,25,000} \approx \mathbf{0.533}$$[cite: 1]</p>
      <p>Yes, the opinion changes[cite: 1]. Under Coefficient of Variation, <strong>Project Y</strong> is preferred because it carries a lower risk per unit of expected return ($0.533 < 0.738$)[cite: 1].</p>

      <h4>(iii) Most Appropriate Measure</h4>
      <p>In this situation, the <strong>Expected NPV method / Wealth Maximisation criterion</strong> is most appropriate[cite: 1]. Project Y generates a substantially higher Expected NPV (₹ 2,25,000 vs. ₹ 1,22,000), which directly aligns with the objective of maximizing shareholder wealth[cite: 1].</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH03_TYK_PR_04",
    source: "ICAI Study Material",
    chapter_name: "Advanced Capital Budgeting Decisions",
    placement: 8,
    marks: 6,
    question_html: `
      <p>KLM Ltd. is considering taking up one of two projects—Project-K and Project-S[cite: 1]. Both have the same life and require an equal investment of ₹ 80 lakhs each[cite: 1]. The probability distribution of cash flows for Year 1 (which reflects future patterns) is as follows:</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th colspan="2" style="padding:6px; border:1px solid #ddd;">Project K</th>
              <th colspan="2" style="padding:6px; border:1px solid #ddd;">Project S</th>
            </tr>
            <tr style="background-color:#fafafa;">
              <th style="padding:6px; border:1px solid #ddd;">Cash Flow (₹ in lakhs)</th>
              <th style="padding:6px; border:1px solid #ddd;">Probability</th>
              <th style="padding:6px; border:1px solid #ddd;">Cash Flow (₹ in lakhs)</th>
              <th style="padding:6px; border:1px solid #ddd;">Probability</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>11</td><td>0.10</td><td>09</td><td>0.10</td></tr>
            <tr><td>13</td><td>0.20</td><td>13</td><td>0.25</td></tr>
            <tr><td>15</td><td>0.40</td><td>17</td><td>0.30</td></tr>
            <tr><td>17</td><td>0.20</td><td>21</td><td>0.25</td></tr>
            <tr><td>19</td><td>0.10</td><td>25</td><td>0.10</td></tr>
          </tbody>
        </table>
      </div>
      <p><strong>Required:</strong></p>
      <ol type="i">
        <li>Calculate variance, standard deviation and co-efficient of variation for both the projects[cite: 1].</li>
        <li>Which of the two projects is riskier?[cite: 1]</li>
      </ol>
    `,
    solution_html: `
      <h4>(i) Statistical Computations</h4>
      <p><strong>Project K:</strong></p>
      <ul>
        <li>$\text{Expected Value (Mean)} = (11 \times 0.10) + (13 \times 0.20) + (15 \times 0.40) + (17 \times 0.20) + (19 \times 0.10) = 1.1 + 2.6 + 6.0 + 3.4 + 1.9 = \mathbf{15.00}$[cite: 1]</li>
        <li>$\text{Variance } (\sigma^2) = 0.1(11-15)^2 + 0.2(13-15)^2 + 0.4(15-15)^2 + 0.2(17-15)^2 + 0.1(19-15)^2 = 1.6 + 0.8 + 0 + 0.8 + 1.6 = \mathbf{4.80}$[cite: 1]</li>
        <li>$\text{Standard Deviation } (\sigma) = \sqrt{4.80} = \mathbf{2.19}$[cite: 1]</li>
        <li>$\text{Coefficient of Variation (CV)} = \frac{2.19}{15} = \mathbf{0.146}$[cite: 1]</li>
      </ul>

      <p><strong>Project S:</strong></p>
      <ul>
        <li>$\text{Expected Value (Mean)} = (9 \times 0.10) + (13 \times 0.25) + (17 \times 0.30) + (21 \times 0.25) + (25 \times 0.10) = 0.9 + 3.25 + 5.1 + 5.25 + 2.5 = \mathbf{17.00}$[cite: 1]</li>
        <li>$\text{Variance } (\sigma^2) = 0.1(9-17)^2 + 0.25(13-17)^2 + 0.3(17-17)^2 + 0.25(21-17)^2 + 0.1(25-17)^2 = 6.4 + 4.0 + 0 + 4.0 + 6.4 = \mathbf{20.80}$[cite: 1]</li>
        <li>$\text{Standard Deviation } (\sigma) = \sqrt{20.80} = \mathbf{4.56}$[cite: 1]</li>
        <li>$\text{Coefficient of Variation (CV)} = \frac{4.56}{17} = \mathbf{0.268}$[cite: 1]</li>
      </ul>

      <h4>(ii) Risk Assessment</h4>
      <p><strong>Project S</strong> is riskier than Project K because its Coefficient of Variation ($0.268 > 0.146$) and Standard Deviation ($4.56 > 2.19$) are significantly higher[cite: 1].</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH03_TYK_PR_05",
    source: "ICAI Study Material",
    chapter_name: "Advanced Capital Budgeting Decisions",
    placement: 9,
    marks: 8,
    question_html: `
      <p>Project X and Project Y are under the evaluation of XY Co.[cite: 1] The estimated cash flows and their probabilities are as below:</p>
      <p><strong>Project X:</strong> Investment (Year 0) ₹ 70 lakhs[cite: 1]</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Probability Weights</th>
              <th style="padding:6px; border:1px solid #ddd;">0.30</th>
              <th style="padding:6px; border:1px solid #ddd;">0.40</th>
              <th style="padding:6px; border:1px solid #ddd;">0.30</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Year 1 (₹ lakhs)</td><td>30</td><td>50</td><td>65</td></tr>
            <tr><td>Year 2 (₹ lakhs)</td><td>30</td><td>40</td><td>55</td></tr>
            <tr><td>Year 3 (₹ lakhs)</td><td>30</td><td>40</td><td>45</td></tr>
          </tbody>
        </table>
      </div>
      <p><strong>Project Y:</strong> Investment (Year 0) ₹ 80 lakhs[cite: 1]. Annual cash flows throughout 3-year life:</p>
      <ul>
        <li>Probability 0.20: ₹ 40 lakhs[cite: 1]</li>
        <li>Probability 0.50: ₹ 45 lakhs[cite: 1]</li>
        <li>Probability 0.30: ₹ 50 lakhs[cite: 1]</li>
      </ul>
      <ol type="a">
        <li>Which project is better based on NPV criterion with a discount rate of 10%?[cite: 1]</li>
        <li>Compute the standard deviation of the present value distribution and analyse inherent risk[cite: 1].</li>
      </ol>
    `,
    solution_html: `
      <h4>(a) Calculation of Expected NPV at 10%</h4>
      <p><strong>Project X:</strong></p>
      <ul>
        <li>$\text{ENCF}_1 = (30 \times 0.3) + (50 \times 0.4) + (65 \times 0.3) = ₹ 48.5 \text{ lakhs}$[cite: 1]</li>
        <li>$\text{ENCF}_2 = (30 \times 0.3) + (40 \times 0.4) + (55 \times 0.3) = ₹ 41.5 \text{ lakhs}$[cite: 1]</li>
        <li>$\text{ENCF}_3 = (30 \times 0.3) + (40 \times 0.4) + (45 \times 0.3) = ₹ 38.5 \text{ lakhs}$[cite: 1]</li>
        <li>$\text{PV of Inflows} = (48.5 \times 0.909) + (41.5 \times 0.826) + (38.5 \times 0.751) = 44.09 + 34.28 + 28.91 = ₹ 107.28 \text{ lakhs}$[cite: 1]</li>
        <li>$$\text{NPV}_X = ₹ 107.28 - ₹ 70.00 = \mathbf{₹ 37.28 \text{ lakhs}}$$[cite: 1]</li>
      </ul>

      <p><strong>Project Y:</strong></p>
      <ul>
        <li>$\text{ENCF}_{1-3} = (40 \times 0.2) + (45 \times 0.5) + (50 \times 0.3) = ₹ 45.5 \text{ lakhs}$[cite: 1]</li>
        <li>$\text{PV of Inflows} = 45.5 \times 2.487 = ₹ 113.16 \text{ lakhs}$[cite: 1]</li>
        <li>$$\text{NPV}_Y = ₹ 113.16 - ₹ 80.00 = \mathbf{₹ 33.16 \text{ lakhs}}$$[cite: 1]</li>
      </ul>
      <p><strong>Conclusion (a):</strong> Project X is better based on the NPV criterion (₹ 37.28 lakhs vs. ₹ 33.16 lakhs)[cite: 1].</p>

      <h4>(b) Standard Deviation of Present Value Distribution (Hillier's Model)</h4>
      <p>Assuming cash flows are perfectly correlated over time within states[cite: 1]:</p>
      <ul>
        <li>For Project X: $\sigma_1 \approx 13.61, \sigma_2 \approx 9.76, \sigma_3 \approx 5.94$[cite: 1].
          $$\sigma_{\text{PV}, X} = \sum_{t=1}^3 \frac{\sigma_t}{(1+r)^t} = \frac{13.61}{1.10} + \frac{9.76}{(1.10)^2} + \frac{5.94}{(1.10)^3} = \mathbf{₹ 15.43 \text{ lakhs}}$$[cite: 1]
        </li>
        <li>For Project Y: Annual $\sigma = \sqrt{0.2(40-45.5)^2 + 0.5(45-45.5)^2 + 0.3(50-45.5)^2} = \sqrt{12.25} = 3.50$[cite: 1].
          $$\sigma_{\text{PV}, Y} = \sigma \times \text{PVIFA}(10\%, 3) = 3.50 \times 2.487 \approx 5.03 \text{ (or } \mathbf{₹ 5.03 \text{ lakhs}}\text{)}$$[cite: 1]
        </li>
      </ul>
      <p><strong>Analysis:</strong> Project Y is much less risky as its standard deviation of present value is only ₹ 5.03 lakhs compared to ₹ 15.43 lakhs for Project X[cite: 1].</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH03_TYK_PR_06",
    source: "ICAI Study Material",
    chapter_name: "Advanced Capital Budgeting Decisions",
    placement: 10,
    marks: 6,
    question_html: `
      <p>Shivam Ltd. is considering two mutually exclusive projects A and B[cite: 1]. Project A costs ₹ 36,000 and project B ₹ 30,000[cite: 1]. You have been given below the net present value probability distribution for each project:</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th colspan="2" style="padding:6px; border:1px solid #ddd;">Project A</th>
              <th colspan="2" style="padding:6px; border:1px solid #ddd;">Project B</th>
            </tr>
            <tr style="background-color:#fafafa;">
              <th style="padding:6px; border:1px solid #ddd;">NPV Estimates (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">Probability</th>
              <th style="padding:6px; border:1px solid #ddd;">NPV Estimates (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">Probability</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>15,000</td><td>0.2</td><td>15,000</td><td>0.1</td></tr>
            <tr><td>12,000</td><td>0.3</td><td>12,000</td><td>0.4</td></tr>
            <tr><td>6,000</td><td>0.3</td><td>6,000</td><td>0.4</td></tr>
            <tr><td>3,000</td><td>0.2</td><td>3,000</td><td>0.1</td></tr>
          </tbody>
        </table>
      </div>
      <ol type="i">
        <li>Compute the expected net present values of projects A and B[cite: 1].</li>
        <li>Compute the risk attached to each project i.e. standard deviation of each probability distribution[cite: 1].</li>
        <li>Compute the profitability index of each project[cite: 1].</li>
        <li>Which project do you recommend? State with reasons[cite: 1].</li>
      </ol>
    `,
    solution_html: `
      <h4>(i) Expected Net Present Value</h4>
      <ul>
        <li>$$\text{ENPV}_A = (15,000 \times 0.2) + (12,000 \times 0.3) + (6,000 \times 0.3) + (3,000 \times 0.2) = \mathbf{₹ 9,000}$$[cite: 1]</li>
        <li>$$\text{ENPV}_B = (15,000 \times 0.1) + (12,000 \times 0.4) + (6,000 \times 0.4) + (3,000 \times 0.1) = \mathbf{₹ 9,000}$$[cite: 1]</li>
      </ul>

      <h4>(ii) Standard Deviation ($\sigma$)</h4>
      <p><strong>Project A:</strong></p>
      <p>$$\sigma_A^2 = 0.2(6,000)^2 + 0.3(3,000)^2 + 0.3(-3,000)^2 + 0.2(-6,000)^2 = 72\text{L} + 27\text{L} + 27\text{L} + 72\text{L} = 1,98,00,000$$[cite: 1]</p>
      <p>$$\sigma_A = \sqrt{1,98,00,000} \approx \mathbf{₹ 4,450}$$[cite: 1]</p>

      <p><strong>Project B:</strong></p>
      <p>$$\sigma_B^2 = 0.1(6,000)^2 + 0.4(3,000)^2 + 0.4(-3,000)^2 + 0.1(-6,000)^2 = 36\text{L} + 36\text{L} + 36\text{L} + 36\text{L} = 1,44,00,000$$[cite: 1]</p>
      <p>$$\sigma_B = \sqrt{1,44,00,00,000 \times 10^{-2}} = \sqrt{1,44,00,000} = \mathbf{₹ 3,795}$$[cite: 1]</p>

      <h4>(iii) Profitability Index (PI)</h4>
      <p>$$\text{PI} = \frac{\text{PV of Inflows}}{\text{Initial Outlay}} = \frac{\text{ENPV} + \text{Cost}}{\text{Cost}}$$[cite: 1]</p>
      <ul>
        <li>$$\text{PI}_A = \frac{9,000 + 36,000}{36,000} = \frac{45,000}{36,000} = \mathbf{1.25}$$[cite: 1]</li>
        <li>$$\text{PI}_B = \frac{9,000 + 30,000}{30,000} = \frac{39,000}{30,000} = \mathbf{1.30}$$[cite: 1]</li>
      </ul>

      <h4>(iv) Recommendation</h4>
      <p><strong>Project B</strong> is recommended because[cite: 1]:</p>
      <ul>
        <li>Both projects offer the same ENPV of ₹ 9,000, but Project B has lower dispersion/risk ($\sigma = ₹ 3,795$ vs. $₹ 4,450$)[cite: 1].</li>
        <li>Project B has a higher Profitability Index ($1.30 > 1.25$)[cite: 1].</li>
      </ul>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH03_TYK_PR_07",
    source: "ICAI Study Material",
    chapter_name: "Advanced Capital Budgeting Decisions",
    placement: 11,
    marks: 10,
    question_html: `
      <p>Following are the estimates of the net cash flows and probability of a new project of M/s X Ltd.[cite: 1]:</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Particulars</th>
              <th style="padding:6px; border:1px solid #ddd;">Year</th>
              <th style="padding:6px; border:1px solid #ddd;">P = 0.3</th>
              <th style="padding:6px; border:1px solid #ddd;">P = 0.5</th>
              <th style="padding:6px; border:1px solid #ddd;">P = 0.2</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Initial Investment (₹)</td><td>0</td><td>4,00,000</td><td>4,00,000</td><td>4,00,000</td></tr>
            <tr><td>Estimated annual net CFAT (₹)</td><td>1 to 5</td><td>1,00,000</td><td>1,10,000</td><td>1,20,000</td></tr>
            <tr><td>Estimated salvage value (after tax) (₹)</td><td>5</td><td>20,000</td><td>50,000</td><td>60,000</td></tr>
          </tbody>
        </table>
      </div>
      <p>Required rate of return is 10%. Find[cite: 1]:</p>
      <ol type="i">
        <li>The expected NPV of the project[cite: 1].</li>
        <li>The best case and the worst case NPVs[cite: 1].</li>
        <li>The probability of occurrence of the worst case if cash flows are perfectly dependent and independent overtime[cite: 1].</li>
        <li>Standard deviation and coefficient of variation assuming three discrete streams[cite: 1].</li>
        <li>Company's average project CV is 0.95 to 1.0. If project is less risky than average, 100 bps are deducted from cost of capital. Should the project be accepted?[cite: 1]</li>
      </ol>
    `,
    solution_html: `
      <h4>(i) Expected NPV at 10%</h4>
      <ul>
        <li>Expected Annual Inflows (Years 1-4) $= (1,00,000 \times 0.3) + (1,10,000 \times 0.5) + (1,20,000 \times 0.2) = ₹ 1,09,000$[cite: 1]</li>
        <li>Expected Salvage $= (20,000 \times 0.3) + (50,000 \times 0.5) + (60,000 \times 0.2) = ₹ 43,000$[cite: 1]</li>
        <li>Year 5 Total Flow $= 1,09,000 + 43,000 = ₹ 1,52,000$[cite: 1]</li>
        <li>$$\text{PV of Inflows} = (1,09,000 \times 3.170) + (1,52,000 \times 0.621) = 3,45,530 + 94,392 = ₹ 4,39,922$$[cite: 1]</li>
        <li>$$\text{Expected NPV} = ₹ 4,39,922 - ₹ 4,00,000 = \mathbf{₹ 39,922}$$[cite: 1]</li>
      </ul>

      <h4>(ii) Worst Case and Best Case NPV</h4>
      <ul>
        <li><strong>Worst Case (P = 0.3):</strong>
          $$\text{NPV} = -4,00,000 + (1,00,000 \times 3.790) + (20,00,000 \times 0.621 \times 0.01) = -4,00,000 + 3,79,000 + 12,420 = \mathbf{-₹ 8,580}$$[cite: 1]
        </li>
        <li><strong>Best Case (P = 0.2):</strong>
          $$\text{NPV} = -4,00,000 + (1,20,000 \times 3.790) + (60,000 \times 0.621) = -4,00,000 + 4,54,800 + 37,260 = \mathbf{₹ 92,060}$$[cite: 1]
        </li>
      </ul>

      <h4>(iii) Probability of Worst Case Occurrence</h4>
      <ul>
        <li>If cash flows are perfectly dependent over time: $\mathbf{0.30}$ (or 30%)[cite: 1].</li>
        <li>If cash flows are independent over time: $(0.3)^5 = \mathbf{0.00243}$[cite: 1].</li>
      </ul>

      <h4>(iv) Standard Deviation &amp; Coefficient of Variation</h4>
      <ul>
        <li>Base case NPV $(P = 0.5) = -4,00,000 + (1,10,000 \times 3.790) + (50,000 \times 0.621) = ₹ 47,950$[cite: 1]</li>
        <li>Weighted $\text{ENPV} = 0.3(-8,580) + 0.5(47,950) + 0.2(92,060) = \mathbf{₹ 39,813}$[cite: 1]</li>
        <li>$$\sigma = \sqrt{0.3(-8,580 - 39,813)^2 + 0.5(47,950 - 39,813)^2 + 0.2(92,060 - 39,813)^2} \approx \mathbf{₹ 35,800}$$[cite: 1]</li>
        <li>$$\text{CV} = \frac{35,800}{39,813} = \mathbf{0.90}$$[cite: 1]</li>
      </ul>

      <h4>(v) Final Recommendation</h4>
      <p>Since the project's CV ($0.90$) is lower than the company's average ($0.95 - 1.0$), it is less risky[cite: 1]. Cost of capital is reduced by 100 bps to $9\%$ ($PVAF_{9\%, 4} = 3.240, PVF_{9\%, 5} = 0.650$)[cite: 1]:</p>
      <p>$$\text{Revised ENPV} = (1,09,000 \times 3.240) + (1,52,000 \times 0.650) - 4,00,000 = 3,53,160 + 98,800 - 4,00,000 = \mathbf{₹ 51,960}$$[cite: 1]</p>
      <p><strong>The project should be accepted</strong>[cite: 1].</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH03_TYK_PR_08",
    source: "ICAI Study Material",
    chapter_name: "Advanced Capital Budgeting Decisions",
    placement: 12,
    marks: 6,
    question_html: `
      <p>XY Ltd. has under its consideration a project with an initial investment of ₹ 1,00,000[cite: 1]. Three probable cash inflow scenarios have been estimated as below:</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Particulars</th>
              <th style="padding:6px; border:1px solid #ddd;">Scenario 1</th>
              <th style="padding:6px; border:1px solid #ddd;">Scenario 2</th>
              <th style="padding:6px; border:1px solid #ddd;">Scenario 3</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Annual cash inflow (₹)</td><td>20,000</td><td>30,000</td><td>40,000</td></tr>
            <tr><td>Probability</td><td>0.1</td><td>0.7</td><td>0.2</td></tr>
            <tr><td>Terminal Value at Year 5 (₹)</td><td>0</td><td>20,000</td><td>30,000</td></tr>
          </tbody>
        </table>
      </div>
      <p>The project life is 5 years and the desired rate of return is 20%[cite: 1]. You are required to:</p>
      <ol type="i">
        <li>Find the probable NPV[cite: 1];</li>
        <li>Find the worst-case NPV and the best-case NPV[cite: 1]; and</li>
        <li>State the probability occurrence of the worst case, if the cash flows are perfectly positively correlated over time[cite: 1].</li>
      </ol>
    `,
    solution_html: `
      <h4>(i) Probable (Expected) NPV</h4>
      <ul>
        <li>Expected Annual Inflow $= (20,000 \times 0.1) + (30,000 \times 0.7) + (40,000 \times 0.2) = ₹ 31,000$[cite: 1]</li>
        <li>Expected Terminal Value $= (0 \times 0.1) + (20,000 \times 0.7) + (30,000 \times 0.2) = ₹ 20,000$[cite: 1]</li>
      </ul>
      <p>At 20% discount rate ($PVAF_{20\%, 5} = 2.9906, PVF_{20\%, 5} = 0.401878$)[cite: 1]:</p>
      <p>$$\text{PV of Inflows} = (31,000 \times 2.9906) + (20,000 \times 0.401878) = 92,709 + 8,037.55 = ₹ 1,00,746.55$$[cite: 1]</p>
      <p>$$\text{Probable NPV} = ₹ 1,00,746.55 - ₹ 1,00,000 = \mathbf{₹ 746.52}$$[cite: 1]</p>

      <h4>(ii) Worst-Case and Best-Case NPV</h4>
      <ul>
        <li><strong>Worst-Case:</strong> Annual inflow ₹ 20,000, Terminal value Nil[cite: 1].
          $$\text{NPV} = (20,000 \times 2.9906) - 1,00,000 = 59,812.24 - 1,00,000 = \mathbf{-₹ 40,187.76}$$[cite: 1]
        </li>
        <li><strong>Best-Case:</strong> Annual inflow ₹ 40,000, Terminal value ₹ 30,000[cite: 1].
          $$\text{NPV} = (40,000 \times 2.9906) + (30,000 \times 0.401878) - 1,00,000 = 1,19,624.48 + 12,056.33 - 1,00,000 = \mathbf{₹ 31,680.81}$$[cite: 1]
        </li>
      </ul>

      <h4>(iii) Probability of Worst-Case</h4>
      <p>With perfectly positive correlation over time, a poor inflow in Year 1 ensures poor inflows in all subsequent years[cite: 1]. Hence, the probability of occurrence is simply the probability of Year 1 worst outcome: $\mathbf{0.10 \text{ (or } 10\% \text{)}}$[cite: 1].</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH03_TYK_PR_09",
    source: "ICAI Study Material",
    chapter_name: "Advanced Capital Budgeting Decisions",
    placement: 13,
    marks: 8,
    question_html: `
      <p>XYZ Ltd. is considering a project with the following estimates[cite: 1]:</p>
      <ul>
        <li>Initial Cost of the project: ₹ 10,00,000[cite: 1]</li>
        <li>Sales price/unit: ₹ 60; Cost/unit: ₹ 40[cite: 1]</li>
        <li>Sales volumes: Year 1: 20,000 units; Year 2: 30,000 units; Year 3: 30,000 units[cite: 1]</li>
        <li>Discount rate: 10% p.a. (Taxation ignored)[cite: 1]</li>
      </ul>
      <p>Measure the sensitivity of the project in relation to[cite: 1]:</p>
      <ol type="a">
        <li>Sales Price/unit[cite: 1]</li>
        <li>Unit cost[cite: 1]</li>
        <li>Sales volume[cite: 1]</li>
        <li>Initial outlay[cite: 1]</li>
        <li>Project lifetime[cite: 1]</li>
      </ol>
    `,
    solution_html: `
      <h4>Base Case NPV</h4>
      <ul>
        <li>Year 1 Inflow: $20,000 \times (60 - 40) = ₹ 4,00,000$[cite: 1]</li>
        <li>Year 2 Inflow: $30,000 \times 20 = ₹ 6,00,000$[cite: 1]</li>
        <li>Year 3 Inflow: $30,000 \times 20 = ₹ 6,00,000$[cite: 1]</li>
      </ul>
      <p>$$\text{PV of Inflows} = \frac{4,00,000}{1.1} + \frac{6,00,000}{(1.1)^2} + \frac{6,00,000}{(1.1)^3} = 3,63,636 + 4,95,868 + 4,50,789 = ₹ 13,10,293$$[cite: 1]</p>
      <p>$$\text{NPV} = ₹ 13,10,293 - ₹ 10,00,000 = \mathbf{₹ 3,10,293}$$[cite: 1]</p>

      <h4>Sensitivity Measurements (to reduce NPV to Zero)</h4>
      <ul>
        <li><strong>(a) Sales Price/Unit:</strong>
          $$\text{Required Contribution Margin} = \frac{₹ 10,00,000}{₹ 13,10,293} \times ₹ 20 = ₹ 15.26 \implies S = ₹ 40 + ₹ 15.26 = ₹ 55.26$$[cite: 1]
          $$\text{Permissible Fall} = \frac{60 - 55.26}{60} = \mathbf{7.90\%}$$[cite: 1]
        </li>
        <li><strong>(b) Unit Cost:</strong>
          $$\text{Allowable Cost} = ₹ 60 - ₹ 15.26 = ₹ 44.74 \implies \text{Permissible Rise} = \frac{44.74 - 40}{40} = \mathbf{11.85\%}$$[cite: 1]
        </li>
        <li><strong>(c) Sales Volume:</strong>
          $$\text{Permissible Fall} = \frac{\text{NPV}}{\text{PV of Inflows}} = \frac{3,10,293}{13,10,293} = \mathbf{23.68\%}$$[cite: 1]
        </li>
        <li><strong>(d) Initial Outlay:</strong>
          $$\text{Permissible Rise} = \frac{3,10,293}{10,00,000} = \mathbf{31.03\%}$$[cite: 1]
        </li>
        <li><strong>(e) Project Lifetime:</strong>
          <p>PV of first 2 years $= 4,00,000(0.909) + 6,00,000(0.826) = ₹ 8,59,200$[cite: 1]. Deficit to break even $= 10,00,000 - 8,59,200 = ₹ 1,40,800$[cite: 1].</p>
          <p>PV of Year 3 $= 6,00,000 \times 0.751 = ₹ 4,50,600$[cite: 1]. Daily PV (360 days) $= \frac{4,50,600}{360} = ₹ 1,252$[cite: 1].</p>
          <p>Days needed in Year 3 $= \frac{1,40,800}{1,252} \approx 112 \text{ days}$[cite: 1]. Required life $= 2 \text{ years } 112 \text{ days}$, representing a fall of $\mathbf{22.97\%}$[cite: 1].</p>
        </li>
      </ul>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH03_TYK_PR_10",
    source: "ICAI Study Material",
    chapter_name: "Advanced Capital Budgeting Decisions",
    placement: 14,
    marks: 6,
    question_html: `
      <p>From the following details relating to a project, analyse the sensitivity of the project to changes in initial project cost, annual cash inflow and cost of capital[cite: 1]:</p>
      <ul>
        <li>Initial Project Cost: ₹ 1,20,000[cite: 1]</li>
        <li>Annual Cash Inflow: ₹ 45,000[cite: 1]</li>
        <li>Project Life: 4 Years[cite: 1]</li>
        <li>Cost of Capital: 10% (Annuity factors: for 10% = 3.169; for 11% = 3.103)[cite: 1]</li>
      </ul>
      <p>To which of the three factors is the project most sensitive? (Consider a 10% adverse variance)[cite: 1]</p>
    `,
    solution_html: `
      <h4>Base Case NPV</h4>
      <p>$$\text{PV of Inflows} = ₹ 45,000 \times 3.169 = ₹ 1,42,605$$[cite: 1]</p>
      <p>$$\text{Base NPV} = ₹ 1,42,605 - ₹ 1,20,000 = \mathbf{₹ 22,605}$$[cite: 1]</p>

      <h4>Sensitivity to 10% Adverse Variation</h4>
      <ol>
        <li><strong>Initial Project Cost (+10% $\rightarrow$ ₹ 1,32,000):</strong>
          $$\text{Revised NPV} = ₹ 1,42,605 - ₹ 1,32,000 = ₹ 10,605$$[cite: 1]
          $$\text{Percentage Change in NPV} = \frac{22,605 - 10,605}{22,605} = \mathbf{53.08\%}$$[cite: 1]
        </li>
        <li><strong>Annual Cash Inflow (-10% $\rightarrow$ ₹ 40,500):</strong>
          $$\text{Revised NPV} = (₹ 40,500 \times 3.169) - ₹ 1,20,000 = ₹ 1,28,344.50 - ₹ 1,20,000 = ₹ 8,344.50 \approx ₹ 8,345$$[cite: 1]
          $$\text{Percentage Change in NPV} = \frac{22,605 - 8,345}{22,605} = \mathbf{63.08\%}$$[cite: 1]
        </li>
        <li><strong>Cost of Capital (+10% adverse $\rightarrow$ 11%, factor 3.103):</strong>
          $$\text{Revised NPV} = (₹ 45,000 \times 3.103) - ₹ 1,20,000 = ₹ 1,39,635 - ₹ 1,20,000 = ₹ 19,635$$[cite: 1]
          $$\text{Percentage Change in NPV} = \frac{22,605 - 19,635}{22,605} = \mathbf{13.14\%}$$[cite: 1]
        </li>
      </ol>
      <p><strong>Conclusion:</strong> The project is <strong>most sensitive to annual cash inflow</strong> (63.08% impact)[cite: 1].</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH03_TYK_PR_11",
    source: "ICAI Study Material",
    chapter_name: "Advanced Capital Budgeting Decisions",
    placement: 15,
    marks: 6,
    question_html: `
      <p>Red Ltd. is considering a project with the following Cash flows[cite: 1]:</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Year</th>
              <th style="padding:6px; border:1px solid #ddd;">Cost of Plant (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">Running Cost (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">Savings (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">PVF @ 9%</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>0</td><td>10,000</td><td>—</td><td>—</td><td>1.000</td></tr>
            <tr><td>1</td><td>—</td><td>4,000</td><td>12,000</td><td>0.917</td></tr>
            <tr><td>2</td><td>—</td><td>5,000</td><td>14,000</td><td>0.842</td></tr>
          </tbody>
        </table>
      </div>
      <p>Measure the sensitivity of the project to changes in plant value, running cost and savings such that the NPV becomes zero[cite: 1]. Which factor is the most sensitive?[cite: 1]</p>
    `,
    solution_html: `
      <h4>Base Present Values</h4>
      <ul>
        <li>$\text{PV of Savings} = (12,000 \times 0.917) + (14,000 \times 0.842) = 11,004 + 11,788 = ₹ 22,792$[cite: 1]</li>
        <li>$\text{PV of Running Costs} = (4,000 \times 0.917) + (5,000 \times 0.842) = 3,668 + 4,210 = ₹ 7,878$[cite: 1]</li>
        <li>$\text{Net PV of Operating Inflows} = 22,792 - 7,878 = ₹ 14,914$[cite: 1]</li>
        <li>$$\text{Base NPV} = ₹ 14,914 - ₹ 10,000 = \mathbf{₹ 4,914}$$[cite: 1]</li>
      </ul>

      <h4>Sensitivity to Reach Zero NPV</h4>
      <ul>
        <li><strong>Plant Value Increase:</strong>
          $$\frac{₹ 4,914}{₹ 10,000} \times 100 = \mathbf{49.14\%}$$[cite: 1]
        </li>
        <li><strong>Running Cost Increase:</strong>
          $$\frac{₹ 4,914}{₹ 7,878} \times 100 = \mathbf{62.38\%}$$[cite: 1]
        </li>
        <li><strong>Savings Fall:</strong>
          $$\frac{₹ 4,914}{₹ 22,792} \times 100 = \mathbf{21.56\%}$$[cite: 1]
        </li>
      </ul>
      <p><strong>Conclusion:</strong> The <strong>savings factor is the most sensitive</strong> because it requires the smallest percentage adverse shift (21.56%) to completely wipe out the project's NPV[cite: 1].</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH03_TYK_PR_12",
    source: "ICAI Study Material",
    chapter_name: "Advanced Capital Budgeting Decisions",
    placement: 16,
    marks: 8,
    question_html: `
      <p>The Easygoing Company Limited is considering a new project for product "Survival" with IRR of 16% and life of 5 years[cite: 1]. The sensitivity analysis reveals[cite: 1]:</p>
      <ul>
        <li>Annual fixed cost sensitivity is 7.8416%[cite: 1]</li>
        <li>Cost of capital (discount rate) sensitivity is 60%[cite: 1]</li>
        <li>Profit Volume (P/V) Ratio: 70%; Variable cost: ₹ 60 per unit; Annual Cash Flow: ₹ 57,500[cite: 1]</li>
      </ul>
      <p>Ignore depreciation and taxation. Calculate[cite: 1]:</p>
      <ol type="i">
        <li>Initial Investment of the Project[cite: 1]</li>
        <li>Net Present Value of the Project[cite: 1]</li>
        <li>Annual Fixed Cost[cite: 1]</li>
        <li>Estimated annual unit of sales[cite: 1]</li>
        <li>Break Even Units[cite: 1]</li>
      </ol>
      <p><em>Cumulative PVAF factors for 5 years: 10% = 3.791; 16% = 3.274</em>[cite: 1]</p>
    `,
    solution_html: `
      <h4>(i) Initial Investment</h4>
      <p>At IRR (16%), NPV is zero[cite: 1]:</p>
      <p>$$\text{Initial Investment} = \text{Annual Cash Flow} \times \text{PVAF}(16\%, 5) = ₹ 57,500 \times 3.274 = \mathbf{₹ 1,88,255}$$[cite: 1]</p>

      <h4>(ii) Net Present Value (NPV)</h4>
      <p>Let Cost of Capital be $k$. Sensitivity of discount rate is given as 60%[cite: 1]:</p>
      <p>$$\frac{\text{IRR} - k}{k} = 0.60 \implies \frac{0.16 - k}{k} = 0.60 \implies 1.60k = 0.16 \implies k = 10\%$$[cite: 1]</p>
      <p>$$\text{NPV} = (₹ 57,500 \times 3.791) - ₹ 1,88,255 = ₹ 2,17,982.50 - ₹ 1,88,255 = \mathbf{₹ 29,727.50}$$[cite: 1]</p>

      <h4>(iii) Annual Fixed Cost</h4>
      <p>Let $\Delta\text{FC}$ be the increase in fixed cost making NPV zero[cite: 1]:</p>
      <p>$$\Delta\text{FC} \times 3.791 = ₹ 29,727.50 \implies \Delta\text{FC} = ₹ 7,841.60$$[cite: 1]</p>
      <p>Since annual fixed cost sensitivity is $7.8416\%$[cite: 1]:</p>
      <p>$$\text{Fixed Cost} = \frac{₹ 7,841.60}{0.078416} = \mathbf{₹ 1,00,000}$$[cite: 1]</p>

      <h4>(iv) Estimated Annual Units of Sales</h4>
      <p>$$\text{Selling Price per unit} = \frac{\text{Variable Cost}}{1 - \text{P/V Ratio}} = \frac{₹ 60}{1 - 0.70} = ₹ 200$$[cite: 1]</p>
      <p>$$\text{Sales Value} = \frac{\text{Cash Flow} + \text{Fixed Cost}}{\text{P/V Ratio}} = \frac{₹ 57,500 + ₹ 1,00,000}{0.70} = ₹ 2,25,000$$[cite: 1]</p>
      <p>$$\text{Sales Units} = \frac{₹ 2,25,000}{₹ 200} = \mathbf{1,125 \text{ units}}$$[cite: 1]</p>

      <h4>(v) Break-Even Units</h4>
      <p>$$\text{Contribution per unit} = ₹ 200 - ₹ 60 = ₹ 140$$[cite: 1]</p>
      <p>$$\text{BEP (units)} = \frac{\text{Fixed Cost}}{\text{Contribution per unit}} = \frac{₹ 1,00,000}{₹ 140} = \mathbf{714.285 \text{ units}}$$[cite: 1]</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH03_TYK_PR_13",
    source: "ICAI Study Material",
    chapter_name: "Advanced Capital Budgeting Decisions",
    placement: 17,
    marks: 8,
    question_html: `
      <p>Unnat Ltd. is considering investing ₹ 50,00,000 in a new machine with 5-year life and zero scrap value[cite: 1]. Expected annual sales: 2,00,000 units at ₹ 30.00/unit[cite: 1]. Variable cost: ₹ 16.50/unit; Fixed cost: ₹ 10,00,000/year[cite: 1]. Cost of capital is 12% ($PVAF = 3.605$) and acceptable risk level is 20%[cite: 1].</p>
      <p><strong>Required:</strong></p>
      <ol type="a">
        <li>Measure sensitivity of NPV to change in sale price, sales volume, and variable cost[cite: 1].</li>
        <li>If sales volume depends on economic states: Poor (1,75,000 units, prob 0.30), Normal (2,00,000 units, prob 0.60), Good (2,25,000 units, prob 0.10), calculate ENPV and state whether project should be accepted[cite: 1].</li>
      </ol>
    `,
    solution_html: `
      <h4>Base Case NPV</h4>
      <p>$$\text{Annual Cash Flow} = 2,00,000(30 - 16.50) - 10,00,000 = 27,00,000 - 10,00,000 = ₹ 17,00,000$$[cite: 1]</p>
      <p>$$\text{NPV} = (₹ 17,00,000 \times 3.605) - ₹ 50,00,000 = ₹ 61,28,500 - ₹ 50,00,000 = \mathbf{₹ 11,28,500}$$[cite: 1]</p>

      <h4>(a) Sensitivity Analysis (to reach 0 NPV)</h4>
      <ul>
        <li><strong>Sale Price ($S$):</strong>
          $$[2,00,000(S - 16.50) - 10,00,000] \times 3.605 = 50,00,000 \implies S = ₹ 28.43$$[cite: 1]
          $$\text{Fall} = \frac{30 - 28.43}{30} = \mathbf{5.23\%}$$[cite: 1]
        </li>
        <li><strong>Sales Volume ($V$):</strong>
          $$[V(13.50) - 10,00,000] \times 3.605 = 50,00,000 \implies V = 1,76,812 \text{ units}$$[cite: 1]
          $$\text{Fall} = \frac{2,00,000 - 1,76,812}{2,00,000} = \mathbf{11.59\%}$$[cite: 1]
        </li>
        <li><strong>Variable Cost ($VC$):</strong>
          $$[2,00,000(30 - VC) - 10,00,000] \times 3.605 = 50,00,000 \implies VC = ₹ 18.07$$[cite: 1]
          $$\text{Rise} = \frac{18.07 - 16.50}{16.50} = \mathbf{9.51\%}$$[cite: 1]
        </li>
      </ul>

      <h4>(b) Expected NPV &amp; Acceptance Decision</h4>
      <p>$$\text{Expected Annual Sales} = (1,75,000 \times 0.3) + (2,00,000 \times 0.6) + (2,25,000 \times 0.1) = 1,95,000 \text{ units}$$[cite: 1]</p>
      <p>$$\text{ENPV} = [1,95,000(13.50) - 10,00,000] \times 3.605 - 50,00,000 = \mathbf{₹ 8,85,163}$$[cite: 1]</p>
      <p>In the poor state (worst case), NPV $= [1,75,000(13.50) - 10,00,000] \times 3.605 - 50,00,000 = \mathbf{-₹ 88,188}$[cite: 1].</p>
      <p><strong>Decision:</strong> There is a 30% probability of incurring a loss (negative NPV)[cite: 1]. Since the acceptable risk limit of the firm is only 20%, the <strong>project should not be accepted</strong>[cite: 1].</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH03_TYK_PR_14",
    source: "ICAI Study Material",
    chapter_name: "Advanced Capital Budgeting Decisions",
    placement: 18,
    marks: 6,
    question_html: `
      <p>The Textile Manufacturing Company Ltd. is considering Projects M and N with cash outlays of ₹ 8,50,000 and ₹ 8,25,000 respectively[cite: 1]. The risk-free rate is 6% ($PVF_1 = 0.943, PVF_2 = 0.890, PVF_3 = 0.840$)[cite: 1].</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th rowspan="2" style="padding:6px; border:1px solid #ddd;">Year-end</th>
              <th colspan="2" style="padding:6px; border:1px solid #ddd;">Project M</th>
              <th colspan="2" style="padding:6px; border:1px solid #ddd;">Project N</th>
            </tr>
            <tr style="background-color:#fafafa;">
              <th style="padding:6px; border:1px solid #ddd;">Cash Flow (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">C.E.</th>
              <th style="padding:6px; border:1px solid #ddd;">Cash Flow (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">C.E.</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>4,50,000</td><td>0.8</td><td>4,50,000</td><td>0.9</td></tr>
            <tr><td>2</td><td>5,00,000</td><td>0.7</td><td>4,50,000</td><td>0.8</td></tr>
            <tr><td>3</td><td>5,00,000</td><td>0.5</td><td>5,00,000</td><td>0.7</td></tr>
          </tbody>
        </table>
      </div>
      <ol type="i">
        <li>Which project should be accepted?[cite: 1]</li>
        <li>If risk-adjusted discount rate method is used, which project would be appraised with a higher rate and why?[cite: 1]</li>
      </ol>
    `,
    solution_html: `
      <h4>(i) Net Present Value Evaluation</h4>
      <p><strong>Project M:</strong></p>
      <ul>
        <li>Year 1: $4,50,000 \times 0.8 \times 0.943 = ₹ 3,39,480$[cite: 1]</li>
        <li>Year 2: $5,00,000 \times 0.7 \times 0.890 = ₹ 3,11,500$[cite: 1]</li>
        <li>Year 3: $5,00,000 \times 0.5 \times 0.840 = ₹ 2,10,000$[cite: 1]</li>
        <li>$$\text{PV of Inflows} = ₹ 8,60,980 \implies \text{NPV}_M = 8,60,980 - 8,50,000 = \mathbf{₹ 10,980}$$[cite: 1]</li>
      </ul>

      <p><strong>Project N:</strong></p>
      <ul>
        <li>Year 1: $4,50,000 \times 0.9 \times 0.943 = ₹ 3,81,915$[cite: 1]</li>
        <li>Year 2: $4,50,000 \times 0.8 \times 0.890 = ₹ 3,20,400$[cite: 1]</li>
        <li>Year 3: $5,00,000 \times 0.7 \times 0.840 = ₹ 2,94,000$[cite: 1]</li>
        <li>$$\text{PV of Inflows} = ₹ 9,96,315 \implies \text{NPV}_N = 9,96,315 - 8,25,000 = \mathbf{₹ 1,71,315}$$[cite: 1]</li>
      </ul>
      <p><strong>Decision:</strong> <strong>Project N should be accepted</strong> as its NPV (₹ 1,71,315) is substantially higher[cite: 1].</p>

      <h4>(ii) Risk-Adjusted Discount Rate Comparison</h4>
      <p><strong>Project M would be appraised with a higher discount rate</strong>[cite: 1]. Its cumulative Certainty Equivalent factor ($0.8 + 0.7 + 0.5 = 2.0$) is lower than that of Project N ($0.9 + 0.8 + 0.7 = 2.4$)[cite: 1]. A lower CE coefficient indicates higher perceived risk, which under the RADR method requires a higher discount rate to compensate for risk[cite: 1].</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH03_TYK_PR_15",
    source: "ICAI Study Material",
    chapter_name: "Advanced Capital Budgeting Decisions",
    placement: 19,
    marks: 6,
    question_html: `
      <p>Determine the risk-adjusted net present value of the following projects (each with a 5-year life)[cite: 1]:</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Project</th>
              <th style="padding:6px; border:1px solid #ddd;">Net Cash Outlay (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">Annual Cash Inflow (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">Coefficient of Variation</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>X</td><td>2,10,000</td><td>70,000</td><td>1.2</td></tr>
            <tr><td>Y</td><td>1,20,000</td><td>42,000</td><td>0.8</td></tr>
            <tr><td>Z</td><td>1,00,000</td><td>30,000</td><td>0.4</td></tr>
          </tbody>
        </table>
      </div>
      <p>Discount rate scale based on CV: CV 0.4 = 12% (PVAF = 3.605); CV 0.8 = 14% (PVAF = 3.433); CV 1.2 = 16% (PVAF = 3.274)[cite: 1].</p>
    `,
    solution_html: `
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Project</th>
              <th style="padding:6px; border:1px solid #ddd;">RADR</th>
              <th style="padding:6px; border:1px solid #ddd;">Annual Inflow (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">PVAF (1-5 yrs)</th>
              <th style="padding:6px; border:1px solid #ddd;">PV of Inflows (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">Outlay (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">NPV (₹)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>X</strong></td>
              <td>16%</td>
              <td>70,000</td>
              <td>3.274</td>
              <td>2,29,180</td>
              <td>2,10,000</td>
              <td><strong>19,180</strong></td>
            </tr>
            <tr>
              <td><strong>Y</strong></td>
              <td>14%</td>
              <td>42,000</td>
              <td>3.433</td>
              <td>1,44,186</td>
              <td>1,20,000</td>
              <td><strong>24,186</strong></td>
            </tr>
            <tr>
              <td><strong>Z</strong></td>
              <td>12%</td>
              <td>30,000</td>
              <td>3.605</td>
              <td>1,08,150</td>
              <td>1,00,000</td>
              <td><strong>8,150</strong></td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH03_TYK_PR_16",
    source: "ICAI Study Material",
    chapter_name: "Advanced Capital Budgeting Decisions",
    placement: 20,
    marks: 6,
    question_html: `
      <p>New Projects Ltd. is evaluating 3 projects[cite: 1]:</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Particulars</th>
              <th style="padding:6px; border:1px solid #ddd;">P-I</th>
              <th style="padding:6px; border:1px solid #ddd;">P-II</th>
              <th style="padding:6px; border:1px solid #ddd;">P-III</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Cost (₹)</td><td>15,00,000</td><td>11,00,000</td><td>19,00,000</td></tr>
            <tr><td>Inflow Year 1 (₹)</td><td>6,00,000</td><td>6,00,000</td><td>4,00,000</td></tr>
            <tr><td>Inflow Year 2 (₹)</td><td>6,00,000</td><td>4,00,000</td><td>6,00,000</td></tr>
            <tr><td>Inflow Year 3 (₹)</td><td>6,00,000</td><td>5,00,000</td><td>8,00,000</td></tr>
            <tr><td>Inflow Year 4 (₹)</td><td>6,00,000</td><td>2,00,000</td><td>12,00,000</td></tr>
            <tr><td>Risk Index</td><td>1.80</td><td>1.00</td><td>0.60</td></tr>
          </tbody>
        </table>
      </div>
      <p>Firm's minimum required return is 15%, risk-free rate is 10%[cite: 1].</p>
      <ol type="i">
        <li>Find out the RADR for each project[cite: 1].</li>
        <li>Which project is the best?[cite: 1]</li>
      </ol>
    `,
    solution_html: `
      <h4>(i) Determination of RADR (using CAPM framework)</h4>
      <p>$$\text{RADR} = R_f + (k_o - R_f) \times \text{Risk Index}$$[cite: 1]</p>
      <ul>
        <li><strong>P-I:</strong> $10\% + (15\% - 10\%) \times 1.80 = 10\% + 9\% = \mathbf{19\%}$[cite: 1]</li>
        <li><strong>P-II:</strong> $10\% + (15\% - 10\%) \times 1.00 = 10\% + 5\% = \mathbf{15\%}$[cite: 1]</li>
        <li><strong>P-III:</strong> $10\% + (15\% - 10\%) \times 0.60 = 10\% + 3\% = \mathbf{13\%}$[cite: 1]</li>
      </ul>

      <h4>(ii) Project Evaluation</h4>
      <ul>
        <li><strong>Project P-I (@ 19%, PVAF = 2.639):</strong>
          $$\text{PV} = ₹ 6,00,000 \times 2.639 = ₹ 15,83,400 \implies \text{NPV} = 15,83,400 - 15,00,000 = \mathbf{₹ 83,400}$$[cite: 1]
        </li>
        <li><strong>Project P-II (@ 15%):</strong>
          $$\text{PV} = (6\text{L} \times 0.870) + (4\text{L} \times 0.756) + (5\text{L} \times 0.658) + (2\text{L} \times 0.572) = 5,22,000 + 3,02,400 + 3,29,000 + 1,14,400 = ₹ 12,67,800$$[cite: 1]
          $$\text{NPV} = ₹ 12,67,800 - ₹ 11,00,000 = \mathbf{₹ 1,67,800}$$[cite: 1]
        </li>
        <li><strong>Project P-III (@ 13%):</strong>
          $$\text{PV} = (4\text{L} \times 0.885) + (6\text{L} \times 0.783) + (8\text{L} \times 0.693) + (12\text{L} \times 0.613) = 3,54,000 + 4,69,800 + 5,54,400 + 7,35,600 = ₹ 21,13,800$$[cite: 1]
          $$\text{NPV} = ₹ 21,13,800 - ₹ 19,00,000 = \mathbf{₹ 2,13,800}$$[cite: 1]
        </li>
      </ul>
      <p><strong>Conclusion:</strong> <strong>Project P-III</strong> is the best project as it generates the highest NPV (₹ 2,13,800)[cite: 1].</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH03_TYK_PR_17",
    source: "ICAI Study Material",
    chapter_name: "Advanced Capital Budgeting Decisions",
    placement: 21,
    marks: 6,
    question_html: `
      <p>A firm has projected the following nominal cash flows from a project under evaluation (₹ in lakhs): Year 0: (70); Year 1: 30; Year 2: 40; Year 3: 30[cite: 1]. The cash flows reflect anticipated inflation[cite: 1]. The firm's real cost of capital is 10% and expected annual inflation is 5%[cite: 1]. Show how the viability of the project is to be evaluated[cite: 1].</p>
    `,
    solution_html: `
      <h4>Approach: Deflating Nominal Flows to Real Terms</h4>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Year</th>
              <th style="padding:6px; border:1px solid #ddd;">Nominal CF (₹ L)</th>
              <th style="padding:6px; border:1px solid #ddd;">Inflation Deflator $\frac{1}{(1.05)^t}$</th>
              <th style="padding:6px; border:1px solid #ddd;">Real Cash Flow (₹ L)</th>
              <th style="padding:6px; border:1px solid #ddd;">PVF @ 10%</th>
              <th style="padding:6px; border:1px solid #ddd;">PV (₹ L)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>0</td><td>(70.00)</td><td>1.000</td><td>(70.00)</td><td>1.000</td><td>(70.00)</td></tr>
            <tr><td>1</td><td>30.00</td><td>0.952</td><td>28.56</td><td>0.909</td><td>25.96</td></tr>
            <tr><td>2</td><td>40.00</td><td>0.907</td><td>36.28</td><td>0.826</td><td>29.97</td></tr>
            <tr><td>3</td><td>30.00</td><td>0.864</td><td>25.92</td><td>0.751</td><td>19.47</td></tr>
            <tr style="font-weight:bold; background-color:#fafafa;">
              <td colspan="5">Total PV of Inflows</td>
              <td>75.40</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>$$\text{NPV} = ₹ 75.40 \text{ lakhs} - ₹ 70.00 \text{ lakhs} = \mathbf{+₹ 5.40 \text{ lakhs}}$$[cite: 1]</p>

      <p><em>Alternative Approach (Nominal Discount Rate):</em></p>
      <p>$$\text{Nominal Rate } = (1 + 0.10)(1 + 0.05) - 1 = 15.50\%$$[cite: 1]</p>
      <p>$$\text{PV} = \frac{30}{1.155} + \frac{40}{(1.155)^2} + \frac{30}{(1.155)^3} = 25.98 + 29.96 + 19.47 = ₹ 75.41 \text{ lakhs} \implies \text{NPV} = \mathbf{+₹ 5.41 \text{ lakhs}}$$[cite: 1]</p>
      <p><strong>Advice:</strong> Since NPV is positive, the project is financially viable and should be accepted[cite: 1].</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH03_TYK_PR_18",
    source: "ICAI Study Material",
    chapter_name: "Advanced Capital Budgeting Decisions",
    placement: 22,
    marks: 6,
    question_html: `
      <p>Shashi Co. Ltd has projected the following nominal cash flows (₹ in lakhs): Year 0: (72); Year 1: 30; Year 2: 40; Year 3: 30[cite: 1]. Real cost of capital is 10% and expected annual inflation is 5%[cite: 1]. Show how the viability of the project is to be evaluated ($PVF_{10\%} = 0.909, 0.826, 0.751$)[cite: 1].</p>
    `,
    solution_html: `
      <h4>Nominal Discount Rate Approach</h4>
      <p>$$\text{Nominal Discount Rate} = (1 + \text{Real Rate})(1 + \text{Inflation}) - 1 = (1.10)(1.05) - 1 = 15.50\%$$[cite: 1]</p>
      <p>Adjusted discount factors[cite: 1]:</p>
      <ul>
        <li>Year 1: $\frac{0.909}{1.05} = 0.866$[cite: 1]</li>
        <li>Year 2: $\frac{0.826}{(1.05)^2} = 0.749$ (or $0.750$)[cite: 1]</li>
        <li>Year 3: $\frac{0.751}{(1.05)^3} = 0.649$[cite: 1]</li>
      </ul>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Year</th>
              <th style="padding:6px; border:1px solid #ddd;">Nominal CF (₹ L)</th>
              <th style="padding:6px; border:1px solid #ddd;">PVF @ 15.50%</th>
              <th style="padding:6px; border:1px solid #ddd;">PV of CF (₹ L)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>30</td><td>0.866</td><td>25.98</td></tr>
            <tr><td>2</td><td>40</td><td>0.749</td><td>29.96</td></tr>
            <tr><td>3</td><td>30</td><td>0.649</td><td>19.47</td></tr>
            <tr style="font-weight:bold; background-color:#fafafa;">
              <td colspan="3">Total PV of Inflows</td>
              <td>75.41</td>
            </tr>
            <tr>
              <td colspan="3">Less: Initial Outflow</td>
              <td>(72.00)</td>
            </tr>
            <tr style="font-weight:bold; background-color:#f9f9f9;">
              <td colspan="3">Net Present Value (NPV)</td>
              <td>+3.41</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p><strong>Advice:</strong> With a positive NPV of <strong>₹ 3.41 lakhs</strong> (or ₹ 3.45 lakhs depending on decimal rounding), the project is viable[cite: 1].</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH03_TYK_PR_19",
    source: "ICAI Study Material",
    chapter_name: "Advanced Capital Budgeting Decisions",
    placement: 23,
    marks: 8,
    question_html: `
      <p>KLM Ltd. requires ₹ 15,00,000 for a new project with a useful life of 3 years and zero salvage value[cite: 1]. Depreciation is ₹ 5,00,000 p.a.[cite: 1] Projected revenues and costs (excluding depreciation) ignoring inflation are:</p>
      <ul>
        <li>Year 1: Revenues ₹ 10,00,000; Costs ₹ 5,00,000[cite: 1]</li>
        <li>Year 2: Revenues ₹ 13,00,000; Costs ₹ 6,00,000[cite: 1]</li>
        <li>Year 3: Revenues ₹ 14,00,000; Costs ₹ 6,50,000[cite: 1]</li>
      </ul>
      <p>Tax rate: 35%; Nominal cost of capital: 14% ($PVF = 0.877, 0.769, 0.675$)[cite: 1]. Inflation rates: Revenues: Y1 = 9%, Y2 = 8%, Y3 = 6%; Costs: Y1 = 10%, Y2 = 9%, Y3 = 7%[cite: 1]. Calculate the NPV of the project[cite: 1].</p>
    `,
    solution_html: `
      <h4>1. Inflation-Adjusted Cash Flows</h4>
      <ul>
        <li><strong>Revenues:</strong>
          <ul>
            <li>Year 1: $10,00,000 \times 1.09 = ₹ 10,90,000$[cite: 1]</li>
            <li>Year 2: $13,00,000 \times 1.09 \times 1.08 = ₹ 15,30,360$[cite: 1]</li>
            <li>Year 3: $14,00,000 \times 1.09 \times 1.08 \times 1.06 = ₹ 17,46,965$[cite: 1]</li>
          </ul>
        </li>
        <li><strong>Costs:</strong>
          <ul>
            <li>Year 1: $5,00,000 \times 1.10 = ₹ 5,50,000$[cite: 1]</li>
            <li>Year 2: $6,00,000 \times 1.10 \times 1.09 = ₹ 7,19,400$[cite: 1]</li>
            <li>Year 3: $6,50,000 \times 1.10 \times 1.09 \times 1.07 = ₹ 8,33,905$[cite: 1]</li>
          </ul>
        </li>
        <li><strong>Tax Shield on Depreciation:</strong> $₹ 5,00,000 \times 35\% = \mathbf{₹ 1,75,000 \text{ p.a.}}$[cite: 1]</li>
      </ul>

      <h4>2. Net Profit after Tax and Operating Cash Flows</h4>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Year</th>
              <th style="padding:6px; border:1px solid #ddd;">Revenues (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">Costs (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">PBT (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">PAT (65%) (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">Tax Shield (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">CFAT (₹)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>10,90,000</td><td>5,50,000</td><td>5,40,000</td><td>3,51,000</td><td>1,75,000</td><td>5,26,000</td></tr>
            <tr><td>2</td><td>15,30,360</td><td>7,19,400</td><td>8,10,960</td><td>5,27,124</td><td>1,75,000</td><td>7,02,124</td></tr>
            <tr><td>3</td><td>17,46,965</td><td>8,33,905</td><td>9,13,060</td><td>5,93,489</td><td>1,75,000</td><td>7,68,489</td></tr>
          </tbody>
        </table>
      </div>

      <h4>3. Present Value and NPV Computation</h4>
      <p>$$\text{PV} = (5,26,000 \times 0.877) + (7,02,124 \times 0.769) + (7,68,489 \times 0.675) = 4,61,302 + 5,39,933 + 5,18,730 = ₹ 15,19,965$$[cite: 1]</p>
      <p>$$\text{NPV} = ₹ 15,19,965 - ₹ 15,00,000 = \mathbf{₹ 19,965}$$[cite: 1]</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH03_TYK_PR_20",
    source: "ICAI Study Material",
    chapter_name: "Advanced Capital Budgeting Decisions",
    placement: 24,
    marks: 8,
    question_html: `
      <p>A firm has an investment proposal requiring an outlay of ₹ 80,000 with a two-year economic life and no salvage value[cite: 1].</p>
      <ul>
        <li>Year 1: 0.4 probability of ₹ 50,000; 0.6 probability of ₹ 60,000[cite: 1]</li>
        <li>Year 2 conditional probabilities:
          <ul>
            <li>If Year 1 is ₹ 50,000: ₹ 24,000 (0.2), ₹ 32,000 (0.3), ₹ 44,000 (0.5)[cite: 1]</li>
            <li>If Year 1 is ₹ 60,000: ₹ 40,000 (0.4), ₹ 50,000 (0.5), ₹ 60,000 (0.1)[cite: 1]</li>
          </ul>
        </li>
      </ul>
      <p>Discount rate: 10% ($PVF_1 = 0.909, PVF_2 = 0.826$)[cite: 1].</p>
      <ol type="i">
        <li>Calculate Expected NPV[cite: 1].</li>
        <li>State the worst outcome NPV and its probability[cite: 1].</li>
        <li>State the best outcome NPV and its probability[cite: 1].</li>
        <li>Will the project be accepted?[cite: 1]</li>
      </ol>
    `,
    solution_html: `
      <h4>Path Evaluation and Joint Probabilities</h4>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Path</th>
              <th style="padding:6px; border:1px solid #ddd;">Y1 CF (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">Y2 CF (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">Total PV (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">NPV (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">Joint Prob.</th>
              <th style="padding:6px; border:1px solid #ddd;">Expected NPV (₹)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>50,000</td><td>24,000</td><td>65,274</td><td>-14,726</td><td>$0.4 \times 0.2 = 0.08$</td><td>-1,178.08</td></tr>
            <tr><td>2</td><td>50,000</td><td>32,000</td><td>71,882</td><td>-8,118</td><td>$0.4 \times 0.3 = 0.12$</td><td>-974.16</td></tr>
            <tr><td>3</td><td>50,000</td><td>44,000</td><td>81,794</td><td>+1,794</td><td>$0.4 \times 0.5 = 0.20$</td><td>+358.80</td></tr>
            <tr><td>4</td><td>60,000</td><td>40,000</td><td>87,580</td><td>+7,580</td><td>$0.6 \times 0.4 = 0.24$</td><td>+1,819.20</td></tr>
            <tr><td>5</td><td>60,000</td><td>50,000</td><td>95,840</td><td>+15,840</td><td>$0.6 \times 0.5 = 0.30$</td><td>+4,752.00</td></tr>
            <tr><td>6</td><td>60,000</td><td>60,000</td><td>1,04,100</td><td>+24,100</td><td>$0.6 \times 0.1 = 0.06$</td><td>+1,446.00</td></tr>
            <tr style="font-weight:bold; background-color:#fafafa;">
              <td colspan="6">Total Expected Net Present Value</td>
              <td>+6,223.76</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h4>Summary Answers</h4>
      <ol type="i">
        <li><strong>Expected NPV:</strong> $\mathbf{₹ 6,223.76}$[cite: 1]</li>
        <li><strong>Worst Outcome:</strong> Path 1 yields $\text{NPV} = \mathbf{-₹ 14,726}$ with probability $\mathbf{0.08 \text{ (8\%)}}$[cite: 1].</li>
        <li><strong>Best Outcome:</strong> Path 6 yields $\text{NPV} = \mathbf{+₹ 24,100}$ with probability $\mathbf{0.06 \text{ (6\%)}}$[cite: 1].</li>
        <li><strong>Decision:</strong> <strong>Accept the project</strong> because the overall Expected NPV is positive (+₹ 6,223.76)[cite: 1].</li>
      </ol>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH03_TYK_PR_21",
    source: "ICAI Study Material",
    chapter_name: "Advanced Capital Budgeting Decisions",
    placement: 25,
    marks: 4,
    question_html: `
      <p>Jumble Consultancy Group has determined relative utilities of cash flows as follows[cite: 1]:</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center;">
          <tbody>
            <tr style="background-color:#f2f2f2;"><td>Cash Flow (₹)</td><td>-15000</td><td>-10000</td><td>-4000</td><td>0</td><td>15000</td><td>10000</td><td>5000</td><td>1000</td></tr>
            <tr><td>Utilities</td><td>-100</td><td>-60</td><td>-3</td><td>0</td><td>40</td><td>30</td><td>20</td><td>10</td></tr>
          </tbody>
        </table>
      </div>
      <p>Distribution of cash flows[cite: 1]:</p>
      <ul>
        <li><strong>Project A:</strong> -15000 (0.10); -10000 (0.20); 15000 (0.40); 10000 (0.20); 5000 (0.10)[cite: 1]</li>
        <li><strong>Project B:</strong> -10000 (0.10); -4000 (0.15); 15000 (0.40); 5000 (0.25); 10000 (0.10)[cite: 1]</li>
      </ul>
      <p>Which project should be selected and why?[cite: 1]</p>
    `,
    solution_html: `
      <h4>Expected Utility Computation</h4>
      <p><strong>Project A:</strong></p>
      <p>$$\text{E}(U)_A = (-100 \times 0.10) + (-60 \times 0.20) + (40 \times 0.40) + (30 \times 0.20) + (20 \times 0.10) = -10 - 12 + 16 + 6 + 2 = \mathbf{2.00}$$[cite: 1]</p>

      <p><strong>Project B:</strong></p>
      <p>$$\text{E}(U)_B = (-60 \times 0.10) + (-3 \times 0.15) + (40 \times 0.40) + (20 \times 0.25) + (30 \times 0.10) = -6 - 0.45 + 16 + 5 + 3 = \mathbf{17.55}$$[cite: 1]</p>

      <h4>Decision</h4>
      <p><strong>Project B should be selected</strong> because its expected utility ($\mathbf{17.55}$) is significantly higher than that of Project A ($\mathbf{2.00}$)[cite: 1].</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH03_TYK_PR_22",
    source: "ICAI Study Material",
    chapter_name: "Advanced Capital Budgeting Decisions",
    placement: 26,
    marks: 8,
    question_html: `
      <p>A &amp; Co. is contemplating whether to replace an existing machine or spend money overhauling it (tax rate is zero)[cite: 1]. Replacement machine costs ₹ 90,000 now, maintenance ₹ 10,000 p.a. for 8 years, salvage ₹ 20,000 at end of 8 years[cite: 1].</p>
      <p>Existing machine maintenance and salvage fall as follows[cite: 1]:</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Year</th>
              <th style="padding:6px; border:1px solid #ddd;">Present</th>
              <th style="padding:6px; border:1px solid #ddd;">1</th>
              <th style="padding:6px; border:1px solid #ddd;">2</th>
              <th style="padding:6px; border:1px solid #ddd;">3</th>
              <th style="padding:6px; border:1px solid #ddd;">4</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Maintenance (₹)</td><td>0</td><td>10,000</td><td>20,000</td><td>30,000</td><td>40,000</td></tr>
            <tr><td>Salvage (₹)</td><td>40,000</td><td>25,000</td><td>15,000</td><td>10,000</td><td>0</td></tr>
          </tbody>
        </table>
      </div>
      <p>Cost of capital is 15% ($PVAF_{15\%, 8} = 4.4873, PVF_{15\%, 8} = 0.3269$). When should the company replace the machine?[cite: 1]</p>
    `,
    solution_html: `
      <h4>1. Equivalent Annual Cost (EAC) of New Machine</h4>
      <ul>
        <li>Cost of New Machine: ₹ 90,000[cite: 1]</li>
        <li>Add: PV of Repairs ($₹ 10,000 \times 4.4873$): ₹ 44,873[cite: 1]</li>
        <li>Less: PV of Salvage ($₹ 20,000 \times 0.3269$): (₹ 6,538)[cite: 1]</li>
        <li>Total PV of Costs: ₹ 1,28,335[cite: 1]</li>
      </ul>
      <p>$$\text{EAC} = \frac{₹ 1,28,335}{4.4873} = \mathbf{₹ 28,600 \text{ p.a.}}$$[cite: 1]</p>

      <h4>2. Timing Comparison (PV of Cost of Replacement Across Scenarios)</h4>
      <ul>
        <li><strong>Replace Immediately (Year 0):</strong>
          $$\text{Net Outflow} = -₹ 28,600 + ₹ 40,000 (\text{salvage}) = \mathbf{+₹ 11,400 \text{ (Net Benefit)}}$$[cite: 1]
        </li>
        <li><strong>Replace in 1 Year:</strong>
          $$\text{PV} = [25,000 - 10,000 - 28,600] \times 0.870 = -₹ 13,600 \times 0.870 = \mathbf{-₹ 11,832}$$[cite: 1]
        </li>
        <li><strong>Replace in 2 Years:</strong> $\text{PV of Costs} = \mathbf{-₹ 34,102}$[cite: 1]</li>
        <li><strong>Replace in 3 Years:</strong> $\text{PV of Costs} = \mathbf{-₹ 55,799}$[cite: 1]</li>
        <li><strong>Replace in 4 Years:</strong> $\text{PV of Costs} = \mathbf{-₹ 82,799}$[cite: 1]</li>
      </ul>
      <p><strong>Advice:</strong> The company should <strong>replace the machine immediately</strong> because replacing now yields the lowest cost / highest net benefit[cite: 1].</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH03_TYK_PR_23",
    source: "ICAI Study Material",
    chapter_name: "Advanced Capital Budgeting Decisions",
    placement: 27,
    marks: 8,
    question_html: `
      <p>A company has an old machine with book value zero that can be sold for ₹ 50,000[cite: 1]. Tax rate is 40%, Cost of capital is 15% ($PVF = 0.870, 0.756, 0.658, 0.572, 0.497$)[cite: 1]. Alternatives:</p>
      <ul>
        <li>(i) Upgrade old machine at cost of ₹ 10,00,000[cite: 1]</li>
        <li>(ii) Replace with new machine costing ₹ 20,00,000 plus ₹ 50,000 installation[cite: 1]</li>
      </ul>
      <p>Useful life: 5 years, salvage zero, straight line depreciation[cite: 1]. Expected profits after tax (EAT):</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Year</th>
              <th style="padding:6px; border:1px solid #ddd;">Old Machine (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">Upgraded (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">New Machine (₹)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>5,00,000</td><td>5,50,000</td><td>6,00,000</td></tr>
            <tr><td>2</td><td>5,40,000</td><td>5,90,000</td><td>6,40,000</td></tr>
            <tr><td>3</td><td>5,80,000</td><td>6,10,000</td><td>6,90,000</td></tr>
            <tr><td>4</td><td>6,20,000</td><td>6,50,000</td><td>7,40,000</td></tr>
            <tr><td>5</td><td>6,60,000</td><td>7,00,000</td><td>8,00,000</td></tr>
          </tbody>
        </table>
      </div>
      <p>Advise the company on which alternative to adopt[cite: 1].</p>
    `,
    solution_html: `
      <h4>1. Initial Incremental Cash Outflows</h4>
      <ul>
        <li><strong>Upgraded Machine:</strong> $\mathbf{₹ 10,00,000}$[cite: 1]</li>
        <li><strong>New Machine:</strong> $₹ 20,50,000 - [₹ 50,000 \times (1 - 0.40)] = ₹ 20,50,000 - ₹ 30,000 = \mathbf{₹ 20,20,000}$[cite: 1]</li>
      </ul>

      <h4>2. Annual Incremental CFAT ($\text{CFAT} = \text{EAT} + \text{Depreciation}$)</h4>
      <ul>
        <li>Depreciation (Upgraded) $= \frac{10,00,000}{5} = ₹ 2,00,000$[cite: 1]; Depreciation (New) $= \frac{20,50,000}{5} = ₹ 4,10,000$[cite: 1]; Old $= 0$[cite: 1]</li>
        <li><strong>Upgraded Incremental CFAT:</strong>
          <ul>
            <li>Y1 &amp; Y2: $(5,50,000 + 2,00,000) - 5,00,000 = ₹ 2,50,000$[cite: 1]</li>
            <li>Y3 &amp; Y4: $(6,10,000 + 2,00,000) - 5,80,000 = ₹ 2,30,000$[cite: 1]</li>
            <li>Y5: $(7,00,000 + 2,00,000) - 6,60,000 = ₹ 2,40,000$[cite: 1]</li>
          </ul>
        </li>
        <li><strong>New Machine Incremental CFAT:</strong>
          <ul>
            <li>Y1 &amp; Y2: $(6,00,000 + 4,10,000) - 5,00,000 = ₹ 5,10,000$[cite: 1]</li>
            <li>Y3: $(6,90,000 + 4,10,000) - 5,80,000 = ₹ 5,20,000$[cite: 1]</li>
            <li>Y4: $(7,40,000 + 4,10,000) - 6,20,000 = ₹ 5,30,000$[cite: 1]</li>
            <li>Y5: $(8,00,000 + 4,10,000) - 6,60,000 = ₹ 5,50,000$[cite: 1]</li>
          </ul>
        </li>
      </ul>

      <h4>3. Incremental NPV Evaluation</h4>
      <ul>
        <li><strong>Upgraded Machine:</strong>
          $$\text{PV} = (2.5\text{L} \times 0.870) + (2.5\text{L} \times 0.756) + (2.3\text{L} \times 0.658) + (2.3\text{L} \times 0.572) + (2.4\text{L} \times 0.497) = ₹ 8,08,680$$[cite: 1]
          $$\text{NPV} = ₹ 8,08,680 - ₹ 10,00,000 = \mathbf{-₹ 1,91,320}$$[cite: 1]
        </li>
        <li><strong>New Machine:</strong>
          $$\text{PV} = (5.1\text{L} \times 0.870) + (5.1\text{L} \times 0.756) + (5.2\text{L} \times 0.658) + (5.3\text{L} \times 0.572) + (5.5\text{L} \times 0.497) = ₹ 17,47,930$$[cite: 1]
          $$\text{NPV} = ₹ 17,47,930 - ₹ 20,20,000 = \mathbf{-₹ 2,72,070}$$[cite: 1]
        </li>
      </ul>
      <p><strong>Advice:</strong> Because both options yield negative incremental NPVs, the company should reject both and <strong>continue with the existing old machine</strong>[cite: 1].</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH03_TYK_PR_24",
    source: "ICAI Study Material",
    chapter_name: "Advanced Capital Budgeting Decisions",
    placement: 28,
    marks: 4,
    question_html: `
      <p>Company X is forced to choose between two machines A and B[cite: 1]:</p>
      <ul>
        <li>Machine A costs ₹ 1,50,000, lasts 3 years, and costs ₹ 40,000/year to run[cite: 1].</li>
        <li>Machine B costs ₹ 1,00,000, lasts 2 years, and costs ₹ 60,000/year to run[cite: 1].</li>
      </ul>
      <p>Opportunity cost of capital is 10% ($PVAF_{10\%, 3} = 2.486, PVAF_{10\%, 2} = 1.735$). Ignore tax. Which machine should Company X buy?[cite: 1]</p>
    `,
    solution_html: `
      <h4>Equivalent Annual Cost (EAC) Evaluation</h4>
      <ul>
        <li><strong>Machine A:</strong>
          $$\text{Total PV of Costs} = ₹ 1,50,000 + (₹ 40,000 \times 2.486) = ₹ 1,50,000 + ₹ 99,440 = ₹ 2,49,440$$[cite: 1]
          $$\text{EAC}_A = \frac{₹ 2,49,440}{2.486} = \mathbf{₹ 1,00,338}$$[cite: 1]
        </li>
        <li><strong>Machine B:</strong>
          $$\text{Total PV of Costs} = ₹ 1,00,000 + (₹ 60,000 \times 1.735) = ₹ 1,00,000 + ₹ 1,04,100 = ₹ 2,04,100$$[cite: 1]
          $$\text{EAC}_B = \frac{₹ 2,04,100}{1.735} = \mathbf{₹ 1,17,637}$$[cite: 1]
        </li>
      </ul>
      <p><strong>Decision:</strong> Company X should buy <strong>Machine A</strong> because its Equivalent Annual Cost (₹ 1,00,338) is lower than that of Machine B (₹ 1,17,637)[cite: 1].</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH03_TYK_PR_25",
    source: "ICAI Study Material",
    chapter_name: "Advanced Capital Budgeting Decisions",
    placement: 29,
    marks: 6,
    question_html: `
      <p>Company Y is operating an elderly machine that is expected to produce net cash inflows of ₹ 40,000 in Year 1 and ₹ 40,000 in Year 2[cite: 1]. Current salvage value is ₹ 80,000, falling to ₹ 70,000 next year[cite: 1].</p>
      <p>A new machine costs ₹ 1,50,000 and provides cash inflows of ₹ 80,000/year for 3 years ($PVAF_{10\%, 3} = 2.486$)[cite: 1]. Opportunity cost of capital is 10%. Advise whether to replace now or wait one year[cite: 1].</p>
    `,
    solution_html: `
      <h4>NPV of New Machine</h4>
      <p>$$\text{NPV}_{\text{New}} = (₹ 80,000 \times 2.486) - ₹ 1,50,000 = ₹ 1,98,880 - ₹ 1,50,000 = \mathbf{₹ 48,880}$$[cite: 1]</p>

      <h4>Timing Evaluation</h4>
      <ul>
        <li><strong>Alternative 1: Replace Immediately (Year 0):</strong>
          $$\text{Total NPV} = \text{Current Salvage} + \text{NPV}_{\text{New}} = ₹ 80,000 + ₹ 48,880 = \mathbf{₹ 1,28,880}$$[cite: 1]
        </li>
        <li><strong>Alternative 2: Replace After 1 Year:</strong>
          $$\text{Total Inflow at Year 1} = \text{Year 1 Inflow} + \text{Salvage Year 1} + \text{NPV}_{\text{New}} = ₹ 40,000 + ₹ 70,000 + ₹ 48,880 = ₹ 1,58,880$$[cite: 1]
          $$\text{Present Value (Year 0)} = \frac{₹ 1,58,880}{1.10} = \mathbf{₹ 1,44,436}$$[cite: 1]
        </li>
      </ul>
      <p><strong>Advice:</strong> Company Y should <strong>wait one year and replace the machine at the end of Year 1</strong>, as this produces a higher net present value (₹ 1,44,436 vs. ₹ 1,28,880)[cite: 1].</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH03_TYK_PR_26",
    source: "ICAI Study Material",
    chapter_name: "Advanced Capital Budgeting Decisions",
    placement: 30,
    marks: 8,
    question_html: `
      <p>A machine costs ₹ 60,000 and can be kept up to 4 years[cite: 1]. Costs and residual values are[cite: 1]:</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Age (Years)</th>
              <th style="padding:6px; border:1px solid #ddd;">1</th>
              <th style="padding:6px; border:1px solid #ddd;">2</th>
              <th style="padding:6px; border:1px solid #ddd;">3</th>
              <th style="padding:6px; border:1px solid #ddd;">4</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Maintenance (₹)</td><td>16,000</td><td>18,000</td><td>20,000</td><td>20,000</td></tr>
            <tr><td>Repair (₹)</td><td>0</td><td>4,000</td><td>8,000</td><td>16,000</td></tr>
            <tr><td>Scrap Value (₹)</td><td>32,000</td><td>24,000</td><td>16,000</td><td>8,000</td></tr>
          </tbody>
        </table>
      </div>
      <p>Discount rate is 15% ($PVF = 0.8696, 0.7561, 0.6575, 0.5718$). Determine the optimum replacement cycle[cite: 1].</p>
    `,
    solution_html: `
      <h4>Present Value of Costs for Replacement Cycles</h4>
      <ul>
        <li><strong>1-Year Cycle:</strong>
          $$\text{PV} = 60,000 + (16,000 - 32,000) \times 0.8696 = 60,000 - 13,914 = ₹ 46,086$$[cite: 1]
          $$\text{EAC} = \frac{₹ 46,086}{0.8696} = \mathbf{₹ 52,997}$$[cite: 1]
        </li>
        <li><strong>2-Year Cycle:</strong>
          $$\text{PV} = 60,000 + 16,000(0.8696) + (22,000 - 24,000)(0.7561) = 60,000 + 13,914 - 1,512 = ₹ 72,402$$[cite: 1]
          $$\text{EAC} = \frac{₹ 72,402}{0.8696 + 0.7561} = \frac{₹ 72,402}{1.6257} = \mathbf{₹ 44,536}$$[cite: 1]
        </li>
        <li><strong>3-Year Cycle:</strong>
          $$\text{PV} = 72,402 + 2,000(0.7561) + (28,000 - 16,000)(0.6575) = 72,402 + 1,512 + 7,890 = ₹ 98,438$$[cite: 1]
          $$\text{EAC} = \frac{₹ 98,438}{1.6257 + 0.6575} = \frac{₹ 98,438}{2.2832} = \mathbf{₹ 43,114}$$[cite: 1]
        </li>
        <li><strong>4-Year Cycle:</strong>
          $$\text{PV} = 98,438 + 12,000(0.6575) + (36,000 - 8,000)(0.5718) = 98,438 + 7,890 + 16,010 = ₹ 1,24,968$$[cite: 1]
          $$\text{EAC} = \frac{₹ 1,24,968}{2.2832 + 0.5718} = \frac{₹ 1,24,968}{2.8550} = \mathbf{₹ 43,772}$$[cite: 1]
        </li>
      </ul>
      <p><strong>Conclusion:</strong> The <strong>optimum replacement cycle is 3 years</strong>, as it results in the lowest Equivalent Annual Cost of <strong>₹ 43,114</strong>[cite: 1].</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH03_TYK_PR_27",
    source: "ICAI Study Material",
    chapter_name: "Advanced Capital Budgeting Decisions",
    placement: 31,
    marks: 8,
    question_html: `
      <p>Trouble Free Solutions (TFS) provides motorbikes to its mechanics (Purchase price: ₹ 55,000)[cite: 1]. Current policy replaces bikes every 3 years, but TFS is evaluating 1-year and 2-year cycles[cite: 1].</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Year</th>
              <th style="padding:6px; border:1px solid #ddd;">Taxes &amp; Insurance (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">Petrol &amp; Repairs (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">Resale Value (₹)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>3,000</td><td>30,000</td><td>35,000</td></tr>
            <tr><td>2</td><td>3,000</td><td>35,000</td><td>21,000</td></tr>
            <tr><td>3</td><td>3,000</td><td>43,000</td><td>9,000</td></tr>
          </tbody>
        </table>
      </div>
      <p>Cost of capital is 10% ($PVF = 0.909, 0.826, 0.751$). Determine the optimal replacement period[cite: 1].</p>
    `,
    solution_html: `
      <h4>1. Present Value of Operating Costs and Resale Value</h4>
      <ul>
        <li>Year 1: Total Cost $= ₹ 33,000 \times 0.909 = ₹ 29,997$; Resale PV $= ₹ 35,000 \times 0.909 = ₹ 31,815$[cite: 1]</li>
        <li>Year 2: Total Cost $= ₹ 38,000 \times 0.826 = ₹ 31,388$; Resale PV $= ₹ 21,000 \times 0.826 = ₹ 17,346$[cite: 1]</li>
        <li>Year 3: Total Cost $= ₹ 46,000 \times 0.751 = ₹ 34,546$; Resale PV $= ₹ 9,000 \times 0.751 = ₹ 6,759$[cite: 1]</li>
      </ul>

      <h4>2. Net Outflow and EAC Computation</h4>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Cycle</th>
              <th style="padding:6px; border:1px solid #ddd;">Purchase (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">Operating PV - Resale PV (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">Total Outflow (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">PVAF @ 10%</th>
              <th style="padding:6px; border:1px solid #ddd;">EAC (₹)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1 Year</td>
              <td>55,000</td>
              <td>29,997 - 31,815 = -1,818</td>
              <td>53,182</td>
              <td>0.909</td>
              <td><strong>58,506</strong></td>
            </tr>
            <tr>
              <td>2 Years</td>
              <td>55,000</td>
              <td>61,385 - 17,346 = +44,039</td>
              <td>99,039</td>
              <td>1.735</td>
              <td><strong>57,083</strong></td>
            </tr>
            <tr>
              <td>3 Years</td>
              <td>55,000</td>
              <td>95,931 - 6,759 = +89,172</td>
              <td>1,44,172</td>
              <td>2.486</td>
              <td><strong>57,993</strong></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4>Decision</h4>
      <p>The Equivalent Annual Cost is lowest for the <strong>2-year cycle (₹ 57,083)</strong>[cite: 1]. Therefore, TFS should <strong>replace the bikes every two years</strong>[cite: 1].</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH03_ILLUS_01",
    source: "ICAI Study Material",
    chapter_name: "Advanced Capital Budgeting Decisions",
    placement: 1,
    marks: 6,
    question_html: `
      <p>Determine the Net Present Value (NPV) of the project with the following information[cite: 1]:</p>
      <ul>
        <li>Initial Outlay of project: ₹ 40,000[cite: 1]</li>
        <li>Annual Cash Flow from the Project (Without inflation): ₹ 15,000[cite: 1]</li>
        <li>Useful life: 4 years[cite: 1]</li>
        <li>Cost of Capital (Including inflation premium of 10%): 12%[cite: 1]</li>
      </ul>
    `,
    solution_html: `
      <p>The annual cash flow of ₹ 15,000 is stated in real terms, whereas the cost of capital of 12% is in nominal terms[cite: 1]. It is inconsistent to discount real cash flows with a nominal discount rate[cite: 1]. There are two methods to evaluate the project[cite: 1]:</p>

      <h4>Approach 1: Restate Cash Flows in Nominal Terms and Discount at Nominal Rate (12%)</h4>
      <p>Nominal Cash Flow $= \text{Real Cash Flow} \times (1 + \text{Inflation Rate})^t$[cite: 1]</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Year</th>
              <th style="padding:6px; border:1px solid #ddd;">Real Cash Flow (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">Nominal Cash Flow (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">PVF @ 12%</th>
              <th style="padding:6px; border:1px solid #ddd;">Present Value (₹)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>15,000</td><td>$15,000 \times 1.10 = 16,500$</td><td>0.8929</td><td>14,732</td></tr>
            <tr><td>2</td><td>15,000</td><td>$15,000 \times (1.10)^2 = 18,150$</td><td>0.7972</td><td>14,469</td></tr>
            <tr><td>3</td><td>15,000</td><td>$15,000 \times (1.10)^3 = 19,965$</td><td>0.7118</td><td>14,211</td></tr>
            <tr><td>4</td><td>15,000</td><td>$15,000 \times (1.10)^4 = 21,962$</td><td>0.6355</td><td>13,957</td></tr>
            <tr style="font-weight:bold; background-color:#fafafa;">
              <td colspan="4">Total Present Value of Inflows</td>
              <td>57,369</td>
            </tr>
            <tr>
              <td colspan="4">Less: Initial Outlay</td>
              <td>(40,000)</td>
            </tr>
            <tr style="font-weight:bold; background-color:#f9f9f9;">
              <td colspan="4">Net Present Value (NPV)</td>
              <td>17,369</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4>Approach 2: Restate Discount Rate in Real Terms and Discount Real Cash Flows</h4>
      <p>$$\text{Real Discount Rate} = \frac{1 + \text{Nominal Discount Rate}}{1 + \text{Inflation Rate}} - 1 = \frac{1 + 0.12}{1 + 0.10} - 1 = 0.01818 \approx 1.82\%$$[cite: 1]</p>
      <p>Discounting real cash flows at $1.82\%$[cite: 1]:</p>
      <p>$$\text{PV} = \frac{15,000}{1.0182} + \frac{15,000}{(1.0182)^2} + \frac{15,000}{(1.0182)^3} + \frac{15,000}{(1.0182)^4} = 14,732 + 14,469 + 14,210 + 13,956 = ₹ 57,367$$[cite: 1]</p>
      <p>$$\text{NPV} = ₹ 57,367 - ₹ 40,000 = \mathbf{₹ 17,367 \text{ (Approx)}}$$[cite: 1]</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH03_ILLUS_02",
    source: "ICAI Study Material",
    chapter_name: "Advanced Capital Budgeting Decisions",
    placement: 2,
    marks: 8,
    question_html: `
      <p>XYZ Ltd. requires ₹ 8,00,000 for a project with a useful life of 4 years and salvage value Nil[cite: 1]. Depreciation is ₹ 2,00,000 p.a.[cite: 1] Expected revenues &amp; costs (excluding depreciation) ignoring inflation are[cite: 1]:</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Year</th>
              <th style="padding:6px; border:1px solid #ddd;">1</th>
              <th style="padding:6px; border:1px solid #ddd;">2</th>
              <th style="padding:6px; border:1px solid #ddd;">3</th>
              <th style="padding:6px; border:1px solid #ddd;">4</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Revenues (₹)</td><td>6,00,000</td><td>7,00,000</td><td>8,00,000</td><td>8,00,000</td></tr>
            <tr><td>Costs (₹)</td><td>3,00,000</td><td>4,00,000</td><td>4,00,000</td><td>4,00,000</td></tr>
          </tbody>
        </table>
      </div>
      <p>Applicable Tax Rate is 60% and cost of capital is 10% (including inflation premium)[cite: 1]. Calculate the NPV of the project if inflation rates for revenues &amp; costs are as follows[cite: 1]:</p>
      <ul>
        <li>Revenues: Year 1 = 10%, Year 2 = 9%, Year 3 = 8%, Year 4 = 7%[cite: 1]</li>
        <li>Costs: Year 1 = 12%, Year 2 = 10%, Year 3 = 9%, Year 4 = 8%[cite: 1]</li>
      </ul>
    `,
    solution_html: `
      <h4>1. Inflation-Adjusted Revenues and Costs</h4>
      <ul>
        <li><strong>Revenues:</strong>
          <ul>
            <li>Year 1: $6,00,000 \times 1.10 = ₹ 6,60,000$[cite: 1]</li>
            <li>Year 2: $7,00,000 \times 1.10 \times 1.09 = ₹ 8,39,300$[cite: 1]</li>
            <li>Year 3: $8,00,000 \times 1.10 \times 1.09 \times 1.08 = ₹ 10,35,936$[cite: 1]</li>
            <li>Year 4: $8,00,000 \times 1.10 \times 1.09 \times 1.08 \times 1.07 = ₹ 11,08,452$[cite: 1]</li>
          </ul>
        </li>
        <li><strong>Costs:</strong>
          <ul>
            <li>Year 1: $3,00,000 \times 1.12 = ₹ 3,36,000$[cite: 1]</li>
            <li>Year 2: $4,00,000 \times 1.12 \times 1.10 = ₹ 4,92,800$[cite: 1]</li>
            <li>Year 3: $4,00,000 \times 1.12 \times 1.10 \times 1.09 = ₹ 5,37,152$[cite: 1]</li>
            <li>Year 4: $4,00,000 \times 1.12 \times 1.10 \times 1.09 \times 1.08 = ₹ 5,80,124$[cite: 1]</li>
          </ul>
        </li>
        <li><strong>Tax Shield on Depreciation:</strong> $₹ 2,00,000 \times 60\% = \mathbf{₹ 1,20,000 \text{ p.a.}}$[cite: 1]</li>
      </ul>

      <h4>2. Net Profit after Tax and Operating Cash Flow</h4>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Year</th>
              <th style="padding:6px; border:1px solid #ddd;">Adjusted Rev. (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">Adjusted Cost (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">PBT (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">Tax @ 60% (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">PAT (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">Dep. Tax Shield (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">Cash Inflow (₹)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>6,60,000</td><td>3,36,000</td><td>3,24,000</td><td>1,94,400</td><td>1,29,600</td><td>1,20,000</td><td>2,49,600</td></tr>
            <tr><td>2</td><td>8,39,300</td><td>4,92,800</td><td>3,46,500</td><td>2,07,900</td><td>1,38,600</td><td>1,20,000</td><td>2,58,600</td></tr>
            <tr><td>3</td><td>10,35,936</td><td>5,37,152</td><td>4,98,784</td><td>2,99,270</td><td>1,99,514</td><td>1,20,000</td><td>3,19,514</td></tr>
            <tr><td>4</td><td>11,08,452</td><td>5,80,124</td><td>5,28,328</td><td>3,16,997</td><td>2,11,331</td><td>1,20,000</td><td>3,31,331</td></tr>
          </tbody>
        </table>
      </div>

      <h4>3. Present Value and NPV Computation</h4>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Year</th>
              <th style="padding:6px; border:1px solid #ddd;">Cash Inflow (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">PVF @ 10%</th>
              <th style="padding:6px; border:1px solid #ddd;">PV (₹)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>2,49,600</td><td>0.909</td><td>2,26,886</td></tr>
            <tr><td>2</td><td>2,58,600</td><td>0.826</td><td>2,13,604</td></tr>
            <tr><td>3</td><td>3,19,514</td><td>0.751</td><td>2,39,955</td></tr>
            <tr><td>4</td><td>3,31,331</td><td>0.683</td><td>2,26,299</td></tr>
            <tr style="font-weight:bold; background-color:#fafafa;">
              <td colspan="3">Total Present Value of Cash Inflows</td>
              <td>9,06,744</td>
            </tr>
            <tr>
              <td colspan="3">Less: Initial Outlay</td>
              <td>(8,00,000)</td>
            </tr>
            <tr style="font-weight:bold; background-color:#f9f9f9;">
              <td colspan="3">Net Present Value (NPV)</td>
              <td>1,06,744</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH03_ILLUS_03",
    source: "ICAI Study Material",
    chapter_name: "Advanced Capital Budgeting Decisions",
    placement: 3,
    marks: 4,
    question_html: `
      <p>Possible net cash flows of Projects A and B at the end of the first year and their probabilities are given below[cite: 1]. The discount rate is 10 per cent and the initial investment for both projects is ₹ 10,000[cite: 1]. Calculate the expected net present value for each project and state which project is preferable[cite: 1].</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th rowspan="2" style="padding:6px; border:1px solid #ddd;">Possible Event</th>
              <th colspan="2" style="padding:6px; border:1px solid #ddd;">Project A</th>
              <th colspan="2" style="padding:6px; border:1px solid #ddd;">Project B</th>
            </tr>
            <tr style="background-color:#fafafa;">
              <th style="padding:6px; border:1px solid #ddd;">Cash Flow (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">Probability</th>
              <th style="padding:6px; border:1px solid #ddd;">Cash Flow (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">Probability</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>A</td><td>8,000</td><td>0.10</td><td>24,000</td><td>0.10</td></tr>
            <tr><td>B</td><td>10,000</td><td>0.20</td><td>20,000</td><td>0.15</td></tr>
            <tr><td>C</td><td>12,000</td><td>0.40</td><td>16,000</td><td>0.50</td></tr>
            <tr><td>D</td><td>14,000</td><td>0.20</td><td>12,000</td><td>0.15</td></tr>
            <tr><td>E</td><td>16,000</td><td>0.10</td><td>8,000</td><td>0.10</td></tr>
          </tbody>
        </table>
      </div>
    `,
    solution_html: `
      <h4>1. Calculation of Expected Net Cash Flow (ENCF)</h4>
      <ul>
        <li><strong>Project A:</strong>
          $$\text{ENCF}_A = (8,000 \times 0.10) + (10,000 \times 0.20) + (12,000 \times 0.40) + (14,000 \times 0.20) + (16,000 \times 0.10)$$[cite: 1]
          $$\text{ENCF}_A = 800 + 2,000 + 4,800 + 2,800 + 1,600 = \mathbf{₹ 12,000}$$[cite: 1]
        </li>
        <li><strong>Project B:</strong>
          $$\text{ENCF}_B = (24,000 \times 0.10) + (20,000 \times 0.15) + (16,000 \times 0.50) + (12,000 \times 0.15) + (8,000 \times 0.10)$$[cite: 1]
          $$\text{ENCF}_B = 2,400 + 3,000 + 8,000 + 1,800 + 800 = \mathbf{₹ 16,000}$$[cite: 1]
        </li>
      </ul>

      <h4>2. Expected Net Present Value (at 10% Discount Rate, PVF = 0.909)</h4>
      <ul>
        <li>$$\text{NPV}_A = (₹ 12,000 \times 0.909) - ₹ 10,000 = ₹ 10,908 - ₹ 10,000 = \mathbf{₹ 908}$$[cite: 1]</li>
        <li>$$\text{NPV}_B = (₹ 16,000 \times 0.909) - ₹ 10,000 = ₹ 14,544 - ₹ 10,000 = \mathbf{₹ 4,544}$$[cite: 1]</li>
      </ul>

      <h4>Conclusion</h4>
      <p><strong>Project B is preferable</strong> because its Expected Net Present Value (₹ 4,544) is higher than that of Project A (₹ 908)[cite: 1].</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH03_ILLUS_04",
    source: "ICAI Study Material",
    chapter_name: "Advanced Capital Budgeting Decisions",
    placement: 4,
    marks: 6,
    question_html: `
      <p>Probabilities for net cash flows for 3 years of a project are as follows[cite: 1]:</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th colspan="2" style="padding:6px; border:1px solid #ddd;">Year 1</th>
              <th colspan="2" style="padding:6px; border:1px solid #ddd;">Year 2</th>
              <th colspan="2" style="padding:6px; border:1px solid #ddd;">Year 3</th>
            </tr>
            <tr style="background-color:#fafafa;">
              <th style="padding:6px; border:1px solid #ddd;">Cash Flow (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">Probability</th>
              <th style="padding:6px; border:1px solid #ddd;">Cash Flow (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">Probability</th>
              <th style="padding:6px; border:1px solid #ddd;">Cash Flow (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">Probability</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>2,000</td><td>0.1</td><td>2,000</td><td>0.2</td><td>2,000</td><td>0.3</td></tr>
            <tr><td>4,000</td><td>0.2</td><td>4,000</td><td>0.3</td><td>4,000</td><td>0.4</td></tr>
            <tr><td>6,000</td><td>0.3</td><td>6,000</td><td>0.4</td><td>6,000</td><td>0.2</td></tr>
            <tr><td>8,000</td><td>0.4</td><td>8,000</td><td>0.1</td><td>8,000</td><td>0.1</td></tr>
          </tbody>
        </table>
      </div>
      <p>Calculate the expected net present value of the project using a 10 per cent discount rate if the Initial Investment of the project is ₹ 10,000[cite: 1].</p>
    `,
    solution_html: `
      <h4>1. Calculation of Expected Cash Flows (ENCF)</h4>
      <ul>
        <li><strong>Year 1:</strong> $(2,000 \times 0.1) + (4,000 \times 0.2) + (6,000 \times 0.3) + (8,000 \times 0.4) = 200 + 800 + 1,800 + 3,200 = \mathbf{₹ 6,000}$[cite: 1]</li>
        <li><strong>Year 2:</strong> $(2,000 \times 0.2) + (4,000 \times 0.3) + (6,000 \times 0.4) + (8,000 \times 0.1) = 400 + 1,200 + 2,400 + 800 = \mathbf{₹ 4,800}$[cite: 1]</li>
        <li><strong>Year 3:</strong> $(2,000 \times 0.3) + (4,000 \times 0.4) + (6,000 \times 0.2) + (8,000 \times 0.1) = 600 + 1,600 + 1,200 + 800 = \mathbf{₹ 4,200}$[cite: 1]</li>
      </ul>

      <h4>2. Present Value of Expected Cash Flows (Discount rate = 10%)</h4>
      <p>$$\text{PV} = (6,000 \times 0.909) + (4,800 \times 0.826) + (4,200 \times 0.751)$$[cite: 1]</p>
      <p>$$\text{PV} = 5,454 + 3,964.80 + 3,154.20 = \mathbf{₹ 12,573}$$[cite: 1]</p>

      <h4>3. Expected Net Present Value</h4>
      <p>$$\text{ENPV} = \text{PV of Inflows} - \text{Initial Investment} = ₹ 12,573 - ₹ 10,000 = \mathbf{₹ 2,573}$$[cite: 1]</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH03_ILLUS_05",
    source: "ICAI Study Material",
    chapter_name: "Advanced Capital Budgeting Decisions",
    placement: 5,
    marks: 6,
    question_html: `
      <p>Calculate Variance and Standard Deviation of Project A and Project B on the basis of the following information[cite: 1]:</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th rowspan="2" style="padding:6px; border:1px solid #ddd;">Possible Event</th>
              <th colspan="2" style="padding:6px; border:1px solid #ddd;">Project A</th>
              <th colspan="2" style="padding:6px; border:1px solid #ddd;">Project B</th>
            </tr>
            <tr style="background-color:#fafafa;">
              <th style="padding:6px; border:1px solid #ddd;">Cash Flow (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">Probability</th>
              <th style="padding:6px; border:1px solid #ddd;">Cash Flow (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">Probability</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>A</td><td>8,000</td><td>0.10</td><td>24,000</td><td>0.10</td></tr>
            <tr><td>B</td><td>10,000</td><td>0.20</td><td>20,000</td><td>0.15</td></tr>
            <tr><td>C</td><td>12,000</td><td>0.40</td><td>16,000</td><td>0.50</td></tr>
            <tr><td>D</td><td>14,000</td><td>0.20</td><td>12,000</td><td>0.15</td></tr>
            <tr><td>E</td><td>16,000</td><td>0.10</td><td>8,000</td><td>0.10</td></tr>
          </tbody>
        </table>
      </div>
    `,
    solution_html: `
      <h4>1. Expected Net Cash Flows (ENCF)</h4>
      <ul>
        <li>$\text{ENCF}_A = (8,000 \times 0.1) + (10,000 \times 0.2) + (12,000 \times 0.4) + (14,000 \times 0.2) + (16,000 \times 0.1) = \mathbf{₹ 12,000}$[cite: 1]</li>
        <li>$\text{ENCF}_B = (24,000 \times 0.1) + (20,000 \times 0.15) + (16,000 \times 0.5) + (12,000 \times 0.15) + (8,000 \times 0.1) = \mathbf{₹ 16,000}$[cite: 1]</li>
      </ul>

      <h4>2. Project A: Variance and Standard Deviation</h4>
      <p>$$\sigma_A^2 = (8,000 - 12,000)^2(0.1) + (10,000 - 12,000)^2(0.2) + (12,000 - 12,000)^2(0.4) + (14,000 - 12,000)^2(0.2) + (16,000 - 12,000)^2(0.1)$$[cite: 1]</p>
      <p>$$\sigma_A^2 = 16,00,000 + 8,00,000 + 0 + 8,00,000 + 16,00,000 = \mathbf{48,00,000}$$[cite: 1]</p>
      <p>$$\text{Standard Deviation } (\sigma_A) = \sqrt{48,00,000} \approx \mathbf{₹ 2,190.90}$$[cite: 1]</p>

      <h4>3. Project B: Variance and Standard Deviation</h4>
      <p>$$\sigma_B^2 = (24,000 - 16,000)^2(0.1) + (20,000 - 16,000)^2(0.15) + (16,000 - 16,000)^2(0.5) + (12,000 - 16,000)^2(0.15) + (8,000 - 16,000)^2(0.1)$$[cite: 1]</p>
      <p>$$\sigma_B^2 = 64,00,000 + 24,00,000 + 0 + 24,00,000 + 64,00,000 = \mathbf{1,76,00,000}$$[cite: 1]</p>
      <p>$$\text{Standard Deviation } (\sigma_B) = \sqrt{1,76,00,000} \approx \mathbf{₹ 4,195.23}$$[cite: 1]</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH03_ILLUS_06",
    source: "ICAI Study Material",
    chapter_name: "Advanced Capital Budgeting Decisions",
    placement: 6,
    marks: 6,
    question_html: `
      <p>Calculate the Coefficient of Variation for Project A and Project B based on the following information[cite: 1]:</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th rowspan="2" style="padding:6px; border:1px solid #ddd;">Possible Event</th>
              <th colspan="2" style="padding:6px; border:1px solid #ddd;">Project A</th>
              <th colspan="2" style="padding:6px; border:1px solid #ddd;">Project B</th>
            </tr>
            <tr style="background-color:#fafafa;">
              <th style="padding:6px; border:1px solid #ddd;">Cash Flow (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">Probability</th>
              <th style="padding:6px; border:1px solid #ddd;">Cash Flow (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">Probability</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>A</td><td>10,000</td><td>0.10</td><td>26,000</td><td>0.10</td></tr>
            <tr><td>B</td><td>12,000</td><td>0.20</td><td>22,000</td><td>0.15</td></tr>
            <tr><td>C</td><td>14,000</td><td>0.40</td><td>18,000</td><td>0.50</td></tr>
            <tr><td>D</td><td>16,000</td><td>0.20</td><td>14,000</td><td>0.15</td></tr>
            <tr><td>E</td><td>18,000</td><td>0.10</td><td>10,000</td><td>0.10</td></tr>
          </tbody>
        </table>
      </div>
    `,
    solution_html: `
      <h4>1. Calculation of Expected Cash Flows (Mean)</h4>
      <ul>
        <li>$\text{ENCF}_A = (10,000 \times 0.1) + (12,000 \times 0.2) + (14,000 \times 0.4) + (16,000 \times 0.2) + (18,000 \times 0.1) = \mathbf{₹ 14,000}$[cite: 1]</li>
        <li>$\text{ENCF}_B = (26,000 \times 0.1) + (22,000 \times 0.15) + (18,000 \times 0.5) + (14,000 \times 0.15) + (10,000 \times 0.1) = \mathbf{₹ 18,000}$[cite: 1]</li>
      </ul>

      <h4>2. Standard Deviation ($\sigma$)</h4>
      <ul>
        <li><strong>Project A:</strong>
          $$\sigma_A^2 = (10,000 - 14,000)^2(0.1) + (12,000 - 14,000)^2(0.2) + 0 + (16,000 - 14,000)^2(0.2) + (18,000 - 14,000)^2(0.1) = 48,00,000$$[cite: 1]
          $$\sigma_A = \sqrt{48,00,000} \approx \mathbf{₹ 2,190.90}$$[cite: 1]
        </li>
        <li><strong>Project B:</strong>
          $$\sigma_B^2 = (26,000 - 18,000)^2(0.1) + (22,000 - 18,000)^2(0.15) + 0 + (14,000 - 18,000)^2(0.15) + (10,000 - 18,000)^2(0.1) = 1,76,00,000$$[cite: 1]
          $$\sigma_B = \sqrt{1,76,00,000} \approx \mathbf{₹ 4,195.23}$$[cite: 1]
        </li>
      </ul>

      <h4>3. Coefficient of Variation (CV)</h4>
      <p>$$\text{CV} = \frac{\text{Standard Deviation}}{\text{Expected Return / Mean}}$$[cite: 1]</p>
      <ul>
        <li>$$\text{CV}_A = \frac{2,190.90}{14,000} = \mathbf{0.1565}$$[cite: 1]</li>
        <li>$$\text{CV}_B = \frac{4,195.23}{18,000} = \mathbf{0.2331}$$[cite: 1]</li>
      </ul>
      <p><strong>Decision:</strong> In Project A, the risk per rupee of cash flow is ₹ 0.16, whereas in Project B it is ₹ 0.23[cite: 1]. Therefore, <strong>Project A is better than Project B</strong> due to its lower relative risk[cite: 1].</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH03_ILLUS_07",
    source: "ICAI Study Material",
    chapter_name: "Advanced Capital Budgeting Decisions",
    placement: 7,
    marks: 6,
    question_html: `
      <p>An enterprise is investing ₹ 100 lakhs in a project[cite: 1]. The risk-free rate of return is 7% and the risk premium expected by the Management is 7%[cite: 1]. The life of the project is 5 years[cite: 1]. The estimated annual cash flows are:</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Year</th>
              <th style="padding:6px; border:1px solid #ddd;">1</th>
              <th style="padding:6px; border:1px solid #ddd;">2</th>
              <th style="padding:6px; border:1px solid #ddd;">3</th>
              <th style="padding:6px; border:1px solid #ddd;">4</th>
              <th style="padding:6px; border:1px solid #ddd;">5</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Cash Flows (₹ in lakhs)</td><td>25</td><td>60</td><td>75</td><td>80</td><td>65</td></tr>
          </tbody>
        </table>
      </div>
      <p>Calculate the Net Present Value of the project based on the Risk-free rate and also on the basis of Risk Adjusted Discount Rate (RADR)[cite: 1].</p>
    `,
    solution_html: `
      <h4>1. NPV Based on Risk-Free Rate (7%)</h4>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Year</th>
              <th style="padding:6px; border:1px solid #ddd;">Cash Flows (₹ in lakhs)</th>
              <th style="padding:6px; border:1px solid #ddd;">PVF @ 7%</th>
              <th style="padding:6px; border:1px solid #ddd;">PV (₹ in lakhs)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>25</td><td>0.935</td><td>23.38</td></tr>
            <tr><td>2</td><td>60</td><td>0.873</td><td>52.38</td></tr>
            <tr><td>3</td><td>75</td><td>0.816</td><td>61.20</td></tr>
            <tr><td>4</td><td>80</td><td>0.763</td><td>61.04</td></tr>
            <tr><td>5</td><td>65</td><td>0.713</td><td>46.35</td></tr>
            <tr style="font-weight:bold; background-color:#fafafa;">
              <td colspan="3">Total PV of Inflows</td>
              <td>244.34</td>
            </tr>
            <tr>
              <td colspan="3">Less: Initial Outlay</td>
              <td>(100.00)</td>
            </tr>
            <tr style="font-weight:bold; background-color:#f9f9f9;">
              <td colspan="3">Net Present Value (NPV)</td>
              <td>144.34</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4>2. NPV Based on Risk-Adjusted Discount Rate (RADR)</h4>
      <p>$$\text{RADR} = \text{Risk-Free Rate} + \text{Risk Premium} = 7\% + 7\% = \mathbf{14\%}$$[cite: 1]</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Year</th>
              <th style="padding:6px; border:1px solid #ddd;">Cash Flows (₹ in lakhs)</th>
              <th style="padding:6px; border:1px solid #ddd;">PVF @ 14%</th>
              <th style="padding:6px; border:1px solid #ddd;">PV (₹ in lakhs)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>25</td><td>0.877</td><td>21.93</td></tr>
            <tr><td>2</td><td>60</td><td>0.769</td><td>46.14</td></tr>
            <tr><td>3</td><td>75</td><td>0.675</td><td>50.63</td></tr>
            <tr><td>4</td><td>80</td><td>0.592</td><td>47.36</td></tr>
            <tr><td>5</td><td>65</td><td>0.519</td><td>33.74</td></tr>
            <tr style="font-weight:bold; background-color:#fafafa;">
              <td colspan="3">Total PV of Inflows</td>
              <td>199.79</td>
            </tr>
            <tr>
              <td colspan="3">Less: Initial Outlay</td>
              <td>(100.00)</td>
            </tr>
            <tr style="font-weight:bold; background-color:#f9f9f9;">
              <td colspan="3">Net Present Value (NPV)</td>
              <td>99.79</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH03_ILLUS_08",
    source: "ICAI Study Material",
    chapter_name: "Advanced Capital Budgeting Decisions",
    placement: 8,
    marks: 6,
    question_html: `
      <p>If an investment proposal costs ₹ 45,00,000 and the risk-free rate is 5%, calculate the Net Present Value under the certainty equivalent technique[cite: 1]:</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Year</th>
              <th style="padding:6px; border:1px solid #ddd;">Expected Cash Flow (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">Certainty Equivalent Coefficient</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>10,00,000</td><td>0.90</td></tr>
            <tr><td>2</td><td>15,00,000</td><td>0.85</td></tr>
            <tr><td>3</td><td>20,00,000</td><td>0.82</td></tr>
            <tr><td>4</td><td>25,00,000</td><td>0.78</td></tr>
          </tbody>
        </table>
      </div>
    `,
    solution_html: `
      <h4>NPV Calculation Using Certainty Equivalent Approach</h4>
      <p>Under this approach, certainty-adjusted cash flows are discounted at the risk-free rate ($k = 5\%$)[cite: 1]:</p>
      <p>$$\text{NPV} = \sum_{t=1}^{n} \frac{\alpha_t \times \text{NCF}_t}{(1 + k)^t} - I_0$$[cite: 1]</p>
      <p>$$\text{NPV} = \frac{10,00,000 \times 0.90}{(1.05)^1} + \frac{15,00,000 \times 0.85}{(1.05)^2} + \frac{20,00,000 \times 0.82}{(1.05)^3} + \frac{25,00,000 \times 0.78}{(1.05)^4} - 45,00,000$$[cite: 1]</p>
      <p>$$\text{NPV} = \frac{9,00,000}{1.05} + \frac{12,75,000}{1.1025} + \frac{16,40,000}{1.157625} + \frac{19,50,000}{1.215506} - 45,00,000$$</p>
      <p>$$\text{NPV} = 8,57,143 + 11,56,463 + 14,16,694 + 16,04,270 - 45,00,000$$</p>
      <p>$$\text{NPV} = ₹ 50,34,570 - ₹ 45,00,000 = \mathbf{₹ 5,34,570}$$[cite: 1]</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH03_ILLUS_09",
    source: "ICAI Study Material",
    chapter_name: "Advanced Capital Budgeting Decisions",
    placement: 9,
    marks: 8,
    question_html: `
      <p>X Ltd. is considering its new project with the following details[cite: 1]:</p>
      <ul>
        <li>Initial capital cost: ₹ 400 Cr.[cite: 1]</li>
        <li>Annual unit sales: 5 Cr.[cite: 1]</li>
        <li>Selling price per unit: ₹ 100[cite: 1]</li>
        <li>Variable cost per unit: ₹ 50[cite: 1]</li>
        <li>Fixed costs per year: ₹ 50 Cr.[cite: 1]</li>
        <li>Discount Rate: 6%[cite: 1]</li>
        <li>Project Life: 3 years ($PVAF_{6\%, 3} = 2.673$)[cite: 1]</li>
      </ul>
      <p><strong>Required:</strong></p>
      <ol>
        <li>Calculate the NPV of the project[cite: 1].</li>
        <li>Compute the impact on the project's NPV considering a 2.5 per cent adverse variance in each variable. Which variable is having the maximum effect?[cite: 1]</li>
      </ol>
    `,
    solution_html: `
      <h4>1. Base Case Net Cash Inflow and NPV</h4>
      <ul>
        <li>Selling Price per unit $= ₹ 100$; Variable Cost per unit $= ₹ 50 \implies \text{Contribution per unit} = ₹ 50$[cite: 1]</li>
        <li>Total Annual Contribution $= 5 \text{ Cr. units} \times ₹ 50 = ₹ 250 \text{ Cr.}$[cite: 1]</li>
        <li>Less: Annual Fixed Costs $= ₹ 50 \text{ Cr.}$[cite: 1]</li>
        <li>Annual Net Cash Inflow $= ₹ 250 \text{ Cr.} - ₹ 50 \text{ Cr.} = ₹ 200 \text{ Cr.}$[cite: 1]</li>
        <li>$\text{PV of Cash Inflows} = ₹ 200 \text{ Cr.} \times 2.673 = ₹ 534.60 \text{ Cr.}$[cite: 1]</li>
        <li>$$\text{Base NPV} = ₹ 534.60 \text{ Cr.} - ₹ 400.00 \text{ Cr.} = \mathbf{₹ 134.60 \text{ Cr.}}$$[cite: 1]</li>
      </ul>

      <h4>2. Sensitivity Analysis (2.5% Adverse Variance in Each Variable)</h4>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Particulars</th>
              <th style="padding:6px; border:1px solid #ddd;">Base</th>
              <th style="padding:6px; border:1px solid #ddd;">Capital Cost (+2.5%)</th>
              <th style="padding:6px; border:1px solid #ddd;">Selling Price (-2.5%)</th>
              <th style="padding:6px; border:1px solid #ddd;">Variable Cost (+2.5%)</th>
              <th style="padding:6px; border:1px solid #ddd;">Fixed Cost (+2.5%)</th>
              <th style="padding:6px; border:1px solid #ddd;">Unit Sales (-2.5%)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Selling Price (₹)</td><td>100</td><td>100</td><td>97.50</td><td>100</td><td>100</td><td>100</td></tr>
            <tr><td>Variable Cost (₹)</td><td>50</td><td>50</td><td>50</td><td>51.25</td><td>50</td><td>50</td></tr>
            <tr><td>Contribution/Unit (₹)</td><td>50</td><td>50</td><td>47.50</td><td>48.75</td><td>50</td><td>50</td></tr>
            <tr><td>Sales Volume (Cr.)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>4.875</td></tr>
            <tr><td>Contribution (₹ Cr.)</td><td>250</td><td>250</td><td>237.50</td><td>243.75</td><td>250</td><td>243.75</td></tr>
            <tr><td>Fixed Cost (₹ Cr.)</td><td>50</td><td>50</td><td>50</td><td>50</td><td>51.25</td><td>50</td></tr>
            <tr><td>Net CF/Year (₹ Cr.)</td><td>200</td><td>200</td><td>187.50</td><td>193.75</td><td>198.75</td><td>193.75</td></tr>
            <tr><td>PV of Inflows (₹ Cr.)</td><td>534.60</td><td>534.60</td><td>501.19</td><td>517.89</td><td>531.26</td><td>517.89</td></tr>
            <tr><td>Capital Cost (₹ Cr.)</td><td>400</td><td>410</td><td>400</td><td>400</td><td>400</td><td>400</td></tr>
            <tr style="font-weight:bold; background-color:#fafafa;"><td>Revised NPV (₹ Cr.)</td><td>134.60</td><td>124.60</td><td>101.19</td><td>117.89</td><td>131.26</td><td>117.89</td></tr>
            <tr style="color:red; font-weight:bold;"><td>% Fall in NPV</td><td>—</td><td>-7.43%</td><td>-24.82%</td><td>-12.41%</td><td>-2.48%</td><td>-12.41%</td></tr>
          </tbody>
        </table>
      </div>
      <p><strong>Conclusion:</strong> The <strong>selling price per unit</strong> is the most critical variable, causing the maximum adverse reduction in NPV by <strong>24.82%</strong>[cite: 1].</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH03_ILLUS_10",
    source: "ICAI Study Material",
    chapter_name: "Advanced Capital Budgeting Decisions",
    placement: 10,
    marks: 6,
    question_html: `
      <p>XYZ Ltd. is considering a project with an initial outlay of ₹ 14,00,000 and possible cash inflows across three scenarios[cite: 1]:</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Particulars</th>
              <th style="padding:6px; border:1px solid #ddd;">Year 1 (₹ '000)</th>
              <th style="padding:6px; border:1px solid #ddd;">Year 2 (₹ '000)</th>
              <th style="padding:6px; border:1px solid #ddd;">Year 3 (₹ '000)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Worst Case</td><td>450</td><td>400</td><td>700</td></tr>
            <tr><td>Most Likely</td><td>550</td><td>450</td><td>800</td></tr>
            <tr><td>Best Case</td><td>650</td><td>500</td><td>900</td></tr>
          </tbody>
        </table>
      </div>
      <p>Assuming the cost of capital is 9% ($PVF_1 = 0.917, PVF_2 = 0.842, PVF_3 = 0.772$), determine the NPV in each scenario[cite: 1]. If XYZ Ltd. is certain about the most likely result in the first two years but uncertain about the third year's cash flow, analyze the NPV expecting the worst scenario in the third year[cite: 1].</p>
    `,
    solution_html: `
      <h4>1. NPV Computation Across Scenarios</h4>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th rowspan="2" style="padding:6px; border:1px solid #ddd;">Year</th>
              <th rowspan="2" style="padding:6px; border:1px solid #ddd;">PVF @ 9%</th>
              <th colspan="2" style="padding:6px; border:1px solid #ddd;">Worst Case</th>
              <th colspan="2" style="padding:6px; border:1px solid #ddd;">Most Likely</th>
              <th colspan="2" style="padding:6px; border:1px solid #ddd;">Best Case</th>
            </tr>
            <tr style="background-color:#fafafa;">
              <th style="padding:6px; border:1px solid #ddd;">CF (₹ '000)</th>
              <th style="padding:6px; border:1px solid #ddd;">PV (₹ '000)</th>
              <th style="padding:6px; border:1px solid #ddd;">CF (₹ '000)</th>
              <th style="padding:6px; border:1px solid #ddd;">PV (₹ '000)</th>
              <th style="padding:6px; border:1px solid #ddd;">CF (₹ '000)</th>
              <th style="padding:6px; border:1px solid #ddd;">PV (₹ '000)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>0</td><td>1.000</td><td>(1,400)</td><td>(1,400.00)</td><td>(1,400)</td><td>(1,400.00)</td><td>(1,400)</td><td>(1,400.00)</td></tr>
            <tr><td>1</td><td>0.917</td><td>450</td><td>412.65</td><td>550</td><td>504.35</td><td>650</td><td>596.05</td></tr>
            <tr><td>2</td><td>0.842</td><td>400</td><td>336.80</td><td>450</td><td>378.90</td><td>500</td><td>421.00</td></tr>
            <tr><td>3</td><td>0.772</td><td>700</td><td>540.40</td><td>800</td><td>617.60</td><td>900</td><td>694.80</td></tr>
            <tr style="font-weight:bold; background-color:#f9f9f9;">
              <td colspan="2">NPV (₹ '000)</td>
              <td colspan="2">-110.15</td>
              <td colspan="2">+100.85</td>
              <td colspan="2">+311.85</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4>2. Mixed Scenario Analysis</h4>
      <p>If Years 1 &amp; 2 yield "Most Likely" and Year 3 yields "Worst Case"[cite: 1]:</p>
      <p>$$\text{NPV} = -14,00,000 + \frac{5,50,000}{1.09} + \frac{4,50,000}{(1.09)^2} + \frac{7,00,000}{(1.09)^3}$$[cite: 1]</p>
      <p>$$\text{NPV} = -14,00,000 + 5,04,587 + 3,78,756 + 5,40,528 = \mathbf{₹ 23,871}$$[cite: 1]</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH03_ILLUS_11",
    source: "ICAI Study Material",
    chapter_name: "Advanced Capital Budgeting Decisions",
    placement: 11,
    marks: 6,
    question_html: `
      <p>L &amp; R Limited wishes to develop new virus-cleaner software[cite: 1]. The cost of the pilot project would be ₹ 2,40,000[cite: 1]. Presently, the chances of the product being successfully launched on a commercial scale are rated at 50%[cite: 1].</p>
      <ul>
        <li>If it succeeds, L&amp;R can invest ₹ 20 lacs to market the product, generating perpetually an annual net after-tax cash inflow of ₹ 4 lacs[cite: 1].</li>
        <li>If the commercial launch fails, they can invest a smaller amount of ₹ 12 lacs hoping to gain perpetually ₹ 1 lac p.a.[cite: 1]</li>
      </ul>
      <p>Evaluate the proposal adopting the decision tree approach (Discount rate = 10%)[cite: 1].</p>
    `,
    solution_html: `
      <h4>Backward Rollback Evaluation of Decision Tree Nodes</h4>

      <p><strong>1. Evaluation at Decision Node C (Given Success of Pilot):</strong></p>
      <ul>
        <li>Capitalized value of perpetual inflow $= \frac{₹ 4,00,000}{0.10} = ₹ 40,00,000$[cite: 1]</li>
        <li>Less: Required commercial investment $= ₹ 20,00,000$[cite: 1]</li>
        <li>Net Payoff if Invested $= ₹ 40,00,000 - ₹ 20,00,000 = +₹ 20,00,000$[cite: 1]</li>
        <li>Net Payoff if Not Invested $= ₹ 0$[cite: 1]</li>
        <li><em>Decision at Node C:</em> <strong>Invest ₹ 20 lacs (Payoff = ₹ 20 lacs)</strong>[cite: 1].</li>
      </ul>

      <p><strong>2. Evaluation at Decision Node D (Given Failure of Pilot):</strong></p>
      <ul>
        <li>Capitalized value of perpetual inflow $= \frac{₹ 1,00,000}{0.10} = ₹ 10,00,000$[cite: 1]</li>
        <li>Less: Required commercial investment $= ₹ 12,00,000$[cite: 1]</li>
        <li>Net Payoff if Invested $= ₹ 10,00,000 - ₹ 12,00,000 = -₹ 2,00,000$[cite: 1]</li>
        <li>Net Payoff if Not Invested $= ₹ 0$[cite: 1]</li>
        <li><em>Decision at Node D:</em> <strong>Do Not Invest (Payoff = ₹ 0)</strong>[cite: 1].</li>
      </ul>

      <p><strong>3. Expected Monetary Value (EMV) at Chance Node B:</strong></p>
      <p>$$\text{EMV}_B = (₹ 20 \text{ lacs} \times 0.50) + (₹ 0 \times 0.50) = \mathbf{₹ 10,00,000}$$[cite: 1]</p>

      <p><strong>4. Evaluation at Initial Decision Node A:</strong></p>
      <ul>
        <li>Alternative 1 (Undertake Test): $\text{Net Gain} = \text{EMV}_B - \text{Pilot Cost} = ₹ 10,00,000 - ₹ 2,40,000 = \mathbf{+₹ 7,60,000}$[cite: 1]</li>
        <li>Alternative 2 (Do Not Test): $\text{Net Gain} = ₹ 0$[cite: 1]</li>
      </ul>
      <p><strong>Recommendation:</strong> The company should <strong>invest ₹ 2,40,000 and undertake the pilot test</strong>[cite: 1].</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH03_ILLUS_12",
    source: "ICAI Study Material",
    chapter_name: "Advanced Capital Budgeting Decisions",
    placement: 12,
    marks: 8,
    question_html: `
      <p>A Company named Roby's Cube decided to replace the existing Computer system of their organisation[cite: 1]. The original cost of the old system was ₹ 25,000 installed 5 years ago with an estimated life of 10 years and Nil salvage value (depreciated on SLM)[cite: 1]. Its current market value is ₹ 5,000[cite: 1].</p>
      <p>The cost of the new system is ₹ 50,000 with a life of 5 years and estimated salvage value of ₹ 1,000[cite: 1]. Estimated annual cost savings with the new system is ₹ 5,000[cite: 1]. Increase in sales with the new system is assumed at 10% per year based on original total sales of ₹ 10,00,000[cite: 1]. Cost of capital is 10% and the tax rate is 30%[cite: 1]. Advise whether to replace the machine[cite: 1].</p>
    `,
    solution_html: `
      <h4>Step I: Initial Net Cash Outflow</h4>
      <ul>
        <li>Book value of old system $= ₹ 25,000 - (5 \times ₹ 2,500) = ₹ 12,500$[cite: 1]</li>
        <li>Loss on sale of old system $= ₹ 12,500 - ₹ 5,000 = ₹ 7,500$[cite: 1]</li>
        <li>Tax savings on loss on sale $= ₹ 7,500 \times 0.30 = ₹ 2,250$[cite: 1]</li>
        <li>$$\text{Net Outflow} = \text{Cost of New} - (\text{Sale Value} + \text{Tax Savings}) = 50,00,000 \times 10^{-2} - (5,000 + 2,250) = ₹ 50,000 - ₹ 7,250 = \mathbf{₹ 42,750}$$[cite: 1]</li>
      </ul>

      <h4>Step II: Incremental Annual Cash Inflows</h4>
      <ul>
        <li>Increase in Annual Sales $= 10\% \times ₹ 10,00,000 = ₹ 1,00,000 \text{ (or } ₹ 10,000 \text{ profit impact depending on margin / data given as } ₹ 1,00,000 \times 0.1 = ₹ 10,000)$[cite: 1]</li>
        <li>Cost Savings $= ₹ 5,000$[cite: 1]</li>
        <li>Depreciation on new system $= \frac{50,000 - 1,000}{5} = ₹ 9,800$[cite: 1]</li>
        <li>Depreciation on old system $= \frac{25,000}{10} = ₹ 2,500$[cite: 1]</li>
        <li>Incremental Depreciation $= ₹ 9,800 - ₹ 2,500 = ₹ 7,300$[cite: 1]</li>
        <li>$$\Delta \text{CFAT} = [(\Delta\text{Sales} + \Delta\text{Savings}) - \Delta\text{Dep.}](1 - T) + \Delta\text{Dep.}$$[cite: 1]</li>
        <li>$$\Delta \text{CFAT} = [(10,000 + 5,000) - 7,300](1 - 0.30) + 7,300 = [7,700 \times 0.70] + 7,300 = 5,390 + 7,300 = \mathbf{₹ 12,690}$$[cite: 1]</li>
      </ul>

      <h4>Step III: Present Value of Inflows and Salvage Value</h4>
      <p>$$\text{PV of Inflows} = (₹ 12,690 \times \text{PVIFA}_{10\%, 5}) + (₹ 1,000 \times \text{PVIF}_{10\%, 5}) = (12,690 \times 3.791) + (1,000 \times 0.621) = 48,108 + 621 \approx \mathbf{₹ 48,723}$$[cite: 1]</p>

      <h4>Step IV: Net Present Value</h4>
      <p>$$\text{NPV} = ₹ 48,723 - ₹ 42,750 = \mathbf{+₹ 5,973}$$[cite: 1]</p>
      <p><strong>Decision:</strong> Since the NPV is positive, the proposal to replace the computer system should be accepted[cite: 1].</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH03_ILLUS_13",
    source: "ICAI Study Material",
    chapter_name: "Advanced Capital Budgeting Decisions",
    placement: 13,
    marks: 8,
    question_html: `
      <p>X Ltd. is a taxi operator[cite: 1]. Each taxi costs ₹ 4,00,000 with a useful life of 3 years[cite: 1]. The operating costs and salvage values are as follows[cite: 1]:</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Particulars</th>
              <th style="padding:6px; border:1px solid #ddd;">Year 1</th>
              <th style="padding:6px; border:1px solid #ddd;">Year 2</th>
              <th style="padding:6px; border:1px solid #ddd;">Year 3</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Operating Cost (₹)</td><td>1,80,000</td><td>2,10,000</td><td>2,38,000</td></tr>
            <tr><td>Resale Value (₹)</td><td>2,80,000</td><td>2,30,000</td><td>1,68,000</td></tr>
          </tbody>
        </table>
      </div>
      <p>Determine the optimal replacement period of the taxi if the cost of capital of X Ltd. is 10% ($PVF_1 = 0.909, PVF_2 = 0.826, PVF_3 = 0.751$)[cite: 1].</p>
    `,
    solution_html: `
      <h4>1. Present Value of Outflows for Each Retention Period</h4>
      <ul>
        <li><strong>If kept for 1 Year:</strong>
          $$\text{PV} = -4,00,000 - (1,80,000 \times 0.909) + (2,80,000 \times 0.909) = -4,00,000 + 90,900 = \mathbf{-₹ 3,09,100}$$[cite: 1]
        </li>
        <li><strong>If kept for 2 Years:</strong>
          $$\text{PV} = -4,00,000 - (1,80,000 \times 0.909) - (2,10,000 \times 0.826) + (2,30,000 \times 0.826) = -4,00,000 - 1,63,620 + 16,520 = \mathbf{-₹ 5,47,100}$$[cite: 1]
        </li>
        <li><strong>If kept for 3 Years:</strong>
          $$\text{PV} = -4,00,000 - (1,80,000 \times 0.909) - (2,10,000 \times 0.826) - (2,38,000 \times 0.751) + (1,68,000 \times 0.751) = \mathbf{-₹ 7,89,650}$$[cite: 1]
        </li>
      </ul>

      <h4>2. Equivalent Annual Cost (EAC) Calculation</h4>
      <p>$$\text{EAC} = \frac{\text{PV of Cash Outflows}}{\text{PVAF}(10\%, n)}$$[cite: 1]</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Holding Cycle</th>
              <th style="padding:6px; border:1px solid #ddd;">PV of Costs (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">PVAF @ 10%</th>
              <th style="padding:6px; border:1px solid #ddd;">Equivalent Annual Cost (EAC) (₹)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1 Year</td><td>3,09,100</td><td>0.909</td><td>3,40,044</td></tr>
            <tr style="background-color:#e6ffe6; font-weight:bold;"><td>2 Years</td><td>5,47,100</td><td>1.735</td><td>3,15,331</td></tr>
            <tr><td>3 Years</td><td>7,89,650</td><td>2.486</td><td>3,17,639</td></tr>
          </tbody>
        </table>
      </div>

      <h4>Decision</h4>
      <p>Since the Equivalent Annual Cost is lowest when the taxi is kept for <strong>2 years (₹ 3,15,331)</strong>, the <strong>optimum replacement cycle is 2 years</strong>[cite: 1].</p>
    `
  },
//   chapter4
  {
    question_id: "AFM_ICAIBOOK_CH04_TYK_TH_01",
    source: "ICAI Study Material",
    chapter_name: "Security Analysis",
    placement: 1,
    marks: 6,
    question_html: `
      <p>Explain the Efficient Market Theory and what is the major misconception about this theory?[cite: 2]</p>
    `,
    solution_html: `
      <h4>1. Concept of Efficient Market Theory (Efficient Market Hypothesis - EMH)</h4>
      <p>Developed by Professor Eugene Fama in the 1960s, the <strong>Efficient Market Theory</strong> posits that at any given time, security prices fully and instantaneously reflect all available price-sensitive information[cite: 2]. Consequently, stocks always trade at their fair intrinsic value on exchanges, making it impossible for investors to consistently &ldquo;beat the market&rdquo; or earn abnormal risk-adjusted returns through technical timing or fundamental stock selection[cite: 2].</p>
      
      <p>According to Fama, market efficiency exists at three levels[cite: 2]:</p>
      <ul>
        <li><strong>Weak Form Efficiency:</strong> Current stock prices incorporate all historical price and trading volume data[cite: 2]. Technical analysis is ineffective[cite: 2].</li>
        <li><strong>Semi-Strong Form Efficiency:</strong> Prices adjust rapidly to all publicly available information (financial statements, dividend declarations, economic indicators)[cite: 2]. Fundamental analysis cannot generate superior returns[cite: 2].</li>
        <li><strong>Strong Form Efficiency:</strong> Prices reflect all information, both public and private (insider knowledge)[cite: 2]. No participant can achieve superior returns[cite: 2].</li>
      </ul>

      <h4>2. Major Misconceptions About the Theory</h4>
      <ul>
        <li><strong>Prices Do Not Reflect Fair Value Because They Continually Fluctuate:</strong> Skeptics point to continuous price volatility as proof of market irrationality[cite: 2]. However, the market fluctuates because the future is inherently uncertain and springs new surprises continually[cite: 2]. As prices adjust to unexpected news, fluctuations occur naturally while still reflecting available information[cite: 2].</li>
        <li><strong>Inability of Portfolio Managers to Outperform Implies Incompetence:</strong> The inability of institutional fund managers to beat index benchmarks is often misinterpreted as a lack of analytical capability[cite: 2]. In reality, the market is efficient precisely because numerous skilled managers compete vigorously against each other to identify mispricings, thereby impounding information almost instantaneously[cite: 2].</li>
        <li><strong>Random Movement Implies Market Irrationality:</strong> Randomness and irrationality are distinct concepts[cite: 2]. If investors behave rationally and process new information independently as it arrives, subsequent price movements must follow a random, unpredictable walk[cite: 2].</li>
      </ul>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH04_TYK_TH_02",
    source: "ICAI Study Material",
    chapter_name: "Security Analysis",
    placement: 2,
    marks: 6,
    question_html: `
      <p>Explain the Dow Theory.[cite: 2]</p>
    `,
    solution_html: `
      <h4>1. Origin and Premise of Dow Theory</h4>
      <p>Formulated by Charles H. Dow in the late nineteenth century, the <strong>Dow Theory</strong> is one of the earliest and most established frameworks of technical analysis[cite: 2]. It is designed to identify the direction and relative strength of the overall market by tracking the movements of two benchmark averages: the <em>Dow Jones Industrial Average (DJIA)</em> and the <em>Dow Jones Transportation Average (DJTA)</em>[cite: 2].</p>

      <h4>2. Three Simultaneous Market Movements</h4>
      <ul>
        <li><strong>Primary Movement (Major Trend):</strong> The broad, overarching trend of the market lasting from 1 year to 36 months or longer, categorized as a bull or bear market[cite: 2].</li>
        <li><strong>Secondary Movement (Intermediate Corrections):</strong> Important counter-reactions that run in the opposite direction to the primary trend, typically lasting from 2 weeks to a month or more, retracing one-third to two-thirds of the primary swing[cite: 2].</li>
        <li><strong>Daily Fluctuations (Minor Movements):</strong> Day-to-day erratic price movements that are considered random noise and carry minimal analytical significance on their own[cite: 2].</li>
      </ul>

      <h4>3. Trend Determination and Confirmation</h4>
      <ul>
        <li><strong>Bullish Trend:</strong> Characterized by successive higher peaks (cyclical highs) and higher troughs (cyclical lows)[cite: 2].</li>
        <li><strong>Bearish Trend:</strong> Characterized by successively lower highs and lower lows[cite: 2].</li>
        <li><strong>Mutual Confirmation:</strong> A trend reversal is valid only when confirmed by both averages (Industrial and Transportation)[cite: 2].</li>
      </ul>

      <h4>4. Three Phases of a Primary Uptrend</h4>
      <ol>
        <li><strong>Accumulation Phase:</strong> Astute, far-sighted investors buy shares from distressed sellers when business conditions are depressed and valuations are low[cite: 2].</li>
        <li><strong>Public Participation Phase:</strong> Increasing corporate earnings and improving economic indicators attract wider investor participation, leading to sustained price advances[cite: 2].</li>
        <li><strong>Distribution / Speculation Phase:</strong> Widespread public optimism and rampant speculation occur[cite: 2]. Informed investors begin offloading their holdings to optimistic buyers, preparing the stage for a primary downtrend[cite: 2].</li>
      </ol>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH04_TYK_TH_03",
    source: "ICAI Study Material",
    chapter_name: "Security Analysis",
    placement: 3,
    marks: 6,
    question_html: `
      <p>Explain the Elliot Wave Theory of technical analysis.[cite: 2]</p>
    `,
    solution_html: `
      <h4>1. Origin and Premise of Elliot Wave Theory</h4>
      <p>Developed by Ralph Nelson Elliott in 1934 based on the systematic study of 75 years of stock price charts, the <strong>Elliott Wave Theory</strong> states that market prices unfold in repetitive, identifiable wave patterns governed by collective investor psychology and shifts in supply and demand[cite: 2]. A &ldquo;wave&rdquo; represents a price movement from one directional change to the next[cite: 2].</p>

      <h4>2. Wave Structure: The Complete 8-Wave Cycle</h4>
      <p>A complete market cycle consists of eight waves divided into two distinct phases[cite: 2]:</p>
      <ul>
        <li><strong>Impulsive Phase (5 Waves &ndash; 1, 2, 3, 4, 5):</strong>
          <ul>
            <li>Moves in the direction of the dominant primary trend[cite: 2].</li>
            <li>Waves <strong>1, 3, and 5</strong> are active impulse (directional) waves pushing prices forward[cite: 2].</li>
            <li>Waves <strong>2 and 4</strong> are corrective sub-waves interrupting the main thrust[cite: 2].</li>
          </ul>
        </li>
        <li><strong>Corrective Phase (3 Waves &ndash; a, b, c):</strong>
          <ul>
            <li>Moves against the dominant primary trend, retracing part of the preceding 5-wave impulse advance[cite: 2].</li>
            <li>Waves <strong>a and c</strong> drive the correction, while Wave <strong>b</strong> represents a counter-trend reaction within the corrective pattern[cite: 2].</li>
          </ul>
        </li>
      </ul>

      <h4>3. Cyclical Continuity</h4>
      <p>Upon completion of an entire 8-wave cycle (5 impulse waves followed by 3 corrective waves), the sequence terminates and forms the sub-wave of a higher-degree wave, after which a fresh cycle begins with similar impulses[cite: 2].</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH04_TYK_TH_04",
    source: "ICAI Study Material",
    chapter_name: "Security Analysis",
    placement: 4,
    marks: 6,
    question_html: `
      <p>Explain the various indicators that can be used to assess the performance of an economy.[cite: 2]</p>
    `,
    solution_html: `
      <p>Under the <strong>Barometer / Indicator Approach</strong> of economic analysis, time-series economic variables are tracked to forecast aggregate economic activity and its impact on corporate profitability[cite: 2]. These indicators are classified into three primary categories[cite: 2]:</p>

      <h4>1. Leading Indicators</h4>
      <ul>
        <li>These variables reach their cyclical peaks or troughs in advance of the overall economic business cycle[cite: 2].</li>
        <li>They indicate what the economy is likely to look like in the near future, serving as early warning signals[cite: 2].</li>
        <li><em>Examples:</em> Stock market price indices, new manufacturing orders, residential building permits, money supply ($M_3$) growth, and initial unemployment insurance claims[cite: 2].</li>
      </ul>

      <h4>2. Roughly Coincidental Indicators</h4>
      <ul>
        <li>These variables move in tandem with aggregate economic activity, reaching their turning points (peaks and troughs) at approximately the same time as the economy[cite: 2].</li>
        <li>They measure the current pulse and output level of the economy[cite: 2].</li>
        <li><em>Examples:</em> Gross Domestic Product (GDP), Gross National Product (GNP), industrial production indices, personal disposable income, and manufacturing sales[cite: 2].</li>
      </ul>

      <h4>3. Lagging Indicators</h4>
      <ul>
        <li>These variables lag behind aggregate economic movements, reaching their turning points after the broader economy has already shifted direction[cite: 2].</li>
        <li>They validate and confirm that a cyclical turning point has taken place[cite: 2].</li>
        <li><em>Examples:</em> Average duration of unemployment, prime lending rates, outstanding commercial loans, ratio of consumer debt to income, and inventory-to-sales ratios[cite: 2].</li>
      </ul>

      <h4>4. Diffusion / Composite Index</h4>
      <p>Individual indicators frequently emit conflicting signals regarding future economic direction[cite: 2]. To overcome this limitation, analysts construct a <strong>Diffusion or Composite Index</strong> that aggregates multiple indicators into a single metric to measure the underlying strength or weakness across economic sectors[cite: 2].</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH04_TYK_PR_01",
    source: "ICAI Study Material",
    chapter_name: "Security Analysis",
    placement: 5,
    marks: 8,
    question_html: `
      <p>Closing values of the Market Index (Sensex) from the 6th to 17th day of the month of January 2020 were as follows[cite: 2]:</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Day</th>
              <th style="padding:6px; border:1px solid #ddd;">Date</th>
              <th style="padding:6px; border:1px solid #ddd;">Day of Week</th>
              <th style="padding:6px; border:1px solid #ddd;">Sensex Value</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>6</td><td>THU</td><td>14,522</td></tr>
            <tr><td>2</td><td>7</td><td>FRI</td><td>14,925</td></tr>
            <tr><td>3</td><td>8</td><td>SAT</td><td>No Trading</td></tr>
            <tr><td>4</td><td>9</td><td>SUN</td><td>No Trading</td></tr>
            <tr><td>5</td><td>10</td><td>MON</td><td>15,222</td></tr>
            <tr><td>6</td><td>11</td><td>TUE</td><td>16,000</td></tr>
            <tr><td>7</td><td>12</td><td>WED</td><td>16,400</td></tr>
            <tr><td>8</td><td>13</td><td>THU</td><td>17,000</td></tr>
            <tr><td>9</td><td>14</td><td>FRI</td><td>No Trading</td></tr>
            <tr><td>10</td><td>15</td><td>SAT</td><td>No Trading</td></tr>
            <tr><td>11</td><td>16</td><td>SUN</td><td>No Trading</td></tr>
            <tr><td>12</td><td>17</td><td>MON</td><td>18,000</td></tr>
          </tbody>
        </table>
      </div>
      <p>Calculate the <strong>Exponential Moving Average (EMA)</strong> of the Sensex during the above period[cite: 2]. The previous day's exponential moving average of the Sensex can be assumed as <strong>15,000</strong>[cite: 2]. The value of the exponent ($\alpha$) for a 31-day EMA is <strong>0.062</strong>[cite: 2].</p>
      <p>Give a detailed analysis on the basis of your calculations[cite: 2].</p>
    `,
    solution_html: `
      <h4>1. Calculation Formula</h4>
      <p>$$\text{EMA}_t = \text{EMA}_{t-1} + \alpha \times (\text{Closing Price}_t - \text{EMA}_{t-1})$$[cite: 2]</p>
      <p>Where Exponent ($\alpha$) = <strong>0.062</strong>, and Initial $\text{EMA}_0 = \mathbf{15,000}$[cite: 2].</p>

      <h4>2. Computation Schedule</h4>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Date</th>
              <th style="padding:6px; border:1px solid #ddd;">(1)<br />Sensex</th>
              <th style="padding:6px; border:1px solid #ddd;">(2)<br />Previous Day EMA</th>
              <th style="padding:6px; border:1px solid #ddd;">(3) = (1) - (2)<br />Difference</th>
              <th style="padding:6px; border:1px solid #ddd;">(4) = (3) &times; 0.062<br />Weighted Diff.</th>
              <th style="padding:6px; border:1px solid #ddd;">(5) = (2) + (4)<br />Current EMA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>6</td>
              <td>14,522</td>
              <td>15,000.000</td>
              <td>(478.000)</td>
              <td>(29.636)</td>
              <td><strong>14,970.364</strong></td>
            </tr>
            <tr>
              <td>7</td>
              <td>14,925</td>
              <td>14,970.364</td>
              <td>(45.364)</td>
              <td>(2.813)</td>
              <td><strong>14,967.551</strong></td>
            </tr>
            <tr>
              <td>10</td>
              <td>15,222</td>
              <td>14,967.551</td>
              <td>254.449</td>
              <td>15.776</td>
              <td><strong>14,983.327</strong></td>
            </tr>
            <tr>
              <td>11</td>
              <td>16,000</td>
              <td>14,983.327</td>
              <td>1,016.673</td>
              <td>63.034</td>
              <td><strong>15,046.361</strong></td>
            </tr>
            <tr>
              <td>12</td>
              <td>16,400</td>
              <td>15,046.361</td>
              <td>1,353.639</td>
              <td>83.926</td>
              <td><strong>15,130.287</strong></td>
            </tr>
            <tr>
              <td>13</td>
              <td>17,000</td>
              <td>15,130.287</td>
              <td>1,869.713</td>
              <td>115.922</td>
              <td><strong>15,246.209</strong></td>
            </tr>
            <tr>
              <td>17</td>
              <td>18,000</td>
              <td>15,246.209</td>
              <td>2,753.791</td>
              <td>170.735</td>
              <td><strong>15,416.944</strong></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4>3. Analysis and Conclusion</h4>
      <ul>
        <li>On January 6 and 7, the index was trading below its EMA (bearish undertone)[cite: 2].</li>
        <li>On January 10, the index rallied to 15,222, decisively cutting above the EMA (14,967.55)[cite: 2].</li>
        <li>From January 11 through January 17, the closing price stayed substantially higher than the rising EMA line, with the divergence widening (Sensex at 18,000 vs. EMA at 15,416.94)[cite: 2].</li>
        <li><strong>Trading Decision:</strong> The market is strongly <strong>bullish</strong> and is expected to maintain its upward trajectory over the short-to-medium term[cite: 2]. This crossover generates a strong <strong>Buy signal</strong>, and investors/traders should take <strong>long positions</strong>[cite: 2].</li>
      </ul>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH04_TYK_PR_02",
    source: "ICAI Study Material",
    chapter_name: "Security Analysis",
    placement: 6,
    marks: 10,
    question_html: `
      <p>The closing value of a Stock Market Index for the month of October 2007 is given below[cite: 2]:</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Date</th>
              <th style="padding:6px; border:1px solid #ddd;">Closing Index Value</th>
              <th style="padding:6px; border:1px solid #ddd;">Date</th>
              <th style="padding:6px; border:1px solid #ddd;">Closing Index Value</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>01.10.07</td><td>2,800</td><td>16.10.07</td><td>3,300</td></tr>
            <tr><td>03.10.07</td><td>2,780</td><td>17.10.07</td><td>3,450</td></tr>
            <tr><td>04.10.07</td><td>2,795</td><td>19.10.07</td><td>3,360</td></tr>
            <tr><td>05.10.07</td><td>2,830</td><td>22.10.07</td><td>3,290</td></tr>
            <tr><td>08.10.07</td><td>2,760</td><td>23.10.07</td><td>3,360</td></tr>
            <tr><td>09.10.07</td><td>2,790</td><td>24.10.07</td><td>3,340</td></tr>
            <tr><td>10.10.07</td><td>2,880</td><td>25.10.07</td><td>3,290</td></tr>
            <tr><td>11.10.07</td><td>2,960</td><td>29.10.07</td><td>3,240</td></tr>
            <tr><td>12.10.07</td><td>2,990</td><td>30.10.07</td><td>3,140</td></tr>
            <tr><td>15.10.07</td><td>3,200</td><td>31.10.07</td><td>3,260</td></tr>
          </tbody>
        </table>
      </div>
      <p>You are required to test the <strong>weak form of Efficient Market Hypothesis</strong> by applying the <strong>Runs Test</strong> at the <strong>5% and 10% levels of significance</strong>[cite: 2].</p>
      <p>Given critical values of $t$ at 18 degrees of freedom[cite: 2]:</p>
      <ul>
        <li>$t$ at 5% level of significance = <strong>2.101</strong>[cite: 2]</li>
        <li>$t$ at 10% level of significance = <strong>1.734</strong>[cite: 2]</li>
      </ul>
    `,
    solution_html: `
      <h4>1. Determination of Price Changes and Runs</h4>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Date</th>
              <th style="padding:6px; border:1px solid #ddd;">Closing Index</th>
              <th style="padding:6px; border:1px solid #ddd;">Change Sign</th>
              <th style="padding:6px; border:1px solid #ddd;">Run Count</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>01.10.07</td><td>2,800</td><td>Base</td><td>—</td></tr>
            <tr><td>03.10.07</td><td>2,780</td><td>$-$</td><td>Run 1</td></tr>
            <tr><td>04.10.07</td><td>2,795</td><td>$+$</td><td rowspan="2">Run 2</td></tr>
            <tr><td>05.10.07</td><td>2,830</td><td>$+$</td></tr>
            <tr><td>08.10.07</td><td>2,760</td><td>$-$</td><td>Run 3</td></tr>
            <tr><td>09.10.07</td><td>2,790</td><td>$+$</td><td rowspan="7">Run 4</td></tr>
            <tr><td>10.10.07</td><td>2,880</td><td>$+$</td></tr>
            <tr><td>11.10.07</td><td>2,960</td><td>$+$</td></tr>
            <tr><td>12.10.07</td><td>2,990</td><td>$+$</td></tr>
            <tr><td>15.10.07</td><td>3,200</td><td>$+$</td></tr>
            <tr><td>16.10.07</td><td>3,300</td><td>$+$</td></tr>
            <tr><td>17.10.07</td><td>3,450</td><td>$+$</td></tr>
            <tr><td>19.10.07</td><td>3,360</td><td>$-$</td><td rowspan="2">Run 5</td></tr>
            <tr><td>22.10.07</td><td>3,290</td><td>$-$</td></tr>
            <tr><td>23.10.07</td><td>3,360</td><td>$+$</td><td>Run 6</td></tr>
            <tr><td>24.10.07</td><td>3,340</td><td>$-$</td><td rowspan="5">Run 7</td></tr>
            <tr><td>25.10.07</td><td>3,290</td><td>$-$</td></tr>
            <tr><td>29.10.07</td><td>3,240</td><td>$-$</td></tr>
            <tr><td>30.10.07</td><td>3,140</td><td>$-$</td></tr>
            <tr><td>31.10.07</td><td>3,260</td><td>$+$</td><td>Run 8</td></tr>
          </tbody>
        </table>
      </div>

      <h4>2. Statistical Parameters</h4>
      <ul>
        <li>Number of positive price changes ($n_1$) = <strong>11</strong>[cite: 2]</li>
        <li>Number of negative price changes ($n_2$) = <strong>8</strong>[cite: 2]</li>
        <li>Total observations ($n_1 + n_2$) = $11 + 8 = \mathbf{19}$[cite: 2]</li>
        <li>Total number of runs observed ($r$) = <strong>8</strong>[cite: 2]</li>
        <li>Degrees of freedom ($n - 1$) = $19 - 1 = \mathbf{18}$[cite: 2]</li>
      </ul>

      <h4>3. Expected Mean of Runs ($\mu_r$)</h4>
      <p>$$\mu_r = \frac{2n_1n_2}{n_1 + n_2} + 1 = \frac{2 \times 11 \times 8}{11 + 8} + 1 = \frac{176}{19} + 1 = 9.263 + 1 = \mathbf{10.26}$$[cite: 2]</p>

      <h4>4. Standard Deviation of Runs ($\hat{\sigma}_r$)</h4>
      <p>$$\hat{\sigma}_r = \sqrt{\frac{2n_1n_2(2n_1n_2 - n_1 - n_2)}{(n_1 + n_2)^2(n_1 + n_2 - 1)}}$$[cite: 2]</p>
      <p>$$\hat{\sigma}_r = \sqrt{\frac{176 \times (176 - 19)}{(19)^2 \times (18)}} = \sqrt{\frac{176 \times 157}{361 \times 18}} = \sqrt{\frac{27,632}{6,498}} = \sqrt{4.2524} = \mathbf{2.06}$$[cite: 2]</p>

      <h4>5. Hypothesis Testing (Two-Tailed Limits)</h4>
      <ul>
        <li><strong>At 5% Level of Significance ($t = 2.101$):</strong>
          <p>$$\text{Lower Limit} = \mu_r - (t \times \hat{\sigma}_r) = 10.26 - (2.101 \times 2.06) = 10.26 - 4.328 = \mathbf{5.932}$$[cite: 2]</p>
          <p>$$\text{Upper Limit} = \mu_r + (t \times \hat{\sigma}_r) = 10.26 + (2.101 \times 2.06) = 10.26 + 4.328 = \mathbf{14.588}$$[cite: 2]</p>
        </li>
        <li><strong>At 10% Level of Significance ($t = 1.734$):</strong>
          <p>$$\text{Lower Limit} = \mu_r - (t \times \hat{\sigma}_r) = 10.26 - (1.734 \times 2.06) = 10.26 - 3.572 = \mathbf{6.688}$$[cite: 2]</p>
          <p>$$\text{Upper Limit} = \mu_r + (t \times \hat{\sigma}_r) = 10.26 + (1.734 \times 2.06) = 10.26 + 3.572 = \mathbf{13.832}$$[cite: 2]</p>
        </li>
      </ul>

      <h4>6. Conclusion</h4>
      <p>The actual number of runs ($r = 8$) falls comfortably within the critical boundaries at both the <strong>5% level [5.932, 14.588]</strong> and the <strong>10% level [6.688, 13.832]</strong>[cite: 2]. Therefore, the null hypothesis of independence cannot be rejected, and it is concluded that <strong>the market exhibits weak form of efficiency</strong>[cite: 2].</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH05_TYK_TH_01",
    source: "ICAI Study Material",
    chapter_name: "Security Valuation",
    placement: 1,
    marks: 4,
    question_html: `
      <p>Why should the duration of a coupon carrying bond always be less than the time to its maturity?[cite: 3]</p>
    `,
    solution_html: `
      <p><strong>Macaulay Duration</strong> represents the weighted-average maturity of a bond's cash flows, where the weights are proportional to the present value of each cash flow relative to the total bond price[cite: 3]:</p>
      <p>$$D = \\frac{\\sum_{t=1}^{n} \\frac{t \\times C_t}{(1+y)^t} + \\frac{n \\times M}{(1+y)^n}}{P_0}$$[cite: 3]</p>
      <p>For a coupon-paying bond, cash inflows are received at intermediate stages throughout the life of the bond (periodic coupon receipts) prior to final maturity[cite: 3]. Because these intermediate cash flows carry time-weights ($t = 1, 2, \\dots, n-1$) that are strictly less than the final maturity period ($n$), the weighted average time required to recover the invested capital is pulled backward[cite: 3].</p>
      <p>Consequently, the duration of a coupon-carrying bond is <strong>always strictly less than its term to maturity</strong>[cite: 3]. Only in the case of a <em>Zero-Coupon Bond (ZCB)</em>, where no intermediate cash flows occur and the entire cash inflow is realized at maturity ($t = n$), does the duration equal its maturity period[cite: 3].</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH05_TYK_TH_02",
    source: "ICAI Study Material",
    chapter_name: "Security Valuation",
    placement: 2,
    marks: 4,
    question_html: `
      <p>Write short notes on Zero Coupon Bonds.[cite: 3]</p>
    `,
    solution_html: `
      <p><strong>Zero Coupon Bonds (ZCBs)</strong>, also called deep discount bonds, are fixed-income instruments that do not pay periodic interest (coupons) during their tenure[cite: 3].</p>
      <ul>
        <li><strong>Issue Price &amp; Return:</strong> They are issued at a substantial discount to their face value and redeemed at par upon maturity[cite: 3]. The difference between the face value and the issue/purchase price represents the compound interest income accrued over the investment horizon[cite: 3].</li>
        <li><strong>No Reinvestment Risk:</strong> Because there are no interim cash flows to reinvest, an investor holding a ZCB to maturity eliminates reinvestment rate risk and locks in the promised yield to maturity (YTM)[cite: 3].</li>
        <li><strong>Duration:</strong> Because the only cash inflow occurs on the redemption date, the Macaulay duration of a zero-coupon bond is <em>identically equal to its term to maturity</em> ($D = n$)[cite: 3].</li>
        <li><strong>Issuers &amp; Planning:</strong> ZCBs are issued by sovereign governments (e.g., Treasury bills), municipal corporations, banks, and corporate entities for long-term project financing and asset-liability matching[cite: 3].</li>
      </ul>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH05_TYK_PR_01",
    source: "ICAI Study Material",
    chapter_name: "Security Valuation",
    placement: 3,
    marks: 6,
    question_html: `
      <p>A company has a book value per share of ₹ 137.80[cite: 3]. Its return on equity is 15% and it follows a policy of retaining 60% of its earnings[cite: 3]. If the Opportunity Cost of Capital is 18%, compute the price of the share today using both the <strong>Dividend Growth Model</strong> and <strong>Walter's Model</strong>[cite: 3].</p>
    `,
    solution_html: `
      <h4>1. Fundamental Financial Parameters</h4>
      <ul>
        <li>$\text{EPS} = \text{Book Value} \times \text{ROE} = ₹ 137.80 \times 15\% = \mathbf{₹ 20.67}$[cite: 3]</li>
        <li>Retention Ratio ($b$) $= 60\% = 0.60 \implies \text{Dividend Payout Ratio} (1 - b) = 40\%$[cite: 3]</li>
        <li>$\text{Dividend per Share } (D_1) = ₹ 20.67 \times 40\% = \mathbf{₹ 8.268 \approx ₹ 8.27}$[cite: 3]</li>
        <li>Growth Rate ($g$) $= b \times r = 0.60 \times 15\% = \mathbf{9\%} = 0.09$[cite: 3]</li>
        <li>Opportunity Cost of Capital ($K_e$) $= 18\% = 0.18$[cite: 3]</li>
      </ul>

      <h4>2. Valuation as per Dividend Growth Model (Gordon's Model)</h4>
      <p>$$P_0 = \frac{D_1}{K_e - g} = \frac{₹ 8.27}{0.18 - 0.09} = \frac{₹ 8.27}{0.09} = \mathbf{₹ 91.89}$$[cite: 3]</p>

      <h4>3. Valuation as per Walter's Approach</h4>
      <p>$$V_c = \frac{D + \frac{R_a}{R_c}(E - D)}{R_c}$$[cite: 3]</p>
      <p>$$V_c = \frac{8.27 + \frac{0.15}{0.18}(20.67 - 8.27)}{0.18} = \frac{8.27 + (0.8333 \times 12.40)}{0.18} = \frac{8.27 + 10.333}{0.18} = \frac{18.603}{0.18} = \mathbf{₹ 103.35}$$[cite: 3]</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH05_TYK_PR_02",
    source: "ICAI Study Material",
    chapter_name: "Security Valuation",
    placement: 4,
    marks: 8,
    question_html: `
      <p>ABC Limited's shares are currently selling at ₹ 13 per share[cite: 3]. There are 10,00,000 shares outstanding[cite: 3]. The firm is planning to raise ₹ 20 lakhs to finance a new project[cite: 3].</p>
      <p><strong>Required:</strong> What are the ex-right price of shares and the value of a right, if[cite: 3]:</p>
      <ol type="i">
        <li>The firm offers one right share for every two shares held[cite: 3].</li>
        <li>The firm offers one right share for every four shares held[cite: 3].</li>
        <li>How does the shareholders' wealth (holding 100 shares) change from (i) to (ii)? How does a right issue affect shareholders' wealth?[cite: 3]</li>
      </ol>
    `,
    solution_html: `
      <h4>(i) One Right Share for Every Two Shares Held</h4>
      <ul>
        <li>Number of new rights shares issued $= \frac{10,00,000}{2} = 5,00,000 \text{ shares}$[cite: 3]</li>
        <li>Subscription Price ($S$) $= \frac{₹ 20,00,000}{5,00,000} = \mathbf{₹ 4 \text{ per share}}$[cite: 3]</li>
        <li>$$\text{Ex-Right Price } (P_e) = \frac{(10,00,000 \times ₹ 13) + ₹ 20,00,000}{10,00,000 + 5,00,000} = \frac{₹ 1,50,00,000}{15,00,000} = \mathbf{₹ 10}$$[cite: 3]</li>
        <li>$\text{Value of a Right} = P_e - S = ₹ 10 - ₹ 4 = \mathbf{₹ 6}$[cite: 3]</li>
        <li>$\text{Value of Right on per-existing-share basis} = \frac{₹ 6}{2} = \mathbf{₹ 3}$[cite: 3]</li>
      </ul>

      <h4>(ii) One Right Share for Every Four Shares Held</h4>
      <ul>
        <li>Number of new rights shares issued $= \frac{10,00,000}{4} = 2,50,000 \text{ shares}$[cite: 3]</li>
        <li>Subscription Price ($S$) $= \frac{₹ 20,00,000}{2,50,000} = \mathbf{₹ 8 \text{ per share}}$[cite: 3]</li>
        <li>$$\text{Ex-Right Price } (P_e) = \frac{(10,00,000 \times ₹ 13) + ₹ 20,00,000}{10,00,000 + 2,50,000} = \frac{₹ 1,50,00,000}{12,50,000} = \mathbf{₹ 12}$$[cite: 3]</li>
        <li>$\text{Value of a Right} = P_e - S = ₹ 12 - ₹ 8 = \mathbf{₹ 4}$[cite: 3]</li>
        <li>$\text{Value of Right on per-existing-share basis} = \frac{₹ 4}{4} = \mathbf{₹ 1}$[cite: 3]</li>
      </ul>

      <h4>(iii) Impact on Shareholders' Wealth (Holding 100 Shares)</h4>
      <p>Wealth before rights issue: $100 \times ₹ 13 = \mathbf{₹ 1,300}$[cite: 3].</p>
      <ul>
        <li><strong>Under Option (i):</strong>
          <br />Value of post-rights holding (150 shares &times; ₹ 10) = ₹ 1,500[cite: 3]
          <br />Less: Subscription cost paid (50 shares &times; ₹ 4) = (₹ 200)[cite: 3]
          <br /><strong>Net Wealth = ₹ 1,300</strong>[cite: 3]
        </li>
        <li><strong>Under Option (ii):</strong>
          <br />Value of post-rights holding (125 shares &times; ₹ 12) = ₹ 1,500[cite: 3]
          <br />Less: Subscription cost paid (25 shares &times; ₹ 8) = (₹ 200)[cite: 3]
          <br /><strong>Net Wealth = ₹ 1,300</strong>[cite: 3]
        </li>
      </ul>
      <p><strong>Conclusion:</strong> A rights issue does not change aggregate shareholder wealth; it simply divides existing ownership across a larger number of shares[cite: 3].</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH05_TYK_PR_03",
    source: "ICAI Study Material",
    chapter_name: "Security Valuation",
    placement: 5,
    marks: 6,
    question_html: `
      <p>MNP Ltd. has declared and paid an annual dividend of ₹ 4 per share[cite: 3]. It is expected to grow @ 20% for the next two years and 10% thereafter[cite: 3]. The required rate of return of equity investors is 15%[cite: 3]. Compute the current price at which equity shares should sell[cite: 3].</p>
      <p><em>(PVIF @ 15%: Year 1 = 0.8696; Year 2 = 0.7561)</em>[cite: 3]</p>
    `,
    solution_html: `
      <h4>1. Dividend Projections</h4>
      <ul>
        <li>$D_0 = ₹ 4.00$[cite: 3]</li>
        <li>$D_1 = ₹ 4.00 \times 1.20 = \mathbf{₹ 4.80}$[cite: 3]</li>
        <li>$D_2 = ₹ 4.80 \times 1.20 = \mathbf{₹ 5.76}$[cite: 3]</li>
        <li>$D_3 = ₹ 5.76 \times 1.10 = \mathbf{₹ 6.336}$[cite: 3]</li>
      </ul>

      <h4>2. Terminal Price at Year 2 ($P_2$)</h4>
      <p>$$P_2 = \frac{D_3}{K_e - g_2} = \frac{₹ 6.336}{0.15 - 0.10} = \frac{₹ 6.336}{0.05} = \mathbf{₹ 126.72}$$[cite: 3]</p>

      <h4>3. Current Intrinsic Price ($P_0$)</h4>
      <p>$$P_0 = (D_1 \times \text{PVIF}_{15\%, 1}) + (D_2 \times \text{PVIF}_{15\%, 2}) + (P_2 \times \text{PVIF}_{15\%, 2})$$[cite: 3]</p>
      <p>$$P_0 = (4.80 \times 0.8696) + (5.76 \times 0.7561) + (126.72 \times 0.7561)$$[cite: 3]</p>
      <p>$$P_0 = 4.174 + 4.355 + 95.813 = \mathbf{₹ 104.34}$$[cite: 3]</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH05_TYK_PR_04",
    source: "ICAI Study Material",
    chapter_name: "Security Valuation",
    placement: 6,
    marks: 6,
    question_html: `
      <p>On the basis of the following information[cite: 3]:</p>
      <ul>
        <li>Current dividend ($D_0$) = ₹ 2.50[cite: 3]</li>
        <li>Discount rate ($k$) = 10.5%[cite: 3]</li>
        <li>Growth rate ($g$) = 2%[cite: 3]</li>
      </ul>
      <ol type="i">
        <li>Calculate the present value of stock of ABC Ltd.[cite: 3]</li>
        <li>Is its stock overvalued if the current stock price is ₹ 35, ROE = 9% and EPS = ₹ 2.25? Show detailed calculations using the <strong>PE Multiple Approach</strong> and the <strong>Earnings Growth Model</strong>[cite: 3].</li>
      </ol>
    `,
    solution_html: `
      <h4>(i) Present Value of Stock (Gordon Growth Model)</h4>
      <p>$$V_0 = \frac{D_0(1+g)}{K_e - g} = \frac{₹ 2.50 \times 1.02}{0.105 - 0.02} = \frac{₹ 2.55}{0.085} = \mathbf{₹ 30.00}$$[cite: 3]</p>

      <h4>(ii) Overvaluation Assessment</h4>
      <p><strong>A. Value under PE Multiple Approach:</strong></p>
      <ul>
        <li>Theoretical PE Multiple $= \frac{1}{\text{ROE}} = \frac{1}{0.09} = 11.11 \text{ times}$[cite: 3]</li>
        <li>Estimated Fair Price $= \text{EPS} \times \text{PE} = ₹ 2.25 \times 11.11 = \mathbf{₹ 25.00}$[cite: 3]</li>
        <li><em>Conclusion:</em> Since the current market price (₹ 35.00) exceeds its fair value (₹ 25.00), the stock is <strong>overvalued</strong>[cite: 3].</li>
      </ul>

      <p><strong>B. Value under Earnings Growth Model:</strong></p>
      <p>$$P_0 = \frac{\text{EPS}_1}{K_e - g} = \frac{\text{EPS}_0(1+g)}{\text{ROE} - g} = \frac{₹ 2.25 \times 1.02}{0.09 - 0.02} = \frac{₹ 2.295}{0.07} = \mathbf{₹ 32.79}$$[cite: 3]</p>
      <p><em>Conclusion:</em> Since the current market price of ₹ 35.00 is higher than ₹ 32.79, the stock is <strong>overvalued</strong>[cite: 3].</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH05_TYK_PR_05",
    source: "ICAI Study Material",
    chapter_name: "Security Valuation",
    placement: 7,
    marks: 8,
    question_html: `
      <p>X Limited just declared a dividend of ₹ 14.00 per share[cite: 3]. Mr. B is planning to purchase the share, anticipating an increase in growth rate from 8% to 9%, which will continue for three years[cite: 3]. He also expects the market price to be ₹ 360.00 after three years[cite: 3].</p>
      <p><strong>You are required to determine:</strong></p>
      <ol type="i">
        <li>The maximum amount Mr. B should pay for the share if he requires a 13% return p.a.[cite: 3]</li>
        <li>The maximum price Mr. B will be willing to pay if the 9% growth rate can be maintained indefinitely at a 13% discount rate[cite: 3].</li>
        <li>The price of the share at the end of three years, if the 9% growth rate is achieved indefinitely[cite: 3].</li>
      </ol>
      <p><em>(PVIF @ 13%: Y1 = 0.885, Y2 = 0.783, Y3 = 0.693)</em>[cite: 3]</p>
    `,
    solution_html: `
      <h4>(i) Maximum Price for 3-Year Holding Period with Target Price ₹ 360</h4>
      <ul>
        <li>$D_1 = 14.00 \times 1.09 = \mathbf{₹ 15.26}$[cite: 3]</li>
        <li>$D_2 = 15.26 \times 1.09 = \mathbf{₹ 16.63}$[cite: 3]</li>
        <li>$D_3 = 16.63 \times 1.09 = \mathbf{₹ 18.13}$[cite: 3]</li>
      </ul>
      <p>$$P_0 = (15.26 \times 0.885) + (16.63 \times 0.783) + (18.13 \times 0.693) + (360 \times 0.693)$$[cite: 3]</p>
      <p>$$P_0 = 13.50 + 13.02 + 12.56 + 249.48 = \mathbf{₹ 288.56}$$[cite: 3]</p>

      <h4>(ii) Maximum Price if 9% Growth is Maintained Indefinitely</h4>
      <p>$$P_0 = \frac{D_1}{K_e - g} = \frac{₹ 15.26}{0.13 - 0.09} = \frac{₹ 15.26}{0.04} = \mathbf{₹ 381.50}$$[cite: 3]</p>

      <h4>(iii) Expected Share Price at the End of Year 3 ($P_3$)</h4>
      <p>$$P_3 = \frac{D_4}{K_e - g} = \frac{D_3(1+g)}{K_e - g} = \frac{₹ 18.13 \times 1.09}{0.13 - 0.09} = \frac{₹ 19.76}{0.04} = \mathbf{₹ 494.00}$$[cite: 3]</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH05_TYK_PR_06",
    source: "ICAI Study Material",
    chapter_name: "Security Valuation",
    placement: 8,
    marks: 8,
    question_html: `
      <p>Piyush Loonker and Associates presently pay a dividend of ₹ 1.00 per share and has a share price of ₹ 20.00[cite: 3].</p>
      <ol type="i">
        <li>If this dividend were expected to grow at a rate of 12% per annum forever, what is the firm's required return on equity?[cite: 3]</li>
        <li>Suppose instead that dividends were expected to grow at 20% p.a. for 5 years and 10% thereafter. What is the firm's required return on equity?[cite: 3]</li>
      </ol>
    `,
    solution_html: `
      <h4>(i) Constant Growth Model</h4>
      <p>$$K_e = \frac{D_1}{P_0} + g = \frac{₹ 1.00(1 + 0.12)}{₹ 20.00} + 0.12 = \frac{₹ 1.12}{₹ 20.00} + 0.12 = 0.056 + 0.12 = \mathbf{17.60\%}$$[cite: 3]</p>

      <h4>(ii) Two-Stage Supernormal Growth Model</h4>
      <p>Dividend schedule ($D_0 = ₹ 1.00, g_s = 20\%$ for 5 years):</p>
      <ul>
        <li>$D_1 = ₹ 1.20; \quad D_2 = ₹ 1.44; \quad D_3 = ₹ 1.73; \quad D_4 = ₹ 2.07; \quad D_5 = ₹ 2.49$[cite: 3]</li>
        <li>$D_6 = D_5(1 + 0.10) = 2.49 \times 1.10 = ₹ 2.74$[cite: 3]</li>
      </ul>
      <p>We solve by trial and error to equate PV of inflows to $P_0 = ₹ 20.00$[cite: 3]:</p>
      <ul>
        <li><strong>Trial at $K_e = 18\%$:</strong>
          <br />$$\text{PV} = 1.20(0.8475) + 1.44(0.7182) + 1.73(0.6086) + 2.07(0.5158) + 2.49(0.4371) + \left[\frac{2.74}{0.18 - 0.10} \times 0.4371\right]$$[cite: 3]
          <br />$$\text{PV} = 1.017 + 1.034 + 1.053 + 1.068 + 1.088 + 14.971 = ₹ 20.23$$[cite: 3]
        </li>
        <li><strong>Trial at $K_e = 19\%$:</strong>
          <br />$$\text{PV} = 1.20(0.8403) + 1.44(0.7061) + 1.73(0.5934) + 2.07(0.4986) + 2.49(0.4190) + \left[\frac{2.74}{0.19 - 0.10} \times 0.4190\right]$$[cite: 3]
          <br />$$\text{PV} = 1.008 + 1.017 + 1.027 + 1.032 + 1.043 + 12.755 = ₹ 17.89$$[cite: 3]
        </li>
      </ul>
      <p>By interpolation[cite: 3]:</p>
      <p>$$K_e = 18\% + \left[\frac{₹ 20.23 - ₹ 20.00}{₹ 20.23 - ₹ 17.89}\right] \times (19\% - 18\%) = 18\% + \left[\frac{0.23}{2.34}\right] \times 1\% = 18\% + 0.10\% = \mathbf{18.10\%}$$[cite: 3]</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH05_TYK_PR_07",
    source: "ICAI Study Material",
    chapter_name: "Security Valuation",
    placement: 9,
    marks: 10,
    question_html: `
      <p>The capital structure of Sun Ltd. is as follows (₹ in lakhs): Equity Shares (₹ 100 each) = 80; 8% Preference Shares = 40; 12% Debentures = 64; Reserves = 32[cite: 3]. Annual profit before tax and interest is ₹ 32 lakhs; tax rate is 35%[cite: 3].</p>
      <p>Normal return on equity of comparable companies is 9.6% provided[cite: 3]:</p>
      <ul>
        <li>PAT covers fixed charges at least 3 times[cite: 3].</li>
        <li>Capital gearing ratio is 0.75[cite: 3].</li>
        <li>Yield on share is calculated at 50% on distributed profits and 5% on undistributed profits[cite: 3].</li>
      </ul>
      <p>Sun Ltd. pays an 8% equity dividend[cite: 3]. Risk premiums: 1% for every 1 time difference in coverage; 2% for every 1 time difference in gearing[cite: 3]. Compute value per equity share[cite: 3].</p>
    `,
    solution_html: `
      <h4>1. Profit Distribution Schedule</h4>
      <ul>
        <li>PBIT $= ₹ 32,00,000$[cite: 3]</li>
        <li>Less: Debenture Interest ($₹ 64,00,000 \times 12\%$) $= ₹ 7,68,000$[cite: 3]</li>
        <li>PBT $= ₹ 24,32,000$; Less: Tax @ 35% $= ₹ 8,51,200 \implies \text{PAT} = ₹ 15,80,800$[cite: 3]</li>
        <li>Less: Preference Dividend ($₹ 40,00,000 \times 8\%$) $= ₹ 3,20,000$[cite: 3]</li>
        <li>Less: Equity Dividend Paid ($₹ 80,00,000 \times 8\%$) $= ₹ 6,40,000$[cite: 3]</li>
        <li>Undistributed Profits (Retained) $= ₹ 15,80,800 - 9,60,000 = \mathbf{₹ 6,20,800}$[cite: 3]</li>
      </ul>

      <h4>2. Ratio Analysis and Risk Premium</h4>
      <ul>
        <li><strong>Fixed Charges Coverage:</strong>
          $$\frac{\text{PAT} + \text{Debenture Interest}}{\text{Debenture Interest} + \text{Pref. Dividend}} = \frac{15,80,800 + 7,68,000}{7,68,000 + 3,20,000} = \frac{23,48,800}{10,88,000} = \mathbf{2.16 \text{ times}}$$[cite: 3]
          $$\text{Risk Premium} = (3.00 - 2.16) \times 1\% = \mathbf{0.84\%}$$[cite: 3]
        </li>
        <li><strong>Capital Gearing Ratio:</strong>
          $$\frac{\text{Preference Capital} + \text{Debentures}}{\text{Equity Capital} + \text{Reserves}} = \frac{40,00,000 + 64,00,000}{80,00,000 + 32,00,000} = \frac{1,04,00,000}{1,12,00,000} = \mathbf{0.93}$$[cite: 3]
          $$\text{Risk Premium} = (0.93 - 0.75) \times 2\% = \mathbf{0.36\%}$$[cite: 3]
        </li>
        <li><strong>Expected Yield on Equity:</strong> $9.60\% + 0.84\% + 0.36\% = \mathbf{10.80\%}$[cite: 3]</li>
      </ul>

      <h4>3. Actual Yield and Valuation</h4>
      <ul>
        <li>Yield on Distributed Profits ($50\% \times ₹ 6,40,000$) $= ₹ 3,20,000$[cite: 3]</li>
        <li>Yield on Undistributed Profits ($5\% \times ₹ 6,20,800$) $= ₹ 31,040$[cite: 3]</li>
        <li>Total Yield $= ₹ 3,51,040 \implies \text{Actual Yield \%} = \frac{₹ 3,51,040}{₹ 80,00,000} \times 100 = \mathbf{4.388\% \approx 4.39\%}$[cite: 3]</li>
      </ul>
      <p>$$\text{Value per Share} = \frac{\text{Actual Yield}}{\text{Expected Yield}} \times \text{Paid-up Value} = \frac{4.39\%}{10.80\%} \times ₹ 100 = \mathbf{₹ 40.65}$$[cite: 3]</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH05_TYK_PR_08",
    source: "ICAI Study Material",
    chapter_name: "Security Valuation",
    placement: 10,
    marks: 6,
    question_html: `
      <p>ABC Ltd. has been maintaining a dividend growth rate of 10%[cite: 3]. The company paid a dividend of ₹ 3 per share[cite: 3]. Return on market portfolio is 12% and risk-free rate is 8%[cite: 3]. Beta coefficient is 1.5[cite: 3]. Calculate the expected return using CAPM and equilibrium share price using the Dividend Growth Model[cite: 3].</p>
    `,
    solution_html: `
      <h4>1. Expected Rate of Return (CAPM)</h4>
      <p>$$\text{ER} = R_f + \beta(R_m - R_f) = 8\% + 1.5(12\% - 8\%) = 8\% + 6\% = \mathbf{14\%}$$[cite: 3]</p>

      <h4>2. Equilibrium Price per Share</h4>
      <p>$$P_0 = \frac{D_1}{K_e - g} = \frac{D_0(1+g)}{K_e - g} = \frac{₹ 3(1 + 0.10)}{0.14 - 0.10} = \frac{₹ 3.30}{0.04} = \mathbf{₹ 82.50}$$[cite: 3]</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH05_TYK_PR_09",
    source: "ICAI Study Material",
    chapter_name: "Security Valuation",
    placement: 11,
    marks: 6,
    question_html: `
      <p>A Company pays a dividend of ₹ 2.00 per share with a growth rate of 7%[cite: 3]. Risk-free rate is 9% and market return is 13%[cite: 3]. Beta is 1.50, but is expected to rise to 1.75 due to a managerial decision[cite: 3]. Find the present as well as the revised value of the share[cite: 3].</p>
    `,
    solution_html: `
      <h4>1. Present Value of the Share ($\beta = 1.50$)</h4>
      <p>$$K_e = 9\% + 1.50(13\% - 9\%) = 9\% + 6\% = 15\%$$[cite: 3]</p>
      <p>$$P_0 = \frac{D_1}{K_e - g} = \frac{₹ 2.00 \times 1.07}{0.15 - 0.07} = \frac{₹ 2.14}{0.08} = \mathbf{₹ 26.75}$$[cite: 3]</p>
      <p><small><em>(Note: If $D_0 = ₹ 2.00$ is taken as $D_1$, $P_0 = \frac{2.00}{0.08} = ₹ 25.00$)</em></small>[cite: 3]</p>

      <h4>2. Revised Value of the Share ($\beta = 1.75$)</h4>
      <p>$$\text{Revised } K_e = 9\% + 1.75(13\% - 9\%) = 9\% + 7\% = 16\%$$[cite: 3]</p>
      <p>$$P_0 = \frac{₹ 2.00 \times 1.07}{0.16 - 0.07} = \frac{₹ 2.14}{0.09} = \mathbf{₹ 23.78}$$[cite: 3]</p>
      <p><small><em>(Note: If $D_1 = ₹ 2.00$, $P_0 = \frac{2.00}{0.09} = ₹ 22.22$)</em></small>[cite: 3]</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH05_TYK_PR_10",
    source: "ICAI Study Material",
    chapter_name: "Security Valuation",
    placement: 12,
    marks: 8,
    question_html: `
      <p>Calculate the value of a share from the following information[cite: 3]:</p>
      <ul>
        <li>PAT: ₹ 290 crores; Equity capital: ₹ 1,300 crores (Par ₹ 40 each)[cite: 3]</li>
        <li>Debt ratio ($\text{Debt} / [\text{Debt} + \text{Equity}]$): 27%[cite: 3]</li>
        <li>Long-run growth rate: 8%; Beta: 0.1; $R_f$: 8.7%; Market return: 10.3%[cite: 3]</li>
        <li>Per share data: Capital expenditure = ₹ 47, Depreciation = ₹ 39, Working capital change = ₹ 3.45[cite: 3]</li>
      </ul>
    `,
    solution_html: `
      <h4>1. Per Share Earnings and Free Cash Flow to Equity (FCFE)</h4>
      <ul>
        <li>Number of Shares $= \frac{₹ 1,300 \text{ crores}}{₹ 40} = 32.50 \text{ crores}$[cite: 3]</li>
        <li>$\text{EPS} = \frac{₹ 290 \text{ crores}}{32.50 \text{ crores}} = \mathbf{₹ 8.923}$[cite: 3]</li>
        <li>Equity financing proportion $= 1 - 0.27 = 0.73$[cite: 3]</li>
      </ul>
      <p>$$\text{FCFE} = \text{EPS} - [(1 - \text{Debt Ratio}) \times (\text{Capex} - \text{Dep.})] - [(1 - \text{Debt Ratio}) \times \Delta\text{WC}]$$[cite: 3]</p>
      <p>$$\text{FCFE} = 8.923 - [0.73 \times (47 - 39)] - [0.73 \times 3.45] = 8.923 - [5.84 + 2.5185] = \mathbf{₹ 0.5645}$$[cite: 3]</p>

      <h4>2. Cost of Equity and Valuation</h4>
      <p>$$K_e = 8.7\% + 0.1(10.3\% - 8.7\%) = 8.7\% + 0.16\% = \mathbf{8.86\%}$$[cite: 3]</p>
      <p>$$P_0 = \frac{\text{FCFE}_0(1 + g)}{K_e - g} = \frac{0.5645 \times 1.08}{0.0886 - 0.08} = \frac{0.60966}{0.0086} = \mathbf{₹ 70.89}$$[cite: 3]</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH05_TYK_PR_11",
    source: "ICAI Study Material",
    chapter_name: "Security Valuation",
    placement: 13,
    marks: 6,
    question_html: `
      <p>Shares of Voyage Ltd. are quoted at a PE ratio of 8 times[cite: 3]. The company retains ₹ 5 per share, which is 45% of its EPS[cite: 3]. Compute[cite: 3]:</p>
      <ol type="i">
        <li>The cost of equity if the market expects a growth rate of 15% p.a.[cite: 3]</li>
        <li>The market price if anticipated growth is 16% p.a. at the same cost of capital[cite: 3].</li>
        <li>The market price if cost of capital is 20% p.a. and growth is 19% p.a.[cite: 3]</li>
      </ol>
    `,
    solution_html: `
      <h4>1. EPS, Dividend and Market Price</h4>
      <ul>
        <li>$\text{EPS} = \frac{₹ 5}{0.45} = \mathbf{₹ 11.11}$[cite: 3]</li>
        <li>$\text{Dividend per share } (D_1) = ₹ 11.11 \times 55\% = \mathbf{₹ 6.11}$[cite: 3]</li>
        <li>$\text{Current Market Price } (P_0) = \text{EPS} \times \text{PE} = ₹ 11.11 \times 8 = \mathbf{₹ 88.88}$[cite: 3]</li>
      </ul>

      <h4>2. Sub-Questions</h4>
      <ul>
        <li><strong>(i) Cost of Equity:</strong>
          $$K_e = \frac{D_1}{P_0} + g = \frac{₹ 6.11}{₹ 88.88} + 0.15 = 0.0687 + 0.15 = \mathbf{21.87\%}$$[cite: 3]
        </li>
        <li><strong>(ii) Market Price at $g = 16\%$:</strong>
          $$P_0 = \frac{D_1}{K_e - g} = \frac{₹ 6.11}{0.2187 - 0.16} = \frac{₹ 6.11}{0.0587} = \mathbf{₹ 104.08}$$[cite: 3]
        </li>
        <li><strong>(iii) Market Price at $K_e = 20\%$ and $g = 19\%$:</strong>
          $$P_0 = \frac{₹ 6.11}{0.20 - 0.19} = \frac{₹ 6.11}{0.01} = \mathbf{₹ 611.00}$$[cite: 3]
        </li>
      </ul>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH05_TYK_PR_12",
    source: "ICAI Study Material",
    chapter_name: "Security Valuation",
    placement: 14,
    marks: 8,
    question_html: `
      <p>Financial data for PQR Ltd. (₹ in lakhs): 8% Debentures = 125, 10% Bonds = 50, Equity Shares (₹ 10 each) = 100, Reserves = 300, Total Assets = 600[cite: 3]. Asset turnover = 1.1; effective interest = 8%; tax rate = 40%; operating margin = 10%; dividend payout = 16.67%; current market price = ₹ 14; required return = 15%[cite: 3].</p>
      <ol type="i">
        <li>Draw the Income Statement[cite: 3].</li>
        <li>Calculate sustainable growth rate (SGR)[cite: 3].</li>
        <li>Calculate the fair price of the share using DDM[cite: 3].</li>
        <li>Give your opinion on investing at the current market price[cite: 3].</li>
      </ol>
    `,
    solution_html: `
      <h4>(i) Income Statement (₹ in lakhs)</h4>
      <ul>
        <li>Turnover $= ₹ 600 \times 1.1 = \mathbf{₹ 660.00}$[cite: 3]</li>
        <li>Operating Expenses (90%) $= ₹ 594.00 \implies \text{EBIT} = \mathbf{₹ 66.00}$[cite: 3]</li>
        <li>Interest [$(125 + 50) \times 8\%$] $= ₹ 14.00 \implies \text{EBT} = \mathbf{₹ 52.00}$[cite: 3]</li>
        <li>Tax @ 40% $= ₹ 20.80 \implies \text{EAT (PAT)} = \mathbf{₹ 31.20}$[cite: 3]</li>
        <li>Dividends @ 16.67% $= \mathbf{₹ 5.20}$; Retained Earnings $= \mathbf{₹ 26.00}$[cite: 3]</li>
      </ul>

      <h4>(ii) Sustainable Growth Rate (SGR)</h4>
      <p>$$\text{Net Worth} = 100 + 300 = ₹ 400 \text{ lakhs} \implies \text{ROE} = \frac{₹ 31.20}{₹ 400} = 7.80\%$$[cite: 3]</p>
      <p>$$\text{SGR} = \text{ROE} \times (1 - \text{Payout}) = 7.80\% \times (1 - 0.1667) = \mathbf{6.50\%} \quad \left(\text{or } \frac{0.078 \times 0.8333}{1 - 0.078 \times 0.8333} = \mathbf{6.95\%}\right)$$[cite: 3]</p>

      <h4>(iii) Fair Price Using DDM</h4>
      <p>$$D_0 = \frac{₹ 5.20 \text{ lakhs}}{10 \text{ lakh shares}} = ₹ 0.52$$[cite: 3]</p>
      <p>$$\text{At } g = 6.50\%: \quad P_0 = \frac{0.52 \times 1.065}{0.15 - 0.065} = \frac{0.5538}{0.085} = \mathbf{₹ 6.51}$$[cite: 3]</p>
      <p>$$\text{At } g = 6.95\%: \quad P_0 = \frac{0.52 \times 1.0695}{0.15 - 0.0695} = \frac{0.5561}{0.0805} = \mathbf{₹ 6.91}$$[cite: 3]</p>

      <h4>(iv) Investment Decision</h4>
      <p>Because the current market price (₹ 14.00) is more than double its intrinsic fair value (₹ 6.51 &ndash; ₹ 6.91), the stock is substantially <strong>overvalued</strong>[cite: 3]. The investor <strong>should not invest</strong> in the share[cite: 3].</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH05_TYK_PR_13",
    source: "ICAI Study Material",
    chapter_name: "Security Valuation",
    placement: 15,
    marks: 4,
    question_html: `
      <p>M/s X Ltd. paid a dividend of ₹ 2.50 per share (face value ₹ 10)[cite: 3]. CMP = ₹ 60, dividend growth rate = 10%, Beta = 0.75, Market return = 15%, $R_f$ = 9%[cite: 3]. Calculate the intrinsic value of the share[cite: 3].</p>
    `,
    solution_html: `
      <h4>1. Required Rate of Return (CAPM)</h4>
      <p>$$K_e = 9\% + 0.75(15\% - 9\%) = 9\% + 4.5\% = \mathbf{13.50\%}$$[cite: 3]</p>

      <h4>2. Intrinsic Value</h4>
      <p>$$P_0 = \frac{D_1}{K_e - g} = \frac{₹ 2.50 \times 1.10}{0.135 - 0.10} = \frac{₹ 2.75}{0.035} = \mathbf{₹ 78.57}$$[cite: 3]</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH05_TYK_PR_14",
    source: "ICAI Study Material",
    chapter_name: "Security Valuation",
    placement: 16,
    marks: 8,
    question_html: `
      <p>Mr. A is thinking of buying shares at ₹ 500 each (face value ₹ 100)[cite: 3]. He expects a 1:5 bonus issue in Year 4[cite: 3]. Expected dividend is 20% p.a. on original and bonus shares[cite: 3]. He plans to sell at Year 7 at ₹ 900 each[cite: 3]. Incidental costs for purchase and sale are 5% of price[cite: 3]. Minimum required return is 12% ($PVF_{12\%}: 0.893, 0.797, 0.712, 0.636, 0.567, 0.507, 0.452$)[cite: 3]. Should Mr. A buy the share, and what is the maximum price he should pay?[cite: 3]</p>
    `,
    solution_html: `
      <h4>1. Discounted Cash Flows per Share Purchased</h4>
      <ul>
        <li>Years 1 to 3: Dividend $= 20\% \times ₹ 100 = ₹ 20 \text{ p.a.}$[cite: 3]</li>
        <li>Year 4 Bonus (1 for 5): Total holding becomes $1.20 \text{ shares}$[cite: 3].</li>
        <li>Years 4 to 7: Dividend $= 1.20 \times ₹ 20 = ₹ 24 \text{ p.a.}$[cite: 3]</li>
        <li>Year 7 Sale proceeds (net of 5% transaction costs) $= 1.20 \times ₹ 900 \times 0.95 = \mathbf{₹ 1,026}$[cite: 3]</li>
      </ul>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Year</th>
              <th style="padding:6px; border:1px solid #ddd;">Cash Flow (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">PVF @ 12%</th>
              <th style="padding:6px; border:1px solid #ddd;">Present Value (₹)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>20</td><td>0.893</td><td>17.86</td></tr>
            <tr><td>2</td><td>20</td><td>0.797</td><td>15.94</td></tr>
            <tr><td>3</td><td>20</td><td>0.712</td><td>14.24</td></tr>
            <tr><td>4</td><td>24</td><td>0.636</td><td>15.26</td></tr>
            <tr><td>5</td><td>24</td><td>0.567</td><td>13.61</td></tr>
            <tr><td>6</td><td>24</td><td>0.507</td><td>12.17</td></tr>
            <tr><td>7</td><td>24</td><td>0.452</td><td>10.85</td></tr>
            <tr><td>7</td><td>1,026</td><td>0.452</td><td>463.75</td></tr>
            <tr style="font-weight:bold; background-color:#fafafa;">
              <td colspan="3">Total PV of Inflows</td>
              <td>₹ 563.68</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4>2. Decision and Maximum Purchase Price</h4>
      <ul>
        <li>Current Acquisition Cost (including 5% costs) $= ₹ 500 \times 1.05 = \mathbf{₹ 525.00}$[cite: 3]</li>
        <li>$\text{Net Gain} = ₹ 563.68 - ₹ 525.00 = \mathbf{+₹ 38.68}$[cite: 3]</li>
        <li><strong>Decision:</strong> Mr. A <strong>should buy the share</strong>[cite: 3].</li>
        <li>$$\text{Maximum Price Payable} = \frac{₹ 563.68}{1.05} = \mathbf{₹ 536.84}$$[cite: 3]</li>
      </ul>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH05_TYK_PR_15",
    source: "ICAI Study Material",
    chapter_name: "Security Valuation",
    placement: 17,
    marks: 8,
    question_html: `
      <p>For Platinum Ltd., $R_f = 9\%$, $R_m = 13\%$, dividend growth $g = 7\%$, last dividend $D_0 = ₹ 2.00$, and Beta = 1.2[cite: 3].</p>
      <ol type="i">
        <li>What is the equilibrium stock price?[cite: 3]</li>
        <li>How would the equilibrium price change when (evaluated independently)[cite: 3]:
          <ul>
            <li>Inflation premium increases by 2%?[cite: 3]</li>
            <li>Expected growth rate increases by 3%?[cite: 3]</li>
            <li>Beta rises to 1.3?[cite: 3]</li>
          </ul>
        </li>
      </ol>
    `,
    solution_html: `
      <h4>(i) Base Equilibrium Price</h4>
      <p>$$K_e = 9\% + 1.2(13\% - 9\%) = 13.80\%$$[cite: 3]</p>
      <p>$$P_0 = \frac{₹ 2.00 \times 1.07}{0.138 - 0.07} = \frac{₹ 2.14}{0.068} = \mathbf{₹ 31.47}$$[cite: 3]</p>

      <h4>(ii) Sensitivity Scenarios (Independent Analysis)</h4>
      <ul>
        <li><strong>Inflation Premium +2%:</strong>
          <br />$R_f$ becomes $11\%$, $R_m$ becomes $15\% \implies K_e = 11\% + 1.2(15\% - 11\%) = 15.80\%$[cite: 3]
          <br />$$P_0 = \frac{₹ 2.14}{0.158 - 0.07} = \frac{₹ 2.14}{0.088} = \mathbf{₹ 24.32}$$[cite: 3]
        </li>
        <li><strong>Growth Rate Increases by +3% ($g = 10\%$):</strong>
          <br />$$P_0 = \frac{₹ 2.00 \times 1.10}{0.138 - 0.10} = \frac{₹ 2.20}{0.038} = \mathbf{₹ 57.89}$$[cite: 3]
        </li>
        <li><strong>Beta Rises to 1.3:</strong>
          <br />$$K_e = 9\% + 1.3(4\%) = 14.20\% \implies P_0 = \frac{₹ 2.14}{0.142 - 0.07} = \frac{₹ 2.14}{0.072} = \mathbf{₹ 29.72}$$[cite: 3]
        </li>
      </ul>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH05_TYK_PR_16",
    source: "ICAI Study Material",
    chapter_name: "Security Valuation",
    placement: 18,
    marks: 8,
    question_html: `
      <p>SAM Ltd. has just paid a dividend of ₹ 2 per share, growing @ 6% p.a.[cite: 3] The Board decides to retain all dividends for the next 3 years to fund a project, with dividends resuming at Year 4 at ₹ 2.50 per share growing @ 7% p.a.[cite: 3] Cost of capital is 8%[cite: 3].</p>
      <p>An investor holds 1,000 shares and targets annual receipts of at least ₹ 2,000[cite: 3]. Show the impact on share price and explain how the investor can maintain cash receipts over the next 3 years[cite: 3].</p>
    `,
    solution_html: `
      <h4>1. Valuation Impact</h4>
      <ul>
        <li><strong>Without Project:</strong> $P_0 = \frac{₹ 2.00 \times 1.06}{0.08 - 0.06} = \mathbf{₹ 106.00}$[cite: 3]</li>
        <li><strong>With Project:</strong>
          <br />Price at Year 3 ($P_3$) $= \frac{D_4}{K_e - g} = \frac{₹ 2.50}{0.08 - 0.07} = \mathbf{₹ 250.00}$[cite: 3]
          <br />Current Price ($P_0$) $= \frac{₹ 250}{(1.08)^3} = \mathbf{₹ 198.46}$[cite: 3]
        </li>
      </ul>

      <h4>2. Shareholder Realization Strategy</h4>
      <ul>
        <li>Market price at end of Year 1 $= \frac{₹ 250}{(1.08)^2} = ₹ 214.33$[cite: 3]
          <br />Sell 10 shares: $10 \times ₹ 214.33 = \mathbf{₹ 2,143.30}$[cite: 3]
        </li>
        <li>Market price at end of Year 2 $= \frac{₹ 250}{1.08} = ₹ 231.48$[cite: 3]
          <br />Sell 9 shares: $9 \times ₹ 231.48 = \mathbf{₹ 2,083.32}$[cite: 3]
        </li>
        <li>Market price at end of Year 3 $= ₹ 250.00$[cite: 3]
          <br />Sell 8 shares: $8 \times ₹ 250.00 = \mathbf{₹ 2,000.00}$[cite: 3]
        </li>
      </ul>
      <p>At Year 4, the investor holds $1,000 - (10 + 9 + 8) = \mathbf{973 \text{ shares}}$[cite: 3]. Dividend received in Year 4 $= 973 \times ₹ 2.50 = \mathbf{₹ 2,432.50}$, exceeding the ₹ 2,000 target[cite: 3].</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH05_TYK_PR_17",
    source: "ICAI Study Material",
    chapter_name: "Security Valuation",
    placement: 19,
    marks: 8,
    question_html: `
      <p>XYZ Ltd. paid a dividend of ₹ 2 for the current year[cite: 3]. The dividend is expected to grow at 40% for the next 5 years and at 15% thereafter[cite: 3]. Return on 182-day T-bills is 11%, market return is 18% with a variance of 24%[cite: 3]. The covariance of XYZ's return with the market is 30%[cite: 3]. Calculate the required return and intrinsic value of the stock[cite: 3].</p>
    `,
    solution_html: `
      <h4>1. Beta and Required Rate of Return</h4>
      <p>$$\beta = \frac{\text{Covariance}(s, m)}{\text{Variance}(m)} = \frac{30\%}{24\%} = \mathbf{1.25}$$[cite: 3]</p>
      <p>$$K_e = 11\% + 1.25(18\% - 11\%) = 11\% + 8.75\% = \mathbf{19.75\%}$$[cite: 3]</p>

      <h4>2. Supernormal Dividends (Years 1-5 @ 40%)</h4>
      <ul>
        <li>$D_1 = 2 \times 1.40 = ₹ 2.80 \implies \text{PV} = 2.80 \times 0.835 = ₹ 2.34$[cite: 3]</li>
        <li>$D_2 = 2.80 \times 1.40 = ₹ 3.92 \implies \text{PV} = 3.92 \times 0.697 = ₹ 2.73$[cite: 3]</li>
        <li>$D_3 = 3.92 \times 1.40 = ₹ 5.49 \implies \text{PV} = 5.49 \times 0.582 = ₹ 3.19$[cite: 3]</li>
        <li>$D_4 = 5.49 \times 1.40 = ₹ 7.68 \implies \text{PV} = 7.68 \times 0.486 = ₹ 3.73$[cite: 3]</li>
        <li>$D_5 = 7.68 \times 1.40 = ₹ 10.76 \implies \text{PV} = 10.76 \times 0.406 = ₹ 4.37$[cite: 3]</li>
        <li>$\text{Total PV of Dividends (Years 1-5)} = \mathbf{₹ 16.36}$[cite: 3]</li>
      </ul>

      <h4>3. Terminal Value and Total Intrinsic Value</h4>
      <p>$$P_5 = \frac{D_6}{K_e - g_n} = \frac{10.76 \times 1.15}{0.1975 - 0.15} = \frac{12.374}{0.0475} = ₹ 260.505$$[cite: 3]</p>
      <p>$$\text{PV of Terminal Value} = ₹ 260.505 \times 0.406 = \mathbf{₹ 105.77}$$[cite: 3]</p>
      <p>$$\text{Total Intrinsic Value} = ₹ 16.36 + ₹ 105.77 = \mathbf{₹ 122.13}$$[cite: 3]</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH05_TYK_PR_18",
    source: "ICAI Study Material",
    chapter_name: "Security Valuation",
    placement: 20,
    marks: 6,
    question_html: `
      <p>Rahul Ltd. has surplus cash of ₹ 100 lakhs and wants to distribute 27% of it to shareholders via a share buyback[cite: 3]. Post-buyback share price is expected to be 10% above buyback price[cite: 3]. Current shares outstanding = 10 lakhs; current EPS = ₹ 3[cite: 3].</p>
      <ol type="i">
        <li>Find the buyback price if post-buyback market capitalization is ₹ 210 lakhs[cite: 3].</li>
        <li>Number of shares repurchased[cite: 3].</li>
        <li>Impact of share buyback on EPS (net income remains constant)[cite: 3].</li>
      </ol>
    `,
    solution_html: `
      <h4>(i) Buyback Price per Share ($P$)</h4>
      <p>Total funds allocated for buyback $= 27\% \times ₹ 100 \text{ lakhs} = ₹ 27 \text{ lakhs}$[cite: 3].</p>
      <p>$$\text{Post-Buyback Price} = 1.10 P$$[cite: 3]</p>
      <p>$$\text{Post-Buyback Shares} = 10,00,000 - \frac{₹ 27,00,000}{P}$$[cite: 3]</p>
      <p>$$1.10 P \times \left(10,00,000 - \frac{27,00,000}{P}\right) = ₹ 2,10,00,000$$[cite: 3]</p>
      <p>$$11,00,000 P - 29,70,000 = 2,10,00,000 \implies 11,00,000 P = 2,39,70,000$$[cite: 3]</p>
      <p>$$P = \frac{2,39,70,000}{11,00,000} = \mathbf{₹ 21.79 \text{ per share}}$$[cite: 3]</p>

      <h4>(ii) Number of Shares Repurchased</h4>
      <p>$$\text{Shares Repurchased} = \frac{₹ 27,00,000}{₹ 21.79} \approx \mathbf{1,23,910 \text{ shares (1.24 lakhs)}}[cite: 3]$$</p>

      <h4>(iii) Impact on EPS</h4>
      <ul>
        <li>Total Earnings $= 10,00,000 \times ₹ 3 = ₹ 30,00,000$[cite: 3]</li>
        <li>Remaining Shares $= 10,00,000 - 1,23,910 = 8,76,090 \text{ shares}$[cite: 3]</li>
        <li>$$\text{New EPS} = \frac{₹ 30,00,000}{8,76,090} = \mathbf{₹ 3.43}$$[cite: 3]</li>
      </ul>
      <p>EPS increases from <strong>₹ 3.00 to ₹ 3.43</strong>[cite: 3].</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH05_TYK_PR_19",
    source: "ICAI Study Material",
    chapter_name: "Security Valuation",
    placement: 21,
    marks: 6,
    question_html: `
      <p>Nominal value of 10% bonds issued by a company is ₹ 100, redeemable at ₹ 110 at the end of Year 5[cite: 3]. Determine the value of the bond if the required yield is[cite: 3]:</p>
      <ol type="i">
        <li>5% ($PVAF = 4.330, PVF_5 = 0.784$)[cite: 3]</li>
        <li>5.1% ($PVAF = 4.317, PVF_5 = 0.780$)[cite: 3]</li>
        <li>10% ($PVAF = 3.791, PVF_5 = 0.621$)[cite: 3]</li>
        <li>10.1% ($PVAF = 3.781, PVF_5 = 0.618$)[cite: 3]</li>
      </ol>
    `,
    solution_html: `
      <p>Annual Coupon $= 10\% \times ₹ 100 = ₹ 10$; Redemption Value $= ₹ 110$[cite: 3].</p>
      <ul>
        <li><strong>(i) At 5% Yield:</strong>
          $$V = (10 \times 4.330) + (110 \times 0.784) = 43.30 + 86.24 = \mathbf{₹ 129.54}$$[cite: 3]
        </li>
        <li><strong>(ii) At 5.1% Yield:</strong>
          $$V = (10 \times 4.317) + (110 \times 0.780) = 43.17 + 85.80 = \mathbf{₹ 128.97}$$[cite: 3]
        </li>
        <li><strong>(iii) At 10% Yield:</strong>
          $$V = (10 \times 3.791) + (110 \times 0.621) = 37.91 + 68.31 = \mathbf{₹ 106.22}$$[cite: 3]
        </li>
        <li><strong>(iv) At 10.1% Yield:</strong>
          $$V = (10 \times 3.781) + (110 \times 0.618) = 37.81 + 67.98 = \mathbf{₹ 105.79}$$[cite: 3]
        </li>
      </ul>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH05_TYK_PR_20",
    source: "ICAI Study Material",
    chapter_name: "Security Valuation",
    placement: 22,
    marks: 6,
    question_html: `
      <p>An investor is considering the purchase of a 3-year bond: Face value ₹ 100, Coupon rate 11%[cite: 3].</p>
      <ol type="i">
        <li>If he wants a yield of 13%, what is the maximum price he should pay? ($PVAF_{13\%, 3} = 2.361, PVF_{13\%, 3} = 0.693$)[cite: 3]</li>
        <li>If the bond is selling for ₹ 97.60, what would be his yield? ($PVAF_{12\%, 3} = 2.402, PVF_{12\%, 3} = 0.712$)[cite: 3]</li>
      </ol>
    `,
    solution_html: `
      <h4>(i) Maximum Purchase Price at 13% Yield</h4>
      <p>$$P_0 = (₹ 11 \times 2.361) + (₹ 100 \times 0.693) = 25.97 + 69.30 = \mathbf{₹ 95.27}$$[cite: 3]</p>

      <h4>(ii) Yield to Maturity (YTM) at Price ₹ 97.60</h4>
      <p>Testing at 12% discount rate[cite: 3]:</p>
      <p>$$P = (11 \times 2.402) + (100 \times 0.712) = 26.422 + 71.20 = \mathbf{₹ 97.62}$$[cite: 3]</p>
      <p>Because the market price of ₹ 97.60 is almost identical to ₹ 97.62, the <strong>YTM is 12%</strong>[cite: 3].</p>
      <p><em>(Using approximation formula: $\text{YTM} \approx \frac{11 + \frac{100 - 97.60}{3}}{\frac{100 + 97.60}{2}} = \frac{11 + 0.80}{98.80} = \mathbf{11.94\% \approx 12\%}$)[cite: 3]</em></p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH05_TYK_PR_21",
    source: "ICAI Study Material",
    chapter_name: "Security Valuation",
    placement: 23,
    marks: 6,
    question_html: `
      <p>Calculate the Market Price of[cite: 3]:</p>
      <ol type="i">
        <li>10% Government of India security currently quoted at ₹ 110 (Face Value ₹ 100), but yield is expected to go up by 1%[cite: 3].</li>
        <li>A bond with 7.5% coupon interest, Face Value ₹ 10,000, term to maturity 2 years, presently yielding 6% (interest payable semi-annually)[cite: 3].</li>
      </ol>
    `,
    solution_html: `
      <h4>(i) Perpetual GOI Security Price</h4>
      <ul>
        <li>Current Yield $= \frac{\text{Coupon}}{\text{Market Price}} \times 100 = \frac{10}{110} \times 100 = 9.09\%$[cite: 3]</li>
        <li>Expected Yield $= 9.09\% + 1.00\% = 10.09\%$[cite: 3]</li>
        <li>$$\text{New Market Price} = \frac{\text{Coupon}}{\text{New Yield}} = \frac{₹ 10}{0.1009} = \mathbf{₹ 99.11}$$[cite: 3]</li>
      </ul>

      <h4>(ii) Semi-Annual Coupon Bond Valuation</h4>
      <ul>
        <li>Semi-annual coupon ($I/2$) $= \frac{7.5\% \times ₹ 10,000}{2} = ₹ 375$[cite: 3]</li>
        <li>Semi-annual yield ($k_d/2$) $= \frac{6\%}{2} = 3\%$[cite: 3]</li>
        <li>Periods ($2n$) $= 2 \times 2 = 4 \text{ periods}$[cite: 3]</li>
      </ul>
      <p>$$P_0 = (375 \times \text{PVIFA}_{3\%, 4}) + (10,000 \times \text{PVIF}_{3\%, 4})$$[cite: 3]</p>
      <p>$$P_0 = (375 \times 3.7171) + (10,000 \times 0.888487) = 1,393.91 + 8,884.87 = \mathbf{₹ 10,279}$$[cite: 3]</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH05_TYK_PR_22",
    source: "ICAI Study Material",
    chapter_name: "Security Valuation",
    placement: 24,
    marks: 4,
    question_html: `
      <p>A convertible bond with face value ₹ 1,000 is issued at ₹ 1,350 with a coupon rate of 10.5%[cite: 3]. Conversion rate is 14 shares per bond[cite: 3]. Current market price of the bond is ₹ 1,475 and that of the share is ₹ 80[cite: 3]. What is the premium over conversion value?[cite: 3]</p>
    `,
    solution_html: `
      <ul>
        <li>Conversion Value $= 14 \text{ shares} \times ₹ 80 = \mathbf{₹ 1,120}$[cite: 3]</li>
        <li>Market Price of Convertible Bond $= \mathbf{₹ 1,475}$[cite: 3]</li>
        <li>$$\text{Premium over Conversion Value} = \frac{₹ 1,475 - ₹ 1,120}{₹ 1,120} \times 100 = \frac{₹ 355}{₹ 1,120} \times 100 = \mathbf{31.70\%}$$[cite: 3]</li>
      </ul>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH05_TYK_PR_23",
    source: "ICAI Study Material",
    chapter_name: "Security Valuation",
    placement: 25,
    marks: 6,
    question_html: `
      <p>Saranam Ltd. has issued convertible debentures with a coupon rate of 12%[cite: 3]. Each debenture converts into 20 equity shares at any time until maturity[cite: 3]. Debentures are redeemed at ₹ 100 on maturity after 5 years[cite: 3]. Required return is 8% ($PVAF_{8\%, 5} = 3.993, PVF_{8\%, 5} = 0.681$)[cite: 3]. When will you exercise conversion for equity share prices of (i) ₹ 4, (ii) ₹ 5, and (iii) ₹ 6?[cite: 3]</p>
    `,
    solution_html: `
      <h4>1. Straight Bond Value (Without Conversion)</h4>
      <p>$$V = (₹ 12 \times 3.993) + (₹ 100 \times 0.681) = 47.916 + 68.10 = \mathbf{₹ 116.02}$$[cite: 3]</p>

      <h4>2. Conversion Value Comparison</h4>
      <ul>
        <li>(i) At Share Price ₹ 4: Conversion Value $= 20 \times ₹ 4 = \mathbf{₹ 80}$[cite: 3]</li>
        <li>(ii) At Share Price ₹ 5: Conversion Value $= 20 \times ₹ 5 = \mathbf{₹ 100}$[cite: 3]</li>
        <li>(iii) At Share Price ₹ 6: Conversion Value $= 20 \times ₹ 6 = \mathbf{₹ 120}$[cite: 3]</li>
      </ul>
      <p><strong>Decision:</strong> The investor should only exercise conversion when the equity share price reaches <strong>₹ 6</strong>, because only then does the conversion value (₹ 120) exceed the straight value of the debenture (₹ 116.02)[cite: 3].</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH05_TYK_PR_24",
    source: "ICAI Study Material",
    chapter_name: "Security Valuation",
    placement: 26,
    marks: 6,
    question_html: `
      <p>Data relates to a convertible bond: Face value = ₹ 250, Coupon = 12%, Shares per bond = 20, Market price of share = ₹ 12, Straight value of bond = ₹ 235, Market price of convertible bond = ₹ 265[cite: 3]. Calculate[cite: 3]:</p>
      <ol type="i">
        <li>Stock value of bond[cite: 3].</li>
        <li>Percentage downside risk[cite: 3].</li>
        <li>Conversion premium[cite: 3].</li>
        <li>Conversion parity price of the stock[cite: 3].</li>
      </ol>
    `,
    solution_html: `
      <ul>
        <li><strong>(i) Stock Value (Conversion Value):</strong>
          $$20 \text{ shares} \times ₹ 12 = \mathbf{₹ 240}$$[cite: 3]
        </li>
        <li><strong>(ii) Downside Risk (%):</strong>
          $$\frac{₹ 265 - ₹ 235}{₹ 235} \times 100 = \mathbf{12.77\%} \quad \left(\text{or } \frac{₹ 265 - ₹ 235}{₹ 265} \times 100 = \mathbf{11.32\%}\right)$$[cite: 3]
        </li>
        <li><strong>(iii) Conversion Premium:</strong>
          $$\frac{₹ 265 - ₹ 240}{₹ 240} \times 100 = \frac{₹ 25}{₹ 240} \times 100 = \mathbf{10.42\%}$$[cite: 3]
        </li>
        <li><strong>(iv) Conversion Parity Price:</strong>
          $$\frac{\text{Bond Price}}{\text{No. of Shares}} = \frac{₹ 265}{20} = \mathbf{₹ 13.25}$$[cite: 3]
        </li>
      </ul>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH05_TYK_PR_25",
    source: "ICAI Study Material",
    chapter_name: "Security Valuation",
    placement: 27,
    marks: 8,
    question_html: `
      <p>ABC Ltd. has ₹ 300 million, 12% bonds outstanding with 6 years to maturity[cite: 3]. It plans to refund these with a new ₹ 300 million issue of 6-year, 10% bonds[cite: 3]. Issue cost of new bonds is ₹ 6 million and call premium is 4%[cite: 3]. Unamortized issue cost of old bonds is ₹ 9 million, write-off immediately upon call[cite: 3]. Tax rate is 30%[cite: 3]. Analyse the bond refunding decision ($PVIFA_{7\%, 6} = 4.766$)[cite: 3].</p>
    `,
    solution_html: `
      <h4>1. Initial Net Outlay</h4>
      <ul>
        <li>Call price of old bonds (Face Value ₹ 300m + 4% Premium) $= ₹ 312.00\text{m}$[cite: 3]</li>
        <li>Less: Net proceeds of new issue ($₹ 300\text{m} - ₹ 6\text{m}$) $= ₹ 294.00\text{m}$[cite: 3]</li>
        <li>Less: Tax saving on call premium &amp; unamortized cost $[30\% \times (12 + 9)] = ₹ 6.30\text{m}$[cite: 3]</li>
        <li>$$\text{Initial Net Outlay} = 312.00 - 294.00 - 6.30 = \mathbf{₹ 11.70 \text{ million}}$$[cite: 3]</li>
      </ul>

      <h4>2. Annual Cash Inflow from Refunding</h4>
      <ul>
        <li>Annual interest savings: $₹ 300\text{m} \times (12\% - 10\%) = ₹ 6.00\text{m}$[cite: 3]</li>
        <li>Less: Tax impact on interest and issue cost amortization:
          $$30\% \times \left[6.00 + \frac{9 - 6}{6}\right] = 30\% \times [6.00 + 0.50] = ₹ 1.95\text{m}$$[cite: 3]
        </li>
        <li>Annual Net Cash Savings $= ₹ 6.00\text{m} - ₹ 1.95\text{m} = \mathbf{₹ 4.05 \text{ million}}$[cite: 3]</li>
      </ul>

      <h4>3. NPV of Refunding</h4>
      <p>After-tax discount rate $= 10\% \times (1 - 0.30) = \mathbf{7\%}$[cite: 3].</p>
      <p>$$\text{PV of Annual Savings} = ₹ 4.05\text{m} \times 4.766 = ₹ 19.30 \text{ million}$$[cite: 3]</p>
      <p>$$\text{NPV} = ₹ 19.30\text{m} - ₹ 11.70\text{m} = \mathbf{+₹ 7.60 \text{ million}}$$[cite: 3]</p>
      <p><strong>Decision:</strong> The bonds <strong>should be refunded</strong> because the net present value is positive[cite: 3].</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH05_TYK_PR_26",
    source: "ICAI Study Material",
    chapter_name: "Security Valuation",
    placement: 28,
    marks: 8,
    question_html: `
      <p>A bond has Face Value = ₹ 1,000, Coupon = 16%, Maturity = 6 years, Redemption = ₹ 1,000, and YTM = 17%[cite: 3]. Calculate the current market price, duration, and volatility of this bond[cite: 3]. Calculate the expected market price if required yield increases by 75 basis points[cite: 3].</p>
    `,
    solution_html: `
      <h4>1. Market Price of the Bond ($P_0$)</h4>
      <p>$$P_0 = (₹ 160 \times \text{PVIFA}_{17\%, 6}) + (₹ 1,000 \times \text{PVIF}_{17\%, 6}) = (160 \times 3.589) + (1,000 \times 0.390) = 574.24 + 390 = \mathbf{₹ 964.24 \approx ₹ 964.40}$$[cite: 3]</p>

      <h4>2. Macaulay Duration Schedule</h4>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Year ($t$)</th>
              <th style="padding:6px; border:1px solid #ddd;">Cash Flow (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">PVF @ 17%</th>
              <th style="padding:6px; border:1px solid #ddd;">PV (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">Weight ($PV / P_0$)</th>
              <th style="padding:6px; border:1px solid #ddd;">$t \times \text{Weight}$</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>160</td><td>0.855</td><td>136.80</td><td>0.142</td><td>0.142</td></tr>
            <tr><td>2</td><td>160</td><td>0.731</td><td>116.96</td><td>0.121</td><td>0.246</td></tr>
            <tr><td>3</td><td>160</td><td>0.624</td><td>99.84</td><td>0.103</td><td>0.309</td></tr>
            <tr><td>4</td><td>160</td><td>0.534</td><td>85.44</td><td>0.089</td><td>0.356</td></tr>
            <tr><td>5</td><td>160</td><td>0.456</td><td>72.96</td><td>0.076</td><td>0.380</td></tr>
            <tr><td>6</td><td>1,160</td><td>0.390</td><td>452.40</td><td>0.469</td><td>2.814</td></tr>
            <tr style="font-weight:bold; background-color:#fafafa;">
              <td colspan="3">Total</td>
              <td>964.40</td>
              <td>1.000</td>
              <td>4.247</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>$$\text{Macaulay Duration } (D) = \mathbf{4.247 \text{ years}} \quad (\text{or } 4.242 \text{ years})$$[cite: 3]</p>

      <h4>3. Volatility (Modified Duration) and Price Impact</h4>
      <p>$$\text{Modified Duration} = \frac{D}{1 + \text{YTM}} = \frac{4.247}{1.17} = \mathbf{3.63\%}$$[cite: 3]</p>
      <p>For an increase in yield of $\Delta y = +0.75\%$ (+75 bps)[cite: 3]:</p>
      <p>$$\text{Expected Price Decline} = ₹ 964.40 \times (3.63\% \times 0.75) = \mathbf{₹ 26.26}$$[cite: 3]</p>
      <p>$$\text{Expected Market Price} = ₹ 964.40 - ₹ 26.26 = \mathbf{₹ 938.14} \quad (\text{or } ₹ 934.12)[cite: 3]$$</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH05_TYK_PR_27",
    source: "ICAI Study Material",
    chapter_name: "Security Valuation",
    placement: 29,
    marks: 8,
    question_html: `
      <p>Mr. A needs ₹ 1,00,000 after two years[cite: 3]. Details of two available bonds[cite: 3]:</p>
      <ul>
        <li>Bond X: Face Value = ₹ 1,000, Coupon = 7%, Maturity = 1 yr, Price = ₹ 972.73, Yield = 10%[cite: 3]</li>
        <li>Bond Y: Face Value = ₹ 1,000, Coupon = 8%, Maturity = 4 yrs, Price = ₹ 936.52, Yield = 10%[cite: 3]</li>
      </ul>
      <p>Advise whether he should invest in one or both bonds and in what proportion to immunize his portfolio[cite: 3].</p>
    `,
    solution_html: `
      <h4>1. Duration of Bonds</h4>
      <ul>
        <li><strong>Bond X:</strong> Matures in 1 year $\implies D_X = \mathbf{1.00 \text{ year}}$[cite: 3].</li>
        <li><strong>Bond Y:</strong>
          <br />$D_Y = \frac{80(0.909)(1) + 80(0.826)(2) + 80(0.751)(3) + 1,080(0.683)(4)}{₹ 936.52} = \frac{72.72 + 132.16 + 180.24 + 2,950.56}{936.52} = \mathbf{3.563 \text{ years}}$[cite: 3]
        </li>
      </ul>

      <h4>2. Immunization Portfolio Allocation</h4>
      <p>Target duration $= 2.0 \text{ years}$[cite: 3]. Let $w_1$ be the weight of Bond X[cite: 3]:</p>
      <p>$$2.0 = w_1(1.0) + (1 - w_1)(3.563) \implies 2.563 w_1 = 1.563 \implies w_1 = \mathbf{0.61 \text{ (61\%)}}$$[cite: 3]</p>
      <p>$$\text{Weight of Bond Y } (w_2) = 1 - 0.61 = \mathbf{0.39 \text{ (39\%)}}$$[cite: 3]</p>

      <h4>3. Investment and Number of Bonds</h4>
      <p>$$\text{Total PV needed today} = \frac{₹ 1,00,000}{(1.10)^2} = ₹ 1,00,000 \times 0.826 = \mathbf{₹ 82,600}$$[cite: 3]</p>
      <ul>
        <li>Investment in Bond X $= ₹ 82,600 \times 61\% = ₹ 50,386 \implies \frac{₹ 50,386}{₹ 972.73} \approx \mathbf{52 \text{ bonds}}$[cite: 3]</li>
        <li>Investment in Bond Y $= ₹ 82,600 \times 39\% = ₹ 32,214 \implies \frac{₹ 32,214}{₹ 936.52} \approx \mathbf{34 \text{ bonds}}$[cite: 3]</li>
      </ul>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH05_TYK_PR_28",
    source: "ICAI Study Material",
    chapter_name: "Security Valuation",
    placement: 30,
    marks: 4,
    question_html: `
      <p>RBI sold a 91-day T-bill of face value ₹ 100 at a yield of 6%[cite: 3]. What was the issue price?[cite: 3]</p>
    `,
    solution_html: `
      <p>$$Y = \left[\frac{F - P}{P}\right] \times \frac{365}{M} \times 100$$[cite: 3]</p>
      <p>$$6 = \left[\frac{100 - P}{P}\right] \times \frac{365}{91} \times 100$$[cite: 3]</p>
      <p>$$0.06 \times 91 \times P = 365(100 - P) \implies 5.46 P = 36,500 - 365 P$$[cite: 3]</p>
      <p>$$370.46 P = 36,500 \implies P = \frac{36,500}{370.46} = \mathbf{₹ 98.53}$$[cite: 3]</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH05_TYK_PR_29",
    source: "ICAI Study Material",
    chapter_name: "Security Valuation",
    placement: 31,
    marks: 6,
    question_html: `
      <p>Wonderland Limited has excess cash of ₹ 20 lakhs to invest in short-term marketable securities yielding 9% p.a.[cite: 3] Expenses relating to the investment are ₹ 50,000[cite: 3]. Advise[cite: 3]:</p>
      <ol type="i">
        <li>The period of investment required to earn a pre-tax income of 5%[cite: 3].</li>
        <li>The minimum holding period to break even on investment expenditure[cite: 3].</li>
      </ol>
    `,
    solution_html: `
      <h4>(i) Investment Period for 5% Pre-Tax Income</h4>
      <p>Target Return $= 5\% \times ₹ 20,00,000 = ₹ 1,00,000$[cite: 3].</p>
      <p>$$\left(₹ 20,00,000 \times 9\% \times \frac{P}{12}\right) - ₹ 50,000 = ₹ 1,00,000$$[cite: 3]</p>
      <p>$$15,000 P = 1,50,000 \implies P = \mathbf{10 \text{ months}}$$[cite: 3]</p>

      <h4>(ii) Minimum Period to Break Even</h4>
      <p>$$\left(₹ 20,00,000 \times 9\% \times \frac{P}{12}\right) - ₹ 50,00,000 \times 10^{-2} = 0$$[cite: 3]</p>
      <p>$$15,000 P = 50,000 \implies P = \frac{50,000}{15,000} = \mathbf{3.33 \text{ months (approx. 100 days)}}$$[cite: 3]</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH05_TYK_PR_30",
    source: "ICAI Study Material",
    chapter_name: "Security Valuation",
    placement: 32,
    marks: 4,
    question_html: `
      <p>Z Co. Ltd. issued Commercial Paper worth ₹ 10 crores on 16th January 2019, maturing on 17th April 2019 (91 days) at 12.04% p.a.[cite: 3] What was the net amount received on issue?[cite: 3]</p>
    `,
    solution_html: `
      <p>$$\text{Discount for 91 days} = 12.04\% \times \frac{91}{365} = 3.002\%$$[cite: 3]</p>
      <p>$$\text{Net Proceeds} = \frac{₹ 10.00 \text{ crores}}{1 + 0.03002} = \mathbf{₹ 9.70855 \text{ crores}}$$[cite: 3]</p>
      <p><em>(Alternatively: $\text{Discount} = ₹ 10 \text{ crores} \times \frac{3.002}{103.002} = ₹ 0.29151 \text{ crores} \implies \text{Net} = \mathbf{₹ 9.70849 \text{ crores}}$)</em>[cite: 3]</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH05_TYK_PR_31",
    source: "ICAI Study Material",
    chapter_name: "Security Valuation",
    placement: 33,
    marks: 6,
    question_html: `
      <p>Bank A enters into a 14-day Repo with Bank B in 10% GOI Bonds 2028 @ 5.65% for ₹ 8 crores[cite: 3]. Clean price = ₹ 99.42, initial margin = 2%, days of accrued interest = 262 days (assume 360-day year)[cite: 3]. Determine[cite: 3]:</p>
      <ol type="i">
        <li>Dirty Price[cite: 3]</li>
        <li>Repayment at maturity[cite: 3]</li>
      </ol>
    `,
    solution_html: `
      <h4>(i) Dirty Price per Bond</h4>
      <p>$$\text{Accrued Interest} = 100 \times 10\% \times \frac{262}{360} = \mathbf{₹ 7.278}$$[cite: 3]</p>
      <p>$$\text{Dirty Price} = \text{Clean Price} + \text{Accrued Interest} = 99.42 + 7.278 = \mathbf{₹ 106.698 \approx ₹ 106.70}$$[cite: 3]</p>

      <h4>(ii) Settlement Legs</h4>
      <ul>
        <li><strong>First Leg (Start Proceeds):</strong>
          $$\text{Start Proceeds} = \text{Nominal Value} \times \frac{\text{Dirty Price}}{100} \times \frac{100 - \text{Initial Margin}}{100}$$[cite: 3]
          $$\text{Start Proceeds} = ₹ 8,00,00,000 \times \frac{106.70}{100} \times \frac{98}{100} = \mathbf{₹ 8,36,52,800}$$[cite: 3]
        </li>
        <li><strong>Second Leg (Repayment at Maturity):</strong>
          $$\text{Repayment} = \text{Start Proceeds} \times \left[1 + \text{Repo Rate} \times \frac{\text{No. of Days}}{360}\right]$$[cite: 3]
          $$\text{Repayment} = ₹ 8,36,52,800 \times \left[1 + 0.0565 \times \frac{14}{360}\right] = ₹ 8,36,52,800 \times 1.0021972 = \mathbf{₹ 8,38,36,604}$$[cite: 3]
        </li>
      </ul>
    `
  },
  // chapter6
  {
    question_id: "AFM_ICAIBOOK_CH06_ILLUS_01",
    source: "ICAI Study Material",
    chapter_name: "Portfolio Management",
    placement: 1,
    marks: 8,
    question_html: `
      <p>The following details are given for X and Y companies' stocks and the Bombay Sensex for a period of one year:</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Particulars</th>
              <th style="padding:6px; border:1px solid #ddd;">X Stock</th>
              <th style="padding:6px; border:1px solid #ddd;">Y Stock</th>
              <th style="padding:6px; border:1px solid #ddd;">Sensex</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Average Return</td><td>0.15</td><td>0.25</td><td>0.06</td></tr>
            <tr><td>Variance of Return</td><td>6.30</td><td>5.86</td><td>2.25</td></tr>
            <tr><td>Beta (&beta;)</td><td>0.71</td><td>0.685</td><td>—</td></tr>
            <tr><td>Correlation Coefficient</td><td>0.424</td><td>—</td><td>—</td></tr>
            <tr><td>Coefficient of Determination (r<sup>2</sup>)</td><td>0.18</td><td>—</td><td>—</td></tr>
          </tbody>
        </table>
      </div>
      <p>Calculate the systematic and unsystematic risk for the companies' stocks. If an equal amount of money is allocated to both stocks, what would be the portfolio risk?</p>
    `,
    solution_html: `
      <h4>1. Risk Decomposition for Individual Stocks</h4>
      <p>$$\\text{Systematic Risk} = \\beta_i^2 \\times \\sigma_m^2$$</p>
      <p>$$\\text{Unsystematic Risk } (\\sigma_{ei}^2) = \\text{Total Variance} - \\text{Systematic Risk}$$</p>
      
      <p><strong>Company X:</strong></p>
      <ul>
        <li>Systematic Risk $= (0.71)^2 \\times 2.25 = 0.5041 \\times 2.25 = \\mathbf{1.134}$</li>
        <li>Unsystematic Risk $= 6.30 - 1.134 = \\mathbf{5.166}$[cite: 4]
          <br /><small><em>(Alternatively: $6.30 \\times (1 - r^2) = 6.30 \\times (1 - 0.18) = 5.166$)</em></small>[cite: 4]
        </li>
        <li>Total Risk $= 1.134 + 5.166 = \\mathbf{6.30}$[cite: 4]</li>
      </ul>

      <p><strong>Company Y:</strong></p>
      <ul>
        <li>Systematic Risk $= (0.685)^2 \\times 2.25 = 0.469225 \\times 2.25 = \\mathbf{1.056}$[cite: 4]</li>
        <li>Unsystematic Risk $= 5.86 - 1.056 = \\mathbf{4.804}$[cite: 4]</li>
        <li>Total Risk $= 1.056 + 4.804 = \\mathbf{5.86}$[cite: 4]</li>
      </ul>

      <h4>2. Portfolio Risk Under Equal Weights ($w_X = 0.5, w_Y = 0.5$)</h4>
      <p>$$\\sigma_p^2 = \\left[\\sum w_i \\beta_i\\right]^2 \\sigma_m^2 + \\sum w_i^2 \\sigma_{ei}^2$$[cite: 4]</p>
      <p>$$\\beta_p = (0.5 \\times 0.71) + (0.5 \\times 0.685) = 0.355 + 0.3425 = 0.6975$$[cite: 4]</p>
      <p>$$\\text{Systematic Variance of Portfolio} = (0.6975)^2 \\times 2.25 = 0.486506 \\times 2.25 = \\mathbf{1.0946}$$[cite: 4]</p>
      <p>$$\\text{Unsystematic Variance of Portfolio} = (0.5)^2(5.166) + (0.5)^2(4.804) = 1.2915 + 1.201 = \\mathbf{2.4925 \\approx 2.493}$$[cite: 4]</p>
      <p>$$\\sigma_p^2 = 1.0946 + 2.493 = \\mathbf{3.5876}$$[cite: 4]</p>
      <p>$$\\sigma_p = \\sqrt{3.5876} = \\mathbf{1.894}$$</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH06_ILLUS_02",
    source: "ICAI Study Material",
    chapter_name: "Portfolio Management",
    placement: 2,
    marks: 4,
    question_html: `
      <p>A company's beta is 1.40[cite: 4]. The market return is 14% and the risk-free rate is 10%[cite: 4].</p>
      <ol type="i">
        <li>What is the expected return of the company's stock based on CAPM?[cite: 4]</li>
        <li>If the risk premium on the market goes up by 2.50% points, what would be the revised expected return on this stock?[cite: 4]</li>
      </ol>
    `,
    solution_html: `
      <h4>(i) Expected Return Based on CAPM</h4>
      <p>$$R_j = R_f + \\beta(R_m - R_f) = 10\\% + 1.40(14\\% - 10\\%) = 10\\% + 5.60\\% = \\mathbf{15.60\\%}$$[cite: 4]</p>

      <h4>(ii) Revised Expected Return if Market Risk Premium Increases by 2.50%</h4>
      <p>$$\\text{New Market Risk Premium} = (14\\% - 10\\%) + 2.50\\% = 4\\% + 2.50\\% = 6.50\\%$$[cite: 4]</p>
      <p>$$R_j = 10\\% + 1.40(6.50\\%) = 10\\% + 9.10\\% = \\mathbf{19.10\\%}$$[cite: 4]</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH06_ILLUS_03",
    source: "ICAI Study Material",
    chapter_name: "Portfolio Management",
    placement: 3,
    marks: 4,
    question_html: `
      <p>The risk premium for the market is 10%[cite: 4]. Assuming Beta values of Security K are 0, 0.25, 0.42, 1.00, and 1.67, compute the risk premium on Security K[cite: 4].</p>
    `,
    solution_html: `
      <p>$$\\text{Risk Premium of Security} = \\beta_K \\times (R_m - R_f) = \\beta_K \\times 10\\%$$[cite: 4]</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">&beta; Value of Security K</th>
              <th style="padding:6px; border:1px solid #ddd;">Computation</th>
              <th style="padding:6px; border:1px solid #ddd;">Risk Premium of K</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>0.00</td><td>0.00 &times; 10%</td><td><strong>0.00%</strong>[cite: 4]</td></tr>
            <tr><td>0.25</td><td>0.25 &times; 10%</td><td><strong>2.50%</strong>[cite: 4]</td></tr>
            <tr><td>0.42</td><td>0.42 &times; 10%</td><td><strong>4.20%</strong>[cite: 4]</td></tr>
            <tr><td>1.00</td><td>1.00 &times; 10%</td><td><strong>10.00%</strong>[cite: 4]</td></tr>
            <tr><td>1.67</td><td>1.67 &times; 10%</td><td><strong>16.70%</strong>[cite: 4]</td></tr>
          </tbody>
        </table>
      </div>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH06_ILLUS_04",
    source: "ICAI Study Material",
    chapter_name: "Portfolio Management",
    placement: 4,
    marks: 6,
    question_html: `
      <p>Treasury Bills give a return of 5% and Market Return is 13%[cite: 4].</p>
      <ol type="i">
        <li>What is the market risk premium?[cite: 4]</li>
        <li>Compute the &beta; value and required returns for the following combinations of investments[cite: 4]:
          <ul>
            <li>Combination 1: 100% Treasury Bills : 0% Market[cite: 4]</li>
            <li>Combination 2: 70% Treasury Bills : 30% Market[cite: 4]</li>
            <li>Combination 3: 30% Treasury Bills : 70% Market[cite: 4]</li>
            <li>Combination 4: 0% Treasury Bills : 100% Market[cite: 4]</li>
          </ul>
        </li>
      </ol>
    `,
    solution_html: `
      <h4>(i) Market Risk Premium</h4>
      <p>$$R_m - R_f = 13\\% - 5\\% = \\mathbf{8\\%}$$[cite: 4]</p>

      <h4>(ii) Portfolio Beta and Required Returns</h4>
      <p>Treasury bills carry $\\beta = 0$, while the market portfolio carries $\\beta = 1.0$[cite: 4].</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Combination</th>
              <th style="padding:6px; border:1px solid #ddd;">T-Bills : Market</th>
              <th style="padding:6px; border:1px solid #ddd;">Portfolio &beta;</th>
              <th style="padding:6px; border:1px solid #ddd;">Required Return $R_j = R_f + \\beta(R_m - R_f)$</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>100 : 0</td>
              <td>$1.0(0) + 0(1) = \\mathbf{0.0}$[cite: 4]</td>
              <td>$5\\% + 0(8\\%) = \\mathbf{5.00\\%}$[cite: 4]</td>
            </tr>
            <tr>
              <td>2</td>
              <td>70 : 30</td>
              <td>$0.7(0) + 0.3(1) = \\mathbf{0.3}$[cite: 4]</td>
              <td>$5\\% + 0.3(8\\%) = \\mathbf{7.40\\%}$[cite: 4]</td>
            </tr>
            <tr>
              <td>3</td>
              <td>30 : 70</td>
              <td>$0.3(0) + 0.7(1) = \\mathbf{0.7}$[cite: 4]</td>
              <td>$5\\% + 0.7(8\\%) = \\mathbf{10.60\\%}$[cite: 4]</td>
            </tr>
            <tr>
              <td>4</td>
              <td>0 : 100</td>
              <td>$0(0) + 1.0(1) = \\mathbf{1.0}$[cite: 4]</td>
              <td>$5\\% + 1.0(8\\%) = \\mathbf{13.00\\%}$[cite: 4]</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH06_ILLUS_05",
    source: "ICAI Study Material",
    chapter_name: "Portfolio Management",
    placement: 5,
    marks: 4,
    question_html: `
      <p>Pearl Ltd. expects that considering the current market prices, the equity shareholders, as per the Moderate Approach, should get a return of at least 15.50% while the current return on the market is 12%[cite: 4].</p>
      <p>RBI has closed the latest auction for ₹ 2,500 crores of 182-day bills for the lowest bid of 4.3%, although there were bidders at a higher rate of 4.6% also for lots of less than ₹ 10 crores[cite: 4]. What is Pearl Ltd.'s Beta?[cite: 4]</p>
    `,
    solution_html: `
      <h4>1. Determination of Risk-Free Rate Under Moderate Approach</h4>
      <p>The conservative approach takes the lower cutoff yield of 4.3%, whereas the aggressive approach takes 4.6%[cite: 4]. Under the <strong>Moderate Approach</strong>, the simple average is taken[cite: 4]:</p>
      <p>$$R_f = \\frac{4.3\\% + 4.6\\%}{2} = \\mathbf{4.45\\%}$$[cite: 4]</p>

      <h4>2. Beta Computation Using CAPM</h4>
      <p>$$R_j = R_f + \\beta(R_m - R_f)$$[cite: 4]</p>
      <p>$$15.50\\% = 4.45\\% + \\beta(12\\% - 4.45\\%)$$[cite: 4]</p>
      <p>$$11.05\\% = \\beta(7.55\\%) \\implies \\beta = \\frac{11.05}{7.55} = \\mathbf{1.464}$$[cite: 4]</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH06_ILLUS_06",
    source: "ICAI Study Material",
    chapter_name: "Portfolio Management",
    placement: 6,
    marks: 8,
    question_html: `
      <p>The following information is available with respect to Jaykay Ltd.[cite: 4]:</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th rowspan="2" style="padding:6px; border:1px solid #ddd;">Year</th>
              <th colspan="2" style="padding:6px; border:1px solid #ddd;">Jaykay Limited</th>
              <th colspan="2" style="padding:6px; border:1px solid #ddd;">Market</th>
              <th rowspan="2" style="padding:6px; border:1px solid #ddd;">Return on Govt. Bonds (%)</th>
            </tr>
            <tr style="background-color:#fafafa;">
              <th style="padding:6px; border:1px solid #ddd;">Avg. Share Price (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">DPS (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">Avg. Index</th>
              <th style="padding:6px; border:1px solid #ddd;">Dividend Yield (%)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>2002</td><td>242</td><td>20</td><td>1,812</td><td>4</td><td>6</td></tr>
            <tr><td>2003</td><td>279</td><td>25</td><td>1,950</td><td>5</td><td>5</td></tr>
            <tr><td>2004</td><td>305</td><td>30</td><td>2,258</td><td>6</td><td>4</td></tr>
            <tr><td>2005</td><td>322</td><td>35</td><td>2,220</td><td>7</td><td>5</td></tr>
          </tbody>
        </table>
      </div>
      <p>Compute the Beta value of the company as at the end of 2005[cite: 4]. What is your observation?[cite: 4]</p>
    `,
    solution_html: `
      <h4>1. Calculation of Annual Returns</h4>
      <p>$$\\text{Return on Stock } (X) = \\frac{D_1 + (P_1 - P_0)}{P_0} \\times 100$$[cite: 4]</p>
      <ul>
        <li>2002&ndash;03: $\\frac{25 + (279 - 242)}{242} \\times 100 = \\frac{62}{242} \\times 100 = \\mathbf{25.62\\%}$[cite: 4]</li>
        <li>2003&ndash;04: $\\frac{30 + (305 - 279)}{279} \\times 100 = \\frac{56}{279} \\times 100 = \\mathbf{20.07\\%}$[cite: 4]</li>
        <li>2004&ndash;05: $\\frac{35 + (322 - 305)}{305} \\times 100 = \\frac{52}{305} \\times 100 = \\mathbf{17.05\\%}$[cite: 4]</li>
      </ul>

      <p>$$\\text{Return on Market } (Y) = \\frac{\\text{Index}_1 - \\text{Index}_0}{\\text{Index}_0} \\times 100 + \\text{Dividend Yield}$$[cite: 4]</p>
      <ul>
        <li>2002&ndash;03: $\\frac{1,950 - 1,812}{1,812} \\times 100 + 5\\% = 7.62\\% + 5\\% = \\mathbf{12.62\\%}$[cite: 4]</li>
        <li>2003&ndash;04: $\\frac{2,258 - 1,950}{1,950} \\times 100 + 6\\% = 15.79\\% + 6\\% = \\mathbf{21.79\\%}$[cite: 4]</li>
        <li>2004&ndash;05: $\\frac{2,220 - 2,258}{2,258} \\times 100 + 7\\% = -1.68\\% + 7\\% = \\mathbf{5.32\\%}$[cite: 4]</li>
      </ul>

      <h4>2. Regression Schedule for Beta Estimation</h4>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Period</th>
              <th style="padding:6px; border:1px solid #ddd;">$X$ (Stock %)</th>
              <th style="padding:6px; border:1px solid #ddd;">$Y$ (Market %)</th>
              <th style="padding:6px; border:1px solid #ddd;">$XY$</th>
              <th style="padding:6px; border:1px solid #ddd;">$Y^2$</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>2002&ndash;03</td><td>25.62</td><td>12.62</td><td>323.32</td><td>159.26</td></tr>
            <tr><td>2003&ndash;04</td><td>20.07</td><td>21.79</td><td>437.33</td><td>474.80</td></tr>
            <tr><td>2004&ndash;05</td><td>17.05</td><td>5.32</td><td>90.71</td><td>28.30</td></tr>
            <tr style="font-weight:bold; background-color:#fafafa;">
              <td>Total</td>
              <td>62.74</td>
              <td>39.73</td>
              <td>851.36</td>
              <td>662.36</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>$$\\bar{X} = \\frac{62.74}{3} = 20.91\\%, \\quad \\bar{Y} = \\frac{39.73}{3} = 13.24\\%$$[cite: 4]</p>
      <p>$$\\beta = \\frac{\\sum XY - n\\bar{X}\\bar{Y}}{\\sum Y^2 - n(\\bar{Y})^2} = \\frac{851.36 - 3(20.91)(13.24)}{662.36 - 3(13.24)^2} = \\frac{851.36 - 830.55}{662.36 - 525.89} = \\frac{20.81}{136.47} = \\mathbf{0.15}$$[cite: 4]</p>

      <h4>3. Observation</h4>
      <p>A beta of <strong>0.15</strong> signifies that the stock is highly defensive; fluctuations in market index returns have minimal impact on Jaykay Ltd.'s stock return[cite: 4].</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH06_ILLUS_07",
    source: "ICAI Study Material",
    chapter_name: "Portfolio Management",
    placement: 7,
    marks: 4,
    question_html: `
      <p>Information related to an investment is as follows[cite: 4]:</p>
      <ul>
        <li>Risk-free rate: 10%[cite: 4]</li>
        <li>Market Return: 15%[cite: 4]</li>
        <li>Beta: 1.2[cite: 4]</li>
      </ul>
      <ol type="i">
        <li>What would be the return from this investment as per CAPM?[cite: 4]</li>
        <li>If the projected return is 18%, is the investment rightly valued?[cite: 4]</li>
        <li>What is your strategy?[cite: 4]</li>
      </ol>
    `,
    solution_html: `
      <h4>(i) Required Rate of Return as per CAPM</h4>
      <p>$$R_j = R_f + \\beta(R_m - R_f) = 10\\% + 1.2(15\\% - 10\\%) = 10\\% + 6\\% = \\mathbf{16.00\\%}$$[cite: 4]</p>

      <h4>(ii) Valuation Assessment</h4>
      <p>Because the projected return (18%) exceeds the CAPM required return (16%), the stock provides excess returns over risk and is <strong>undervalued</strong> in the market[cite: 4].</p>

      <h4>(iii) Investment Strategy</h4>
      <p>The recommended strategy is to <strong>BUY</strong> the share[cite: 4].</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH06_ILLUS_08",
    source: "ICAI Study Material",
    chapter_name: "Portfolio Management",
    placement: 8,
    marks: 6,
    question_html: `
      <p>The expected returns and Beta of three stocks are given below[cite: 4]:</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Stock</th>
              <th style="padding:6px; border:1px solid #ddd;">Expected Return (%)</th>
              <th style="padding:6px; border:1px solid #ddd;">Beta Factor</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>A</td><td>18.0</td><td>1.7</td></tr>
            <tr><td>B</td><td>11.0</td><td>0.6</td></tr>
            <tr><td>C</td><td>15.0</td><td>1.2</td></tr>
          </tbody>
        </table>
      </div>
      <p>If the risk-free rate is 9% and the expected rate of return on the market portfolio is 14%, which of the above stocks are over, under, or correctly valued in the market? What shall be the strategy?[cite: 4]</p>
    `,
    solution_html: `
      <h4>Required Returns Using CAPM ($R_f = 9\\%, R_m = 14\\%$)</h4>
      <p>$$R_j = R_f + \\beta(R_m - R_f) = 9\\% + \\beta(5\\%)$$[cite: 4]</p>
      <ul>
        <li>Stock A: $9\\% + 1.7(5\\%) = \\mathbf{17.50\\%}$[cite: 4]</li>
        <li>Stock B: $9\\% + 0.6(5\\%) = \\mathbf{12.00\\%}$[cite: 4]</li>
        <li>Stock C: $9\\% + 1.2(5\\%) = \\mathbf{15.00\\%}$[cite: 4]</li>
      </ul>

      <h4>Comparative Valuation Schedule</h4>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Stock</th>
              <th style="padding:6px; border:1px solid #ddd;">Required Return (%)</th>
              <th style="padding:6px; border:1px solid #ddd;">Expected Return (%)</th>
              <th style="padding:6px; border:1px solid #ddd;">Valuation Status</th>
              <th style="padding:6px; border:1px solid #ddd;">Action Strategy</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>A</td><td>17.50%</td><td>18.00%</td><td>Undervalued ($E(R) > \\text{Req}$)</td><td><strong>BUY</strong>[cite: 4]</td></tr>
            <tr><td>B</td><td>12.00%</td><td>11.00%</td><td>Overvalued ($E(R) < \\text{Req}$)</td><td><strong>SELL</strong>[cite: 4]</td></tr>
            <tr><td>C</td><td>15.00%</td><td>15.00%</td><td>Correctly Valued ($E(R) = \\text{Req}$)</td><td><strong>HOLD</strong>[cite: 4]</td></tr>
          </tbody>
        </table>
      </div>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH06_ILLUS_09",
    source: "ICAI Study Material",
    chapter_name: "Portfolio Management",
    placement: 9,
    marks: 4,
    question_html: `
      <p>With the help of the following data, determine the expected return on Security X using Arbitrage Pricing Theory (APT)[cite: 4]:</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Factor</th>
              <th style="padding:6px; border:1px solid #ddd;">Risk Premium (&lambda;<sub>i</sub>)</th>
              <th style="padding:6px; border:1px solid #ddd;">Factor Sensitivity (&beta;<sub>i</sub>)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Market</td><td>4%</td><td>1.3</td></tr>
            <tr><td>Growth Rate of GDP</td><td>1%</td><td>0.3</td></tr>
            <tr><td>Inflation</td><td>-4%</td><td>0.2</td></tr>
          </tbody>
        </table>
      </div>
      <p>The risk-free rate of return is 8%[cite: 4].</p>
    `,
    solution_html: `
      <h4>Arbitrage Pricing Theory (APT) Formula</h4>
      <p>$$E(R_X) = R_f + \\lambda_1 \\beta_1 + \\lambda_2 \\beta_2 + \\lambda_3 \\beta_3$$[cite: 4]</p>
      <p>$$E(R_X) = 8\\% + (1.3 \\times 4\\%) + (0.3 \\times 1\\%) + [0.2 \\times (-4\\%)]$$[cite: 4]</p>
      <p>$$E(R_X) = 8\\% + 5.2\\% + 0.3\\% - 0.8\\% = \\mathbf{12.70\\%}$$[cite: 4]</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH06_TYK_TH_01",
    source: "ICAI Study Material",
    chapter_name: "Portfolio Management",
    placement: 10,
    marks: 4,
    question_html: `
      <p>Write a short note on the factors affecting the decision of investment in fixed income securities.[cite: 4]</p>
    `,
    solution_html: `
      <p>When selecting fixed-income instruments (bonds, debentures, government securities), portfolio managers must analyze four critical criteria[cite: 4]:</p>
      <ul>
        <li><strong>Yield to Maturity (YTM):</strong> Represents the internal rate of return promised to the investor assuming the bond is held until its maturity and all coupon receipts are reinvested at the YTM rate[cite: 4].</li>
        <li><strong>Risk of Default:</strong> Assessed via credit ratings assigned by rating agencies (e.g., CRISIL, ICRA)[cite: 4]. For unrated instruments, fundamental financial ratios like interest coverage, debt-to-equity, and operating cash flow metrics must be analyzed[cite: 4].</li>
        <li><strong>Tax Shield:</strong> Tax-exempt status or concessional capital gains tax rates enhance the effective net post-tax yield compared to taxable alternatives[cite: 4].</li>
        <li><strong>Liquidity:</strong> The depth of secondary market trading determines whether the investor can liquidate the bond promptly without substantial price concession or transaction drag[cite: 4].</li>
      </ul>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH06_TYK_TH_02",
    source: "ICAI Study Material",
    chapter_name: "Portfolio Management",
    placement: 11,
    marks: 6,
    question_html: `
      <p>Briefly explain the objectives of &ldquo;Portfolio Management&rdquo;.[cite: 4]</p>
    `,
    solution_html: `
      <p>Portfolio management aims to optimize the risk-return profile of an investor's collective holdings[cite: 4]. Key objectives include[cite: 4]:</p>
      <ul>
        <li><strong>Security / Safety of Principal:</strong> Protecting capital not only in nominal monetary terms but also against the erosion of purchasing power caused by inflation[cite: 4].</li>
        <li><strong>Stability of Income:</strong> Structuring predictable dividend and coupon cash flows to facilitate systematic planning for consumption or reinvestment[cite: 4].</li>
        <li><strong>Capital Growth:</strong> Appreciating capital through investments in growth securities and retained earnings plough-back[cite: 4].</li>
        <li><strong>Marketability:</strong> Ensuring securities can be bought or sold conveniently on recognized exchanges to maintain portfolio flexibility[cite: 4].</li>
        <li><strong>Liquidity:</strong> Maintaining ready access to cash to take advantage of attractive market mispricings and unexpected cash requirements[cite: 4].</li>
        <li><strong>Diversification:</strong> Spreading funds across non-correlated asset classes and industries to eliminate unsystematic risk without sacrificing returns[cite: 4].</li>
        <li><strong>Favourable Tax Status:</strong> Minimizing overall tax liabilities by strategically balancing dividend distributions, capital gains, and tax-sheltered securities[cite: 4].</li>
      </ul>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH06_TYK_TH_03",
    source: "ICAI Study Material",
    chapter_name: "Portfolio Management",
    placement: 12,
    marks: 6,
    question_html: `
      <p>Discuss the Capital Asset Pricing Model (CAPM) and its relevant assumptions.[cite: 4]</p>
    `,
    solution_html: `
      <h4>1. Concept and Mechanism of CAPM</h4>
      <p>Developed by William Sharpe, the <strong>Capital Asset Pricing Model (CAPM)</strong> establishes that the required return on an asset is determined solely by its non-diversifiable systematic risk, measured by Beta (&beta;)[cite: 4]:</p>
      <p>$$R_j = R_f + \\beta_j (R_m - R_f)$$[cite: 4]</p>
      <p>Where $R_f$ is the risk-free rate, $R_m$ is the expected market return, and $(R_m - R_f)$ is the market risk premium[cite: 4].</p>

      <h4>2. Underlying Assumptions of CAPM</h4>
      <ol>
        <li><strong>Efficient Capital Markets:</strong> Information is costless and instantaneously available to all market participants[cite: 4].</li>
        <li><strong>Rational, Risk-Averse Investors:</strong> Investors seek to maximize expected utility and prefer higher returns for a given level of risk[cite: 4].</li>
        <li><strong>Homogeneous Expectations:</strong> All investors have identical expectations regarding asset returns, variances, and covariances over a single-period horizon.</li>
        <li><strong>Unlimited Borrowing and Lending at Risk-Free Rate:</strong> Investors can borrow or lend unlimited funds at the uniform risk-free rate $R_f$[cite: 4].</li>
        <li><strong>Absence of Friction:</strong> There are no transaction costs, brokerage fees, or personal income taxes[cite: 4].</li>
        <li><strong>Perfect Divisibility:</strong> All financial assets are infinitely divisible and liquid[cite: 4].</li>
        <li><strong>Market Equilibrium:</strong> The market is in long-term equilibrium with no individual buyer or seller possessing price-setting power[cite: 4].</li>
      </ol>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH06_TYK_PR_01",
    source: "ICAI Study Material",
    chapter_name: "Portfolio Management",
    placement: 13,
    marks: 6,
    question_html: `
      <p>A stock costing ₹ 120 pays no dividends[cite: 4]. The possible prices that the stock might sell for at the end of the year with the respective probabilities are[cite: 4]:</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Price (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">Probability</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>115</td><td>0.1</td></tr>
            <tr><td>120</td><td>0.1</td></tr>
            <tr><td>125</td><td>0.2</td></tr>
            <tr><td>130</td><td>0.3</td></tr>
            <tr><td>135</td><td>0.2</td></tr>
            <tr><td>140</td><td>0.1</td></tr>
          </tbody>
        </table>
      </div>
      <p><strong>Required:</strong></p>
      <ol type="i">
        <li>Calculate the expected return[cite: 4].</li>
        <li>Calculate the Standard Deviation of returns[cite: 4].</li>
      </ol>
    `,
    solution_html: `
      <h4>1. Computation of Holding Period Returns</h4>
      <p>$$\\text{Return } (X_i) = \\frac{P_1 - P_0}{P_0} \\times 100 = \\frac{P_1 - 120}{120} \\times 100$$[cite: 4]</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">$P_1$ (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">Return $X_i$ (%)</th>
              <th style="padding:6px; border:1px solid #ddd;">$p(X_i)$</th>
              <th style="padding:6px; border:1px solid #ddd;">$X_i \\cdot p(X_i)$</th>
              <th style="padding:6px; border:1px solid #ddd;">$(X_i - \\bar{X})$</th>
              <th style="padding:6px; border:1px solid #ddd;">$(X_i - \\bar{X})^2$</th>
              <th style="padding:6px; border:1px solid #ddd;">$(X_i - \\bar{X})^2 p(X_i)$</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>115</td><td>-4.17</td><td>0.1</td><td>-0.417</td><td>-11.253</td><td>126.63</td><td>12.663</td></tr>
            <tr><td>120</td><td>0.00</td><td>0.1</td><td>0.000</td><td>-7.083</td><td>50.17</td><td>5.017</td></tr>
            <tr><td>125</td><td>4.17</td><td>0.2</td><td>0.834</td><td>-2.913</td><td>8.49</td><td>1.698</td></tr>
            <tr><td>130</td><td>8.33</td><td>0.3</td><td>2.499</td><td>1.247</td><td>1.56</td><td>0.468</td></tr>
            <tr><td>135</td><td>12.50</td><td>0.2</td><td>2.500</td><td>5.417</td><td>29.34</td><td>5.868</td></tr>
            <tr><td>140</td><td>16.67</td><td>0.1</td><td>1.667</td><td>9.587</td><td>91.91</td><td>9.191</td></tr>
            <tr style="font-weight:bold; background-color:#fafafa;">
              <td colspan="3">Total</td>
              <td>7.083%</td>
              <td colspan="2">Variance (\\sigma^2)</td>
              <td>34.905</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h4>Summary Results</h4>
      <ul>
        <li><strong>(i) Expected Return:</strong> $\\mathbf{7.083\\%}$[cite: 4]</li>
        <li><strong>(ii) Standard Deviation of Returns:</strong> $\\sigma = \\sqrt{34.905} = \\mathbf{5.908\\%}$[cite: 4]</li>
      </ul>
      <p><small><em>(Alternatively, Expected Price $= 115(0.1) + 120(0.1) + 125(0.2) + 130(0.3) + 135(0.2) + 140(0.1) = ₹ 128.50 \implies \\text{Return} = \\frac{128.50 - 120}{120} \\times 100 = 7.083\\%$)</em></small>[cite: 4]</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH06_TYK_PR_02",
    source: "ICAI Study Material",
    chapter_name: "Portfolio Management",
    placement: 14,
    marks: 8,
    question_html: `
      <p>Following information is available in respect of expected dividend, market price, and market conditions after one year[cite: 4]:</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Market Condition</th>
              <th style="padding:6px; border:1px solid #ddd;">Probability</th>
              <th style="padding:6px; border:1px solid #ddd;">Market Price (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">Dividend per Share (₹)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Good</td><td>0.25</td><td>115</td><td>9</td></tr>
            <tr><td>Normal</td><td>0.50</td><td>107</td><td>5</td></tr>
            <tr><td>Bad</td><td>0.25</td><td>97</td><td>3</td></tr>
          </tbody>
        </table>
      </div>
      <p>The existing market price of equity share is ₹ 106 (F.V. ₹ 1), which is cum 10% bonus debenture of ₹ 6 each, per share[cite: 4]. M/s. X Finance Company Ltd. has offered the buyback of debentures at face value[cite: 4].</p>
      <p>Find out the expected return and variability of returns of the equity shares if the buyback offer is accepted[cite: 4]. Advise whether to accept the buyback offer[cite: 4].</p>
    `,
    solution_html: `
      <h4>1. Net Cost of Equity Share</h4>
      <p>$$\\text{Net Acquisition Cost} = \\text{Cum-Debenture Price} - \\text{Debenture Face Value} = ₹ 106 - ₹ 6 = \\mathbf{₹ 100}$$[cite: 4]</p>

      <h4>2. Expected Return and Variability</h4>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">State</th>
              <th style="padding:6px; border:1px solid #ddd;">Prob. ($p$)</th>
              <th style="padding:6px; border:1px solid #ddd;">Total Inflow (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">Net Gain $X_i$ (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">$p \\cdot X_i$</th>
              <th style="padding:6px; border:1px solid #ddd;">$(X_i - \\bar{X})$</th>
              <th style="padding:6px; border:1px solid #ddd;">$p(X_i - \\bar{X})^2$</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Good</td><td>0.25</td><td>$115 + 9 = 124$</td><td>24</td><td>6.0</td><td>+12</td><td>$0.25(144) = 36.0$</td></tr>
            <tr><td>Normal</td><td>0.50</td><td>$107 + 5 = 112$</td><td>12</td><td>6.0</td><td>0</td><td>$0.50(0) = 0.0$</td></tr>
            <tr><td>Bad</td><td>0.25</td><td>$97 + 3 = 100$</td><td>0</td><td>0.0</td><td>-12</td><td>$0.25(144) = 36.0$</td></tr>
            <tr style="font-weight:bold; background-color:#fafafa;">
              <td colspan="4">Total</td>
              <td>12.0</td>
              <td colspan="1">Variance (\\sigma^2)</td>
              <td>72.0</td>
            </tr>
          </tbody>
        </table>
      </div>
      <ul>
        <li><strong>Expected Return:</strong> $\\frac{₹ 12}{₹ 100} \\times 100 = \\mathbf{12.00\\%}$[cite: 4]</li>
        <li><strong>Standard Deviation (Variability):</strong> $\\sigma = \\sqrt{72.0} = \\mathbf{8.485\\% \\approx 8.49\\%}$[cite: 4]</li>
      </ul>

      <h4>3. Advice on Buyback Offer</h4>
      <p>The bonus debentures carry a 10% coupon rate[cite: 4]. While the equity share offers an expected return of 12%, it carries significant variability ($\\sigma = 8.49\\%$)[cite: 4]. If the maturity of the debenture is short (e.g., up to 1 year) and the company's credit standing is robust, the investor can hold the debenture for stable income; otherwise, accepting the buyback at face value provides liquidity to deploy funds into higher-yielding opportunities[cite: 4].</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH06_TYK_PR_03",
    source: "ICAI Study Material",
    chapter_name: "Portfolio Management",
    placement: 15,
    marks: 6,
    question_html: `
      <p>Mr. A is interested in investing ₹ 1,00,000 in two securities, B and D[cite: 4]:</p>
      <ul>
        <li>Security B: Risk ($\\sigma$) = 10%, Expected Return ($ER$) = 12%[cite: 4]</li>
        <li>Security D: Risk ($\\sigma$) = 18%, Expected Return ($ER$) = 20%[cite: 4]</li>
        <li>Correlation coefficient ($r_{BD}$) = 0.15[cite: 4]</li>
      </ul>
      <p>Calculate the portfolio return and risk for the following portfolios[cite: 4]:</p>
      <ol type="i">
        <li>100% investment in B only[cite: 4];</li>
        <li>50% in B and 50% in D[cite: 4];</li>
        <li>75% in B and 25% in D[cite: 4];</li>
        <li>100% investment in D only[cite: 4].</li>
      </ol>
      <p>Indicate which portfolio is best from the risk as well as return points of view[cite: 4].</p>
    `,
    solution_html: `
      <h4>Portfolio Formulas</h4>
      <p>$$E(R_p) = w_B E(R_B) + w_D E(R_D)$$[cite: 4]</p>
      <p>$$\\sigma_p = \\sqrt{w_B^2 \\sigma_B^2 + w_D^2 \\sigma_D^2 + 2 w_B w_D \\sigma_B \\sigma_D r_{BD}}$$[cite: 4]</p>

      <h4>Calculations Across Combinations</h4>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Portfolio</th>
              <th style="padding:6px; border:1px solid #ddd;">Weights ($w_B : w_D$)</th>
              <th style="padding:6px; border:1px solid #ddd;">Expected Return $E(R_p)$</th>
              <th style="padding:6px; border:1px solid #ddd;">Variance ($\\sigma_p^2$)</th>
              <th style="padding:6px; border:1px solid #ddd;">Standard Deviation ($\\sigma_p$)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>(i)</td>
              <td>100 : 0</td>
              <td>12.00%</td>
              <td>$10^2 = 100.00$</td>
              <td><strong>10.00%</strong>[cite: 4]</td>
            </tr>
            <tr>
              <td>(ii)</td>
              <td>50 : 50</td>
              <td>$0.5(12) + 0.5(20) = \\mathbf{16.00\\%}$[cite: 4]</td>
              <td>$(0.5)^2(100) + (0.5)^2(324) + 2(0.25)(10)(18)(0.15) = 25 + 81 + 13.5 = 119.50$</td>
              <td><strong>10.93%</strong>[cite: 4]</td>
            </tr>
            <tr>
              <td>(iii)</td>
              <td>75 : 25</td>
              <td>$0.75(12) + 0.25(20) = \\mathbf{14.00\\%}$[cite: 4]</td>
              <td>$(0.75)^2(100) + (0.25)^2(324) + 2(0.1875)(10)(18)(0.15) = 56.25 + 20.25 + 10.125 = 86.625$</td>
              <td><strong>9.31%</strong>[cite: 4]</td>
            </tr>
            <tr>
              <td>(iv)</td>
              <td>0 : 100</td>
              <td>20.00%</td>
              <td>$18^2 = 324.00$</td>
              <td><strong>18.00%</strong>[cite: 4]</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4>Conclusion</h4>
      <ul>
        <li>From the <strong>return point of view</strong>, <strong>Portfolio (iv)</strong> is best ($E(R) = 20\\%$)[cite: 4].</li>
        <li>From the <strong>risk point of view</strong>, <strong>Portfolio (iii)</strong> is best ($\\sigma_p = 9.31\\%$, lower than even 100% in B)[cite: 4].</li>
      </ul>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH06_TYK_PR_04",
    source: "ICAI Study Material",
    chapter_name: "Portfolio Management",
    placement: 16,
    marks: 8,
    question_html: `
      <p>Consider the following information on two stocks, A and B[cite: 4]:</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Year</th>
              <th style="padding:6px; border:1px solid #ddd;">Return on A (%)</th>
              <th style="padding:6px; border:1px solid #ddd;">Return on B (%)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>2006</td><td>10</td><td>12</td></tr>
            <tr><td>2007</td><td>16</td><td>18</td></tr>
          </tbody>
        </table>
      </div>
      <p><strong>You are required to determine:</strong></p>
      <ol type="i">
        <li>The expected return on a portfolio containing A and B in the proportion of 40% and 60% respectively[cite: 4].</li>
        <li>The Standard Deviation of return from each of the two stocks[cite: 4].</li>
        <li>The covariance of returns from the two stocks[cite: 4].</li>
        <li>Correlation coefficient between the returns of the two stocks[cite: 4].</li>
        <li>The risk of a portfolio containing A and B in the proportion of 40% and 60%[cite: 4].</li>
      </ol>
    `,
    solution_html: `
      <h4>(i) Expected Portfolio Return</h4>
      <p>$$\\bar{R}_A = \\frac{10 + 16}{2} = 13\\%, \\quad \\bar{R}_B = \\frac{12 + 18}{2} = 15\\%$$[cite: 4]</p>
      <p>$$E(R_p) = (0.40 \\times 13\\%) + (0.60 \\times 15\\%) = 5.2\\% + 9.0\\% = \\mathbf{14.20\\%}$$[cite: 4]</p>

      <h4>(ii) Standard Deviation of Individual Stocks</h4>
      <ul>
        <li>$$\\sigma_A^2 = \\frac{(10 - 13)^2 + (16 - 13)^2}{2} = \\frac{9 + 9}{2} = 9 \\implies \\sigma_A = \\mathbf{3\\%}$$[cite: 4]</li>
        <li>$$\\sigma_B^2 = \\frac{(12 - 15)^2 + (18 - 15)^2}{2} = \\frac{9 + 9}{2} = 9 \\implies \\sigma_B = \\mathbf{3\\%}$$[cite: 4]</li>
      </ul>

      <h4>(iii) Covariance of Stocks A and B</h4>
      <p>$$\\text{Cov}_{AB} = \\frac{(10 - 13)(12 - 15) + (16 - 13)(18 - 15)}{2} = \\frac{(-3)(-3) + (3)(3)}{2} = \\frac{9 + 9}{2} = \\mathbf{9}$$[cite: 4]</p>

      <h4>(iv) Correlation Coefficient ($r_{AB}$)</h4>
      <p>$$r_{AB} = \\frac{\\text{Cov}_{AB}}{\\sigma_A \\sigma_B} = \\frac{9}{3 \\times 3} = \\mathbf{+1.0}$$[cite: 4]</p>

      <h4>(v) Risk of the Portfolio</h4>
      <p>With perfect positive correlation ($r = +1$)[cite: 4]:</p>
      <p>$$\\sigma_p = w_A \\sigma_A + w_B \\sigma_B = (0.40 \\times 3\\%) + (0.60 \\times 3\\%) = \\mathbf{3.00\\%}$$[cite: 4]</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH06_TYK_PR_05",
    source: "ICAI Study Material",
    chapter_name: "Portfolio Management",
    placement: 17,
    marks: 6,
    question_html: `
      <p>Following is the data regarding six securities[cite: 4]:</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Particulars</th>
              <th style="padding:6px; border:1px solid #ddd;">A</th>
              <th style="padding:6px; border:1px solid #ddd;">B</th>
              <th style="padding:6px; border:1px solid #ddd;">C</th>
              <th style="padding:6px; border:1px solid #ddd;">D</th>
              <th style="padding:6px; border:1px solid #ddd;">E</th>
              <th style="padding:6px; border:1px solid #ddd;">F</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Return (%)</td><td>8</td><td>8</td><td>12</td><td>4</td><td>9</td><td>8</td></tr>
            <tr><td>Risk (&sigma;)</td><td>4</td><td>5</td><td>12</td><td>4</td><td>5</td><td>6</td></tr>
          </tbody>
        </table>
      </div>
      <ol type="i">
        <li>Assuming three will have to be selected, state which ones will be picked[cite: 4].</li>
        <li>Assuming perfect correlation, show whether it is preferable to invest 75% in A and 25% in C or to invest 100% in E[cite: 4].</li>
      </ol>
    `,
    solution_html: `
      <h4>(i) Selection of Three Securities Using Dominance Principle</h4>
      <ul>
        <li>For an 8% return, Security A has $\\sigma = 4$, whereas B ($\\sigma = 5$) and F ($\\sigma = 6$) carry higher risk[cite: 4]. Hence, <strong>A dominates B and F</strong>[cite: 4].</li>
        <li>For a risk level of $\\sigma = 4$, Security A gives 8% return while D gives only 4%[cite: 4]. Hence, <strong>A dominates D</strong>[cite: 4].</li>
        <li>Securities C and E offer higher returns (12% and 9% respectively) commensurate with their risk profiles and remain non-dominated[cite: 4].</li>
        <li><strong>Selected Securities:</strong> <strong>A, C, and E</strong>[cite: 4].</li>
      </ul>

      <h4>(ii) Comparison: Portfolio (75% A + 25% C) vs. 100% in E</h4>
      <p>Under perfect positive correlation ($r = +1$)[cite: 4]:</p>
      <ul>
        <li>$$\\text{Portfolio Return} = (0.75 \\times 8\\%) + (0.25 \\times 12\\%) = 6\\% + 3\\% = \\mathbf{9\\%}$$[cite: 4]</li>
        <li>$$\\text{Portfolio Risk } (\\sigma_p) = (0.75 \\times 4) + (0.25 \\times 12) = 3 + 3 = \\mathbf{6\\%}$$[cite: 4]</li>
      </ul>
      <p>Security E alone yields <strong>9% return with $\\sigma = 5\%$</strong>[cite: 4].</p>
      <p><strong>Conclusion:</strong> For the same expected return of 9%, Security E carries lower risk ($5\\% < 6\\%$)[cite: 4]. Therefore, <strong>investing 100% in E is preferable</strong>[cite: 4].</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH06_TYK_PR_06",
    source: "ICAI Study Material",
    chapter_name: "Portfolio Management",
    placement: 18,
    marks: 8,
    question_html: `
      <p>The historical rates of return of two securities over the past ten years are given below[cite: 4]:</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Years</th>
              <th style="padding:6px; border:1px solid #ddd;">1</th>
              <th style="padding:6px; border:1px solid #ddd;">2</th>
              <th style="padding:6px; border:1px solid #ddd;">3</th>
              <th style="padding:6px; border:1px solid #ddd;">4</th>
              <th style="padding:6px; border:1px solid #ddd;">5</th>
              <th style="padding:6px; border:1px solid #ddd;">6</th>
              <th style="padding:6px; border:1px solid #ddd;">7</th>
              <th style="padding:6px; border:1px solid #ddd;">8</th>
              <th style="padding:6px; border:1px solid #ddd;">9</th>
              <th style="padding:6px; border:1px solid #ddd;">10</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Security 1 (%)</td><td>12</td><td>8</td><td>7</td><td>14</td><td>16</td><td>15</td><td>18</td><td>20</td><td>16</td><td>22</td></tr>
            <tr><td>Security 2 (%)</td><td>20</td><td>22</td><td>24</td><td>18</td><td>15</td><td>20</td><td>24</td><td>25</td><td>22</td><td>20</td></tr>
          </tbody>
        </table>
      </div>
      <p>Calculate the <strong>Covariance</strong> and the <strong>Correlation Coefficient</strong> of the two securities[cite: 4].</p>
    `,
    solution_html: `
      <h4>1. Means of Returns</h4>
      <p>$$\\bar{R}_1 = \\frac{148}{10} = 14.80\\%, \\quad \\bar{R}_2 = \\frac{210}{10} = 21.00\\%$$[cite: 4]</p>

      <h4>2. Covariance and Variance Schedule</h4>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Year</th>
              <th style="padding:6px; border:1px solid #ddd;">$(R_1 - \\bar{R}_1)$</th>
              <th style="padding:6px; border:1px solid #ddd;">$(R_1 - \\bar{R}_1)^2$</th>
              <th style="padding:6px; border:1px solid #ddd;">$(R_2 - \\bar{R}_2)$</th>
              <th style="padding:6px; border:1px solid #ddd;">$(R_2 - \\bar{R}_2)^2$</th>
              <th style="padding:6px; border:1px solid #ddd;">Product of Deviations</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>-2.8</td><td>7.84</td><td>-1.0</td><td>1.0</td><td>+2.8</td></tr>
            <tr><td>2</td><td>-6.8</td><td>46.24</td><td>+1.0</td><td>1.0</td><td>-6.8</td></tr>
            <tr><td>3</td><td>-7.8</td><td>60.84</td><td>+3.0</td><td>9.0</td><td>-23.4</td></tr>
            <tr><td>4</td><td>-0.8</td><td>0.64</td><td>-3.0</td><td>9.0</td><td>+2.4</td></tr>
            <tr><td>5</td><td>+1.2</td><td>1.44</td><td>-6.0</td><td>36.0</td><td>-7.2</td></tr>
            <tr><td>6</td><td>+0.2</td><td>0.04</td><td>-1.0</td><td>1.0</td><td>-0.2</td></tr>
            <tr><td>7</td><td>+3.2</td><td>10.24</td><td>+3.0</td><td>9.0</td><td>+9.6</td></tr>
            <tr><td>8</td><td>+5.2</td><td>27.04</td><td>+4.0</td><td>16.0</td><td>+20.8</td></tr>
            <tr><td>9</td><td>+1.2</td><td>1.44</td><td>+1.0</td><td>1.0</td><td>+1.2</td></tr>
            <tr><td>10</td><td>+7.2</td><td>51.84</td><td>-1.0</td><td>1.0</td><td>-7.2</td></tr>
            <tr style="font-weight:bold; background-color:#fafafa;">
              <td>Total</td>
              <td>0.0</td>
              <td>207.60</td>
              <td>0.0</td>
              <td>84.00</td>
              <td>-8.0</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4>3. Statistical Measures</h4>
      <ul>
        <li>$$\\text{Covariance } (\\text{Cov}_{12}) = \\frac{-8.0}{10} = \\mathbf{-0.80}$$[cite: 4]</li>
        <li>$$\\sigma_1 = \\sqrt{\\frac{207.60}{10}} = \\sqrt{20.76} = \\mathbf{4.556\\% \\approx 4.56\\%}$$[cite: 4]</li>
        <li>$$\\sigma_2 = \\sqrt{\\frac{84.00}{10}} = \\sqrt{8.40} = \\mathbf{2.898\\% \\approx 2.90\\%}$$[cite: 4]</li>
        <li>$$r_{12} = \\frac{\\text{Cov}_{12}}{\\sigma_1 \\sigma_2} = \\frac{-0.80}{4.56 \\times 2.90} = \\frac{-0.80}{13.224} = \\mathbf{-0.0605}$$[cite: 4]</li>
      </ul>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH06_TYK_PR_07",
    source: "ICAI Study Material",
    chapter_name: "Portfolio Management",
    placement: 19,
    marks: 10,
    question_html: `
      <p>An investor has decided to invest ₹ 1,00,000 in the shares of two companies, ABC and XYZ[cite: 4]. The projected returns and probabilities are[cite: 4]:</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Probability</th>
              <th style="padding:6px; border:1px solid #ddd;">ABC (%)</th>
              <th style="padding:6px; border:1px solid #ddd;">XYZ (%)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>0.20</td><td>12</td><td>16</td></tr>
            <tr><td>0.25</td><td>14</td><td>10</td></tr>
            <tr><td>0.25</td><td>-7</td><td>28</td></tr>
            <tr><td>0.30</td><td>28</td><td>-2</td></tr>
          </tbody>
        </table>
      </div>
      <ol type="i">
        <li>Comment on return and risk of investment in individual shares[cite: 4].</li>
        <li>Compare the risk and return of these two shares with a Portfolio in equal proportions[cite: 4].</li>
        <li>Find out the proportion of each share to formulate a minimum risk portfolio[cite: 4].</li>
      </ol>
    `,
    solution_html: `
      <h4>(i) Return and Risk of Individual Shares</h4>
      <ul>
        <li>$$E(R_{\\text{ABC}}) = (0.20 \\times 12) + (0.25 \\times 14) + [0.25 \\times (-7)] + (0.30 \\times 28) = \\mathbf{12.55\\%}$$[cite: 4]</li>
        <li>$$E(R_{\\text{XYZ}}) = (0.20 \\times 16) + (0.25 \\times 10) + (0.25 \\times 28) + [0.30 \\times (-2)] = \\mathbf{12.10\\%}$$[cite: 4]</li>
        <li>$$\\sigma_{\\text{ABC}}^2 = 0.2(-0.55)^2 + 0.25(1.45)^2 + 0.25(-19.55)^2 + 0.30(15.45)^2 = 167.75 \\implies \\sigma_{\\text{ABC}} = \\mathbf{12.95\\%}$$[cite: 4]</li>
        <li>$$\\sigma_{\\text{XYZ}}^2 = 0.2(3.9)^2 + 0.25(-2.1)^2 + 0.25(15.9)^2 + 0.30(-14.1)^2 = 126.98 \\implies \\sigma_{\\text{XYZ}} = \\mathbf{11.27\\%}$$[cite: 4]</li>
      </ul>

      <h4>(ii) Equal Proportion Portfolio ($w_1 = 0.5, w_2 = 0.5$)</h4>
      <p>$$\\text{Cov}_{AX} = 0.2(-0.55)(3.9) + 0.25(1.45)(-2.1) + 0.25(-19.55)(15.9) + 0.30(15.45)(-14.1) = \\mathbf{-144.25}$$[cite: 4]</p>
      <p>$$E(R_p) = (0.5 \\times 12.55\\%) + (0.5 \\times 12.10\\%) = \\mathbf{12.325\\%}$$[cite: 4]</p>
      <p>$$\\sigma_p^2 = (0.5)^2(167.75) + (0.5)^2(126.98) + 2(0.5)(0.5)(-144.25) = 41.9375 + 31.745 - 72.125 = \\mathbf{1.5575}$$[cite: 4]</p>
      <p>$$\\sigma_p = \\sqrt{1.5575} = \\mathbf{1.25\\%}$$[cite: 4]</p>
      <p>Due to strong negative covariance, combining both stocks slashes risk from ~12% to <strong>1.25%</strong> while preserving an attractive return of <strong>12.325%</strong>[cite: 4].</p>

      <h4>(iii) Minimum Risk Portfolio Weights</h4>
      <p>$$w_{\\text{ABC}} = \\frac{\\sigma_{\\text{XYZ}}^2 - \\text{Cov}_{AX}}{\\sigma_{\\text{ABC}}^2 + \\sigma_{\\text{XYZ}}^2 - 2\\text{Cov}_{AX}} = \\frac{126.98 - (-144.25)}{167.75 + 126.98 - 2(-144.25)} = \\frac{271.23}{583.23} = \\mathbf{0.46 \\text{ (46\\%)}}$$[cite: 4]</p>
      <p>$$w_{\\text{XYZ}} = 1 - 0.46 = \\mathbf{0.54 \\text{ (54\\%)}}$$[cite: 4]</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH06_TYK_PR_08",
    source: "ICAI Study Material",
    chapter_name: "Portfolio Management",
    placement: 20,
    marks: 8,
    question_html: `
      <p>The following information is available with respect to Krishna Ltd.[cite: 4]:</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th rowspan="2" style="padding:6px; border:1px solid #ddd;">Year</th>
              <th colspan="2" style="padding:6px; border:1px solid #ddd;">Krishna Ltd.</th>
              <th colspan="2" style="padding:6px; border:1px solid #ddd;">Market Index</th>
              <th rowspan="2" style="padding:6px; border:1px solid #ddd;">Return on Govt. Bonds (%)</th>
            </tr>
            <tr style="background-color:#fafafa;">
              <th style="padding:6px; border:1px solid #ddd;">Avg. Price (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">DPS (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">Avg. Index</th>
              <th style="padding:6px; border:1px solid #ddd;">Dividend Yield (%)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>2012</td><td>245</td><td>20</td><td>2,013</td><td>4</td><td>7</td></tr>
            <tr><td>2013</td><td>253</td><td>22</td><td>2,130</td><td>5</td><td>6</td></tr>
            <tr><td>2014</td><td>310</td><td>25</td><td>2,350</td><td>6</td><td>6</td></tr>
            <tr><td>2015</td><td>330</td><td>30</td><td>2,580</td><td>7</td><td>6</td></tr>
          </tbody>
        </table>
      </div>
      <p>Compute the Beta value of Krishna Ltd. at the end of 2015 and state your observation[cite: 4].</p>
    `,
    solution_html: `
      <h4>1. Return Series Computations</h4>
      <ul>
        <li><strong>Stock Returns ($X$):</strong>
          <ul>
            <li>2012&ndash;13: $\\frac{22 + (253 - 245)}{245} \\times 100 = \\mathbf{12.24\\%}$[cite: 4]</li>
            <li>2013&ndash;14: $\\frac{25 + (310 - 253)}{253} \\times 100 = \\mathbf{32.41\\%}$[cite: 4]</li>
            <li>2014&ndash;15: $\\frac{30 + (330 - 310)}{310} \\times 100 = \\mathbf{16.13\\%}$[cite: 4]</li>
          </ul>
        </li>
        <li><strong>Market Returns ($Y$):</strong>
          <ul>
            <li>2012&ndash;13: $\\frac{2,130 - 2,013}{2,013} \\times 100 + 5\\% = 5.81\\% + 5\\% = \\mathbf{10.81\\%}$[cite: 4]</li>
            <li>2013&ndash;14: $\\frac{2,350 - 2,130}{2,130} \\times 100 + 6\\% = 10.33\\% + 6\\% = \\mathbf{16.33\\%}$[cite: 4]</li>
            <li>2014&ndash;15: $\\frac{2,580 - 2,350}{2,350} \\times 100 + 7\\% = 9.79\\% + 7\\% = \\mathbf{16.79\\%}$[cite: 4]</li>
          </ul>
        </li>
      </ul>

      <h4>2. Beta Calculation</h4>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Period</th>
              <th style="padding:6px; border:1px solid #ddd;">$X$ (%)</th>
              <th style="padding:6px; border:1px solid #ddd;">$Y$ (%)</th>
              <th style="padding:6px; border:1px solid #ddd;">$XY$</th>
              <th style="padding:6px; border:1px solid #ddd;">$Y^2$</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>2012&ndash;13</td><td>12.24</td><td>10.81</td><td>132.31</td><td>116.86</td></tr>
            <tr><td>2013&ndash;14</td><td>32.41</td><td>16.33</td><td>529.25</td><td>266.67</td></tr>
            <tr><td>2014&ndash;15</td><td>16.13</td><td>16.79</td><td>270.82</td><td>281.90</td></tr>
            <tr style="font-weight:bold; background-color:#fafafa;">
              <td>Total</td>
              <td>60.78</td>
              <td>43.93</td>
              <td>932.38</td>
              <td>665.43</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>$$\\bar{X} = 20.26\\%, \\quad \\bar{Y} = 14.64\\%$$[cite: 4]</p>
      <p>$$\\beta = \\frac{932.38 - 3(20.26)(14.64)}{665.43 - 3(14.64)^2} = \\frac{932.38 - 889.82}{665.43 - 642.99} = \\frac{42.56}{22.44} = \\mathbf{1.897}$$[cite: 4]</p>

      <h4>3. Observation and Decision Schedule</h4>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Period</th>
              <th style="padding:6px; border:1px solid #ddd;">Expected Return (CAPM @ $R_f = 6\%$)</th>
              <th style="padding:6px; border:1px solid #ddd;">Actual Return</th>
              <th style="padding:6px; border:1px solid #ddd;">Action Recommendation</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>2012&ndash;13</td><td>$6\\% + 1.897(10.81 - 6) = 15.12\\%$</td><td>12.24%</td><td><strong>SELL</strong> (Overvalued)[cite: 4]</td></tr>
            <tr><td>2013&ndash;14</td><td>$6\\% + 1.897(16.33 - 6) = 25.60\\%$</td><td>32.41%</td><td><strong>BUY</strong> (Undervalued)[cite: 4]</td></tr>
            <tr><td>2014&ndash;15</td><td>$6\\% + 1.897(16.79 - 6) = 26.47\\%$</td><td>16.13%</td><td><strong>SELL</strong> (Overvalued)[cite: 4]</td></tr>
          </tbody>
        </table>
      </div>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH06_TYK_PR_09",
    source: "ICAI Study Material",
    chapter_name: "Portfolio Management",
    placement: 21,
    marks: 6,
    question_html: `
      <p>The distribution of return of security &lsquo;F&rsquo; and the market portfolio &lsquo;P&rsquo; is given below:</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th rowspan="2" style="padding:6px; border:1px solid #ddd;">Probability</th>
              <th colspan="2" style="padding:6px; border:1px solid #ddd;">Return (%)</th>
            </tr>
            <tr style="background-color:#fafafa;">
              <th style="padding:6px; border:1px solid #ddd;">Security F</th>
              <th style="padding:6px; border:1px solid #ddd;">Market Portfolio P</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>0.30</td><td>30</td><td>-10</td></tr>
            <tr><td>0.40</td><td>20</td><td>20</td></tr>
            <tr><td>0.30</td><td>0</td><td>30</td></tr>
          </tbody>
        </table>
      </div>
      <p>You are required to calculate the expected return of security &lsquo;F&rsquo; and the market portfolio &lsquo;P&rsquo;, the covariance between the market portfolio and security, and the beta for the security.</p>
    `,
    solution_html: `
      <h4>1. Expected Returns</h4>
      <ul>
        <li>$$E(R_F) = (0.30 \\times 30) + (0.40 \\times 20) + (0.30 \\times 0) = 9 + 8 + 0 = \\mathbf{17\\%}$$</li>
        <li>$$E(R_P) = [0.30 \\times (-10)] + (0.40 \\times 20) + (0.30 \\times 30) = -3 + 8 + 9 = \\mathbf{14\\%}$$</li>
      </ul>

      <h4>2. Covariance and Market Variance Schedule</h4>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Prob. ($p$)</th>
              <th style="padding:6px; border:1px solid #ddd;">$(R_F - \\bar{R}_F)$</th>
              <th style="padding:6px; border:1px solid #ddd;">$(R_P - \\bar{R}_P)$</th>
              <th style="padding:6px; border:1px solid #ddd;">$(R_P - \\bar{R}_P)^2$</th>
              <th style="padding:6px; border:1px solid #ddd;">$p(R_P - \\bar{R}_P)^2$</th>
              <th style="padding:6px; border:1px solid #ddd;">$p(R_F - \\bar{R}_F)(R_P - \\bar{R}_P)$</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0.30</td>
              <td>+13</td>
              <td>-24</td>
              <td>576</td>
              <td>172.80</td>
              <td>$0.30 \\times (13 \\times -24) = -93.60$</td>
            </tr>
            <tr>
              <td>0.40</td>
              <td>+3</td>
              <td>+6</td>
              <td>36</td>
              <td>14.40</td>
              <td>$0.40 \\times (3 \\times 6) = +7.20$</td>
            </tr>
            <tr>
              <td>0.30</td>
              <td>-17</td>
              <td>+16</td>
              <td>256</td>
              <td>76.80</td>
              <td>$0.30 \\times (-17 \\times 16) = -81.60$</td>
            </tr>
            <tr style="font-weight:bold; background-color:#fafafa;">
              <td colspan="4">Total</td>
              <td>\\sigma_P^2 = 264.00</td>
              <td>\\text{Cov}(F, P) = -168.00</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4>3. Beta Coefficient of Security F</h4>
      <p>$$\\beta_F = \\frac{\\text{Cov}(F, P)}{\\sigma_P^2} = \\frac{-168}{264} = \\mathbf{-0.636}$$</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH06_TYK_PR_10",
    source: "ICAI Study Material",
    chapter_name: "Portfolio Management",
    placement: 22,
    marks: 6,
    question_html: `
      <p>Given below is information of market rates of returns and data from two companies, A and B:</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Particulars</th>
              <th style="padding:6px; border:1px solid #ddd;">Year 2007</th>
              <th style="padding:6px; border:1px solid #ddd;">Year 2008</th>
              <th style="padding:6px; border:1px solid #ddd;">Year 2009</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Market (%)</td><td>12.0</td><td>11.0</td><td>9.0</td></tr>
            <tr><td>Company A (%)</td><td>13.0</td><td>11.5</td><td>9.8</td></tr>
            <tr><td>Company B (%)</td><td>11.0</td><td>10.5</td><td>9.5</td></tr>
          </tbody>
        </table>
      </div>
      <p>You are required to determine the beta coefficients of the shares of Company A and Company B.</p>
    `,
    solution_html: `
      <h4>1. Market Variance ($\sigma_M^2$)</h4>
      <p>$$\bar{R}_M = \frac{12.0 + 11.0 + 9.0}{3} = \frac{32.0}{3} = 10.67\%$$</p>
      <p>$$\sigma_M^2 = \frac{(12.0 - 10.67)^2 + (11.0 - 10.67)^2 + (9.0 - 10.67)^2}{3} = \frac{1.77 + 0.11 + 2.79}{3} = \frac{4.67}{3} = \mathbf{1.557}$$</p>

      <h4>2. Beta of Company A</h4>
      <p>$$\bar{R}_A = \frac{13.0 + 11.5 + 9.8}{3} = \frac{34.3}{3} = 11.43\%$$</p>
      <p>$$\text{Cov}(A, M) = \frac{(13.0 - 11.43)(1.33) + (11.5 - 11.43)(0.33) + (9.8 - 11.43)(-1.67)}{3}$$[cite: 4]</p>
      <p>$$\text{Cov}(A, M) = \frac{2.09 + 0.02 + 2.72}{3} = \frac{4.83}{3} = \mathbf{1.61}$$[cite: 4]</p>
      <p>$$\beta_A = \frac{\text{Cov}(A, M)}{\sigma_M^2} = \frac{1.61}{1.557} = \mathbf{1.03}$$[cite: 4]</p>

      <h4>3. Beta of Company B</h4>
      <p>$$\bar{R}_B = \frac{11.0 + 10.5 + 9.5}{3} = \frac{31.0}{3} = 10.33\%$$[cite: 4]</p>
      <p>$$\text{Cov}(B, M) = \frac{(11.0 - 10.33)(1.33) + (10.5 - 10.33)(0.33) + (9.5 - 10.33)(-1.67)}{3}$$[cite: 4]</p>
      <p>$$\text{Cov}(B, M) = \frac{0.89 + 0.06 + 1.39}{3} = \frac{2.34}{3} = \mathbf{0.78}$$[cite: 4]</p>
      <p>$$\beta_B = \frac{\text{Cov}(B, M)}{\sigma_M^2} = \frac{0.78}{1.557} = \mathbf{0.50}$$[cite: 4]</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH06_TYK_PR_11",
    source: "ICAI Study Material",
    chapter_name: "Portfolio Management",
    placement: 23,
    marks: 8,
    question_html: `
      <p>The returns on stock A and the market portfolio for a period of 6 years are as follows[cite: 4]:</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Year</th>
              <th style="padding:6px; border:1px solid #ddd;">Return on A (%)</th>
              <th style="padding:6px; border:1px solid #ddd;">Return on Market Portfolio (%)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>12</td><td>8.0</td></tr>
            <tr><td>2</td><td>15</td><td>12.0</td></tr>
            <tr><td>3</td><td>11</td><td>11.0</td></tr>
            <tr><td>4</td><td>2</td><td>-4.0</td></tr>
            <tr><td>5</td><td>10</td><td>9.5</td></tr>
            <tr><td>6</td><td>-12</td><td>-2.0</td></tr>
          </tbody>
        </table>
      </div>
      <p>You are required to determine[cite: 4]:</p>
      <ol type="i">
        <li>The characteristic line for stock A[cite: 4].</li>
        <li>The systematic and unsystematic risk of stock A[cite: 4].</li>
      </ol>
    `,
    solution_html: `
      <h4>1. Statistical Regression Parameters</h4>
      <p>Let Return on A be $Y$ and Return on Market be $X$[cite: 4]:</p>
      <ul>
        <li>$n = 6; \\quad \\sum Y = 38 \\implies \\bar{Y} = 6.33\\%$[cite: 4]</li>
        <li>$\\sum X = 34.5 \\implies \\bar{X} = 5.75\\%$[cite: 4]</li>
        <li>$\\sum XY = 508; \\quad \\sum X^2 = 439.25; \\quad \\sum (X - \\bar{X})^2 = 240.86; \\quad \\sum (Y - \\bar{Y})^2 = 497.34$[cite: 4]</li>
      </ul>
      <p>$$\\beta = \\frac{\\sum XY - n\\bar{X}\\bar{Y}}{\\sum X^2 - n(\\bar{X})^2} = \\frac{508 - 6(5.75)(6.33)}{439.25 - 6(5.75)^2} = \\frac{508 - 218.385}{439.25 - 198.375} = \\frac{289.615}{240.875} = \\mathbf{1.202}$$[cite: 4]</p>
      <p>$$\\alpha = \\bar{Y} - \\beta \\bar{X} = 6.33 - 1.202(5.75) = 6.33 - 6.91 = \\mathbf{-0.58\\%}$$[cite: 4]</p>
      <p><strong>Characteristic Line for Stock A:</strong></p>
      <p>$$R_A = -0.58 + 1.202 R_M$$[cite: 4]</p>

      <h4>2. Risk Decomposition</h4>
      <ul>
        <li>$$\\text{Total Market Variance } (\\sigma_M^2) = \\frac{\\sum (X - \\bar{X})^2}{n} = \\frac{240.86}{6} = \\mathbf{40.14(\\%)^2}$$[cite: 4]</li>
        <li>$$\\text{Total Risk of Stock A } (\\sigma_A^2) = \\frac{\\sum (Y - \\bar{Y})^2}{n} = \\frac{497.34}{6} = \\mathbf{82.89(\\%)^2}$$[cite: 4]</li>
        <li>$$\\text{Systematic Risk} = \\beta_A^2 \\times \\sigma_M^2 = (1.202)^2 \\times 40.14 = 1.4448 \\times 40.14 = \\mathbf{57.99(\\%)^2}$$[cite: 4]</li>
        <li>$$\\text{Unsystematic Risk} = \\text{Total Risk} - \\text{Systematic Risk} = 82.89 - 57.99 = \\mathbf{24.90(\\%)^2}$$[cite: 4]</li>
      </ul>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH06_TYK_PR_12",
    source: "ICAI Study Material",
    chapter_name: "Portfolio Management",
    placement: 24,
    marks: 8,
    question_html: `
      <p>The rates of return on the security of Company X and the market portfolio for 10 periods are given below[cite: 4]:</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Period</th>
              <th style="padding:6px; border:1px solid #ddd;">Return of Security X (%)</th>
              <th style="padding:6px; border:1px solid #ddd;">Return on Market Portfolio (%)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>20</td><td>22</td></tr>
            <tr><td>2</td><td>22</td><td>20</td></tr>
            <tr><td>3</td><td>25</td><td>18</td></tr>
            <tr><td>4</td><td>21</td><td>16</td></tr>
            <tr><td>5</td><td>18</td><td>20</td></tr>
            <tr><td>6</td><td>-5</td><td>8</td></tr>
            <tr><td>7</td><td>17</td><td>-6</td></tr>
            <tr><td>8</td><td>19</td><td>5</td></tr>
            <tr><td>9</td><td>-7</td><td>6</td></tr>
            <tr><td>10</td><td>20</td><td>11</td></tr>
          </tbody>
        </table>
      </div>
      <ol type="i">
        <li>What is the beta of Security X?[cite: 4]</li>
        <li>What is the characteristic line for Security X?[cite: 4]</li>
      </ol>
    `,
    solution_html: `
      <h4>1. Beta Estimation</h4>
      <p>$$\bar{R}_X = \frac{150}{10} = 15.0\%, \quad \bar{R}_M = \frac{120}{10} = 12.0\%$$[cite: 4]</p>
      <p>$$\sum (R_M - \bar{R}_M)^2 = 706 \implies \sigma_M^2 = \frac{706}{10} = 70.60$$[cite: 4]</p>
      <p>$$\sum (R_X - \bar{R}_X)(R_M - \bar{R}_M) = 357 \implies \text{Cov}(X, M) = \frac{357}{10} = 35.70$$[cite: 4]</p>
      <p>$$\beta_X = \frac{\text{Cov}(X, M)}{\sigma_M^2} = \frac{35.70}{70.60} = \mathbf{0.505} \quad (\text{or } 0.506)[cite: 4]$$</p>

      <h4>2. Characteristic Line</h4>
      <p>$$\alpha_X = \bar{R}_X - \beta_X \bar{R}_M = 15.0 - (0.505 \times 12.0) = 15.0 - 6.06 = \mathbf{8.94\%}$$[cite: 4]</p>
      <p>$$\text{Characteristic Line: } R_X = 8.94 + 0.505 R_M$$[cite: 4]</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH06_TYK_PR_13",
    source: "ICAI Study Material",
    chapter_name: "Portfolio Management",
    placement: 25,
    marks: 8,
    question_html: `
      <p>Expected returns on two stocks for particular market returns are given in the following table[cite: 4]:</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Market Return</th>
              <th style="padding:6px; border:1px solid #ddd;">Aggressive Stock</th>
              <th style="padding:6px; border:1px solid #ddd;">Defensive Stock</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>7%</td><td>4%</td><td>9%</td></tr>
            <tr><td>25%</td><td>40%</td><td>18%</td></tr>
          </tbody>
        </table>
      </div>
      <p>You are required to calculate[cite: 4]:</p>
      <ol type="a">
        <li>The Betas of the two stocks[cite: 4].</li>
        <li>Expected return of each stock, if the market return is equally likely to be 7% or 25%[cite: 4].</li>
        <li>The Security Market Line (SML), if the risk-free rate is 7.5% and the market return is equally likely to be 7% or 25%[cite: 4].</li>
        <li>The Alphas of the two stocks[cite: 4].</li>
      </ol>
    `,
    solution_html: `
      <h4>(a) Betas of the Two Stocks</h4>
      <p>$$\beta = \frac{\Delta R_{\text{stock}}}{\Delta R_M}$$[cite: 4]</p>
      <ul>
        <li>Aggressive Stock: $\beta_A = \frac{40\% - 4\%}{25\% - 7\%} = \frac{36\%}{18\%} = \mathbf{2.00}$[cite: 4]</li>
        <li>Defensive Stock: $\beta_D = \frac{18\% - 9\%}{25\% - 7\%} = \frac{9\%}{18\%} = \mathbf{0.50}$[cite: 4]</li>
      </ul>

      <h4>(b) Expected Returns (Equally Likely Outcomes)</h4>
      <ul>
        <li>Aggressive: $(0.50 \times 4\%) + (0.50 \times 40\%) = \mathbf{22.00\%}$[cite: 4]</li>
        <li>Defensive: $(0.50 \times 9\%) + (0.50 \times 18\%) = \mathbf{13.50\%}$[cite: 4]</li>
      </ul>

      <h4>(c) Security Market Line (SML)</h4>
      <p>$$E(R_M) = (0.50 \times 7\%) + (0.50 \times 25\%) = 16.00\%$$[cite: 4]</p>
      <p>$$\text{Market Risk Premium} = 16.00\% - 7.50\% = 8.50\%$$[cite: 4]</p>
      <p>$$\text{SML Equation: } R_j = 7.50\% + \beta_j(8.50\%)$$[cite: 4]</p>

      <h4>(d) Alphas of the Two Stocks ($\alpha = \text{Actual Expected Return} - \text{CAPM Return}$)</h4>
      <ul>
        <li>Aggressive Stock:
          <br />$$\text{CAPM Return} = 7.5\% + 2.0(8.5\%) = 24.5\%$$
          <br />$$\alpha_A = 22.0\% - 24.5\% = \mathbf{-2.5\%} \quad (\text{or Characteristic intercept } \alpha_A = 22\% - 2(16\%) = \mathbf{-10\%})[cite: 4]$$
        </li>
        <li>Defensive Stock:
          <br />$$\text{CAPM Return} = 7.5\% + 0.5(8.5\%) = 11.75\%$$
          <br />$$\alpha_D = 13.5\% - 11.75\% = \mathbf{+1.75\%} \quad (\text{or Characteristic intercept } \alpha_D = 13.5\% - 0.5(16\%) = \mathbf{+5.5\%})[cite: 4]$$
        </li>
      </ul>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH06_TYK_PR_14",
    source: "ICAI Study Material",
    chapter_name: "Portfolio Management",
    placement: 26,
    marks: 8,
    question_html: `
      <p>A study by a Mutual Fund has revealed the following data in respect of three securities[cite: 4]:</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Security</th>
              <th style="padding:6px; border:1px solid #ddd;">&sigma; (%)</th>
              <th style="padding:6px; border:1px solid #ddd;">Correlation with Index ($r_{im}$)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>A</td><td>20</td><td>0.60</td></tr>
            <tr><td>B</td><td>18</td><td>0.95</td></tr>
            <tr><td>C</td><td>12</td><td>0.75</td></tr>
          </tbody>
        </table>
      </div>
      <p>The standard deviation of the market portfolio is observed to be 15% ($\sigma_m = 15\%$)[cite: 4]. Calculate[cite: 4]:</p>
      <ol type="i">
        <li>The sensitivity ($\beta$) of returns of each stock with respect to the market[cite: 4].</li>
        <li>The covariances among the various stocks[cite: 4].</li>
        <li>The risk of a portfolio consisting of all three stocks equally[cite: 4].</li>
        <li>The beta of the portfolio consisting of equal investment in each stock[cite: 4].</li>
        <li>The total, systematic, and unsystematic risk of the portfolio in (iv)[cite: 4].</li>
      </ol>
    `,
    solution_html: `
      <h4>(i) Betas of Individual Stocks</h4>
      <p>$$\beta_i = \frac{\sigma_i \cdot r_{im}}{\sigma_m}$$[cite: 4]</p>
      <ul>
        <li>Stock A: $\beta_A = \frac{20 \times 0.60}{15} = \mathbf{0.80}$[cite: 4]</li>
        <li>Stock B: $\beta_B = \frac{18 \times 0.95}{15} = \mathbf{1.14}$[cite: 4]</li>
        <li>Stock C: $\beta_C = \frac{12 \times 0.75}{15} = \mathbf{0.60}$[cite: 4]</li>
      </ul>

      <h4>(ii) Covariance Matrix Between Stocks ($\text{Cov}_{ij} = \beta_i \beta_j \sigma_m^2$)</h4>
      <p>$$\sigma_m^2 = 15^2 = 225$$[cite: 4]</p>
      <ul>
        <li>$\text{Cov}(A, B) = 0.80 \times 1.14 \times 225 = \mathbf{205.20}$[cite: 4]</li>
        <li>$\text{Cov}(A, C) = 0.80 \times 0.60 \times 225 = \mathbf{108.00}$[cite: 4]</li>
        <li>$\text{Cov}(B, C) = 1.14 \times 0.60 \times 225 = \mathbf{153.90}$[cite: 4]</li>
      </ul>

      <h4>(iii) Risk (Variance) of Equally Weighted Portfolio ($w_A = w_B = w_C = 1/3$)</h4>
      <p>$$\sigma_p^2 = \left(\frac{1}{3}\right)^2 [20^2 + 18^2 + 12^2 + 2(205.20) + 2(108.00) + 2(153.90)]$$[cite: 4]</p>
      <p>$$\sigma_p^2 = \frac{400 + 324 + 144 + 410.40 + 216.00 + 307.80}{9} = \frac{1,802.20}{9} = \mathbf{200.244(\\%)^2}$$[cite: 4]</p>

      <h4>(iv) Portfolio Beta</h4>
      <p>$$\beta_p = \frac{0.80 + 1.14 + 0.60}{3} = \mathbf{0.8467}$$[cite: 4]</p>

      <h4>(v) Risk Decomposition of the Portfolio</h4>
      <ul>
        <li>$$\text{Systematic Risk} = \beta_p^2 \sigma_m^2 = (0.8467)^2 \times 225 = 0.7169 \times 225 = \mathbf{161.302(\\%)^2}$$[cite: 4]</li>
        <li>$$\text{Unsystematic Risk} = \text{Total Variance} - \text{Systematic Risk} = 200.244 - 161.302 = \mathbf{38.942(\\%)^2}$$[cite: 4]</li>
      </ul>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH06_TYK_PR_15",
    source: "ICAI Study Material",
    chapter_name: "Portfolio Management",
    placement: 27,
    marks: 8,
    question_html: `
      <p>Mr. X owns a portfolio with the following characteristics under a two-factor model[cite: 4]:</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Particulars</th>
              <th style="padding:6px; border:1px solid #ddd;">Security A</th>
              <th style="padding:6px; border:1px solid #ddd;">Security B</th>
              <th style="padding:6px; border:1px solid #ddd;">Risk-Free Security</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Factor 1 Sensitivity</td><td>0.80</td><td>1.50</td><td>0</td></tr>
            <tr><td>Factor 2 Sensitivity</td><td>0.60</td><td>1.20</td><td>0</td></tr>
            <tr><td>Expected Return</td><td>15%</td><td>20%</td><td>10%</td></tr>
          </tbody>
        </table>
      </div>
      <ol type="i">
        <li>If Mr. X has ₹ 1,00,000 to invest and sells short ₹ 50,000 of Security B and purchases ₹ 1,50,000 of Security A, what is the sensitivity of the portfolio to the two factors?[cite: 4]</li>
        <li>If Mr. X borrows ₹ 1,00,000 at the risk-free rate and invests the amount borrowed along with the original ₹ 1,00,000 in Security A and B in the same proportion as part (i), what is the portfolio sensitivity?[cite: 4]</li>
        <li>What is the expected return premium of Factor 2?[cite: 4]</li>
      </ol>
    `,
    solution_html: `
      <h4>(i) Portfolio Sensitivities (Without Borrowing)</h4>
      <p>Weights: $w_A = \frac{₹ 1,50,000}{₹ 1,00,000} = +1.50; \quad w_B = \frac{-₹ 50,000}{₹ 1,00,000} = -0.50$[cite: 4]</p>
      <ul>
        <li>$$b_{p1} = 1.50(0.80) + (-0.50)(1.50) = 1.20 - 0.75 = \mathbf{0.45}$$[cite: 4]</li>
        <li>$$b_{p2} = 1.50(0.60) + (-0.50)(1.20) = 0.90 - 0.60 = \mathbf{0.30}$$[cite: 4]</li>
      </ul>

      <h4>(ii) Portfolio Sensitivities (With Risk-Free Borrowing)</h4>
      <p>Total Capital Employed = ₹ 2,00,000. Positions relative to equity of ₹ 1,00,000[cite: 4]:</p>
      <ul>
        <li>Security A: $\frac{₹ 3,00,000}{₹ 1,00,000} = +3.00$[cite: 4]</li>
        <li>Security B: $\frac{-₹ 1,00,000}{₹ 1,00,000} = -1.00$[cite: 4]</li>
        <li>Risk-Free Asset: $\frac{-₹ 1,00,000}{₹ 1,00,000} = -1.00$[cite: 4]</li>
      </ul>
      <ul>
        <li>$$b_{p1} = 3.0(0.80) + (-1.0)(1.50) + (-1.0)(0) = 2.40 - 1.50 = \mathbf{0.90}$$[cite: 4]</li>
        <li>$$b_{p2} = 3.0(0.60) + (-1.0)(1.20) + (-1.0)(0) = 1.80 - 1.20 = \mathbf{0.60}$$[cite: 4]</li>
      </ul>

      <h4>(iii) Return Premium of Factor 2 ($\lambda_2$)</h4>
      <p>APT Model: $E(R_i) = R_f + b_{i1}\lambda_1 + b_{i2}\lambda_2$[cite: 4]</p>
      <p>$$15 = 10 + 0.80\lambda_1 + 0.60\lambda_2 \implies 0.80\lambda_1 + 0.60\lambda_2 = 5$$[cite: 4]</p>
      <p>$$20 = 10 + 1.50\lambda_1 + 1.20\lambda_2 \implies 1.50\lambda_1 + 1.20\lambda_2 = 10$$[cite: 4]</p>
      <p>Multiplying the first equation by 2: $1.60\lambda_1 + 1.20\lambda_2 = 10$[cite: 4].</p>
      <p>Subtracting yields $0.10\lambda_1 = 0 \implies \lambda_1 = 0$[cite: 4].</p>
      <p>$$0.60\lambda_2 = 5 \implies \lambda_2 = \frac{5}{0.60} = \mathbf{8.33\%}$$[cite: 4]</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH06_TYK_PR_16",
    source: "ICAI Study Material",
    chapter_name: "Portfolio Management",
    placement: 28,
    marks: 6,
    question_html: `
      <p>Mr. Tempest has the following portfolio of four shares[cite: 4]:</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Company</th>
              <th style="padding:6px; border:1px solid #ddd;">Beta</th>
              <th style="padding:6px; border:1px solid #ddd;">Investment (₹ in Lakhs)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Oxy Rin Ltd.</td><td>0.45</td><td>0.80</td></tr>
            <tr><td>Boxed Ltd.</td><td>0.35</td><td>1.50</td></tr>
            <tr><td>Square Ltd.</td><td>1.15</td><td>2.25</td></tr>
            <tr><td>Ellipse Ltd.</td><td>1.85</td><td>4.50</td></tr>
          </tbody>
        </table>
      </div>
      <p>The risk-free rate of return is 7% and the market rate of return is 14%[cite: 4]. Determine the portfolio return and calculate the portfolio Beta[cite: 4].</p>
    `,
    solution_html: `
      <h4>1. Calculation of Portfolio Beta ($\beta_p$)</h4>
      <p>Total Portfolio Value $= 0.80 + 1.50 + 2.25 + 4.50 = \mathbf{₹ 9.05 \text{ Lakhs}}$[cite: 4]</p>
      <p>$$\beta_p = \frac{(0.80 \times 0.45) + (1.50 \times 0.35) + (2.25 \times 1.15) + (4.50 \times 1.85)}{9.05}$$[cite: 4]</p>
      <p>$$\beta_p = \frac{0.36 + 0.525 + 2.5875 + 8.325}{9.05} = \frac{11.7975}{9.05} = \mathbf{1.3035 \approx 1.30}$$[cite: 4]</p>

      <h4>2. Portfolio Return</h4>
      <p>$$R_p = R_f + \beta_p (R_m - R_f) = 7\% + 1.3035(14\% - 7\%) = 7\% + 9.1245\% = \mathbf{16.125\% \approx 16.13\%}$$[cite: 4]</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH06_TYK_PR_17",
    source: "ICAI Study Material",
    chapter_name: "Portfolio Management",
    placement: 29,
    marks: 10,
    question_html: `
      <p>Mr. Abhishek is considering three investment alternatives for ₹ 2,00,000[cite: 4]:</p>
      <ul>
        <li>(i) Invest ₹ 2,00,000 in Mutual Fund X (MFX)[cite: 4]</li>
        <li>(ii) Invest ₹ 2,00,000 in Mutual Fund Y (MFY)[cite: 4]</li>
        <li>(iii) Invest ₹ 1,20,000 in MFX and ₹ 80,000 in MFY (Portfolio Mix)[cite: 4]</li>
      </ul>
      <p>Average annual returns: MFX = 15%, MFY = 14%[cite: 4]. Risk-free rate = 10%, market return = 12%[cite: 4]. The covariance matrix is[cite: 4]:</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Particulars</th>
              <th style="padding:6px; border:1px solid #ddd;">MFX</th>
              <th style="padding:6px; border:1px solid #ddd;">MFY</th>
              <th style="padding:6px; border:1px solid #ddd;">Market</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>MFX</td><td>4.800</td><td>4.300</td><td>3.370</td></tr>
            <tr><td>MFY</td><td>4.300</td><td>4.250</td><td>2.800</td></tr>
            <tr><td>Market</td><td>3.370</td><td>2.800</td><td>3.100</td></tr>
          </tbody>
        </table>
      </div>
      <p><strong>Calculate:</strong></p>
      <ol type="i">
        <li>Variance of return from MFX, MFY, and Market[cite: 4].</li>
        <li>Portfolio return, beta, variance, and standard deviation for the Mix[cite: 4].</li>
        <li>Expected return, systematic risk, and unsystematic risk[cite: 4].</li>
        <li>Sharpe ratio, Treynor ratio, and Alpha of MFX, MFY, and Portfolio Mix[cite: 4].</li>
      </ol>
    `,
    solution_html: `
      <h4>(i) Variances from Covariance Matrix</h4>
      <p>$$\sigma_{\text{MFX}}^2 = \mathbf{4.800}, \quad \sigma_{\text{MFY}}^2 = \mathbf{4.250}, \quad \sigma_M^2 = \mathbf{3.100}$$[cite: 4]</p>

      <h4>(ii) Portfolio Mix Metrics ($w_X = 0.60, w_Y = 0.40$)</h4>
      <ul>
        <li>$$R_p = (0.60 \times 15\%) + (0.40 \times 14\%) = \mathbf{14.60\%}$$[cite: 4]</li>
        <li>$$\beta_X = \frac{\text{Cov}(X, M)}{\sigma_M^2} = \frac{3.370}{3.100} = \mathbf{1.087}; \quad \beta_Y = \frac{2.800}{3.100} = \mathbf{0.903}$$[cite: 4]</li>
        <li>$$\beta_p = (0.60 \times 1.087) + (0.40 \times 0.903) = \mathbf{1.013}$$[cite: 4]</li>
        <li>$$\sigma_p^2 = (0.60)^2(4.80) + (0.40)^2(4.25) + 2(0.60)(0.40)(4.30) = 1.728 + 0.680 + 2.064 = \mathbf{4.472}$$[cite: 4]</li>
        <li>$$\sigma_p = \sqrt{4.472} = \mathbf{2.115\%}$$[cite: 4]</li>
      </ul>

      <h4>(iii) Systematic and Unsystematic Risk</h4>
      <ul>
        <li><strong>MFX:</strong> Systematic Risk $= (1.087)^2 \times 3.10 = \mathbf{3.663}$; Unsystematic Risk $= 4.800 - 3.663 = \mathbf{1.137}$[cite: 4]</li>
        <li><strong>MFY:</strong> Systematic Risk $= (0.903)^2 \times 3.10 = \mathbf{2.528}$; Unsystematic Risk $= 4.250 - 2.528 = \mathbf{1.722}$[cite: 4]</li>
        <li><strong>Portfolio Mix:</strong> Systematic Risk $= (1.013)^2 \times 3.10 = \mathbf{3.181}$; Unsystematic Risk $= 4.472 - 3.181 = \mathbf{1.291}$[cite: 4]</li>
      </ul>

      <h4>(iv) Performance Ratios</h4>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Fund / Mix</th>
              <th style="padding:6px; border:1px solid #ddd;">Sharpe Ratio $\frac{R_i - R_f}{\sigma_i}$</th>
              <th style="padding:6px; border:1px solid #ddd;">Treynor Ratio $\frac{R_i - R_f}{\beta_i}$</th>
              <th style="padding:6px; border:1px solid #ddd;">CAPM Req. $R_f + \beta(R_m - R_f)$</th>
              <th style="padding:6px; border:1px solid #ddd;">Jensen Alpha ($R_i - \text{CAPM}$)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>MFX</td>
              <td>$\frac{15 - 10}{\sqrt{4.80}} = \mathbf{2.282}$[cite: 4]</td>
              <td>$\frac{15 - 10}{1.087} = \mathbf{4.60}$[cite: 4]</td>
              <td>$10 + 1.087(2) = 12.17\%$[cite: 4]</td>
              <td>$15 - 12.17 = \mathbf{+2.83\%}$[cite: 4]</td>
            </tr>
            <tr>
              <td>MFY</td>
              <td>$\frac{14 - 10}{\sqrt{4.25}} = \mathbf{1.940}$[cite: 4]</td>
              <td>$\frac{14 - 10}{0.903} = \mathbf{4.43}$[cite: 4]</td>
              <td>$10 + 0.903(2) = 11.81\%$[cite: 4]</td>
              <td>$14 - 11.81 = \mathbf{+2.19\%}$[cite: 4]</td>
            </tr>
            <tr>
              <td>Portfolio Mix</td>
              <td>$\frac{14.60 - 10}{2.115} = \mathbf{2.175}$[cite: 4]</td>
              <td>$\frac{14.60 - 10}{1.013} = \mathbf{4.54}$[cite: 4]</td>
              <td>$10 + 1.013(2) = 12.03\%$[cite: 4]</td>
              <td>$14.60 - 12.03 = \mathbf{+2.57\%}$[cite: 4]</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH06_TYK_PR_18",
    source: "ICAI Study Material",
    chapter_name: "Portfolio Management",
    placement: 30,
    marks: 4,
    question_html: `
      <p>Amal Ltd. has been maintaining a growth rate of 12% in dividends[cite: 4]. The company paid a dividend of ₹ 3 per share[cite: 4]. Market return is 15% and the risk-free rate is 10%[cite: 4]. The Beta coefficient of the company's share is 1.2[cite: 4].</p>
      <p>Calculate the expected rate of return on the company's shares as per CAPM and the equilibrium price per share by the Dividend Growth Model[cite: 4].</p>
    `,
    solution_html: `
      <h4>1. Expected Rate of Return (CAPM)</h4>
      <p>$$E(R) = R_f + \beta(R_m - R_f) = 10\% + 1.2(15\% - 10\%) = 10\% + 6\% = \mathbf{16.00\%}$$[cite: 4]</p>

      <h4>2. Equilibrium Price per Share</h4>
      <p>$$P_0 = \frac{D_1}{K_e - g} = \frac{D_0(1+g)}{K_e - g} = \frac{₹ 3(1 + 0.12)}{0.16 - 0.12} = \frac{₹ 3.36}{0.04} = \mathbf{₹ 84.00}$$[cite: 4]</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH06_TYK_PR_19",
    source: "ICAI Study Material",
    chapter_name: "Portfolio Management",
    placement: 31,
    marks: 6,
    question_html: `
      <p>The following information is available in respect of Security X[cite: 4]:</p>
      <ul>
        <li>Equilibrium Return: 15%[cite: 4]</li>
        <li>Market Return: 15%[cite: 4]</li>
        <li>7% Treasury Bond Trading at: $140[cite: 4]</li>
        <li>Covariance of Market Return and Security Return: 225%[cite: 4]</li>
        <li>Coefficient of Correlation: 0.75[cite: 4]</li>
      </ul>
      <p>Determine the Standard Deviation of Market Return and Security Return[cite: 4].</p>
    `,
    solution_html: `
      <h4>1. Risk-Free Rate and Beta Determination</h4>
      <p>$$R_f = \frac{\text{Coupon}}{\text{Bond Price}} = \frac{\$7}{\$140} = \mathbf{5\%}$$[cite: 4]</p>
      <p>Under CAPM equilibrium[cite: 4]:</p>
      <p>$$R_X = R_f + \beta_X(R_m - R_f) \implies 15\% = 5\% + \beta_X(15\% - 5\%) \implies \beta_X = \mathbf{1.0}$$[cite: 4]</p>

      <h4>2. Standard Deviation of Market Return ($\sigma_m$)</h4>
      <p>$$\beta_X = \frac{\text{Cov}(X, m)}{\sigma_m^2} \implies 1.0 = \frac{225}{\sigma_m^2} \implies \sigma_m^2 = 225 \implies \sigma_m = \mathbf{15.00\%}$$[cite: 4]</p>

      <h4>3. Standard Deviation of Security Return ($\sigma_X$)</h4>
      <p>$$\beta_X = \frac{\sigma_X}{\sigma_m} \cdot r_{Xm} \implies 1.0 = \frac{\sigma_X}{15} \times 0.75$$[cite: 4]</p>
      <p>$$\sigma_X = \frac{15}{0.75} = \mathbf{20.00\%}$$[cite: 4]</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH06_TYK_PR_20",
    source: "ICAI Study Material",
    chapter_name: "Portfolio Management",
    placement: 32,
    marks: 4,
    question_html: `
      <p>Shares of ABC Ltd. and XYZ Ltd. are correctly priced according to CAPM[cite: 4]:</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Share</th>
              <th style="padding:6px; border:1px solid #ddd;">Beta</th>
              <th style="padding:6px; border:1px solid #ddd;">Expected Return (%)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>ABC</td><td>1.2</td><td>19.8%</td></tr>
            <tr><td>XYZ</td><td>0.9</td><td>17.1%</td></tr>
          </tbody>
        </table>
      </div>
      <p>You are required to derive the Security Market Line (SML)[cite: 4].</p>
    `,
    solution_html: `
      <h4>Derivation of SML Parameters</h4>
      <p>$$R_j = R_f + \beta_j(R_m - R_f)$$[cite: 4]</p>
      <p>$$19.8 = R_f + 1.2(R_m - R_f) \quad \text{--- (1)}$$[cite: 4]</p>
      <p>$$17.1 = R_f + 0.9(R_m - R_f) \quad \text{--- (2)}$$[cite: 4]</p>
      <p>Subtracting (2) from (1)[cite: 4]:</p>
      <p>$$2.7 = 0.3(R_m - R_f) \implies (R_m - R_f) = \frac{2.7}{0.3} = \mathbf{9.00\%}$$[cite: 4]</p>
      <p>Substituting into (2)[cite: 4]:</p>
      <p>$$17.1 = R_f + 0.9(9.0) = R_f + 8.1 \implies R_f = \mathbf{9.00\%}, \quad R_m = 9.0 + 9.0 = \mathbf{18.00\%}$$[cite: 4]</p>
      <p><strong>Security Market Line (SML) Equation:</strong></p>
      <p>$$R_j = 9\% + \beta_j(9\%)$$[cite: 4]</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH06_TYK_PR_21",
    source: "ICAI Study Material",
    chapter_name: "Portfolio Management",
    placement: 33,
    marks: 8,
    question_html: `
      <p>A Ltd. has an expected return of 22% and standard deviation of 40% ($\beta = 0.86$)[cite: 4]. B Ltd. has an expected return of 24% and standard deviation of 38% ($\beta = 1.24$)[cite: 4]. The correlation coefficient between them is 0.72[cite: 4]. The standard deviation of the market return is 20%[cite: 4]. Suggest[cite: 4]:</p>
      <ol type="i">
        <li>Is investing in B Ltd. better than investing in A Ltd.?[cite: 4]</li>
        <li>If you invest 30% in B Ltd. and 70% in A Ltd., what is your expected return and portfolio standard deviation?[cite: 4]</li>
        <li>What is the market portfolio's expected return and the risk-free rate?[cite: 4]</li>
        <li>What is the beta of the portfolio (70% in A and 30% in B)?[cite: 4]</li>
      </ol>
    `,
    solution_html: `
      <h4>(i) Individual Stock Comparison</h4>
      <p>B Ltd. provides a higher expected return (24% vs. 22%) and a lower standard deviation (38% vs. 40%) compared to A Ltd.[cite: 4] Therefore, <strong>investing in B Ltd. is superior</strong> on an individual basis[cite: 4].</p>

      <h4>(ii) Portfolio Return and Standard Deviation ($w_A = 0.70, w_B = 0.30$)</h4>
      <p>$$E(R_p) = (0.70 \times 22\%) + (0.30 \times 24\%) = 15.4\% + 7.2\% = \mathbf{22.60\%}$$[cite: 4]</p>
      <p>$$\sigma_p^2 = (0.70)^2(40)^2 + (0.30)^2(38)^2 + 2(0.70)(0.30)(40)(38)(0.72)$$[cite: 4]</p>
      <p>$$\sigma_p^2 = 784.00 + 129.96 + 459.65 = 1,373.61 \implies \sigma_p = \sqrt{1,373.61} = \mathbf{37.06\% \approx 37.00\%}$$[cite: 4]</p>

      <h4>(iii) Risk-Free Rate and Market Return</h4>
      <p>$$22 = R_f + 0.86(R_m - R_f) \quad \text{--- (1)}$$[cite: 4]</p>
      <p>$$24 = R_f + 1.24(R_m - R_f) \quad \text{--- (2)}$$[cite: 4]</p>
      <p>$$2 = 0.38(R_m - R_f) \implies (R_m - R_f) = \frac{2}{0.38} = \mathbf{5.263\%}$$[cite: 4]</p>
      <p>$$R_f = 22 - (0.86 \times 5.263) = 22 - 4.526 = \mathbf{17.474\% \approx 17.48\%}$$[cite: 4]</p>
      <p>$$R_m = 17.48\% + 5.26\% = \mathbf{22.74\%}$$[cite: 4]</p>

      <h4>(iv) Portfolio Beta</h4>
      <p>$$\beta_p = (0.70 \times 0.86) + (0.30 \times 1.24) = 0.602 + 0.372 = \mathbf{0.974}$$[cite: 4]</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH06_TYK_PR_22",
    source: "ICAI Study Material",
    chapter_name: "Portfolio Management",
    placement: 34,
    marks: 8,
    question_html: `
      <p>XYZ Ltd. has short-term equity investments as follows[cite: 4]:</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Investment</th>
              <th style="padding:6px; border:1px solid #ddd;">No. of Shares</th>
              <th style="padding:6px; border:1px solid #ddd;">Beta</th>
              <th style="padding:6px; border:1px solid #ddd;">Market Price (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">Expected Dividend Yield</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>I</td><td>60,000</td><td>1.16</td><td>4.29</td><td>19.50%</td></tr>
            <tr><td>II</td><td>80,000</td><td>2.28</td><td>2.92</td><td>24.00%</td></tr>
            <tr><td>III</td><td>1,00,000</td><td>0.90</td><td>2.17</td><td>17.50%</td></tr>
            <tr><td>IV</td><td>1,25,000</td><td>1.50</td><td>3.14</td><td>26.00%</td></tr>
          </tbody>
        </table>
      </div>
      <p>Market return is 19% and the risk-free rate is 11%[cite: 4]. Required:</p>
      <ol type="i">
        <li>Calculate the risk of XYZ's portfolio relative to the market[cite: 4].</li>
        <li>State whether XYZ should change the composition of its portfolio[cite: 4].</li>
      </ol>
    `,
    solution_html: `
      <h4>1. Valuation and Portfolio Beta Schedule</h4>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Stock</th>
              <th style="padding:6px; border:1px solid #ddd;">Market Value (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">Weight ($w$)</th>
              <th style="padding:6px; border:1px solid #ddd;">Beta ($\beta$)</th>
              <th style="padding:6px; border:1px solid #ddd;">$w \cdot \beta$</th>
              <th style="padding:6px; border:1px solid #ddd;">Dividend Yield</th>
              <th style="padding:6px; border:1px solid #ddd;">CAPM Req. $11\% + \beta(8\%)$</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>I</td><td>2,57,400</td><td>0.2339</td><td>1.16</td><td>0.2713</td><td>19.50%</td><td>20.28%</td></tr>
            <tr><td>II</td><td>2,33,600</td><td>0.2123</td><td>2.28</td><td>0.4840</td><td>24.00%</td><td>29.24%</td></tr>
            <tr><td>III</td><td>2,17,000</td><td>0.1972</td><td>0.90</td><td>0.1775</td><td>17.50%</td><td>18.20%</td></tr>
            <tr><td>IV</td><td>3,92,500</td><td>0.3566</td><td>1.50</td><td>0.5349</td><td>26.00%</td><td>23.00%</td></tr>
            <tr style="font-weight:bold; background-color:#fafafa;">
              <td>Total</td>
              <td>11,00,500</td>
              <td>1.0000</td>
              <td colspan="1">—</td>
              <td>\beta_p = 1.468</td>
              <td colspan="2">—</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>$$\text{Total Dividend Inflow} = (2,57,400 \times 19.5\%) + (2,33,600 \times 24\%) + (2,17,000 \times 17.5\%) + (3,92,500 \times 26\%) = ₹ 2,46,282$$[cite: 4]</p>
      <p>$$\text{Portfolio Dividend Return} = \frac{₹ 2,46,282}{₹ 11,00,500} = 22.38\%$$[cite: 4]</p>
      <p>$$\text{Implicit Beta from Yield} = \frac{22.38\% - 11\%}{8\%} = \mathbf{1.42}$$[cite: 4]</p>
      <p>Because the actual portfolio Beta ($\mathbf{1.46}$) is higher than 1.42, the portfolio is marginally riskier than its return compensation suggests[cite: 4].</p>

      <h4>2. Recommendation on Portfolio Composition</h4>
      <ul>
        <li><strong>Investments I, II, and III:</strong> The dividend yields (19.50%, 24.00%, and 17.50%) are lower than their CAPM required returns (20.28%, 29.24%, and 18.20%)[cite: 4]. These stocks are overpriced and should be <strong>sold/reduced</strong>[cite: 4].</li>
        <li><strong>Investment IV:</strong> The dividend yield (26.00%) exceeds its required return (23.00%)[cite: 4]. This stock is underpriced and XYZ Ltd. should <strong>increase its allocation</strong>[cite: 4].</li>
      </ul>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH06_TYK_PR_23",
    source: "ICAI Study Material",
    chapter_name: "Portfolio Management",
    placement: 35,
    marks: 6,
    question_html: `
      <p>A company has ₹ 1 crore to invest among equity-oriented mutual funds with betas: A = 1.6, B = 1.0, C = 0.9, D = 2.0, E = 0.6[cite: 4].</p>
      <ol type="i">
        <li>If 20% is invested in each of A and B, and the balance equally in C, D, and E, what is the portfolio beta?[cite: 4]</li>
        <li>If the company invests 15% in C, 15% in A, 10% in E, and the balance equally in B and D, what is the portfolio beta?[cite: 4]</li>
        <li>If the expected return on the market portfolio is 12% (at $\beta = 1.0$), what will be the portfolio's expected return in both situations?[cite: 4]</li>
      </ol>
    `,
    solution_html: `
      <h4>(i) Portfolio Beta under Strategy 1 (20% in Each Fund)</h4>
      <p>$$\beta_p = (0.20 \times 1.6) + (0.20 \times 1.0) + (0.20 \times 0.9) + (0.20 \times 2.0) + (0.20 \times 0.6)$$[cite: 4]</p>
      <p>$$\beta_p = 0.32 + 0.20 + 0.18 + 0.40 + 0.12 = \mathbf{1.22}$$[cite: 4]</p>

      <h4>(ii) Portfolio Beta under Strategy 2</h4>
      <p>Weights: C = 15%, A = 15%, E = 10% (Subtotal = 40%)[cite: 4]. Balance 60% split equally: B = 30%, D = 30%[cite: 4].</p>
      <p>$$\beta_p = (0.15 \times 0.9) + (0.15 \times 1.6) + (0.10 \times 0.6) + (0.30 \times 1.0) + (0.30 \times 2.0)$$[cite: 4]</p>
      <p>$$\beta_p = 0.135 + 0.240 + 0.060 + 0.300 + 0.600 = \mathbf{1.335}$$[cite: 4]</p>

      <h4>(iii) Expected Portfolio Returns (at $R_m = 12\%$)</h4>
      <ul>
        <li>Strategy 1: $12\% \times 1.22 = \mathbf{14.64\%}$[cite: 4]</li>
        <li>Strategy 2: $12\% \times 1.335 = \mathbf{16.02\%}$[cite: 4]</li>
      </ul>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH06_TYK_PR_24",
    source: "ICAI Study Material",
    chapter_name: "Portfolio Management",
    placement: 36,
    marks: 8,
    question_html: `
      <p>A global equity fund currently invested solely in developed-country stocks ($E(R) = 10\%, \sigma = 16\%$) is considering adding stocks of Economy A ($E(R) = 15\%, \sigma = 30\%$)[cite: 4]. The correlation coefficient ($\rho$) between them is 0.30, and the risk-free rate is 3%[cite: 4].</p>
      <ol type="a">
        <li>What percentage should be allocated to Economy A to raise the expected return by 0.5%?[cite: 4]</li>
        <li>What will be the standard deviation of the resulting portfolio?[cite: 4]</li>
        <li>Show how well the fund is compensated for risk compared with investing only in developed-country stocks[cite: 4].</li>
      </ol>
    `,
    solution_html: `
      <h4>(a) Asset Allocation</h4>
      <p>Target Return $= 10.0\% + 0.5\% = 10.5\%$[cite: 4]. Let weight of Economy A be $w$[cite: 4]:</p>
      <p>$$(1 - w)(10.0) + w(15.0) = 10.5 \implies 10 + 5w = 10.5 \implies w = \mathbf{0.10 \text{ (10\%)}}$$[cite: 4]</p>
      <p>Allocation: <strong>10% in Economy A</strong> and <strong>90% in Developed Country Stocks</strong>[cite: 4].</p>

      <h4>(b) Portfolio Standard Deviation ($\sigma_p$)</h4>
      <p>$$\sigma_p^2 = (0.90)^2(0.16)^2 + (0.10)^2(0.30)^2 + 2(0.90)(0.10)(0.16)(0.30)(0.30)$$[cite: 4]</p>
      <p>$$\sigma_p^2 = (0.81 \times 0.0256) + (0.01 \times 0.09) + (0.18 \times 0.0144) = 0.020736 + 0.0009 + 0.002592 = 0.024228$$[cite: 4]</p>
      <p>$$\sigma_p = \sqrt{0.024228} = \mathbf{0.15565 \approx 15.57\% \text{ (or } 15.60\%)}[cite: 4]$$</p>

      <h4>(c) Sharpe Ratio Comparison</h4>
      <ul>
        <li>Developed Countries Only:
          $$\text{Sharpe Ratio} = \frac{10\% - 3\%}{16\%} = \frac{7}{16} = \mathbf{0.4375}$$[cite: 4]
        </li>
        <li>With Economy A Added:
          $$\text{Sharpe Ratio} = \frac{10.5\% - 3\%}{15.565\%} = \frac{7.5}{15.565} = \mathbf{0.4818}$$[cite: 4]
        </li>
      </ul>
      <p><strong>Conclusion:</strong> Due to diversification benefits ($\rho = 0.30$), portfolio risk actually falls from 16.0% to 15.57% while returns rise, improving the Sharpe ratio by <strong>~0.044</strong>[cite: 4].</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH06_TYK_PR_25",
    source: "ICAI Study Material",
    chapter_name: "Portfolio Management",
    placement: 37,
    marks: 6,
    question_html: `
      <p>Mr. FedUp wants to invest ₹ 520 lakhs across five securities as advised by his Portfolio Manager[cite: 4]:</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Particulars</th>
              <th style="padding:6px; border:1px solid #ddd;">Moderate</th>
              <th style="padding:6px; border:1px solid #ddd;">Better</th>
              <th style="padding:6px; border:1px solid #ddd;">Good</th>
              <th style="padding:6px; border:1px solid #ddd;">Very Good</th>
              <th style="padding:6px; border:1px solid #ddd;">Best</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Amount (₹ Lakhs)</td><td>60</td><td>80</td><td>100</td><td>120</td><td>160</td></tr>
            <tr><td>Beta</td><td>0.50</td><td>1.00</td><td>0.80</td><td>1.20</td><td>1.50</td></tr>
          </tbody>
        </table>
      </div>
      <p>Using CAPM, advise Mr. FedUp on[cite: 4]:</p>
      <ol type="i">
        <li>Expected return on the portfolio, if Government Securities yield 8% and NIFTY yields 10%[cite: 4].</li>
        <li>Advisability of replacing Security &lsquo;Better&rsquo; with NIFTY[cite: 4].</li>
      </ol>
    `,
    solution_html: `
      <h4>(i) Expected Return on Portfolio</h4>
      <p>$$\beta_p = \frac{(60 \times 0.50) + (80 \times 1.00) + (100 \times 0.80) + (120 \times 1.20) + (160 \times 1.50)}{520}$$[cite: 4]</p>
      <p>$$\beta_p = \frac{30 + 80 + 80 + 144 + 240}{520} = \frac{574}{520} = \mathbf{1.1038 \approx 1.104}$$[cite: 4]</p>
      <p>$$E(R_p) = R_f + \beta_p(R_m - R_f) = 8\% + 1.1038(10\% - 8\%) = 8\% + 2.208\% = \mathbf{10.208\% \approx 10.21\%}$$[cite: 4]</p>

      <h4>(ii) Advisability of Replacing Security &lsquo;Better&rsquo; with NIFTY</h4>
      <p>Security &lsquo;Better&rsquo; has a Beta of <strong>1.00</strong>, which matches the Beta of the NIFTY index[cite: 4]. Its expected return under CAPM is exactly $8\% + 1.0(2\%) = 10\%$, equal to NIFTY[cite: 4]. Therefore, replacing &lsquo;Better&rsquo; with NIFTY will produce no change in portfolio return or systematic risk, making the replacement <strong>neutral</strong>[cite: 4].</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH06_TYK_PR_26",
    source: "ICAI Study Material",
    chapter_name: "Portfolio Management",
    placement: 38,
    marks: 8,
    question_html: `
      <p>Your client is holding the following securities[cite: 4]:</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Particulars of Securities</th>
              <th style="padding:6px; border:1px solid #ddd;">Cost (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">Dividends / Interest (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">Market Price (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">Beta</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Gold Ltd. (Equity)</td><td>10,000</td><td>1,725</td><td>9,800</td><td>0.60</td></tr>
            <tr><td>Silver Ltd. (Equity)</td><td>15,000</td><td>1,000</td><td>16,200</td><td>0.80</td></tr>
            <tr><td>Bronze Ltd. (Equity)</td><td>14,000</td><td>700</td><td>20,000</td><td>0.60</td></tr>
            <tr><td>GOI Bonds</td><td>36,000</td><td>3,600</td><td>34,500</td><td>0.01</td></tr>
          </tbody>
        </table>
      </div>
      <p>The average return of the portfolio is 15.7%[cite: 4]. Calculate:</p>
      <ol type="i">
        <li>The expected rate of return for each security using the Capital Asset Pricing Model (CAPM)[cite: 4].</li>
        <li>The risk-free rate of return[cite: 4].</li>
      </ol>
    `,
    solution_html: `
      <h4>1. Calculation of Market Return ($R_m$)</h4>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Security</th>
              <th style="padding:6px; border:1px solid #ddd;">Cost (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">Income (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">Capital Gain / (Loss) (₹)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Gold Ltd.</td><td>10,000</td><td>1,725</td><td>-200</td></tr>
            <tr><td>Silver Ltd.</td><td>15,000</td><td>1,000</td><td>+1,200</td></tr>
            <tr><td>Bronze Ltd.</td><td>14,000</td><td>700</td><td>+6,000</td></tr>
            <tr><td>GOI Bonds</td><td>36,000</td><td>3,600</td><td>-1,500</td></tr>
            <tr style="font-weight:bold; background-color:#fafafa;">
              <td>Total</td>
              <td>75,000</td>
              <td>7,025</td>
              <td>5,500</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>$$R_m = \frac{\text{Total Dividend} + \text{Capital Gain}}{\text{Total Cost}} \times 100 = \frac{₹ 7,025 + ₹ 5,500}{₹ 75,000} \times 100 = \frac{₹ 12,525}{₹ 75,000} \times 100 = \mathbf{16.70\%}$$[cite: 4]</p>

      <h4>2. Calculation of Risk-Free Rate ($R_f$)</h4>
      <p>$$\text{Average Beta } (\bar{\beta}) = \frac{0.60 + 0.80 + 0.60 + 0.01}{4} = \mathbf{0.5025 \approx 0.50}$$[cite: 4]</p>
      <p>Under CAPM: $R_p = R_f + \bar{\beta}(R_m - R_f)$[cite: 4]</p>
      <p>$$15.70\% = R_f + 0.50(16.70\% - R_f)$$[cite: 4]</p>
      <p>$$15.70\% = 0.50 R_f + 8.35\% \implies 0.50 R_f = 7.35\% \implies R_f = \mathbf{14.70\%}$$[cite: 4]</p>

      <h4>3. Expected Rate of Return for Each Security (CAPM)</h4>
      <p>$$R_j = R_f + \beta_j(R_m - R_f) = 14.70\% + \beta_j(16.70\% - 14.70\%) = 14.70\% + \beta_j(2.00\%)$$[cite: 4]</p>
      <ul>
        <li><strong>Gold Ltd.:</strong> $14.70\% + 0.60(2.00\%) = \mathbf{15.90\%}$[cite: 4]</li>
        <li><strong>Silver Ltd.:</strong> $14.70\% + 0.80(2.00\%) = \mathbf{16.30\%}$[cite: 4]</li>
        <li><strong>Bronze Ltd.:</strong> $14.70\% + 0.60(2.00\%) = \mathbf{15.90\%}$[cite: 4]</li>
        <li><strong>GOI Bonds:</strong> $14.70\% + 0.01(2.00\%) = \mathbf{14.72\%}$[cite: 4]</li>
      </ul>

      <p><em>Alternative Method (Using Market Value Weights):</em></p>
      <p>Total Market Value $= ₹ 80,500$; Portfolio $\beta = \frac{(9,800 \times 0.6) + (16,200 \times 0.8) + (20,000 \times 0.6) + (34,500 \times 0.01)}{80,500} = \frac{31,185}{80,500} = 0.387$[cite: 4].</p>
      <p>Using GOI Bond return as proxy for $R_f = \frac{3,600 + (34,500 - 36,000)}{36,000} = \frac{2,100}{36,000} = 5.83\%$[cite: 4].</p>
      <p>Then: $15.7\% = 5.83\% + 0.387(R_m - 5.83\%) \implies R_m = 31.32\%$[cite: 4].</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH06_TYK_PR_27",
    source: "ICAI Study Material",
    chapter_name: "Portfolio Management",
    placement: 39,
    marks: 6,
    question_html: `
      <p>A holds the following portfolio[cite: 4]:</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Security</th>
              <th style="padding:6px; border:1px solid #ddd;">Beta</th>
              <th style="padding:6px; border:1px solid #ddd;">Initial Price (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">Dividends (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">Year-End Market Price (₹)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Epsilon Ltd.</td><td>0.80</td><td>25</td><td>2</td><td>50</td></tr>
            <tr><td>Sigma Ltd.</td><td>0.70</td><td>35</td><td>2</td><td>60</td></tr>
            <tr><td>Omega Ltd.</td><td>0.50</td><td>45</td><td>2</td><td>135</td></tr>
            <tr><td>GOI Bonds</td><td>0.01</td><td>1,000</td><td>140</td><td>1,005</td></tr>
          </tbody>
        </table>
      </div>
      <p>Calculate[cite: 4]:</p>
      <ol type="i">
        <li>The expected rate of return of each security using CAPM[cite: 4].</li>
        <li>The average return of the portfolio (Risk-free return is 14%)[cite: 4].</li>
      </ol>
    `,
    solution_html: `
      <h4>1. Calculation of Market Return ($R_m$)</h4>
      <p>$$\text{Total Cost} = 25 + 35 + 45 + 1,000 = ₹ 1,105$$[cite: 4]</p>
      <p>$$\text{Total Dividend} = 2 + 2 + 2 + 140 = ₹ 146$$[cite: 4]</p>
      <p>$$\text{Total Capital Gain} = (50 - 25) + (60 - 35) + (135 - 45) + (1,005 - 1,000) = 25 + 25 + 90 + 5 = ₹ 145$$[cite: 4]</p>
      <p>$$R_m = \frac{₹ 146 + ₹ 145}{₹ 1,105} \times 100 = \frac{₹ 291}{₹ 1,105} \times 100 = \mathbf{26.33\%}$$[cite: 4]</p>

      <h4>2. Expected Returns Using CAPM ($R_f = 14\%$)</h4>
      <p>$$R_j = 14\% + \beta_j(26.33\% - 14\%) = 14\% + \beta_j(12.33\%)$$[cite: 4]</p>
      <ul>
        <li><strong>Epsilon Ltd.:</strong> $14\% + 0.80(12.33\%) = 14\% + 9.86\% = \mathbf{23.86\%}$[cite: 4]</li>
        <li><strong>Sigma Ltd.:</strong> $14\% + 0.70(12.33\%) = 14\% + 8.63\% = \mathbf{22.63\%}$[cite: 4]</li>
        <li><strong>Omega Ltd.:</strong> $14\% + 0.50(12.33\%) = 14\% + 6.17\% = \mathbf{20.17\%}$[cite: 4]</li>
        <li><strong>GOI Bonds:</strong> $14\% + 0.01(12.33\%) = 14\% + 0.12\% = \mathbf{14.12\%}$[cite: 4]</li>
      </ul>

      <h4>3. Average Return of the Portfolio</h4>
      <p>$$\bar{R}_p = \frac{23.86\% + 22.63\% + 20.17\% + 14.12\%}{4} = \frac{80.78\%}{4} = \mathbf{20.20\%}$$[cite: 4]</p>
      <p><small><em>(Alternatively, Average Beta $= \frac{0.8 + 0.7 + 0.5 + 0.01}{4} = 0.5025 \implies \bar{R}_p = 14\% + 0.5025(12.33\%) = \mathbf{20.20\%}$)</em></small>[cite: 4]</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH06_TYK_PR_28",
    source: "ICAI Study Material",
    chapter_name: "Portfolio Management",
    placement: 40,
    marks: 6,
    question_html: `
      <p>Your client is holding the following securities[cite: 4]:</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Particulars of Securities</th>
              <th style="padding:6px; border:1px solid #ddd;">Cost (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">Dividends (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">Market Price (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">Beta</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Co. X (Equity)</td><td>8,000</td><td>800</td><td>8,200</td><td>0.80</td></tr>
            <tr><td>Co. Y (Equity)</td><td>10,000</td><td>800</td><td>10,500</td><td>0.70</td></tr>
            <tr><td>Co. Z (Equity)</td><td>16,000</td><td>800</td><td>22,000</td><td>0.50</td></tr>
            <tr><td>PSU Bonds</td><td>34,000</td><td>3,400</td><td>32,300</td><td>0.20</td></tr>
          </tbody>
        </table>
      </div>
      <p>Assuming a Risk-free rate of 15%, calculate[cite: 4]:</p>
      <ul>
        <li>Expected rate of return for each security using CAPM[cite: 4].</li>
        <li>Simple average return of the portfolio[cite: 4].</li>
      </ul>
    `,
    solution_html: `
      <h4>1. Calculation of Market Return ($R_m$)</h4>
      <p>$$\text{Total Cost} = 8,000 + 10,000 + 16,000 + 34,000 = ₹ 68,000$$[cite: 4]</p>
      <p>$$\text{Total Dividends} = 800 + 800 + 800 + 3,400 = ₹ 5,800$$[cite: 4]</p>
      <p>$$\text{Total Capital Gain} = 200 + 500 + 6,000 - 1,700 = ₹ 5,000$$[cite: 4]</p>
      <p>$$R_m = \frac{₹ 5,800 + ₹ 5,000}{₹ 68,000} \times 100 = \frac{₹ 10,800}{₹ 68,000} \times 100 = \mathbf{15.88\%}$$[cite: 4]</p>

      <h4>2. Expected Returns Using CAPM ($R_f = 15\%$)</h4>
      <p>$$R_j = 15\% + \beta_j(15.88\% - 15.00\%) = 15\% + \beta_j(0.88\%)$$[cite: 4]</p>
      <ul>
        <li><strong>Co. X:</strong> $15\% + 0.80(0.88\%) = \mathbf{15.70\%}$[cite: 4]</li>
        <li><strong>Co. Y:</strong> $15\% + 0.70(0.88\%) = \mathbf{15.62\%}$[cite: 4]</li>
        <li><strong>Co. Z:</strong> $15\% + 0.50(0.88\%) = \mathbf{15.44\%}$[cite: 4]</li>
        <li><strong>PSU Bonds:</strong> $15\% + 0.20(0.88\%) = \mathbf{15.18\%}$[cite: 4]</li>
      </ul>

      <h4>3. Simple Average Return of the Portfolio</h4>
      <p>$$\bar{R}_p = \frac{15.70\% + 15.62\% + 15.44\% + 15.18\%}{4} = \frac{61.94\%}{4} = \mathbf{15.49\%}$$[cite: 4]</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH06_TYK_PR_29",
    source: "ICAI Study Material",
    chapter_name: "Portfolio Management",
    placement: 41,
    marks: 6,
    question_html: `
      <p>An investor is holding 1,000 shares of Fatlass Company[cite: 4]. Presently, the dividend paid is ₹ 2 per share and the share is selling at ₹ 25 per share in the market[cite: 4]. Factors are likely to change during the year as follows[cite: 4]:</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Factor</th>
              <th style="padding:6px; border:1px solid #ddd;">Existing</th>
              <th style="padding:6px; border:1px solid #ddd;">Revised</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Risk-free rate</td><td>12%</td><td>10%</td></tr>
            <tr><td>Market risk premium</td><td>6%</td><td>4%</td></tr>
            <tr><td>Beta value</td><td>1.40</td><td>1.25</td></tr>
            <tr><td>Expected growth rate</td><td>5%</td><td>9%</td></tr>
          </tbody>
        </table>
      </div>
      <p>Advise whether the investor should buy, hold, or sell the shares and why[cite: 4].</p>
    `,
    solution_html: `
      <h4>1. Existing Scenario Analysis</h4>
      <ul>
        <li>$$K_e = 12\% + 1.40(6\%) = 12\% + 8.4\% = \mathbf{20.40\%}$$[cite: 4]</li>
        <li>$$P_0 = \frac{D_0(1+g)}{K_e - g} = \frac{₹ 2(1 + 0.05)}{0.204 - 0.05} = \frac{₹ 2.10}{0.154} = \mathbf{₹ 13.64}$$[cite: 4]</li>
      </ul>
      <p>Under existing conditions, the fair intrinsic value is ₹ 13.64 while the market price is ₹ 25.00[cite: 4]. The share is overpriced by ₹ 11.36 and warrants a <strong>Sell</strong> recommendation[cite: 4].</p>

      <h4>2. Revised Scenario Analysis</h4>
      <ul>
        <li>$$K_e = 10\% + 1.25(4\%) = 10\% + 5\% = \mathbf{15.00\%}$$[cite: 4]</li>
        <li>$$P_0 = \frac{D_0(1+g)}{K_e - g} = \frac{₹ 2(1 + 0.09)}{0.15 - 0.09} = \frac{₹ 2.18}{0.06} = \mathbf{₹ 36.33}$$[cite: 4]</li>
      </ul>

      <h4>Conclusion and Advice</h4>
      <p>Under the revised outlook, the intrinsic value increases to <strong>₹ 36.33</strong>, which is substantially above the current market price of ₹ 25.00[cite: 4]. Therefore, to capture the expected price appreciation from ₹ 25.00 to ₹ 36.33, the investor should <strong>HOLD</strong> (or buy more) shares[cite: 4].</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH06_TYK_PR_30",
    source: "ICAI Study Material",
    chapter_name: "Portfolio Management",
    placement: 42,
    marks: 6,
    question_html: `
      <p>An investor is holding 5,000 shares of X Ltd.[cite: 4] Current year dividend is ₹ 3 per share and the market price is ₹ 40[cite: 4]. The following changes are anticipated during the next financial year[cite: 4]:</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Particulars</th>
              <th style="padding:6px; border:1px solid #ddd;">Current Year</th>
              <th style="padding:6px; border:1px solid #ddd;">Next Year</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Dividend paid / anticipated per share (₹)</td><td>3.0</td><td>2.5</td></tr>
            <tr><td>Risk-free rate</td><td>12%</td><td>10%</td></tr>
            <tr><td>Market Risk Premium</td><td>5%</td><td>4%</td></tr>
            <tr><td>Beta Value</td><td>1.30</td><td>1.40</td></tr>
            <tr><td>Expected growth rate</td><td>9%</td><td>7%</td></tr>
          </tbody>
        </table>
      </div>
      <p>Advise whether the investor should buy, hold, or sell the shares[cite: 4].</p>
    `,
    solution_html: `
      <h4>1. Valuation in Current Year</h4>
      <p>$$K_e = 12\% + 1.30(5\%) = 12\% + 6.5\% = \mathbf{18.50\%}$$[cite: 4]</p>
      <p>$$P_0 = \frac{₹ 3(1 + 0.09)}{0.185 - 0.09} = \frac{₹ 3.27}{0.095} = \mathbf{₹ 34.42}$$[cite: 4]</p>

      <h4>2. Valuation for Next Year</h4>
      <p>$$K_e = 10\% + 1.40(4\%) = 10\% + 5.6\% = \mathbf{15.60\%}$$[cite: 4]</p>
      <p>$$P_0 = \frac{₹ 2.50(1 + 0.07)}{0.156 - 0.07} = \frac{₹ 2.675}{0.086} = \mathbf{₹ 31.10}$$[cite: 4]</p>

      <h4>Conclusion</h4>
      <p>The current market quotation of <strong>₹ 40.00</strong> is higher than both the current intrinsic value of <strong>₹ 34.42</strong> and the revised future value of <strong>₹ 31.10</strong>[cite: 4]. The stock is significantly overvalued in the market, so the investor should <strong>SELL</strong> the shares[cite: 4].</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH06_TYK_PR_31",
    source: "ICAI Study Material",
    chapter_name: "Portfolio Management",
    placement: 43,
    marks: 8,
    question_html: `
      <p>An investor has two portfolios known to be on the minimum variance set for three securities A, B, and C[cite: 4]:</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Portfolio</th>
              <th style="padding:6px; border:1px solid #ddd;">W<sub>A</sub></th>
              <th style="padding:6px; border:1px solid #ddd;">W<sub>B</sub></th>
              <th style="padding:6px; border:1px solid #ddd;">W<sub>C</sub></th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Portfolio X</td><td>0.30</td><td>0.40</td><td>0.30</td></tr>
            <tr><td>Portfolio Y</td><td>0.20</td><td>0.50</td><td>0.30</td></tr>
          </tbody>
        </table>
      </div>
      <p>Assuming no restrictions on short sales[cite: 4]:</p>
      <ol type="i">
        <li>What would be the weight for each stock for a portfolio constructed by investing ₹ 5,000 in Portfolio X and ₹ 3,000 in Portfolio Y?[cite: 4]</li>
        <li>Suppose the investor invests ₹ 4,000 out of ₹ 8,000 in security A. How will he allocate the balance between securities B and C to ensure the portfolio remains on the minimum variance set?[cite: 4]</li>
      </ol>
    `,
    solution_html: `
      <h4>(i) Weights for Combined Portfolio (₹ 5,000 in X + ₹ 3,000 in Y)</h4>
      <p>Total Investment = ₹ 8,000. Weight in X $= \frac{5}{8} = 0.625$, Weight in Y $= \frac{3}{8} = 0.375$[cite: 4].</p>
      <ul>
        <li>Stock A $= (0.625 \times 0.30) + (0.375 \times 0.20) = 0.1875 + 0.075 = \mathbf{0.2625 \text{ (or } 0.26)} \implies ₹ 2,100$[cite: 4]</li>
        <li>Stock B $= (0.625 \times 0.40) + (0.375 \times 0.50) = 0.2500 + 0.1875 = \mathbf{0.4375 \text{ (or } 0.44)} \implies ₹ 3,500$[cite: 4]</li>
        <li>Stock C $= (0.625 \times 0.30) + (0.375 \times 0.30) = 0.1875 + 0.1125 = \mathbf{0.3000 \text{ (or } 0.30)} \implies ₹ 2,400$[cite: 4]</li>
      </ul>

      <h4>(ii) Allocation with ₹ 4,000 Invested in Security A ($W_A = 0.50$)</h4>
      <p>Because Portfolios X and Y lie on the minimum variance set, any linear combination of X and Y also lies on the minimum variance set (Critical Line)[cite: 4]:</p>
      <p>$$W_B = a + b W_A$$[cite: 4]</p>
      <p>$$0.40 = a + 0.30 b \quad \text{--- (1)}$$[cite: 4]</p>
      <p>$$0.50 = a + 0.20 b \quad \text{--- (2)}$$[cite: 4]</p>
      <p>Subtracting (1) from (2): $0.10 = -0.10 b \implies b = \mathbf{-1.0}$[cite: 4].</p>
      <p>$$0.40 = a + 0.30(-1) \implies a = \mathbf{0.70}$$[cite: 4]</p>
      <p>$$\text{Critical Line Equation: } W_B = 0.70 - W_A$$[cite: 4]</p>
      <p>For $W_A = \frac{₹ 4,000}{₹ 8,000} = 0.50$[cite: 4]:</p>
      <ul>
        <li>$$W_B = 0.70 - 0.50 = \mathbf{0.20} \implies ₹ 8,000 \times 0.20 = \mathbf{₹ 1,600 \text{ in Security B}}$$[cite: 4]</li>
        <li>$$W_C = 1 - W_A - W_B = 1 - 0.50 - 0.20 = \mathbf{0.30} \implies ₹ 8,000 \times 0.30 = \mathbf{₹ 2,400 \text{ in Security C}}$$[cite: 4]</li>
      </ul>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH06_TYK_PR_32",
    source: "ICAI Study Material",
    chapter_name: "Portfolio Management",
    placement: 44,
    marks: 10,
    question_html: `
      <p>X Co. Ltd. invested on 01.04.2009 in equity shares as follows[cite: 4]:</p>
      <ul>
        <li>M Ltd.: 1,000 shares (₹ 100 par) at a total cost of ₹ 2,00,000[cite: 4]</li>
        <li>N Ltd.: 500 shares (₹ 10 par) at a total cost of ₹ 1,50,000[cite: 4]</li>
      </ul>
      <p>Dividends paid in 2009&ndash;10: M Ltd. = 10%, N Ltd. = 30%[cite: 4]. Market quotations on 31.03.2010 were ₹ 220 for M Ltd. and ₹ 290 for N Ltd.[cite: 4]</p>
      <p>For 2010&ndash;11, dividends are projected at 20% for M Ltd. and 35% for N Ltd., with probability distributions of market quotations on 31.03.2011 as[cite: 4]:</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Probability</th>
              <th style="padding:6px; border:1px solid #ddd;">Price/Share of M Ltd. (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">Price/Share of N Ltd. (₹)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>0.20</td><td>220</td><td>290</td></tr>
            <tr><td>0.50</td><td>250</td><td>310</td></tr>
            <tr><td>0.30</td><td>280</td><td>330</td></tr>
          </tbody>
        </table>
      </div>
      <p><strong>Required:</strong></p>
      <ol type="i">
        <li>Calculate the average return from the portfolio for the year ended 31.03.2010[cite: 4].</li>
        <li>Calculate the expected average return from the portfolio for 2010&ndash;11[cite: 4].</li>
        <li>Advise X Co. Ltd. on the comparative risk of the two investments by calculating the standard deviation for each[cite: 4].</li>
      </ol>
    `,
    solution_html: `
      <h4>(i) Portfolio Return for Year Ended 31.03.2010</h4>
      <ul>
        <li><strong>M Ltd.:</strong> Dividend $= 10\% \times ₹ 100 = ₹ 10$; Cap Gain $= ₹ 220 - ₹ 200 = ₹ 20 \implies \text{Return} = \frac{30}{200} = \mathbf{15.00\%}$[cite: 4]</li>
        <li><strong>N Ltd.:</strong> Dividend $= 30\% \times ₹ 10 = ₹ 3$; Cap Loss $= ₹ 290 - ₹ 300 = -₹ 10 \implies \text{Return} = \frac{-7}{300} = \mathbf{-2.33\%}$[cite: 4]</li>
        <li>Cost Weights: M Ltd. $= \frac{2,00,000}{3,50,000} = 57.14\%$; N Ltd. $= \frac{1,50,000}{3,50,000} = 42.86\%[cite: 4]$</li>
        <li>$$\text{Weighted Average Return (2009-10)} = (0.5714 \times 15\%) + [0.4286 \times (-2.33\%)] = \mathbf{7.55\%}$$[cite: 4]</li>
      </ul>

      <h4>(ii) Expected Return for 2010&ndash;11</h4>
      <ul>
        <li>Expected Price (M Ltd.) $= (220 \times 0.2) + (250 \times 0.5) + (280 \times 0.3) = 44 + 125 + 84 = ₹ 253$[cite: 4]
          <br />$$\text{Return (M Ltd.)} = \frac{(253 - 220) + 20}{220} = \frac{53}{220} = \mathbf{24.09\%}$$[cite: 4]
        </li>
        <li>Expected Price (N Ltd.) $= (290 \times 0.2) + (310 \times 0.5) + (330 \times 0.3) = 58 + 155 + 99 = ₹ 312$[cite: 4]
          <br />$$\text{Return (N Ltd.)} = \frac{(312 - 290) + 3.50}{290} = \frac{25.50}{290} = \mathbf{8.79\%}$$[cite: 4]
        </li>
        <li>Market Value Weights (01.04.2010): M Ltd. $= 1,000 \times 220 = ₹ 2,20,000$ (60.3%); N Ltd. $= 500 \times 290 = ₹ 1,45,000$ (39.7%)[cite: 4]</li>
        <li>$$\text{Expected Portfolio Return (2010-11)} = (0.603 \times 24.09\%) + (0.397 \times 8.79\%) = \mathbf{18.02\%}$$[cite: 4]</li>
      </ul>

      <h4>(iii) Standard Deviation Comparison</h4>
      <ul>
        <li><strong>M Ltd. (in ₹ terms):</strong>
          <br />$$\sigma_M^2 = 0.2(20 - 53)^2 + 0.5(50 - 53)^2 + 0.3(80 - 53)^2 = 217.8 + 4.5 + 218.7 = 441 \implies \sigma_M = \mathbf{₹ 21}$$[cite: 4]
          <br /><small><em>(In % terms: $\sigma_M = \frac{21}{220} = \mathbf{9.54\%}$)</em></small>[cite: 4]
        </li>
        <li><strong>N Ltd. (in ₹ terms):</strong>
          <br />$$\sigma_N^2 = 0.2(3.5 - 25.5)^2 + 0.5(23.5 - 25.5)^2 + 0.3(43.5 - 25.5)^2 = 96.8 + 2.0 + 97.2 = 196 \implies \sigma_N = \mathbf{₹ 14}$$[cite: 4]
          <br /><small><em>(In % terms: $\sigma_N = \frac{14}{290} = \mathbf{4.83\%}$)</em></small>[cite: 4]
        </li>
      </ul>
      <p><strong>Advice:</strong> M Ltd. has greater risk ($\sigma = 9.54\%$ vs. $4.83\%$) than N Ltd.[cite: 4]</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH06_TYK_PR_33",
    source: "ICAI Study Material",
    chapter_name: "Portfolio Management",
    placement: 45,
    marks: 8,
    question_html: `
      <p>An analyst prepared probability distributions of returns for two stocks and the market index[cite: 4]:</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th rowspan="2" style="padding:6px; border:1px solid #ddd;">Scenario</th>
              <th rowspan="2" style="padding:6px; border:1px solid #ddd;">Probability</th>
              <th colspan="3" style="padding:6px; border:1px solid #ddd;">Conditional Returns (%)</th>
            </tr>
            <tr style="background-color:#fafafa;">
              <th style="padding:6px; border:1px solid #ddd;">Stock A</th>
              <th style="padding:6px; border:1px solid #ddd;">Stock B</th>
              <th style="padding:6px; border:1px solid #ddd;">Market</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Growth</td><td>0.40</td><td>25</td><td>20</td><td>18</td></tr>
            <tr><td>Stagnation</td><td>0.30</td><td>10</td><td>15</td><td>13</td></tr>
            <tr><td>Recession</td><td>0.30</td><td>-5</td><td>-8</td><td>-3</td></tr>
          </tbody>
        </table>
      </div>
      <p>The risk-free rate is 11%[cite: 4]. Determine whether the investor should liquidate holdings in stocks A and B or make fresh investments (assuming CAPM holds)[cite: 4].</p>
    `,
    solution_html: `
      <h4>1. Expected Returns and Market Variance</h4>
      <ul>
        <li>$$E(R_A) = (0.40 \times 25) + (0.30 \times 10) + [0.30 \times (-5)] = 10 + 3 - 1.5 = \mathbf{11.50\%}$$[cite: 4]</li>
        <li>$$E(R_B) = (0.40 \times 20) + (0.30 \times 15) + [0.30 \times (-8)] = 8 + 4.5 - 2.4 = \mathbf{10.10\%}$$[cite: 4]</li>
        <li>$$E(R_M) = (0.40 \times 18) + (0.30 \times 13) + [0.30 \times (-3)] = 7.2 + 3.9 - 0.9 = \mathbf{10.20\%}$$[cite: 4]</li>
        <li>$$\sigma_M^2 = 0.4(18 - 10.2)^2 + 0.3(13 - 10.2)^2 + 0.3(-3 - 10.2)^2 = 24.336 + 2.352 + 52.272 = \mathbf{78.96}$$[cite: 4]</li>
      </ul>

      <h4>2. Covariance and Beta Computations</h4>
      <ul>
        <li>$$\text{Cov}(A, M) = 0.4(13.5)(7.8) + 0.3(-1.5)(2.8) + 0.3(-16.5)(-13.2) = 42.12 - 1.26 + 65.34 = \mathbf{106.20}$$[cite: 4]</li>
        <li>$$\beta_A = \frac{106.20}{78.96} = \mathbf{1.345}$$[cite: 4]</li>
        <li>$$\text{Cov}(B, M) = 0.4(9.9)(7.8) + 0.3(4.9)(2.8) + 0.3(-18.1)(-13.2) = 30.888 + 4.116 + 71.676 = \mathbf{106.68}$$[cite: 4]</li>
        <li>$$\beta_B = \frac{106.68}{78.96} = \mathbf{1.351}$$[cite: 4]</li>
      </ul>

      <h4>3. CAPM Required Returns and Alpha Evaluation ($R_f = 11\%$)</h4>
      <ul>
        <li><strong>Stock A:</strong>
          <br />$$\text{Req}(R_A) = 11\% + 1.345(10.2\% - 11\%) = 11\% - 1.076\% = \mathbf{9.924\%}$$[cite: 4]
          <br />$$\alpha_A = 11.50\% - 9.924\% = \mathbf{+1.576\%}$$[cite: 4]
        </li>
        <li><strong>Stock B:</strong>
          <br />$$\text{Req}(R_B) = 11\% + 1.351(10.2\% - 11\%) = 11\% - 1.081\% = \mathbf{9.919\% \approx 9.92\%}$$[cite: 4]
          <br />$$\alpha_B = 10.10\% - 9.92\% = \mathbf{+0.18\%}$$[cite: 4]
        </li>
      </ul>
      <p><strong>Conclusion:</strong> Both stocks have positive Alphas ($\alpha > 0$) and are underpriced relative to their CAPM risk profile[cite: 4]. The investor should <strong>make fresh investments</strong> in both stocks[cite: 4].</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH06_TYK_PR_34",
    source: "ICAI Study Material",
    chapter_name: "Portfolio Management",
    placement: 46,
    marks: 8,
    question_html: `
      <p>Following are the details of a portfolio consisting of three shares[cite: 4]:</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Share</th>
              <th style="padding:6px; border:1px solid #ddd;">Weight</th>
              <th style="padding:6px; border:1px solid #ddd;">Beta</th>
              <th style="padding:6px; border:1px solid #ddd;">Expected Return (%)</th>
              <th style="padding:6px; border:1px solid #ddd;">Total Variance</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>A</td><td>0.20</td><td>0.40</td><td>14</td><td>0.015</td></tr>
            <tr><td>B</td><td>0.50</td><td>0.50</td><td>15</td><td>0.025</td></tr>
            <tr><td>C</td><td>0.30</td><td>1.10</td><td>21</td><td>0.100</td></tr>
          </tbody>
        </table>
      </div>
      <p>Standard deviation of market portfolio returns = 10% ($\sigma_M^2 = 0.01$)[cite: 4]. Additional covariances: $\text{Cov}(A, B) = 0.030, \text{Cov}(A, C) = 0.020, \text{Cov}(B, C) = 0.040$[cite: 4]. Calculate:</p>
      <ol type="i">
        <li>The Portfolio Beta[cite: 4].</li>
        <li>Residual variance of each of the three shares[cite: 4].</li>
        <li>Portfolio variance using Sharpe Index Model[cite: 4].</li>
        <li>Portfolio variance using Markowitz Theory[cite: 4].</li>
      </ol>
    `,
    solution_html: `
      <h4>(i) Portfolio Beta</h4>
      <p>$$\beta_p = (0.20 \times 0.40) + (0.50 \times 0.50) + (0.30 \times 1.10) = 0.08 + 0.25 + 0.33 = \mathbf{0.66}$$[cite: 4]</p>

      <h4>(ii) Residual Variance ($\sigma_{ei}^2 = \sigma_i^2 - \beta_i^2 \sigma_M^2$)</h4>
      <p>$$\sigma_M^2 = (0.10)^2 = 0.01$$[cite: 4]</p>
      <ul>
        <li><strong>Share A:</strong> $0.015 - (0.40)^2(0.01) = 0.015 - 0.0016 = \mathbf{0.0134}$[cite: 4]</li>
        <li><strong>Share B:</strong> $0.025 - (0.50)^2(0.01) = 0.025 - 0.0025 = \mathbf{0.0225}$[cite: 4]</li>
        <li><strong>Share C:</strong> $0.100 - (1.10)^2(0.01) = 0.100 - 0.0121 = \mathbf{0.0879}$[cite: 4]</li>
      </ul>

      <h4>(iii) Portfolio Variance (Sharpe Index Model)</h4>
      <p>$$\sigma_p^2 = \beta_p^2 \sigma_M^2 + \sum w_i^2 \sigma_{ei}^2$$[cite: 4]</p>
      <p>$$\text{Systematic Variance} = (0.66)^2 \times 0.01 = 0.4356 \times 0.01 = \mathbf{0.004356}$$[cite: 4]</p>
      <p>$$\text{Unsystematic Variance} = (0.2)^2(0.0134) + (0.5)^2(0.0225) + (0.3)^2(0.0879) = 0.000536 + 0.005625 + 0.007911 = \mathbf{0.014072}$$[cite: 4]</p>
      <p>$$\sigma_p^2 = 0.004356 + 0.014072 = \mathbf{0.018428}$$[cite: 4]</p>

      <h4>(iv) Portfolio Variance (Markowitz Model)</h4>
      <p>$$\sigma_p^2 = \sum w_i^2 \sigma_i^2 + 2 \sum w_i w_j \text{Cov}_{ij}$$[cite: 4]</p>
      <p>$$\sigma_p^2 = (0.2)^2(0.015) + (0.5)^2(0.025) + (0.3)^2(0.100) + 2(0.2)(0.5)(0.030) + 2(0.2)(0.3)(0.020) + 2(0.5)(0.3)(0.040)$$[cite: 4]</p>
      <p>$$\sigma_p^2 = 0.0006 + 0.00625 + 0.0090 + 0.0060 + 0.0024 + 0.0120 = \mathbf{0.03625 \approx 0.0363}$$[cite: 4]</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH06_TYK_PR_35",
    source: "ICAI Study Material",
    chapter_name: "Portfolio Management",
    placement: 47,
    marks: 10,
    question_html: `
      <p>Ramesh wants to invest in the stock market and collects the following data[cite: 4]:</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Security</th>
              <th style="padding:6px; border:1px solid #ddd;">Expected Return (%)</th>
              <th style="padding:6px; border:1px solid #ddd;">Beta (&beta;)</th>
              <th style="padding:6px; border:1px solid #ddd;">&sigma;<sub>ei</sub><sup>2</sup></th>
            </tr>
          </thead>
          <tbody>
            <tr><td>A</td><td>15</td><td>1.5</td><td>40</td></tr>
            <tr><td>B</td><td>12</td><td>2.0</td><td>20</td></tr>
            <tr><td>C</td><td>10</td><td>2.5</td><td>30</td></tr>
            <tr><td>D</td><td>9</td><td>1.0</td><td>10</td></tr>
            <tr><td>E</td><td>8</td><td>1.2</td><td>20</td></tr>
            <tr><td>F</td><td>14</td><td>1.5</td><td>30</td></tr>
          </tbody>
        </table>
      </div>
      <p>Market index variance is 10% ($\sigma_m^2 = 10$) and the risk-free rate is 7%[cite: 4]. Determine the <strong>optimum portfolio</strong> using Sharpe's single-index formulation assuming no short sales[cite: 4].</p>
    `,
    solution_html: `
      <h4>1. Ranking Securities by Treynor Ratio / Excess Return to Beta</h4>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Security</th>
              <th style="padding:6px; border:1px solid #ddd;">$R_i - R_f$</th>
              <th style="padding:6px; border:1px solid #ddd;">$\beta_i$</th>
              <th style="padding:6px; border:1px solid #ddd;">$\sigma_{ei}^2$</th>
              <th style="padding:6px; border:1px solid #ddd;">$\frac{R_i - R_f}{\beta_i}$</th>
              <th style="padding:6px; border:1px solid #ddd;">Rank</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>A</td><td>8</td><td>1.5</td><td>40</td><td>5.33</td><td>1</td></tr>
            <tr><td>F</td><td>7</td><td>1.5</td><td>30</td><td>4.67</td><td>2</td></tr>
            <tr><td>B</td><td>5</td><td>2.0</td><td>20</td><td>2.50</td><td>3</td></tr>
            <tr><td>D</td><td>2</td><td>1.0</td><td>10</td><td>2.00</td><td>4</td></tr>
            <tr><td>C</td><td>3</td><td>2.5</td><td>30</td><td>1.20</td><td>5</td></tr>
            <tr><td>E</td><td>1</td><td>1.2</td><td>20</td><td>0.83</td><td>6</td></tr>
          </tbody>
        </table>
      </div>

      <h4>2. Calculation of Cut-off Point ($C_i$)</h4>
      <p>$$C_i = \frac{\sigma_m^2 \sum_{j=1}^i \frac{(R_j - R_f)\beta_j}{\sigma_{ej}^2}}{1 + \sigma_m^2 \sum_{j=1}^i \frac{\beta_j^2}{\sigma_{ej}^2}}$$[cite: 4]</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Stock</th>
              <th style="padding:6px; border:1px solid #ddd;">$\frac{(R_i - R_f)\beta_i}{\sigma_{ei}^2}$</th>
              <th style="padding:6px; border:1px solid #ddd;">$\sum \frac{(R_i - R_f)\beta_i}{\sigma_{ei}^2}$</th>
              <th style="padding:6px; border:1px solid #ddd;">$\frac{\beta_i^2}{\sigma_{ei}^2}$</th>
              <th style="padding:6px; border:1px solid #ddd;">$\sum \frac{\beta_i^2}{\sigma_{ei}^2}$</th>
              <th style="padding:6px; border:1px solid #ddd;">$C_i$</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>A</td><td>0.300</td><td>0.300</td><td>0.0563</td><td>0.0563</td><td>1.923</td></tr>
            <tr style="background-color:#e6ffe6; font-weight:bold;"><td>F</td><td>0.350</td><td>0.650</td><td>0.0750</td><td>0.1313</td><td>2.814 (C*)</td></tr>
            <tr><td>B</td><td>0.500</td><td>1.150</td><td>0.2000</td><td>0.3313</td><td>2.668</td></tr>
            <tr><td>D</td><td>0.200</td><td>1.350</td><td>0.1000</td><td>0.4313</td><td>2.542</td></tr>
            <tr><td>C</td><td>0.250</td><td>1.600</td><td>0.2083</td><td>0.6396</td><td>2.165</td></tr>
            <tr><td>E</td><td>0.060</td><td>1.660</td><td>0.0720</td><td>0.7116</td><td>2.047</td></tr>
          </tbody>
        </table>
      </div>
      <p>The maximum cut-off point is $C^* = \mathbf{2.814}$ at Security F[cite: 4]. All securities with $\frac{R_i - R_f}{\beta_i} > 2.814$ are selected (Securities A and F)[cite: 4].</p>

      <h4>3. Optimal Weights for Selected Securities</h4>
      <p>$$Z_i = \frac{\beta_i}{\sigma_{ei}^2} \left[\frac{R_i - R_f}{\beta_i} - C^*\right]$$[cite: 4]</p>
      <ul>
        <li>$$Z_A = \frac{1.5}{40} [5.33 - 2.814] = 0.0375 \times 2.516 = \mathbf{0.09435}$$[cite: 4]</li>
        <li>$$Z_F = \frac{1.5}{30} [4.67 - 2.814] = 0.0500 \times 1.856 = \mathbf{0.09280}$$[cite: 4]</li>
        <li>$$\sum Z_i = 0.09435 + 0.09280 = 0.18715$$[cite: 4]</li>
      </ul>
      <p>$$X_A = \frac{0.09435}{0.18715} = \mathbf{50.41\%}$$[cite: 4]</p>
      <p>$$X_F = \frac{0.09280}{0.18715} = \mathbf{49.59\%}$$[cite: 4]</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH06_TYK_PR_36",
    source: "ICAI Study Material",
    chapter_name: "Portfolio Management",
    placement: 48,
    marks: 8,
    question_html: `
      <p>A Portfolio Manager (PM) holds four stocks[cite: 4]:</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Security</th>
              <th style="padding:6px; border:1px solid #ddd;">No. of Shares</th>
              <th style="padding:6px; border:1px solid #ddd;">Market Price (₹)</th>
              <th style="padding:6px; border:1px solid #ddd;">&beta;</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>VSL</td><td>10,000</td><td>50</td><td>0.90</td></tr>
            <tr><td>CSL</td><td>5,000</td><td>20</td><td>1.00</td></tr>
            <tr><td>SML</td><td>8,000</td><td>25</td><td>1.50</td></tr>
            <tr><td>APL</td><td>2,000</td><td>200</td><td>1.20</td></tr>
          </tbody>
        </table>
      </div>
      <p>Compute[cite: 4]:</p>
      <ol type="i">
        <li>Portfolio beta[cite: 4].</li>
        <li>How much risk-free investment should be added to reduce beta to 0.8?[cite: 4]</li>
        <li>How much risk-free investment should be divested to increase beta to 1.2?[cite: 4]</li>
      </ol>
    `,
    solution_html: `
      <h4>(i) Portfolio Beta</h4>
      <ul>
        <li>VSL: $10,000 \times 50 = ₹ 5,00,000$; Weighted $\beta = 5,00,000 \times 0.9 = 4,50,000$[cite: 4]</li>
        <li>CSL: $5,00,000 \times 10^{-1} = ₹ 1,00,000$; Weighted $\beta = 1,00,000 \times 1.0 = 1,00,000$[cite: 4]</li>
        <li>SML: $8,000 \times 25 = ₹ 2,00,000$; Weighted $\beta = 2,00,000 \times 1.5 = 3,00,000$[cite: 4]</li>
        <li>APL: $2,000 \times 200 = ₹ 4,00,000$; Weighted $\beta = 4,00,000 \times 1.2 = 4,80,000$[cite: 4]</li>
        <li>Total Value $= \mathbf{₹ 12,00,000}$; Total Weighted $\beta = \mathbf{13,30,000}$[cite: 4]</li>
      </ul>
      <p>$$\beta_p = \frac{13,30,000}{12,00,000} = \mathbf{1.108}$$[cite: 4]</p>

      <h4>(ii) Additional Risk-Free Investment to Reduce Beta to 0.8</h4>
      <p>$$\frac{13,30,000}{12,00,000 + X} = 0.80 \implies 13,30,000 = 9,60,000 + 0.80X$$[cite: 4]</p>
      <p>$$0.80X = 3,70,000 \implies X = \mathbf{₹ 4,62,500} \quad (\text{or } ₹ 4,62,050 \text{ using rounded proportions})[cite: 4]$$</p>

      <h4>(iii) Risk-Free Divestment / Borrowing to Increase Beta to 1.2</h4>
      <p>$$\frac{13,30,000}{12,00,000 + Y} = 1.20 \implies 13,30,000 = 14,40,000 + 1.20Y$$[cite: 4]</p>
      <p>$$1.20Y = -1,10,000 \implies Y = \mathbf{-₹ 91,667} \quad (\text{divest/borrow } ₹ 91,667 \text{ to } ₹ 91,970)[cite: 4]$$</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH06_TYK_PR_37",
    source: "ICAI Study Material",
    chapter_name: "Portfolio Management",
    placement: 49,
    marks: 6,
    question_html: `
      <p>A portfolio has the following features[cite: 4]:</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Security</th>
              <th style="padding:6px; border:1px solid #ddd;">&beta;</th>
              <th style="padding:6px; border:1px solid #ddd;">Random Error (&sigma;<sub>ei</sub>)</th>
              <th style="padding:6px; border:1px solid #ddd;">Weight</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>L</td><td>1.60</td><td>7</td><td>0.25</td></tr>
            <tr><td>M</td><td>1.15</td><td>11</td><td>0.30</td></tr>
            <tr><td>N</td><td>1.40</td><td>3</td><td>0.25</td></tr>
            <tr><td>K</td><td>1.00</td><td>9</td><td>0.20</td></tr>
          </tbody>
        </table>
      </div>
      <p>Find out the risk (Standard Deviation) of the portfolio if the market standard deviation is 18% ($\sigma_m = 18\%$)[cite: 4].</p>
    `,
    solution_html: `
      <h4>1. Portfolio Beta</h4>
      <p>$$\beta_p = (0.25 \times 1.60) + (0.30 \times 1.15) + (0.25 \times 1.40) + (0.20 \times 1.00) = 0.40 + 0.345 + 0.35 + 0.20 = \mathbf{1.295}$$[cite: 4]</p>

      <h4>2. Portfolio Variance and Standard Deviation</h4>
      <p>$$\sigma_p^2 = \beta_p^2 \sigma_m^2 + \sum w_i^2 \sigma_{ei}^2$$[cite: 4]</p>
      <p>$$\text{Systematic Variance} = (1.295)^2 \times (18)^2 = 1.677025 \times 324 = \mathbf{543.356}$$[cite: 4]</p>
      <p>$$\text{Unsystematic Variance} = (0.25)^2(7)^2 + (0.30)^2(11)^2 + (0.25)^2(3)^2 + (0.20)^2(9)^2$$[cite: 4]</p>
      <p>$$\text{Unsystematic Variance} = 3.0625 + 10.89 + 0.5625 + 3.24 = \mathbf{17.755}$$[cite: 4]</p>
      <p>$$\sigma_p^2 = 543.356 + 17.755 = \mathbf{561.111}$$[cite: 4]</p>
      <p>$$\sigma_p = \sqrt{561.111} = \mathbf{23.69\%}$$[cite: 4]</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH06_TYK_PR_38",
    source: "ICAI Study Material",
    chapter_name: "Portfolio Management",
    placement: 50,
    marks: 6,
    question_html: `
      <p>Mr. Tamarind intends to invest in equity shares under the Arbitrage Pricing Theory (APT) framework with parameters[cite: 4]:</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Factor</th>
              <th style="padding:6px; border:1px solid #ddd;">Beta</th>
              <th style="padding:6px; border:1px solid #ddd;">Expected Value (%)</th>
              <th style="padding:6px; border:1px solid #ddd;">Actual Value (%)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>GNP</td><td>1.20</td><td>7.70</td><td>7.70</td></tr>
            <tr><td>Inflation</td><td>1.75</td><td>5.50</td><td>7.00</td></tr>
            <tr><td>Interest rate</td><td>1.30</td><td>7.75</td><td>9.00</td></tr>
            <tr><td>Stock market index</td><td>1.70</td><td>10.00</td><td>12.00</td></tr>
            <tr><td>Industrial production</td><td>1.00</td><td>7.00</td><td>7.50</td></tr>
          </tbody>
        </table>
      </div>
      <p>If the risk-free rate of interest is 9.25%, how much is the return of the share under Arbitrage Pricing Theory?[cite: 4]</p>
    `,
    solution_html: `
      <h4>1. Calculation of Surprise Factors and Factor Returns</h4>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Macroeconomic Factor</th>
              <th style="padding:6px; border:1px solid #ddd;">Beta ($\beta$)</th>
              <th style="padding:6px; border:1px solid #ddd;">Surprise $(\text{Actual} - \text{Expected})$</th>
              <th style="padding:6px; border:1px solid #ddd;">Impact $\beta \times \text{Surprise}$ (%)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>GNP</td><td>1.20</td><td>$7.70 - 7.70 = 0.00$</td><td>0.00</td></tr>
            <tr><td>Inflation</td><td>1.75</td><td>$7.00 - 5.50 = +1.50$</td><td>2.625</td></tr>
            <tr><td>Interest Rate</td><td>1.30</td><td>$9.00 - 7.75 = +1.25$</td><td>1.625</td></tr>
            <tr><td>Stock Market Index</td><td>1.70</td><td>$12.00 - 10.00 = +2.00$</td><td>3.400</td></tr>
            <tr><td>Industrial Production</td><td>1.00</td><td>$7.50 - 7.00 = +0.50$</td><td>0.500</td></tr>
            <tr style="font-weight:bold; background-color:#fafafa;">
              <td colspan="3">Total Unexpected Return</td>
              <td>8.15% (say 8.16%)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4>2. Expected Total Return</h4>
      <p>$$E(R) = R_f + \sum \beta_i (\text{Actual}_i - \text{Expected}_i) = 9.25\% + 8.16\% = \mathbf{17.41\%}$$[cite: 4]</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH06_TYK_PR_39",
    source: "ICAI Study Material",
    chapter_name: "Portfolio Management",
    placement: 51,
    marks: 6,
    question_html: `
      <p>The total market value of the equity of O.R.E. Company is ₹ 60,00,000 and debt is ₹ 40,00,000[cite: 4]. The equity beta is 1.5, market risk premium is 10%, and the Treasury bill rate is 8%[cite: 4].</p>
      <ol type="i">
        <li>What is the beta of the company's existing portfolio of assets (assuming debt is riskless)?[cite: 4]</li>
        <li>Estimate the company's cost of capital and the discount rate for an expansion of the company's present business[cite: 4].</li>
      </ol>
    `,
    solution_html: `
      <h4>(i) Asset Beta ($\beta_{\text{asset}}$)</h4>
      <p>Assuming debt is risk-free ($\beta_D = 0$)[cite: 4]:</p>
      <p>$$\beta_{\text{asset}} = \beta_E \left[\frac{V_E}{V_0}\right] + \beta_D \left[\frac{V_D}{V_0}\right] = 1.5 \left[\frac{₹ 60\text{L}}{₹ 100\text{L}}\right] + 0 = \mathbf{0.90}$$[cite: 4]</p>

      <h4>(ii) Cost of Capital / Project Discount Rate for Expansion</h4>
      <ul>
        <li><strong>Method A (Using Asset Beta):</strong>
          $$\text{Project Discount Rate} = R_f + \beta_{\text{asset}}(R_m - R_f) = 8\% + 0.90(10\%) = \mathbf{17.00\%}$$[cite: 4]
        </li>
        <li><strong>Method B (Using WACC):</strong>
          <br />$$\text{Cost of Equity } (K_e) = 8\% + 1.5(10\%) = 23.00\%$$[cite: 4]
          <br />$$\text{Cost of Debt } (K_d) = 8.00\%$$[cite: 4]
          <br />$$\text{WACC} = \left(23\% \times \frac{60}{100}\right) + \left(8\% \times \frac{40}{100}\right) = 13.80\% + 3.20\% = \mathbf{17.00\%}$$[cite: 4]
        </li>
      </ul>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH06_TYK_PR_40",
    source: "ICAI Study Material",
    chapter_name: "Portfolio Management",
    placement: 52,
    marks: 8,
    question_html: `
      <p>Mr. Nirmal Kumar categorized market stocks into four groups with their index weights and three factor sensitivities[cite: 4]:</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Category</th>
              <th style="padding:6px; border:1px solid #ddd;">Weight</th>
              <th style="padding:6px; border:1px solid #ddd;">Factor I (&beta;)</th>
              <th style="padding:6px; border:1px solid #ddd;">Factor II (Book Price)</th>
              <th style="padding:6px; border:1px solid #ddd;">Factor III (Inflation)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Small Cap Growth</td><td>25%</td><td>0.800</td><td>1.39</td><td>1.35</td></tr>
            <tr><td>Small Cap Value</td><td>10%</td><td>0.900</td><td>0.75</td><td>1.25</td></tr>
            <tr><td>Large Cap Growth</td><td>50%</td><td>1.165</td><td>2.75</td><td>8.65</td></tr>
            <tr><td>Large Cap Value</td><td>15%</td><td>0.850</td><td>2.05</td><td>6.75</td></tr>
            <tr style="font-weight:bold; background-color:#fafafa;">
              <td colspan="2">Factor Risk Premium</td>
              <td>6.85%</td>
              <td>-3.50%</td>
              <td>0.65%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Treasury bond rate is 4.5%[cite: 4]. Determine:</p>
      <ol type="a">
        <li>Expected return on the market index using APT[cite: 4].</li>
        <li>Expected return on the market index using CAPM[cite: 4].</li>
        <li>Portfolio weights between &lsquo;Small Cap Value&rsquo; and &lsquo;Large Cap Growth&rsquo; to achieve a target portfolio beta of 1.0[cite: 4].</li>
      </ol>
    `,
    solution_html: `
      <h4>(a) Market Return Using Arbitrage Pricing Theory (APT)</h4>
      <ul>
        <li>Small Cap Growth $= 4.5 + 0.80(6.85) + 1.39(-3.5) + 1.35(0.65) = \mathbf{5.9925\%}$[cite: 4]</li>
        <li>Small Cap Value $= 4.5 + 0.90(6.85) + 0.75(-3.5) + 1.25(0.65) = \mathbf{8.8525\%}$[cite: 4]</li>
        <li>Large Cap Growth $= 4.5 + 1.165(6.85) + 2.75(-3.5) + 8.65(0.65) = \mathbf{8.4780\%}$[cite: 4]</li>
        <li>Large Cap Value $= 4.5 + 0.85(6.85) + 2.05(-3.5) + 6.75(0.65) = \mathbf{7.5350\%}$[cite: 4]</li>
      </ul>
      <p>$$\text{Weighted Market Return} = (0.25 \times 5.9925) + (0.10 \times 8.8525) + (0.50 \times 8.4780) + (0.15 \times 7.5350) = \mathbf{7.7526\%}$$[cite: 4]</p>

      <h4>(b) Market Return Using CAPM</h4>
      <p>$$\text{Index Beta } (\beta_M) = (0.25 \times 0.80) + (0.10 \times 0.90) + (0.50 \times 1.165) + (0.15 \times 0.85) = 0.20 + 0.09 + 0.5825 + 0.1275 = \mathbf{1.00}$$[cite: 4]</p>
      <p>$$E(R_M) = R_f + \beta_M(R_m - R_f) = 4.5\% + 1.0(6.85\%) = \mathbf{11.35\% \approx 11.33\%}$$[cite: 4]</p>

      <h4>(c) Portfolio Formulation for Target $\beta = 1.0$</h4>
      <p>Let weight in Small Cap Value be $w$[cite: 4]:</p>
      <p>$$w(0.90) + (1 - w)(1.165) = 1.00 \implies 1.165 - 0.265w = 1.00 \implies 0.265w = 0.165$$[cite: 4]</p>
      <p>$$w = \frac{0.165}{0.265} = \mathbf{0.623 \text{ (62.3\% in Small Cap Value)}}$$[cite: 4]</p>
      <p>$$\text{Weight in Large Cap Growth} = 1 - 0.623 = \mathbf{0.377 \text{ (37.7\%)}}$$[cite: 4]</p>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH06_TYK_PR_41",
    source: "ICAI Study Material",
    chapter_name: "Portfolio Management",
    placement: 53,
    marks: 6,
    question_html: `
      <p>The following are data on five mutual funds ($R_f = 6\%$)[cite: 4]:</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Fund</th>
              <th style="padding:6px; border:1px solid #ddd;">Return (%)</th>
              <th style="padding:6px; border:1px solid #ddd;">Standard Deviation (%)</th>
              <th style="padding:6px; border:1px solid #ddd;">Beta</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>A</td><td>15</td><td>7</td><td>1.25</td></tr>
            <tr><td>B</td><td>18</td><td>10</td><td>0.75</td></tr>
            <tr><td>C</td><td>14</td><td>5</td><td>1.40</td></tr>
            <tr><td>D</td><td>12</td><td>6</td><td>0.98</td></tr>
            <tr><td>E</td><td>16</td><td>9</td><td>1.50</td></tr>
          </tbody>
        </table>
      </div>
      <p>Compute the Sharpe and Treynor ratios and rank the portfolios[cite: 4].</p>
    `,
    solution_html: `
      <h4>Performance Measurement and Ranking Schedule</h4>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th rowspan="2" style="padding:6px; border:1px solid #ddd;">Fund</th>
              <th rowspan="2" style="padding:6px; border:1px solid #ddd;">$R_i - R_f$</th>
              <th colspan="2" style="padding:6px; border:1px solid #ddd;">Sharpe Ratio $\frac{R_i - R_f}{\sigma_i}$</th>
              <th colspan="2" style="padding:6px; border:1px solid #ddd;">Treynor Ratio $\frac{R_i - R_f}{\beta_i}$</th>
            </tr>
            <tr style="background-color:#fafafa;">
              <th style="padding:6px; border:1px solid #ddd;">Ratio</th>
              <th style="padding:6px; border:1px solid #ddd;">Rank</th>
              <th style="padding:6px; border:1px solid #ddd;">Ratio</th>
              <th style="padding:6px; border:1px solid #ddd;">Rank</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>A</td><td>9</td><td>$\frac{9}{7} = \mathbf{1.285}$</td><td><strong>II</strong></td><td>$\frac{9}{1.25} = \mathbf{7.20}$</td><td><strong>II</strong></td></tr>
            <tr><td>B</td><td>12</td><td>$\frac{12}{10} = \mathbf{1.200}$</td><td><strong>III</strong></td><td>$\frac{12}{0.75} = \mathbf{16.00}$</td><td><strong>I</strong></td></tr>
            <tr><td>C</td><td>8</td><td>$\frac{8}{5} = \mathbf{1.600}$</td><td><strong>I</strong></td><td>$\frac{8}{1.40} = \mathbf{5.71}$</td><td><strong>V</strong></td></tr>
            <tr><td>D</td><td>6</td><td>$\frac{6}{6} = \mathbf{1.000}$</td><td><strong>V</strong></td><td>$\frac{6}{0.98} = \mathbf{6.12}$</td><td><strong>IV</strong></td></tr>
            <tr><td>E</td><td>10</td><td>$\frac{10}{9} = \mathbf{1.111}$</td><td><strong>IV</strong></td><td>$\frac{10}{1.50} = \mathbf{6.67}$</td><td><strong>III</strong></td></tr>
          </tbody>
        </table>
      </div>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH06_TYK_PR_42",
    source: "ICAI Study Material",
    chapter_name: "Portfolio Management",
    placement: 54,
    marks: 8,
    question_html: `
      <p>Five portfolios experienced the following results during a 7-year period[cite: 4]:</p>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:6px; border:1px solid #ddd;">Portfolio</th>
              <th style="padding:6px; border:1px solid #ddd;">Average Return ($R_p$) (%)</th>
              <th style="padding:6px; border:1px solid #ddd;">Standard Deviation ($S_p$)</th>
              <th style="padding:6px; border:1px solid #ddd;">Correlation with Market ($r$)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>A</td><td>19.0</td><td>2.5</td><td>0.840</td></tr>
            <tr><td>B</td><td>15.0</td><td>2.0</td><td>0.540</td></tr>
            <tr><td>C</td><td>15.0</td><td>0.8</td><td>0.975</td></tr>
            <tr><td>D</td><td>17.5</td><td>2.0</td><td>0.750</td></tr>
            <tr><td>E</td><td>17.1</td><td>1.8</td><td>0.600</td></tr>
          </tbody>
        </table>
      </div>
      <p>Market Risk ($\sigma_m$) = 1.2, Market Return ($R_m$) = 14.0%, Risk-free Rate ($R_f$) = 9.0%[cite: 4]. Rank the portfolios using Sharpe's method, Treynor's method, and Jensen's Alpha[cite: 4].</p>
    `,
    solution_html: `
      <h4>1. Calculation of Portfolio Betas ($\beta_p = \frac{S_p \cdot r}{\sigma_m}$)</h4>
      <ul>
        <li>Portfolio A: $\beta_A = \frac{2.5 \times 0.840}{1.2} = \mathbf{1.75}$[cite: 4]</li>
        <li>Portfolio B: $\beta_B = \frac{2.0 \times 0.540}{1.2} = \mathbf{0.90}$[cite: 4]</li>
        <li>Portfolio C: $\beta_C = \frac{0.8 \times 0.975}{1.2} = \mathbf{0.65}$[cite: 4]</li>
        <li>Portfolio D: $\beta_D = \frac{2.0 \times 0.750}{1.2} = \mathbf{1.25}$[cite: 4]</li>
        <li>Portfolio E: $\beta_E = \frac{1.8 \times 0.600}{1.2} = \mathbf{0.90}$[cite: 4]</li>
      </ul>

      <h4>2. Comparative Performance Evaluation</h4>
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th rowspan="2" style="padding:6px; border:1px solid #ddd;">Portfolio</th>
              <th colspan="2" style="padding:6px; border:1px solid #ddd;">Sharpe $\frac{R_p - 9.0}{S_p}$</th>
              <th colspan="2" style="padding:6px; border:1px solid #ddd;">Treynor $\frac{R_p - 9.0}{\beta_p}$</th>
              <th colspan="2" style="padding:6px; border:1px solid #ddd;">Jensen $\alpha = R_p - [9 + \beta(5)]$</th>
            </tr>
            <tr style="background-color:#fafafa;">
              <th style="padding:6px; border:1px solid #ddd;">Value</th>
              <th style="padding:6px; border:1px solid #ddd;">Rank</th>
              <th style="padding:6px; border:1px solid #ddd;">Value</th>
              <th style="padding:6px; border:1px solid #ddd;">Rank</th>
              <th style="padding:6px; border:1px solid #ddd;">Value</th>
              <th style="padding:6px; border:1px solid #ddd;">Rank</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>A</td>
              <td>$\frac{10.0}{2.5} = \mathbf{4.00}$[cite: 4]</td>
              <td><strong>IV</strong>[cite: 4]</td>
              <td>$\frac{10.0}{1.75} = \mathbf{5.71}$[cite: 4]</td>
              <td><strong>V</strong>[cite: 4]</td>
              <td>$19.0 - 17.75 = \mathbf{+1.25\%}$[cite: 4]</td>
              <td><strong>V</strong>[cite: 4]</td>
            </tr>
            <tr>
              <td>B</td>
              <td>$\frac{6.0}{2.0} = \mathbf{3.00}$[cite: 4]</td>
              <td><strong>V</strong>[cite: 4]</td>
              <td>$\frac{6.0}{0.90} = \mathbf{6.67}$[cite: 4]</td>
              <td><strong>IV</strong>[cite: 4]</td>
              <td>$15.0 - 13.50 = \mathbf{+1.50\%}$[cite: 4]</td>
              <td><strong>IV</strong>[cite: 4]</td>
            </tr>
            <tr>
              <td>C</td>
              <td>$\frac{6.0}{0.8} = \mathbf{7.50}$[cite: 4]</td>
              <td><strong>I</strong>[cite: 4]</td>
              <td>$\frac{6.0}{0.65} = \mathbf{9.23}$[cite: 4]</td>
              <td><strong>I</strong>[cite: 4]</td>
              <td>$15.0 - 12.25 = \mathbf{+2.75\%}$[cite: 4]</td>
              <td><strong>II</strong>[cite: 4]</td>
            </tr>
            <tr>
              <td>D</td>
              <td>$\frac{8.5}{2.0} = \mathbf{4.25}$[cite: 4]</td>
              <td><strong>III</strong>[cite: 4]</td>
              <td>$\frac{8.5}{1.25} = \mathbf{6.80}$[cite: 4]</td>
              <td><strong>III</strong>[cite: 4]</td>
              <td>$17.5 - 15.25 = \mathbf{+2.25\%}$[cite: 4]</td>
              <td><strong>III</strong>[cite: 4]</td>
            </tr>
            <tr>
              <td>E</td>
              <td>$\frac{8.1}{1.8} = \mathbf{4.50}$[cite: 4]</td>
              <td><strong>II</strong>[cite: 4]</td>
              <td>$\frac{8.1}{0.90} = \mathbf{9.00}$[cite: 4]</td>
              <td><strong>II</strong>[cite: 4]</td>
              <td>$17.1 - 13.50 = \mathbf{+3.60\%}$[cite: 4]</td>
              <td><strong>I</strong>[cite: 4]</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },
  // chapter7
  {
    question_id: "AFM_ICAIBOOK_CH07_TYK_TH_01",
    source: "ICAI Study Material",
    chapter_name: "Securitization",
    // placement: 1,
    marks: 6,
    question_html: `
      <p>Differentiate between Pay Through Security (PTS) and Pass Through Certificates (PTC).[cite: 5]</p>
    `,
    solution_html: `
      <p>Both <strong>Pass Through Certificates (PTCs)</strong> and <strong>Pay Through Securities (PTS)</strong> are securitization instruments issued by a Special Purpose Vehicle (SPV) to investors, but they differ significantly in structural design, cash flow distribution, and reinvestment flexibility[cite: 5]:</p>
      
      <div style="overflow-x:auto;">
        <table border="1" style="width:100%; border-collapse:collapse; text-align:left; margin:12px 0;">
          <thead>
            <tr style="background-color:#f2f2f2;">
              <th style="padding:8px; border:1px solid #ddd; width:20%;">Basis</th>
              <th style="padding:8px; border:1px solid #ddd; width:40%;">Pass Through Certificates (PTCs)</th>
              <th style="padding:8px; border:1px solid #ddd; width:40%;">Pay Through Securities (PTS)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding:8px; border:1px solid #ddd; font-weight:bold;">Nature of Claim</td>
              <td style="padding:8px; border:1px solid #ddd;">Investors hold a direct undivided beneficial ownership interest in the pool of underlying assets held in trust by the SPV[cite: 5].</td>
              <td style="padding:8px; border:1px solid #ddd;">Investors hold debt obligations (bonds/debentures) issued by the SPV, which are collateralized/backed by the underlying asset pool[cite: 5].</td>
            </tr>
            <tr>
              <td style="padding:8px; border:1px solid #ddd;">Cash Flow Transfer</td>
              <td style="padding:8px; border:1px solid #ddd;">All collections of principal and interest from obligors are passed directly and immediately to the investors on a proportionate basis[cite: 5].</td>
              <td style="padding:8px; border:1px solid #ddd;">Permits <em>desynchronization</em> of debt service pay-outs from the timing of cash flows collected from the underlying asset pool[cite: 5].</td>
            </tr>
            <tr>
              <td style="padding:8px; border:1px solid #ddd;">Tranching &amp; Maturity</td>
              <td style="padding:8px; border:1px solid #ddd;">Carries a single, uniform maturity structure[cite: 5]. All certificates terminate simultaneously upon final liquidation of the underlying pool[cite: 5].</td>
              <td style="padding:8px; border:1px solid #ddd;">Allows restructuring of cash flows into multiple debt tranches having varying maturities, priority schedules, and interest rates[cite: 5].</td>
            </tr>
            <tr>
              <td style="padding:8px; border:1px solid #ddd;">Prepayment &amp; Reinvestment Risk</td>
              <td style="padding:8px; border:1px solid #ddd;">Any early prepayments of principal by borrowers are passed directly to investors, causing cash flow skewness and reinvestment risk for investors[cite: 5].</td>
              <td style="padding:8px; border:1px solid #ddd;">The SPV has the flexibility to retain early prepayment cash flows and temporarily reinvest surplus liquidity in short-term avenues to earn yield before servicing scheduled tranches[cite: 5].</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },
  {
    question_id: "AFM_ICAIBOOK_CH07_TYK_TH_02",
    source: "ICAI Study Material",
    chapter_name: "Securitization",
    // placement: 2,
    marks: 6,
    question_html: `
      <p>What are the main problems faced in securitization especially in the Indian context?[cite: 5]</p>
    `,
    solution_html: `
      <p>The primary impediments and challenges facing the development and growth of securitization in India include[cite: 5]:</p>
      
      <h4>1. Stamp Duty Discrepancies</h4>
      <ul>
        <li>Under the <em>Transfer of Property Act, 1882</em>, the assignment and transfer of mortgage debt attracts ad valorem stamp duty, which ranges as high as 12% in certain states[cite: 5].</li>
        <li>Although several state governments have rationalized duties and Pass Through Certificates (PTCs) as receivables are generally exempt, the lack of uniform interstate rates continues to hinder cross-border pooling of mortgage assets[cite: 5].</li>
      </ul>

      <h4>2. Taxation Ambiguities</h4>
      <ul>
        <li>The lack of explicit, clear provisions in the <em>Income-tax Act, 1961</em> has generated conflicting interpretations regarding whether an SPV should be taxed in a representative capacity as a trust or if tax should be levied directly on a pass-through basis at the investor level[cite: 5].</li>
        <li>Uncertainty also persists regarding capital gains tax implications when receivables and cash streams are distributed to investors[cite: 5].</li>
      </ul>

      <h4>3. Accounting and Balance Sheet Treatment</h4>
      <ul>
        <li>Accounting and reporting standards regarding true off-balance sheet treatment remain complex[cite: 5].</li>
        <li>Achieving a &ldquo;true sale&rdquo; standard that permits the legal derecognition and ring-fencing of receivables from the originator's balance sheet—particularly when transactions involve recourse or credit enhancement—frequently leads to ambiguity[cite: 5].</li>
      </ul>

      <h4>4. Lack of Standardization</h4>
      <ul>
        <li>Every originator follows proprietary documentation, underwriting terms, loan administration procedures, and credit scoring mechanisms[cite: 5].</li>
        <li>The absence of standardized documentation makes risk evaluation and comparative credit rating across asset pools challenging and time-consuming[cite: 5].</li>
      </ul>

      <h4>5. Underdeveloped Secondary Debt Market</h4>
      <ul>
        <li>The secondary market for corporate debt and securitized debt instruments in India has limited depth and liquidity[cite: 5].</li>
        <li>Without an active secondary trading platform, institutional investors are reluctant to participate, which impedes primary market issuances[cite: 5].</li>
      </ul>

      <h4>6. Ineffective Foreclosure and Recovery Laws</h4>
      <ul>
        <li>Despite the enactment of the <em>SARFAESI Act, 2002</em>, legal enforcement and attachment of mortgaged underlying properties in event of obligor default remain subject to procedural and judicial delays[cite: 5].</li>
        <li>These prolonged enforcement timeframes make mortgage-backed securitization (MBS) less attractive to risk-averse institutional lenders[cite: 5].</li>
      </ul>
    `
  }



]