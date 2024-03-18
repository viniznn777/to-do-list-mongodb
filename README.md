# Projeto To Do List com MongoDB e API

Este projeto consiste em uma aplicação de lista de tarefas (To Do List) com conexão a um banco de dados MongoDB e uma API. Os usuários podem se registrar e fazer login para acessar suas listas de tarefas. No painel do usuário, eles podem visualizar suas listas de tarefas existentes, criar novas, deletar, ver mais detalhes e editar as tarefas.

## Tecnologias Utilizadas

- **Frontend:**
  - React.js
  - Styled Components
  - React Icons
  - Bootstrap
  - React Router DOM
  - Context API

- **Backend:**
  - Node.js
  - Express
  - Mongoose (ODM para MongoDB)
  - Bcrypt (para hash de senhas)
  - JWT (JSON Web Tokens para autenticação)
  - Cookie Parser (para armazenar o token JWT)

## Funcionalidades

- **Registro e Login de Usuários:** Os usuários podem se registrar e fazer login para acessar suas listas de tarefas.

- **Gerenciamento de Tarefas:** No painel do usuário, eles podem:
  - Visualizar suas listas de tarefas existentes.
  - Criar novas listas de tarefas.
  - Deletar listas de tarefas.
  - Visualizar detalhes de cada tarefa.
  - Editar tarefas existentes.

- **Segurança da API:** Todas as rotas da API são seguras. Para acessar uma determinada rota da API, o usuário deve passar por middlewares que verificam se o token JWT é válido e se o ID do usuário é válido.

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests para melhorar este projeto.

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).
