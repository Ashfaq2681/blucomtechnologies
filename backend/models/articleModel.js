const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ArticleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: Object,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    collection: "ArticleDetails",
  }
);

module.exports = mongoose.model("ArticleDetails", ArticleSchema);
