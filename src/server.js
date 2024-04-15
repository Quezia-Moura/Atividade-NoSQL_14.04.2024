const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// conexão com o mongodb
mongoose.connect('mongodb://localhost:27017/seu-banco-de-dados', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro de conexão com o banco de dados:'));
db.once('open', () => {
  console.log('Conexão bem-sucedida com o banco de dados MongoDB!');
});


app.get('/', (req, res) => {
    res.send('Hello Woooooorld');
});

app.get('/users/:userId/books/:bookId', (req, res) => {
    console.log(req.params);
    const { userId, bookId } = req.params
    console.log(userId);
    console.log(bookId);
    res.send(req.params);
});

// iniciando o servidor
app.listen(PORT, () => {
    console.log(`O servidor está funcionando na porta: ${PORT}`);
});
