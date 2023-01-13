import React from "react";
import { Link } from "react-router-dom";
import { isStudent } from "../api/AuthAPI";
import { joinCourseByTitle } from "../api/CourseAPI";
import CardStyle from "./CourseCard.module.css";



const CourseCard = ({ course, isEnrolled }) => {
    const handleEnroll = async () => {

        joinCourseByTitle(course.title);



    }
    return (
        //if that course is in that student list there will be no button
        <div className="course" >
            <div className={CardStyle.course}>
                <p className={CardStyle.title}>{course.title}</p>
                <br></br>
                <div className={CardStyle.course.h2}>{course.description}</div>
                <div className={CardStyle.course.h3}>{course.instructor}</div>
                {/* <h3 className={CardStyle.course.h3}>{course.description}</h3>
                <h3 className={CardStyle.course.h3}>{course.instructor}</h3> */}
                <div style={{ marginTop: '60px', marginBottom: '60px' }}></div>
                <div>
                    {
                        (isEnrolled) ? <div></div> : ((isStudent) ? <a onClick={handleEnroll} className={CardStyle.course.a}>enroll</a> : <a href="../sign-in" className={CardStyle.course.a}>enroll</a>)
                    }
                </div>


            </div>
        </div>
    );
}
export default CourseCard;
