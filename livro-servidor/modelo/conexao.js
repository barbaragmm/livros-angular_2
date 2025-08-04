const banco = require('mongoose');
const bancoURI = 'mongodb://localhost:27017/livraria';

banco.connect(bancoURI)
.then(() => console.log('Conectado ao MongoDB!'))
.catch(err => console.error('Não foi possível conectar ao MongoDB...', err));

module.exports = banco;
