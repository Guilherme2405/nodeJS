class Dog {
    constructor(nome) {
        this.nome = nome;
    }
    latir(){
        console.log(this.nome + ' esta latindo')
    }
}

exports.Cachorro = Dog;