import React from 'react';
import Charts from './components/Charts';
import Course from './components/Course';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="content-container">
        <div className="left-section">
          <Charts />
        </div>
        <div className="right-section">
          <Course />
        </div>
      </div>
    </div>
  );
}

export default App;
