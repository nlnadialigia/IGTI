import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import db from './models/index.js';
import gradeRouter from './routes/gradeRouter.js';

(async () => {
  try {
    await db.mongoose.connect(db.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log('MongoDB is running!');
  } catch (error) {
    process.exit();
  }
})();

const app = express();

// define o dominio de origem para consumo do servico
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(gradeRouter);
app.use(
  cors({
    origin: 'http://localhost:8080',
  }),
);

app.get('/', (req, res) => {
  res.send('API em execucao');
});

app.listen(process.env.PORT || 8081, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
