const express = require('express');
const routes = express.Router();
const ctrl = require('../controllers/CourseController');
const {
  authenticateToken,
  isStudent,
  isInstructor,
  isAdmin,
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
routes
  .route('/delete/id/:id')
  .delete(authenticateToken, isAdmin, ctrl.deleteCourseByID);

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
routes
  .route('/delete/title/:title')
  .delete(authenticateToken, isAdmin, ctrl.deleteCourseByTitle);

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

/**
 * @swagger
 * /courses/username/{username}:
 *  get:
 *    tags:
 *      - courses
 *    summary: Find all (enrolled,teached) courses by username
 *    description: Find all enrolled courses for student username and teached courses by instructor username
 *    parameters:
 *      - name: username
 *        in: path
 *        description: just username :P
 *        required: true
 *        schema:
 *          type: array of string
 *    responses:
 *      '200':
 *        description: successful operation
 *      '400':
 *        description: Invalid Username
 *      '500':
 *        description: Internal Server Error
 */
routes.route('/username/:username').get(ctrl.getCourseByUsername);

/**
 * @swagger
 * /courses/unenrolled/{username}:
 *  get:
 *    tags:
 *      - courses
 *    summary: Find all unenrolled courses by student username
 *    description: Find all unenrolled courses by student username
 *    parameters:
 *      - name: username
 *        in: path
 *        description: just username :P
 *        required: true
 *        schema:
 *          type: array of string
 *    responses:
 *      '200':
 *        description: successful operation
 *      '400':
 *        description: Invalid Username
 *      '500':
 *        description: Internal Server Error
 */
routes
  .route('/unenrolled/:username')
  .get(authenticateToken, isStudent, ctrl.getUnenrolledCourseByUsername);

/**
 * @swagger
 * /courses/addCourse:
 *   post:
 *     tags:
 *       - courses
 *     summary: Add a new course to database
 *     description: Instructor created a new course to database
 *     parameters:
 *       - name: title
 *         in: body
 *         description: title of a courses (Can't have duplicate title in DB)
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '201':
 *         description: Course created successfully
 *       '400':
 *         description: No course title
 *       '409':
 *         description: Course title is already taken
 *       '500':
 *         description: Internal Server Error
 */
routes
  .route('/addCourse')
  .post(authenticateToken, isInstructor, ctrl.addCourse);

/**
 * @swagger
 * /courses/joinCourse/{title}:
 *   post:
 *     tags:
 *       - courses
 *     summary: Join course
 *     description: Student enrolled to a course by course title
 *     parameters:
 *       - name: title
 *         in: path
 *         description: title of a courses want to join
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Succesfully joined
 *       '400':
 *         description: Course title not exist
 *       '409':
 *         description: User already join course
 *       '500':
 *         description: Internal Server Error
 */
routes
  .route('/joinCourse/:title')
  .post(authenticateToken, isStudent, ctrl.joinCourse);

/**
 * @swagger
 * /courses/announcement/add:
 *   post:
 *     tags:
 *       - courses
 *     summary: Add a new course announcement to database
 *     description: Instructor add a new course announcement to database
 *     parameters:
 *       - name: title
 *         in: body
 *         description: title of a courses
 *         required: true
 *         schema:
 *           type: string
 *       - name: announcement
 *         in: body
 *         description: announcement text
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '201':
 *         description: Course created successfully
 *       '400':
 *         description: No course title
 *       '409':
 *         description: Course title is already taken
 *       '500':
 *         description: Internal Server Error
 */
routes
  .route('/announcement/add')
  .post(authenticateToken, isInstructor, ctrl.addAnnouncement);

routes.route('/popularCourse').get(ctrl.getPopularCourse);

routes.route('/create').post(authenticateToken, isAdmin, ctrl.createCourse);

module.exports = routes;
