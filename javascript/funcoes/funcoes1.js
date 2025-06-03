function areaQuadrado(lado) {
    return lado * lado;
}

areaQuadrado(5); 
console.log(areaQuadrado(5)); // 25

function pi() {
    return 3.14;
} 
var total = 5 * pi();

console.log(pi); 

// ! Parâmetros e argumentos
/* 
    * Ao criar uma função, você define parâmetros que são variáveis locais dentro da função.
    * Ao executar uma função, você passa argumentos que são os valores reais que serão usados nos parâmetros.
*/

function imc(peso, altura) // Parametros = peso e altura
{
    const imc = peso / (altura ** 2);
    return imc;
}
console.log(imc(62, 1.74));

// ! Parênteses executam a função

function corFavorita(cor) {
    if (cor === 'azul') {
        return 'Olhe para o céu';
    } else if (cor === 'verde') {
        return 'Olhe para as árvores';
    } else {
        return 'Feche os olhos';
    }
}
corFavorita();
console.log(corFavorita()); 

// ! Argumentos podem ser funções
    // * Chamados de Callback, são funções que ocorrem após algum evento ou ação, como um clique do usuário ou o carregamento de uma página.

    addEventListener('click', function() {
        console.log('Clicou');
    });
    // A função possui dois argumentos
    // Primeiro é a string 'click', que é o tipo de evento que estamos ouvindo.
    // Segundo é uma função anônima que será executada quando o evento ocorrer.
        // ? Obs: A função anônima é aquela onde o nome da função não é definido, escritas como function() {} ou () => {}.

