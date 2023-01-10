const express = require('express');
const routes = express.Router();
const ctrl = require('../controllers/UserController');

routes.route('/login').post(ctrl.loginUser);

module.exports = routes;
