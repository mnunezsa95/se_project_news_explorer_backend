const errorHandler = (err, req, res, next) => {
  const { statusCode = 500, message } = err;
  console.log(
    `Error ${err.name} (with status code ${err.statusCode}) and message "${err.message}" has occurred.`,
  );
  res.status(statusCode).send({
    message: statusCode === 500 ? "An error occurred on the server" : message,
  });
};

module.exports = { errorHandler };
