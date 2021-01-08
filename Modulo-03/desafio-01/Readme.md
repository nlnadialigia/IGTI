<h1 align="center">Desafio 01 - Criação de um app simples</h1>
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
  <a href="#book-especificações">Roteiro</a>&nbsp;|&nbsp;
  <a href="#rocket-resultado">Resultado</a>&nbsp;|&nbsp;
  <a href="#licença">Licença</a>
</h3>

___

<br>
<br>

## ℹ️ Sobre

Criação de um app simples de um botão que preenche uma lista não ordenada de itens cujo conteúdo é a data/hora do clique.

Este projeto será desenvolvido em:

• [JavaScript puro não-performático](./javascript-nao-performatico)
• [JavaScript puro performático](./javascript-performatico)
• [React com Class Components](./react-classes)
• [React com Functional Components + Hooks](./react-hooks)

## 📖 Roteiro

### 📌 JavaScript não-performático

✔ Criar estrutura de pastas com index.html e pasta ./js com script.js
✔ Modificar título de index.html 
✔ Certificar que extensão Live Server esteja devidamente instalada.
✔ Executar Live Server e testar mudanças
✔ Montar HTML com botão e lista não ordenada vazia. Definir id's para `<button>` e `<ul>`.
✔ Montar JavaScript com window.addEventListener
✔ Criar estado da aplicação com array de cliques.
✔ Implementar clique do botão de forma que todas as <li>'s sejam preenchidas novamente.
✔ Implementar função para formatar data/hora em arquivo isolado, referenciar arquivo antes de script.js e utilizá-la ao preencher o conteúdo de `<li>`.
✔ Implementar função para mostrar em document.title a quantidade de cliques no botão.
✔ Mostrar no Chrome Dev Tools que a `<ul>` é recriada eo app é, portanto, pouco performático.
✔ Enfatizar código que o React encapsula e abstrai para o programador.

<br>

### 📌 JavaScript performático

✔ Reaproveitar projeto anterior
✔ Modificar título de index.html 
✔ Modificar implementação do clique do botão de forma que seja inseridas uma nova li a cada clique.
✔ Mostrar no Chrome Dev Tools que somente a nova li é criada,provando que o app é mais performático.

### 📌 React com Class Components

✔ Utilizar _react-projeto-base 
✔ Transformar App.js em Class Component
✔ Definir this.state 
✔ Reaproveitar função para transformação de data/hora no formato import/export
✔ Implementar render()
✔ Implementar clique no botão com método handleClick
✔ Implementar componentDidUpdate para atualizar document.title com a quantidade de cliques.

### 📌 React com Hooks

✔ Utilizar _react-projesto-base 
✔ Definir estado com useState  
✔ Reaproveitar função para transformação de data/hora no formato import/export
✔ Implementar renderização do componente 
✔ Implementar clique no botão com closure handleClick
✔ Implementar useEffect para atualizar document.title com a quantidade de cliques.

## :rocket: Resultado

<p align="center">
  <img src="./assets/result.gif" width="300" heigth="300">
</p>

<br>

## Licença 

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](../../LICENSE) para mais detalhes.
