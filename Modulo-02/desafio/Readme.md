<h1 align="center">Desafio - Módulo 2</h1>
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
  <a href="#information_source-objetivos">Objetivos</a>&nbsp;|&nbsp;
  <a href="#book-especificações">Especificações</a>&nbsp;|&nbsp;
  <a href="#interrobang-como-rodar-o-projeto">Rodar o projeto</a>&nbsp;|&nbsp;
  <a href="#license">License</a>&nbsp;|&nbsp;
</h3>

___

<br>
<br>

## :information_source: Objetivos

*Exercitar os conceitos trabalhados no módulo para criação de uma API, criando endpoints utilizando Node.js e Express.*

<br>

## :book: Especificações

<br>

### :pushpin: Enunciado

Desenvolver uma API chamada “grades-control-api” para controlar notas de alunos em matérias de um curso, conforme abaixo:

- Desenvolver endpoints para criação, atualização, exclusão e consulta de notas, aqui chamadas de grades. 
- As grades deverão ser salvas em um arquivo json, chamado “grades.json”. - O arquivo será previamente fornecido e seus endpoints devem atuar considerando os registros já existentes.
- Uma grade deve possuir os campos abaixo:
  - *id (int)*: identificador único da grade. Deve ser gerado automaticamente pela API, e garantido que não se repita.
  - *student (string)*: nome do aluno. Exemplo: “Guilherme Assis”.
  - *subject (string)*: nome da matéria. Exemplo: “Matemática”.
  - *type (string)*: nome da atividade. Exemplo: “Prova final”.
  - *value (float)*: nota da atividade. Exemplo: 10.
  - *timestamp (string)*: horário do lançamento. Exemplo: 2020-05-19T18:21:24.964Z. **Dica:** utilizar o `new Date()` do JavaScript.
- O arquivo grades.json será previamente fornecido com alguns registros inseridos, seus endpoints devem trabalhar considerando a existência deles, **não devendo criar um arquivo limpo para utilização**. 

- A estrutura do arquivo é a seguinte:

<p align="center">
  <img src="./assets/model.png" width="400">
</p>

- A propriedade nextId deve armazenar sempre o próximo id que será utilizado na criação de uma nova grade. 
- A propriedade grades possui um array com várias grades, cada uma sendo representada por um objeto com os campos descritos anteriormente.

<br>

### :pushpin: Atividades

1. Crie um endpoint para criar uma **grade**. Este endpoint deverá receber como parâmetros os campos *student*, *subject*, *type* e *value* conforme descritos acima. Esta grade deverá ser salva no arquivo json `grades.json`, e deverá ter um *id* único associado. No campo *timestamp* deverá ser salvo a data e hora do momento da inserção. O endpoint deverá retornar o objeto da grade que foi criada. A API deverá garantir o incremento automático deste identificador, de forma que ele não se repita entre os registros. Dentro do arquivo `grades.json` que foi fornecido para utilização no desafio o campo *nextId* já está com um valor definido. Após a inserção é preciso que esse *nextId* seja incrementado e salvo no próprio arquivo, de forma que na próxima inserção ele possa ser utilizado.

2. Crie um endpoint para atualizar uma grade. Este endpoint deverá receber como parâmetros o *id* da grade a ser alterada e os campos *student*, *subject*, *type* e *value*. O endpoint deverá validar se a grade informada existe, caso não exista deverá retornar um erro. Caso exista, o endpoint deverá atualizar as informações recebidas por parâmetros no registro, e realizar sua atualização com os novos dados alterados no arquivo `grades.json`.

3. Crie um endpoint para excluir uma grade. Este endpoint deverá receber como parâmetro o *id* da grade e realizar sua exclusão do arquivo `grades.json`.

4. Crie um endpoint para consultar uma grade em específico. Este endpoint deverá receber como parâmetro o *id* da grade e retornar suas informações.

5. Crie um endpoint para consultar a nota total de um aluno em uma disciplina. O endpoint deverá receber como parâmetro o *student* e o *subject*, e realizar a soma de todas os as notas de atividades correspondentes a aquele *subject* para aquele *student*. O endpoint deverá retornar a soma da propriedade value dos registros encontrados.

6. Crie um endpoint para consultar a média das grades de determinado *subject* e *type*. O endpoint deverá receber como parâmetro um *subject* e um *type*, e retornar a média. A média é calculada somando o registro value de todos os registros que possuem o *subject* e *type* informados, e dividindo pelo total de registros que possuem este mesmo *subject* e
*type*.

7. Crie um endpoint para retornar as três melhores grades de acordo com determinado *subject* e *type*. O endpoint deve receber como parâmetro um *subject* e um *type* retornar um array com os três registros de maior value daquele *subject* e *type*. A ordem deve ser do maior para o menor.

<br>


### :pushpin: Observações

- Na pasta `assets` está armazenado o backup das rotas criadas no *Insomnia* para testar a api.

- Na pasta `data`, além do arquivo `grades.json` está armazenada o original deste mesmo arquivo.

<br>

## :interrobang: Como rodar o projeto

<br>

### :pushpin: Instalar as dependências:

```
npm install
```

ou

```
yarn
```

### :pushpin: Rodar a api

Para rodar o projeto criado utilizar o comando `nodemon index.js`.

Uma outra forma é criar um script dentro do `package.json` e rodar o comando no terminal. Esta foi a forma utilizada neste projeto, criando o script `dev`.

Para inicializar: 

```bash
npm dev
```

ou

```bash
yarn dev
```

:arrow_right: *package.json*

<img src="./assets/package-json.png" width="300" heigth="300">

<br>


## License 

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](../../LICENSE) para mais detalhes.
