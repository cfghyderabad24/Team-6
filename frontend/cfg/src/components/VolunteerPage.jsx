import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './VolunteerPage.css';
import VolunteerCard from './VolunteerCard';
import { fetchVolunteers } from '../services/VolunteerService';

const VolunteerPage = () => {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchVolunteers();
        setVolunteers(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching volunteers:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="volunteer-page">
      <header className="header">
        <h1>Volunteers</h1>
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
