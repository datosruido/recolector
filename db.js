const config = require("./config");
const { MongoClient } = require("mongodb");
const url = require("url");

const mongoDatabaseUrl = url.format({
    protocol: config.mongodb.tls ? "mongodb+srv" : "mongodb",
    slashes: true,
    auth: [config.mongodb.adminusername, config.mongodb.adminpassword].join(
        ":"
    ),
    host: config.mongodb.host,
    pathname: config.mongodb.database,
    query: {
        retryWrites: true,
        w: "majority",
    },
});

let mongoDatabase = null;

async function initializeDatabase() {
    const dbConnection = MongoClient.connect(mongoDatabaseUrl, { useNewUrlParser: true, useUnifiedTopology: true });
    mongoDatabase = (await dbConnection).db();
}

async function getDatabase() {
    if (!dbConnection) await initializeDatabase();
    return mongoDatabase;
}

module.exports = {
    getDatabase,
    initializeDatabase
}