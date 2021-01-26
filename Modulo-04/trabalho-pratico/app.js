import express from 'express';
import mongoose from 'mongoose';
import routes from './routes/index.js';

(async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://nlnadailgia-igti:zQfhdN5E6GF3gwL@bootcamp.c4xzu.mongodb.net/bank?retryWrites=true&w=majority',
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

app.listen(4060, () => {
  console.log('Servidor iniciado na porta 4060!');
});
