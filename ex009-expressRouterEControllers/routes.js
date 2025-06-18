const express = require('express'); // utiliza o express
const route = express.Router(); // utiliza funçoes do router(rotas) do express
const homeController = require("./controllers/homecontroller");
const contatoController = require("./controllers/contatoController");

// rotas home
route.get('/', homeController.paginaInicial); // importa a funcao paginaInicial do arquivo(homeController) para dar acesso e mostrar no servidor '/'
route.post('/', homeController.trataPost);// importa a funcao trataPost do arquivo(homeController) para dar acesso e mostrar no servidor '/'

// rotas de contato
route.get('/contato', contatoController.paginaInicial); // importa a funcao paginaInicial do arquivo(homeController) para dar acesso e mostrar no servidor '/contato'

module.exports = route;