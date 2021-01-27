import { Router } from 'express';
import AccountModel from '../models/AccountModel.js';

const highest = Router();

highest.get('/', async (request, response) => {
  try {
    const { value } = request.body;

    const highestBalance = await AccountModel.find(
      {},
      { _id: 0, agencia: 1, conta: 1, name: 1, balance: 1 },
    )
      .sort({ balance: -1, name: 1 })
      .limit(value);

    return response.send(highestBalance);
  } catch (error) {
    return response.status(500).send(error);
  }
});

export default highest;
