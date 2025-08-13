import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import './Navbar.css';

const Navbar = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/category')
      .then((res) => setCategories(res.data))
      .catch((err) => console.error('Error fetching categories:', err));
  }, []);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    console.log('Selected Date:', e.target.value);
  };

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <span role="img" aria-label="news">📰</span>
        <span className="logo-text">Talk Bharat</span>
      </div>

      {/* Scrollable nav items in same line */}
      <nav className="nav-links category-scroll">
        <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink>
        {categories.map((cat) => (
          <NavLink
            key={cat._id}
            to={`/category/${cat.name}`}
            className={({ isActive }) => isActive ? "active-link" : ""}
          >
            {cat.name}
          </NavLink>
        ))}
        <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : ""}>Contact</NavLink>
      </nav>

      {/* Right side tools */}
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
