import axios from 'axios';

export const basedURL = 'http://localhost:8080/api/'; // in dev ==> http://localhost:8080/api/

export const registerUser = async (data) => {
  const url = `${basedURL}users/register`;
  const { data: res } = await axios.post(url, data);
  console.log(res.message);
};
