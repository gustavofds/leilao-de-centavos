const mongodb = require('mongodb');

const MONGO_DB_URL = 'mongodb://127.0.0.1:27017/leilao-de-centavos';

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let db = null;

function connection() {
  return db
    ? Promise.resolve(db)
    : mongodb.MongoClient.connect(MONGO_DB_URL, OPTIONS)
      .then((conn) => {
        db = conn.db('leilao-de-centavos');
        return db;
      })
      .catch((err) => {
        console.log(err);
        process.exit(1);
      });
}

module.exports = connection;