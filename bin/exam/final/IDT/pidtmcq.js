const mcqData = [
  {
    case_id: "idt_mcq_cs1",
    case_chapter: ["GST Place of Supply", "GST Time of Supply"],
    caseText: `
      <p>Aakash Travels Pvt. Ltd., located in Maharashtra (registered under GST), is engaged in providing passenger transportation services. On 10th October, Mr. Suresh, an unregistered person normally residing in Gujarat, books a return ticket from Mumbai to Ahmedabad, and back from Ahmedabad to Mumbai. The booking is done at the Mumbai office and the journey starts on 15th October.</p>
      <p>The company issued the invoice on 12th October, and the payment was received by the company via online transfer on 11th October.</p>
      <p><strong>Based on the above facts, answer the following questions:</strong></p>
    `,
    questions: [
      {
        question_id: "idt_mcq_cs1_1",
        chapter_name: ["GST Place of Supply"],
        question: "What is the Place of Supply (POS) for the passenger transportation service provided by Aakash Travels Pvt. Ltd. to Mr. Suresh for the onward journey (Mumbai to Ahmedabad)?",
        options: [
          "Gujarat, since it is the destination.",
          "Maharashtra, since the passenger embarks on the conveyance for the continuous journey from there.",
          "Gujarat, since the address of the unregistered person is in Gujarat.",
          "Maharashtra, since the supplier is located there."
        ],
        answer: 1 // Under Section 12(9) of IGST Act, for unregistered persons, the POS is where the passenger embarks on the conveyance for a continuous journey.
      },
      {
        question_id: "idt_mcq_cs1_2",
        chapter_name: ["GST Place of Supply"],
        question: "For the return journey (Ahmedabad to Mumbai), what will be the Place of Supply?",
        options: [
          "Maharashtra",
          "Gujarat",
          "Can be either depending on where the ticket was booked.",
          "New Delhi"
        ],
        answer: 1 // The return journey is treated as a separate journey. The passenger embarks from Gujarat for the return trip.
      },
      {
        question_id: "idt_mcq_cs1_3",
        chapter_name: ["GST Time of Supply"],
        question: "What is the Time of Supply (TOS) for the services provided by Aakash Travels Pvt. Ltd.?",
        options: [
          "15th October",
          "10th October",
          "11th October",
          "12th October"
        ],
        answer: 2 // TOS for services is the date of issue of invoice or date of receipt of payment, whichever is earlier. (Invoice: 12th Oct, Payment: 11th Oct).
      }
    ]
  },
  {
    case_id: "idt_mcq_cs2",
    case_chapter: ["Customs Valuation"],
    caseText: `
      <p>Globe Importers based in Chennai imported a machine from a supplier in Germany. The FOB value of the machine was € 50,000. The cost of transport from the German factory to the German port was € 1,000. Ocean freight from Germany to Chennai was € 4,000. Insurance charges paid in Europe were € 500.</p>
      <p>The exchange rate notified by the CBIC on the date of presentation of the Bill of Entry was € 1 = ₹ 90, and the rate notified by the RBI was € 1 = ₹ 92.</p>
    `,
    questions: [
      {
        question_id: "idt_mcq_cs2_1",
        chapter_name: ["Customs Valuation"],
        question: "What exchange rate should be considered for computing the Assessable Value for customs duty purposes?",
        options: [
          "₹ 90 (Notified by CBIC)",
          "₹ 92 (Notified by RBI)",
          "Average of ₹ 90 and ₹ 92",
          "Rate notified by the Foreign Exchange Dealers' Association of India (FEDAI)"
        ],
        answer: 0 // For imported goods, the rate of exchange is the rate notified by the CBIC on the date of presentation of the Bill of Entry.
      },
      {
        question_id: "idt_mcq_cs2_2",
        chapter_name: ["Customs Valuation"],
        question: "Which of the following elements is correctly included in the computation of CIF value under the Customs Valuation Rules?",
        options: [
          "Ocean freight is restricted to 20% of FOB value.",
          "The cost of transport from the German factory to the German port (€ 1,000) forms part of the Free on Board (FOB) value.",
          "Insurance must always be taken as 1.125% of FOB if actuals are known.",
          "Post-importation transport charges are included in the Assessable Value."
        ],
        answer: 1 // Cost of transport up to the port of exportation is included in the FOB value. Ocean freight is actual (€ 4,000) since it does not exceed 20% of FOB (€ 51,000 * 20% = € 10,200).
      }
    ]
  }
];