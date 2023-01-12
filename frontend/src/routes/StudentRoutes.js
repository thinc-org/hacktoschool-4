import React from 'react';
import { Navigate } from 'react-router-dom';
import { isStudent } from '../api/AuthAPI';

const StudentRoute = ({ Component, to }) => {
  return isStudent() ? <Component /> : <Navigate to={to} />;
};

export default StudentRoute;
