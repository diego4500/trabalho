const express = require('express');
const path = require('path');
const app = express();

// Rota /home serve o index.html
app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Para acessar outros arquivos estáticos (js, css, imagens, json, etc)
app.use(express.static(__dirname));

// Porta do servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em: http://localhost:${PORT}/home`);
});
