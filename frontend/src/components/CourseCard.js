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
                <button>enroll</button>

            </div>
        </div>
    );
}
export default CourseCard;
