import axios from 'axios';
import { ROLE_ENUM, ROLE } from '../util/Role';
import jwt_decode from 'jwt-decode';

export const basedURL = 'http://localhost:8080/api/'; // in dev ==> http://localhost:8080/api/

export const loginUser = async (data) => {
  const url = `${basedURL}auth/login`;
  const { data: res } = await axios.post(url, data);
  localStorage.setItem('jwt', res.accessToken);
  localStorage.setItem('role', res.role);
  localStorage.setItem('username', res.username);
  console.log(res.message);
};

export const logoutUser = async (data) => {
  localStorage.removeItem('jwt');
  localStorage.removeItem('role');
};

export const isAutheticated = () => {
  // if (typeof window == 'undefined') {
  //   return false;
  // }
  if (localStorage.getItem('jwt')) {
    return JSON.parse(localStorage.getItem('jwt'));
  } else {
    return false;
  }
};

export const isAdmin = () => {
  if (localStorage.getItem('role')) {
    const localStorageRole = localStorage.getItem('role');
    if (localStorageRole === ROLE.STUDENT) return true;
  }
  return false;
};

export const isInstructor = () => {
  if (localStorage.getItem('role')) {
    const localStorageRole = localStorage.getItem('role');
    if (localStorageRole === ROLE.INSTRUCTOR) return true;
  }
  return false;
};

export const isStudent = () => {
  if (localStorage.getItem('role')) {
    const localStorageRole = localStorage.getItem('role');
    if (localStorageRole === ROLE.STUDENT) return true;
  }
  return false;
};
