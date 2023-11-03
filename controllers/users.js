const { JWT_SECRET } = process.env;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const { ConflictError } = require("../errors/ConflictError");
const { BadRequestError } = require("../errors/BadRequestError");
const { UnauthorizedError } = require("../errors/UnauthorizedError");

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
    .then((user) => res.send({ email: user.email, username: user.username }))
    .catch((err) => {
      if (err.name === "ValidationError") {
        next(new BadRequestError("Invalid data sent to the server"));
      } else {
        next(err);
      }
    });
};

const loginUser = (req, res, next) => {
  console.log(JWT_SECRET);
  const { email, password } = req.body;
  User.findOne({ email })
    .select("+password")
    .then((user) => {
      console.log(password, user.password);
      if (!user) {
        return Promise.reject(
          new UnauthorizedError("Incorrect password or email"),
        );
      }
      return { user, matched: bcrypt.compare(password, user.password) };
    })
    .then(({ user, matched }) => {
      if (!matched) {
        return Promise.reject(
          new UnauthorizedError("Incorrect password or email"),
        );
      }
      return user;
    })
    .then((user) => {
      const token = jwt.sign({ _id: user._id }, JWT_SECRET, {
        expiresIn: "14d",
      });
      res.send({ message: "Successful Login", token });
    })
    .catch((err) => next(err));
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

module.exports = { createUser, getCurrentUser, loginUser };
