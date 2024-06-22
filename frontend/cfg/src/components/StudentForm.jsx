import React, { useState } from 'react';
import { submitApplication } from '../services/ApplicationService';
import './StudentForm.css';

const StudentForm = () => {
  const [formData, setFormData] = useState({
    formNumber: '',
    studentName: '',
    courseName: '',
    courseDuration: '',
    currentYear: '',
    instituteName: '',
    affiliatedUniversity: '',
    currentYearFee: '',
    fatherName: '',
    motherName: '',
    postalAddress: '',
    city: '',
    pin: '',
    state: '',
    whatsappNumber: '',
    alternateMobile: '',
    email: '',
    bankAccountNumber: '',
    isRenewal: false,
  });

  const [files, setFiles] = useState({
    panCardFile: null,
    incomeProofFile: null,
    tenthCertificateFile: null,
    twelfthCertificateFile: null,
    bankStatementsFile: null,
    currentYearFeeReceiptFile: null,
    feeStructureFile: null,
    lastYearFeeReceiptsFile: null,
    essayFile: null,
    aadhaarCardFile: null,
    admissionConfirmationLetterFile: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFiles({
      ...files,
      [e.target.name]: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });
    Object.keys(files).forEach((key) => {
      data.append(key, files[key]);
    });

    try {
      const response = await submitApplication(data);
      console.log('Form submitted successfully:', response);
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-header">
          <img src="https://via.placeholder.com/150" alt="students" />
          <h1>Student Application Form</h1>
        </div>
        <div className="form-group">
          <label>Form Number</label>
          <input type="text" name="formNumber" value={formData.formNumber} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Student Name</label>
          <input type="text" name="studentName" value={formData.studentName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Course Name</label>
          <input type="text" name="courseName" value={formData.courseName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Course Duration</label>
          <input type="number" name="courseDuration" value={formData.courseDuration} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Current Year</label>
          <input type="number" name="currentYear" value={formData.currentYear} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Institute Name</label>
          <input type="text" name="instituteName" value={formData.instituteName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Affiliated University</label>
          <input type="text" name="affiliatedUniversity" value={formData.affiliatedUniversity} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Current Year Fee</label>
          <input type="number" name="currentYearFee" value={formData.currentYearFee} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Father Name</label>
          <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Mother Name</label>
          <input type="text" name="motherName" value={formData.motherName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Postal Address</label>
          <input type="text" name="postalAddress" value={formData.postalAddress} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>City</label>
          <input type="text" name="city" value={formData.city} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>PIN</label>
          <input type="text" name="pin" value={formData.pin} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>State</label>
          <input type="text" name="state" value={formData.state} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>WhatsApp Number</label>
          <input type="text" name="whatsappNumber" value={formData.whatsappNumber} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Alternate Mobile</label>
          <input type="text" name="alternateMobile" value={formData.alternateMobile} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Bank Account Number</label>
          <input type="text" name="bankAccountNumber" value={formData.bankAccountNumber} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>PAN Card</label>
          <input type="file" name="panCardFile" onChange={handleFileChange} />
        </div>
        <div className="form-group">
          <label>Income Proof</label>
          <input type="file" name="incomeProofFile" onChange={handleFileChange} />
        </div>
        <div className="form-group">
          <label>10th Certificate</label>
          <input type="file" name="tenthCertificateFile" onChange={handleFileChange} />
        </div>
        <div className="form-group">
          <label>12th Certificate</label>
          <input type="file" name="twelfthCertificateFile" onChange={handleFileChange} />
        </div>
        <div className="form-group">
          <label>Bank Statements</label>
          <input type="file" name="bankStatementsFile" onChange={handleFileChange} />
        </div>
        <div className="form-group">
          <label>Current Year Fee Receipt</label>
          <input type="file" name="currentYearFeeReceiptFile" onChange={handleFileChange} />
        </div>
        <div className="form-group">
          <label>Fee Structure</label>
          <input type="file" name="feeStructureFile" onChange={handleFileChange} />
        </div>
        <div className="form-group">
          <label>Last Year Fee Receipts</label>
          <input type="file" name="lastYearFeeReceiptsFile" onChange={handleFileChange} />
        </div>
        <div className="form-group">
          <label>Essay</label>
          <input type="file" name="essayFile" onChange={handleFileChange} />
        </div>
        <div className="form-group">
          <label>Aadhaar Card</label>
          <input type="file" name="aadhaarCardFile" onChange={handleFileChange} />
        </div>
        <div className="form-group">
          <label>Admission Confirmation Letter</label>
          <input type="file" name="admissionConfirmationLetterFile" onChange={handleFileChange} />
        </div>
        <div className="form-group">
          <label>Renewal</label>
          <input type="checkbox" name="isRenewal" checked={formData.isRenewal} onChange={(e) => setFormData({...formData, isRenewal: e.target.checked})} />
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;
