<div align="center">
    <h1>Desafio NodeJS - Conversor de SMS</h1>
    <img alt="GSW Logo" src=".github/images/gsw-logo.png" />
</div>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/mrocha98/desafio-node-gsw?style=for-the-badge"/>

  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/mrocha98/desafio-node-gsw?style=for-the-badge"/>

  <img alt="Repo size" src="https://img.shields.io/github/repo-size/mrocha98/desafio-node-gsw?style=for-the-badge"/>

  <img alt="License" src="https://img.shields.io/github/license/mrocha98/desafio-node-gsw?style=for-the-badge"/>
</p>

<div align="center">
  <a href="https://insomnia.rest/run/?label=desafio-node-gsw-sms&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fmrocha98%2Fdesafio-node-gsw%2Fmaster%2Fexamples%2Finsomnia_desafio_node_gsw.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"/></a>
</div>

## 🎯 Objetivo

Criação de uma api em NodeJS para conversão de texto em código SMS. Todas as conversões realizadas pelo usuário devem ser registradas em um banco Mongo.

Para mais detalhes, consulte o [enunciado](avaliacao_estags.md).

## 📋 Requisitos

- [NodeJs](https://github.com/nvm-sh/nvm) - versão v12 (LTS) ou posterior
- [Yarn](https://yarnpkg.com/)
- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## 🚀 Executando a aplicação

Clone o repositório no local de sua preferência

`git clone git@github.com:mrocha98/desafio-node-gsw.git`

Entre no diretório e instale as dependências

```bash
cd desafio-node-gsw
yarn install
```

Crie o arquivo .env e copie o conteúdo do arquivo .env.example para dentro dele

`cp -r .env.example .env`

Troque os valores que julgar necessário e preencha as variáveis referentes ao banco de dados. Segue uma sugestão:

```
DATABASE_PORT=27019
DATABASE_NAME=gsw-sms
DATABASE_USER=mafagafo
DATABASE_PASS=gsw123
DATABASE_HOST=0.0.0.0
```

Inicie o MongoDB
```bash
docker-compose pull
docker-compose up -d
docker-compose logs
```

Assim que o Mongo estiver pronto para receber conexões, inicie a aplicação em modo de desenvolvimento

`yarn start:dev`

Se tudo ocorreu bem, você terá algo próximo disso

![server running](.github/images/server-running.png)

## 🔃 Workflow

Crie um usuário

![criação de usuário](.github/images/workflow-01.png)

Autentique-se

![autenticação](.github/images/workflow-02.png)

Atualize o token no Base Environment

![atualizando token no Base Environment](.github/images/workflow-03.png)

Certifique-se de habilitar a autenticação Bearer Token nos próximos endpoints

![habilitando Bearer Token](.github/images/workflow-04.png)

Converta textos/códigos por meio dos query params

![convertendo texto](.github/images/workflow-05.png)

Confira os logs

![checando logs](./.github/images/workflow-06.png)

## 📝 Licença

Esse projeto foi desenvolvido sob a [licença MIT](https://github.com/mrocha98/desafio-node-gsw/blob/master/LICENSE).
