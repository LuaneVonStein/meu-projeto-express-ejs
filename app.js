const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const produtos = [
  {id: 1, nome: "colares de prata", preco: "300", descricao: "colares lisos", imagem: "lMG/anel.4.jpg"},
  {id: 2, nome: "colares de ouro", preco: "500", descricao: "colares trançados", imagem: "IMG/anel.dv.jpg"},
  {id: 3, nome: "colares de ouro branco", preco: "250", descricao: "colares de ouro branco lisos e trançados uma das pedras mais iluminadas", imagem: "produto.jpg"},
  {id: 4, nome: "pulseiras", preco: "300", descricao: "pulseiras pratas ", imagem: "IMG/colar.de.cruz.jpg"},
  {id: 5, nome: "anel", preco: "300", descricao: "anel de ouro", imagem: "IMG/esmeralda.3.jpg"},
  {id: 6, nome: "conjuntos de ouro e esmeralda", preco: "1500", descricao: "conjunto de brinco,colar e anel", imagem: "IMG/esmeralda.jpg"},
  {id: 7, nome: "braceletes", preco: "400", descricao: "bracelete de prata", imagem: "IMG/images.jpg"},
  {id: 8, nome: "alianças de pratas", preco: "400", descricao: "conjuto com tres aalianças pratas", imagem: "IMG/images3.jpg"},
  {id: 9, nome: "nome do produto", preco: "400", descricao: "descricao do produto", imagem: "IMG/imagesp.jpg"},
  {id: 10, nome: "nome do produto", preco: "400", descricao: "descricao do produto", imagem: "IMG/prata.2.jpg"}
]

function buscarProdutoPorId(id){
  const produto = produtos.find(produto => produto.id == id);
  return produto || null
}

//console.log(produtos[id])//

for (let produto of produtos ){
  console.log(produto.titulo)
}


app.get('/', (req, res) => {
  res.render('index', { produtos});
});

app.get('/produtos/:id', (req, res) => {
  const produto = buscarProdutoPorID(req.params.id)
  res.render('produtos', { produto });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});


  


 console.log(buscarProdutoPorId(2))

