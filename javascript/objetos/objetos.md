# Objetos

## É um conjunto de variáveis e funções, que são chamadas de propriedades e métodos.

> Propriedades e métodos consistem em nome (chave) e valor

### Exemplo

```javascript

var pessoa = {
    nome: 'Ana',
    idade: '22',
    profissao: 'Desenvolvedora de software',
    possuiFaculdade: true,
}

console.log(pessoa.nome);
console.log(pessoa.possuiFaculdade);
```

### No exemplo acima, o objeto se chama pessoa e possui propriedades (variáveis associadas a ele), como nome, idade, profissao e possuiFaculdade.

> Propriedade: é um par de chave e valor, onde o valor geralmente é um dado (string, número, booleano, etc.). 
> Método: é uma função associada a um objeto, ou seja, o valor da chave é uma função.

### Ou seja, método é uma propriedade que possui uma função no local do seu valor.

---

## Resumo rápido: 
- **Propriedade**: É um par de chave e valor dentro de um objeto.  
  **Exemplo:**  
  ```javascript
  var quadrado = {
      lados: 4 
  ```

- **Método**: É uma propriedade cujo valor é uma função, ou seja, uma ação do objeto.  
  **Exemplo:**  
  ```javascript
  var quadrado = {
      area: function(lado) {
          return lado * lado;
      }
  }
  ```

- **Abreviação de método**:  
  Em vez de `area: function(lado) { ... }`, pode-se escrever apenas `area(lado) { ... }`.  
  **Exemplo:**  
  ```javascript
  var quadrado = {
      area(lado) {
          return lado * lado;
      }
  }
  ```

### Basicamente, objetos servem para organizar o código em pequenas partes reutilizáveis.
> Observação: console.log(quadrado) -- Sempre que tiver '.', antes dele é na verdade um objeto, neste caso, console é um objeto e log é o método

> console.table(quadrado); Exibe o objeto quadrado em uma tabela no console, facilitando a visualização das propriedades e métodos.

---

## Criar um objeto
# Um objeto é criado usando as chaves {}