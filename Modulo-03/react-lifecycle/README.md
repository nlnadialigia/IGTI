<h1 align="center">React Lifecycle</h1>
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
  <a href="#heavy_check_mark-resultado">Resultado</a>&nbsp;|&nbsp;
  <a href="#licença">Licença</a>
</h3>

___

<br>
<br>

## ℹ️ Sobre

Criação de um projeto de um botão que quando clicado mostra uma lista. Caso esteja ativado mostrará quanto tempo a lista está em tela.

Esse projeto demonstra o uso dos 3 principais métodos do ciclo de vida do Class Component no React. 

- **componentDidMount** – executado após o primeiro render() e útil para requisições HTTP, por exemplo.
- **componentDidUpdate** – executado após toda invocação de render() e útil para aplicação de “efeitos colaterais”.
- **componentWillUnmount** – executado antes do componente “morrer” e útil para finalização de objetos, como por exemplo clearInterval.

Para mais informações sobre os ciclos de vida de Class Components no React, acesse este [link](https://reactjs.org/docs/react-component.html#the-component-lifecycle).


## 📖 Roteiro

✔ Criar projeto de nome react-lifecycle<br>
✔ Em *App.js*, colocar `console.log` em `componentDidMount`, `componentDidUpdate` e `componentWillUnmount`<br>
✔ Em *App.js*, criar estado com um vetor de `users []` e boolean `showUsers` false<br>
✔ Em `componentDidMount` de *App.js*, preencher vetor de `users` com [fetch](https://randomuser.me/api/?seed=rush&nat=br&results=10)<br>
✔ No render de *App.js*, mostrar botão para exibir `users` conforme valor de `showUsers`<br>
✔ Criar componente `Users`<br>
✔ Listar usuários através de `props` de forma simples, por enquanto<br>
✔ Em *Users.js* colocar `console.log` em `componentDidMount`, `componentDidUpdate` e `componentWillUnmount`<br>
✔ Em *Users.js*, criar estado para indicar por quantos segundos o componente está visível em tela (ex: secondsVisible: 0)<br>
✔ Em *Users.js*, criar atributo `this.interval` no *construtor*<br>
✔ Em *Users.js*, `componentDidMount`, ativar interval de 1 segundo para incrementar `secondsVisible`<br>
✔ Ao executar a aplicação, clicar no botão para esconder novamente os usuários e verificar `componentWillUnmount` de Users<br>
✔ Corrigir erro com `clearTimeout`.<br>
✔ Estilizar app.<br>

## ✔️ Resultado

<img src="./assets/results.gif" width="300" heigth="300">
<br><br>

## Licença 
Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](../../LICENSE) para mais detalhes.
