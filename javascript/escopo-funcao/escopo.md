# Escopo de Função

Variáveis declaradas dentro de funções não são acessadas fora das mesmas

```javascript
function mostrarCarro() {
    var carro = 'Fusca';
    console.log(carro);
}

mostrarCarro(); // retorna fusca
console.log(carro); // erro, carro is not defined
```
> Escopo evita o conflito entre nomes.

## Variável Global (erro)

Declarar variáveis sem a palavra chave `var`, `const` ou `let`, cria uma variável que pode ser acessada em qualquer escopo (global). Isso é um erro. 

> Definir uma variável global pode quebrar o código, portanto o 'use strict' no início do código impede isso. -- O Javascript entra basicamente no modo estrito dele que não permite isso. 

```javascript
// exemplo
function mostrarCarro() {
    carro = 'Fusca';
    console.log(carro);
}

mostrarCarro(); // retorna fusca
console.log(carro); // retorna fusca
```

---

## Escopo de função (pai)

Variáveis declaradas no escopo pai da função, conseguem ser acessadas pelas funções.

```javascript
var carro = 'Fusca';

function mostrarCarro() {
  var frase = `Meu carro é um ${carro}`;
  console.log(frase);
}

mostrarCarro(); // Meu carro é um Fusca
console.log(carro);  // Fusca

```

## Escopo de bloco

Variáveis criadas com `var`, vazam o bloco. Portanto essa variável não é comumente utilizada.

```javascript
if(true) {
  var carro = 'Fusca';
  console.log(carro);
}
console.log(carro); // Carro
```

## Const e Let no lugar de var

> Elas não vazam dos blocos, as chaves que criam os blocos.

### For loop com let

```javascript
for(let i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}
console.log(i); // i is not defined
```

### Const

```javascript
const mes = 'Dezembro';
mes = 'Janeiro'; // erro, tentou modificar o valor
const semana; // erro, declarou sem valor

const data = {
  dia: 28,
  mes: 'Dezembro',
  ano: 2018,
}

data.dia = 29; // Funciona
data = 'Janeiro'; // erro
```
> Variáveis com valores constantes devem utilizar o `const`.

### Let

Mantém o escopo no bloco, impede a redeclaração, mas permite a modificação do valor da variável.

```javascript
let ano;
ano = 2018;
ano++;
console.log(ano); // 2019

let ano = 2020; // erro, redeclarou a variável
```

> Geralmente vamos utilizar o `const`


