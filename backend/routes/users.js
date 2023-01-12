const express = require('express');
const routes = express.Router();
const ctrl = require('../controllers/UserController');
const {
  authenticateToken,
  isStudent,
} = require('../middlewares/AuthMiddleWare');

/**
 * @swagger
 * /users:
 *  get:
 *    tags:
 *      - users
 *    summary: Get all users
 *    description: Get all users exist in database
 *    responses:
 *      '200':
 *        description: A successful response
 *      '400':
 *        description: No user found
 */
routes.route('/').get(ctrl.getUsers);

/**
 * @swagger
 * /users/id/{id}:
 *  get:
 *    tags:
 *      - users
 *    summary: Find user by ID
 *    description: Returns a single user
 *    parameters:
 *      - name: _id
 *        in: path
 *        description: mongodb ID of user to return
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      '200':
 *        description: successful operation
 *      '400':
 *        description: Invalid ID supplied
 */
routes.route('/id/:id').get(ctrl.getUserByID);

/**
 * @swagger
 * /users/username/{username}:
 *  get:
 *    tags:
 *      - users
 *    summary: Find user by username
 *    description: Returns a single user
 *    parameters:
 *      - name: username
 *        in: path
 *        description: username of user to return
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      '200':
 *        description: successful operation
 *      '400':
 *        description: Invalid username supplied
 */
routes.route('/username/:username').get(ctrl.getUserByUsername);

/**
 * @swagger
 * /users/register:
 *   post:
 *     tags:
 *       - users
 *     summary: Add a new user to database
 *     description: Add a new user to database
 *     parameters:
 *       - name: username
 *         in: body
 *         description: username of a new user
 *         required: true
 *         schema:
 *           type: string
 *       - name: password
 *         in: body
 *         description: password of a new user
 *         required: true
 *         schema:
 *           type: string
 *       - name: role
 *         in: body
 *         description: one of an enum role ['Student','Instructor','Admin']
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '201':
 *         description: User created successfully
 *       '400':
 *         description: validate error, please check whether the body is correct
 *       '409':
 *         description: Username is already in used
 *       '500':
 *         description: Internal Server Error
 */
routes.route('/register').post(ctrl.registerUser);

/**
 * @swagger
 * /users/delete/id/{id}:
 *  delete:
 *    tags:
 *      - users
 *    summary: Delete user by ID
 *    description: Delete a single user
 *    parameters:
 *      - name: _id
 *        in: path
 *        description: mongodb ID of user to delete
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      '200':
 *        description: successful operation
 *      '400':
 *        description: Invalid ID supplied
 */
routes.route('/delete/id/:id').delete(ctrl.deleteUserByID);

/**
 * @swagger
 * /users/delete/username/{username}:
 *  delete:
 *    tags:
 *      - users
 *    summary: Delete user by username
 *    description: Delete a single user
 *    parameters:
 *      - name: username
 *        in: path
 *        description: username of user to delete
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      '200':
 *        description: successful operation
 *      '400':
 *        description: Invalid username supplied
 */
routes.route('/delete/username/:username').delete(ctrl.deleteUserByUsername);

routes
  .route('/testAuthenToken')
  .get(authenticateToken, isStudent, ctrl.getUsers);

routes.route('/create').post(ctrl.createUser);

module.exports = routes;
