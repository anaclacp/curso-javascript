var tarefa = '2', // String
    ano = '2003', // Number (mas representado como String)
    idade = 21; // Number

console.log(tarefa, ano, idade);

var nome = 'Ana', 
    sobrenome = 'Pereira';

var nomeCompleto = nome + ' ' + sobrenome; 
var nomeCompletoTemplate = `${nome} ${sobrenome}`; 
console.log(nomeCompleto);
console.log(nomeCompletoTemplate);

var frase = "It's Time";
/*
    ? Eu poderia ter usado crases (`) para evitar o uso de escape (\) e deixar a string mais limpa, mas como não é necessário, vou deixar assim.
    ! O uso de crases (`) é mais comum quando precisamos interpolar variáveis ou expressões dentro da string, como no caso do nome completo acima.
    * Exemplo: 
    * var frase = `It's Time`;
*/

var verificarTipoNome = typeof nome; 
console.log(verificarTipoNome);

// * ou simplesmente fazer isso: console.log(typeof nome); 