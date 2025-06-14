const express = require('express');
const path = require('path');
const fs = require('fs'); //Módulo para ler, escrever, editar e excluir dados do dados.json
const app = express();
const PORT = 3000;
app.use(express.json());

app.get('/express', (req, res) => {
  res.sendFile(path.join(__dirname, 'express', 'index.html'));
});

// Leitura do arquivo JSON e transforma em objeto
function carregarContatos(){
    const data = fs.readFileSync('dados.json');
    return JSON.parse(data);
}

// Rota onde utiliza a function carregarContatos e exibe tudo na rota contatos
app.get('/contatos', (req, res) => {
    const contatos = carregarContatos();
    res.json(contatos);
})

app.listen(PORT, () => {
    console.log(`Porta:http://localhost: ${PORT}`);
})

