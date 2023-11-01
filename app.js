const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const { limiter } = require("./middlewares/rateLimiter");
const userRoutes = require("./routes/users");
const articleRoutes = require("./routes/articles");

const app = express(); // connect express to the app
mongoose.connect("mongodb://127.0.0.1:27017/newsapp");
const { PORT = 3001 } = process.env;

app.use(helmet());
app.use(limiter);
app.use("/users", userRoutes);
app.use("/articles", articleRoutes);

app.listen(PORT, () => console.log(`App is listening at port ${PORT}`));
