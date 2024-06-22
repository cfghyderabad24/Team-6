import React, { useState } from 'react';
import './NGOPage.css';
import NGOCARD from './NGOCARD';

const NGOPage = ({ initialStudents }) => {
  const [students, setStudents] = useState(initialStudents);

  return (
    <div className="ngo-page">
      <header className="header">
        <h1>NGO</h1>
        <button className="logout-button">Log out</button>
      </header>
      <div className="card-container">
        {students.map(student => (
          <NGOCARD
            key={student.id}
            id={student.id}
            name={student.name}
            phone={student.phone}
            email={student.email}
            instituteName={student.instituteName}
            status={student.status}
          />
        ))}
      </div>
    </div>
  );
};

export default NGOPage;
