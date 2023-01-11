import axios from 'axios';

export const basedURL = 'http://localhost:8080/api/'; // in dev ==> http://localhost:8080/api/

export const loginUser = async (data) => {
  const url = `${basedURL}auth/login`;
  const { data: res } = await axios.post(url, data);
  localStorage.setItem('jwt', res.accessToken);
  localStorage.setItem('role', res.role);
  console.log(res.message);
};

export const logoutUser = async (data) => {
  localStorage.removeItem('jwt');
  localStorage.removeItem('role');
};
