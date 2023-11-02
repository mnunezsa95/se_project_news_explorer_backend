// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
const User = require("../models/user");
// const { JWT_SECRET } = require("../utils/config");

const getCurrentUser = (req, res, next) => {
  const userID = req.user._id;
  User.findById(userID)
    .orFail()
    .then((user) => res.send(user))
    .catch((err) => {
      next(err);
    });
};

module.exports = { getCurrentUser };
