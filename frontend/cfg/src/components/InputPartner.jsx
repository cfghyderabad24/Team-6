import React, { useState, useEffect } from 'react';
import './InputVolunteer.css';

function InputPartner({ onClose, onSubmit, initialData }) {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (initialData) {
      setFirstName(initialData.firstName || '');
      setEmail(initialData.email || '');
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ firstName, email });
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{initialData ? 'Edit Partner NGO' : 'Add New Partner NGO'}</h2>
        <form onSubmit={handleSubmit}>
          <label>
            First Name:
            <input 
              type="text" 
              value={firstName} 
              onChange={(e) => setFirstName(e.target.value)} 
              required 
            />
          </label>
          <label>
            Email:
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </label>
          <button type="submit">{initialData ? 'Update' : 'Submit'}</button>
        </form>
      </div>
    </div>
  );
}

export default InputPartner;
