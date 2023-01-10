const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('Joi');
const passwordComplexity = require('joi-password-complexity');

const userSchema = new mongoose.Schema({
  name: {
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
    enum: ['Student', 'Instructor', 'Admin'],
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
  const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
    expiresIn: '7d',
  });
  return token;
};

const User = mongoose.model('User', userSchema);

const validate = (data) => {
  const schema = Joi.object({
    name: Joi.string().required().label('Name'),
    password: passwordComplexity().required().label('Password'),
  });
  return schema.validate(data);
};

module.exports = { User, validate };
