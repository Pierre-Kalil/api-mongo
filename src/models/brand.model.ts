import mongoose from "mongoose";
const { Schema } = mongoose;

const brandSchema = new Schema({
  id: String,
  name: String,
});

export const BrandModel = mongoose.model("Brand", brandSchema);
