import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './RegistrationForm.css';

const RegistrationForm = ({ events, setEvents }) => {
  const { id } = useParams();
  const event = events.find(event => event.id === parseInt(id));
  const [studentDetails, setStudentDetails] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentDetails({ ...studentDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedEvents = events.map(ev => {
      if (ev.id === event.id) {
        return {
          ...ev,
          registeredStudents: [...ev.registeredStudents, { ...studentDetails, attendance: [] }]
        };
      }
      return ev;
    });
    setEvents(updatedEvents);
    // Optionally redirect or show success message
  };

  return (
    <div className="registration-form">
      <h2>Register for {event.title}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={studentDetails.name} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={studentDetails.email} onChange={handleChange} required />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
