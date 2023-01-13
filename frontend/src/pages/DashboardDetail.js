import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCourseByTitle } from '../api/CourseAPI';
import { getStudentsByCourseTitle } from '../api/UserAPI';

const DashboardDetail = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();
  const { title } = useParams();
  useEffect(() => {
    getStudentsByCourseTitle(title)
      .then((students) => setStudents(students))
      .catch((e) => navigate('/dashboard'));
  }, []);
  console.log(students);
  return (
    //if that course is in that student list there will be no button
    <>
      <h2>Students</h2>
      {students.map((student) => {
        return <div key={student}>{student}</div>;
      })}
    </>
  );
};
export default DashboardDetail;
