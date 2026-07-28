#  MANUAL DO USUÁRIO - Sistema de Agendamento

## Objetivo

Este manual descreve como usar o Sistema de Agendamento para gerenciar agendamentos de serviços de forma simples e eficiente.

---

## ÍNDICE

1. [Instalação e Execução](#instalação-e-execução)
2. [Como Criar um Agendamento](#como-criar-um-agendamento)
3. [Como Listar Agendamentos](#como-listar-agendamentos)
4. [Como Editar um Agendamento](#como-editar-um-agendamento)
5. [Como Deletar um Agendamento](#como-deletar-um-agendamento)
6. [Validações Importantes](#validações-importantes)
7. [Resolução de Problemas](#resolução-de-problemas)

---

## Instalação e Execução

### Pré-requisitos
- Node.js (v18 ou superior)
- Git (para clonar o repositório)

### Passos de Instalação

1. **Clonar o repositório**
```bash
git clone https://github.com/mateusACM/sistema-agendamento-tcc.git
cd sistema-agendamento-tcc
```

2. **Instalar dependências**
```bash
npm install
```

3. **Rodar o servidor**
```bash
node server.js
```

Você deve ver:
```
✅ Conectado ao banco de dados SQLite
✅ Tabela "agendamentos" pronta!
🚀 Servidor rodando em http://localhost:3000
```

---

##  Como Criar um Agendamento

### Informações Necessárias

| Campo | Obrigatório | Formato | Exemplo |
|-------|------------|---------|---------|
| Nome do Cliente | ✅ Sim | Texto | João Silva |
| Serviço | ✅ Sim | Texto | Corte de Cabelo |
| Data | ✅ Sim | YYYY-MM-DD | 2026-04-20 |
| Horário | ✅ Sim | HH:MM | 14:30 |
| Telefone | ❌ Não | 10-11 dígitos | (11) 98765-4321 |

### Passo a Passo

1. Preencha o nome do cliente
2. Escolha o serviço
3. Selecione a data (não pode ser no passado)
4. Escolha o horário
5. Opcionalmente, adicione telefone
6. Clique em "Criar Agendamento"

---

##  Como Listar Agendamentos

Todos os agendamentos aparecem em uma tabela com:
- **Data:** Quando é o agendamento
- **Horário:** Que hora
- **Status:** Agendado, Confirmado ou Cancelado
- **Ações:** Botões para editar e deletar

---

##  Como Editar um Agendamento

1. Encontre o agendamento na tabela
2. Clique no botão(editar)
3. Mude os dados que quiser
4. Clique em "Salvar Alterações"

---

##  Como Deletar um Agendamento

1. Encontre o agendamento na tabela
2. Clique no botão(deletar)
3. Confirme a exclusão
4.  Agendamento deletado!

---

## Validações Importantes

### Data Não Pode Ser no Passado
- ❌ Data: 2020-01-01 → ERRO
- ✅ Data: 2026-04-25 → OK

### Não Pode Ter Horários Duplicados
- ❌ João 20/04 14:00 + Maria 20/04 14:00 → ERRO
- ✅ João 20/04 14:00 + Maria 20/04 15:00 → OK

### Formatos Corretos
- **Data:** YYYY-MM-DD (ex: 2024-04-20)
- **Horário:** HH:MM (ex: 14:30)
- **Telefone:** (XX) XXXXX-XXXX ou XXXXXXXXXXX

---

##  Resolução de Problemas

### "Erro ao conectar na API"
**Solução:** Certifique-se que o servidor está rodando com `node server.js`

### "Não é possível agendar em datas passadas"
**Solução:** Escolha uma data no futuro

### "Já existe um agendamento para..."
**Solução:** Escolha outro horário ou outro dia

### "Campos obrigatórios..."
**Solução:** Preencha todos os campos (nome, serviço, data, horário)

---

**Espero que de tudo certo com essa parada**
