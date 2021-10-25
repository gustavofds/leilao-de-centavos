const { ObjectID } = require('mongodb');
const connection = require('./connection');

getAll = async () => {
  const db = await connection();

  const products = await db.collection('products').find().toArray();

  return products;
};

getById = async (id) => {
  const db = await connection();

  const product = await db.collection('products').findOne({ _id: ObjectId(id) });

  return product;
};

addBid = async (_id) => {
  const db = await connection();

  const products = await db.collection('products').updateOne({ _id: ObjectID(_id), }, { $inc: { lanceAtual: 5 }});

  return true;
};

module.exports = {
  getAll,
  addBid,
  getById,
};
