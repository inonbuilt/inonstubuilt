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
}
];