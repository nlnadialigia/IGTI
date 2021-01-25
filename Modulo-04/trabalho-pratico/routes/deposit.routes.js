import { Router } from 'express';
import AccountModel from '../models/AccountModel.js';

const deposit = Router();

deposit.post('/', async (request, response) => {
  try {
    const { agencia, conta, value } = request.body;

    if (!agencia || !conta || !value) {
      return response.send('Informe agência, conta e valor');
    }

    const query = { agencia, conta };
    const project = { _id: 0, balance: 1 };
    const accountBalance = await AccountModel.findOne(query, project);

    if (!accountBalance) {
      return response.status(404).send('Agência e/ou conta não encontrada');
    }

    let { balance } = accountBalance;
    balance += value;

    const newBalance = {
      $set: {
        balance,
      },
    };

    await AccountModel.updateOne(query, newBalance);

    return response.status(200).send({ balance });
  } catch (error) {
    return response.status(500).send(error);
  }
});

export default deposit;
