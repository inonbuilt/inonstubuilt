const mcqData = [
  {
    case_id: "idt_mtp24_I_cs1",
    case_chapter: [
      "Input Tax Credit",
      "Place of Supply",
      "Time of Supply",
      "Electronic Commerce Operator",
    ],
    caseText: `
    <p>&lsquo;Galgotia Travels Ltd.&rsquo; (GTL) is established on 3rd April in the city of Bangalore (Karnataka) and the primary objective of the company is to provide air-conditioned contract-based passenger transportation services at affordable fares. The company obtains the voluntary registration under GST from 1st May. On 1st July, the company purchased motor vehicles of various seating capacities as follows:</p>
    <table border="1" cellpadding="5" style="border-collapse: collapse; width: 100%; text-align: center;">
      <thead>
        <tr style="background-color: #f2f2f2;">
          <th>Seating capacity (including driver)</th>
          <th>No. of vehicles</th>
          <th>Purchase price (per vehicle - exclusive of taxes)</th>
          <th>Rate of GST</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>7 persons</td>
          <td>4</td>
          <td>₹ 10,00,000</td>
          <td>CGST - 9%; SGST - 9%</td>
        </tr>
        <tr>
          <td>9 persons</td>
          <td>3</td>
          <td>₹ 12,00,000</td>
          <td>CGST - 9%; SGST - 9%</td>
        </tr>
        <tr>
          <td>11 persons</td>
          <td>2</td>
          <td>₹ 14,00,000</td>
          <td>CGST - 9%; SGST - 9%</td>
        </tr>
        <tr>
          <td>13 persons</td>
          <td>1</td>
          <td>₹ 15,00,000</td>
          <td>IGST - 18%</td>
        </tr>
      </tbody>
    </table>
    <br>
    <p>From the month of July, GTL associated with POKO Ltd. to enhance the business operations. POKO Ltd. owns/operates an electronic platform for supply of passenger transportation services in Bangalore. The company developed an application called &lsquo;POKO&rsquo; through which the customers can access the nearest available motor vehicles (cabs) and avail the services. POKO Ltd. collects the consideration for the services from the customers and remits the same to the service provider (GTL) after retaining the commission charged by it for using its electronic platform.</p>
    <p>The details of few bookings of GTL in the month of July are as follows:<br>
    <em>(These bookings are obtained by GTL on its own account and not through POKO Ltd.)</em></p>
    <table border="1" cellpadding="5" style="border-collapse: collapse; width: 100%; text-align: center;">
      <thead>
        <tr style="background-color: #f2f2f2;">
          <th>Order No.</th>
          <th>Date of travel</th>
          <th>Starting city</th>
          <th>Residence of the customer</th>
          <th>Date of payment/ booking</th>
          <th>Ending city</th>
          <th>Status of customer</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>CA-234</td>
          <td>5th July</td>
          <td>Bangalore</td>
          <td>Chennai</td>
          <td>3rd July</td>
          <td>Chennai</td>
          <td>Registered*</td>
        </tr>
        <tr>
          <td>CA-435</td>
          <td>11th July</td>
          <td>Bangalore</td>
          <td>Bangalore</td>
          <td>9th July</td>
          <td>Chennai</td>
          <td>Unregistered</td>
        </tr>
        <tr>
          <td>PH-534</td>
          <td>16th July</td>
          <td>Chennai</td>
          <td>Hyderabad</td>
          <td>14th July</td>
          <td>Hyderabad</td>
          <td>Registered*</td>
        </tr>
        <tr>
          <td>GK-987</td>
          <td>19th July</td>
          <td>Hyderabad</td>
          <td>Bangalore</td>
          <td>17th July</td>
          <td>Delhi</td>
          <td>Unregistered</td>
        </tr>
        <tr>
          <td>UV-777</td>
          <td>22nd July</td>
          <td>Bangalore</td>
          <td>Hyderabad</td>
          <td>20th July</td>
          <td>Mumbai</td>
          <td>Registered*</td>
        </tr>
        <tr>
          <td>XE-001</td>
          <td>25th July</td>
          <td>Chennai</td>
          <td>Kolkata</td>
          <td>23rd July</td>
          <td>Chennai</td>
          <td>Unregistered</td>
        </tr>
      </tbody>
    </table>
    <p><em>*Registered in the State in which they reside</em></p>
    <p>In all the above cases, journey is a single-day journey and invoice is issued electronically on the date of travel immediately after the completion of journey.</p>
    <p>The details of the passenger transportation services supplied by GTL through POKO Ltd. & GST liability on the supply is as follows:</p>
    <table border="1" cellpadding="5" style="border-collapse: collapse; width: 100%; text-align: center;">
      <thead>
        <tr style="background-color: #f2f2f2;">
          <th>Particulars</th>
          <th>July (₹)</th>
          <th>August (₹)</th>
          <th>September (₹)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Value of services</strong></td>
          <td>1,30,00,000</td>
          <td>1,25,00,000</td>
          <td>1,40,00,000</td>
        </tr>
        <tr>
          <td><strong>CGST</strong></td>
          <td>9,00,000</td>
          <td>8,00,000</td>
          <td>8,50,000</td>
        </tr>
        <tr>
          <td><strong>SGST</strong></td>
          <td>9,00,000</td>
          <td>8,00,000</td>
          <td>8,50,000</td>
        </tr>
        <tr>
          <td><strong>IGST</strong></td>
          <td>4,00,000</td>
          <td>3,50,000</td>
          <td>4,50,000</td>
        </tr>
      </tbody>
    </table>
    <br>
    <p><strong>Note:</strong></p>
    <ol>
      <li>All amounts are exclusive of CGST/SGST or IGST, as the case may be.</li>
      <li>Booking is confirmed only after paying total fare for the journey.</li>
      <li>There is no other inward or outward supply transaction for GTL in the relevant period apart from the aforementioned transactions.</li>
      <li>Subject to the information given above, assume that all the other conditions necessary for availing ITC have been fulfilled.</li>
    </ol>
  `,
    questions: [
      {
        question_id: "idt_mcq_cs1_1",
        chapter_name: ["Input Tax Credit"],
        question:
          "Amount of blocked credit in respect of motor vehicles purchased by GTL on 1st July is___________.",
        options: [
          "CGST = ₹ 9,36,000; SGST = ₹ 9,36,000 & IGST = ₹ 2,70,000",
          "CGST = ₹ 3,24,000; SGST = ₹ 3,24,000 & IGST = ₹ 2,70,000",
          "CGST = Nil; SGST = Nil & IGST = ₹ 2,70,000",
          "CGST = Nil; SGST = Nil & IGST = Nil",
        ],
        answer: 3,
      },
      {
        question_id: "idt_mcq_cs1_2",
        chapter_name: ["Computation of Tax Liability"],
        question:
          "Amount of GST payable through electronic cash ledger by GTL on the services supplied by it through POKO Ltd. during the month of July, ignoring the provisions of rule 86B of the CGST Rules, 2017, is_____________.",
        options: [
          "CGST = ₹ 9,00,000; SGST = ₹ 9,00,000 & IGST = ₹ 4,00,000",
          "CGST = Nil; SGST = Nil & IGST = ₹ 58,000",
          "CGST = Nil; SGST = Nil & IGST = ₹ 1,30,000",
          "CGST = Nil; SGST = Nil & IGST = Nil",
        ],
        answer: 1,
      },
      {
        question_id: "idt_mcq_cs1_3",
        chapter_name: ["Electronic Commerce Operator"],
        question:
          "Amount of tax to be collected at source by POKO Ltd. on the taxable supplies made through it during the months of A) July, B) August and C) September, is_____________.",
        options: [
          "A) ₹ 65,000; B) ₹ 62,500 and C) ₹ 70,000",
          "A) ₹ 1,30,000; B) ₹ 1,25,000 and C) ₹ 1,40,000",
          "A) ₹ 1,30,000; B) Nil and C) ₹ 70,000",
          "A) Nil; B) Nil and C) Nil",
        ],
        answer: 3,
      },
      {
        question_id: "idt_mcq_cs1_4",
        chapter_name: ["Place of Supply"],
        question:
          "Place of supply for order numbers 1) CA-435, 2) PH-534 & 3) GK-987 is_______________.",
        options: [
          "1) Bangalore, 2) Hyderabad & 3) Hyderabad",
          "1) Chennai, 2) Hyderabad & 3) Hyderabad",
          "1) Chennai, 2) Chennai & 3) Delhi",
          "1) Bangalore, 2) Chennai & 3) Hyderabad",
        ],
        answer: 0,
      },
      {
        question_id: "idt_mcq_cs1_5",
        chapter_name: ["Time of Supply"],
        question:
          "Time of supply for order numbers 1) CA-234, 2) UV-777 & 3) XE-001 is_____________.",
        options: [
          "1) 5th July, 2) 20th July & 3) 23rd July",
          "1) 5th July, 2) 22nd July & 3) 23rd July",
          "1) 3rd July, 2) 20th July & 3) 23rd July",
          "1) 5th July, 2) 20th July & 3) 23rd July",
        ],
        answer: 2,
      },
    ],
  },
  {
    case_id: "idt_mtp24_I_cs2",
    case_chapter: [
      "Composition Scheme",
      "Input Tax Credit",
      "Refunds",
      "Payment of Tax",
    ],
    caseText: `
    <p>Dhairya Ltd., a supplier registered under GST in Gujarat, is exclusively engaged in manufacturing textile products. It has opted to pay tax under composition scheme under sub-sections (1) and (2) of section 10 of the CGST Act, 2017.</p>
    <p>The following information is available in relation to Dhairya Ltd. for the current financial year:</p>
    <ol>
      <li>Total turnover during the quarter April-June is ₹ 1,50,00,000.</li>
      <li>The option to pay tax under composition scheme lapses from 1st July and it switches to regular scheme as a monthly return filer.</li>
      <li>Tax paid on inputs lying in stock as on 30th June (Invoice dated 4th May) - CGST ₹ 10,000 and SGST ₹ 10,000.</li>
      <li>Tax paid on inputs contained in semi-finished goods held in stock as on 30th June - CGST ₹ 5,000 and SGST ₹ 5,000 (Invoice was dated 31st December of preceding financial year).</li>
      <li>A machinery was purchased on 15th March of preceding financial year for ₹ 10,00,000 (taxable value). Applicable GST rate was 12%.</li>
      <li>On 10th August, Dhairya Ltd. sold goods worth ₹ 2,40,000 to Ahmedabad Municipal Corporation (AMC). The contract with AMC was to supply only goods and not any services.</li>
      <li>On 15th August, Dhairya Ltd. sold goods worth ₹ 10,00,000 to Fishing Department of Gujarat Government.</li>
      <li>Apart from the information provided above, sales and purchases worth ₹ 15,00,000 and ₹ 12,00,000 respectively were also reported during the period of July to February.</li>
      <li>During the month of March of the current financial year, Dhairya Ltd. manufactured 2,500 meters of fabric (Sales value of the fabric is ₹ 200 per meter). ITC pertaining to such output was CGST - ₹ 27,500 and SGST - ₹ 27,500. Mr. Kunj exported 1,500 meters of fabric under bond and sold the balance 1,000 meters of fabric in Gujarat, India.</li>
    </ol>
    <br>
    <p><strong>Notes:</strong></p>
    <ol>
      <li>There is no other outward or inward supply transaction apart from the aforesaid transactions, in the relevant period.</li>
      <li>Subject to the information given above, assume that all the other conditions necessary for availing ITC have been fulfilled.</li>
      <li>It is also assumed that due date for any return required to be filed by the taxpayer has not been extended by the Government.</li>
      <li>Rate of GST applicable on goods manufactured by Dhairya Ltd. under regular scheme is 12%. GST rate applicable on inward supplies is also 12% unless otherwise specified.</li>
      <li>All the purchases and sales are made within the State except the export sales.</li>
      <li>All the amounts given above are exclusive of taxes, wherever applicable.</li>
    </ol>
  `,
    questions: [
      {
        question_id: "idt_mcq_cs2_6",
        chapter_name: ["Composition Scheme", "Payment of Tax"],
        question:
          "The net GST payable in cash by Dhairya Ltd. during the period from April to February is______________.",
        options: ["₹ 1,76,800", "₹ 3,46,800", "₹ 18,26,800", "₹ 18,46,800"],
        answer: 0,
      },
      {
        question_id: "idt_mcq_cs2_7",
        chapter_name: ["Input Tax Credit"],
        question:
          "Input Tax Credit (ITC) available to Dhairya Ltd. during the period from April to February is_____________.",
        options: ["₹ 2,72,000", "₹ 2,82,000", "₹ 2,88,000", "₹ 3,02,000"],
        answer: 1,
      },
      {
        question_id: "idt_mcq_cs2_8",
        chapter_name: ["Refunds"],
        question:
          "The amount of GST refund available to Dhairya Ltd. for the month of March in the current financial year is _________.",
        options: ["₹ 24,000", "₹ 33,000", "₹ 31,000", "₹ 22,000"],
        answer: 2,
      },
      {
        question_id: "idt_mcq_cs2_9",
        chapter_name: ["Payment of Tax"],
        question:
          "Assuming that goods have been sold by Dhairya Ltd. to Fishing Department of Gujarat Government for a value of ₹ 1,00,000 instead of ₹ 10,00,000, net GST payable by Dhairya Ltd. in cash during the period from July to February will be _______________.",
        options: ["₹ 15,88,800", "₹ 83,800", "₹ 82,800", "nil"],
        answer: 3,
      },
    ],
  },
  {
    case_id: "idt_mtp24_I_cs3",
    case_chapter: [
      "Value of Supply",
      "Aggregate Turnover",
      "Supply Without Consideration",
    ],
    caseText: `
    <p>Mr. Bindusaar, a practicing Chartered Accountant, based in Hyderabad, is registered under GST in the State of Telangana.</p>
    <p>He undertook following transactions/activities during the current financial year:</p>
    <p><strong>(1)</strong> He provided consultancy services to Edward Tours, a UK based entity engaged in the business of e-commerce in the field of tour and travels, having its office at UK. Edward Tours paid a sum of Euro 95,000 to Mr. Bindusaar billed @ 75 per Euro. Mr. Bindusaar made travel to UK several times during the year and incurred Euro 5,000 @ ₹ 75 as incidental expenses (including VAT paid ₹ 10,000) which was ultimately charged from Edward Tours. Edward Tours also paid a sum of EURO 5,000 @ ₹ 75 to Mr. Bindusaar as interest on account of delay in payment of agreed consideration.</p>
    <p>Mr. Bindusaar also hired the services of a professional firm based in UK to complete the assignment of providing services to Edward Tours and paid Euro 10,000 @ ₹ 75. This was not recovered from Edward Tours.</p>
    <p><strong>(2)</strong> Mr. Bindusaar’s taxable earnings for services provided in India for the financial year are ₹ 85,00,000. In addition to this, Mr. Bindusaar also provided return filing services free of charge in the month of July to Indian residents who were economically weaker. Open market value of such services was ₹ 1,40,000.</p>
    <p>Further, in July, Mr. Bindusaar also provided financial services to his real brother Mr. Shiv who is working at an IT company and earning handsomely, for ₹ 75,000 (invoice value). However, Mr. Bindusaar offered him 90% discount on the invoice raised to him. Therefore, Mr. Shiv paid ₹ 7,500 only.</p>
    <p><strong>Notes:</strong> The rates of tax are 9% (CGST), 9% (SGST) and 18% (IGST) on all inward/ outward supplies. All the amounts given above are exclusive of taxes, wherever applicable.</p>
  `,
    questions: [
      {
        question_id: "idt_mcq_cs3_1",
        chapter_name: ["Value of Supply"],
        question:
          "Compute the value of supply made by Mr. Bindusaar to Edward Tour (in Euros).",
        options: ["120,000", "105,000", "115,000", "125,000"],
        answer: 1,
      },
      {
        question_id: "idt_mcq_cs3_2",
        chapter_name: ["Aggregate Turnover"],
        question:
          "Compute aggregate turnover of Mr. Bindusaar for the current financial year.",
        options: [
          "₹ 1,78,75,000",
          "₹ 1,86,25,000",
          "₹ 1,63,82,500",
          "₹ 1,80,90,000",
        ],
        answer: 2,
      },
      {
        question_id: "idt_mcq_cs3_3",
        chapter_name: ["Value of Supply", "Supply Without Consideration"],
        question:
          "What is value of supply made by Mr. Bindusaar to Mr. Shiv if Mr. Shiv is the son of Mr. Bindusaar and not his brother and supply is made free of cost, other facts remaining the same?",
        options: [
          "₹ 7,500",
          "₹ 75,000",
          "Not a supply since they are related",
          "Value cannot be determined",
        ],
        answer: 1,
      },
    ],
  },
  {
    case_id: "idt_apr24_mtp_II_cs1",
    case_chapter: [
      "Valuation",
      "Reverse Charge Mechanism",
      "Business Exhibition",
      "Foreign Currency Exchange",
      "Appeals",
      "Place of Supply",
    ],
    caseText: `
    <p>Swash Enterprise Pvt. Ltd. is a financial service company having its offices in Kolkata (West Bengal) and Mumbai (Maharashtra). The company is registered under GST in both the States.</p>

    <p>The company operates through two business segments:</p>

    <ul>
      <li><strong>Banking Services</strong>
        <ul>
          <li>Recovery agent services</li>
          <li>Direct Selling Agent (DSA) services for banking products</li>
          <li>Sale and purchase of foreign currency</li>
        </ul>
      </li>

      <li><strong>Advisory & Consulting Services</strong>
        <ul>
          <li>Company/LLP/Society formation</li>
          <li>GST/TDS return filing</li>
          <li>Detailed Project Report (DPR) preparation</li>
          <li>Business promotion/marketing/exhibitions</li>
        </ul>
      </li>
    </ul>

    <p>The aggregate turnover during the previous financial year was:</p>

    <table>
      <tr>
        <th>State</th>
        <th>Aggregate Turnover</th>
      </tr>
      <tr>
        <td>West Bengal</td>
        <td>₹80 lakh</td>
      </tr>
      <tr>
        <td>Maharashtra</td>
        <td>₹60 lakh</td>
      </tr>
    </table>

    <p>The following transactions were undertaken during the month of September (Amount in ₹ excluding GST):</p>

    <table>
      <thead>
        <tr>
          <th>Particulars</th>
          <th>Kolkata Office</th>
          <th>Mumbai Office</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Sale and purchase of foreign currency</td>
          <td>Refer Note 3</td>
          <td>Refer Note 3</td>
        </tr>
        <tr>
          <td>Sponsorship amount received from Devidas Pvt. Ltd.</td>
          <td>90,000</td>
          <td>70,000</td>
        </tr>
        <tr>
          <td>Commission received as DSA from ICIDI Bank</td>
          <td>48,000</td>
          <td>50,000</td>
        </tr>
        <tr>
          <td>Commission received from private banks as recovery agent</td>
          <td>1,20,000</td>
          <td>1,50,000</td>
        </tr>
        <tr>
          <td>Professional fee for company/LLP/society formation</td>
          <td>80,000 (Refer Note 2)</td>
          <td>40,000</td>
        </tr>
        <tr>
          <td>Professional fee for GST/TDS return filing</td>
          <td>65,000</td>
          <td>75,000</td>
        </tr>
        <tr>
          <td>Participation fee received for business exhibition</td>
          <td>50,00,000 (held in Russia) (Refer Note 1)</td>
          <td>4,00,000 (held at Chennai) (Refer Note 1)</td>
        </tr>
        <tr>
          <td>Legal fee paid to advocate Mr. Sundaram</td>
          <td>10,000</td>
          <td>15,000</td>
        </tr>
        <tr>
          <td>Security services received</td>
          <td>₹25,000 (Sky Security Pvt. Ltd.)</td>
          <td>₹25,000 (M/s P & Co., a partnership firm registered under GST)</td>
        </tr>
      </tbody>
    </table>

    <p><strong>Note 1:</strong></p>

    <ul>
      <li>Kolkata office organized a business exhibition at St. Petersburg, Russia under the theme <strong>"Bharat Traditional Fair"</strong>. Ten Indian companies (all registered under GST) participated. Participation fee collected was ₹5 lakh from each company (Total ₹50 lakh).</li>
      <li>Mumbai office organized a business exhibition at Chennai in which 100 Indian companies participated and collected participation fee of ₹4,00,000.</li>
    </ul>

    <p><strong>Note 2:</strong> Out of ₹80,000 received by Kolkata office towards formation of company/LLP/society, ₹15,000 represented reimbursement of ROC fees separately shown in the invoice and actually paid to the Registrar of Companies.</p>

    <p><strong>Note 3:</strong></p>

    <ul>
      <li>Kolkata office purchased USD 10,000 from M/s Moneywise (FOREX dealer) @ ₹73 per USD on 10th September. RBI reference rate = ₹74 per USD.</li>
      <li>Mumbai office sold USD 5,000 to M/s Money Matters (FOREX dealer) @ ₹73.20 per USD on 15th September. RBI reference rate was not available.</li>
    </ul>

    <p><strong>Note 4:</strong> By an order dated 14th September, the Joint Commissioner of CGST, Mumbai raised a demand of ₹600 crore against Mumbai office relating to an inter-State supply transaction. The company disputes the entire demand and intends to file an appeal before the Appellate Authority.</p>

    <p>All amounts are exclusive of GST wherever applicable. Swash Enterprise Pvt. Ltd. is <strong>not an authorised FOREX dealer</strong>. There are no other inward or outward supply transactions during the relevant period.</p>
  `,
    questions: [
      {
        question_id: "idt_apr24_mtp_II_cs1_1",
        chapter_name: ["Valuation", "Foreign Currency Exchange"],
        question:
          "Determine the value of taxable supply in respect of sale and purchase of foreign currency by Kolkata office and Mumbai office of the company as per Rule 32(2)(a) of the CGST Rules, 2017.",
        options: [
          "Kolkata office ₹7,200, Mumbai office ₹3,660",
          "Kolkata office ₹10,000, Mumbai office ₹3,660",
          "Kolkata office ₹7,20,000, Mumbai office ₹3,66,000",
          "Kolkata office ₹7,30,000, Mumbai office ₹3,66,000",
        ],
        answer: 1,
      },
      {
        question_id: "idt_apr24_mtp_II_cs1_2",
        chapter_name: ["Reverse Charge Mechanism"],
        question:
          "The value of taxable supply received by Mumbai office during September on which tax is payable under reverse charge is:",
        options: ["₹15,000", "₹25,000", "₹40,000", "₹2,70,000"],
        answer: 2,
      },
      {
        question_id: "idt_apr24_mtp_II_cs1_3",
        chapter_name: ["Value of Supply", "Business Exhibition"],
        question:
          "The value of taxable outward supply made by Kolkata office during September on which Swash Enterprise Pvt. Ltd. is liable to pay tax under forward charge is:",
        options: ["₹1,78,000", "₹2,78,000", "₹2,65,000", "₹1,13,000"],
        answer: 0,
      },
      {
        question_id: "idt_apr24_mtp_II_cs1_4",
        chapter_name: ["Appeals"],
        question:
          "The maximum amount of pre-deposit that Swash Enterprise Pvt. Ltd. can be asked to deposit under the IGST Act, 2017 for filing an appeal before the Appellate Authority is:",
        options: ["₹30 crore", "₹60 crore", "₹25 crore", "₹50 crore"],
        answer: 3,
      },
    ],
  },
  {
    case_id: "idt_apr24_mtp_II_cs2",
    case_chapter: [
      "Input Tax Credit",
      "Value of Supply",
      "Import of Goods",
      "Place of Supply",
      "Hotel Accommodation",
      "Cross Border Services",
    ],
    caseText: `
    <p>Anthun India Limited, registered under GST in the State of Gujarat, is a wholly-owned subsidiary of Anthun LLC, Japan. Another subsidiary, Anthun Inc., Singapore, supplies industrial goods to customers worldwide.</p>

    <p>Anthun Inc., Singapore sells goods to <strong>Prista Limited</strong>, registered in Maharashtra. Prista Limited imports the goods into India and carries out the required technical processing in its factory in Maharashtra. After processing, the goods are sold to Anthun India Limited for further sale to customers.</p>

    <p>Anthun LLC, Japan, being the holding company, recovers an amount equal to <strong>20% of the sales made by Anthun India Limited</strong> as commission every month.</p>

    <p><strong>Transactions during January:</strong></p>

    <ul>
      <li>Prista Limited imported goods worth <strong>₹10,00,000</strong> from Anthun Inc., Singapore.</li>
      <li>Inter-State domestic purchases by Prista Limited amounted to <strong>₹2,00,000</strong>.</li>
      <li>Processed goods were sold by Prista Limited to Anthun India Limited for <strong>₹10,00,000</strong>.</li>
      <li>Anthun India Limited paid <strong>₹2,00,000</strong> towards transportation and handling charges to a third-party Goods Transport Operator, although contractually payable by Prista Limited.</li>
      <li>Prista Limited also charged <strong>₹12,000</strong> towards miscellaneous municipal levy (other than GST).</li>
    </ul>

    <p><strong>Sales made by Anthun India Limited:</strong></p>

    <table>
      <thead>
        <tr>
          <th>Customer</th>
          <th>Location</th>
          <th>Value (₹)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>X Ltd.</td>
          <td>Rajasthan</td>
          <td>6,00,000</td>
        </tr>
        <tr>
          <td>Y Ltd.</td>
          <td>Gujarat</td>
          <td>8,00,000</td>
        </tr>
      </tbody>
    </table>

    <p>There was no opening or closing stock during January.</p>

    <p>Further, during February, an employee of Anthun India Limited visited the factory of Prista Limited at Mumbai and stayed in a hotel located in Mumbai.</p>

    <ul>
      <li>Hotel invoice amount: <strong>₹1,00,000</strong>.</li>
      <li>GST charged: <strong>14% CGST + 14% SGST</strong>.</li>
      <li>Amount recoverable from employee towards personal stay: <strong>₹50,000</strong>.</li>
    </ul>

    <p>Leisure Events Ltd., registered in New Delhi, organised a cultural event in <strong>Mauritius</strong> for Anthun India Limited during February.</p>

    <p>The opening ITC balance of both Prista Limited and Anthun India Limited is <strong>Nil</strong>. Apart from the above transactions, there are no other inward or outward supplies. Assume all conditions for availing ITC are satisfied.</p>

    <p>GST rates applicable:</p>

    <ul>
      <li>Intra-State Supply: <strong>9% CGST + 9% SGST</strong></li>
      <li>Inter-State Supply: <strong>18% IGST</strong></li>
      <li>Basic Customs Duty: <strong>Nil</strong></li>
      <li>IGST is applicable on imports. No additional duty or cess is applicable.</li>
    </ul>
  `,
    questions: [
      {
        question_id: "idt_apr24_mtp_II_cs2_1",
        chapter_name: ["Input Tax Credit", "Import of Goods"],
        question:
          "The total GST liability, net of input tax credit, of Prista Limited for the month of January is:",
        options: [
          "₹2,18,160 payable as IGST",
          "Nil",
          "₹2,160 payable as IGST",
          "₹1,09,080 payable as CGST and ₹1,09,080 payable as SGST",
        ],
        answer: 2,
      },
      {
        question_id: "idt_apr24_mtp_II_cs2_2",
        chapter_name: ["Output Tax Liability"],
        question:
          "What shall be the gross IGST liability (without adjustment of ITC) of Anthun India Limited for the month of January?",
        options: ["₹1,08,000", "Nil", "₹1,58,400", "₹33,840"],
        answer: 2,
      },
      {
        question_id: "idt_apr24_mtp_II_cs2_3",
        chapter_name: [
          "Input Tax Credit",
          "Blocked Credit",
          "Hotel Accommodation",
        ],
        question:
          "Whether input tax credit is available on the GST charged by the Mumbai hotel on the invoice of ₹1,00,000 issued to Anthun India Limited? If yes, specify the eligible amount.",
        options: [
          "Yes, ₹14,000 CGST and ₹14,000 SGST",
          "Yes, ₹28,000 IGST",
          "Input tax credit is not available",
          "Yes, ₹7,000 CGST and ₹7,000 SGST",
        ],
        answer: 2,
      },
      {
        question_id: "idt_apr24_mtp_II_cs2_4",
        chapter_name: ["Place of Supply", "Cross Border Services"],
        question:
          "Whether GST is applicable on the event organised by Leisure Events Ltd. for Anthun India Limited in Mauritius and what is the place of supply?",
        options: [
          "GST is applicable and the place of supply is New Delhi",
          "GST is applicable and the place of supply is Gujarat",
          "GST is not applicable and the place of supply is Mauritius",
          "GST is applicable and the place of supply is Mauritius",
        ],
        answer: 1,
      },
    ],
  },
  {
    case_id: "idt_NOV24_mtp_I_cs1",
    case_chapter: [
      "Works Contract",
      "Goods Transport Agency (GTA)",
      "Input Tax Credit",
      "Import of Services",
      "Related Party",
      "Value of Supply",
      "Schedule III",
      "Time of Supply",
      "Bill-to Ship-to",
    ],
    caseText: `
    <p>Nirav Ltd. is registered with the jurisdictional GST authorities in the State of Rajasthan and operates in multiple businesses. The principal business of Nirav Ltd. is works contract service being provided to the customers by way of fabricating and installing the body for large transportation vehicles. The chassis of the vehicles are provided by the customers to Nirav Ltd. Nirav Ltd. procures the material for fabrication and installs the same on the chassis against a lumpsum agreed amount for material as well as services.</p>

    <p>In addition to the above business, Nirav Ltd., registered as GTA, is also engaged in providing services of transportation of goods by road through its own fleet of trucks. GST is chargeable on such services @ <strong>5%</strong>. Nirav Ltd. has not exercised the option to pay GST on the same.</p>

    <p><strong>During the month of January, Nirav Ltd. undertook the following transactions:</strong></p>

    <ol type="i">
      <li>Provided services of transportation of goods to <strong>Manohar Ltd.</strong>, a registered person under GST in the State of Gujarat and received an amount of <strong>₹10,00,000</strong> as consideration.</li>

      <li>Purchased tyres for its own fleet of trucks used for providing transportation services and paid <strong>₹1,00,000</strong>.</li>

      <li>Purchased a machinery with advanced technology for fabrication of body for luxury buses amounting to <strong>₹50,00,000</strong>. The machinery was purchased from <strong>BLM Ltd.</strong>, registered in Rajasthan. BLM Ltd. procured such machinery from <strong>Saket Ltd.</strong>, registered in Maharashtra. Delivery was made directly by Saket Ltd. at Nirav Ltd.'s premises and installation was carried out by engineers of Saket Ltd. Saket Ltd. charged <strong>₹42,00,000</strong> to BLM Ltd.</li>

      <li>Procured engineering services through electronic mode from <strong>Basilla Inc., Italy</strong> for consideration of <strong>₹15,00,000</strong>. Further, goods were sent to Basilla Inc. for repair work for which consideration of <strong>₹5,00,000</strong> was paid.</li>

      <li>Provided transportation services to its related party <strong>BPZ Ltd.</strong> and charged <strong>₹5,00,000</strong>. The arm's length value for similar services was <strong>₹7,00,000</strong>.</li>

      <li>Sold scrap relating to fabrication business amounting to <strong>₹5,00,000</strong>.</li>

      <li>Purchased goods relating to fabrication business for <strong>₹10,00,000</strong>, out of which goods worth <strong>₹1,00,000</strong> were stolen from its premises.</li>

      <li>Received an advance of <strong>₹10,00,000</strong> for fabrication work on new chassis and <strong>₹3,00,000</strong> towards transportation of goods services from <strong>Karim Ltd.</strong>, a registered person in Madhya Pradesh.</li>
    </ol>

    <p>The opening balance of input tax credit for the relevant tax period is <strong>Nil</strong>. All amounts are exclusive of GST wherever applicable.</p>

    <p><strong>Applicable GST rates:</strong></p>

    <ul>
      <li>GST rate on all inward and outward supplies: <strong>18%</strong>, unless otherwise specified.</li>
      <li>GST on GTA services: <strong>5%</strong>.</li>
    </ul>

    <p>Assume that all other conditions necessary for availing input tax credit have been fulfilled.</p>
  `,
    questions: [
      {
        question_id: "idt_NOV24_mtp_I_cs1_1",
        chapter_name: [
          "Input Tax Credit",
          "Goods Transport Agency (GTA)",
          "Reverse Charge",
        ],
        question:
          "Determine the net GST liability, payable in cash, of Nirav Ltd. for the month of January.",
        options: ["₹5,40,000", "₹2,70,000", "Nil", "₹7,38,000"],
        answer: 1,
      },
      {
        question_id: "idt_NOV24_mtp_I_cs1_2",
        chapter_name: ["Input Tax Credit"],
        question:
          "What shall be the total eligible input tax credit available to Nirav Ltd. for the month of January?",
        options: ["₹10,80,000", "₹10,62,000", "₹13,32,000", "₹9,00,000"],
        answer: 2,
      },
      {
        question_id: "idt_NOV24_mtp_I_cs1_3",
        chapter_name: ["OIDAR", "Import of Services", "Registration"],
        question:
          "Whether Basilla Inc. is required to obtain registration in India to discharge GST liability? If yes, compute the amount of GST liability to be discharged by it in the month of January?",
        options: [
          "Yes, as online information database access and retrieval service provider. GST payable is ₹3,60,000.",
          "Yes, as online information database access and retrieval service provider. GST payable is ₹2,70,000.",
          "No, Basilla Inc. is not required to obtain GST registration in India for discharging GST liability. GST liability of Basilla Inc. is nil.",
          "Yes, as normal taxpayer. GST payable is ₹3,60,000.",
        ],
        answer: 2,
      },
      {
        question_id: "idt_NOV24_mtp_I_cs1_4",
        chapter_name: [
          "Related Party",
          "Goods Transport Agency (GTA)",
          "Value of Supply",
        ],
        question:
          "Determine the GST liability of Nirav Ltd. on services of transportation of goods provided to BPZ Ltd.",
        options: ["Nil", "₹90,000", "₹1,26,000", "₹36,000"],
        answer: 0,
      },
      {
        question_id: "idt_NOV24_mtp_I_cs1_5",
        chapter_name: ["Bill-to Ship-to", "Place of Supply"],
        question:
          "In case of the machinery sold and fabricated by Saket Ltd., the place of supply and tax charged shall be:",
        options: [
          "Location of Saket Ltd.; IGST of ₹7,56,000.",
          "Location of Nirav Ltd.; IGST of ₹7,56,000.",
          "Location of BLM Ltd.; IGST of ₹9,00,000.",
          "Location of Saket Ltd.; CGST of ₹3,78,000 and SGST of ₹3,78,000.",
        ],
        answer: 1,
      },
    ],
  },
  {
    case_id: "idt_NOV24_mtp_I_cs2",
    case_chapter: [
      "OIDAR",
      "Export of Services",
      "Intermediary",
      "Advertising Services",
      "Reverse Charge",
      "Input Tax Credit",
      "Zero-rated Supply",
    ],
    caseText: `
    <p>Espon Inc. is an entity incorporated in USA and is engaged in provision of various information technology related services directly as well as through its subsidiaries located across the world. In India, <strong>Espon India</strong>, a subsidiary of Espon Inc., is registered under GST in the State of Karnataka and provides services to various customers in India.</p>

    <p>Espon Inc. provides <strong>cloud-based storage services</strong> to its customers (business entities and non-business entities) in India. Customers subscribe to the services by making online payment directly to Espon Inc.'s bank account through internet banking and other online modes. The terms and conditions for such services are entered into directly between Espon Inc. and the customer without involvement of any third party.</p>

    <p>In case of any issue, customers can log complaints at the customer help centre operated by <strong>Espon India</strong> on a principal-to-principal basis. Espon India receives consideration from Espon Inc. at <strong>cost plus 10%</strong> on a monthly basis.</p>

    <p>Espon India is also engaged in <strong>promotion and marketing</strong> of cloud-based storage services in India for Espon Inc. on a principal-to-principal basis. Espon Inc. pays Espon India on a <strong>cost plus 20%</strong> basis. The promotional activities are carried out in the name of Espon Inc., without any reference to Espon India.</p>

    <p>Espon Inc. owns <strong>online advertising space</strong> on the internet and has agreed to sell such online advertising space to Espon India for <strong>₹5,00,00,000 per month</strong>. Espon India further sells such advertising space to customers in India on its own account. The contractual arrangement for sale of advertising space is between Espon India and its customers.</p>

    <p>Espon Inc. also provides <strong>technology support</strong> to Espon India and charges royalty of <strong>₹25,00,000 per month</strong>. Such royalty relates exclusively to the advertising space business of Espon India.</p>

    <p><strong>During the month of January:</strong></p>

    <ol type="I">
      <li>
        <p>Espon India incurred the following expenses:</p>
        <ul>
          <li>Expenses exclusively relating to operation of call centre – <strong>₹75,00,000</strong>.</li>
          <li>Expenses exclusively relating to promotion and marketing services for Espon Inc. – <strong>₹50,00,000</strong>.</li>
        </ul>
      </li>

      <li>Espon India earned an income of <strong>₹8,00,00,000</strong> from sale of online advertising space in India.</li>

      <li>Espon Inc. earned an income of <strong>₹10,00,00,000</strong> from non-taxable online recipient customers in India from cloud-based storage services.</li>
    </ol>

    <p>The opening balance of input tax credit for both Espon India and Espon Inc. is <strong>Nil</strong>.</p>

    <p><strong>Additional assumptions:</strong></p>

    <ul>
      <li>GST is applicable on all inward and outward supplies @ <strong>18%</strong> (ignore bifurcation of CGST, SGST and IGST) unless otherwise specified.</li>
      <li>All conditions for availing input tax credit have been fulfilled.</li>
      <li>All amounts are exclusive of GST wherever applicable.</li>
      <li>Exports made by Espon India, if any, are under LUT without payment of IGST.</li>
    </ul>
  `,
    questions: [
      {
        question_id: "idt_NOV24_mtp_I_cs2_1",
        chapter_name: ["Output Tax Liability", "Advertising Services"],
        question:
          "What shall be the output tax liability, without any adjustment of input tax credit, if any, by Espon India for the month of January?",
        options: [
          "₹1,44,00,000",
          "₹2,38,50,000",
          "₹1,69,65,000",
          "₹1,66,50,000",
        ],
        answer: 0,
      },
      {
        question_id: "idt_NOV24_mtp_I_cs2_2",
        chapter_name: [
          "OIDAR",
          "Online Information Database Access and Retrieval Services",
        ],
        question:
          "What shall be the net GST liability of Espon Inc. for the month of January?",
        options: ["Nil", "₹1,80,00,000", "₹1,84,50,000", "₹2,74,50,000"],
        answer: 1,
      },
      {
        question_id: "idt_NOV24_mtp_I_cs2_3",
        chapter_name: ["OIDAR", "Reverse Charge", "Advertising Services"],
        question:
          "Please select the correct statement specifically in relation to sale of online advertisement space service provided by Espon Inc. to Espon India:",
        options: [
          "Espon Inc. is providing online information and database access or retrieval service and is therefore required to register in India under GST and discharge GST on forward charge basis.",
          "Espon Inc. is providing online information and database access or retrieval service electronically and the place of supply is the location of the supplier, which is outside taxable territory. Therefore, no GST is payable.",
          "Espon Inc. is providing online information and database access or retrieval service and tax on the same is to be paid by Espon India on reverse charge basis.",
          "Espon Inc. is providing online information and database access or retrieval service and tax on the same is to be paid by Espon India in the capacity of an agent of Espon Inc.",
        ],
        answer: 2,
      },
    ],
  },
  {
    case_id: "idt_NOV24_mtp_I_cs3",
    case_chapter: [
      "Legal Services",
      "Reverse Charge Mechanism (RCM)",
      "Time of Supply",
      "Value of Supply",
      "Composition Levy",
    ],
    caseText: `
    <p><strong>M/s Malik Rao & Company</strong> is a partnership firm of advocates, registered under GST in Mumbai, Maharashtra. During the month of April, the firm supplied legal services amounting to <strong>₹15 lakh</strong>.</p>

    <p>The following information is provided in relation to certain services rendered:</p>

    <table>
      <thead>
        <tr>
          <th>S. No.</th>
          <th>Particulars</th>
          <th>Value of Service (₹)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>
            <strong>Incense Power (P) Ltd.</strong>, registered in Telangana in the preceding financial year under section 22 of the CGST Act, 2017.<br>
            Consultation provided for preparation of an affidavit relating to construction of a hotel building in Maharashtra.
          </td>
          <td>50,000</td>
        </tr>
        <tr>
          <td>2</td>
          <td>
            <strong>Sultan India (P) Ltd.</strong>, registered in Gujarat in the preceding financial year under section 22 of the CGST Act, 2017.<br>
            Filed a suit before the Gujarat High Court on behalf of the company.
          </td>
          <td>2,00,000</td>
        </tr>
        <tr>
          <td>3</td>
          <td>
            <strong>Ms. Kavya</strong>, registered under GST as a salon service provider in Maharashtra in the preceding financial year under section 22 of the CGST Act, 2017.<br><br>

            Legal services amounting to <strong>₹1,00,000</strong> were provided in February and invoice was issued on <strong>15th February</strong>. Payment was received on <strong>5th April</strong>.<br><br>

            The firm charged a <strong>penalty of ₹10,000</strong> (exclusive of GST) for delayed payment, which was also paid on 5th April.<br><br>

            As per the agreement, the firm had paid <strong>₹20,000</strong> towards attestation charges on behalf of Ms. Kavya. The amount was shown separately on the invoice and reimbursed by the client during February.
          </td>
          <td>-</td>
        </tr>
      </tbody>
    </table>

    <p><strong>Additional Information:</strong></p>

    <ul>
      <li>The turnover of M/s Malik Rao & Company during the previous financial year was <strong>₹50 lakh</strong>.</li>
      <li>The firm is engaged solely in providing legal services.</li>
      <li>The firm neither imports nor exports services.</li>
    </ul>
  `,
    questions: [
      {
        question_id: "idt_NOV24_mtp_I_cs3_1",
        chapter_name: ["Legal Services", "Reverse Charge Mechanism (RCM)"],
        question:
          "Whether the service provided to Sultan India (P) Ltd. is exempt under GST? If not, whether tax is payable under reverse charge?",
        options: [
          "Yes, all services provided by an advocate firm are exempt from GST.",
          "No, since service is provided to a business entity registered under section 22 of the CGST Act, 2017. Tax shall be payable by M/s Malik Rao & Company under forward charge.",
          "Yes, any service provided by an advocate firm to a business entity is exempt under GST.",
          "No, since service is provided to a business entity registered under section 22 of the CGST Act, 2017. Tax shall be payable by Sultan India (P) Ltd. under reverse charge.",
        ],
        answer: 3,
      },
      {
        question_id: "idt_NOV24_mtp_I_cs3_2",
        chapter_name: ["Time of Supply"],
        question:
          "What shall be the time of supply for supplies made to Ms. Kavya in respect of the original amount of ₹1 lakh and the penalty amount of ₹10,000?",
        options: [
          "For the whole amount of ₹1,10,000: 15th February.",
          "For ₹1 lakh: 15th February and for ₹10,000: 5th April.",
          "For the whole amount of ₹1,10,000: 5th April.",
          "For ₹1 lakh: 15th April and for ₹10,000: 5th April.",
        ],
        answer: 2,
      },
      {
        question_id: "idt_NOV24_mtp_I_cs3_3",
        chapter_name: ["Value of Supply"],
        question:
          "What shall be the value of supply provided to Ms. Kavya in terms of section 15 of the CGST Act, 2017?",
        options: ["₹1,10,000", "₹1,00,000", "₹1,30,000", "₹1,20,000"],
        answer: 0,
      },
      {
        question_id: "idt_NOV24_mtp_I_cs3_4",
        chapter_name: ["Composition Levy"],
        question:
          "Which of the following statements is/are correct in law?\n(i) M/s Malik Rao & Company is eligible to opt for composition levy under sub-sections (1) and (2) of section 10 of the CGST Act, 2017.\n(ii) M/s Malik Rao & Company is not eligible to opt for composition levy under sub-sections (1) and (2) of section 10 of the CGST Act, 2017.\n(iii) M/s Malik Rao & Company is eligible to opt for composition levy under sub-section (2A) of section 10 of the CGST Act, 2017.\n(iv) M/s Malik Rao & Company is not eligible to opt for composition levy under sub-section (2A) of section 10 of the CGST Act, 2017.",
        options: ["(i)", "(i) and (iv)", "(ii) and (iv)", "(ii) and (iii)"],
        answer: 2,
      },
    ],
  },
  {
  case_id: "idt_SEP24_mtp_II_cs1",
  case_chapter: [
    "Value of Supply",
    "Reverse Charge Mechanism (RCM)",
    "Time of Supply",
    "Interest",
    "Penalty",
    "E-Way Bill"
  ],
  caseText: `
    <p><strong>Abhivyakti Pvt. Ltd.</strong> is engaged in the supply of food products under the brand name <strong>"Super Foods"</strong>. It has a manufacturing plant at <strong>Howrah, West Bengal</strong>. The company is registered under GST and files monthly returns.</p>

    <p>The company has allotted residential quarters to its employees within the plant premises. Its aggregate turnover during the preceding financial year was <strong>₹7.50 crore</strong>.</p>

    <p>The following transactions relate to the month of <strong>September</strong>:</p>

    <table>
      <thead>
        <tr>
          <th>S. No.</th>
          <th>Particulars</th>
          <th>Amount (₹)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Sale of <strong>"Super Foods"</strong> food products <em>(Refer Note 2)</em></td>
          <td>60,00,000</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Purchase of raw material from the market</td>
          <td>14,00,000</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Rent received from employees for residential quarters allotted for residence</td>
          <td>10,000</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Electricity charges paid to West Bengal State Electricity Board</td>
          <td>1,60,000</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Security services received from <strong>M/s Suraksha Security, Kolkata</strong> (registered partnership firm)</td>
          <td>1,00,000</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Interest collected from customers for delayed payment</td>
          <td>3,500</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Interest earned on bank fixed deposits</td>
          <td>8,600</td>
        </tr>
        <tr>
          <td>8</td>
          <td>Payment made to <strong>Kolkata Chamber of Commerce</strong> towards sponsorship of Investor Summit</td>
          <td>25,000</td>
        </tr>
        <tr>
          <td>9</td>
          <td>Licence fee paid to Food Safety and Standards Authority of India (FSSAI)</td>
          <td>25,000</td>
        </tr>
        <tr>
          <td>10</td>
          <td>Legal fee paid to advocate <strong>Mr. Dhruv Banerjee</strong></td>
          <td>30,000</td>
        </tr>
        <tr>
          <td>11</td>
          <td>Transportation charges paid to an <strong>unregistered goods transport operator</strong> for transporting raw material from mandi to factory</td>
          <td>40,000</td>
        </tr>
        <tr>
          <td>12</td>
          <td>Transportation charges paid to a local truck owner <strong>(not a GTA)</strong> for transportation of finished goods from factory to distributors</td>
          <td>50,000</td>
        </tr>
      </tbody>
    </table>

    <p><strong>Additional Information:</strong></p>

    <ol>
      <li>
        Abhivyakti Pvt. Ltd. engaged <strong>M/s Techno Enterprises</strong>, a Goods Transport Agency (GTA), registered in
        <strong>West Bengal, Odisha and Assam</strong> under the same PAN, for transportation of goods within Kolkata during October.
        A proper consignment note containing all prescribed particulars was issued.
      </li>

      <li>
        Out of the total sales, food products worth <strong>₹3,50,000 (10,000 kg)</strong> were supplied to the
        <strong>Department of School Education, Government of West Bengal</strong> for distribution to flood-affected families.
        A <strong>price-linked subsidy of ₹10 per kg</strong> was received from the Government of West Bengal.
        This subsidy has <strong>not been included</strong> in the sales figure of ₹60,00,000.
      </li>

      <li>
        The company awarded a maintenance contract on <strong>10 June</strong> to
        <strong>Supreme Power Ltd., Delhi</strong> for repair of the factory's central air-conditioning unit for
        <strong>₹60,000</strong> with a completion period of 30 days.
        The work was completed on <strong>8 July</strong>, invoice was issued on
        <strong>5 September</strong> owing to a dispute regarding quality of work, and payment was made on
        <strong>15 September</strong>.
      </li>

      <li>
        The proper officer imposed a <strong>penalty of ₹5,000</strong> for wrongful utilisation of ITC amounting to
        <strong>₹5,000</strong>.
      </li>

      <li>
        GST liability for the month of August amounting to <strong>₹3,30,730</strong> was deposited on
        <strong>28 September</strong>.
      </li>
    </ol>

    <p><strong>Note:</strong> All amounts are exclusive of GST, wherever applicable, unless otherwise specified.</p>
  `,
    questions: [
    {
      question_id: "idt_SEP24_mtp_II_cs1_1",
      chapter_name: ["Value of Supply"],
      question:
        "The value of taxable outward supply made by Abhivyakti Pvt. Ltd. in the month of September is:",
      options: [
        "₹61,48,100",
        "₹59,03,500",
        "₹61,39,500",
        "₹59,35,500"
      ],
      answer: 1
    },
    {
      question_id: "idt_SEP24_mtp_II_cs1_2",
      chapter_name: ["Reverse Charge Mechanism (RCM)"],
      question:
        "The value of taxable supply received by Abhivyakti Pvt. Ltd. in the month of September on which GST is payable under reverse charge is:",
      options: [
        "₹1,55,000",
        "₹1,73,000",
        "₹1,30,000",
        "₹2,45,000"
      ],
      answer: 0
    },
    {
      question_id: "idt_SEP24_mtp_II_cs1_3",
      chapter_name: ["Time of Supply"],
      question:
        "What is the time of supply of services provided by Supreme Power Ltd.?",
      options: [
        "10th June",
        "5th September",
        "15th September",
        "8th July"
      ],
      answer: 3
    },
    {
      question_id: "idt_SEP24_mtp_II_cs1_4",
      chapter_name: ["Interest"],
      question:
        "The amount of interest payable by Abhivyakti Pvt. Ltd. under section 50 of the CGST Act, 2017 for delay in payment of tax for the month of August is:",
      options: [
        "₹4,961",
        "₹1,305",
        "₹4,567",
        "₹1,142"
      ],
      answer: 1
    },
    {
      question_id: "idt_SEP24_mtp_II_cs1_5",
      chapter_name: ["Penalty"],
      question:
        "In the context of the imposition of penalty of ₹5,000 by the proper officer on Abhivyakti Pvt. Ltd., which of the following statements is correct?",
      options: [
        "Penalty is leviable since the offence is not a 'minor breach'.",
        "Penalty is not leviable since the offence is a 'minor breach'.",
        "Penalty is leviable even though the offence is a minor breach.",
        "No penalty is leviable for such offence; only interest is payable by adding the ITC amount wrongfully utilized to the output liability."
      ],
      answer: 0
    },
    {
      question_id: "idt_SEP24_mtp_II_cs1_6",
      chapter_name: ["E-Way Bill"],
      question:
        "M/s Techno Enterprises wishes to obtain a Unique Common Enrolment Number (CEN) for generating e-way bills. Which of the following statements is true?",
      options: [
        "M/s Techno Enterprises is not eligible for obtaining CEN as a transporter registered only in a single State is eligible for the same.",
        "M/s Techno Enterprises is eligible for obtaining CEN as a transporter registered in multiple States with the same PAN. After obtaining CEN, it can use either CEN or its GSTIN for generating e-way bills throughout the country.",
        "M/s Techno Enterprises is not eligible for obtaining CEN as only unregistered transporters are eligible for the same.",
        "M/s Techno Enterprises is eligible for obtaining the CEN as it is registered in multiple States with the same PAN. After obtaining CEN, it can use it for generating e-way bills and updating Part-B throughout the country."
      ],
      answer: 3
    }
  ]
},
{
  case_id: "idt_SEP24_mtp_II_cs2",
  case_chapter: [
    "Sponsorship Services",
    "E-Invoicing",
    "Reverse Charge Mechanism (RCM)",
    "Input Tax Credit (ITC)",
    "Output Tax Liability",
    "Registration",
    "Penalty"
  ],
  caseText: `
    <p><strong>Bhakti & Sons</strong>, a partnership firm registered under GST in <strong>Kolkata, West Bengal</strong>, deals in the supply of electronic goods such as televisions, refrigerators and washing machines. It also provides repair and maintenance services for such goods.</p>

    <p>The aggregate turnover of the firm during the preceding financial year was <strong>₹4.20 crore</strong>.</p>

    <p><strong>Outward supplies during the month of December:</strong></p>

    <table>
      <thead>
        <tr>
          <th>S. No.</th>
          <th>Particulars</th>
          <th>Amount (₹ in lakh)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Supply of goods to unregistered persons residing in and around Kolkata</td>
          <td>12.00</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Supply of goods to an unregistered dealer in Bihar</td>
          <td>6.00</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Supply of goods to registered dealers in West Bengal</td>
          <td>28.00</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Repair and maintenance services provided to unregistered persons</td>
          <td>4.00</td>
        </tr>
      </tbody>
    </table>

    <p><strong>Inward supplies during the month of December:</strong></p>

    <table>
      <thead>
        <tr>
          <th>S. No.</th>
          <th>Particulars</th>
          <th>Amount (₹ in lakh)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Purchase of TV sets from registered dealers (Inter-State supply). During unloading, one LED TV costing ₹25,000 was damaged and the supplier refused to replace it.</td>
          <td>30.00</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Purchase of refrigerators from registered dealers (Intra-State supply)</td>
          <td>4.00</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Purchase of washing machines from unregistered dealers (Intra-State supply)</td>
          <td>2.00</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Transportation charges paid to Om Logistics (unregistered GTA)</td>
          <td>2.00</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Payment made to Star Security Services Pvt. Ltd. (not registered under GST) for providing security services</td>
          <td>0.50</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Loading and unloading charges paid to labourers</td>
          <td>0.10</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Shop rent paid to Kolkata Municipal Corporation</td>
          <td>0.30</td>
        </tr>
        <tr>
          <td>8</td>
          <td>Fee paid to Mr. Das, Senior Advocate of Kolkata High Court for legal services</td>
          <td>0.10</td>
        </tr>
      </tbody>
    </table>

    <p><strong>Additional Information:</strong></p>

    <ol>
      <li>The Assistant Commissioner of Commercial Tax, Kolkata issued a show cause notice to Bhakti & Sons for failure to display the registration certificate at a prominent location and the GSTIN on the name board at the entry of its principal place of business. Bhakti & Sons contends that displaying GSTIN to the general public is not mandatory since it is already mentioned on the tax invoice.</li>

      <li>Bhakti & Sons paid a sponsorship fee of <strong>₹5,00,000</strong> to <strong>Finmin Ltd.</strong>, registered in Kolkata, for an entertainment event organised in Assam during October.</li>

      <li>GST rate on all inward and outward supplies is <strong>18%</strong> (CGST 9%, SGST 9%, IGST 18%), except transportation of goods service which attracts GST @ <strong>5%</strong> (CGST 2.5%, SGST 2.5%, IGST 5%).</li>

      <li>There is <strong>no opening ITC</strong> available in the Electronic Credit Ledger for the relevant tax period.</li>

      <li>All goods are purchased on an <strong>ex-shop basis</strong> and transportation is arranged by Bhakti & Sons through a GTA.</li>
    </ol>

    <p><strong>Note:</strong> All the above amounts are exclusive of GST, wherever applicable.</p>
  `,
    questions: [
    {
      question_id: "idt_SEP24_mtp_II_cs2_1",
      chapter_name: [
        "Sponsorship Services",
        "Reverse Charge Mechanism (RCM)"
      ],
      question:
        "Which of the following statements is true in respect of the sponsorship fee paid by Bhakti & Sons to Finmin Ltd.?",
      options: [
        "Bhakti & Sons is liable to pay IGST of ₹90,000.",
        "Finmin Ltd. is liable to pay IGST of ₹90,000.",
        "Bhakti & Sons is liable to pay CGST and SGST of ₹45,000 each.",
        "Finmin Ltd. is liable to pay CGST and SGST of ₹45,000 each."
      ],
      answer: 2
    },
    {
      question_id: "idt_SEP24_mtp_II_cs2_2",
      chapter_name: [
        "E-Invoicing"
      ],
      question:
        "Assuming that Bhakti & Sons has an SEZ unit located in Uttar Pradesh apart from the regular Domestic Tariff Area (DTA) unit located in Kolkata (both having the same PAN). Assume the additional turnover of the SEZ unit during the preceding financial year was ₹2 crore. Which of the following statements is correct in respect of e-invoicing requirements?",
      options: [
        "E-invoicing is not applicable to both SEZ and DTA units.",
        "E-invoicing is applicable to both SEZ and DTA units.",
        "E-invoicing is applicable to the SEZ unit and the DTA unit is exempt from e-invoicing.",
        "E-invoicing is applicable to the DTA unit and the SEZ unit is exempt from e-invoicing."
      ],
      answer: 3
    },
    {
      question_id: "idt_SEP24_mtp_II_cs2_3",
      chapter_name: [
        "Reverse Charge Mechanism (RCM)"
      ],
      question:
        "The total value of inward supplies on which GST is payable by Bhakti & Sons under reverse charge for the month of December is:",
      options: [
        "₹2.40 lakh",
        "₹2.10 lakh",
        "₹2.90 lakh",
        "₹3.00 lakh"
      ],
      answer: 0
    },
    {
      question_id: "idt_SEP24_mtp_II_cs2_4",
      chapter_name: [
        "Input Tax Credit (ITC)"
      ],
      question:
        "The total input tax credit that can be availed by Bhakti & Sons for the month of December is:",
      options: [
        "₹6,97,500",
        "₹6,24,700",
        "₹6,86,700",
        "₹6,95,700"
      ],
      answer: 1
    },
    {
      question_id: "idt_SEP24_mtp_II_cs2_5",
      chapter_name: [
        "Output Tax Liability"
      ],
      question:
        "Total GST payable in cash by Bhakti & Sons for the month of December, assuming that no ITC is claimed/availed by it, is:",
      options: [
        "₹9,17,200",
        "₹9,43,200",
        "₹9,26,200",
        "₹9,20,800"
      ],
      answer: 0
    },
    {
      question_id: "idt_SEP24_mtp_II_cs2_6",
      chapter_name: [
        "Registration",
        "Penalty"
      ],
      question:
        "The penalty that may be leviable for failure to display the registration certificate in a prominent location and the GSTIN on the name board at the entry of its principal place of business by Bhakti & Sons is:",
      options: [
        "₹5,000",
        "₹10,000",
        "₹25,000",
        "Nil"
      ],
      answer: 2
    }
  ]
}
];
