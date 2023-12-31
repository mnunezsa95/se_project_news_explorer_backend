// config
require("dotenv").config();

// modules
const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const cors = require("cors");
const { errors } = require("celebrate");

// constants
const { PORT, DB_ADDRESS } = require("./utils/config");

// routes
const userRoutes = require("./routes/users");
const articleRoutes = require("./routes/articles");
const invalidRoute = require("./routes/invalidRoute");

// middlewares
const { limiter } = require("./middlewares/rateLimiter");
const { errorHandler } = require("./middlewares/errorHandler");
const { requestLogger, errorLogger } = require("./middlewares/logger");
const { validateSignIn, validateSignUp } = require("./middlewares/validation");
const { auth } = require("./middlewares/auth");

// controllers
const { createUser, loginUser } = require("./controllers/users");

// app
const app = express(); // connect express to the app
mongoose
  .connect(DB_ADDRESS)
  .then(() => console.log("Connection with MongoDB established"));
mongoose.connection.on("error", (err) => console.log(err));

app.use(helmet());
app.use(limiter);
app.use(cors());
app.use(express.json());
app.use(requestLogger);
app.post("/signup", validateSignUp, createUser);
app.post("/signin", validateSignIn, loginUser);
app.use("/users", auth, userRoutes);
app.use("/articles", auth, articleRoutes);
app.use(invalidRoute);
app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

app.listen(PORT, () => console.log(`App is listening at Port ${PORT}`));
