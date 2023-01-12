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
 *        description: Invalid title supplied
 *      '500':
 *        description: Internal Server Error
 */
routes.route('/title/:title').get(ctrl.getCourseByTitle);

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
 *        description: Invalid title supplied
 */
routes.route('/delete/title/:title').delete(ctrl.deleteCourseByTitle);

/**
 * @swagger
 * /courses/arrayOfID:
 *  get:
 *    tags:
 *      - courses
 *    summary: Find all courses in array
 *    description: Find all courses in array of course id
 *    parameters:
 *      - name: id
 *        in: body
 *        description: Array of course id ==> ["63c008c0fe6e2ac1f57a0c9e","63c003eab0bed2c19baba02f", "63c003f2b0bed2c19baba032"]
 *        required: true
 *        schema:
 *          type: array of string
 *    responses:
 *      '200':
 *        description: successful operation
 *      '400':
 *        description: Invalid Course ID
 */
routes.route('/arrayOfID').get(ctrl.getCourseByArrayOfID);

routes
  .route('/addCourse')
  .post(authenticateToken, isInstructor, ctrl.addCourse);

routes
  .route('/joinCourse/:title')
  .post(authenticateToken, isStudent, ctrl.joinCourse);

routes.route('/create').post(ctrl.createCourse);
routes.route('/username/:username').get(ctrl.getCourseByUsername);

module.exports = routes;
