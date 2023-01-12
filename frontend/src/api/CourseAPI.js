import axios from 'axios';

export const getCourseAll = async () => {
    const url = `${basedURL}courses`;
    const res = await axios.get(url);
    // localStorage.setItem('jwt', res.accessToken);
    // localStorage.setItem('role', res.role);
    console.log(res.message);
    return res.data;
};
export const basedURL = 'http://localhost:8080/api/'; // in dev ==> http://localhost:8080/api/
