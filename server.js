require('dotenv').config()
const express = require('express')
const logger = require('./logger')
const routes = require('./routes')
const app = express()

app.use('/', routes)

app.listen(process.env.PORT, () => {
  logger.info(`Server started on port ${process.env.PORT}`)
})
