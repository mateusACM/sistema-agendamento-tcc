// Importa a biblioteca do SQLite
const sqlite3 = require('sqlite3').verbose();

// Cria/conecta no banco de dados (arquivo agendamento.db)
const db = new sqlite3.Database('./agendamento.db', (err) => {
    if (err) {
        console.error('❌ Erro ao conectar no banco:', err.message);
    } else {
        console.log('✅ Conectado ao banco de dados SQLite');
    }
});

// Cria a tabela de agendamentos (se não existir)
db.run(`
    CREATE TABLE IF NOT EXISTS agendamentos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome_cliente TEXT NOT NULL,
        servico TEXT NOT NULL,
        data TEXT NOT NULL,
        horario TEXT NOT NULL,
        telefone TEXT,
        status TEXT DEFAULT 'agendado'
    )
`, (err) => {
    if (err) {
        console.error('❌ Erro ao criar tabela:', err.message);
    } else {
        console.log('✅ Tabela "agendamentos" pronta!');
    }
});

// Exporta o banco para usar em outros arquivos
module.exports = db;