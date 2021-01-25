import { Router } from 'express';
import AccountModel from '../models/AccountModel.js';

const accountDelete = Router();

accountDelete.delete('/', async (request, response) => {
  try {
    const { agencia, conta } = request.body;

    const deleteAccount = await AccountModel.findOneAndDelete({
      $and: [{ agencia }, { conta }],
    });

    if (!deleteAccount) {
      return response.send('Conta não encontrada');
    }

    const activeAccount = await AccountModel.find({ agencia });

    const filter = activeAccount.length;

    return response
      .status(200)
      .send(`Contas ativas na agência ${agencia}: ${filter}`);
  } catch (error) {
    return response.status(500).send(error);
  }
});

export default accountDelete;
