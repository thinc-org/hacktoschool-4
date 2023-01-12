import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAutheticated } from '../api/AuthAPI';

const PrivateRoute = ({ Component, to }) => {
  return isAutheticated() ? <Component /> : <Navigate to={to} />;
};

export default PrivateRoute;
