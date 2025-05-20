const funcaoAnonima = require('./A/B/C/mod'); // fazendo os caminhos ate o arquivo mod;
console.log(funcaoAnonima(3,3)); // exportando funcao anonima;

// console.log(__dirname);     //variaveis do node // nome da pasta atual;
// console.log(__filename);    //variaveis do node // nome do arquivo atual;

const path = require('path');
console.log(path.resolve(__dirname, '..', '..', 'arquivos', 'imagens')); 
//('..') = volta uma pasta;
//('.') = acessa uma pasta; 
//('exemplo') = acessa pasta ou arquivo;

const dog = require('./Z/dog');// importando o arquivo;
const Cachorro = dog.Cachorro; // importando a class Cachorro;
const dog1 = new Cachorro('wyung');
dog1.latir(); //executando a função dentro do arquivo;