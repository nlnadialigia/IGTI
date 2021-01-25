import Router from 'express';
import accountList from './account.routes.js';
import balance from './balance.routes.js';
import accountDelete from './delete.routes.js';
import deposit from './deposit.routes.js';
import withdraw from './withdraw.routes.js';

const routes = Router();

routes.use('/accounts', accountList);

routes.use('/accounts/delete', accountDelete);

routes.use('/accounts/deposit', deposit);

routes.use('/accounts/withdraw', withdraw);

routes.use('/accounts/balance', balance);

export default routes;
