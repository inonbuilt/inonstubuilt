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
    "Place of Supply"
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
      chapter_name: [
        "Valuation",
        "Foreign Currency Exchange"
      ],
      question:
        "Determine the value of taxable supply in respect of sale and purchase of foreign currency by Kolkata office and Mumbai office of the company as per Rule 32(2)(a) of the CGST Rules, 2017.",
      options: [
        "Kolkata office ₹7,200, Mumbai office ₹3,660",
        "Kolkata office ₹10,000, Mumbai office ₹3,660",
        "Kolkata office ₹7,20,000, Mumbai office ₹3,66,000",
        "Kolkata office ₹7,30,000, Mumbai office ₹3,66,000"
      ],
      answer: 1
    },
    {
      question_id: "idt_apr24_mtp_II_cs1_2",
      chapter_name: [
        "Reverse Charge Mechanism"
      ],
      question:
        "The value of taxable supply received by Mumbai office during September on which tax is payable under reverse charge is:",
      options: [
        "₹15,000",
        "₹25,000",
        "₹40,000",
        "₹2,70,000"
      ],
      answer: 2
    },
    {
      question_id: "idt_apr24_mtp_II_cs1_3",
      chapter_name: [
        "Value of Supply",
        "Business Exhibition"
      ],
      question:
        "The value of taxable outward supply made by Kolkata office during September on which Swash Enterprise Pvt. Ltd. is liable to pay tax under forward charge is:",
      options: [
        "₹1,78,000",
        "₹2,78,000",
        "₹2,65,000",
        "₹1,13,000"
      ],
      answer: 0
    },
    {
      question_id: "idt_apr24_mtp_II_cs1_4",
      chapter_name: [
        "Appeals"
      ],
      question:
        "The maximum amount of pre-deposit that Swash Enterprise Pvt. Ltd. can be asked to deposit under the IGST Act, 2017 for filing an appeal before the Appellate Authority is:",
      options: [
        "₹30 crore",
        "₹60 crore",
        "₹25 crore",
        "₹50 crore"
      ],
      answer: 3
    }
  ]
},
{
  case_id: "idt_apr24_mtp_II_cs2",
  case_chapter: [
    "Input Tax Credit",
    "Value of Supply",
    "Import of Goods",
    "Place of Supply",
    "Hotel Accommodation",
    "Cross Border Services"
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
      chapter_name: [
        "Input Tax Credit",
        "Import of Goods"
      ],
      question:
        "The total GST liability, net of input tax credit, of Prista Limited for the month of January is:",
      options: [
        "₹2,18,160 payable as IGST",
        "Nil",
        "₹2,160 payable as IGST",
        "₹1,09,080 payable as CGST and ₹1,09,080 payable as SGST"
      ],
      answer: 2
    },
    {
      question_id: "idt_apr24_mtp_II_cs2_2",
      chapter_name: [
        "Output Tax Liability"
      ],
      question:
        "What shall be the gross IGST liability (without adjustment of ITC) of Anthun India Limited for the month of January?",
      options: [
        "₹1,08,000",
        "Nil",
        "₹1,58,400",
        "₹33,840"
      ],
      answer: 2
    },
    {
      question_id: "idt_apr24_mtp_II_cs2_3",
      chapter_name: [
        "Input Tax Credit",
        "Blocked Credit",
        "Hotel Accommodation"
      ],
      question:
        "Whether input tax credit is available on the GST charged by the Mumbai hotel on the invoice of ₹1,00,000 issued to Anthun India Limited? If yes, specify the eligible amount.",
      options: [
        "Yes, ₹14,000 CGST and ₹14,000 SGST",
        "Yes, ₹28,000 IGST",
        "Input tax credit is not available",
        "Yes, ₹7,000 CGST and ₹7,000 SGST"
      ],
      answer: 2
    },
    {
      question_id: "idt_apr24_mtp_II_cs2_4",
      chapter_name: [
        "Place of Supply",
        "Cross Border Services"
      ],
      question:
        "Whether GST is applicable on the event organised by Leisure Events Ltd. for Anthun India Limited in Mauritius and what is the place of supply?",
      options: [
        "GST is applicable and the place of supply is New Delhi",
        "GST is applicable and the place of supply is Gujarat",
        "GST is not applicable and the place of supply is Mauritius",
        "GST is applicable and the place of supply is Mauritius"
      ],
      answer: 1
    }
  ]
},

];
