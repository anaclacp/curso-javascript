# Atribuição e Ternário

## Operadores de atribuição 

> Podem funcionar como formas abreviadas
var x = 5;
var y = 10;
x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; // x = x ** y (9765625)

## Operador Ternário
Abreviação de condicionais com `if` e `else`.

```javascript
var idade = 19;
var podeBeber = (idade >= 18) ? 'Pode beber' : 'Não pode beber';
console.log(podeBeber)
```
Funciona da seguinte forma: condição ? true : false

> Geralmente utilizado quando precisamos atribuir um valor para uma variável, dependendo de uma condição.

