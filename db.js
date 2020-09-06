const mongoose = require('mongoose')
const logger = require('./logger')

// Enable mongoose logs in dev mode
if (process.env.NODE_ENV === 'development') {
  mongoose.set('debug', true)
}

/**
 * Connect to mongo db
 *
 * @returns {object} Mongoose connection
 */
exports.connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    })
    logger.info('MongoDB connected successfully')
    return mongoose.connection
  } catch (e) {
    logger.error(`MongoDB connection error: ${e}`)
    process.exit(-1)
  }
}
