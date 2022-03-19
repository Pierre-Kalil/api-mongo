import bcrypt from "bcryptjs";
import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  id: String,
  name: String,
  email: String,
  password: String,
});

userSchema.pre("save", async function (next) {
  const hash = await bcrypt.hashSync(this.password, 10);
  this.password = hash;
  next();
});

export const UserModel = mongoose.model("User", userSchema);
