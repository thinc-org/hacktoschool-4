const Course = require('../models/Course');
const { User } = require('../models/User');
const jwt_decode = require('jwt-decode');

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

  //POST /courses/addCours
  addCourse: async (req, res) => {
    try {
      const courseInfo = req.body;
      if (!courseInfo.title) {
        return res.status(400).json({
          error: 'No course title',
        });
      }

      // Check if already has course title in DB
      const existedCourse = await Course.findOne({ title: courseInfo.title });
      if (existedCourse) {
        return res
          .status(409)
          .send({ message: 'Course title is already taken' });
      }

      const authHeader = req.headers['authorization'];
      const token = authHeader && authHeader.split(' ')[1];
      const decoded = jwt_decode(token);
      console.log(courseInfo);
      const course = new Course({ ...courseInfo, instructor: decoded._id });
      const newCourse = await course.save();
      await User.updateOne(
        { _id: decoded._id },
        { $push: { courses: newCourse._id } },
      );
      return res.status(201).send({ message: 'Course succesfully added' });
    } catch (e) {
      return res.status(500).send({ message: 'Internal Server Error' });
    }
  },

  //POST /courses/joinCourse/:title
  joinCourse: async (req, res) => {
    try {
      const courseTitle = req.params.title;
      if (!courseTitle) {
        return res.status(400).json({
          error: 'No course title',
        });
      }

      // Check if course title exist in DB
      const existedCourse = await Course.findOne({ title: courseTitle });
      if (!existedCourse) {
        return res.status(400).send({ message: 'Course title not exist' });
      }
      const courseID = existedCourse._id;

      // Check if the user already join the course.
      const authHeader = req.headers['authorization'];
      const token = authHeader && authHeader.split(' ')[1];
      const userID = jwt_decode(token)._id;
      const joinedCourses = User.findById(userID).courses;
      if (
        (joinedCourses && joinedCourses.includes(courseID)) ||
        existedCourse.students.includes(userID)
      ) {
        return res.status(409).send({ message: 'User already join course' });
      }
      await User.updateOne({ _id: userID }, { $push: { courses: courseID } });
      await Course.updateOne(
        { _id: courseID },
        { $push: { students: userID } },
      );
      return res.status(201).send({ message: 'Succesfully joined' });
    } catch (e) {
      return res.status(500).send({ message: 'Internal Server Error' });
    }
  },

  //GET /courses/username/:username
  getCourseByUsername: async (req, res) => {
    try {
      const user = await User.findOne({ username: req.params.username });
      const courses = await Course.find({ _id: { $in: user.courses } });
      return res.status(200).json(courses);
    } catch (e) {
      return res.status(400).json({
        error: 'No course found',
      });
    }
  },
};

module.exports = ctrl;
