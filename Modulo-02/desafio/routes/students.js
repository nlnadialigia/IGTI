import express from 'express'
import {promises as fs} from 'fs'

const routerStudents = express.Router()
const {readFile, writeFile} = fs

routerStudents.get('/totalGrades', async (request, response, next) => {
  try {
    
    const { student, subject } = request.query;

    const gradesFile = await readFile(global.fileName);
    const filteredGrades = gradesFile.grades.filter(
      (grade) => grade.student === student && grade.subject === subject
    );

    if (!filteredGrades) {
      return res.status(400).json({ error: 'Grade não encontrada!' });
    }

    const totalGrade = filteredGrades.reduce((acc, grade) => {
      return acc + grade.value;
    }, 0);

    return res.status(200).json({
      student,
      subject,
      totalGrade,
    });

    logger.info(`GET/totalGrade - ${json.student}`)
  } catch (error) {
    next(error)
  }
})

export default routerStudents