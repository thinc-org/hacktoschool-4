const express = require('express');
const app = express.Router();

const users = require('./users');
const courses = require('./courses');
const auth = require('./auth');

app.use('/users', users);
app.use('/courses', courses);
app.use('/auth', auth);

module.exports = app;
