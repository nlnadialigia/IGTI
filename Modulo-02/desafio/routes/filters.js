import express from 'express'
import { promises as fs } from 'fs'

const filtersRouter = express.Router()
const { readFile, writeFile } = fs

filtersRouter.get('/totalGrades', async (request, response, next) => {
  try {

    const { student, subject } = request.query;

    const data = JSON.parse(await readFile(fileName))
    const filteredGrades = data.grades.filter(
      (grade) => grade.student === student && grade.subject === subject
    );

    if (!filteredGrades) {
      response.status(400).json({ error: 'Grade não encontrada!' });
    }

    const totalGrade = filteredGrades.reduce((accumulator, grade) => {
      return accumulator + grade.value;
    }, 0);

    response.status(200).json({
      student,
      subject,
      totalGrade,
    });

    logger.info(`GET/totalGrade - ${student}`)
  } catch (error) {
    next(error)
  }
})

filtersRouter.get('/avarageGrade', async (request, response, next) => {
  try {

    const { subject, type } = request.query;

    const data = JSON.parse(await readFile(fileName))
    const filteredAvarage = data.grades.filter(
      (grade) => grade.subject === subject && grade.type === type
    );

    if (!filteredAvarage) {
      response.status(400).json({ error: 'Grade não encontrada!' });
    }

    const totalGrade = filteredAvarage.reduce((accumulator, grade) => {
      return accumulator + grade.value;
    }, 0);

    const avarage = totalGrade/filteredAvarage.length

    response.status(200).json({
      subject,
      type,
      avarage,
    });

    logger.info(`GET/totalGrade - ${subject}/${type}`)
  } catch (error) {
    next(error)
  }


})

filtersRouter.get('/threeBestGrades', async (request, response, next) => {
  try {

    const { subject, type } = request.query;

    const data = JSON.parse(await readFile(fileName))
    const filteredTheBest = data.grades.filter(
      (grade) => grade.subject === subject && grade.type === type
    );

    if (!filteredTheBest) {
      response.status(400).json({ error: 'Grade não encontrada!' });
    }

    const orderGrades = filteredTheBest.sort(function (a, b) {
      return b.value - a.value
    })

    const theBest = orderGrades.slice(0,3)
    

    response.status(200).json({
      theBest
    });

    logger.info(`GET/threeBestGrades - ${subject}/${type}`)
  } catch (error) {
    next(error)
  }
})

export default filtersRouter