// quando uma função está dentro de um objeto, ela pode ser chamada de método
const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala(){
        console.log(`${this.nome} ${this.sobrenome} está falando oi... A minha idade atual é ${this.idade}`);
    },

    incrementaIdade(){
        this.idade++;
    }
};
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();

/********************************************************************************/

// function CriaPessoa(nome, sobrenome, idade){
//     return {
//         nome: nome,
//         sobrenome: sobrenome,
//         idade: idade
//     };
// }

// function CriaPessoa(nome, sobrenome, idade){    //como os nomes dos parâmetros são os mesmos dos atributos, podemos deixar dessa forma
//     return {nome, sobrenome, idade};
// }

// const pessoa1 = CriaPessoa('Luiz', 'Otávio', 25);
// const pessoa2 = CriaPessoa('Maria', 'Andrade', 55);
// const pessoa3 = CriaPessoa('João', 'Oliveira', 60);
// const pessoa4 = CriaPessoa('Junior', 'Santos', 15);
// const pessoa5 = CriaPessoa('Matheus', 'Cardoso', 11);

// console.log(pessoa1.nome, pessoa2.nome);


/***********************************MÉTODO NÃO TÃO EFETIVO POR HAVER REPETIÇÃO DE CÓDIGO NA CRIAÇÃO DO OBJETO*********************************************/
// AQUI CRIAMOS UM OBJETO USANDO UMA VARIÁVEL

// const pessoa1 = {
//     nome: 'Luiz',
//     sobrenome: 'Miranda',
//     idade: 25
// };

// const pessoa2 = {
//     nome: 'Maria',
//     sobrenome: 'Oliveira',
//     idade: 55
// };

// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);
// console.log(pessoa1.idade);