import React, { useState } from 'react';
import './RenewalForm.css';

const RenewalForm = () => {
  const [formData, setFormData] = useState({
    formNumber: '',
    aadharNumber: '',
    studentName: '',
    fatherName: '',
    motherName: '',
    courseName: '',
    courseDuration: '',
    currentYear: '',
    currentYearFee: '',
    whatsappNumber: '',
    alternateMobile: '',
    email: '',
    postalAddress: '',
    city: '',
    state: '',
    pin: '',
    instituteName: '',
    affiliatedUniversity: '',
    bankAccountNumber: '',
    tenthScore: '',
    tenthCertificate: null,
    twelfthScore: '',
    twelfthCertificate: null,
    feeAmount: '',
    currentYearFeeReceipt: null,
    panCardFile: null,
    incomeProof: null,
    bankStatements: null,
    isRenewal: false, // New field for Renewal Form
    lastYearCourseName: '',
    lastYearInstitute: '',
    lastYearAffiliatedUniversity: '',
    lastYearFeePaid: '',
    lastYearScholarshipAmount: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key.endsWith('Certificate') || key.endsWith('Proof') || key.endsWith('Receipt') || key === 'panCard' || key === 'bankStatements') {
        data.append(key, formData[key]);
      } else {
        data.append(key, formData[key]);
      }
    });

    try {
      const response = await fetch('http://localhost:8080/api/applications/submitApplication', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        console.log('Form submitted successfully');
      } else {
        console.error('Error submitting form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-header">
          <img src="https://i.pinimg.com/originals/42/36/e8/4236e8efe43ae4a6c7f42c932aa3c01b.jpg" alt="students" />
          <h1>Student Application/Renewal Form</h1>
        </div>
        <div className="form-group">
          <label>Form Number</label>
          <input type="text" name="formNumber" value={formData.formNumber} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Aadhar Number</label>
          <input type="text" name="aadharNumber" value={formData.aadharNumber} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Student Name</label>
          <input type="text" name="studentName" value={formData.studentName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Father Name</label>
          <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Mother Name</label>
          <input type="text" name="motherName" value={formData.motherName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Course Name</label>
          <input type="text" name="courseName" value={formData.courseName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Course Duration (in months)</label>
          <input type="number" name="courseDuration" value={formData.courseDuration} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Current Year</label>
          <input type="number" name="currentYear" value={formData.currentYear} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Whatsapp Number</label>
          <input type="tel" name="whatsappNumber" value={formData.whatsappNumber} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Alternate Mobile</label>
          <input type="tel" name="alternateMobile" value={formData.alternateMobile} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Postal Address</label>
          <input type="text" name="postalAddress" value={formData.postalAddress} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>City</label>
          <input type="text" name="city" value={formData.city} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>State</label>
          <input type="text" name="state" value={formData.state} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Pin</label>
          <input type="text" name="pin" value={formData.pin} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Institute Name</label>
          <input type="text" name="instituteName" value={formData.instituteName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Affiliated University</label>
          <input type="text" name="affiliatedUniversity" value={formData.affiliatedUniversity} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Current Year Fee</label>
          <input type="number" name="currentYearFee" value={formData.currentYearFee} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Bank Account Number</label>
          <input type="number" name="bankAccountNumber" value={formData.bankAccountNumber} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>10th Score</label>
          <input type="text" name="tenthScore" value={formData.tenthScore} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>10th Certificate</label>
          <input type="file" name="tenthCertificate" onChange={handleFileChange} required />
        </div>
        <div className="form-group">
          <label>12th Score</label>
          <input type="text" name="twelfthScore" value={formData.twelfthScore} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>12th Certificate</label>
          <input type="file" name="twelfthCertificate" onChange={handleFileChange} required />
        </div>
        <div className="form-group">
          <label>Fee Amount</label>
          <input type="text" name="feeAmount" value={formData.feeAmount} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Current Year Fee Receipt</label>
          <input type="file" name="currentYearFeeReceipt" onChange={handleFileChange} required />
        </div>
        <div className="form-group">
          <label>Pan Card</label>
          <input type="file" name="panCard" onChange={handleFileChange} required />
        </div>
        <div className="form-group">
          <label>Income Proof</label>
          <input type="file" name="incomeProof" onChange={handleFileChange} required />
        </div>
        <div className="form-group">
          <label>Bank Statements</label>
          <input type="file" name="bankStatements" onChange={handleFileChange} required />
        </div>
        <div className="form-group">
          <label>
            <input type="checkbox" name="isRenewal" checked={formData.isRenewal} onChange={handleChange} />
            Renewal Form
          </label>
        </div>
        {formData.isRenewal && (
          <>
            <div className="form-group">
              <label>Last Year Course Name</label>
              <input type="text" name="lastYearCourseName" value={formData.lastYearCourseName} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Last Year Institute</label>
              <input type="text" name="lastYearInstitute" value={formData.lastYearInstitute} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Last Year Affiliated University</label>
              <input type="text" name="lastYearAffiliatedUniversity" value={formData.lastYearAffiliatedUniversity} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Last Year Fee Paid</label>
              <input type="number" name="lastYearFeePaid" value={formData.lastYearFeePaid} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Last Year Scholarship Amount</label>
              <input type="number" name="lastYearScholarshipAmount" value={formData.lastYearScholarshipAmount} onChange={handleChange} />
            </div>
          </>
        )}
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default RenewalForm;
