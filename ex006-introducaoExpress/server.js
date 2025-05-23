const express = require('express');
const path = require('path');
const app = express();
//CRUD -> CREATE    READ    UPDATE   DELETE
//JS   ->  POST      GET     PUT      DELETE

app.get('/', (req,resp) =>{
    resp.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.listen(3030, () => console.log('servidor rodando na porta http://localhost:3030'));