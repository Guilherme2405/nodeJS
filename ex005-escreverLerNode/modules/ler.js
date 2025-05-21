const fs = require('fs').promises; // fileSystem tratado como promise

module.exports = (caminho) => fs.readFile(caminho, 'utf8'); // escrevendo novo arquivo no arquivo .app
