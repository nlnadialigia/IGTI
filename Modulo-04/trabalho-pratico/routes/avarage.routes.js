import Router from 'express';
import AccountModel from '../models/AccountModel.js';

const avarage = Router();

avarage.get('/', async (request, response) => {
  try {
    const { agencia } = request.body;

    const accounts = await AccountModel.aggregate([
      { $match: { agencia } },
      { $group: { _id: '$agencia', average: { $avg: '$balance' } } },
    ]);

    return response.status(200).send(accounts);
  } catch (error) {
    return response.status(500).send(error);
  }
});

export default avarage;
