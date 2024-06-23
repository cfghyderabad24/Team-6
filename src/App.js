import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Volunteer from './components/Volunteer';
import Student from './components/Student'; // Import the new Student component
import './App.css';
import Partner from './components/Partner';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  }

  return (
    <Router>
      <div className="app-container">
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} className="sidebar"/>
        <div className="main-content">
          <Routes>
          <Route path="/partner-ngo" element={<Partner />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/students" element={<Student />} /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
