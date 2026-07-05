const descriptiveQuestions = [
  {
    question_id: "IDT_MTP_1",
    source: "Sample IDT MTP",
    chapter_name: "GST Input Tax Credit (ITC)",
    placement: 1,
    marks: 14,
    question_html: `
      <p>XYZ Manufacturing Ltd. is registered under GST in the state of Karnataka. During the month of August 2024, it provides the following details regarding the inward supplies procured by it:</p>
      
      <table border="1" cellspacing="0" cellpadding="5">
        <tr>
          <th>Particulars</th>
          <th>GST Paid (₹)</th>
        </tr>
        <tr>
          <td>Raw materials used in manufacturing taxable goods</td>
          <td>2,50,000</td>
        </tr>
        <tr>
          <td>Raw materials used in manufacturing exempt goods</td>
          <td>1,20,000</td>
        </tr>
        <tr>
          <td>Purchase of motor vehicles (seating capacity 13 persons) for transportation of employees to the factory</td>
          <td>3,00,000</td>
        </tr>
        <tr>
          <td>Health insurance for factory employees (Not mandated by any law)</td>
          <td>45,000</td>
        </tr>
        <tr>
          <td>Machinery purchased, on which depreciation has been claimed on the tax component under the Income-tax Act, 1961</td>
          <td>1,80,000</td>
        </tr>
      </table>

      <p>Further, XYZ Manufacturing Ltd. had outward taxable supplies of ₹ 50,00,000 and exempt supplies of ₹ 20,00,000 during the month. Applicable GST rate on outward supplies is 18%.</p>
      <p><strong>Required:</strong></p>
      <p>Compute the eligible Input Tax Credit (ITC) available to XYZ Manufacturing Ltd. for August 2024 and calculate the Net GST payable in cash. Support your answer with relevant provisions of the CGST Act, 2017.</p>
    `,
    solution_html: `
      <strong>Solution:</strong><br><br>
      
      <strong>1. Computation of Eligible Input Tax Credit (ITC)</strong>
      <table border="1" cellspacing="0" cellpadding="5">
        <tr>
          <th>Particulars</th>
          <th>Amount (₹)</th>
          <th>Reasoning</th>
        </tr>
        <tr>
          <td>Raw materials for taxable goods</td>
          <td>2,50,000</td>
          <td>Fully eligible as used for taxable supplies [Sec 16(1)].</td>
        </tr>
        <tr>
          <td>Raw materials for exempt goods</td>
          <td>Nil</td>
          <td>ITC not available on goods used exclusively for exempt supplies [Sec 17(2)].</td>
        </tr>
        <tr>
          <td>Motor vehicles (seating capacity 13 persons)</td>
          <td>Nil</td>
          <td>Blocked under Sec 17(5)(a) as seating capacity is less than or equal to 13 persons and not used for specified taxable purposes.</td>
        </tr>
        <tr>
          <td>Health insurance for employees</td>
          <td>Nil</td>
          <td>Blocked under Sec 17(5)(b) since it is not obligatorily required under any law for the time being in force.</td>
        </tr>
        <tr>
          <td>Machinery (Depreciation claimed on tax)</td>
          <td>Nil</td>
          <td>As per Sec 16(3), if depreciation has been claimed on the tax component of the cost of capital goods, ITC shall not be allowed.</td>
        </tr>
        <tr>
          <th>Total Eligible ITC</th>
          <th>2,50,000</th>
          <th></th>
        </tr>
      </table>

      <br>
      <strong>2. Computation of Net GST Payable in Cash</strong>
      <table border="1" cellspacing="0" cellpadding="5">
        <tr>
          <th>Particulars</th>
          <th>Amount (₹)</th>
        </tr>
        <tr>
          <td>Total Outward Taxable Supplies</td>
          <td>50,00,000</td>
        </tr>
        <tr>
          <td>Output GST Liability (@ 18%)</td>
          <td>9,00,000</td>
        </tr>
        <tr>
          <td>Less: Eligible ITC Available</td>
          <td>(2,50,000)</td>
        </tr>
        <tr>
          <th>Net GST Payable in Cash</th>
          <th>6,50,000</th>
        </tr>
      </table>
    `
  },
  {
    question_id: "IDT_MTP_2",
    source: "Sample IDT MTP",
    chapter_name: "Customs Baggage Rules",
    placement: 2,
    marks: 8,
    question_html: `
      <p>Mr. John, an Indian resident aged 35 years, returned to India from Dubai after a stay of 15 days. He brought the following items with him:</p>
      <ul>
        <li>Used personal effects worth ₹ 45,000.</li>
        <li>A laptop worth ₹ 80,000.</li>
        <li>2 Litres of liquor worth ₹ 10,000.</li>
        <li>150 cigars worth ₹ 12,000.</li>
        <li>A new smartphone worth ₹ 65,000.</li>
      </ul>
      <p><strong>Required:</strong></p>
      <p>Determine the customs duty payable by Mr. John, assuming the effective rate of baggage duty is 38.5% (inclusive of Social Welfare Surcharge). Cite relevant rules from the Baggage Rules, 2016.</p>
    `,
    solution_html: `
      <strong>Solution:</strong><br><br>
      
      <strong>Assessment of Baggage under Baggage Rules, 2016 (Rule 3)</strong>
      <table border="1" cellspacing="0" cellpadding="5">
        <tr>
          <th>Item</th>
          <th>Value (₹)</th>
          <th>Treatment</th>
        </tr>
        <tr>
          <td>Used personal effects</td>
          <td>45,000</td>
          <td>Fully exempt under Baggage Rules. (Value excluded)</td>
        </tr>
        <tr>
          <td>Laptop</td>
          <td>80,000</td>
          <td>One laptop computer is fully exempt for passengers aged 18 years or above. (Value excluded)</td>
        </tr>
        <tr>
          <td>Liquor (2 Litres)</td>
          <td>10,000</td>
          <td>Up to 2 litres of liquor is allowed within the General Free Allowance (GFA).</td>
        </tr>
        <tr>
          <td>150 Cigars</td>
          <td>12,000</td>
          <td>Not allowed within GFA. The limit is 25 cigars. The entire 150 cigars are subject to duty as they exceed the limit, but for simplicity, the excess is dutiable (150 cigars are imported instead of 25). However, Annexure I items exceeding limits are charged duty. Value of 150 cigars = ₹ 12,000.</td>
        </tr>
        <tr>
          <td>Smartphone</td>
          <td>65,000</td>
          <td>Eligible to be covered under the General Free Allowance.</td>
        </tr>
      </table>

      <br>
      <strong>Computation of Dutiable Value:</strong>
      <ul>
        <li>Value of goods eligible for GFA = Liquor (₹ 10,000) + Smartphone (₹ 65,000) = ₹ 75,000.</li>
        <li>General Free Allowance available to an Indian resident returning from Dubai = ₹ 50,000.</li>
        <li>Dutiable value of goods under GFA = ₹ 75,000 - ₹ 50,000 = ₹ 25,000.</li>
        <li>Value of Cigars (Annexure I item) = ₹ 12,000 (Fully dutiable as it exceeds the 25 cigar limit and cannot be accommodated in GFA).</li>
        <li><strong>Total Dutiable Value = ₹ 25,000 + ₹ 12,000 = ₹ 37,000.</strong></li>
      </ul>

      <br>
      <strong>Computation of Customs Duty:</strong>
      <p>Customs Duty Payable = ₹ 37,000 * 38.5% = <strong>₹ 14,245</strong>.</p>
    `
  }
];