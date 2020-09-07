require('dotenv').config()
const db = require('../db')

async function connectDB() {
  try {
    await db.connect(process.env.TEST_MONGO_URI)
  } catch (e) {
    console.error(`MongoDB connection error: ${e}`)
  }
}

connectDB()
