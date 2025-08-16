import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import TopNavbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import ArticlesPage from './components/ArticlesPage';
import CategoriesPage from './components/CategoriesPage';
import UsersPage from './components/UsersPage';
import NotificationsPage from './components/NotificationsPage';
import SettingsPage from './components/SettingsPage';
import InformationPage from './components/InformationPage';
import Login from './components/Login';
import NewsForm from './Pages/NewsForm';
import Update from './Pages/Update';
import BreakingNews from './Pages/BreakingNews';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = ({ children }) => (
  <div className="main-layout">
    <Sidebar />
    <TopNavbar />
    <div className="main-content">{children}</div>
  </div>
);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem('loggedIn');
    if (loggedIn === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

const handleLoginSuccess = (user) => {
  localStorage.setItem("loggedIn", "true");
  localStorage.setItem("username", user.name);
  localStorage.setItem("email", user.email);
  localStorage.setItem("role", user.role);
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
      <Routes>
        {/* Login Route */}
        <Route
          path="/login"
          element={
            isLoggedIn ? <Navigate to="/dashboard" /> : <Login setIsLoggedIn={setIsLoggedIn} />
          }
        />

        {/* Authenticated Routes */}
        {isLoggedIn && (
          <>
            <Route
              path="/"
              element={
                <Layout>
                  <div className="text-center p-5">Welcome to the Home Page</div>
                </Layout>
              }
            />

            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Layout>
                    <Dashboard />
                  </Layout>
                </PrivateRoute>
              }
            />

            <Route
              path="/articles"
              element={
                <PrivateRoute>
                  <Layout>
                    <ArticlesPage />
                  </Layout>
                </PrivateRoute>
              }
            />

            <Route
              path="/breakingNews"
              element={
                <PrivateRoute>
                  <Layout>
                    <BreakingNews />
                  </Layout>
                </PrivateRoute>
              }
            />

            <Route
              path="/update/:_id"
              element={
                <PrivateRoute>
                  <Layout>
                    <Update />
                  </Layout>
                </PrivateRoute>
              }
            />

            <Route
              path="/addNews"
              element={
                <PrivateRoute>
                  <Layout>
                    <NewsForm />
                  </Layout>
                </PrivateRoute>
              }
            />

            <Route
              path="/categories"
              element={
                <PrivateRoute>
                  <Layout>
                    <CategoriesPage />
                  </Layout>
                </PrivateRoute>
              }
            />

            <Route
              path="/users"
              element={
                <PrivateRoute>
                  <Layout>
                    <UsersPage />
                  </Layout>
                </PrivateRoute>
              }
            />

            <Route
              path="/notifications"
              element={
                <PrivateRoute>
                  <Layout>
                    <NotificationsPage />
                  </Layout>
                </PrivateRoute>
              }
            />

            <Route
              path="/settings"
              element={
                <PrivateRoute>
                  <Layout>
                    <SettingsPage />
                  </Layout>
                </PrivateRoute>
              }
            />

            <Route
              path="/information"
              element={
                <PrivateRoute>
                  <Layout>
                    <InformationPage />
                  </Layout>
                </PrivateRoute>
              }
            />
          </>
        )}

        {/* Catch-all Redirect */}
        <Route
          path="*"
          element={<Navigate to={isLoggedIn ? "/dashboard" : "/login"} replace />}
        />
      </Routes>
    </Router>
  );
}

export default App;
