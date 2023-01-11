const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('Joi');
const passwordComplexity = require('joi-password-complexity');
const { ROLE_ENUM } = require('../util/Role');

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    maxlength: 32,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ROLE_ENUM,
  },
  courses: {
    type: [mongoose.SchemaTypes.ObjectId],
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id, userName: this.userName, role: this.role },
    process.env.JWTPRIVATEKEY,
    {
      expiresIn: '7d',
    },
  );
  return token;
};

const User = mongoose.model('User', userSchema);

const validateRegister = (data) => {
  const schema = Joi.object({
    userName: Joi.string().required().label('Name'),
    password: Joi.string().required().label('Password'),
    role: Joi.string().required().label('Role'),
    // password: passwordComplexity().required().label('Password'),
  });
  return schema.validate(data);
};

const validateLogin = (data) => {
  const schema = Joi.object({
    userName: Joi.string().required().label('Name'),
    password: Joi.string().required().label('Password'),
  });
  return schema.validate(data);
};

module.exports = { User, validateRegister, validateLogin };
