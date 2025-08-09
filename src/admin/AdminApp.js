import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import AddNews from './pages/AddNews';
import { useAdminAuth } from './AdminContext';
import './AdminApp.css'; // External CSS
import Sidebar from './pages/Sidebar'; // Import the sidebar
import CategoriesPage from './pages/CategoriesPage';
import InformationPage from './pages/InformationPage';
import SettingsPage from './pages/SettingsPage';
import ArticlesPage from './pages/ArticlesPage';
import AddArticlePage from './pages/AddArticlePage';

const AdminApp = () => {
  const { logout } = useAdminAuth();

  return (
    <div className="admin-app-container">
      <Sidebar /> {/* Sidebar on left */}

      <div className="admin-main-content">
        <header className="admin-header">
          <h2>🛠️ Admin Panel</h2>
          <nav className="admin-nav">
            <Link to="/admin/dashboard">Dashboard</Link>
            <Link to="/admin/add-news">Add News</Link>
            <button onClick={logout}>Logout</button>
          </nav>
        </header>

        <main className="admin-main">
          <Routes>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="add-news" element={<AddArticlePage />} />
            <Route path="articles" element={<ArticlesPage />} />
            <Route path="categories" element={<CategoriesPage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="information" element={<InformationPage />} />
            <Route path="articles/add" element={<AddArticlePage />} />
            <Route path="articles/edit/:id" element={<AddArticlePage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AdminApp;
