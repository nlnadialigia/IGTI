import mongoose from 'mongoose';

await mongoose.connect('mongodb+srv://<user>:<password>@bootcamp.c4xzu.mongodb.net/<dbname>?retryWrites=true&w=majority', {
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
