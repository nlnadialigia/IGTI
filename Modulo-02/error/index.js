import express from 'express'
const app = express()
app.use(express.json())

app.get('/', (request, response) => {
    throw new Error('Error message test')
})

app.post('/', async(request, response, next) => {
    try {
        throw new Error('Error message async')
    } catch (error) {
        next(error)
    }
})

app.use((error, request, response, next) => {
    console.log('Error 1');
    next(error)
})

app.use((error, request, response, next) => {
    console.log('Error 2');
    response.status(500).send('Ocorreu um erro. Tente novamente')
})

app.listen(3050, () => {
    console.log('API is running!');
})