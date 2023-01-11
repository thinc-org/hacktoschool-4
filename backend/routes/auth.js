const express = require('express');
const routes = express.Router();
const ctrl = require('../controllers/UserController');

/**
 * @swagger
 * /auth/login:
 *   post:
 *     tags:
 *       - auth
 *     summary: Log in
 *     description: Log in
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
 *     responses:
 *       '200':
 *         description: Logged in successfully
 *       '400':
 *         description: validate error, please check whether the body correct
 *       '401':
 *         description: Invalid Email or Password
 *       '409':
 *         description: Invalid Email or Password
 *       '500':
 *         description: Internal Server Error
 */
routes.route('/login').post(ctrl.loginUser);

module.exports = routes;
