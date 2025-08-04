const express = require('express');
const router = express.Router();
const { obterLivros, incluir, excluir } = require('../modelo/livro-dao');

router.get('/', async (req, res) => {
    try {
        const livros = await obterLivros();
        res.json(livros);
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao obter os livros', erro: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const livro = req.body;
        await incluir(livro);
        res.json({ mensagem: 'Livro incluído com sucesso!' });
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao incluir o livro', erro: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const codigo = req.params.id;
        await excluir(codigo);
        res.json({ mensagem: 'Livro excluído com sucesso!' });
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao excluir o livro', erro: error.message });
    }
});

module.exports = router;
