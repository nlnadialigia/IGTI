<h1 align="center">Desafio 02</h1>
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
  <a href="#heavy_check-mark-resultado">Resultado</a>&nbsp;|&nbsp;
  <a href="#licença">Licença</a>
</h3>

___

<br>
<br>

## ℹ️ Sobre

Criação de um app para listar países a partir da API [Restcountries](https://restcountries.eu/rest/v2/all.)<br>
- Input para filtrar os países<br>
- Exibir quantidade de países e soma da população dos países filtrados.<br>

### 📌 Modelo

<img src="./assets/picture.png" width="400"><br>

### 📌 Observações

- Para monitorar inputs com React, é importante definir os atributos value e onChange.
- Funções simples, comuns a diversos componentes, podem se situar em módulos isolados (helpers). Assim, são mais facilmente reaproveitados.

<br>

## 📖 Roteiro

✔ Criar projeto a partir do projeto base<br>
✔ Em *App.js*, criar state com `countries: []`<br>
✔ Em *App.js*, buscar todos os países em `componentDidMount` e filtrar os dados que de fato interessam. URL: https://restcountries.eu/rest/v2/all<br>
✔ Criar componente *Countries* para listar os países<br>
✔ Criar componente *Country* para exibir cada país<br>
✔ Criar componente *Header* que vai incluir `input` e `labels`<br>
✔ Fazer com que `input` filtre os dados de países<br>
✔ Fazer com que os `labels` reajam ao filtro<br>
✔ Criar pasta *'helpers'* com o arquivo `formatHelpers`.js<br>
✔ Criar função para formatar valores a partir de `Intl`<br>
✔ Estilizar o app<br>

## ✔️ Resultado :check

<img src="./assets/results.gif" width="400">

<br><br>


## Licença 
Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](../../LICENSE) para mais detalhes.
