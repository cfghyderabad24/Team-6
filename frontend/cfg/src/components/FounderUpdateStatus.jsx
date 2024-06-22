// src/FounderUpdateStatus.js
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './FounderUpdateStatus.css';

const FounderUpdateStatus = ({ founders, setFounders }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const founder = founders.find(f => f.id === id);

  const [status, setStatus] = useState(founder.status);
  const [comments, setComments] = useState(founder.comments || '');
  const [payeeName, setPayeeName] = useState('');
  const [chequeNo, setChequeNo] = useState('');
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = () => {
    const updatedFounders = founders.filter(f => f.id !== id);
    setFounders(updatedFounders);
    navigate('/founders');
  };

  return (
    <div className="founder-update-status">
      <h1>Update Founder Status</h1>
      <h2>{founder.name}'s Status</h2>
      <label>
        Status:
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Accepted">Accepted</option>
          <option value="Rejected">Rejected</option>
        </select>
      </label>
      <label>
        Comments:
        <textarea
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />
      </label>
      <h3>Cheque Details</h3>
      <label>
        Payee Name:
        <input
          type="text"
          value={payeeName}
          onChange={(e) => setPayeeName(e.target.value)}
        />
      </label>
      <label>
        Cheque No:
        <input
          type="text"
          value={chequeNo}
          onChange={(e) => setChequeNo(e.target.value)}
        />
      </label>
      <label>
        Date:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <label>
        Amount:
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </label>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default FounderUpdateStatus;
