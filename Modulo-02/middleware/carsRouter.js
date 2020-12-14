import express from 'express'

const router = express.Router()

router.get('/', (request, response) => {
    console.log('GET /CARS');
    response.send('GET /CARS')
})

router.get('/price', (request, response) => {
    console.log('GET /CARS/PRICE');
    response.send('GET /CARS/PRICE')
})

export default router