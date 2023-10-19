const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { message: 'Olá, Mundo!' });
});

app.get('/produtos', (req, res) => {
  res.render('index', { message: 'Olá, Mundo!' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

const produtos = [
  {id: 1, nome: "colares de prata", preco: "300", descricao: "colares lisos", imagem: "produto.jpg"},
  {id: 2, nome: "colares de ouro", preco: "500", descricao: "colares trançados", imagem: "produto.jpg"},
  {id: 3, nome: "colares de ouro branco", preco: "250", descricao: "colares de ouro branco lisos e trançados uma das pedras mais iluminadas", imagem: "produto.jpg"},
  {id: 4, nome: "pulseiras", preco: "300", descricao: "pulseiras pratas ", imagem: "produto.jpg"},
  {id: 5, nome: "anel", preco: "300", descricao: "anel de ouro", imagem: "produto.jpg"},
  {id: 6, nome: "conjuntos de ouro e esmeralda", preco: "1500", descricao: "conjunto de brinco,colar e anel", imagem: "produto.jpg"},
  {id: 7, nome: "braceletes", preco: "400", descricao: "bracelete de prata", imagem: "produto.jpg"},
  {id: 8, nome: "alianças de pratas", preco: "400", descricao: "conjuto com tres aalianças pratas", imagem: "produto.jpg"},
  {id: 9, nome: "nome do produto", preco: "400", descricao: "descricao do produto", imagem: "produto.jpg"},
  {id: 10, nome: "nome do produto", preco: "400", descricao: "descricao do produto", imagem: "produto.jpg"},

]

