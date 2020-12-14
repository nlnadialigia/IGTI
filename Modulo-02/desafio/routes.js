import Router from 'express'
import {readFile} from './write-read-file.js'

const route= Router()

route.get('/', (request, response) => {
    response.send(readFile)
})

route.post('/', (request, response) => {
    response.send('POST ok')
})

export default route