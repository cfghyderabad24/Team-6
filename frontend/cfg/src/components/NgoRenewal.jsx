

  import React, { useState, useEffect } from 'react';
  import './NGOPage.css';
  import { fetchRenewalApplications, approveApplication } from '../services/ApplicationService';
  
  const NgoRenewal = () => {
    const [students, setStudents] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await fetchRenewalApplications();
          // Filter out applications where pngo_status is true
          const pendingApplications = data.filter(student => !student.pngoStatus);
          setStudents(pendingApplications);
        } catch (error) {
          console.error('Error fetching applications:', error);
        }
      };
  
      fetchData();
    }, []);
  
    const handleAction = async (id, action, remark) => {
      try {
        if (action === 'approve') {
          await approveApplication(id, remark);
        } else if (action === 'reject') {
          // await rejectApplication(id, remark);
        }
        // Update the local state to remove the application from the list
        setStudents(students.filter(student => student.id !== id));
      } catch (error) {
        console.error(`Error ${action} application:`, error);
      }
    };
  
    return (
      <div className="ngo-page">
        <header className="header">
          <h1>NGO</h1>
          <button className="logout-button">Log out</button>
        </header>
        <h1>Pending Applications</h1>
        <table className="applications-table">
          <thead>
            <tr>
              <th>Form Number</th>
              <th>Student Name</th>
              <th>Course Name</th>
              <th>Current Year</th>
              <th>Institute Name</th>
              <th>Documents</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id}>
                <td>{student.formNumber}</td>
                <td>{student.studentName}</td>
                <td>{student.courseName}</td>
                <td>{student.currentYear}</td>
                <td>{student.instituteName}</td>
                <td className="documents-cell">
                  <a href={`http://localhost:8080/api/applications/${student.id}/document/tenthCertificate`} target="_blank" rel="noopener noreferrer">10th Certificate</a><br />
                  <a href={`http://localhost:8080/api/applications/${student.id}/document/twelfthCertificate`} target="_blank" rel="noopener noreferrer">12th Certificate</a><br />
                  <a href={`http://localhost:8080/api/applications/${student.id}/document/bankStatements`} target="_blank" rel="noopener noreferrer">Bank Statements</a><br />
                  <a href={`http://localhost:8080/api/applications/${student.id}/document/aadhaarCard`} target="_blank" rel="noopener noreferrer">Aadhaar Card</a><br />
                  <a href={`http://localhost:8080/api/applications/${student.id}/document/panCard`} target="_blank" rel="noopener noreferrer">Pan Card</a><br />
                  <a href={`http://localhost:8080/api/applications/${student.id}/document/incomeProof`} target="_blank" rel="noopener noreferrer">Income Proof</a><br />
                  <a href={`http://localhost:8080/api/applications/${student.id}/document/currentYearFeeReceipt`} target="_blank" rel="noopener noreferrer">Current Year Fee Receipt</a><br />
                  <a href={`http://localhost:8080/api/applications/${student.id}/document/feeStructure`} target="_blank" rel="noopener noreferrer">Fee Structure</a><br />
                  <a href={`http://localhost:8080/api/applications/${student.id}/document/lastYearFeeReceipts`} target="_blank" rel="noopener noreferrer">Last Year Fee Receipts</a><br />
                  <a href={`http://localhost:8080/api/applications/${student.id}/document/essay`} target="_blank" rel="noopener noreferrer">Essay</a><br />
                  <a href={`http://localhost:8080/api/applications/${student.id}/document/admissionConfirmationLetter`} target="_blank" rel="noopener noreferrer">Admission Confirmation Letter</a>
                </td>
                <td className="action-cell">
                  <form onSubmit={e => {
                    e.preventDefault();
                    const remark = e.target.remark.value;
                    handleAction(student.id, 'approve', remark);
                  }}>
                    <input type="text" name="remark" placeholder="Remark" required className="remark-input"/>
                    <button type="submit" className="approve-button">Approve</button>
                  </form>
                  <form onSubmit={e => {
                    e.preventDefault();
                    const remark = e.target.remark.value;
                    handleAction(student.id, 'reject', remark);
                  }}>
                    <input type="text" name="remark" placeholder="Remark" required className="remark-input"/>
                    <button type="submit" className="reject-button">Reject</button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default NgoRenewal;
  