const { MongoClient } = require("mongodb");
require("dotenv").config(); // Ensure .env is in the root directory

async function main() {
    const Db = process.env.ATLAS_URI;
    
    if (!Db) {
        console.error("❌ ERROR: Missing ATLAS_URI in environment variables");
        process.exit(1); // Exit if no MongoDB connection string is provided
    }

    const client = new MongoClient(Db, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        console.log("✅ Connected to MongoDB successfully!");

        const collections = await client.db("blucomtechnologies").collections();

        collections.forEach((collection) => console.log(collection.namespace.collection));
    } catch (e) {
        console.error("❌ MongoDB Connection Error:", e);
    } finally {
        await client.close(); // Properly close the connection
        console.log("🔌 Connection closed");
    }
}

main();
