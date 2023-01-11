const Course = require('../models/Course');

const ctrl = {
  //GET /courses
  getCourses: (req, res) => {
    Course.find().then((courses) => {
      return res.status(200).send(courses);
    });
  },
};

module.exports = ctrl;
