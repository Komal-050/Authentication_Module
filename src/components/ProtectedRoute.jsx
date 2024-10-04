import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ component: Component }) {
  const isAuthenticated = localStorage.getItem('authenticated'); 
  
  return isAuthenticated ? <Component /> : <Navigate to="/login" />; 
}

export default ProtectedRoute;
