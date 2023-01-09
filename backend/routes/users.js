const express = require('express');

const routes = express.Router();
const ctrl = require('../controllers/UserController');
// const {} = require('../middlewares/AuthMiddleware');

routes.route('/').get(ctrl.getUsers);

module.exports = routes;
