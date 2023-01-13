import axios from 'axios';
import { config } from '../util/headerConfig';

const basedURL = 'http://localhost:8080/api/'; // in dev ==> http://localhost:8080/api/
const courseURL = `${basedURL}courses/`;

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

export const addCourseAnnouncement = async (data) => {
  const url = `${courseURL}announcement/add`;
  const res = await axios.post(url, data, config);
  console.log(res.data);
  return res.data;
};
