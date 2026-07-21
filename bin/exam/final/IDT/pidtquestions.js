const descriptiveQuestions = [
  {
  "question_id": "IDT_MTP_I_1",
  "source": "ICAI Mock Test Paper Series I - March 2024",
  "chapter_name": "Input Tax Credit and Computation of Tax Liability",
  "placement": 1,
  "marks": 14,
  "question_html": `
    <p> Suyogya Pvt. Ltd., registered under GST, is engaged in the manufacture of 5-seater luxury cars at its factories located in the States of Rajasthan, Uttar Pradesh and Gujarat. The company has obtained registration in each of these States.</p>
    <p>The company reports the following details for a tax period pertaining to its factory located in Gujarat:</p>
    <table border="1" cellpadding="5" style="border-collapse: collapse; width: 100%;">
      <thead>
        <tr style="background-color: #f2f2f2;">
          <th>Payments</th>
          <th>Amount (₹ in lakh)</th>
          <th>Receipts</th>
          <th>Amount (₹ in lakh)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Raw material</td>
          <td>4.50</td>
          <td><strong>Sales:</strong><br>Sales in Gujarat</td>
          <td>14.00</td>
        </tr>
        <tr>
          <td>Consumables [Intra-State]</td>
          <td>0.75</td>
          <td>Sales in States other than Gujarat</td>
          <td>6.00</td>
        </tr>
        <tr>
          <td>General insurance of cars manufactured</td>
          <td>2.50</td>
          <td>Exports under Letter of Undertaking (LUT)</td>
          <td>10.00</td>
        </tr>
        <tr>
          <td>Security services</td>
          <td>0.70</td>
          <td>Income from services provided to Gujarat Government administration</td>
          <td>2.50</td>
        </tr>
        <tr>
          <td>Works contract services</td>
          <td>1.60</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Rent paid</td>
          <td>1.00</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Membership of Automobile Association [registered in the State of Gujarat]</td>
          <td>0.10</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Bank charges</td>
          <td>0.10</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Audit fee</td>
          <td>0.50</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <br>
    <p>All the above amounts are exclusive of all kinds of taxes, wherever applicable. However, the applicable taxes have also been paid by the company.</p>
    <p>Further, following additional details are furnished by the company in respect of the payments and receipts reported by it:</p>
    <p><strong>(i)</strong> Raw materials worth ₹ 0.50 lakh, were purchased from a composition dealer located in Gujarat. Remaining raw material has been procured from various registered vendors located in Maharashtra.</p>
    <p><strong>(ii)</strong> Rent has been paid for the factory building located in Gujarat to its owner registered in Gujarat.</p>
    <p><strong>(iii)</strong> General insurance services have been received from Deep Insurance Company Ltd., registered in Gujarat.</p>
    <p><strong>(iv)</strong> Payment for security services (services provided by way of supply of security personnel) for the tax period has been made to ABC Ltd., a company located in Gujarat and not registered under GST.</p>
    <p><strong>(v)</strong> Works contract services, availed from Nirma Builders, Gujarat, have been used by the company for construction of a foundation on which machinery to be used in the production process is to be mounted permanently.</p>
    <p><strong>(vi)</strong> Bank charges are towards various services availed by the company during a month with regard to its current account maintained with Best Bank, registered in Gujarat. The bank issued a consolidated tax invoice for all such services at the end of the month containing the details of tax charged, description of services, total value, GSTIN of the bank and Suyogya Pvt. Ltd.</p>
    <p><strong>(vii)</strong> Audit fee is paid to a firm of Chartered Accountants - M/s Chandiok & Associates (registered in Tamil Nadu with an aggregate turnover of ₹ 6 crores in the preceding financial year) - for conducting the statutory audit of the company in the preceding financial year. The firm raises an e-invoice without IRN (Invoice Reference Number) for said services.</p>
    <p><strong>(ix)</strong> Services provided to Gujarat Government administration are under a Health Training programme. 51% of the total expenditure for said programme is borne by Gujarat Government.</p>
    <p><strong>(x)</strong> The opening balance of ITC with the company for the tax period is:<br>
    &bull; CGST - ₹ 0.50 lakh<br>
    &bull; SGST - ₹ 0.26 lakh<br>
    &bull; IGST - ₹ 0.35 lakh</p>
    <p>Compute the total ITC available with Suyogya Pvt. Ltd. for the given tax period and net GST payable [CGST, SGST or IGST, as the case may be] from Electronic Cash Ledger by Suyogya Pvt. Ltd. for the given tax period.</p>
    <p><strong>Notes:</strong><br>
    (A) CGST, SGST & IGST rates on all inward and outward supplies are 9%, 9% and 18% respectively.<br>
    (B) The necessary conditions for availing ITC have been complied with by Suyogya Pvt. Ltd., wherever applicable.<br>
    You are required to make suitable assumptions, wherever necessary.</p>
  `,
  "solution_html": `
    
    <p><strong>Computation of ITC available with Suyogya Pvt. Ltd. for the given tax period</strong></p>
    <table border="1" cellpadding="5" style="border-collapse: collapse; width: 100%;">
      <thead>
        <tr style="background-color: #f2f2f2;">
          <th>S. No.</th>
          <th>Particulars</th>
          <th>Value of supply (₹)</th>
          <th>CGST (₹)</th>
          <th>SGST (₹)</th>
          <th>IGST (₹)</th>
          <th>Total (₹)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1.</td>
          <td>Opening balance of ITC</td>
          <td>--</td>
          <td>50,000</td>
          <td>26,000</td>
          <td>35,000</td>
          <td>1,11,000</td>
        </tr>
        <tr>
          <td>2.</td>
          <td>Raw Materials [₹ 4,50,000 – ₹ 50,000] (Refer Note 1)</td>
          <td>4,00,000</td>
          <td>--</td>
          <td>--</td>
          <td>72,000</td>
          <td>72,000</td>
        </tr>
        <tr>
          <td>3.</td>
          <td>Rent paid for the factory building (Refer Note 2)</td>
          <td>1,00,000</td>
          <td>9,00,000</td>
          <td>9,00,000</td>
          <td>--</td>
          <td>18,000</td>
        </tr>
        <tr>
          <td>4.</td>
          <td>Consumables (Refer Note 3)</td>
          <td>75,000</td>
          <td>6,750</td>
          <td>6,750</td>
          <td>--</td>
          <td>13,500</td>
        </tr>
        <tr>
          <td>5.</td>
          <td>Security services (Refer Note 4)</td>
          <td>70,000</td>
          <td>Nil</td>
          <td>Nil</td>
          <td>Nil</td>
          <td>Nil</td>
        </tr>
        <tr>
          <td>6.</td>
          <td>General insurance of cars manufactured (Refer Note 5)</td>
          <td>2,50,000</td>
          <td>22,500</td>
          <td>22,500</td>
          <td>--</td>
          <td>45,000</td>
        </tr>
        <tr>
          <td>7.</td>
          <td>Works contract services (Refer Note 6)</td>
          <td>1,60,000</td>
          <td>14,400</td>
          <td>14,400</td>
          <td>--</td>
          <td>28,800</td>
        </tr>
        <tr>
          <td>8.</td>
          <td>Audit fee (Refer Note 7)</td>
          <td>50,000</td>
          <td>Nil</td>
          <td>Nil</td>
          <td>Nil</td>
          <td>Nil</td>
        </tr>
        <tr>
          <td>9.</td>
          <td>Bank charges (Refer Note 8)</td>
          <td>10,000</td>
          <td>900</td>
          <td>900</td>
          <td>--</td>
          <td>1,800</td>
        </tr>
        <tr>
          <td>10.</td>
          <td>Membership of Automobile Association (Refer Note 9)</td>
          <td>10,000</td>
          <td>900</td>
          <td>900</td>
          <td>--</td>
          <td>1,800</td>
        </tr>
        <tr style="background-color: #f9f9f9; font-weight: bold;">
          <td colspan="3">Total ITC available for the tax period</td>
          <td>1,04,450</td>
          <td>80,450</td>
          <td>1,07,000</td>
          <td>2,91,900</td>
        </tr>
      </tbody>
    </table>
    <br>
    
    <p><strong>Computation of net GST payable</strong></p>
    <table border="1" cellpadding="5" style="border-collapse: collapse; width: 100%;">
      <thead>
        <tr style="background-color: #f2f2f2;">
          <th>Particulars</th>
          <th>Value of supply (₹)</th>
          <th>CGST (₹)</th>
          <th>SGST (₹)</th>
          <th>IGST (₹)</th>
          <th>Total (₹)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Intra-State sales in Gujarat</td>
          <td>14,00,000</td>
          <td>1,26,000</td>
          <td>1,26,000</td>
          <td>--</td>
          <td>2,52,000</td>
        </tr>
        <tr>
          <td>Inter-State sales other than Gujarat</td>
          <td>6,00,000</td>
          <td>--</td>
          <td>--</td>
          <td>1,08,000</td>
          <td>1,08,000</td>
        </tr>
        <tr>
          <td>Exports under LUT (Note 10)</td>
          <td>10,00,000</td>
          <td>Nil</td>
          <td>Nil</td>
          <td>Nil</td>
          <td>Nil</td>
        </tr>
        <tr>
          <td>Income from services provided to Gujarat Government (Note 11)</td>
          <td>2,50,000</td>
          <td>22,500</td>
          <td>22,500</td>
          <td>--</td>
          <td>45,000</td>
        </tr>
        <tr style="font-weight: bold;">
          <td>Total output tax liability</td>
          <td></td>
          <td>1,48,500</td>
          <td>1,48,500</td>
          <td>1,08,000</td>
          <td>4,05,000</td>
        </tr>
        <tr>
          <td>Less: ITC available for being set off (Note 12, Note 13 and Note 14)</td>
          <td></td>
          <td>(1,04,450)</td>
          <td>(80,450)</td>
          <td>(1,07,000)</td>
          <td>(2,91,900)</td>
        </tr>
        <tr style="background-color: #f9f9f9; font-weight: bold;">
          <td>Net GST payable from Electronic Cash Ledger</td>
          <td></td>
          <td>44,050</td>
          <td>68,050</td>
          <td>1,000</td>
          <td>1,13,100</td>
        </tr>
      </tbody>
    </table>
    <br>

    <p><strong>Notes:</strong></p>
    <p><strong>1.</strong> Credit of input tax paid on raw materials used in the course or furtherance of business is available. However, ITC is not available on raw material purchased from a composition dealer in terms of section 17(5) of the CGST Act, 2017.</p>
    <p><strong>2.</strong> ITC on rent paid is available as the said service is used in the course or furtherance of business.</p>
    <p><strong>3.</strong> ITC on consumables, being inputs used in the course or furtherance of business, is available.</p>
    <p><strong>4.</strong> Since in the given case, security services have been provided by a body corporate - Safe and Secure Solutions Pvt. Limited to a registered person - Suyogya Pvt. Ltd., GST on the same is payable under forward charge. However, since Safe and Secure Solutions Pvt. Limited is not registered under GST, it would not have charged GST on the said services and hence, no ITC is available.</p>
    <p><strong>5.</strong> ITC on motor vehicles for transportation of persons is allowed in terms of section 17(5) of the CGST Act, 2017 provided such vehicles are further supplied by the supplier. ITC is allowed on general insurance services relating to motor vehicles, ITC on which is allowed [Section 17(5) of the CGST Act, 2017].</p>
    <p><strong>6.</strong> Section 17(5) blocks ITC in respect of works contract services when supplied for construction of an immovable property (other than plant and machinery) except where it is an input service for further supply of works contract service. Further, the term “plant and machinery” means, inter alia, machinery fixed to earth by foundation or structural support that are used for making outward supply and includes such foundation/structural support. Thus, in view of the above-mentioned provisions, ITC is available in respect of works contract service availed by Suyogya Pvt. Ltd. as the same is used for construction of plant and machinery which is not blocked under section 17(5) of the CGST Act, 2017.</p>
    <p><strong>7.</strong> Audit fee are the services used in the course/ furtherance of business and thus, credit of input tax paid on such service will be available in terms of section 16 of the CGST Act, 2017. M/s Chandiok & Associates is required to issue an e-invoice for audit services as e-invoicing is mandatory for the registered persons whose aggregate turnover in any of the preceding financial years from 2017-18 onwards exceed ₹ 5 crores. However, an e-invoice without IRN is not treated as an invoice and hence, without a valid document, ITC cannot be claimed on such input services.</p>
    <p><strong>8.</strong> Bank charges are services used in the course/ furtherance of business and thus, credit of input tax paid on such service will be available. However, ITC can be claimed only on the basis of valid documents. In case of a banking company, a consolidated tax invoice issued for supply of services made during a month at the end of the month containing the details of tax charged, description of services, total value, GSTIN of the supplier and the recipient is deemed to be a tax invoice. Thus, ITC pertaining to the banking services received is allowed.</p>
    <p><strong>9.</strong> As per section 17(5) of the CGST Act, 2017, ITC is blocked on membership of a club, health and fitness centre. The membership fee paid by an automobile company to the Automobile Association is not covered under said section as it is distinct from membership of a club. Hence, ITC thereon is available.</p>
    <p><strong>10.</strong> Export of goods is a zero-rated supply in terms of section 16 of the IGST Act. A zero-rated supply under LUT is made without payment of integrated tax.</p>
    <p><strong>11.</strong> Services provided to the Central Government, State Government, Union territory administration under any training programme for which 75% or more of the total expenditure is borne by the Central Government, State Government, Union territory administration are exempt from GST. However, in the given case, since the total expenditure borne by the Gujarat Government is less than 75%, services provided to it by Suyogya Pvt. Ltd. are liable to GST.</p>
    <p><strong>12.</strong> Since export of goods is a zero-rated supply, apportionment of ITC is not required and instead, full credit will be available.</p>
    <p><strong>13.</strong> ITC of:<br>
    (i) IGST is utilised towards payment of IGST first and then CGST and SGST in any proportion and in any order.<br>
    (ii) CGST is utilised towards payment of CGST and IGST in that order. ITC of CGST shall be utilized only after ITC of IGST has been utilised fully.<br>
    (iii) SGST is utilised towards payment of SGST and IGST in that order. ITC of SGST shall be utilized only after ITC of IGST has been utilised fully.</p>
    <p><strong>14.</strong> Since the value of taxable supply other than zero-rated supply in the given tax period (₹ 14 lakh + ₹ 6 lakh + ₹ 2.50 lakh) does not exceed ₹ 50 lakh, provisions of rule 86B of the CGST Rules, 2017 are not applicable and Suyogya Ltd. can discharge its entire output tax liability for said period from the electronic credit ledger.</p>
    <p><strong>15.</strong> CGST and SGST are chargeable on intra-State inward and outward supplies and IGST is chargeable on inter-State inward and outward supplies. Rate of CGST, SGST and IGST applied is 9%, 9% and 18% except in case of renting of cars wherein the rate of CGST and SGST applied is 2.5% and 2.5% respectively.</p>
  `
},
{
  question_id: "IDT_MTP_I_2a",
  source: "ICAI Mock Test Paper Series I - March 2024",
  chapter_name: "Place of Supply",
  placement: 2,
  marks: 10,
  question_html: `
    <p> Determine the place of supply for the following independent cases:</p>
    <p><strong>(i)</strong> ABC Events, an event management company at Kolkata, organises two award functions for Bhushan Jewellers of Chennai (registered in Chennai, Tamil Nadu) at New Delhi and in Singapore.</p>
    <p><strong>(ii)</strong> Happy Planners (Bengaluru, Karnataka) is hired by Dr. Tripti (unregistered person based in Kochi, Kerala) to plan and organise her daughter's wedding at Mumbai, Maharashtra.</p>
    <p><strong>(iii)</strong> Dhirubhai Pvt. Ltd. (New Delhi) imports a machine from Japan for being installed in its factory at New Delhi. To install such machine, Dhirubhai Pvt. Ltd. takes the service of an engineer who comes to India from Japan for this specific installation.</p>
    <p><strong>(iv)</strong> Mr. Gogoi, an architect (New Delhi), provides professional services to Mr. George of New York in relation to his immovable property located in Pune.</p>
    <p><strong>(v)</strong> Mr. Jigar, an unregistered person based in New Delhi hires a yacht from a company based in London, UK for 20 days.</p>
  `,
  solution_html: `
    
    <p><strong>(i)</strong> When service by way of organization of an event is provided to a registered person, place of supply is the location of such person in terms of section 12 of the IGST Act, 2017. Since, in the given case, the award functions at New Delhi and Singapore are organized for Bhushan Jewellers (registered in Chennai), place of supply in both the cases is the location of Bhushan Jewellers, i.e., <strong>Chennai, Tamil Nadu</strong>.</p>
    <p><strong>(ii)</strong> As per section 12 of the IGST Act, 2017, when service by way of organization of an event is provided to an unregistered person, the place of supply is the location where the event is actually held and if the event is held outside India, the place of supply is the location of recipient. Since, in the given case, the service recipient [Dr. Tripti] is unregistered and event is held in India, place of supply is the location where the event is actually held, i.e., <strong>Mumbai, Maharashtra</strong>.</p>
    <p><strong>(iii)</strong> As per section 13 of the IGST Act, 2017, place of supply of services requiring physical presence of goods on which the services are to be performed is the location where the service is actually performed. Thus, in given case, the place of supply of installation service, which requires the physical presence of machinery, is the location where the service is actually performed, i.e., <strong>New Delhi</strong>.</p>
    <p><strong>(iv)</strong> As per section 13 of the IGST Act, 2017, place of supply of services supplied directly in relation to an immovable property is the location of immovable property located or intended to be located. Thus, in given case, the place of supply is the location of immovable property, i.e., <strong>Pune</strong>.</p>
    <p><strong>(v)</strong> As per section 13 of the IGST Act, 2017, place of supply of services consisting of hiring of means of transport, including yachts but excluding aircrafts and vessels, up to a period of 1 month is the location of the supplier of services. Thus, in given case, the place of supply is the location of the supplier of services, i.e., <strong>London</strong>.</p>
  `
},
{
  question_id: "IDT_MTP_I_2b",
  source: "ICAI Mock Test Paper Series I - March 2024",
  chapter_name: "Customs Valuation",
  placement: 2,
  marks: 4,
  question_html: `
    <p>Nilgiri Ltd., located in India, purchased a machine from Peter Inc., USA. The cost of the machine at the factory of Peter Inc. is US$ 10,000. Transport charges from the factory of Peter Inc. to the port for shipment is US$ 500. Handling charges paid for loading the machine in the ship are US$ 50. The freight charges from US port to India are US$ 1,000. The buying commission paid by Nilgiri Ltd. is US$ 50. However, actual insurance charges paid are not ascertainable. You are required to determine the assessable value of the machine provided the exchange rate to be considered is 1$ = ₹ 70.</p>
  `,
  solution_html: `
    <p><strong>Computation of assessable value of the imported goods</strong></p>
    <table border="1" cellpadding="5" style="border-collapse: collapse; width: 100%;">
      <thead>
        <tr style="background-color: #f2f2f2;">
          <th>Particulars</th>
          <th>Type/Value</th>
          <th>US $</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cost of the machine at the factory of Peter Inc.</td>
          <td></td>
          <td align="right">10,000.00</td>
        </tr>
        <tr>
          <td>Transport charges up to port</td>
          <td></td>
          <td align="right">500.00</td>
        </tr>
        <tr>
          <td>Handling charges at the port</td>
          <td></td>
          <td align="right">50.00</td>
        </tr>
        <tr style="font-weight: bold;">
          <td>Free on Board (FOB) Value</td>
          <td></td>
          <td align="right">10,550.00</td>
        </tr>
        <tr>
          <td>Freight charges from US port to India</td>
          <td>Actual</td>
          <td align="right">1,000.00</td>
        </tr>
        <tr>
          <td>Insurance charges (Refer Note 1)</td>
          <td>1.125% of FOB</td>
          <td align="right">118.69</td>
        </tr>
        <tr style="background-color: #f9f9f9; font-weight: bold;">
          <td>Cost, Insurance, and Freight (CIF) Value</td>
          <td></td>
          <td align="right">11,668.69</td>
        </tr>
      </tbody>
    </table>
    <br>
    <p><strong>Assessable Value Calculation:</strong></p>
    <p>CIF in Indian rupees @ ₹ 70 per $ = 11,668.69 &times; ₹ 70 = ₹ 8,16,808.30</p>
    <p><strong>Assessable Value (Rounded off) = ₹ 8,16,808</strong></p>
    <br>
    <p><strong>Notes:</strong></p>
    <p><strong>1.</strong> As per Rule 10(2) of the Customs Valuation Rules, 2007, where the actual insurance charges are not ascertainable, they are included @ 1.125% of the FOB value of the goods.</p>
    <p><strong>2.</strong> Buying commission (US$ 50) paid by the importer is specifically excludible from the assessable value as per the provisions of the Customs Act, 1962.</p>
  `
},
{
  question_id: "IDT_MTP_I_3a",
  source: "ICAI Mock Test Paper Series I - March 2024",
  chapter_name: "Input Tax Credit",
  placement: 3,
  marks: 5,
  question_html: `
    <p> Shell Dune Limited is engaged in manufacture of taxable electronic goods. Its two manufacturing units are located in Mumbai and Nagpur and both the units are registered under GST in the State of Maharashtra. The company has another manufacturing unit in Bangalore, registered under GST in the State of Karnataka and a retail showroom located in Ahmedabad, registered under GST in the State of Gujarat.</p>
    <p>The company has provided the following details of the activities/ transactions undertaken in a tax period:</p>
    <table border="1" cellpadding="5" style="border-collapse: collapse; width: 100%;">
      <thead>
        <tr style="background-color: #f2f2f2;">
          <th style="width: 8%;">S. No.</th>
          <th style="width: 52%;">Particulars</th>
          <th style="width: 20%;">Mumbai unit (₹)</th>
          <th style="width: 20%;">Nagpur unit (₹)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td align="center">(i)</td>
          <td>Sale of taxable goods</td>
          <td align="right">12,50,000</td>
          <td align="right">13,50,000</td>
        </tr>
        <tr>
          <td align="center">(ii)</td>
          <td>Interest received on fixed deposits with a nationalised bank</td>
          <td align="right">--</td>
          <td align="right">1,08,000</td>
        </tr>
        <tr>
          <td align="center">(iii)</td>
          <td>Sale of securities [Such securities were purchased for ₹ 2,75,000]</td>
          <td align="right">4,50,000</td>
          <td align="right">--</td>
        </tr>
        <tr>
          <td align="center">(iv)</td>
          <td>Sale of agricultural land in the vicinity of the manufacturing plant [Stamp duty was paid on ₹ 1,85,00,000]</td>
          <td align="right">--</td>
          <td align="right">1,85,00,000</td>
        </tr>
        <tr>
          <td align="center">(v)</td>
          <td>Sale of old factory building which was not used anymore [Stamp duty was paid on ₹ 75,00,000]</td>
          <td align="right">90,00,000</td>
          <td align="right">--</td>
        </tr>
        <tr>
          <td align="center">(vi)</td>
          <td>Transfer of actionable claims (other than casinos, online gaming and horse racing)</td>
          <td align="right">--</td>
          <td align="right">2,00,000</td>
        </tr>
      </tbody>
    </table>
    <br>
    <p>With the help of above information, you are required to determine the value of exempt supply under GST law as provided by Nagpur unit and Mumbai unit for the purpose of apportionment of ITC under section 17(3) of the CGST Act, 2017.</p>
  `,
  solution_html: `
    
    <p>As per section 17(3) of the CGST Act, 2017, value of exempt supply includes supplies on which the recipient is liable to pay tax on reverse charge basis, transactions in securities, sale of land and, subject to clause (b) of paragraph 5 of Schedule II, sale of building. As per explanation to section 17(3), the expression "value of exempt supply" shall not include the value of activities or transactions specified in Schedule III, except sale of land and, subject to clause (b) of paragraph 5 of Schedule II, sale of building.</p>
    
    <p>Further, as per explanation to Chapter V (Input Tax Credit) of the CGST Rules, 2017, for determining the value of an exempt supply as referred in section 17(3), the value of exempt supply in respect of land and building is the value adopted for paying stamp duty and for security is 1% of the sale value of such security.</p>
    
    <p>Further, as per explanation to rule 43, the aggregate value of exempt supplies for the purpose of rules 42 and 43, inter alia, excludes the value of services by way of accepting deposits, extending loans or advances in so far as the consideration is represented by way of interest or discount, except in case of a banking company or a financial institution including a non-banking financial company, engaged in supplying services by way of accepting deposits, extending loans or advances.</p>
    
    <p>In view of the aforesaid provisions, value of exempt supply by Nagpur unit and Mumbai unit for the purpose of apportionment under section 17(3) is determined as follows:</p>
    
    <table border="1" cellpadding="5" style="border-collapse: collapse; width: 100%;">
      <thead>
        <tr style="background-color: #f2f2f2;">
          <th style="width: 60%;">Particulars</th>
          <th style="width: 20%;">Mumbai unit (₹)</th>
          <th style="width: 20%;">Nagpur unit (₹)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Sale of taxable goods</td>
          <td align="center">---</td>
          <td align="center">---</td>
        </tr>
        <tr>
          <td>Interest received on fixed deposits<br><small style="color: gray;">[Excluded from value of exempt supply by virtue of explanation to rule 43]</small></td>
          <td align="center">--</td>
          <td align="center">--</td>
        </tr>
        <tr>
          <td>Sale of securities [1% of ₹ 4,50,000]<br><small style="color: gray;">[Includible as per section 17(3). Value of exempt supply in respect of security is 1% of the sale value of such security.]</small></td>
          <td align="right">4,500</td>
          <td align="center">--</td>
        </tr>
        <tr>
          <td>Sale of agricultural land<br><small style="color: gray;">[Includible as per section 17(3). Value of exempt supply in respect of land is the value adopted for paying stamp duty.]</small></td>
          <td align="center">--</td>
          <td align="right">1,85,00,000</td>
        </tr>
        <tr>
          <td>Sale of old factory building<br><small style="color: gray;">[Includible as per section 17(3). Value of exempt supply in respect of building is the value adopted for paying stamp duty.]</small></td>
          <td align="right">75,00,000</td>
          <td align="center">--</td>
        </tr>
        <tr>
          <td>Transfer of actionable claims (other than casinos, online gaming and horse racing)<br><small style="color: gray;">[Excluded from value of exempt supply by virtue of explanation to section 17(3)]</small></td>
          <td align="center">--</td>
          <td align="center">--</td>
        </tr>
        <tr style="background-color: #f9f9f9; font-weight: bold;">
          <td>Total value of exempt supply</td>
          <td align="right">75,04,500</td>
          <td align="right">1,85,00,000</td>
        </tr>
      </tbody>
    </table>
  `
},
{
  question_id: "IDT_MTP_I_3b",
  source: "ICAI Mock Test Paper Series I - March 2024",
  chapter_name: "Exemptions from GST",
  placement: 3,
  marks: 5,
  question_html: `
    Determine whether GST is payable in respect of each of the following independent services provided by the registered persons:</p>
    <p><strong>(1)</strong> Service provided to a Governmental Authority by way of slum improvement and upgradation.</p>
    <p><strong>(2)</strong> Fees of ₹ 20,000 charged from office staff for in-house personality development course conducted by Banarsidas College providing education as part of a curriculum for obtaining a qualification recognised by Indian law.</p>
    <p><strong>(3)</strong> Bus fees of ₹ 2,000 per month collected from students by RPSD College providing education as part of a curriculum for obtaining a qualification recognised by Indian law.</p>
    <p><strong>(4)</strong> Housekeeping service provided by M/s. Buff Ltd. to Bloom Montessori school, a play school, for cleaning its playground and classrooms for ₹ 30,000 per month.</p>
    <p><strong>(5)</strong> Grow Buds supplied “Gratitude Jot”, an online educational journal, to students of UKG class of Seeds Montessori School for ₹ 2,000.</p>
  `,
  solution_html: `
    
    <p><strong>(1) Status: Exempt (GST Not Payable)</strong><br>
    Services provided to a Governmental Authority by way of slum improvement and upgradation are specifically exempt from GST vide exemption notification under GST law.</p>
    
    <p><strong>(2) Status: Exempt (GST Not Payable)</strong><br>
    Services provided by an educational institution to its students, faculty, and staff are exempt from GST vide exemption notification. An "Educational Institution" is defined to mean, inter alia, an institution providing services by way of education as a part of a curriculum for obtaining a qualification recognised by any law for the time being in force. Since Banarsidas College provides education as part of a curriculum for obtaining a qualification recognised by Indian law, the services provided by it to its staff by way of conducting an in-house personality development course are exempt from GST.</p>
    
    <p><strong>(3) Status: Exempt (GST Not Payable)</strong><br>
    Since RPSD College provides education as a part of a curriculum for obtaining a qualification recognised by Indian law, it qualifies as an educational institution. Transport services provided by such an educational institution to its students are specifically exempt from GST.</p>
    
    <p><strong>(4) Status: Exempt (GST Not Payable)</strong><br>
    Services provided to an educational institution by way of house-keeping services are exempt from GST vide exemption notification, provided such services are performed inside the educational institution. However, this housekeeping exemption is restricted to institutions providing pre-school education and education up to higher secondary school or equivalent. Since Bloom Montessori is a play school, the housekeeping services performed inside its premises are exempt from GST.</p>
    
    <p><strong>(5) Status: Taxable (GST Payable)</strong><br>
    Services provided to an educational institution by way of supply of online educational journals or periodicals are exempt from GST vide exemption notification. However, this specific exemption is not applicable to an educational institution providing services by way of pre-school education and education up to higher secondary school or equivalent. Therefore, the supply of an online journal to students of the UKG class of Seeds Montessori School is not exempt and is liable to GST.</p>
  `
},
{
  question_id: "IDT_MTP_I_3c",
  source: "ICAI Mock Test Paper Series I - March 2024",
  chapter_name: "Abatement of Duty on Damaged or Deteriorated Goods",
  placement: 3,
  marks: 4,
  question_html: `
    <p><strong>3. (c)</strong> Sun & Moon Ltd. imported a consignment from U.S.A (by sea). The value of consignment was ₹ 8,00,000 and total duty payable was ₹ 2,00,000. Company filed bill of entry for home consumption but before inspection and clearance for home consumption it found that the goods were damaged.</p>
    <p>On filing a representation to the Customs Department, proper officer refused the claim for abatement because goods were already unloaded. The proper officer is in agreement with the claim that the value of goods has come down to only ₹ 2,00,000.</p>
    <p>Examine the issue with reference to the relevant statutory provisions and calculate the amount of total duty payable.</p>
  `,
  solution_html: `
    
    <p><strong>Relevant Statutory Provisions:</strong></p>
    <p>As per the provisions of Section 22 of the Customs Act, 1962, an abatement of duty is allowed where it is shown to the satisfaction of the Assistant/Deputy Commissioner of Customs that any imported goods, other than warehoused goods, had been damaged at any time <strong>after the unloading thereof in India but before their examination</strong>, on account of any accident not due to any wilful act, negligence, or default of the importer.</p>
    
    <p>Therefore, the stand taken by the proper officer refusing the claim for abatement on the grounds that the goods were already unloaded is <strong>not valid in law</strong>. Abatement is specifically meant for goods damaged <em>after</em> unloading but <em>before</em> examination.</p>
    
    <p><strong>Computation of Total Duty Payable:</strong></p>
    <p>As per Section 22(2) of the Act, the duty to be charged on the damaged goods shall be reduced in proportion to the reduction in the value of the goods on account of such damage. The proportion of abatement is calculated as:</p>
    
    <p>$$\\text{Reduced Duty Payable} = \\left( \\frac{\\text{Value of Damaged Goods}}{\\text{Value of Goods before Damage}} \\right) \\times \\text{Total Duty Originally Payable}$$</p>
    
    <p>Substituting the values into the formula:</p>
    <p>&bull; Original Value = ₹ 8,00,000<br>
    &bull; Damaged Value = ₹ 2,00,000<br>
    &bull; Original Duty = ₹ 2,00,000</p>
    
    <p>$$\\text{Total Duty Payable} = \\left( \\frac{2,00,000}{8,00,000} \\right) \\times 2,00,000 = 50,000$$</p>
    
    <p>Hence, the amount of total customs duty payable by Sun & Moon Ltd. after abatement is <strong>₹ 50,000</strong>.</p>
  `
},
{
  question_id: "IDT_MTP_I_4a",
  source: "ICAI Mock Test Paper Series I - March 2024",
  chapter_name: "Zero Rated Supply and Export of Goods",
  placement: 4,
  marks: 5,
  question_html: `
    <p> Upasana Export House is engaged in manufacturing the taxable goods in the State of Haryana. It participates in Global Trade Fair to be held in United States of America in the month of January. It intends to send 100 units of goods manufactured by it to USA for display in the said exhibition.</p>
    <p>Upasana Export House is of the view that the activity of sending the goods out of India for exhibition is a zero-rated supply under GST law. However, its tax advisor does not concur with its view. Examine whether the view of Upasana Export House is correct.</p>
    <p>Assuming that Upasana Export House could not sell any goods at the exhibition and brings back entire 100 units to India (i) in February, (ii) in August,</p>
    <p>Discuss the requirement to issue invoice, if any, in each of the above independent cases.</p>
    <p>Would your answer be different if Upasana Export House sells an aggregate of 85 units of the taxable goods in USA exhibition on different dates in January and remaining 15 units are brought back on 31st January. The tax advisor of Upasana Export House advises it that the export of 85 units qualify as zero-rated supply and it should apply for refund of the unutilized ITC in respect of the same. Examine the technical veracity of the tax advisor’s advice.</p>
  `,
  solution_html: `
    <p>No, the view of Upasana Export House that the activity of sending the goods out of India for exhibition is a zero-rated supply, is <strong>not correct</strong>.</p>
    
    <p>As per <strong>section 7 read with Schedule I</strong> of the CGST Act, 2017, any activity/transaction is considered as supply only when it is made in the course or furtherance of business and made for a consideration, except for activities enumerated in Schedule I of the CGST Act, 2017.</p>
    
    <p><strong>Section 16</strong> of the IGST Act, 2017 defines &ldquo;zero rated supply&rdquo; as any of the following supplies of goods or services or both, namely:&ndash;</p>
    <ul>
      <li>(a) export of goods or services or both; or</li>
      <li>(b) supply of goods or services or both to a Special Economic Zone developer or a Special Economic Zone unit.</li>
    </ul>
    <p>Thus, only such &ldquo;supplies&rdquo; which are either &ldquo;export&rdquo; or are &ldquo;supply to SEZ unit/ developer&rdquo; would qualify as zero-rated supply.</p>
    
    <p>In view of the above provisions, <strong>CBIC vide a circular</strong> clarified that the activity of sending/ taking the goods out of India for exhibition or on consignment basis for export promotion, except when such activity satisfy the tests laid down in Schedule I of the CGST Act, <strong>do not constitute supply</strong> as the said activity does not fall within the scope of section 7 of the CGST Act as there is no consideration at that point in time. Since such activity is not a supply, the same cannot be considered as &ldquo;zero rated supply&rdquo; as per the provisions contained in section 16 of the IGST Act.</p>
    
    <p>The said circular further clarified that the activity of sending/taking goods out of India for exhibition is in the nature of <strong>&ldquo;sale on approval basis&rdquo;</strong> wherein the goods are sent/ taken outside India for the approval of the person located abroad and it is only when the said goods are approved that the actual supply from the exporter located in India to the importer located abroad takes place.</p>
    
    <p>In case of the goods being sent or taken on approval for sale, the invoice shall be issued before/at the time of supply or <strong>6 months from the date of removal</strong>, whichever is earlier. The goods which are taken for supply on approval basis can be moved from the place of business of the registered supplier to another place within the same State or to a place outside the State on a delivery challan.</p>
    
    <p>In view of the said provisions, Upasana Export House is not required to issue invoice at the time of taking the goods out of India since the activity of merely sending/ taking the taxable goods out of India is not a supply. However, the goods shall be accompanied with a delivery challan.</p>
    
    <p><strong>Further,</strong></p>
    <ul>
      <li><strong>(i)</strong> In case the entire quantity of goods (100 units) sent to USA is not sold but brought back by Upasana Export House in February, i.e. <strong>within the stipulated period of 6 months</strong> from the date of removal, no tax invoice is required to be issued as no supply has taken place in such a case.</li>
      <li><strong>(ii)</strong> In case, the entire quantity of goods (100 units) sent to USA is not sold and brought back by Upasana Export House in August, i.e. <strong>after 6 months</strong> from the date of removal, a tax invoice is required to be issued for entire 100 units of taxable goods in accordance with the applicable provisions within the specified time period.</li>
    </ul>
    
    <p><strong>Regarding the sale of 85 units:</strong><br>
    When the 85 units are sold at the exhibition, the supply is completed on the date of approval/sale. Since these goods are consumed outside India, the transaction constitutes an <strong>export of goods</strong>, making it a valid <strong>zero-rated supply</strong> under Section 16 of the IGST Act. Therefore, the tax advisor's advice is <strong>technically correct</strong>: Upasana Export House can issue an export invoice for the 85 units and apply for a refund of unutilized Input Tax Credit (ITC) under Section 54(3) of the CGST Act, 2017.</p>
  `
},
{
  question_id: "IDT_MTP_I_4b",
  source: "ICAI Mock Test Paper Series I - March 2024",
  chapter_name: "Job Work",
  placement: 4,
  marks: 5,
  question_html: `
    <p>A2S Manufacturing unit had moulds delivered directly to a job worker from the supplier for making certain precision parts for use in the factory of A2S Manufacturing unit. As per agreement, the moulds were to remain with the job worker as long as work was being sent to him.</p>
    <p>After four years a departmental audit team that visited the job worker noticed the moulds and traced it to A2S Manufacturing unit. GST was demanded from A2S Manufacturing unit for taking ITC without receiving the moulds and furthermore for not bringing the moulds back after 3 years of delivery to the job worker.</p>
    <p>How should they respond to this?</p>
  `,
  solution_html: `
    <p>A2S Manufacturing unit should reply on the following lines:</p>
    <ul>
      <li>As per the provisions of the CGST Act, 2017, the principal may take Input Tax Credit (ITC) on capital goods sent to a job worker for job work without being first brought to his own place of business.</li>
      <li>Generally, the capital goods sent for job work must either be returned to the principal or supplied directly from the job worker’s premises within 3 years (extendible by another 2 years) from the date of being sent out or directly received by the job worker. If these timelines are not met, it is deemed that the capital goods were supplied by the principal to the job worker on the day they were originally sent out.</li>
      <li>However, as per section 19(7) of the CGST Act, 2017, the time-limit of three years for bringing back the capital goods from the job worker <strong>does not apply to moulds, tools, dies, and fixtures</strong>.</li>
    </ul>
    <p>Accordingly, A2S Manufacturing unit has correctly availed the ITC in respect of the moulds delivered directly to their job worker, and there is no requirement to bring them back or pay tax on them even after the completion of four years.</p>
  `
},
{
  question_id: "IDT_MTP_I_4c",
  source: "ICAI Mock Test Paper Series I - March 2024",
  chapter_name: "Baggage Rules, 2016",
  placement: 4,
  marks: 4,
  question_html: `
    <p>Mr. Prashank, an Indian businessman, went to Dubai to explore new business avenues on 5th of May, 2023. Mr. Kishu, his 22 years eldest son also joined him in Australia after 4 months. They returned to India on 15.05.2024 and brought used personal effects worth ₹ 1,20,000, 2 music systems each worth ₹ 50,000. In addition to this, Mr. Prashank also brought the gold chain worth ₹ 48,000 [10 gram] and the gold bracelet brought by his son is worth ₹ 96,000 [20 grams].</p>
    <p>With reference to Baggage Rules, 2016, determine whether Mr. Prashank and his son will be required to pay any customs duty?</p>
  `,
  solution_html: `
    <p>As per Baggage Rules, 2016, an Indian resident arriving from any country other than Nepal, Bhutan or Myanmar, shall be allowed clearance free of duty articles in his bona fide baggage, that is to say, used personal effects and travel souvenirs; and articles [other than certain specified articles], upto the value of ₹ 50,000 if these are carried on the person or in the accompanied baggage of the passenger.</p>
    
    <p>Thus, there is no customs duty on used personal effects and travel souvenirs and general duty free baggage allowance is ₹ 50,000 per passenger. Thus, duty liability of Mr. Prashank and his son is nil for the used personal effects worth ₹ 1,20,000 and 2 music systems each worth ₹ 50,000.</p>
    
    <p>As per Baggage Rules, 2016, the jewellery allowance is applicable only to a passenger residing abroad for more than 1 year. For the jewellery brought by a gentleman passenger, the duty free allowance is jewellery upto a weight of 20 grams with a value cap of ₹ 50,000.</p>
    
    <p>Consequently, there is no duty liability on the jewellery brought by Mr. Prashank as he had stayed abroad for period exceeding 1 year and weight of the jewellery brought by him is 10 grams with a value less than ₹ 50,000.</p>
  `
},
{
  question_id: "IDT_MTP_I_5a",
  source: "ICAI Mock Test Paper Series I - March 2024",
  chapter_name: "Offences and Penalties",
  placement: 5,
  marks: 5,
  question_html: `
    <p>Robecco Private Limited, registered under GST in the State of Uttar Pradesh, instructed Sambhav Transporters (Uttar Pradesh) to deliver certain taxable goods to ABC Enterprises in Uttar Pradesh on 10th January. The value of the goods is ₹ 6,80,000 which are chargeable to CGST & SGST @ 9% each. While the goods were in transit, the proper officer intercepted the goods and the truck in which the goods were being transported, under section 68 of the CGST Act, 2017. However, the driver of the truck failed to tender any document in relation to the goods in movement.</p>
    <p>The proper officer, after conducting the physical verification of the goods and the truck, decided to seize the goods and the truck and issued a notice under section 129(3) of the CGST Act, 2017 specifying the penalty payable (under CGST and SGST each) by Robecco Private Limited after giving it an opportunity of being heard.</p>
    <p>You are required to determine the amount of penalty payable (under CGST and SGST each) if Robecco Private Limited does not come forward for the payment of penalty. Further, discuss the suitable course of action for Sambhav Transporters if it intends to get its truck released.</p>
  `,
  solution_html: `
    <p>As per section 129 of the CGST Act, 2017, when the owner of goods does not come forward for the payment of penalty, the detained/seized goods and conveyance (used as a means of transport for carrying said goods) shall be released on payment of a penalty equal to the higher of the following:</p>
    <ul>
      <li>(i) 50% of the value of goods, or</li>
      <li>(ii) 200% of the tax payable on such goods.</li>
    </ul>
    
    <p>In view of the same, the amount of penalty payable (each under CGST and SGST) if Robecco Private Limited does not come forward for the payment of penalty is determined as follows:</p>
    <ul>
      <li>(i) 50% of the value of goods = 50% of ₹ 6,80,000 = <strong>₹ 3,40,000</strong></li>
      <li>(ii) 200% of the tax payable on such goods = 200% of (₹ 6,80,000 &times; 9%) = 200% of ₹ 61,200 = <strong>₹ 1,22,400</strong></li>
    </ul>
    <p>Whichever is higher, i.e., <strong>₹ 3,40,000 (each under CGST and SGST)</strong>.</p>
    
    <p><strong>Course of Action for Sambhav Transporters:</strong></p>
    <p>The conveyance shall be released on payment by the transporter of the penalty as mentioned in the order or ₹ 1,00,000, whichever is less.</p>
    <p>In the given case, since the owner (Robecco Private Limited) has failed to come forward to make the payment of penalty, a penalty of ₹ 3,40,000 (each under CGST and SGST) is levied on the goods. However, the transporter of goods can get its truck released upon payment of the lower of the following under the CGST Act, 2017:</p>
    <ul>
      <li>(i) penalty as mentioned in the order [₹ 3,40,000], or</li>
      <li>(ii) ₹ 1,00,000</li>
    </ul>
    <p>Hence, Sambhav Transporters can get its truck released upon payment of <strong>₹ 1,00,000 (each under CGST and SGST)</strong>.</p>
  `
},
{
  question_id: "IDT_MTP_I_5b",
  source: "ICAI Mock Test Paper Series I - March 2024",
  chapter_name: "Audit",
  placement: 5,
  marks: 5,
  question_html: `
    <p>ABC & Associates LLP (ABC), a firm of Chartered Accountants, was empanelled with the Commissioner of GST for appointment as Special Auditor under section 66 of the CGST Act, 2017. X Ltd., a registered person under GST, was selected by the Office of the Commissioner for special audit under section 66 of the CGST Act, 2017 for a financial year on account of irregularities noticed during scrutiny of returns. ABC was nominated by the Office of the Commissioner for special audit of X Ltd.</p>
    <p>The input tax credit claim by X Ltd. i.e. the auditee, under Form GST ITC- 01, was certified by one of the associate firms of ABC in favour of X Ltd. Such certificate was based on incorrect facts and against the eligibility criteria for input tax credit as per section 18 of the CGST Act, 2017. However, if ABC fails to exercise due diligence and the certificate is taken on record by ABC as an audit procedure and is relied upon at the time of finalization of audit report and submission of findings.</p>
    <p>Discuss briefly, what will be its implications under GST law?</p>
  `,
  solution_html: `
    <p>ABC audit team did not exercise due diligence to ascertain that the input tax credit availed by X Ltd. is not in compliance with the GST provisions. Instead, ABC relied on the certificate issued by its own associate firm which justified the incorrect input tax credit claim by X Ltd.</p>
    <p>In such a scenario, both ABC and the associate firm which issued the certificate to justify the input tax credit claim were aiding and abetting X Ltd. in wrongful availment of credit, which is an offence punishable with a penalty under section 122 of the CGST Act, 2017. This offence may also be punishable with imprisonment and a fine depending on the amount of default involved and subject to specified conditions. Further, ABC as well as its associate firm may be held guilty of professional misconduct.</p>
  `
},
{
  question_id: "IDT_MTP_I_5c",
  source: "ICAI Mock Test Paper Series I - March 2024",
  chapter_name: "Refunds under Customs",
  placement: 5,
  marks: 4,
  question_html: `
    <p>Briefly explain whether interest is paid to the applicant in case of delayed refund by Customs Authorities? If yes, also explain the period for computation of interest?</p>
  `,
  solution_html: `
    <p>Yes, interest is to be paid to the applicant in case any duty ordered to be refunded to an applicant is not refunded within 3 months from the date of receipt of application for refund. The government is permitted to fix such interest between 5% and 30% per annum.</p>
    <p>Currently, the rate of interest is fixed at 6% per annum.</p>
    <p><strong>Period for computation of interest:</strong></p>
    <p>The interest is to be paid for the period beginning from the date immediately after the expiry of 3 months from the date of receipt of such application, till the date of refund of such duty.</p>
    <p>For the purpose of payment of interest, the application is deemed to have been received on the date on which a complete application, as acknowledged by the proper officer of Customs, has been made.</p>
  `
},
{
  question_id: "IDT_MTP_I_6a",
  source: "ICAI Mock Test Paper Series I - March 2024",
  chapter_name: "Advance Ruling",
  placement: 6,
  marks: 6,
  question_html: `
    <p>Discuss briefly the relevant provisions of the CGST Act, 2017 regarding questions for which advance ruling can be sought.</p>
  `,
  solution_html: `
    <p>Advance ruling can be sought for the following questions:</p>
    <ul>
      <li>(a) classification of any goods or services or both</li>
      <li>(b) applicability of a notification issued under the CGST Act</li>
      <li>(c) determination of time and value of supply of goods or services or both</li>
      <li>(d) admissibility of input tax credit of tax paid or deemed to have been paid</li>
      <li>(e) determination of the liability to pay tax on any goods or services or both</li>
      <li>(f) whether applicant is required to be registered</li>
      <li>(g) whether any particular activity with respect to any goods and/or services, amounts to/results in a supply of goods and/or services, within the meaning of that term.</li>
    </ul>
  `
},
{
  question_id: "IDT_MTP_I_6b",
  source: "ICAI Mock Test Paper Series I - March 2024",
  chapter_name: "Miscellaneous Provisions",
  placement: 6,
  marks: 4,
  question_html: `
    <p>When shall the particulars relating to any proceedings or prosecution be published under GST laws? Discuss the relevant provisions.</p>
    <p><strong>OR</strong></p>
    <p>Briefly answer the following questions with reference to the provisions of rectification of mistakes/errors apparent on the face of record by any authority, under section 161 of the CGST Act, 2017?</p>
    <ul>
      <li>(i) Who can rectify the errors apparent on the face of record?</li>
      <li>(ii) What type of mistakes or errors can be rectified?</li>
    </ul>
  `,
  solution_html: `
    <p>When the Commissioner/authorised officer is of opinion that it is necessary or expedient in the public interest to publish the name of any person and any other particulars relating to any proceedings or prosecution under the CGST Act in respect of such person, it may cause to be published such name and particulars.</p>
    <p>No publication under this section shall be made in relation to any penalty imposed under the CGST Act until the time for presenting an appeal to the Appellate Authority under section 107 has expired without an appeal having been presented or the appeal, if presented, has been disposed off.</p>
    <p><strong>OR (Alternative Answer)</strong></p>
    <ul>
      <li><strong>(i)</strong> Any authority who has passed or issued any decision or order or notice or certificate or any other document may rectify any error which is apparent on the face of record in such documents.</li>
      <li><strong>(ii)</strong> Errors or mistakes which are apparent on the face of record may be rectified. Rectification can only be of an error apparent from the record. It is a settled law that a decision on a debatable point of law is not a mistake apparent from the record.</li>
    </ul>
  `
},
{
  question_id: "IDT_MTP_I_6c",
  source: "ICAI Mock Test Paper Series I - March 2024",
  chapter_name: "Foreign Trade Policy 2023",
  placement: 6,
  marks: 4,
  question_html: `
    <p>State any four benefits available to the status holders under the Foreign Trade Policy 2023.</p>
  `,
  solution_html: `
    <p>Status holders are eligible for the following privileges under FTP:</p>
    <ul>
      <li><strong>(1)</strong> Authorisation and custom clearances for both imports and exports on self-declaration basis.</li>
      <li><strong>(2)</strong> Fixation of Input Output Norms on priority i.e., within 60 days by the Norms Committee.</li>
      <li><strong>(3)</strong> Exemption from compulsory negotiation of documents through banks. Exceptions are remittances/receipts.</li>
      <li><strong>(4)</strong> Exemption from furnishing of Bank Guarantee in Schemes under FTP unless otherwise specified.</li>
      <li><strong>(5)</strong> Two Star Export Houses and above are permitted to establish export warehouses as per the guidelines of the Department of Revenue.</li>
      <li><strong>(6)</strong> Manufacturers who are also status holders (Three Star/Four Star/Five Star) will be enabled to self-certify their manufactured goods (as per their Industrial Entrepreneurs Memorandum (IEM) / Industrial License (IL) / Letter of Intent (LOI)) as originating from India with a view to qualify for preferential treatment under specified agreements.</li>
      <li><strong>(7)</strong> Status holders shall be entitled to export freely exportable items on a free-of-cost basis for export promotion subject to a specified annual limit.</li>
      <li><strong>(8)</strong> The status holders would be entitled to preferential treatment and priority in handling of their consignments by the concerned agencies.</li>
    </ul>
    <p><em>Note: Any four points may be mentioned.</em></p>
  `
},
{
  question_id: "IDT_APR24_MTP_II_1",
  source: "ICAI Mock Test Paper Series II - April 2024",
  chapter_name: [
    "Input Tax Credit",
    "Utilisation of Input Tax Credit",
    "Zero Rated Supply"
  ],
  placement: 1,
  marks: 14,
  question_html: `
    <p>Gehna Ltd. of Jodhpur (Rajasthan) is a registered manufacturer of cosmetic products. Gehna Ltd. has furnished following details for a tax period:</p>

    <h4>Details of Outward Supplies</h4>

    <table>
      <thead>
        <tr>
          <th>Particulars</th>
          <th>Amount (₹)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Supplies in Rajasthan</td>
          <td>8,75,000</td>
        </tr>
        <tr>
          <td>Supplies in States other than Rajasthan</td>
          <td>3,75,000</td>
        </tr>
        <tr>
          <td>Export under LUT</td>
          <td>6,25,000</td>
        </tr>
      </tbody>
    </table>

    <h4>Details of Expenses</h4>

    <table>
      <thead>
        <tr>
          <th>Particulars</th>
          <th>Amount (₹)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Raw materials purchased from registered suppliers located in Rajasthan</td>
          <td>1,06,250</td>
        </tr>
        <tr>
          <td>Raw materials purchased from unregistered suppliers located in Rajasthan</td>
          <td>37,500</td>
        </tr>
        <tr>
          <td>Raw materials purchased from Punjab from registered supplier</td>
          <td>1,00,000</td>
        </tr>
        <tr>
          <td>Integrated tax paid on raw materials imported from USA</td>
          <td>22,732</td>
        </tr>
        <tr>
          <td>Consumables purchased from registered suppliers located in Rajasthan including high speed diesel (Excise and VAT paid) valuing ₹31,250 for running the machinery in the factory</td>
          <td>1,56,250</td>
        </tr>
        <tr>
          <td>Monthly rent for the factory building to the owner in Rajasthan</td>
          <td>1,00,000</td>
        </tr>
        <tr>
          <td>Salary paid to employees on rolls</td>
          <td>6,25,000</td>
        </tr>
        <tr>
          <td>Premium paid on life insurance policies taken for specified employees. Life insurance policies for specified employees have been taken by Gehna Ltd. to fulfill a statutory obligation in this regard. The life insurance service provider is registered in Rajasthan.</td>
          <td>2,00,000</td>
        </tr>
      </tbody>
    </table>

    <p>All the above amounts are exclusive of all kinds of taxes, wherever applicable. However, the applicable taxes have also been paid by Gehna Ltd.</p>

    <p>The opening balance of ITC with Gehna Ltd. for the given tax period is:</p>

    <table>
      <tbody>
        <tr>
          <td>CGST</td>
          <td>₹20,000</td>
        </tr>
        <tr>
          <td>SGST</td>
          <td>₹15,000</td>
        </tr>
        <tr>
          <td>IGST</td>
          <td>₹15,000</td>
        </tr>
      </tbody>
    </table>

    <p>Assume CGST, SGST and IGST rates to be 9%, 9% and 18% respectively, wherever applicable.</p>

    <p>Assume that all the other necessary conditions to avail the ITC have been complied with by Gehna Ltd., wherever applicable.</p>

    <p><strong>Compute:</strong></p>

    <ol type="i">
      <li>ITC available with Gehna Ltd. for the tax period; and</li>
      <li>Net GST payable [CGST, SGST or IGST, as the case may be] from Electronic Cash Ledger by Gehna Ltd. for the tax period.</li>
    </ol>
  `,
  solution_html: `
    <h3>Computation of ITC available with Gehna Ltd.</h3>

    <table>
      <thead>
        <tr>
          <th>S. No.</th>
          <th>Particulars</th>
          <th>CGST (₹)</th>
          <th>SGST (₹)</th>
          <th>IGST (₹)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Raw materials purchased from local registered suppliers [Note 1(i)] (₹1,06,250 × 9%)</td>
          <td>9,562.50</td>
          <td>9,562.50</td>
          <td>-</td>
        </tr>
        <tr>
          <td></td>
          <td>Raw materials purchased from local unregistered suppliers [Note 1(ii)]</td>
          <td>Nil</td>
          <td>Nil</td>
          <td>Nil</td>
        </tr>
        <tr>
          <td></td>
          <td>Raw materials purchased from Punjab from registered supplier [Note 1(i)]</td>
          <td>-</td>
          <td>-</td>
          <td>18,000</td>
        </tr>
        <tr>
          <td></td>
          <td>Raw materials imported from USA [Note 1(iii)]</td>
          <td>-</td>
          <td>-</td>
          <td>22,732</td>
        </tr>

        <tr>
          <td>2</td>
          <td>Consumables [Note 2] [(₹1,56,250 − ₹31,250) × 9%]</td>
          <td>11,250</td>
          <td>11,250</td>
          <td>-</td>
        </tr>

        <tr>
          <td>3</td>
          <td>Monthly rent for factory building [Note 3]</td>
          <td>9,000</td>
          <td>9,000</td>
          <td>-</td>
        </tr>

        <tr>
          <td>4</td>
          <td>Salary paid to employees [Note 4]</td>
          <td>Nil</td>
          <td>Nil</td>
          <td>Nil</td>
        </tr>

        <tr>
          <td>5</td>
          <td>Premium on life insurance policies [Note 5] (₹2,00,000 × 9%)</td>
          <td>18,000</td>
          <td>18,000</td>
          <td>-</td>
        </tr>

        <tr>
          <th colspan="2">Total ITC</th>
          <th>47,812.50</th>
          <th>47,812.50</th>
          <th>40,732</th>
        </tr>

        <tr>
          <td colspan="2">Add: Opening balance of ITC</td>
          <td>20,000</td>
          <td>15,000</td>
          <td>15,000</td>
        </tr>

        <tr>
          <th colspan="2">Total ITC Available [Note 7]</th>
          <th>67,812.50</th>
          <th>62,812.50</th>
          <th>55,732</th>
        </tr>
      </tbody>
    </table>

    <h3>Computation of Net GST Payable</h3>

    <table>
      <thead>
        <tr>
          <th>Particulars</th>
          <th>CGST (₹)</th>
          <th>SGST (₹)</th>
          <th>IGST (₹)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Intra-State supply</td>
          <td>78,750</td>
          <td>78,750</td>
          <td>-</td>
        </tr>

        <tr>
          <td>Inter-State supply</td>
          <td>-</td>
          <td>-</td>
          <td>67,500</td>
        </tr>

        <tr>
          <td>Exports under LUT [Note 6]</td>
          <td>Nil</td>
          <td>Nil</td>
          <td>Nil</td>
        </tr>

        <tr>
          <th>Total Output Tax Liability</th>
          <th>78,750</th>
          <th>78,750</th>
          <th>67,500</th>
        </tr>

        <tr>
          <td>Less: ITC</td>
          <td>67,812.50</td>
          <td>62,812.50</td>
          <td>55,732</td>
        </tr>

        <tr>
          <th>Net GST Payable (Rounded Off)</th>
          <th>10,938</th>
          <th>15,938</th>
          <th>11,768</th>
        </tr>
      </tbody>
    </table>

    <h3>Notes</h3>

    <ol>
      <li>
        <strong>Raw Materials</strong>
        <ol type="i">
          <li>Credit of input tax (CGST & SGST/IGST) paid on raw materials used in the course or furtherance of business is available.</li>
          <li>Tax on procurements made by a registered person from an unregistered supplier is levied only in case of notified goods and services. Therefore, since no GST is paid on such raw material purchased, there does not arise any question of ITC on such raw material.</li>
          <li>IGST paid on imported goods qualifies as input tax. Therefore, credit of IGST paid on imported raw materials used in the course or furtherance of business is available.</li>
        </ol>
      </li>

      <li>ITC on consumables, being inputs used in the course or furtherance of business, is available. However, since levy of GST on high speed diesel has been deferred till a date to be notified by Government, there cannot be any ITC of the same.</li>

      <li>ITC on monthly rent is available as the said service is used in the course or furtherance of business.</li>

      <li>Services by employees to employer in the course of or in relation to employment is not a supply in terms of section 7 read with Schedule III to the CGST Act, 2017. Therefore, since no GST is paid on such services, there cannot be any ITC on such services.</li>

      <li>ITC on life insurance service is available if the same is obligatory for an employer to provide to its employees under any law for the time being in force.</li>

      <li>Export of goods is a zero-rated supply. A zero-rated supply under LUT/Bond is made without payment of IGST.</li>

      <li>Since export of goods is a zero-rated supply, there will be no apportionment of ITC and full credit will be available.</li>
    </ol>
  `
},
{
  question_id: "IDT_APR24_MTP_II_2a",
  source: "ICAI Mock Test Paper Series II - April 2024",
  chapter_name: [
    "Place of Supply of Services",
    "Levy and Collection of GST",
    "Exemptions"
  ],
  placement: 2,
  marks: 10,
  question_html: `
    <p>Revive Pvt. Ltd. owned by Amit Malik - a famous classical singer - wishes to organise an <strong>'Amit Malik Music Concert'</strong> in Gurugram (Haryana).</p>

    <p>Revive Pvt. Ltd. (registered in Ludhiana, Punjab) enters into a contract with an event management company, <strong>Sajal (P) Ltd.</strong> (registered in Delhi) for organising the said music concert at an agreed consideration of <strong>₹10,00,000</strong>.</p>

    <p>Sajal (P) Ltd. books the lawns of <strong>Hotel OPX, Gurugram</strong> (registered in Haryana) for holding the music concert, for a lump sum consideration of <strong>₹4,00,000</strong>.</p>

    <p>Revive Pvt. Ltd. fixes the entry fee to the music concert at <strong>₹5,000</strong>. <strong>400 tickets</strong> for 'Amit Malik Music Concert' are sold.</p>

    <p><strong>You are required to determine the gross GST liability in respect of the supply(ies) involved in the given scenario.</strong></p>

    <p><strong>Will your answer be different if the price per ticket is fixed at ₹450?</strong></p>

    <p><strong>Note:</strong> Rate of CGST and SGST is 9% each and IGST is 18%. All the amounts given above are exclusive of taxes, wherever applicable.</p>
  `,
  solution_html: `
    <p>In the given situation, <strong>three supplies</strong> are involved:</p>

    <ol type="i">
      <li>Services provided by <strong>Revive Pvt. Ltd.</strong> to audiences by way of <strong>admission to music concert.</strong></li>

      <li>Services provided by <strong>Sajal (P) Ltd.</strong> to Revive Pvt. Ltd. by way of <strong>organising the music concert.</strong></li>

      <li>Services provided by <strong>Hotel OPX</strong> to Sajal (P) Ltd. by way of <strong>accommodation in the Hotel lawns for organising the music concert.</strong></li>
    </ol>

    <p>The CGST and SGST or IGST liability in respect of each of the above supplies is determined as under:</p>

    <h3>(i) Services provided by Revive Pvt. Ltd. to audiences by way of admission to music concert</h3>

    <p>The place of supply of services provided by way of admission to, inter alia, a cultural event shall be the place where the event is actually held.</p>

    <p>Therefore, the place of supply of services supplied by <strong>Revive Pvt. Ltd.</strong> (Ludhiana, Punjab) to audiences by way of admission to the music concert is the location of the Hotel OPX, i.e., <strong>Gurugram, Haryana</strong>.</p>

    <p>Since the location of the supplier (Ludhiana, Punjab) and the place of supply (Gurugram, Haryana) are in different States, <strong>IGST</strong> will be leviable.</p>

    <p>Therefore, IGST leviable will be computed as follows:</p>

    <table>
      <tbody>
        <tr>
          <td>Consideration for supply (400 tickets × ₹5,000 per ticket)</td>
          <td><strong>₹20,00,000</strong></td>
        </tr>
        <tr>
          <td>IGST @ 18% on value of supply</td>
          <td><strong>₹3,60,000</strong></td>
        </tr>
      </tbody>
    </table>

    <h3>(ii) Services provided by Sajal (P) Ltd. to Revive Pvt. Ltd. by way of organising the music concert</h3>

    <p>The place of supply of services provided by way of organization of, inter alia, a cultural event to a registered person is the location of such person.</p>

    <p>Therefore, the place of supply of services supplied by <strong>Sajal (P) Ltd.</strong> (Delhi) to <strong>Revive Pvt. Ltd.</strong> (Ludhiana, Punjab) by way of organising the music concert is the location of the registered person, i.e., <strong>Ludhiana (Punjab)</strong>.</p>

    <p>Since the location of the supplier (Delhi) and the place of supply (Ludhiana, Punjab) are in different States, <strong>IGST</strong> will be leviable.</p>

    <p>Therefore, IGST leviable will be computed as follows:</p>

    <table>
      <tbody>
        <tr>
          <td>Consideration for supply</td>
          <td><strong>₹10,00,000</strong></td>
        </tr>
        <tr>
          <td>IGST @ 18% on value of supply</td>
          <td><strong>₹1,80,000</strong></td>
        </tr>
      </tbody>
    </table>

    <h3>(iii) Services provided by Hotel OPX to Sajal (P) Ltd. by way of accommodation in the Hotel lawns for organising the music concert</h3>

    <p>The place of supply of services, by way of accommodation in any immovable property for organizing, inter alia, any cultural function shall be the location at which the immovable property is located.</p>

    <p>Therefore, the place of supply of services supplied by <strong>Hotel OPX</strong> (Gurugram, Haryana) to <strong>Sajal (P) Ltd.</strong> (Delhi) by way of accommodation in Hotel lawns for organising the music concert shall be the location of the Hotel OPX, i.e., <strong>Gurugram, Haryana</strong>.</p>

    <p>Since the location of the supplier (Gurugram, Haryana) and the place of supply (Gurugram, Haryana) are in the same State, <strong>CGST and SGST</strong> will be leviable.</p>

    <p>Therefore, CGST and SGST leviable will be computed as follows:</p>

    <table>
      <tbody>
        <tr>
          <td>Consideration for supply</td>
          <td><strong>₹4,00,000</strong></td>
        </tr>
        <tr>
          <td>CGST @ 9% on value of supply</td>
          <td><strong>₹36,000</strong></td>
        </tr>
        <tr>
          <td>SGST @ 9% on value of supply</td>
          <td><strong>₹36,000</strong></td>
        </tr>
      </tbody>
    </table>
        <h3>Case where the price per ticket is fixed at ₹450</h3>

    <p>If the price for the entry ticket is fixed at <strong>₹450</strong>, answer will change in respect of supply of service provided by way of admission to music concert, as mentioned in point <strong>(i)</strong> above.</p>

    <p>There will be <strong>no IGST liability</strong> if the consideration for the ticket is <strong>₹450</strong> as the inter-State services by way of right to admission to, inter alia, musical performance are exempt from IGST, if the consideration for right to admission to the event is <strong>not more than ₹500 per person</strong>.</p>

    <p>However, there will be <strong>no change</strong> in the answer in respect of supplies mentioned in points <strong>(ii)</strong> and <strong>(iii)</strong> above.</p>
  `
},
{
  question_id: "IDT_APR24_MTP_II_2b",
  source: "ICAI Mock Test Paper Series II - April 2024",
  chapter_name: [
    "Customs Valuation",
    "Computed Value Method"
  ],
  placement: 2,
  marks: 4,
  question_html: `
    <p>Mr. T imported certain goods from a related person Mr. R of US and transaction value has been rejected. Rules 4 and 5 of the Customs Valuation (Determination of Value of Imported Goods) Rules, 2007 are found inapplicable as no similar/identical goods are imported in India.</p>

    <p>Mr. T furnishes cost related data of imports and requests customs authorities to determine value accordingly as per <strong>rule 8</strong> of the Customs Valuation (Determination of Value of Imported Goods) Rules, 2007.</p>

    <p>The relevant data are:</p>

    <table>
      <thead>
        <tr>
          <th>Particulars</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cost of materials incurred by Mr. R</td>
          <td>$ 2,000</td>
        </tr>
        <tr>
          <td>Fabrication charges incurred by Mr. R</td>
          <td>$ 1,000</td>
        </tr>
        <tr>
          <td>Other chargeable expenses incurred by Mr. R</td>
          <td>$ 400</td>
        </tr>
        <tr>
          <td>Other indirect costs incurred by Mr. R</td>
          <td>$ 250</td>
        </tr>
        <tr>
          <td>Freight from Mr. R's factory to US port</td>
          <td>$ 250</td>
        </tr>
        <tr>
          <td>Loading charges at US port</td>
          <td>$ 100</td>
        </tr>
        <tr>
          <td>Normal net profit margin of Mr. R</td>
          <td>20% of FOB</td>
        </tr>
        <tr>
          <td>Air freight from US port to Indian port</td>
          <td>$ 1,500</td>
        </tr>
        <tr>
          <td>Insurance from US port to Indian port</td>
          <td>$ 50</td>
        </tr>
        <tr>
          <td>Exchange rate</td>
          <td>₹70 per $</td>
        </tr>
      </tbody>
    </table>

    <p>The customs authorities are of the opinion that since value as per rule 7 of the Customs Valuation (Determination of Value of Imported Goods) Rules, 2007 can be determined at <strong>₹4,00,000</strong>, there is no need to apply rule 8 of the Customs Valuation (Determination of Value of Imported Goods) Rules, 2007.</p>

    <p><strong>Can the request of Mr. T be legally acceptable? If so, compute the assessable value under the Customs Act, 1962.</strong></p>
  `,
  solution_html: `
    <p>The value of the imported goods is determined under <strong>rule 8</strong> of the Customs Valuation (Determination of Value of Imported Goods) Rules, 2007 (hereinafter referred to as <strong>Import Valuation Rules</strong>) if the same cannot be determined under the earlier rules.</p>

    <p>However, the order of application of <strong>rules 7 and 8</strong> can be reversed <strong>at the request of the importer and with the approval of the proper officer.</strong></p>

    <p>Thus, the request of <strong>Mr. T</strong> for determination of value under <strong>rule 8</strong> is legally acceptable, if the same is also approved by the proper officer.</p>

    <p>Assuming that the request of Mr. T has been approved by the proper officer, the assessable value of the imported goods under rule 8 will be the sum of:</p>

    <ol type="a">
      <li>the cost of materials and fabrication or other processing;</li>
      <li>an amount for profit and general expenses; and</li>
      <li>the cost or value of all other expenses under rule 10(2) of the said Rules.</li>
    </ol>

    <h3>Computation of Assessable Value</h3>

    <table>
      <thead>
        <tr>
          <th>Particulars</th>
          <th>Amount ($)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cost of materials</td>
          <td>2,000</td>
        </tr>

        <tr>
          <td>Add: Fabrication charges</td>
          <td>1,000</td>
        </tr>

        <tr>
          <td>Other chargeable expenses</td>
          <td>400</td>
        </tr>

        <tr>
          <td>Other indirect costs</td>
          <td>250</td>
        </tr>

        <tr>
          <td><strong>Cost of the goods at Mr. R's factory</strong></td>
          <td><strong>3,650</strong></td>
        </tr>

        <tr>
          <td>
            Add: Net profit margin @ 20% of FOB, i.e. 25% of total cost<br><br>

            Total cost till US port = Cost of the goods at factory + Freight from factory to US port + Loading charges at US port<br>
            = $4,000 [$3,650 + $250 + $100]<br><br>

            FOB value = Total cost till port + Profit<br>
            = $5,000 ($4,000 + $1,000)
          </td>
          <td>1,000</td>
        </tr>

        <tr>
          <td>
            Add: Freight & loading/unloading charges<br><br>

            <em>In case of import by air, the cost of transport, loading, unloading and handling charges associated with the delivery of the imported goods to the place of importation are restricted to <strong>20% of FOB value</strong>.</em>
          </td>
          <td>1,000</td>
        </tr>

        <tr>
          <td>Insurance charges</td>
          <td>50</td>
        </tr>

        <tr>
          <th>Assessable Value</th>
          <th>5,700</th>
        </tr>

        <tr>
          <td>Assessable Value in Indian Rupees (Exchange rate ₹70 per $)</td>
          <td><strong>₹3,99,000</strong></td>
        </tr>
      </tbody>
    </table>
  `
},
{
  question_id: "IDT_APR24_MTP_II_3a",
  source: "ICAI Mock Test Paper Series II - April 2024",
  chapter_name: [
    "Input Service Distributor (ISD)"
  ],
  placement: 3,
  marks: 5,
  question_html: `
    <p>Moti Weavers, at Pune, Maharashtra is a registered <strong>Input Service Distributor (ISD)</strong> and intends to distribute ITC for the month of March. The following are the details available for such distribution:</p>

    <table>
      <thead>
        <tr>
          <th>Branch</th>
          <th>Turnover of the last quarter (₹)</th>
          <th>ITC specifically attributable to the branch (₹)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Ganganagar Branch (Rajasthan)</td>
          <td>10,00,000</td>
          <td>
            IGST – ₹12,000<br>
            CGST – ₹3,000<br>
            SGST – ₹3,000
          </td>
        </tr>

        <tr>
          <td>Madhugiri Branch (Karnataka)</td>
          <td>5,00,000</td>
          <td>Nil</td>
        </tr>

        <tr>
          <td>Kosala Branch (Uttar Pradesh)</td>
          <td>15,00,000</td>
          <td>Nil</td>
        </tr>

        <tr>
          <td>Mumbai Branch (Maharashtra)</td>
          <td>20,00,000</td>
          <td>
            IGST – ₹1,50,000<br>
            CGST – ₹15,000<br>
            SGST – ₹15,000
          </td>
        </tr>
      </tbody>
    </table>

    <p>ITC available on input services used commonly for all branches is as under:</p>

    <table>
      <tbody>
        <tr>
          <td>CGST</td>
          <td>₹60,000</td>
        </tr>
        <tr>
          <td>SGST</td>
          <td>₹60,000</td>
        </tr>
        <tr>
          <td>IGST</td>
          <td>₹1,20,000</td>
        </tr>
      </tbody>
    </table>

    <p>ITC (IGST) of <strong>₹10,000</strong> pertaining to March (last year) was inadvertently not distributed. Whether the same can be considered for distribution in March this year?</p>

    <p>Madhugiri, Karnataka branch uses input services to manufacture exempted products.</p>

    <p>Turnover excludes duties & taxes payable to Central and State Government.</p>

    <p><strong>Determine the manner of input tax distribution.</strong></p>
  `,
  solution_html: `
    <h3>Distribution of Input Tax Credit</h3>

    <ol type="i">
      <li>
        <p>Total GST credit (CGST + SGST + IGST) of <strong>₹18,000</strong> specifically attributable to <strong>Ganganagar Branch, Rajasthan</strong> will be distributed as <strong>IGST credit of ₹18,000 only</strong> to Ganganagar Branch, Rajasthan <strong>[Since recipient and Input Service Distributor (ISD) are located in different States.]</strong></p>
      </li>

      <li>
        <p>IGST credit of <strong>₹1,50,000</strong>, CGST credit of <strong>₹15,000</strong> and SGST credit of <strong>₹15,000</strong> specifically attributable to <strong>Mumbai Branch, Maharashtra</strong> will be distributed as:</p>

        <ul>
          <li>IGST credit – <strong>₹1,50,000</strong></li>
          <li>CGST credit – <strong>₹15,000</strong></li>
          <li>SGST credit – <strong>₹15,000</strong></li>
        </ul>

        <p>only to Mumbai Branch, Maharashtra <strong>[Since recipient is located in the same State in which ISD is located.]</strong></p>
      </li>

      <li>
        <p>CGST credit of <strong>₹60,000</strong>, SGST credit of <strong>₹60,000</strong> and IGST credit of <strong>₹1,20,000</strong> have to be distributed among the three branches and Mumbai Branch, Maharashtra in proportion of their turnover of the last quarter.</p>

        <ul>
          <li>
            <strong>Ganganagar Branch, Rajasthan</strong> will get:
            <br><strong>₹48,000</strong>
            [₹2,40,000 × (₹10,00,000 ÷ ₹50,00,000)]
            as <strong>IGST credit</strong>.
          </li>

          <li>
            <strong>Madhugiri Branch, Karnataka</strong> will get:
            <br><strong>₹24,000</strong>
            [₹2,40,000 × (₹5,00,000 ÷ ₹50,00,000)]
            as <strong>IGST credit</strong>.
          </li>

          <li>
            The credit attributable to a recipient is distributed even if such recipient is making exempt supplies.
          </li>

          <li>
            <strong>Kosala Branch, Uttar Pradesh</strong> will get:
            <br><strong>₹72,000</strong>
            [₹2,40,000 × (₹15,00,000 ÷ ₹50,00,000)]
            as <strong>IGST credit</strong>.
          </li>

          <li>
            <strong>Mumbai Branch, Maharashtra</strong> will get:
            <br><br>
            CGST credit = <strong>₹24,000</strong>
            [₹60,000 × (₹20,00,000 ÷ ₹50,00,000)]
            <br><br>
            SGST credit = <strong>₹24,000</strong>
            [₹60,000 × (₹20,00,000 ÷ ₹50,00,000)]
            <br><br>
            IGST credit = <strong>₹48,000</strong>
            [₹1,20,000 × (₹20,00,000 ÷ ₹50,00,000)]
          </li>
        </ul>
      </li>

      <li>
        <p>ITC of <strong>₹10,000</strong> pertaining to March (last year) <strong>cannot be distributed</strong> in March of the current year since <strong>ITC available for distribution in a month is required to be distributed in the same month.</strong></p>
      </li>
    </ol>
  `
},
{
  question_id: "IDT_APR24_MTP_II_3b",
  source: "ICAI Mock Test Paper Series II - April 2024",
  chapter_name: [
    "Time of Supply",
    "Composite and Mixed Supply",
    "Classification of Supply"
  ],
  placement: 3,
  marks: 5,
  question_html: `
    <p>MNO Ltd., a publishing and printing house registered in Maharashtra, is engaged in supply of books, letter cards, envelopes, guides and reference materials.</p>

    <p>The following information is provided by the company:</p>

    <table>
      <thead>
        <tr>
          <th>Event</th>
          <th>Printing of Books</th>
          <th>Printing of Envelopes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Date of entering into printing contract</td>
          <td>16th March</td>
          <td>20th March</td>
        </tr>
        <tr>
          <td>Date of receipt of advance</td>
          <td>20th March</td>
          <td>25th March</td>
        </tr>
        <tr>
          <td>Date of completion of printing</td>
          <td>10th April</td>
          <td>5th April</td>
        </tr>
        <tr>
          <td>Date of issue of invoice</td>
          <td>15th May</td>
          <td>10th April</td>
        </tr>
        <tr>
          <td>Date of removal of books and envelopes to buyer</td>
          <td>13th May</td>
          <td>7th April</td>
        </tr>
        <tr>
          <td>Date of receipt of balance payment</td>
          <td>31st May</td>
          <td>30th April</td>
        </tr>
      </tbody>
    </table>

    <p>In respect of printing of books, content was supplied by the author.</p>

    <p>For printing of envelopes, the design and logo were supplied by the buyer.</p>

    <p><strong>Determine the time of supply(ies) for the purpose of payment of tax.</strong></p>
  `,
  solution_html: `
    <p>It has been clarified vide a Circular that in case of printing of books where only content is supplied by the person who owns the usage rights to the intangible inputs while the physical inputs including paper used for printing belong to the printer, supply of printing <strong>[of the content supplied by the recipient of supply]</strong> is the principal supply and therefore, such supplies would constitute <strong>supply of service</strong>.</p>

    <p>In case of supply of printed envelopes by the printer using its physical inputs including paper to print the design, logo etc. supplied by the recipient of goods, predominant supply is <strong>supply of goods</strong> and the supply of printing of the content <strong>[supplied by the recipient of supply]</strong> is ancillary to the principal supply of goods and therefore, such supplies would constitute <strong>supply of goods</strong>.</p>

    <p>Accordingly, the time of supply of books and envelopes will be governed by <strong>sections 13 and 12</strong> of the CGST Act, 2017 respectively.</p>

    <h3>Time of Supply of Envelopes (Goods)</h3>

    <p>The time of supply of goods is the earlier of the date of issue of invoice/last date on which the invoice is required to be issued or date of receipt of payment.</p>

    <p>However, Notification No. 66/2017-CT dated 15.11.2017 specifies that a registered person (excluding composition supplier) has to pay GST on the outward supply of goods at the time of supply as specified in section 12(2)(a) of the CGST Act, 2017, i.e. date of issue of invoice or the last date on which invoice ought to have been issued in terms of section 31 of the CGST Act, 2017.</p>

    <p>The invoice for supply of goods should be issued before or at the time of removal of goods for supply to the recipient, where supply involves movement of goods.</p>

    <p>Therefore, in the given case, the last date by which invoice ought to have been issued is <strong>7th April</strong>.</p>

    <p>Thus, the <strong>time of supply of envelopes</strong> for the purpose of payment of tax is <strong>7th April</strong>.</p>

    <h3>Time of Supply of Books (Services)</h3>

    <p>The time of supply of services is the earlier of the dates arrived at by methods (A) and (B), as follows:</p>

    <p><strong>(A)</strong> Date of invoice or date of receipt of payment (to the extent the invoice or payment covers the supply of services), whichever is earlier, if the invoice is issued within the prescribed time.</p>

    <p><strong>(B)</strong> Date of provision of service or date of receipt of payment (to the extent the payment covers the supply of services), whichever is earlier, if the invoice is not issued within the prescribed time.</p>

    <p>Since in the given case, invoice for the services is <strong>not issued within 30 days</strong>, the time of supply for the advance received is the <strong>date of receipt of payment, i.e. 20th March</strong>, being earlier than the date of provision of service.</p>

    <p>However, the time of supply for the balance payment is the <strong>date of provision of service, i.e. 10th April</strong>, being earlier than the date of receipt of balance payment.</p>
  `
},
{
  question_id: "IDT_APR24_MTP_II_3c",
  source: "ICAI Mock Test Paper Series II - April 2024",
  chapter_name: [
    "Customs Exemptions",
    "Judicial Pronouncements"
  ],
  placement: 3,
  marks: 4,
  question_html: `
    <p>M/s Clear Energy Ltd. is engaged in oil exploration and has imported software containing seismic data.</p>

    <p>The importer is entitled to exemption from customs duty subject to the condition that an <strong>"Essentiality Certificate"</strong> granted by the Director General of Hydrocarbons is produced at the time of importation of the goods.</p>

    <p>Though the importer applied for the certificate within the statutory time limit prescribed for the same, the certificate was not made available to the importer within a reasonable time by the Director General of Hydrocarbons.</p>

    <p>The customs department rejected the importer's claim for exemption.</p>

    <p><strong>Examine briefly whether the department's action is sustainable in law.</strong></p>
  `,
  solution_html: `
    <p>This issue has been addressed by the <strong>Supreme Court</strong> in the case of <strong>Commissioner of Customs v. Tullow India Operations Ltd. (2005) 189 ELT 401 (SC)</strong>.</p>

    <p>The Apex Court has observed that if a condition is not within the power and control of the importer and depends upon the acts of public functionaries, non-compliance of such a condition, subject to just exceptions, cannot be held to be a condition precedent which would disable the importer from obtaining the benefit for all times to come.</p>

    <p>In the given case also, the certificate has not been granted within a reasonable time.</p>

    <p>Therefore, in view of the above-mentioned judgment, the importer <strong>M/s Clear Energy Ltd.</strong> cannot be blamed for the lapse by the authorities.</p>

    <p>The <strong>Directorate General of Hydrocarbons</strong> is under the Ministry of Petroleum and Natural Gas and such a public functionary is supposed to grant the Essentiality Certificate within a reasonable time so as to enable the importer to avail the benefits under the notification.</p>

    <p><strong>Hence, the action of the Customs Department in rejecting the exemption claim is not sustainable in law.</strong></p>
  `
},
{
  question_id: "IDT_APR24_MTP_II_4a",
  source: "ICAI Mock Test Paper Series II - April 2024",
  chapter_name: [
    "OIDAR Services",
    "Import of Services",
    "Non-Taxable Online Recipient",
    "Levy and Collection of IGST"
  ],
  placement: 4,
  marks: 5,
  question_html: `
    <p>Mr. Goldy, a Chartered Accountant, being a partner in GST registered firm orders a gaming software for his son Mr. Tony from a company located in USA. He makes the payment for the same from his personal bank account.</p>

    <p><strong>Examine whether the transaction will be liable to GST. If yes, in whose hands the tax liability will arise?</strong></p>
  `,
  solution_html: `
    <p>The supply of gaming software is in the nature of <strong>OIDAR service</strong>.</p>

    <p>The transaction is for personal consumption of <strong>Mr. Goldy</strong> and the payment has also been made from the <strong>personal bank account</strong> of Mr. Goldy and not from the bank account of his GST registered firm.</p>

    <p>Therefore, being an <strong>unregistered person</strong> receiving OIDAR service in taxable territory, <strong>Mr. Goldy is a non-taxable online recipient.</strong></p>

    <p>Services received from a provider of service located in a non-taxable territory by an individual in relation to any purpose other than commerce, industry or any other business or profession are <strong>exempt from IGST</strong>.</p>

    <p>However, such exemption is <strong>not available in case of OIDAR services.</strong></p>

    <p>Therefore, being an <strong>OIDAR service</strong> provided by a supplier located outside India and received by a <strong>non-taxable online recipient</strong>, the same is <strong>liable to GST.</strong></p>

    <p>Tax on service supplied by any person located in a non-taxable territory to any person <strong>other than a non-taxable online recipient</strong> is payable by the recipient of such service under <strong>reverse charge</strong>.</p>

    <p>Therefore, tax on OIDAR services provided by the company located in USA to <strong>Mr. Goldy</strong>, a <strong>non-taxable online recipient</strong>, will be payable by <strong>such company under forward charge.</strong></p>
  `
},
{
  question_id: "IDT_APR24_MTP_II_4b",
  source: "ICAI Mock Test Paper Series II - April 2024",
  chapter_name: [
    "Job Work",
    "Schedule II",
    "Value of Supply",
    "Supply of Services",
    "Waste and Scrap"
  ],
  placement: 4,
  marks: 5,
  question_html: `
    <p>Anuj Pvt. Ltd., a registered manufacturer, sent steel cabinets worth <strong>₹50 lakh</strong> under a delivery challan to <strong>M/s Siddhi Tools</strong>, a registered job worker, for job work on <strong>28th January</strong>.</p>

    <p>The scope of job work included mounting the steel cabinets on a metal frame and sending the mounted panels back to Anuj Pvt. Ltd. The metal frame is to be supplied by M/s Siddhi Tools.</p>

    <p>M/s Siddhi Tools has agreed to a consideration of <strong>₹5 lakh</strong> for the entire mounting activity including the supply of metal frame.</p>

    <p>During the course of mounting activity, metal waste is generated which is sold by M/s Siddhi Tools for <strong>₹45,000</strong>.</p>

    <p>M/s Siddhi Tools sent the steel cabinets mounted on the metal frame to Anuj Pvt. Ltd. on <strong>3rd December</strong> in the same financial year.</p>

    <p>Assuming GST rate for metal frame as <strong>28%</strong>, for metal waste as <strong>12%</strong> and standard rate for services as <strong>18%</strong>, you are required to compute the GST liability of <strong>M/s Siddhi Tools</strong>. Also, give reason(s) for inclusion or exclusion of the value of cabinets in the job charges for the purpose of payment of GST by M/s Siddhi Tools.</p>
  `,
  solution_html: `
    <p>As per <strong>para 3 of Schedule II to the CGST Act, 2017</strong>, any treatment or process which is applied to another person's goods is a <strong>supply of services</strong> and accordingly is subject to GST rate applicable for services.</p>

    <p>In the given case, <strong>M/s Siddhi Tools (job worker)</strong> undertakes the process of mounting the steel cabinets of <strong>Anuj Pvt. Ltd. (principal)</strong> on metal frames.</p>

    <p>In view of para 3 of Schedule II to the CGST Act, 2017 cited above, the mounting activity classifies as a <strong>service</strong> even though the metal frames are also supplied as a part of the mounting activity.</p>

    <p>Accordingly, the job charges will be chargeable to GST at a rate of <strong>18%</strong>, which is the applicable rate for services.</p>

    <p>Further, the value of steel cabinets will <strong>not be included</strong> in the value of taxable supply made by <strong>M/s Siddhi Tools</strong> as the supply of cabinets does not fall within the scope of supply to be made by M/s Siddhi Tools. M/s Siddhi Tools is only required to mount the steel cabinets, which are to be supplied by <strong>Anuj Pvt. Ltd.</strong>, on metal frames, which are to be supplied by it.</p>

    <p>As regards sale of waste generated during the job work, since <strong>M/s Siddhi Tools</strong> is registered, the tax leviable on the supply will have to be paid by it. Such supply will be treated as <strong>supply of goods</strong> and subject to GST rate applicable for metal waste.</p>

    <h3>Computation of GST Liability of M/s Siddhi Tools</h3>

    <table>
      <thead>
        <tr>
          <th>Particulars</th>
          <th>Amount (₹)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Job charges</td>
          <td>5,00,000</td>
        </tr>
        <tr>
          <td>GST @ 18% (A)</td>
          <td>90,000</td>
        </tr>
        <tr>
          <td>Sale of metal waste</td>
          <td>45,000</td>
        </tr>
        <tr>
          <td>GST @ 12% (B)</td>
          <td>5,400</td>
        </tr>
        <tr>
          <th>Total GST payable (A + B)</th>
          <th>95,400</th>
        </tr>
      </tbody>
    </table>
  `
},
{
  question_id: "IDT_APR24_MTP_II_4c",
  source: "ICAI Mock Test Paper Series II - April 2024",
  chapter_name: [
    "Customs",
    "Baggage Rules, 2016",
    "Customs Duty on Baggage"
  ],
  placement: 4,
  marks: 4,
  question_html: `
    <p>Mr. Oliver of foreign origin has come on travel visa, to tour in India. He carries with him, as part of baggage, the following:</p>

    <table>
      <thead>
        <tr>
          <th>Particulars</th>
          <th>Value (₹)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Travel Souvenir</td>
          <td>85,000</td>
        </tr>
        <tr>
          <td>Other articles carried on in person</td>
          <td>1,50,000</td>
        </tr>
        <tr>
          <td>120 sticks of cigarettes of ₹100 each</td>
          <td>12,000</td>
        </tr>
        <tr>
          <td>Fire arm with 100 cartridges (value includes the value of cartridges at @ ₹500 per cartridge)</td>
          <td>1,00,000</td>
        </tr>
      </tbody>
    </table>

    <p><strong>Determine customs duty payable, if the effective rate of customs duty is 38.50% inclusive of social welfare surcharge. Ignore Agriculture Infrastructure and Development Cess.</strong></p>
  `,
  solution_html: `
    <p>As per the <strong>Baggage Rules, 2016</strong>, tourist of foreign origin, excluding infant, is allowed duty free clearance of:</p>

    <ol type="i">
      <li><strong>Travel souvenirs</strong>; and</li>
      <li><strong>Articles up to the value of ₹15,000</strong> (excluding inter alia fire arms, cartridges of fire arms exceeding 50 and cigarettes exceeding 100 sticks), if carried on in person.</li>
    </ol>

    <h3>Computation of Customs Duty Payable</h3>

    <table>
      <thead>
        <tr>
          <th>Particulars</th>
          <th>Amount (₹)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Travel souvenir</td>
          <td>Nil</td>
        </tr>
        <tr>
          <td>Articles carried on in person</td>
          <td>1,50,000</td>
        </tr>
        <tr>
          <td>Cigarettes [100 sticks can be accommodated in General Free Allowance (GFA)]</td>
          <td>10,000</td>
        </tr>
        <tr>
          <td>Fire arm cartridges [50 cartridges can be accommodated in GFA]</td>
          <td>25,000</td>
        </tr>
        <tr>
          <th>Baggage that can be accommodated in GFA</th>
          <th>1,85,000</th>
        </tr>
        <tr>
          <td>Less: General Free Allowance (GFA)</td>
          <td>15,000</td>
        </tr>
        <tr>
          <th>Baggage on which duty is payable</th>
          <th>1,70,000</th>
        </tr>
        <tr>
          <td>Duty payable @ 38.50% (including 10% Social Welfare Surcharge)</td>
          <td><strong>65,450</strong></td>
        </tr>
      </tbody>
    </table>

    <p><strong>Note:</strong> Fire arms, cartridges of firearms exceeding 50 and cigarettes exceeding 100 sticks are not chargeable to rate applicable to baggage. These items are charged @ <strong>100%</strong> applicable to baggage under <strong>Heading 9803 of the Customs Tariff.</strong></p>
  `
},
{
  question_id: "IDT_APR24_MTP_II_5a",
  source: "ICAI Mock Test Paper Series II - April 2024",
  chapter_name: [
    "Demand and Recovery",
    "Penalty",
    "Section 73",
    "Self-assessed Tax"
  ],
  placement: 5,
  marks: 5,
  question_html: `
    <p>Henry & Co. self-assessed its CGST liability as <strong>₹90,000</strong> for the month of April, but failed to make the payment.</p>

    <p>Subsequently the Department initiated penal proceedings against Henry & Co. for recovery of penalty under <strong>section 73 of the CGST Act, 2017</strong> for failure to pay GST and issued show cause notice on <strong>10th August</strong> which was received by Henry & Co. on <strong>14th August</strong>.</p>

    <p>Henry & Co. deposited the tax along with interest on <strong>25th August</strong> and informed the department on the same day.</p>

    <p>Department is contending that he is liable to pay a penalty of <strong>₹45,000</strong> (i.e. <strong>50% of ₹90,000</strong>) under the CGST Act, 2017.</p>

    <p><strong>Examine the correctness of the stand taken by the Department with reference to the provisions of the CGST Act, 2017. Explain the relevant provisions in brief.</strong></p>
  `,
  solution_html: `
    <p>Due date for payment of tax for the month of April is <strong>20th May</strong>.</p>

    <p>Where self-assessed tax is not paid within <strong>30 days from the due date</strong> of payment of such tax, penalty equivalent to <strong>10% of tax or ₹10,000, whichever is higher</strong>, is payable.</p>

    <p>Thus, option to pay tax within <strong>30 days of issuance of show cause notice</strong> to avoid penalty is <strong>not available</strong> in case of self-assessed tax.</p>

    <p>Since in the given case, Henry & Co. has not paid the self-assessed tax within <strong>30 days of the due date [i.e. 20th May]</strong>, penalty equivalent to:</p>

    <ol type="i">
      <li><strong>10% of tax</strong>, i.e. <strong>₹9,000</strong> [10% of ₹90,000], or</li>
      <li><strong>₹10,000</strong>,</li>
    </ol>

    <p><strong>whichever is higher</strong>, is payable by him under the <strong>CGST Act, 2017</strong>.</p>

    <p>Equivalent amount of penalty is payable under the <strong>SGST/UTGST Act, 2017</strong>.</p>

    <p>Hence, the stand taken by the Department that penalty will be levied on <strong>Henry & Co.</strong> is <strong>correct</strong>, but the amount of penalty of <strong>₹45,000</strong> under the <strong>CGST Act, 2017</strong> is <strong>not correct</strong>.</p>
  `
},
{
  question_id: "IDT_APR24_MTP_II_5b",
  source: "ICAI Mock Test Paper Series II - April 2024",
  chapter_name: [
    "Appeals",
    "Appellate Tribunal",
    "Place of Supply",
    "Supreme Court"
  ],
  placement: 5,
  marks: 5,
  question_html: `
    <p>Mr. Raman had filed an appeal before the Appellate Tribunal against an order of the Appellate Authority where the issue involved relates to place of supply. The order of Appellate Tribunal is also in favour of the Department.</p>

    <p>Mr. Raman now wants to file an appeal against the decision of the Appellate Authority as he feels the stand taken by him is correct.</p>

    <p><strong>You are required to advise him suitably with regard to filing of an appeal before the appellate forum higher than the Appellate Tribunal.</strong></p>
  `,
  solution_html: `
    <p>An appeal against orders passed by the <strong>State Benches of the Appellate Tribunal</strong> would lie to the <strong>High Court</strong>, if the High Court is satisfied that such an appeal involves a <strong>substantial question of law</strong>.</p>

    <p>However, an appeal against orders passed by the <strong>Principal Bench of the Appellate Tribunal</strong> would lie to the <strong>Supreme Court</strong> and not to the High Court.</p>

    <p>Only the <strong>Principal Bench of the Appellate Tribunal</strong> can decide appeals where one of the issues involved relates to the <strong>place of supply</strong>.</p>

    <p>Since the issue involved in <strong>Mr. Raman's</strong> case relates to <strong>place of supply</strong>, the appeal in his case would have been decided by the <strong>Principal Bench of the Appellate Tribunal</strong>.</p>

    <p>Thus, <strong>Mr. Raman</strong> will have to file an appeal with the <strong>Supreme Court</strong> and not with the <strong>High Court</strong>.</p>
  `
},
{
  question_id: "IDT_APR24_MTP_II_5c",
  source: "ICAI Mock Test Paper Series II - April 2024",
  chapter_name: [
    "Customs Act, 1962",
    "Warehousing",
    "Improper Removal of Goods"
  ],
  placement: 5,
  marks: 4,
  question_html: `
    <p><strong>Enumerate the circumstances under which goods are considered to have been removed improperly from a warehouse under the Customs Act, 1962.</strong></p>
  `,
  solution_html: `
    <p>Under the <strong>Customs Act, 1962</strong>, goods shall be considered to have been <strong>removed improperly from a warehouse</strong> in any of the following circumstances:</p>

    <ol type="a">
      <li>
        <p>Where any <strong>warehoused goods are removed from a warehouse in contravention of section 71</strong> of the Customs Act, 1962.</p>
      </li>

      <li>
        <p>Where any <strong>warehoused goods have not been removed from a warehouse</strong> at the expiration of the period during which such goods are permitted to remain in a warehouse.</p>
      </li>

      <li>
        <p>Where any goods in respect of which a <strong>bond has been executed</strong> and which have <strong>not been cleared for home consumption or export</strong> are <strong>not duly accounted for to the satisfaction of the proper officer</strong>.</p>
      </li>
    </ol>
  `
},
{
  question_id: "IDT_APR24_MTP_II_6a",
  source: "ICAI Mock Test Paper Series II - April 2024",
  chapter_name: [
    "Advance Ruling",
    "Appeal to Appellate Authority for Advance Ruling (AAAR)",
    "Sections 100 & 101 of the CGST Act, 2017"
  ],
  placement: 6,
  marks: 6,
  question_html: `
    <p><strong>Briefly explain whether an appeal could be filed before the Appellate Authority against order of Authority for Advance Ruling (AAR), with reference to sections 100 and 101 of the CGST Act, 2017.</strong></p>
  `,
  solution_html: `
    <p>Yes, the concerned officer, jurisdictional officer or applicant aggrieved by any advance ruling may appeal to the <strong>Appellate Authority for Advance Ruling (AAAR)</strong> within <strong>30 days</strong> [extendible by another <strong>30 days</strong>] from the date on which such ruling is communicated to him in the prescribed form and manner.</p>

    <p>The <strong>AAAR</strong> must pass an order confirming or modifying the ruling appealed against within a period of <strong>90 days</strong> of the filing of an appeal, after hearing the parties to the appeal.</p>

    <p>If members of the <strong>AAAR</strong> differ on any point referred to in appeal, it shall be deemed that <strong>no advance ruling can be issued</strong> in respect of the question under appeal.</p>

    <p>A copy of the advance ruling pronounced by the <strong>AAAR</strong> is sent to the <strong>applicant, concerned officer, jurisdictional officer and to the Authority</strong>.</p>
  `
},
{
  question_id: "IDT_APR24_MTP_II_6b",
  source: "ICAI Mock Test Paper Series II - April 2024",
  chapter_name: [
    "Anti-profiteering",
    "Rule 127 of the CGST Rules, 2017"
  ],
  placement: 6,
  marks: 4,
  question_html: `
    <p><strong>Elaborate the functions of Anti-profiteering Authority under GST laws? Discuss the relevant provisions.</strong></p>
  `,
  solution_html: `
    <p>The Authority shall discharge the following functions, namely:</p>

    <ol type="i">
      <li>
        <p>To determine whether the <strong>reduction in tax rate</strong> or the <strong>benefit of input tax credit</strong> has been passed on by the seller to the buyer (hereinafter collectively referred to as "<strong>benefit</strong>") by reducing the prices.</p>
      </li>

      <li>
        <p>To identify the <strong>taxpayer who has not passed on the benefit</strong>.</p>
      </li>

      <li>
        <p>To order:</p>
        <ol type="a">
          <li>Reduction in prices.</li>

          <li>
            Return to the recipient, an amount equivalent to the amount not passed on by way of commensurate reduction in prices along with <strong>interest at the rate of 18%</strong> from the date of collection of the higher amount till the date of the return of such amount or recovery of the amount not returned, as the case may be.
            <br><br>
            If the eligible person does not claim return of the amount or is not identifiable, the amount must be deposited in the <strong>Consumer Welfare Fund</strong>.
          </li>

          <li>Imposition of penalty.</li>

          <li>Cancellation of registration.</li>
        </ol>
      </li>

      <li>
        <p>To furnish a <strong>performance report</strong> to the <strong>GST Council</strong> by the <strong>10th of the month succeeding each quarter</strong> [Rule 127 of the CGST Rules, 2017].</p>
      </li>
    </ol>
  `
},
{
  question_id: "IDT_APR24_MTP_II_6b_OR",
  source: "ICAI Mock Test Paper Series II - April 2024",
  chapter_name: [
    "Service of Notice",
    "Section 169 of the CGST Act, 2017"
  ],
  placement: 6,
  marks: 4,
  question_html: `
    <p><strong>State the various modes of service of a notice, decision, order, summons, or any other communication under the CGST Act, 2017 on the taxable person or any other person to whom it is intended.</strong></p>
  `,
  solution_html: `
    <p>Any decision, order, summons, notice or other communication under the <strong>CGST Act, 2017</strong> and the rules made thereunder can be served by any one of the following methods:</p>

    <ol type="a">
      <li>
        <p>Giving/tendering directly including by a courier to the addressee or authorised representative or to any adult member of family residing with the taxable person.</p>
      </li>

      <li>
        <p>By registered post/speed post/courier with acknowledgement due at the last known place of business or residence.</p>
      </li>

      <li>
        <p>By e-mail to the e-mail address provided at the time of registration or as amended from time to time.</p>
      </li>

      <li>
        <p>By making the same available on the common portal.</p>
      </li>

      <li>
        <p>By publication in a newspaper circulating in the locality in which the addressee is last known to have resided, carried on business or personally worked for gain.</p>
      </li>

      <li>
        <p>If none of the above modes is practicable, then by affixing it at the last known place of business or residence and, if such mode is also not practicable, by affixing a copy thereof on the notice board of the office of the concerned officer or authority.</p>
      </li>
    </ol>

    <p><strong>Note:</strong> Any four points may be mentioned.</p>
  `
},
{
  question_id: "IDT_APR24_MTP_II_6c",
  source: "ICAI Mock Test Paper Series II - April 2024",
  chapter_name: [
    "Foreign Trade Policy",
    "Advance Authorisation",
    "Advance Authorisation for Annual Requirements"
  ],
  placement: 6,
  marks: 4,
  question_html: `
    <p><strong>State salient aspects of Advance authorisation for annual requirements to exporters.</strong></p>
  `,
  solution_html: `
    <p>The salient aspects of <strong>Advance Authorisation for Annual Requirements</strong> are as follows:</p>

    <ol>
      <li>
        <p><strong>Annual Advance Authorisation</strong> would be issued to exporters having past export performance in at least the <strong>preceding two financial years</strong>, to enable them to import the inputs required by them on an annual basis.</p>
      </li>

      <li>
        <p>Advance Authorisation for annual requirement shall be issued <strong>only for items notified in the Standard Input Output Norms (SION)</strong> and <strong>not on the basis of ad hoc norms</strong> under self-declared authorisations where SION does not exist.</p>
      </li>

      <li>
        <p>Annual Advance Authorisation, in terms of <strong>CIF value of imports</strong>, will be granted up to <strong>300% of the FOB value of physical exports</strong> in the preceding financial year and/or <strong>FOR value of deemed exports</strong> in the preceding financial year, or <strong>₹1 crore, whichever is higher</strong>.</p>
      </li>
    </ol>
  `
},
{
  question_id: "IDT_SEP24_MTP_I_1",
  source: "ICAI Mock Test Paper Series I - September 2024",
  chapter_name: [
    "Input Tax Credit",
    "Reverse Charge Mechanism",
    "Time of Supply",
    "Place of Supply",
    "Schedule III",
    "Blocked Credits",
    "E-Invoicing"
  ],
  placement: 1,
  marks: 14,
  question_html: `
    <p><strong>Jigar Infra Ltd.</strong>, a registered supplier under GST in the State of Kerala, is engaged in the construction business. He availed legal services relating to a business dispute and paid <strong>₹7,00,000</strong> as consideration for the same. He also purchased construction materials amounting to <strong>₹15,00,000</strong> from Chirag Steels Ltd., registered in the State of Andhra Pradesh. Further, for transport of materials, it purchased a new truck from a dealer in Cochin, Kerala by making payment of <strong>₹12,00,000</strong>.</p>

    <p>It provides the following information relating to its outward supply for the month of April:</p>

    <table border="1" cellpadding="6" cellspacing="0">
      <thead>
        <tr>
          <th>S. No.</th>
          <th>Particulars</th>
          <th>Amount (₹)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>(i)</td>
          <td>Purchased goods from a party in Taiwan. Sold the goods to a party in Turkey without bringing the goods to India. Purchase value was ₹5,00,000 and the sale price was ₹7,00,000. (The figures in rupees have been given after conversion though transaction was in convertible foreign currency).</td>
          <td>7,00,000</td>
        </tr>
        <tr>
          <td>(ii)</td>
          <td>Transferred one load of tiles to its branch in Cochin, Kerala, from its head office at Trivandrum, Kerala. Both places are under the same GST registration.</td>
          <td>7,50,000</td>
        </tr>
        <tr>
          <td>(iii)</td>
          <td>Provided pure labour services of construction of single commercial unit not forming part of any complex to a customer in Bengaluru (Karnataka).</td>
          <td>15,00,000</td>
        </tr>
        <tr>
          <td>(iv)</td>
          <td>Supplies a consignment of marbles in the territorial waters to Surya Builders LLP. The said territorial waters is located at a distance of 11 nautical miles from the baseline of State of Kerala and 12 nautical miles from the baseline of State of Tamil Nadu.</td>
          <td>6,00,000</td>
        </tr>
        <tr>
          <td>(v)</td>
          <td>Received an advance for future supplies of goods and services from a customer in Kerala. Out of such advance, 70% is related to future supplies of services.</td>
          <td>7,00,000</td>
        </tr>
      </tbody>
    </table>

    <p><strong>The company provided the following additional information:</strong></p>

    <ol type="i">
      <li>Paid <strong>₹6,00,000</strong> as remuneration to an independent director based at Cochin during the month.</li>

      <li>The company claimed depreciation under the Income-tax Act, 1961 on the new truck purchased including all applicable taxes.</li>

      <li>E-invoice portal shows that Chirag Steels Ltd.'s GSTIN is liable to issue e-invoice. However, the supplier did not issue e-invoice and instead issued a manual invoice. The invoice was reflected in GSTR-2B.</li>

      <li>Turnover of Jigar Infra Ltd. for the previous financial year was <strong>₹180 lakh</strong>.</li>

      <li>Rates of CGST, SGST and IGST are <strong>9%, 9% and 18%</strong> respectively for both inward and outward supply of goods and services.</li>

      <li>All the amounts given above are exclusive of taxes wherever applicable.</li>
    </ol>

    <p><strong>From the information given above, you are required to compute the minimum net GST liability payable in cash (CGST, SGST or IGST, as the case may be) for the month of April. Reason for treatment needs to be given.</strong></p>
  `,
  solution_html: `
    <p><strong>Computation of Minimum Net GST Liability Payable in Cash by Jigar Infra Ltd. for the Month of April</strong></p>

    <table border="1" cellpadding="6" cellspacing="0">
      <thead>
        <tr>
          <th>Particulars</th>
          <th>CGST (₹)</th>
          <th>SGST (₹)</th>
          <th>IGST (₹)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            Goods purchased from Taiwan and sold in Turkey without bringing them into India.<br>
            <em>Neither treated as supply of goods nor supply of services [Schedule III].</em>
          </td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>

        <tr>
          <td>
            Transfer of tiles to branch within Kerala.<br>
            <em>Not a supply since both establishments have the same GST registration.</em>
          </td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>

        <tr>
          <td>
            Pure labour services for construction of single commercial unit in Bengaluru.<br>
            <em>Taxable as exemption applies only to residential units.</em>
          </td>
          <td>-</td>
          <td>-</td>
          <td>2,70,000</td>
        </tr>

        <tr>
          <td>
            Supply of marbles in territorial waters.<br>
            <em>Place of supply is Kerala being the nearest coastal State.</em>
          </td>
          <td>54,000</td>
          <td>54,000</td>
          <td>-</td>
        </tr>

        <tr>
          <td>
            Advance received towards services (70% of ₹7,00,000).<br>
            <em>GST payable only on advance relating to services.</em>
          </td>
          <td>44,100</td>
          <td>44,100</td>
          <td>-</td>
        </tr>

        <tr>
          <th>Total Output GST</th>
          <th>98,100</th>
          <th>98,100</th>
          <th>2,70,000</th>
        </tr>

        <tr>
          <td>Less: Eligible ITC</td>
          <td>98,100</td>
          <td>98,100</td>
          <td>37,800</td>
        </tr>

        <tr>
          <th>Net Output GST Payable in Cash (A)</th>
          <th>Nil</th>
          <th>Nil</th>
          <th>2,32,200</th>
        </tr>

        <tr>
          <td>
            GST payable under Reverse Charge:<br>
            • Legal services – ₹63,000 CGST + ₹63,000 SGST<br>
            • Independent Director's remuneration – ₹54,000 CGST + ₹54,000 SGST
          </td>
          <td>1,17,000</td>
          <td>1,17,000</td>
          <td>-</td>
        </tr>

        <tr>
          <th>Minimum Net GST Payable in Cash (A + B)</th>
          <th>1,17,000</th>
          <th>1,17,000</th>
          <th>2,32,200</th>
        </tr>
      </tbody>
    </table>

    <p><strong>Working Note – Computation of Eligible Input Tax Credit</strong></p>

    <table border="1" cellpadding="6" cellspacing="0">
      <thead>
        <tr>
          <th>Particulars</th>
          <th>CGST (₹)</th>
          <th>SGST (₹)</th>
          <th>IGST (₹)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            Goods purchased from Taiwan.<br>
            <em>No ITC since no GST is payable.</em>
          </td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>

        <tr>
          <td>
            Legal services.<br>
            <em>ITC available since tax is paid under reverse charge and services are used in the course of business.</em>
          </td>
          <td>63,000</td>
          <td>63,000</td>
          <td>-</td>
        </tr>

        <tr>
          <td>
            Construction materials purchased from Chirag Steels Ltd.<br>
            <em>No ITC since e-invoice was required but not issued. Manual invoice is not a valid tax invoice.</em>
          </td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>

        <tr>
          <td>
            Truck purchased for transportation of goods.<br>
            <em>Though otherwise eligible, ITC is not available since depreciation has been claimed on tax component under the Income-tax Act.</em>
          </td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>

        <tr>
          <td>
            Independent Director's remuneration.<br>
            <em>ITC available as GST paid under reverse charge and service used for business.</em>
          </td>
          <td>54,000</td>
          <td>54,000</td>
          <td>-</td>
        </tr>

        <tr>
          <th>Total Eligible ITC</th>
          <th>1,17,000</th>
          <th>1,17,000</th>
          <th>Nil</th>
        </tr>
      </tbody>
    </table>
  `
},
{
  question_id: "IDT_SEP24_MTP_I_2a",
  source: "ICAI Mock Test Paper Series I - September 2024",
  chapter_name: [
    "Place of Supply of Goods",
    "Place of Supply of Services",
    "IGST Act"
  ],
  placement: 2,
  marks: 10,
  question_html: `
    <p><strong>Determine the place of supply along with reasons in the following independent cases:</strong></p>

    <p><strong>(i)</strong> Mr. Rana (New Delhi) boards the New Delhi–Kota train at New Delhi. Mr. Rana sells the goods taken on board by him (at New Delhi), in the train, at Jaipur during the journey.</p>

    <p><strong>(ii)</strong> Sultan Pvt. Ltd. imports electric food processors from China for its Kitchen Store in Noida, Uttar Pradesh. Sultan Pvt. Ltd. is registered in Uttar Pradesh.</p>

    <p><strong>(iii)</strong> Mr. Krishnadevaraya, a manager in a Bank, is transferred from Bareilly, Uttar Pradesh to Bhopal, Madhya Pradesh. Mr. Krishnadevaraya’s family is stationed in Kanpur, Uttar Pradesh. He hires Nath Carriers of Lucknow, Uttar Pradesh (registered in Uttar Pradesh), to transport his household goods from Kanpur to Bhopal.</p>

    <p><strong>(iv)</strong> Chintu Sharma, a resident of New Delhi, opens his saving account in New Delhi branch of Sadda Bank after undergoing the KYC process. He goes to Amritsar for some official work and withdraws money from Sadda Bank’s ATM in Amritsar thereby crossing his limit of free ATM withdrawals.</p>

    <p><strong>(v)</strong> Mr. Gappu, an architect (New Delhi), enters into a contract with Mr. Hanry of New York to provide professional services in respect of immovable properties of Mr. Hanry located in Pune and New York.</p>
  `,
  solution_html: `
    <p><strong>(i) Supply of goods on board a conveyance</strong></p>

    <p>As per <strong>section 10(1)(e) of the IGST Act, 2017</strong>, the place of supply of goods supplied on board a conveyance such as an aircraft, train, vessel or motor vehicle is the <strong>location at which such goods are taken on board</strong>.</p>

    <p><strong>Therefore, the place of supply is New Delhi</strong>, since the goods were taken on board at New Delhi, irrespective of the fact that they were sold at Jaipur.</p>

    <hr>

    <p><strong>(ii) Import of goods</strong></p>

    <p>As per <strong>section 11(a) of the IGST Act, 2017</strong>, where goods are imported into India, the place of supply is the <strong>location of the importer</strong>.</p>

    <p>Since Sultan Pvt. Ltd. is located and registered in <strong>Noida, Uttar Pradesh</strong>, the <strong>place of supply is Noida, Uttar Pradesh</strong>.</p>

    <hr>

    <p><strong>(iii) Transportation of goods to an unregistered person</strong></p>

    <p>As per <strong>section 12(8) of the IGST Act, 2017</strong>, where transportation of goods is provided to an <strong>unregistered person</strong>, the place of supply is the <strong>location at which the goods are handed over for transportation</strong>.</p>

    <p>Since the household goods were handed over at <strong>Kanpur, Uttar Pradesh</strong>, the <strong>place of supply is Kanpur, Uttar Pradesh</strong>.</p>

    <hr>

    <p><strong>(iv) Banking and financial services</strong></p>

    <p>As per <strong>section 12(12) of the IGST Act, 2017</strong>, the place of supply of banking and other financial services is the <strong>location of the recipient as available in the records of the supplier</strong>.</p>

    <p>Accordingly, even though the ATM withdrawal took place at Amritsar, the <strong>place of supply is New Delhi</strong>, being the location of the recipient in the bank's records.</p>

    <hr>

    <p><strong>(v) Services relating to immovable property situated at multiple locations</strong></p>

    <p>As per <strong>section 13(4) read with section 13(6) of the IGST Act, 2017</strong>, where services supplied directly in relation to an immovable property are supplied at more than one location, including a location in the taxable territory, the place of supply shall be the <strong>location in the taxable territory</strong>.</p>

    <p>Since one of the immovable properties is situated at <strong>Pune, India</strong>, the <strong>place of supply is Pune, India</strong>.</p>
  `
},
{
  question_id: "IDT_SEP24_MTP_I_2b",
  source: "ICAI Mock Test Paper Series I - September 2024",
  chapter_name: [
    "Customs Valuation",
    "Assessable Value",
    "Basic Customs Duty",
    "Social Welfare Surcharge",
    "IGST on Imports"
  ],
  placement: 2,
  marks: 4,
  question_html: `
    <p>A non-resident Indian from USA donated food processing machinery to Balaji Charitable Trust (BCT). BCT, however, paid commission to local agent in India.</p>

    <p>Assistant Commissioner of Customs determined the FOB value of machine at <strong>US $ 17,500</strong> including design and development charges. Design and development is undertaken in USA and necessary for the production of imported goods. The trust accepted the value determined.</p>

    <p>Actual air freight paid was <strong>US $ 4,000</strong> and insurance cost was <strong>US $ 1,500</strong>. Other details available are given below:</p>

    <ol type="i">
      <li>Commission paid to local agent of the exporter is <strong>US $ 2,100</strong> (paid in ₹1,57,500).</li>

      <li>Date of presentation of Bill of Entry is <strong>25th March, 2024</strong>. On this date:
        <ul>
          <li>Rate of BCD = <strong>10%</strong></li>
          <li>Rate of exchange notified by CBIC = <strong>₹75 per US $</strong></li>
          <li>Reserve Bank rate = <strong>₹76 per US $</strong></li>
        </ul>
      </li>

      <li>Date of arrival of aircraft at customs station is <strong>5th April, 2024</strong>. On this date:
        <ul>
          <li>Rate of BCD = <strong>15%</strong></li>
          <li>Rate of exchange notified by CBIC = <strong>₹74 per US $</strong></li>
          <li>Reserve Bank rate = <strong>₹75 per US $</strong></li>
        </ul>
      </li>

      <li>Social Welfare Surcharge is leviable @ <strong>10%</strong> and applicable IGST rate is <strong>18%</strong>.</li>
    </ol>

    <p><strong>Compute the assessable value under the Customs Act and also calculate Basic Customs Duty, Social Welfare Surcharge and IGST on import of the machine. Assume that no exemption is available on this transaction and make suitable assumptions, if required.</strong></p>
  `,
  solution_html: `
    <p><strong>Computation of Assessable Value, Basic Customs Duty, Social Welfare Surcharge and IGST</strong></p>

    <table border="1" cellpadding="6" cellspacing="0">
      <thead>
        <tr>
          <th>Particulars</th>
          <th>Amount (US $)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>FOB value determined by Customs (including design and development charges)</td>
          <td>17,500</td>
        </tr>
        <tr>
          <td>Add: Commission paid to local agent <br><em>(Includible since it is not a buying commission)</em></td>
          <td>2,100</td>
        </tr>
        <tr>
          <td><strong>FOB value as per Customs</strong></td>
          <td><strong>19,600</strong></td>
        </tr>
        <tr>
          <td>Add: Air freight (Restricted to 20% of FOB value as goods are imported by air)<br>20% × US $19,600 = US $3,920</td>
          <td>3,920</td>
        </tr>
        <tr>
          <td>Add: Actual insurance charges</td>
          <td>1,500</td>
        </tr>
        <tr>
          <td><strong>Assessable Value (US $)</strong></td>
          <td><strong>25,020</strong></td>
        </tr>
        <tr>
          <td>Assessable Value in Indian Rupees (US $25,020 × ₹75)<br><em>(CBIC exchange rate on date of filing Bill of Entry is applicable)</em></td>
          <td><strong>₹18,76,500</strong></td>
        </tr>
      </tbody>
    </table>

    <br>

    <table border="1" cellpadding="6" cellspacing="0">
      <thead>
        <tr>
          <th>Particulars</th>
          <th>Amount (₹)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Assessable Value</td>
          <td>18,76,500</td>
        </tr>
        <tr>
          <td>Basic Customs Duty @ 15%<br><em>(Rate prevailing on the later of date of filing Bill of Entry or date of arrival of aircraft)</em></td>
          <td>2,81,475</td>
        </tr>
        <tr>
          <td>Social Welfare Surcharge @ 10% of BCD</td>
          <td>28,148</td>
        </tr>
        <tr>
          <td><strong>Value for levy of IGST</strong></td>
          <td><strong>21,86,123</strong></td>
        </tr>
        <tr>
          <td>IGST @ 18%</td>
          <td><strong>3,93,502</strong></td>
        </tr>
      </tbody>
    </table>

    <p><strong>Therefore:</strong></p>

    <ul>
      <li><strong>Assessable Value:</strong> ₹18,76,500</li>
      <li><strong>Basic Customs Duty:</strong> ₹2,81,475</li>
      <li><strong>Social Welfare Surcharge:</strong> ₹28,148</li>
      <li><strong>IGST:</strong> ₹3,93,502</li>
    </ul>
  `
},
{
  question_id: "IDT_SEP24_MTP_I_3a",
  source: "ICAI Mock Test Paper Series I - September 2024",
  chapter_name: [
    "Exemptions from GST",
    "Services to Educational Institutions",
    "Notification No. 12/2017-CT (Rate)"
  ],
  placement: 3,
  marks: 5,
  question_html: `
    <p><strong>Rainbow Services Limited</strong>, registered under GST, is engaged in providing various services to various educational institutions. The company provides the following information in respect of services provided during the month of April 2024:</p>

    <table border="1" cellpadding="6" cellspacing="0">
      <thead>
        <tr>
          <th>S. No.</th>
          <th>Description of services provided</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>(i)</td>
          <td>Transportation of students and staff of <strong>'Prudence'</strong>, a deemed University.</td>
        </tr>
        <tr>
          <td>(ii)</td>
          <td>Catering services provided to <strong>'Grade CBSE School'</strong>.</td>
        </tr>
        <tr>
          <td>(iii)</td>
          <td>Security services provided to <strong>'Ladder CBSE School'</strong> for its annual sports day held at <strong>Health Sports Complex</strong> owned by the Government of India.</td>
        </tr>
        <tr>
          <td>(iv)</td>
          <td>Supply of online periodical science journal to <strong>'Credit CBSE School'</strong> for its higher secondary students.</td>
        </tr>
        <tr>
          <td>(v)</td>
          <td>Services in relation to placement of students to <strong>'Standard'</strong>, a Government-recognized vocational training college.</td>
        </tr>
      </tbody>
    </table>

    <p><strong>Comment on the taxability or otherwise of the above transactions under GST law. Also state the correct legal provisions for the same.</strong></p>
  `,
  solution_html: `
    <table border="1" cellpadding="6" cellspacing="0">
      <thead>
        <tr>
          <th>S. No.</th>
          <th>Particulars</th>
          <th>Taxability</th>
          <th>Reason / Legal Provision</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>(i)</td>
          <td>Transportation of students and staff of a deemed University</td>
          <td><strong>Taxable</strong></td>
          <td>
            Transportation services provided to an educational institution are exempt only when such institution provides
            <strong>pre-school education or education up to higher secondary school or equivalent</strong>.
            Since a deemed university does not fall under this category, the exemption is not available.
          </td>
        </tr>

        <tr>
          <td>(ii)</td>
          <td>Catering services provided to Grade CBSE School</td>
          <td><strong>Exempt</strong></td>
          <td>
            Catering services provided to an educational institution providing
            <strong>pre-school education or education up to higher secondary school or equivalent</strong>
            are exempt under Notification No. 12/2017-CT (Rate).
          </td>
        </tr>

        <tr>
          <td>(iii)</td>
          <td>Security services provided for annual sports day held at Government Sports Complex</td>
          <td><strong>Taxable</strong></td>
          <td>
            Security services are exempt only when they are performed
            <strong>within the premises of the educational institution</strong>.
            Since the services are provided outside the school premises, the exemption is not available.
          </td>
        </tr>

        <tr>
          <td>(iv)</td>
          <td>Supply of online periodical science journal to Credit CBSE School</td>
          <td><strong>Taxable</strong></td>
          <td>
            Educational institutions providing pre-school education or education up to higher secondary level
            are <strong>not eligible for exemption</strong> in respect of supply of
            <strong>online educational journals</strong>.
          </td>
        </tr>

        <tr>
          <td>(v)</td>
          <td>Placement services to Government-recognized vocational training college</td>
          <td><strong>Taxable</strong></td>
          <td>
            For vocational educational institutions, exemption is available only for
            <strong>services relating to admission to, or conduct of examination</strong>.
            Placement services are therefore taxable.
          </td>
        </tr>
      </tbody>
    </table>
  `
},
{
  question_id: "IDT_SEP24_MTP_I_3b",
  source: "ICAI Mock Test Paper Series I - September 2024",
  chapter_name: [
    "Time of Supply",
    "Change in Rate of Tax"
  ],
  placement: 3,
  marks: 5,
  question_html: `
    <p><strong>Kinjal</strong> checked-in at the <strong>'Laze Tourist Lodge'</strong> in Madurai on <strong>15th March, 2024</strong>. The room rent for the same was <strong>₹900 per day</strong> for a single room. She checked-out on <strong>17th March, 2024</strong> and payment in respect of the same was received by the lodge via cheque at the time of checking-out and entered in the books on the same date. The lodge decided to issue the invoice on the same date when the amount would get credited in its bank account.</p>

    <p>The lodging of hotel rooms which was exempted up to <strong>₹1,000</strong> earlier became chargeable to tax from <strong>18th March, 2024</strong>.</p>

    <p>Under the GST law, determine the <strong>time of supply</strong> and <strong>taxability</strong> of the service of lodging in the hands of <strong>'Laze Tourist Lodge'</strong> if the cheque gets credited into the bank account of the lodge on <strong>20th March, 2024</strong>.</p>

    <p><strong>Note:</strong> Assume that all the days covered in the above case are working days.</p>
  `,
  solution_html: `
    <p><strong>Determination of Time of Supply</strong></p>

    <p>In the given case:</p>

    <ul>
      <li><strong>Date of receipt of payment</strong> is the earlier of:
        <ul>
          <li>Date of entry in the books of account: <strong>17th March, 2024</strong>, or</li>
          <li>Date of credit in the bank account: <strong>20th March, 2024</strong>.</li>
        </ul>
      </li>
    </ul>

    <p>Hence, the <strong>date of receipt of payment is 17th March, 2024</strong>.</p>

    <p>The invoice is issued on <strong>20th March, 2024</strong>, i.e., the date on which the cheque is credited in the bank account.</p>

    <p>Since there is a <strong>change in the rate of tax</strong> effective from <strong>18th March, 2024</strong>, and:</p>

    <ul>
      <li>the <strong>service has been supplied before the change</strong>,</li>
      <li>the <strong>payment has been received before the change</strong>, and</li>
      <li>the <strong>invoice has been issued after the change</strong>,</li>
    </ul>

    <p>the <strong>time of supply</strong> shall be the <strong>date of receipt of payment</strong>, i.e., <strong>17th March, 2024</strong>.</p>

    <p><strong>Taxability</strong></p>

    <p>On the time of supply, i.e., <strong>17th March, 2024</strong>, the service of lodging in hotel rooms having tariff up to <strong>₹1,000 per day</strong> was exempt from GST.</p>

    <p><strong>Therefore, no GST is payable</strong> on the lodging service provided by <strong>'Laze Tourist Lodge'</strong>.</p>
  `
},
{
  question_id: "IDT_SEP24_MTP_I_3c",
  source: "ICAI Mock Test Paper Series I - September 2024",
  chapter_name: [
    "Customs Duty",
    "Pilferage",
    "Abatement of Duty"
  ],
  placement: 3,
  marks: 4,
  question_html: `
    <p><strong>Elite Car Decors</strong> imported car music systems and GPS devices from Germany. The importer submits the following issues for your consideration:</p>

    <p><strong>(i)</strong> 10 GPS devices were pilfered after unloading and before the proper officer had made an order for clearance for home consumption.</p>

    <p><strong>(ii)</strong> 30 music systems were damaged after unloading and examination for assessment by the customs authorities but before actual home clearance. It may be noted that the imported music systems have not been warehoused.</p>

    <p><strong>Elite Car Decors seeks your expert advice, with reasons, regarding the impact on customs duty on the said goods.</strong></p>
  `,
  solution_html: `
    <p><strong>(i) GPS devices pilfered before clearance for home consumption</strong></p>

    <p>Elite Car Decors is <strong>not liable to pay customs duty</strong> on the 10 GPS devices that were pilfered.</p>

    <p><strong>Reason:</strong> Under the Customs Act, an importer is <strong>not liable to pay duty</strong> on imported goods that are <strong>pilfered after unloading but before the proper officer makes an order for clearance for home consumption</strong>.</p>

    <hr>

    <p><strong>(ii) Music systems damaged before home clearance</strong></p>

    <p><strong>Abatement of duty is not available</strong> in respect of the 30 damaged music systems.</p>

    <p><strong>Reason:</strong> Abatement of duty on damaged imported goods is available only where the goods are <strong>damaged or deteriorated accidentally after unloading but before examination for assessment by the customs authorities</strong>.</p>

    <p>In the present case, the music systems were damaged <strong>after examination for assessment</strong> and before clearance for home consumption. Therefore, the importer is <strong>not entitled to abatement of customs duty</strong>.</p>
  `
},
{
  question_id: "IDT_SEP24_MTP_I_4a",
  source: "ICAI Mock Test Paper Series I - September 2024",
  chapter_name: [
    "Registration",
    "Compulsory Registration",
    "Threshold Limit",
    "Casual Taxable Person"
  ],
  placement: 4,
  marks: 5,
  question_html: `
    <p><strong>Decide with reason whether registration is required under the CGST Act, 2017 in the following independent cases:</strong></p>

    <p><strong>(i)</strong> A casual taxable person (CTP) has provided inter-State supply of notified products being textiles hand printing amounting to <strong>₹19.25 lakh</strong> during the month of January. Those products were made by craftsmen by both hand and machines equally. CTP had obtained PAN and generated e-way bill for supply.</p>

    <p><strong>(ii)</strong> Mr. Chandu of Delhi doing trading business across India and his intra-State turnover details are as below:</p>

    <ol type="1">
      <li>Taxable supplies made from Delhi – <strong>₹18 lakh</strong>.</li>
      <li>Exempt supplies made from Andhra Pradesh – <strong>₹10 lakh</strong>.</li>
      <li>Both taxable and exempt supplies made from Tamil Nadu – <strong>₹5 lakh</strong> and <strong>₹6 lakh</strong> respectively.</li>
    </ol>

    <p>It may be noted that Mr. Chandu makes only intra-State supplies across India.</p>
  `,
  solution_html: `
    <p><strong>(i)</strong></p>

    <p>A casual taxable person (CTP) is liable to be registered compulsorily under GST irrespective of the threshold limit.</p>

    <p>However, CTPs making inter-State taxable supplies of notified products, when made by the craftsmen <strong>predominantly by hand</strong> even though some machinery may also be used in the process, have been exempted from obtaining registration if their aggregate turnover does not exceed <strong>₹20 lakh</strong> [₹10 lakh for specified special category States].</p>

    <p>Since, in the given case, the notified products were made by craftsmen by <strong>both hand and machines equally</strong>, they are <strong>not eligible for exemption</strong> and are <strong>required to obtain registration mandatorily</strong>.</p>

    <hr>

    <p><strong>(ii)</strong></p>

    <p>For a supplier exclusively engaged in intra-State supply of goods, the threshold limit of turnover to obtain registration in the States of <strong>Delhi, Andhra Pradesh and Tamil Nadu is ₹40 lakh</strong>.</p>

    <p>Aggregate turnover includes the value of all taxable and exempt supplies under the same PAN.</p>

    <p><strong>Aggregate Turnover:</strong></p>

    <p>= ₹18 lakh + ₹10 lakh + ₹5 lakh + ₹6 lakh</p>

    <p><strong>= ₹39 lakh</strong></p>

    <p>Therefore, <strong>Mr. Chandu is not liable for registration</strong> as his aggregate turnover does not exceed the threshold limit of <strong>₹40 lakh</strong>.</p>
  `
},
{
  question_id: "IDT_SEP24_MTP_I_4b",
  source: "ICAI Mock Test Paper Series I - September 2024",
  chapter_name: [
    "Tax Deduction at Source (TDS)",
    "Inter-State Supply",
    "Government Deductor"
  ],
  placement: 4,
  marks: 5,
  question_html: `
    <p><strong>Swathi Corporation</strong>, a Public Sector Undertaking registered in Karnataka, has given a contract to <strong>Mr. Mast Nath</strong>, a renowned artist and registered person in Maharashtra, to perform contemporary Bollywood songs for entertainment events at <strong>Bengaluru</strong> and <strong>Mumbai</strong>.</p>

    <p>Swathi Corporation agreed to pay <strong>₹12,39,000</strong> and <strong>₹18,29,000</strong>, inclusive of GST, for the Mumbai and Bengaluru events respectively.</p>

    <p><strong>Assuming GST rate @ 18% (CGST @ 9%, SGST @ 9%, IGST @ 18%), advise Swathi Corporation regarding the amount of TDS to be deducted.</strong></p>
  `,
  solution_html: `
    <p>A Public Sector Undertaking is required to deduct tax <strong>@ 2%</strong> (on inter-State supplies) from payment made to the supplier of taxable services where the total value of such supply, <strong>excluding tax indicated in the invoice</strong>, under a contract exceeds <strong>₹2,50,000</strong>.</p>

    <p><strong>Value of supplies excluding GST:</strong></p>

    <ul>
      <li>Mumbai event = ₹12,39,000 × 100/118 = <strong>₹10,50,000</strong></li>
      <li>Bengaluru event = ₹18,29,000 × 100/118 = <strong>₹15,50,000</strong></li>
    </ul>

    <p>Since the <strong>location of supplier is Maharashtra</strong> and the <strong>place of supply is the location of the recipient, i.e., Karnataka</strong>, the services provided for both Mumbai and Bengaluru events are <strong>inter-State supplies</strong>.</p>

    <p>Accordingly, Swathi Corporation is required to deduct TDS as follows:</p>

    <table border="1" cellpadding="6" cellspacing="0">
      <thead>
        <tr>
          <th>Particulars</th>
          <th>Computation</th>
          <th>TDS (IGST)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mumbai Event</td>
          <td>₹10,50,000 × 2%</td>
          <td><strong>₹21,000</strong></td>
        </tr>
        <tr>
          <td>Bengaluru Event</td>
          <td>₹15,50,000 × 2%</td>
          <td><strong>₹31,000</strong></td>
        </tr>
      </tbody>
    </table>
  `
},
{
  question_id: "IDT_SEP24_MTP_I_4c",
  source: "ICAI Mock Test Paper Series I - September 2024",
  chapter_name: [
    "Customs Duty",
    "Anti-Dumping Duty",
    "100% EOU",
    "Special Economic Zone"
  ],
  placement: 4,
  marks: 4,
  question_html: `
    <p><strong>With reference to the Customs Act, 1962, decide the validity of the following independent cases with proper legal provisions:</strong></p>

    <p><strong>(i)</strong> Smooth Rubber Limited is a <strong>100% EOU</strong> located in a <strong>Special Economic Zone</strong>. It imported certain items from China for its production process. Customs officer proposed to impose anti-dumping duty on such imports. The importer contends that no anti-dumping duty can be imposed on imports by a 100% EOU under any circumstances.</p>

    <p><strong>(ii)</strong> Customs Department proposed to impose anti-dumping duty retrospectively in respect of certain items. Importer's association claimed that anti-dumping duty cannot be levied with retrospective effect under any circumstances.</p>
  `,
  solution_html: `
    <p><strong>(i)</strong></p>

    <p>The contention of the importer is <strong>partially correct</strong>.</p>

    <p>Anti-dumping duty cannot be imposed on imports made by a <strong>100% EOU</strong>. However, the following circumstances are exceptions to the above rule:</p>

    <ol type="a">
      <li>Where anti-dumping duty is <strong>specifically made applicable</strong> in the relevant notification or imposition; or</li>

      <li>Where the imported article is either:
        <ul>
          <li>cleared as such into the <strong>Domestic Tariff Area (DTA)</strong>, or</li>
          <li>used in the manufacture of goods which are cleared into the <strong>DTA</strong>.</li>
        </ul>

        <p>In such cases, anti-dumping duty shall be levied on that portion of the article so cleared or so used as was leviable when it was imported into India.</p>
      </li>
    </ol>

    <hr>

    <p><strong>(ii)</strong></p>

    <p>The claim of the importer's association is <strong>not correct</strong>.</p>

    <p>Anti-dumping duty can be levied <strong>retrospectively</strong>, but not beyond <strong>90 days</strong> from the date of notification, if the Central Government is of the opinion that:</p>

    <ol type="a">
      <li>There is a <strong>history of dumping</strong> which caused injury, or the importer was, or should have been, aware that the exporter practises dumping and that such dumping would cause injury; and</li>

      <li>The injury is caused by <strong>massive dumping</strong> of an article imported in a relatively short time, which is likely to seriously undermine the remedial effect of anti-dumping duty owing to the timing and volume of dumped imports and other relevant circumstances.</li>
    </ol>
  `
},
{
  question_id: "IDT_SEP24_MTP_I_5a",
  source: "ICAI Mock Test Paper Series I - September 2024",
  chapter_name: [
    "General Provisions Relating to Determination of Tax",
    "Section 73",
    "Section 74",
    "Section 75",
    "Interest under GST"
  ],
  placement: 5,
  marks: 5,
  question_html: `
    <p><strong>Discuss the validity of the following independent cases under the provisions of the CGST Act, 2017:</strong></p>

    <p><strong>(i)</strong> A CGST officer had issued a notice under <strong>section 74(1)</strong> of the CGST Act, 2017 against which appeal was preferred by the assessee. The Appellate Authority concluded that the notice issued under section 74(1) was not sustainable for the reason that charges of fraud had not been established. The officer now wishes to determine the tax payable by treating the said notice as if it was issued under <strong>section 73(1)</strong> of the CGST Act, 2017. Is the action of the officer valid?</p>

    <p><strong>(ii)</strong> A CGST officer issued an adjudication order which did not specify payment of interest on the tax short paid by the registered person. The assessee contends that interest cannot be demanded since the adjudication order is silent on the same. Is the contention of the assessee correct?</p>
  `,
  solution_html: `
    <p><strong>(i)</strong></p>

    <p><strong>Valid.</strong></p>

    <p>As per <strong>section 75 of the CGST Act, 2017</strong>, if the Appellate Authority concludes that the notice issued under <strong>section 74(1)</strong> is not sustainable on the ground that the charges of fraud have not been established, the proper officer can determine the tax payable by <strong>deeming the notice to have been issued under section 73(1)</strong> of the CGST Act, 2017.</p>

    <hr>

    <p><strong>(ii)</strong></p>

    <p><strong>The contention of the assessee is incorrect.</strong></p>

    <p>As per <strong>section 75 of the CGST Act, 2017</strong>, <strong>interest on tax short paid or not paid is payable whether or not the same is specified in the order determining the tax liability.</strong></p>

    <p>Therefore, interest can be demanded even though the adjudication order is silent regarding the payment of interest.</p>
  `
},
{
  question_id: "IDT_SEP24_MTP_I_5b",
  source: "ICAI Mock Test Paper Series I - September 2024",
  chapter_name: [
    "Revision of Orders",
    "Section 108",
    "Appeals",
    "Revisional Authority"
  ],
  placement: 5,
  marks: 5,
  question_html: `
    <p><strong>Mr. Pappu</strong> is aggrieved by the order of the <strong>Revisional Authority (RA)</strong> and wants to make an appeal to the <strong>First Appellate Authority</strong>.</p>

    <p>While commenting on the decision of Mr. Pappu, you are also required to state the <strong>powers of the Revisional Authority</strong> to revise the orders passed by the subordinate officers under <strong>section 108 of the CGST Act, 2017</strong>.</p>

    <p><strong>What is the time period for the Revisional Authority to exercise the power of revision?</strong></p>
  `,
  solution_html: `
    <p><strong>Decision of Mr. Pappu</strong></p>

    <p>The decision of Mr. Pappu to make an appeal to the <strong>First Appellate Authority</strong> against the order of the <strong>Revisional Authority (RA)</strong> is <strong>not valid in law</strong>.</p>

    <p>Any person aggrieved by an order passed by the Revisional Authority under the CGST Act, 2017 may appeal to the <strong>Appellate Tribunal</strong>, which is the <strong>second level of appeal</strong>.</p>

    <hr>

    <p><strong>Powers of the Revisional Authority under section 108 of the CGST Act, 2017</strong></p>

    <ol>
      <li>
        <p>The Revisional Authority may, <strong>on his own motion</strong>, or upon information received by him, or on request from the <strong>SGST/UTGST Commissioner</strong>, call for and examine the record of any proceedings.</p>
      </li>

      <li>
        <p>If, on examination of the records, the Revisional Authority is of the view that the decision or order passed by any officer subordinate to him is <strong>erroneous and illegal/improper</strong> or has <strong>not taken into account material facts</strong>, he may stay the operation of such order for such period as he deems fit.</p>
      </li>

      <li>
        <p>After giving the person concerned an opportunity of being heard and after making such further inquiry as may be necessary, the Revisional Authority may pass such order as he thinks just and proper, including <strong>enhancing, modifying or annulling</strong> the said order.</p>
      </li>
    </ol>

    <hr>

    <p><strong>Time period for exercise of power of revision</strong></p>

    <p>The Revisional Authority can revise an order:</p>

    <ul>
      <li>After the expiry of <strong>6 months</strong> from the date of communication of the said order; but</li>
      <li>Not later than the expiry of <strong>3 years</strong> from the date of passing of the decision/order.</li>
    </ul>

    <p>Where the order is subject to an appeal before the <strong>Appellate Authority, Appellate Tribunal, High Court or Supreme Court</strong>, the Revisional Authority may pass an order on any point which has <strong>not been raised and decided in the appeal</strong> before the expiry of:</p>

    <ul>
      <li><strong>1 year</strong> from the date of the order in such appeal; or</li>
      <li><strong>3 years</strong> from the date of the initial order,</li>
    </ul>

    <p><strong>whichever is later.</strong></p>
  `
},
{
  question_id: "IDT_SEP24_MTP_I_5c",
  source: "ICAI Mock Test Paper Series I - September 2024",
  chapter_name: [
    "Refund of Customs Duty",
    "Unjust Enrichment",
    "Section 27 of the Customs Act, 1962"
  ],
  placement: 5,
  marks: 4,
  question_html: `
    <p><strong>What are the exceptions provided under sub-section (2) of section 27 of the Customs Act, 1962 in which refund of duty and interest may be paid to the applicant?</strong></p>
  `,
  solution_html: `
    <p>The amount of duty and interest found refundable shall be paid to the applicant only in the following situations:</p>

    <ol type="a">
      <li>
        <p>If the <strong>importer or exporter</strong>, as the case may be, has <strong>not passed on the incidence</strong> of such duty and interest to any other person.</p>
      </li>

      <li>
        <p>If the imports were made by an <strong>individual for his personal use</strong>.</p>
      </li>

      <li>
        <p>If the amount found refundable relates to <strong>export duty paid on goods returned to the exporter</strong> as specified under <strong>section 26 of the Customs Act, 1962</strong>.</p>
      </li>

      <li>
        <p>If the amount relates to <strong>drawback of duty</strong> payable.</p>
      </li>

      <li>
        <p>If the duty or interest was borne by a <strong>notified class of applicants</strong>.</p>
      </li>

      <li>
        <p>If the refund relates to <strong>excess duty paid by the importer before the order permitting clearance of goods for home consumption</strong>, where such excess payment is evident from the <strong>Bill of Entry</strong> in the case of a <strong>self-assessed Bill of Entry</strong>.</p>
      </li>

      <li>
        <p>If the refund relates to <strong>excess duty paid by the importer before the order permitting clearance of goods for home consumption</strong>, where the duty actually payable is reflected in the <strong>reassessed Bill of Entry</strong> in the case of reassessment.</p>
      </li>

      <li>
        <p>If the <strong>buyer has not passed on the incidence</strong> of such duty and interest to any other person.</p>
      </li>
    </ol>
  `
},
{
  question_id: "IDT_SEP24_MTP_I_6a",
  source: "ICAI Mock Test Paper Series I - September 2024",
  chapter_name: [
    "Advance Ruling",
    "Authority for Advance Ruling (AAR)",
    "Section 98",
    "CGST Act, 2017"
  ],
  placement: 6,
  marks: 6,
  question_html: `
    <p><strong>Briefly explain the procedure to be followed by the Authority for Advance Ruling (AAR) on receipt of the application for Advance Ruling under section 98 of the CGST Act, 2017.</strong></p>
  `,
  solution_html: `
    <p>The procedure to be followed by the <strong>Authority for Advance Ruling (AAR)</strong> on receipt of the application for Advance Ruling under <strong>section 98 of the CGST Act, 2017</strong> is as under:</p>

    <ol>
      <li>
        <p>Upon receipt of an application, the <strong>AAR shall send a copy of the application to the officer in whose jurisdiction the applicant falls and call for all relevant records.</strong></p>
      </li>

      <li>
        <p>The <strong>AAR may then examine the application along with the records and may also hear the applicant.</strong> Thereafter, it shall pass an order either <strong>admitting or rejecting</strong> the application.</p>
      </li>

      <li>
        <p><strong>Application for Advance Ruling shall not be admitted</strong> where the question raised in the application is <strong>already pending or decided</strong> in any proceedings in the case of the applicant under any of the provisions of the CGST Act.</p>
      </li>

      <li>
        <p>If the application is rejected, it shall be rejected by way of a <strong>speaking order</strong> stating the reasons for rejection and <strong>only after giving the applicant an opportunity of being heard.</strong></p>
      </li>

      <li>
        <p>If the application is admitted, the <strong>AAR shall pronounce its ruling on the question specified in the application.</strong> Before giving its ruling, it shall examine the application and any further material furnished by the applicant or by the concerned departmental officer.</p>
      </li>

      <li>
        <p>Before pronouncing the ruling, the <strong>AAR shall hear the applicant or his authorised representative as well as the jurisdictional officers of CGST/SGST.</strong></p>
      </li>

      <li>
        <p>If there is a <strong>difference of opinion between the two Members of the AAR</strong>, they shall <strong>refer the point or points of difference to the Appellate Authority</strong> for hearing the issue.</p>
      </li>

      <li>
        <p>The <strong>Authority shall pronounce its Advance Ruling in writing within 90 days</strong> from the date of receipt of the application.</p>
      </li>

      <li>
        <p>A copy of the <strong>Advance Ruling</strong>, duly signed by the Members and certified in the prescribed manner, shall be sent to the <strong>applicant, the concerned officer and the jurisdictional officer.</strong></p>
      </li>
    </ol>
  `
},
{
  question_id: "IDT_SEP24_MTP_I_6b",
  source: "ICAI Mock Test Paper Series I - September 2024",
  chapter_name: [
    "Confidentiality of Information",
    "Section 158",
    "Inspection, Search and Seizure",
    "Section 67",
    "CGST Act, 2017"
  ],
  placement: 6,
  marks: 4,
  question_html: `
    <p><strong>Answer any one of the following:</strong></p>

    <p><strong>(i)</strong> Section 158(1) of the CGST Act, 2017 lays down that the information obtained by a public servant from the record of any proceeding under the CGST Act, 2017 is confidential and cannot be disclosed.</p>

    <p>Is there any exception to this rule? Discuss in brief.</p>

    <p><strong>OR</strong></p>

    <p><strong>(ii)</strong> Who can order for search and seizure under the provisions of the CGST Act, 2017?</p>
  `,
  solution_html: `
    <p><strong>Solution (i): Exceptions to confidentiality under section 158</strong></p>

    <p><strong>Yes.</strong> The confidential information can be disclosed by the public servant for certain specific purposes in terms of <strong>section 158(3) of the CGST Act, 2017</strong>. Such specific purposes are given in brief hereunder:</p>

    <ol type="i">
      <li>For prosecution.</li>
      <li>For carrying out the objects of the CGST Act.</li>
      <li>For service of notice or recovery of demand.</li>
      <li>For furnishing information to Court in a proceeding where Government is a party.</li>
      <li>For audit of tax receipts or refunds.</li>
      <li>For inquiry into the conduct of a GST officer.</li>
      <li>For enabling levy, realisation of any tax or duty.</li>
      <li>In lawful exercise of powers.</li>
      <li>For enquiry into a charge of misconduct by any professional.</li>
      <li>For data entry on automated system.</li>
      <li>For fulfilling the requirement under any other law and in public interest.</li>
    </ol>

    <hr>

    <p><strong>OR</strong></p>

    <p><strong>Solution (ii): Search and Seizure under the CGST Act, 2017</strong></p>

    <p>An officer of the rank of <strong>Joint Commissioner or above</strong> can authorize an officer in writing to carry out <strong>search and seize</strong> goods, documents, books or things.</p>

    <p>Such authorization can be given only where the <strong>Joint Commissioner/an officer above his rank has reasons to believe</strong> that any goods liable to confiscation or any documents or books or things relevant for any proceedings are hidden in any place.</p>

    <p>The <strong>Joint Commissioner/an officer above his rank</strong> empowered to authorize any officer to carry out search and seizure can <strong>himself also carry out search and seize</strong> such goods, documents or books or things.</p>
  `
},
{
  question_id: "IDT_SEP24_MTP_I_6c",
  source: "ICAI Mock Test Paper Series I - September 2024",
  chapter_name: [
    "Foreign Trade Policy",
    "Advance Authorisation",
    "Advance Authorisation for Annual Requirement"
  ],
  placement: 6,
  marks: 4,
  question_html: `
    <p><strong>State salient aspects of Advance Authorisation for annual requirements to exporters.</strong></p>
  `,
  solution_html: `
    <p>The salient aspects of <strong>Advance Authorisation for Annual Requirement</strong> are as follows:</p>

    <ol>
      <li>
        <p><strong>Annual Advance Authorisation</strong> is issued to exporters having <strong>past export performance in at least the preceding two financial years</strong>, to enable them to import the inputs required by them on an annual basis.</p>
      </li>

      <li>
        <p><strong>Advance Authorisation for Annual Requirement</strong> shall be issued <strong>only for items notified in SION</strong> and <strong>not on the basis of ad hoc norms</strong> under self-declared authorisations where SION does not exist.</p>
      </li>

      <li>
        <p><strong>Annual Advance Authorisation</strong>, in terms of <strong>CIF value of imports</strong>, will be granted up to <strong>300% of the FOB value of physical exports</strong> in the preceding financial year and/or <strong>FOR value of deemed exports</strong> in the preceding financial year, or <strong>₹1 crore</strong>, whichever is higher.</p>
      </li>
    </ol>
  `
}


];