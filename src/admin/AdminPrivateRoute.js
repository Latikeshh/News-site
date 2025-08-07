import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAdminAuth } from './AdminContext';

const AdminPrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAdminAuth();

  if (!isAuthenticated) {
    return <Navigate to="/admin" />;
  }

  return children;
};

export default AdminPrivateRoute;
