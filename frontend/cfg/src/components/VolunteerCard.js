// src/VolunteerCard.js
import React from 'react';
import './VolunteerCard.css';
import { useNavigate } from 'react-router-dom';

const VolunteerCard = ({ id, studentName, phone, email, instituteName, status }) => {
  const navigate = useNavigate();

  const handleUpdateStatus = () => {
    navigate(`/update-status/${id}`);
  };

  const handleKnowMore = () => {
    navigate(`/details/${id}`);
  };

  return (
    <div className="volunteer-card">
      <div className="card-left">
        <div className="user-logo">👤</div>
        <div className="personal-info">
          <h2>{studentName}</h2>
          <p><span role="img" aria-label="phone">📞</span> Tel: {phone}</p>
          <p><span role="img" aria-label="email">✉️</span> Email: {email}</p>
          <p>College: {instituteName}</p>
          <p>Status: {status}</p>
        </div>
      </div>
      <div className="card-buttons">
        <button className="update-status-button" onClick={handleUpdateStatus}>Update Status</button>
        <button className="know-more-button" onClick={handleKnowMore}>Know More</button>
      </div>
    </div>
  );
};

export default VolunteerCard;
