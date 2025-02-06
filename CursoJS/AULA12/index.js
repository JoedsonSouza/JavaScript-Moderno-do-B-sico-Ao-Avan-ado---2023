let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A
/*const aux = varA;

varA = varB;
varB = varC;
varC = aux;*/

// solução alternativa
[varA, varB, varC] = [varB, varC, varA] // solução moderna do JS

console.log(varA, varB, varC);