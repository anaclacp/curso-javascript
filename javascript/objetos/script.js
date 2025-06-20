var pessoa = {
    nome: 'Ana Clara',
    idade: '22',
    profissao: 'Desenvolvedora de Software',
}

console.log(pessoa.nome);

// ? Método é uma propriedade que possui uma função no local do seu valor.
// ? Exemplo de método:
var quadrado = {
    lados: 4,
    area: function(lado) {
        return lado * lado;
    },
    perimetro: function(lado) {
        return this.lados * lado;
    }
}

// ? 'Lados' é uma propriedade do objeto quadrado, um quadrado tem 4 lados.
// ? Essa propriedade indica que todos os lados do quadrado têm o mesmo tamanho.

console.log(quadrado.lados); 
console.log(quadrado.area(5)); 
console.log(quadrado.perimetro(5)); 