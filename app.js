const express = require('express')
const morgan = require('morgan')
const logger = require('./logger')
const routes = require('./routes')
const app = express()

// HTTP requests logging
app.use(morgan(':remote-addr :remote-user :method :url HTTP/:http-version :status ":referrer" ":user-agent" - :response-time ms', { 
  stream: {
    write(message) {
      // Remove double line break
      logger.info(message.slice(0, message.length - 1))
    }
  }
}))

app.use('/', routes)

module.exports = app
