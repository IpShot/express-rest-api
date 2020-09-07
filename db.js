const mongoose = require('mongoose')

// Enable mongoose logs in dev mode
if (process.env.NODE_ENV === 'development') {
  mongoose.set('debug', true)
}

/**
 * Connect to mongo db
 * @returns {Promise} Mongoose connect
 */
exports.connect = async () => {
  return mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
}
