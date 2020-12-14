import express from 'express'
import carsRouter from './carsRouter.js'

const app = express()

app.use(express.json())
app.use('/cars', carsRouter)

app.use('/', (resquest, response, next) => {
    console.log(new Date());
    next()
})

app.get('/test', (request, response) => {
    response.send('GET OK')
})

app.listen(3040, () => {
    console.log('API is running! 🚀');
})