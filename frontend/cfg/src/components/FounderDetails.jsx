// src/FounderDetails.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './FounderDetails.css';

const FounderDetails = ({ founders }) => {
  const { id } = useParams();
  const founder = founders.find(f => f.id === id);

  const [interviewScheduled, setInterviewScheduled] = useState(false);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [mode, setMode] = useState('online');

  const handleScheduleInterview = () => {
    setInterviewScheduled(true);
  };

  const handlePreviewPDF = () => {
    window.open(founder.documentUrl, '_blank');
  };

  return (
    <div className="founder-details">
      <h2>{founder.name}'s Details</h2>
      <p><strong>Form Number:</strong> {founder.formNumber}</p>
      <p><strong>Course Name:</strong> {founder.courseName}</p>
      <p><strong>Course Duration:</strong> {founder.courseDuration}</p>
      <p><strong>Current Year:</strong> {founder.currentYear}</p>
      <p><strong>Institute Name:</strong> {founder.instituteName}</p>
      <p><strong>Affiliated University:</strong> {founder.affiliatedUniversity}</p>
      <p><strong>Current Year Fee:</strong> {founder.currentYearFee}</p>
      <p><strong>Father's Name:</strong> {founder.fatherName}</p>
      <p><strong>Mother's Name:</strong> {founder.motherName}</p>
      <p><strong>Postal Address:</strong> {founder.postalAddress}</p>
      <p><strong>City:</strong> {founder.city}</p>
      <p><strong>Pin:</strong> {founder.pin}</p>
      <p><strong>State:</strong> {founder.state}</p>
      <p><strong>WhatsApp Number:</strong> {founder.whatsappNumber}</p>
      <p><strong>Alternate Mobile:</strong> {founder.alternateMobile}</p>
      <p><strong>Email:</strong> {founder.email}</p>
      <p><strong>Bank Account Number:</strong> {founder.bankAccountNumber}</p>

      <div className="document-preview">
        <h3>Document</h3>
        <p><strong>Document Name:</strong> {founder.documentName}</p>
        <button onClick={handlePreviewPDF}>Preview PDF</button>
      </div>

      <div className="schedule-interview">
        <h3>Schedule Interview</h3>
        <label>
          Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <label>
          Time:
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
        </label>
        <label>
          Mode:
          <select value={mode} onChange={(e) => setMode(e.target.value)}>
            <option value="online">Online</option>
            <option value="offline">Offline</option>
          </select>
        </label>
        <button onClick={handleScheduleInterview}>Schedule</button>
      </div>

      {interviewScheduled && (
        <div className="interview-scheduled">
          <h4>Interview Scheduled</h4>
          <p>Date: {date}</p>
          <p>Time: {time}</p>
          <p>Mode: {mode}</p>
        </div>
      )}
    </div>
  );
};

export default FounderDetails;
