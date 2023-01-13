import React from "react";
import CardStyle from "./CourseCard.module.css";

const CourseCard = ({ course, isEnrolled }) => {
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
                        isEnrolled ? <div>''</div> : <a href="/sign-in" className={CardStyle.course.a}>enroll</a>
                    }
                </div>


            </div>
        </div>
    );
}
export default CourseCard;
