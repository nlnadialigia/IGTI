/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
import { Router } from 'express';
import AccountModel from '../models/AccountModel.js';

const privateAccount = Router();

privateAccount.patch('/', async (request, response) => {
  try {
    const findAgencies = await AccountModel.distinct('agencia');

    console.log(findAgencies);
    const vipAccounts = [];

    for (const agency of findAgencies) {
      const findTopAccount = await AccountModel.find({ agencia: agency })
        .limit(1)
        .sort({ balance: -1 });

      const { name, balance, conta } = findTopAccount[0];

      const accountExist = await AccountModel.findOne({
        agencia: 99,
        conta: Number(conta),
      });

      if (!accountExist) {
        vipAccounts.push({
          agencia: 99,
          name,
          balance,
          conta,
        });
      }
    }

    if (vipAccounts.length > 0) {
      await AccountModel.insertMany(vipAccounts);
    }

    const findPrivateAgency = await AccountModel.find({ agencia: 99 });

    return response.status(200).json(findPrivateAgency);
  } catch (error) {
    response.status(500).send(error);
  }
});

export default privateAccount;
