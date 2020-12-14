import express from 'express'
import winston from 'winston'

const app = express()
app.use(express.json())

const {printf, combine, label, timestamp} = winston.format

const myFormat = printf(({level, label, message, timestamp}) => {
    return `${timestamp} [${label}] ${level}: ${message} `
})

const logger = winston.createLogger({
    level: "silly",
    transports: [
        new (winston.transports.Console),
        new (winston.transports.File)({filename: 'my-log.log'})
    ],
    format: combine(
        label({label: 'my-app'}),
        timestamp(),
        myFormat
    )
})

logger.error('Error log')
logger.warn('Warn log')
logger.info('Info log')
logger.verbose('Verbose log')
logger.debug('Debug log')
logger.silly('Silly log')
logger.log('info', 'Hello with parameter')

app.listen(3060, () => {
    console.log('API STARTED!');
})