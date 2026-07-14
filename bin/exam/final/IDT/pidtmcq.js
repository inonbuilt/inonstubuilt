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
];
