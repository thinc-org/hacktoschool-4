import React from "react";
import CardStyle from "./CourseCard.module.css";

const CourseCard = ({ course }) => {
    return (
        //if that course is in that student list there will be no button
        <div className="course" >
            <div className={CardStyle.course}>
                <p className={CardStyle.title}>{course.title}</p>
                <h2>{course.description}</h2>
                <h3>{course.instructor}</h3>
                <button>enrolled</button>

            </div>
        </div>
    );
}
export default CourseCard;
