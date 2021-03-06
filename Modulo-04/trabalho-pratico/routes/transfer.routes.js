import Router from 'express';
import AccountModel from '../models/AccountModel.js';

const transfer = Router();

transfer.post('/', async (request, response) => {
  try {
    const rate = 8;
    const { originNumber, destinyNumber, value } = request.body;

    if (!originNumber || !value || !destinyNumber) {
      return response.send(
        'Preencha todos os dados para efetuar a transferência.',
      );
    }

    const query = {
      origin: { conta: originNumber },
      destiny: { conta: destinyNumber },
    };

    const project = { _id: 0, balance: 1, agencia: 1 };

    const originNumberBalance = await AccountModel.findOne(
      query.origin,
      project,
    );

    if (!originNumberBalance) {
      return response.status(404).send({
        error: `Conta não encontrada, conta: ${originNumber}`,
      });
    }

    const destinyNumberBalance = await AccountModel.findOne(
      query.destiny,
      project,
    );

    if (!destinyNumberBalance) {
      return response.status(404).send({
        error: `Conta não encontrada, conta: ${destinyNumber}`,
      });
    }

    let newValue = value;
    if (originNumberBalance.agencia !== destinyNumberBalance.agencia) newValue += rate;

    if (originNumberBalance.balance - newValue < 0) {
      return response.send('Saldo insuficiente para a transferência.');
    }

    const newBalance = {
      $set: {
        balance: originNumberBalance.balance - newValue,
      },
    };

    await AccountModel.updateOne(query.origin, newBalance);

    newBalance.$set.balance = destinyNumberBalance.balance + newValue;
    await AccountModel.updateOne(query.destiny, newBalance);

    return response
      .status(200)
      .send({ balance: originNumberBalance.balance - newValue });
  } catch (error) {
    return response.status(500).send(error);
  }
});

export default transfer;
