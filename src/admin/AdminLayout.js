// src/admin/components/AdminLayout.js
import React from 'react';
import AdminApp from './AdminApp';
import Sidebar from './pages/Sidebar';
import './AdminApp.css';

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-app">
      <AdminApp />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main className="admin-main">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
