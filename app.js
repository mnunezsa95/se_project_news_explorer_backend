// modules
const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const cors = require("cors");
const { errors } = require("celebrate");

// routes
const userRoutes = require("./routes/users");
const articleRoutes = require("./routes/articles");

// middlewares
const { limiter } = require("./middlewares/rateLimiter");
const { errorHandler } = require("./middlewares/errorHandler");

// app
const app = express(); // connect express to the app
mongoose.connect("mongodb://127.0.0.1:27017/newsapp");
const { PORT = 3001 } = process.env;
app.use(helmet());
app.use(limiter);
app.use(cors());

app.use("/users", userRoutes);
app.use("/articles", articleRoutes);
app.use(errors());
app.use(errorHandler);

app.listen(PORT, () => console.log(`App is listening at port ${PORT}`));
