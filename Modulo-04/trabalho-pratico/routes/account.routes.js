import { Router } from 'express';
import AccountModel from '../models/AccountModel.js';

const accountList = Router();

accountList.get('/', async (request, response) => {
  try {
    const accounts = await AccountModel.find({});

    response.send(accounts);
  } catch (error) {
    response.status(500).send(error);
  }
});

export default accountList;
