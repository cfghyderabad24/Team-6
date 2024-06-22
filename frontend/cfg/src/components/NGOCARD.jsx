import React from 'react';
import './NGOCARD.css';
import { useNavigate } from 'react-router-dom';

const NGOCARD = ({ id, name, phone, email, instituteName, status }) => {
  const navigate = useNavigate();

  const handleUpdateStatus = () => {
    navigate(`/ngo-update-status/${id}`);
  };

  const handleKnowMore = () => {
    navigate(`/ngo-details/${id}`);
  };

  return (
    <div className="ngo-card">
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

export default NGOCARD;
