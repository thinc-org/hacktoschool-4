import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { addCourse } from '../api/CourseAPI';

const CreateCourseForm = () => {
  const [data, setData] = useState({
    title: '',
    description: '',
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
      await addCourse(data.title);
      navigate('/dashboard');
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
        <h2>Create Course</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">title:</label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={handleChange}
            value={data.title}
            required
          ></input>
          <label htmlFor="description">description:</label>
          <input
            type="text"
            id="description"
            name="description"
            onChange={handleChange}
            value={data.description}
          ></input>
          {error && <div>{error}</div>}
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </>
  );
};

export default CreateCourseForm;
