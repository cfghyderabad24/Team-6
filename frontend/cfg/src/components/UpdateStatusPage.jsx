import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './UpdateStatusPage.css';
import { fetchVolunteerDetails, updateVolunteerStatus } from '../services/VolunteerService';

const UpdateStatusPage = ({ volunteers, setVolunteers }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [volunteer, setVolunteer] = useState(null);

  const [documentVerified, setDocumentVerified] = useState(false);
  const [interviewCompleted, setInterviewCompleted] = useState(false);
  const [comments, setComments] = useState('');
  const [status, setStatus] = useState('pending');

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

  const handleSubmit = async () => {
    const statusUpdate = {
      documentVerified,
      interviewCompleted,
      comments,
      status,
    };

    try {
      await updateVolunteerStatus(id, statusUpdate);
      const updatedVolunteers = volunteers.map(v =>
        v.id === id ? { ...v, ...statusUpdate } : v
      );
      setVolunteers(updatedVolunteers);
      navigate('/');
    } catch (error) {
      console.error('Error updating volunteer status:', error);
    }
  };

  if (!volunteer) {
    return <div>Loading...</div>;
  }

  const handlePreviewPDF = (file) => {
    const url = URL.createObjectURL(new Blob([file], { type: 'application/pdf' }));
    window.open(url, '_blank');
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
      <label>
        Status:
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="pending">Pending</option>
          <option value="accepted">Accepted</option>
          <option value="rejected">Rejected</option>
        </select>
      </label>
      <div className="documents-section">
        <h3>Documents</h3>
        <p><strong>Essay:</strong></p>
        <button onClick={() => handlePreviewPDF(volunteer.essay)}>Preview Essay</button>
        <p><strong>Bank Records:</strong></p>
        <button onClick={() => handlePreviewPDF(volunteer.bankRecords)}>Preview Bank Records</button>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default UpdateStatusPage;
