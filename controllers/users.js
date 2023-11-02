const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const { JWT_SECRET } = require("../utils/config");
const { ConflictError } = require("../errors/ConflictError");
const { BadRequestError } = require("../errors/BadRequestError");

// create a user based on incoming request
const createUser = (req, res, next) => {
  const { email, password, username } = req.body;
  User.findOne({ email })
    .then((existingUser) => {
      if (existingUser) {
        throw new ConflictError("This email is already in use");
      }
      return bcrypt.hash(password, 10);
    })
    .then((hash) => User.create({ email, password: hash, username }))
    .then((user) => {
      res.send({ email: user.email, username: user.username });
    })
    .catch((err) => {
      if (err.name === "ValidationError") {
        next(new BadRequestError("Invalid data sent to the server"));
      } else {
        next(err);
      }
    });
};

const getCurrentUser = (req, res, next) => {
  const userID = req.user._id;
  User.findById(userID)
    .orFail()
    .then((user) => res.send(user))
    .catch((err) => {
      next(err);
    });
};

const login = (req, res, next) => {
  console.log(req, res, next);
};

module.exports = { createUser, getCurrentUser, login };
