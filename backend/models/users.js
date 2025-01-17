const mongoose = require("mongoose");

const { Schema } = mongoose;

const userMultiStepForm = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    contact: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("user", userMultiStepForm, "users");
