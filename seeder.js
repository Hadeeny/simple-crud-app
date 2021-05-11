import mongoose from "mongoose";
import dotenv from "dotenv";
import user from "./data/sample.js";
import User from "./models/userModel.js";
import connectDB from "./config/db.js";

// add initial data to database
dotenv.config();

connectDB();

const importData = async () => {
  try {
    // clear any existing data
    await User.deleteMany;
    // import data into database
    await User.insertMany(user);
    console.log("Data imported");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

importData();
