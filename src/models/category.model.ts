import mongoose from "mongoose";
const { Schema } = mongoose;

const categorySchema = new Schema({
  id: String,
  name: String,
  description: String,
});

export const CategoryModel = mongoose.model("Category", categorySchema);
