# versão do NoseJS utilizada: v16.14.2 LTS

# versão do NPM utilizada: v8.5.0

# Comandos utilizados para criar projeto:

> npx create-react-app nomeapp
> cd nomeapp

## verificar instalacao dos pacotes globais

> npm list -g

# Pacotes globais

### cross-env, controle das variaveis de ambiente por comando

> npm install -g cross-env@7.0.3

### Caso novo projeto, adicionar seegundo comando no package.json, scripts start:""

> cross-env BROWSER=none

### modulo client netlify ou firebase cli, envio para producao

> npm install -g netlify-cli

> npm install -g firebase-tools

### json server, criacao de APIs para ambiente de desenvolvimento

> npm install -g json-server

> > json-server server.json -p 3333

# Dependencias do react específicas, instalar na pasta do projeto:

## react Router DOM, Rotas

> npm install react-router-dom --save

## styled components, gerenciar componentes de estilo

> npm install styled-components --save

## Axios, gerenciamento de APIs

> npm install axios@0.27.2 --save

## firebase, para utilizar o firebase 👍

> npm install firebase@^8.8.1 --save

## toastify, notificacoes de operacoes

> npm install react-toastify --save

## translate, pacote de traducao simples

> npm install translate --save

## react icons, pacote de icones do react

> npm install react-icons --save

## redux, controle de states globais

> npm install redux react-redux --save

## immer, para controle de imutabilidade

> npm install immer --save

## redux saga, middleware de controle asincrono para redux

> npm install redux-saga --save

## history, controle de rotas

> npm install history --save
