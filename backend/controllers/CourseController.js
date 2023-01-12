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

  //GET /courses/id/:id
  getCourseByID: async (req, res) => {
    try {
      const course = await Course.findById(req.params.id);
      return res.status(200).json(course);
    } catch (e) {
      return res.status(400).json({
        error: 'No course found',
      });
    }
  },

  //GET /courses/title/:title
  getCourseByTitle: async (req, res) => {
    try {
      const course = await Course.findOne({ title: req.params.title });
      return res.status(200).json(course);
    } catch (e) {
      return res.status(400).json({
        error: 'No user found',
      });
    }
  },

  //POST /courses/create
  createCourse: async (req, res) => {
    const course = new Course(req.body);
    try {
      const newCourse = await course.save();
      console.log(newCourse);
      return res.status(201).json({ newCourse });
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        error: 'Cant create new course',
      });
    }
  },
};

module.exports = ctrl;
