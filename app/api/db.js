const { MongoClient } = require('mongodb');

const connectionUrl = 'mongodb://mangodb:27017/mangodb';

let db;

const getDatabaseInstance = async (name) => {
    if (db) {
        return db;
    }

    try {
        const client = await MongoClient.connect(connectionUrl);
        db = client.db(name);
    } catch (err) {
        throw err;
    } finally {
        return db;
    }
}

module.exports = getDatabaseInstance;