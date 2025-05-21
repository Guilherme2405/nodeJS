const fs = require('fs').promises; 
//modulo file system = ler, gravar, criar, remover, renomear arquivos ou diretorios; tambem e possivel obter informações sobre os arquivos

const path = require('path'); //caminhos

async function readdir(rootDIr) { // função assincrona para ler os diretorios em promises
    rootDIr = rootDIr || path.resolve(__dirname); // pergar o caminho dos diretorios
    const files = await fs.readdir(rootDIr); // variavel em promessa que executa a leitura do parametro que e os caminhos das pastas
    walk(files, rootDIr);
}


async function walk(files, rootDIr) { 
    for (const file of files) {
        const filefullpath = path.resolve(rootDIr,file); //mostra todas os arquivos
        const stats = await fs.stat(filefullpath); //executa ate o ultimo arquivo

        if(/\.git/g.test(filefullpath)) continue; //filtra arquivos .git
        if(/\.node_modules/g.test(filefullpath)) continue; //filtra arquivos .node_modules

        if(stats.isDirectory()) {readdir(filefullpath); continue}; //retorna true faz um chamado da função readdir com outro parametro;

        if(!/\.css$/g.test(filefullpath) && !/\.html$/g.test(filefullpath)) continue; //filtra todos outros arquivos arquivos a nao ser os .css e .html
        console.log(files, stats.isDirectory());
    }
}
readdir('/guiga/estudos/javas');