import express from 'express';
import controller from '../controllers/gradeController.js';

const gradeRouter = express();

gradeRouter.post('/grade', controller.create);
gradeRouter.get('/grade', controller.findAll);
gradeRouter.get('/grade/:id', controller.findOne);
gradeRouter.put('/grade/:id', controller.update);
gradeRouter.delete('/grade/:id', controller.remove);
gradeRouter.delete('/grade', controller.removeAll);

export default gradeRouter;
