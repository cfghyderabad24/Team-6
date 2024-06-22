import React from 'react';
import './FounderCard.css';
import { useNavigate } from 'react-router-dom';

const FounderCard = ({ id, name, phone, email, instituteName, status }) => {
  const navigate = useNavigate();

  const handleUpdateStatus = () => {
    navigate(`/founder-update-status/${id}`);
  };

  const handleKnowMore = () => {
    navigate(`/founder-details/${id}`);
  };

  return (
    <div className="founder-card">
      <div className="card-left">
        <div className="user-logo">👤</div>
        <div className="personal-info">
          <h2>{name}</h2>
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

export default FounderCard;
