<h1 align="center">Capítulo 02 - MongoDB Atlas</h1>
<p align="center">
  <img src="../../assets/logo.jpeg" width="300" heigth="300">
</p>

<p align="center">
  <img alt="Made by Nadia Ligia" src="https://img.shields.io/badge/made%20by-Nadia%20Ligia-informational">
  
  <a href="license.md">
  <img alt="License" src="https://img.shields.io/badge/License-MIT-informational">
  </a>
</p>

___

<br>

# Índice

- [Introdução](#-introdução)
  - [O serviço MongoDB Atlas](#-o-serviço-mongodb-atlas)
  - [Utilização do serviço](#-utilização-do-serviço)
  - [Integração ao MongoDB](#-integração-ao-mongodb)
- [Mongoose](#-mongoose)
  - [Definição](#-definição)
  - [Exemplo](#-exemplo)
  - [CRUD](#-crud)
- [Licença](#-licenca)


___

<br>

# ⁉️ Introdução

<br>

## 📖 O serviço MongoDB Atlas

- Database as a Service (DaaS) - serviço de banco de dados na nuvem totalmente gerenciado, com provisionamento e dimensionamento automatizados de bancos de dados MongoDB, backup e recuperação, monitoramento e alerta 24/7, ferramentas de gerenciamento baseadas na web e suporte
especializado.

- Três tipos:
  - Sandbox
  - Shared
  - Dedicated

<br>

## 📖 Utilização do serviço

1. O primeiro passo é a criação da conta no [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

2. Definição do tipo plano a ser utilizado.

3. Seleção de uma das opções de provedores disponíveis, neste caso foi selecionado a AWS e a região de Virginia (us-east-1).

4. Criação do Cluster.

5. Criação do Banco de dados.

6. Conexão com o banco de dados, que pode ser realizada de 3 formas: via mongo shell, pelo MongoDB Compass ou pelos drivers de conexão para a aplicação.


<br>

## 📖 Integração ao MongoDB

- Integração ao NodeJs.

- [Projeto 01](./projeto-01)

- Iniciar um projeto: `yarn init`

- Copiar conexão disponibilizada no site no arquivo `index.js`
  ```js
  const MongoClient = require('mongodb').MongoClient;
  const uri = "mongodb+srv://<user>:<password>@bootcamp.c4xzu.mongodb.net/<dbname>?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
  });
  ```

- Instalar MongoDB no projeto: `yarn add mongodb`

- Alterar a `collection` para a existente no banco de dados.

<br>

---

<br>

# ⁉️ Mongoose

<br>

## 📖 Definição

- O [Mongoose](https://www.npmjs.com/package/mongoose) é um framework ODM (Object Document Mapper) que realiza o mapeamento entre o modelo de documentos do MongoDB para o modelo orientado à objetos, semelhante aos frameworks ORM para os bancos relacionais. 

- Desta forma, o Mongoose permite a definição de objetos com schema fortemente tipado, que mapeia aos documentos no MongoDB, permitindo, assim, o modelamento de sua
aplicação.

<br>

## 📖 Exemplo

### 📌 Configuração

<br>

- [Projeto 02](./projeto-02)

- Iniciar projeto nodejs - `yarn init -y`

- Intalar mongoose - `yarn add mongoose`

- Fazer a conexão via mongoose no `index.js`
  - Conexão local:
  ```js
  await mongoose.connect('mongodb://localhost/my_database', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });
  ```

  - Conexão ao MongoDB Atlas:
  ```js
  await mongoose.connect('mongodb+srv://<user>i:<password>@bootcamp.c4xzu.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });
  ```
<br>

### 📌 Model

<br>

- Definir variável de Schema
```js
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
```

- Cadastrar novo estudante
```js
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
```
<br>

## 📖 CRUD

<br>

#### 📌 Criar o projeto API

```bash
yarn init -y
```

- criar arquivo `app.js`

<br>

#### 📌 Instalar as dependências

- instalar o `express` e o `mongoose`

```bash
yarn add express mongoose
```

<br>

#### 📌 Implementar o modelo com o Mongoose

- criar arquivo na pasta `model` que armazenará a criação do model.

- definir para qual coleção o modelo será referenciado.

<br>

#### 📌 Criação da API

- criação da estrutura base da API.

- separação dos aquivos de rotas.

- conectar API ao banco de dados.

<br>

#### 📌 Implementar a rota Create

- importação do modelo criado para utilização na rota.

```js
routes.post('/student', async (request, response) => {
  try {
    const student = new StudentModel(request.body);

    await student.save();

    response.send(student);
  } catch (error) {
    response.status(500).send(error);
  }
});
```

<br>

#### 📌 Implementar a rota Retrieve

```js
routes.get('/student', async (request, response) => {
  try {
    const students = await StudentModel.find({});

    response.send(students);
  } catch (error) {
    response.status(500).send(error);
  }
});
```

<br>

#### 📌 Implementar a rota Update

```js
routes.patch('/student/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const student = StudentModel.findByIdAndUpdate({ _id: id }, request.body, {
      new: true,
    });

    response.send(student);
  } catch (error) {
    response.status(500).send(error);
  }
});
```

<br>

#### 📌 Implementar a rota Delete

```js
routes.delete('/student:id', async (request, response) => {
  try {
    const { id } = request.params;

    const student = StudentModel.findByIdAndDelete({ _id: id });

    if (!student) {
      response.status(404).send('Documento não encontrado na coleção')
    } else {
      response.status(200).send();
    }
  } catch (error) {
    response.status(500).send(error)
  }
});
```
<br>

## Licença 
Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](../../LICENSE) para mais detalhes.