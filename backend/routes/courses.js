const express = require('express');
const routes = express.Router();
const ctrl = require('../controllers/CourseController');
const {
  authenticateToken,
  isStudent,
  isInstructor,
} = require('../middlewares/AuthMiddleWare');

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

/**
 * @swagger
 * /courses/id/{id}:
 *  get:
 *    tags:
 *      - courses
 *    summary: Find course by ID
 *    description: Returns a single course
 *    parameters:
 *      - name: _id
 *        in: path
 *        description: mongodb ID of course to return
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      '200':
 *        description: successful operation
 *      '400':
 *        description: Invalid ID supplied
 */
routes.route('/id/:id').get(ctrl.getCourseByID);

/**
 * @swagger
 * /courses/title/{title}:
 *  get:
 *    tags:
 *      - courses
 *    summary: Find course by title
 *    description: Returns a single course
 *    parameters:
 *      - name: title
 *        in: path
 *        description: title of course to return
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      '200':
 *        description: successful operation
 *      '400':
 *        description: Invalid username supplied
 */
routes.route('/title/:title').get(ctrl.getCourseByTitle);

routes.route('/create').post(ctrl.createCourse);

/**
 * @swagger
 * /courses/delete/id/{id}:
 *  delete:
 *    tags:
 *      - courses
 *    summary: Delete course by ID
 *    description: Delete a single course
 *    parameters:
 *      - name: _id
 *        in: path
 *        description: mongodb ID of course to delete
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      '200':
 *        description: successful operation
 *      '400':
 *        description: Invalid ID supplied
 */
routes.route('/delete/id/:id').delete(ctrl.deleteCourseByID);

/**
 * @swagger
 * /courses/delete/title/{title}:
 *  delete:
 *    tags:
 *      - courses
 *    summary: Delete course by title
 *    description: Delete a single course
 *    parameters:
 *      - name: title
 *        in: path
 *        description: title of course to delete
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      '200':
 *        description: successful operation
 *      '400':
 *        description: Invalid username supplied
 */
routes.route('/delete/title/:title').delete(ctrl.deleteCourseByTitle);

routes.route('/arrayOfID').get(ctrl.getCourseByArrayOfID);

routes
  .route('/addCourse')
  .post(authenticateToken, isInstructor, ctrl.addCourse);

module.exports = routes;
