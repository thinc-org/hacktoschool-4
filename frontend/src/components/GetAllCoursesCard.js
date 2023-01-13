import React, { useEffect, useState } from 'react';
import CourseCard from './CourseCard';
import CardStyle from './CourseCard.module.css';
import { isStudent, isInstructor } from '../api/AuthAPI';
import { Link, useNavigate } from 'react-router-dom';
import {
  getCourseAll,
  getCourseByUsername,
  getUnenrolledCourseByUsername,
} from '../api/CourseAPI';

const GetAllCoursesCard = () => {
  const [allCourses, setAllCourses] = useState([]);
  const [unEnrolledCourses, setUnEnrolledCourses] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  useEffect(() => {
    if (isStudent()) {
      // test with all courses
      getUnenrolledCourseByUsername(localStorage.getItem('username')).then(
        (courses) => setUnEnrolledCourses(courses),
      );
      getCourseByUsername(localStorage.getItem('username')).then((courses) =>
        setEnrolledCourses(courses),
      );
      console.log('logged in');
    } else {
      getCourseAll().then((courses) => setAllCourses(courses));
    }
  }, []);
  //since res use await which takes time, getCourseAll will take more time and then work itself later on

  return (
    <>
      <div style={{ margin: '30px' }}>
        <div className="courses-header">
          <h1>Courses</h1>
        </div>
        <div className="courses " style={{ alignContent: 'left' }}>
          <div className={CardStyle.wrapper}>
            {/* ^^might add wrapper css */}
            <div
              className="course"
              style={{ width: '100%', marginRight: '30px' }}
            >
              <div>
                {isStudent() ? (
                  <>
                    <div className="courses-header">enrolled</div>
                    <div>
                      {enrolledCourses.map((course) => (
                        <CourseCard course={course} isEnrolled={true} />
                      ))}
                    </div>
                    <hr></hr>
                    <div className="courses-header">explore</div>{' '}
                    <div>
                      {unEnrolledCourses.map((course) => (
                        <CourseCard
                          course={course}
                          isEnrolled={false}
                          setEnrolledCourses={setEnrolledCourses}
                          setUnEnrolledCourses={setUnEnrolledCourses}
                          unEnrolledCourses={unEnrolledCourses}
                          enrolledCourses={enrolledCourses}
                        />
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="courses-header">explore</div>{' '}
                    <div>
                      {allCourses.map((course) => (
                        <CourseCard course={course} isEnrolled={false} />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetAllCoursesCard;
