// 1-ARRAYS

// São listas;
// Podem ser inseridos valores de qualquer tipo de dado;
// Os valores são inseridos entre [];
// Cada valor é separado um do outro por uma virgula.

const lista = [1, 2, 3, 4,5];

console.log(lista); // a saída éa lista no console

// tipo da lista
console.log(typeof lista);  // para o JS uma array é considerado um object

// podem ser inseridos varios tipode de dados em uma array até mesmo outra array

const itens = ["Taylane", 1, true, 2.5, []];
console.log(itens);

// 2-MAIS SOBRB ARRAYS

// Maneira de acessar os itens da lista individualmente:

const arr = ["a", "b", "c", "d", "e"];

// nas arrys o primeiro elemento sempre vai ser o 0:

console.log(arr[0]); // saída: a.
console.log(arr[3]); // saída: d.
console.log(arr[10]); // saída undefined porque o valor não existe


// 3-PROPRIEDADES

// Propriedades são como informações de um objeto;
// Os arrays tem propriedades, assim como outros tipos de dados;
// As propriedades podem ser acessadas por notação de ponto ou colchetes: dado.prop ou dado['prop'].

const numbers = [5, 3, 4];

console.log(numbers.length); // Length é a propriedade para saber a quantidade de elementos da lista.
console.log(numbers['length']);

// as strings também tem propriedades:
const myName = "Taylane"
console.log(myName.length); // A saída é a quantidade de caracters: 7.


// 4-MÉTODOS

// Métodos são como funções, acessamos com notação de ponto e utilizamos () para invocar;
// Um importante conceito de OOP (programação orientada a objetos): objetos são compostos por métodos e propriedades;
// Comos muitos dados são objetos em JS, temos métodos e propriedades neles.

const otherNumbers = [1, 2, 3];
const allNumbers = numbers.concat(otherNumbers); // concatenar duas arrays (juntar).

console.log(allNumbers); // saída é a implementação dos elementos da array numbers a otherNumbers.

// método que transforma o texto em letras maiúsculas;
const text = "algum texto";

console.log(text.toUpperCase()) 
console.log(typeof text.toUpperCase) // saída: function. ´É uma função dentro o Objetos, mas o nome técnico é método.

// Método para encontrar a posição de caractere dentro de uma string:

console.log(text.indexOf("g")); // saída 2.

// 5-OBJETOS (OBJECT LITERALS)

// Em JS um tipo de dado que é o objeto, mas seu nome técnico é objetc literals;
// Isso porque o objeto vem da Orientação a Objetos, com outros recursos: instâncias, herança...
// Já os literais possuem apenas propriedades e métodos, nós mesmo criamos;
// O objeto fica em um bloco de {}.

const person = {
    name: "taylane",
    age: 26,
    job: "programadora"
};

// imprimir objeto todo
console.log(person);

// apenas um objeto

console.log(person.name); // saída: taylane.

// total de propriedade de um objeto:

console.log(person.name.length); // saida: 7.

// tipo de dado

console.log(typeof person); // saida: object



