// src/components/Sidebar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation(); // track current path

  return (
    <div className="sidebar-container">
      <h5 className="sidebar-title">Talk Bharat Admin</h5>
      <nav className="sidebar-nav">
        <Link to="/dashboard" className={`sidebar-link ${location.pathname === '/dashboard' ? 'active' : ''}`}>Dashboard</Link>
        <Link to="/categories" className={`sidebar-link ${location.pathname === '/categories' ? 'active' : ''}`}>Categories</Link>
        <Link to="/contacted" className={`sidebar-link ${location.pathname === '/contacted' ? 'active' : ''}`}>Contacted Us</Link>
        <Link to="/breakingNews" className={`sidebar-link ${location.pathname === '/breakingNews' ? 'active' : ''}`}>BreakingNews</Link>
        <Link to="/articles" className={`sidebar-link ${location.pathname === '/articles' ? 'active' : ''}`}>Articles</Link>
        <Link to="/users" className={`sidebar-link ${location.pathname === '/users' ? 'active' : ''}`}>Users</Link>
        <Link to="/information" className={`sidebar-link ${location.pathname === '/information' ? 'active' : ''}`}>Information</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
