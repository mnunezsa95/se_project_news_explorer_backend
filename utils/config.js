const { NODE_ENV = "development" } = process.env;
const { JWT_SECRET = "dev-secret" } = process.env;
const { PORT = 3001 } = process.env;
const dbAdress = "mongodb://127.0.0.1:27017/newsapp";

module.exports = { NODE_ENV, JWT_SECRET, PORT, dbAdress };
