import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated, user, children }) => {
  if (!isAuthenticated || !user) {
    return <Navigate to="/auth/login" />;
  }
  return children;
};

export default ProtectedRoute;
