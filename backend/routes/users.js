const express = require('express');
const routes = express.Router();
const ctrl = require('../controllers/UserController');
const {
  authenticateToken,
  isStudent,
} = require('../middlewares/AuthMiddleWare');

routes.route('/').get(ctrl.getUsers);

routes.route('/create').post(ctrl.createUser);

routes.route('/register').post(ctrl.registerUser);

routes
  .route('/testAuthenToken')
  .get(authenticateToken, isStudent, ctrl.getUsers);

routes.route('/:id').get(ctrl.getUserByID);

module.exports = routes;
