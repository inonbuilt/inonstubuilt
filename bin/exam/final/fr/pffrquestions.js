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
  `
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
  `
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
  `
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
  `
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
  `
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
  `
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
  `
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
  `
},
{
  question_id: "FR_MTPMAR24_5B",
  source: "ICAI MTP March 2024",
  chapter_name: "Ind AS 115 - Revenue Recognition with Deferred Consideration",
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
  `
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
  `
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
  `
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
  `
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
  `
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
  `
}
];
