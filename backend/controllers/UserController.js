const { User, validateRegister, validateLogin } = require('../models/User');
const Course = require('../models/Course');
const bcrypt = require('bcrypt');
const Joi = require('Joi');

const ctrl = {
  //GET /users
  getUsers: async (req, res) => {
    try {
      const users = await User.find();
      return res.status(200).json(users);
    } catch (e) {
      return res.status(400).json({
        error: 'No users found',
      });
    }
  },

  //POST /users/create
  createUser: async (req, res) => {
    const user = new User(req.body);
    try {
      const newUser = await user.save();
      // console.log(newUser);
      return res.status(201).json({ newUser });
    } catch (e) {
      // console.log(e);
      return res.status(400).json({
        error: 'Cant create new user',
      });
    }
  },

  //POST /users/register
  registerUser: async (req, res) => {
    try {
      const { error } = validateRegister(req.body);
      // Some Validate Error
      if (error) {
        return res.status(400).send({ message: error.details[0].message });
      }
      const user = await User.findOne({ username: req.body.username });
      if (user) {
        return res.status(409).send({ message: 'Username is already in used' });
      }
      const salt = await bcrypt.genSalt(Number(process.env.SALT));
      const hashPassword = await bcrypt.hash(req.body.password, salt);
      // console.log({ ...req.body, password: hashPassword });
      await new User({ ...req.body, password: hashPassword }).save();
      return res.status(201).send({ message: 'User created successfully' });
    } catch (e) {
      // console.log(e);
      return res.status(400).send({ message: 'User Validation failed' });
    }
  },

  //POST /auth/login
  loginUser: async (req, res) => {
    try {
      const { error } = validateLogin(req.body);

      // Some validate error
      if (error) {
        return res.status(400).send({ message: error.details[0].message });
      }
      const user = await User.findOne({ username: req.body.username });
      if (!user) {
        return res.status(409).send({ message: 'Invalid Email or Password' });
      }
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password,
      );
      if (!validPassword) {
        return res.status(401).send({ message: 'Invalid Email or Password' });
      }
      const token = user.generateAuthToken();
      return res.status(200).send({
        role: user.role,
        accessToken: token,
        message: 'Logged in successfully',
      });
    } catch (e) {
      return res.status(500).send({ message: 'Internal Server Error' });
    }
  },

  //GET /users/id/:id
  getUserByID: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      return res.status(200).json(user);
    } catch (e) {
      return res.status(400).json({
        error: 'No user found',
      });
    }
  },

  //GET /users/username/:username
  getUserByUsername: async (req, res) => {
    try {
      const user = await User.findOne({ username: req.params.username });
      if (!user) return res.status(400).json({ error: 'No user found' });
      return res.status(200).json(user);
    } catch (e) {
      return res.status(500).json({
        error: 'Internal Server Error',
      });
    }
  },

  //DELETE /users/delete/id/:id
  deleteUserByID: async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      return res
        .status(200)
        .json({ id: user._id, message: 'Delete user successfully' });
    } catch (e) {
      return res.status(400).json({
        error: 'No user to delete',
      });
    }
  },

  //DELETE /users/delete/username/:username
  deleteUserByUsername: async (req, res) => {
    try {
      const user = await User.findOneAndDelete({
        username: req.params.username,
      });
      return res
        .status(200)
        .json({ id: user._id, message: 'Delete user successfully' });
    } catch (e) {
      return res.status(400).json({
        error: 'No user to delete',
      });
    }
  },

  // !NOT USED
  //GET /users/courseID/:id
  getStudentsByCourseID: async (req, res) => {
    try {
      const students = await User.find({
        role: 'Student',
        courses: req.params.id,
      });
      return res.status(200).json(students);
    } catch (e) {
      return res.status(400).json({
        error: 'No student joined this course',
      });
    }
  },

  _getStudentsByCourseTitle: async (req, res) => {
    try {
      const course = await Course.findOne({ title: req.params.title });
      if (!course)
        return res.status(400).json({ error: 'Invalid course title' });
      const student = await User.find({ _id: { $in: course.students } });
      // console.log(student);
      return res.status(200).json(student.map((a) => a.username));
    } catch (e) {
      return res.status(500).json({
        error: 'Internal Server Error',
      });
    }
  },
  get getStudentsByCourseTitle() {
    return this._getStudentsByCourseTitle;
  },
  set getStudentsByCourseTitle(value) {
    this._getStudentsByCourseTitle = value;
  },
};

module.exports = ctrl;
