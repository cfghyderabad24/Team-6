import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './FounderUpdateStatus.css';

const FounderUpdateStatus = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [founder, setFounder] = useState(null);
  const [decision, setDecision] = useState('');
  const [remark, setRemark] = useState('');
  const [amount, setAmount] = useState('');
  const [chequeNumber, setChequeNumber] = useState('');
  const [chequeDate, setChequeDate] = useState('');
  const [chequePayee, setChequePayee] = useState('');

  useEffect(() => {
    const fetchFounderDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/admin/getById/${id}`);
        setFounder(response.data);
        setDecision(response.data.decision || '');
        setRemark(response.data.remark || '');
      } catch (error) {
        console.error('Error fetching founder details:', error);
      }
    };

    fetchFounderDetails();
  }, [id]);

  const handleSubmit = async () => {
    try {
      await axios.post(`http://localhost:8080/api/admin/applications/${id}/finalize`, null, {
        params: {
          decision,
          remark,
          amount,
          chequeNumber,
          chequeDate,
          chequePayee
        }
      });

      navigate('/founders');
    } catch (error) {
      console.error('Error finalizing application:', error);
    }
  };

  if (!founder) {
    return <div>Loading...</div>;
  }

  return (
    <div className="founder-update-status">
      <h1>Finalize Founder Application</h1>
      <h2>{founder.name}'s Status</h2>
      <label>
        Decision:
        <select value={decision} onChange={(e) => setDecision(e.target.value)}>
          <option value="Accepted">Accepted</option>
          <option value="Rejected">Rejected</option>
        </select>
      </label>
      <label>
        Remark:
        <textarea
          value={remark}
          onChange={(e) => setRemark(e.target.value)}
        />
      </label>
      <h3>Cheque Details</h3>
      <label>
        Amount:
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </label>
      <label>
        Cheque Number:
        <input
          type="text"
          value={chequeNumber}
          onChange={(e) => setChequeNumber(e.target.value)}
        />
      </label>
      <label>
        Cheque Date:
        <input
          type="date"
          value={chequeDate}
          onChange={(e) => setChequeDate(e.target.value)}
        />
      </label>
      <label>
        Cheque Payee:
        <input
          type="text"
          value={chequePayee}
          onChange={(e) => setChequePayee(e.target.value)}
        />
      </label>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default FounderUpdateStatus;
