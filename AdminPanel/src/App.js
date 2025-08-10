import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopNavbar from './components/Navbar';
import Dashboard1 from './Pages/Dashboard1';
import ArticlesPage from './components/ArticlesPage';
import CategoriesPage from './components/CategoriesPage';
import UsersPage from './components/UsersPage';
import NotificationsPage from './components/NotificationsPage';
import SettingsPage from './components/SettingsPage';
import InformationPage from './components/InformationPage';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewsDetailPage from './components/NewsDetailsPage';
import AddNews from './Pages/AddNews';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem('loggedIn');
    if (loggedIn === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLoginSuccess = () => {
    localStorage.setItem('loggedIn', 'true');
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    setIsLoggedIn(false);
  };

  const PrivateRoute = ({ children }) => {
    return isLoggedIn ? children : <Navigate to="/login" />;
  };

  return (
    <Router>
      {isLoggedIn && <Sidebar onLogout={handleLogout} />}
      {isLoggedIn && <TopNavbar onLogout={handleLogout} />}

      <Routes>
        {/* Public login route */}
        <Route
          path="/login"
          element={
            isLoggedIn ? <Navigate to="/dashboard" /> : <Login onLogin={handleLoginSuccess} />
          }
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard1 />
            </PrivateRoute>
          }
        />

        {/* Articles list */}
        <Route
          path="/articles"
          element={
            <PrivateRoute>
              <ArticlesPage />
            </PrivateRoute>
          }
        />

        {/* Single article view/edit (from ArticlesPage) */}
        <Route
          path="/articles/:id"
          element={
            <PrivateRoute>
              <NewsDetailPage />
            </PrivateRoute>
          }
        />

        {/* Add news */}
        <Route
          path="/addNews"
          element={
            <PrivateRoute>
              <AddNews />
            </PrivateRoute>
          }
        />

        {/* Other pages */}
        <Route
          path="/categories"
          element={
            <PrivateRoute>
              <CategoriesPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/users"
          element={
            <PrivateRoute>
              <UsersPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/notifications"
          element={
            <PrivateRoute>
              <NotificationsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <PrivateRoute>
              <SettingsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/information"
          element={
            <PrivateRoute>
              <InformationPage />
            </PrivateRoute>
          }
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to={isLoggedIn ? "/dashboard" : "/login"} />} />
      </Routes>
    </Router>
  );
}

export default App;
