<h1 align="center">Arquivos estáticos</h1>
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

Servindo arquivos estáticos com Express.


## :book: Aulas

<br>

### :pushpin: Servindo arquivos estáticos

Uma funcionalidade interessante do Express é que ele permite que sejam servidos arquivos estáticos, sem que para isso tenha que se instalar uma nova ferramenta ou fazer muitas configurações. Ele já vem com uma função de middleware embutida, chamada “express.static”, que recebe como parâmetro o diretório raiz de onde estão localizados os arquivos, partindo da raiz da aplicação. Dessa forma é possível servir qualquer tipo de conteúdo estático, como imagens, páginas HTML, arquivos JavaScript e arquivos CSS, por exemplo. 

Para servir mais de uma pasta do projeto como arquivos estáticos, basta escrever essa linha de código quantas vezes for preciso com os nomes dos diretórios desejados. Também é possível criar um caminho virtual para acesso ao conteúdo, mesmo que ele não exista fisicamente. Para isso basta passá-lo como primeiro parâmetro da função.


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

<img src="../assets/package-json.png" width="300" heigth="300">

<br>

## Licença 

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](../../LICENSE) para mais detalhes.
