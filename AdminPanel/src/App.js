import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import TopNavbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import ArticlesPage from "./components/ArticlesPage";
import CategoriesPage from "./components/CategoriesPage";
import UsersPage from "./components/UsersPage";
import NotificationsPage from "./components/NotificationsPage";
import SettingsPage from "./components/SettingsPage";
import InformationPage from "./components/InformationPage";
import Login from "./components/Login";
import NewsForm from "./Pages/NewsForm";
import Update from "./Pages/Update";
import BreakingNews from "./Pages/BreakingNews";

import "bootstrap/dist/css/bootstrap.min.css";

// ✅ Layout now properly accepts `onLogout`
const Layout = ({ children, onLogout }) => (
  <div className="main-layout">
    <Sidebar />
    <TopNavbar onLogout={onLogout} />
    <div className="main-content">{children}</div>
  </div>
);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");
    const storedRole = localStorage.getItem("role");

    if (loggedIn === "true") {
      setIsLoggedIn(true);
      setRole(storedRole);
    }
  }, []);

  const handleLoginSuccess = (user) => {
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("username", user.name);
    localStorage.setItem("email", user.email);
    localStorage.setItem("role", user.role);

    setIsLoggedIn(true);
    setRole(user.role);
  };

  const handleLogout = () => {
    // ✅ Clear everything related to user
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("role");

    setIsLoggedIn(false);
    setRole(null);
  };

  const PrivateRoute = ({ children, allowedRoles }) => {
    if (!isLoggedIn) return <Navigate to="/login" />;

    if (allowedRoles && !allowedRoles.includes(role)) {
      return (
        <Layout onLogout={handleLogout}>
          <div className="text-center p-5 text-danger">
            🚫 Access Denied: You don’t have permission to view this page.
          </div>
        </Layout>
      );
    }

    return children;
  };

  return (
    <Router>
      <Routes>
        {/* Login Route */}
        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Navigate to="/dashboard" />
            ) : (
              <Login onLoginSuccess={handleLoginSuccess} />
            )
          }
        />

        {/* Authenticated Routes */}
        {isLoggedIn && (
          <>
            <Route
              path="/"
              element={
                <Layout onLogout={handleLogout}>
                  <div className="text-center p-5">Welcome to the Home Page</div>
                </Layout>
              }
            />

            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Layout onLogout={handleLogout}>
                    <Dashboard />
                  </Layout>
                </PrivateRoute>
              }
            />

            <Route
              path="/articles"
              element={
                <PrivateRoute>
                  <Layout onLogout={handleLogout}>
                    <ArticlesPage />
                  </Layout>
                </PrivateRoute>
              }
            />

            <Route
              path="/breakingNews"
              element={
                <PrivateRoute>
                  <Layout onLogout={handleLogout}>
                    <BreakingNews />
                  </Layout>
                </PrivateRoute>
              }
            />

            <Route
              path="/update/:_id"
              element={
                <PrivateRoute>
                  <Layout onLogout={handleLogout}>
                    <Update />
                  </Layout>
                </PrivateRoute>
              }
            />

            <Route
              path="/addNews"
              element={
                <PrivateRoute>
                  <Layout onLogout={handleLogout}>
                    <NewsForm />
                  </Layout>
                </PrivateRoute>
              }
            />

            <Route
              path="/categories"
              element={
                <PrivateRoute>
                  <Layout onLogout={handleLogout}>
                    <CategoriesPage />
                  </Layout>
                </PrivateRoute>
              }
            />

            <Route
              path="/users"
              element={
                <PrivateRoute allowedRoles={["admin"]}>
                  <Layout onLogout={handleLogout}>
                    <UsersPage />
                  </Layout>
                </PrivateRoute>
              }
            />

            <Route
              path="/notifications"
              element={
                <PrivateRoute allowedRoles={["admin", "editor"]}>
                  <Layout onLogout={handleLogout}>
                    <NotificationsPage />
                  </Layout>
                </PrivateRoute>
              }
            />

            <Route
              path="/settings"
              element={
                <PrivateRoute allowedRoles={["admin"]}>
                  <Layout onLogout={handleLogout}>
                    <SettingsPage />
                  </Layout>
                </PrivateRoute>
              }
            />

            <Route
              path="/information"
              element={
                <PrivateRoute>
                  <Layout onLogout={handleLogout}>
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
