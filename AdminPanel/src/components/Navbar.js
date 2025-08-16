import React from 'react';
import './TopNavbar.css'; // Dark theme + red accent

const TopNavbar = ({ onLogout }) => {
  const rawUsername = localStorage.getItem("username") || "User";
  const username = rawUsername.charAt(0).toUpperCase() + rawUsername.slice(1);

  return (
    <nav className="top-navbar">
      <div className="navbar-brand">Welcome, {username}</div>
      <button className="logout-btn" onClick={onLogout}>Logout</button>
    </nav>
  );
};

export default TopNavbar;
