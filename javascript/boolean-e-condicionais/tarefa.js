// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

var idadeAna = 21;
var idadeNamorado = 21;
var idadeMãe = 54;

if(idadeAna > idadeNamorado) {
    console.log('É maior');
} else if(idadeAna === idadeNamorado) {
    console.log('É igual');
} else if (idadeAna < idadeNamorado) {
    console.log('É menor');
}

if (idadeMãe > idadeAna) {
    console.log('É maior');
} else if(idadeMãe === idadeAna) {
    console.log('É igual');
} else if (idadeMãe < idadeAna) {
    console.log('É menor');
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 4); // Verifica se a expressão é Truthy ou Falsy através dp último valor avaliado
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

if (nome) {
    console.log("nome ('" + nome + "') é Truthy");
} else {
    console.log("nome ('" + nome + "') é Falsy");
}

// Para 'idade'
if (idade) {
    console.log("idade (" + idade + ") é Truthy");
} else {
    console.log("idade (" + idade + ") é Falsy");
}

// Para 'possuiDoutorado'
if (possuiDoutorado) {
    console.log("possuiDoutorado (" + possuiDoutorado + ") é Truthy");
} else {
    console.log("possuiDoutorado (" + possuiDoutorado + ") é Falsy");
}

// Para 'empregoFuturo'
if (empregoFuturo) {
    console.log("empregoFuturo (" + empregoFuturo + ") é Truthy");
} else {
    console.log("empregoFuturo (" + empregoFuturo + ") é Falsy");
}

// Para 'dinheiroNaConta'
if (dinheiroNaConta) {
    console.log("dinheiroNaConta (" + dinheiroNaConta + ") é Truthy");
} else {
    console.log("dinheiroNaConta (" + dinheiroNaConta + ") é Falsy");
}

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
    console.log('Brasil tem mais habitantes que a China');
} else if (brasil === china) {
    console.log('Brasil e China tem o mesmo número de habitantes');
}
else {
    console.log('Brasil tem menos habitantes que a China');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

/* 
    ? O que irá aparecer no console?
    ! Avaliando a condição completa com && (E Lógico): false && true
    * O operador && retorna true somente se ambos os operandos forem true.
    * Como o primeiro operando é false, a expressão inteira false && true resulta em false.
*/

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}

/*
    ! Basta lembrar de portas lógicas:
    * A || B (ou lógico) retorna true se pelo menos um dos operandos for true.
    * A && B (e lógico) retorna true somente se ambos os operandos forem true.
    * Neste caso, a expressão 'Gato' && 'Cão' retorna 'Cão', pois o operador && avalia o último operando se o primeiro for truthy.
    
    TODO O Ponto Crucial: O que && RETORNA (não apenas true/false)
    TODO Aqui está a parte interessante do && em JavaScript que explica o "Cão".
    TODO O operador && avalia a expressão da esquerda para a direita.
    TODO Se o primeiro operando for falsy, && retorna o valor desse primeiro operando falsy e não avalia o segundo.
    TODO Se o primeiro operando for truthy, && avalia o segundo operando e retorna o valor do segundo operando.
    TODO No seu caso: 'Gato' && 'Cão'
    TODO 'Gato' é uma string não vazia, então é truthy.
    TODO Como o primeiro é truthy, && prossegue e avalia 'Cão'.
    TODO && então retorna o valor do segundo operando, que é 'Cão'.
    TODO O console.log:
    TODO console.log('Gato' && 'Cão') se torna console.log('Cão'). 
    
*/

// Observação final do meu aprendizado sobre truthy e falsy:
// Observação final do meu aprendizado sobre truthy e falsy:
/*
! Eu geralmente NÃO usaria (ou usaria com muita cautela e apenas em casos simples e idiomáticos) o comportamento de && e || de retornar o valor de um dos operandos quando:
*   A intenção principal não é simplesmente obter um valor booleano para um if.
*   A cadeia de operandos é longa e complexa.
*   A legibilidade do código ficaria comprometida.

* Casos onde o retorno do operando (truthy/falsy) é aceitável e comum:
*   Valores padrão com ||:
    const nome = nomeUsuario || "Convidado";
     Se nomeUsuario for truthy, 'nome' recebe nomeUsuario.
     Se nomeUsuario for falsy, 'nome' recebe "Convidado".
!   Isso é claro e amplamente entendido. (Lembrando do ?? como alternativa moderna para null ou undefined).

? "Curto-circuito" para chamada de função com &&:
    usuarioAtivo && enviarNotificacao(usuarioAtivo.id);
     Se usuarioAtivo for truthy, a função enviarNotificacao é chamada.
     Se usuarioAtivo for falsy, nada acontece depois do &&.
 Isso é um atalho para if (usuarioAtivo) { enviarNotificacao(usuarioAtivo.id); }. É conciso para casos simples.

 O ponto do exercício sobre (5 - 2) && (5 - ' ') && (5 - 4) retornar 1 é mais para:
*   Entender a mecânica interna do JavaScript: 
*     Saber como a linguagem avalia essas expressões e o que ela retorna é fundamental 
*     para não ser pego de surpresa ao ler código alheio ou ao depurar comportamentos inesperados.
*   Conhecer as "pegadinhas" ou características específicas da linguagem.

! Mas, na prática, ao escrever seu próprio código para resolver um problema, você priorizaria a clareza. 
 Se você precisasse do valor 1 e essa fosse a lógica, você provavelmente a escreveria 
 de uma forma mais explícita se as etapas intermediárias não fossem óbvias, 
 ou simplesmente faria o cálculo final diretamente se fosse simples.
*/