const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const { limiter } = require("./middlewares/rateLimiter");

const app = express(); // connect express to the app
mongoose.connect("mongodb://127.0.0.1:27017/newsapp");
const { PORT = 3001 } = process.env;

app.use(helmet());
app.use(limiter);

app.listen(PORT, () => console.log(`App is listening at port ${PORT}`));
