<h1 align="center">Class Component - parte 02</h1>
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
  <a href="#licença">Licença</a>
</h3>

___

<br>
<br>

## ℹ️ Sobre

Implementação da funcionalidade adicionar ou remover números através dos `buttons`.

- Para trabalhar com estado é necessário definir valores em `this.state`

- O estado deve ser alterado com `this.setState`

- A comunicação entre componentes é feita com `props`

- O React implementa a estratégia de `one way data flow`

- Utilizar a prop `onClick` para “escutar” o clique de botões com React.

- Uma boa prática em eventos é utilizar somente a referência do método. Na implementação do método , utilize `arrow functions`

## 📖 Roteiro

### 📌 Parte 01:

✔ Reaproveitar projeto *react-counter-01*<br>
✔ Mudar título de *index.html* para **React Counter 02**<br>
✔ Instanciar `this.state` no construtor de *Counter.js* com o objeto: {currentCounter: 0, steps: 0}<br>
✔ Criar eventos `onClick` para os botões, incrementando ou decrementando *state* e incrementando *steps*<br>
✔ Quebrar `<Counter>` em 3 componentes `<Button>` `<Value>` e `<Step>`, utilizando *props*<br>

### 📌 Parte 2:

✔ Isolar estado do contador em App<br>
✔ Criar componente Counter2 a partir de Counter para utilizar *props*<br>
✔ Instanciar 3 `<Counter2>` em App<br>
✔ Verificar que os 3 componentes compartilham do mesmo estado<br>

### 📌 Parte 3:

✔ Criar componente `<Band>` com o array members como estado, renderizando os itens do array em uma `<ul>` `<li>`, mostrando a importância de *key*<br>

## Licença 
Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](../../LICENSE) para mais detalhes.
