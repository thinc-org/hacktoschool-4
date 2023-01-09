const express = require('express');

const routes = express.Router();
const ctrl = require('../controllers/CourseController');
// const {} = require('../middlewares/AuthMiddleware');

routes.route('/').get(ctrl.getCourses);

module.exports = routes;
