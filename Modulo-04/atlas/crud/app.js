import express from 'express';
import mongoose from 'mongoose';
import { studentRouter } from './routes/studentRouter.js';

(async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://<user>:<password>@bootcamp.c4xzu.mongodb.net/<dbname>?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      },
    );
    console.log('MongoDB Conectado com sucesso!');
  } catch (error) {
    console.log(`Erro ao conectar no MongoDB - ${error}`);
  }
})();

const app = express();

app.use(express.json());
app.use(studentRouter);

app.listen(4444, () => {
  console.log('Servidor iniciado na porta 4444!');
});
