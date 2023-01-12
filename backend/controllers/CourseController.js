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

  //DELETE /courses/delete/id/:id
  deleteCourseByID: async (req, res) => {
    try {
      const course = await Course.findByIdAndDelete(req.params.id);
      return res.status(200).json({
        id: course._id,
        message: 'Delete course successfully',
      });
    } catch (e) {
      return res.status(400).json({
        error: 'No course to delete',
      });
    }
  },

  //DELETE /courses/delete/title/:title
  deleteCourseByTitle: async (req, res) => {
    try {
      const course = await Course.findOneAndDelete({ title: req.params.title });
      return res.status(200).json({
        id: course._id,
        message: 'Delete course successfully',
      });
    } catch (e) {
      return res.status(400).json({
        error: 'No course to delete',
      });
    }
  },

  //GET /courses/arrayOfID
  getCourseByArrayOfID: async (req, res) => {
    try {
      const courses = await Course.find({ _id: { $in: req.body.id } });
      return res.status(200).json(courses);
    } catch (e) {
      return res.status(400).json({
        error: 'No course found',
      });
    }
  },
};

module.exports = ctrl;
