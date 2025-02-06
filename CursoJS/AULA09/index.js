//Quando utilizamos var é possível redeclarar variáveis, com let, não!
//ex.:
var nome = 'joedson';
var nome = 'souza';
// isso é possível com var, mas não com let.
console.log(nome);
let n = 'joedson';
//let n = 'souza';

nome2 = 'joedson'; //NÃO FAÇA ISSO: Vai criar uma variável global e pode afetar outras variáveis do sistema.

//UTILIZE SEMPRE LET E CONST PARA VARIÁVEIS.
//LET é mais moderno