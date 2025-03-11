# The Pizza - Backend

* Uma API RESTful de uma aplicação fullstack para uma pizzaria. Desenvolvido com Node.js, Express e Prisma, este backend é responsável por processar logins, gerenciar sessões e usuários e manipular dados de pedidos, categorias e produtos armazenados em banco de dados (PostgreSQL).

## 📋 Visão Geral

Este projeto backend oferece endpoints para:
- **Autenticação:** Gerenciamento de login e sessão de usuários.
- **Pedidos:** Criação, atualização e recuperação de pedidos.
- **Categorias:** Cadastro de categorias
- **Produtos:** Cadastro de produtos e listagem de produtos por categoria
- **Integração com o Frontend:** Comunicação segura através de tokens JWT e cookies.
- **Validação e Segurança:** Uso de middlewares para autenticação, validação e tratamento de erros.

## 🚀 Tecnologias Utilizadas

- **Runtime:** Node.js
- **Framework:** Express.js
- **ORM:** Prisma
- **Banco de Dados:** PostgreSQL
- **Autenticação:** JWT (JSON Web Token)
- **Validação:** Middleware personalizado de verificaçao e validação de token
- **Imagens:** Cloudinary

## 🛠 Como Executar o Projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [Git](https://git-scm.com/)
- Um banco de dados PostgreSQL (pode ser local ou em serviços como Neon)

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/gabrielmlemes/pizzaria-backend.git

2. Entre na pasta do projeto:
   ```bash
   cd pizzaria-backend
   
3. Instale as dependências
   ```bash
   npm install
   # ou, se preferir o yarn:
   yarn

4. Configure as variáveis de ambiente:
   - Crie um arquivo .env na raiz do projeto (você pode usar o 'copia.env' como referência) e adicione as seguintes variáveis:
   ```bash
   DATABASE_URL=postgres://usuario:senha@host:porta/nome_do_banco
   
   JWT_SECRET=
   
   PORT=3333
   
   CLOUDINARY_NAME=
   CLOUDINARY_API_KEY=
   CLOUDINARY_API_SECRET=

- Certifique-se de substituir os valores de exemplo pelas informações corretas do seu ambiente.

5. Execute as migrações do Prisma (se aplicável):
    ```bash
    npx prisma migrate dev --name init

## Executando em Ambiente de Desenvolvimento
1. Inicie o servidor:
    ```bash
    npm run dev
    # ou
    yarn dev
- A API ficará disponível em: http://localhost:3333

## Build e Deploy
- Para gerar a versão de produção:
  ```bash
    npm run build
    npm run start

### Certifique-se de configurar as variáveis de ambiente para produção antes do deploy.
