import React, { useEffect, useState } from 'react';
import CourseCard from './CourseCard';
import CardStyle from "./CourseCard.module.css";

import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { getCourseAll } from '../api/CourseAPI';


const GetAllCoursesCard = () => {
    const [allCourses, setAllCourses] = useState([]);


    useEffect(() => {
        getCourseAll().then((courses) => setAllCourses(courses))
    }, [])
    //since res use await which takes time, getCourseAll will take more time and then work itself later on

    //
    // setAllCourses(getCourseAll());
    console.log(allCourses)
    return (
        <>
            <div style={{ margin: '30px' }}>
                <div className="courses-header">
                    <h1>Courses</h1>
                </div>
                <div className="courses " style={{ alignContent: 'left' }}>
                    <div className={CardStyle.wrapper}>
                        <div className="course" style={{ width: "100%", marginRight: "30px" }}>
                            {allCourses.map((course) => (
                                <CourseCard course={course} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </>
    );



}

export default GetAllCoursesCard;