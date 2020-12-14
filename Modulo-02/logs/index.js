import express from 'express'
import winston from 'winston'

const app = express()
app.use(express.json())

app.listen(3060, () => {
    console.log('API STARTED!');
})