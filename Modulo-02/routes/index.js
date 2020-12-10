import express from 'express'

const app = express()
app.use(express.json())

app.all('/testAll', (request, response) => {
  response.send(request.method)
})

app.get('/teste?', (request, response) => {
  response.send('/teste?')
})

app.get('/buzz+', (request, response) => {
  response.send('/buzz+')
})

app.get('/one*Blue+', (request, response) => {
  response.send(request.path)
})

app.post('/test(ing)?', (request, response) => {
  console.log(request.body);
  response.send(request.path)
})

app.get('/testParams/:id', (request, response) => {
  response.send(request.params.id)
})

app.get('/testQuery', (request, response) => {
  response.send(request.query)
})

app.get('/testMultipleHandlers', (request, response, next) => {
  console.log('Callback 1');
  next()
}, (request, response) => {
  console.log('Callback 2');
  response.end()
})

const callback1 = (request, response, next) => {
  console.log('Callback 1');
  next()
}

function callback2(request, response, next) {
  console.log('Callback 2');
  next()
}

const callback3 = (request, response) => {
  console.log('Callback 3');
  response.end()
}

app.get('/testMultipleHandlersArray', [callback1, callback2, callback3])

app.route('/testRoute')
  .get((request, response) => {
    response.send('testRoute GET');
  })

  .post((request, response) => {
    response.send('testRoute POST');
  })

  .delete((request, response) => {
    response.send('testRoute DELETE')
  })
  

app.listen(3030, () => {
  console.log('API Started!');
})