import express from 'express';
import mongoose from 'mongoose';
import routes from './routes/index.js';

(async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.USERDB}:${process.env.PWDDB}@bootcamp.c4xzu.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`,
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
app.use(routes);

app.listen(process.env.PORT, () => {
  console.log('Servidor iniciado na porta 4060!');
});
