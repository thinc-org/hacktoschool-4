import React, { useEffect, useState } from 'react';
import CourseCard from './CourseCard';
import CardStyle from './CourseCard.module.css';
import { isStudent, isInstructor } from '../api/AuthAPI';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { getCourseAll, getCourseByUsername, getUnenrolledCourseByUsername } from '../api/CourseAPI';

const GetAllCoursesCard = () => {
  const isLoggedInStudent = isStudent();
  const isLoggenInInstr = isInstructor();
  const [allCourses, setAllCourses] = useState([]);

  const [unEnrolledCourses, setUnEnrolledCourses] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);


  useEffect(() => {
    if (isLoggedInStudent) {
      // test with all courses
      getUnenrolledCourseByUsername(localStorage.getItem("username")).then((courses) => setUnEnrolledCourses(courses));
      getCourseByUsername(localStorage.getItem("username")).then((courses) => setEnrolledCourses(courses));
      console.log("logged in")
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
                {isLoggedInStudent ? (<><div className="courses-header">enrolled</div>
                  <div >{enrolledCourses.map((course) => (
                    <CourseCard course={course} isEnrolled
                      ={true} setEnrolledCourses={setEnrolledCourses} setUnEnrolledCourses={setUnEnrolledCourses} />
                  ))}

                  </div>
                  <hr ></hr>
                  <div className="courses-header">explore</div> <div > {unEnrolledCourses.map((course) => (
                    <CourseCard course={course} isEnrolled
                      ={false} setEnrolledCourses={setEnrolledCourses} setUnEnrolledCourses={setUnEnrolledCourses} />
                  ))}
                  </div></>) : (<><div className="courses-header">explore</div> <div > {allCourses.map((course) => (
                    <CourseCard course={course} isEnrolled
                      ={false} setEnrolledCourses={setEnrolledCourses} setUnEnrolledCourses={setUnEnrolledCourses} />
                  ))}
                  </div ></>)}


              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GetAllCoursesCard;
