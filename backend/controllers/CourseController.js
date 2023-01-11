const Course = require('../models/Course');

const ctrl = {
  //GET /courses
  getCourses: async (req, res) => {
    try {
      const courses = await Course.find();
      return res.status(200).json(courses);
    } catch (e) {
      return res.status(400).json({
        error: 'No courses found',
      });
    }
  },
};

module.exports = ctrl;
