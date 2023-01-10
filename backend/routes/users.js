const express = require('express');
const routes = express.Router();
const ctrl = require('../controllers/UserController');

routes.route('/').get(ctrl.getUsers);

routes.route('/create').post(ctrl.createUser);

routes.route('/register').post(ctrl.loginUser);

module.exports = routes;
