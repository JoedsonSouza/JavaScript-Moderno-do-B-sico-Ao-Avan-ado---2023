//let umaString = "Um \"texto\""; //forma de escapar o caractere de aspas utilizando aspas na definição do valor de uma string
//let umaString = "Um \\texto"; // uma \ é utilizada para escape, para mostrar uma barra invertida na String, usamos \\

// Strings são indexadas (cada carácter tem um índice, assim como um vetor)
let umaString = "Um texto muito cansativo";

console.log(umaString[4]);  //estou pegando apenas o elemento do índice 4 dessa String
console.log(umaString.charAt(6)); //também retorna apenas o elemento do índice especificado

// Formas de concatenação
/*
console.log(umaString.concat(' em um', ' lindo dia.'));
console.log(umaString + ' em um lindo dia.');
console.log(`${umaString} em um lindo dia.`);
*/

// Descobrir o índice da palavra
/*
console.log(umaString.indexOf('texto'));
console.log(umaString.lastIndexOf('m', 0)); //mesma função da função acima, porém, procura a partir do último índice.
*/

console.log(umaString.replace('Um', 'Outro')); // troca uma palavra por outra
console.log(umaString.length); // retorna o tamanho da string
console.log(umaString.slice(3,8)); // retorna uma fatia da string
console.log(umaString.split(' ')); // remove todos os espaços da frase e cria um array com cada palavra separadamente
console.log(umaString.toUpperCase()); // transforma tudo em maiúsculo
console.log(umaString.toLowerCase());

/*
*   RECOMENDAÇÕES:
*   OLHAR DOCUMENTAÇÃO NO W3SCHOOLS
*   OU NO MDN JAVASCRIPT DA MOZZILA
*/