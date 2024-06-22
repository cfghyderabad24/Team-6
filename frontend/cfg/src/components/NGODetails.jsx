import React from 'react';
import { useParams } from 'react-router-dom';
import './NGODetails.css';

const NGODetails = ({ students }) => {
  const { id } = useParams();
  const student = students.find(s => s.id === id);

  const handlePreviewPDF = () => {
    window.open(student.documentUrl, '_blank');
  };

  return (
    <div className="ngo-details">
      <h2>{student.name}'s Details</h2>
      <p><strong>Form Number:</strong> {student.formNumber}</p>
      <p><strong>Course Name:</strong> {student.courseName}</p>
      <p><strong>Course Duration:</strong> {student.courseDuration}</p>
      <p><strong>Current Year:</strong> {student.currentYear}</p>
      <p><strong>Institute Name:</strong> {student.instituteName}</p>
      <p><strong>Affiliated University:</strong> {student.affiliatedUniversity}</p>
      <p><strong>Current Year Fee:</strong> {student.currentYearFee}</p>
      <p><strong>Father's Name:</strong> {student.fatherName}</p>
      <p><strong>Mother's Name:</strong> {student.motherName}</p>
      <p><strong>Postal Address:</strong> {student.postalAddress}</p>
      <p><strong>City:</strong> {student.city}</p>
      <p><strong>Pin:</strong> {student.pin}</p>
      <p><strong>State:</strong> {student.state}</p>
      <p><strong>WhatsApp Number:</strong> {student.whatsappNumber}</p>
      <p><strong>Alternate Mobile:</strong> {student.alternateMobile}</p>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Bank Account Number:</strong> {student.bankAccountNumber}</p>

      <div className="document-preview">
        <h3>Document</h3>
        <p><strong>Document Name:</strong> {student.documentName}</p>
        <button onClick={handlePreviewPDF}>Preview PDF</button>
      </div>
    </div>
  );
};

export default NGODetails;
