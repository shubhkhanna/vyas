const { Logger } = require("../helpers/logger");

const notFound = (req, res, next) => {
  Logger.error(`${req.method} - Not Found! - ${req.originalUrl} - 404`);

  res.status(404);

  next(error);
};

const handleError = (error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  Logger.error(
    `${req.method} - ${error.message} - ${req.originalUrl} - ${statusCode}`
  );

  res.status(statusCode).json({
    message: error.message,
  });
};

module.exports = { handleError, notFound };
