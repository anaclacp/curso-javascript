// ? Como declaramos números em JS? (inteiros, decimais, exponenciais)
var idadeExemplo = 28;          // * Exemplo (inteiro):
var golsExemplo = 1000;         // * Exemplo (inteiro):
var piExemplo = 3.14;           // * Exemplo (ponto para decimal):
var expExemplo = 2e10;          // * Exemplo (notação exponencial - 20000000000):
                                // ! Observação sobre precisão (até 15 dígitos).

console.log(idadeExemplo, golsExemplo, piExemplo, expExemplo);

// ? Quais são os operadores aritméticos básicos e como funcionam?
var somaNum = 100 + 50;         // *  (soma):
var subtracaoNum = 100 - 50;    // *  (subtração):
var multiplicacaoNum = 100 * 2; // *  (multiplicação)
var divisaoNum = 100 / 2;       // *  (divisão)
var expoenteNum = 2 ** 4;       // *  (exponenciação)
var moduloNum = 14 % 5;         // *  (módulo/resto da divisão)

console.log(somaNum, subtracaoNum, multiplicacaoNum, divisaoNum, expoenteNum, moduloNum);
// ! Lembrete: soma '+' em Strings serve para concatenar.

// ? Como os operadores aritméticos se comportam quando um ou ambos os operandos são strings?
var somaStrNum = '100' + 50;         
var subtracaoStrNum = '100' - 50; // ! O operador '-' tentou converter ambos os operandos para números e então realizou a subtração aritmética. Todos os operadores aritméticos (exceto '+') tentam converter strings para números.  
var multiplicacaoStrStr = '100' * '2';  
var divisaoStrInvalida = 'Comprei 10' / 2; 
                                         // ! Not a Number
                                         // ? Como verificar se algo é NaN? (função isNaN())

console.log(somaStrNum, subtracaoStrNum, multiplicacaoStrStr, divisaoStrInvalida);
console.log("É 'divisaoStrInvalida' NaN?", isNaN(divisaoStrInvalida));


var numeroNaNEx = 80;
var unidadeNaNEx = 'kg';
var pesoConcat = numeroNaNEx + unidadeNaNEx; 
var pesoDividido = pesoConcat / 2;         

console.log(pesoConcat, pesoDividido);
console.log("É 'pesoDividido' NaN?", isNaN(pesoDividido));


// --- 5. Ordem dos Operadores (Precedência) ---
// ? Qual a ordem padrão que o JS segue para resolver expressões? (PEMDAS/BODMAS similar?)
var total1 = 20 + 5 * 2;          
var total2 = (20 + 5) * 2;         
var total3 = 20 / 2 * 5;          
var total4 = 10 + 10 * 2 + 20 / 2; 


console.log(total1, total2, total3, total4);


// ? Operadores unários

var incrementoEx = 5;
console.log("Pós-incremento (valor antes):", incrementoEx++); // * Exemplo (pós-incremento): (valor logado? valor de incrementoEx depois?)
console.log("Pós-incremento (valor depois):", incrementoEx);   // * (valor de incrementoEx aqui?)

var incremento2Ex = 5;
console.log("Pré-incremento (valor já incrementado):", ++incremento2Ex); // * Exemplo (pré-incremento): (valor logado? valor de incremento2Ex depois?)
console.log("Pré-incremento (valor depois):", incremento2Ex);          // * (valor de incremento2Ex aqui?)

// ! Mesma lógica se aplica ao decremento (--x e x--).

// ? Como os operadores unários '+' e '-' podem ser usados para tentar converter valores para números?

var fraseParaConverter = 'Isso é um teste';
var resultadoMaisFrase = +fraseParaConverter;  
var resultadoMenosFrase = -fraseParaConverter; 
console.log(resultadoMaisFrase, resultadoMenosFrase);

var idadeString = '28';
var resultadoMaisIdadeStr = +idadeString;     
var resultadoMenosIdadeStr = -idadeString;     
console.log(resultadoMaisIdadeStr, typeof resultadoMaisIdadeStr, resultadoMenosIdadeStr, typeof resultadoMenosIdadeStr);
console.log("Soma após conversão:", +idadeString + 5); 

var booleanoParaConverter = true;
var resultadoMaisBooleano = +booleanoParaConverter; 
console.log(resultadoMaisBooleano);
                                                 // ! O que acontece com false? (+false)

// ! Lembrete: o '-' antes de um número também o torna negativo (ou inverte seu sinal).
var numPositivo = 10;
console.log(-numPositivo);
