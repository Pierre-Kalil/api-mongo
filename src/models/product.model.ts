import mongoose from "mongoose";
const { Schema } = mongoose;

const productSchema = new Schema({
  id: String,
  name: String,
  description: String,
  price: { type: Number, min: 0 },
  inventory: Number,
  category: { type: mongoose.Types.ObjectId, ref: "Category" }, // type: mongoose.ObjectId
  brand: { type: mongoose.Types.ObjectId, ref: "Brand" }, // type: mongoose.ObjectId
});

export const ProductModel = mongoose.model("Product", productSchema);
