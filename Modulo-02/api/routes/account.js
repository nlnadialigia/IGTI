import express from 'express'
import { promises as fs } from 'fs'
const router = express.Router()

const { readFile, writeFile } = fs

router.post('/', async (request, response) => {
  try {
    let account = request.body
    const data = JSON.parse(await readFile(global.fileName))  

    account = {id: data.nextId++, ...account}

    data.account.push(account)

    await writeFile(global.fileName, JSON.stringify(data, null, 2))
    response.send(account)
  } catch (error) {
    response.status(400).send({ error: error.message })
  }
})

router.get('/', async (request, response) => {
  try {
    const data = JSON.parse(await readFile(global.fileName))
    delete data.nextId
    response.send(data)

  } catch (error) {
    response.status(400).send({error: error.message})
  }
})

router.get('/:id', async (request, response) => {
  try {
    const data = JSON.parse(await readFile(global.fileName))
    const account = data.account.find(account => account.id === parseInt(request.params.id))
    if (account) {
      response.send(account)
    } else {
      response.send('Registro não encontrado')
    }
  } catch (error) {
    response.status(400).send({error: error.message})
  }
})

export default router