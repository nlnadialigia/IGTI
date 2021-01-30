<h1 align="center">Desafio - Módulo 04</h1>
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

## ℹ️ Sobre

Exercitar os seguintes conceitos trabalhados no módulo:
- Criação de um modelo de dados com o mongoose.
- Versionamento de código.
- Implantação pelo Heroku.

## 📖 Especificações

<br>

### :pushpin: Enunciado

Desenvolver um modelo de dados a ser utilizado na estrutura de uma API e publicar a aplicação pelo Heroku (Front e Back).

<br>

### :pushpin: Atividades

1. Criar uma base de dados no MongoDB Atlas e importar os dados do arquivo `grades.csv`.
2. O Front-End da aplicação está implementado e deve ser clonado do repositório https://github.com/brunoaugustoteixeira/grades-app.git.
3. A API desenvolvida está disponibilizada no repositório https://github.com/brunoaugustoteixeira/grades-api.git, entretanto, suas rotas e funcionalidades estão em vários branches que devem ser mergeados com o branch master. Portanto, para essa atividade deve ser realizado o clone do repositório e o merge do branch das melhorias `feature/CriaRotas`.
4. Criar um novo branch denominado `feature/modeloMongoose` e implementar neste novo branch um modelo de dados, utilizando o mongoose para a sua API. Nessa mesma instalação deverá ser implementada a lógica no controller, utilizando o schema criado. Ao final dessa implementação, o branch deve ser mergeado para o
master.
5. Excluir os branches de features e manter somente o branch master.
6. Remover o controle de versão desse repositório local (basta excluir o .git). Versionar novamente o repositório e commitar seu projeto na sua conta do github.
7. Publicar o Front-End disponibilizado no Heroku.
8. Publicar o Back-End disponibilizado após a implementação das atividades 2 e 3.
9. Ajustar os parâmetros de comunicação do Front-End com o Back-End, bem como o processo de deploy automático no Heroku. Os parâmetros de comunicação entre o front e back podem ser encontrados em http-common.js (front) e app.js (back).

**Atenção aos pontos:**
— Liberação do IP do Heroku no MongoDB Atlas.
— Configuração do host de origem e destino entre o back e front.
— Configuração das variáveis de processo no ambiente do Heroku.

<br>

## Licença 
Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](../../LICENSE) para mais detalhes.
