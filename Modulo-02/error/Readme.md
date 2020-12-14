<h1 align="center">Tratamento de erros</h1>
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

Opções de definições de rotas com o [ExpressJS](https://expressjs.com/pt-br/).

## :book: Aulas

<br>

### :pushpin: Tratamento de erros

Tratamento de erros é uma parte muito importante de uma API. Um erro pode ser originado a partir de vários pontos, como por exemplo valores inválidos que foram passados como parâmetro. Por isso é importante que a API seja capaz de se recuperar de um erro e informar adequadamente ao usuário o que ocorreu, para que o mesmo possa tratar da melhor forma o ocorrido. O Express faz um tratamento padrão caso nenhum outro tenha sido especificado.

Caso o erro tenha sido gerado a partir de um código assíncrono e deseje utilizar o tratamento padrão do Express, é preciso passar o erro para o “next”, para que assim ele possa ser identificado. Caso não seja chamado o “next”, a requisição não irá retornar.

O Express permite que o desenvolvedor escreva as próprias funções para tratamento de erro. Para isso, basta adicionar um quarto parâmetro na função de middleware.

O middleware para tratamento de exceção deve ser configurado por último na instância do Express, de forma que ele possa receber erros gerados em todas as definições anteriores. É permitido que exista várias funções para tratamento de erros, da mesma forma como os middlewares comuns, bastando chamar o “next” passando o objeto de erro como parâmetro, para enviar o fluxo para a próxima função. É importante observar que nesse caso a última função de tratamento deverá encerrar a requisição através do objeto de resposta, caso contrário a requisição ficará pendente sem resposta.

**Tratamento de erro padrão**
```js
app.get('/', (request, response) => {
    throw new Error('Error message test')
})
```

**Tratamento de erro padrão assíncrono**
```js
app.post('/', async(request, response, next) => {
    try {
        throw new Error('Error message async')
    } catch (error) {
        next(error)
    }
})
```

**Tratamento de erro personalizado**
```js
app.use((error, request, response, next) => {
    console.log('Error 1');
    response.status(500).send('Ocorreu um erro. Tente novamente')
})
```

**Tratamento de erro em várias funções**
```js
app.use((error, request, response, next) => {
    console.log('Error 1');
    next(error)
})

app.use((error, request, response, next) => {
    console.log('Error 2');
    response.status(500).send('Ocorreu um erro. Tente novamente')
})
```

<br>

### :pushpin: Instalação

<br>

Para instalar o Express, primeiro é necessário iniciar um projeto Node e depois o Express será adicionado como dependência neste projeto.

:arrow_right: *iniciar o node*
```
npm init -y
```

ou

```
yarn init -y
```

:arrow_right: *instalar o ExpresJS*
```
npm install express
```

ou

```
yarn add express
```

:arrow_right: *instalar o Nodemon*
```
npm install nodemon
```

ou

```
yarn add nodemon
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

<img src="./assets/package-json.png" width="300" heigth="300">

<br>

## Licença 

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](../../LICENSE) para mais detalhes.
