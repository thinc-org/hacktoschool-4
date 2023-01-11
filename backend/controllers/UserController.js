const { User, validateRegister, validateLogin } = require('../models/User');
const bcrypt = require('bcrypt');
const Joi = require('Joi');

const ctrl = {
  //GET /users
  getUsers: async (req, res) => {
    try {
      const users = await User.find();
      return res.json(users);
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
      console.log(newUser);
      res.json({ newUser });
    } catch (e) {
      console.log(e);
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
      const user = await User.findOne({ name: req.body.name });
      if (user) {
        return res.status(409).send({ message: 'Username is already in used' });
      }
      const salt = await bcrypt.genSalt(Number(process.env.SALT));
      const hashPassword = await bcrypt.hash(req.body.password, salt);
      console.log({ ...req.body, password: hashPassword });
      await new User({ ...req.body, password: hashPassword }).save();
      return res.status(201).send({ message: 'User created successfully' });
    } catch (e) {
      return res.status(500).send({ message: 'Internal Server Error' });
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
      const user = await User.findOne({ name: req.body.name });
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
      return res
        .status(200)
        .send({ accessToken: token, message: 'Logged in successfully' });
    } catch (e) {
      return res.status(500).send({ message: 'Internal Server Error' });
    }
  },
  
  //GET /users/:id
  getUserByID: async (req, res) => {
    try{
      const user = await User.findById(req.params.id);
      return res.json(user);
    }catch(e){
      return res.status(400).json({
          error: 'No user found',
      });
    }

  },

};

module.exports = ctrl;
