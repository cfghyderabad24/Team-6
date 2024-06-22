import React, { useState } from 'react';
import './FoundersPage.css';
import FounderCard from './FounderCard';

const FoundersPage = ({ initialFounders }) => {
  const [founders, setFounders] = useState(initialFounders);

  return (
    <div className="founders-page">
      <header className="header">
        <h1>Founders</h1>
        <button className="logout-button">Log out</button>
      </header>
      <div className="card-container">
        {founders.map(founder => (
          <FounderCard
            key={founder.id}
            id={founder.id}
            name={founder.name}
            phone={founder.phone}
            email={founder.email}
            instituteName={founder.instituteName}
            status={founder.status}
          />
        ))}
      </div>
    </div>
  );
};

export default FoundersPage;
