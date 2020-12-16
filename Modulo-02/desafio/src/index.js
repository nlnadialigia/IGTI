import express from 'express'
import { promises as fs } from 'fs'
import winston from 'winston'
import swaggerUi from 'swagger-ui-express'
import gradesRouter from '../routes/grades.js'
import filtersRouter from '../routes/filters.js'

const app = express()
app.use(express.json())
app.use('/grade', gradesRouter)
app.use('/filters', filtersRouter)

const { readFile, writeFile } = fs
const { combine, timestamp, label, printf } = winston.format
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] - ${level}: ${message}`
})

global.fileName = './data/grades.json'
global.logger = winston.createLogger({
  level: "silly",
  transports: [
    new (winston.transports.Console)(),
    new (winston.transports.File)({ filename: 'grades-control-api.log' })
  ],
  format: combine(
    label({ label: 'grades-control-api' }),
    timestamp(),
    myFormat
  )
})

app.listen(3000, async () => {
  try {
    await readFile(fileName)
    logger.info('API Started!');
  } catch (error) {
    logger.error(error)
  }
})