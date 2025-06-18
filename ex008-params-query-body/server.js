const express = require('express');
const path = require('path');
const app = express();
//CRUD -> CREATE    READ    UPDATE   DELETE
//JS   ->  POST      GET     PUT      DELETE
app.use(express.urlencoded({extended: true})); // analisa dados enviados no corpo da requisição

app.get('/', (req,resp) =>{                                   
    resp.sendFile(path.join(__dirname, 'public', 'index.html')); // acessa o arquivo pelo diretorio, usando path 
});

app.get('/testes/:idUsuario?/:parametros?/', (req,resp) => { // mostra dados ou insere daddos
    console.log(req.params); //mostra parametros no console
    console.log(req.query); // mostra os querys no console
    resp.send(req.params); // mostra no navegador
});

app.post('/',  (req, resp) => {
    console.log(req.body); // mostra os dados enviado pelo formulario
    resp.send( `o que voce mandou foi: ${req.body.name}`); // mostra no navegadoe os dados enviados
}); 

app.listen(3030, () => console.log('servidor rodando na porta http://localhost:3030'));

//nesse exercicio foi usado node 4.21 