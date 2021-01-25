import Router from 'express';
import accountList from './account.routes.js';
import avarage from './avarage.routes.js';
import balance from './balance.routes.js';
import accountDelete from './delete.routes.js';
import deposit from './deposit.routes.js';
import transfer from './transfer.routes.js';
import withdraw from './withdraw.routes.js';

const routes = Router();

routes.use('/accounts', accountList);

routes.use('/accounts/delete', accountDelete);

routes.use('/accounts/deposit', deposit);

routes.use('/accounts/withdraw', withdraw);

routes.use('/accounts/balance', balance);

routes.use('/accounts/transfer', transfer);

routes.use('/accounts/avarage', avarage);

export default routes;
