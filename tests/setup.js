require('dotenv').config()
const db = require('../db')

async function connectDB() {
  try {
    await db.connect(process.env.MONGO_URI_TEST)
  } catch (e) {
    console.error(`MongoDB connection error: ${e}`)
  }
}

connectDB()
