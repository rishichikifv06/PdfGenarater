import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 10,
    lineHeight: 1.5,
    fontFamily: 'Times-Roman',
  },
  header: {
    textAlign: 'center',
    marginBottom: 10, // Adjusted margin
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  // First page styles
  quarterRow: {
    flexDirection: 'row',
    marginBottom: 3, // Adjusted margin
  },
  checkboxContainer: {
    width: 12, // Adjusted size
    height: 12, // Adjusted size
    borderWidth: 1,
    borderColor: '#000',
    marginRight: 3, // Adjusted margin
  },
  quarterLabel: {
    marginLeft: 3, // Adjusted margin
    fontSize: 9,  // Adjusted font size
  },
  notSubjectText: {
    color: 'blue',
    marginTop: 3,  // Adjusted margin
    marginBottom: 5,   // Adjusted margin
    fontSize: 9,   // Adjusted font size
  },
  formItem: {
    marginBottom: 8, // Adjusted margin
  },
  formItemSmall: {
    marginBottom: 5, // Adjusted margin
  },
  numberLabel: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  labelNumber: {
    marginRight: 3, // Adjusted margin
    fontWeight: 'bold',
  },
  labelText: {
    color: 'black',
    fontWeight: 'bold',
  },
  field: {
    borderBottomWidth: 1,
    borderColor: '#000',
    paddingBottom: 2, // Adjusted padding
    marginTop: 1, // Adjusted margin
    height: 12, // Adjusted height
    fontSize: 9, // Adjusted font size
  },
  doubleField: {
    borderBottomWidth: 1,
    borderColor: '#000',
    paddingBottom: 3,
    marginTop: 2,
    height: 35,
  },
  feinContainer: {
    flexDirection: 'row',
    marginTop: 3, // Adjusted margin
  },
  feinBox: {
    width: 15, // Adjusted size
    height: 15, // Adjusted size
    borderWidth: 1,
    borderColor: '#000',
    marginRight: 1,
  },
  signatureSection: {
    marginTop: 10, // Adjusted margin
  },
  signatureRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 3, // Adjusted margin
    marginBottom: 5, // Adjusted margin
  },
  signatureField: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#000',
    marginRight: 10, // Adjusted margin
    fontSize: 9, // Adjusted font size
    height: 12, // Adjusted height
  },
  dateField: {
    width: '30%',
    borderBottomWidth: 1,
    borderColor: '#000',
    fontSize: 9, // Adjusted font size
    height: 12, // Adjusted height
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    fontSize: 8,
  },
  // Second page styles
  page2Header: {
    textAlign: 'center',
    marginBottom: 25,
  },
  companyNameField: {
    borderBottomWidth: 1,
    borderColor: '#000',
    paddingBottom: 3,
    marginTop: 2,
    marginBottom: 20,
  },
  noteText: {
    fontSize: 10,
    marginBottom: 25,
    lineHeight: 1.5,
  },
  sectionTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 15,
  },
  rateField: {
    borderBottomWidth: 1,
    borderColor: '#000',
    paddingBottom: 3,
    marginTop: 2,
    marginBottom: 15,
    marginLeft: 10,
  },
  rateLabel: {
    marginLeft: 10,
    marginBottom: 3,
  },
  fieldWithParenLabel: {
    marginLeft: 10,
    fontSize: 9,
    marginBottom: 1,
  },
  quarterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    width: '100%',
  },

  quarterColumn: {
    flexDirection: 'column',
    width: '48%', // Adjusted width for columns
  },
  smallText:{
     fontSize: 8,
  },
  
   page3: {
    padding: 30,
    fontSize: 9,
    lineHeight: 1.2,
    fontFamily: 'Times-Roman',
    textAlign: 'justify'
  },

   page3Header: {
    fontSize: 11,
    marginBottom: 5,
    fontWeight: 'bold',
    textAlign: 'center'
  },
});

// Define types for the form data
interface FormField {
  answer: string;
}

interface QuarterlyReportProps {
  formData: {
    "1st Quarter"?: FormField;
    "2nd Quarter"?: FormField;
    "3rd Quarter"?: FormField;
    "4th Quarter"?: FormField;
    "Not Subject"?: FormField;
    "FEIN (Lead Company)"?: FormField;
    "Group Name"?: FormField;
    "Company Name"?: FormField;
    "Mailing Address"?: FormField;
    "Contact Person"?: FormField;
    "Phone Number"?: FormField;
    "CEO Name"?: FormField;
    "CEO Mailing Address"?: FormField;
    "FAX Number"?: FormField;
    "800 Number"?: FormField;
    "Total number of policies"?: FormField;
    "Signature"?: FormField;
    "Date"?: FormField;
    "Typed Name"?: FormField;
    "Position"?: FormField;
    "Company Name (Page 2)"?: FormField;
    "Total A Rate Policies"?: FormField;
    "Total A Rate Premium"?: FormField;
    "Total Consent-to-Rate Policies"?: FormField;
    "Total Consent-to-Rate Premium"?: FormField;
  };
}

const QuarterlyReport: React.FC<QuarterlyReportProps> = ({ formData }) => (
  <Document>
    {/* First Page - Matching first image */}
    <Page size="LETTER" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.title}>FLORIDA PROPERTY & CASUALTY - QUARTERLY REPORT</Text>
        <Text style={styles.subtitle}>INDIVIDUALLY RATED RISKS</Text>
        <Text style={styles.subtitle}>("A" RATES) - (CONSENT-TO-RATE - EXCESS RATE)</Text>
      </View>

      <View style={{ marginBottom: 8 }}>
         <View style={styles.quarterContainer}>
            <View style={styles.quarterColumn}>
              <View style={styles.quarterRow}>
                <View style={styles.checkboxContainer}>
                  {formData["1st Quarter"]?.answer === "checked" && <Text style={styles.smallText}>X</Text>}
                </View>
                <Text style={styles.quarterLabel}>1st Quarter</Text>
              </View>

              <View style={styles.quarterRow}>
                <View style={styles.checkboxContainer}>
                  {formData["3rd Quarter"]?.answer === "checked" && <Text style={styles.smallText}>X</Text>}
                </View>
                <Text style={styles.quarterLabel}>3rd Quarter</Text>
              </View>
            </View>

            <View style={styles.quarterColumn}>
              <View style={styles.quarterRow}>
                <View style={styles.checkboxContainer}>
                  {formData["2nd Quarter"]?.answer === "checked" && <Text style={styles.smallText}>X</Text>}
                </View>
                <Text style={styles.quarterLabel}>2nd Quarter</Text>
              </View>

              <View style={styles.quarterRow}>
                <View style={styles.checkboxContainer}>
                  {formData["4th Quarter"]?.answer === "checked" && <Text style={styles.smallText}>X</Text>}
                </View>
                <Text style={styles.quarterLabel}>4th Quarter</Text>
              </View>
            </View>
          </View>


        <View style={styles.quarterRow}>
          <View style={styles.checkboxContainer}>
            {formData["Not Subject"]?.answer === "checked" && <Text style={styles.smallText}>X</Text>}
          </View>
          <Text style={styles.notSubjectText}>Company has not been subject to filing this form for the past four consecutive quarters.</Text>
        </View>
      </View>

      <View style={styles.formItem}>
        <View style={styles.numberLabel}>
          <Text style={styles.labelNumber}>1.</Text>
          <Text style={styles.labelText}>FEIN (Lead Company):</Text>
        </View>
        <View style={styles.feinContainer}>
          {Array(9).fill(0).map((_, i) => (
            <View key={i} style={styles.feinBox}>
              <Text style={{ textAlign: 'center', fontSize: 9 }}>
                {formData["FEIN (Lead Company)"]?.answer?.[i] || ""}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.formItem}>
        <View style={styles.numberLabel}>
          <Text style={styles.labelNumber}>2.</Text>
          <Text style={styles.labelText}>Group Name:</Text>
        </View>
        <Text style={styles.field}>{formData["Group Name"]?.answer || ""}</Text>
      </View>

      <View style={styles.formItem}>
        <View style={styles.numberLabel}>
          <Text style={styles.labelNumber}>3.</Text>
          <Text style={styles.labelText}>Company Name:</Text>
        </View>
        <Text style={styles.field}>{formData["Company Name"]?.answer || ""}</Text>
      </View>

      <View style={styles.formItem}>
        <View style={styles.numberLabel}>
          <Text style={styles.labelNumber}>4.</Text>
          <Text style={styles.labelText}>Mailing Address:</Text>
        </View>
        <Text style={styles.field}>{formData["Mailing Address"]?.answer || ""}</Text>
      </View>

      <View style={styles.formItem}>
        <View style={styles.numberLabel}>
          <Text style={styles.labelNumber}>5.</Text>
          <Text style={styles.labelText}>Contact Person:</Text>
        </View>
        <Text style={styles.field}>{formData["Contact Person"]?.answer || ""}</Text>
      </View>

      <View style={styles.formItemSmall}>
        <View style={styles.numberLabel}>
          <Text style={{ width: 30 }}></Text>
          <Text style={styles.labelText}>Phone Number:</Text>
        </View>
        <Text style={styles.field}>{formData["Phone Number"]?.answer || ""}</Text>
      </View>

      <View style={styles.formItem}>
        <View style={styles.numberLabel}>
          <Text style={styles.labelNumber}>6.</Text>
          <Text style={styles.labelText}>Chief Executive Officer's Name:</Text>
        </View>
        <Text style={styles.field}>{formData["CEO Name"]?.answer || ""}</Text>
      </View>

      <View style={styles.formItemSmall}>
        <View style={styles.numberLabel}>
          <Text style={{ width: 30 }}></Text>
          <Text style={styles.labelText}>Mailing Address:</Text>
        </View>
        <Text style={styles.field}>{formData["CEO Mailing Address"]?.answer || ""}</Text>
      </View>

      <View style={styles.formItem}>
        <View style={styles.numberLabel}>
          <Text style={styles.labelNumber}>7.</Text>
          <Text style={styles.labelText}>Provide your FAX number:</Text>
        </View>
        <Text style={styles.field}>{formData["FAX Number"]?.answer || ""}</Text>
      </View>

      <View style={styles.formItemSmall}>
        <View style={styles.numberLabel}>
          <Text style={{ width: 30 }}></Text>
          <Text style={styles.labelText}>800 number:</Text>
        </View>
        <Text style={styles.field}>{formData["800 Number"]?.answer || ""}</Text>
      </View>

      <View style={styles.formItemSmall}>
        <View style={styles.numberLabel}>
          <Text style={styles.labelNumber}>8.</Text>
          <Text style={styles.labelText}>Total number of policies:</Text>
        </View>
        <Text style={styles.field}>{formData["Total number of policies"]?.answer || ""}</Text>
      </View>

      <View style={styles.signatureSection}>
        <View style={styles.numberLabel}>
          <Text style={styles.labelNumber}>9.</Text>
          <Text style={{fontSize:9}}>
            I certify that I am authorized to make this Individually Rated Risk/Consent-to-Rate filing on behalf
            of the company, further that the information contained in related transmittals and the filing is true,
            complete, correct and, to the best of my knowledge, in compliance with all applicable state laws.
          </Text>
        </View>

        <View style={styles.signatureRow}>
          <Text style={styles.signatureField}>{formData["Signature"]?.answer || ""}</Text>
          <Text style={styles.dateField}>{formData["Date"]?.answer || ""}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 3 }}>
          <Text style={{ flex: 1, fontSize:9 }}>Signature</Text>
          <Text style={{ width: '30%', fontSize:9 }}>Date</Text>
        </View>

        <View style={styles.signatureRow}>
          <Text style={styles.signatureField}>{formData["Typed Name"]?.answer || ""}</Text>
          <Text style={styles.dateField}>{formData["Position"]?.answer || ""}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ flex: 1, fontSize:9 }}>Type Name</Text>
          <Text style={{ width: '30%', fontSize:9 }}>Position with company (Title)</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text>OIR-B1-588  Rev. 7/03</Text>
      </View>
    </Page>

     {/* Second Page - Matching second image */}
    <Page size="LETTER" style={styles.page}>
      <View style={styles.page2Header}>
        <Text style={styles.title}>PROPERTY & CASUALTY</Text>
        <Text style={styles.title}>INDIVIDUALLY RATED RISK</Text>
        <Text style={styles.title}>QUARTERLY REPORT</Text>
      </View>

      <View style={styles.formItem}>
        <Text style={styles.labelText}>Company Name:</Text>
        <Text style={styles.companyNameField}>{formData["Company Name (Page 2)"]?.answer || ""}</Text>
      </View>

      <Text style={styles.noteText}>
        Complete a separate report for each quarter beginning January 1 (1st quarter of January, February, March,
        1993). The first report due May 15, 1993. The reports are due 45 days after the close of each quarter.
      </Text>

      <Text style={styles.sectionTitle}>INDIVIDUALLY RATED ("A" RATE)</Text>

      <View style={styles.formItem}>
        <Text style={styles.rateLabel}>Total Number of Policies Individually</Text>
        <Text style={styles.fieldWithParenLabel}>Rated ("A" Rate)</Text>
        <Text style={styles.rateField}>{formData["Total A Rate Policies"]?.answer || ""}</Text>
      </View>

      <View style={styles.formItem}>
        <Text style={styles.rateLabel}>Total Direct Written Premium</Text>
        <Text style={styles.fieldWithParenLabel}>("A" Rate)</Text>
        <Text style={styles.rateField}>{formData["Total A Rate Premium"]?.answer || ""}</Text>
      </View>

      <Text style={styles.sectionTitle}>CONSENT-TO-RATE (EXCESS RATE)</Text>

      <View style={styles.formItem}>
        <Text style={styles.rateLabel}>Total Number of Policies Individually</Text>
        <Text style={styles.fieldWithParenLabel}>Rated (Consent-to-Rate)</Text>
        <Text style={styles.rateField}>{formData["Total Consent-to-Rate Policies"]?.answer || ""}</Text>
      </View>

      <View style={styles.formItem}>
        <Text style={styles.rateLabel}>Total Direct Written Premium</Text>
        <Text style={styles.fieldWithParenLabel}>(Consent-to-Rate)</Text>
        <Text style={styles.rateField}>{formData["Total Consent-to-Rate Premium"]?.answer || ""}</Text>
      </View>
    </Page>
    <Page size="LETTER" style={styles.page}>
  <View style={styles.header}>
    <Text>69O-137.008 Filing of Statistical and Quarterly Reports for Individually Rated Risks and Excess Rates.</Text>
  </View>
  <Text>
    (1) Purpose and Scope. The purpose of this rule is to provide procedures for filing statistical reports for individually rated risks pursuant to Section 627.062(3)(a), F.S., and for excess rates pursuant to Section 627.171, F.S., since they are not rated in accordance with the insurer’s rates, rating schedules, rating manuals, and underwriting rules which have been filed with the Office. Every insurer in this state which is authorized to transact any of the lines of insurance subject to Part II of Chapter 627, F.S., and which rates risks on an individual or excess basis shall be subject to this rule. Reports for individually rated risks and excess rates shall be received by the Office on a quarterly basis for each company. The information shall be reported within 45 days of the close of each quarter on Form OIR-B1-588, <Text style={{color: 'blue'}}>http://www.flrules.org/Gateway/reference.asp?No=Ref-08272</Text>, “Office of Insurance Regulation/Property & Casualty – Quarterly Report/Individually Rated Risks and Excess Rates,” rev. 7/03, which is hereby adopted and incorporated by reference. A quarterly report need not be filed if no individually rated risks or risks subject to excess rates have been written during the quarter for which the report would otherwise be due. However, if an insurer does not file Form OIR-B1-588 because of not having written such business for four consecutive quarters, then for the quarter after the fourth consecutive quarter for which no business was written, the insurer shall file Form OIR-B1-588 and check the box thereon indicating that the insurer has not been subject to filing for the past four consecutive quarters. The form may be obtained from <Text style={{color: 'blue'}}>http://www.floir.com/iportal</Text>. A separate report must be completed for each quarter. The reports are due 45 days after the close of each quarter.
  </Text>
  <Text>
    (2) Submitting the Report. Forms may be submitted by mailing a completed electronic version via email to <Text style={{color: 'blue'}}>OIRB1588@floir.com</Text> or by mailing a copy to Property and Casualty Product Review Unit, Office of Insurance Regulation, 200 E. Gaines St., Tallahassee, FL 32399-0330.
  </Text>
  <Text>
    Rulemaking Authority 624.308(1), 627.331(1) FS. Law Implemented 624.307(1), 624.418, 624.4211, 624.424(6), 627.062, 627.171, 627.331 FS. History–New 6-9-93, Amended 9-19-94, Formerly 4-137.008, Amended 7-30-17.
  </Text>
</Page>
  </Document>
);

export default QuarterlyReport;