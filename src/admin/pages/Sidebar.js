// src/admin/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Link to external CSS

const Sidebar = () => (
  <div className="sidebar">
    <h4 className="sidebar-title">📰 News Admin</h4>
    <nav className="sidebar-nav">
      <Link to="/admin/dashboard" className="sidebar-link">Dashboard</Link>
      <Link to="/admin/categories" className="sidebar-link">Categories</Link>
      <Link to="/admin/articles" className="sidebar-link">Articles</Link>
      <Link to="/admin/users" className="sidebar-link">Users</Link>
      <Link to="/admin/comments" className="sidebar-link">Comments</Link>
      <Link to="/admin/notifications" className="sidebar-link">Notifications</Link>
      <Link to="/admin/settings" className="sidebar-link">Settings</Link>
      <Link to="/admin/information" className="sidebar-link">Information</Link>
    </nav>
  </div>
);

export default Sidebar;
