const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: String,
    ingredients: String,
    price: String,
    type: String,
  },
  {
    collection: "meals",
  }
);

const User = mongoose.model("meals", userSchema);

module.exports = User;
