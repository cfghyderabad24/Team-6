import React, { useState, useEffect } from 'react';
import './FoundersPage.css';
import FounderCard from './FounderCard';
import axios from 'axios';

const FoundersPage = () => {
  const [founders, setFounders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/admin/applications/final');
        setFounders(response.data);
      } catch (error) {
        console.error('Error fetching founders:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching founders: {error.message}</div>;
  }

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
