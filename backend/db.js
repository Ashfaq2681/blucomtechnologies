const mongoose = require("mongoose");

const connectDB = async () => {
    console.log("server check")

    try {
        console.log("server check",process.env.ATLAS_URL)
        await mongoose.connect(process.env.ATLAS_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ MongoDB Connected Successfully!");
    } catch (error) {
        console.error("❌ MongoDB Connection Failed!", error);
        process.exit(1);
    }
};

module.exports = connectDB;
