import React from 'react';
import './Navbar.css'; // Import the custom CSS file

const Navbar = () => {
  const user = JSON.parse(sessionStorage.getItem('user'));

  const handleLogout = () => {
    sessionStorage.removeItem('user');
    window.location.href = '/login';
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Home</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {!user ? (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="/partnerlogin">Partner Ngo</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/volunteerlogin">Volunteer</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/adminlogin">Admin</a>
                </li>
              </>
            ) : (
              <>
                {user.role === 'partner' && (
                  <>
                    <li className="nav-item">
                      <a className="nav-link" href="/partnerDashboard">Partner Dashboard</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/partnerProjects">Projects</a>
                    </li>
                  </>
                )}
                {user.role === 'volunteer' && (
                  <>
                    <li className="nav-item">
                      <a className="nav-link" href="/volunteerDashboard">Volunteer Dashboard</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/volunteerTasks">Tasks</a>
                    </li>
                  </>
                )}
                {user.role === 'admin' && (
                  <>
                    <li className="nav-item">
                      <a className="nav-link" href="/adminDashboard">Admin Dashboard</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/manageUsers">Manage Users</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/manageProjects">Manage Projects</a>
                    </li>
                  </>
                )}
                <li className="nav-item">
                  <button className="nav-link btn btn-link rounded-pill" onClick={handleLogout}>Logout</button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
