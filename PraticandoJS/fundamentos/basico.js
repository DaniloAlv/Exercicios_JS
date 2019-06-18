//Dar preferencia para let em relação a palavra reservada var
//Usar const para constantes (variaveis que terão o valor fixo na aplicação)
let coisa = "Konoha";
console.log(coisa);
console.log(typeof(coisa));

console.log("----------------");

coisa = 97.21;
console.log(coisa);
console.log(typeof(coisa));

console.log("----------------");

var poke = "Charizard";
poke = 789;
console.log(poke);
console.log(typeof(poke));

console.log("----------------");

const numberPI = 3.14;
console.log(numberPI);
console.log(typeof(numberPI));

console.log("----------------");

const altura = Number(2.50);
console.log(altura);
console.log(Number.isInteger(altura))
console.log(Number.isNaN(altura));

console.log("----------------");

const name = "Sasuke";
console.log(name);
console.log(Number.isNaN(name));

console.log("-----------------");

const prova1 = 8.6;
const prova2 = 7.9;
const peso1 = 2.5;
const peso2 = 3;

const nota = (prova1 * peso1) + (prova2 * peso2);
const media = nota / (peso1+peso2);

console.log("Média: " + media.toFixed(2)); //Nº de casas após a vírgula
console.log("Média: " + media.toString(2)); //Converte em binário
console.log("Média: " + media.toExponential(5)); //Nº em notação exponencial