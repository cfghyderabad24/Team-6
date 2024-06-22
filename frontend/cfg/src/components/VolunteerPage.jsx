// src/VolunteerPage.js
import React, { useState } from 'react';
import './VolunteerPage.css';
import VolunteerCard from './VolunteerCard';

const VolunteerPage = ({ initialVolunteers }) => {
  const [volunteers, setVolunteers] = useState(initialVolunteers);

  return (
    <div className="volunteer-page">
      <header className="header">
        <h1>Volunteer</h1>
        <button className="logout-button">Log out</button>
      </header>
      <div className="card-container">
        {volunteers.map(volunteer => (
          <VolunteerCard
            key={volunteer.id}
            id={volunteer.id}
            studentName={volunteer.studentName}
            phone={volunteer.whatsappNumber}
            email={volunteer.email}
            instituteName={volunteer.instituteName}
            status={volunteer.status}
          />
        ))}
      </div>
    </div>
  );
};

export default VolunteerPage;
