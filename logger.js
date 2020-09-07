const { createLogger, format, transports } = require('winston')
const { combine, timestamp, printf } = format

const logFormat = printf(({ level, message, timestamp }) => {
  return `[${level}] ${timestamp}: ${message}`
})

const logger = createLogger({
  format: combine(
    timestamp(),
    logFormat
  ),
  transports: [
    new transports.Console({ handleExceptions: true })
  ]
})

if (process.env.NODE_ENV === 'production') {
  logger.add(new transports.File({ 
    filename: 'server.log', 
    handleExceptions: true 
  }))
}

module.exports = logger
