// IEEE 754-2008 -> PADRÃO QUE O JS SEGUE PARA A PRECISÃO DOS NÚMEROS COM CASAS DECIMAIS
let num1 = 0.7; // number
let num2 = 0.1; // number

//num1 = ((num1 * 100) + (num2 * 100)) /100; // 0.8 --> forma de contornar as imprecisões do padrão IEEE das casas decimais

// A MELHOR FORMA DE CONTORNAR A IMPRECISÃO COM NÚMEROS DECIMAIS:
num1 = Number(num1.toFixed(2));

/*
num1 += num2; // 0.8
num1 += num2; // 0.9
num1 += num2; // 1.0

console.log(num1); // 0.999999999 ao invés de 1.0
console.log(Number.isInteger(num1)); // false
num1 = parseFloat(num1.toFixed(2));
console.log(Number.isInteger(num1)); // true

num1 = Number(num1.toFixed(2));

console.log(num1);
console.log(Number.isInteger(num1));;
*/


/*
console.log(num1.toString() + num2); // num1 continua sendo número, apenas estamos convertendo em uma string temporariamente para a execução da concatenação
num1 = num1.toString(); // aqui convertemos permanentemente a variável num1 para String
console.log(num1.toString(2)); // representamos num1 na base 2, ou seja, em números binários.
console.log(num1.toFixed(2)); // delimito a quantidade de casas decimais que quero sejam exibidas já com arredondamento
console.log(Number.isInteger(num1)); // verifico se o meu número é inteiro ou não - o retorno é um valor booleano: true or false.
let temp = num1 * 'Ola'; //NaN - Not a Number: "conta inválida"
console.log(Number.isNaN(temp));
*/
