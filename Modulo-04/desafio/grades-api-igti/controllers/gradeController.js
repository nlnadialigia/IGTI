/* eslint-disable no-unused-vars */
import db from '../models/index.js';
import { logger } from '../config/logger.js';
import StudentModel from '../models/StudentModel.js';

const create = async (request, response) => {
  try {
    const student = new StudentModel(request.body);

    await student.save();

    response.status(200).send(student);
    logger.info(`POST /grade - ${JSON.stringify(student)}`);
  } catch (error) {
    response
      .status(500)
      .send({ message: error.message || 'Algum erro ocorreu ao salvar' });
    logger.error(`POST /grade - ${JSON.stringify(error.message)}`);
  }
};

const findAll = async (request, response) => {
  try {
    const students = await StudentModel.find({});

    response.status(200).send(students);

    logger.info(`GET /grade`);
  } catch (error) {
    response
      .status(500)
      .send({ message: error.message || 'Erro ao listar todos os documentos' });
    logger.error(`GET /grade - ${JSON.stringify(error.message)}`);
  }
};

const findOne = async (request, response) => {
  const { id } = request.params;
  try {
    const student = await StudentModel.findById({
      _id: id,
    });

    response.send(student);

    logger.info(`GET /grade - ${id}`);
  } catch (error) {
    response.status(500).send({ message: `Erro ao buscar o Grade id: ${id}` });
    logger.error(`GET /grade - ${JSON.stringify(error.message)}`);
  }
};

const update = async (request, response) => {
  const { id } = request.params;

  try {
    const student = await StudentModel.findByIdAndUpdate(
      { _id: id },
      request.body,
      { new: true },
    );

    response.send(student);

    logger.info(`PUT /grade - ${id} - ${JSON.stringify(request.body)}`);
  } catch (error) {
    response
      .status(500)
      .send({ message: `Erro ao atualizar a Grade id: ${id}` });
    logger.error(`PUT /grade - ${JSON.stringify(error.message)}`);
  }
};

const remove = async (request, response) => {
  const { id } = request.params;

  try {
    await StudentModel.findByIdAndDelete({ _id: id });

    response.send('Registro excluído com sucesso!');
    logger.info(`DELETE /grade - ${id}`);
  } catch (error) {
    response
      .status(500)
      .send({ message: `Nao foi possivel deletar o Grade id: ${id}` });
    logger.error(`DELETE /grade - ${JSON.stringify(error.message)}`);
  }
};

const removeAll = async (request, response) => {
  try {
    await StudentModel.deleteMany({});

    response.send('Todos os registros foram removidos');
    logger.info(`DELETE /grade`);
  } catch (error) {
    response.status(500).send({ message: 'Erro ao excluir todos as Grades' });
    logger.error(`DELETE /grade - ${JSON.stringify(error.message)}`);
  }
};

export default { create, findAll, findOne, update, remove, removeAll };
