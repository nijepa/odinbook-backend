import mongoose from "mongoose";
import "dotenv/config.js";
//import chalk from "chalk";
// require('dotenv').config();

/**
 * -------------- DATABASE ----------------
 */

/**
 * Connect to MongoDB Server using the connection string in the `.env` file.  To implement this, place the following
 * string into the `.env` file
 *
 * DB_STRING=mongodb://<user>:<password>@localhost:27017/database_name
 */

const conn = process.env.MONGODB_URI;

const connectDB = () => {
  return mongoose
    .connect(conn, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then(() =>
      console.log(//chalk.bgGreen.yellowBright(
        "Connected to MongoDB ..."
        //)
      )
    )
    .catch((err) => console.error("Could not connect to MongoDB..."));
};
// Expose the connection
export { connectDB };
