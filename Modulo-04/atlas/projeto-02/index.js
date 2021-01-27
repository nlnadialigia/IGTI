import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

await mongoose.connect(`mongodb+srv://${process.env.USERDB}:${process.env.PWDDB}@bootcamp.c4xzu.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

const studentSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  subject: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  value: {
    type: Number,
    require: true,
  },
  lastModified: {
    type: Date,
    default: Date.now(),
  },
});

mongoose.model('student', studentSchema, 'student');

const student = mongoose.model('student');

new student({
  name: 'Paulo Renato',
  subject: 'Geografia',
  type: 'Prova Intermediaria',
  value: 22
}).save()
  .then(
    () => console.log('Documento inserido')
  ).catch(err => {
    console.log('Falha ao inserir o documento' + err);
  });
