// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopNavbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import ArticlesPage from './components/ArticlesPage';
import CategoriesPage from './components/CategoriesPage';
import UsersPage from './components/UsersPage';
//import MediaPage from './components/MediaPage';
import CommentsPage from './components/CommentsPage';
import NotificationsPage from './components/NotificationsPage';
import SettingsPage from './components/SettingsPage';
import InformationPage from './components/InformationPage';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem('loggedIn');
    if (loggedIn === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLoginSuccess} />;
  }

  return (
    <Router>
      <Sidebar onLogout={handleLogout} />
      <TopNavbar onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/users" element={<UsersPage />} />
        {/*<Route path="/media" element={<MediaPage />} />*/}
        <Route path="/comments" element={<CommentsPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/information" element={<InformationPage />} />
      </Routes>
    </Router>
  );
}

export default App;