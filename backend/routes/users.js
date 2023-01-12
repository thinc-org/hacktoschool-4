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
 *    summary: Find user by name
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
 *         description: validate error, please check if body correctly.
 *       '409':
 *         description: validate error, please check if body correctly.
 */
routes.route('/register').post(ctrl.registerUser);

routes
  .route('/testAuthenToken')
  .get(authenticateToken, isStudent, ctrl.getUsers);

routes.route('/create').post(ctrl.createUser);

routes.route('/delete-id/:id').delete(ctrl.deleteUserByID);

routes.route('/delete-username/:username').delete(ctrl.deleteUserByUsername);

module.exports = routes;
