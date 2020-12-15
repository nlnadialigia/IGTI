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

<br>

### :pushpin: Método PUT

Esse método tem a função de atualizar as informações de determinado registro. Os dados dos registros são obtidos pelo body da requisição, o arquivo JSON é lido e é feita uma busca pelo registro de id correspondente ao passado no body. Ao encontrar, o registro é atualizado e o conteúdo é novamente salvo no arquivo JSON.

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
