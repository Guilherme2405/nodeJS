const express = require('express');
const path = require('path');
const app = express();
//CRUD -> CREATE    READ    UPDATE   DELETE
//JS   ->  POST      GET     PUT      DELETE
app.use(express.urlencoded({extended: true}));

app.get('/', (req,resp) =>{                                   
    resp.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/testes/:idUsuario?/:parametros?/', (req,resp) => {
    console.log(req.params);
    console.log(req.query);
    resp.send(req.params);
});

app.post('/',  (req, resp) => {
    console.log(req.body);
    resp.send( `o que voce mandou foi: ${req.body.name}`);
}); 

app.listen(3030, () => console.log('servidor rodando na porta http://localhost:3030'));