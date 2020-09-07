require('dotenv').config()
const logger = require('./logger')
const app = require('./app')
const db = require('./db')

async function start() {
  try {
    await db.connect()
    logger.info('MongoDB connected successfully')
  } catch (e) {
    logger.error(`MongoDB connection error: ${e}`)
    process.exit(-1)
  }
  app.listen(process.env.PORT, () => {
    logger.info(`Server started on port ${process.env.PORT}`)
  })
}

start()
