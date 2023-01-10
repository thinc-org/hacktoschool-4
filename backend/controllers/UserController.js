const { User, validate } = require('../models/User');
const bcrypt = require('bcrypt');

const ctrl = {
  //GET /users
  getUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
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
      const { error } = validate(req.body);

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
      await new User({ ...req.body, password: hashPassword }).save();
      return res.status(201).send({ message: 'User created successfully' });
    } catch (e) {
      return res.status(500).send({ message: 'Internal Server Error' });
    }
  },
};

module.exports = ctrl;
