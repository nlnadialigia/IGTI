<h1 align="center">Construção de uma API</h1>
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

<h3 align="center">
  <a href="#information_source-sobre">Sobre</a>&nbsp;|&nbsp;
  <a href="#book-especificações">Aulas</a>&nbsp;|&nbsp;
  <a href="#licença">Licença</a>
</h3>

___

<br>
<br>

## :information_source: Sobre

Construção de uma API fará a persistência dos registros em arquivo.

## :book: Aulas

<br>

### :pushpin: My bank api

Desenvolvimento de uma api de controle bancária, com as funcionalidades de criação, depósito, saque, saldo e exclusão.

Também serão desenvolvidas as tratativas de erros e gravação de log.

<br>

### :pushpin: Configurações do projeto

- Criação do servidor 

- Criação do arquivo `account.js` que armazenará as rotas da aplicação

- Criação do arquivo `json` que armazenará os dados da aplicação.
- Na inicialização do servidor deverá verificar a existência ou não do arquivo e a criação do mesmo caso ele não exista.
```js
try {
    await readFile('./data/accounts.json')
    console.log('API Started!');
} catch (error) {
    const initialJson = {
    nextId: 1,
    account: []
    }
    writeFile('./data/accounts.json', JSON.stringify(initialJson)).then(() => {
    console.log('API Started and File Created!');
    }).catch(error => {
    console.log(error);
    })
}
```

- Criação do arquivo `nodemon.json` para configurar a não inicialização a cada alteração no arquivo `json`.
```json
{
    "ignore": ["*.json"]
}
```


<br>

### :pushpin: Método post

- Este método serve para salvar os dados da conta. Ele recebe as informações no body da requisição, constrói um objeto contendo estas informações juntamente com o próximo id de um registro.

- O método então faz a leitura do arquivo json, que contém todos os registros armazenados, faz a adição do novo registro e grava novamente no arquivo json.

```js
router.post('/', async (request, response) => {
  try {
    let account = request.body
    const data = JSON.parse(await readFile('./data/accounts.json'))  

    account = {id: data.nextId++, ...account}

    data.account.push(account)

    await writeFile(`./data/accounts.json`, JSON.stringify(data, null, 2))
    response.send(account)
  } catch (error) {
    response.status(400).send({ error: error.message })
  }
})
```

**Observações:**

*- Para que o `id` seja o primeiro dos dados do arquivo, fazer a desconstrução da variável account.*

*- Utilizando o operador `++` logo apóis o `nextId`, essa variável será incrementada após a sua utilização. Se quiséssemos que a incrementação fosse anterior à utilização o acréscimo do operador seria antes da variável.*

<br>

### :pushpin: Método GET

- Esse método serve para buscar todos os registros salvos no json e retornar ao usuário.

- O conteúdo do arquivo é parseado para JSON através do método JSON.parse, para que possa ser retornado em um formato mais adequado para o usuário. Antes de devolver o resultado, é removida a propriedade “nextId” do conteúdo, pois essa informação é interna da API e o usuário não precisa recebê-la. 

```js
router.get('/', async (request, response) => {
  try {
    const data = JSON.parse(await readFile(global.fileName))
    delete data.nextId
    response.send(data)

  } catch (error) {
    response.status(400).send({error: error.message})
  }
})
```

<br>

### :pushpin: Método GET por id

A diferença deste método para o método anterior é que neste é retornado apenas o registro de id igual ao passado como parâmetro. Ele também se inicia lendo o arquivo, e depois ele executa o find nos dados buscando um registro que tenha o id informado. Caso seja encontrado, o método retorna o registro, caso contrário ele encerra sem retorno.

```js
router.get('/:id', async (request, response) => {
  try {
    const data = JSON.parse(await readFile(global.fileName))
    const account = data.account.find(account => account.id === parseInt(request.params.id))
    if (account) {
      response.send(account)
    } else {
      response.send('Registro não encontrado')
    }
  } catch (error) {
    response.status(400).send({error: error.message})
  }
})
```

<br>

### :pushpin: Método DELETE

- O método se inicia com a leitura dos registros salvos no arquivo JSON, e depois é executado um método filter, removendo o registro de id igual ao informado. O restante dos dados é então novamente salvo no arquivo JSON.

```js
router.delete('/:id', async (request, response) => {
  try {
    const data = JSON.parse(await readFile(global.fileName))
    data.account = data.account.filter(account => account.id !== parseInt(request.params.id))
    await writeFile(global.fileName, JSON.stringify(data, null, 2))
    response.send('Registro excluído com sucesso!')

  } catch (error) {
    response.status(400).send({ error: error.message })
  }
})
```

<br>

### :pushpin: Método PUT

- Esse método tem a função de atualizar as informações de determinado registro. Os dados dos registros são obtidos pelo body da requisição, o arquivo JSON é lido e é feita uma busca pelo registro de id correspondente ao passado no body. Ao encontrar, o registro é atualizado e o conteúdo é novamente salvo no arquivo JSON.

```js
router.put('/', async (request, response) => {
  try {
    let account = request.body
    const data = JSON.parse(await readFile(global.fileName))
    const index = data.account.findIndex(acc => acc.id === account.id)

    data.account[index] = account
    await writeFile(global.fileName, JSON.stringify(data, null, 2))
    response.send(account)

  } catch (error) {
    response.status(400).send({ error: error.message })
  }
})
```

- Não deve ser confundido com o `patch`. Nesse método é atualizado algum dado do registro e não o registro todo.
```js
router.patch('/updateBalance', async (request, response) => {
  try {
    let account = request.body
    const data = JSON.parse(await readFile(global.fileName))
    const index = data.account.findIndex(acc => acc.id === account.id)

    data.account[index].balance = account.balance
    await writeFile(global.fileName, JSON.stringify(data, null, 2))
    response.send(data.account[index])

  } catch (error) {
    response.status(400).send({ error: error.message })
  }
})
```

<br>

### :pushpin: Tratamento de erros

- Para tratativa de erro utilizar `router.use` após todos os métodos que utilizarão os erros.

- Na `arrow function` é necessário passar todos os parâmetros para que o programa entenda qual é o parâmetro que será utilizado.

- Nos métods que utilizarão o erro é necessária a inclusão do `next` nos parâmetros da `arrow function`.

```js
router.use((error, request, response, next) => {
  console.log(error);
  response.status(400).send({ error: error.message })
})
```

<br>

### :pushpin: Gravação de logs

- Utilização da ferramenta *Wintons* para a gravação de logs.

- Será utilizado para substituir todos os `console.log` da aplicação e em todas as requisições, informando o que foi feito.

- Quando o `logger` for definido de forma global o uso da palavra `global` quando da utilização do mesmo é facultativo.

```js
const { combine, timestamp, label, printf } = winston.format
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [label] ${level}: ${message}`
})

global.logger = winston.createLogger({
  level: "silly",
  transports: [
    new (winston.transports.Console)(),
    new (winston.transports.File)({ filename: "my-bank-api.log" })
  ],
  format: combine(
    label({ label: 'my-banck-api' }),
    timestamp(),
    myFormat
  )
})
```

<br>

### :pushpin: Validação dos campos

- Para que não sejam acrescentados dados indevidos ou gerados registros vazios ou faltando campos, será realizada a validadação dos campos.

- Como o valor do `balance` pode ser *0*, a validação deverá passar utilizando `null`

- Para que não sejam inseridos campos adversos, remover o operador `spread` e inserir todos os campos que estarão na api.

- As validações serão utilizadas nos métodos *post*, *put* e *patch*.

**Exemplo no método POST**

```js
if (!account.name || account.balance == null) {
  throw new Error('Name e Balance são obrigatórios')
}
```

<br>

### :pushpin: Cors

O compartilhamento de recursos entre origens (CORS) é um recurso de segurança de navegador que restringe as solicitações HTTP entre origens que são iniciadas em scripts em execução no navegador. Se os recursos da API REST receberem solicitações HTTP não simples de origem cruzada, será necessário ativar o suporte ao [CORS](https://expressjs.com/en/resources/middleware/cors.html).

<br>

### :pushpin: Documentação

- Criação de documentação para os endpoints.

- Para a geração da documentação foi utilizado o [Swagger](https://swagger.io/).

- Para edição o próprio Swagger possuir um [editor](https://editor.swagger.io/).

- O arquivo gerado será copiado no `doc.js`.

- Para a utilização da documentação na api será utilizada a biblioteca [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express)

<br>

### :pushpin: Iniciar projeto

<br>

O projeto poderá ser inicializado com `npm` ou `yarn`.

```
npm install
```

ou

```
yarn
```

### :pushpin: Rodar o servidor

Para rodar o projeto criado utilizar o comando `nodemon index.js`.

Uma outra forma é criar um script dentro do `package.json` e rodar o comando no terminal. Esta foi a forma utilizada neste projeto, criando o script `start`.

Para inicializar: 

```bash
npm start
```

ou

```bash
yarn start
```

:arrow_right: *package.json*

<img src="../assets/package-json.png" width="300" heigth="300">

<br>

## Licença 

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](../../LICENSE) para mais detalhes.
