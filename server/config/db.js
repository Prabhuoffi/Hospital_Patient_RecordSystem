const mongoose = require('mongoose');
require('dotenv').config();

const DB_URL = process.env.DB_URL;

const connectDatabase = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw new Error('Failed to connect to the database');
  }
};

module.exports = { connectDatabase }

