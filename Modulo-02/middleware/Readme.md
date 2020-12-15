<h1 align="center">Middleware</h1>
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

### :pushpin: Middleware

Funções de middleware são funções que tem acesso ao seguinte:

- Objeto de solicitação (req);

- Objeto de resposta (res);

- Próxima função de middleware no ciclo da requisição e resposta do aplicativo (next).

Podem executar qualquer código, fazer mudanças nos objetos de solicitação, encerrar o ciclo e chamar a próxima função de middleware na pilha.

Ela pode ser utilizada para interceptar chamadas em específico ou qualquer chamada.

Elas são as funções que são executadas quando determinada rota é atingida.

<img src="../assets/middleware.png" width="500">

Uma função de middleware pode ser implementada no nível da aplicação ou no nível do roteador. 

:arrow_right: Nível da aplicação

Pode ser configurado através de uma instância do Express, utilizando para isso as funções “use” ou uma específica de um método HTTP, como GET ou POST por exemplo.

:arrow_right: Nível do roteador

Não está vinculada diretamente à instância do Express, mas sim à uma instância do Router. 

É comum que um projeto, ao invés de colocar todas as suas rotas em um mesmo arquivo, faça uma divisão destas rotas em vários arquivos, utilizando para isso o Router. 

Essa abordagem faz com que o projeto fique mais organizado, mantendo as rotas relacionadas juntas, mas separando em arquivos as que não tem tanta relação, facilitando assim a manutenção e evolução do projeto.

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
