const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const { handleError, notFound } = require("./middleware/errorMiddleware");
const connectDb = require("./config/db");
const { Logger } = require("./helpers/logger");

// create express app
const app = express();

// port number
const port = process.env.PORT || 5000;

// configure .env file
dotenv.config();

// Connecting to MongoDB
connectDb();

// API Security
app.use(helmet());

// handle CORS errors
app.use(cors());

// log all requests to the console
app.use(morgan("combined", { stream: Logger.stream.write }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use("/v1/user", require("./routes/userRoutes"));
app.use("/v1/courses", require("./routes/courseRoutes"));

// Handle errors
app.use(handleError);
app.use(notFound);

// Serve Static assets in production
if (process.env.NODE_ENV == "production") {
  const path = require("path");

  app.get("/", (req, res) => {
    app.use(express.static(path.resolve(__dirname, "client", "build")));
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// listen to port 5000
app.listen(port, () => {
  Logger.info(`Server is running on port ${port}`);
});
