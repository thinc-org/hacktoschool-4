import axios from 'axios';

const basedURL = 'http://localhost:8080/api/'; // in dev ==> http://localhost:8080/api/
const courseURL = `${basedURL}courses/`;

// USED when Authorization needed.
const config = {
  headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` },
};

export const getCourseAll = async () => {
  const url = courseURL;
  const res = await axios.get(url);
  // localStorage.setItem('jwt', res.accessToken);
  // localStorage.setItem('role', res.role);
  console.log(res.message);
  return res.data;
};

export const addCourse = async (title) => {
  const url = `${courseURL}/addCourse`;
  const res = await axios.post(url, { title: title }, config);
  console.log(res.message);
  return res.message;
};
