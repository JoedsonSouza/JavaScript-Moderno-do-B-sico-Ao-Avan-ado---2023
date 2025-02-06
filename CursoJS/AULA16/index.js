//               0       1        2          3      4
const alunos = ['Luiz', 'Maria', 'João']; // Luiza, Ediardo

console.log(typeof alunos);
console.log(alunos instanceof Array);

// alunos.push('Luiza'); 
// alunos.push('Eduardo');

// console.log(alunos.slice(0, 3)); // fatiamos o array para selecionar apenas Luiz, Maria, João. O último indice especificado não é selecionado na fatia.
// console.log(alunos.slice(0, -2)); // mesmo efeito do que está acima

// delete alunos[1]; // remove o elemento do indice especificado, mas mantém o índice vazio dentro do array. Ele não reordena os indices como o pop e shift
// console.log(alunos[50]); // acessando um indice que não existe ou não aponta para nenhum local da memória, recebemos "undefined" como retorno.

// const removido = alunos.pop(); // remove elementos do fim do array
// console.log(removido);

// const removido2 = alunos.shift(); // remove elementos do inicio do array
// console.log(removido2);
// console.log(alunos);

// alunos.unshift('Luiza'); // adiciona o elemento no inicio do array.
// alunos.unshift('Fábio'); // adiciona o elemento no inicio do array.


// alunos.push('Luiza'); // adiciona o elemento ao final do array.
// alunos.push('Fábio'); // adiciona o elemento ao final do array.


// alunos[alunos.length] = 'Luiza' // adiciona o elemento ao último índice. (3)
// alunos[alunos.length] = 'Fábio' // adiciona o elemento ao último índice. (4)
// alunos[alunos.length] = 'Luana' // adiciona o elemento ao último índice. (5)

// alunos[0] = 'Eduardo'; // alterei o valor do índice 0 (Luiz) por (Eduardo)
// alunos[3] = 'Luiza'; // adicionei um novo elemento ao array, já que o índice 3 não existia
// console.log(alunos.length); // tamanho do array
// console.log(alunos[2]);