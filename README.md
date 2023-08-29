## Bem vindo ao repositório delivery-app! 🍻

### Este foi um projeto desenvolvido em grupo na Trybe, O App de delivery é um site que possui 3 fluxos diferentes:

*Fluxo do Cliente:* Por aqui, o cliente entra com a sua conta pela tela de login, ou caso ainda não possua, faz o cadastro, feito isso ele será redirecionado para uma tela de  produtos, onde ele pode adicioná-los ao seu carrinho e depois realizar o checkout, colocando seu endereço e o nome do vendedor. Também existe uma tela que mostra todos os pedidos feitos pelo cliente e como está o status do pedido (Pendente, Preparando, Em Trânsito ou Entregue).

*Fluxo do Vendedor:* O vendedor, ao logar com a sua conta, será direcionado a uma página que lista todos os pedidos feitos pra ele, com o respectivo status, ao clicar em um dos pedidos, será redireciodado para os detalhes do mesmo, com informações sobre o que foi pedido e endereço. Também é possível alterar o status do pedido nessa página.

*Fluxo do Administrador:* O admnistrador possui apenas uma página, onde existe a possibilidade de cadastrar novos usuários, seja como Vendedor, Administrador, ou Cliente. Além disso, também existe uma tabela que lista todos os usuários, por onde é possível deletar algum, caso seja essa a vontade do admin.

<hr/>

Como esse era um projeto em grupo, nos dividimos nas tarefas, eu fiquei responsável por:

**Back-end**
* Acompanhei a configuracao inicial do bd como copilot.

**Front-end**
* Tela de Registro.
* Tela de Pedidos do cliente.
* Tela de pedido do Vendedor.
* Estilização do projeto: todas as telas acima.

# 💡 Tecnologias utilizadas

**Back-end**
* ESLint
* Node.js
* Express
* JavaScript
* MySql2
* Sequelize
* Jsonwebtoken
* Md5

**Front-end**
* ESLint
* JavaScript
* React.js
* React-Router-Dom
* Axios
* Sass

# Preparação antes de iniciar o projeto
* ⚠️Garanta que sua máquina tenha o `node` instalado na versão 16, caso não esteja você pode usar o [`nvm`](https://github.com/nvm-sh/nvm#installing-and-updating) para fazer o gerenciamento das versões.
* ⚠️ Para testes locais, é fundamental configurar o arquivo de variáveis de ambiente `.env` (de environment) dentro da pasta `./back-end` (ele é o único `.env` no projeto), conforme exemplo em `.env.example`, na mesma pasta.

## Execute localmente:
Clone o projeto:

```
git clone git@github.com:adevmir/trybe-delivery-app.git
```
Vá para o diretório do projeto:

```
cd sd-022-b-project-delivery-app
```
Instale as dependências da pasta raiz:

```
npm install
```
Instale as dependências de Back e Front:

```
npm run dev:prestart
```

Inicie o projeto:

```
npm run dev
```

### Feito isso, basta aguardar, ele irá abrir automaticamente em seu navegador a url http://localhost:3000

## Para fazer login, utilize:

**Cliente**
* Basta clicar em `Cadastrar` e fazer um novo cadastro

**Vendedor(a)**
* email: fulana@deliveryapp.com
* senha: fulana@123

**Admin**
* email: adm@deliveryapp.com
* senha: --adm2@21!!--
