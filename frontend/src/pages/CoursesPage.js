import React, { useState } from 'react';

import axios from 'axios';

import GetAllCoursesCard from '../components/GetAllCoursesCard';



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
            <div>
                <GetAllCoursesCard></GetAllCoursesCard>
            </div>
        </>
    );
};

export default CoursesPage;
