import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './Student.css';

ChartJS.register(ArcElement, Tooltip, Legend);

function Student() {
  const [studentData, setStudentData] = useState({
    totalRegistered: 50,
    passedNgoVerification: 35,
    passedVolunteerVerification: 27,
    presentStudents: 27,
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
    </div>
  );
}

export default Student;
