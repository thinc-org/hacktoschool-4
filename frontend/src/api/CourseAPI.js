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
  return res.data;
};

export const addCourse = async (title) => {
  const url = `${courseURL}addCourse`;
  const res = await axios.post(url, { title: title }, config);
  return res.data;
};

export const getCourseByTitle = async (title) => {
  const url = `${courseURL}title/${title}`;
  const res = await axios.get(url);
  return res.data;
};
