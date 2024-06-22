// src/NGOUpdateStatus.jsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './NGOUpdateStatus.css';

const NGOUpdateStatus = ({ students, setStudents }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const student = students.find(s => s.id === id);

  const [verifiedDocs, setVerifiedDocs] = useState({
    essay: false,
    panCard: false,
    aadharCard: false,
    markSheet: false,
    incomeStatement: false,
    parentBankPassbook: false,
    studentBankPassbook: false,
    currentYearFeeReceipt: false,
    feeStructure: false,
    casteCertificate: false,
    lastYearFeeReceipt: false,
    capRoundAdmission: false,
    studentLoan: false,
  });

  const [courseFeeDetails, setCourseFeeDetails] = useState({
    afterBenefits: '',
    paidSoFar: '',
  });

  const [remarks, setRemarks] = useState({
    courseFee: '',
    youPaid: '',
    paidByOthers: '',
  });

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setVerifiedDocs({ ...verifiedDocs, [name]: checked });
  };

  const handleCourseFeeChange = (e) => {
    const { name, value } = e.target;
    setCourseFeeDetails({ ...courseFeeDetails, [name]: value });
  };

  const handleRemarksChange = (e) => {
    const { name, value } = e.target;
    setRemarks({ ...remarks, [name]: value });
  };

  const handleSubmit = () => {
    const updatedStudents = students.filter(s => s.id !== id);
    setStudents(updatedStudents);
    navigate('/ngo');
  };

  return (
    <div className="ngo-update-status">
      <h1>Update Student Status</h1>
      <h2>{student.name}'s Status</h2>
      <form>
        <label>
          <input
            type="checkbox"
            name="essay"
            checked={verifiedDocs.essay}
            onChange={handleCheckboxChange}
          />
          <span>Essay - Hand Written</span>
        </label>
        <label>
          <input
            type="checkbox"
            name="panCard"
            checked={verifiedDocs.panCard}
            onChange={handleCheckboxChange}
          />
          <span>PAN Card - Student</span>
        </label>
        <label>
          <input
            type="checkbox"
            name="aadharCard"
            checked={verifiedDocs.aadharCard}
            onChange={handleCheckboxChange}
          />
          <span>Aadhar Card - Student</span>
        </label>
        <label>
          <input
            type="checkbox"
            name="markSheet"
            checked={verifiedDocs.markSheet}
            onChange={handleCheckboxChange}
          />
          <span>Mark-Sheet - 10/12/Last Year</span>
        </label>
        <label>
          <input
            type="checkbox"
            name="incomeStatement"
            checked={verifiedDocs.incomeStatement}
            onChange={handleCheckboxChange}
          />
          <span>Family Income Statement/BPL</span>
        </label>
        <label>
          <input
            type="checkbox"
            name="parentBankPassbook"
            checked={verifiedDocs.parentBankPassbook}
            onChange={handleCheckboxChange}
          />
          <span>Bank Passbook/Statement of Accounts of Parents</span>
        </label>
        <label>
          <input
            type="checkbox"
            name="studentBankPassbook"
            checked={verifiedDocs.studentBankPassbook}
            onChange={handleCheckboxChange}
          />
          <span>Bank Passbook/Statement of Account of Student</span>
        </label>
        <label>
          <input
            type="checkbox"
            name="currentYearFeeReceipt"
            checked={verifiedDocs.currentYearFeeReceipt}
            onChange={handleCheckboxChange}
          />
          <span>Current Year's Fee Receipt</span>
        </label>
        <label>
          <input
            type="checkbox"
            name="feeStructure"
            checked={verifiedDocs.feeStructure}
            onChange={handleCheckboxChange}
          />
          <span>Fees Structure Statement</span>
        </label>
        <label>
          <span>Course Fees for You after Deducting Benefits:</span>
          <input
            type="text"
            name="afterBenefits"
            value={courseFeeDetails.afterBenefits}
            onChange={handleCourseFeeChange}
          />
        </label>
        <label>
          <span>You Paid So Far:</span>
          <input
            type="text"
            name="paidSoFar"
            value={courseFeeDetails.paidSoFar}
            onChange={handleCourseFeeChange}
          />
        </label>
        <label>
          <input
            type="checkbox"
            name="casteCertificate"
            checked={verifiedDocs.casteCertificate}
            onChange={handleCheckboxChange}
          />
          <span>Caste Certificate (if any)</span>
        </label>
        <label>
          <input
            type="checkbox"
            name="lastYearFeeReceipt"
            checked={verifiedDocs.lastYearFeeReceipt}
            onChange={handleCheckboxChange}
          />
          <span>Last Year Fee Receipt</span>
        </label>
        <label>
          <span>Remarks on Course Fee:</span>
          <input
            type="text"
            name="courseFee"
            value={remarks.courseFee}
            onChange={handleRemarksChange}
          />
        </label>
        <label>
          <span>Remarks on You Paid:</span>
          <input
            type="text"
            name="youPaid"
            value={remarks.youPaid}
            onChange={handleRemarksChange}
          />
        </label>
        <label>
          <span>Remarks on Paid by Others:</span>
          <input
            type="text"
            name="paidByOthers"
            value={remarks.paidByOthers}
            onChange={handleRemarksChange}
          />
        </label>
        <label>
          <input
            type="checkbox"
            name="capRoundAdmission"
            checked={verifiedDocs.capRoundAdmission}
            onChange={handleCheckboxChange}
          />
          <span>CAP Round Admission Confirmation Letter</span>
        </label>
        <label>
          <input
            type="checkbox"
            name="studentLoan"
            checked={verifiedDocs.studentLoan}
            onChange={handleCheckboxChange}
          />
          <span>Student Loan, if any</span>
        </label>
        <button type="button" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default NGOUpdateStatus;
