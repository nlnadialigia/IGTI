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
  <a href="#book-roteiro">Roteiro</a>&nbsp;|&nbsp;
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

✔ Criar estrutura de pastas com index.html e pasta ./js com script.js<br>
✔ Modificar título de index.html <br>
✔ Certificar que extensão Live Server esteja devidamente instalada.<br>
✔ Executar Live Server e testar mudanças<br>
✔ Montar HTML com botão e lista não ordenada vazia. Definir id's para `<button>` e `<ul>`.<br>
✔ Montar JavaScript com window.addEventListener<br>
✔ Criar estado da aplicação com array de cliques.<br>
✔ Implementar clique do botão de forma que todas as `<li>`'s sejam preenchidas novamente.<br>
✔ Implementar função para formatar data/hora em arquivo isolado, referenciar arquivo antes de script.js e utilizá-la ao preencher o conteúdo de `<li>`.<br>
✔ Implementar função para mostrar em document.title a quantidade de cliques no botão.<br>
✔ Mostrar no Chrome Dev Tools que a `<ul>` é recriada eo app é, portanto, pouco performático.<br>
✔ Enfatizar código que o React encapsula e abstrai para o programador.<br>

<br>

### 📌 JavaScript performático

✔ Reaproveitar projeto anterior<br>
✔ Modificar título de index.html <br>
✔ Modificar implementação do clique do botão de forma que seja inseridas uma nova li a cada clique.<br>
✔ Mostrar no Chrome Dev Tools que somente a nova li é criada,provando que o app é mais performático.<br>

### 📌 React com Class Components

✔ Utilizar _react-projeto-base <br>
✔ Transformar App.js em Class Component<br>
✔ Definir this.state <br>
✔ Reaproveitar função para transformação de data/hora no formato import/export<br>
✔ Implementar render()<br>
✔ Implementar clique no botão com método handleClick<br>
✔ Implementar componentDidUpdate para atualizar document.title com a quantidade de cliques.<br>

### 📌 React com Hooks

✔ Utilizar _react-projesto-base <br>
✔ Definir estado com useState  <br>
✔ Reaproveitar função para transformação de data/hora no formato import/export<br>
✔ Implementar renderização do componente <br>
✔ Implementar clique no botão com closure handleClick<br>
✔ Implementar useEffect para atualizar document.title com a quantidade de cliques.<br>


## Licença 

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](../../LICENSE) para mais detalhes.
