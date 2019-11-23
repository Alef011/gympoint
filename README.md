<h1 align="center">
  <img alt="Gympoint" title="Gympoint" src="https://github.com/Alef011/gympoint/blob/master/logo.png" width="200px" />
</h1>

<h3 align="center">
  Desafio 2: Gympoint, o início
</h3>

<blockquote align="center">“Não espere para plantar, apenas tenha paciência para colher”!</blockquote>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/rocketseat/bootcamp-gostack-desafio-02?color=%2304D361">

  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/Rocketseat/bootcamp-gostack-desafio-02/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/rocketseat/bootcamp-gostack-desafio-02?style=social">
  </a>
</p>

<p align="center">
  <a href="#rocket-sobre-o-desafio">Sobre o desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;

  <a href="#memo-licença">Licença</a>
</p>

## :rocket: Sobre o desafio

A aplicação que iremos dar início ao desenvolvimento a partir de agora é um app gerenciador de academia, o **Gympoint**.

Nesse primeiro desafio vamos criar algumas funcionalidades básicas.
### Um pouco sobre as ferramentas

Você deverá criar a aplicação do zero utilizando o [Express](https://expressjs.com/), além de precisar configurar as seguintes ferramentas:

- Sucrase + Nodemon;
- ESLint + Prettier + EditorConfig;
- Sequelize (Utilize PostgreSQL ou MySQL);

### Funcionalidades

Abaixo estão descritas as funcionalidades que você deve adicionar em sua aplicação.

#### 1. Autenticação

Permita que um usuário se autentique em sua aplicação utilizando e-mail e uma senha.

Crie um usuário administrador utilizando a funcionalidade de [seeds do sequelize](https://sequelize.org/master/manual/migrations.html#creating-first-seed), essa funcionalidade serve para criarmos registros na base de dados de forma automatizada.

Para criar um seed utilize o comando:

```js
yarn sequelize seed:generate --name admin-user
```

No arquivo gerado na pasta `src/database/seeds` adicione o código referente à criação de um usuário administrador:

```js
const bcrypt = require("bcryptjs");

module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      "users",
      [
        {
          name: "Administrador",
          email: "admin@gympoint.com",
          password_hash: bcrypt.hashSync("123456", 8),
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  down: () => {}
};
```

Agora execute:

```js
yarn sequelize db:seed:all
```

Agora você tem um usuário na sua base de dados, utilize esse usuário para todos logins daqui pra frente.

- A autenticação deve ser feita utilizando JWT.
- Realize a validação dos dados de entrada;

#### 2. Cadastro de alunos

Permita que alunos sejam mantidos (cadastrados/atualizados) na aplicação utilizando nome, email, idade, peso e altura.

Utilize uma nova tabela no banco de dados chamada `students`.

O cadastro de alunos só pode ser feito por administradores autenticados na aplicação.

O aluno não pode se autenticar no sistema, ou seja, não possui senha.

## COMO INSTALAR AS DEPEDÊNCIAS VIA YARN 

Instale pelo terminal do vscode yarn add sucrase nodemon -D como depêndecias de desenvolvimento. E crie um arquivo chamado nodemon.json e nesse arquivo digite:
```js

	{
  "execMap": {
    "js": "node -r sucrase/register"
  }
}
```

Instale pelo terminal do vscode yarn add eslint -D como depência de desenvolvimento. Feito isso, rodo no terminal yarn eslint --init e seleciono a última opção. Feito a instalação do eslint, ele cria um arquivo chamado package-lock.json, porque eslint foi instalado via npm. Porém eu não quero esse arquivo porque estou utilizando yarn. Então deleto esse arquivo e rodo um yarn no terminal do vscode pra gravar as depedências no yarn.lock.

## REGRAS NO ARQUIVO ESLINTRC.JS

Exemplo:

```js
"rules": {
        "class-methods-use-this": "off",
        "no-param-reassign": "off",
        "camelcase": "off",
        "no-unused-vars": ["error",{"argsIgnorePattern": "next"}]
    }
};
```
Feito isso, agora instalo mais algumas ferramentas.
No terminal dou o comando yarn add prettier eslint-config-prettier eslint-plugin-prettier -D que é a integração do prettier com eslint.
Prettier é uma ferramenta que deixa nosso código mais bonito.
Agora no arquivo eslint, em extends, adiciono mais um array... o prettier como segundo parametro. Exemplo:

	"extends": ["airbnb-base", "prettier"]

Também crio uma nova propriedade chamada plugin. Exemplo:

	 },
    "extends": ["airbnb-base", "prettier"],
    "plugins": ["prettier"],

Crio um arquivo chamado .prettierrc, vai ser formato json e nesse arquivo defno duas propriedades: "singleQuote": true,
		   "trailingComma": "es5"

Agora, o prettier está configurado com nosso eslint. Acrescento nas rules no arquivo eslint, "prettier/prettier": "error"

Agora, utilizando eslint para fazer autofixes em mais de uma pasta. Para isso dou o comando no terminal yarn eslint --fix src --ext .js e teclo enter.

## CONFIGURANDO SEQUELIZE

Adiciono via yar, yarn add sequelize e instalo como depência de desenvolvimento yarn sequelize-cli -D 
Feito isso, agora crio um arquivo .sequelizerc e transormo ele numa sintaxe javascript. Esse arquivo, ele vai exportar os caminhos onde estão as pastas e arquivos que crie agora. Como models, controllers, database, migrations. Nesse arquivo preciso utilizar a sintaxe antes de import e export. Exporto o resolve do path, para padronizar os caminhos, tanto no windows, quanto em outros SO. Feito isso,  exporto uns objeto. Exemplo:

```js
	const {resolve} = require('path')

module.exports = {
  config: resolve(__dirname, 'src','config','database.js'),
  'models-path': (__dirname, 'src','app','models'),
  'migrations-path': (__dirname, 'src','database','migrations'),
  'seeders-path': (__dirname, 'src','database','seeds')
}
```

Instale a depedência  yarn add bcryptjs pra gerar hash da senha, pra criptografia. Instale pelo terminal fora do vscode.

## AUTENTICAÇÃO JWT

 Adiciono via yarn fora do vscode  yarn add jsonwebtoken
 
 ## VALIDANDO DADOS DE ENTRADA
 
 Vamos usar uma que se chama yup. É uma biblioteca de Schema validation. Então pra instalar essa depedência vou no terminal(fora do vscode) e dou o comando yarn add yup.
 
