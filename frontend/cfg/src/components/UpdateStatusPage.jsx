// src/UpdateStatusPage.js
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './UpdateStatusPage.css';

const UpdateStatusPage = ({ volunteers, setVolunteers }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const volunteer = volunteers.find(v => v.id === id);

  const [documentVerified, setDocumentVerified] = useState(false);
  const [interviewCompleted, setInterviewCompleted] = useState(false);
  const [comments, setComments] = useState('');

  const handleSubmit = () => {
    const updatedVolunteers = volunteers.filter(v => v.id !== id);
    setVolunteers(updatedVolunteers);
    navigate('/');
  };

  return (
    <div className="update-status-page">
      <h1>Volunteer Checks</h1>
      <h2>{volunteer.studentName}'s Status</h2>
      <label>
        <input
          type="checkbox"
          checked={documentVerified}
          onChange={(e) => setDocumentVerified(e.target.checked)}
        />
        Document Verified
      </label>
      <label>
        <input
          type="checkbox"
          checked={interviewCompleted}
          onChange={(e) => setInterviewCompleted(e.target.checked)}
        />
        Interview Completed
      </label>
      <label>
        Comments:
        <textarea
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />
      </label>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default UpdateStatusPage;
