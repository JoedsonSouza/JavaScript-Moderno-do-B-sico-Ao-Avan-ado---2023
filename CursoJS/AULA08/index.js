/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
Luiz Otávio nasceu em 1989
*/
const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.80;
let imc; // peso / (altura * altura)
let anoNascimento;

imc = peso / (altura * altura);
anoNascimento = 2019 - idade;

console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' + 84 + ' kg');

//template strings
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`); //maneira mais moderna e legível - opte por utilizar esta forma

console.log(nome, 'nasceu em', anoNascimento);