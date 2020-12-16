import express from 'express'
import { promises as fs } from 'fs'
const router = express.Router()

const { readFile, writeFile } = fs

router.post('/', async (request, response, next) => {
  try {
    let account = request.body
    if (!account.name || account.balance == null) {
      throw new Error('Name e Balance são obrigatórios')
    }

    const data = JSON.parse(await readFile(global.fileName))
    account = {
      id: data.nextId++,
      name: account.name,
      balance: account.balance
    }


    data.account.push(account)

    await writeFile(global.fileName, JSON.stringify(data, null, 2))
    response.send(account)

    logger.info(`POST/account - ${JSON.stringify(account)}`)
  } catch (error) {
    next(error)
  }
})

router.get('/', async (request, response, next) => {
  try {
    const data = JSON.parse(await readFile(global.fileName))
    delete data.nextId
    response.send(data)

    logger.info('GET/account')
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (request, response, next) => {
  try {
    const data = JSON.parse(await readFile(global.fileName))
    const account = data.account.find(account => account.id === parseInt(request.params.id))
    response.send(account)

    logger.info('GET/account/:id')
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', async (request, response, next) => {
  try {
    const data = JSON.parse(await readFile(global.fileName))
    data.account = data.account.filter(account => account.id !== parseInt(request.params.id))
    await writeFile(global.fileName, JSON.stringify(data, null, 2))
    response.send('Registro excluído com sucesso!')

    logger.info(`GET/account/:id - ${request.params.id}`)
  } catch (error) {
    next(error)
  }
})

router.put('/', async (request, response, next) => {
  try {
    let account = request.body

    if (!account.id || !account.name || account.balance == null) {
      throw new Error('Name e Balance são obrigatórios')
    }

    const data = JSON.parse(await readFile(global.fileName))
    const index = data.account.findIndex(acc => acc.id === account.id)

    if (index === -1) {
      throw new Error('Registro não encontrado')
    }

    data.account[index].name = account.name
    data.account[index].balance = account.balance

    await writeFile(global.fileName, JSON.stringify(data, null, 2))
    response.send(account)

    logger.info(`PUT/account - ${JSON.stringify(account)}`)
  } catch (error) {
    next(error)
  }
})

router.patch('/updateBalance', async (request, response, next) => {
  try {
    let account = request.body

    if (!account.id || account.balance == null) {
      throw new Error('Id e Balance são obrigatórios')
    }

    const data = JSON.parse(await readFile(global.fileName))
    const index = data.account.findIndex(acc => acc.id === account.id)

    if (index === -1) {
      throw new Error('Registro não encontrado')
    }

    data.account[index].balance = account.balance

    await writeFile(global.fileName, JSON.stringify(data, null, 2))
    response.send(data.account[index])

    logger.info(`PATCH/account/updateBalance - ${JSON.stringify(account)}`)
  } catch (error) {
    next(error)
  }
})

router.use((error, request, response, next) => {
  logger.error(`${error.message}`);
  response.status(400).send({ error: error.message })
})

export default router