const jwt = require('jsonwebtoken');
const { ROLE } = require('../util/Role');

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.status(401).send({ message: 'Unauthorized' });

  jwt.verify(token, process.env.JWTPRIVATEKEY, (err, user) => {
    if (err) return res.status(403).send({ message: 'Forbidden' });
    req.user = user;
    next();
  });
}

function isStudent(req, res, next) {
  console.log(req.user);
  if (req.user.role == ROLE.STUDENT) {
    next();
  } else {
    return res.status(401).send({ message: 'Unauthorized' });
  }
}

function isInstructor(req, res, next) {
  if (req.user.role == ROLE.INSTRUCTOR) {
    next();
  } else {
    return res.status(401).send({ message: 'Unauthorized' });
  }
}

function isAdmin(req, res, next) {
  if (req.user.role == ROLE.ADMIN) {
    next();
  } else {
    return res.status(401).send({ message: 'Unauthorized' });
  }
}

module.exports = { authenticateToken, isStudent, isInstructor, isAdmin };
