// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
console.log(total); 
// Crie duas expressões que retornem NaN
var unidade = 'kg',
    valor = 10;
var peso = unidade * valor; 
console.log(peso); 

var unidade = 'mg',
    remedio = 180;
var peso2 = unidade % remedio; 
console.log(peso2); 

// Somar a string '200' com o número 50 e retornar 250
var valor = '200',
    valor2 = 50,
    somaStrNum = +valor + valor2; 
console.log(somaStrNum);

// Incremente o número 5 e retorne o seu valor incrementado 
var numero = 5,
    numeroIncrementado = ++numero; 
console.log(numeroIncrementado);

// Como dividir o peso por 2?
var numero = +'80' / 2;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
console.log(peso); // '40kg'

