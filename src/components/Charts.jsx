import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import './Charts.css';

const ChartComponent = () => {
  const barData = {
    labels: ['2015-16', '2016-17', '2017-18', '2018-19', '2019-20', '2020-21', '2021-22', '2022-23', '2023-24'],
    datasets: [
      {
        label: 'Male',
        data: [2, 4, 3, 28, 57, 62, 64, 70, 101],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
      {
        label: 'Female',
        data: [6, 12, 13, 63, 67, 73, 76, 60, 80],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const pieData = {
    labels: ['Female', 'Male'],
    datasets: [
      {
        data: [450, 391],
        backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)'],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="chart-container">
      <h2>Year Wise Scholarship</h2>
      <div className="total-scholarship">
        <h3>Total Scholarship Given - 841</h3>
      </div>
      <div className="charts">
        <div className="pie-chart">
          <Pie data={pieData} />
        </div>
        <div className="bar-chart">
          <Bar data={barData} options={barOptions} />
        </div>
      </div>
    </div>
  );
};

export default ChartComponent;
