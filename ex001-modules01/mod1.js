const nome ='guiga';
const sobrenome ='kirin';

const falaNome = (nome,sobrenome) => {
    console.log(nome, sobrenome);
};



/*  exportando como module

module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
module.exports.falaNome = falaNome;

console.log(module.exports);
*/

//  exportando somente com exports
exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;

this.qualquerCoisa = 'o que eu quiser' //consigo exportar a chave com .this

console.log(exports);

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

exports.Pessoa = Pessoa;