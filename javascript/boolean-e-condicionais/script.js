var possuiFaculdade = true;

if(possuiFaculdade){
    console.log("É verdadeiro");
    var x = 10;
} else {
    console.log("É falso");
}
/*
    ! O que acontece se a variável 'x' for declarada dentro do bloco if?
    ! A variável 'x' só estará acessível dentro do escopo do bloco if, 
    ! então se você tentar acessar 'x' fora do bloco if, com o possuiFaculdade como false, ele vai dar como indefinido (undefined).
    ! porém se for true, ele vai imprimir o valor de x como 10.
    * Isso acontece porque é um var, se fosse um let daria um erro de referência (ReferenceError) ao tentar acessar 'x' fora do bloco if. Fora do if ele não existe.
    ? Lembre-se que o funcionamento do var é diferente do let e const, pois o var tem escopo de função, enquanto o let e const têm escopo de bloco.
*/
console.log("Valor de x:", x);  

// Outros exemplos de condicionais

var possuiGraducao = true;
var possuiMestrado = true;
var possuiDoutorado = true;

if (possuiGraducao && possuiMestrado && possuiDoutorado) {
    console.log("Possui graduação, mestrado e doutorado"); 
} else if (possuiGraducao && possuiMestrado) { 
    console.log("Possui graduação e mestrado");
} else if (possuiDoutorado) {           
    console.log("Possui doutorado");
} else if (possuiGraducao) {            
    console.log("Possui graduação");
} else {                              
    console.log("Não possui graduação, mestrado e nem Doutorado");
}