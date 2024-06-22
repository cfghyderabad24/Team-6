import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './Student.css';

ChartJS.register(ArcElement, Tooltip, Legend);

function Student() {
  const [studentData, setStudentData] = useState({
    totalRegistered: 35,
    passedNgoVerification: 20,
    passedVolunteerVerification: 12,
    presentStudents: 12,
  });

  useEffect(() => {
    // Replace with your actual API endpoint
    axios.get('/api/studentData')
      .then(response => {
        setStudentData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the student data!', error);
      });
  }, []);

  const pieData = {
    labels: [
      'Total Registered',
      'NGO Verified',
      'Volunteer Verified',
      'Present Students'
    ],
    datasets: [
      {
        data: [
          studentData.totalRegistered,
          studentData.passedNgoVerification,
          studentData.passedVolunteerVerification,
          studentData.presentStudents
        ],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4CAF50'
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4CAF50'
        ]
      }
    ]
  };

  const hardcodedStudents = [
    { id: 1, firstName: 'Manoj', lastName: 'Kumar', email: 'manoj@example.com' },
    { id: 2, firstName: 'Gayatri', lastName: 'Patil', email: 'gayatri@example.com' },
    { id: 3, firstName: 'Uday', lastName: 'Singh', email: 'uday@example.com' },
    { id: 4, firstName: 'Santosh', lastName: 'Reddy', email: 'santosh@example.com' },
    { id: 5, firstName: 'Suma', lastName: 'Rao', email: 'suma@example.com' },
    { id: 6, firstName: 'Dhiraj', lastName: 'Sharma', email: 'dhiraj@example.com' },
    { id: 7, firstName: 'Prathana', lastName: 'Mehta', email: 'prathana@example.com' },
    { id: 8, firstName: 'Vikas', lastName: 'Jain', email: 'vikas@example.com' },
    { id: 9, firstName: 'Sarla', lastName: 'Shah', email: 'sarla@example.com' },
    { id: 10, firstName: 'Manoj', lastName: 'Naik', email: 'manojn@example.com' },
    { id: 11, firstName: 'Rosy', lastName: 'Fernandes', email: 'rosy@example.com' },
    { id: 12, firstName: 'Neelam', lastName: 'Singh', email: 'neelam@example.com' },
  ];

  return (
    <div className="student-container">
      <h1>Student Information</h1>
      <table className="student-table">
        <thead>
          <tr>
            <th>Detail</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Total Students Registered</td>
            <td>{studentData.totalRegistered}</td>
          </tr>
          <tr>
            <td>Students Passed Partner NGO Verification</td>
            <td>{studentData.passedNgoVerification}</td>
          </tr>
          <tr>
            <td>Students Passed Volunteer Verification</td>
            <td>{studentData.passedVolunteerVerification}</td>
          </tr>
          <tr>
            <td>Present Students</td>
            <td>{studentData.presentStudents}</td>
          </tr>
        </tbody>
      </table>

      <div className="chart-container">
        <div className="pie-chart">
          <Pie data={pieData} />
        </div>
      </div>

      <h2>Student Data</h2>
      <table className="student-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {hardcodedStudents.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      
    </div>
  );
}

export default Student;
