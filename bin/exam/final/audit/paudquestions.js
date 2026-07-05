const descriptiveQuestions = [
  {
    question_id: "AUD_MTP_1",
    source: "Sample Audit MTP",
    chapter_name: "Professional Ethics",
    placement: 1,
    marks: 14,
    question_html: `
      <p>CA. Raj is a practicing Chartered Accountant. He entered into a partnership with Mr. Sam, an Advocate registered with the Bar Council of India, to provide comprehensive legal and financial advisory services under one roof. They formed a firm named 'Raj & Sam Associates'. The profits of the firm are shared equally between them.</p>
      <p>Furthermore, CA. Raj agreed to pay 15% of his professional fees earned from tax audit assignments to Mr. Sam for referring clients to him.</p>
      <p><strong>Required:</strong></p>
      <p>Discuss the ethical implications of the above arrangements in the context of the Chartered Accountants Act, 1949 and the Schedules thereto. Determine if CA. Raj is guilty of professional misconduct.</p>
    `,
    solution_html: `
      <strong>Solution:</strong><br><br>
      
      <strong>1. Partnership with an Advocate:</strong><br>
      <p>As per Clause (4) of Part I of the First Schedule to the Chartered Accountants Act, 1949, a Chartered Accountant in practice is deemed to be guilty of professional misconduct if he enters into partnership, in or outside India, with any person other than a Chartered Accountant in practice or such other person who is a member of any other professional body having such qualifications as may be prescribed.</p>
      <p>However, the Council of the ICAI has prescribed under Regulation 53B that a Chartered Accountant in practice can enter into a partnership with members of certain specific professional bodies, which includes Advocates (members of the Bar Council of India).</p>
      <p>Therefore, entering into a partnership with Mr. Sam, an Advocate, to form 'Raj & Sam Associates' is <strong>permitted</strong> and does not constitute professional misconduct under Clause (4).</p>

      <br>
      <strong>2. Sharing of Professional Fees for Referrals:</strong><br>
      <p>As per Clause (2) of Part I of the First Schedule to the Chartered Accountants Act, 1949, a Chartered Accountant in practice is deemed to be guilty of professional misconduct if he pays or allows or agrees to pay or allow, directly or indirectly, any share, commission or brokerage in the fees or profits of his professional business, to any person other than a member of the Institute or a partner or a retired partner.</p>
      <p>Further, Clause (3) of Part I of the First Schedule prohibits a CA from accepting any part of the profits of the professional work of a person who is not a member of the Institute.</p>
      <p>While sharing profits within a permitted multi-disciplinary partnership is allowed, paying a direct referral fee (15% commission) on individual assignments like tax audits specifically for client procurement violates the fundamental principles of the Code of Ethics regarding solicitation and sharing of fees.</p>
      
      <br>
      <strong>Conclusion:</strong><br>
      <p>While the formation of the multidisciplinary partnership with an advocate is valid under Regulation 53B, the specific arrangement of paying a 15% commission for client referrals on statutory assignments like tax audits renders CA. Raj guilty of professional misconduct under Clause (2) of Part I of the First Schedule.</p>
    `
  },
  {
    question_id: "AUD_MTP_2",
    source: "Sample Audit MTP",
    chapter_name: "Audit under Automated Environment",
    placement: 2,
    marks: 8,
    question_html: `
      <p>During the statutory audit of SecurePay Ltd., an e-commerce payment gateway, the engagement team noted that the company heavily relies on its IT infrastructure for processing millions of transactions daily.</p>
      <p>The auditor intends to evaluate the IT General Controls (ITGC) as part of the risk assessment procedures.</p>
      <p><strong>Required:</strong></p>
      <p>List any four key domains of IT General Controls that the auditor should evaluate, and provide two examples of controls within the "Access Security" domain.</p>
    `,
    solution_html: `
      <strong>Solution:</strong><br><br>
      
      <strong>Key Domains of IT General Controls (ITGC):</strong><br>
      <p>The auditor should evaluate the following key domains to ensure the continuous and secure operation of the IT environment:</p>
      <ol>
        <li><strong>Access Security (Logical and Physical Access):</strong> Controls to ensure that access to programs and data is restricted to authorized users.</li>
        <li><strong>Program Changes:</strong> Controls over the authorization, testing, and approval of changes to IT applications and infrastructure before moving to production.</li>
        <li><strong>Program Development / Acquisition:</strong> Controls surrounding the development or acquisition of new software or systems.</li>
        <li><strong>Computer Operations:</strong> Controls over back-up and recovery, job scheduling, and handling of IT incidents/problems.</li>
      </ol>

      <br>
      <strong>Examples of Controls within Access Security:</strong><br>
      <ul>
        <li><strong>User Access Provisioning:</strong> A formalized process where management must approve all new user access requests before the IT administrator grants system access.</li>
        <li><strong>Password Configuration and Policies:</strong> Enforcement of strong password parameters (e.g., minimum 8 characters, alphanumeric, mandatory change every 90 days) forced systematically by the Active Directory.</li>
      </ul>
    `
  }
];