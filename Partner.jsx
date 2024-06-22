import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { IoAddCircleSharp } from 'react-icons/io5';
import InputPartner from './InputPartner';
import './Volunteer.css';

function Partner() {
  const [partners, setPartners] = useState([
    { id: 1, firstName: 'VSS', lastName: '', email: 'Prathana@example.com' },
    { id: 2, firstName: 'HMF', lastName: '', email: 'Vikas@example.com' },
    { id: 3, firstName: 'Snehalaya', lastName: '', email: 'Sarla@example.com' },
    { id: 4, firstName: 'MKSS', lastName: '', email: 'Manoj@example.com' },
    { id: 5, firstName: 'Shashwath', lastName: 'Joshi', email: 'Pranav@example.com' },
    { id: 6, firstName: 'Gram', lastName: 'Ujra', email: 'Rosy@example.com' },
    { id: 7, firstName: 'Ankur', lastName: '', email: 'Dhiraj@example.com' },
    { id: 8, firstName: 'Super', lastName: 'Paint', email: 'Neelam@example.com' },
    { id: 9, firstName: 'Jagruthi', lastName: '', email: 'Neelam@example.com' },
    { id: 10, firstName: 'Casp', lastName: '', email: 'Neelam@example.com' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  const handleAdd = () => {
    setEditData(null);
    setIsModalOpen(true);
  };

  const handleEdit = (partner) => {
    setEditData(partner);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    setPartners(partners.filter(partner => partner.id !== id));
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalSubmit = (newPartner) => {
    if (editData) {
      setPartners(partners.map(partner => partner.id === editData.id ? { ...partner, ...newPartner } : partner));
    } else {
      setPartners([...partners, { id: partners.length + 1, ...newPartner }]);
    }
  };

  return (
    <div className="volunteer-container">
      <h1>Partner NGO Information</h1>
      <div className="volunteer-grid">
        {partners.map((partner) => (
          <div className="volunteer-card" key={partner.id}>
            <h2>{partner.firstName} {partner.lastName}</h2>
            <p>Email: {partner.email}</p>
            <div className="card-actions">
              <button onClick={() => handleEdit(partner)}>
                <FaEdit /> Edit
              </button>
              <button onClick={() => handleDelete(partner.id)}>
                <MdDelete /> Delete
              </button>
            </div>
          </div>
        ))}
        <button className="add-button" onClick={handleAdd}>
          <IoAddCircleSharp /> Add Partner NGO
        </button>
      </div>
      {isModalOpen && <InputPartner onClose={handleModalClose} onSubmit={handleModalSubmit} initialData={editData} />}
    </div>
  );
}

export default Partner;
