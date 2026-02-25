const express = require('express');
const app = express();

const usuarios = [
  {
    id: 1,
    nome: 'Ana Silva',
    email: 'ana@email.com'
  },
  {
    id: 2,
    nome: 'Bruno Souza',
    email: 'bruno@email.com'
  },
  {
    id: 3,
    nome: 'Carla Oliveira',
    email: 'carla@email.com'
  }
]


app.get('/', (req, res) => {
  res.send(`Olá mundo!`);
});

app.get('/usuarios/:id', (req, res) => {
  const id = parseInt(req.params.id)

  const usuario = usuarios.find(u => u.id === id)

  if (!usuario) {
    return res.status(404).json({ erro: 'Usuário não encontrado' })
  }

  res.json(usuario)
})

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});