<h1 align="center">Gravação de logs</h1>
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

Gravação de logs com a biblioteca [Winston](https://www.npmjs.com/package/winston), biblioteca ligada diretamente com o NodeJS.


## :book: Aulas

<br>

### :pushpin: Gravação de logs

A partir dos logs é possível verificar como está sendo o uso dos endpoints, ou até mesmo rastrear erros que ocorreram. O Winston é uma biblioteca que suporta vários tipos de transporte, ou seja, com ele é possível que um mesmo log seja enviado a destinos diferentes, como por exemplo arquivos de log diferentes para um banco de dados remoto ou até mesmo para o próprio console. Ele também suporta os 7 níveis de log abaixo:
▪ error: 0
▪ warn: 1
▪ info: 2
▪ http: 3
▪ verbose: 4
▪ debug: 5
▪ silly: 6

Isso irá permitir que você possa configurar dinamicamente até qual ponto você deseja que sua aplicação registre os logs naquele momento.

O nível dos logs respeita a ordem crescente, por exemplo, ao definir a aplicação com um nível de log 4, ela irá gravar nos logs os níveis 4, 3, 2, 1, 0, excluindo então os acima dele, no caso o 5 e 6.

Outra funcionalidade interessante do Winston é a possibilidade de configurar formatos de log, adicionando informações customizadas no formato desejado, como por exemplo a data e horário do registro.



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

:arrow_right: *instalar o Winston*
```
npm install winston
```

ou

```
yarn add winston
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
