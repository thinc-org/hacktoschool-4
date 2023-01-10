const express = require('express');
const routes = express.Router();
const ctrl = require('../controllers/UserController');
const { authenticateToken } = require('../middlewares/AuthMiddleWare');

routes.route('/').get(ctrl.getUsers);

routes.route('/create').post(ctrl.createUser);

routes.route('/register').post(ctrl.registerUser);

routes.route('/testAuthenToken').get(authenticateToken, ctrl.getUsers);

module.exports = routes;
