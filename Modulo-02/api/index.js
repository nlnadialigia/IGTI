import express from 'express'
import accountsRouter from './routes/account.js'
import { promises as fs } from 'fs'

const {readFile, writeFile} = fs

global.fileName = './data/accounts.json'

const app = express()
app.use(express.json())

app.use('/account', accountsRouter)

app.listen(3080, async () => {
  try {
    await readFile(global.fileName)
    console.log('API Started!');
  } catch (error) {
    const initialJson = {
      nextId: 1,
      account: []
    }
    writeFile(global.fileName, JSON.stringify(initialJson)).then(() => {
      console.log('API Started and File Created!');
    }).catch(error => {
      console.log(error);
    })
  }

})