const mongoose = require("mongoose");
const { DB_NAME } = require("../Constant.js");
const connectDB = async () => {
  try {
    const DBConnection = await mongoose.connect(
      `${process.env.MONGO_URL}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected successfully  ! DB host : ${DBConnection.connection.host} `
    );
  } catch (error) {
    console.log("MongoDB error white Connect", error);
    process.exit(1);
  }
};

module.exports = connectDB;
