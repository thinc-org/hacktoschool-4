import React from "react";
import CardStyle from "./CourseCard.module.css";

const CourseCard = ({ course }) => {
    return (
        //if that course is in that student list there will be no button
        <div className="course" >
            <div className={CardStyle.course}>
                <p className={CardStyle.title}>{course.title}</p>
                <div className={CardStyle.course.h2}>{course.description}</div>
                <div className={CardStyle.course.h3}>{course.instructor}</div>
                <a href="/sign-in" className={CardStyle.course.a}>enroll</a>

            </div>
        </div>
    );
}
export default CourseCard;
