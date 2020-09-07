require('dotenv').config()
const logger = require('./logger')
const app = require('./app')
const db = require('./db')

// Register handler of all missed promises rejections and throw them to logger
process.on('unhandledRejection', (reason) => {
  throw reason
})

async function start() {
  try {
    await db.connect()
    logger.info('MongoDB connected successfully')
  } catch (e) {
    logger.error(`MongoDB connection error: ${e}`)
    process.exit(1)
  }

  app.listen(process.env.PORT, () => {
    logger.info(`Server started on port ${process.env.PORT}`)
  })
}

start()
