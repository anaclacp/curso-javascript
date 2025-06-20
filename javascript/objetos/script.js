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
    } // ? para não precisar repetir a variável, usamos o 'this', em outras palavras ele é usado para referenciar o objeto atual, nesse caso, o quadrado.
}

// ? 'Lados' é uma propriedade do objeto quadrado, um quadrado tem 4 lados.
// ? Essa propriedade indica que todos os lados do quadrado têm o mesmo tamanho.

console.log(quadrado.lados); 
console.log(quadrado.area(5)); 
console.log(quadrado.perimetro(5)); 

// ? Abreviação para criar um meétodo, exemplo da área: area: function () {} para area() {}
// ! Exemplo: 
var quadrado = {
    lados: 4,
    area (lado) {
        return lado * lado;
    },
    perimetro (lado) {
        return this.lados * lado;
    }
}
// ! Funciona da mesma forma que o anterior, mas com uma sintaxe mais curta.
