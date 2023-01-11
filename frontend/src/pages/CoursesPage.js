import React from 'react';
import CourseCard from '../components/CourseCard';

const course1 = {

    "description": "fah",
    "instructor": " build",
    "students": ["pun", "book"],
    "announcement": "pain in the ass",
    "createdAt": new Date(),

}

const course2 = {

    "description": "fahfi",
    "instructor": " build",
    "students": ["tuatua", "book"],
    "announcement": "ifififififfi",
    "createdAt": new Date(),

}
const course3 = {

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
                <div className="enrolled-courses-header">
                    <h1>enrolled</h1>
                </div>
                <div className="enrolled-courses">
                    <div className="course" style={{ width: "257.5px", marginRight: "30px" }}>
                        {courses.map((course) => (
                            <CourseCard course={course} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default CoursesPage;