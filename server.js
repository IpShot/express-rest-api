require('dotenv').config()
const express = require('express')
const logger = require('./logger')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
  logger.info(`Server started on port ${process.env.PORT}`)
})
