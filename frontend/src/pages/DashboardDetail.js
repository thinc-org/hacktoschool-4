import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { addCourseAnnouncement, getCourseByTitle } from '../api/CourseAPI';
import { getStudentsByCourseTitle } from '../api/UserAPI';

const DashboardDetail = () => {
  const [students, setStudents] = useState([]);
  const [announcement, setAnnouncement] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { title } = useParams();
  useEffect(() => {
    getStudentsByCourseTitle(title)
      .then((students) => setStudents(students))
      .catch((e) => navigate('/dashboard'));
  }, []);

  const handleChange = ({ currentTarget: input }) => {
    setAnnouncement(input.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addCourseAnnouncement({ title: title, announcement: announcement });
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
    //if that course is in that student list there will be no button
    <>
      <h2>Students</h2>
      {students.map((student) => {
        return <div key={student}>{student}</div>;
      })}

      <form onSubmit={handleSubmit}>
        <label htmlFor="announcement">Announcement:</label>
        <input
          type="text"
          id="announcement"
          name="announcement"
          onChange={handleChange}
          value={announcement}
        />
        <input type="submit" value="Submit" className="form-submit"></input>
      </form>
    </>
  );
};

export default DashboardDetail;
