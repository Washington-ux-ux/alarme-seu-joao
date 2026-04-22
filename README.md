# Alarme Seu João - Sistema de Gerenciamento de Clientes

Um sistema completo para gerenciamento de clientes, desenvolvido com **Node.js**, **Express** e **TypeScript** no back-end, e uma interface web responsiva no front-end. Utiliza um arquivo JSON como banco de dados simples para armazenar os dados dos clientes.

## 🚀 Funcionalidades

- **Cadastrar clientes**: Adicione novos clientes com nome, telefone, endereço e email
- **Listar clientes**: Visualize todos os clientes cadastrados em uma tabela
- **Editar clientes**: Atualize as informações de um cliente existente
- **Excluir clientes**: Remova clientes da base de dados
- **Interface responsiva**: Funciona bem em desktop e dispositivos móveis
- **Validações**: Verificações de campos obrigatórios e tipos de dados

## 🛠️ Tecnologias Utilizadas

### Back-end
- **Node.js**: Ambiente de execução JavaScript
- **Express.js**: Framework web para Node.js
- **TypeScript**: Superset do JavaScript com tipagem estática
- **tsx**: Executor TypeScript para desenvolvimento

### Front-end
- **HTML5**: Estrutura da página
- **CSS3**: Estilização responsiva
- **JavaScript (ES6+)**: Lógica do cliente e interações

### Outros
- **JSON**: Armazenamento de dados simples
- **Chalk**: Colorização de logs no terminal

## 📁 Estrutura do Projeto

```
alarmeSeuJoao/
├── app.ts                 # Configuração principal do Express
├── routes.ts              # Definição das rotas da API
├── server.ts              # Inicialização do servidor
├── tsconfig.json          # Configuração do TypeScript
├── package.json           # Dependências e scripts
├── public/                # Arquivos estáticos do front-end
│   ├── index.html         # Página principal
│   ├── app.js             # Lógica JavaScript do front-end
│   └── style.css          # Estilos CSS
└── src/
    ├── controllers/
    │   └── cliente-controllers.ts  # Controladores da API
    ├── models/
    │   ├── client-models.ts        # Modelo de dados do cliente
    │   └── http-response-model.ts  # Modelo de resposta HTTP
    ├── repository/
    │   └── client-repository.ts    # Camada de acesso aos dados
    ├── services/
    │   └── client-service.ts       # Lógica de negócio
    └── utils/
        └── http-helper.ts          # Utilitários para respostas HTTP
```

## 🔧 Instalação e Execução

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm (geralmente vem com o Node.js)

### Passos para instalação

1. **Clone o repositório** (se aplicável) ou navegue até a pasta do projeto:
   ```bash
   cd alarmeSeuJoao
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Execute o servidor em modo de desenvolvimento**:
   ```bash
   npm run start:dev
   ```

4. **Acesse a aplicação**:
   - Abra seu navegador e vá para: `http://localhost:3000`
   - A interface web será carregada automaticamente

## 📡 API Endpoints

A API RESTful oferece os seguintes endpoints:

### Base URL: `http://localhost:3000/api`

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/client` | Lista todos os clientes |
| POST | `/client` | Cria um novo cliente |
| PUT | `/client/:id` | Atualiza um cliente existente |
| DELETE | `/client/:id` | Remove um cliente |

### Exemplos de uso da API

#### 1. Listar clientes
```bash
GET http://localhost:3000/api/client
```

**Resposta de sucesso (200)**:
```json
[
  {
    "id": 1,
    "nome": "João Silva",
    "telefone": 11999999999,
    "endereco": "Rua das Flores, 123",
    "email": "joao@email.com"
  }
]
```

#### 2. Criar cliente
```bash
POST http://localhost:3000/api/client
Content-Type: application/json

{
  "nome": "Maria Santos",
  "telefone": 11888888888,
  "endereco": "Av. Principal, 456",
  "email": "maria@email.com"
}
```

**Resposta de sucesso (201)**:
```json
{
  "message": "Cliente criado com sucesso.",
  "client": {
    "id": 2,
    "nome": "Maria Santos",
    "telefone": 11888888888,
    "endereco": "Av. Principal, 456",
    "email": "maria@email.com"
  }
}
```

#### 3. Atualizar cliente
```bash
PUT http://localhost:3000/api/client/1
Content-Type: application/json

{
  "email": "joao.novo@email.com"
}
```

**Resposta de sucesso (200)**:
```json
{
  "message": "Cliente atualizado com sucesso!"
}
```

#### 4. Excluir cliente
```bash
DELETE http://localhost:3000/api/client/1
```

**Resposta de sucesso (204)**: Sem conteúdo

## 🎨 Interface Web

A interface web oferece uma experiência completa de gerenciamento:

### Funcionalidades da Interface
- **Formulário de cadastro**: Campos para nome, telefone, endereço e email
- **Tabela de clientes**: Lista todos os clientes com suas informações
- **Botões de ação**: Editar e excluir para cada cliente
- **Mensagens de feedback**: Confirmações de sucesso ou erro
- **Design responsivo**: Adapta-se a diferentes tamanhos de tela

### Como usar a interface
1. **Cadastrar**: Preencha o formulário e clique em "Enviar"
2. **Editar**: Clique no botão "Editar" na tabela, modifique os dados e clique em "Atualizar"
3. **Excluir**: Clique no botão "Excluir" e confirme a ação
4. **Limpar**: Use o botão "Limpar" para resetar o formulário

## 🏗️ Arquitetura

O projeto segue uma arquitetura em camadas:

### Camada de Apresentação (Front-end)
- `public/index.html`: Estrutura da página
- `public/app.js`: Lógica de interação com a API
- `public/style.css`: Estilização visual

### Camada de Controle (Back-end)
- `routes.ts`: Roteamento das requisições
- `controllers/cliente-controllers.ts`: Controle das operações

### Camada de Serviço
- `services/client-service.ts`: Lógica de negócio e validações

### Camada de Repositório
- `repository/client-repository.ts`: Acesso aos dados (JSON)

### Utilitários
- `utils/http-helper.ts`: Funções auxiliares para respostas HTTP
- `models/`: Definições de tipos TypeScript

## 🔒 Validações

### Back-end
- Campos obrigatórios: nome e email
- Validação de ID numérico nas rotas PUT/DELETE
- Verificação de existência do cliente antes de atualizar/excluir

### Front-end
- Campos obrigatórios no formulário
- Confirmação antes de excluir
- Mensagens de erro em tempo real

## 📊 Armazenamento de Dados

Os dados são armazenados em um arquivo JSON (`src/data/client.json`) com a seguinte estrutura:

```json
[
  {
    "id": 1,
    "nome": "João Silva",
    "telefone": 11999999999,
    "endereco": "Rua das Flores, 123",
    "email": "joao@email.com"
  }
]
```

**Nota**: Este é um armazenamento simples para desenvolvimento. Em produção, considere usar um banco de dados real como PostgreSQL, MongoDB, etc.

## 🚀 Scripts Disponíveis

No `package.json`, você encontrará:

- `npm run start:dev`: Inicia o servidor em modo de desenvolvimento

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença ISC.

## 📞 Suporte

Para dúvidas ou sugestões, entre em contato com a equipe de desenvolvimento.

---

**Desenvolvido com ❤️ para o projeto Alarme Seu João**
