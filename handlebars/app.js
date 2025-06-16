const express = require('express'); // servidor web
const ex_handlebars = require('express-handlebars'); // integração do handlebars com o express
const contatos = require('./dados.json');


const app = express(); // a partir dele serão feitas as requisições http

// Configuração do handlebars
app.engine('handlebars', ex_handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
// Usa o handlebars como mecanismo de visualização view engine
// O layout padrão se chama main.handlebars (vai ficar dentro da pasta views/layouts)

app.get('/contatos', (req, res) => {
  res.render('contatos', { contatos, titulo: "Lista de Contatos" });
});


app.use(express.static('public'));
// Isso permite que a pasta public/ sirva arquivos estáticos com CSS, imagens, ícones etc.

app.get('/', (req, res) => {
    res.render('home', {titulo: "Página Inicial"});
});

app.get('/sobre', (req, res) => {
    res.render('sobre', {titulo: "Sobre Nós"});
});

// Cada rota carrega uma página .handlebars com um objeto de dados (ex: titulo) que será inserido no HTML.

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});


