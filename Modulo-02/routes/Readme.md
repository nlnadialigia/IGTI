<h1 align="center">Rotas</h1>
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

### :pushpin: Express all

Além de permitir criar rotas para cada tipo de método HTTP, como *GET*, *POST*, *PUT* e *DELETE* por exemplo, o Express também permite que seja utilizado o método **“all”**, interceptando assim todos os tipos de métodos.

```js
app.all('/testAll', (request, response) => {
  response.send(request.method)
})
```

<br>

### :pushpin: Caracteres especiais

Um caminho para uma rota pode ser uma string, um padrão de string ou uma expressão regular.

Uma outra forma de definir o caminho de uma rota é definindo um padrão, podendo ser utilizado os caracteres `?`, `+`, `*` e `()`. Os caracteres “-“ e “.” são interpretados normalmente, sem tratamentos especiais.

:arrow_right: O caractere `?` indica que a letra imediatamente anterior a ele é opcional. Assim, o Express irá responder a rotas que correspondam a string como um todo, mas que contenham ou não essa letra naquela posição.

```js
app.get('/teste?', (request, response) => {
  response.send('/teste?')
})
```

:arrow_right: O caractere `+` indica que a letra imediatamente anterior a ela pode ser repetida diversas vezes naquela posição, que mesmo assim o Express irá interceptar a requisição e processá-la.

```js
app.get('/buzz+', (request, response) => {
  response.send('/buzz+')
})
```

:arrow_right: O caractere `*` indica que naquela posição pode ocorrer qualquer string, que desde que o restante da string esteja correta, a rota será processada.

```js
app.get('/one*Blue+', (request, response) => {
  response.send('/one*Blue')
})
```

:arrow_right: O caractere `()` indica que a string dentro do parênteses será tratada como uma unidade, então no caso de no meio do caminho estiver os caracteres “(ab)?”, isso indicará que poderá ou não a parte da string “ab” estar contida ali naquela parte.

```js
app.post('/test(ing)?', (request, response) => {
  console.log(request.body);
  response.send(request.path)
})
```

:arrow_right: Para que possamos buscar os parâmetros json da requisão é necessário informar ao express:

```js
app.use(express.json())
```

<br>

### :pushpin: Parâmetros na rota

Através das rotas também é possível capturar parâmetros. Isso é muito útil, pois permite que recursos possam ser identificados através da URL.

Os parâmetros podem ser obtidos através da propriedade `params` do objeto da requisição. Ao definir uma rota que espera um parâmetro, basta colocar um `:` antes do nome do parâmetro.

```js
app.get('/testParams/:id', (request, response) => {
  response.send(request.params.id)
})
```
:arrow_right: Parâmetros via quuery

Utilizado para pegar os parâmetros, na própria URL, à partir de uma interrogação.

```js
app.get('/testQuery', (request, response) => {
  response.send(request.query)
})
```

<br>

### :pushpin: Métodos para tratamento de rota

Método que faz com que mais de uma função seja executada para determinada requisição. Elas são executadas na ordem que foram inseridas, e a execução passa para a próxima quando o método `next()` é invocado. O funcionamento desse método pode ser de 2 formas: 

:arrow_right: Direto

```js
app.get('/testMultipleHandlers', (request, response, next) => {
  console.log('Callback 1');
  next()
}, (request, response) => {
  console.log('Callback 2');
  response.end()
})
```

:arrow_right: Através de um `array`

```js
const callback1 = (request, response, next) => {
  console.log('Callback 1');
  next()
}

function callback2(request, response, next) {
  console.log('Callback 2');
  next()
}

const callback3 = (request, response) => {
  console.log('Callback 3');
  response.end()
}

app.get('/testMultipleHandlersArray', [callback1, callback2, callback3])
```

<br>

### :pushpin: Route

Rotas que respondem ao mesmo endereço, mudando apenas o tipo do método HTTP, podem ser agrupadas sob o método `route` do Express, para facilitar a escrita e o entendimento.

O Express também permite que as rotas possam ser subdividas em vários arquivos, facilitando assim a organização do projeto. Isso é possível a partir da utilização do objeto *Router* do Express.

```js
app.route('/testRoute')
  .get((request, response) => {
    response.send('testRoute GET');
  })

  .post((request, response) => {
    response.send('testRoute POST');
  })

  .delete((request, response) => {
    response.send('testRoute DELETE')
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
