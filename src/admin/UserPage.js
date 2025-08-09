// src/admin/pages/UsersPage.js
import React from 'react';
import AdminHeader from './AdminHeader';
import Sidebar from './Sidebar';
import '../AdminApp.css';

const UsersPage = () => {
  return (
    <div className="admin-app">
      <AdminHeader />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main className="admin-main">
          <h1>Manage Users</h1>
          {/* Page-specific content here */}
        </main>
      </div>
    </div>
  );
};

export default UsersPage;
