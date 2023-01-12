import React from 'react';
import CourseCard from '../components/CourseCard';
import CardStyle from "../components/CourseCard.module.css";

const course1 = {
    "title": "cc1",
    "description": "fah",
    "instructor": " build",
    "students": ["pun", "book"],
    "announcement": "pain in the ass",
    "createdAt": new Date(),

}

const course2 = {
    "title": "cc2",
    "description": "fahfi",
    "instructor": " build",
    "students": ["tuatua", "book"],
    "announcement": "ifififififfi",
    "createdAt": new Date(),

}
const course3 = {
    "title": "cc3",
    "description": "niniini",
    "instructor": " builddddd",
    "students": ["tuatua", "book"],
    "announcement": "ifififififfi",
    "createdAt": new Date(),

}
const courses = [course1, course2, course3];

const CoursesPage = () => {
    return (
        <>
            <div className="enrolled-courses-wrapper">
                <div className="courses-header">
                    <h1>enrolled</h1>
                </div>
                <div className="courses ">
                    <div className={CardStyle.wrapper}>
                        <div className="course" style={{ width: "30%", marginRight: "30px" }}>
                            {courses.map((course) => (
                                <CourseCard course={course} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='to explore'>
                <div className='courses-header'>
                    <h1>to explore</h1>
                </div>
                <div className="courses">
                    <div className={CardStyle.wrapper}>
                        <div className="course" style={{ width: "30%", marginRight: "30px" }}>
                            {courses.map((course) => (
                                <CourseCard course={course} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CoursesPage;
