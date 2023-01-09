const User = require('../models/User');

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
};

module.exports = ctrl;
