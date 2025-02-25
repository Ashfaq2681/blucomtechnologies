const  { MongoClient } = require ("mongodb");
require("dotenv").config({path: "backend/.env"})
// const { ATLAS_URL } = process.env

async function main() {
    const Db = process.env.ATLAS_URI
    const client = new MongoClient(Db)
try{
    await client.connect()
    const collections = await client.db("blucomtechnologies").collections()

    collections.forEach((collection) => console.log(collection.s.namesapce.collection))
} catch(e) {
    console.error(e)
} finally {
    await client.close
}
}
main()
