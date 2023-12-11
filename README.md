# Chat UOL - Back-end

Projeto de API de um simulador do Chat UOL.
Link do Deploy: https://chat-uol-api.onrender.com

## Sobre

Projeto do back-end de API de um site de bate-papo no estilo Chat UOL.

### Rotas

- POST /participants (Cria um novo usuário do chat)
- GET /participants (Retornar a lista de todos os participantes)
- POST /messages (Cria uma nova mensagem)
- GET /messages (Retornar as mensagens públicas e as privadas do usuário informado no cabeçalho da requisição)
- POST /status (Atualiza o status do usuário)

## Como rodar o projeto em desenvolvimento

1. Clone esse repositório
2. Instale todas as dependências com o comando "npm i" no bash
3. Criar um banco de dados MongoDB.
4. Coloque o link do banco de dados na variável "DATABASE_URL" no arquivo ".env" na raíz do projeto, conforme o arquivo ".env.example"
5. Rode o programa em desenvolvimento com o comando "npm run dev" do bash
