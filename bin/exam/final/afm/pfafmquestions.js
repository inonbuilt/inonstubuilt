const descriptiveQuestions = [
  {
    question_id: "AFM_MTP_1",
    source: "Sample AFM MTP",
    chapter_name: "Mergers and Acquisitions",
    placement: 1,
    marks: 14,
    question_html: `
      <p>Target Ltd. is considering a takeover bid from Acquirer Ltd. The financial data for the two companies immediately before the proposed merger is as follows:</p>
      
      <table border="1" cellspacing="0" cellpadding="5">
        <tr>
          <th>Particulars</th>
          <th>Acquirer Ltd.</th>
          <th>Target Ltd.</th>
        </tr>
        <tr>
          <td>Earnings After Tax (₹ in lakhs)</td>
          <td>500</td>
          <td>150</td>
        </tr>
        <tr>
          <td>Number of Equity Shares (lakhs)</td>
          <td>100</td>
          <td>50</td>
        </tr>
        <tr>
          <td>P/E Ratio</td>
          <td>12</td>
          <td>8</td>
        </tr>
      </table>

      <p>Acquirer Ltd. proposes to take over Target Ltd. by offering 1 share of Acquirer Ltd. for every 2 shares of Target Ltd.</p>
      <p><strong>Required:</strong></p>
      <ol type="i">
        <li>Calculate the Earnings Per Share (EPS) of Acquirer Ltd. and Target Ltd. before the merger.</li>
        <li>Calculate the equivalent EPS of Target Ltd. after the merger.</li>
        <li>Calculate the expected Market Price Per Share (MPS) of the merged entity, assuming the P/E ratio of Acquirer Ltd. drops to 11 after the merger.</li>
        <li>Is the merger beneficial to the shareholders of Target Ltd. in terms of market value?</li>
      </ol>
    `,
    solution_html: `
      <strong>Solution:</strong><br><br>
      
      <strong>(i) EPS Before Merger:</strong><br>
      <ul>
        <li>Acquirer Ltd. = Earnings / No. of Shares = 500 / 100 = <strong>₹ 5.00</strong></li>
        <li>Target Ltd. = Earnings / No. of Shares = 150 / 50 = <strong>₹ 3.00</strong></li>
      </ul>

      <br>
      <strong>(ii) Equivalent EPS of Target Ltd. After Merger:</strong><br>
      <p>Exchange Ratio = 1 share of Acquirer for 2 shares of Target = 0.5</p>
      <p>New shares issued to Target Ltd. = 50 lakhs * 0.5 = 25 lakh shares.</p>
      <p>Total shares of merged entity = 100 + 25 = 125 lakh shares.</p>
      <p>Total Earnings of merged entity = 500 + 150 = ₹ 650 lakhs.</p>
      <p>Post-merger EPS of Acquirer Ltd. = 650 / 125 = ₹ 5.20.</p>
      <p>Equivalent EPS for Target Ltd. shareholders = Post-merger EPS * Exchange Ratio = ₹ 5.20 * 0.5 = <strong>₹ 2.60</strong>.</p>

      <br>
      <strong>(iii) Expected Market Price Per Share (MPS) of Merged Entity:</strong><br>
      <p>Expected P/E Ratio = 11</p>
      <p>Expected MPS = Post-merger EPS * Expected P/E = ₹ 5.20 * 11 = <strong>₹ 57.20</strong>.</p>

      <br>
      <strong>(iv) Impact on Target Ltd. Shareholders:</strong><br>
      <p>Pre-merger MPS of Target Ltd. = Pre-merger EPS * P/E = ₹ 3.00 * 8 = ₹ 24.00.</p>
      <p>Post-merger Equivalent MPS for Target Ltd. = Post-merger MPS * Exchange Ratio = ₹ 57.20 * 0.5 = <strong>₹ 28.60</strong>.</p>
      <p><strong>Conclusion:</strong> Since the equivalent market value (₹ 28.60) is greater than the pre-merger market value (₹ 24.00), the merger is beneficial to the shareholders of Target Ltd.</p>
    `
  },
  {
    question_id: "AFM_MTP_2",
    source: "Sample AFM MTP",
    chapter_name: "International Financial Management",
    placement: 2,
    marks: 8,
    question_html: `
      <p>An Indian company has a payable of € 100,000 due in 6 months. The company is considering a money market hedge. The following information is available:</p>
      <ul>
        <li>Spot rate: ₹ 88.00 / €</li>
        <li>6-month Forward rate: ₹ 89.50 / €</li>
        <li>Interest rates in India: 8% p.a. for borrowing, 6% p.a. for investing</li>
        <li>Interest rates in Europe: 4% p.a. for borrowing, 3% p.a. for investing</li>
      </ul>
      <p>Evaluate whether the company should use a Forward Hedge or a Money Market Hedge.</p>
    `,
    solution_html: `
      <strong>Solution:</strong><br><br>
      
      <strong>Alternative 1: Forward Hedge</strong><br>
      <p>Outflow after 6 months = € 100,000 * ₹ 89.50 = <strong>₹ 89,50,000</strong></p>

      <br>
      <strong>Alternative 2: Money Market Hedge</strong><br>
      <p>Since it is a payable, the company needs to invest Euros today so that it matures to € 100,000 in 6 months.</p>
      <ol>
        <li>Interest rate for investing in Europe for 6 months = 3% / 2 = 1.5%</li>
        <li>Amount of Euros to be invested today = € 100,000 / 1.015 = <strong>€ 98,522.17</strong></li>
        <li>Rupees required today to buy € 98,522.17 at spot rate = € 98,522.17 * ₹ 88.00 = <strong>₹ 86,69,951</strong></li>
        <li>Opportunity cost of Rupee funds (borrowing in India for 6 months) = 8% / 2 = 4%</li>
        <li>Total equivalent outflow after 6 months = ₹ 86,69,951 * 1.04 = <strong>₹ 90,16,749</strong></li>
      </ol>

      <br>
      <strong>Conclusion:</strong><br>
      <p>The outflow under the Forward Hedge (₹ 89,50,000) is lower than the equivalent outflow under the Money Market Hedge (₹ 90,16,749). Therefore, the company should opt for the <strong>Forward Hedge</strong>.</p>
    `
  }
];