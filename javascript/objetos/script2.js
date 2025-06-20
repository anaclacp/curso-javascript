var carro = {};
var pessoa = {};

console.log(typeof carro)

// ! Dot Notation Set e Get
// ? ## Dot Notation: set ( setar um valor)
carro.marca = 'Toyota'; 
// ? ## Dot Notation: get ( acessar um valor)
console.log(carro.marca);

// Exemplo GET
var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E',
};

// // var bg = menu.backgroundColor;

// Exemplo SET
menu.backgroundColor = '#000'; // ? Mudando o valor da propriedade backgroundColor do objeto menu
console.log(menu.backgroundColor); // ? Acessando o novo valor da propriedade backgroundColor do objeto menu

// ! Adicionar propriedades e métodos
// ? Basta adicionar um novo nome e definir o valor

var menu = {
    width: 800,
}

menu.height = 50; 
menu.position = 'fixed';

// ! Palavra-chave 'this'
// ? 'this' irá fazer uma referência ao próprio objeto.

var height = 120;

var menu = {
    width: 800,
    height: 50,
    metadeHeight() {
        return this.height / 2; // Chamou o height definido dentro do objeto menu
    }
}
menu.metadeHeight(); // ? Retorna 25, porque referenciou o height do objeto menu, que é 50, e dividiu por 2.

// ! Agora se fosse dessa forma
var height = 120;

var menu = {
    width: 800,
    height: 50,
    metadeHeight() {
        return height / 2; 
    }
}
menu.metadeHeight(); // ? Retorna 60, porque referenciou o height definido fora do objeto menu, que é 120, e dividiu por 2.