import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCourseByTitle } from '../api/CourseAPI';

const CourseDetail = () => {
  const [course, setCourse] = useState({});
  const navigate = useNavigate();
  const { title } = useParams();
  useEffect(() => {
    getCourseByTitle(title)
      .then((course) => setCourse(course))
      .catch((e) => navigate('/courses'));
  }, []);

  return (
    //if that course is in that student list there will be no button
    <>
      <h2>Title</h2>
      <div>{course.title}</div>
      <h2>Description</h2>
      <div>{course.description}</div>
      <h2>Instructor</h2>
      <div>{course.instructor}</div>
      <h2>Announcement</h2>
      <div>{course.announcement}</div>
    </>
  );
};
export default CourseDetail;
