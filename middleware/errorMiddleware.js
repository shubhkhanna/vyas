const { Logger } = require("../helpers/logger");

const notFound = (req, res, next) => {
  Logger.error(`${req.method} - Not Found! - ${req.originalUrl} - 404`);

  res.status(404).json({
    resStatus: {
      statusCode: 0,
      message: "",
      errorType: "Not found!",
    },
    resData: {},
  });

  next();
};

const handleError = (error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  Logger.error(
    `${req.method} - ${error.message} - ${req.originalUrl} - ${statusCode}`
  );

  res.status(statusCode).json({
    resStatus: {
      statusCode: 0,
      message: "",
      errorType: error.message,
    },
    resData: {},
  });
};

module.exports = { handleError, notFound };
