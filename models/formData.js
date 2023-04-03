

const mongoose = require("mongoose");

const formDataSchema = new mongoose.Schema({
  name: String,
  age: Number,
  address: String,
  college: String,
  friend: String,
  views: String,
});

const FormData = mongoose.model("FormData", formDataSchema);

module.exports = FormData;
