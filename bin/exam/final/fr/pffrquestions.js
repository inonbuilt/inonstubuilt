const descriptiveQuestions = [
  {
    question_id: "FR_MTPMAR24_1",
    source: "ICAI MTP March 2024",
    chapter_name: "Business Combination (Ind AS 103)",
    placement: 1,
    marks: 14,

    question_html: `
    <p>
      On 1st April 20X1, J Ltd. acquired a new subsidiary, B Ltd., purchasing all
      150 million shares of B Ltd. The terms of the sale agreement included the
      exchange of four shares in J Ltd. for every three shares acquired in B Ltd.
      On 1st April 20X1, the market value of a share in J Ltd. was ₹10 and the
      market value of a share in B Ltd. was ₹12.00.
    </p>

    <p>
      The terms of the share purchase included the issue of one additional share
      in J Ltd. for every five acquired in B Ltd. if the profits of B Ltd. for the
      two years ending 31st March 20X2 exceeded the target figure. Current
      estimates are that it is 80% probable that the management of B Ltd. will
      achieve this target.
    </p>

    <p>
      Legal and professional fees associated with the acquisition of B Ltd. shares
      were ₹12,00,000, including ₹2,00,000 relating to the cost of issuing shares.
      The senior management of J Ltd. estimate that the cost of their time that can
      be fairly allocated to the acquisition is ₹2,00,000. This figure is not
      included in the legal and professional fees mentioned above.
    </p>

    <p>
      The individual Balance Sheet of B Ltd. at 1st April 20X1 comprised net
      assets that had a fair value at that date of ₹1,200 million. Additionally,
      J Ltd. considered B Ltd. possessed certain intangible assets that were not
      recognized in its individual Balance Sheet:
    </p>

    <ul>
      <li>
        Customer relationships – reliable estimate of value ₹100 million. This
        value has been derived from the sale of customer databases in the past.
      </li>
      <li>
        An in-process research and development project that had not been
        recognised by B Ltd. since the necessary conditions laid down in Ind AS
        for capitalisation were only just satisfied at 31st March 20X2. However,
        the fair value of the whole project (including the research phase) is
        estimated at ₹50 million.
      </li>
      <li>
        Employee expertise – estimated value of Director employees of B Ltd. is
        ₹80 million.
      </li>
    </ul>

    <p>
      The market value of a share in J Ltd. on 31st March 20X2 was ₹11.
    </p>

    <p>
      <strong>
        Compute the goodwill on consolidation of B Ltd. that will appear in the
        consolidated balance sheet of J Ltd. at 31st March 20X2 with necessary
        explanation of adjustments therein.
      </strong>
    </p>
  `,

    solution_html: `
    <strong>Solution:</strong><br><br>

    <strong>Calculation of Purchase Consideration</strong>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Particulars</th>
        <th>₹ in million</th>
      </tr>
      <tr>
        <td>Market value of shares issued (150 million × 4/3 × ₹10)</td>
        <td>2,000</td>
      </tr>
      <tr>
        <td>Initial estimate of market value of contingent shares to be issued (150 million × 1/5 × ₹10)</td>
        <td>300</td>
      </tr>
      <tr>
        <td><strong>Total Consideration</strong></td>
        <td><strong>2,300</strong></td>
      </tr>
    </table>

    <br>

    Contingent consideration is recognized in full if payment is probable.

    <br><br>

    As per para 53 of Ind AS 103, acquisition-related costs are costs the acquirer incurs to effect a business combination. These include advisory, legal, accounting, valuation and other professional fees. Such costs are expensed as incurred except costs relating to issue of debt or equity securities.

    <br><br>

    <strong>Statement of Fair Value of Identifiable Net Assets at the Date of Acquisition</strong>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Particulars</th>
        <th>₹ in million</th>
      </tr>
      <tr>
        <td>As per B Ltd.'s Balance Sheet</td>
        <td>1,200</td>
      </tr>
      <tr>
        <td>Fair value of Customer Relationships</td>
        <td>100</td>
      </tr>
      <tr>
        <td>Fair value of Research & Development Project</td>
        <td>50</td>
      </tr>
      <tr>
        <td><strong>Total Net Assets Acquired</strong></td>
        <td><strong>1,350</strong></td>
      </tr>
    </table>

    <br>

    As per Ind AS 38, intangible assets can be recognized separately from goodwill provided they are identifiable, under the control of the acquiring entity and their fair value can be measured reliably.

    <br><br>

    Customer relationships satisfy these conditions and can be recognized separately. The in-process research and development project can also be recognized at fair value. Employee expertise fails the control test and therefore cannot be recognized separately.

    <br><br>

    <strong>Statement of Computation of Goodwill</strong>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Particulars</th>
        <th>₹ in million</th>
      </tr>
      <tr>
        <td>Fair Value of Consideration Given</td>
        <td>2,300</td>
      </tr>
      <tr>
        <td>Less: Fair Value of Net Assets Acquired</td>
        <td>(1,350)</td>
      </tr>
      <tr>
        <td><strong>Goodwill on Acquisition</strong></td>
        <td><strong>950</strong></td>
      </tr>
    </table>

    <br>

    Paragraph 58 of Ind AS 103 provides guidance on subsequent accounting for contingent consideration.

    <br><br>

    Since the contingent consideration will be settled by issuing a fixed number of shares upon fulfillment of the contingency, it qualifies as an equity instrument under Ind AS 32.

    <br><br>

    As per paragraph 58 of Ind AS 103, contingent consideration classified as equity shall not be re-measured after the acquisition date and its subsequent settlement shall be accounted for within equity.

    <br><br>

    <strong>Goodwill on Consolidation = ₹950 million</strong>
  `,
  },
  {
    question_id: "FR_MTPMAR24_2A",
    source: "ICAI MTP March 2024",
    chapter_name: "Ind AS 109 - Embedded Derivatives",
    placement: 2,
    marks: 10,

    question_html: `
    <p>
      Company A, an Indian company whose functional currency is ₹, enters into a contract
      to purchase machinery from an unrelated local supplier, Company B. The functional
      currency of Company B is also ₹. However, the contract is denominated in USD,
      since the machinery is sourced by Company B from a US based supplier.
      Payment is due to Company B on delivery of the machinery.
    </p>

    <p><strong>Key terms of the contract:</strong></p>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Contractual Features</th>
        <th>Details</th>
      </tr>
      <tr>
        <td>Contract / Order Date</td>
        <td>9th September 20X1</td>
      </tr>
      <tr>
        <td>Delivery / Payment Date</td>
        <td>31st December 20X1</td>
      </tr>
      <tr>
        <td>Purchase Price</td>
        <td>USD 1,000,000</td>
      </tr>
      <tr>
        <td>USD/₹ Forward Rate on 9th September 20X1 for 31st December 20X1 maturity</td>
        <td>67.8</td>
      </tr>
      <tr>
        <td>USD/₹ Spot Rate on 9th September 20X1</td>
        <td>66.4</td>
      </tr>
      <tr>
        <td>USD/₹ Forward Rate on 30th September 20X1</td>
        <td>67.5</td>
      </tr>
      <tr>
        <td>USD/₹ Spot Rate on 31st December 20X1</td>
        <td>67.0</td>
      </tr>
    </table>

    <br>

    <p>
      Company A is required to analyse whether the contract for purchase of machinery
      (a capital asset) from Company B contains an embedded derivative and whether
      this should be separately accounted for on the basis of guidance in Ind AS 109.
    </p>

    <p>
      Also pass necessary journal entries for accounting the same.
    </p>
  `,

    solution_html: `
    <strong>Solution:</strong><br><br>

    The USD contract for purchase of machinery entered into by Company A includes
    an embedded foreign currency derivative due to the following reasons:

    <ul>
      <li>
        The host contract is a purchase contract (non-financial in nature) that is
        not classified as, or measured at, FVTPL.
      </li>
      <li>
        The embedded foreign currency feature (requirement to settle the contract
        by payment of USD at a future date) meets the definition of a stand-alone
        derivative and is akin to a USD-₹ forward contract maturing on
        31st December 20X1.
      </li>
      <li>
        USD is not the functional currency of either of the substantial parties
        to the contract (Company A and Company B).
      </li>
      <li>
        Machinery is not routinely denominated in USD in commercial transactions
        around the world.
      </li>
      <li>
        USD is not a commonly used currency for domestic commercial transactions
        in the economic environment in which Company A and Company B operate.
      </li>
    </ul>

    Accordingly, Company A is required to separate the embedded foreign currency
    derivative from the host purchase contract and recognise it separately as a derivative.

    <br><br>

    The separated embedded derivative is a forward contract entered into on
    9th September 20X1 to exchange USD 10,00,000 for ₹ at the forward rate of 67.8
    on 31st December 20X1.

    <br><br>

    Since the forward exchange rate is deemed to be the market rate on the contract
    date, the embedded forward contract has a fair value of Nil on initial recognition.

    <br><br>

    Subsequently, Company A is required to measure the forward contract at fair value
    through profit or loss.

    <br><br>

    <strong>Accounting Treatment</strong>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Date</th>
        <th>Particulars</th>
        <th>Debit (₹)</th>
        <th>Credit (₹)</th>
      </tr>

      <tr>
        <td>09-Sep-X1</td>
        <td>
          On initial recognition of forward contract.<br>
          No entry is required since the initial fair value is Nil.
        </td>
        <td>Nil</td>
        <td>Nil</td>
      </tr>

      <tr>
        <td>30-Sep-X1</td>
        <td>
          Derivative Asset A/c Dr.<br>
          To Profit or Loss A/c<br>
          [(67.8 - 67.5) × 10,00,000]
        </td>
        <td>3,00,000</td>
        <td>3,00,000</td>
      </tr>

      <tr>
        <td>31-Dec-X1</td>
        <td>
          Derivative Asset A/c Dr.<br>
          To Profit or Loss A/c<br>
          [{(67.8 - 67.0) × 10,00,000} - 3,00,000]
        </td>
        <td>5,00,000</td>
        <td>5,00,000</td>
      </tr>

      <tr>
        <td>31-Dec-X1</td>
        <td>
          Property, Plant & Equipment A/c Dr.<br>
          To Derivative Asset A/c<br>
          To Creditor / Bank A/c<br>
          (Recognition of machinery and settlement)
        </td>
        <td>6,78,00,000</td>
        <td>
          8,00,000<br>
          6,70,00,000
        </td>
      </tr>
    </table>

    <br>

    <strong>Conclusion:</strong>

    <p>
      The foreign currency feature embedded in the machinery purchase contract
      qualifies as an embedded derivative under Ind AS 109 and must be separated
      from the host contract and accounted for at Fair Value Through Profit or Loss (FVTPL).
    </p>
  `,
  },
  {
    question_id: "FR_MTPMAR24_2B",
    source: "ICAI MTP March 2024",
    chapter_name: "Ind AS 1 - Presentation of Financial Statements",
    placement: 2,
    marks: 4,

    question_html: `
    <p>
      In December 20X1, an entity entered into a loan agreement with a bank.
      The loan is repayable in three equal annual instalments starting from
      December 20X5.
    </p>

    <p>
      One of the loan covenants requires that an amount equivalent to the loan
      amount should be contributed by promoters by 24th March 20X2, failing
      which the loan becomes payable on demand.
    </p>

    <p>
      As on 24th March 20X2, the entity was unable to obtain the promoter's
      contribution. On 25th March 20X2, the entity approached the bank and
      obtained a grace period up to 30th June 20X2 to obtain the promoter's
      contribution. During the grace period, the bank cannot demand immediate
      repayment.
    </p>

    <p>
      The annual reporting period of the entity ends on 31st March 20X2.
    </p>

    <p>
      <strong>(i)</strong> As on 31st March 20X2, how should the entity classify
      the loan?
    </p>

    <p>
      <strong>(ii)</strong> Assume that, in anticipation of a possible breach,
      the entity approached the bank in February 20X2 and obtained an extension
      of the compliance date up to 30th June 20X2 before the original due date.
      In this case, will the classification of the loan as on
      31st March 20X2 be different from (i) above?
    </p>
  `,

    solution_html: `
    <strong>Solution:</strong><br><br>

    <strong>(i) Classification as on 31st March 20X2</strong>

    <p>
      Ind AS 1 provides that a liability shall be classified as
      <strong>non-current</strong> only if, by the end of the reporting period,
      the lender has agreed to provide a grace period ending at least
      twelve months after the reporting period, during which:
    </p>

    <ul>
      <li>The entity can rectify the breach; and</li>
      <li>The lender cannot demand immediate repayment.</li>
    </ul>

    <p>
      In the present case, the covenant was breached on
      24th March 20X2 and the lender granted a grace period only up to
      30th June 20X2, which is less than twelve months after the reporting date
      of 31st March 20X2.
    </p>

    <p>
      Therefore, the loan shall be classified as
      <strong>Current Liability</strong> as on 31st March 20X2.
    </p>

    <br>

    <strong>(ii) When extension is obtained before the covenant due date</strong>

    <p>
      In this scenario, the entity approached the bank in February 20X2 and
      obtained an extension of the compliance date up to 30th June 20X2 before
      any actual breach occurred.
    </p>

    <p>
      Ind AS 1 contains specific guidance for an
      <strong>actual breach</strong> of a covenant but does not require current
      classification merely because a breach is expected in the future.
    </p>

    <p>
      Since no covenant breach existed as on 31st March 20X2, the loan retains
      its original classification.
    </p>

    <p>
      Accordingly, the loan shall be classified as
      <strong>Non-Current Liability</strong> as on 31st March 20X2.
    </p>

    <br>

    <strong>Final Conclusion:</strong>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Situation</th>
        <th>Classification</th>
      </tr>
      <tr>
        <td>Breach occurred and grace period granted up to 30-Jun-20X2</td>
        <td>Current Liability</td>
      </tr>
      <tr>
        <td>Extension obtained before any breach occurred</td>
        <td>Non-Current Liability</td>
      </tr>
    </table>
  `,
  },
  {
    question_id: "FR_MTPMAR24_3A",
    source: "ICAI MTP March 2024",
    chapter_name: "Ind AS 23 - Borrowing Costs",
    placement: 3,
    marks: 8,

    question_html: `
    <p>
      LT Ltd. is in the process of constructing a building. The construction
      process is expected to take about 18 months from 1st January 20X1 to
      30th June 20X2. The building meets the definition of a qualifying asset.
    </p>

    <p>LT Ltd. incurs the following expenditure for the construction:</p>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Date</th>
        <th>Expenditure</th>
      </tr>
      <tr>
        <td>1st January 20X1</td>
        <td>₹ 5 crores</td>
      </tr>
      <tr>
        <td>30th June 20X1</td>
        <td>₹ 20 crores</td>
      </tr>
      <tr>
        <td>31st March 20X2</td>
        <td>₹ 20 crores</td>
      </tr>
      <tr>
        <td>30th June 20X2</td>
        <td>₹ 5 crores</td>
      </tr>
    </table>

    <br>

    <p>
      On 1st July 20X1, LT Ltd. issued 10% Redeemable Debentures of
      ₹ 50 crores. The proceeds form part of the company's general borrowings,
      which are used to finance the construction of the building.
    </p>

    <p>
      LT Ltd. had no borrowings before 1st July 20X1 and did not incur any
      borrowing costs before that date.
    </p>

    <p>
      Calculate the borrowing costs eligible for capitalization for each of the
      financial years ended 31st March 20X1, 31st March 20X2 and
      31st March 20X3.
    </p>
  `,

    solution_html: `
    <strong>Solution:</strong><br><br>

    As per paragraph 17 of Ind AS 23, capitalization of borrowing costs begins
    only when:
    <ul>
      <li>Expenditure for the asset is incurred;</li>
      <li>Borrowing costs are incurred; and</li>
      <li>Activities necessary to prepare the asset for use are in progress.</li>
    </ul>

    Since LT Ltd. started incurring borrowing costs only on
    1st July 20X1, capitalization cannot begin before that date.

    <br><br>

    <strong>Financial Year 20X0-20X1</strong>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Date</th>
        <th>Expenditure</th>
        <th>Capitalization Period</th>
        <th>Weighted Amount</th>
      </tr>
      <tr>
        <td>1-Jan-20X1</td>
        <td>₹ 5 Cr</td>
        <td>0/3</td>
        <td>Nil</td>
      </tr>
    </table>

    <br>

    Borrowing cost eligible for capitalization = <strong>Nil</strong>

    <br><br>

    <strong>Financial Year 20X1-20X2</strong>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Date</th>
        <th>Expenditure</th>
        <th>Capitalization Period</th>
        <th>Weighted Average Expenditure</th>
      </tr>
      <tr>
        <td>1-Jan-20X1</td>
        <td>₹ 5 Cr</td>
        <td>9/12</td>
        <td>₹ 3.75 Cr</td>
      </tr>
      <tr>
        <td>30-Jun-20X1</td>
        <td>₹ 20 Cr</td>
        <td>9/12</td>
        <td>₹ 15.00 Cr</td>
      </tr>
      <tr>
        <td>31-Mar-20X2</td>
        <td>₹ 20 Cr</td>
        <td>0/12</td>
        <td>Nil</td>
      </tr>
      <tr>
        <th colspan="3">Total</th>
        <th>₹ 18.75 Cr</th>
      </tr>
    </table>

    <br>

    Borrowing Cost Eligible for Capitalization
    = ₹ 18.75 Cr × 10%

    <br>

    <strong>= ₹ 1.875 Crores</strong>

    <br><br>

    <strong>Financial Year 20X2-20X3</strong>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Date</th>
        <th>Expenditure</th>
        <th>Capitalization Period</th>
        <th>Weighted Average Expenditure</th>
      </tr>
      <tr>
        <td>1-Jan-20X1</td>
        <td>₹ 5 Cr</td>
        <td>3/12</td>
        <td>₹ 1.25 Cr</td>
      </tr>
      <tr>
        <td>30-Jun-20X1</td>
        <td>₹ 20 Cr</td>
        <td>3/12</td>
        <td>₹ 5.00 Cr</td>
      </tr>
      <tr>
        <td>31-Mar-20X2</td>
        <td>₹ 20 Cr</td>
        <td>3/12</td>
        <td>₹ 5.00 Cr</td>
      </tr>
      <tr>
        <td>30-Jun-20X2</td>
        <td>₹ 5 Cr</td>
        <td>0/12</td>
        <td>Nil</td>
      </tr>
      <tr>
        <th colspan="3">Total</th>
        <th>₹ 11.25 Cr</th>
      </tr>
    </table>

    <br>

    Borrowing Cost Eligible for Capitalization
    = ₹ 11.25 Cr × 10%

    <br>

    <strong>= ₹ 1.125 Crores</strong>

    <br><br>

    <strong>Answer:</strong>

    <ul>
      <li>FY 20X0-20X1 : ₹ Nil</li>
      <li>FY 20X1-20X2 : ₹ 1.875 Crores</li>
      <li>FY 20X2-20X3 : ₹ 1.125 Crores</li>
    </ul>
  `,
  },
  {
    question_id: "FR_MTPMAR24_3B",
    source: "ICAI MTP March 2024",
    chapter_name: "Ind AS 109 - FVTOCI Foreign Currency Bond",
    placement: 3,
    marks: 6,

    question_html: `
    <p>
      An Indian entity, whose functional currency is Rupees, purchases a USD
      denominated bond at its fair value of USD 1,000.
    </p>

    <p>
      The bond carries stated interest @ 4.7% p.a. on face value and interest
      is received annually.
    </p>

    <p>
      The bond has a maturity period of 5 years and is redeemable at its face
      value of USD 1,250.
    </p>

    <p>
      The fair value of the bond at the end of Year 1 is USD 1,060.
    </p>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Particulars</th>
        <th>Amount</th>
      </tr>
      <tr>
        <td>Exchange rate on purchase date</td>
        <td>USD 1 = ₹ 40</td>
      </tr>
      <tr>
        <td>Exchange rate at end of Year 1</td>
        <td>USD 1 = ₹ 45</td>
      </tr>
      <tr>
        <td>Weighted average exchange rate</td>
        <td>USD 1 = ₹ 42</td>
      </tr>
    </table>

    <br>

    <p>
      The entity classifies the bond as FVTOCI. The effective interest rate
      (EIR) is 10% p.a.
    </p>

    <p>
      Calculate:
      <br>
      (i) Gain/Loss to be recognised in Profit & Loss.
      <br>
      (ii) Gain/Loss to be recognised in OCI.
      <br>
      (iii) Journal entries.
    </p>
  `,

    solution_html: `
    <strong>Solution:</strong><br><br>

    <strong>Computation of Amounts Recognised in P&L and OCI</strong>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Particulars</th>
        <th>USD</th>
        <th>Rate</th>
        <th>₹</th>
      </tr>
      <tr>
        <td>Cost of Bond</td>
        <td>1,000</td>
        <td>40</td>
        <td>40,000</td>
      </tr>
      <tr>
        <td>Interest accrued @ EIR 10%</td>
        <td>100</td>
        <td>42</td>
        <td>4,200</td>
      </tr>
      <tr>
        <td>Interest received (1,250 × 4.7%)</td>
        <td>(59)</td>
        <td>45</td>
        <td>(2,655)</td>
      </tr>
      <tr>
        <td>Amortised Cost at year-end</td>
        <td>1,041</td>
        <td>45</td>
        <td>46,845</td>
      </tr>
      <tr>
        <td>Fair Value at year-end</td>
        <td>1,060</td>
        <td>45</td>
        <td>47,700</td>
      </tr>
    </table>

    <br>

    <strong>Interest Income recognised in P&L</strong>

    <br>

    = USD 100 × ₹42

    <br>

    = <strong>₹ 4,200</strong>

    <br><br>

    <strong>Exchange Gain recognised in P&L</strong>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Particulars</th>
        <th>₹</th>
      </tr>
      <tr>
        <td>Exchange gain on principal [1,000 × (45 − 40)]</td>
        <td>5,000</td>
      </tr>
      <tr>
        <td>Exchange gain on interest accrual [100 × (45 − 42)]</td>
        <td>300</td>
      </tr>
      <tr>
        <th>Total Exchange Gain (P&L)</th>
        <th>5,300</th>
      </tr>
    </table>

    <br>

    <strong>Fair Value Gain recognised in OCI</strong>

    <br>

    = 45 × (1,060 − 1,041)

    <br>

    = <strong>₹ 855</strong>

    <br><br>

    <strong>Journal Entry</strong>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Particulars</th>
        <th>Dr (₹)</th>
        <th>Cr (₹)</th>
      </tr>
      <tr>
        <td>Bond A/c Dr.</td>
        <td>7,700</td>
        <td>-</td>
      </tr>
      <tr>
        <td>Bank A/c Dr.</td>
        <td>2,655</td>
        <td>-</td>
      </tr>
      <tr>
        <td>To Interest Income (P&L)</td>
        <td>-</td>
        <td>4,200</td>
      </tr>
      <tr>
        <td>To Exchange Gain (P&L)</td>
        <td>-</td>
        <td>5,300</td>
      </tr>
      <tr>
        <td>To OCI (Fair Value Gain)</td>
        <td>-</td>
        <td>855</td>
      </tr>
    </table>

    <br>

    <strong>Answer:</strong>

    <ul>
      <li>Interest Income (P&L) = ₹ 4,200</li>
      <li>Exchange Gain (P&L) = ₹ 5,300</li>
      <li>Fair Value Gain (OCI) = ₹ 855</li>
    </ul>
  `,
  },
  {
    question_id: "FR_MTPMAR24_4A",
    source: "ICAI MTP March 2024",
    chapter_name: "Employee Benefits (Ind AS 19)",
    placement: 4,
    marks: 6,

    question_html: `
    <p>
      AJ Ltd is engaged in the business of trading of chemicals having a net worth of
      ₹ 150 crores. The company’s profitability is good and hence the company has
      introduced various benefits for its employees to keep them motivated and to
      ensure that they stay with the organization. The company is an associate of
      RJ Ltd which is listed on Bombay Stock Exchange in India.
    </p>

    <p>
      The company initially did not have any HR function but over the last 2 years,
      the management set up that function and now HR department takes care of all
      the benefits related to the employees and how they can be structured in a
      manner beneficial to both the employees and the objectives of the company.
    </p>

    <p>
      One of the employee benefits involves a lump sum payment to employee on
      termination of service and that is equal to 1 per cent of final salary for
      each year of service. Consider the salary in year 1 is ₹ 10,000 and is
      assumed to increase at 7 per cent (compound) each year.
    </p>

    <p>
      Taking a discount rate at 10 per cent per year, you are required to compute:
    </p>

    <p>
      (i) benefits attributed (year on year) and
      <br>
      (ii) the obligation in respect of this benefit (year on year)
    </p>

    <p>
      For an employee who is expected to leave at the end of year 5.
    </p>

    <p>
      Following assumptions may be taken to solve this:
    </p>

    <ul>
      <li>There are no changes in actuarial assumptions.</li>
      <li>
        No additional adjustments are needed to reflect the probability that the
        employee may leave the entity at an earlier or later date.
      </li>
    </ul>
  `,

    solution_html: `
    <strong>Solution:</strong><br><br>

    <strong>(i) Computation of benefit attributed to prior years and current year</strong>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Particulars</th>
        <th>Year 1</th>
        <th>Year 2</th>
        <th>Year 3</th>
        <th>Year 4</th>
        <th>Year 5</th>
      </tr>
      <tr>
        <td>Benefit attributed to prior years</td>
        <td>-</td>
        <td>131</td>
        <td>262</td>
        <td>393</td>
        <td>524</td>
      </tr>
      <tr>
        <td>Benefit attributed to current year</td>
        <td>131</td>
        <td>131</td>
        <td>131</td>
        <td>131</td>
        <td>131</td>
      </tr>
      <tr>
        <th>Total (Current + Prior)</th>
        <th>131</th>
        <th>262</th>
        <th>393</th>
        <th>524</th>
        <th>655</th>
      </tr>
    </table>

    <br>

    <strong>(ii) Computation of obligation for an employee expected to leave at the end of Year 5</strong>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Particulars</th>
        <th>Year 1</th>
        <th>Year 2</th>
        <th>Year 3</th>
        <th>Year 4</th>
        <th>Year 5</th>
      </tr>
      <tr>
        <td>Opening obligation (A)</td>
        <td>-</td>
        <td>89</td>
        <td>196</td>
        <td>324</td>
        <td>475</td>
      </tr>
      <tr>
        <td>Interest @ 10% (B)</td>
        <td>-</td>
        <td>9</td>
        <td>20</td>
        <td>32</td>
        <td>47</td>
      </tr>
      <tr>
        <td>Current service cost (C)</td>
        <td>89</td>
        <td>98</td>
        <td>108</td>
        <td>119</td>
        <td>131</td>
      </tr>
      <tr>
        <th>Closing obligation (D=A+B+C)</th>
        <th>89</th>
        <th>196</th>
        <th>324</th>
        <th>475</th>
        <th>653</th>
      </tr>
    </table>

    <br>

    <strong>Working Note 1: Salary Projection</strong>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Year</th>
        <th>Salary (₹)</th>
      </tr>
      <tr>
        <td>1</td>
        <td>10,000</td>
      </tr>
      <tr>
        <td>2</td>
        <td>10,700</td>
      </tr>
      <tr>
        <td>3</td>
        <td>11,449</td>
      </tr>
      <tr>
        <td>4</td>
        <td>12,250</td>
      </tr>
      <tr>
        <td>5</td>
        <td>13,108</td>
      </tr>
    </table>

    <br>

    Final salary at end of Year 5 = ₹ 13,108

    <br>

    Benefit per year of service = 1% × ₹ 13,108 = ₹ 131

    <br><br>

    <strong>Working Note 2: Current Service Cost</strong>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Year</th>
        <th>PV Factor @10%</th>
        <th>Current Service Cost (₹)</th>
      </tr>
      <tr>
        <td>1</td>
        <td>0.683</td>
        <td>89</td>
      </tr>
      <tr>
        <td>2</td>
        <td>0.751</td>
        <td>98</td>
      </tr>
      <tr>
        <td>3</td>
        <td>0.826</td>
        <td>108</td>
      </tr>
      <tr>
        <td>4</td>
        <td>0.909</td>
        <td>119</td>
      </tr>
      <tr>
        <td>5</td>
        <td>1.000</td>
        <td>131</td>
      </tr>
    </table>
  `,
  },
  {
    question_id: "FR_MTPMAR24_4B",
    source: "ICAI MTP March 2024",
    chapter_name: "Ind AS 102 - Share Based Payment",
    placement: 4,
    marks: 8,

    question_html: `
    <p>
      P Ltd. granted 400 stock appreciation rights (SAR) each to 75 employees on
      1st April 20X1 with a fair value ₹ 200. The terms of the award require the
      employee to provide service for four years in order to earn the award.
      The fair value of each SAR at each reporting date is as follows:
    </p>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <td>31st March 20X2</td>
        <td>₹ 210</td>
      </tr>
      <tr>
        <td>31st March 20X3</td>
        <td>₹ 220</td>
      </tr>
      <tr>
        <td>31st March 20X4</td>
        <td>₹ 215</td>
      </tr>
      <tr>
        <td>31st March 20X5</td>
        <td>₹ 218</td>
      </tr>
    </table>

    <p>
      What would be the difference if at the end of the second year of service
      (i.e. at 31st March 20X3), P Ltd. modifies the terms of the award to require
      only three years of service?
    </p>
  `,

    solution_html: `
    <strong>Solution:</strong><br><br>

    <strong>Journal Entries in the books of P Ltd. (Without Modification of Service Period)</strong>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Date</th>
        <th>Particulars</th>
        <th>Debit (₹ Lakhs)</th>
        <th>Credit (₹ Lakhs)</th>
      </tr>

      <tr>
        <td>31.03.20X2</td>
        <td>Profit & Loss A/c Dr.<br>To Liability against SARs</td>
        <td>15.75</td>
        <td>15.75</td>
      </tr>

      <tr>
        <td>31.03.20X3</td>
        <td>Profit & Loss A/c Dr.<br>To Liability against SARs</td>
        <td>17.25</td>
        <td>17.25</td>
      </tr>

      <tr>
        <td>31.03.20X4</td>
        <td>Profit & Loss A/c Dr.<br>To Liability against SARs</td>
        <td>15.38</td>
        <td>15.38</td>
      </tr>

      <tr>
        <td>31.03.20X5</td>
        <td>Profit & Loss A/c Dr.<br>To Liability against SARs</td>
        <td>17.02</td>
        <td>17.02</td>
      </tr>
    </table>

    <br><br>

    <strong>Journal Entries in the books of P Ltd. (With Modification of Service Period)</strong>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Date</th>
        <th>Particulars</th>
        <th>Debit (₹ Lakhs)</th>
        <th>Credit (₹ Lakhs)</th>
      </tr>

      <tr>
        <td>31.03.20X2</td>
        <td>Profit & Loss A/c Dr.<br>To Liability against SARs</td>
        <td>15.75</td>
        <td>15.75</td>
      </tr>

      <tr>
        <td>31.03.20X3</td>
        <td>Profit & Loss A/c Dr.<br>To Liability against SARs</td>
        <td>28.25</td>
        <td>28.25</td>
      </tr>

      <tr>
        <td>31.03.20X4</td>
        <td>Profit & Loss A/c Dr.<br>To Liability against SARs</td>
        <td>20.50</td>
        <td>20.50</td>
      </tr>
    </table>

    <br>

    <strong>Working Note 1: Expense Calculation without Modification</strong>

    <p>
      For year ended 31.03.20X2:
      <br>
      ₹210 × 400 × 75 × 1/4 = ₹15,75,000
    </p>

    <p>
      For year ended 31.03.20X3:
      <br>
      (₹220 × 400 × 75 × 2/4) − ₹15,75,000
      <br>
      = ₹33,00,000 − ₹15,75,000
      <br>
      = ₹17,25,000
    </p>

    <p>
      For year ended 31.03.20X4:
      <br>
      (₹215 × 400 × 75 × 3/4) − ₹33,00,000
      <br>
      = ₹48,37,500 − ₹33,00,000
      <br>
      = ₹15,37,500
    </p>

    <p>
      For year ended 31.03.20X5:
      <br>
      (₹218 × 400 × 75 × 4/4) − ₹48,37,500
      <br>
      = ₹65,40,000 − ₹48,37,500
      <br>
      = ₹17,02,500
    </p>

    <br>

    <strong>Working Note 2: Expense Calculation with Modification</strong>

    <p>
      For year ended 31.03.20X2:
      <br>
      ₹210 × 400 × 75 × 1/4 = ₹15,75,000
    </p>

    <p>
      For year ended 31.03.20X3:
      <br>
      (₹220 × 400 × 75 × 2/3) − ₹15,75,000
      <br>
      = ₹44,00,000 − ₹15,75,000
      <br>
      = ₹28,25,000
    </p>

    <p>
      For year ended 31.03.20X4:
      <br>
      (₹215 × 400 × 75 × 3/3) − ₹44,00,000
      <br>
      = ₹64,50,000 − ₹44,00,000
      <br>
      = ₹20,50,000
    </p>
  `,
  },
  {
    question_id: "FR_MTPMAR24_5A",
    source: "ICAI MTP March 2024",
    chapter_name: "Ind AS 115 - Revenue from Contracts with Customers",
    placement: 5,
    marks: 6,

    question_html: `
    <p>
      ABC Ltd. enters into a contract with a customer for sale of goods where the
      transaction price varies depending on the volume purchased by the customer
      during the year. The pricing structure is as follows:
    </p>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Annual Sales Volume</th>
        <th>Price per Unit (₹)</th>
      </tr>
      <tr>
        <td>Up to 10,000 units</td>
        <td>90</td>
      </tr>
      <tr>
        <td>10,001 – 30,000 units</td>
        <td>80</td>
      </tr>
      <tr>
        <td>Above 30,000 units</td>
        <td>70</td>
      </tr>
    </table>

    <p>
      ABC Ltd. estimates the following possible sales volumes and probabilities:
    </p>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Sales Volume (Units)</th>
        <th>Probability</th>
      </tr>
      <tr>
        <td>9,000</td>
        <td>15%</td>
      </tr>
      <tr>
        <td>28,000</td>
        <td>75%</td>
      </tr>
      <tr>
        <td>36,000</td>
        <td>10%</td>
      </tr>
    </table>

    <p>
      Determine how revenue should be recognised by ABC Ltd. under the expected
      value method as per Ind AS 115 and pass the necessary journal entries,
      assuming actual sales during the year are equal to the expected sales volume.
    </p>
  `,

    solution_html: `
    <strong>Solution:</strong><br><br>

    <strong>(i) Determination of Revenue using Expected Value Method</strong>

    <strong>Calculation of Probability Weighted Sales Volume</strong>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Sales Volume</th>
        <th>Probability</th>
        <th>Probability Weighted Volume</th>
      </tr>
      <tr>
        <td>9,000</td>
        <td>15%</td>
        <td>1,350</td>
      </tr>
      <tr>
        <td>28,000</td>
        <td>75%</td>
        <td>21,000</td>
      </tr>
      <tr>
        <td>36,000</td>
        <td>10%</td>
        <td>3,600</td>
      </tr>
      <tr>
        <th colspan="2">Total</th>
        <th>25,950</th>
      </tr>
    </table>

    <br>

    <strong>Calculation of Probability Weighted Sales Value</strong>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Sales Volume</th>
        <th>Price per Unit (₹)</th>
        <th>Probability</th>
        <th>Probability Weighted Sales Value (₹)</th>
      </tr>
      <tr>
        <td>9,000</td>
        <td>90</td>
        <td>15%</td>
        <td>1,21,500</td>
      </tr>
      <tr>
        <td>28,000</td>
        <td>80</td>
        <td>75%</td>
        <td>16,80,000</td>
      </tr>
      <tr>
        <td>36,000</td>
        <td>70</td>
        <td>10%</td>
        <td>2,52,000</td>
      </tr>
      <tr>
        <th colspan="3">Total</th>
        <th>20,53,500</th>
      </tr>
    </table>

    <br>

    Average Unit Price
    = ₹20,53,500 ÷ 25,950

    <br>

    = <strong>₹79.13 per unit</strong>

    <br><br>

    Revenue shall be recognised at ₹79.13 per unit sold.

    <br><br>

    First 10,000 units sold will be booked at ₹90 per unit and liability is
    accrued for the difference of ₹10.87 per unit (₹90 − ₹79.13).

    <br><br>

    For subsequent sale of 15,950 units, contract liability is accrued at
    ₹0.87 per unit (₹80 − ₹79.13) and revenue will be deferred.
  `,
  },
  {
    question_id: "FR_MTPMAR24_5B",
    source: "ICAI MTP March 2024",
    chapter_name:
      "Ind AS 115 - Revenue Recognition with Deferred Consideration",
    placement: 5,
    marks: 4,

    question_html: `
    <p>
      A company sold goods for ₹10,00,000. The customer paid ₹3,33,333 immediately
      and agreed to pay the balance in two equal annual instalments of ₹3,33,333
      and ₹3,33,334 at the end of Year 1 and Year 2 respectively.
    </p>

    <p>
      The prevailing market rate of interest for a similar credit profile is 5.4%.
    </p>

    <p>
      Determine the amount of revenue and finance income to be recognised in
      accordance with Ind AS 115.
    </p>
  `,

    solution_html: `
    <strong>Solution:</strong><br><br>

    The revenue from sale of goods shall be recognised at the fair value of the
    consideration received or receivable.

    <br><br>

    <strong>Calculation of Fair Value of Consideration</strong>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Year</th>
        <th>Consideration (₹)</th>
        <th>PV Factor</th>
        <th>Present Value (₹)</th>
      </tr>
      <tr>
        <td>At sale date</td>
        <td>3,33,333</td>
        <td>-</td>
        <td>3,33,333</td>
      </tr>
      <tr>
        <td>End of Year 1</td>
        <td>3,33,333</td>
        <td>0.949</td>
        <td>3,16,333</td>
      </tr>
      <tr>
        <td>End of Year 2</td>
        <td>3,33,334</td>
        <td>0.901</td>
        <td>3,00,334</td>
      </tr>
      <tr>
        <th colspan="3">Total</th>
        <th>9,50,000</th>
      </tr>
    </table>

    <br>

    Revenue from sale of goods = <strong>₹9,50,000</strong>

    <br>

    Finance income over credit period = ₹10,00,000 − ₹9,50,000

    <br>

    = <strong>₹50,000</strong>

    <br><br>

    <strong>Journal Entries</strong>

    <br><br>

    Initial Recognition:

    <br>

    Cash A/c Dr. ₹3,33,333
    <br>
    Trade Receivable A/c Dr. ₹6,16,667
    <br>
    To Sales A/c ₹9,50,000

    <br><br>

    Receipt of Second Instalment:

    <br>

    Cash A/c Dr. ₹3,33,333
    <br>
    To Interest Income A/c ₹33,053
    <br>
    To Trade Receivable A/c ₹3,00,280

    <br><br>

    Receipt of Final Instalment:

    <br>

    Cash A/c Dr. ₹3,33,334
    <br>
    To Interest Income A/c ₹16,947
    <br>
    To Trade Receivable A/c ₹3,16,387

    <br><br>

    <strong>Statement of Profit & Loss</strong>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Particulars</th>
        <th>31.03.20X2 (₹)</th>
        <th>31.03.20X3 (₹)</th>
      </tr>
      <tr>
        <td>Sale of Goods</td>
        <td>9,50,000</td>
        <td>-</td>
      </tr>
      <tr>
        <td>Finance Income</td>
        <td>33,053</td>
        <td>16,947</td>
      </tr>
    </table>
  `,
  },
  {
    question_id: "FR_MTPMAR24_5C_I",
    source: "ICAI MTP March 2024",
    chapter_name: "Conceptual Framework",
    placement: 5,
    marks: 4,

    question_html: `
    <p>
      How can one enhance the usefulness of financial information by applying four enhancing
      qualitative characteristics?
    </p>
  `,

    solution_html: `
    <p>
      <strong>Comparability:</strong> Information about a reporting entity is more useful if it can
      be compared with similar information about other entities and with similar information about
      the same entity for another period or another date. Comparability refers to the use of the
      same methods for the same items, and uniformity implies that like things must look alike
      and different things must look different.
    </p>

    <p>
      <strong>Verifiability:</strong> Verifiability means that different knowledgeable and independent
      observers could reach consensus, although not necessarily complete agreement, that a
      particular depiction is a faithful representation. Verification can be direct or indirect.
    </p>

    <p>
      <strong>Timeliness:</strong> Timeliness means having information available to decision-makers
      in time to be capable of influencing their decisions. Generally, the older the information is
      the less useful it is. However, some information may continue to be timely long after the end
      of a reporting period because, for example, some users may need to identify and assess trends.
    </p>

    <p>
      <strong>Understandability:</strong> Classifying, characterising and presenting information clearly
      and concisely makes it understandable. Some phenomena are inherently complex and cannot
      be made easy to understand. Financial reports are prepared for users who have a reasonable
      knowledge of business and economic activities and who review and analyse the information
      diligently. At times, even well-informed and diligent users may need to seek the aid of an
      adviser to understand information about complex economic phenomena.
    </p>
  `,
  },
  {
    question_id: "FR_MTPMAR24_5C_II",
    source: "ICAI MTP March 2024",
    chapter_name: "Ind AS Applicability",
    placement: 5,
    marks: 4,

    question_html: `
    <p>
      Which entities are required to prepare their financial statements mandatorily on the basis of
      Indian Accounting Standards (Ind AS)?
    </p>
  `,

    solution_html: `
    <p>
      Following entities are mandatorily required to prepare their financial statements based on
      Indian Accounting Standards:
    </p>

    <ul>
      <li>All Listed Corporate Entities</li>
      <li>Unlisted Corporate Entities having net worth of rupees five hundred crore or more</li>
      <li>
        All holding, subsidiary, joint venture or associate companies of the above mentioned
        listed and unlisted corporate entities
      </li>
      <li>All NBFCs</li>
      <li>MF schemes</li>
    </ul>
  `,
  },
  {
    question_id: "FR_MTPMAR24_6A",
    source: "ICAI MTP March 2024",
    chapter_name: "Ethics and Financial Reporting",
    placement: 6,
    marks: 4,

    question_html: `
    <p>
      Sunshine Ltd., a listed company in the cosmetics industry, has debt covenants attached to some
      of its borrowings which are included in Financial Liabilities in the Balance Sheet. These
      covenants mandate the company to repay the debt in full if Sunshine Ltd. fails to maintain a
      liquidity ratio and operating margin above the specified limit.
    </p>

    <p>
      The directors alongwith the CFO of the Company who is a chartered accountant are considering
      entering into a fresh five-year leasing arrangement but are concerned about the negative impact
      any potential lease obligations may have on the above-mentioned covenants.
    </p>

    <p>
      Accordingly, the directors and CFO propose that the lease agreement be drafted in such a way
      that it is a series of six ten-month leases rather than a single five-year lease in order to utilize
      the short-term lease exemption available under Ind AS 116, Leases. This would then enable
      accounting for the leases in their legal form.
    </p>

    <p>
      The directors believe that this treatment will meet the requirements of the debt covenant, though
      such treatment may be contrary to the accounting standards.
    </p>

    <p><strong>Required:</strong></p>

    <p>
      Discuss the ethical and accounting implications of the above issue from the perspective of CFO.
    </p>
  `,

    solution_html: `
    <strong>Lease agreement substance presentation</strong>

    <p>
      Stakeholders make informed and accurate decisions based on the information presented in the
      financial statements and as such, ensuring the financial statements are reliable and of utmost
      importance.
    </p>

    <p>
      The directors of Sunshine Ltd. are ethically responsible to produce financial statements that
      comply with Ind AS and are transparent and free from material error.
    </p>

    <p>
      Lenders often attach covenants to the terms of the agreement in order to protect their interests
      in an entity. They would also be of crucial importance to potential debt and equity investors
      when assessing the risks and returns from any future investment in the entity.
    </p>

    <p>
      The proposed action by Sunshine Ltd. appears to be a deliberate attempt to circumvent the terms
      of the covenants. The legal form would require treatment as a series of short-term leases which
      would be recorded in the profit or loss, without any right-of-use asset and lease liability being
      recognized as required by Ind AS 116, Leases.
    </p>

    <p>
      This would be a form of 'off-balance sheet finance' and would not report the true assets and
      obligations of Sunshine Ltd. As a result of this proposed action, the liquidity ratios would be
      adversely misrepresented.
    </p>

    <p>
      Further, the operating profit margins would also be adversely affected, as the expenses
      associated with the lease are likely to be higher than the depreciation charge if a leased asset
      was recognized, hence the proposal may actually be detrimental to the operating profit covenant.
    </p>

    <p>
      Sunshine Ltd. is aware that the proposed treatment may be contrary to Ind AS. Such
      manipulation would be a clear breach of the fundamental principles of objectivity and integrity as
      outlined in the Code of Ethics.
    </p>

    <p>
      It is important for a chartered accountants to exercise professional behaviour and due care all
      the time. The proposals by Sunshine Ltd. are likely to mislead the stakeholders in the entity.
      This could discredit the profession by creating a lack of confidence within the profession.
    </p>

    <p>
      The directors of Sunshine Ltd. must be reminded of their ethical responsibilities and persuaded
      that the accounting treatment must fully comply with the Ind AS and principles outlined within
      the framework should they proceed with the financing agreement.
    </p>

    <p>
      However, if the CFO fails to comply with his professional duties, he will be subject to
      professional misconduct under Clause 1 of Part II of Second Schedule of the Chartered
      Accountants Act, 1949.
    </p>

    <p>
      The Clause 1 states that a member of the Institute, whether in practice or not, shall be deemed
      to be guilty of professional misconduct, if he contravenes any of the provisions of this Act or
      the regulations made there under or any guidelines issued by the Council.
    </p>

    <p>
      As per the Guidelines issued by the Council, a member of the Institute who is an employee shall
      exercise due diligence and shall not be grossly negligent in the conduct of his duties.
    </p>
  `,
  },
  {
    question_id: "FR_MTPMAR24_6B",
    source: "ICAI MTP March 2024",
    chapter_name: "Ind AS 38 - Intangible Assets",
    placement: 6,
    marks: 8,

    question_html: `
    <p>
      X Pharmaceutical Ltd. seeks your opinion in respect of following accounting transactions:
    </p>

    <ol>
      <li>
        Acquired a 4 year license to manufacture a specialised drug at a cost of ₹ 1,00,00,000 at
        the start of the year. Production commenced immediately.
      </li>

      <li>
        Also purchased another company at the start of year. As part of that acquisition,
        X Pharmacy Ltd. acquired a brand with a fair value of ₹ 3,00,00,000 based on sales
        revenue. The life of the brand is estimated at 15 years.
      </li>

      <li>
        Spent ₹ 1,00,00,000 on an advertising campaign during the first six months. Subsequent
        sales have shown a significant improvement and it is expected this will continue for 3 years.
      </li>

      <li>
        It has commenced developing a new drug 'Drug-A'. The project cost would be
        ₹ 10,00,00,000. Clinical trial proved successful and such drug is expected to generate
        revenue over the next 5 years.
        <br><br>
        Cost incurred (accumulated) till 31st March, 20X1 is ₹ 5,00,00,000.
        <br>
        Balance cost incurred during the financial year 20X1-20X2 is ₹ 5,00,00,000.
      </li>

      <li>
        It has also commenced developing another drug 'Drug B'. It has incurred ₹ 50,00,000
        towards research expenses till 31st March, 20X2. The technological feasibility has not yet
        been established.
      </li>
    </ol>

    <p>
      Advise how the above transactions will be accounted for in the books of account of
      X Pharmaceutical Ltd.
    </p>
  `,

    solution_html: `
    <strong>X Pharmaceutical Ltd. is advised as under:</strong>

    <ol>
      <li>
        It should recognize the drug license as an intangible asset because it is a separate external
        purchase, separately identifiable asset and considered successful in respect of feasibility
        and probable future cash inflows.
        <br><br>
        The drug license should be recorded at ₹ 1,00,00,000.
      </li>

      <br>

      <li>
        It should recognize the brand as an intangible asset because it is purchased as part of
        acquisition and it is separately identifiable. The brand should be amortised over a period
        of 15 years.
        <br><br>
        The brand will be recorded at ₹ 3,00,00,000.
      </li>

      <br>

      <li>
        The advertisement expenses of ₹ 1,00,00,000 should be expensed off.
      </li>

      <br>

      <li>
        The development cost incurred during the financial year 20X1-20X2 should be capitalised.
      </li>
    </ol>

    <br>

    <strong>Cost of intangible asset (Drug A) as on 31st March, 20X2</strong>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Particulars</th>
        <th>Amount (₹)</th>
      </tr>
      <tr>
        <td>Opening cost</td>
        <td>5,00,00,000</td>
      </tr>
      <tr>
        <td>Development cost</td>
        <td>5,00,00,000</td>
      </tr>
      <tr>
        <th>Total cost</th>
        <th>10,00,00,000</th>
      </tr>
    </table>

    <br>

    <ol start="5">
      <li>
        Research expenses of ₹ 50,00,000 incurred for developing 'Drug B' should be expensed
        off since technological feasibility has not yet established.
      </li>
    </ol>
  `,
  },
  {
    question_id: "FR_MTPMAR24_6C",
    source: "ICAI MTP March 2024",
    chapter_name: "Valuation",
    placement: 6,
    marks: 8,

    question_html: `
    <p>
      You are a senior consultant of your firm and are in process of determining the valuation of
      KK Ltd. You have determined the valuation of the company by two approaches i.e. Market
      Approach and Income approach and selected the highest as the final value.
    </p>

    <p>
      However, based upon the discussion with your partner you have been requested to assign
      equal weights to both the approaches and determine a fair value of shares of KK Ltd.
    </p>

    <p>
      The details of the KK Ltd. are as follows:
    </p>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Particulars</th>
        <th>₹ in crore</th>
      </tr>
      <tr>
        <td>Valuation as per Market Approach</td>
        <td>5268.2</td>
      </tr>
      <tr>
        <td>Valuation as per Income Approach</td>
        <td>3235.2</td>
      </tr>
      <tr>
        <td>Debt obligation as on Measurement date</td>
        <td>1465.9</td>
      </tr>
      <tr>
        <td>Surplus cash & cash equivalent</td>
        <td>106.14</td>
      </tr>
      <tr>
        <td>Fair value of surplus assets and Liabilities</td>
        <td>312.4</td>
      </tr>
      <tr>
        <td>Number of shares of KK Ltd.</td>
        <td>8,52,84,223 shares</td>
      </tr>
    </table>

    <p>
      Determine the Equity value of KK Ltd. as on the measurement date on the basis of above details.
    </p>
  `,

    solution_html: `
    <strong>Equity Valuation of KK Ltd.</strong>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Particulars</th>
        <th>Weights</th>
        <th>(₹ in crore)</th>
      </tr>

      <tr>
        <td>As per Market Approach</td>
        <td>50</td>
        <td>5268.2</td>
      </tr>

      <tr>
        <td>As per Income Approach</td>
        <td>50</td>
        <td>3235.2</td>
      </tr>

      <tr>
        <td>Enterprise Valuation based on weights (5268.2 x 50%) + (3235.2 x 50%)</td>
        <td></td>
        <td>4,251.7</td>
      </tr>

      <tr>
        <td>Less: Debt obligation as on measurement date</td>
        <td></td>
        <td>(1465.9)</td>
      </tr>

      <tr>
        <td>Add: Surplus cash & cash equivalent</td>
        <td></td>
        <td>106.14</td>
      </tr>

      <tr>
        <td>Add: Fair value of surplus assets and liabilities</td>
        <td></td>
        <td>312.40</td>
      </tr>

      <tr>
        <th>Enterprise value of KK Ltd.</th>
        <th></th>
        <th>3204.33</th>
      </tr>

      <tr>
        <td>No. of shares</td>
        <td></td>
        <td>85,284,223</td>
      </tr>

      <tr>
        <th>Value per share</th>
        <th></th>
        <th>375.72</th>
      </tr>
    </table>
  `,
  },
  {
    question_id: "FR_MTPMAY24II_1",
    source: "ICAI MTP May 2024 Series II",
    chapter_name: "Business Combination (Ind AS 103)",
    placement: 1,
    marks: 14,

    question_html: `
    <p>
      On 1st April 20X1, J Ltd. acquired a new subsidiary, B Ltd., purchasing all 150 million shares of B Ltd.
      The terms of the sale agreement included the exchange of four shares in J Ltd. for every three shares
      acquired in B Ltd. On 1st April 20X1, the market value of a share in J Ltd. was ₹10 and the market
      value of a share in B Ltd. ₹12.00.
    </p>

    <p>
      The terms of the share purchase included the issue of one additional share in J Ltd. for every five
      acquired in B Ltd. if the profits of B Ltd. for the two years ending 31st March 20X2 exceeded the target
      figure. Current estimates are that it is 80% probable that the management of B Ltd. will achieve this target.
    </p>

    <p>
      Legal and professional fees associated with the acquisition of B Ltd. shares were ₹12,00,000,
      including ₹2,00,000 relating to the cost of issuing shares. The senior management of J Ltd. estimate
      that the cost of their time that can be fairly allocated to the acquisition is ₹2,00,000. This figure of
      ₹2,00,000 is not included in the legal and professional fees of ₹12,00,000 mentioned above.
    </p>

    <p>
      The individual Balance Sheet of B Ltd. at 1st April 20X1 comprised net assets that had a fair value at
      that date of ₹1,200 million. Additionally, J Ltd. considered B Ltd. possessed certain intangible assets
      that were not recognized in its individual Balance Sheet:
    </p>

    <ul>
      <li>
        Customer relationships – reliable estimate of value ₹100 million. This value has been derived
        from the sale of customer databases in the past.
      </li>
      <li>
        An in process research and development project that had not been recognised by B Ltd. since
        the necessary conditions laid down in Ind AS for capitalisation were only just satisfied at
        31st March 20X2. However, the fair value of the whole project (including the research phase)
        is estimated at ₹50 million.
      </li>
      <li>
        Employee expertise – estimated value of Director employees of B Ltd. is ₹80 million.
      </li>
    </ul>

    <p>
      The market value of a share in J Ltd. on 31st March 20X2 was ₹11.
    </p>

    <p>
      Compute the goodwill on consolidation of B Ltd. that will appear in the consolidated balance sheet of
      J Ltd. at 31st March 20X2 with necessary explanation of adjustments therein.
    </p>
  `,

    solution_html: `
    <strong>Calculation of purchase consideration:</strong>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Particulars</th>
        <th>₹ in million</th>
      </tr>
      <tr>
        <td>Market value of shares issued (150 million × 4/3 × ₹10)</td>
        <td>2,000</td>
      </tr>
      <tr>
        <td>Initial estimate of market value of shares to be issued (150 million × 1/5 × ₹10)</td>
        <td>300</td>
      </tr>
      <tr>
        <th>Total consideration</th>
        <th>2,300</th>
      </tr>
    </table>

    <br>

    Contingent consideration is recognized in full if payment is probable.

    <br><br>

    As per para 53 of Ind AS 103, acquisition-related costs are costs the acquirer incurs to effect a business combination.
    Those costs include finder’s fees; advisory, legal, accounting, valuation and other professional or consulting fees;
    general administrative costs, including the costs of maintaining an internal acquisitions department; and costs of
    registering and issuing debt and equity securities.

    <br><br>

    The acquirer shall account for acquisition-related costs as expenses in the periods in which the costs are incurred
    and the services are received, with one exception. The costs to issue debt or equity securities shall be recognised
    in accordance with Ind AS 32 and Ind AS 109.

    <br><br>

    <strong>Statement of fair value of identifiable net assets at the date of acquisition</strong>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Particulars</th>
        <th>₹ in million</th>
      </tr>
      <tr>
        <td>As per B Ltd.'s Balance Sheet</td>
        <td>1,200</td>
      </tr>
      <tr>
        <td>Fair value of customer relationships</td>
        <td>100</td>
      </tr>
      <tr>
        <td>Fair value of research and development project</td>
        <td>50</td>
      </tr>
      <tr>
        <th>Total net assets acquired</th>
        <th>1,350</th>
      </tr>
    </table>

    <br>

    As per Ind AS 38 'Intangible Assets', intangible assets can be recognized separately from goodwill
    provided they are identifiable, are under the control of the acquiring entity, and their fair value can
    be measured reliably.

    <br><br>

    Customer relationships that are similar in nature to those previously traded, pass these tests but
    employee expertise fail the 'control' test. Both the research and development phases of in-process
    project can be capitalised provided their fair value can be measured reliably.

    <br><br>

    <strong>Statement of computation of goodwill</strong>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Particulars</th>
        <th>₹ in million</th>
      </tr>
      <tr>
        <td>Fair value of consideration given</td>
        <td>2,300</td>
      </tr>
      <tr>
        <td>Less: Fair value of net assets acquired</td>
        <td>(1,350)</td>
      </tr>
      <tr>
        <th>Goodwill on acquisition</th>
        <th>950</th>
      </tr>
    </table>

    <br>

    Paragraph 58 of Ind AS 103 provides guidance on the subsequent accounting for contingent consideration.

    <br><br>

    In general, an equity instrument is any contract that evidences a residual interest in the assets of an entity
    after deducting all of its liabilities.

    <br><br>

    Ind AS 32 describes an equity instrument as one that meets both of the following conditions:

    <ul>
      <li>
        There is no contractual obligation to deliver cash or another financial asset to another party,
        or to exchange financial assets or financial liabilities with another party under potentially
        unfavourable conditions.
      </li>
      <li>
        If the instrument will or may be settled in the issuer's own equity instruments, then it is:
        <ul>
          <li>a non-derivative that comprises an obligation to deliver a fixed number of own equity instruments; or</li>
          <li>
            a derivative that will be settled only by exchanging a fixed amount of cash or other financial
            assets for a fixed number of own equity instruments.
          </li>
        </ul>
      </li>
    </ul>

    <p>
      In the given case, given that the acquirer has an obligation to issue fixed number of shares on
      fulfilment of the contingency, the contingent consideration will be classified as equity as per
      the requirements of Ind AS 32.
    </p>

    <p>
      As per paragraph 58 of Ind AS 103, contingent consideration classified as equity should not be
      re-measured and its subsequent settlement should be accounted for within equity.
    </p>

    <p>
      Therefore, the goodwill appearing in the consolidated balance sheet of J Ltd. at
      31st March 20X2 will remain <strong>₹950 million</strong>.
    </p>
  `,
  },
  {
    question_id: "FR_MTPAPR24II_2A",
    source: "ICAI MTP April 2024 Series II",
    chapter_name: "Financial Instruments / Ind AS 109",
    placement: 2,
    marks: 10,

    question_html: `
    

    <p>
      D Limited has a policy of providing subsidized loans to its employees for their personal purposes.
      Mr. Y, an employee of the Company, took a loan of ₹12.00 lakhs on the following terms:
    </p>

    <ul>
      <li>Interest rate 4% per annum</li>
      <li>Loan disbursement date: 1st April, 20X1</li>
      <li>The principal amount of the loan shall be recovered in 4 equal annual installments commencing from 31st March, 20X2</li>
      <li>The accumulated interest computed on reducing balance at simple interest is collected in 3 equal annual installments after collection of the principal amount</li>
      <li>Mr. Y must remain in service till the principal and interest are paid</li>
      <li>The market rate of a comparable loan to Mr. Y is 9% per annum</li>
    </ul>

    <p>
      The present value of ₹1 at 9% per annum at the end of respective years is as follows:
    </p>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Year ending 31st March</th>
        <th>Present Value</th>
      </tr>
      <tr><td>20X2</td><td>0.9174</td></tr>
      <tr><td>20X3</td><td>0.8417</td></tr>
      <tr><td>20X4</td><td>0.7722</td></tr>
      <tr><td>20X5</td><td>0.7084</td></tr>
      <tr><td>20X6</td><td>0.6499</td></tr>
      <tr><td>20X7</td><td>0.5963</td></tr>
      <tr><td>20X8</td><td>0.5470</td></tr>
    </table>

    <p>
      You are required to prepare journal entries for initial recognition and year end.
    </p>
  `,

    solution_html: `
    <p><strong>Journal Entries</strong></p>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Date</th>
        <th>Particulars</th>
        <th>Dr.</th>
        <th>Cr.</th>
      </tr>

      <tr>
        <td>1/4/20X1</td>
        <td>
          Loan to Mr. Y A/c Dr.<br>
          Pre-paid employee cost A/c Dr.<br>
          To Bank A/c
        </td>
        <td>10,43,638<br>1,56,362</td>
        <td>12,00,000</td>
      </tr>

      <tr>
        <td>31/3/20X2</td>
        <td>
          Loan to Mr. Y A/c Dr.<br>
          To Finance Income A/c
        </td>
        <td>93,927</td>
        <td>93,927</td>
      </tr>

      <tr>
        <td>31/3/20X2</td>
        <td>
          Bank A/c Dr.<br>
          To Loan to Mr. Y A/c
        </td>
        <td>3,00,000</td>
        <td>3,00,000</td>
      </tr>
    </table>
  `,
  },
  {
    question_id: "FR_MTPAPR24II_2B",
    source: "ICAI MTP April 2024 Series II",
    chapter_name: "Ind AS 12 - Income Taxes (Interim Tax Reporting)",
    placement: 2,
    marks: 4,

    question_html: `
    

    <p>
      An entity’s accounting year ends is 31st December, but its tax year end is 31st March.
      The entity publishes an interim financial report for each quarter of the year ended 31st December, 20X1.
      The entity’s profit before tax is steady at Rs 50,000 each quarter, and the estimated effective tax rate is
      25% for the year ended 31st March, 20X1 and 30% for the year ended 31st March, 20X2.
    </p>

    <p>
      How the related tax charge would be calculated for the year 20X1 and its quarters.
    </p>
  `,

    solution_html: `
    

    <p>
      Since the entity’s accounting year is not same as the tax year, more than one tax rate might apply
      during the accounting year. Accordingly, the entity should apply the effective tax rate for each interim
      period to the pre-tax result for that period.
    </p>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Quarter</th>
        <th>Profit before tax (Rs)</th>
        <th>Tax rate</th>
        <th>Tax charge (Rs)</th>
        <th>Profit after tax (Rs)</th>
      </tr>

      <tr>
        <td>Quarter ending 31st March 20X1</td>
        <td>50,000</td>
        <td>25%</td>
        <td>(12,500)</td>
        <td>37,500</td>
      </tr>

      <tr>
        <td>Quarter ending 30th June 20X1</td>
        <td>50,000</td>
        <td>30%</td>
        <td>(15,000)</td>
        <td>35,000</td>
      </tr>

      <tr>
        <td>Quarter ending 30th September 20X1</td>
        <td>50,000</td>
        <td>30%</td>
        <td>(15,000)</td>
        <td>35,000</td>
      </tr>

      <tr>
        <td>Quarter ending 31st December 20X1</td>
        <td>50,000</td>
        <td>30%</td>
        <td>(15,000)</td>
        <td>35,000</td>
      </tr>

      <tr>
        <th>Total</th>
        <th>2,00,000</th>
        <th>-</th>
        <th>(57,500)</th>
        <th>1,42,500</th>
      </tr>
    </table>

    <p>
      Since different tax rates apply across periods, the effective tax rate approach is applied as per Ind AS 34.
    </p>
  `,
  },

  {
    question_id: "FR_MTPAPR24II_3A",
    source: "ICAI MTP April 2024 Series II",
    chapter_name: "Ind AS 103 - Business Combinations (Goodwill & NCI)",
    placement: 3,
    marks: 8,

    question_html: `
    

    <p>
      B Ltd. prepares consolidated financial statements upto 31st March each year.
      On 1st July 20X1, B Ltd. acquired 75% of the equity shares of K Ltd. and gained control of K Ltd.
      The issued shares of K Ltd. is 60,00,000 equity shares. Details of the purchase consideration are as follows:
    </p>

    <ul>
      <li>
        On 1st July, 20X1, B Ltd. issued two shares for every three shares acquired in K Ltd.
        On 1st July, 20X1, the market value of an equity share in B Ltd. was Rs 6.50 and the
        market value of an equity share in K Ltd. was Rs 6.
      </li>

      <li>
        On 30th June, 20X2, B Ltd. will make a cash payment of Rs 35,75,000 to the former
        shareholders of K Ltd. who sold their shares to B Ltd. on 1st July, 20X1.
        On 1st July, 20X1, B Ltd. would have to pay interest at an annual rate of 10% on borrowings.
      </li>

      <li>
        On 30th June, 20X3, B Ltd. may make a cash payment of Rs 1,50,00,000 to the former
        shareholders of K Ltd. who sold their shares to B Ltd. on 1st July, 20X1.
        This payment is contingent upon the revenues of B Ltd. growing by 15% over the two-year
        period from 1st July, 20X1 to 30th June, 20X3.
        On 1st July, 20X1, the fair value of this contingent consideration was Rs 1,25,00,000.
        On 31st March, 20X2, the fair value of the contingent consideration was Rs 1,10,00,000.
      </li>
    </ul>

    <p>
      On 1st July, 20X1, the carrying values of the identifiable net assets of K Ltd. in the books
      of that company was Rs 3,00,00,000. On 1st July, 20X1, the fair values of these net assets
      was Rs 3,50,00,000. The rate of deferred tax to apply to temporary differences is 20%.
    </p>

    <p>
      During the nine months ended on 31st March, 20X2, K Ltd. had a poorer than expected
      operating performance. Therefore, on 31st March, 20X2 it was necessary for B Ltd.
      to recognise an impairment of the goodwill arising on acquisition of K Ltd.,
      amounting to 10% of its total computed value.
    </p>

    <p>
      Compute the impairment of goodwill in the consolidated financial statements of B Ltd.
      under both the methods permitted by Ind AS 103 for the initial computation of the
      non-controlling interest in K Ltd. at the acquisition date.
    </p>
  `,

    solution_html: `
    

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Particulars</th>
        <th>NCI at Fair Value (Rs '000)</th>
        <th>NCI at Proportionate Share of Net Assets (Rs '000)</th>
      </tr>

      <tr>
        <td>Share exchange (6,000 × 75% × 2/3 × Rs 6.50)</td>
        <td>19,500</td>
        <td>19,500</td>
      </tr>

      <tr>
        <td>Deferred consideration (3,575 / 1.10)</td>
        <td>3,250</td>
        <td>3,250</td>
      </tr>

      <tr>
        <td>Contingent consideration</td>
        <td>12,500</td>
        <td>12,500</td>
      </tr>

      <tr>
        <td><strong>Cost of investment</strong></td>
        <td><strong>35,250</strong></td>
        <td><strong>35,250</strong></td>
      </tr>

      <tr>
        <td>Non-controlling interest at acquisition date</td>
        <td>9,000</td>
        <td>8,500</td>
      </tr>

      <tr>
        <td>Net assets at acquisition (Refer Working Note)</td>
        <td>(34,000)</td>
        <td>(34,000)</td>
      </tr>

      <tr>
        <td><strong>Goodwill on acquisition</strong></td>
        <td><strong>10,250</strong></td>
        <td><strong>9,750</strong></td>
      </tr>

      <tr>
        <td>Impairment @ 10%</td>
        <td><strong>1,025</strong></td>
        <td><strong>975</strong></td>
      </tr>
    </table>

    <p><strong>Working Note:</strong></p>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Net Assets on the Acquisition Date</th>
        <th>Rs '000</th>
      </tr>

      <tr>
        <td>Fair value at acquisition date</td>
        <td>35,000</td>
      </tr>

      <tr>
        <td>Less: Deferred tax on fair value adjustments [20% × (35,000 − 30,000)]</td>
        <td>(1,000)</td>
      </tr>

      <tr>
        <th>Net assets at acquisition</th>
        <th>34,000</th>
      </tr>
    </table>
  `,
  },

  {
    question_id: "FR_MTPAPR24II_3B",
    source: "ICAI MTP April 2024 Series II",
    chapter_name:
      "Ind AS 37 - Provisions, Contingent Liabilities and Contingent Assets (Onerous Contracts)",
    placement: 3,
    marks: 6,

    question_html: `
    

    <p>
      An entity has a contract to purchase one million units of gas at 23p per unit,
      giving a contract price of Rs 2,30,000. The current market price for a similar
      contract is 16p per unit, giving a price of Rs 1,60,000.
      All of the gas purchased by the entity is used to generate electricity using
      dedicated assets.
    </p>

    <p>
      Determine in the following situations whether the contract is onerous and
      provision is to be made when:
    </p>

    <ol type="i">
      <li>
        The electricity is sold at a profit. The electricity is sold to a wide range
        of customers.
      </li>

      <li>
        The electricity is sold at a loss, and the entity makes an overall operating
        loss. The electricity is sold to a wide range of customers.
      </li>

      <li>
        The entity sells the gas under contract, which it no longer needs,
        to a third party for 18p per unit (5p below cost). The entity determines
        that it would have to pay Rs 55,000 to exit the purchase contract.
      </li>
    </ol>
  `,

    solution_html: `
    

    <p><strong>(i)</strong></p>

    <p>
      The gas will be used to generate electricity, which will be sold at a profit.
      The economic benefits from the contract include the benefits to the entity
      of using the gas in its business and, because the electricity will be sold at
      a profit, the contract is not onerous.
    </p>

    <p><strong>(ii)</strong></p>

    <p>
      The electricity is sold to a wide range of customers. The entity first
      considers whether the assets used to generate electricity are impaired.
      To the extent that there is still a loss after the assets have been written
      down, a provision for an onerous contract should be recorded.
    </p>

    <p><strong>(iii)</strong></p>

    <p>
      The only economic benefit from the purchase contract costing
      Rs 2,30,000 are the proceeds from the sales contract,
      which are Rs 1,80,000.
      Therefore, a provision should be made for the onerous element of
      Rs 50,000, being the lower of the cost of fulfilling the contract and
      the penalty cost of cancellation (Rs 55,000).
    </p>
  `,
  },

  {
    question_id: "FR_MTPAPR24II_4A",
    source: "ICAI MTP April 2024 Series II",
    chapter_name:
      "Ind AS 28 - Investments in Associates and Joint Ventures (Equity Method)",
    placement: 4,
    marks: 5,

    question_html: `
    

    <p>
      On 1st April 20X1, Investor Ltd. acquires 35% interest in XYZ Ltd.
      thereby exercising significant influence over XYZ Ltd.
      Investor Ltd. has paid total consideration of Rs 47,50,000 for acquisition
      of its interest in XYZ Ltd.
    </p>

    <p>
      At the date of acquisition, the book value of XYZ Ltd.'s net assets was
      Rs 90,00,000 and their fair value was Rs 1,10,00,000.
      Investor Ltd. has determined that the difference of Rs 20,00,000 pertains
      to an item of Property, Plant and Equipment (PPE) which has remaining
      useful life of 10 years.
    </p>

    <p>
      During the year, XYZ Ltd. made a profit of Rs 9,00,000.
      XYZ Ltd. paid a dividend of Rs 10,00,000 on 31st March, 20X2.
      XYZ Ltd. also holds a long-term investment in equity securities.
      Under Ind AS, investment is classified as at FVTOCI in accordance with
      Ind AS 109 and XYZ Ltd. recognized an increase in value of investment
      by Rs 2,00,000 in OCI during the year.
      Ignore deferred tax implications, if any.
    </p>

    <p>
      Calculate the closing balance of Investor Ltd.'s investment in XYZ Ltd.
      as at 31st March, 20X2 as per the relevant Ind AS.
    </p>
  `,

    solution_html: `
    

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Particulars</th>
        <th>Rs</th>
      </tr>

      <tr>
        <td>Acquisition of investment in XYZ Ltd.</td>
        <td></td>
      </tr>

      <tr>
        <td>Share in book value of XYZ Ltd.'s net assets (35% of Rs 90,00,000)</td>
        <td>31,50,000</td>
      </tr>

      <tr>
        <td>Share in fair valuation of XYZ Ltd.'s net assets [35% of (Rs 1,10,00,000 − Rs 90,00,000)]</td>
        <td>7,00,000</td>
      </tr>

      <tr>
        <td>Goodwill on investment in XYZ Ltd. (balancing figure)</td>
        <td>9,00,000</td>
      </tr>

      <tr>
        <th>Cost of investment</th>
        <th>47,50,000</th>
      </tr>

      <tr>
        <td colspan="2"><strong>Profit during the year</strong></td>
      </tr>

      <tr>
        <td>Share in the profit reported by XYZ Ltd. (35% of Rs 9,00,000)</td>
        <td>3,15,000</td>
      </tr>

      <tr>
        <td>Adjustment to reflect effect of fair valuation [35% of (Rs 20,00,000 / 10 years)]</td>
        <td>(70,000)</td>
      </tr>

      <tr>
        <td><strong>Share of profit in XYZ Ltd. recognised in income by Investor Ltd.</strong></td>
        <th>2,45,000</th>
      </tr>

      <tr>
        <td>Long-term equity investment FVTOCI gain recognised in OCI (35% of Rs 2,00,000)</td>
        <td>70,000</td>
      </tr>

      <tr>
        <td>Dividend received by Investor Ltd. during the year [35% of Rs 10,00,000]</td>
        <td>(3,50,000)</td>
      </tr>

      <tr>
        <th>Closing balance of Investor Ltd.'s investment in XYZ Ltd.</th>
        <th>47,15,000</th>
      </tr>
    </table>
  `,
  },

  {
    question_id: "FR_MTPAPR24II_4B",
    source: "ICAI MTP April 2024 Series II",
    chapter_name: "Ind AS 33 - Earnings Per Share (Basic & Diluted EPS)",
    placement: 4,
    marks: 9,

    question_html: `
    

    <p>Following are the facts given for X Ltd.:</p>

    <ul>
      <li>Income from continuing operations: Rs 90,00,000</li>
      <li>Loss from discontinued operations: (Rs 1,08,00,000)</li>
      <li>Net loss: (Rs 18,00,000)</li>
      <li>Weighted average number of shares outstanding: 10,00,000</li>
      <li>Incremental common shares outstanding relating to stock options: 2,00,000</li>
    </ul>

    <p>You are required to calculate:</p>

    <ol type="a">
      <li>The Basic and Diluted EPS for X Ltd.</li>
      <li>
        Assume, if in above case, Loss from continuing operations is
        Rs 30,00,000 and income from discontinued operations is
        Rs 1,08,00,000, calculate the Diluted EPS.
      </li>
    </ol>
  `,

    solution_html: `
    

    <p><strong>(a) Calculation of Basic EPS</strong></p>

    <p>
      <strong>Basic EPS = Profit for the year / Weighted average number of shares outstanding</strong>
    </p>

    <p>
      <strong>Basic EPS (Continued Operations)</strong><br>
      = Profit from continued operations / Weighted average number of shares outstanding<br>
      = Rs 90,00,000 / 10,00,000<br>
      = <strong>Rs 9.00</strong>
    </p>

    <p>
      <strong>Basic Loss per Share (Discontinued Operations)</strong><br>
      = Loss from discontinued operations / Weighted average number of shares outstanding<br>
      = (Rs 1,08,00,000) / 10,00,000<br>
      = <strong>(Rs 10.80)</strong>
    </p>

    <p>
      <strong>Overall Basic Loss per Share</strong><br>
      = (Rs 18,00,000) / 10,00,000<br>
      = <strong>(Rs 1.80)</strong>
    </p>

    <hr>

    <p><strong>(i) Calculation of Diluted EPS</strong></p>

    <p>
      <strong>Diluted EPS = Profit for the year / Adjusted weighted average number of shares outstanding</strong>
    </p>

    <p>
      <strong>EPS (Continued Operations)</strong><br>
      = Rs 90,00,000 / 12,00,000<br>
      = <strong>Rs 7.50</strong>
    </p>

    <p>
      <strong>Loss per Share (Discontinued Operations)</strong><br>
      = (Rs 1,08,00,000) / 12,00,000<br>
      = <strong>(Rs 9.00)</strong>
    </p>

    <p>
      <strong>Overall Diluted Loss per Share</strong><br>
      = (Rs 18,00,000) / 12,00,000<br>
      = <strong>(Rs 1.50)</strong>
    </p>

    <p>
      <strong>(ii)</strong> The income from continuing operations is the control number.
      There is a dilution in Basic EPS for income from continuing operations
      (reduction of EPS from Rs 9.00 to Rs 7.50).
      Therefore, even though there is an anti-dilution
      [Loss per share reduced from Rs 1.80 (i) to Rs 1.50 (ii) above],
      diluted loss per share of <strong>Rs 1.50</strong> is reported.
    </p>

    <hr>

    <p><strong>(b)</strong></p>

    <p>
      In case of loss from continuing operations, the potential shares are excluded
      since including those shares would result into anti-dilution effect on the
      control number (loss from continuing operations).
      Therefore, the diluted EPS will be calculated as under:
    </p>

    <p>
      <strong>Diluted EPS = Profit for the year / Adjusted weighted average number of shares outstanding</strong>
    </p>

    <p>
      Overall Profit = Loss from continuing operations + Gain from discontinued operations
      <br>
      = (Rs 30,00,000) + Rs 1,08,00,000
      <br>
      = <strong>Rs 78,00,000</strong>
    </p>

    <p>
      Weighted average number of shares outstanding = <strong>10,00,000</strong>
    </p>

    <p>
      Diluted EPS = Rs 78,00,000 / 10,00,000
      <br>
      = <strong>Rs 7.80</strong>
    </p>

    <p>
      The dilutive effect of the potential common shares on EPS for income from
      discontinued operations and net income would not be reported because of
      the loss from continuing operations.
    </p>
  `,
  },

  {
    question_id: "FR_MTPAPR24II_5A",
    source: "ICAI MTP April 2024 Series II",
    chapter_name: "Ind AS 115 - Revenue from Contracts with Customers",
    placement: 5,
    marks: 9,

    question_html: `
    

    <p>
      A Ltd. is a company which is in the business of manufacturing engineering
      machines and providing after sales services. The company entered into a
      contract with Mr. Anik to supply and install a machine, namely 'model pi'
      on 1st April 20X1 and to service this machine on 30th September 20X1
      and 1st April 20X2. The cost of manufacturing the machine to A Ltd.
      was Rs 1,60,000.
    </p>

    <p>
      It is possible for a customer to purchase both the machine 'model pi'
      and the maintenance services separately. Mr. Anik is contractually
      obliged to pay A Ltd. Rs 4,00,000 on 1st April, 20X2.
    </p>

    <p>
      The prevailing rate for one-year credit granted to trade customers in the
      industry is 5 percent per six-month period.
    </p>

    <p>
      As per the experience, the servicing of the machine 'model pi' sold to
      Mr. Anik is expected to cost A Ltd. Rs 30,000 to perform the first service
      and Rs 50,000 to perform the second service. Assume actual costs equal
      expected costs. When A Ltd. provides machine services to customers in a
      separate transaction it earns a margin of 50% on cost.
      On 1st April, 20X1, the cash selling price of the machine 'model pi'
      sold to Mr. Anik is Rs 2,51,927.
    </p>

    <p>
      The promised supply of machine 'model pi' and maintenance service
      obligations are satisfactorily carried out in time by the company.
    </p>

    <p>You are required to:</p>

    <ol type="i">
      <li>
        Segregate the components of the transaction that A Ltd. shall apply
        to the revenue recognition criteria separately as per Ind AS 115.
      </li>
      <li>
        Calculate the amount of revenue which A Ltd. must allocate to each
        component of the transaction.
      </li>
      <li>
        Prepare journal entries to record the information set out above in the
        books of accounts of A Ltd. for the years ended
        31st March 20X2 and 31st March 20X3.
      </li>
    </ol>
  `,

    solution_html: `
    

    <p><strong>(i)</strong></p>

    <p>
      On 1st April, 20X1, entity A entered into a single transaction with
      three identifiable separate components:
    </p>

    <ol>
      <li>Sale of a good (i.e. engineering machine);</li>
      <li>
        Rendering of services (i.e. engineering machine maintenance
        services on 30th September, 20X1 and 1st April, 20X2); and
      </li>
      <li>
        Providing finance (i.e. sale of engineering machine and rendering
        of services on extended period credit).
      </li>
    </ol>

    <p><strong>(ii) Calculation and allocation of revenue to each component of the transaction</strong></p>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Date</th>
        <th>Opening Balance (Rs)</th>
        <th>Finance Income (Rs)</th>
        <th>Goods (Rs)</th>
        <th>Services (Rs)</th>
        <th>Payment Received (Rs)</th>
        <th>Closing Balance (Rs)</th>
      </tr>

      <tr>
        <td>1st April, 20X1</td>
        <td>-</td>
        <td>-</td>
        <td>2,51,927</td>
        <td>-</td>
        <td>-</td>
        <td>2,51,927</td>
      </tr>

      <tr>
        <td>30th September, 20X1</td>
        <td>2,51,927</td>
        <td>12,596 (Note 1)</td>
        <td>-</td>
        <td>45,000</td>
        <td>-</td>
        <td>3,09,523</td>
      </tr>

      <tr>
        <td>31st March, 20X2</td>
        <td>3,09,523</td>
        <td>15,477 (Note 2)</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>3,25,000</td>
      </tr>

      <tr>
        <td>1st April, 20X2</td>
        <td>3,25,000</td>
        <td>-</td>
        <td>-</td>
        <td>75,000</td>
        <td>(4,00,000)</td>
        <td>-</td>
      </tr>
    </table>

    <p><strong>Notes:</strong></p>

    <p>
      <strong>1. Calculation of finance income as on 30th September, 20X1</strong><br>
      = 5% × Rs 2,51,927<br>
      = <strong>Rs 12,596</strong>
    </p>

    <p>
      <strong>2. Calculation of finance income as on 31st March, 20X2</strong><br>
      = 5% × Rs 3,09,523<br>
      = <strong>Rs 15,477</strong>
    </p>

    <p><strong>(iii) Journal Entries</strong></p>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Date</th>
        <th>Particulars</th>
        <th>Dr. (Rs)</th>
        <th>Cr. (Rs)</th>
      </tr>

      <tr>
        <td>1st April, 20X1</td>
        <td>
          Mr. Anik A/c Dr.<br>
          &nbsp;&nbsp;&nbsp;&nbsp;To Revenue - Sale of Goods (Profit or Loss A/c)<br>
          (Being revenue recognised from the sale of the machine on credit)
        </td>
        <td>2,51,927</td>
        <td>2,51,927</td>
      </tr>

      <tr>
        <td>1st April, 20X1</td>
        <td>
          Cost of Goods Sold (Profit or Loss) Dr.<br>
          &nbsp;&nbsp;&nbsp;&nbsp;To Inventories<br>
          (Being cost of goods sold recognised)
        </td>
        <td>1,60,000</td>
        <td>1,60,000</td>
      </tr>

      <tr>
        <td>30th September, 20X1</td>
        <td>
          Mr. Anik A/c Dr.<br>
          &nbsp;&nbsp;&nbsp;&nbsp;To Finance Income (Profit or Loss)<br>
          (Being finance income recognised)
        </td>
        <td>12,596</td>
        <td>12,596</td>
      </tr>

      <tr>
        <td>30th September, 20X1</td>
        <td>
          Mr. Anik A/c Dr.<br>
          &nbsp;&nbsp;&nbsp;&nbsp;To Revenue - Rendering of Services (Profit or Loss)<br>
          (Being revenue from the rendering of maintenance services recognised)
        </td>
        <td>45,000</td>
        <td>45,000</td>
      </tr>

      <tr>
        <td>30th September, 20X1</td>
        <td>
          Cost of Services (Profit or Loss) Dr.<br>
          &nbsp;&nbsp;&nbsp;&nbsp;To Cash/Bank or Payables<br>
          (Being the cost of performing maintenance services recognised)
        </td>
        <td>30,000</td>
        <td>30,000</td>
      </tr>

      <tr>
        <td>31st March, 20X2</td>
        <td>
          Mr. Anik A/c Dr.<br>
          &nbsp;&nbsp;&nbsp;&nbsp;To Finance Income (Profit or Loss)<br>
          (Being finance income recognised)
        </td>
        <td>15,477</td>
        <td>15,477</td>
      </tr>

      <tr>
        <td>1st April, 20X2</td>
        <td>
          Mr. Anik A/c Dr.<br>
          &nbsp;&nbsp;&nbsp;&nbsp;To Revenue - Rendering of Services (Profit or Loss)<br>
          (Being revenue from the rendering of maintenance services recognised)
        </td>
        <td>75,000</td>
        <td>75,000</td>
      </tr>

      <tr>
        <td>1st April, 20X2</td>
        <td>
          Cost of Services (Profit or Loss) Dr.<br>
          &nbsp;&nbsp;&nbsp;&nbsp;To Cash/Bank or Payables<br>
          (Being the cost of performing maintenance services recognised)
        </td>
        <td>50,000</td>
        <td>50,000</td>
      </tr>

      <tr>
        <td>1st April, 20X2</td>
        <td>
          Cash/Bank Dr.<br>
          &nbsp;&nbsp;&nbsp;&nbsp;To Mr. Anik A/c<br>
          (Being the receipt of cash from the customer recognised)
        </td>
        <td>4,00,000</td>
        <td>4,00,000</td>
      </tr>
    </table>
  `,
  },

  {
    question_id: "FR_MTPAPR24II_5B",
    source: "ICAI MTP April 2024 Series II",
    chapter_name:
      "Ind AS 101 - First-time Adoption of Indian Accounting Standards (Share-based Payment Exemption)",
    placement: 5,
    marks: 5,

    question_html: `
    

    <p>
      X Ltd. is a first-time adopter of Ind AS.
      The date of transition is 1st April, 20X1.
      It has given 300 stock options to its employees.
      Out of these, 100 options have vested on 30th November, 20X0
      and the remaining 200 will vest on 30th November, 20X1.
    </p>

    <p>
      What are the options available to X Ltd. at the date of transition?
    </p>
  `,

    solution_html: `
    

    <p>
      Ind AS 101 provides that a first-time adopter is encouraged, but not required,
      to apply Ind AS 102 on <strong>'Share-based Payment'</strong> to equity instruments
      that vested before the date of transition to Ind AS.
    </p>

    <p>
      However, if a first-time adopter elects to apply Ind AS 102 to such equity
      instruments, it may do so only if the entity has disclosed publicly the fair
      value of those equity instruments, determined at the measurement date,
      as defined in Ind AS 102.
    </p>

    <p>
      Having regard to the above, X Ltd. has the following options:
    </p>

    <ul>
      <li>
        <strong>For 100 options that vested before the date of transition:</strong>
        <ol type="a">
          <li>
            To apply Ind AS 102 and account for the same accordingly,
            provided it has disclosed publicly the fair value of those equity
            instruments, determined at the measurement date,
            as defined in Ind AS 102.
          </li>
          <li>
            Not to apply Ind AS 102.
          </li>
        </ol>

        <p>
          However, for all grants of equity instruments to which Ind AS 102 has
          not been applied, i.e., equity instruments vested but not settled before
          the date of transition to Ind AS, X Ltd. would still need to disclose
          the information.
        </p>
      </li>

      <li>
        <strong>For 200 options that will vest after the date of transition:</strong>
        X Ltd. will need to account for the same as per Ind AS 102.
      </li>
    </ul>
  `,
  },

  {
    question_id: "FR_MTPAPR24II_6A",
    source: "ICAI MTP April 2024 Series II",
    chapter_name:
      "Ind AS 105 - Non-current Assets Held for Sale and Discontinued Operations (with Ethics)",
    placement: 6,
    marks: 5,

    question_html: `
    

    <p>
      As at 31 March 20X4, M Ltd. had a plan to dispose off its 75%
      subsidiary D Ltd. This plan had been approved by the board and
      was reported in the media as well as to the Stock Exchange where
      M Ltd. was listed. It is expected that J Ltd., the non-controlling
      shareholder in D Ltd. holding 25% stake, will acquire the 75%
      equity interest as well. The sale is expected to be completed by
      October 20X4.
    </p>

    <p>
      D Ltd. is expected to have substantial trading losses in the period
      up to the sale.
    </p>

    <p>
      Mr. X, a chartered accountant, who is an employee in the finance
      department of M Ltd., wishes to show D Ltd. as held for sale in the
      financial statements and to create a restructuring provision to
      include the expected costs of disposal and future trading losses.
      However, the Chief Operating Officer (COO) does not wish D Ltd.
      to be categorized as held for sale nor to provide for the expected
      losses. The COO is concerned as to how this may affect the sales
      and would surely result in bonus targets not being met.
    </p>

    <p>
      He has argued that as the management, it is his duty to secure a
      high sales price to maximize the return for shareholders of M Ltd.
      He has also hinted that Mr. X's job could be at stake if such a
      provision were to be made in the financial statements.
    </p>

    <p>
      The expected costs from the sale are as follows:
    </p>

    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Particulars</th>
        <th>Amount (Rs Crores)</th>
      </tr>
      <tr>
        <td>Future Trading Losses</td>
        <td>50.00</td>
      </tr>
      <tr>
        <td>Various legal costs of sale</td>
        <td>3.75</td>
      </tr>
      <tr>
        <td>Redundancy costs for D Ltd.'s employees</td>
        <td>10.00</td>
      </tr>
      <tr>
        <td>Impairment losses on Property, Plant and Equipment</td>
        <td>17.50</td>
      </tr>
    </table>

    <p><strong>Required:</strong></p>

    <ol type="i">
      <li>
        Discuss the accounting treatment which M Ltd. should adopt to
        address the issue above for the financial statements.
      </li>
      <li>
        Discuss the ethical issues which may arise in the above scenario,
        including any actions which M Ltd. and Mr. X should take.
      </li>
    </ol>
  `,

    solution_html: `

    <p><strong>(i) Accounting Treatment</strong></p>

    <p>
      In terms of Ind AS 105, <strong>Non-current Assets Held for Sale and
      Discontinued Operations</strong>, an entity shall classify a non-current
      asset (or disposal group) as held for sale if its carrying amount
      will be recovered principally through a sale transaction rather than
      through continuing use.
    </p>

    <p>
      For this to be the case, the asset (or disposal group) must be
      available for immediate sale in its present condition subject only
      to terms that are usual and customary for sales of such assets
      (or disposal groups) and its sale must be highly probable.
    </p>

    <p>
      For the sale to be highly probable, the appropriate level of
      management must be committed to a plan to sell the asset (or
      disposal group), and an active programme to locate a buyer and
      complete the plan must have been initiated.
      Further, the asset (or disposal group) must be actively marketed
      for sale at a price that is reasonable in relation to its current fair
      value.
      In addition, the sale should be expected to qualify for recognition
      as a completed sale within one year from the date of classification,
      except in specific cases as permitted by the Standard, and actions
      required to complete the plan should indicate that it is unlikely
      that significant changes to the plan will be made or that the plan
      will be withdrawn.
      The probability of required approvals (as per the jurisdiction)
      should be considered as part of the assessment of whether the
      sale is highly probable.
    </p>

    <p>
      An entity that is committed to a sale plan involving loss of control
      of a subsidiary shall classify all the assets and liabilities of that
      subsidiary as held for sale when the above criteria are met,
      regardless of whether the entity will retain a non-controlling
      interest in its former subsidiary after the sale.
    </p>

    <p>
      Based on the above provisions, the disposal of D Ltd. appears to
      meet the criteria of held for sale. J Ltd. is the probable acquirer,
      and the sale is highly probable, expected to be completed seven
      months after the year end, well within the 12-month criteria.
      Accordingly, D Ltd. should be treated as a disposal group, since
      a single equity transaction is the most likely form of disposal.
      In case D Ltd. is deemed to be a separate major component of
      business or geographical area of the group, the losses of the
      group should be presented separately as a discontinued operation
      within the financial statements of M Ltd.
    </p>

    <p>
      In terms of Ind AS 105, an entity shall measure a non-current
      asset (or disposal group) classified as held for sale at the lower
      of its carrying amount and fair value less costs to sell.
      The carrying amount of D Ltd. comprises of the net assets and
      goodwill less the non-controlling interest.
      The impairment loss recognised to reduce D Ltd. to fair value
      less costs to sell should be allocated first to goodwill and then
      on a pro-rata basis across the other non-current assets of the
      company.
    </p>

    <p>
      The Chief Operating Officer (COO) is incorrect to exclude any
      form of restructuring provision in the financial statements.
      Since the disposal is communicated to the media as well as the
      Stock Exchange, a constructive obligation exists.
      However, ongoing costs of business should not be provided for;
      only directly attributable costs of restructuring should be provided.
      Future operating losses should be excluded as no obligating event
      has arisen, and no provision is required for impairment losses of
      Property, Plant and Equipment as it is already considered in the
      remeasurement to fair value less costs to sell.
      Thus, a provision is required for <strong>Rs 13.75 crores
      (Rs 3.75 crores + Rs 10 crores)</strong>.
    </p>

    <p><strong>(ii) Ethics</strong></p>

    <p>
      Accountants have a duty to ensure that the financial statements
      are fair, transparent and comply with the accounting standards.
    </p>

    <p>
      Mr. X has committed several mistakes. In particular, he was
      unaware of which costs should be included within a restructuring
      provision and has failed to recognise that there is no obligating
      event in relation to future operating losses.
      A Chartered Accountant is expected to carry his work with due
      care and attention for lending credibility to the financial
      statements. Accordingly, he must update his knowledge and
      ensure that work is carried out in accordance with relevant
      ethical and professional standards.
      Failure to do so would be a breach of professional competence.
      Accordingly, Mr. X must ensure that this issue is addressed,
      for example by attending regular training and professional
      development courses.
    </p>

    <p>
      It appears that the Chief Operating Officer is looking for means
      to manipulate the financial statements for meeting the bonus
      targets. Neither is he willing to reduce the profits of the group
      by applying held for sale criteria in respect of D Ltd. nor is he
      willing to create appropriate restructuring provisions.
      Both the adjustments which comply with the requirements of
      Ind AS will result in reduction of profits.
      His argument that the management has a duty to maximize the
      returns for the shareholders is true, but such maximization must
      not be achieved at the cost of objective and faithful representation
      of the performance of the company.
      In the given case, it appears that the Chief Operating Officer is
      motivated by bonus targets under the garb of maximizing returns
      for the shareholders, thereby resulting in misrepresentation of
      the results of the group.
    </p>

    <p>
      Further, by threatening to dismiss Mr. X, the COO has acted
      unethically. Threatening and intimidating behaviour is
      unacceptable and against all ethical principles.
      This has given rise to an ethical dilemma for Mr. X.
      He has a duty to produce financial statements but doing so in a
      fair manner could result in a loss of job for him.
      The Chartered Accountant should approach the Chief Operating
      Officer and remind him of the basic ethical principles and
      communicate him to do the necessary adjustments in the
      accounts so that they are fair and objective.
    </p>

    <p>
      In case Mr. X falls under undue influence of the COO and applies
      the incorrect accounting treatment, he will be subject to
      professional misconduct under Clause 1 of Part II of the Second
      Schedule of the Chartered Accountants Act, 1949.
      The Clause states that a member of the Institute, whether in
      practice or not, shall be deemed to be guilty of professional
      misconduct for contravening the provisions of the Act or the
      regulations made thereunder or any guidelines issued by the
      Council.
      As per the Guidelines issued by the Council, a member of the
      Institute who is an employee shall exercise due diligence and
      shall not be grossly negligent in the conduct of his duties.
    </p>
  `,
  },
  {
    question_id: "FR_MTPAPR24II_6B",
    source: "ICAI MTP April 2024 Series II",
    chapter_name: "Ind AS 12 - Income Taxes (Deferred Tax)",
    placement: 6,
    marks: 5,

    question_html: `

    <p>
      P Ltd., a manufacturing company, prepares consolidated financial statements to
      <strong>31st March</strong> each year. During the year ended 31st March, 20X2, the following
      events affected the tax position of the group:
    </p>

    <ul>
      <li>
        <strong>Q Ltd.</strong>, a wholly owned subsidiary of P Ltd., incurred a loss adjusted for tax
        purposes of <strong>Rs 10,00,000</strong>. Q Ltd. is unable to utilise this loss against previous
        tax liabilities. Income-tax Act does not allow Q Ltd. to transfer the tax loss to other
        group companies. However, it allows Q Ltd. to carry the loss forward and utilise it
        against company’s future taxable profits. The directors of P Ltd. do not consider that
        Q Ltd. will make taxable profits in the foreseeable future.
      </li>

      <li>
        During the year ended 31st March, 20X2, P Ltd. capitalised development costs
        which satisfied the criteria as per Ind AS 38 ‘Intangible Assets’.
        The total amount capitalised was <strong>Rs 20,00,000</strong>.
        The development project began to generate economic benefits for P Ltd.
        from <strong>1st January, 20X2</strong>.
        The directors estimated that the project would generate economic benefits
        for <strong>five years</strong> from that date.
        The development expenditure was fully deductible against taxable profits
        for the year ended 31st March, 20X2.
      </li>

      <li>
        On <strong>1st April, 20X1</strong>, P Ltd. borrowed
        <strong>Rs 1,00,00,000</strong>.
        The cost of arranging the borrowing was
        <strong>Rs 2,00,000</strong> and this cost qualified for a tax deduction on
        1st April, 20X1.
        The loan was for a three-year period.
        No interest was payable on the loan but the amount repayable on
        <strong>31st March, 20X4</strong> will be
        <strong>Rs 1,30,43,800</strong>, equivalent to an effective annual interest rate
        of <strong>10%</strong>.
        As per the Income-tax Act, a further tax deduction of
        <strong>Rs 30,43,800</strong> will be claimable when the loan is repaid on
        31st March, 20X4.
      </li>
    </ul>

    <p>
      Explain and show how each of these events would affect the deferred tax
      assets / liabilities in the consolidated balance sheet of P Ltd. group at
      <strong>31st March, 20X2</strong> as per Ind AS.
      The rate of corporate income tax is <strong>30%</strong>.
    </p>
  `,

    solution_html: `
    

    <p><strong>Impact on consolidated balance sheet of P Ltd. group at 31st March, 20X2</strong></p>

    <ul>
      <li>
        The tax loss creates a potential deferred tax asset for the P Ltd. group since
        its carrying value is nil and its tax base is
        <strong>Rs 10,00,000</strong>.
        However, no deferred tax asset can be recognised because there is no prospect
        of being able to reduce tax liabilities in the foreseeable future as no taxable
        profits are anticipated.
      </li>

      <li>
        The development costs have a carrying value of
        <strong>Rs 19,00,000</strong>
        (Rs 20,00,000 − (Rs 20,00,000 × 1/5 × 3/12)).
        The tax base of the development costs is nil since the relevant tax deduction
        has already been claimed.
        Therefore, the deferred tax liability will be
        <strong>Rs 5,70,000</strong>
        (Rs 19,00,000 × 30%).
        All deferred tax liabilities are shown as non-current.
      </li>

      <li>
        The carrying value of the loan at 31st March, 20X2 is
        <strong>Rs 1,07,80,000</strong>
        (Rs 1,00,00,000 − Rs 2,00,000 + (Rs 98,00,000 × 10%)).
        The tax base of the loan is
        <strong>Rs 1,00,00,000</strong>.
        This creates a deductible temporary difference of
        <strong>Rs 7,80,000</strong> and a potential deferred tax asset of
        <strong>Rs 2,34,000</strong>
        (Rs 7,80,000 × 30%).
      </li>
    </ul>
  `,
  },

  {
    question_id: "FR_MTPAPR24II_6C",
    source: "ICAI MTP April 2024 Series II",
    chapter_name:
      "Ind AS 8 - Accounting Policies, Changes in Accounting Estimates and Errors / Ind AS 10 - Events after the Reporting Period",
    placement: 6,
    marks: 4,

    question_html: `

    <p>
      Entity ABC acquired a building for its administrative purposes and presented
      the same as Property, Plant and Equipment (PPE) in the financial year
      20X1-20X2.
    </p>

    <p>
      During the financial year 20X2-20X3, it relocated the office to a new building
      and leased the said building to a third party.
      Following the change in the usage of the building, Entity ABC reclassified it
      from PPE to Investment Property in the financial year 20X2-20X3.
    </p>

    <p>
      Should Entity ABC account for the change as a change in accounting policy?
    </p>

    <hr>

    <p><strong>OR</strong></p>

    <p>
      The AGM of ABC Ltd. for the year ended 31st March, 20X2 was held on
      10th July, 20X2 and the Board Meeting approving the financial statements
      was conducted on 15th May, 20X2.
    </p>

    <p>
      Meanwhile, the company had to disclose certain financial information
      pertaining to the year ended 31st March, 20X2 to SEBI as per SEBI
      regulations on 20th April, 20X2.
    </p>

    <p>
      Since certain financial information pertaining to the year ended
      31st March, 20X2 was submitted to SEBI before approval of financial
      statements by the Board, the management is suggesting that
      20th April, 20X2 shall be considered as the end of the period
      'after the reporting period'.
    </p>

    <p>
      Whether the management's view is correct in accordance with the guidance
      given in Ind AS 10?
    </p>
  `,

    solution_html: `
    

    <p>
      Paragraph 16(a) of Ind AS 8 provides that the application of an accounting
      policy for transactions, other events or conditions that differ in substance
      from those previously occurring are not changes in accounting policies.
    </p>

    <p>
      As per Ind AS 16, <strong>Property, Plant and Equipment</strong> are tangible
      items that:
    </p>

    <ol>
      <li>
        are held for use in the production or supply of goods or services,
        for rental to others, or for administrative purposes; and
      </li>
      <li>
        are expected to be used during more than one period.
      </li>
    </ol>

    <p>
      As per Ind AS 40, <strong>Investment Property</strong> is property (land or a
      building—or part of a building—or both) held (by the owner or by the lessee
      as a right-of-use asset) to earn rentals or for capital appreciation or both,
      rather than for:
    </p>

    <ol type="a">
      <li>
        use in the production or supply of goods or services or for
        administrative purposes; or
      </li>
      <li>
        sale in the ordinary course of business.
      </li>
    </ol>

    <p>
      Whether a building is classified as Property, Plant and Equipment or as an
      Investment Property depends on the purpose for which it is held by the
      entity.
    </p>

    <p>
      Due to a change in the purpose for which it is held, a building previously
      classified as PPE may require reclassification as an Investment Property,
      or vice versa.
    </p>

    <p>
      Therefore, the classification of a building as PPE or Investment Property
      is not a matter of accounting policy choice.
      Accordingly, the reclassification of the building from PPE to Investment
      Property due to a change in its use is <strong>not a change in accounting
      policy</strong>.
    </p>

    <hr>

    <p><strong>OR</strong></p>

    <p>
      As per Ind AS 10, even if partial financial information has already been
      published, the reporting period for considering events after the reporting
      period extends up to the date on which the financial statements are approved
      for issue.
    </p>

    <p>
      In the given case, the financial statements for the year 20X1-20X2 were
      approved by the Board on <strong>15th May, 20X2</strong>.
      Therefore, for the purposes of Ind AS 10, the period
      <strong>'after the reporting period'</strong> extends from
      <strong>31st March, 20X2 to 15th May, 20X2</strong>.
    </p>

    <p>
      Hence, the management's view that 20th April, 20X2 should be considered
      as the end of the period after the reporting period is <strong>incorrect</strong>.
    </p>
  `,
  },

  {
  question_id: "FR_MTPSEP24S1_1",
  source: "ICAI MTP September 2024 Series I",
  chapter_name: "Ind AS 103 - Business Combinations (Reverse Acquisition)",
  placement: 1,
  marks: 14,

  question_html: `

    <p>
      On <strong>31st December, 20X1</strong>, Entity A issues
      <strong>2.5 shares</strong> in exchange for each ordinary share of
      Entity B. All of Entity B's shareholders exchange their shares in Entity B.
      Therefore, Entity A issues <strong>150 ordinary shares</strong> in exchange
      for all <strong>60 ordinary shares</strong> of Entity B.
    </p>

    <p>
      The fair value of each ordinary share of Entity B at
      <strong>31st December, 20X1</strong> is <strong>₹40</strong>.
      The quoted market price of Entity A's ordinary shares at that date is
      <strong>₹16</strong>.
    </p>

    <p>
      The fair values of Entity A's identifiable assets and liabilities at
      <strong>31st December, 20X1</strong> are the same as their carrying
      amounts, except that the fair value of Entity A's non-current assets at
      <strong>31st December, 20X1</strong> is <strong>₹1,500</strong>.
    </p>

    <p>
      The balance sheets of Entity A and Entity B immediately before the
      business combination are:
    </p>

    <table border="1" cellspacing="0" cellpadding="6" style="border-collapse:collapse;width:100%;">
      <tr>
        <th>Particulars</th>
        <th>Entity A<br>(Legal Parent,<br>Accounting Acquiree)</th>
        <th>Entity B<br>(Legal Subsidiary,<br>Accounting Acquirer)</th>
      </tr>

      <tr>
        <td>Current Assets</td>
        <td>500</td>
        <td>700</td>
      </tr>

      <tr>
        <td>Non-current Assets</td>
        <td>1,300</td>
        <td>3,000</td>
      </tr>

      <tr>
        <td><strong>Total Assets</strong></td>
        <td><strong>1,800</strong></td>
        <td><strong>3,700</strong></td>
      </tr>

      <tr>
        <td>Current Liabilities</td>
        <td>300</td>
        <td>600</td>
      </tr>

      <tr>
        <td>Non-current Liabilities</td>
        <td>400</td>
        <td>1,100</td>
      </tr>

      <tr>
        <td><strong>Total Liabilities</strong></td>
        <td><strong>700</strong></td>
        <td><strong>1,700</strong></td>
      </tr>

      <tr>
        <td colspan="3"><strong>Shareholders' Equity</strong></td>
      </tr>

      <tr>
        <td>Retained Earnings</td>
        <td>800</td>
        <td>1,400</td>
      </tr>

      <tr>
        <td>Issued Equity - 100 Ordinary Shares</td>
        <td>300</td>
        <td>-</td>
      </tr>

      <tr>
        <td>Issued Equity - 60 Ordinary Shares</td>
        <td>-</td>
        <td>600</td>
      </tr>

      <tr>
        <td><strong>Total Shareholders' Equity</strong></td>
        <td><strong>1,100</strong></td>
        <td><strong>2,000</strong></td>
      </tr>

      <tr>
        <td><strong>Total Liabilities and Shareholders' Equity</strong></td>
        <td><strong>1,800</strong></td>
        <td><strong>3,700</strong></td>
      </tr>

    </table>

    <p>
      Assume that Entity B's earnings for the annual period ended
      <strong>31st March, 20X1</strong> were <strong>₹600</strong> and that the
      consolidated earnings for the annual period ended
      <strong>31st March, 20X2</strong> were <strong>₹800</strong>.
    </p>

    <p>
      Assume also that there was no change in the number of ordinary shares
      issued by Entity B during the annual period ended
      <strong>31st March, 20X1</strong> and during the period from
      <strong>1st January, 20X1</strong> to the date of the reverse acquisition
      on <strong>31st December, 20X1</strong>.
    </p>

    <p><strong>Required:</strong></p>

    <p>
      Calculate the fair value of the consideration transferred, measure
      goodwill and prepare the Consolidated Balance Sheet as on
      <strong>31st December, 20X1</strong>.
    </p>

  `,

  solution_html: `

    <p><strong>Identifying the Acquirer</strong></p>

    <p>
      As a result of Entity A issuing 150 ordinary shares, Entity B's
      shareholders own <strong>60%</strong> of the issued shares of the combined
      entity (150 out of total 250 shares). The remaining 40% are owned by
      Entity A's shareholders.
    </p>

    <p>
      Therefore, this transaction is a <strong>reverse acquisition</strong> in
      which <strong>Entity B</strong> is identified as the
      <strong>accounting acquirer</strong> and <strong>Entity A</strong> is the
      legal acquirer.
    </p>

    <hr>

    <p><strong>Calculation of Fair Value of Consideration Transferred</strong></p>

    <p>
      If the business combination had taken the form of Entity B issuing
      additional ordinary shares to Entity A's shareholders, Entity B would
      have had to issue <strong>40 shares</strong> so that Entity A's shareholders
      would own 40% of the combined entity.
    </p>

    <p>
      Although 40 shares of Entity B at ₹40 each also gives ₹1,600, the
      quoted market price of Entity A's shares provides a more reliable
      measure.
    </p>

    <table border="1" cellspacing="0" cellpadding="6" style="border-collapse:collapse;width:60%;">
      <tr>
        <th>Particulars</th>
        <th>₹</th>
      </tr>
      <tr>
        <td>100 shares of Entity A × ₹16</td>
        <td>1,600</td>
      </tr>
      <tr>
        <td><strong>Fair Value of Consideration Transferred</strong></td>
        <td><strong>1,600</strong></td>
      </tr>
    </table>

    <hr>

    <p><strong>Measurement of Goodwill</strong></p>

    <table border="1" cellspacing="0" cellpadding="6" style="border-collapse:collapse;width:70%;">
      <tr>
        <th>Particulars</th>
        <th>₹</th>
      </tr>

      <tr>
        <td>Fair value of consideration transferred</td>
        <td>1,600</td>
      </tr>

      <tr>
        <td colspan="2"><strong>Less: Net identifiable assets of Entity A</strong></td>
      </tr>

      <tr>
        <td>Current Assets</td>
        <td>500</td>
      </tr>

      <tr>
        <td>Non-current Assets (Fair Value)</td>
        <td>1,500</td>
      </tr>

      <tr>
        <td>Current Liabilities</td>
        <td>(300)</td>
      </tr>

      <tr>
        <td>Non-current Liabilities</td>
        <td>(400)</td>
      </tr>

      <tr>
        <td>Net Identifiable Assets</td>
        <td>(1,300)</td>
      </tr>

      <tr>
        <td><strong>Goodwill</strong></td>
        <td><strong>300</strong></td>
      </tr>

    </table>

    <hr>

    <p><strong>Consolidated Balance Sheet as at 31st December, 20X1</strong></p>

    <table border="1" cellspacing="0" cellpadding="6" style="border-collapse:collapse;width:80%;">

      <tr>
        <th>Particulars</th>
        <th>₹</th>
      </tr>

      <tr>
        <td><strong>Assets</strong></td>
        <td></td>
      </tr>

      <tr>
        <td>Non-current Assets (3,000 + 1,500)</td>
        <td>4,500</td>
      </tr>

      <tr>
        <td>Goodwill</td>
        <td>300</td>
      </tr>

      <tr>
        <td>Current Assets (700 + 500)</td>
        <td>1,200</td>
      </tr>

      <tr>
        <td><strong>Total Assets</strong></td>
        <td><strong>6,000</strong></td>
      </tr>

      <tr>
        <td><strong>Shareholders' Equity and Liabilities</strong></td>
        <td></td>
      </tr>

      <tr>
        <td>Issued Equity (600 + 1,600)</td>
        <td>2,200</td>
      </tr>

      <tr>
        <td>Retained Earnings</td>
        <td>1,400</td>
      </tr>

      <tr>
        <td><strong>Total Shareholders' Equity</strong></td>
        <td><strong>3,600</strong></td>
      </tr>

      <tr>
        <td>Non-current Liabilities (1,100 + 400)</td>
        <td>1,500</td>
      </tr>

      <tr>
        <td>Current Liabilities (600 + 300)</td>
        <td>900</td>
      </tr>

      <tr>
        <td><strong>Total Liabilities</strong></td>
        <td><strong>2,400</strong></td>
      </tr>

      <tr>
        <td><strong>Total Equity and Liabilities</strong></td>
        <td><strong>6,000</strong></td>
      </tr>

    </table>

    <p><strong>Note:</strong></p>

    <p>
      The amount recognised as issued equity interests in the consolidated
      financial statements (₹2,200) is determined by adding the issued equity
      of the legal subsidiary immediately before the business combination
      (₹600) and the fair value of the consideration effectively transferred
      (₹1,600).
    </p>

    <p>
      However, the equity structure appearing in the consolidated financial
      statements (i.e., the number and type of equity interests issued) reflects
      the equity structure of the legal parent, including the equity interests
      issued by the legal parent to effect the combination.
    </p>

  `
},

{
  question_id: "FR_MTPSEP24S1_2A",
  source: "ICAI MTP September 2024 Series I",
  chapter_name: "Ind AS 109 - Financial Instruments / Ind AS 113 - Fair Value Measurement",
  placement: "2",
  marks: 10,

  question_html: `

    <p>
      XYZ Ltd. is a company incorporated in India. It provides an
      <strong>interest-free loan of ₹10,00,000</strong> to its wholly owned
      Indian subsidiary, <strong>ABC Ltd.</strong>
    </p>

    <p>
      There are no transaction costs.
    </p>

    <p>
      State how the loan should be accounted for in:
    </p>

    <ol type="a">
      <li>The separate financial statements of XYZ Ltd.</li>
      <li>The individual financial statements of ABC Ltd.</li>
      <li>The consolidated financial statements of the Group.</li>
    </ol>

    <p>
      Assume that the loan is repayable after
      <strong>3 years</strong>. The current market rate of interest for a
      similar loan is <strong>10% per annum</strong> for both the holding
      company and the subsidiary.
    </p>

  `,

  solution_html: `

    <p>
      Ind AS 109 requires that financial assets and financial liabilities
      shall be recognised initially at <strong>fair value</strong>.
      In accordance with Ind AS 113, the fair value of an interest-free
      loan is determined by discounting the future repayment amount using
      the prevailing market rate of interest.
    </p>

    <p>
      Accordingly, both the parent and subsidiary shall initially recognise
      the loan at its fair value. The difference between the loan amount
      and its fair value is treated as an
      <strong>equity contribution (deemed investment)</strong> by the
      parent in the subsidiary.
    </p>

    <hr>

    <p><strong>Accounting in the books of XYZ Ltd. (Parent)</strong></p>

    <table border="1" cellspacing="0" cellpadding="6" style="border-collapse:collapse;width:100%;">
      <tr>
        <th>Particulars</th>
        <th>Debit (₹)</th>
        <th>Credit (₹)</th>
      </tr>

      <tr>
        <td colspan="3"><strong>On initial recognition</strong></td>
      </tr>

      <tr>
        <td>Loan to ABC Ltd.</td>
        <td>7,51,315</td>
        <td></td>
      </tr>

      <tr>
        <td>Deemed Investment (Capital Contribution)</td>
        <td>2,48,685</td>
        <td></td>
      </tr>

      <tr>
        <td>To Bank</td>
        <td></td>
        <td>10,00,000</td>
      </tr>

      <tr>
        <td colspan="3"><em>(Being interest-free loan recognised at fair value)</em></td>
      </tr>

      <tr>
        <td colspan="3"><strong>Year 1</strong></td>
      </tr>

      <tr>
        <td>Loan to ABC Ltd.</td>
        <td>75,131</td>
        <td></td>
      </tr>

      <tr>
        <td>To Interest Income</td>
        <td></td>
        <td>75,131</td>
      </tr>

      <tr>
        <td colspan="3"><strong>Year 2</strong></td>
      </tr>

      <tr>
        <td>Loan to ABC Ltd.</td>
        <td>82,645</td>
        <td></td>
      </tr>

      <tr>
        <td>To Interest Income</td>
        <td></td>
        <td>82,645</td>
      </tr>

      <tr>
        <td colspan="3"><strong>Year 3</strong></td>
      </tr>

      <tr>
        <td>Loan to ABC Ltd.</td>
        <td>90,909</td>
        <td></td>
      </tr>

      <tr>
        <td>To Interest Income</td>
        <td></td>
        <td>90,909</td>
      </tr>

      <tr>
        <td colspan="3"><strong>On repayment</strong></td>
      </tr>

      <tr>
        <td>Bank</td>
        <td>10,00,000</td>
        <td></td>
      </tr>

      <tr>
        <td>To Loan to ABC Ltd.</td>
        <td></td>
        <td>10,00,000</td>
      </tr>

    </table>

    <hr>

    <p><strong>Accounting in the books of ABC Ltd. (Subsidiary)</strong></p>

    <table border="1" cellspacing="0" cellpadding="6" style="border-collapse:collapse;width:100%;">
      <tr>
        <th>Particulars</th>
        <th>Debit (₹)</th>
        <th>Credit (₹)</th>
      </tr>

      <tr>
        <td colspan="3"><strong>On initial recognition</strong></td>
      </tr>

      <tr>
        <td>Bank</td>
        <td>10,00,000</td>
        <td></td>
      </tr>

      <tr>
        <td>To Loan from XYZ Ltd.</td>
        <td></td>
        <td>7,51,315</td>
      </tr>

      <tr>
        <td>To Equity (Deemed Capital Contribution)</td>
        <td></td>
        <td>2,48,685</td>
      </tr>

      <tr>
        <td colspan="3"><strong>Year 1</strong></td>
      </tr>

      <tr>
        <td>Interest Expense</td>
        <td>75,131</td>
        <td></td>
      </tr>

      <tr>
        <td>To Loan from XYZ Ltd.</td>
        <td></td>
        <td>75,131</td>
      </tr>

      <tr>
        <td colspan="3"><strong>Year 2</strong></td>
      </tr>

      <tr>
        <td>Interest Expense</td>
        <td>82,645</td>
        <td></td>
      </tr>

      <tr>
        <td>To Loan from XYZ Ltd.</td>
        <td></td>
        <td>82,645</td>
      </tr>

      <tr>
        <td colspan="3"><strong>Year 3</strong></td>
      </tr>

      <tr>
        <td>Interest Expense</td>
        <td>90,909</td>
        <td></td>
      </tr>

      <tr>
        <td>To Loan from XYZ Ltd.</td>
        <td></td>
        <td>90,909</td>
      </tr>

      <tr>
        <td colspan="3"><strong>On repayment</strong></td>
      </tr>

      <tr>
        <td>Loan from XYZ Ltd.</td>
        <td>10,00,000</td>
        <td></td>
      </tr>

      <tr>
        <td>To Bank</td>
        <td></td>
        <td>10,00,000</td>
      </tr>

    </table>

    <hr>

    <p><strong>Accounting in the Consolidated Financial Statements</strong></p>

    <p>
      In the consolidated financial statements, the loan receivable and loan
      payable are eliminated on consolidation. Similarly, the interest income
      recognised by XYZ Ltd. and the corresponding interest expense recognised
      by ABC Ltd. are eliminated as intra-group transactions.
    </p>

    <p>
      The deemed investment recognised by the parent and the deemed capital
      contribution recognised by the subsidiary also eliminate on consolidation.
      Consequently, no impact remains in the consolidated financial statements
      except the cash movement.
    </p>

    <hr>

    <p><strong>Working Note 1: Present Value of Loan</strong></p>

    <table border="1" cellspacing="0" cellpadding="6" style="border-collapse:collapse;width:60%;">
      <tr>
        <td>Loan Amount</td>
        <td>₹10,00,000</td>
      </tr>
      <tr>
        <td>Market Rate</td>
        <td>10%</td>
      </tr>
      <tr>
        <td>Repayment Period</td>
        <td>3 Years</td>
      </tr>
      <tr>
        <td><strong>Present Value</strong></td>
        <td><strong>₹7,51,315</strong></td>
      </tr>
    </table>

    <br>

    <p><strong>Working Note 2: Amortised Cost Schedule</strong></p>

    <table border="1" cellspacing="0" cellpadding="6" style="border-collapse:collapse;width:100%;">
      <tr>
        <th>Year</th>
        <th>Opening Balance (₹)</th>
        <th>Interest @10% (₹)</th>
        <th>Closing Balance (₹)</th>
      </tr>

      <tr>
        <td>1</td>
        <td>7,51,315</td>
        <td>75,131</td>
        <td>8,26,446</td>
      </tr>

      <tr>
        <td>2</td>
        <td>8,26,446</td>
        <td>82,645</td>
        <td>9,09,091</td>
      </tr>

      <tr>
        <td>3</td>
        <td>9,09,091</td>
        <td>90,909</td>
        <td>10,00,000</td>
      </tr>

    </table>

  `
},

{
  question_id: "FR_MTPSEP24S1_2B",
  source: "ICAI MTP September 2024 Series I",
  chapter_name: "Ind AS 24 - Related Party Disclosures",
  placement: "2",
  marks: 4,

  question_html: `

    <p>
      One of the directors of <strong>Buildwell Ltd.</strong>,
      <strong>Mr. Ben Jones</strong>, has informed the Central Finance Team
      that on <strong>1st January, 20X3</strong>, his spouse acquired a
      controlling interest in one of Buildwell Ltd.'s major suppliers,
      <strong>Candour Ltd.</strong>
    </p>

    <p>
      Mr. Jones seemed to think that this would have implications on the
      financial statements of Buildwell Ltd.
    </p>

    <p>
      Buildwell Ltd. has been purchasing goods from Candour Ltd.
      amounting to <strong>₹1.5 million per month</strong> during the year
      ended <strong>31st March, 20X3</strong>. As per the financial statements
      of Buildwell Ltd., this is a significant amount.
    </p>

    <p>
      While checking all the purchase transactions, it was found that all
      purchases from Candour Ltd. were made at normal market rates.
    </p>

    <p>
      <strong>Required:</strong><br>
      How should the effect of acquisition of controlling interest in
      Candour Ltd. by Mr. Ben Jones' spouse be reflected in the financial
      statements of Buildwell Ltd. for the year ending
      <strong>31st March, 20X3</strong>?
    </p>

  `,

  solution_html: `

    <p>
      In accordance with <strong>Ind AS 24 – Related Party Disclosures</strong>,
      effective from <strong>1st January, 20X3</strong>, Candour Ltd. becomes
      a <strong>related party</strong> of Buildwell Ltd. because it is
      controlled by the close family member (spouse) of one of Buildwell Ltd.'s
      key management personnel (Mr. Ben Jones).
    </p>

    <p>
      Accordingly, all purchases made from Candour Ltd. from
      <strong>1st January, 20X3</strong> onwards are related party
      transactions.
    </p>

    <p>
      As per <strong>Paragraph 18 of Ind AS 24</strong>, related party
      transactions are required to be disclosed in the notes to the financial
      statements together with the nature of the related party relationship.
    </p>

    <p>
      It is irrelevant whether the transactions were carried out at normal
      market prices.
    </p>

    <p>
      As per <strong>Paragraph 23 of Ind AS 24</strong>, an entity may state
      that related party transactions were made on terms equivalent to arm's
      length transactions only if such terms can be substantiated.
    </p>

    <p>
      Therefore, Buildwell Ltd. should disclose that
      <strong>Candour Ltd., controlled by the spouse of a director,
      supplied goods amounting to ₹4.5 million (3 × ₹1.5 million)</strong>
      during the current accounting period.
    </p>

  `
},
{
  question_id: "FR_MTPSEP24S1_2C",
  source: "ICAI MTP September 2024 Series I",
  chapter_name: "Ind AS 108 - Operating Segments",
  placement: "2",
  marks: 4,

  question_html: `

    <p>
      An entity uses the <strong>weighted average cost formula</strong> to
      assign costs to inventories and cost of goods sold for financial
      reporting purposes.
    </p>

    <p>
      However, the reports provided to the
      <strong>Chief Operating Decision Maker (CODM)</strong> use the
      <strong>First-In, First-Out (FIFO)</strong> method for evaluating the
      performance of segment operations.
    </p>

    <p>
      <strong>Required:</strong><br>
      State the cost formula to be used for
      <strong>Ind AS 108 - Operating Segments</strong> disclosure purposes.
    </p>

  `,

  solution_html: `

    <p>
      As per <strong>Ind AS 108 - Operating Segments</strong>, segment
      information should be reported based on the internal reports that are
      regularly reviewed by the
      <strong>Chief Operating Decision Maker (CODM)</strong>.
    </p>

    <p>
      Since the CODM evaluates segment performance using the
      <strong>First-In, First-Out (FIFO)</strong> method, the same method
      should be used for reporting segment information under Ind AS 108,
      even though the entity uses the weighted average cost formula for
      preparing its financial statements.
    </p>

    <p>
      Where the CODM uses only one measure of segment assets and results,
      the same measure should be used for segment reporting.
    </p>

    <p>
      However, the entity is required to provide a
      <strong>reconciliation</strong> between the segment information
      reported under Ind AS 108 and the corresponding amounts reported in
      the financial statements.
    </p>

  `
},

{
  question_id: "FR_MTPSEP24S1_3A",
  source: "ICAI MTP September 2024 Series I",
  chapter_name: "Ind AS 7 - Statement of Cash Flows",
  placement: 3,
  marks: 8,

  question_html: `

    <p>
      One of the subsidiaries of B Ltd. submitted to Central Finance its
      Summarized Statement of Profit and Loss and Balance Sheet.
    </p>

    <p><strong>Summarized Statement of Profit and Loss for the year ended 31st March, 20X3</strong></p>

    <table border="1" cellspacing="0" cellpadding="6">
      <tr>
        <th>Particulars</th>
        <th>Amount (₹)</th>
      </tr>
      <tr>
        <td>Net sales</td>
        <td>2,52,00,000</td>
      </tr>
      <tr>
        <td>Less: Cash cost of sales</td>
        <td>(1,92,00,000)</td>
      </tr>
      <tr>
        <td>Depreciation</td>
        <td>(6,00,000)</td>
      </tr>
      <tr>
        <td>Salaries & wages</td>
        <td>(24,00,000)</td>
      </tr>
      <tr>
        <td>Operating expenses</td>
        <td>(14,00,000)</td>
      </tr>
      <tr>
        <td>Provision for taxation</td>
        <td>(8,80,000)</td>
      </tr>
      <tr>
        <td><strong>Net Operating Profit</strong></td>
        <td><strong>7,20,000</strong></td>
      </tr>
      <tr>
        <td>Non-recurring income – Profit on sale of equipment</td>
        <td>1,20,000</td>
      </tr>
      <tr>
        <td><strong>Profit for the year</strong></td>
        <td><strong>8,40,000</strong></td>
      </tr>
      <tr>
        <td>Retained earnings and profit brought forward</td>
        <td>15,18,000</td>
      </tr>
      <tr>
        <td>Total</td>
        <td>23,58,000</td>
      </tr>
      <tr>
        <td>Dividends declared and paid during the year</td>
        <td>(7,20,000)</td>
      </tr>
      <tr>
        <td><strong>Profit & Loss Balance as on 31st March, 20X3</strong></td>
        <td><strong>16,38,000</strong></td>
      </tr>
    </table>

    <br>

    <p><strong>Summarized Balance Sheet</strong></p>

    <table border="1" cellspacing="0" cellpadding="6">
      <tr>
        <th>Assets</th>
        <th>31st March, 20X2 (₹)</th>
        <th>31st March, 20X3 (₹)</th>
      </tr>

      <tr>
        <td colspan="3"><strong>Non-current Assets</strong></td>
      </tr>

      <tr>
        <td>Land</td>
        <td>4,80,000</td>
        <td>9,60,000</td>
      </tr>

      <tr>
        <td>Buildings and Equipment</td>
        <td>36,00,000</td>
        <td>57,60,000</td>
      </tr>

      <tr>
        <td colspan="3"><strong>Current Assets</strong></td>
      </tr>

      <tr>
        <td>Cash</td>
        <td>6,00,000</td>
        <td>7,20,000</td>
      </tr>

      <tr>
        <td>Inventories</td>
        <td>16,80,000</td>
        <td>18,60,000</td>
      </tr>

      <tr>
        <td>Trade Receivables</td>
        <td>26,40,000</td>
        <td>9,60,000</td>
      </tr>

      <tr>
        <td>Advances</td>
        <td>78,000</td>
        <td>90,000</td>
      </tr>

      <tr>
        <td><strong>Total Assets</strong></td>
        <td><strong>90,78,000</strong></td>
        <td><strong>1,03,50,000</strong></td>
      </tr>

      <tr>
        <th>Liabilities & Equity</th>
        <th>31st March, 20X2 (₹)</th>
        <th>31st March, 20X3 (₹)</th>
      </tr>

      <tr>
        <td>Share Capital</td>
        <td>36,00,000</td>
        <td>44,40,000</td>
      </tr>

      <tr>
        <td>Surplus in Profit & Loss</td>
        <td>15,18,000</td>
        <td>16,38,000</td>
      </tr>

      <tr>
        <td>Trade Payables</td>
        <td>24,00,000</td>
        <td>23,40,000</td>
      </tr>

      <tr>
        <td>Outstanding Expenses</td>
        <td>2,40,000</td>
        <td>4,80,000</td>
      </tr>

      <tr>
        <td>Income Tax Payable</td>
        <td>1,20,000</td>
        <td>1,32,000</td>
      </tr>

      <tr>
        <td>Accumulated Depreciation on Buildings and Equipment</td>
        <td>12,00,000</td>
        <td>13,20,000</td>
      </tr>

      <tr>
        <td><strong>Total</strong></td>
        <td><strong>90,78,000</strong></td>
        <td><strong>1,03,50,000</strong></td>
      </tr>
    </table>

    <br>

    <p>
      The original cost of equipment sold during the year 20X2-20X3 was
      ₹ 7,20,000.
    </p>

    <p>
      Work out a <strong>Statement of Cash Flows (as per indirect method)</strong>
      for the year ended 31st March, 20X3.
    </p>

  `,

  solution_html: `

    <p><strong>Statement of Cash Flows for the year ended 31st March, 20X3 (Indirect Method)</strong></p>

    <table border="1" cellspacing="0" cellpadding="6">
      <tr>
        <th>Particulars</th>
        <th>₹</th>
      </tr>

      <tr>
        <td>Cash flow from operating activities</td>
        <td></td>
      </tr>

      <tr>
        <td>Net Profit before tax and extraordinary items (7,20,000 + 8,80,000)</td>
        <td>16,00,000</td>
      </tr>

      <tr>
        <td>Add: Depreciation</td>
        <td>6,00,000</td>
      </tr>

      <tr>
        <td><strong>Operating profit before working capital changes</strong></td>
        <td><strong>22,00,000</strong></td>
      </tr>

      <tr>
        <td>Increase in Inventories</td>
        <td>(1,80,000)</td>
      </tr>

      <tr>
        <td>Decrease in Trade Receivables</td>
        <td>16,80,000</td>
      </tr>

      <tr>
        <td>Increase in Advances</td>
        <td>(12,000)</td>
      </tr>

      <tr>
        <td>Decrease in Trade Payables</td>
        <td>(60,000)</td>
      </tr>

      <tr>
        <td>Increase in Outstanding Expenses</td>
        <td>2,40,000</td>
      </tr>

      <tr>
        <td><strong>Cash generated from operations</strong></td>
        <td><strong>38,68,000</strong></td>
      </tr>

      <tr>
        <td>Less: Income Tax Paid (Working Note 4)</td>
        <td>(8,68,000)</td>
      </tr>

      <tr>
        <td><strong>Net Cash from Operating Activities</strong></td>
        <td><strong>30,00,000</strong></td>
      </tr>

      <tr>
        <td colspan="2"><strong>Cash Flow from Investing Activities</strong></td>
      </tr>

      <tr>
        <td>Purchase of Land</td>
        <td>(4,80,000)</td>
      </tr>

      <tr>
        <td>Purchase of Buildings & Equipment (WN-2)</td>
        <td>(28,80,000)</td>
      </tr>

      <tr>
        <td>Sale of Equipment (WN-3)</td>
        <td>3,60,000</td>
      </tr>

      <tr>
        <td><strong>Net Cash used in Investing Activities</strong></td>
        <td><strong>(30,00,000)</strong></td>
      </tr>

      <tr>
        <td colspan="2"><strong>Cash Flow from Financing Activities</strong></td>
      </tr>

      <tr>
        <td>Issue of Share Capital</td>
        <td>8,40,000</td>
      </tr>

      <tr>
        <td>Dividends Paid</td>
        <td>(7,20,000)</td>
      </tr>

      <tr>
        <td><strong>Net Cash from Financing Activities</strong></td>
        <td><strong>1,20,000</strong></td>
      </tr>

      <tr>
        <td><strong>Net Increase in Cash and Cash Equivalents</strong></td>
        <td><strong>1,20,000</strong></td>
      </tr>

      <tr>
        <td>Cash and Cash Equivalents at the beginning</td>
        <td>6,00,000</td>
      </tr>

      <tr>
        <td><strong>Cash and Cash Equivalents at the end</strong></td>
        <td><strong>7,20,000</strong></td>
      </tr>

    </table>

    <br>

    <p><strong>Working Note 1: Buildings & Equipment Account</strong></p>

    <table border="1" cellspacing="0" cellpadding="6">
      <tr>
        <th>Particulars</th>
        <th>₹</th>
        <th>Particulars</th>
        <th>₹</th>
      </tr>
      <tr>
        <td>To Balance b/d</td>
        <td>36,00,000</td>
        <td>By Sale of Assets</td>
        <td>7,20,000</td>
      </tr>
      <tr>
        <td>To Cash/Bank (Purchases)</td>
        <td>28,80,000</td>
        <td>By Balance c/d</td>
        <td>57,60,000</td>
      </tr>
      <tr>
        <td><strong>Total</strong></td>
        <td><strong>64,80,000</strong></td>
        <td><strong>Total</strong></td>
        <td><strong>64,80,000</strong></td>
      </tr>
    </table>

    <br>

    <p><strong>Working Note 2: Accumulated Depreciation Account</strong></p>

    <table border="1" cellspacing="0" cellpadding="6">
      <tr>
        <th>Particulars</th>
        <th>₹</th>
        <th>Particulars</th>
        <th>₹</th>
      </tr>

      <tr>
        <td>To Sale of Asset</td>
        <td>4,80,000</td>
        <td>By Balance b/d</td>
        <td>12,00,000</td>
      </tr>

      <tr>
        <td>To Balance c/d</td>
        <td>13,20,000</td>
        <td>By Profit & Loss A/c (Depreciation)</td>
        <td>6,00,000</td>
      </tr>

      <tr>
        <td><strong>Total</strong></td>
        <td><strong>18,00,000</strong></td>
        <td><strong>Total</strong></td>
        <td><strong>18,00,000</strong></td>
      </tr>

    </table>

    <br>

    <p><strong>Working Note 3: Computation of Sale Price of Equipment</strong></p>

    <table border="1" cellspacing="0" cellpadding="6">
      <tr>
        <th>Particulars</th>
        <th>₹</th>
      </tr>

      <tr>
        <td>Original Cost</td>
        <td>7,20,000</td>
      </tr>

      <tr>
        <td>Less: Accumulated Depreciation</td>
        <td>(4,80,000)</td>
      </tr>

      <tr>
        <td>Net Book Value</td>
        <td>2,40,000</td>
      </tr>

      <tr>
        <td>Add: Profit on Sale</td>
        <td>1,20,000</td>
      </tr>

      <tr>
        <td><strong>Sale Proceeds</strong></td>
        <td><strong>3,60,000</strong></td>
      </tr>

    </table>

    <br>

    <p><strong>Working Note 4: Provision for Tax Account</strong></p>

    <table border="1" cellspacing="0" cellpadding="6">

      <tr>
        <th>Particulars</th>
        <th>₹</th>
        <th>Particulars</th>
        <th>₹</th>
      </tr>

      <tr>
        <td>To Bank A/c</td>
        <td>8,68,000</td>
        <td>By Balance b/d</td>
        <td>1,20,000</td>
      </tr>

      <tr>
        <td>To Balance c/d</td>
        <td>1,32,000</td>
        <td>By Profit & Loss A/c (Provision)</td>
        <td>8,80,000</td>
      </tr>

      <tr>
        <td><strong>Total</strong></td>
        <td><strong>10,00,000</strong></td>
        <td><strong>Total</strong></td>
        <td><strong>10,00,000</strong></td>
      </tr>

    </table>

  `
},

{
  question_id: "FR_MTPSEP24S1_3B",
  source: "ICAI MTP September 2024 Series I",
  chapter_name: "Ind AS 19 - Employee Benefits",
  placement: 3,
  marks: 6,

  question_html: `

    <p>
      SA Pvt. Ltd. is engaged in the business of retail having 100 retail outlets
      across Northern and Southern India. The company’s head office is located
      at Chennai.
    </p>

    <p>
      SA Pvt. Ltd. is a subsidiary of SAG Ltd. SAG Ltd. is listed on the National
      Stock Exchange in India.
    </p>

    <p>
      Following information is available for SA Pvt. Ltd.:
    </p>

    <p><strong>Plan Assets</strong></p>

    <table border="1" cellspacing="0" cellpadding="6">
      <tr>
        <td>Fair value of Plan Assets as at 1st April, 20X1</td>
        <td>₹ 10,000</td>
      </tr>
      <tr>
        <td>Contribution to Plan Assets on 31st March, 20X2</td>
        <td>₹ 3,000</td>
      </tr>
      <tr>
        <td>Benefits Paid on 31st March, 20X2</td>
        <td>₹ 300</td>
      </tr>
      <tr>
        <td>Fair value of Plan Assets as at 31st March, 20X2</td>
        <td>₹ 14,700</td>
      </tr>
      <tr>
        <td>Actual Return on Plan Assets</td>
        <td>₹ 2,000</td>
      </tr>
    </table>

    <br>

    <p><strong>Defined Benefit Obligation</strong></p>

    <table border="1" cellspacing="0" cellpadding="6">
      <tr>
        <td>Present Value of Defined Benefit Obligation as at 1st April, 20X1</td>
        <td>₹ 12,000</td>
      </tr>
      <tr>
        <td>Present Value of Defined Benefit Obligation as at 31st March, 20X2</td>
        <td>₹ 15,500</td>
      </tr>
      <tr>
        <td>Actuarial Loss on Obligation</td>
        <td>₹ 100</td>
      </tr>
      <tr>
        <td>Current Service Cost</td>
        <td>₹ 2,500</td>
      </tr>
      <tr>
        <td>Benefits Paid</td>
        <td>₹ 300</td>
      </tr>
      <tr>
        <td>Discount Rate</td>
        <td>10%</td>
      </tr>
    </table>

    <br>

    <p>
      Suggest the amount that would be taken to
      <strong>Other Comprehensive Income (OCI)</strong> (with workings).
      Also compute the <strong>Net Interest on the Net Defined Benefit
      Liability (Asset)</strong>.
    </p>

  `,

  solution_html: `

    <p>
      As per <strong>Ind AS 19 – Employee Benefits</strong>,
      <strong>Net Remeasurement of ₹ 900</strong> shall be recognized in
      <strong>Other Comprehensive Income (OCI)</strong>.
    </p>

    <p><strong>Computation of Net Remeasurement</strong></p>

    <table border="1" cellspacing="0" cellpadding="6">
      <tr>
        <th>Particulars</th>
        <th>₹</th>
      </tr>
      <tr>
        <td>Remeasurement on Plan Assets (Working Note 1)</td>
        <td>1,000</td>
      </tr>
      <tr>
        <td>Less: Actuarial Loss on Defined Benefit Obligation</td>
        <td>(100)</td>
      </tr>
      <tr>
        <td><strong>Amount recognized in OCI</strong></td>
        <td><strong>900</strong></td>
      </tr>
    </table>

    <br>

    <p><strong>Computation of Net Interest Expense</strong></p>

    <table border="1" cellspacing="0" cellpadding="6">
      <tr>
        <th>Particulars</th>
        <th>₹</th>
      </tr>

      <tr>
        <td>Defined Benefit Obligation as at 1st April, 20X1 (A)</td>
        <td>12,000</td>
      </tr>

      <tr>
        <td>Fair Value of Plan Assets as at 1st April, 20X1 (B)</td>
        <td>(10,000)</td>
      </tr>

      <tr>
        <td><strong>Net Defined Benefit Liability (A − B)</strong></td>
        <td><strong>2,000</strong></td>
      </tr>

      <tr>
        <td>Net Interest Expense @10%</td>
        <td><strong>200</strong></td>
      </tr>

    </table>

    <br>

    <p>
      <strong>Note:</strong> Since there is a
      <strong>Net Defined Benefit Liability</strong>, net interest is recognized
      as an <strong>expense</strong>.
    </p>

    <br>

    <p><strong>Working Note 1: Computation of Remeasurement on Plan Assets</strong></p>

    <table border="1" cellspacing="0" cellpadding="6">
      <tr>
        <th>Particulars</th>
        <th>₹</th>
      </tr>

      <tr>
        <td>Actual Return on Plan Assets</td>
        <td>2,000</td>
      </tr>

      <tr>
        <td>Less: Interest Income (₹10,000 × 10%)</td>
        <td>(1,000)</td>
      </tr>

      <tr>
        <td><strong>Remeasurement Gain</strong></td>
        <td><strong>1,000</strong></td>
      </tr>

    </table>

  `
},

{
  question_id: "FR_MTPSEP24S1_4A",
  source: "ICAI MTP September 2024 Series I",
  chapter_name: "Ind AS 12 - Income Taxes",
  placement: 4,
  marks: 8,

  question_html: `

    <p>
      PQR Ltd., a manufacturing company, prepares consolidated financial
      statements to 31st March each year.
    </p>

    <p>
      During the year ended 31st March, 20X2, the following events affected
      the tax position of the group:
    </p>

    <p><strong>(i)</strong></p>

    <p>
      QPR Ltd., a wholly owned subsidiary of PQR Ltd., incurred a loss
      adjusted for tax purposes of <strong>₹ 30,00,000</strong>.
      QPR Ltd. is unable to utilise this loss against previous tax liabilities.
      Income-tax Act does not allow QPR Ltd. to transfer the tax loss to
      other group companies. However, it allows QPR Ltd. to carry the loss
      forward and utilise it against the company’s future taxable profits.
      The directors of PQR Ltd. do not consider that QPR Ltd. will make
      taxable profits in the foreseeable future.
    </p>

    <p><strong>(ii)</strong></p>

    <p>
      During the year ended 31st March, 20X2, PQR Ltd. capitalised
      development costs which satisfied the criteria of
      <strong>Ind AS 38 – Intangible Assets</strong>.
      The total amount capitalised was
      <strong>₹ 16,00,000</strong>.
    </p>

    <p>
      The development project began to generate economic benefits from
      <strong>1st January, 20X2</strong>.
      The directors estimated that the project would generate economic
      benefits for <strong>five years</strong> from that date.
      The development expenditure was fully deductible against taxable
      profits for the year ended 31st March, 20X2.
    </p>

    <p><strong>(iii)</strong></p>

    <p>
      On 1st April, 20X1, PQR Ltd. borrowed
      <strong>₹ 1,00,00,000</strong>.
      The borrowing cost incurred for arranging the loan was
      <strong>₹ 2,00,000</strong>, which qualified for tax deduction on
      1st April, 20X1.
    </p>

    <p>
      The loan was for a period of three years.
      No interest was payable during the term of the loan, but the amount
      repayable on 31st March, 20X4 will be
      <strong>₹ 1,30,43,800</strong>,
      which represents an effective annual interest rate of
      <strong>10%</strong>.
    </p>

    <p>
      As per the Income-tax Act, a further tax deduction of
      <strong>₹ 30,43,800</strong>
      will be claimable when the loan is repaid on 31st March, 20X4.
    </p>

    <p>
      Explain and show how each of the above events would affect the
      <strong>Deferred Tax Assets / Deferred Tax Liabilities</strong> in the
      consolidated Balance Sheet of PQR Ltd. Group as at
      <strong>31st March, 20X2</strong> in accordance with Ind AS.
    </p>

    <p>
      <strong>Corporate income tax rate = 30%.</strong>
    </p>

  `,

  solution_html: `

    <p>
      <strong>Impact on Consolidated Balance Sheet of PQR Ltd. Group as at
      31st March, 20X2</strong>
    </p>

    <p><strong>(i) Tax Loss of QPR Ltd.</strong></p>

    <p>
      The tax loss creates a potential deferred tax asset because its carrying
      amount is nil whereas its tax base is
      <strong>₹ 30,00,000</strong>.
    </p>

    <p>
      However, no deferred tax asset should be recognised because there is
      no convincing evidence that QPR Ltd. will generate sufficient future
      taxable profits to utilise the carried-forward tax losses.
    </p>

    <p>
      <strong>Deferred Tax Asset recognised = Nil.</strong>
    </p>

    <hr>

    <p><strong>(ii) Capitalised Development Costs</strong></p>

    <p>
      Carrying amount of development costs on
      31st March, 20X2:
    </p>

    <table border="1" cellspacing="0" cellpadding="6">
      <tr>
        <th>Particulars</th>
        <th>₹</th>
      </tr>

      <tr>
        <td>Development cost capitalised</td>
        <td>16,00,000</td>
      </tr>

      <tr>
        <td>Less: Amortisation (₹16,00,000 × 1/5 × 3/12)</td>
        <td>(80,000)</td>
      </tr>

      <tr>
        <td><strong>Carrying Amount</strong></td>
        <td><strong>15,20,000</strong></td>
      </tr>

    </table>

    <br>

    <p>
      Since the expenditure has already been fully deducted for tax purposes,
      the tax base is <strong>Nil</strong>.
    </p>

    <p>
      Therefore, a taxable temporary difference of
      <strong>₹ 15,20,000</strong> arises.
    </p>

    <table border="1" cellspacing="0" cellpadding="6">
      <tr>
        <th>Particulars</th>
        <th>₹</th>
      </tr>

      <tr>
        <td>Temporary Difference</td>
        <td>15,20,000</td>
      </tr>

      <tr>
        <td>Deferred Tax Liability @30%</td>
        <td><strong>4,56,000</strong></td>
      </tr>

    </table>

    <p>
      All Deferred Tax Liabilities are presented as
      <strong>Non-current Liabilities.</strong>
    </p>

    <hr>

    <p><strong>(iii) Loan Transaction</strong></p>

    <p>
      Carrying amount of the loan on 31st March, 20X2:
    </p>

    <table border="1" cellspacing="0" cellpadding="6">

      <tr>
        <th>Particulars</th>
        <th>₹</th>
      </tr>

      <tr>
        <td>Loan proceeds</td>
        <td>1,00,00,000</td>
      </tr>

      <tr>
        <td>Less: Transaction cost</td>
        <td>(2,00,000)</td>
      </tr>

      <tr>
        <td>Add: Finance cost (₹98,00,000 × 10%)</td>
        <td>9,80,000</td>
      </tr>

      <tr>
        <td><strong>Carrying Amount</strong></td>
        <td><strong>1,07,80,000</strong></td>
      </tr>

    </table>

    <br>

    <p>
      Tax base of the loan = <strong>₹ 1,00,00,000</strong>.
    </p>

    <p>
      Therefore, a deductible temporary difference arises:
    </p>

    <table border="1" cellspacing="0" cellpadding="6">

      <tr>
        <th>Particulars</th>
        <th>₹</th>
      </tr>

      <tr>
        <td>Carrying Amount</td>
        <td>1,07,80,000</td>
      </tr>

      <tr>
        <td>Tax Base</td>
        <td>1,00,00,000</td>
      </tr>

      <tr>
        <td><strong>Deductible Temporary Difference</strong></td>
        <td><strong>7,80,000</strong></td>
      </tr>

      <tr>
        <td>Deferred Tax Asset @30%</td>
        <td><strong>2,34,000</strong></td>
      </tr>

    </table>

  `
},

{
  question_id: "FR_MTPSEP24S1_4B",
  source: "ICAI MTP September 2024 Series I",
  chapter_name: "Ind AS 115 - Revenue from Contracts with Customers",
  placement: 4,
  marks: 6,

  question_html: `

    <p>
      An entity enters into a contract with a customer on
      <strong>1st April, 20X1</strong> for the sale of a machine and spare parts.
      The manufacturing lead time for the machine and spare parts is
      <strong>two years</strong>.
    </p>

    <p>
      Upon completion of manufacturing, the entity demonstrates that the
      machine and spare parts meet the agreed-upon specifications in the
      contract. The promises to transfer the machine and spare parts are
      distinct and result in two performance obligations that each will be
      satisfied at a point in time.
    </p>

    <p>
      On <strong>31st March, 20X3</strong>, the customer pays for the machine
      and spare parts, but only takes physical possession of the machine.
      Although the customer inspects and accepts the spare parts, the
      customer requests that the spare parts be stored at the entity's
      warehouse because of its close proximity to the customer's factory.
    </p>

    <p>
      The customer has legal title to the spare parts and the parts can be
      identified as belonging to the customer. Furthermore, the entity stores
      the spare parts in a separate section of its warehouse and the parts
      are ready for immediate shipment at the customer's request.
      The entity expects to hold the spare parts for two to four years and the
      entity does not have the ability to use the spare parts or direct them
      to another customer.
    </p>

    <p>
      How will the Company recognize revenue for sale of machine and spare
      parts? Is there any other performance obligation attached to this sale
      of goods?
    </p>

  `,

  solution_html: `

    <p>
      In the facts provided above, the entity has made sale of
      <strong>two goods</strong> – machine and spare parts, whose control is
      transferred at a point in time. Additionally, the company agrees to hold
      the spare parts for the customer for a period of
      <strong>2 to 4 years</strong>, which is a
      <strong>separate performance obligation</strong>.
    </p>

    <p>
      Therefore, the total transaction price shall be allocated amongst
      <strong>three performance obligations</strong>:
    </p>

    <ol>
      <li>Sale of machinery.</li>
      <li>Sale of spare parts.</li>
      <li>Custodial services for storing spare parts.</li>
    </ol>

    <p>
      Recognition of revenue for each of the three performance obligations
      shall occur as follows:
    </p>

    <p><strong>(i) Sale of Machinery</strong></p>

    <p>
      Machine has been sold to the customer and physical possession as well
      as legal title passed to the customer on
      <strong>31st March, 20X3</strong>.
      Accordingly, revenue for sale of machinery shall be recognized on
      <strong>31st March, 20X3</strong>.
    </p>

    <p><strong>(ii) Sale of Spare Parts</strong></p>

    <p>
      The customer has made payment for the spare parts and legal title has
      been passed to specifically identified goods, but such spare parts
      continue to be physically held by the entity.
    </p>

    <p>
      In this regard, the company shall evaluate whether revenue can be
      recognized on a <strong>bill-and-hold basis</strong> if all of the
      following conditions are met:
    </p>

    <table border="1" cellspacing="0" cellpadding="6">
      <tr>
        <th>Conditions for Bill-and-Hold Arrangement</th>
        <th>Analysis in the Given Case</th>
      </tr>

      <tr>
        <td>
          <strong>(a)</strong> The reason for the bill-and-hold arrangement
          must be substantive (for example, the customer has requested the
          arrangement).
        </td>
        <td>
          The customer has specifically requested the entity to store the
          spare parts in its warehouse owing to its close proximity to the
          customer's factory.
        </td>
      </tr>

      <tr>
        <td>
          <strong>(b)</strong> The product must be identified separately as
          belonging to the customer.
        </td>
        <td>
          The spare parts have been specifically identified and inspected by
          the customer.
        </td>
      </tr>

      <tr>
        <td>
          <strong>(c)</strong> The product currently must be ready for
          physical transfer to the customer.
        </td>
        <td>
          The spare parts are identified and segregated and are therefore
          ready for immediate delivery.
        </td>
      </tr>

      <tr>
        <td>
          <strong>(d)</strong> The entity cannot have the ability to use the
          product or to direct it to another customer.
        </td>
        <td>
          The spare parts have been segregated and cannot be redirected to
          any other customer.
        </td>
      </tr>

    </table>

    <br>

    <p>
      Since <strong>all the conditions of a bill-and-hold arrangement are
      satisfied</strong>, the company can recognize revenue for the sale of
      spare parts on <strong>31st March, 20X3</strong>.
    </p>

    <p><strong>(iii) Custodial Services</strong></p>

    <p>
      The entity has also promised to provide custodial services by storing
      the spare parts for a period of
      <strong>2 to 4 years from 31st March, 20X3</strong>.
    </p>

    <p>
      Since the services are provided uniformly over the storage period and
      the customer simultaneously receives and consumes the benefits of the
      services, revenue relating to the custodial services shall be
      recognized <strong>over a period of time on a straight-line
      basis</strong>.
    </p>

  `
},

{
  question_id: "FR_MTPSEP24S1_5A",
  source: "ICAI MTP September 2024 Series I",
  chapter_name:
    "Ind AS 20 - Accounting for Government Grants and Disclosure of Government Assistance / Ind AS 101 - First-time Adoption of Indian Accounting Standards",
  placement: 5,
  marks: 4,

  question_html: `

    <p>
      ABC Ltd is a government company and is a first-time adopter of Ind AS.
      As per the previous GAAP, the contributions received by ABC Ltd. from
      the government (which holds 100% shareholding in ABC Ltd.) which is
      in the nature of promoters’ contribution have been recognised in capital
      reserve and treated as part of shareholders’ funds in accordance with
      the provisions of AS 12, Accounting for Government Grants.
    </p>

    <p>
      State whether the accounting treatment of the grants in the nature of
      promoters’ contribution as per AS 12 is also permitted under
      Ind AS 20 <strong>Accounting for Government Grants and Disclosure of
      Government Assistance</strong>.
    </p>

    <p>
      If not, then what will be the accounting treatment of such grants
      recognised in capital reserve as per previous GAAP on the date of
      transition to Ind AS.
    </p>

  `,

  solution_html: `

    <p>
      Paragraph 2 of Ind AS 20, <strong>Accounting for Government Grants and
      Disclosure of Government Assistance</strong>, inter alia states that the
      Standard does not deal with government participation in the ownership
      of the entity.
    </p>

    <p>
      Since ABC Ltd. is a Government company, it implies that the government
      has 100% shareholding in the entity. Accordingly, the entity needs to
      determine whether the payment is provided as a shareholder contribution
      or as a government grant.
    </p>

    <p>
      Equity contributions will be recorded in equity while grants will be shown
      in the Statement of Profit and Loss.
    </p>

    <p>
      Where it is concluded that the contributions are in the nature of
      government grant, the entity shall apply the principles of
      Ind AS 20 retrospectively as specified in Ind AS 101
      <strong>First-time Adoption of Indian Accounting Standards</strong>.
    </p>

    <p>
      Ind AS 20 requires all grants to be recognised as income on a
      systematic basis over the periods in which the entity recognises as
      expenses the related costs for which the grants are intended to
      compensate.
    </p>

    <p>
      Unlike AS 12, Ind AS 20 requires the grant to be classified as either
      a capital grant or an income grant and does not permit recognition of
      government grants in the nature of promoter’s contribution directly to
      shareholders’ funds.
    </p>

    <p>
      Where it is concluded that the contributions are in the nature of
      shareholder contributions and are recognised in capital reserve under
      previous GAAP, the provisions of paragraph 10 of Ind AS 101 would
      be applied which states that except in certain cases, an entity shall
      in its opening Ind AS Balance Sheet:
    </p>

    <ol type="a">
      <li>
        recognise all assets and liabilities whose recognition is required
        by Ind AS;
      </li>

      <li>
        not recognise items as assets or liabilities if Ind AS do not permit
        such recognition;
      </li>

      <li>
        reclassify items that it recognised in accordance with previous GAAP
        as one type of asset, liability or component of equity, but are a
        different type of asset, liability or component of equity in accordance
        with Ind AS; and
      </li>

      <li>
        apply Ind AS in measuring all recognised assets and liabilities.
      </li>
    </ol>

    <p>
      Accordingly, as per the above requirements of paragraph 10(c),
      in the given case, contributions recognised in the Capital Reserve
      should be transferred to the appropriate category under
      <strong>Other Equity</strong> at the date of transition to Ind AS.
    </p>

  `,
},
{
  question_id: "FR_MTPSEP24S1_5B",
  source: "ICAI MTP September 2024 Series I",
  chapter_name:
    "Ind AS 116 - Leases",
  placement: 5,
  marks: 10,

  question_html: `

    <p>
      Feel Fresh Limited (the Company) is into manufacturing and retailing
      of FMCG products listed on stock exchanges in India.
      One of its products is bathing soap which the Company sells under
      the brand name <strong>'Feel Fresh'</strong>.
    </p>

    <p>
      The Company does not have its own manufacturing facilities for soap
      and therefore it enters into arrangements with a third party to procure
      the soaps.
      The Company entered into a long-term purchase contract of
      10 years with M/s. Radhey.
      Following are the relevant terms of the contract with M/s. Radhey.
    </p>

    <p><strong>(i)</strong></p>

    <p>
      M/s. Radhey has to purchase a machine costing
      <strong>₹ 10,00,000</strong> from the supplier as specified by the
      Company. The machine will be customized to produce the soaps as
      designed by the Company. This machine cannot be used by
      M/s. Radhey to produce the soaps for buyer other than the Company
      due to the design specifications.
    </p>

    <p>
      The machine has a useful life of 10 years and the straight line method
      of depreciation is best suited considering the use of the machine.
    </p>

    <p><strong>(ii)</strong></p>

    <p>
      The Company will pay <strong>₹ 4.75 per soap</strong> for the first year
      of contract. This is calculated based on the budgeted annual purchase
      of <strong>7,00,000 soaps</strong> as follows:
    </p>

    <table>
      <tr>
        <th>Particulars</th>
        <th>Per soap price (₹)</th>
      </tr>
      <tr>
        <td>Variable cost of manufacturing</td>
        <td>4.00</td>
      </tr>
      <tr>
        <td>Cost of machine (₹ 1,74,015 / 7,00,000 soaps)</td>
        <td>0.25</td>
      </tr>
      <tr>
        <td>M/s. Radhey's margin</td>
        <td>0.50</td>
      </tr>
      <tr>
        <th>Per soap cost to the Company</th>
        <th>4.75</th>
      </tr>
    </table>

    <p>
      In case the Company purchases more than 7,00,000 (i.e. budgeted
      number of soaps) soaps in the first year then the cost of the machine
      (i.e. ₹ 0.25 per soap) will not be paid for soaps procured in excess of
      7,00,000 units.
    </p>

    <p>
      However, in case Company procures less than budgeted number of
      soaps, then the Company will pay the differential unabsorbed cost of
      the machine, at the end of the year.
    </p>

    <p>
      For example, if the Company purchases only 6,00,000 soaps in first
      year then the differential amount of ₹ 24,015
      (₹ 1,74,015 − (6,00,000 × ₹ 0.25)) will be paid by the Company to
      M/s. Radhey at the end of the year.
      Variable cost will be actualized at the end of the year.
    </p>

    <p><strong>(iii)</strong></p>

    <p>
      The cost per soap will be calculated for each year in advance based on
      the budgeted number of soaps to be produced each year.
    </p>

    <p>
      An amount of ₹ 1,74,015 shall be considered each year for the cost of
      machine for year 1 to year 8 while calculating the cost per soap.
      Any differential under absorbed amount shall be paid by the Company
      to M/s. Radhey at the end of that year.
    </p>

    <p>
      A charge of ₹ 1,74,015 per annum for the machine is derived using
      borrowing cost of 8% p.a.
      For year 9 and year 10, only variable cost and margins will be paid.
    </p>

    <p><strong>(iv)</strong></p>

    <p>
      M/s. Radhey does not have any right to terminate the contract but the
      Company has the right to terminate the contract at the end of each year.
    </p>

    <p>
      However, if the Company terminates the contract, it has to compensate
      M/s. Radhey for any unabsorbed cost of Machine.
    </p>

    <p>
      For example, if the Company terminates the contract at the end of
      second year then it has to pay ₹ 10,44,090
      (i.e. ₹ 1,74,015 per year × 6 remaining years).
      If it terminates the contract after the 8th year then the Company does
      not have to pay the compensation since the cost of the machine would
      have been absorbed.
    </p>

    <p><strong>(v)</strong></p>

    <p>
      In the first year, the Company purchases
      <strong>5,50,000 soaps</strong> at <strong>₹ 4.75 per soap</strong>.
    </p>

    <p>
      Analyze the contract of the Company with M/s. Radhey and provide
      necessary accounting entries for first year in accordance with
      Ind AS with working notes.
    </p>

    <p>
      Assume all cash flows occur at the end of the year.
    </p>

  `,

  solution_html: `

    <p><strong>Identification of the contract (by applying paragraph 9 of Ind AS 116)</strong></p>

    <p><strong>(a) Identified asset</strong></p>

    <p>
      Feel Fresh Ltd. (the customer company) enters into a long-term purchase
      contract with M/s. Radhey (the manufacturer) to purchase a particular
      type and quality of soaps for a period of 10 years.
    </p>

    <p>
      Since for the purpose of the contract M/s. Radhey has to buy a
      customized machine as per the directions of Feel Fresh Ltd. and the
      machine cannot be used for any other type of soap, the machine is an
      identified asset.
    </p>

    <p><strong>(b) Right to obtain substantially all of the economic benefits from use of the asset throughout the period of use</strong></p>

    <p>
      Since the machine cannot be used for manufacture of soap for any other
      buyer, Feel Fresh Ltd. will obtain substantially all the economic benefits
      from the use of the asset throughout the period of use.
    </p>

    <p><strong>(c) Right to direct the use</strong></p>

    <p>
      Feel Fresh Ltd. controls the use of the machine and directs the terms
      and conditions of the contract with respect to recovery of fixed expenses
      related to the machine.
    </p>

    <p>
      Hence, the contract contains a lease.
    </p>

    <p><strong>Lease term</strong></p>

    <p>
      The lease term shall be 10 years assuming reasonable certainty.
      Though the lessee is not contractually bound till the 10th year,
      i.e., the lessee can refuse to make payment anytime without lessor's
      permission, it is assumed that the lessee is reasonably certain that
      it will not exercise this option to terminate.
    </p>

    <p><strong>Identification of lease payment</strong></p>

    <p>
      Lease payments are defined as payments made by a lessee to a lessor
      relating to the right to use an underlying asset during the lease term,
      comprising the following:
    </p>

    <ol type="a">
      <li>Fixed payments (including in-substance fixed payments), less any lease incentives.</li>
      <li>Variable lease payments that depend on an index or a rate.</li>
      <li>The exercise price of a purchase option if the lessee is reasonably certain to exercise that option.</li>
      <li>Payments of penalties for terminating the lease, if the lease term reflects the lessee exercising an option to terminate.</li>
    </ol>

    <p>
      Here, in-substance fixed payments in the given lease contract are
      <strong>₹ 1,74,015 per annum</strong>.
      The present value of lease payments which would be recovered in
      8 years @ 8% is approximately <strong>₹ 10,00,000</strong>.
    </p>

    <p>
      Variable lease payments that do not depend on an index or rate and
      are not, in substance, fixed are not included as lease payments.
      Instead, they are recognised in profit or loss in the period in which
      the event that triggers the payment occurs (unless they are included
      in the carrying amount of another asset in accordance with other
      Ind AS).
    </p>

    <p>
      Hence, lease liability will be recognised by
      <strong>₹ 10,00,000</strong> in the books of Feel Fresh Ltd.
      Since there are no payments made to lessor before commencement
      date, less lease incentives received from lessor, initial direct costs
      incurred by lessee or estimate of costs for restoration/dismantling
      of underlying asset, the right-of-use asset is equal to the lease liability.
    </p>

    <p><strong>Journal Entries</strong></p>

    <p><strong>On initial recognition</strong></p>

    <table>
      <tr>
        <th>Particulars</th>
        <th>Dr. (₹)</th>
        <th>Cr. (₹)</th>
      </tr>
      <tr>
        <td>ROU Asset Dr.<br>To Lease Liability</td>
        <td>10,00,000</td>
        <td>10,00,000</td>
      </tr>
    </table>

    <p>
      (Being lease liability and corresponding right-of-use asset recognised initially)
    </p>

    <p><strong>At the end of the first year</strong></p>

    <table>
      <tr>
        <th>Particulars</th>
        <th>Dr. (₹)</th>
        <th>Cr. (₹)</th>
      </tr>
      <tr>
        <td>Interest Expense Dr.<br>To Lease Liability</td>
        <td>80,000</td>
        <td>80,000</td>
      </tr>
    </table>

    <p>
      (Being interest expense recognised using the effective interest method
      @ 8% on ₹ 10,00,000)
    </p>

    <table>
      <tr>
        <th>Particulars</th>
        <th>Dr. (₹)</th>
        <th>Cr. (₹)</th>
      </tr>
      <tr>
        <td>Depreciation Expense Dr.<br>To ROU Asset</td>
        <td>1,00,000</td>
        <td>1,00,000</td>
      </tr>
    </table>

    <p>
      (Being depreciation charged on ROU Asset using straight-line method
      over 10 years)
    </p>

    <table>
      <tr>
        <th>Particulars</th>
        <th>Dr. (₹)</th>
        <th>Cr. (₹)</th>
      </tr>
      <tr>
        <td>Lease Liability Dr.<br>To Bank / M/s. Radhey</td>
        <td>1,74,015</td>
        <td>1,74,015</td>
      </tr>
    </table>

    <p>
      (Being lease payment made)
    </p>

    <table>
      <tr>
        <th>Particulars</th>
        <th>Dr. (₹)</th>
        <th>Cr. (₹)</th>
      </tr>
      <tr>
        <td>Cost of Soap Dr.<br>To Bank / M/s. Radhey</td>
        <td>24,75,000</td>
        <td>24,75,000</td>
      </tr>
    </table>

    <p>
      (Being variable manufacturing cost and margin paid for
      5,50,000 soaps × (₹ 4.00 + ₹ 0.50))
    </p>

  `,
},
{
  question_id: "FR_MTPSEP24S1_6A",
  source: "ICAI MTP September 2024 Series I",
  chapter_name:
    "Ind AS 1 - Presentation of Financial Statements / Ind AS 16 - Property, Plant and Equipment / Ind AS 40 - Investment Property",
  placement: 6,
  marks: 9,

  question_html: `

    <p>
      Venus Ltd. is a multinational entity that owns three properties.
      All three properties were purchased on 1st April, 20X1.
      The details of purchase price and market values of the properties are
      given as follows:
    </p>

    <table>
      <tr>
        <th>Particulars</th>
        <th>Property 1</th>
        <th>Property 2</th>
        <th>Property 3</th>
      </tr>
      <tr>
        <td></td>
        <td>Factory</td>
        <td>Factory</td>
        <td>Let-Out</td>
      </tr>
      <tr>
        <td>Purchase price (₹)</td>
        <td>15,000</td>
        <td>10,000</td>
        <td>12,000</td>
      </tr>
      <tr>
        <td>Market value as at 31.03.20X2 (₹)</td>
        <td>16,000</td>
        <td>11,000</td>
        <td>13,500</td>
      </tr>
      <tr>
        <td>Useful Life</td>
        <td>10 Years</td>
        <td>10 Years</td>
        <td>10 Years</td>
      </tr>
      <tr>
        <td>Subsequent Measurement</td>
        <td>Cost Model</td>
        <td>Revaluation Model</td>
        <td>Revaluation Model</td>
      </tr>
    </table>

    <p>
      Property 1 and Property 2 are used by Venus Ltd. as factory buildings
      whilst Property 3 is let-out to a non-related party at a market rent.
    </p>

    <p>
      The management presents all three properties in the Balance Sheet as
      <strong>'Property, Plant and Equipment'</strong>.
    </p>

    <p>
      The Company does not depreciate any of the properties on the basis
      that the fair values are exceeding their carrying amount and recognises
      the difference between purchase price and fair value in the Statement
      of Profit and Loss.
    </p>

    <p>
      Analyse whether the accounting policies adopted by Venus Ltd. in
      relation to these properties are in accordance with Ind AS.
      If not, advise the correct treatment along with workings for the same.
    </p>

  `,

  solution_html: `

    <p>
      The above issue needs to be examined in the light of the provisions of
      <strong>Ind AS 1 'Presentation of Financial Statements'</strong>,
      <strong>Ind AS 16 'Property, Plant and Equipment'</strong> in relation to
      Property 1 and Property 2, and
      <strong>Ind AS 40 'Investment Property'</strong> in relation to Property 3.
    </p>

    <p>
      Venus Ltd. shall apply the same accounting policy (i.e., either the
      Cost Model or the Revaluation Model) to the entire class of property,
      being Property 1 and Property 2.
    </p>

    <p>
      It is also required to depreciate these properties irrespective of the
      fact that their fair values exceed their carrying amounts.
    </p>

    <p>
      The revaluation gain shall be recognised in
      <strong>Other Comprehensive Income (OCI)</strong> and accumulated in
      equity under the heading of
      <strong>Revaluation Surplus</strong>.
    </p>

    <p>
      There is no option of applying the Revaluation Model in respect of
      Property 3 since it is classified as an
      <strong>Investment Property</strong>.
      Only the <strong>Cost Model</strong> is permitted for subsequent
      measurement under Ind AS 40.
    </p>

    <p>
      However, Venus Ltd. is required to disclose the fair value of the
      Investment Property in the Notes to Accounts.
      Also, Property 3 shall be presented as a separate line item under
      <strong>Investment Property</strong>.
    </p>

    <p>
      Therefore, as per the provisions of Ind AS 1, Ind AS 16 and Ind AS 40,
      the presentation of these three properties in the Balance Sheet shall be
      as follows:
    </p>

    <p><strong>Case 1: Venus Ltd. has applied the Cost Model to the entire class of Property, Plant and Equipment</strong></p>

    <table>
      <tr>
        <th colspan="2">Balance Sheet (Extract) as at 31st March, 20X2</th>
      </tr>
      <tr>
        <th>Particulars</th>
        <th>₹</th>
      </tr>
      <tr>
        <td><strong>Assets</strong></td>
        <td></td>
      </tr>
      <tr>
        <td><strong>Non-Current Assets</strong></td>
        <td></td>
      </tr>
      <tr>
        <td>Property, Plant and Equipment</td>
        <td></td>
      </tr>
      <tr>
        <td>&nbsp;&nbsp;Property 1</td>
        <td>13,500</td>
      </tr>
      <tr>
        <td>&nbsp;&nbsp;Property 2</td>
        <td>9,000</td>
      </tr>
      <tr>
        <td><strong>Total PPE</strong></td>
        <td><strong>22,500</strong></td>
      </tr>
      <tr>
        <td>Investment Property (Property 3)</td>
        <td>10,800</td>
      </tr>
    </table>

    <p><strong>Case 2: Venus Ltd. has applied the Revaluation Model to the entire class of Property, Plant and Equipment</strong></p>

    <table>
      <tr>
        <th colspan="2">Balance Sheet (Extract) as at 31st March, 20X2</th>
      </tr>
      <tr>
        <th>Particulars</th>
        <th>₹</th>
      </tr>
      <tr>
        <td><strong>Assets</strong></td>
        <td></td>
      </tr>
      <tr>
        <td><strong>Non-Current Assets</strong></td>
        <td></td>
      </tr>
      <tr>
        <td>Property, Plant and Equipment</td>
        <td></td>
      </tr>
      <tr>
        <td>&nbsp;&nbsp;Property 1</td>
        <td>16,000</td>
      </tr>
      <tr>
        <td>&nbsp;&nbsp;Property 2</td>
        <td>11,000</td>
      </tr>
      <tr>
        <td><strong>Total PPE</strong></td>
        <td><strong>27,000</strong></td>
      </tr>
      <tr>
        <td>Investment Property (Property 3)</td>
        <td>10,800</td>
      </tr>
    </table>

    <table>
      <tr>
        <th colspan="2">Equity and Liabilities (Extract)</th>
      </tr>
      <tr>
        <th>Particulars</th>
        <th>₹</th>
      </tr>
      <tr>
        <td><strong>Other Equity</strong></td>
        <td></td>
      </tr>
      <tr>
        <td>Revaluation Reserve:</td>
        <td></td>
      </tr>
      <tr>
        <td>&nbsp;&nbsp;Property 1 [₹ 16,000 − (₹ 15,000 − ₹ 1,500)]</td>
        <td>2,500</td>
      </tr>
      <tr>
        <td>&nbsp;&nbsp;Property 2 [₹ 11,000 − (₹ 10,000 − ₹ 1,000)]</td>
        <td>2,000</td>
      </tr>
      <tr>
        <td><strong>Total Revaluation Reserve</strong></td>
        <td><strong>4,500</strong></td>
      </tr>
    </table>

    <p>
      The revaluation reserve should be routed through
      <strong>Other Comprehensive Income (OCI)</strong>
      (subsequently not reclassified to Profit and Loss) in the
      Statement of Profit and Loss and shown in a separate column under
      the Statement of Changes in Equity.
    </p>

  `,
},
{
  question_id: "FR_MTPSEP24S1_6B",
  source: "ICAI MTP September 2024 Series I",
  chapter_name:
    "Ethics in Financial Reporting / Ind AS 19 - Employee Benefits",
  placement: 6,
  marks: 5,

  question_html: `

    <p>
      Infostar Ltd. is a listed company engaged in the provision of IT
      services in India.
    </p>

    <p>
      The directors are paid a bonus based on the profits achieved by the
      company during the year as per the bonus table given below:
    </p>

    <table>
      <tr>
        <th>Profit Range</th>
        <th>Bonus to Directors</th>
      </tr>
      <tr>
        <td>NIL &lt; Profit &lt; ₹ 1 crore</td>
        <td>NIL</td>
      </tr>
      <tr>
        <td>₹ 1 crore &lt; Profit &lt; ₹ 5 crores</td>
        <td>2% of Net Profit</td>
      </tr>
      <tr>
        <td>₹ 5 crores &lt; Profit &lt; ₹ 10 crores</td>
        <td>4% of Net Profit</td>
      </tr>
      <tr>
        <td>₹ 10 crores &lt; Profit &lt; ₹ 20 crores</td>
        <td>6% of Net Profit</td>
      </tr>
      <tr>
        <td>₹ 20 crores &lt; Profit &lt; ₹ 30 crores</td>
        <td>8% of Net Profit</td>
      </tr>
      <tr>
        <td>Profit &gt; ₹ 30 crores</td>
        <td>10% of Net Profit</td>
      </tr>
    </table>

    <p>
      The draft Statement of Profit and Loss for the year ended
      31st March, 20X2 currently shows a profit of
      <strong>₹ 2 crores</strong>.
    </p>

    <p><strong>Issue:</strong></p>

    <p>
      The employees of Infostar Ltd. have historically been paid an
      individual-performance-based discretionary incentive for the last
      15 years.
    </p>

    <p>
      Based on the past trends and performance, the bonus amount for the
      year 20X1-20X2 would be
      <strong>₹ 3 crores</strong>.
    </p>

    <p>
      In view of the possibility of the directors not receiving the bonus
      on account of the company’s poor performance, Infostar Ltd.’s
      Chief Financial Officer (CFO), who is a Chartered Accountant,
      has suggested that the discretionary incentive usually payable to
      the employees could be avoided in the current year, which would
      result in the company reporting profits.
    </p>

    <p>
      As a part of its annual report, Infostar Ltd. reports employee
      satisfaction scores, staff attrition rates, gender equality and
      employee absenteeism rates as non-financial performance measures.
    </p>

    <p>
      The CFO has also told the directors over mail that no stakeholder
      reads the non-financial information anyway, and thus his aforesaid
      suggestion of not paying the discretionary incentive would not
      impact the company greatly.
    </p>

    <p>
      Discuss the ethical and accounting implications of the above issues,
      referring to the relevant Ind AS wherever appropriate from the
      perspective of CA. Sushil Bhupathy.
    </p>

  `,

  solution_html: `

    <p><strong>Ethical Considerations</strong></p>

    <p>
      Long-term success of any organization strongly depends on the fair
      treatment of employees, which in turn is based on the ethical
      behaviour of the management as well as how the same is perceived
      by the stakeholders.
    </p>

    <p>
      In the given case, the CFO has suggested not paying the discretionary
      bonus, which the directors are considering as it will enable the
      company to record profits of ₹ 2 crores, thereby ensuring a bonus
      payout to the directors.
    </p>

    <p>
      This suggestion is not illegal as the bonus is discretionary rather
      than statutory/contractual. In other words, the company has no legal
      obligation to pay the bonus to the employees.
    </p>

    <p>
      However, the reason behind non-payment of the bonus is what gives
      rise to ethical considerations. The suggestion by the CFO will have
      the effect of reducing expenses and improving profits.
    </p>

    <p>
      On moral grounds, the suggestion is likely to have negative
      consequences for the company. The employees would be dissatisfied
      that the bonus has been withdrawn and, further, when they see the
      directors receiving bonuses out of the profits arising from a saving
      in bonus costs, it would have a negative impact on employee morale.
    </p>

    <p>
      This would result in lower employee satisfaction scores and poor
      retention rates, which are reported as non-financial information in
      the financial statements.
    </p>

    <p>
      Companies are also under increasing pressure to reduce the wage gap
      between the management and its employees. By not paying a bonus,
      this metric will be adversely affected.
    </p>

    <p>
      The CFO's statement that the above action will not negatively impact
      the company because the non-financial reporting indicators are not
      widely read by users is misleading.
    </p>

    <p>
      Non-financial information is becoming increasingly important to the
      users of financial statements because they care about companies'
      treatment of their employees and view it as being important in the
      long-term success of the company.
    </p>

    <p>
      A Chartered Accountant has a responsibility to exercise due diligence
      and clearly consider both financial and non-financial information
      while discharging professional duties.
    </p>

    <p>
      It would be unethical for a Chartered Accountant to guide the
      management on matters which may result in any kind of disadvantage
      (including non-financial matters) to the stakeholders.
    </p>

    <p>
      Further, a distinguishing mark of the accountancy profession is its
      acceptance of the responsibility to act in the public interest.
      A Chartered Accountant's responsibility is not exclusively to satisfy
      the needs of an individual client or employing organization.
    </p>

    <p>
      Therefore, the Code contains requirements and application material
      to enable Chartered Accountants to meet their responsibility to act
      in the public interest.
    </p>

    <p>
      Hence, it is essential for a Chartered Accountant to uphold the
      professional standards and act in accordance with the ethical
      principles by ensuring transparency and accuracy in financial
      reporting.
    </p>

  `,
}


];
