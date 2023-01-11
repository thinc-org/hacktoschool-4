import React from "react";

const CourseCard = ({ course }) => {
    console.log(course);
    return (
        //if that course is in that student list there will be no button
        <div className="course">
            <div>
                <h2>{course.title}</h2>
                <h3>{course.description}</h3>
                <h3>{course.instructor}</h3>
                <button>enrolled</button>

            </div>
        </div>
    );
}
export default CourseCard;