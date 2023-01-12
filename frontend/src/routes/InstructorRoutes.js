import React from 'react';
import { Navigate } from 'react-router-dom';
import { isInstructor } from '../api/AuthAPI';

const InstructorRoute = ({ Component, to }) => {
  return isInstructor() ? <Component /> : <Navigate to={to} />;
};

export default InstructorRoute;
