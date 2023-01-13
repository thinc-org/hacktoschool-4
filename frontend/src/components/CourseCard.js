import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { isStudent } from '../api/AuthAPI';
import { joinCourseByTitle } from '../api/CourseAPI';
import CardStyle from './CourseCard.module.css';

const CourseCard = ({
  course,
  isEnrolled,
  setEnrolledCourses,
  setUnEnrolledCourses,
  linkTo,
}) => {
  const navigate = useNavigate();
  const handleEnroll = async () => {
    const newCourse = await joinCourseByTitle(course.title);
    setEnrolledCourses((oldCourses) => [...oldCourses, newCourse]);
    setUnEnrolledCourses((oldCourses) =>
      oldCourses.filter(function (value) {
        return value.title !== course.title;
      }),
    );
  };
  return (
    //if that course is in that student list there will be no button
    <div className="course">
      <div className={CardStyle.course}>
        <p
          onClick={() => {
            navigate(`/${linkTo}/${course.title}`);
          }}
          style={{ cursor: 'pointer' }}
          className={CardStyle.title}
        >
          {course.title}
        </p>
        <br></br>
        <div className={CardStyle.course.h2}>{course.description}</div>
        <div className={CardStyle.course.h3}>{course.instructor}</div>
        {/* <h3 className={CardStyle.course.h3}>{course.description}</h3>
                <h3 className={CardStyle.course.h3}>{course.instructor}</h3> */}
        <div style={{ marginTop: '60px', marginBottom: '60px' }}></div>
        <div>
          {isEnrolled ? (
            <></>
          ) : isStudent() ? (
            <Link onClick={handleEnroll} className={CardStyle.course.a}>
              enroll
            </Link>
          ) : (
            <Link to="../sign-in" className={CardStyle.course.a}>
              enroll
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
export default CourseCard;
