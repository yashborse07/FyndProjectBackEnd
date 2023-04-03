const mongoose = require("mongoose");

const donationDataSchema = new mongoose.Schema({
  name: String,
  amount: Number,
  email: String,
  suggestions: String,

});

const donationData = mongoose.model("donationData", donationDataSchema);

module.exports = donationData;