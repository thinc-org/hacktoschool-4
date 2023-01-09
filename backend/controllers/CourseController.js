const Course = require('../models/Course');

const ctrl = {
  //GET /courses
  getCourses: (req, res) => {
    Course.find().then((courses) => {
      return res.send(courses);
    });
  },
};

module.exports = ctrl;
