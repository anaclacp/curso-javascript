function terceiraIdade(idade){
    if(typeof idade !== 'number'){
        return 'Informe uma idade válida';
    } else if(idade >= 60){
        return true;
    } else {
        return false;
    }
}

console.log(terceiraIdade(45)); // 70

// ! Escopo
// ? Variáveis e funções definidas dentro de um bloco {}, não são visíveis fora dele.

function faltaVisitar(paisesVisitados){
    var totalPaises = 193;
    return `Faltam visitar ${totalPaises - paisesVisitados} países`;
}

// // console.log(totalPaises);
// ? Isso aqui 'console.log(totalPaises);' vai dar erro, pois a variável totalPaises não é visível fora da função faltaVisitar.
// Para funcionar, basta chamar a função e não a variável console.log(faltaVisitar(20)); 

// ! Outros exemplos

var profissao = 'Programador';

function dados() {
    var nome = 'João';
    var idade = 30;
    function outrosDados() {
        var endereco = 'Rua A, 123';
        var idade = 25;
        return `${nome}, tem ${idade} anos, mora em ${endereco} e é ${profissao}`;
    } 
    return outrosDados(); 
}
console.log(dados()); // Retorna 'João, tem 25 anos, mora em Rua A, 123 e é Programador' 
// // console.log(outrosDados()); 
// ? Retorna um erro, ele não consegue acessar a função outrosDados fora da função dados, pois ela está dentro do escopo de dados. 
// ! Não é possível acessar uma função interna fora do escopo da função que a contém. outrosDados não foi definido fora, para o "editor" é como se ele não existisse.