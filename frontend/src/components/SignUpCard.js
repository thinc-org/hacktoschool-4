import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../api/UserAPI';
import "./SignInStyle.css";

const SignUpCard = () => {
  const [data, setData] = useState({
    username: '',
    password: '',
    role: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    console.log(input.name, input.value);
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(data); // I moved the function to api folder
      navigate('/sign-in');
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <h3>SIGN UP</h3>
          <label htmlFor="username">username:</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={handleChange}
            value={data.username}
            required
          ></input>
          <label htmlFor="password">password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            value={data.password}
            required
          ></input>

          <label>Please select your role:</label>
          <div>
            <input
              type="radio"
              id="student"
              name="role"
              value="Student"
              onChange={handleChange}
              required
            ></input>
            <label htmlFor="student">student</label>

            <input
              type="radio"
              id="instructor"
              name="role"
              value="Instructor"
              onChange={handleChange}
            ></input>
            <label htmlFor="instructor">instructor</label>
          </div>
          {error && <div>{error}</div>}
          <input type="submit" value="Submit" className='form-submit' ></input>
        </form>
      </div>
    </>
  );
};

export default SignUpCard;
