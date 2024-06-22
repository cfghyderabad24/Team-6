import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './UpdateStatusPage.css';
import { fetchVolunteerDetails, updateVolunteerStatus } from '../services/VolunteerService';

const UpdateStatusPage = ({ volunteers, setVolunteers }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [volunteer, setVolunteer] = useState(null);

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
    const finalStatus = status === 'accepted';

    try {
      await updateVolunteerStatus(id, comments, finalStatus);
      const updatedVolunteers = volunteers.map(v =>
        v.id === id ? { ...v, comments, status } : v
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

  return (
    <div className="update-status-page">
      <h1>Volunteer Checks</h1>
      <h2>{volunteer.studentName}'s Status</h2>
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
        <a href={`http://localhost:8080/api/applications/${id}/document/essay`} target="_blank" rel="noopener noreferrer">Preview Essay</a>
        <p><strong>Bank Records:</strong></p>
        <a href={`http://localhost:8080/api/applications/${id}/document/bankRecords`} target="_blank" rel="noopener noreferrer">Preview Bank Records</a>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default UpdateStatusPage;
