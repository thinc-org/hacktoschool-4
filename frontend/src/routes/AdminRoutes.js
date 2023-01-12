import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAdmin } from '../api/AuthAPI';

const AdminRoute = ({ Component, to }) => {
  return isAdmin() ? <Component /> : <Navigate to={to} />;
};

export default AdminRoute;
