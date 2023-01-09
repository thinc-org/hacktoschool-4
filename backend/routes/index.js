const express = require('express');
const app = express.Router();

const users = require('./users');
const courses = require('./courses');

app.use('/users', users);
app.use('/course', courses);

module.exports = app;
