const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Dados em memória (lista de tarefas)
let todos = [
    { id: 1, text: 'Aprender DevOps', completed: false },
    { id: 2, text: 'Criar minha primeira aplicação', completed: false }
];

// Rota para pegar todas as tarefas
app.get('/api/todos', (req, res) => {
    res.json(todos);
});

// Rota para adicionar nova tarefa
app.post('/api/todos', (req, res) => {
    const newTodo = {
        id: Date.now(),
        text: req.body.text,
        completed: false
    };
    todos.push(newTodo);
    res.json(newTodo);
});

// Rota de saúde (para monitoramento)
app.get('/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        timestamp: new Date().toISOString(),
        message: 'Aplicação funcionando!' 
    });
});

app.listen(port, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${port}`);
    console.log(`❤️  Health check: http://localhost:${port}/health`);
});