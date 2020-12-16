import express from 'express'
import { promises as fs } from 'fs'

const router = express.Router()
const {readFile, writeFile} = fs

router.post('/', async (request, response, next) => {
  try {
    let grade = request.body
    if (!grade.student || !grade.subject || !grade.type || grade.value == null) {
      throw new Error('Obrigatória a inserção de todos os dados')
    }
    
    const data = JSON.parse(await readFile(fileName))
    console.log(data)
    grade = {
      id: data.nextId++,
      ...grade,
      timestamp: new Date()
    }

    data.grades.push(grade)
    await writeFile(fileName, JSON.stringify(data, null, 2))

    response.send(grade)

    logger.info(`POST /grade - ${JSON.stringify(grade)}`)
    
  } catch (error) {
    next(error)
  }


})

router.get('/', async (resquest, response, next) => {
  try {
    const data = JSON.parse(await readFile(fileName))
    delete data.nextId

    response.send(data)

    logger.info('GET /grade')
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (request, response, next) => {
  try {
    const data = JSON.parse(await readFile(fileName))
    const grade = data.grades.find(item => item.id === parseInt(request.params.id))
    response.send(grade)

    logger.info(`GET/grade/:id - ${request.params.id}`)
  } catch (error) {
    next(error)
  }
})

router.put('/', async (request, response, next) => {
  try {
    let grade = request.body

    if (!grade.id || !grade.student || !grade.subject || !grade.type || grade.value == null) {
      throw new Error('Obrigatória a inserção de todos os dados')
    }

    const data = JSON.parse(await readFile(global.fileName))
    const index = data.grades.findIndex(item => item.id === grade.id)

    if (index === -1) {
      throw new Error('Registro não encontrado')
    }

    data.grades[index].student = grade.student
    data.grades[index].subject = grade.subject
    data.grades[index].type = grade.type
    data.grades[index].value = grade.value

    await writeFile(global.fileName, JSON.stringify(data, null, 2))
    response.send(grade)

    logger.info(`PUT/grade - ${JSON.stringify(grade)}`)
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', async (request, response, next) => {
  try {
    const data = JSON.parse(await readFile(fileName))
    data.grades = data.grades.filter(item => item.id !== parseInt(request.params.id))
    await writeFile(global.fileName, JSON.stringify(data, null, 2))
    response.send('Registro excluído com sucesso!')

    logger.info(`DELETE/grade/:id - ${request.params.id}`)
  } catch (error) {
    next(error)
  }
})

router.use((error, request, response, next) => {
  logger.error(`${error.message}`)
  response.status(400).send({ error: error.message })
})

export default router