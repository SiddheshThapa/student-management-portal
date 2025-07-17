import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = sessionStorage.getItem('isAuthenticated'); // 🔥

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default PrivateRoute;
