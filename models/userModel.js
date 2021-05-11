import mongoose from "mongoose";
const Schema = mongoose.Schema;

//create Schema
const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  country: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);
export default User;
