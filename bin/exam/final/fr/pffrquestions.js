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

  `,
  },

  {
    question_id: "FR_MTPSEP24S1_2A",
    source: "ICAI MTP September 2024 Series I",
    chapter_name:
      "Ind AS 109 - Financial Instruments / Ind AS 113 - Fair Value Measurement",
    placement: 2 ,
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

  `,
  },

  {
    question_id: "FR_MTPSEP24S1_2B",
    source: "ICAI MTP September 2024 Series I",
    chapter_name: "Ind AS 24 - Related Party Disclosures",
    placement: 2 ,
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

  `,
  },
  {
    question_id: "FR_MTPSEP24S1_2C",
    source: "ICAI MTP September 2024 Series I",
    chapter_name: "Ind AS 108 - Operating Segments",
    placement: 2 ,
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

  `,
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

  `,
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

  `,
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

  `,
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

  `,
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
    chapter_name: "Ind AS 116 - Leases",
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
    chapter_name: "Ethics in Financial Reporting / Ind AS 19 - Employee Benefits",
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
      It would be unethical for a Chartered Accountant to guide the management on matters which may result in any kind of disadvantage
      (including non-financial matters) to the stakeholders.
    </p>

    <p> Further, a distinguishing mark of the accountancy profession is its acceptance of the responsibility to act in the public interest. A Chartered Accountant's responsibility is not exclusively to satisfy the needs of an individual client or employing organization. </p>

    <p> Therefore, the Code contains requirements and application material to enable Chartered Accountants to meet their responsibility to act in the public interest. </p>

  `,
  },
  {
    question_id: "FR_MTPSEP24S2_1",
    source: "ICAI MTP September 2024 Series II",
    chapter_name: "Consolidated Financial Statements / Ind AS 110 & 103",
    placement: 1,
    marks: 14,
    question_html: `<p>DEF Ltd. acquired 100% ordinary shares of ₹ 100 each of XYZ Ltd. on 1st October 20X1. On 31st March, 20X2 the summarised Balance Sheets of the two companies were as given below:</p>

    <table>
      <tr>
        <th></th>
        <th>DEF Ltd.</th>
        <th>XYZ Ltd.</th>
      </tr>
      <tr>
        <td><strong>Assets</strong></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Property Plant Equipment</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Land & Buildings</td>
        <td>15,00,000</td>
        <td>18,00,000</td>
      </tr>
      <tr>
        <td>Plant & Machinery</td>
        <td>24,00,000</td>
        <td>13,50,000</td>
      </tr>
      <tr>
        <td>Investment in XYZ Ltd.</td>
        <td>34,00,000</td>
        <td>-</td>
      </tr>
      <tr>
        <td>Inventory</td>
        <td>12,00,000</td>
        <td>3,64,000</td>
      </tr>
      <tr>
        <td>Financial Assets</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Trade Receivable</td>
        <td>5,98,000</td>
        <td>4,00,000</td>
      </tr>
      <tr>
        <td>Cash</td>
        <td>1,45,000</td>
        <td>80,000</td>
      </tr>
      <tr>
        <td><strong>Total</strong></td>
        <td><strong>92,43,000</strong></td>
        <td><strong>39,94,000</strong></td>
      </tr>
      <tr>
        <td><strong>Equity & Liabilities</strong></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Equity Capital (Shares of ₹ 100 each fully paid)</td>
        <td>50,00,000</td>
        <td>20,00,000</td>
      </tr>
      <tr>
        <td>Other Equity</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Other reserves</td>
        <td>24,00,000</td>
        <td>10,00,000</td>
      </tr>
      <tr>
        <td>Retained Earnings</td>
        <td>5,72,000</td>
        <td>8,20,000</td>
      </tr>
      <tr>
        <td>Financial Liabilities</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Bank Overdraft</td>
        <td>-</td>
        <td>8,00,000</td>
      </tr>
      <tr>
        <td>Trade Payable</td>
        <td>1,74,000</td>
        <td>4,71,000</td>
      </tr>
      <tr>
        <td><strong>Total</strong></td>
        <td><strong>92,43,000</strong></td>
        <td><strong>39,94,000</strong></td>
      </tr>
    </table>

    <p>The retained earnings of XYZ Ltd. showed a credit balance of ₹ 3,00,000 on 1st April 20X1 out of which a dividend of 10% was paid on 1st November; DEF Ltd. has recognised the dividend received to profit or loss account; Fair Value of P&M as on 1st October 20X1 was ₹ 20,00,000. The rate of depreciation on plant & machinery is 10%.</p>

    <p>Following are the increases on comparison of fair value as per respective Ind AS with book value as on 1st October 20X1 which are to be considered while consolidating the Balance Sheets.</p>

    <table>
      <tr>
        <th>Liabilities</th>
        <th>Amount (₹)</th>
        <th>Assets</th>
        <th>Amount (₹)</th>
      </tr>
      <tr>
        <td>Trade Payables</td>
        <td>1,00,000</td>
        <td>Land & Buildings</td>
        <td>10,00,000</td>
      </tr>
      <tr>
        <td>Inventories</td>
        <td>1,50,000</td>
        <td></td>
        <td></td>
      </tr>
    </table>

    <p><strong>Notes:</strong></p>
    <ol type="a">
      <li>It may be assumed that the inventory is still unsold on balance sheet date and the Trade Payables are also not yet settled.</li>
      <li>Also assume that the Other Reserves of both the companies as on 31st March 20X2 are the same as was on 1st April 20X1.</li>
      <li>All fair value adjustments have not yet started impacting consolidated post-acquisition profits.</li>
    </ol>

    <p>Prepare Consolidated Balance Sheet as at 31st March, 20X2.</p>
  `,
    solution_html: ` <p><strong>Consolidated Balance Sheet of DEF Ltd. and its subsidiary, XYZ Ltd. as at 31st March, 20X2</strong></p>

    <table>
      <tr>
        <th>Particulars</th>
        <th>Note No.</th>
        <th>₹</th>
      </tr>
      <tr>
        <td><strong>I. Assets</strong></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td><strong>(1) Non-current assets</strong></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>(i) Property Plant & Equipment</td>
        <td>1</td>
        <td>86,00,000</td>
      </tr>
      <tr>
        <td><strong>(2) Current Assets</strong></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>(i) Inventories</td>
        <td>2</td>
        <td>17,14,000</td>
      </tr>
      <tr>
        <td>(ii) Financial Assets</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>(a) Trade Receivables</td>
        <td>3</td>
        <td>9,98,000</td>
      </tr>
      <tr>
        <td>(b) Cash & Cash equivalents</td>
        <td>4</td>
        <td>2,25,000</td>
      </tr>
      <tr>
        <td><strong>Total Assets</strong></td>
        <td></td>
        <td><strong>1,15,37,000</strong></td>
      </tr>
      <tr>
        <td><strong>II. Equity and Liabilities</strong></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td><strong>(1) Equity</strong></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>(i) Equity Share Capital</td>
        <td>5</td>
        <td>50,00,000</td>
      </tr>
      <tr>
        <td>(ii) Other Equity</td>
        <td>6</td>
        <td>49,92,000</td>
      </tr>
      <tr>
        <td><strong>(2) Current Liabilities</strong></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>(i) Financial Liabilities</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>(a) Trade Payables</td>
        <td>7</td>
        <td>7,45,000</td>
      </tr>
      <tr>
        <td>(b) Short term borrowings</td>
        <td>8</td>
        <td>8,00,000</td>
      </tr>
      <tr>
        <td><strong>Total Equity & Liabilities</strong></td>
        <td></td>
        <td><strong>1,15,37,000</strong></td>
      </tr>
    </table>

    <p><strong>Notes to Accounts</strong></p>
    <table>
      <tr>
        <th>Note</th>
        <th>Particulars</th>
        <th>₹</th>
      </tr>
      <tr>
        <td>1</td>
        <td>Property Plant & Equipment<br>Land & Building<br>Plant & Machinery</td>
        <td><br>43,00,000<br>43,00,000<br><strong>86,00,000</strong></td>
      </tr>
      <tr>
        <td>2</td>
        <td>Inventories<br>DEF Ltd.<br>XYZ Ltd.</td>
        <td><br>12,00,000<br>5,14,000<br><strong>17,14,000</strong></td>
      </tr>
      <tr>
        <td>3</td>
        <td>Trade Receivables<br>DEF Ltd.<br>XYZ Ltd.</td>
        <td><br>5,98,000<br>4,00,000<br><strong>9,98,000</strong></td>
      </tr>
      <tr>
        <td>4</td>
        <td>Cash & Cash equivalents<br>DEF Ltd.<br>XYZ Ltd.</td>
        <td><br>1,45,000<br>80,000<br><strong>2,25,000</strong></td>
      </tr>
      <tr>
        <td>7</td>
        <td>Trade payable<br>DEF Ltd.<br>XYZ Ltd.</td>
        <td><br>4,71,000<br>2,74,000<br><strong>7,45,000</strong></td>
      </tr>
      <tr>
        <td>8</td>
        <td>Shorter-term borrowings<br>Bank overdraft</td>
        <td><br><strong>8,00,000</strong></td>
      </tr>
    </table>

    <p><strong>Statement of Changes in Equity:</strong></p>
    <p><strong>1. Equity share Capital</strong></p>
    <table>
      <tr>
        <th>Balance at the beginning of the reporting period</th>
        <th>Changes in Equity share capital during the year</th>
        <th>Balance at the end of the reporting period</th>
      </tr>
      <tr>
        <td>50,00,000</td>
        <td>0</td>
        <td>50,00,000</td>
      </tr>
    </table>

    <p><strong>2. Other Equity</strong></p>
    <table>
      <tr>
        <th></th>
        <th>Reserves & Surplus</th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
      <tr>
        <th></th>
        <th>Capital reserve</th>
        <th>Other Reserves</th>
        <th>Retained Earnings</th>
        <th>Total</th>
      </tr>
      <tr>
        <td>Balance at the beginning</td>
        <td>0</td>
        <td>24,00,000</td>
        <td>0</td>
        <td>24,00,000</td>
      </tr>
      <tr>
        <td>Total comprehensive income for the year</td>
        <td>0</td>
        <td>0</td>
        <td>5,72,000</td>
        <td>5,72,000</td>
      </tr>
      <tr>
        <td>Dividends</td>
        <td>0</td>
        <td>0</td>
        <td>(2,00,000)</td>
        <td>(2,00,000)</td>
      </tr>
      <tr>
        <td>Total comprehensive income attributable to parent</td>
        <td></td>
        <td></td>
        <td>3,35,000</td>
        <td>3,35,000</td>
      </tr>
      <tr>
        <td>Gain on Bargain purchase</td>
        <td>18,85,000</td>
        <td></td>
        <td></td>
        <td>18,85,000</td>
      </tr>
      <tr>
        <td><strong>Balance at the end of reporting period</strong></td>
        <td><strong>18,85,000</strong></td>
        <td><strong>24,00,000</strong></td>
        <td><strong>7,07,000</strong></td>
        <td><strong>49,92,000</strong></td>
      </tr>
    </table>

    <p><em>It is assumed that there exists no clear evidence for classifying the acquisition of the subsidiary as a bargain purchase and, hence, the bargain purchase gain has been recognized directly in capital reserve. If, however, there exists such a clear evidence, the bargain purchase gain would be recognized in other comprehensive income and then accumulated in capital reserve. In both the cases, closing balance of capital reserve will be ₹ 18,85,000.</em></p>

    <p><strong>Working Notes:</strong></p>
    <p><strong>1. Adjustments of Fair Value</strong><br>
    The Plant & Machinery of XYZ Ltd. would stand in the books at ₹ 14,25,000 on 1st October, 20X1, considering only six months’ depreciation on ₹ 15,00,000 total depreciation being ₹ 1,50,000. The value put on the assets being ₹ 20,00,000 there is an appreciation to the extent of ₹ 5,75,000.</p>

    <p><strong>2. Acquisition date profits of XYZ Ltd.</strong></p>
    <table>
      <tr><td>Reserves on 1.4.20X1</td><td>10,00,000</td></tr>
      <tr><td>Profit & Loss Account Balance on 1.4. 20X1</td><td>3,00,000</td></tr>
      <tr><td>Profit for 20X2:<br>Total ₹ 8,20,000 less ₹ 1,00,000 (3,00,000 – 2,00,000) i.e. ₹ 7,20,000; for 6 months i.e. up to 1.10.20X1</td><td>3,60,000</td></tr>
      <tr><td>Total Appreciation including machinery appreciation<br>(10,00,000 + 1,50,000 + 5,75,000 – 1,00,000)</td><td>16,25,000</td></tr>
      <tr><td><strong>Share of DEF Ltd.</strong></td><td><strong>32,85,000</strong></td></tr>
    </table>

    <p><strong>3. Post-acquisition profits of XYZ Ltd.</strong></p>
    <table>
      <tr><td>Profit after 1.10. 20X1 [8,20,000 - 1,00,000] x 6/12</td><td>3,60,000</td></tr>
      <tr><td>Less: 10% depreciation on ₹ 20,00,000 for 6 months less depreciation already charged for 2nd half of 20X1-20X2 on ₹ 15,00,000 (1,00,000 - 75,000)</td><td>(25,000)</td></tr>
      <tr><td><strong>Share of DEF Ltd.</strong></td><td><strong>3,35,000</strong></td></tr>
    </table>

    <p><strong>4. Consolidated total comprehensive income</strong></p>
    <table>
      <tr><td><strong>DEF Ltd.</strong></td><td></td></tr>
      <tr><td>Retained earnings on 31.3.20X2</td><td>5,72,000</td></tr>
      <tr><td>Less: Retained earnings as on 1.4.20X1</td><td>(0)</td></tr>
      <tr><td>Profits for the year 20X1-20X2</td><td>5,72,000</td></tr>
      <tr><td>Less: Elimination of intra-group dividend</td><td>(2,00,000)</td></tr>
      <tr><td>Adjusted profit for the year</td><td>3,72,000</td></tr>
      <tr><td><strong>XYZ Ltd.</strong></td><td></td></tr>
      <tr><td>Adjusted profit attributable to DEF Ltd. (W.N.3)</td><td>3,35,000</td></tr>
      <tr><td><strong>Consolidated profit or loss for the year</strong></td><td><strong>7,07,000</strong></td></tr>
    </table>
    <p><em>No Non-controlling Interest as 100% shares of XYZ Ltd. are held by DEF Ltd.</em></p>

    <p><strong>5. Gain on Bargain Purchase</strong></p>
    <table>
      <tr><td>Amount paid for 20,000 shares</td><td>34,00,000</td></tr>
      <tr><td>Par value of shares</td><td>20,00,000</td></tr>
      <tr><td>DEF Ltd.’s share in acquisition date profits of XYZ Ltd.</td><td>32,85,000</td></tr>
      <tr><td></td><td>(52,85,000)</td></tr>
      <tr><td><strong>Gain on Bargain Purchase</strong></td><td><strong>18,85,000</strong></td></tr>
    </table>

    <p><strong>6. Value of Plant & Machinery</strong></p>
    <table>
      <tr><td><strong>DEF Ltd.</strong></td><td><strong>24,00,000</strong></td></tr>
      <tr><td><strong>XYZ Ltd.</strong></td><td>13,50,000</td></tr>
      <tr><td>Add: Appreciation on 1.10. 20X1</td><td>5,75,000</td></tr>
      <tr><td></td><td>19,25,000</td></tr>
      <tr><td>Add: Depreciation for 2nd half charged on pre-revalued value</td><td>75,000</td></tr>
      <tr><td>Less: Depreciation on ₹ 20,00,000 for 6 months</td><td>(1,00,000)</td></tr>
      <tr><td></td><td><strong>19,00,000</strong></td></tr>
      <tr><td><strong>Total</strong></td><td><strong>43,00,000</strong></td></tr>
    </table>

    <p><strong>7. Consolidated retained earnings</strong></p>
    <table>
      <tr>
        <th></th>
        <th>DEF Ltd.</th>
        <th>XYZ Ltd.</th>
        <th>Total</th>
      </tr>
      <tr>
        <td>As given</td>
        <td>5,72,000</td>
        <td>8,20,000</td>
        <td>13,92,000</td>
      </tr>
      <tr>
        <td><strong>Consolidation Adjustments:</strong></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>(i) Elimination of pre-acquisition element [3,00,000 + 3,60,000]</td>
        <td>0</td>
        <td>(6,60,000)</td>
        <td>(6,60,000)</td>
      </tr>
      <tr>
        <td>(ii) Elimination of intra-group dividend</td>
        <td>(2,00,000)</td>
        <td>2,00,000</td>
        <td>0</td>
      </tr>
      <tr>
        <td>(iii) Impact of fair value adjustments</td>
        <td>0</td>
        <td>(25,000)</td>
        <td>(25,000)</td>
      </tr>
      <tr>
        <td><strong>Adjusted consolidated retained earnings</strong></td>
        <td><strong>3,72,000</strong></td>
        <td><strong>3,35,000</strong></td>
        <td><strong>7,07,000</strong></td>
      </tr>
    </table>

    <p><strong>Assumptions:</strong></p>
    <ol>
      <li>Investment in XYZ Ltd is carried at cost in the separate financial statements of DEF Ltd.</li>
      <li>Appreciation of ₹10 lakhs in land & buildings is entirely attributable to land element only.</li>
      <li>Depreciation on plant and machinery is on WDV method.</li>
      <li>Acquisition-date fair value adjustment to inventories of XYZ Ltd. existing at the balance sheet date does not result in need for any write-down.</li>
    </ol>`,
  },

{
    "question_id": "FR_MTPSEP24S2_2A",
    "source": "ICAI MTP September 2024 Series II",
    "chapter_name": "Financial Instruments / Ind AS 109",
    "placement": 2,
    "marks": 10,
    "question_html": `
    <p>Wheel Co. Limited borrowed ₹ 500,000,000 from a bank on 1 January 20X1. The original terms of the loan were as follows:</p>
    <ul>
      <li>Interest rate: 11%</li>
      <li>Repayment of principal in 5 equal instalments</li>
      <li>Payment of interest annually on accrual basis</li>
      <li>Upfront processing fee: ₹ 5,870,096</li>
    </ul>
    <p>Effective interest rate on loan: 11.50%</p>
    <p>On 31 December 20X2, Wheel Co. Limited approached the bank citing liquidity issues in meeting the cash flows required for immediate instalments and re-negotiated the terms of the loan with banks as follows:</p>
    <ul>
      <li>Interest rate 15%</li>
      <li>Repayment of outstanding principal in 10 equal instalments starting 31 December 20X3</li>
      <li>Payment of interest on an annual basis</li>
    </ul>
    <p>Record journal entries in the books of Wheel Co. Limited till 31 December 20X3, after giving effect of the changes in the terms of the loan on 31 December 20X2</p>
  `,
    "solution_html": `
    <p>On the date of initial recognition, the effective interest rate of the loan shall be computed keeping in view the contractual cash flows and upfront processing fee paid. The following table shows the amortisation of loan based on effective interest rate:</p>

    <table>
      <tr>
        <th>Date</th>
        <th>Cash flows (principal)</th>
        <th>Cash flows (interest and fee)</th>
        <th>Amortised cost <br> (opening + interest – cash flows)</th>
        <th>Interest @ EIR (11.50%)</th>
      </tr>
      <tr>
        <td>1-Jan-20X1</td>
        <td>(500,000,000)</td>
        <td>5,870,096</td>
        <td>494,129,904</td>
        <td></td>
      </tr>
      <tr>
        <td>31-Dec-20X1</td>
        <td>100,000,000</td>
        <td>55,000,000</td>
        <td>395,954,843</td>
        <td>56,824,939</td>
      </tr>
      <tr>
        <td>31-Dec-20X2</td>
        <td>100,000,000</td>
        <td>44,000,000</td>
        <td>297,489,650</td>
        <td>45,534,807</td>
      </tr>
      <tr>
        <td>31-Dec-20X3</td>
        <td>100,000,000</td>
        <td>33,000,000</td>
        <td>198,700,959</td>
        <td>34,211,310</td>
      </tr>
      <tr>
        <td>31-Dec-20X4</td>
        <td>100,000,000</td>
        <td>22,000,000</td>
        <td>99,551,570</td>
        <td>22,850,610</td>
      </tr>
      <tr>
        <td>31-Dec-20X5</td>
        <td>100,000,000</td>
        <td>11,000,000</td>
        <td>(0)</td>
        <td>11,448,430</td>
      </tr>
    </table>

    <p><strong>a. 1 January 20X1 –</strong></p>
    <table>
      <tr>
        <th>Particulars</th>
        <th>(₹)</th>
        <th>(₹)</th>
      </tr>
      <tr>
        <td>Bank A/c Dr.</td>
        <td>494,129,904</td>
        <td></td>
      </tr>
      <tr>
        <td>To Loan from bank A/c</td>
        <td></td>
        <td>494,129,904</td>
      </tr>
      <tr>
        <td><em>(Being loan recorded at its fair value less transaction costs on the initial recognition date)</em></td>
        <td></td>
        <td></td>
      </tr>
    </table>

    <p><strong>b. 31 December 20X1 –</strong></p>
    <table>
      <tr>
        <th>Particulars</th>
        <th>(₹)</th>
        <th>(₹)</th>
      </tr>
      <tr>
        <td>Loan from bank A/c Dr.</td>
        <td>98,175,061</td>
        <td></td>
      </tr>
      <tr>
        <td>Interest expense (profit and loss) Dr.</td>
        <td>56,824,939</td>
        <td></td>
      </tr>
      <tr>
        <td>To Bank A/c</td>
        <td></td>
        <td>155,000,000</td>
      </tr>
      <tr>
        <td><em>(Being first instalment of loan and payment of interest accounted for as an adjustment to the amortised cost of loan)</em></td>
        <td></td>
        <td></td>
      </tr>
    </table>

    <p><strong>c. 31 December 20X2 – Before Wheel Co. Limited approached the bank –</strong></p>
    <table>
      <tr>
        <th>Particulars</th>
        <th>(₹)</th>
        <th>(₹)</th>
      </tr>
      <tr>
        <td>Interest expense (profit and loss Dr.</td>
        <td>45,534,807</td>
        <td></td>
      </tr>
      <tr>
        <td>To Loan from bank A/c</td>
        <td></td>
        <td>1,534,807</td>
      </tr>
      <tr>
        <td>To Bank A/c</td>
        <td></td>
        <td>44,000,000</td>
      </tr>
      <tr>
        <td><em>(Being loan payment of interest recorded by the Company before it approached the Bank for deferment of principal)</em></td>
        <td></td>
        <td></td>
      </tr>
    </table>

    <p>Upon receiving the new terms of the loan, Wheel Co. Limited, re-computed the carrying value of the loan by discounting the new cash flows with the original effective interest rate and comparing the same with the current carrying value of the loan. As per requirements of Ind AS 109, any change of more than 10% shall be considered a substantial modification, resulting in fresh accounting for the new loan:</p>

    <table>
      <tr>
        <th>Date</th>
        <th>Cash flows (principal)</th>
        <th>Interest outflow @ 15%</th>
        <th>Discount factor</th>
        <th>PV of cash flows</th>
      </tr>
      <tr>
        <td>31-Dec-20X2</td>
        <td>(400,000,000)</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>31-Dec-20X3</td>
        <td>40,000,000</td>
        <td>60,000,000</td>
        <td>0.8969</td>
        <td>89,686,099</td>
      </tr>
      <tr>
        <td>31-Dec-20X4</td>
        <td>40,000,000</td>
        <td>54,000,000</td>
        <td>0.8044</td>
        <td>75,609,805</td>
      </tr>
      <tr>
        <td>31-Dec-20X5</td>
        <td>40,000,000</td>
        <td>48,000,000</td>
        <td>0.7214</td>
        <td>63,483,092</td>
      </tr>
      <tr>
        <td>31-Dec-20X6</td>
        <td>40,000,000</td>
        <td>42,000,000</td>
        <td>0.6470</td>
        <td>53,053,542</td>
      </tr>
      <tr>
        <td>31-Dec-20X7</td>
        <td>40,000,000</td>
        <td>36,000,000</td>
        <td>0.5803</td>
        <td>44,100,068</td>
      </tr>
      <tr>
        <td>31-Dec-20X8</td>
        <td>40,000,000</td>
        <td>30,000,000</td>
        <td>0.5204</td>
        <td>36,429,133</td>
      </tr>
      <tr>
        <td>31-Dec-20X9</td>
        <td>40,000,000</td>
        <td>24,000,000</td>
        <td>0.4667</td>
        <td>29,871,422</td>
      </tr>
      <tr>
        <td>31-Dec-20Y0</td>
        <td>40,000,000</td>
        <td>18,000,000</td>
        <td>0.4186</td>
        <td>24,278,903</td>
      </tr>
      <tr>
        <td>31-Dec-20Y1</td>
        <td>40,000,000</td>
        <td>12,000,000</td>
        <td>0.3754</td>
        <td>19,522,235</td>
      </tr>
      <tr>
        <td>31-Dec-20Y3</td>
        <td>40,000,000</td>
        <td>6,000,000</td>
        <td>0.3367</td>
        <td>15,488,493</td>
      </tr>
    </table>

    <table>
      <tr>
        <td>PV of new contractual cash flows discounted at 11.50%</td>
        <td>451,522,791</td>
      </tr>
      <tr>
        <td>Carrying amount of loan</td>
        <td>397,489,650</td>
      </tr>
      <tr>
        <td>Difference</td>
        <td>54,033,141</td>
      </tr>
      <tr>
        <td>Percentage of carrying amount</td>
        <td>13.59%</td>
      </tr>
    </table>

    <p><em>Note: Calculation done above is on full decimal, though in the table discount factor is limited to 4 decimals.</em></p>

    <p>Considering a more than 10% change in PV of cash flows compared to the carrying value of the loan, the existing loan shall be considered to have been extinguished and the new loan shall be accounted for as a separate financial liability. The accounting entries for the same are included below:</p>

    <p><strong>d. 31 December 20X2 – accounting for extinguishment</strong></p>
    <table>
      <tr>
        <th>Particulars</th>
        <th>(₹)</th>
        <th>(₹)</th>
      </tr>
      <tr>
        <td>Loan from bank (old) A/c Dr.</td>
        <td>397,489,650</td>
        <td></td>
      </tr>
      <tr>
        <td>Loss on modification of loan (profit and loss) Dr.</td>
        <td>2,510,350</td>
        <td></td>
      </tr>
      <tr>
        <td>To Loan from bank (new) A/c</td>
        <td></td>
        <td>400,000,000</td>
      </tr>
      <tr>
        <td><em>(Being new loan accounted for at its principal amount in absence of any transaction costs directly related to such loan and correspondingly a de-recognition of existing loan)</em></td>
        <td></td>
        <td></td>
      </tr>
    </table>

    <p><strong>e. 31 December 20X3</strong></p>
    <table>
      <tr>
        <th>Particulars</th>
        <th>(₹)</th>
        <th>(₹)</th>
      </tr>
      <tr>
        <td>Loan from bank A/c Dr.</td>
        <td>40,000,000</td>
        <td></td>
      </tr>
      <tr>
        <td>Interest expense (profit and loss) Dr.</td>
        <td>60,000,000</td>
        <td></td>
      </tr>
      <tr>
        <td>To Bank A/c</td>
        <td></td>
        <td>100,000,000</td>
      </tr>
      <tr>
        <td><em>(Being first instalment of the new loan and payment of interest accounted for as an adjustment to the amortised cost of loan)</em></td>
        <td></td>
        <td></td>
      </tr>
    </table>
  `
},
{
  "question_id": "FR_MTPSEP24S2_2B",
  "source": "ICAI MTP September 2024 Series II",
  "chapter_name": "Presentation of Financial Statements / Ind AS 1",
  "placement": 2,
  "marks": 4,
  "question_html": "\n    <p>An entity manufactures passenger vehicles. The time between purchasing of underlying raw materials to manufacture the passenger vehicles and the date the entity completes the production and delivers to its customers is 11 months. Customers settle the dues after a period of 8 months from the date of sale.</p>\n    <ol type=\"i\">\n      <li>Will the inventory and the trade receivables be current in nature?</li>\n      <li>Assuming that the production time was say 15 months and the time lag between the date of sale and collection from customers is 13 months, will the answer be different?</li>\n    </ol>\n  ",
  "solution_html": "\n    <p>Inventory and debtors need to be classified in accordance with the requirement of Ind AS 1, which provides that an asset shall be classified as current if an entity expects to realise the same or intends to sell or consume it in its normal operating cycle.</p>\n    <ol type=\"a\">\n      <li>In this case, time lag between the purchase of inventory and its realisation into cash is 19 months [11 months + 8 months]. Both inventory and the debtors would be classified as current if the entity expects to realise these assets in its normal operating cycle.</li>\n      <li>No, the answer will be the same as the classification of debtors and inventory depends on the expectation of the entity to realise the same in the normal operating cycle. In this case, time lag between the purchase of inventory and its realisation into cash is 28 months [15 months + 13 months]. Both inventory and debtors would be classified as current if the entity expects to realise these assets in the normal operating cycle.</li>\n    </ol>\n  "
},
{
  question_id: "FR_MTPSEP24II_3A",
  source: "ICAI MTP September 2024 Series II",
  chapter_name: "Ind AS 105 - Non-current Assets Held for Sale and Discontinued Operations",
  placement: 3 ,
  marks: 8,
  question_html: `

    <p>
      On 1st September, 20X1, entity X plans to sell a group of assets and
      liabilities, which is classified as a disposal group.
    </p>

    <p>
      On 31st October, 20X1, the Board of Directors approves and becomes
      committed to the plan to sell the manufacturing unit by entering into
      a firm purchase commitment with entity Y.
    </p>

    <p>
      However, since the manufacturing unit is regulated, the approval from
      the regulator is needed for sale. The approval from the regulator is
      customary and highly probable to be received by
      <strong>30th February, 20X2</strong> and the sale is expected to be
      completed by <strong>30th June, 20X2</strong>.
    </p>

    <p>
      The assets and liabilities attributable to this manufacturing unit are
      as under:
    </p>

    <table>
      <tr>
        <th rowspan="2">Particulars</th>
        <th>Carrying value as on</th>
        <th>Carrying value as on</th>
      </tr>
      <tr>
        <th>31st March, 20X1</th>
        <th>31st October, 20X1</th>
      </tr>
      <tr>
        <td>Goodwill</td>
        <td>500</td>
        <td>500</td>
      </tr>
      <tr>
        <td>Plant and Machinery</td>
        <td>1,000</td>
        <td>900</td>
      </tr>
      <tr>
        <td>Building</td>
        <td>2,000</td>
        <td>1,850</td>
      </tr>
      <tr>
        <td>Debtors</td>
        <td>850</td>
        <td>1,050</td>
      </tr>
      <tr>
        <td>Inventory</td>
        <td>700</td>
        <td>400</td>
      </tr>
      <tr>
        <td>Creditors</td>
        <td>(300)</td>
        <td>(250)</td>
      </tr>
      <tr>
        <td>Loans</td>
        <td>(2,000)</td>
        <td>(1,850)</td>
      </tr>
      <tr>
        <th>Total</th>
        <th>2,750</th>
        <th>2,600</th>
      </tr>
    </table>

    <p>
      The fair value of the manufacturing unit as on
      <strong>31st March, 20X1</strong> is <strong>₹ 2,000</strong> and as on
      <strong>31st October, 20X1</strong> is <strong>₹ 1,850</strong>.
      The cost to sell is <strong>₹ 100</strong> on both these dates.
    </p>

    <p>
      The disposal group is not sold at the period end i.e.,
      <strong>31st March, 20X2</strong>. The fair value as on
      <strong>31st March, 20X2</strong> is lower than the carrying value of
      the disposal group as on that date.
    </p>

    <p>Answer the following:</p>

    <ol>
      <li>
        Assess whether the manufacturing unit can be classified as held for
        sale and reasons therefor. If yes, then at which date?
      </li>
      <li>
        Measure the manufacturing unit on the date of classification as held
        for sale.
      </li>
      <li>
        Measure the manufacturing unit at the end of the financial year.
      </li>
    </ol>

  `,
  solution_html: `

    <p><strong>1. Assessing whether the manufacturing unit can be classified as held for sale</strong></p>

    <p>
      The manufacturing unit can be classified as held for sale due to the
      following reasons:
    </p>

    <ol type="i">
      <li>
        The disposal group is available for immediate sale and in its present
        condition. The regulatory approval is customary and it is expected to
        be received in one year. The date at which the disposal group must be
        classified as held for sale is <strong>31st October, 20X1</strong>,
        i.e., the date at which management becomes committed to the plan.
      </li>

      <li>
        The sale is highly probable as the appropriate level of management,
        i.e., Board of Directors in this case, have approved the plan.
      </li>

      <li>
        A firm purchase agreement has been entered with the buyer.
      </li>

      <li>
        The sale is expected to be completed by
        <strong>30th June, 20X2</strong>, i.e., within one year from the date
        of classification.
      </li>
    </ol>

    <p><strong>2. Measurement of the manufacturing unit as on the date of classification as held for sale</strong></p>

    <p>
      <strong>Step 1:</strong> Immediately before the initial classification of
      the asset (or disposal group) as held for sale, the carrying amounts of
      the asset (or all the assets and liabilities in the group) shall be
      measured in accordance with applicable Ind AS.
    </p>

    <p>
      The carrying value of the disposal group as on
      <strong>31st October, 20X1</strong> is determined at
      <strong>₹ 2,600</strong>. The difference between the carrying value as
      on 31st March, 20X1 and 31st October, 20X1 is accounted for as per the
      relevant Ind AS.
    </p>

    <p>
      <strong>Step 2:</strong> An entity shall measure a non-current asset (or
      disposal group) classified as held for sale at the
      <strong>lower of its carrying amount and fair value less costs to sell.</strong>
    </p>

    <p>
      The fair value less cost to sell of the disposal group as on
      31st October, 20X1 is <strong>₹ 1,750</strong>
      (₹ 1,850 − ₹ 100). This is lower than the carrying value of
      <strong>₹ 2,600</strong>.
    </p>

    <p>
      Thus, an impairment loss needs to be recognised and allocated first
      towards goodwill and thereafter pro-rata between non-current assets of
      the disposal group which are within the scope of Ind AS 105 based on
      their carrying value.
    </p>

    <table>
      <tr>
        <th>Particulars</th>
        <th>Carrying value (31st Oct., 20X1)</th>
        <th>Impairment</th>
        <th>Carrying value as per Ind AS 105 (31st Oct., 20X1)</th>
      </tr>
      <tr>
        <td>Goodwill</td>
        <td>500</td>
        <td>(500)</td>
        <td>-</td>
      </tr>
      <tr>
        <td>Plant and Machinery</td>
        <td>900</td>
        <td>(115)</td>
        <td>785</td>
      </tr>
      <tr>
        <td>Building</td>
        <td>1,850</td>
        <td>(235)</td>
        <td>1,615</td>
      </tr>
      <tr>
        <td>Debtors</td>
        <td>1,050</td>
        <td>-</td>
        <td>1,050</td>
      </tr>
      <tr>
        <td>Inventory</td>
        <td>400</td>
        <td>-</td>
        <td>400</td>
      </tr>
      <tr>
        <td>Creditors</td>
        <td>(250)</td>
        <td>-</td>
        <td>(250)</td>
      </tr>
      <tr>
        <td>Loans</td>
        <td>(1,850)</td>
        <td>-</td>
        <td>(1,850)</td>
      </tr>
      <tr>
        <th>Total</th>
        <th>2,600</th>
        <th>(850)</th>
        <th>1,750</th>
      </tr>
    </table>

    <p><strong>3. Measurement of the manufacturing unit at the end of the financial year</strong></p>

    <p>
      The measurement as at the end of the financial year shall be on similar
      lines as done above.
    </p>

    <p>
      The assets and liabilities in the disposal group not within the scope
      of this Standard are measured as per the respective Standards.
    </p>

    <p>
      The fair value less cost to sell of the disposal group as a whole is
      calculated. This fair value less cost to sell as at the year-end shall
      be compared with the carrying value as at the date of classification as
      held for sale.
    </p>

    <p>
      It is provided that the fair value as on the year end is less than the
      carrying amount as on that date. Thus, the impairment loss shall be
      allocated in the same way between the assets of the disposal group
      falling within the scope of this Standard as shown above.
    </p>

  `,
},
{
  question_id: "FR_MTPSEP24II_3B",
  source: "ICAI MTP September 2024 Series II",
  chapter_name: "Ind AS 21 - The Effects of Changes in Foreign Exchange Rates",
  placement: 3,
  marks: 6,
  question_html: `

    <p>
      On 30th January, 20X1, A Ltd. purchased a machinery for
      <strong>$ 5,000</strong> from USA supplier on credit basis.
      A Ltd.’s functional currency is Rupees.
    </p>

    <p>
      The exchange rate on the date of transaction is
      <strong>1 $ = ₹ 60</strong>.
    </p>

    <p>
      The fair value of the machinery determined on
      <strong>31st March, 20X1</strong> is
      <strong>$ 5,500</strong>.
    </p>

    <p>
      The exchange rate on <strong>31st March, 20X1</strong> is
      <strong>1 $ = ₹ 65</strong>.
    </p>

    <p>
      The payment to overseas supplier done on
      <strong>31st March, 20X2</strong> and the exchange rate on
      <strong>31st March, 20X2</strong> is
      <strong>1 $ = ₹ 67</strong>.
    </p>

    <p>
      The fair value of the machinery remains unchanged for the year ended
      on <strong>31st March, 20X2</strong>.
    </p>

    <p>
      Tax rate is <strong>30%</strong>.
    </p>

    <p>
      A Ltd. follows revaluation method in respect of Plant & Machinery.
    </p>

    <p>
      Pass the Journal entries for the year ended on
      <strong>31st March, 20X1</strong> and year
      <strong>20X2</strong> according to Ind AS 21.
    </p>

  `,
  solution_html: `

    <p><strong>Journal Entries</strong></p>

    <p><strong>Purchase of Machinery on credit basis on 30th January, 20X1:</strong></p>

    <table>
      <tr>
        <th>Particulars</th>
        <th>Dr. (₹)</th>
        <th>Cr. (₹)</th>
      </tr>
      <tr>
        <td>
          Machinery A/c ($ 5,000 × ₹ 60) <br>
          Dr.
          <br><br>
          To Creditors-Machinery A/c
          <br><br>
          <em>(Initial transaction will be recorded at exchange rate on the date of transaction)</em>
        </td>
        <td>3,00,000</td>
        <td>3,00,000</td>
      </tr>
    </table>

    <p><strong>Exchange difference arising on translating monetary item on 31st March, 20X1:</strong></p>

    <table>
      <tr>
        <th>Particulars</th>
        <th>Dr. (₹)</th>
        <th>Cr. (₹)</th>
      </tr>
      <tr>
        <td>
          Profit & Loss A/c
          [($ 5,000 × ₹ 65) – ($ 5,000 × ₹ 60)] <br>
          Dr.
          <br><br>
          To Creditors-Machinery A/c
        </td>
        <td>25,000</td>
        <td>25,000</td>
      </tr>

      <tr>
        <td>
          Machinery A/c <br>
          Dr.
          <br><br>
          To Revaluation Surplus (OCI)
          <br><br>
          <em>
          [Being Machinery revalued to USD 5,500;
          (₹ 60 × ($ 5,500 - $ 5,000))]
          </em>
        </td>
        <td>30,000</td>
        <td>30,000</td>
      </tr>

      <tr>
        <td>
          Machinery A/c <br>
          Dr.
          <br><br>
          To Revaluation Surplus (OCI)
          <br><br>
          <em>
          (Being Machinery measured at the exchange rate on 31.3.20X1
          [$ 5,500 × (₹ 65 - ₹ 60)])
          </em>
        </td>
        <td>27,500</td>
        <td>27,500</td>
      </tr>

      <tr>
        <td>
          Revaluation Surplus (OCI) <br>
          Dr.
          <br><br>
          To Deferred Tax Liability
          <br><br>
          <em>
          (DTL created @ of 30% of the total OCI amount)
          </em>
        </td>
        <td>17,250</td>
        <td>17,250</td>
      </tr>
    </table>

    <p><strong>Exchange difference arising on translating monetary item and settlement of creditors on 31st March, 20X2:</strong></p>

    <table>
      <tr>
        <th>Particulars</th>
        <th>Dr. (₹)</th>
        <th>Cr. (₹)</th>
      </tr>

      <tr>
        <td>
          Creditors-Machinery A/c
          ($ 5,000 × ₹ 65) <br>
          Dr.
          <br><br>
          Profit & Loss A/c
          [(5,000 × (₹ 67 - ₹ 65))] <br>
          Dr.
          <br><br>
          To Bank A/c
        </td>
        <td>
          3,25,000
          <br><br>
          10,000
        </td>
        <td>
          3,35,000
        </td>
      </tr>

      <tr>
        <td>
          Machinery A/c
          [{$ 5,500 × (₹ 67 - ₹ 65)}] <br>
          Dr.
          <br><br>
          To Revaluation Surplus (OCI)
        </td>
        <td>11,000</td>
        <td>11,000</td>
      </tr>

      <tr>
        <td>
          Revaluation Surplus (OCI) <br>
          Dr.
          <br><br>
          To Deferred Tax Liability
          <br><br>
          <em>
          (DTL created @ of 30% of the total OCI amount)
          </em>
        </td>
        <td>3,300</td>
        <td>3,300</td>
      </tr>

    </table>

  `,
},
{
  question_id: "FR_MTPSEP24II_4A",
  source: "ICAI MTP September 2024 Series II",
  chapter_name: "Ind AS 16 - Property, Plant and Equipment",
  placement: 4,
  marks: 6,
  question_html: `<p>A Ltd. purchased some Property, Plant and Equipment on <strong>1st April, 20X1</strong>, and estimated their useful lives for the purpose of financial statements prepared on the basis of Ind AS. Following were the original cost, and useful life of the various components of property, plant, and equipment assessed on 1st April, 20X1:</p>

<table>
<tr><th>Property, Plant and Equipment</th><th>Original Cost</th><th>Estimated useful life</th></tr>
<tr><td>Buildings</td><td>₹ 15,000,000</td><td>15 years</td></tr>
<tr><td>Plant and machinery</td><td>₹ 10,000,000</td><td>10 years</td></tr>
<tr><td>Furniture and fixtures</td><td>₹ 3,500,000</td><td>7 years</td></tr>
</table>

<p>A Ltd. uses the straight-line method of depreciation.</p>

<p>On <strong>1st April, 20X4</strong>, the entity reviewed the following useful lives of the property, plant, and equipment through an external valuation expert:</p>

<table>
<tr><td>Buildings</td><td>10 years</td></tr>
<tr><td>Plant and machinery</td><td>7 years</td></tr>
<tr><td>Furniture and fixtures</td><td>5 years</td></tr>
</table>

<p>There were no salvage values for the three components of the property, plant, and equipment either initially or at the time the useful lives were revised.</p>

<p><strong>Examine the impact of revaluation of useful life on the Statement of Profit and Loss for the year ending 31st March, 20X5.</strong></p>`,

  solution_html: `<p>The annual depreciation charges prior to the change in useful life were:</p>

<table>
<tr><th>Asset</th><th>Calculation</th><th>Depreciation</th></tr>
<tr><td>Buildings</td><td>₹ 1,50,00,000 ÷ 15</td><td>₹ 10,00,000</td></tr>
<tr><td>Plant and machinery</td><td>₹ 1,00,00,000 ÷ 10</td><td>₹ 10,00,000</td></tr>
<tr><td>Furniture and fixtures</td><td>₹ 35,00,000 ÷ 7</td><td>₹ 5,00,000</td></tr>
<tr><th colspan="2">Total (A)</th><th>₹ 25,00,000</th></tr>
</table>

<p>The revised annual depreciation for the year ending <strong>31st March, 20X5</strong> would be:</p>

<table>
<tr><th>Asset</th><th>Calculation</th><th>Depreciation</th></tr>
<tr><td>Buildings</td><td>[₹ 1,50,00,000 – (₹ 10,00,000 × 3)] ÷ 10</td><td>₹ 12,00,000</td></tr>
<tr><td>Plant and machinery</td><td>[₹ 1,00,00,000 – (₹ 10,00,000 × 3)] ÷ 7</td><td>₹ 10,00,000</td></tr>
<tr><td>Furniture and fixtures</td><td>[₹ 35,00,000 – (₹ 5,00,000 × 3)] ÷ 5</td><td>₹ 4,00,000</td></tr>
<tr><th colspan="2">Total (B)</th><th>₹ 26,00,000</th></tr>
</table>

<p>The impact on Statement of Profit and Loss for the year ending <strong>31st March, 20X5</strong> = <strong>₹ 26,00,000 – ₹ 25,00,000 = ₹ 1,00,000</strong>.</p>

<p>This is a change in accounting estimate which is adjusted prospectively in the period in which the estimate is amended and, if relevant, to future periods if they are also affected.</p>

<p>Accordingly, from 20X4-20X5 onward, excess of <strong>₹ 1,00,000</strong> will be charged in the Statement of Profit and Loss every year till the time there is any further revision.</p>`,
},
{
  question_id: "FR_MTPSEP24II_4B",
  source: "ICAI MTP September 2024 Series II",
  chapter_name: "Ind AS 102 - Share-based Payment",
  placement: 4 ,
  marks: 8,
  question_html: `<p>P Ltd. granted <strong>400 stock appreciation rights (SAR)</strong> each to <strong>75 employees</strong> on <strong>1st April 20X1</strong> with a fair value of <strong>₹ 200</strong>. The terms of the award require the employee to provide service for <strong>four years</strong> in order to earn the award.</p>

<p>The fair value of each SAR at each reporting date is as follows:</p>

<table>
<tr><th>Date</th><th>Fair Value</th></tr>
<tr><td>31st March 20X2</td><td>₹ 210</td></tr>
<tr><td>31st March 20X3</td><td>₹ 220</td></tr>
<tr><td>31st March 20X4</td><td>₹ 215</td></tr>
<tr><td>31st March 20X5</td><td>₹ 218</td></tr>
</table>

<p><strong>What would be the difference if at the end of the second year of service (i.e. at 31st March 20X3), P Ltd. modifies the terms of the award to require only three years of service?</strong></p>`,

  solution_html: `<p><strong>Journal entries in the books of P Ltd. (without modification of service period of Stock Appreciation Rights)</strong></p>

<table>
<tr><th>Date</th><th>Particulars</th><th>Debit (₹ in lakhs)</th><th>Credit (₹ in lakhs)</th></tr>

<tr>
<td>31.03.20X2</td>
<td>Profit and Loss Account Dr.<br>To Liability against SARs<br><em>(Being expenses liability for stock appreciation rights recognised)</em></td>
<td>15.75</td>
<td>15.75</td>
</tr>

<tr>
<td>31.03.20X3</td>
<td>Profit and Loss Account Dr.<br>To Liability for SARs<br><em>(Being expenses liability for stock appreciation rights recognised)</em></td>
<td>17.25</td>
<td>17.25</td>
</tr>

<tr>
<td>31.03.20X4</td>
<td>Profit and Loss Account Dr.<br>To Liability for SARs<br><em>(Being expenses liability for stock appreciation rights recognised)</em></td>
<td>15.38</td>
<td>15.38</td>
</tr>

<tr>
<td>31.03.20X5</td>
<td>Profit and Loss Account Dr.<br>To Liability for SARs<br><em>(Being expenses liability for stock appreciation rights recognised)</em></td>
<td>17.02</td>
<td>17.02</td>
</tr>
</table>

<p><strong>Journal entries in the books of P Ltd. (with modification of service period of Stock Appreciation Rights)</strong></p>

<table>
<tr><th>Date</th><th>Particulars</th><th>Debit (₹ in lakhs)</th><th>Credit (₹ in lakhs)</th></tr>

<tr>
<td>31.03.20X2</td>
<td>Profit and Loss Account Dr.<br>To Liability for SARs<br><em>(Being expenses liability for stock appreciation rights recognised)</em></td>
<td>15.75</td>
<td>15.75</td>
</tr>

<tr>
<td>31.03.20X3</td>
<td>Profit and Loss Account Dr.<br>To Liability for SARs<br><em>(Being expenses liability for stock appreciation rights recognised)</em></td>
<td>28.25</td>
<td>28.25</td>
</tr>

<tr>
<td>31.03.20X4</td>
<td>Profit and Loss Account Dr.<br>To Liability for SARs<br><em>(Being expenses liability for stock appreciation rights recognised)</em></td>
<td>20.50</td>
<td>20.50</td>
</tr>
</table>

<p><strong>Working Notes:</strong></p>

<p><strong>Calculation of expenses for issue of Stock Appreciation Rights without modification of service period</strong></p>

<p><strong>For the year ended 31st March 20X2</strong></p>
<p>= ₹ 210 × 400 awards × 75 employees × 1 year / 4 years of service</p>
<p>= <strong>₹ 15,75,000</strong></p>

<p><strong>For the year ended 31st March 20X3</strong></p>
<p>= ₹ 220 × 400 awards × 75 employees × 2 years / 4 years of service − ₹ 15,75,000 previously recognised</p>
<p>= ₹ 33,00,000 − ₹ 15,75,000 = <strong>₹ 17,25,000</strong></p>

<p><strong>For the year ended 31st March 20X4</strong></p>
<p>= ₹ 215 × 400 awards × 75 employees × 3 years / 4 years of service − ₹ 33,00,000 previously recognised</p>
<p>= ₹ 48,37,500 − ₹ 33,00,000 = <strong>₹ 15,37,500</strong></p>

<p><strong>For the year ended 31st March 20X5</strong></p>
<p>= ₹ 218 × 400 awards × 75 employees × 4 years / 4 years of service − ₹ 48,37,500 previously recognised</p>
<p>= ₹ 65,40,000 − ₹ 48,37,500 = <strong>₹ 17,02,500</strong></p>

<p><strong>Calculation of expenses for issue of Stock Appreciation Rights with modification of service period</strong></p>

<p><strong>For the year ended 31st March 20X2</strong></p>
<p>= ₹ 210 × 400 awards × 75 employees × 1 year / 4 years of service</p>
<p>= <strong>₹ 15,75,000</strong></p>

<p><strong>For the year ended 31st March 20X3</strong></p>
<p>= ₹ 220 × 400 awards × 75 employees × 2 years / 3 years of service − ₹ 15,75,000 previously recognised</p>
<p>= ₹ 44,00,000 − ₹ 15,75,000 = <strong>₹ 28,25,000</strong></p>

<p><strong>For the year ended 31st March 20X4</strong></p>
<p>= ₹ 215 × 400 awards × 75 employees × 3 years / 3 years of service − ₹ 44,00,000 previously recognised</p>
<p>= ₹ 64,50,000 − ₹ 44,00,000 = <strong>₹ 20,50,000</strong>.</p>`,
},

{
  question_id: "FR_MTPSEP24II_5A",
  source: "ICAI MTP September 2024 Series II",
  chapter_name: "Ind AS 115 - Revenue from Contracts with Customers",
  placement: 5,
  marks: 6,

  question_html: `<p>AST Limited enters into a contract with a customer to build a manufacturing facility. The entity determines that the contract contains <strong>one performance obligation satisfied over time.</strong></p>

<p>Construction is scheduled to be completed by the end of the <strong>36th month</strong> for an agreed-upon price of <strong>₹ 25 crore</strong>.</p>

<p>The entity has the opportunity to earn a performance bonus for early completion as follows:</p>

<ul>
<li>15% bonus of the contract price if completed by the 30th month (25% likelihood)</li>
<li>10% bonus if completed by the 32nd month (40% likelihood)</li>
<li>5% bonus if completed by the 34th month (15% likelihood)</li>
</ul>

<p>In addition to the potential performance bonus for early completion, AST Limited is entitled to a <strong>quality bonus of ₹ 2 crore</strong> if a health and safety inspector assigns the facility a gold star rating as defined by the agency in the terms of the contract. AST Limited concludes that it is <strong>60% likely</strong> that it will receive the quality bonus.</p>

<p><strong>Determine the transaction price.</strong></p>`,

  solution_html: `<p><strong>In determining the transaction price, AST Limited separately estimates variable consideration for each element of variability i.e. the early completion bonus and the quality bonus.</strong></p>

<p>AST Limited decides to use the <strong>expected value method</strong> to estimate the variable consideration associated with the early completion bonus because there is a range of possible outcomes, and the entity has experience with a large number of similar contracts that provide a reasonable basis to predict future outcomes. Therefore, the entity expects this method to best predict the amount of variable consideration associated with the early completion bonus.</p>

<p><strong>Expected value of Early Completion Bonus:</strong></p>

<table>
<tr>
<th>Bonus %</th>
<th>Amount of Bonus (₹ crore)</th>
<th>Probability</th>
<th>Probability-weighted Amount (₹ crore)</th>
</tr>

<tr>
<td>15%</td>
<td>3.75</td>
<td>25%</td>
<td>0.9375</td>
</tr>

<tr>
<td>10%</td>
<td>2.50</td>
<td>40%</td>
<td>1.0000</td>
</tr>

<tr>
<td>5%</td>
<td>1.25</td>
<td>15%</td>
<td>0.1875</td>
</tr>

<tr>
<td>0%</td>
<td>-</td>
<td>20%</td>
<td>-</td>
</tr>

<tr>
<th colspan="3">Expected Early Completion Bonus</th>
<th>₹ 2.125 crore</th>
</tr>
</table>

<p>AST Limited decides to use the <strong>most likely amount method</strong> to estimate the variable consideration associated with the potential quality bonus because there are only two possible outcomes (₹ 2 crore or Nil) and this method would best predict the amount of consideration associated with the quality bonus.</p>

<p>AST Limited believes the most likely amount of the quality bonus is <strong>₹ 2 crore.</strong></p>

<p><strong>Transaction Price:</strong></p>

<table>
<tr>
<th>Particulars</th>
<th>Amount (₹ crore)</th>
</tr>

<tr>
<td>Fixed Contract Price</td>
<td>25.000</td>
</tr>

<tr>
<td>Add: Expected Early Completion Bonus</td>
<td>2.125</td>
</tr>

<tr>
<td>Add: Quality Bonus</td>
<td>2.000</td>
</tr>

<tr>
<th>Total Transaction Price</th>
<th>29.125</th>
</tr>
</table>

<p><strong>Therefore, the transaction price is ₹ 29.125 crore.</strong></p>`
},
{
  question_id: "FR_MTPSEP24II_5B",
  source: "ICAI MTP September 2024 Series II",
  chapter_name: "Ind AS 38 - Intangible Assets; Ind AS 105 - Non-current Assets Held for Sale and Discontinued Operations; Ind AS 36 - Impairment of Assets; Ind AS 10 - Events after the Reporting Period",
  placement: 5 ,
  marks: 4,

  question_html: `<p><strong>Mumbai Challengers Ltd.</strong>, a listed entity, is a sports organization owning several cricket and hockey teams. The issues below pertain to the reporting period ending <strong>31st March 20X2</strong>.</p>

<p>Mumbai Challengers Ltd. acquires and sells players’ registrations on a regular basis. For a player to play for its team, Mumbai Challengers Ltd. must purchase registrations for that player. These player registrations are contractual obligations between the player and the company. The costs of acquiring player registrations include transfer fees, league levy fees, and player agents’ fees incurred by the club.</p>

<p>At the end of each season, which also happens to be the reporting period end for Mumbai Challengers Ltd., the club reviews its contracts with the players and makes decisions as to whether they wish to sell/transfer any players’ registrations. The company actively markets these registrations by circulating with other clubs a list of players’ registrations and their estimated selling price.</p>

<p>Players’ registrations are also sold during the season, often with performance conditions attached. In some cases, it becomes clear that a player will not play for the club again because of, for example, a player sustaining a career-threatening injury or being permanently removed from the playing squad for any other reason.</p>

<p>The playing registrations of certain players were sold after the year end for total proceeds, net of associated costs, of <strong>₹ 175 crores</strong>. These registrations had a <strong>net book value of ₹ 49 crores</strong>.</p>

<p><strong>Mumbai Challengers Ltd. seeks your advice on the treatment of the acquisition, extension, review and sale of players’ registrations in the circumstances outlined above.</strong></p>`,

  solution_html: `<p><strong>Players' Registrations</strong></p>

<p><strong>Acquisition</strong></p>

<p>As per <strong>Ind AS 38 – Intangible Assets</strong>, the costs associated with the acquisition of players' registrations should be capitalised at the amount of cash or cash equivalents paid or the fair value of other consideration given to acquire such registrations.</p>

<p>The costs capitalised include:</p>

<ul>
<li>Transfer fees</li>
<li>League levy fees</li>
<li>Player agents' fees</li>
<li>Other directly attributable costs, if any</li>
</ul>

<p>The capitalised amount should be fully amortised over the period covered by the player's contract.</p>

<p><strong>Sale of Registrations</strong></p>

<p>Player registrations should be classified as <strong>Assets Held for Sale</strong> under <strong>Ind AS 105 – Non-current Assets Held for Sale and Discontinued Operations</strong> when their carrying amount is expected to be recovered principally through a sale transaction and the sale is highly probable.</p>

<p>A sale is considered highly probable when:</p>

<ul>
<li>The registrations are actively marketed for sale at a reasonable price.</li>
<li>Management is committed to a plan to sell.</li>
<li>The asset is available for immediate sale.</li>
<li>An active programme to locate a buyer is in place.</li>
<li>It is unlikely that the plan will be significantly changed or withdrawn.</li>
</ul>

<p>To satisfy these conditions, it is prudent to classify only those registrations as held for sale for which unconditional offers have been received before the reporting date.</p>

<p>Once classified as held for sale, the player registrations should be measured at the <strong>lower of carrying amount and fair value less costs to sell</strong>, after first measuring them under Ind AS 38.</p>

<p>Profit or loss on sale of player registrations is computed as the difference between the fair value of consideration receivable (net of transaction costs) and the carrying amount of the registrations.</p>

<p>If a portion of the consideration is contingent upon future performance conditions, such contingent consideration should be recognised in the Statement of Profit and Loss only when those conditions are satisfied.</p>

<p>The players' registrations sold after the reporting date for <strong>₹ 175 crores</strong>, having a carrying amount of <strong>₹ 49 crores</strong>, should be disclosed as a <strong>non-adjusting event</strong> in accordance with <strong>Ind AS 10 – Events after the Reporting Period</strong>.</p>

<p><strong>Impairment Review</strong></p>

<p>Under <strong>Ind AS 36 – Impairment of Assets</strong>, player registrations should be tested annually for impairment.</p>

<p>An asset is impaired when its carrying amount exceeds its recoverable amount, being the higher of:</p>

<ul>
<li>Fair value less costs to sell; and</li>
<li>Value in use.</li>
</ul>

<p>Normally, an individual player cannot generate independent cash flows and therefore forms part of the respective team's Cash-Generating Unit (CGU).</p>

<p>However, where it becomes evident that a player will not play for the club again, such as due to a career-threatening injury or permanent removal from the squad, the carrying amount of that player's registration should be compared with its estimated fair value less costs to sell. Any excess carrying amount should be recognised as an <strong>impairment loss in the Statement of Profit and Loss.</strong></p>`
},
{
  question_id: "FR_MTPSEP24II_5C",
  source: "ICAI MTP September 2024 Series II",
  chapter_name: "Code of Ethics – Fundamental Principles of Ethics",
  placement: 5 ,
  marks: 4,

  question_html: `<p><strong>Explain the five fundamental principles of ethics for Chartered Accountants.</strong></p>`,

  solution_html: `<p>The <strong>five fundamental principles of ethics</strong> for Chartered Accountants are:</p>

<ul>
<li><strong>Integrity</strong> – To be straightforward and honest in all professional and business relationships.</li>

<li><strong>Objectivity</strong> – Not to compromise professional or business judgments because of bias, conflict of interest or undue influence of others.</li>

<li><strong>Professional Competence and Due Care</strong> – To:
  <ol type="i">
    <li>Attain and maintain professional knowledge and skill at the level required to ensure that a client or employing organization receives competent professional service, based on current technical and professional standards and relevant legislation; and</li>
    <li>Act diligently and in accordance with applicable technical and professional standards.</li>
  </ol>
</li>

<li><strong>Confidentiality</strong> – To respect the confidentiality of information acquired as a result of professional and business relationships.</li>

<li><strong>Professional Behaviour</strong> – To comply with relevant laws and regulations and avoid any conduct that the Chartered Accountant knows or should know might discredit the profession.</li>
</ul>`
},
{
  question_id: "FR_MTPSEP24II_6A",
  source: "ICAI MTP September 2024 Series II",
  chapter_name: "Ind AS 113 – Fair Value Measurement",
  placement: 6 ,
  marks: 5,

  question_html: `<p><strong>(i)</strong> Entity A owns <strong>250 ordinary shares</strong> in company XYZ, an unquoted company. Company XYZ has a total share capital of <strong>5,000 shares</strong> with nominal value of <strong>₹ 10</strong>. Entity XYZ’s after-tax maintainable profits are estimated at <strong>₹ 70,000 per year</strong>. An appropriate <strong>price/earnings ratio</strong> determined from published industry data is <strong>15</strong> (before lack of marketability adjustment). Entity A’s management estimates that the <strong>discount for the lack of marketability</strong> of company XYZ’s shares and restrictions on their transfer is <strong>20%</strong>. Entity A values its holding in company XYZ’s shares based on earnings.</p>

<p><strong>Determine the fair value of Entity A’s investment in XYZ’s shares.</strong></p>

<p><strong>(ii)</strong> Based on the facts given in the aforementioned part (i), assume that Entity A estimates the fair value of the shares it owns in company XYZ using a <strong>net asset valuation technique</strong>. The fair value of company XYZ’s net assets including those recognised in its balance sheet and those that are not recognised is <strong>₹ 8,50,000</strong>.</p>

<p><strong>Determine the fair value of Entity A’s investment in XYZ’s shares.</strong></p>`,

  solution_html: `<p><strong>(i) Earnings-based valuation</strong></p>

<table border="1" cellspacing="0" cellpadding="6">
<tr>
<th>Particulars</th>
<th>Amount</th>
</tr>
<tr>
<td>Entity XYZ’s after-tax maintainable profits (A)</td>
<td>₹ 70,000</td>
</tr>
<tr>
<td>Price/Earnings ratio (B)</td>
<td>15</td>
</tr>
<tr>
<td>Adjusted discount factor (C) = (1 − 20%)</td>
<td>0.80</td>
</tr>
<tr>
<td><strong>Value of Company XYZ = (A × B × C)</strong></td>
<td><strong>₹ 8,40,000</strong></td>
</tr>
</table>

<p>Value per share = ₹ 8,40,000 ÷ 5,000 shares = <strong>₹ 168</strong>.</p>

<p>Therefore, the fair value of Entity A’s investment = <strong>250 shares × ₹ 168 = ₹ 42,000.</strong></p>

<p><strong>(ii) Net asset valuation technique</strong></p>

<p>Value per share = ₹ 8,50,000 ÷ 5,000 shares = <strong>₹ 170</strong>.</p>

<p>Therefore, the fair value of Entity A’s investment = <strong>250 shares × ₹ 170 = ₹ 42,500.</strong></p>`
},
{
  question_id: "FR_MTPSEP24II_6B",
  source: "ICAI MTP September 2024 Series II",
  chapter_name: "Ind AS Roadmap; Ind AS 109 - Financial Instruments (Derecognition)",
  placement: 6 ,
  marks: 5,

  question_html: `<p><strong>Answer either of the following:</strong></p>

<p><strong>(i)</strong> Following is a snapshot of the audited Balance Sheet of <strong>Company A</strong> as at <strong>31st March, 2014</strong>. Company A’s equity shares are listed on the Bombay Stock Exchange since 2010.</p>

<table border="1" cellspacing="0" cellpadding="5">
<tr>
<th>Liabilities</th>
<th>₹ in crores</th>
<th>Assets</th>
<th>₹ in crores</th>
</tr>
<tr>
<td>Equity Share Capital</td>
<td>160</td>
<td>Fixed Assets</td>
<td>455</td>
</tr>
<tr>
<td>Securities Premium</td>
<td>200</td>
<td>Investments</td>
<td>200</td>
</tr>
<tr>
<td>General Reserve</td>
<td>150</td>
<td>Current Assets</td>
<td>50</td>
</tr>
<tr>
<td>Revaluation Reserve</td>
<td>40</td>
<td>Miscellaneous Expenditure not written off</td>
<td>80</td>
</tr>
<tr>
<td>Profit and Loss Account</td>
<td>75</td>
<td></td>
<td></td>
</tr>
<tr>
<td>Liabilities</td>
<td>160</td>
<td></td>
<td></td>
</tr>
<tr>
<th>Total</th>
<th>785</th>
<th>Total</th>
<th>785</th>
</tr>
</table>

<p>As per the Ind AS roadmap, identify the phase in which Company A falls. Will your answer change if Company A is an unlisted company?</p>

<p><strong>OR</strong></p>

<p><strong>(ii)</strong> As at <strong>31st March 20X2</strong>, <strong>Natasha Ltd.</strong> carried trade receivables of <strong>₹ 280 crores</strong> in its Balance Sheet. At that date, Natasha Ltd. entered into a factoring agreement with <strong>Samantha Ltd.</strong>, a financial institution, according to which it transferred the trade receivables in exchange for an immediate cash payment of <strong>₹ 250 crores</strong>.</p>

<p>As per the factoring agreement, any shortfall between the amount collected and <strong>₹ 250 crores</strong> will be reimbursed by Natasha Ltd. to Samantha Ltd. Once the trade receivables have been collected, any amounts above <strong>₹ 250 crores</strong>, less interest on this amount, will be repaid to Natasha Ltd.</p>

<p>The directors of Natasha Ltd. are of the opinion that the trade receivables should be derecognized.</p>

<p><strong>You are required to explain the appropriate accounting treatment of this transaction in the financial statements for the year ending 31st March 20X2, and also evaluate this transaction in the context of the Conceptual Framework.</strong>`,

  solution_html: `<p><strong>Answer (i) — Ind AS Roadmap</strong></p>

<p><strong>Calculation of Net Worth:</strong></p>

<table border="1" cellspacing="0" cellpadding="5">
<tr>
<th>Particulars</th>
<th>₹ in crores</th>
</tr>
<tr>
<td>Equity Share Capital</td>
<td>160</td>
</tr>
<tr>
<td>Securities Premium</td>
<td>200</td>
</tr>
<tr>
<td>General Reserve</td>
<td>150</td>
</tr>
<tr>
<td>Profit and Loss Account</td>
<td>75</td>
</tr>
<tr>
<td>Less: Miscellaneous Expenditure not written off</td>
<td>(80)</td>
</tr>
<tr>
<th>Net Worth as per Section 2(57) of the Companies Act, 2013</th>
<th>505</th>
</tr>
</table>

<p><strong>Note:</strong> Revaluation Reserve is not included while computing Net Worth under Section 2(57) of the Companies Act, 2013.</p>

<p>Since Company A is a <strong>listed company</strong> having a <strong>Net Worth of ₹ 505 crores</strong>, it falls under <strong>Phase I</strong> of the Ind AS Roadmap. Accordingly, <strong>Ind AS is applicable for accounting periods beginning on or after 1st April, 2016.</strong></p>

<p>Even if Company A is an <strong>unlisted company</strong>, the answer remains the same because its Net Worth exceeds <strong>₹ 500 crores</strong>. Therefore, it is also covered under <strong>Phase I</strong>, and Ind AS shall be applicable from accounting periods beginning on or after <strong>1st April, 2016.</strong>

<hr>

<p><strong>Answer (ii) — Factoring Arrangement (Ind AS 109)</strong></p>

<p>Trade receivables are financial assets within the scope of <strong>Ind AS 109 – Financial Instruments</strong>. Therefore, it must be assessed whether the receivables qualify for derecognition.</p>

<p>As per paragraphs <strong>3.2.3 to 3.2.6 of Ind AS 109</strong>, a financial asset is derecognized only when:</p>

<ul>
<li>The contractual rights to receive the cash flows expire; or</li>
<li>The financial asset is transferred and substantially all the risks and rewards of ownership are transferred.</li>
</ul>

<p>In the present case, the contractual rights to receive cash flows have not expired because the receivables are still outstanding.</p>

<p>Further, Natasha Ltd. continues to bear the credit risk because any shortfall below <strong>₹ 250 crores</strong> has to be reimbursed to Samantha Ltd. At the same time, Natasha Ltd. also retains the potential rewards because any collections in excess of <strong>₹ 250 crores</strong> (after deducting interest) will be returned to it.</p>

<p>Accordingly, substantially all the risks and rewards of ownership continue to remain with Natasha Ltd. Therefore, the trade receivables <strong>should not be derecognized</strong>.</p>

<p>The immediate cash received of <strong>₹ 250 crores</strong> should be recognised as a <strong>financial liability</strong>, while the trade receivables should continue to be presented in the Balance Sheet.</p>

<p><strong>Conceptual Framework:</strong></p>

<p>The accounting treatment reflects the <strong>substance over legal form</strong> principle. Although the receivables have been legally transferred, Natasha Ltd. continues to retain substantially all the risks and rewards associated with them. Therefore, faithful representation requires the receivables to remain recognised and the cash received to be presented as a borrowing (financial liability).</p>`
},
{
  question_id: "FR_MTPSEP24II_6C",
  source: "ICAI MTP September 2024 Series II",
  chapter_name: "Ind AS 37 - Provisions, Contingent Liabilities and Contingent Assets",
  placement: 6 ,
  marks: 4,

  question_html: `<p>Under new legislation, an entity is required to fit smoke filters to its factories by <strong>30th September, 20X1</strong>. The entity has not fitted the smoke filters. It is assumed that a reliable estimate can be made of any outflows expected.</p>

<p>Determine whether any provision is required to be made by the entity on:</p>

<ol type="a">
<li><strong>At 31st March, 20X1</strong>, the end of the reporting period.</li>
<li><strong>At 31st March, 20X2</strong>, the end of the reporting period.</li>
</ol>`,

  solution_html: `<p><strong>(a) At 31st March, 20X1</strong></p>

<p><strong>Present obligation as a result of a past obligating event:</strong> There is no obligation because there is no obligating event either for the costs of fitting smoke filters or for fines under the legislation.</p>

<p><strong>Conclusion:</strong> <strong>No provision</strong> is recognised for the cost of fitting the smoke filters.</p>

<hr>

<p><strong>(b) At 31st March, 20X2</strong></p>

<p><strong>Present obligation as a result of a past obligating event:</strong> There is still no obligation for the costs of fitting smoke filters because no obligating event has occurred (the fitting of the filters).</p>

<p>However, an obligation might arise to pay fines or penalties under the legislation because the obligating event has occurred (the non-compliant operation of the factory).</p>

<p><strong>An outflow of resources embodying economic benefits in settlement:</strong> Assessment of the probability of incurring fines and penalties due to non-compliant operation depends on the details of the legislation and the stringency of the enforcement regime.</p>

<p><strong>Conclusion:</strong> No provision is recognised for the costs of fitting smoke filters. However, a <strong>provision is recognised for the best estimate of any fines and penalties</strong> that are more likely than not to be imposed.</p>`
},
{
    question_id: "FR_MTPMAR25_I_1",
    source: "ICAI MTP March 2025",
    chapter_name: "Ind AS 111 - Joint Arrangements",
    placement: 1,
    marks: 14,

    question_html: `
    <p>
      A Ltd. and B Ltd. are companies registered under the Companies Act, 2013. A Ltd. is
      an Ind AS compliant entity and follows year ended March as its financial reporting period.
    </p>

    <p>
      On 1st April 20X1, they entered into an agreement to jointly engage in the hospitality
      business. For this purpose, they formed a partnership firm with the name of
      M/s. Star Hotel ("the Firm"). Under the relevant laws, the partners and the Firm are not
      considered as separate legal entities.
    </p>

    <p>
      To regulate the operations of the Firm, A Ltd. and B Ltd. entered into a partnership deed
      whose relevant terms and conditions are as follows:
    </p>

    <ul>
      <li>A Ltd. and B Ltd. shall be the partners of the Firm.</li>
      <li>
        Consent of both partners shall be required for taking decisions on any matter
        which may affect the returns of the business.
      </li>
      <li>
        The Firm shall operate a three-storied hotel as follows:
      </li>
    </ul>

    <table border="1">
      <tr>
        <th>Floor</th>
        <th>Rights and obligations relating to the floor</th>
      </tr>
      <tr>
        <td>
          Ground floor (Reception, lobby, restaurant, laundry division and
          general administration office)
        </td>
        <td>
          Both partners shall jointly and equally own the legal and beneficial ownership
          of the ground floor including all of its assets and related liabilities.
          All the costs relating to the operation of the ground floor shall be jointly and
          equally shared by both the partners.
        </td>
      </tr>
      <tr>
        <td>First floor (Indian themed rooms for customers)</td>
        <td>
          A Ltd. shall have legal and beneficial ownership of the first floor including
          all of its assets and related liabilities.
          The net profit for the period attributable to the renting of rooms of first floor
          shall accrue solely to the account of A Ltd.
        </td>
      </tr>
      <tr>
        <td>Second floor (Italian themed rooms for customers)</td>
        <td>
          B Ltd. shall have legal and beneficial ownership of the second floor including
          all of its assets and related liabilities.
          The net profit for the period attributable to the renting of rooms of second floor
          shall accrue solely to the account of B Ltd.
        </td>
      </tr>
      <tr>
        <td>Third floor (Banquet hall)</td>
        <td>
          Both the partners shall jointly and equally own legal and beneficial ownership
          of the third floor including all of its assets and related liabilities.
          The net profit for the period attributable to the renting of the banquet hall shall
          accrue equally to the account of both the partners.
        </td>
      </tr>
    </table>

    <p>
      During the first year of operation of the hotel, A Ltd. many times doubted and objected
      to the manner in which the guests were preferentially convinced by the reception desk
      to occupy the Italian-themed rooms of the second floor.
    </p>

    <p>
      To avoid repetitive disputes, on 1st April 20X2, A Ltd. and B Ltd. converted the
      partnership firm into a company named Star Hotel Pvt. Ltd. ("the Company").
      Under the relevant laws, the shareholders and the Company are considered as
      separate legal entities.
    </p>

    <p>
      To regulate the operations of the Company, A Ltd. and B Ltd. entered into a
      shareholders’ agreement with the following relevant terms and conditions:
    </p>

    <ol type="i">
      <li>
        A Ltd. and B Ltd. shall transfer their individual rights regarding the respective
        floors of the hotel in favour of the Company such that the Company becomes
        the legal and beneficial owner thereof.
      </li>
      <li>
        The Company shall assume all the liabilities of A Ltd. and B Ltd. in relation to
        the hotel business.
      </li>
      <li>
        In consideration of transfer of rights and obligations by A Ltd. and B Ltd. in favour
        of the Company, A Ltd. and B Ltd. shall receive equity shares of the Company in
        equal proportion.
      </li>
      <li>
        Each equity share shall entitle the holder thereof one vote in the general meetings
        of the Company.
      </li>
      <li>
        The Company's Board shall consist of 6 directors. All matters relating to operations,
        except reserved matters, shall be decided by simple majority. In case of equality of
        votes, the chairman shall have a casting vote.
      </li>
      <li>
        Reserved matters requiring unanimous consent:
        <ol type="a">
          <li>Approval of the operating plan for each financial year.</li>
          <li>Capital expenditure exceeding ₹20 crore in a year.</li>
          <li>
            Borrowings equal to or more than 30% of the Company's net worth.
          </li>
          <li>Any matter which may affect the returns of the business.</li>
        </ol>
      </li>
      <li>
        A Ltd. and B Ltd. shall have the right to nominate 3 directors each and replace them.
        The chairman shall be nominated by A Ltd.
      </li>
      <li>
        Profits may be distributed as dividends approved by simple majority in a general meeting.
      </li>
      <li>
        Shareholders shall be entitled to dividends in proportion to share capital held.
      </li>
      <li>
        Upon liquidation, net assets after liabilities shall be distributed in proportion to share capital held.
      </li>
      <li>
        During the period 1st April, 20X2 to 31st March, 20X7, A Ltd. shall have the right
        to sell all its shares to B Ltd. at a price 10% above fair value determined by an
        independent valuer. If exercised, B Ltd. shall be obliged to purchase the shares.
      </li>
    </ol>

    <p><strong>Required:</strong></p>

    <p>
      How should the arrangement with B Ltd. be classified and recognised in the
      financial statements of A Ltd. for the year ended 31st March, 20X2?
      Explain the basis of your conclusion.
    </p>

    <p>
      Additionally, describe the changes, if any, to the classification and recognition
      in the consolidated financial statements of A Ltd. for the year ended
      31st March, 20X3.
    </p>
    `,

    solution_html: `
    <p>
      As per the terms and conditions of the partnership deed, consent of both partners
      is required for decisions affecting the returns of the business. Therefore,
      A Ltd. and B Ltd. have <strong>joint control</strong> over the arrangement as defined
      in Ind AS 111 and the arrangement is a <strong>joint arrangement</strong>.
    </p>

    <h4>Classification for the year ended 31st March, 20X2</h4>

    <p>
      As per Ind AS 111, classification of a joint arrangement depends on:
    </p>

    <ol type="a">
      <li>The structure of the joint arrangement;</li>
      <li>
        If structured through a separate vehicle:
        <ol type="i">
          <li>The legal form of the separate vehicle;</li>
          <li>The terms of the contractual arrangement; and</li>
          <li>Other relevant facts and circumstances.</li>
        </ol>
      </li>
    </ol>

    <p>
      The arrangement is conducted through M/s. Star Hotel, a partnership firm whose
      legal form does not create separation between the partners and the firm.
      Assets and liabilities of the firm are effectively assets and liabilities of the partners.
    </p>

    <p>
      The contractual arrangement also provides rights to assets and obligations for liabilities.
      Therefore, the arrangement is a <strong>Joint Operation</strong> as per Ind AS 111.
    </p>

    <h4>Recognition in A Ltd.'s Financial Statements for FY 20X1-20X2</h4>

    <p>
      As a joint operator, A Ltd. shall recognise:
    </p>

    <ul>
      <li>Its share of assets and liabilities relating to the arrangement.</li>
      <li>Its share of revenues and expenses arising from the arrangement.</li>
    </ul>

    <p>
      Specific treatment:
    </p>

    <ul>
      <li>
        <strong>First Floor:</strong>
        A Ltd. has exclusive legal and beneficial ownership.
        Therefore, A Ltd. shall recognise all related assets, liabilities,
        income and expenses.
      </li>

      <li>
        <strong>Ground Floor and Third Floor:</strong>
        Jointly owned and controlled.
        A Ltd. shall recognise 50% share of related assets, liabilities,
        income and expenses.
      </li>

      <li>
        <strong>Second Floor:</strong>
        Owned and controlled by B Ltd.
        A Ltd. shall not recognise any assets, liabilities,
        income or expenses relating to this floor.
      </li>
    </ul>

    <p>
      Recognition shall be done line-by-line based on the relevant Ind AS applicable
      to each asset, liability, income and expense.
    </p>

    <h4>Reclassification for the year ended 31st March, 20X3</h4>

    <p>
      On 1st April, 20X2, the partnership firm was converted into
      Star Hotel Pvt. Ltd.
    </p>

    <p>
      The legal form of a company creates separation between shareholders
      and the company. Assets and liabilities belong to the company and not
      directly to the shareholders.
    </p>

    <p>
      The shareholders' agreement provides rights only to the net assets
      of the company through dividends and liquidation proceeds.
      It does not provide direct rights to specific assets or obligations
      for specific liabilities.
    </p>

    <p>
      Therefore, the arrangement is reclassified as a
      <strong>Joint Venture</strong> under Ind AS 111.
    </p>

    <h4>Recognition in Consolidated Financial Statements of A Ltd.
    for FY 20X2-20X3</h4>

    <p>
      As per paragraph 24 of Ind AS 111, a joint venturer shall recognise
      its interest in a joint venture as an investment and account for it
      using the <strong>equity method</strong> in accordance with Ind AS 28,
      unless exempted.
    </p>

    <p>
      Accordingly, A Ltd. shall recognise its interest in
      Star Hotel Pvt. Ltd. as an investment and account for it using
      the equity method.
    </p>

    <p>
      The put option available to A Ltd. to sell shares to B Ltd.
      does not affect the assessment of joint control because the right
      rests with A Ltd. and does not provide B Ltd. with substantive
      potential voting rights.
    </p>
    `,
},
{
    question_id: "FR_MTPMAR25_I_2A",
    source: "ICAI MTP March 2025",
    chapter_name: "Ind AS 32 - Financial Instruments: Presentation",
    placement: 2,
    marks: 10,

    question_html: `
    <p>
      ABC Ltd. issues 4% 1,00,000 OCPS at a face value of ₹100 per share on
      1st April, 20X1 and these are redeemable after 5 years, i.e., on
      31st March, 20X6.
    </p>

    <p>
      Dividend is non-cumulative. Each preference share entitles the holder
      to 10 equity shares and the preference shares are optionally convertible
      by the holder at any time until maturity.
    </p>

    <p><strong>Required:</strong></p>

    <p>
      How will the preference shares be classified at initial recognition
      assuming that a comparable instrument carries a market interest rate of 7%?
      Provide journal entries for year 1.
    </p>

    <p>
      Will this classification be changed subsequently in case there is a
      likelihood that OCPS will be encashed at the end of the maturity period?
    </p>
    `,

    solution_html: `
    <p>
      The OCPS are redeemable at the end of five years and therefore contain
      a <strong>financial liability component</strong>.
    </p>

    <p>
      Since the dividend is non-cumulative and payable at the discretion of
      the issuer, it forms part of the <strong>equity component</strong>.
    </p>

    <p>
      Further, the holder has an option to convert the preference shares into
      a fixed number of equity shares. Therefore, in accordance with
      <strong>Ind AS 32</strong>, the instrument is a
      <strong>compound financial instrument</strong> containing both liability
      and equity components.
    </p>

    <h4>Initial Measurement</h4>

    <p>
      The liability component is measured first by determining the present value
      of a similar liability without the conversion feature.
    </p>

    <p>
      Fair value of liability component:
    </p>

    <p>
      = 1,00,000 × ₹100 × (1 / 1.07⁵)
      <br>
      = ₹71,29,862
    </p>

    <p>
      Equity component (Residual):
    </p>

    <p>
      = ₹1,00,00,000 − ₹71,29,862
      <br>
      = ₹28,70,138
    </p>

    <h4>Classification at Initial Recognition</h4>

    <table border="1">
      <tr>
        <th>Component</th>
        <th>Amount (₹)</th>
      </tr>
      <tr>
        <td>Financial Liability Component</td>
        <td>71,29,862</td>
      </tr>
      <tr>
        <td>Equity Component</td>
        <td>28,70,138</td>
      </tr>
      <tr>
        <td>Total Issue Proceeds</td>
        <td>1,00,00,000</td>
      </tr>
    </table>

    <h4>Journal Entries - Year 1</h4>

    <p><strong>1st April, 20X1 - Initial Recognition</strong></p>

    <table border="1">
      <tr>
        <th>Particulars</th>
        <th>Dr. (₹)</th>
        <th>Cr. (₹)</th>
      </tr>
      <tr>
        <td>Bank A/c Dr.</td>
        <td>1,00,00,000</td>
        <td>-</td>
      </tr>
      <tr>
        <td>To OCPS (Financial Liability)</td>
        <td>-</td>
        <td>71,29,862</td>
      </tr>
      <tr>
        <td>To OCPS (Equity Component)</td>
        <td>-</td>
        <td>28,70,138</td>
      </tr>
    </table>

    <p>
      (Being issue of OCPS recognised as a compound financial instrument)
    </p>

    <p><strong>31st March, 20X2 - Unwinding of Discount</strong></p>

    <p>
      Interest Expense = ₹71,29,862 × 7%
      = ₹4,99,090
    </p>

    <table border="1">
      <tr>
        <th>Particulars</th>
        <th>Dr. (₹)</th>
        <th>Cr. (₹)</th>
      </tr>
      <tr>
        <td>Interest Expense A/c Dr.</td>
        <td>4,99,090</td>
        <td>-</td>
      </tr>
      <tr>
        <td>To OCPS (Financial Liability)</td>
        <td>-</td>
        <td>4,99,090</td>
      </tr>
    </table>

    <p>
      (Being finance cost recognised using effective interest rate method)
    </p>

    <h4>Amortised Cost Schedule of Financial Liability</h4>

    <table border="1">
      <tr>
        <th>Year</th>
        <th>Opening Balance (₹)</th>
        <th>Interest @ 7% (₹)</th>
        <th>Closing Balance (₹)</th>
      </tr>
      <tr>
        <td>1</td>
        <td>71,29,862</td>
        <td>4,99,090</td>
        <td>76,28,952</td>
      </tr>
      <tr>
        <td>2</td>
        <td>76,28,952</td>
        <td>5,34,027</td>
        <td>81,62,979</td>
      </tr>
      <tr>
        <td>3</td>
        <td>81,62,979</td>
        <td>5,71,409</td>
        <td>87,34,388</td>
      </tr>
      <tr>
        <td>4</td>
        <td>87,34,388</td>
        <td>6,11,407</td>
        <td>93,45,795</td>
      </tr>
      <tr>
        <td>5</td>
        <td>93,45,795</td>
        <td>6,54,206</td>
        <td>1,00,00,000</td>
      </tr>
    </table>

    <h4>Subsequent Change in Likelihood of Conversion</h4>

    <p>
      As per paragraph 30 of Ind AS 32, the classification of the liability
      and equity components of a compound financial instrument is
      <strong>not revised</strong> due to a change in the likelihood of the
      conversion option being exercised.
    </p>

    <p>
      Therefore, even if it becomes likely that the OCPS will be redeemed
      in cash on maturity instead of being converted into equity shares,
      the original classification between liability and equity components
      remains unchanged.
    </p>

    <p>
      The equity component recognised on initial recognition continues to
      remain in equity and is not reclassified subsequently.
    </p>
    `,
},
{
    question_id: "FR_MTPMAR25_I_2B",
    source: "ICAI MTP March 2025",
    chapter_name: "Ind AS Applicability",
    placement: 2,
    marks: 4,

    question_html: `
    <p>
      ABC Inc., incorporated in a foreign country has a net worth of ₹700 crores.
      It has two Indian subsidiaries X Ltd. whose net worth as on 31st March 2014 is
      ₹600 crores and Y Ltd. whose net worth is ₹150 crores.
    </p>

    <p>
      Whether X Ltd. and Y Ltd. would be required to follow Ind AS from the accounting
      period commencing on or after 1st April 2016 on the basis of their own net worth
      or on the basis of the net worth of ABC Inc.?
    </p>
    `,

    solution_html: `
    <p>
      As per Rule 4(1)(ii)(a) of the Companies (Indian Accounting Standards) Rules, 2015,
      X Ltd., having a net worth of ₹600 crores at the end of the financial year 2015-16,
      would be required to prepare its financial statements for the accounting periods
      commencing from 1st April, 2016 in accordance with the Companies (Indian Accounting
      Standards) Rules, 2015.
    </p>

    <p>
      However, Y Ltd., having a net worth of ₹150 crores in the financial year 2015-16,
      would not fall within the mandatory phase of Ind AS applicability and would continue
      to prepare its financial statements in accordance with the Companies (Accounting
      Standards) Rules, 2006.
    </p>

    <p>
      ABC Inc. is a foreign company incorporated outside India and is not a company
      incorporated under the Companies Act, 2013 or the earlier Companies Act, 1956.
      Therefore, ABC Inc. is not required to prepare its financial statements in accordance
      with the Companies (Indian Accounting Standards) Rules, 2015.
    </p>

    <p>
      Since the foreign company ABC Inc. is not required to prepare financial statements
      under Ind AS, the net worth of ABC Inc. will not be considered for determining the
      applicability of Ind AS to its Indian subsidiaries.
    </p>

    <p>
      Accordingly, the applicability of Ind AS for X Ltd. and Y Ltd. shall be determined
      based on their own net worth and not on the basis of the net worth of ABC Inc.
    </p>

    <p>
      Therefore:
    </p>

    <ul>
      <li>
        <strong>X Ltd.</strong> (Net Worth ₹600 crores) – Required to prepare financial
        statements as per Ind AS from accounting periods commencing on or after
        1st April, 2016.
      </li>
      <li>
        <strong>Y Ltd.</strong> (Net Worth ₹150 crores) – Not mandatorily required to
        adopt Ind AS on the basis of the given facts.
      </li>
    </ul>
    `,
},
{
    question_id: "FR_MTPMAR25_I_3A",
    source: "ICAI MTP March 2025",
    chapter_name: "Ind AS 116 - Leases and Ind AS 21 - The Effects of Changes in Foreign Exchange Rates",
    placement: 3,
    marks: 8,

    question_html: `
    <p>
      X Ltd. has taken a plant on lease from Y Ltd. for 5 years to use in its
      manufacturing process for which it has to pay annual rentals in arrears
      of USD 10,000 every year.
    </p>

    <p>
      On the commencement date, exchange rate was USD = ₹68.
      The average rate for Year 1 was ₹69 and at the end of year 1,
      the exchange rate was ₹70.
    </p>

    <p>
      The incremental borrowing rate of X Ltd. on commencement of the lease
      for a USD borrowing was 5% p.a.
    </p>

    <p>
      How will entity X measure the right of use (ROU) asset and lease liability
      initially and at the end of Year 1?
    </p>
    `,

    solution_html: `
    <h4>Initial Measurement of Lease Liability and Right-of-Use Asset</h4>

    <table border="1">
      <tr>
        <th>Year</th>
        <th>Lease Payments (USD)</th>
        <th>Present Value Factor @ 5%</th>
        <th>Present Value of Lease Payment (USD)</th>
        <th>Exchange Rate (₹)</th>
        <th>INR Value (₹)</th>
      </tr>
      <tr>
        <td>1</td>
        <td>10,000</td>
        <td>0.952</td>
        <td>9,520</td>
        <td>68</td>
        <td>6,47,360</td>
      </tr>
      <tr>
        <td>2</td>
        <td>10,000</td>
        <td>0.907</td>
        <td>9,070</td>
        <td>68</td>
        <td>6,16,760</td>
      </tr>
      <tr>
        <td>3</td>
        <td>10,000</td>
        <td>0.864</td>
        <td>8,640</td>
        <td>68</td>
        <td>5,87,520</td>
      </tr>
      <tr>
        <td>4</td>
        <td>10,000</td>
        <td>0.823</td>
        <td>8,230</td>
        <td>68</td>
        <td>5,59,640</td>
      </tr>
      <tr>
        <td>5</td>
        <td>10,000</td>
        <td>0.784</td>
        <td>7,840</td>
        <td>68</td>
        <td>5,33,120</td>
      </tr>
      <tr>
        <th colspan="3">Total</th>
        <th>43,300</th>
        <th></th>
        <th>29,44,400</th>
      </tr>
    </table>

    <p>
      Accordingly, on the commencement date:
    </p>

    <ul>
      <li>Lease Liability = ₹29,44,400</li>
      <li>Right-of-Use Asset = ₹29,44,400</li>
    </ul>

    <p>
      As per Ind AS 21, monetary assets and liabilities are restated at the
      closing rate on each reporting date and exchange differences are
      recognised in profit and loss.
    </p>

    <p>
      Non-monetary assets measured at historical cost are not restated.
      Therefore, the ROU asset will not be restated whereas the lease liability
      will be restated at the closing exchange rate.
    </p>

    <h4>Measurement of Lease Liability at the End of Year 1</h4>

    <table border="1">
      <tr>
        <th>Year</th>
        <th>Opening Value (USD)</th>
        <th>Lease Payment (USD)</th>
        <th>Interest @ 5% (USD)</th>
        <th>Closing Value (USD)</th>
      </tr>
      <tr>
        <td>1</td>
        <td>43,300</td>
        <td>10,000</td>
        <td>2,165</td>
        <td>35,465</td>
      </tr>
    </table>

    <p>
      Interest expense recognised in profit and loss:
    </p>

    <p>
      USD 2,165 × ₹69 = ₹1,49,385
    </p>

    <table border="1">
      <tr>
        <th>Particulars</th>
        <th>Dr. (₹)</th>
        <th>Cr. (₹)</th>
      </tr>
      <tr>
        <td>Interest Expense A/c Dr.</td>
        <td>1,49,385</td>
        <td>-</td>
      </tr>
      <tr>
        <td>To Lease Liability</td>
        <td>-</td>
        <td>1,49,385</td>
      </tr>
    </table>

    <p>
      Lease payment at reporting date exchange rate:
    </p>

    <p>
      USD 10,000 × ₹70 = ₹7,00,000
    </p>

    <table border="1">
      <tr>
        <th>Particulars</th>
        <th>Dr. (₹)</th>
        <th>Cr. (₹)</th>
      </tr>
      <tr>
        <td>Lease Liability Dr.</td>
        <td>7,00,000</td>
        <td>-</td>
      </tr>
      <tr>
        <td>To Cash</td>
        <td>-</td>
        <td>7,00,000</td>
      </tr>
    </table>

    <p>
      Lease liability at year-end:
    </p>

    <p>
      35,465 USD × ₹70 = ₹24,82,550
    </p>

    <p>
      Exchange difference recognised in profit and loss:
    </p>

    <p>
      ₹24,82,550 − (₹29,44,400 + ₹1,49,385 − ₹7,00,000)
      = ₹88,765
    </p>

    <h4>Measurement of Right-of-Use Asset at End of Year 1</h4>

    <table border="1">
      <tr>
        <th>Year</th>
        <th>Opening Balance (₹)</th>
        <th>Depreciation (₹)</th>
        <th>Closing Balance (₹)</th>
      </tr>
      <tr>
        <td>1</td>
        <td>29,44,400</td>
        <td>5,88,880</td>
        <td>23,55,520</td>
      </tr>
    </table>

    <p>
      Therefore, at the end of Year 1:
    </p>

    <ul>
      <li>Lease Liability = ₹24,82,550</li>
      <li>ROU Asset = ₹23,55,520</li>
    </ul>
    `,
},
{
    question_id: "FR_MTPMAR25_I_3B",
    source: "ICAI MTP March 2025",
    chapter_name: "Ind AS 21 - The Effects of Changes in Foreign Exchange Rates",
    placement: 3,
    marks: 6,

    question_html: `
    <p>
      Infotech Global Ltd. has a functional currency of USD and needs to
      translate its financial statements into the functional and presentation
      currency of Infotech Inc. (L$).
    </p>

    <p>
      The following balances appear in the books of Infotech Global Ltd.
      at the year-end prior to translation:
    </p>

    <table border="1">
      <tr>
        <th>Particulars</th>
        <th>USD</th>
        <th>L$</th>
      </tr>
      <tr>
        <td>Property, plant and equipment</td>
        <td>50,000</td>
        <td></td>
      </tr>
      <tr>
        <td>Receivables</td>
        <td>9,35,000</td>
        <td></td>
      </tr>
      <tr>
        <td>Total assets</td>
        <td>9,85,000</td>
        <td></td>
      </tr>
      <tr>
        <td>Issued capital</td>
        <td>50,000</td>
        <td>30,055</td>
      </tr>
      <tr>
        <td>Opening retained earnings</td>
        <td>28,000</td>
        <td>15,274</td>
      </tr>
      <tr>
        <td>Profit for the year</td>
        <td>20,000</td>
        <td></td>
      </tr>
      <tr>
        <td>Accounts payable</td>
        <td>8,40,000</td>
        <td></td>
      </tr>
      <tr>
        <td>Accrued liabilities</td>
        <td>47,000</td>
        <td></td>
      </tr>
      <tr>
        <td>Total equity and liabilities</td>
        <td>9,85,000</td>
        <td></td>
      </tr>
    </table>

    <p>
      Translate the above balances of Infotech Global Ltd. into L$ ready for
      consolidation by Infotech Inc. (Share capital and opening retained
      earnings have been pre-populated.)
    </p>

    <p>
      Prepare a working of the cumulative balance of the foreign currency
      translation reserve.
    </p>

    <p>
      Additional Information:
    </p>

    <ul>
      <li>Rate at beginning of the year: L$1 = USD 1.22</li>
      <li>Average rate for the year: L$1 = USD 1.175</li>
      <li>Rate at end of the year: L$1 = USD 1.13</li>
    </ul>
    `,

    solution_html: `
    <h4>Translation of Balances for Consolidation</h4>

    <table border="1">
      <tr>
        <th>Particulars</th>
        <th>USD</th>
        <th>Rate</th>
        <th>L$</th>
      </tr>
      <tr>
        <td>Property, plant and equipment</td>
        <td>50,000</td>
        <td>1.13</td>
        <td>44,248</td>
      </tr>
      <tr>
        <td>Receivables</td>
        <td>9,35,000</td>
        <td>1.13</td>
        <td>8,27,434</td>
      </tr>
      <tr>
        <th>Total Assets</th>
        <th>9,85,000</th>
        <th></th>
        <th>8,71,682</th>
      </tr>
      <tr>
        <td>Issued Capital</td>
        <td>50,000</td>
        <td>-</td>
        <td>30,055</td>
      </tr>
      <tr>
        <td>Opening Retained Earnings</td>
        <td>28,000</td>
        <td>-</td>
        <td>15,274</td>
      </tr>
      <tr>
        <td>Profit for the Year</td>
        <td>20,000</td>
        <td>1.175</td>
        <td>17,021</td>
      </tr>
      <tr>
        <td>Accounts Payable</td>
        <td>8,40,000</td>
        <td>1.13</td>
        <td>7,43,363</td>
      </tr>
      <tr>
        <td>Accrued Liabilities</td>
        <td>47,000</td>
        <td>1.13</td>
        <td>41,593</td>
      </tr>
      <tr>
        <td>Total Equity & Liabilities before FCTR</td>
        <td>9,85,000</td>
        <td></td>
        <td>8,47,306</td>
      </tr>
      <tr>
        <td>Foreign Currency Translation Reserve (FCTR)</td>
        <td>-</td>
        <td>-</td>
        <td>24,376</td>
      </tr>
      <tr>
        <th>Total Equity & Liabilities</th>
        <th></th>
        <th></th>
        <th>8,71,682</th>
      </tr>
    </table>

    <h4>Working Note 1: Computation of FCTR</h4>

    <table border="1">
      <tr>
        <th>Particulars</th>
        <th>Actual Translated Amount (L$)</th>
        <th>Translated Amount if Closing Rate Applied (L$)</th>
        <th>Difference (L$)</th>
      </tr>
      <tr>
        <td>Issued Capital</td>
        <td>30,055</td>
        <td>44,248</td>
        <td>14,193</td>
      </tr>
      <tr>
        <td>Opening Retained Earnings</td>
        <td>15,274</td>
        <td>24,779</td>
        <td>9,505</td>
      </tr>
      <tr>
        <td>Profit for the Year</td>
        <td>17,021</td>
        <td>17,699</td>
        <td>678</td>
      </tr>
      <tr>
        <th>Total FCTR</th>
        <th>62,350</th>
        <th>86,726</th>
        <th>24,376</th>
      </tr>
    </table>

    <h4>Working Note 2: Translation Using Closing Rate</h4>

    <table border="1">
      <tr>
        <th>Particulars</th>
        <th>USD</th>
        <th>Rate</th>
        <th>Translated Amount (L$)</th>
      </tr>
      <tr>
        <td>Issued Capital</td>
        <td>50,000</td>
        <td>1.13</td>
        <td>44,248</td>
      </tr>
      <tr>
        <td>Opening Retained Earnings</td>
        <td>28,000</td>
        <td>1.13</td>
        <td>24,779</td>
      </tr>
      <tr>
        <td>Profit for the Year</td>
        <td>20,000</td>
        <td>1.13</td>
        <td>17,699</td>
      </tr>
      <tr>
        <th>Total</th>
        <th>98,000</th>
        <th></th>
        <th>86,726</th>
      </tr>
    </table>
    `,
},
{
    question_id: "FR_MTPMAR25_I_4A",
    source: "ICAI MTP March 2025",
    chapter_name: "Ind AS 102 - Share Based Payment",
    placement: 4,
    marks: 8,

    question_html: `
    <p>
      To reward its employees, the Company had launched a scheme effective
      1st April, 20X1, in which the employees will be granted equity shares of the
      Company at below market price subject to certain conditions.
    </p>

    <p>Following details are provided:</p>

    <ol type="i">
      <li>
        As per the scheme, each employee has an option to purchase
        100 equity shares of the Company at ₹30 per share if the employee
        does not leave the Company for 3 years from the date of launch of the
        scheme i.e. 31st March, 20X4.
      </li>

      <li>
        Once 3 years are completed by an employee, he/she can exercise the
        option within 1 year i.e. by 31st March, 20X5.
      </li>

      <li>
        The closing share price on stock exchange as at 1st April, 20X1 is
        ₹62 per share with face value of ₹10 per share. The Company had
        appointed a registered valuer who derived the price of option at ₹50
        using the Black Scholes model of option pricing.
      </li>

      <li>
        There are a total of 300 employees eligible for the scheme.
        As at 31st March, 20X2, 10 employees left the Company and further
        14 employees are expected to leave over the next 2 years.
        During the year 20X2-20X3, a multi-national company entered into
        the retail industry which is hiring experienced workforce and therefore
        a high attrition is observed in the retail industry. 110 employees left
        the Company during the year ended 31st March, 20X3 and further
        54 employees are expected to leave in the next one year.
        As at 31st March, 20X4, only 160 employees are remaining with the
        Company out of 300.
      </li>

      <li>
        Only 150 employees exercise the option to purchase the equity shares
        during the year ended 31st March, 20X5.
      </li>
    </ol>

    <p><strong>Required:</strong></p>

    <p>
      Provide necessary accounting entries during the life of share-based
      payment scheme to account for the scheme implemented by the Company.
      Provide working notes.
    </p>
    `,

    solution_html: `
    <h4>Journal Entries</h4>

    <p><strong>31st March, 20X2</strong></p>

    <table border="1">
      <tr>
        <th>Particulars</th>
        <th>Dr. (₹)</th>
        <th>Cr. (₹)</th>
      </tr>
      <tr>
        <td>Employee Benefits Expense A/c Dr.</td>
        <td>4,60,000</td>
        <td>-</td>
      </tr>
      <tr>
        <td>To Share Based Payment Reserve (Equity)</td>
        <td>-</td>
        <td>4,60,000</td>
      </tr>
    </table>

    <p>
      (Being expense recognised to the extent of 1/3rd of expected vested
      equity instruments value)
    </p>

    <table border="1">
      <tr>
        <th>Particulars</th>
        <th>Dr. (₹)</th>
        <th>Cr. (₹)</th>
      </tr>
      <tr>
        <td>Profit and Loss A/c Dr.</td>
        <td>4,60,000</td>
        <td>-</td>
      </tr>
      <tr>
        <td>To Employee Benefits Expense A/c</td>
        <td>-</td>
        <td>4,60,000</td>
      </tr>
    </table>

    <p>(Being expenses transferred to Profit and Loss Account)</p>

    <p><strong>31st March, 20X3</strong></p>

    <table border="1">
      <tr>
        <th>Particulars</th>
        <th>Dr. (₹)</th>
        <th>Cr. (₹)</th>
      </tr>
      <tr>
        <td>Share Based Payment Reserve (Equity) Dr.</td>
        <td>40,000</td>
        <td>-</td>
      </tr>
      <tr>
        <td>To Employee Benefits Expense A/c</td>
        <td>-</td>
        <td>40,000</td>
      </tr>
    </table>

    <p>
      (Being reversal of excess expense recognised on revision of vesting estimate)
    </p>

    <table border="1">
      <tr>
        <th>Particulars</th>
        <th>Dr. (₹)</th>
        <th>Cr. (₹)</th>
      </tr>
      <tr>
        <td>Employee Benefits Expense A/c Dr.</td>
        <td>40,000</td>
        <td>-</td>
      </tr>
      <tr>
        <td>To Profit and Loss A/c</td>
        <td>-</td>
        <td>40,000</td>
      </tr>
    </table>

    <p>(Being transfer of revised employee benefit expense)</p>

    <p><strong>31st March, 20X4</strong></p>

    <table border="1">
      <tr>
        <th>Particulars</th>
        <th>Dr. (₹)</th>
        <th>Cr. (₹)</th>
      </tr>
      <tr>
        <td>Employee Benefits Expense A/c Dr.</td>
        <td>3,80,000</td>
        <td>-</td>
      </tr>
      <tr>
        <td>To Share Based Payment Reserve (Equity)</td>
        <td>-</td>
        <td>3,80,000</td>
      </tr>
    </table>

    <p>(Being final vested equity instruments value recognised)</p>

    <table border="1">
      <tr>
        <th>Particulars</th>
        <th>Dr. (₹)</th>
        <th>Cr. (₹)</th>
      </tr>
      <tr>
        <td>Profit and Loss A/c Dr.</td>
        <td>3,80,000</td>
        <td>-</td>
      </tr>
      <tr>
        <td>To Employee Benefits Expense A/c</td>
        <td>-</td>
        <td>3,80,000</td>
      </tr>
    </table>

    <p>(Being expenses transferred to Profit and Loss Account)</p>

    <p><strong>31st March, 20X5</strong></p>

    <table border="1">
      <tr>
        <th>Particulars</th>
        <th>Dr. (₹)</th>
        <th>Cr. (₹)</th>
      </tr>
      <tr>
        <td>Share Based Payment Reserve (Equity) Dr.</td>
        <td>8,00,000</td>
        <td>-</td>
      </tr>
      <tr>
        <td>Bank A/c Dr. (150 × 100 × ₹30)</td>
        <td>4,50,000</td>
        <td>-</td>
      </tr>
      <tr>
        <td>To Share Capital A/c [150 × 100 × ₹10]</td>
        <td>-</td>
        <td>1,50,000</td>
      </tr>
      <tr>
        <td>To Securities Premium A/c [150 × 100 × (₹50 + ₹20)]</td>
        <td>-</td>
        <td>10,50,000</td>
      </tr>
      <tr>
        <td>To Retained Earnings A/c (10 × 100 × ₹50)</td>
        <td>-</td>
        <td>50,000</td>
      </tr>
    </table>

    <p>
      (Being 150 options exercised and 10 vested options lapsed)
    </p>

    <h4>Working Note - Calculation of Employee Benefits Expense</h4>

    <table border="1">
      <tr>
        <th>Year Ended</th>
        <th>Calculation</th>
        <th>Expense for Period (₹)</th>
        <th>Cumulative Expense (₹)</th>
      </tr>

      <tr>
        <td>31st March, 20X2</td>
        <td>
          (300 − 10 − 14) employees × 100 shares × ₹50 × 1/3
        </td>
        <td>4,60,000</td>
        <td>4,60,000</td>
      </tr>

      <tr>
        <td>31st March, 20X3</td>
        <td>
          {[(300 − 10 − 110 − 54) employees × 100 shares × ₹50 × 2/3]}
          − ₹4,60,000
        </td>
        <td>(40,000)</td>
        <td>4,20,000</td>
      </tr>

      <tr>
        <td>31st March, 20X4</td>
        <td>
          (160 employees × 100 shares × ₹50) − ₹4,20,000
        </td>
        <td>3,80,000</td>
        <td>8,00,000</td>
      </tr>
    </table>
    `,
},
{
    question_id: "FR_MTPMAR25_I_4B",
    source: "ICAI MTP March 2025",
    chapter_name: "Ind AS 23 - Borrowing Costs",
    placement: 4,
    marks: 6,

    question_html: `
    <p>
      On 1st April, 20X1, A Ltd. contracted for the construction of a building
      for ₹22,00,000. The land under the building is regarded as a separate asset
      and is not part of the qualifying asset.
    </p>

    <p>
      The building was completed at the end of March, 20X2 and during the period
      the following payments were made to the contractor:
    </p>

    <table border="1">
      <tr>
        <th>Payment Date</th>
        <th>Amount (₹ '000)</th>
      </tr>
      <tr>
        <td>1st April, 20X1</td>
        <td>200</td>
      </tr>
      <tr>
        <td>30th June, 20X1</td>
        <td>600</td>
      </tr>
      <tr>
        <td>31st December, 20X1</td>
        <td>1,200</td>
      </tr>
      <tr>
        <td>31st March, 20X2</td>
        <td>200</td>
      </tr>
      <tr>
        <th>Total</th>
        <th>2,200</th>
      </tr>
    </table>

    <p>
      A Ltd.'s borrowings at 31st March, 20X2 were:
    </p>

    <ol type="a">
      <li>
        10% 4-year note with simple interest payable annually,
        specifically relating to the project.
        Debt outstanding on 31st March, 20X2 amounted to ₹7,00,000.
        Interest incurred during the year was ₹65,000 and interest income
        earned on temporary investment of these borrowings was ₹20,000.
      </li>

      <li>
        12.5% 10-year note with simple interest payable annually;
        debt outstanding at 1st April, 20X1 amounted to ₹10,00,000
        and remained unchanged during the year.
      </li>

      <li>
        10% 10-year note with simple interest payable annually;
        debt outstanding at 1st April, 20X1 amounted to ₹15,00,000
        and remained unchanged during the year.
      </li>
    </ol>

    <p>
      Determine the amount of borrowing costs which can be capitalised
      at the year end as per relevant Ind AS.
    </p>
    `,

    solution_html: `
    <p>
      As per Ind AS 23, when funds are borrowed specifically for obtaining
      a qualifying asset, borrowing costs eligible for capitalisation are
      the actual borrowing costs incurred less any investment income earned
      on temporary investment of those borrowings.
    </p>

    <p>
      Where funds are borrowed generally, borrowing costs eligible for
      capitalisation are determined using the weighted average
      capitalisation rate applied to expenditures incurred on the qualifying asset.
    </p>

    <h4>Analysis of Expenditure</h4>

    <table border="1">
      <tr>
        <th>Date</th>
        <th>Expenditure (₹ '000)</th>
        <th>Allocated to General Borrowings (₹ '000)</th>
        <th>Weighted for Period Outstanding (₹ '000)</th>
      </tr>

      <tr>
        <td>1st April, 20X1</td>
        <td>200</td>
        <td>0</td>
        <td>0</td>
      </tr>

      <tr>
        <td>30th June, 20X1</td>
        <td>600</td>
        <td>100*</td>
        <td>100 × 9/12 = 75</td>
      </tr>

      <tr>
        <td>31st December, 20X1</td>
        <td>1,200</td>
        <td>1,200</td>
        <td>1,200 × 3/12 = 300</td>
      </tr>

      <tr>
        <td>31st March, 20X2</td>
        <td>200</td>
        <td>200</td>
        <td>200 × 0/12 = 0</td>
      </tr>

      <tr>
        <th>Total</th>
        <th>2,200</th>
        <th></th>
        <th>375</th>
      </tr>
    </table>

    <p>
      * Specific borrowings of ₹7,00,000 were fully utilised on 1st April and
      on 30th June to the extent of ₹5,00,000. Hence the balance expenditure
      of ₹1,00,000 was allocated to general borrowings.
    </p>

    <h4>Capitalisation Rate on General Borrowings</h4>

    <p>
      Capitalisation Rate =
    </p>

    <p>
      [(₹10,00,000 × 12.5%) + (₹15,00,000 × 10%)]
      ÷ (₹10,00,000 + ₹15,00,000)
    </p>

    <p>
      = 11%
    </p>

    <h4>Borrowing Cost Eligible for Capitalisation</h4>

    <table border="1">
      <tr>
        <th>Particulars</th>
        <th>Amount (₹)</th>
      </tr>

      <tr>
        <td>Borrowing Cost on Specific Loan</td>
        <td>65,000</td>
      </tr>

      <tr>
        <td>Borrowing Cost on General Borrowings (₹3,75,000 × 11%)</td>
        <td>41,250</td>
      </tr>

      <tr>
        <th>Total Borrowing Cost</th>
        <th>1,06,250</th>
      </tr>

      <tr>
        <td>Less: Interest Income on Specific Borrowings</td>
        <td>(20,000)</td>
      </tr>

      <tr>
        <th>Borrowing Cost Eligible for Capitalisation</th>
        <th>86,250</th>
      </tr>
    </table>

    <p>
      Therefore, the amount of borrowing costs that can be capitalised
      as per Ind AS 23 is <strong>₹86,250</strong>.
    </p>
    `,
},
{
    question_id: "FR_MTPMAR25_I_5A",
    source: "ICAI MTP March 2025",
    chapter_name: "Ind AS 115 - Revenue from Contracts with Customers",
    placement: 5,
    marks: 10,

    question_html: `
    <p>
      A Ltd. is a company which is in the business of manufacturing engineering
      machines and providing after sales services.
    </p>

    <p>
      The company entered into a contract with Mr. Anik to supply and install
      a machine, namely 'model pi' on 1st April 20X1 and to service this machine
      on 30th September 20X1 and 1st April 20X2.
    </p>

    <p>
      The cost of manufacturing the machine to A Ltd. was ₹1,60,000.
      It is possible for a customer to purchase both the machine 'model pi'
      and the maintenance services separately.
    </p>

    <p>
      Mr. Anik is contractually obliged to pay A Ltd. ₹4,00,000 on 1st April, 20X2.
    </p>

    <p>
      The prevailing rate for one-year credit granted to trade customers in
      the industry is 5 percent per six-month period.
    </p>

    <p>
      As per experience, the servicing of the machine 'model pi' sold to
      Mr. Anik is expected to cost A Ltd. ₹30,000 to perform the first service
      and ₹50,000 to perform the second service. Assume actual costs equal
      expected costs.
    </p>

    <p>
      When A Ltd. provides machine services to customers in a separate
      transaction it earns a margin of 50% on cost.
    </p>

    <p>
      On 1st April, 20X1, the cash selling price of the machine 'model pi'
      sold to Mr. Anik is ₹2,51,927.
    </p>

    <p><strong>Required:</strong></p>

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
        Prepare journal entries to record the information set out above in
        the books of accounts of A Ltd. for the years ended 31st March, 20X2
        and 31st March, 20X3.
      </li>
    </ol>
    `,

    solution_html: `
    <h4>(i) Identification of Separate Components of the Contract</h4>

    <p>
      As per paragraph 27 of Ind AS 115, a promised good or service is distinct if:
    </p>

    <ol type="a">
      <li>
        The customer can benefit from the good or service either on its own
        or together with other readily available resources.
      </li>
      <li>
        The promise to transfer the good or service is separately identifiable
        from other promises in the contract.
      </li>
    </ol>

    <p>
      Indicators that goods or services are separately identifiable include:
    </p>

    <ol type="a">
      <li>
        Significant integration services are not provided.
      </li>
      <li>
        The goods or services do not significantly modify or customise
        each other.
      </li>
      <li>
        The goods or services are not highly inter-dependent or highly
        interrelated.
      </li>
    </ol>

    <p>
      Accordingly, on 1st April, 20X1, A Ltd. entered into a transaction
      containing the following separately identifiable components:
    </p>

    <ol>
      <li>Sale of machine 'model pi'.</li>
      <li>
        Rendering of maintenance services on:
        <ul>
          <li>30th September, 20X1</li>
          <li>1st April, 20X2</li>
        </ul>
      </li>
      <li>
        Financing component arising due to extended credit period.
      </li>
    </ol>

    <h4>(ii) Allocation of Revenue</h4>

    <table border="1">
      <tr>
        <th>Date</th>
        <th>Opening Balance (₹)</th>
        <th>Finance Income (₹)</th>
        <th>Goods (₹)</th>
        <th>Services (₹)</th>
        <th>Payment Received (₹)</th>
        <th>Closing Balance (₹)</th>
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
        <td>12,596</td>
        <td>-</td>
        <td>45,000</td>
        <td>-</td>
        <td>3,09,523</td>
      </tr>

      <tr>
        <td>31st March, 20X2</td>
        <td>3,09,523</td>
        <td>15,477</td>
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

    <p><strong>Note 1:</strong></p>
    <p>
      Finance income on 30th September, 20X1
      = 5% × ₹2,51,927
      = ₹12,596
    </p>

    <p><strong>Note 2:</strong></p>
    <p>
      Finance income on 31st March, 20X2
      = 5% × ₹3,09,523
      = ₹15,477
    </p>

    <h4>(iii) Journal Entries</h4>

    <p><strong>1st April, 20X1</strong></p>

    <table border="1">
      <tr>
        <th>Particulars</th>
        <th>Dr. (₹)</th>
        <th>Cr. (₹)</th>
      </tr>
      <tr>
        <td>Mr. Anik A/c Dr.</td>
        <td>2,51,927</td>
        <td>-</td>
      </tr>
      <tr>
        <td>To Revenue - Sale of Goods (P&L)</td>
        <td>-</td>
        <td>2,51,927</td>
      </tr>
    </table>

    <p>(Being revenue recognised from sale of machine on credit)</p>

    <table border="1">
      <tr>
        <th>Particulars</th>
        <th>Dr. (₹)</th>
        <th>Cr. (₹)</th>
      </tr>
      <tr>
        <td>Cost of Goods Sold (P&L) Dr.</td>
        <td>1,60,000</td>
        <td>-</td>
      </tr>
      <tr>
        <td>To Inventory</td>
        <td>-</td>
        <td>1,60,000</td>
      </tr>
    </table>

    <p>(Being cost of machine sold recognised)</p>

    <p><strong>30th September, 20X1</strong></p>

    <table border="1">
      <tr>
        <th>Particulars</th>
        <th>Dr. (₹)</th>
        <th>Cr. (₹)</th>
      </tr>
      <tr>
        <td>Mr. Anik A/c Dr.</td>
        <td>12,596</td>
        <td>-</td>
      </tr>
      <tr>
        <td>To Finance Income (P&L)</td>
        <td>-</td>
        <td>12,596</td>
      </tr>
    </table>

    <p>(Being finance income recognised)</p>

    <table border="1">
      <tr>
        <th>Particulars</th>
        <th>Dr. (₹)</th>
        <th>Cr. (₹)</th>
      </tr>
      <tr>
        <td>Mr. Anik A/c Dr.</td>
        <td>45,000</td>
        <td>-</td>
      </tr>
      <tr>
        <td>To Revenue - Rendering of Services (P&L)</td>
        <td>-</td>
        <td>45,000</td>
      </tr>
    </table>

    <p>(Being revenue recognised from first maintenance service)</p>

    <table border="1">
      <tr>
        <th>Particulars</th>
        <th>Dr. (₹)</th>
        <th>Cr. (₹)</th>
      </tr>
      <tr>
        <td>Cost of Services (P&L) Dr.</td>
        <td>30,000</td>
        <td>-</td>
      </tr>
      <tr>
        <td>To Cash / Bank / Payables</td>
        <td>-</td>
        <td>30,000</td>
      </tr>
    </table>

    <p>(Being cost of first maintenance service recognised)</p>

    <p><strong>31st March, 20X2</strong></p>

    <table border="1">
      <tr>
        <th>Particulars</th>
        <th>Dr. (₹)</th>
        <th>Cr. (₹)</th>
      </tr>
      <tr>
        <td>Mr. Anik A/c Dr.</td>
        <td>15,477</td>
        <td>-</td>
      </tr>
      <tr>
        <td>To Finance Income (P&L)</td>
        <td>-</td>
        <td>15,477</td>
      </tr>
    </table>

    <p>(Being finance income recognised)</p>

    <p><strong>1st April, 20X2</strong></p>

    <table border="1">
      <tr>
        <th>Particulars</th>
        <th>Dr. (₹)</th>
        <th>Cr. (₹)</th>
      </tr>
      <tr>
        <td>Mr. Anik A/c Dr.</td>
        <td>75,000</td>
        <td>-</td>
      </tr>
      <tr>
        <td>To Revenue - Rendering of Services (P&L)</td>
        <td>-</td>
        <td>75,000</td>
      </tr>
    </table>

    <p>(Being revenue recognised from second maintenance service)</p>

    <table border="1">
      <tr>
        <th>Particulars</th>
        <th>Dr. (₹)</th>
        <th>Cr. (₹)</th>
      </tr>
      <tr>
        <td>Cost of Services (P&L) Dr.</td>
        <td>50,000</td>
        <td>-</td>
      </tr>
      <tr>
        <td>To Cash / Bank / Payables</td>
        <td>-</td>
        <td>50,000</td>
      </tr>
    </table>

    <p>(Being cost of second maintenance service recognised)</p>

    <table border="1">
      <tr>
        <th>Particulars</th>
        <th>Dr. (₹)</th>
        <th>Cr. (₹)</th>
      </tr>
      <tr>
        <td>Bank A/c Dr.</td>
        <td>4,00,000</td>
        <td>-</td>
      </tr>
      <tr>
        <td>To Mr. Anik A/c</td>
        <td>-</td>
        <td>4,00,000</td>
      </tr>
    </table>

    <p>(Being receipt from customer recognised)</p>
    `,
},
{
    question_id: "FR_MTPMAR25_I_5B",
    source: "ICAI MTP March 2025",
    chapter_name: "Ind AS 19 - Employee Benefits / Ind AS 1 - Presentation of Financial Statements",
    placement: 5,
    marks: 4,

    question_html: `
    <p><strong>Either</strong></p>

    <p>
      A post-employment medical plan reimburses 10 percent of an employee's
      post-employment medical costs if the employee leaves after more than
      ten and less than twenty years of service and 50 percent of those costs
      if the employee leaves after twenty or more years of service.
    </p>

    <p>
      Determine how will the benefit be attributed to the years of service.
    </p>

    <p><strong>OR</strong></p>

    <p>
      XYZ Limited ('the Company') is into the manufacturing of tractor parts
      and mainly supplying components to Original Equipment Manufacturers (OEMs).
      The Company does not have any subsidiary, joint venture or associate company.
    </p>

    <p>
      During preparation of financial statements for the year ended
      31st March, 20X1, the accounts department is not sure about the treatment /
      presentation of the following matters:
    </p>

    <table border="1">
      <tr>
        <th>S. No.</th>
        <th>Matters</th>
      </tr>
      <tr>
        <td>(i)</td>
        <td>
          There are qualifications in the audit report of the Company with
          reference to two Ind AS.
        </td>
      </tr>
      <tr>
        <td>(ii)</td>
        <td>
          Is it mandatory to add the word "standalone" before each of the
          components of financial statements?
        </td>
      </tr>
      <tr>
        <td>(iii)</td>
        <td>
          The Company is an Indian company and preparing and presenting its
          financial statements in ₹. Is it necessary to write in the financial
          statements that the financial statements have been presented in ₹?
        </td>
      </tr>
      <tr>
        <td>(iv)</td>
        <td>
          The Company had sales transactions with 10 related parties during
          previous year. However, during current year, there are no transactions
          with 4 related parties out of the aforesaid 10 related parties.
          Hence, the Company is of the view that it need not disclose sales
          transactions with these 4 parties because there are no transactions
          during the current year.
        </td>
      </tr>
    </table>

    <p>
      Evaluate the above matters with respect to preparation and presentation
      of general purpose financial statements.
    </p>
    `,

    solution_html: `
    <h4>Either - Post Employment Medical Plan</h4>

    <ol>
      <li>
        Service in later years will lead to a materially higher level of benefit
        than in earlier years. Therefore, for employees expected to leave after
        20 or more years, the entity should attribute benefit on a straight-line
        basis in accordance with paragraph 71 of Ind AS 19.
      </li>

      <li>
        Service beyond 20 years will lead to no material additional benefit.
        Hence, the benefit attributed to each of the first 20 years will be:
        <br>
        50% ÷ 20 years = 2.5% of the present value of expected medical costs.
      </li>

      <li>
        For employees expected to leave between 10 and 20 years,
        the benefit attributed to each of the first 10 years will be:
        <br>
        10% ÷ 10 years = 1% of the present value of expected medical costs.
      </li>

      <li>
        For such employees, no benefit is attributed to service between the end
        of the tenth year and the expected date of leaving.
      </li>

      <li>
        For employees expected to leave within ten years,
        no benefit is attributed.
      </li>

      <li>
        The current service cost in each year reflects the probability that the
        employee may not complete the required service period to earn part or
        all of the benefits.
      </li>
    </ol>

    <hr>

    <h4>OR - Presentation of Financial Statements</h4>

    <p><strong>(i) Qualifications in Audit Report</strong></p>

    <p>
      Yes. An entity whose financial statements comply with Ind AS shall make
      an explicit and unreserved statement of such compliance in the notes.
      An entity shall not describe financial statements as complying with
      Ind AS unless they comply with all requirements of Ind AS.
      (Refer Para 16 of Ind AS 1)
    </p>

    <p><strong>(ii) Use of the word "Standalone"</strong></p>

    <p>
      No. However, the entity should disclose that these are the individual
      financial statements of the Company.
      (Refer Para 51(b) of Ind AS 1)
    </p>

    <p><strong>(iii) Disclosure of Presentation Currency</strong></p>

    <p>
      Yes. Paragraph 51(d) of Ind AS 1 requires an entity to display the
      presentation currency prominently and repeat it when necessary for the
      information presented to be understandable.
    </p>

    <p><strong>(iv) Comparative Related Party Disclosures</strong></p>

    <p>
      No. As per Paragraph 38 of Ind AS 1, except where an Ind AS permits or
      requires otherwise, an entity shall present comparative information for
      all amounts reported in the current period's financial statements.
    </p>

    <p>
      Comparative information shall also be provided for narrative and
      descriptive information where relevant for understanding the current
      period's financial statements.
    </p>

    <p>
      Therefore, related party sales transactions disclosed in the previous
      period with those 4 related parties shall continue to appear as
      comparative information, even though no transactions occurred during
      the current year.
    </p>
    `,
},
{
    question_id: "FR_MTPMAR25_I_6A",
    source: "ICAI MTP March 2025",
    chapter_name: "Ind AS 116 - Leases / Code of Ethics",
    placement: 6,
    marks: 5,

    question_html: `
    <p>
      Sunshine Ltd., a listed company in the cosmetics industry, has debt covenants
      attached to some of its borrowings which are included in Financial Liabilities
      in the Balance Sheet. These covenants mandate the company to repay the debt
      in full if Sunshine Ltd. fails to maintain a liquidity ratio and operating margin
      above the specified limit.
    </p>

    <p>
      The directors alongwith the CFO of the Company who is a chartered accountant
      are considering entering into a fresh five-year leasing arrangement but are
      concerned about the negative impact any potential lease obligations may have
      on the above-mentioned covenants.
    </p>

    <p>
      Accordingly, the directors and CFO propose that the lease agreement be drafted
      in such a way that it is a series of six ten-month leases rather than a single
      five-year lease in order to utilize the short-term lease exemption available
      under Ind AS 116, Leases. This would then enable accounting for the leases
      in their legal form.
    </p>

    <p>
      The directors believe that this treatment will meet the requirements of the
      debt covenant, though such treatment may be contrary to the accounting
      standards.
    </p>

    <p><strong>Required:</strong></p>

    <p>
      Discuss the ethical and accounting implications of the above issue from the
      perspective of CFO.
    </p>
    `,

    solution_html: `
    <h4>Lease agreement substance presentation</h4>

    <p>
      Stakeholders make informed and accurate decisions based on the information
      presented in the financial statements and as such, ensuring the financial
      statements are reliable and of utmost importance.
    </p>

    <p>
      The directors of Sunshine Ltd. are ethically responsible to produce financial
      statements that comply with Ind AS and are transparent and free from material
      error.
    </p>

    <p>
      Lenders often attach covenants to the terms of the agreement in order to
      protect their interests in an entity. They would also be of crucial importance
      to potential debt and equity investors when assessing the risks and returns
      from any future investment in the entity.
    </p>

    <p>
      The proposed action by Sunshine Ltd. appears to be a deliberate attempt to
      circumvent the terms of the covenants.
    </p>

    <p>
      The legal form would require treatment as a series of short-term leases which
      would be recorded in the profit or loss, without any right-of-use asset and
      lease liability being recognized as required by Ind AS 116, Leases.
    </p>

    <p>
      This would be a form of ‘off-balance sheet finance’ and would not report the
      true assets and obligations of Sunshine Ltd.
    </p>

    <p>
      As a result of this proposed action, the liquidity ratios would be adversely
      misrepresented.
    </p>

    <p>
      Further, the operating profit margins would also be adversely affected, as
      the expenses associated with the lease are likely to be higher than the
      depreciation charge if a leased asset was recognized, hence the proposal may
      actually be detrimental to the operating profit covenant.
    </p>

    <p>
      Sunshine Ltd. is aware that the proposed treatment may be contrary to Ind AS.
      Such manipulation would be a clear breach of the fundamental principles of
      objectivity and integrity as outlined in the Code of Ethics.
    </p>

    <p>
      It is important for a chartered accountant to exercise professional behaviour
      and due care at all times.
    </p>

    <p>
      The proposals by Sunshine Ltd. are likely to mislead the stakeholders in the
      entity. This could discredit the profession by creating a lack of confidence
      within the profession.
    </p>

    <p>
      The directors of Sunshine Ltd. must be reminded of their ethical
      responsibilities and persuaded that the accounting treatment must fully
      comply with the Ind AS and principles outlined within the framework should
      they proceed with the financing agreement.
    </p>

    <p>
      However, if the CFO fails to comply with his professional duties, he will be
      subject to professional misconduct under Clause 1 of Part II of the Second
      Schedule of the Chartered Accountants Act, 1949.
    </p>

    <p>
      Clause 1 states that a member of the Institute, whether in practice or not,
      shall be deemed to be guilty of professional misconduct if he contravenes
      any of the provisions of this Act or the regulations made thereunder or any
      guidelines issued by the Council.
    </p>

    <p>
      As per the Guidelines issued by the Council, a member of the Institute who
      is an employee shall exercise due diligence and shall not be grossly negligent
      in the conduct of his duties.
    </p>
    `,
},
{
    question_id: "FR_MTPMAR25_I_6B",
    source: "ICAI MTP March 2025",
    chapter_name: "Ind AS 101 - First-time Adoption of Indian Accounting Standards",
    placement: 6,
    marks: 5,

    question_html: `
    <p>
      Mathur India Private Limited has to present its first financials under
      Ind AS for the year ended 31st March, 20X3. The transition date is
      1st April, 20X1.
    </p>

    <p>The following adjustments were made upon transition to Ind AS:</p>

    <ol type="i">
      <li>
        The Company opted to fair value its land as on the date on transition.
        The fair value of the land as on 1st April, 20X1 was ₹10 crores.
        The carrying amount as on 1st April, 20X1 under the existing GAAP
        was ₹4.5 crores.
      </li>

      <li>
        The Company has recognised a provision for proposed dividend of
        ₹60 lacs and related dividend distribution tax of ₹18 lacs during the
        year ended 31st March, 20X1. It was written back as on opening
        balance sheet date.
      </li>

      <li>
        The Company fair values its investments in equity shares on the date
        of transition. The increase on account of fair valuation of shares is
        ₹75 lacs.
      </li>

      <li>
        The Company has an Equity Share Capital of ₹80 crores and
        Redeemable Preference Share Capital of ₹25 crores.
      </li>

      <li>
        The reserves and surplus as on 1st April, 20X1 before transition to
        Ind AS was ₹95 crores representing ₹40 crores of general reserve and
        ₹5 crores of capital reserve acquired out of business combination and
        balance is surplus in the retained earnings.
      </li>

      <li>
        The company identified that the preference shares were in nature of
        financial liabilities.
      </li>
    </ol>

    <p>
      What is the balance of total equity (Equity and other equity) as on
      1st April, 20X1 after transition to Ind AS?
    </p>

    <p>
      Show reconciliation between total equity as per AS (Accounting Standards)
      and as per Ind AS to be presented in the opening balance sheet as on
      1st April, 20X1.
    </p>

    <p><strong>Ignore deferred tax impact.</strong></p>
    `,

    solution_html: `
    <h4>Computation of balance total equity as on 1st April, 20X1 after transition to Ind AS</h4>

    <table border="1">
      <tr>
        <th>Particulars</th>
        <th>₹ in crore</th>
      </tr>
      <tr>
        <td>Share Capital - Equity Share Capital</td>
        <td>80.00</td>
      </tr>
      <tr>
        <td colspan="2"><strong>Other Equity</strong></td>
      </tr>
      <tr>
        <td>General Reserve</td>
        <td>40.00</td>
      </tr>
      <tr>
        <td>Capital Reserve</td>
        <td>5.00</td>
      </tr>
      <tr>
        <td>Retained Earnings (95 - 5 - 40)</td>
        <td>50.00</td>
      </tr>
      <tr>
        <td>Add: Increase in value of land (10 - 4.5)</td>
        <td>5.50</td>
      </tr>
      <tr>
        <td>Add: De-recognition of proposed dividend (0.60 + 0.18)</td>
        <td>0.78</td>
      </tr>
      <tr>
        <td>Add: Increase in value of investment</td>
        <td>0.75</td>
      </tr>
      <tr>
        <td><strong>Balance total equity after transition</strong></td>
        <td><strong>182.03</strong></td>
      </tr>
    </table>

    <h4>Reconciliation between Total Equity as per AS and Ind AS</h4>

    <table border="1">
      <tr>
        <th>Particulars</th>
        <th>₹ in crore</th>
      </tr>
      <tr>
        <td>Equity Share Capital</td>
        <td>80.00</td>
      </tr>
      <tr>
        <td>Redeemable Preference Share Capital</td>
        <td>25.00</td>
      </tr>
      <tr>
        <td><strong>Total Share Capital</strong></td>
        <td><strong>105.00</strong></td>
      </tr>
      <tr>
        <td>Reserves and Surplus</td>
        <td>95.00</td>
      </tr>
      <tr>
        <td><strong>Total Equity as per AS</strong></td>
        <td><strong>200.00</strong></td>
      </tr>

      <tr>
        <td colspan="2"><strong>Adjustments</strong></td>
      </tr>

      <tr>
        <td>
          Preference Share Capital classified as Financial Liability
        </td>
        <td>(25.00)</td>
      </tr>

      <tr>
        <td>
          Proposed dividend not considered as liability on 1st April, 20X1
        </td>
        <td>0.78</td>
      </tr>

      <tr>
        <td>
          Increase in value of land due to remeasurement at fair value
        </td>
        <td>5.50</td>
      </tr>

      <tr>
        <td>
          Increase in value of investment due to remeasurement at fair value
        </td>
        <td>0.75</td>
      </tr>

      <tr>
        <td><strong>Total Adjustments</strong></td>
        <td><strong>6.25</strong></td>
      </tr>

      <tr>
        <td><strong>Equity after transition to Ind AS</strong></td>
        <td><strong>182.03</strong></td>
      </tr>
    </table>
    `,
},
{
    question_id: "FR_MTPMAR25_I_6C",
    source: "ICAI MTP March 2025",
    chapter_name: "Ind AS 113 - Fair Value Measurement",
    placement: 6,
    marks: 4,

    question_html: `
    <p>
      ABC Ltd. acquired 5% equity shares of XYZ Ltd. for ₹10 crores in the
      year 20X1-20X2.
    </p>

    <p>
      The company is in process of preparing the financial statements for the
      year 20X2-20X3 and is assessing the fair value at subsequent measurement
      of the investment made in XYZ Ltd.
    </p>

    <p>
      Based on the observable input, ABC Ltd. identified a similar nature of
      transaction in which PQR Ltd. acquired 20% equity shares in XYZ Ltd.
      for ₹60 crores.
    </p>

    <p>
      The price of such transaction was determined on the basis of Comparable
      Companies Method (CCM) - Enterprise Value (EV) / EBITDA which was 8.
    </p>

    <p>
      For the current year, the EBITDA of XYZ Ltd. is ₹40 crores.
    </p>

    <p>
      At the time of acquisition, the valuation was determined after considering
      5% liquidity discount and 5% non-controlling stake discount.
    </p>

    <p>
      What will be the fair value of ABC Ltd.'s investment in XYZ Ltd. as on
      the balance sheet date?
    </p>
    `,

    solution_html: `
    <h4>Determination of Enterprise Value of XYZ Ltd.</h4>

    <table border="1">
      <tr>
        <th>Particulars</th>
        <th>₹ in crore</th>
      </tr>
      <tr>
        <td>EBITDA as on the measurement date</td>
        <td>40</td>
      </tr>
      <tr>
        <td>EV / EBITDA Multiple</td>
        <td>8</td>
      </tr>
      <tr>
        <td><strong>Enterprise Value of XYZ Ltd.</strong></td>
        <td><strong>320</strong></td>
      </tr>
    </table>

    <h4>Determination of Subsequent Measurement of Investment</h4>

    <table border="1">
      <tr>
        <th>Particulars</th>
        <th>₹ in crore</th>
      </tr>
      <tr>
        <td>Enterprise Value of XYZ Ltd.</td>
        <td>320</td>
      </tr>
      <tr>
        <td>ABC Ltd.'s share based on 5% holding (5% × 320)</td>
        <td>16.0</td>
      </tr>
      <tr>
        <td>
          Less: Liquidity Discount and Non-controlling Stake Discount
          (5% + 5% = 10%)
        </td>
        <td>(1.6)</td>
      </tr>
      <tr>
        <td><strong>Fair Value of Investment</strong></td>
        <td><strong>14.4</strong></td>
      </tr>
    </table>

    <p>
      Therefore, the fair value of ABC Ltd.'s investment in XYZ Ltd.
      as on the balance sheet date is <strong>₹14.4 crores</strong>.
    </p>
    `,
},
{
    question_id: "FR_MTPAPR25_II_1",
    source: "ICAI MTP April 2025",
    chapter_name: "Ind AS 103 - Business Combinations",
    placement: 1,
    marks: 14,

    question_html: `
    <p>
      The balance sheet of <strong>Professional Ltd.</strong> and
      <strong>Dynamic Ltd.</strong> as on <strong>31st March, 20X2</strong>
      is given below:
    </p>

    <table border="1">
      <tr>
        <th>Assets</th>
        <th>Professional Ltd.<br>(₹ in lakhs)</th>
        <th>Dynamic Ltd.<br>(₹ in lakhs)</th>
      </tr>
      <tr>
        <td>Property, Plant and Equipment</td>
        <td>300</td>
        <td>500</td>
      </tr>
      <tr>
        <td>Investment</td>
        <td>400</td>
        <td>100</td>
      </tr>
      <tr>
        <td>Inventories</td>
        <td>250</td>
        <td>150</td>
      </tr>
      <tr>
        <td>Trade Receivables</td>
        <td>450</td>
        <td>300</td>
      </tr>
      <tr>
        <td>Cash and Cash Equivalents</td>
        <td>200</td>
        <td>100</td>
      </tr>
      <tr>
        <td>Others</td>
        <td>400</td>
        <td>230</td>
      </tr>
      <tr>
        <th>Total Assets</th>
        <th>2,000</th>
        <th>1,380</th>
      </tr>
    </table>

    <br>

    <table border="1">
      <tr>
        <th>Equity & Liabilities</th>
        <th>Professional Ltd.<br>(₹ in lakhs)</th>
        <th>Dynamic Ltd.<br>(₹ in lakhs)</th>
      </tr>

      <tr>
        <td>Equity Share Capital</td>
        <td>500</td>
        <td>400</td>
      </tr>
      <tr>
        <td>Other Equity</td>
        <td>810</td>
        <td>225</td>
      </tr>
      <tr>
        <td>Long-term Borrowings</td>
        <td>250</td>
        <td>200</td>
      </tr>
      <tr>
        <td>Long-term Provisions</td>
        <td>50</td>
        <td>70</td>
      </tr>
      <tr>
        <td>Deferred Tax</td>
        <td>40</td>
        <td>35</td>
      </tr>
      <tr>
        <td>Short-term Borrowings</td>
        <td>100</td>
        <td>150</td>
      </tr>
      <tr>
        <td>Trade Payables</td>
        <td>250</td>
        <td>300</td>
      </tr>
      <tr>
        <th>Total Equity & Liabilities</th>
        <th>2,000</th>
        <th>1,380</th>
      </tr>
    </table>

    <p><strong>Additional Information:</strong></p>

    <ol>
      <li>
        Professional Ltd. acquired 70% shares of Dynamic Ltd. on
        1st April, 20X2 by issuing one share of Professional Ltd.
        for every two shares of Dynamic Ltd.
        Fair value of Professional Ltd.'s share = ₹40 per share.
      </li>

      <li>
        Fair value adjustments:
        <ol type="a">
          <li>Fair value of PPE = ₹350 lakhs.</li>

          <li>
            Additional consideration is higher of ₹35 lakhs or
            25% of excess profits over previous year's profits.
            Amount payable after two years.
            Previous year's profit = ₹10 lakhs.
            Expected profit = ₹20 lakhs.
          </li>

          <li>
            ₹20 lakhs payable to one founder shareholder provided
            he continues employment for two years after acquisition.
          </li>

          <li>
            Dynamic Ltd.'s equity settled share-based payment award
            was replaced by Professional Ltd.'s award.
            <ul>
              <li>Original vesting period = 4 years</li>
              <li>Service completed = 2 years</li>
              <li>New vesting period = 1 year from acquisition</li>
              <li>Fair value of original award = ₹5 lakhs</li>
              <li>Fair value of replacement award = ₹8 lakhs</li>
            </ul>
          </li>

          <li>
            Dynamic Ltd. had a lawsuit pending.
            Claim amount = ₹50 lakhs.
            Fair value of liability = ₹5 lakhs.
          </li>
        </ol>
      </li>

      <li>
        Applicable tax rate = 30%.
      </li>
    </ol>

    <p>
      <strong>Required:</strong><br>
      Prepare the Opening Consolidated Balance Sheet of
      Professional Ltd. as on 1st April, 20X2.
      Assume discount rate of 10%.
    </p>
    `,

    solution_html: `
    <h4>Opening Consolidated Balance Sheet of Professional Ltd. as on 1st April, 20X2</h4>

    <table border="1">
      <tr>
        <th>Particulars</th>
        <th>₹ in lakhs</th>
      </tr>

      <tr>
        <td colspan="2"><strong>Assets</strong></td>
      </tr>

      <tr>
        <td>Property, Plant & Equipment</td>
        <td>650.00</td>
      </tr>

      <tr>
        <td>Investment</td>
        <td>500.00</td>
      </tr>

      <tr>
        <td>Inventories</td>
        <td>400.00</td>
      </tr>

      <tr>
        <td>Trade Receivables</td>
        <td>750.00</td>
      </tr>

      <tr>
        <td>Cash & Cash Equivalents</td>
        <td>300.00</td>
      </tr>

      <tr>
        <td>Other Assets</td>
        <td>630.00</td>
      </tr>

      <tr>
        <th>Total Assets</th>
        <th>3,230.00</th>
      </tr>

      <tr>
        <td colspan="2"><strong>Equity & Liabilities</strong></td>
      </tr>

      <tr>
        <td>Share Capital</td>
        <td>514.00</td>
      </tr>

      <tr>
        <td>Other Equity</td>
        <td>1,128.62</td>
      </tr>

      <tr>
        <td>Non-controlling Interest</td>
        <td>154.95</td>
      </tr>

      <tr>
        <td>Long-term Borrowings</td>
        <td>450.00</td>
      </tr>

      <tr>
        <td>Long-term Provisions</td>
        <td>148.93</td>
      </tr>

      <tr>
        <td>Deferred Tax</td>
        <td>28.50</td>
      </tr>

      <tr>
        <td>Short-term Borrowings</td>
        <td>250.00</td>
      </tr>

      <tr>
        <td>Trade Payables</td>
        <td>550.00</td>
      </tr>

      <tr>
        <td>Provision for Lawsuit</td>
        <td>5.00</td>
      </tr>

      <tr>
        <th>Total Equity & Liabilities</th>
        <th>3,230.00</th>
      </tr>
    </table>

    <h4>Working Notes</h4>

    <ol>
      <li>Computation of Purchase Consideration.</li>
      <li>Fair value adjustment of identifiable net assets.</li>
      <li>Deferred consideration discounted at 10%.</li>
      <li>Replacement share-based payment award allocation as per Ind AS 103.</li>
      <li>Recognition of contingent liability at fair value.</li>
      <li>Deferred tax recognised on fair value adjustments.</li>
      <li>Calculation of Non-controlling Interest.</li>
      <li>Calculation of Capital Reserve arising on acquisition.</li>
    </ol>

    <p><strong>Important Notes:</strong></p>

    <ul>
      <li>PPE is recognised at fair value.</li>
      <li>Deferred consideration is discounted to present value.</li>
      <li>Minimum deferred payment is treated as deferred consideration, whereas contingent element has nil fair value.</li>
      <li>Founder payment is post-combination employee compensation and is not part of purchase consideration.</li>
      <li>Replacement award attributable to pre-combination service forms part of consideration.</li>
      <li>Lawsuit is recognised as contingent liability at fair value.</li>
    </ul>
    `,
},
{
    question_id: "FR_MTPAPR25_II_2A",
    source: "ICAI MTP April 2025",
    chapter_name: "Ind AS 109 - Financial Instruments",
    placement: 2,
    marks: 10,

    question_html: `
    <p>
      Company A, an Indian company whose functional currency is ₹, enters into
      a contract to purchase machinery from an unrelated local supplier,
      Company B.
    </p>

    <p>
      The functional currency of Company B is also ₹. However, the contract is
      denominated in USD, since the machinery is sourced by Company B from a
      US-based supplier.
    </p>

    <p>
      Payment is due to Company B on delivery of the machinery.
    </p>

    <p><strong>Key terms of the contract are as follows:</strong></p>

    <table border="1">
      <tr>
        <th>Contractual Features</th>
        <th>Details</th>
      </tr>
      <tr>
        <td>Contract / Order Date</td>
        <td>9 September 20X1</td>
      </tr>
      <tr>
        <td>Delivery / Payment Date</td>
        <td>31 December 20X1</td>
      </tr>
      <tr>
        <td>Purchase Price</td>
        <td>USD 1,000,000</td>
      </tr>
      <tr>
        <td>USD/₹ Forward Rate on 9 September 20X1 for 31 December 20X1 maturity</td>
        <td>67.8</td>
      </tr>
      <tr>
        <td>USD/₹ Spot Rate on 9 September 20X1</td>
        <td>66.4</td>
      </tr>
      <tr>
        <td>USD/₹ Forward Rate on 30 September 20X1</td>
        <td>67.5</td>
      </tr>
      <tr>
        <td>USD/₹ Spot Rate on 31 December 20X1</td>
        <td>67.0</td>
      </tr>
    </table>

    <p>
      <strong>Required:</strong>
    </p>

    <p>
      Analyse whether the contract for purchase of machinery (a capital asset)
      from Company B contains an embedded derivative and whether it should be
      separately accounted for in accordance with <strong>Ind AS 109 -
      Financial Instruments</strong>.
    </p>

    <p>
      Also pass the necessary journal entries for accounting the same.
    </p>
    `,

    solution_html: `
    <h4>Analysis as per Ind AS 109</h4>

    <p>
      The contract for purchase of machinery contains an
      <strong>embedded foreign currency derivative</strong> which is required
      to be separated from the host purchase contract and accounted for
      separately because:
    </p>

    <ul>
      <li>
        The host contract is a purchase contract for a non-financial asset and
        is not measured at Fair Value Through Profit or Loss (FVTPL).
      </li>

      <li>
        The foreign currency feature satisfies the definition of a standalone
        derivative since settlement is required in USD at a future date.
      </li>

      <li>
        USD is not the functional currency of either Company A or Company B.
      </li>

      <li>
        Machinery is not an item that is routinely denominated in USD in
        commercial transactions around the world.
      </li>

      <li>
        USD is not a commonly used currency for domestic commercial
        transactions in India.
      </li>
    </ul>

    <p>
      Therefore, Company A shall separate the embedded foreign currency
      derivative from the host contract and account for it as a derivative under
      Ind AS 109.
    </p>

    <p>
      The embedded derivative is a forward contract to exchange
      USD 1,000,000 at the contracted forward rate of ₹67.8.
    </p>

    <p>
      Since the contracted forward rate equals the market forward rate on the
      contract date, the derivative has an initial fair value of <strong>Nil</strong>.
    </p>

    <h4>Accounting Entries</h4>

    <table border="1">
      <tr>
        <th>Date</th>
        <th>Particulars</th>
        <th>Dr. (₹)</th>
        <th>Cr. (₹)</th>
      </tr>

      <tr>
        <td>09-Sep-20X1</td>
        <td>
          Initial recognition of forward contract.<br>
          (No entry since initial fair value is Nil.)
        </td>
        <td>Nil</td>
        <td>Nil</td>
      </tr>

      <tr>
        <td>30-Sep-20X1</td>
        <td>
          Derivative Asset A/c Dr.<br>
          &nbsp;&nbsp;&nbsp;&nbsp;To Profit or Loss A/c
        </td>
        <td>3,00,000</td>
        <td>3,00,000</td>
      </tr>

      <tr>
        <td>31-Dec-20X1</td>
        <td>
          Derivative Asset A/c Dr.<br>
          &nbsp;&nbsp;&nbsp;&nbsp;To Profit or Loss A/c
        </td>
        <td>5,00,000</td>
        <td>5,00,000</td>
      </tr>

      <tr>
        <td>31-Dec-20X1</td>
        <td>
          Property, Plant and Equipment A/c Dr.<br>
          &nbsp;&nbsp;&nbsp;&nbsp;To Derivative Asset A/c<br>
          &nbsp;&nbsp;&nbsp;&nbsp;To Creditor / Bank A/c
        </td>
        <td>6,78,00,000</td>
        <td>
          8,00,000<br>
          6,70,00,000
        </td>
      </tr>
    </table>

    <h4>Working Note</h4>

    <table border="1">
      <tr>
        <th>Particulars</th>
        <th>Amount (₹)</th>
      </tr>

      <tr>
        <td>
          Fair value gain on 30 September 20X1<br>
          (67.8 − 67.5) × 10,00,000
        </td>
        <td>3,00,000</td>
      </tr>

      <tr>
        <td>
          Total fair value on 31 December 20X1<br>
          (67.8 − 67.0) × 10,00,000
        </td>
        <td>8,00,000</td>
      </tr>

      <tr>
        <td>Additional gain recognised on 31 December 20X1</td>
        <td>5,00,000</td>
      </tr>

      <tr>
        <td>Machinery recognised at contracted forward value</td>
        <td>6,78,00,000</td>
      </tr>
    </table>
    `,
},
{
    question_id: "FR_MTPAPR25_II_2B",
    source: "ICAI MTP April 2025",
    chapter_name: "Ind AS 115 - Revenue from Contracts with Customers",
    placement: 2,
    marks: 4,

    question_html: `
    <p>
      Sports Team D enters into a three-year agreement to license its team
      name and logo to Apparel Maker M.
    </p>

    <p>
      The licence permits M to use the team name and logo on its products,
      including display products, and in its advertising and marketing
      materials.
    </p>

    <p>
      <strong>Required:</strong>
    </p>

    <ol type="i">
      <li>
        Determine the nature of the licence in the above case.
      </li>

      <li>
        Modify the above facts by assuming that Sports Team D has not played
        games for many years and the licensor is Brand Collector B, an entity
        that acquires intellectual property (IP) such as old team names and
        logos from defunct entities or financially distressed entities.
      </li>
    </ol>

    <p>
      Brand Collector B's business model is to license the IP or obtain
      settlements from entities that use the IP without permission, without
      undertaking any ongoing activities to promote or support the IP.
    </p>

    <p>
      Would your answer be different in this situation?
    </p>
    `,

    solution_html: `
    <h4>(i) Nature of Licence</h4>

    <p>
      The licence granted by Sports Team D is a
      <strong>Right to Access Intellectual Property</strong>.
      Accordingly, revenue from the licence shall be
      <strong>recognised over time</strong>.
    </p>

    <p>
      This conclusion is based on the following facts:
    </p>

    <ul>
      <li>
        Apparel Maker M reasonably expects Sports Team D to continue
        undertaking activities that support and maintain the value of its team
        name and logo by continuing to play games and field a competitive
        team throughout the licence period.
      </li>

      <li>
        These ongoing activities significantly affect the value of the licensed
        intellectual property and the economic benefits that M derives from the
        licence.
      </li>

      <li>
        Sports Team D's activities directly expose Apparel Maker M to both
        positive and negative effects, since the popularity and performance of
        the team directly influence the sale of products bearing the team name
        and logo.
      </li>

      <li>
        The ongoing activities performed by Sports Team D do not transfer any
        separate goods or services to Apparel Maker M as they occur.
      </li>
    </ul>

    <p>
      Therefore, the licence provides a <strong>right to access the intellectual
      property</strong>, and revenue is recognised
      <strong>over the licence period</strong>.
    </p>

    <hr>

    <h4>(ii) Modified Situation</h4>

    <p>
      In the modified case, the answer is
      <strong>different</strong>.
    </p>

    <p>
      Since Brand Collector B merely licenses the intellectual property and
      does not undertake any activities to promote, maintain or enhance its
      value, Apparel Maker M does not reasonably expect any ongoing activities
      that would significantly affect the licensed IP.
    </p>

    <p>
      Accordingly, the nature of the licence is a
      <strong>Right to Use Intellectual Property</strong> as it exists at the
      point in time when the licence is granted.
    </p>

    <p>
      Therefore, revenue from the licence shall be
      <strong>recognised at a point in time</strong> when control of the licence
      is transferred to the customer.
    </p>
    `,
},
{
    question_id: "FR_MTPAPR25_II_3A",
    source: "ICAI MTP April 2025",
    chapter_name: "Ind AS 7 - Statement of Cash Flows",
    placement: 3,
    marks: 10,

    question_html: `
    <p>
      Following is the Balance Sheet of <strong>Kuber Limited</strong> for the year ended
      <strong>31st March, 20X2</strong>:
    </p>

    <table border="1">
      <tr>
        <th rowspan="2">Assets</th>
        <th>20X2</th>
        <th>20X1</th>
      </tr>
      <tr>
        <th>₹ in lakhs</th>
        <th>₹ in lakhs</th>
      </tr>

      <tr><td><strong>Non-current Assets</strong></td><td></td><td></td></tr>
      <tr><td>Property, Plant and Equipment</td><td>13,000</td><td>12,500</td></tr>
      <tr><td>Intangible Assets</td><td>50</td><td>30</td></tr>
      <tr><td>Other Financial Assets</td><td>145</td><td>170</td></tr>
      <tr><td>Deferred Tax Asset (Net)</td><td>855</td><td>750</td></tr>
      <tr><td>Other Non-current Assets</td><td>800</td><td>770</td></tr>
      <tr><th>Total Non-current Assets</th><th>14,850</th><th>14,220</th></tr>

      <tr><td><strong>Current Assets</strong></td><td></td><td></td></tr>
      <tr><td>Investments</td><td>2,300</td><td>2,500</td></tr>
      <tr><td>Cash and Cash Equivalents</td><td>220</td><td>460</td></tr>
      <tr><td>Other Current Assets</td><td>195</td><td>85</td></tr>
      <tr><th>Total Current Assets</th><th>2,715</th><th>3,045</th></tr>

      <tr><th>Total Assets</th><th>17,565</th><th>17,265</th></tr>
    </table>

    <br>

    <table border="1">
      <tr>
        <th rowspan="2">Equity and Liabilities</th>
        <th>20X2</th>
        <th>20X1</th>
      </tr>
      <tr>
        <th>₹ in lakhs</th>
        <th>₹ in lakhs</th>
      </tr>

      <tr><td><strong>Equity</strong></td><td></td><td></td></tr>
      <tr><td>Equity Share Capital</td><td>300</td><td>300</td></tr>
      <tr><td>Other Equity</td><td>12,000</td><td>8,000</td></tr>
      <tr><th>Total Equity</th><th>12,300</th><th>8,300</th></tr>

      <tr><td><strong>Non-current Liabilities</strong></td><td></td><td></td></tr>
      <tr><td>Long-term Borrowings</td><td>2,000</td><td>5,000</td></tr>
      <tr><td>Other Non-current Liabilities</td><td>2,740</td><td>3,615</td></tr>
      <tr><th>Total Non-current Liabilities</th><th>4,740</th><th>8,615</th></tr>

      <tr><td><strong>Current Liabilities</strong></td><td></td><td></td></tr>
      <tr><td>Trade Payables</td><td>150</td><td>90</td></tr>
      <tr><td>Bank Overdraft</td><td>75</td><td>60</td></tr>
      <tr><td>Other Current Liabilities</td><td>300</td><td>200</td></tr>
      <tr><th>Total Current Liabilities</th><th>525</th><th>350</th></tr>

      <tr><th>Total Liabilities</th><th>5,265</th><th>8,965</th></tr>

      <tr><th>Total Equity and Liabilities</th><th>17,565</th><th>17,265</th></tr>
    </table>

    <p><strong>Additional Information:</strong></p>

    <ol>
      <li>Profit after tax for the year ended 31st March, 20X2 is ₹4,450 lakhs.</li>

      <li>Interim dividend paid during the year is ₹450 lakhs.</li>

      <li>
        Depreciation and amortisation charged:
        <ul>
          <li>Property, Plant and Equipment – ₹500 lakhs</li>
          <li>Intangible Assets – ₹20 lakhs</li>
        </ul>
      </li>

      <li>
        During the year, two machineries were sold for ₹70 lakhs.
        Their carrying amount was ₹60 lakhs.
      </li>

      <li>
        Income taxes paid during the year amounted to ₹105 lakhs.
      </li>

      <li>
        Other non-current/current assets and liabilities relate only to
        operating activities and do not contain any investing or financing
        elements.
      </li>
    </ol>

    <p>
      <strong>Required:</strong><br>
      Prepare the <strong>Statement of Cash Flows</strong> for Kuber Limited
      under the <strong>Indirect Method</strong> in accordance with
      <strong>Ind AS 7</strong>.
    </p>
    `,

    solution_html: `
    <h4>Statement of Cash Flows (Indirect Method)</h4>

    <table border="1">
      <tr>
        <th>Particulars</th>
        <th>₹ in lakhs</th>
      </tr>

      <tr>
        <td colspan="2"><strong>Cash Flows from Operating Activities</strong></td>
      </tr>

      <tr><td>Profit after Tax</td><td>4,450</td></tr>
      <tr><td>Add: Income Tax Paid</td><td>105</td></tr>
      <tr><td><strong></strong></td><td><strong>4,555</strong></td></tr>

      <tr><td>Add: Depreciation & Amortisation (500 + 20)</td><td>520</td></tr>
      <tr><td>Less: Gain on Sale of Machinery</td><td>(10)</td></tr>
      <tr><td>Less: Increase in Deferred Tax Asset</td><td>(105)</td></tr>

      <tr><td><strong>Operating Profit before Working Capital Changes</strong></td><td><strong>4,960</strong></td></tr>

      <tr><td>Add: Decrease in Other Financial Assets (170 − 145)</td><td>25</td></tr>
      <tr><td>Less: Increase in Other Non-current Assets (800 − 770)</td><td>(30)</td></tr>
      <tr><td>Less: Increase in Other Current Assets (195 − 85)</td><td>(110)</td></tr>
      <tr><td>Less: Decrease in Other Non-current Liabilities (3,615 − 2,740)</td><td>(875)</td></tr>
      <tr><td>Add: Increase in Other Current Liabilities (300 − 200)</td><td>100</td></tr>
      <tr><td>Add: Increase in Trade Payables (150 − 90)</td><td>60</td></tr>

      <tr><td><strong>Cash Generated from Operations</strong></td><td><strong>4,130</strong></td></tr>

      <tr><td>Less: Income Taxes Paid</td><td>(105)</td></tr>

      <tr><td><strong>Net Cash from Operating Activities (A)</strong></td><td><strong>4,025</strong></td></tr>

      <tr>
        <td colspan="2"><strong>Cash Flows from Investing Activities</strong></td>
      </tr>

      <tr><td>Sale of Machinery</td><td>70</td></tr>
      <tr><td>Purchase of Property, Plant and Equipment</td><td>(1,060)</td></tr>
      <tr><td>Purchase of Intangible Assets</td><td>(40)</td></tr>
      <tr><td>Sale of Investments</td><td>200</td></tr>

      <tr><td><strong>Net Cash used in Investing Activities (B)</strong></td><td><strong>(830)</strong></td></tr>

      <tr>
        <td colspan="2"><strong>Cash Flows from Financing Activities</strong></td>
      </tr>

      <tr><td>Dividend Paid</td><td>(450)</td></tr>
      <tr><td>Repayment of Long-term Borrowings</td><td>(3,000)</td></tr>

      <tr><td><strong>Net Cash used in Financing Activities (C)</strong></td><td><strong>(3,450)</strong></td></tr>

      <tr><td><strong>Net Decrease in Cash & Cash Equivalents (A+B+C)</strong></td><td><strong>(255)</strong></td></tr>

      <tr><td>Add: Opening Cash & Cash Equivalents (460 − 60)</td><td>400</td></tr>

      <tr><td><strong>Closing Cash & Cash Equivalents (220 − 75)</strong></td><td><strong>145</strong></td></tr>

    </table>

    <h4>Working Notes</h4>

    <table border="1">
      <tr>
        <th>Particulars</th>
        <th>Computation (₹ in lakhs)</th>
      </tr>

      <tr>
        <td>Gain on Sale of Machinery</td>
        <td>70 − 60 = 10</td>
      </tr>

      <tr>
        <td>Purchase of Property, Plant & Equipment</td>
        <td>13,000 − (12,500 − 500 − 60) = 1,060</td>
      </tr>

      <tr>
        <td>Purchase of Intangible Assets</td>
        <td>50 − (30 − 20) = 40</td>
      </tr>

      <tr>
        <td>Sale of Investments</td>
        <td>2,500 − 2,300 = 200</td>
      </tr>

      <tr>
        <td>Opening Cash & Cash Equivalents</td>
        <td>460 − 60 = 400</td>
      </tr>

      <tr>
        <td>Closing Cash & Cash Equivalents</td>
        <td>220 − 75 = 145</td>
      </tr>
    </table>
    `,
},
{
    question_id: "FR_MTPAPR25_II_3B",
    source: "ICAI MTP April 2025",
    chapter_name: "Ind AS 16 - Property, Plant and Equipment",
    placement: 3,
    marks: 4,

    question_html: `
    <p>
      Heaven Ltd. had purchased a machinery on <strong>1.4.20X1</strong> for
      <strong>₹30,00,000</strong>, which is reflected in its books at written
      down value of <strong>₹17,50,000</strong> on <strong>1.4.20X6</strong>.
      The company has estimated an upward revaluation of
      <strong>10%</strong> on 1.4.20X6 to arrive at the fair value of the
      asset.
    </p>

    <p>
      Heaven Ltd. availed the option given by Ind AS of transferring some of
      the surplus as the asset is used by the enterprise.
    </p>

    <p>
      On <strong>1.4.20X8</strong>, the machinery was revalued downward by
      <strong>15%</strong> and the company also re-estimated the machinery's
      remaining useful life to be <strong>8 years</strong>.
    </p>

    <p>
      On <strong>31.3.20X10</strong>, the machinery was sold for
      <strong>₹9,35,000</strong>.
    </p>

    <p>
      The company charges depreciation under the
      <strong>Straight Line Method (SLM)</strong>.
    </p>

    <p>
      <strong>Required:</strong><br>
      Compute:
    </p>

    <ol>
      <li>Depreciation after upward revaluation.</li>
      <li>Depreciation after downward revaluation.</li>
      <li>Amount transferred from Revaluation Reserve till 1.4.20X8.</li>
    </ol>
    `,

    solution_html: `
    <h4>Working Note 1: Calculation of Useful Life</h4>

    <table border="1">
      <tr>
        <th>Particulars</th>
        <th>Amount (₹)</th>
      </tr>
      <tr>
        <td>Cost of Machinery (1.4.20X1)</td>
        <td>30,00,000</td>
      </tr>
      <tr>
        <td>Written Down Value on 1.4.20X6</td>
        <td>17,50,000</td>
      </tr>
      <tr>
        <td>Depreciation charged during first 5 years</td>
        <td>12,50,000</td>
      </tr>
      <tr>
        <td>Annual Depreciation (SLM)</td>
        <td>12,50,000 ÷ 5 = 2,50,000</td>
      </tr>
      <tr>
        <td>Remaining Useful Life</td>
        <td>17,50,000 ÷ 2,50,000 = 7 Years</td>
      </tr>
      <tr>
        <td><strong>Total Useful Life</strong></td>
        <td><strong>12 Years</strong></td>
      </tr>
    </table>

    <br>

    <h4>1. Depreciation after Upward Revaluation (1.4.20X6)</h4>

    <table border="1">
      <tr>
        <th>Particulars</th>
        <th>₹</th>
      </tr>
      <tr>
        <td>Book Value as on 1.4.20X6</td>
        <td>17,50,000</td>
      </tr>
      <tr>
        <td>Add: 10% Upward Revaluation</td>
        <td>1,75,000</td>
      </tr>
      <tr>
        <td>Revalued Amount</td>
        <td>19,25,000</td>
      </tr>
      <tr>
        <td>Remaining Useful Life</td>
        <td>7 Years</td>
      </tr>
      <tr>
        <td><strong>Depreciation per year</strong></td>
        <td><strong>19,25,000 ÷ 7 = ₹2,75,000</strong></td>
      </tr>
    </table>

    <br>

    <h4>2. Depreciation after Downward Revaluation (1.4.20X8)</h4>

    <table border="1">
      <tr>
        <th>Particulars</th>
        <th>₹</th>
      </tr>
      <tr>
        <td>Book Value as on 1.4.20X8</td>
        <td>13,75,000</td>
      </tr>
      <tr>
        <td>Less: 15% Downward Revaluation</td>
        <td>(2,06,250)</td>
      </tr>
      <tr>
        <td>Revalued Amount</td>
        <td>11,68,750</td>
      </tr>
      <tr>
        <td>Revised Remaining Useful Life</td>
        <td>8 Years</td>
      </tr>
      <tr>
        <td><strong>Depreciation per year</strong></td>
        <td><strong>11,68,750 ÷ 8 = ₹1,46,094</strong></td>
      </tr>
    </table>

    <br>

    <h4>3. Amount Transferred from Revaluation Reserve till 1.4.20X8</h4>

    <table border="1">
      <tr>
        <th>Particulars</th>
        <th>₹</th>
      </tr>
      <tr>
        <td>Revaluation Reserve created on 1.4.20X6</td>
        <td>1,75,000</td>
      </tr>
      <tr>
        <td>Remaining Useful Life</td>
        <td>7 Years</td>
      </tr>
      <tr>
        <td>Amount transferred every year</td>
        <td>1,75,000 ÷ 7 = 25,000</td>
      </tr>
      <tr>
        <td>Amount transferred in two years</td>
        <td>25,000 × 2 = 50,000</td>
      </tr>
      <tr>
        <td><strong>Balance in Revaluation Reserve as on 1.4.20X8</strong></td>
        <td><strong>1,25,000</strong></td>
      </tr>
    </table>

    <br>

    <h4>4. Amount of Downward Revaluation charged to Statement of Profit and Loss</h4>

    <table border="1">
      <tr>
        <th>Particulars</th>
        <th>₹</th>
      </tr>
      <tr>
        <td>Downward Revaluation</td>
        <td>2,06,250</td>
      </tr>
      <tr>
        <td>Less: Adjusted against Revaluation Reserve</td>
        <td>(1,25,000)</td>
      </tr>
      <tr>
        <td><strong>Charged to Statement of Profit and Loss</strong></td>
        <td><strong>81,250</strong></td>
      </tr>
    </table>
    `,
},
{
    question_id: "FR_MTPAPR25_II_4A",
    source: "ICAI MTP April 2025",
    chapter_name: "Ind AS 12 - Income Taxes",
    placement: 4,
    marks: 5,

    question_html: `
    <p>
      On <strong>1st April 20X1</strong>, S Ltd. leased a machine over a
      <strong>5 year</strong> period.
    </p>

    <p>
      The present value of lease liability is
      <strong>₹120 Crore</strong> (discount rate of <strong>8%</strong>) and is
      recognized as lease liability and corresponding Right of Use (RoU) Asset
      on the same date.
    </p>

    <p>
      The RoU Asset is depreciated under straight line method over the
      5 years.
    </p>

    <p>
      The annual lease rentals are <strong>₹30 Crore</strong> payable starting
      <strong>31st March 20X2</strong>.
    </p>

    <p>
      The tax law permits tax deduction on the basis of payment of rent.
    </p>

    <p>
      Assuming tax rate of <strong>30%</strong>, you are required to explain
      the deferred tax consequences for the above transaction for the year
      ended <strong>31st March 20X2</strong>.
    </p>
    `,

    solution_html: `
    <p>
      A temporary difference effectively arises between the value of the
      machine for accounting purposes and the amount of lease liability,
      since the rent payment is eligible for tax deduction.
    </p>

    <p>
      Tax base of the machine is <strong>Nil</strong> as the amount is not
      eligible for deduction for tax purposes.
    </p>

    <p>
      Tax base of the lease liability is <strong>Nil</strong> as it is measured
      at carrying amount less any future tax deductible amount.
    </p>

    <h4>Recognition of Deferred Tax as on 31st March 20X2</h4>

    <table border="1">
      <tr>
        <th>Particulars</th>
        <th>₹ Crore</th>
      </tr>

      <tr>
        <td>
          Carrying amount of Right of Use Asset
          [120 − 24 (Depreciation)]
        </td>
        <td>96.00 Dr.</td>
      </tr>

      <tr>
        <td>
          Lease Liability
          [120 + 9.60 (120 × 8%) − 30]
        </td>
        <td>99.60 Cr.</td>
      </tr>

      <tr>
        <td><strong>Net Amount</strong></td>
        <td><strong>3.60 Cr.</strong></td>
      </tr>

      <tr>
        <td>Tax Base</td>
        <td>0.00</td>
      </tr>

      <tr>
        <td>Temporary Difference (Deductible)</td>
        <td>3.60 Cr.</td>
      </tr>

      <tr>
        <td>
          Deferred Tax Asset to be recognised
          (₹3.60 Cr. × 30%)
        </td>
        <td><strong>₹1.08 Crore</strong></td>
      </tr>

    </table>
    `,
},
{
    question_id: "FR_MTPAPR25_II_4B",
    source: "ICAI MTP April 2025",
    chapter_name: "Ind AS 33 - Earnings Per Share",
    placement: 4,
    marks: 5,

    question_html: `
    <p>
      Following is the data for Company XYZ in respect of number of equity
      shares during the financial year 20X1-20X2.
    </p>

    <p>
      Find out the number of shares for the purpose of calculation of
      <strong>Basic EPS</strong> as per <strong>Ind AS 33</strong>.
    </p>

    <table border="1">
      <tr>
        <th>S. No.</th>
        <th>Date</th>
        <th>Particulars</th>
        <th>No. of Shares</th>
      </tr>

      <tr>
        <td>1</td>
        <td>1-Apr-20X1</td>
        <td>Opening balance of outstanding equity shares</td>
        <td>100,000</td>
      </tr>

      <tr>
        <td>2</td>
        <td>15-Jun-20X1</td>
        <td>Issue of equity shares</td>
        <td>75,000</td>
      </tr>

      <tr>
        <td>3</td>
        <td>8-Nov-20X1</td>
        <td>Conversion of convertible preference shares into equity</td>
        <td>50,000</td>
      </tr>

      <tr>
        <td>4</td>
        <td>22-Feb-20X2</td>
        <td>Buy back of shares</td>
        <td>(20,000)</td>
      </tr>

      <tr>
        <td>5</td>
        <td>31-Mar-20X2</td>
        <td>Closing balance of outstanding equity shares</td>
        <td>205,000</td>
      </tr>

    </table>
    `,

    solution_html: `
    <p>
      The closing balance of the outstanding shares is
      <strong>2,05,000</strong> by normal addition and subtraction.
      However, as per the weighted average concept, it is necessary to
      determine for how many days each category of shares remained
      outstanding during the year.
    </p>

    <p>
      The shares outstanding on 1st April 20X1 remained outstanding for
      the entire year.
    </p>

    <p>
      Weighted Average Shares =
      Number of Shares × Number of Days Outstanding ÷ 365
    </p>

    <table border="1">

      <tr>
        <th>Sr.</th>
        <th>Date</th>
        <th>Particulars</th>
        <th>No. of Shares Outstanding</th>
        <th>No. of Days</th>
        <th>Weighted Average Shares</th>
      </tr>

      <tr>
        <td>1</td>
        <td>1-Apr-20X1</td>
        <td>Opening balance of outstanding equity shares</td>
        <td>1,00,000</td>
        <td>365</td>
        <td>1,00,000</td>
      </tr>

      <tr>
        <td>2</td>
        <td>15-Jun-20X1</td>
        <td>Issue of equity shares</td>
        <td>75,000</td>
        <td>290</td>
        <td>59,589</td>
      </tr>

      <tr>
        <td>3</td>
        <td>8-Nov-20X1</td>
        <td>Conversion of convertible preference shares into equity</td>
        <td>50,000</td>
        <td>144</td>
        <td>19,726</td>
      </tr>

      <tr>
        <td>4</td>
        <td>22-Feb-20X2</td>
        <td>Buy back of shares</td>
        <td>(20,000)</td>
        <td>(38)*</td>
        <td>(2,082)</td>
      </tr>

      <tr>
        <td colspan="5"><strong>Total Weighted Average Number of Shares</strong></td>
        <td><strong>1,77,233</strong></td>
      </tr>

    </table>

    <p>
      <strong>*Note:</strong> These shares had already been considered in the
      shares issued. The same has been deducted assuming that the bought back
      shares have been extinguished immediately.
    </p>
    `,
},
{
    question_id: "FR_MTPAPR25_II_4C",
    source: "ICAI MTP April 2025",
    chapter_name: "Ind AS 37 - Provisions, Contingent Liabilities and Contingent Assets / Ind AS 23 - Borrowing Costs",
    placement: 4,
    marks: 4,

    question_html: `
    <h4>Either</h4>

    <p>
      X Solar Power Ltd., a power company, has a present obligation to
      dismantle its plant after 35 years of useful life.
    </p>

    <p>
      X Solar Power Ltd. cannot cancel this obligation or transfer it to a
      third party.
    </p>

    <p>
      The company has estimated the total cost of dismantling at
      ₹50,00,000, the present value of which is ₹30,00,000.
    </p>

    <p>
      Based on the facts and circumstances, X Solar Power Ltd. considers a
      risk factor of 5%, i.e., the risk that the actual outflows would be more
      than the expected present value.
    </p>

    <p>
      State how X Solar Power Ltd. should account for the obligation.
    </p>

    <hr>

    <h4>OR</h4>

    <p>
      Marine Transport Limited ordered three ships for its fleet on
      1st April 20X0.
    </p>

    <p>
      It paid a down payment of 25% of the contract value of each ship out of
      long-term borrowings from a scheduled bank.
    </p>

    <p>
      Delivery is expected to commence from financial year 20X7.
    </p>

    <p>
      On 1st March 20X2, the ship builder informed that production of one ship
      had commenced. There was no progress on the remaining two ships.
    </p>

    <p>
      Advise whether Marine Transport Limited can capitalize borrowing costs
      for the financial years ended 31st March 20X1 and
      31st March 20X2.
    </p>
    `,

    solution_html: `
    <h4>Either</h4>

    <p>
      The obligation should be measured at the
      <strong>present value of expected outflows</strong>,
      i.e., ₹30,00,000.
    </p>

    <p>
      A risk adjustment of <strong>5%</strong> should also be included.
    </p>

    <p>
      Risk Adjustment = ₹30,00,000 × 5% = ₹1,50,000
    </p>

    <p>
      Therefore,
    </p>

    <table border="1">
      <tr>
        <th>Particulars</th>
        <th>₹</th>
      </tr>

      <tr>
        <td>Present Value of Obligation</td>
        <td>30,00,000</td>
      </tr>

      <tr>
        <td>Add: Risk Adjustment (5%)</td>
        <td>1,50,000</td>
      </tr>

      <tr>
        <td><strong>Provision to be recognised</strong></td>
        <td><strong>31,50,000</strong></td>
      </tr>

    </table>

    <hr>

    <h4>OR</h4>

    <p>
      As per paragraph 5 of Ind AS 23, a qualifying asset is an asset that
      necessarily takes a substantial period of time to get ready for its
      intended use or sale.
    </p>

    <p>
      As per paragraph 17 of Ind AS 23, borrowing costs are capitalised only
      when all the following conditions are satisfied:
    </p>

    <ol type="a">
      <li>Expenditure for the asset has been incurred.</li>
      <li>Borrowing costs have been incurred.</li>
      <li>Activities necessary to prepare the asset for its intended use or sale have commenced.</li>
    </ol>

    <p>
      The ships are qualifying assets since they require a substantial period
      of time for construction.
    </p>

    <p>
      Marine Transport Limited incurred expenditure and borrowing costs on
      1st April 20X0. However, activities necessary to prepare the asset
      commenced only on <strong>1st March 20X2</strong>, and only for
      <strong>one ship</strong>.
    </p>

    <p>
      Therefore:
    </p>

    <ul>
      <li>No borrowing costs shall be capitalised during the financial year ended 31st March 20X1.</li>

      <li>
        During the financial year ended 31st March 20X2, borrowing costs shall
        be capitalised only for the ship whose construction commenced, and only
        for the period from <strong>1st March 20X2 to 31st March 20X2</strong>.
      </li>

      <li>
        Borrowing costs relating to the remaining two ships shall be recognised
        as an expense.
      </li>
    </ul>
    `,
},
{
    question_id: "FR_MTPAPR25_II_5A",
    source: "ICAI MTP April 2025",
    chapter_name: "Ind AS 38 - Intangible Assets; Ind AS 36 - Impairment of Assets",
    placement: 5,
    marks: 8,

    question_html: `
    <p>
      One of the senior engineers at XYZ has been working on a process to improve
      manufacturing efficiency and, consequently, reduce manufacturing costs.
      This is a major project and has the full support of XYZ's Board of Directors.
    </p>

    <p>
      The senior engineer believes that the cost reductions will exceed the
      project costs within twenty-four months of their implementation.
    </p>

    <p>
      Regulatory testing and health and safety approval was obtained on
      <strong>1st June 20X5</strong>. This removed uncertainties concerning the
      project, which was finally completed on
      <strong>20th April 20X6</strong>.
    </p>

    <p>
      Costs of <strong>₹18,00,000</strong>, incurred during the year till
      <strong>31st March 20X6</strong>, have been recognized as an intangible
      asset.
    </p>

    <p>
      An offer of <strong>₹7,80,000</strong> for the newly developed technology
      has been received by a potential buyer but has been rejected by XYZ.
    </p>

    <p>
      Utkarsh believes that the project will be a major success and has the
      potential to save the company <strong>₹12,00,000 in perpetuity</strong>.
    </p>

    <p>
      Director of Research at XYZ, Neha, who is a qualified electronic engineer,
      is seriously concerned about the long-term prospects of the new process
      and is of the opinion that competitors would develop new technology,
      requiring replacement of the new process within
      <strong>four years</strong>.
    </p>

    <p>
      She estimates that the present value of future cost savings will be
      <strong>₹9,60,000</strong> over this period. After that, she believes there
      is no certainty regarding future benefits.
    </p>

    <p>
      <strong>Required:</strong><br>
      Advise the appropriate accounting treatment for the above issue for the
      year ended <strong>31st March 20X6</strong>.
    </p>
    `,

    solution_html: `
    <p>
      <strong>Ind AS 38 'Intangible Assets'</strong> requires an intangible asset
      to be recognised if, and only if, certain recognition criteria are met.
    </p>

    <p>
      Regulatory approval obtained on <strong>1st June 20X5</strong> was the last
      criterion to be satisfied. The remaining recognition criteria had already
      been fulfilled as follows:
    </p>

    <ul>
      <li>Intention to complete the asset is evident since it is a major project having full support of the Board.</li>
      <li>Adequate financial resources are available as resources are focused on the project.</li>
      <li>The expenditure incurred can be measured reliably.</li>
      <li>Future economic benefits are expected since cost savings are expected to exceed project costs within two years.</li>
    </ul>

    <p>
      Since the project was completed on <strong>20th April 20X6</strong>,
      expenditure incurred from <strong>1st June 20X5 to 31st March 20X6</strong>
      qualifies for capitalization.
    </p>

    <p>
      Accordingly,
      <strong>₹15,00,000 (₹18,00,000 × 10/12)</strong>
      shall be recognised as an Intangible Asset.
    </p>

    <p>
      Expenditure incurred prior to 1st June 20X5 amounting to
      <strong>₹3,00,000 (₹18,00,000 × 2/12)</strong>
      shall be recognised as an expense since retrospective recognition of an
      expense as an asset is not permitted.
    </p>

    <p>
      <strong>Ind AS 36 'Impairment of Assets'</strong> requires an intangible
      asset not yet available for use to be tested annually for impairment.
    </p>

    <p>
      Although expected future savings of ₹12,00,000 in perpetuity indicate no
      impairment, Neha is technically qualified and her estimate should be used.
      Accordingly, the recoverable amount should be based on the present value
      of future savings of <strong>₹9,60,000</strong>.
    </p>

    <p>
      Recoverable amount is the higher of:
    </p>

    <ul>
      <li>Fair value less costs to sell = ₹7,80,000</li>
      <li>Value in use = ₹9,60,000</li>
    </ul>

    <p>
      Hence, recoverable amount = <strong>₹9,60,000</strong>.
    </p>

    <h4>Impairment Loss</h4>

    <table border="1">
      <tr>
        <th>Particulars</th>
        <th>₹</th>
      </tr>

      <tr>
        <td>Carrying Amount</td>
        <td>15,00,000</td>
      </tr>

      <tr>
        <td>Less: Recoverable Amount</td>
        <td>(9,60,000)</td>
      </tr>

      <tr>
        <td><strong>Impairment Loss</strong></td>
        <td><strong>5,40,000</strong></td>
      </tr>

    </table>

    <p>
      Therefore, an impairment loss of
      <strong>₹5,40,000</strong> shall be recognised in the Statement of Profit
      and Loss for the year ended 31st March 20X6.
    </p>

    <h4>Necessary Adjusting Entry</h4>

    <table border="1">
      <tr>
        <th>Particulars</th>
        <th>Dr. (₹)</th>
        <th>Cr. (₹)</th>
      </tr>

      <tr>
        <td>
          Operating Expenses – Development Expenditure A/c Dr.<br>
          Operating Expenses – Impairment Loss A/c Dr.<br>
          &nbsp;&nbsp;&nbsp;&nbsp;To Intangible Asset under Development A/c
        </td>

        <td>
          3,00,000<br>
          5,40,000
        </td>

        <td>
          8,40,000
        </td>
      </tr>

    </table>
    `,
},
{
    question_id: "FR_MTPAPR25_II_5A",
    source: "ICAI MTP April 2025",
    chapter_name: "Ind AS 38 - Intangible Assets; Ind AS 36 - Impairment of Assets",
    placement: 5,
    marks: 8,

    question_html: `
    <p>
      One of the senior engineers at XYZ has been working on a process to improve
      manufacturing efficiency and, consequently, reduce manufacturing costs.
      This is a major project and has the full support of XYZ's Board of Directors.
    </p>

    <p>
      The senior engineer believes that the cost reductions will exceed the
      project costs within twenty-four months of their implementation.
    </p>

    <p>
      Regulatory testing and health and safety approval was obtained on
      <strong>1st June 20X5</strong>. This removed uncertainties concerning the
      project, which was finally completed on
      <strong>20th April 20X6</strong>.
    </p>

    <p>
      Costs of <strong>₹18,00,000</strong>, incurred during the year till
      <strong>31st March 20X6</strong>, have been recognized as an intangible
      asset.
    </p>

    <p>
      An offer of <strong>₹7,80,000</strong> for the newly developed technology
      has been received by a potential buyer but has been rejected by XYZ.
    </p>

    <p>
      Utkarsh believes that the project will be a major success and has the
      potential to save the company <strong>₹12,00,000 in perpetuity</strong>.
    </p>

    <p>
      Director of Research at XYZ, Neha, who is a qualified electronic engineer,
      is seriously concerned about the long-term prospects of the new process
      and is of the opinion that competitors would develop new technology,
      requiring replacement of the new process within
      <strong>four years</strong>.
    </p>

    <p>
      She estimates that the present value of future cost savings will be
      <strong>₹9,60,000</strong> over this period. After that, she believes there
      is no certainty regarding future benefits.
    </p>

    <p>
      <strong>Required:</strong><br>
      Advise the appropriate accounting treatment for the above issue for the
      year ended <strong>31st March 20X6</strong>.
    </p>
    `,

    solution_html: `
    <p>
      <strong>Ind AS 38 'Intangible Assets'</strong> requires an intangible asset
      to be recognised if, and only if, certain recognition criteria are met.
    </p>

    <p>
      Regulatory approval obtained on <strong>1st June 20X5</strong> was the last
      criterion to be satisfied. The remaining recognition criteria had already
      been fulfilled as follows:
    </p>

    <ul>
      <li>Intention to complete the asset is evident since it is a major project having full support of the Board.</li>
      <li>Adequate financial resources are available as resources are focused on the project.</li>
      <li>The expenditure incurred can be measured reliably.</li>
      <li>Future economic benefits are expected since cost savings are expected to exceed project costs within two years.</li>
    </ul>

    <p>
      Since the project was completed on <strong>20th April 20X6</strong>,
      expenditure incurred from <strong>1st June 20X5 to 31st March 20X6</strong>
      qualifies for capitalization.
    </p>

    <p>
      Accordingly,
      <strong>₹15,00,000 (₹18,00,000 × 10/12)</strong>
      shall be recognised as an Intangible Asset.
    </p>

    <p>
      Expenditure incurred prior to 1st June 20X5 amounting to
      <strong>₹3,00,000 (₹18,00,000 × 2/12)</strong>
      shall be recognised as an expense since retrospective recognition of an
      expense as an asset is not permitted.
    </p>

    <p>
      <strong>Ind AS 36 'Impairment of Assets'</strong> requires an intangible
      asset not yet available for use to be tested annually for impairment.
    </p>

    <p>
      Although expected future savings of ₹12,00,000 in perpetuity indicate no
      impairment, Neha is technically qualified and her estimate should be used.
      Accordingly, the recoverable amount should be based on the present value
      of future savings of <strong>₹9,60,000</strong>.
    </p>

    <p>
      Recoverable amount is the higher of:
    </p>

    <ul>
      <li>Fair value less costs to sell = ₹7,80,000</li>
      <li>Value in use = ₹9,60,000</li>
    </ul>

    <p>
      Hence, recoverable amount = <strong>₹9,60,000</strong>.
    </p>

    <h4>Impairment Loss</h4>

    <table border="1">
      <tr>
        <th>Particulars</th>
        <th>₹</th>
      </tr>

      <tr>
        <td>Carrying Amount</td>
        <td>15,00,000</td>
      </tr>

      <tr>
        <td>Less: Recoverable Amount</td>
        <td>(9,60,000)</td>
      </tr>

      <tr>
        <td><strong>Impairment Loss</strong></td>
        <td><strong>5,40,000</strong></td>
      </tr>

    </table>

    <p>
      Therefore, an impairment loss of
      <strong>₹5,40,000</strong> shall be recognised in the Statement of Profit
      and Loss for the year ended 31st March 20X6.
    </p>

    <h4>Necessary Adjusting Entry</h4>

    <table border="1">
      <tr>
        <th>Particulars</th>
        <th>Dr. (₹)</th>
        <th>Cr. (₹)</th>
      </tr>

      <tr>
        <td>
          Operating Expenses – Development Expenditure A/c Dr.<br>
          Operating Expenses – Impairment Loss A/c Dr.<br>
          &nbsp;&nbsp;&nbsp;&nbsp;To Intangible Asset under Development A/c
        </td>

        <td>
          3,00,000<br>
          5,40,000
        </td>

        <td>
          8,40,000
        </td>
      </tr>

    </table>
    `,
},
{
    question_id: "FR_MTPAPR25_II_5B",
    source: "ICAI MTP April 2025",
    chapter_name: "Ind AS 10 - Events after the Reporting Period; Ind AS 109 - Financial Instruments",
    placement: 5,
    marks: 6,

    question_html: `
    <p>
      The company has made sales of <strong>₹60,00,000</strong> to a customer
      <strong>SS LLP</strong> on <strong>31st December 20X2</strong>.
    </p>

    <p>
      The normal credit period is for <strong>one month</strong>. However,
      sometimes, it goes up to <strong>two months</strong>.
    </p>

    <p>
      The company expects to receive payment by
      <strong>28th February 20X3</strong>. However, no payment has been received
      till <strong>31st March 20X3</strong>.
    </p>

    <p>
      On <strong>15th April 20X3</strong>, the sales department of the company
      became aware that the customer is passing through financial crisis and has
      major cash flow problems.
    </p>

    <p>
      The company has agreed to allow the customer to settle the debt by
      <strong>31st March 20X4</strong>, by which time the customer is confident
      that the cash flow problem will be resolved.
    </p>

    <p>
      The company expects that an annual interest of
      <strong>9%</strong> (i.e. effective interest rate) can be received against
      any money lent out, yet it allowed the customer an interest-free payment
      period.
    </p>

    <p>
      <strong>Determine the amount to be shown as 'Trade Receivable'</strong>
      from SS LLP in the books of the company as on
      <strong>31st March 20X3</strong>.
    </p>
    `,

    solution_html: `
    <p>
      <strong>Ind AS 10 'Events after the Reporting Date'</strong>, classify an
      event as adjusting if it provides additional evidence of conditions existing
      at the reporting date. In this case the additional information relates to
      evidence of impairment of a financial asset since the customer had financial
      difficulties prior to <strong>31st March 20X3</strong>.
    </p>

    <p>
      <strong>Ind AS 109 'Financial Instruments'</strong> requires financial
      assets to be reviewed at each reporting date for evidence of impairment.
      Such evidence exists here because although the customer is expected to pay
      the amount due, the payment date has been deferred.
    </p>

    <p>
      As per paragraph <strong>B5.5.33</strong> of Ind AS 109, for a financial
      asset that is credit-impaired at the reporting date, but that is not a
      purchased or originated credit-impaired financial asset, an entity shall
      measure the expected credit losses as the difference between the asset's
      gross carrying amount and the present value of estimated future cash flows
      discounted at the financial asset's effective interest rate.
    </p>

    <p>
      Any adjustment is recognised in the Statement of Profit and Loss as an
      impairment gain or loss.
    </p>

    <p>
      Further, paragraph <strong>B5.5.44</strong> of Ind AS 109 provides that
      expected credit losses shall be discounted to the reporting date, not to the
      expected default or some other date, using the effective interest rate
      determined at initial recognition or an approximation thereof.
    </p>

    <p>
      In such circumstances, Ind AS 109 requires that the financial asset be
      re-measured to the present value of the expected future receipt,
      discounted (in the case of a trade receivable) using the effective interest
      rate.
    </p>

    <h4>Computation of Trade Receivable</h4>

    <table border="1">
      <tr>
        <th>Particulars</th>
        <th>₹</th>
      </tr>

      <tr>
        <td>Trade Receivable</td>
        <td>60,00,000</td>
      </tr>

      <tr>
        <td>Present Value = ₹60,00,000 ÷ 1.09</td>
        <td>55,04,587</td>
      </tr>

      <tr>
        <td><strong>Trade Receivable to be shown in Balance Sheet</strong></td>
        <td><strong>55,04,587</strong></td>
      </tr>

    </table>

    <h4>Impairment Loss</h4>

    <table border="1">
      <tr>
        <th>Particulars</th>
        <th>₹</th>
      </tr>

      <tr>
        <td>Gross Carrying Amount</td>
        <td>60,00,000</td>
      </tr>

      <tr>
        <td>Less: Present Value of Expected Cash Flow</td>
        <td>(55,04,587)</td>
      </tr>

      <tr>
        <td><strong>Impairment Loss recognised in Profit & Loss</strong></td>
        <td><strong>4,95,413</strong></td>
      </tr>

    </table>

    <p>
      Therefore, in the financial statements for the year ended
      <strong>31st March 20X3</strong>, the asset should be measured at
      <strong>₹55,04,587</strong> and an impairment loss of
      <strong>₹4,95,413</strong> shall be recognised in the Statement of Profit
      and Loss.
    </p>

    <p>
      In the year ended <strong>31st March 20X4</strong>, interest income of
      <strong>₹4,95,413 (₹55,04,587 × 9%)</strong> should be recognised in the
      Statement of Profit and Loss.
    </p>
    `,
},
{
    question_id: "FR_MTPAPR25_II_6A",
    source: "ICAI MTP April 2025",
    chapter_name: "Ind AS 115 - Revenue from Contracts with Customers",
    placement: 6,
    marks: 7,

    question_html: `
    <p>
      An entity provides broadband services to its customers along with voice call service.
      Customer buys modem from the entity. However, customer can also get the connection
      from the entity and modem from any other vendor. The installation activity requires
      limited effort and the cost involved is almost insignificant.
    </p>

    <p>
      It has various plans where it provides either broadband services or voice call services
      or both.
    </p>

    <p>
      <strong>Comment on how to identify whether the performance obligations under the
      contract is distinct by using an automated process?</strong>
    </p>
    `,

    solution_html: `
    <p>
      To identify the performance obligations under the contract and determine if they are
      distinct, an automated process can be implemented using technology.
      The following steps can be taken:
    </p>

    <ol type="a">
      <li>
        Analyze the clauses in the contract related to the services provided
        (broadband services, voice call services, modem sales).
      </li>

      <li>
        Each clause should be codified using appropriate parameters or tags to
        capture the relevant information.
      </li>

      <li>
        Assign Boolean values (<strong>0</strong> or <strong>1</strong>) to each
        parameter or tag in the codified clauses.
      </li>

      <li>
        Use <strong>"0"</strong> to represent <strong>"No"</strong> and
        <strong>"1"</strong> to represent <strong>"Yes"</strong> for each parameter.
      </li>

      <li>
        Define the criteria for evaluating the performance obligations based on
        the parameters and their Boolean values.
      </li>

      <li>
        Consider factors such as:
        <ul>
          <li>the type of service involved,</li>
          <li>benefits derived by the customer, and</li>
          <li>promises made in the contract regarding the transfer of goods or services.</li>
        </ul>
      </li>

      <li>
        Develop an automated algorithm or script that evaluates the Boolean
        values of the parameters according to the defined criteria.
      </li>

      <li>
        Calculate scores or weights for each parameter based on their significance
        in determining performance obligations.
      </li>

      <li>
        Utilize the scores or weights assigned to the parameters to determine if
        the performance obligations are distinct.
      </li>

      <li>
        If the total score exceeds a certain threshold, consider it a separate
        performance obligation.
      </li>
    </ol>

    <p>
      The automated process should flag and identify these distinct performance
      obligations based on the evaluation results.
    </p>
    `,
},
{
    question_id: "FR_MTPAPR25_II_6B",
    source: "ICAI MTP April 2025",
    chapter_name: "Ind AS 2 - Inventories; Ind AS 10 - Events after the Reporting Period",
    placement: 6,
    marks: 7,

    question_html: `
    <p>
      On <strong>5th April, 20X2</strong>, fire damaged a consignment of inventory
      at one of the Jupiter Ltd.'s warehouse.
    </p>

    <p>
      This inventory had been manufactured prior to
      <strong>31st March, 20X2</strong> costing
      <strong>₹8 lakhs</strong>.
    </p>

    <p>
      The net realisable value of the inventory prior to the damage was estimated
      at <strong>₹9.60 lakhs</strong>.
    </p>

    <p>
      Because of the damage caused to the consignment of inventory, the company
      was required to spend an additional amount of
      <strong>₹2 lakhs</strong> on repairing and re-packaging of the inventory.
    </p>

    <p>
      The inventory was sold on <strong>15th May, 20X2</strong> for proceeds of
      <strong>₹9 lakhs</strong>.
    </p>

    <p>
      The accountant of Jupiter Ltd. treats this event as an adjusting event and
      adjusted this event of causing the damage to the inventory in its financial
      statement and accordingly re-measures the inventories as follows:
    </p>

    <table border="1">
      <tr>
        <th>Particulars</th>
        <th>₹ lakhs</th>
      </tr>
      <tr>
        <td>Cost</td>
        <td>8.00</td>
      </tr>
      <tr>
        <td>Net realisable value (9.6 – 2)</td>
        <td>7.60</td>
      </tr>
      <tr>
        <td>Inventories (Lower of Cost and Net Realisable Value)</td>
        <td>7.60</td>
      </tr>
    </table>

    <p>
      <strong>Analyse whether the above accounting treatment made by the accountant
      in regard to the financial year ending on 31.03.20X2 is in compliance with
      Ind AS.</strong>
      If not, advise the correct treatment along with working for the same.
    </p>
    `,

    solution_html: `
    <p>
      The above treatment needs to be examined in the light of the provisions
      given in <strong>Ind AS 10 'Events after the Reporting Period'</strong> and
      <strong>Ind AS 2 'Inventories'</strong>.
    </p>

    <p>
      Paragraph 3 of <strong>Ind AS 10 'Events after the Reporting Period'</strong>
      defines:
    </p>

    <blockquote>
      Events after the reporting period are those events, favourable and
      unfavourable, that occur between the end of the reporting period and the
      date when the financial statements are approved by the Board of Directors
      in case of a company, and by the corresponding approving authority in case
      of any other entity for issue.
    </blockquote>

    <p>
      Two types of events can be identified:
    </p>

    <ol type="a">
      <li>Those that provide evidence of conditions that existed at the end of the reporting period (adjusting events after the reporting period); and</li>
      <li>Those that are indicative of conditions that arose after the reporting period (non-adjusting events after the reporting period).</li>
    </ol>

    <p>
      Further, paragraph 10 of Ind AS 10 states:
    </p>

    <blockquote>
      "An entity shall not adjust the amounts recognised in its financial
      statements to reflect non-adjusting events after the reporting period."
    </blockquote>

    <p>
      Further, paragraph 6 of <strong>Ind AS 2</strong> defines:
    </p>

    <blockquote>
      "Net realisable value is the estimated selling price in the ordinary course
      of business less the estimated costs of completion and the estimated costs
      necessary to make the sale."
    </blockquote>

    <p>
      Further, paragraph 9 of Ind AS 2 states:
    </p>

    <blockquote>
      "Inventories shall be measured at the lower of cost and net realisable
      value."
    </blockquote>

    <p>
      Accountant of Jupiter Ltd. has re-measured the inventories after adjusting
      the event in its financial statements which is not correct and not in
      accordance with the provisions of Ind AS 2 and Ind AS 10.
    </p>

    <p>
      Accordingly, the event causing the damage to the inventory occurred after
      the reporting date and, as per the principles laid down under
      <strong>Ind AS 10 'Events after the Reporting Date'</strong>, is a
      <strong>non-adjusting event</strong> as it does not affect conditions
      existing at the reporting date.
    </p>

    <p>
      Non-adjusting events are not recognised in the financial statements but are
      disclosed where their effect is material.
    </p>

    <p>
      Therefore, as per the provisions of Ind AS 2 and Ind AS 10, the
      consignment of inventories shall be recorded in the Balance Sheet at a
      value of <strong>₹8 lakhs</strong>, calculated as follows:
    </p>

    <h4>Working Note</h4>

    <table border="1">
      <tr>
        <th>Particulars</th>
        <th>₹ lakhs</th>
      </tr>

      <tr>
        <td>Cost</td>
        <td>8.00</td>
      </tr>

      <tr>
        <td>Net Realisable Value</td>
        <td>9.60</td>
      </tr>

      <tr>
        <td><strong>Inventories (Lower of Cost and Net Realisable Value)</strong></td>
        <td><strong>8.00</strong></td>
      </tr>
    </table>
    `,
},



];
