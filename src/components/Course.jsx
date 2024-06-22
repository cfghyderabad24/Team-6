import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import './Course.css';

const CourseWiseScholarship = () => {
  const pieData = {
    labels: [
      'Engineering', 'BSC', 'BBA', 'Others', 'Nursing', 'Diploma / ITI', 
      'BCA', 'Pharmacy', 'MBBS', 'Commerce', 'Physiotherapy', 'BCS', 
      'Architecture', 'Law'
    ],
    datasets: [
      {
        data: [51, 29, 18, 19, 13, 12, 12, 8, 4, 4, 3, 3, 3, 2],
        backgroundColor: [
          '#FF6384', '#36A2EB', '#FFCE56', '#FF9F40', '#4BC0C0', '#9966FF', 
          '#C9CBCF', '#FF6384', '#36A2EB', '#FFCE56', '#FF9F40', '#4BC0C0', 
          '#9966FF', '#C9CBCF'
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="course-wise-scholarship-container">
      <h2>COURSE WISE SCHOLARSHIP: CURRENT YEAR</h2>
      <div className="table-pie-container">
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Course</th>
                <th>FY' 23-24</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Engineering</td><td>51</td></tr>
              <tr><td>BSC</td><td>29</td></tr>
              <tr><td>BBA</td><td>18</td></tr>
              <tr><td>Others</td><td>19</td></tr>
              <tr><td>Nursing</td><td>13</td></tr>
              <tr><td>Diploma / ITI</td><td>12</td></tr>
              <tr><td>BCA</td><td>12</td></tr>
              <tr><td>Pharmacy</td><td>8</td></tr>
              <tr><td>MBBS</td><td>4</td></tr>
              <tr><td>Commerce</td><td>4</td></tr>
              <tr><td>Physiotherapy</td><td>3</td></tr>
              <tr><td>BCS</td><td>3</td></tr>
              <tr><td>Architecture</td><td>3</td></tr>
              <tr><td>Law</td><td>2</td></tr>
              <tr><td>Grand Total</td><td>181</td></tr>
            </tbody>
          </table>
        </div>
        <div className="pie-chart-container">
          <Pie data={pieData} />
        </div>
      </div>
    </div>
  );
};

export default CourseWiseScholarship;
