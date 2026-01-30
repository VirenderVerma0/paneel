// // db.js
// const { MongoClient } = require('mongodb');
// require('dotenv').config();
// const uri = process.env.MONGO_URL;
// const client = new MongoClient(uri);

// console.log('MongoDB URI:', uri);
// let db;

// async function connectDB() {
//   try {
//     await client.connect();
//     db = client.db(); 
//     console.log('MongoDB connected');
//   } catch (err) {
//     console.error('MongoDB connection error:', err);
//   }
// }

// function getDB() {
//   if (!db) {
//     throw new Error('Database not connected. Call connectDB first.');
//   }
//   return db;
// }

// module.exports = { connectDB, getDB };


const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB:", process.env.MONGO_URL);
    await mongoose.connect(process.env.MONGO_URL, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log("MongoDB Connected Successfully");
  } catch (err) {
    console.error("MongoDB Connection Error:", err);
    process.exit(1); // Exit app if connection fails
  }
};

module.exports = { connectDB };
