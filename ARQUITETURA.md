#  ARQUITETURA DO SISTEMA

##  Visão Geral

O Sistema de Agendamento é uma aplicação web que permite gerenciar agendamentos através de uma **API REST** robusta.

### Stack Tecnológico

```
Frontend (Cliente)
    ↓
HTTP/REST API (Express.js)
    ↓
Banco de Dados (SQLite)
```

---

##  Componentes

### 1. Frontend (Cliente)
- **Arquivo:** `interface-frontend.html`
- **Tecnologias:** HTML5, CSS3, JavaScript
- **Funcionalidades:** Formulário, tabela, edição, deleção

### 2. Backend (Servidor)
- **Arquivo:** `server.js`
- **Tecnologias:** Node.js, Express.js
- **Porta:** 3000
- **Endpoints:** 6 rotas REST

### 3. Banco de Dados
- **Arquivo:** `database.js` (conexão)
- **Arquivo:** `agendamento.db` (dados)
- **Tipo:** SQLite (arquivo único)

---

##  Endpoints

| Método | Rota | Descrição |
|--------|------|-----------|
| POST | /agendamentos | Criar novo agendamento |
| GET | /agendamentos | Listar todos |
| GET | /agendamentos/:id | Buscar por ID |
| GET | /agendamentos/data/:data | Buscar por data |
| PUT | /agendamentos/:id | Atualizar |
| DELETE | /agendamentos/:id | Deletar |

---

##  Banco de Dados

### Tabela: agendamentos

```sql
CREATE TABLE agendamentos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome_cliente TEXT NOT NULL,
    servico TEXT NOT NULL,
    data TEXT NOT NULL,
    horario TEXT NOT NULL,
    telefone TEXT,
    status TEXT DEFAULT 'agendado'
);
```

### Colunas

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| id | INTEGER | Sim | Chave primária, auto-incrementada |
| nome_cliente | TEXT | Sim | Nome do cliente |
| servico | TEXT | Sim | Tipo de serviço |
| data | TEXT | Sim | Data (YYYY-MM-DD) |
| horario | TEXT | Sim | Horário (HH:MM) |
| telefone | TEXT | Não | Telefone do cliente |
| status | TEXT | Sim | Status do agendamento |

---

##  Fluxo de Dados

### Criar Agendamento (POST)
```
Usuário preenche formulário
    ↓
Envia dados para /agendamentos
    ↓
Backend valida dados
    ↓
Verifica conflitos (data passada, horário duplicado)
    ↓
Insere no SQLite
    ↓
Retorna confirmação com ID
    ↓
Frontend atualiza tabela
```

### Listar Agendamentos (GET)
```
Usuário acessa página
    ↓
Frontend requisita GET /agendamentos
    ↓
Backend consulta banco de dados
    ↓
Retorna lista em JSON
    ↓
Frontend renderiza tabela
```

---

##  Validações

O sistema faz **7 validações robustas**:

1. ✅ Campos obrigatórios
2. ✅ Formato de data (YYYY-MM-DD)
3. ✅ Formato de horário (HH:MM)
4. ✅ Data não pode ser no passado
5. ✅ Horários não podem ser duplicados
6. ✅ Telefone válido (10-11 dígitos)
7. ✅ Status válido

---

## Escalabilidade

### Pronto Para

- ✅ Aplicações pequenas/médias
- ✅ Múltiplos usuários simultâneos
- ✅ Facilmente transportável (arquivo único)

### Futuras Melhorias

- [ ] Autenticação de usuários
- [ ] Paginação de resultados
- [ ] Filtros avançados
- [ ] Migração para PostgreSQL (volumes maiores)

---

##  Estrutura de Pastas

```
sistema-agendamento-tcc/
├── server.js                 (Servidor principal)
├── database.js              (Conexão com banco)
├── interface-frontend.html  (Interface web)
├── agendamento.db           (Banco de dados)
├── package.json             (Dependências)
├── .gitignore               (Arquivos ignorados)
├── README.md                (Documentação principal)
├── MANUAL_USUARIO.md        (Guia do usuário)
├── ARQUITETURA.md           (Este arquivo)
├── INTEGRACAO_FRONTEND.md   (Guia de integração)
└── CHANGELOG.md             (Histórico de mudanças)
```

---

**DOCUMENTAÇÃO TÉCNICA CONCLUÍDA!** 
