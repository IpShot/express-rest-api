const mongoose = require('mongoose')

// Enable mongoose logs in dev mode
if (process.env.NODE_ENV === 'development') {
  mongoose.set('debug', true)
}

/**
 * Connect to mongo db
 * @returns {Promise} Mongoose connect
 */
exports.connect = async (mongoURI) => {
  return mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
}
