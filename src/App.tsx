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
  const [Formdata2,setFormdata2]=useState( {
    "1st Quarter": { answer: "" },
    "2nd Quarter": { answer: "" },
    "3rd Quarter": { answer: "" },
    "4th Quarter": { answer: "" },
    "FEIN (Lead Company)": { answer: "new data " },
    "Group Name": { answer: " updaetd " },
    "Company Name": { answer: "" },
    "Mailing Address": { answer: "" },
    "Contact Person": { answer: "" },
    "Phone Number": { answer: "" },
    "CEO Name": { answer: "" },
    "CEO Mailing Address": { answer: "" },
    "FAX Number": { answer: "" },
    "800 Number": { answer: "" },
    "Total number of policies": { answer: "" },
    "Signature": { answer: "" },
    "Date": { answer: "" },
    "Typed Name": { answer: "" },
    "Position": { answer: "" },
     // Second page fields
  "Company Name (Page 2)": { answer: "Example Insurance Company" },
  "Total A Rate Policies": { answer: "150" },
  "Total A Rate Premium": { answer: "$75,000" },
  "Total Consent-to-Rate Policies": { answer: "25" },
  "Total Consent-to-Rate Premium": { answer: "$15,000" },
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