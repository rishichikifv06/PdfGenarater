import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";

// Define the FormData interface
interface FormData {
  [key: string]: { answer?: string | string[] | undefined } | undefined;
  "FPC 1.3 - Group Name"?: { answer?: string };
  "FPC 1.4 - Company Name"?: { answer?: string };
  "FPC 1.12 - Total Number of Policy"?: { answer?: string };
  "FPC 2.5 - Direct Written Premium (Consent-to-Rate)"?: { answer?: string };
  "FPC 1.2 - FEIN lead company"?: { answer?: string };
  "FPC 1.5 - Mailing Address"?: { answer?: string };
  "FPC 1.6 - Contact Person"?: { answer?: string };
  "FPC 1.7 - Phone Number"?: { answer?: string };
  "FPC 1.10 - FAX Number"?: { answer?: string };
  "FPC 1.11 - 800 Number"?: { answer?: string };
  "FPC 1.14 - Signature of the authorized person"?: { answer?: string[] };
  "FPC 1.17 - Position with Company"?: { answer?: string };
  "FPC 2.3 - Mailing Address"?: { answer?: string };
  "FPC 2.4 - Company Contact Person"?: { answer?: string };
  "FPC 1.8 - Title"?: { answer?: string };
}

interface PdfDocumentProps {
  formData: FormData;
  Fimage: any;
}

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 11,
    fontFamily: "Helvetica",
  },
  headerContainer: {
    flexDirection: "row",
    marginBottom: 25,
  },
  imageContainer: {
    width: 70,
    height: 70,
    marginRight: 15,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  headerTextContainer: {
    flexGrow: 1,
  },
  headerTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
  headerSubTitle: {
    fontSize: 12,
  },
  formTitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  bodyText: {
    marginBottom: 12,
    lineHeight: 1.4,
  },
  underline: {
    textDecoration: "underline",
  },

  signatureText: {
    marginBottom: 10,
  },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    fontSize: 10,
  },

  feinContainer: {
    flexDirection: "row",
    marginBottom: 12,
    marginTop: 5,
  },
  feinBox: {
    width: 22,
    height: 22,
    border: "1px solid black",
    textAlign: "center",
    fontSize: 12,
    marginRight: 2,
    paddingTop: 3,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 12,
  },
  formSubtitle: {
    fontSize: 11,
    textAlign: "center",
    marginBottom: 10,
  },
  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  checkbox: {
    width: 12,
    height: 12,
    border: "1px solid black",
    marginRight: 8,
  },
  checkedBox: {
    width: 12,
    height: 12,
    border: "1px solid black",
    marginRight: 8,
    backgroundColor: "#000",
  },
  coverageCodesSection: {
    marginTop: 15,
    marginBottom: 15,
  },
  dualColumnSection: {
    flexDirection: "row",
    marginTop: 10,
  },
  column: {
    width: "50%",
    paddingRight: 10,
  },
  lineItem: {
    flexDirection: "row",
    marginBottom: 4,
  },
  companyInfoSection: {
    marginBottom: 10,
  },
  companyInfoItem: {
    marginBottom: 8,
  },
  companyInfoLabel: {
    fontWeight: "bold",
  },
  effectiveDateSection: {
    marginTop: 20,
    marginBottom: 20,
    borderTop: "1px solid #ccc",
    borderBottom: "1px solid #ccc",
    padding: "10px 0",
  },
  programNameSection: {
    marginTop: 25,
    borderTop: "1px solid #ccc",
    paddingTop: 10,
  },
  explanationSection: {
    marginTop: 15,
    fontStyle: "italic",
  },
  dateField: {
    marginTop: 10,
    fontWeight: "bold",
  },
  // Add these to your existing styles object
  signatureSection: {
    flexDirection: "row",
    marginTop: 40,
    marginBottom: 20,
  },
  signatureBox: {
    width: "45%",
    height: 180,
    border: "1px solid black",
  },
  signatureTitle: {
    fontWeight: "bold",
    padding: 5,
    borderBottom: "1px solid black",
  },
  emptySpace: {
    height: 30,
  },
  signatureName: {
    borderBottom: "1px solid black",
    padding: "3px 5px",
  },
  signatureLabel: {
    fontSize: 10,
    padding: "0px 5px 5px 5px",
  },
  orText: {
    width: "10%",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 12,
    marginTop: 70,
  },
});

const PdfDocument: React.FC<PdfDocumentProps> = ({ formData, Fimage }) => {
  // Format FEIN with individual boxes
  const fein = formData["FPC 1.2 - FEIN lead company"]?.answer || "36-1234567";
  const authority = "12345"; // Florida Certificate of Authority
  const premium =
    formData["FPC 2.5 - Direct Written Premium (Consent-to-Rate)"]?.answer ||
    "500,000";
  const groupName = formData["FPC 1.3 - Group Name"]?.answer || "Allstate";
  const companyName =
    formData["FPC 1.4 - Company Name"]?.answer || "Allstate Insurance Company";
  const mailingAddress =
    formData["FPC 2.3 - Mailing Address"]?.answer ||
    "2775 Sanders Road, Northbrook, IL 60062";
  const contactPerson =
    formData["FPC 2.4 - Company Contact Person"]?.answer || "Michael Johnson";
  const contactTitle =
    formData["FPC 1.8 - Title"]?.answer || "Compliance Officer";
  const phoneNumber =
    formData["FPC 1.7 - Phone Number"]?.answer || "(847) 555-1234";
  const faxNumber =
    formData["FPC 1.10 - FAX Number"]?.answer || "(847) 555-5678";
  const tollFreeNumber =
    formData["FPC 1.11 - 800 Number"]?.answer || "(800) 555-6789";
  const policies =
    formData["FPC 1.12 - Total Number of Policy"]?.answer || "50";
  const effectiveDate =
    (formData["FPC 1.14 - Signature of the authorized person"]?.answer ||
      [])[2] || "06/01/2024";
  const lineOfCoverage = "PPA Liability";

  return (
    <Document>
      {/* PAGE 1 - EXEMPTION FORM */}
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <View style={styles.imageContainer}>
            <Image src={Fimage} style={styles.image} />
          </View>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerTitle}>
              Office of Insurance Regulation
            </Text>
            <Text style={styles.headerSubTitle}>
              Bureau of Property & Casualty Forms and Rates
            </Text>
          </View>
        </View>

        {/* Form Title */}
        <Text style={styles.formTitle}>ANNUAL RATE FILING EXEMPTION</Text>

        {/* Body Text */}
        <Text style={styles.bodyText}>
          {groupName} requests to be exempt from making annual rate filings for
        </Text>
        <Text style={styles.bodyText}>
          {lineOfCoverage} because we have only {policies} policies in force in
          Florida.
        </Text>
        <Text style={styles.bodyText}>
          with an annual premium volume of $ {premium}. Exemption will continue
          in force until there is an increase in premium volume.
        </Text>

        {/* Signature Sections */}
        <View style={styles.signatureSection}>
          {/* Left Signature Box */}
          <View style={styles.signatureBox}>
         
          
            <View style={styles.emptySpace}></View>
            <Text style={styles.signatureName}></Text>
            <Text style={styles.signatureTitle}>Signature of Consultant</Text>
            <Text style={styles.signatureName}>John Doe</Text>
            <Text style={styles.signatureLabel}>Type Name of Title</Text>
            <Text style={styles.signatureName}>
              Authorized Company Employee
            </Text>
            <Text style={styles.signatureName}>
              Authorized Company Employee
            </Text>
            <Text style={styles.signatureName}>Jane Smith, Vice President</Text>
            <Text style={styles.signatureLabel}>Type Name & Title</Text>
          </View>

          {/* OR Text */}
          <Text style={styles.orText}>or</Text>

          {/* Right Signature Box */}
          <View style={styles.signatureBox}>
            <Text style={styles.signatureName}>John Doe</Text>
            <Text style={styles.signatureTitle}>Certifying Actuary or Experienced Company Ratemaker</Text>
            <Text style={styles.signatureName}>
              Authorized Company Employee
            </Text>
            <Text style={styles.signatureLabel}>Type Name & Title</Text>
            <Text style={styles.signatureName}>05/30/2024</Text>
            <Text style={styles.signatureLabel}>Date of Exemption</Text>
          </View>
        </View>

        {/* Footer */}
        <Text style={styles.footer}>OIR-B1-584 Rev. 7/03 Page 1 of 2</Text>
      </Page>

      {/* PAGE 2 - ANNUAL RATE FILING FORM */}
      <Page size="A4" style={styles.page}>
        {/* Form Title and Subtitles */}
        <Text style={styles.formTitle}>ANNUAL RATE FILING FORM</Text>
        <Text style={styles.formSubtitle}>
          ONLY ONE LINE OF BUSINESS PER FORM
        </Text>
        <Text style={styles.formSubtitle}>627.0645 F.S. - RULE 4-170.007</Text>

        {/* FEIN and Certificate of Authority Section */}
        <View style={styles.companyInfoSection}>
          <Text style={styles.companyInfoLabel}>1. FEIN (Lead Company):</Text>
          <View style={styles.feinContainer}>
            {fein.split("").map((digit, index) => (
              <Text key={`fein-${index}`} style={styles.feinBox}>
                {digit}
              </Text>
            ))}
          </View>

          <Text style={{ ...styles.companyInfoLabel, marginTop: 10 }}>
            FL Certificate of Authority:
          </Text>
          <View style={styles.feinContainer}>
            {authority.split("").map((digit, index) => (
              <Text key={`auth-${index}`} style={styles.feinBox}>
                {digit}
              </Text>
            ))}
          </View>
        </View>

        {/* Company Information */}
        <View style={styles.companyInfoSection}>
          <View style={styles.companyInfoItem}>
            <Text style={styles.companyInfoLabel}>
              2. Group Name: {groupName}
            </Text>
          </View>

          <View style={styles.companyInfoItem}>
            <Text style={styles.companyInfoLabel}>
              3. Company Name: {companyName}
            </Text>
          </View>

          <View style={styles.companyInfoItem}>
            <Text style={styles.companyInfoLabel}>
              4. Mailing Address: {mailingAddress}
            </Text>
          </View>

          <View style={styles.companyInfoItem}>
            <Text style={styles.companyInfoLabel}>
              5. Company Contact Person: {contactPerson} Title: {contactTitle}
            </Text>
          </View>

          <View style={styles.companyInfoItem}>
            <Text style={styles.companyInfoLabel}>
              {" "}
              Phone Number: {phoneNumber}
            </Text>
          </View>

          <View style={styles.companyInfoItem}>
            <Text style={styles.companyInfoLabel}>
              6. Provide your FAX number: {faxNumber} 800 number:{" "}
              {tollFreeNumber}
            </Text>
          </View>
        </View>

        {/* Effective Date Section */}
        <View style={styles.effectiveDateSection}>
          <Text style={styles.dateField}>
            EFFECTIVE DATE OF THIS FILING {effectiveDate}
          </Text>
        </View>

        {/* Type of Annual Filing and Coverage Codes Sections */}
        <Text
          style={{
            ...styles.sectionTitle,
            textAlign: "center",
            marginBottom: 10,
          }}
        >
          CHECK APPROPRIATE BOX
        </Text>

        <View style={styles.dualColumnSection}>
          {/* Left Column - Filing Types */}
          <View style={styles.column}>
            <Text style={styles.sectionTitle}>TYPE OF ANNUAL FILING</Text>
            <View style={styles.checkboxRow}>
              <View style={styles.checkbox}></View>
              <Text>CERTIFICATION - FORM OIR-B1-586</Text>
            </View>
            <View style={styles.checkboxRow}>
              <View style={styles.checkedBox}></View>
              <Text>EXEMPTION - FORM OIR-B1-584</Text>
            </View>
            <View style={styles.checkboxRow}>
              <View style={styles.checkbox}></View>
              <Text>EXTENSION *</Text>
            </View>
            <View style={styles.checkboxRow}>
              <View style={styles.checkbox}></View>
              <Text>OTHER *</Text>
            </View>
            <View style={styles.checkboxRow}>
              <View style={styles.checkbox}></View>
              <Text>NEW LINE *</Text>
            </View>
            <View style={styles.checkboxRow}>
              <View style={styles.checkbox}></View>
              <Text>REVISED DATE {effectiveDate}</Text>
            </View>
          </View>

          {/* Right Column - Coverage Codes */}
          <View style={styles.column}>
            <Text style={styles.sectionTitle}>COVERAGE CODES</Text>
            <View style={styles.checkboxRow}>
              <View style={styles.checkbox}></View>
              <Text>0101Q - DWELLING FIRE AND LIABILITY</Text>
            </View>
            <View style={styles.checkboxRow}>
              <View style={styles.checkbox}></View>
              <Text>040 - HOMEOWNERS</Text>
            </View>
            <View style={styles.checkboxRow}>
              <View style={styles.checkbox}></View>
              <Text>050 - COMMERCIAL MULTI PERIL</Text>
            </View>
            <View style={styles.checkboxRow}>
              <View style={styles.checkbox}></View>
              <Text>090 - PERSONAL INLAND MARINE</Text>
            </View>
            <View style={styles.checkboxRow}>
              <View style={styles.checkedBox}></View>
              <Text>192 - PPA LIABILITY</Text>
            </View>
            <View style={styles.checkboxRow}>
              <View style={styles.checkbox}></View>
              <Text>194 - COMMERCIAL AUTO LIABILITY</Text>
            </View>
            <View style={styles.checkboxRow}>
              <View style={styles.checkbox}></View>
              <Text>211 - PPA PHYSICAL DAMAGE</Text>
            </View>
            <View style={styles.checkboxRow}>
              <View style={styles.checkbox}></View>
              <Text>212 - COMMERCIAL AUTO PHYSICAL DAMAGE</Text>
            </View>
            <View style={styles.checkboxRow}>
              <View style={styles.checkbox}></View>
              <Text>540 - MOBILE HOME MULTIPLE PERIL</Text>
            </View>
            <View style={styles.checkboxRow}>
              <View style={styles.checkbox}></View>
              <Text>550 - MOBILE HOME PHYSICAL DAMAGE</Text>
            </View>
            <View style={styles.checkboxRow}>
              <View style={styles.checkbox}></View>
              <Text>1703U - PERSONAL LIABILITY</Text>
            </View>
            <View style={styles.checkboxRow}>
              <View style={styles.checkbox}></View>
              <Text>1703Z - PERSONAL UMBRELLA</Text>
            </View>
          </View>
        </View>

        {/* Program Name Section */}
        <View style={styles.programNameSection}>
          <Text>Allstate PPA Program</Text>
          <Text style={styles.companyInfoLabel}>NAME OF PROGRAM</Text>
        </View>

        {/* Explanation Section
        <View style={styles.explanationSection}>
          <Text>* EXPLANATION FOR THE ABOVE Test form</Text>
        </View> */}

        {/* Footer */}
        <Text style={styles.footer}>OIR-B1-584 Rev. 7/03 Page 2 of 2</Text>
      </Page>
    </Document>
  );
};

export default PdfDocument;
