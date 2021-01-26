import { Router } from 'express';
import AccountModel from '../models/AccountModel.js';

const lowest = Router();

lowest.get('/', async (request, response) => {
  try {
    const { value } = request.body;

    const lowestBalance = await AccountModel.find(
      {},
      { _id: 0, agencia: 1, conta: 1, balance: 1 },
    )
      .sort({ balance: 1 })
      .limit(value);

    return response.send(lowestBalance);
  } catch (error) {
    return response.status(500).send(error);
  }
});

export default lowest;
