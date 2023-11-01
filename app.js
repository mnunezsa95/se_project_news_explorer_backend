const express = require("express");

const app = express(); // connect express to the app
const { PORT = 3001 } = process.env;
app.listen(PORT, () => console.log(`App is listening at port ${PORT}`));
