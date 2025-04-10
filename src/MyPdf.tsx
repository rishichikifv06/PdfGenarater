"use client";
import React, { useRef } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,

  Checkbox,
  Card,
} from "@mui/material";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { PDFDownloadLink, Document, Page, Text } from '@react-pdf/renderer';
import Fimage from "./Fimage.png";
const formData = {
  "FPC 1.1 - Consent to Excess Rate Filing": {
    question:
      "Select which quarterly this (A Rates) - (Consent to Rate - Excess Rate) belongs to?",
    answer: ["1st Quarter", "2nd Quarter", "3rd Quarter"],
  },
  "FPC 1.2 - FEIN lead company": {
    question:
      "What is the Federal Employer Identification Number (FEIN) for the lead company?",
    answer: "88-1467299",
  },
  "FPC 1.3 - Group Name": {
    question: "What is the group name?",
    answer: "Demo Insurance Company",
  },
  "FPC 1.4 - Company Name": {
    question: "What is the company name?",
    answer: "Demo Insurance Florida",
  },
  "FPC 1.5 - Mailing Address": {
    question: "What is the mailing address of the company?",
    answer: "2775 Sanders Road, Northbrook, IL 60062",
  },
  "FPC 1.6 - Contact Person": {
    question: "Who is the contact person for this report?",
    answer:
      "The contact person for the report of Demo Insurance Florida company is John Doe. You can reach him at (847) 555-1230.",
  },
  "FPC 1.7 - Phone Number": {
    question: "What is the phone number of the contact person?",
    answer: "(847) 555-1230",
  },
  "FPC 1.8 - Chief Executive Officer’s Name": {
    question: "What is the name of the Chief Executive Officer?",
    answer: "Jane Smith",
  },
  "FPC 1.9 - CEO Mailing Address": {
    question: "What is the mailing address of the Chief Executive Officer?",
    answer: "2775 Sanders Road, Northbrook, IL 60062",
  },
  "FPC 1.10 - FAX Number": {
    question: "What is the fax number for the company?",
    answer:
      "No fax number found for the company 'demoinsurance company' within the specified date range of 01/01/2024 to 11/20/2024.",
  },
  "FPC 1.11 - 800 Number": {
    question: "What is the 800 number for the company?",
    answer: "1-800-905-0217",
  },
  "FPC 1.12 - Total Number of Policy": {
    question: "What is the total number of policies?",
    answer: "41",
  },
  "FPC 1.13 - Certify Authorization": {
    question:
      "Do you certify that you are authorized to make this Individually Rated Risk/Consent-to-Rate filing on behalf of the company and that the information contained in related transmittals and the filing is true, complete, correct, and in compliance with all applicable state laws?",
    answer: "Yes",
  },
  "FPC 1.14 - Signature of the authorized person": {
    question: "Please provide the signature of the authorized person.",
    answer: ["05/30/2023", "05/23/2022", "05/30/2024", "06/01/2024"],
  },
  "FPC 1.15 - Date of the certification": {
    question: "What is the date of the certification?",
    answer: ["05/30/2023"],
  },
  "FPC 1.16 - Type Name": {
    question: "What is the name of the person certifying the report?",
    answer: "John Doe, Director of Regulatory Affairs",
  },
  "FPC 1.17 - Position with Company": {
    question:
      "What is the position or title of the person certifying the report within the company?",
    answer: "Director of Regulatory Affairs",
  },
  "FPC 2.1 - Company Name": {
    question: "What is the company name?",
    answer: "Demo Insurance Florida",
  },
  "FPC 2.2 - Policies Individually Rated (A - Rate)": {
    question:
      "What is the total number of policies individually rated (A - Rate)?",
    answer: "0",
  },
  "FPC 2.3 - Direct Written Premium (A - Rate)": {
    question:
      "What is the total direct written premium for individually rated (A - Rate) policies?",
    answer:
      "The total direct written premium for policies that are individually rated as 'A - Rate' is not available in the database. The SQL query returned a single result with a value of None for Total_Direct_Written_Premium.",
  },
  "FPC 2.4 - Policies Individually Rated (Consent-to-Rate) ": {
    question:
      "What is the total number of policies individually rated (Consent-to-Rate)?",
    answer: "8",
  },
  "FPC 2.5 - Direct Written Premium (Consent-to-Rate)": {
    question:
      "What is the total direct written premium for policies rated on a Consent-to-Rate basis?",
    answer: "$5,024,652.00",
  },
};

function MyPdf() {
  return (
    <Container>
    {/* First Page */}
    <Box >
      <Grid
        container
        //spacing={1} // Reduced spacing
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        // Full viewport height for vertical centering
      >
        {/* Image Section */}
        <Grid
          item
          xs={"auto"}
          style={{ textAlign: "center", marginRight: "40px" }}
        >
          <img
            src={Fimage}
            alt="Company Logo"
            style={{ maxWidth: "100%", height: "auto", display: "block" }}
          />
        </Grid>
  
        {/* Text Section */}
        <Grid
          item
          xs={"auto"}
          style={{ alignItems: "center", marginTop: 40 }}
        >
          <Typography variant="h4" gutterBottom>
            Office of Insurance Regulation
          </Typography>
          <Typography variant="h5" gutterBottom>
            Bureau of Property & Casualty Forms and Rates
          </Typography>
          <Typography variant="h6" gutterBottom>
            ANNUAL RATE FILING EXEMPTION
          </Typography>
        </Grid>
      </Grid>
  
      <Box
        sx={{ border: "1px solid #000", padding: "20px", marginTop: "20px" }}
      >
        <Grid container spacing={2}>
          {/* Company/Group Name */}
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>
                {formData["FPC 1.3 - Group Name"]?.answer ?? ""}
              </strong>{" "}
              requests to be exempt from making annual rate filings for
            </Typography>
          </Grid>
  
          {/* Line of Coverage and Number of Policies */}
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="(Company or Group)"
              defaultValue={formData["FPC 1.4 - Company Name"]?.answer ?? ""}
              variant="outlined"
              disabled
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="(Line of Coverage)"
              defaultValue={
                formData["FPC 1.12 - Total Number of Policy"]?.answer ?? ""
              }
              variant="outlined"
              disabled
            />
          </Grid>
  
          {/* Policies in Force */}
          <Grid item xs={12}>
            <Typography variant="body1">
              because we have only{" "}
              <strong>
                {formData["FPC 1.12 - Total Number of Policy"]?.answer ?? ""}
              </strong>{" "}
              policies in force in Florida.
            </Typography>
          </Grid>
  
          {/* Annual Premium Volume */}
          <Grid item xs={12}>
            <Typography variant="body1">
              with an annual premium volume of{" "}
              <strong>
                {formData[
                  "FPC 2.5 - Direct Written Premium (Consent-to-Rate)"
                ]?.answer ?? ""}
              </strong>
              .
            </Typography>
          </Grid>
  
          {/* Exemption Continuation */}
          <Grid item xs={12}>
            <Typography variant="body1">
              Exemption will continue in force until there is an increase in
              premium volume.
            </Typography>
          </Grid>
  
          <Grid container direction={"row"} spacing={2}>
            <Grid item xs={6}>
              {/* First Table */}
              <TableContainer
                component={Paper}
                sx={{ boxShadow: "none", border: "1px solid #ddd" }}
              >
                <Table sx={{ minWidth: 300 }} aria-label="signature table">
                  <TableBody>
                    <TableRow>
                      <TableCell></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="body1">
                          <strong>Signature of Consultant</strong>
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="body1">
                          <strong>John</strong>
                        </Typography>
                        <Typography variant="body2">
                          Type Name of Title
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="body1">
                        <strong>Jane Smith</strong>
                        </Typography>
                        <Typography variant="body2">
                          Authorized Company Employee
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="body1">
                          <strong>Jane Smith, Vice President</strong>
                        </Typography>
                        <Typography variant="body2">
                          Type Name & Title
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid
              item
              xs={1}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography variant="body1">or</Typography>
            </Grid>
            <Grid item xs={5}>
              {/* Second Table */}
              <TableContainer
                component={Paper}
                sx={{ boxShadow: "none", border: "1px solid #ddd" }}
              >
                <Table sx={{ minWidth: 300 }} aria-label="signature table">
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <Typography variant="body1">
                          <strong>John</strong>
                        </Typography>
                        <Typography variant="body2">
                          Certifying Actuary or Experienced Company Ratemaker
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="body1">
                        <strong>Jane Smith</strong>
                        </Typography>
                        <Typography variant="body2">
                          Type Name & Title
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="body1">
                          <strong>05/30/2024</strong>
                        </Typography>
                        <Typography variant="body2">
                          Date of Exemption
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Grid>
      </Box>
  
      {/* Footer */}
      <Typography variant="body2" align="center" sx={{ marginTop: "20px" }}>
        OIR-B1-584 Rev. 7/03 Page 1 of 2
      </Typography>
    </Box>
  
    {/* Second Page */}
    <Box  sx={{ marginTop: "40px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        ANNUAL RATE FILING FORM
      </Typography>
      <Typography variant="subtitle1" align="center" gutterBottom>
        ONLY ONE LINE OF BUSINESS PER FORM
      </Typography>
      <Typography variant="body2" align="center" gutterBottom>
        627.0643 F.S. - RULE 4-170.007
      </Typography>
  
      <Box
        sx={{ border: "1px solid #000", padding: "20px", marginTop: "20px" }}
      >
        <Grid container spacing={2}>
          {/* FEIN and FL Certificate */}
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>1. FEIN (Lead Company)</strong>
            </Typography>
            <Box sx={{ display: "flex", gap: "5px", marginTop: "10px" }}>
              {(
                (formData["FPC 1.2 - FEIN lead company"]?.answer as string) ??
                ""
              )
                .split("")
                .map((char, index) => (
                  <TextField
                    key={index}
                    value={char}
                    variant="outlined"
                    inputProps={{ style: { textAlign: "center" } }}
                    sx={{ width: "40px" }}
                    disabled
                  />
                ))}
            </Box>
            <Typography variant="body2" sx={{ marginTop: "10px" }}>
              FL Certificate of Authority:
            </Typography>
          </Grid>
  
          {/* Group Name */}
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>2. Group Name:</strong>{" "}
              {formData["FPC 1.3 - Group Name"]?.answer ?? ""}
            </Typography>
          </Grid>
  
          {/* Company Name */}
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>3. Company Name:</strong>{" "}
              {formData["FPC 1.4 - Company Name"]?.answer ?? ""}
            </Typography>
          </Grid>
  
          {/* Mailing Address */}
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>4. Mailing Address:</strong>{" "}
              {formData["FPC 1.5 - Mailing Address"]?.answer ?? ""}
            </Typography>
          </Grid>
  
          {/* Company Contact Person */}
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>5. Company Contact Person:</strong>
            </Typography>
            <Typography variant="body2">
              {(formData["FPC 1.6 - Contact Person"]?.answer as string)
                ?.split("is ")[1]
                ?.split(".")[0] ?? ""}
            </Typography>
            <Typography variant="body2">
              Title:{" "}
              {formData["FPC 1.17 - Position with Company"]?.answer ?? ""}
            </Typography>
          </Grid>
  
          {/* Phone, Fax, and Toll-Free Numbers */}
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>Phone Number:</strong>{" "}
              {formData["FPC 1.7 - Phone Number"]?.answer ?? ""}
            </Typography>
            <Typography variant="body1">
              <strong>Fax Number:</strong>{" "}
              {formData["FPC 1.10 - FAX Number"]?.answer ?? ""}
            </Typography>
            <Typography variant="body1">
              <strong>800 Number:</strong>{" "}
              {formData["FPC 1.11 - 800 Number"]?.answer ?? ""}
            </Typography>
          </Grid>
  
          {/* Effective Date */}
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>EFFECTIVE DATE OF THIS FILING:</strong>{" "}
              {(
                formData["FPC 1.14 - Signature of the authorized person"]
                  ?.answer as string[]
              )?.[2] ?? ""}
            </Typography>
          </Grid>
  
          {/* Check Appropriate Box */}
          <Grid container item xs={12} direction={"column"}>
            <Grid xs={6}>
              <TableContainer component={Paper}>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <strong>TYPE OF ANNUAL FILING</strong>
                      </TableCell>
                      <TableCell>
                        <strong>COVERAGE CODES</strong>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Checkbox /> CERTIFICATION
                      </TableCell>
                      <TableCell>FORM OIR-B1-586</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Checkbox /> EXEMPTION
                      </TableCell>
                      <TableCell>FORM OIR-B1-584</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Checkbox /> EXTENSION
                      </TableCell>
                      <TableCell>*</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Checkbox /> OTHER
                      </TableCell>
                      <TableCell>*</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Checkbox /> NEW LINE
                      </TableCell>
                      <TableCell>*</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Checkbox /> REVISED DATE
                      </TableCell>
                      <TableCell>06/01/2024</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              <Typography variant="body1" sx={{ marginTop: "20px" }}>
                <strong>
                  {" "}
                  {formData["FPC 1.3 - Group Name"]?.answer ?? ""}
                </strong>
              </Typography>
              <Typography variant="body1">
                <strong>NAME OF PROGRAM</strong>
              </Typography>
              <Typography variant="body2">
                * EXPLANATION FOR THE ABOVE Test form
              </Typography>
            </Grid>
            <Grid xs={6}>
              <TableContainer component={Paper}>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell colSpan={2}>
                        <strong>COVERAGE CODES</strong>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={2}>
                        <Checkbox /> 01010 - DWELLING FIRE AND LIABILITY
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={2}>
                        <Checkbox /> 040 - HOMEOWNERS
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={2}>
                        <Checkbox /> 050 - COMMERCIAL MULTI PERIL
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={2}>
                        <Checkbox /> 090 - PERSONAL INLAND MARINE
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={2}>
                        <Checkbox /> 192 - PPA LIABILITY
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={2}>
                        <Checkbox /> 194 - COMMERCIAL AUTO LIABILITY
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={2}>
                        <Checkbox /> 211 - PPA PHYSICAL DAMAGE
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={2}>
                        <Checkbox /> 212 - COMMERCIAL AUTO PHYSICAL DAMAGE
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={2}>
                        <Checkbox /> 540 - MOBILE HOME MULTIPLE PERIL
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={2}>
                        <Checkbox /> 550 - MOBILE HOME PHYSICAL DAMAGE
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={2}>
                        <Checkbox /> 1703U - PERSONAL LIABILITY
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={2}>
                        <Checkbox /> 1703Z - PERSONAL UMBRELLA
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Grid>
      </Box>
  
      {/* Footer */}
      <Typography variant="body2" align="center" sx={{ marginTop: "20px" }}>
        OIR-B1-584 Rev. 7/03 Page 2 of 2
      </Typography>
    </Box>
  
  
  </Container>
  )
}

export default MyPdf