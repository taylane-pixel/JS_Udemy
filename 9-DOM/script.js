// Movendo-se pelo DOM
// Nodes são os nós da DOM
// acessando todo o documento do corpo do HTML
console.log(document.body); 

// acesso a todos os elementos (nós) da DOM
// Isso gera no console um array contendo todos os elementos do HTML
console.log(document.body.childNodes);

// Como gera um array, eu posso selecionar um elemento especifico através do seu indice
console.log(document.body.childNodes[1]); // o elemento selecionado foi o header

//Acessando os nós do header

console.log(document.body.childNodes[1].childNodes);

// Acessando o texto do chilNodes 1
//  A saida é todo conteúdo escrito no header

console.log(document.body.childNodes[1].textContent);


