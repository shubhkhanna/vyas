const mongoose = require("mongoose");
const { Logger } = require("../helpers/logger");

const connectDb = async () => {
  try {
    const response = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    Logger.info(`DB Connected ==> ${response.connection.host}`);
  } catch (err) {
    Logger.error(`DB Error ==> ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDb;
