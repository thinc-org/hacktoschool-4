import React, { useEffect, useState } from 'react';
import CourseCard from './CourseCard';
import CardStyle from './CourseCard.module.css';

import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { getCourseAll } from '../api/CourseAPI';

const GetAllCoursesCard = (isLoggedIn) => {
  const [allCourses, setAllCourses] = useState([]);

  const [unEnrolledCourses, setUnEnrolledCourses] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);


  const allCoursesEle = <><div className="courses-header">explore</div> <div> {allCourses.map((course) => (
    <CourseCard course={course} isEnrolled
      ={false} />
  ))}
  </div >
  </>



  const loggedInCoursesEle = <>
    <div className="courses-header">enrolled</div>
    <div>{allCourses.map((course) => (
      <CourseCard course={course} isEnrolled
        ={false} />
    ))};

    </div>
    <div className="courses-header">explore</div> <div> {unEnrolledCourses.map((course) => (
      <CourseCard course={course} isEnrolled
        ={false} />
    ))};
    </div>

  </>
  const coursesEle = (isLoggedIn) ? loggedInCoursesEle : allCoursesEle;


  useEffect(() => {


    if (isLoggedIn) {
      // test with all courses
      getCourseAll().then((courses) => setUnEnrolledCourses(courses));
      getCourseAll().then((courses) => setEnrolledCourses(courses));
      console.log("logged in")
    } else {
      getCourseAll().then((courses) => setAllCourses(courses));
    }

  }, []);


  //since res use await which takes time, getCourseAll will take more time and then work itself later on

  //
  // setAllCourses(getCourseAll());
  return (
    <>
      <div style={{ margin: '30px' }}>
        <div className="courses-header">
          <h1>Courses</h1>
        </div>
        {/*  */}
        <div className="courses " style={{ alignContent: 'left' }}>
          <div className={CardStyle.wrapper}>
            <div
              className="course"
              style={{ width: '100%', marginRight: '30px' }}
            >
              <div>
                {coursesEle}




              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GetAllCoursesCard;
