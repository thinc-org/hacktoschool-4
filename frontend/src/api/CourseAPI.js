import axios from 'axios';
import { title } from 'process';
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


//GET /courses/username/:username
export const getCourseByUsername = async (username) => {
    const url = `${courseURL}username/${username}`;
    const res = await axios.get(url);
    return res.data;
}
export const getUnenrolledCourseByUsername = async (username) => {
    const url = `${courseURL}unenrolled/${username}`;
    const res = await axios.get(url, config);
    return res.data;
}

export const joinCourseByTitle = async (title) => {
    const url = `${basedURL}joinCourse/${title}`;
    const res = await axios.post(url, { title: title }, config);
    console.log(res.data);
}