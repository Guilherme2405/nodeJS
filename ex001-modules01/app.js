const mod1 = require('./mod1'); //exportando tudo do arquivo mod1
const falaNomeExportado = mod1.falaNome; //exportando so a função
const {nome, sobrenome,falaNome} = require('./mod1');//exportando apenas itens selecionados
const { Pessoa } = require('./mod1'); //exportando classe
const p1 = new Pessoa('gui'); //criando obj

console.log(mod1); //exibindo tudo do arquivo exportado
mod1.falaNome('guiga', 'kirin'); // executando função dentro do outro arquivo
falaNomeExportado('guilherme', 'cataneo'); //executando a função exportada
console.log(p1) //exibindo o objeto criado


const path = require('path');// ao instalar node nao e preciso especificar o caminho
const axios = require('axios');// ao instalar node (ou qualquer outra ferramenta) nao e preciso especificar o caminho
