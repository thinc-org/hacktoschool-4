const User = require('../models/User');

const ctrl = {
  //GET /users
  getUsers: (req, res) => {
    User.find().then((users) => {
      return res.send(users);
    });
  },
};

module.exports = ctrl;
