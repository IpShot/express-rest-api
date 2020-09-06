require('dotenv').config()
const express = require('express')
const logger = require('./logger')
const db = require('./db')
const routes = require('./routes')
const app = express()

app.use('/', routes)

async function start() {
  await db.connect()
  app.listen(process.env.PORT, () => {
    logger.info(`Server started on port ${process.env.PORT}`)
  })
}

start()
