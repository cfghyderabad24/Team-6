import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './NGOPage.css';
import axios from 'axios';

const NgoRenewalUpdate = ({ students: propStudents, setStudents: propSetStudents }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [localStudents, setLocalStudents] = useState([]);
  const [student, setStudent] = useState(null);
  const [remark, setRemark] = useState('');

  const students = propStudents || localStudents;
  const setStudents = propSetStudents || setLocalStudents;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/applications/renewal');
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching applications:', error);
      }
    };

    fetchData();
  }, [setStudents]);

  useEffect(() => {
    if (students.length > 0) {
      const foundStudent = students.find(s => s.id === id);
      setStudent(foundStudent);
    }
  }, [students, id]);

  const handleAction = async (action) => {
    try {
      await axios.post(`http://localhost:8080/applications/${student.id}/${action}`, {
        remark,
      });

      setStudents(students.filter(s => s.id !== student.id));
      navigate('/ngo');
    } catch (error) {
      console.error(`Error ${action} application:`, error);
    }
  };

  if (students.length === 0) {
    return <div>Loading...</div>;
  }

  if (!student) {
    return <div>Student not found</div>;
  }

  return (
    <div className="ngo-update-status">
      <h1>Update Student Renewal Status</h1>
      <h2>{student.studentName}'s Status</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAction('approve');
        }}
      >
        <h3>Basic Information</h3>
        <label>
          <span>Name:</span>
          <input type="text" value={student.studentName} disabled />
        </label>
        <label>
          <span>Email:</span>
          <input type="text" value={student.email} disabled />
        </label>
        <label>
          <span>Fee Structure:</span>
          <input type="text" value={student.feeStructure} disabled />
        </label>

        <h3>Action</h3>
        <label>
          <span>Remark:</span>
          <input type="text" value={remark} onChange={(e) => setRemark(e.target.value)} required />
        </label>
        <button type="submit" className="approve-button">Approve</button>
      </form>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAction('reject');
        }}
      >
        <label>
          <span>Remark:</span>
          <input type="text" value={remark} onChange={(e) => setRemark(e.target.value)} required />
        </label>
        <button type="submit" className="reject-button">Reject</button>
      </form>
    </div>
  );
};

export default NgoRenewalUpdate;
