const descriptiveQuestions = [
  {
    question_id: "DT_MTP_1",
    source: "Sample DT MTP",
    chapter_name: "Profits and Gains of Business or Profession (PGBP)",
    placement: 1,
    marks: 14,
    question_html: `
      <p>Mr. A, a resident individual aged 52 years, runs a manufacturing business. The net profit as per his Profit and Loss Account for the year ended 31st March 2024 is ₹ 45,00,000. Upon scrutiny of the accounts, the following information is revealed:</p>
      <ol type="i">
        <li>The Profit and Loss Account includes ₹ 5,00,000 received as a dividend from an Indian company.</li>
        <li>Depreciation debited to the Profit and Loss Account is ₹ 8,50,000. However, the depreciation allowable as per the Income-tax Rules, 1962 is ₹ 10,20,000.</li>
        <li>He made a cash payment of ₹ 25,000 to a transport contractor on a single day for freight charges. The transporter did not furnish his PAN.</li>
        <li>He paid ₹ 1,50,000 as a penalty to the Customs Authority for importing prohibited goods.</li>
        <li>An amount of ₹ 3,00,000 was paid as employer's contribution to the recognized provident fund on 15th August 2024 (the due date for filing the return of income under section 139(1) is 31st July 2024).</li>
      </ol>
      <p><strong>Required:</strong></p>
      <p>Compute the income chargeable under the head "Profits and Gains of Business or Profession" for Mr. A for the Assessment Year 2024-25. (Ignore the provisions of section 115BAC).</p>
    `,
    solution_html: `
      <strong>Solution:</strong><br><br>
      
      <strong>Computation of Income from Business or Profession of Mr. A for A.Y. 2024-25</strong>
      
      <table border="1" cellspacing="0" cellpadding="5">
        <tr>
          <th>Particulars</th>
          <th>Amount (₹)</th>
          <th>Amount (₹)</th>
        </tr>
        <tr>
          <td>Net Profit as per Profit and Loss Account</td>
          <td></td>
          <td>45,00,000</td>
        </tr>
        <tr>
          <td colspan="3"><strong>Add: Expenses debited but not allowable</strong></td>
        </tr>
        <tr>
          <td>- Depreciation as per books of account</td>
          <td>8,50,000</td>
          <td></td>
        </tr>
        <tr>
          <td>- Cash payment for freight (Note 1)</td>
          <td>Nil</td>
          <td></td>
        </tr>
        <tr>
          <td>- Penalty for violation of law (Note 2)</td>
          <td>1,50,000</td>
          <td></td>
        </tr>
        <tr>
          <td>- Employer's contribution to RPF paid after due date (Note 3)</td>
          <td>3,00,000</td>
          <td></td>
        </tr>
        <tr>
          <td>Total Additions</td>
          <td></td>
          <td>13,00,000</td>
        </tr>
        <tr>
          <td colspan="3"><strong>Less: Income credited but taxable under other heads</strong></td>
        </tr>
        <tr>
          <td>- Dividend from Indian Company (Taxable under IFOS)</td>
          <td>(5,00,000)</td>
          <td></td>
        </tr>
        <tr>
          <td colspan="3"><strong>Less: Allowable deductions not debited/under-debited</strong></td>
        </tr>
        <tr>
          <td>- Depreciation as per IT Rules</td>
          <td>(10,20,000)</td>
          <td></td>
        </tr>
        <tr>
          <td>Total Deductions</td>
          <td></td>
          <td>(15,20,000)</td>
        </tr>
        <tr>
          <th>Profits and Gains of Business or Profession</th>
          <th></th>
          <th>42,80,000</th>
        </tr>
      </table>

      <br>
      <strong>Working Notes:</strong><br>
      <ol>
        <li><strong>Cash Payment to Transporter:</strong> As per Section 40A(3), cash payments exceeding ₹ 10,000 in a day are disallowed. However, for payments to transport operators for plying, hiring, or leasing goods carriages, the limit is ₹ 35,000. Since ₹ 25,000 is within this limit, no disallowance is attracted.</li>
        <li><strong>Penalty to Customs Authority:</strong> Penalty paid for the infraction of the law (importing prohibited goods) is not a deductible business expenditure under section 37(1).</li>
        <li><strong>Contribution to RPF:</strong> As per section 43B, employer's contribution to a recognized provident fund is allowable only if paid on or before the due date of filing the return of income u/s 139(1). Since the payment was made on 15th August 2024 (after the due date of 31st July 2024), it is disallowed for the current year.</li>
      </ol>
    `
  },
  {
    question_id: "DT_MTP_2",
    source: "Sample DT MTP",
    chapter_name: "Double Taxation Relief",
    placement: 2,
    marks: 8,
    question_html: `
      <p>Mr. Kumar, an Indian resident, earned a business income of ₹ 12,00,000 in Country X and ₹ 15,00,000 in India during the previous year 2023-24. Country X levies tax at a flat rate of 15% without any basic exemption limit. India does not have a Double Taxation Avoidance Agreement (DTAA) with Country X.</p>
      <p>Assume Mr. Kumar has no other income and he does not opt for the alternative tax regime under Section 115BAC.</p>
      <p><strong>Required:</strong></p>
      <p>Compute the total tax liability of Mr. Kumar in India and the amount of relief available under section 91 of the Income-tax Act, 1961.</p>
    `,
    solution_html: `
      <strong>Solution:</strong><br><br>
      
      <strong>Computation of Relief under Section 91 for Mr. Kumar</strong>
      
      <p><strong>Step 1: Compute Total Income</strong></p>
      <ul>
        <li>Indian Income = ₹ 15,00,000</li>
        <li>Foreign Income = ₹ 12,00,000</li>
        <li><strong>Gross Total Income / Total Income = ₹ 27,00,000</strong></li>
      </ul>

      <p><strong>Step 2: Compute Tax on Total Income in India</strong></p>
      <table border="1" cellspacing="0" cellpadding="5">
        <tr>
          <td>Upto ₹ 2,50,000</td>
          <td>Nil</td>
        </tr>
        <tr>
          <td>₹ 2,50,001 to ₹ 5,00,000 (5%)</td>
          <td>12,500</td>
        </tr>
        <tr>
          <td>₹ 5,00,001 to ₹ 10,00,000 (20%)</td>
          <td>1,00,000</td>
        </tr>
        <tr>
          <td>Above ₹ 10,00,000 [30% of (27,00,000 - 10,00,000)]</td>
          <td>5,10,000</td>
        </tr>
        <tr>
          <td>Basic Tax</td>
          <td>6,22,500</td>
        </tr>
        <tr>
          <td>Add: Health and Education Cess @ 4%</td>
          <td>24,900</td>
        </tr>
        <tr>
          <th>Total Tax Liability in India (before relief)</th>
          <th>6,47,400</th>
        </tr>
      </table>

      <br>
      <p><strong>Step 3: Compute Average Rate of Tax in India and Foreign Country</strong></p>
      <ul>
        <li>Average Rate of Tax in India = (6,47,400 / 27,00,000) * 100 = <strong>23.978%</strong></li>
        <li>Average Rate of Tax in Country X = <strong>15%</strong> (given)</li>
      </ul>

      <br>
      <p><strong>Step 4: Compute Relief under Section 91</strong></p>
      <p>Under section 91, relief is granted at the Indian rate of tax or the rate of tax of the foreign country, whichever is lower, on the doubly taxed income.</p>
      <ul>
        <li>Lower of Indian rate (23.978%) or Foreign rate (15%) = 15%</li>
        <li>Doubly Taxed Income = ₹ 12,00,000</li>
        <li><strong>Relief u/s 91 = ₹ 12,00,000 * 15% = ₹ 1,80,000</strong></li>
      </ul>

      <br>
      <p><strong>Step 5: Compute Net Tax Payable in India</strong></p>
      <ul>
        <li>Total Tax Liability in India = ₹ 6,47,400</li>
        <li>Less: Relief u/s 91 = (₹ 1,80,000)</li>
        <li><strong>Net Tax Payable in India = ₹ 4,67,400</strong></li>
      </ul>
    `
  }
];