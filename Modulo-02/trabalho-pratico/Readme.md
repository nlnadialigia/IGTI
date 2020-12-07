<h1 align="center">Trabalho Prático - Módulo 2</h1>
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
  <a href="#book-especificações">Especificações</a>&nbsp;|&nbsp;
  <a href="#rocket-resultado>Resultado</a>&nbsp;|&nbsp;
  <a href="#licença">Licença</a>
</h3>

___

<br>
<br>

## :information_source: Sobre

Exercitar os conceitos trabalhados no Módulo:
✓ Criação de um projeto Node.js
✓ Manipulaçã de arquivos
✓ Manipulação de objetos JSON

## :book: Especificações

<br>

### :pushpin: Enunciado

Criação  de um projeto Node.js para realizar a criação de alguns métodos e processamento de arquivos JSON.

<br>

### :pushpin: Atividades

1. Criar uma função que irá criar um arquivo JSON para cada estado representado no arquivo Estados.json, e o seu conteúdo será um array das cidades pertencentes a aquele estado, de acordo com o arquivo Cidades.json. O nome do arquivo deve ser o UF do estado, por exemplo: MG.json.

2. Criar uma função que recebe como parâmetro o UF do estado, que realize a leitura do arquivo JSON correspondente e que retorne a quantidade de cidades daquele estado.

3. Criar um método que imprima no console um array com o UF dos cinco estados que mais possuem cidades, seguidos da quantidade, em ordem decrescente. Você pode usar a função criada no tópico 2. Exemplo de impressão: [“UF - 93”, “UF - 82”, “UF - 74”, “UF - 72”, “UF - 65”]

4. Criar um método que imprima no console um array com o UF dos cinco estados que menos possuem cidades, seguidos da quantidade, em ordem decrescente. Você pode usar a função criada no tópico 2. Exemplo de impressão: [“UF - 30”, “UF - 27”, “UF - 25”, “UF - 23”, “UF - 21”]

5. Criar um método que imprima no console um array com a cidade de maior nome de cada estado, seguida de seu UF. Por exemplo: [“Nome da Cidade – UF”, “Nome da Cidade – UF”, ...].

6. Criar um método que imprima no console um array com a cidade de menor nome de cada estado, seguida de seu UF. Por exemplo: [“Nome da Cidade – UF”, “Nome da Cidade – UF”, ...].

7. Criar um método que imprima no console a cidade de maior nome entre todos os estados, seguido do seu UF. Exemplo: “Nome da Cidade - UF".

8. Criar um método que imprima no console a cidade de menor nome entre todos os estados, seguido do seu UF. Exemplo: “Nome da Cidade - UF".

<br>

### :pushpin: Observações

- Nos itens que tratam a respeito do tamanho do nome da cidade, em caso de empate no tamanho entre várias cidades, você deve considerar a ordem alfabética para ordenar as cidades pelo seu nome, e então retornar a primeira cidade.

- Ao rodar o projeto, ele deve executar os métodos em sequência e depois finalizar a execução.

## :rocket: Resultado

<p align="center">
  <img src="./assets/result.gif" width="300" heigth="300">
</p>

<br>

## Licença 

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](../../LICENSE) para mais detalhes.
