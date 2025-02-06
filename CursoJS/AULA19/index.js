/*
**** Primitivos (dados imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - Valor é imutável, não a variável. Valores copiados

EX.: 01
let nome = 'Luiz';
nome = 'Otávio';
console.log(nome);
// não estamos mudando o dado (valor primitivo), mas sim trocando o valor da variável

EX.: 02
let nome = 'Luiz';
nome[0] = 'R';
console.log(nome[0], nome);
// a string é imutável, então vai continuar sendo exibido 'L'

EX.: 03
let a = 'A';
let b = a; // Cópia - já que estamos dados primitivos. Ambas as variáveis são independentes
console.log(a, b);

a = 'Outra coisa';
console.log(a, b); // somente o valor de a vai ser alterado, enquanto que o valor de b continuará o mesmo

**** Referência (mutável) - array, object, function. - Passados por referência

EX.: 01

let a = [1, 2, 3];
let b = a;  // não estou COPIANDO o valor, 'b' está apontando para o mesmo local que 'a' aponta na memória.
let c = b;  // Se eu alterar tanto o valor de a quanto o valor de b, estou afetando as duas variáveis
// let b = [...a]; // faz uma cópia do array 'a', e não mais uma referência.
console.log(a,b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

a.push('Luiz');
console.log(c);

EX.: 02
const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

const b = a;
// const b = {...a}; // faz uma cópia do valor de 'a' para 'b' sem fazer com que os dois apontem para o mesmo local na memória

console.log(b);

a.nome = 'João';
console.log(a);
console.log(b);
*/

