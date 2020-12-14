import express from 'express'
import route from './routes.js'

const api = express()

api.use(express.json())
api.use(route)

api.listen(3030, () => {
    console.log('API is running! 🚀');
})