import React from 'react';
import {
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
} from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? 'sidebar-responsive' : ''}>
      <div className="sidebar-title">
        <div className="sidebar-brand" style={{ color: 'white' }}>
          UZ EIE
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        {/* Dashboard */}
        <li className="sidebar-list-item">
          <NavLink
            to="/dashboard"
            className="sidebar-link"
            activeClassName="active-link"
            style={({ isActive }) =>
              isActive ? { color: 'white', fontWeight: 'bold' } : undefined
            }
          >
            <BsGrid1X2Fill className="icon" /> Dashboard
          </NavLink>
        </li>

        {/* Vehicle Management */}
        <li className="sidebar-list-item">
          <NavLink
            to="/vehicle-management"
            className="sidebar-link"
            activeClassName="active-link"
            style={({ isActive }) =>
              isActive ? { color: 'white', fontWeight: 'bold' } : undefined
            }
          >
            <BsFillArchiveFill className="icon" /> Vehicle
          </NavLink>
        </li>

        {/* Tasks */}
        <li className="sidebar-list-item">
          <NavLink
            to="/taskAssignment"
            className="sidebar-link"
            activeClassName="active-link"
            style={({ isActive }) =>
              isActive ? { color: 'white', fontWeight: 'bold' } : undefined
            }
          >
            <BsFillGrid3X3GapFill className="icon" /> Tasks
          </NavLink>
        </li>

        {/* Reports */}
        <li className="sidebar-list-item">
          <NavLink
            to="/reportsPage"
            className="sidebar-link"
            activeClassName="active-link"
            style={({ isActive }) =>
              isActive ? { color: 'white', fontWeight: 'bold' } : undefined
            }
          >
            <BsPeopleFill className="icon" /> Reports
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
