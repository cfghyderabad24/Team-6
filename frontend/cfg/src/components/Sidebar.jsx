import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill } from 'react-icons/bs';
import './Sidebar.css';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <div className='icon_header'> St. Bhatevara</div>
        </div>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <Link to="/partner-ngo">
            <BsFillArchiveFill className='icon' /> Partner NGO
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/volunteer">
            <BsFillGrid3X3GapFill className='icon' /> Volunteer
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/students">
            <BsPeopleFill className='icon' /> Students
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
