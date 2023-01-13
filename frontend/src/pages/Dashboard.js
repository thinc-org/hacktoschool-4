import React, { useEffect, useState } from 'react';
import CardStyle from '../components/CourseCard.module.css';
import CourseCard from '../components/CourseCard';
import { getCourseByUsername } from '../api/CourseAPI';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  console.log('get');
  const [coursesByInst, setCoursesByInst] = useState([]);

  console.log('pain in the ass');
  useEffect(() => {
    console.log('pain in the ass2');
    getCourseByUsername(localStorage.getItem('username')).then((courses) =>
      setCoursesByInst(courses),
    );
    console.log('get courses from instr done');
    console.log(coursesByInst);
  }, []);

  return (
    <>
      <div style={{ margin: '30px', width: '100%' }}>
        <h1 className="courses-header"> DASHBOARD PAGE</h1>
        <div className={CardStyle.wrapper}>
          <div>
            {coursesByInst.map((course) => (
              <CourseCard
                course={course}
                isEnrolled={true}
                linkTo="dashboard"
              />
            ))}
          </div>
          {
            <Link to="../courses/create" className={CardStyle.course.a}>
              create
            </Link>
          }
        </div>
      </div>
    </>
  );
};

export default Dashboard;
