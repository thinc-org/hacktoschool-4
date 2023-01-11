const express = require('express');

const routes = express.Router();
const ctrl = require('../controllers/CourseController');

/**
 * @swagger
 * /courses:
 *  get:
 *    tags:
 *      - courses
 *    summary: Get all courses
 *    description: Get all courses exist in database
 *    responses:
 *      '200':
 *        description: A successful response
 *      '400':
 *        description: No course found
 */
routes.route('/').get(ctrl.getCourses);

module.exports = routes;
