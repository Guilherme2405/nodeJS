const express = require('express');
const path = require('path');
const app = express();
const routes = require("./routes");

app.use(express.urlencoded({extended:true})); // permite tratar os dados recebidos
app.use(routes); // permite usa os dados do arquivo routes
app.set('views', path.resolve(__dirname, "src", "views"));// arquivo views direto do diretorio
app.set('view engine', 'ejs'); // tem a função de renderizar templates

app.listen(3000, () => console.log('servidor rodando na porta http://localhost:3000')); // executa o servidor na porta 3000