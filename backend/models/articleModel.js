const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String }, // URL of uploaded image
    category: { type: String },
    seoMeta: {
        title: String,
        description: String,
        keywords: [String],
    },
    publishDate: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model("Article", ArticleSchema);
