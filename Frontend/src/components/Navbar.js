import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    console.log('Selected Date:', e.target.value);
  };

  return (
    <header className="header">
      <div className="logo">
        <span role="img" aria-label="news">📰</span>
        <span className="logo-text">Talk Bharat</span>
      </div>

      <nav className="nav-links">
        <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink>
        <NavLink to="/category/World" className={({ isActive }) => isActive ? "active-link" : ""}>World</NavLink>
        <NavLink to="/category/politics" className={({ isActive }) => isActive ? "active-link" : ""}>Politics</NavLink>
        <NavLink to="/category/business" className={({ isActive }) => isActive ? "active-link" : ""}>Business</NavLink>
        <NavLink to="/category/live" className={({ isActive }) => isActive ? "active-link" : ""}>Bollywood</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : ""}>Contact</NavLink>
      </nav>

      <div className="header-right">
        <div className="search-bar">
          <input type="text" placeholder="Search news..." />
          <button>🔍</button>
        </div>
        <div className="date-picker">
          <input
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
