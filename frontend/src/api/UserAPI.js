import axios from 'axios';
import { config } from '../util/headerConfig';

const basedURL = 'http://localhost:8080/api/'; // in dev ==> http://localhost:8080/api/

export const registerUser = async (data) => {
  const url = `${basedURL}users/register`;
  const { data: res } = await axios.post(url, data);
  console.log(res.message);
};

export const getStudentsByCourseTitle = async (title) => {
  const url = `${basedURL}users/courseTitle/${title}`;
  const data = await axios.get(url, config);
  return data.data;
};
