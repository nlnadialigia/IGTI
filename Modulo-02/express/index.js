import express, { response } from 'express';

const app = express();

app.get('/', (request, response) => {
  response.send('Hello World')
})

app.post('/', (request, response) => {
  const a = 3
  const b = 5
  const result = soma(a, b)
  response.send(`Resultado: ${result}`)
})

function soma(a, b) {
  const result = a + b
  return result
}

app.listen(3030, () => {
  console.log('API start')
})