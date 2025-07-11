// ! Crie uma função para verificar se um valor é Truthy
function isTruthy(valor) {
  return !!valor; 
}

// ! Crie uma função matemática que retorne o perímetro de um quadrado
// ! lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado) {
  return lado * 4; 
}
console.log(perimetroQuadrado(5)); 

// ! Crie uma função que retorne o seu nome completo
// ! ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}
console.log(nomeCompleto('Ana Clara', 'Pereira'));

// ! Crie uma função que verifica se um número é par
function isPar(numero){
  if (numero % 2 === 0) {
    return true;
  }
    return false;
}
console.log(isPar(5)); 

// ! Crie uma função que retorne o tipo de
// ! dado do argumento passado nela (typeof)
function tipoDado(argumento) {
  return typeof argumento;
}
console.log(tipoDado(42)); 
console.log(tipoDado('42')); 
console.log(tipoDado(true)); 


// ! addEventListener é uma função nativa do JavaScript
// ! o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// ! utilize essa função para mostrar no console o seu nome completo
// ! quando o evento 'scroll' ocorrer.
addEventListener('scroll', function() {
    console.log('Ana Clara Pereira')
});

// ! Corrija o erro abaixo

var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
} 
function jaVisitei(paisesVisitados) {
return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

console.log(precisoVisitar(20));
console.log(jaVisitei(20));