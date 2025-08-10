import React from 'react';
import './TopNavbar.css'; // Dark theme + red accent

const TopNavbar = ({ onLogout }) => {
  return (
    <nav className="top-navbar">
      <div className="navbar-brand">News Admin Dashboard</div>
      <button className="logout-btn" onClick={onLogout}>Logout</button>
    </nav>
  );
};

export default TopNavbar;
