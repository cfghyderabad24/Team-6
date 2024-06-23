import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { IoAddCircleSharp } from 'react-icons/io5';
import InputVolunteer from './InputVolunteer';
import './Volunteer.css';

function Volunteer() {
  const [volunteers, setVolunteers] = useState([
    { id: 1, firstName: 'Prathana', lastName: '', email: 'Prathana@example.com', role: 'Event Organizer', experience: '3 years' },
    { id: 2, firstName: 'Vikas', lastName: '', email: 'Vikas@example.com', role: 'Community Outreach', experience: '2 years' },
    { id: 3, firstName: 'Sarla', lastName: '', email: 'Sarla@example.com', role: 'Community Outreach', experience: '2 years' },
    { id: 4, firstName: 'Sabitha', lastName: '', email: 'Manoj@example.com', role: 'Community Outreach', experience: '2 years' },
    { id: 5, firstName: 'Pranav', lastName: 'Joshi', email: 'Pranav@example.com', role: 'Community Outreach', experience: '2 years' },
    { id: 6, firstName: 'Rosy', lastName: '', email: 'Rosy@example.com', role: 'Community Outreach', experience: '2 years' },
    { id: 7, firstName: 'Dhiraj', lastName: '', email: 'Dhiraj@example.com', role: 'Foundation Officer', experience: '2 years' },
    { id: 8, firstName: 'Neelam', lastName: '', email: 'Neelam@example.com', role: 'Community Outreach', experience: '2 years' },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAdd = () => {
    setIsModalOpen(true);
  };

  const handleEdit = (id) => {
    alert(`Edit button clicked for id: ${id}`);
  };

  const handleDelete = (id) => {
    setVolunteers(volunteers.filter(volunteer => volunteer.id !== id));
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalSubmit = (newVolunteer) => {
    setVolunteers([...volunteers, { id: volunteers.length + 1, ...newVolunteer, role: 'New Volunteer', experience: '0 years' }]);
  };

  return (
    <div className="volunteer-container">
      <h1>Volunteer Information</h1>
      
      <div className="volunteer-grid">
        {volunteers.map((volunteer) => (
          <div className="volunteer-card" key={volunteer.id}>
            <h2>{volunteer.firstName} {volunteer.lastName}</h2>
            <p>Email: {volunteer.email}</p>
            <p>Role: {volunteer.role}</p>
            <p>Experience: {volunteer.experience}</p>
            <div className="card-actions">
              <button onClick={() => handleEdit(volunteer.id)}>
                <FaEdit /> Edit
              </button>
              <button onClick={() => handleDelete(volunteer.id)}>
                <MdDelete /> Delete
              </button>
            </div>
          </div>
        ))}
        <button className="add-button" onClick={handleAdd}>
        <IoAddCircleSharp /> Add Volunteer
      </button>
      </div>
      {isModalOpen && <InputVolunteer onClose={handleModalClose} onSubmit={handleModalSubmit} />}
    </div>
  );
}

export default Volunteer;
