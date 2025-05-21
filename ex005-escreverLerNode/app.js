const path = require('path'); // caminhos
const caminhoArquivo = path.resolve(__dirname, 'teste.json'); // cria  arquivo
const escreve = require('./modules/escrever'); // funcao de escrever no novo arquivo
const ler = require('./modules/ler'); // funcao de ler no novo arquivo

const pessoas = [
  { nome: 'João' },
  { nome: 'Maria' },
  { nome: 'Eduardo' },
  { nome: 'Luiza' },
];

const json = JSON.stringify(pessoas, '', 2); // criando um json
escreve(caminhoArquivo, json); //enviando json para o novo arquivo

async function leArquivo(caminho) {
  const dados = await ler(caminho); // executando promessa com o arquivo ler
  renderizaDados(dados); // chama a funcao para rendenizar os dados
}

function renderizaDados(dados) {
  dados = JSON.parse(dados); // convertendo os dados que eram string
  dados.forEach(val => console.log(val)); //escolhendo dados dentro de forEach
}
leArquivo(caminhoArquivo);

