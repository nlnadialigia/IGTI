import { Router } from 'express';
import AccountModel from '../models/AccountModel.js';

const balance = Router();

balance.get('/', async (request, response) => {
  try {
    const { agencia, conta } = request.body;

    if (!agencia || !conta) {
      return response.send('Informe agência e conta');
    }

    const query = { agencia, conta };
    const project = { _id: 0, balance: 1 };
    const accountBalance = await AccountModel.findOne(query, project);

    if (!accountBalance) {
      return response.status(404).send('Agência e/ou conta não encontrada');
    }

    console.log(accountBalance);

    return response.send({ accountBalance });
  } catch (error) {
    return response.status(500).send(error);
  }
});

export default balance;
