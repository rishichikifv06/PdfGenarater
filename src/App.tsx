import React, { useState } from 'react';
import { PDFViewer, pdf } from '@react-pdf/renderer'; // Make sure to import pdf
import PdfDocument from './PdfDocument';
import Fimage from './Fimage.png';
import QuarterlyReport from './QuarterlyReport';

function App() {
  const [formData, setFormData] = useState({
    "FPC 1.3 - Group Name": { answer: "Example Group" },
    "FPC 1.4 - Company Name": { answer: "Example Company" },
    "FPC 1.12 - Total Number of Policy": { answer: "100" },
    "FPC 2.5 - Direct Written Premium (Consent-to-Rate)": { answer: "$50,000" },
    "FPC 1.2 - FEIN lead company": { answer: "123456789" },
    "FPC 1.5 - Mailing Address": { answer: "123 Main St, Anytown, FL" },
    "FPC 1.6 - Contact Person": { answer: "The contact person is John Doe." },
    "FPC 1.7 - Phone Number": { answer: "555-123-4567" },
    "FPC 1.10 - FAX Number": { answer: "555-987-6543" },
    "FPC 1.11 - 800 Number": { answer: "800-555-1111" },
    "FPC 1.14 - Signature of the authorized person": { answer: ["", "", "06/01/2024"] },
    "FPC 1.17 - Position with Company": { answer: "Manager" },
  });
  const [Formdata2,setFormdata2]=useState<Record<string, { question: string; answer: string }>>({
    'FPC 1.1 - Consent to Excess Rate Filing': {
      question: 'Select which quarterly this (A Rates) - (Consent to Rate - Excess Rate) belongs to?',
      answer: '1st Quarter',
    },
    'FPC 1.2 - FEIN lead company': {
      question: 'What is the Federal Employer Identification Number (FEIN) for the lead company?',
      answer: "76556565",
    },
    'FPC 1.3 - Group Name': {
      question: 'What is the group name?',
      answer: 'jhgjh',
    },
    'FPC 1.4 - Company Name': {
      question: 'What is the company name?',
      answer: 'jhsgdjv',
    },
    'FPC 1.5 - Mailing Address': {
      question: 'What is the mailing address of the company?',
      answer: 'jsdgvbh',
    },
    'FPC 1.6 - Contact Person': {
      question: 'Who is the contact person for this report?',
      answer: 'gbujybh',
    },
    'FPC 1.7 - Phone Number': {
      question: 'What is the phone number of the contact person?',
      answer: ' hgyuyg',
    },
    'FPC 1.8 - Chief Executive Officer’s Name': {
      question: 'What is the name of the Chief Executive Officer?',
      answer: 'yguygbjhb',
    },
    'FPC 1.9 - CEO Mailing Address': {
      question: 'What is the mailing address of the Chief Executive Officer?',
      answer: ' yfghfvjhb',
    },
    'FPC 1.10 - FAX Number': {
      question: 'What is the fax number for the company?',
      answer: 'uyhguyfgbu',
    },
    'FPC 1.11 - 800 Number': {
      question: 'What is the 800 number for the company?',
      answer: '6576576',
    },
    'FPC 1.12 - Total Number of Policy': {
      question: 'What is the total number of policies?',
      answer: 'gygjh',
    },
    'FPC 1.13 - Certify Authorization': {
      question:
        'Do you certify that you are authorized to make this Individually Rated Risk/Consent-to-Rate filing on behalf of the company and that the information contained in related transmittals and the filing is true, complete, correct, and in compliance with all applicable state laws?',
      answer: '8',
    },
    'FPC 1.14 - Signature of the authorized person': {
      question: 'Please provide the signature of the authorized person.',
      answer: 'ghgf',
    },
    'FPC 1.15 - Date of the certification': {
      question: 'What is the date of the certification?',
      answer: '09/08/2025',
    },
    'FPC 1.16 - Type Name': {
      question: 'What is the name of the person certifying the report?',
      answer: 'jhhgjhs',
    },
    'FPC 1.17 - Position with Company': {
      question: 'What is the position or title of the person certifying the report within the company?',
      answer: 'jhsxfd',
    },
    'FPC 2.1 - Company Name': {
      question: 'What is the company name?',
      answer: 'sxndbjvxc',
    },
    'FPC 2.2 - Policies Individually Rated (A - Rate)': {
      question: 'What is the total number of policies individually rated (A - Rate)?',
      answer: 'sdvsd',
    },
    'FPC 2.3 - Direct Written Premium (A - Rate)': {
      question: 'What is the total direct written premium for individually rated (A - Rate) policies?',
      answer: 'sdfgdbf',
    },
    'FPC 2.4 - Policies Individually Rated (Consent-to-Rate) ': {
      question: 'What is the total number of policies individually rated (Consent-to-Rate)?',
      answer: 'sdgdfnfgd',
    },
    'FPC 2.5 - Direct Written Premium (Consent-to-Rate)': {
      question: 'What is the total direct written premium for policies rated on a Consent-to-Rate basis?',
      answer: 'sdgdfnfgn',
    },
  })

  const handleDownload = async () => {
    // Generate the PDF document as a blob
    const blob = await pdf(
      <QuarterlyReport formData={Formdata2}/>
    ).toBlob();
    
    // Create a URL for the blob
    const url = URL.createObjectURL(blob);
    
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = url;
    link.download = "Florida_FLORIDA PROPERTY & CASUALTY - QUARTERLY REPORT INDIVIDUALLY RATED RISK (A-RATES) (CONSENT-TO-RATE-EXCESS RATE)_4th Quarter filing"; // Set default filename here
    
    // Append link to the body, click it, and remove it
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Clean up the URL object
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '10px', backgroundColor: '#f0f0f0' }}>
        <button 
          onClick={handleDownload}
          style={{
            padding: '8px 16px',
            backgroundColor: '#4285f4',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Download PDF
        </button>
      </div>
      <div style={{ flex: 1 }}>
        <PDFViewer style={{ width: '100%', height: '100%' }}>
          {/* <PdfDocument formData={formData} Fimage={Fimage} /> */}
          <QuarterlyReport formData={Formdata2}/>
        </PDFViewer>
      </div>
    </div>
  );
}

export default App;