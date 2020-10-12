require('dotenv').config();

const { MongoClient } = require('mongodb');

const mongoDatabaseUrl = `mongodb+srv://${process.env.MONGODB_ADMINUSERNAME}:${process.env.MONGODB_ADMINPASSWORD}@${process.env.MONGODB_HOST}/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`;
let mongoDatabase = null;

async function initializeDatabase() {
    const dbConnection = await MongoClient.connect(mongoDatabaseUrl, { useNewUrlParser: true, useUnifiedTopology: true });
    mongoDatabase = dbConnection.db();
}

async function getDatabase() {
    if (!mongoDatabase) await initializeDatabase()
    return mongoDatabase
}

module.exports = {
    getDatabase,
    initializeDatabase
}