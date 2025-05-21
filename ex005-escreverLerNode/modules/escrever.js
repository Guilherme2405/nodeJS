const fs = require('fs').promises; // fileSystem tratado como promise

module.exports = (caminho, dados) => {
  fs.writeFile(caminho, dados, { flag: 'w', encoding: 'utf8' }); //exportando a função de escrever no novo arquivo
};
