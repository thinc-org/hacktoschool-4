
import React, { useEffect, useState } from 'react';
import CourseCard from '../components/CourseCard';

import CardStyle from '../components/CourseCard.module.css';

import { isStudent } from '../api/AuthAPI';
import axios from 'axios';

import GetAllCoursesCard from '../components/GetAllCoursesCard';





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
