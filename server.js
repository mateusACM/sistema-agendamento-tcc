// Importa as bibliotecas
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database'); // Importa o banco de dados

// Cria o aplicativo Express
const app = express();
const PORT = 3000; // Porta onde o servidor vai rodar

// Configura o Express para entender JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ROTAS DO CRUD

//  ROTA INICIAL (teste)
app.get('/', (req, res) => {
    res.send(' Servidor funcionando! Sistema de Agendamento ativo.');
});

//  Criar novo agendamento

app.post('/agendamentos', (req, res) => {
    const { nome_cliente, servico, data, horario, telefone } = req.body;

    // Valida se os campos obrigatórios foram preenchidos
    if (!nome_cliente || !servico || !data || !horario) {
        return res.status(400).json({ 
            erro: 'Campos obrigatórios: nome_cliente, servico, data, horario' 
        });
    }

    // SQL para inserir no banco
    const sql = `INSERT INTO agendamentos (nome_cliente, servico, data, horario, telefone) 
                 VALUES (?, ?, ?, ?, ?)`;

    db.run(sql, [nome_cliente, servico, data, horario, telefone], function(err) {
        if (err) {
            return res.status(500).json({ erro: err.message });
        }
        res.status(201).json({ 
            mensagem: ' Agendamento criado com sucesso!',
            id: this.lastID 
        });
    });
});

// READ - Lista todos os agendamentos

app.get('/agendamentos', (req, res) => {
    const sql = 'SELECT * FROM agendamentos';

    db.all(sql, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ erro: err.message });
        }
        res.json({
            mensagem: ' Lista de agendamentos',
            total: rows.length,
            agendamentos: rows
        });
    });
});

// Buscar agendamento por ID

app.get('/agendamentos/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM agendamentos WHERE id = ?';

    db.get(sql, [id], (err, row) => {
        if (err) {
            return res.status(500).json({ erro: err.message });
        }
        if (!row) {
            return res.status(404).json({ erro: 'Agendamento não encontrado' });
        }
        res.json(row);
    });
});

// Atualizar agendamento

app.put('/agendamentos/:id', (req, res) => {
    const { id } = req.params;
    const { nome_cliente, servico, data, horario, telefone, status } = req.body;

    const sql = `UPDATE agendamentos 
                 SET nome_cliente = ?, servico = ?, data = ?, horario = ?, telefone = ?, status = ?
                 WHERE id = ?`;

    db.run(sql, [nome_cliente, servico, data, horario, telefone, status, id], function(err) {
        if (err) {
            return res.status(500).json({ erro: err.message });
        }
        if (this.changes === 0) {
            return res.status(404).json({ erro: 'Agendamento não encontrado' });
        }
        res.json({ mensagem: ' Agendamento atualizado com sucesso!' });
    });
});


//  Deletar agendamento

app.delete('/agendamentos/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM agendamentos WHERE id = ?';

    db.run(sql, [id], function(err) {
        if (err) {
            return res.status(500).json({ erro: err.message });
        }
        if (this.changes === 0) {
            return res.status(404).json({ erro: 'Agendamento não encontrado' });
        }
        res.json({ mensagem: ' Agendamento deletado com sucesso!' });
    });
});

// Inicia o servidor

app.listen(PORT, () => {
    console.log(` Servidor rodando em http://localhost:${PORT}`);
    console.log(` Acesse http://localhost:${PORT}/agendamentos para ver os dados`);
});
