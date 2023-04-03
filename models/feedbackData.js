const mongoose = require("mongoose");

const feedbackDataSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    feedback: String,

});

const feedbackData = mongoose.model("feedbackData", feedbackDataSchema);

module.exports = feedbackData;