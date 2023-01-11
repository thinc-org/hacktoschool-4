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
 *         description: successful operation
 *       '400':
 *         description: Invalid username supplied
 */
routes.route('/login').post(ctrl.loginUser);

module.exports = routes;
