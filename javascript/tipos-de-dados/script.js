var nome = 'Ana'; // String
var idade = 21; // Number
var comida; // Undefined
var possuiFaculdade = true; // Boolean
var time = null; // Null
var simbolo = Symbol('qualquer'); // Symbol
var novoObjeto = {}; // Object

console.log(nome, idade, comida, possuiFaculdade, time, simbolo, novoObjeto);
console.log(typeof possuiFaculdade); // uma forma de verificar qual é o tipo de dado

var ano = "2018"
var mes = 11
console.log(ano + mes); 

var gols = 1000;
var frase = "Romário fez " + gols + " gols"; 
console.log(frase);
var frase2 = `Romário fez ${gols} gols`; 

/* 
 * Interpolar (inserir) variáveis ou expressões diretamente dentro de uma string de forma mais limpa e legível -- Chamado de Template Literals ou Template Strings
 ! Deve ser usado para passar expressões / variáveis dentro de ${}
 * As crases (`) são usadas para criar strings multilinha e interpolar variáveis -- Basicamente é o funcionamento de {} no Python para declarar variáveis dentro de strings
 */

console.log(frase2);