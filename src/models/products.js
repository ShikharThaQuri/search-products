const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ["T-Shirt", "Pant", "Shoes", "Hat"],
  },
  name: {
    type: String,
    require: true,
    max: 15,
    min: 3,
  },
  price: {
    type: Number,
    required: [true, "price must be provided"],
    min: [10, "price cannot be less then $10"],
    max: [99, "price cannot be more then $99"],
  },
  image: {
    type: String,
  },
});

module.exports =
  mongoose.models.products || mongoose.model("products", productSchema);
