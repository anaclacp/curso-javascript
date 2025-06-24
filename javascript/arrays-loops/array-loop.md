# Arrays e Loops

## Array 
> É um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variável.

```javascript
let videoGames = ['Switch', 'PS5', 'Xbox'];

videoGames[0] //acessa o primeiro índice: Switch
videoGames[2] //acessa o segundo índice -> 0, 1, 2 -> Xbox
```

## Métodos e Propriedades de um Array
```javascript
videoGames.pop();
videoGames.push('3DS');
videoGames.lenght;
```
Existem diversos outros métodos como: `map`, `reduce`, `forEach` e outros que veremos mais à frente

## Loop
### For 
> Fazem algo repetidamente até que uma condição seja atendida

```javascript
for (var numero = 0; numero < 10; numero ++) {
    console.log(numero)
}
```

O for loop possui 3 partes, `início`, `condição` e `incremento`.

### While Loop
> O for loop é mais comum

```javascript
var i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
```

### Interação de arrays com loops

```javascript
var videoGames = ['Switch', 'PS5', 'Xbox', '3DS'];

for(var item = 0; item < videoGames.length; item++){
    console.log(videoGames[item]);
}
```

> Esse exemplo é um loop no array, ele usou `videoGames.length` para pegar a quantidade de itens do array e fazer um loop, e o console.log`(videoGames[item])` retorna os nomes dos itens no array.


