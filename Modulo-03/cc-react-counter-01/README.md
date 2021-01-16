<h1 align="center">Class Component - parte 01</h1>
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

Criação de um projeto com um componente contador, para exemplificação dos componentes em React.

- **Class Components** => uma das formas de se criar componentes com React.

- Toda **Class Component** herda de `React.Component`

- Se utilizar *construtor* , deve se invocar` super()` na primeira instrução.

- **Class Components** permitem a utilização de atributos e métodos assim como qualquer classe JavaScript

- O principal método de um **Class Component** é o `render()`

- No React, é utilizado **JSX** para a confecção da interface gráfica

- Para interpolar expressões JavaScript, utilize chaves

- Será utilizado CSS Modules nos projetos.


## 📖 Roteiro

✔ Criar projeto react com nome de `react-counter-01`<br>
✔ Mudar título de `index.html` para **React Counter 01**<br>
✔ Mostrar classe **App.js** e explicar herança de *Component* <br>
✔ Criar pasta `'components' `<br>
✔ Em components, criar arquivo `Counter.js `<br>
✔ Criar classe **Counter** "na mão, do zero" exibindo apenas o texto "Counter" em um parágrafo<br>
✔ Excluir todo o texto e recriar classe Counter com `"rcc + tab"`
✔ Modificar **extends Component** para extends `React.Component`<br>
✔ Em **App.js**, importar Counter e instanciar 3 componentes `<Counter />`<br>
✔ Em **Counter.js**, criar `construtor()`<br>
✔ Criar atributo `this.currentCounter`.<br>
✔ Em **Counter.js**, modelar a classe dos botões com o apoio do css 
  ```html
  <button className="waves-effect waves-light btn red darken-4">
  ```
✔ Criar arquivo **counter.module.css** na mesma pasta de Counter

✔ No CSS, criar as seguintes classes CSS:
```css
.counterContainer {
  padding: 10px;
}

.counterValue {
  padding: 10px;
  font-size: 1.2rem;
  font-family: Consolas, monospace;
}
```

✔ Importar **counter.module.css** através de: import css from `'./counter.module.css'`;<br>
✔ Demonstrar utilização dessas classes em Counter e explicar interpolação com chaves `{ }` <br>
✔ Verificar no navegador que as classes CSS são renomeadas para garantir identidade única <br>



## Licença 
Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](../../LICENSE) para mais detalhes.
