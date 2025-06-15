const express = require('express');
const path = require('path'); // Módulo para trabalhar com caminhos de arquivos e pastas 
const fs = require('fs'); //Módulo para ler, escrever, editar e excluir dados do dados.json
const axios = require('axios');


const app = express();
const PORT = 3000;
app.use(express.json());

app.get('/express', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/express', 'index.html'));
});

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api_exeterna', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/axios_api_externa', 'index.html'));
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

app.get('/api_externa', async (req, res) => {
  try {
    const resposta = await axios.get('https://jsonplaceholder.typicode.com/users');
    res.json(resposta.data);
  } catch (erro) {
    console.error('Erro Axios:', erro.message); // 👈 Mostra o erro no terminal
    res.status(500).json({ erro: 'Erro ao buscar usuários' });
  }
});


app.listen(PORT, () => {
    console.log(`Porta:http://localhost: ${PORT}`);
})

