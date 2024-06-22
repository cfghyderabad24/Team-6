import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './VolunteerDetails.css';
import { fetchVolunteerDetails, scheduleInterview } from '../services/VolunteerService';

const VolunteerDetails = () => {
  const { id } = useParams();
  const [volunteer, setVolunteer] = useState(null);
  const [interviewScheduled, setInterviewScheduled] = useState(false);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [mode, setMode] = useState('online');
  const [videoLink, setVideoLink] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchVolunteerDetails(id);
        setVolunteer(data);
      } catch (error) {
        console.error('Error fetching volunteer details:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleScheduleInterview = async () => {
    const interviewDetails = {
      date,
      time,
      mode,
      videoLink: mode === 'online' ? videoLink : '',
    };
    try {
      await scheduleInterview(volunteer.email, interviewDetails);
      setInterviewScheduled(true);
    } catch (error) {
      console.error('Error scheduling interview:', error);
    }
  };

  if (!volunteer) {
    return <div>Loading...</div>;
  }

  const handlePreviewPDF = () => {
    window.open(volunteer.documentUrl, '_blank');
  };

  return (
    <div className="volunteer-details">
      <h2>{volunteer.studentName}'s Details</h2>
      <p><strong>Form Number:</strong> {volunteer.formNumber}</p>
      <p><strong>Course Name:</strong> {volunteer.courseName}</p>
      <p><strong>Course Duration:</strong> {volunteer.courseDuration}</p>
      <p><strong>Current Year:</strong> {volunteer.currentYear}</p>
      <p><strong>Institute Name:</strong> {volunteer.instituteName}</p>
      <p><strong>Affiliated University:</strong> {volunteer.affiliatedUniversity}</p>
      <p><strong>Current Year Fee:</strong> {volunteer.currentYearFee}</p>
      <p><strong>Father's Name:</strong> {volunteer.fatherName}</p>
      <p><strong>Mother's Name:</strong> {volunteer.motherName}</p>
      <p><strong>Postal Address:</strong> {volunteer.postalAddress}</p>
      <p><strong>City:</strong> {volunteer.city}</p>
      <p><strong>Pin:</strong> {volunteer.pin}</p>
      <p><strong>State:</strong> {volunteer.state}</p>
      <p><strong>WhatsApp Number:</strong> {volunteer.whatsappNumber}</p>
      <p><strong>Alternate Mobile:</strong> {volunteer.alternateMobile}</p>
      <p><strong>Email:</strong> {volunteer.email}</p>
      <p><strong>Bank Account Number:</strong> {volunteer.bankAccountNumber}</p>

      <div className="document-preview">
        <h3>Document</h3>
        <p><strong>Document Name:</strong> {volunteer.documentName}</p>
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
        {mode === 'online' && (
          <label>
            Video Link:
            <input type="text" value={videoLink} onChange={(e) => setVideoLink(e.target.value)} />
          </label>
        )}
        <button onClick={handleScheduleInterview}>Schedule</button>
      </div>

      {interviewScheduled && (
        <div className="interview-scheduled">
          <h4>Interview Scheduled</h4>
          <p>Date: {date}</p>
          <p>Time: {time}</p>
          <p>Mode: {mode}</p>
          {mode === 'online' && <p>Video Link: {videoLink}</p>}
        </div>
      )}
    </div>
  );
};

export default VolunteerDetails;
