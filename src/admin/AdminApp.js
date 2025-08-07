import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import AddNews from './pages/AddNews';
import { useAdminAuth } from './AdminContext';

const AdminApp = () => {
  const { logout } = useAdminAuth();

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Admin Panel</h2>
      <nav>
        <Link to="/admin/dashboard">Dashboard</Link> |{" "}
        <Link to="/admin/add-news">Add News</Link> |{" "}
        <button onClick={logout}>Logout</button>
      </nav>
      <hr />
      <Routes>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="add-news" element={<AddNews />} />
      </Routes>
    </div>
  );
};

export default AdminApp;
