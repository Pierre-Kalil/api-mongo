import mongoose from "mongoose";

export const ConnectDatabase = async () => {
  await mongoose.connect(`${process.env.DATABASE}`);
};
