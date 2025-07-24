import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const trending = [
    "Modi addresses UN Assembly",
    "India vs Pakistan T20 Clash",
    "Sensex Hits Record High",
    "NEET 2025 Results Out",
    "New iPhone 17 Launched",
    "Chandrayaan 4 Mission Success",
    "IPL 2025 Schedule Announced",
    "Petrol Prices Drop Nationwide",
    "Monsoon Arrives Early",
    "Budget 2025 Live Updates"
  ];

  return (
    <div className="sidebar-wrapper">
      {/* Heading */}
      <div className="sidebar-heading">
        <span className="fire-icon">🔥</span>
        <h5 className="trending-title">Trending Now</h5>
      </div>

      {/* Scrollable Trending List */}
      <div className="trending-list">
        <ul className="list-unstyled mb-0">
          {trending.map((item, i) => (
            <li key={i} className="trending-item">
              <span className="bullet-icon">●</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
