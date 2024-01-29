const mongoose = require("mongoose");
const validator = require("validator");

const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please tell us your name."],
  },
  email: {
    type: String,
    required: [true, "Please provide your email."],
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email."],
  },
  contact: {
    type: String,
    required: [true, "Please provide your number."],
    max: 14,
  },
  message: {
    type: String,
    required: [true, "Please provide message."],
    max: [1000, "Mesage must not greater than 1000 words."],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;
