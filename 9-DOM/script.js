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

// =================================================================================================================
// Temos várias formas de selecionar os elementos especificamente um elemento, ou um conjunto deles;
// A diferença entre eles é a forma de seleção, que pode ser por: clase, id, selector de CSS;
// Alguns exemplos são: getElementesByTagName, getElementById, querySelector;


//======================= 2-  SELECIONANDO ELEMENTOS POR TAG  ======================================================================

// Com o método getElementsByName selecionamos um conjunto de elementos por uma tag em comum;
// O argumento é uma string que elva a teg a ser selecionada;

const listItens = document.getElementsByTagName('li');
console.log(listItens);

//================================ 3- SELECIONANDO POR ID ====================================================================================

// Com o método getElementById selecionamos um único elemento, ja que o id é único na página;
// O argumento é uma string que leva o id a ser selecionado;

const title = document.getElementById('title');
console.log(title);

const main = document.getElementById('main-container');
console.log(main);

//=============================== 4- SELEÇÃO DE ELEMENTOS POR CLASSE ==============================================================================

// Com o método getElementsByClassName selecionamos um conjunto de elementos por uma classe em comum;
// O argumento é uams string que leva a classe a ser selecionada;
// Veja como os atributos de HTML começam a fazer mais sentidos em conjuto com JS;

const product = document.getElementsByClassName("product");
console.log(product);

//================================ 5- SELECIONANDO ELEMENTOS POR CSS (forma mais usada)===============================================================

// Com o método querySelectorAll selecionamos um conjunto de elementos por meio de um seletor de CSS;
// E com o querySelector apenas um elemento, com base também um seletor de CSS;

const productQuery = document.querySelectorAll('.product');
console.log(productQuery); 

const mainContainer = document.querySelector('#main-container');
console.log(mainContainer)

// ============================= 6- ALTERANDO O HTML COM O DOM ==================================================================================================

// Podemos mudar praticamente toda a página com DOM;
// Adicionar, remover e até clonar elementos;
// Alguns métodos muito utilizados são: insertBefore, appendChild, replaceChild;

//==================================== 7- ALTERANDO O HTML COM O MÉTODO INSERTBEFORE ================================================================================================================================

// O insertBefore cria um elento antes do outro elemento;
// É necessário criar um elemento com JS, isso pode ser feito com createElement;
// O elemento de referência pode ser selecionado com alguns dos métodos que vimos antes;

const p = document.createElement('p');
console.log(p); // Cria um parágrafo.

// Selecionar o elemento pai do titulo que é o header por meio do title:

const header = title.parentElement;
console.log(header);

// Agora antes do titulo será inserido um paragrafo;
// o método é selecionar o elemento pai;

header.insertBefore(p, title);

// ========================== 8- ALTERANDO O HTML COM O MÉTODO APPEDNCHILD =================================================================================================

// Com o appendChild é possível adicionar um elemento dentro de outro;
// Este elemento adicionado será o último elemento do elemento pai;

const navLinks = document.querySelector('nav ul');

const li = document.createElement('li');

navLinks.appendChild(li);


const Produto = document.querySelector(".product");

const valor = document.createElement("p");

p.textContent = "Valor: R$ 299,99";

Produto.appendChild(p);

//============================ 9- ALTERANDO O HTML COM REPLACECHILD ===========================================================================================================

// O método replaceChild é utilizado para trocar um elemento;
// Novamente precisamos de um elemento pai;
// E também o elemento para ser substituido e o que vai substituir;

// Trocando um h1 por um h2:

const h2 = document.createElement('h2');

// add texto

h2.textContent = "Meu novo título!";

// substituindo o h1
// o header ja foi selecionado no codigo acima, mas caso n fosse seria necessario selecionar 

 const subtitle = document.querySelector(".subtitle"); // criando um seletor para selecinar a classe onde tera a substituição

 const newH2 = document.createElement('h2'); // criando o elemntoque irá substituir

 newH2.textContent = "Bora aprender"; // add o novo texto

 header.replaceChild(newH2, subtitle); // primeiro vem o elemento criado depois o q ira ser substituido


// ================= 10 - createTextNode ======================

// O textos podem ser manipulados com métodos também;
// temos o createTextNode, que cria um nó de texto;
// E este nó pode ser inserido em um elemento;

//  criando o nó de texto
const myText = document.createTextNode("Agora vamos colocar um título");
console.log(myText);

//  criando o elemento para inserir o nó de texto

const h3= document.createElement("h3");

h3.appendChild(myText);

console.log(h3);

// add no html o texto criado

mainContainer.appendChild(h3)

// ========== - 10 TRABALHANDO COM ATRIBUTOS =========

// Podemos ler e alterar os valoresdo atributo;
// Para ler utiliza-se o método getAttributos;
// E para alterar utilizamos o setAttribut, este leva o nome dosatributos e valor para alterar;

const firstLink = navLinks.querySelector("a"); // esse método só pega o primeiro elemento nocaso o primeiro link da nav
console.log(firstLink);

// alterando o elemento href do link 

firstLink.setAttribute("href", "https://www.google.com"); // add o link do google ao elemnto home da nav;

// pegando o elemento href

console.log(firstLink.getAttribute("href"));

// atributo para abrir o link em uma nova aba 

firstLink.setAttribute("target", "_blank");

// para selecionar o segundo link a nav
//  'nav ul li:nth-of-type(2) a' segnigica: selecione o segundo 'li' dentro do 'ul' dentro de 'nav', e depois o 'a' drento desse 'li';

const secondLink = document.querySelector("nav ul li:nth-of-type(2) a"); // posso alterar o numero e mudar para pegar outro elemento da lista
console.log(secondLink)

secondLink.setAttribute('href', 'https://facebook.com');

console.log(secondLink.getAttribute('href'));

secondLink.setAttribute('target', 'blank')

// ====== 11- ALTURA E LARGURA DOS ELEMENTOS ==============================

// É possivel também pegar valores com altura e largura d eelementos;
// vamos utilizar as propriedades: 'offsetWidth' e 'offsetHeight';
// se queremos considerar as bordas, temos: clientWidth' e 'clientHeight';

// pegando a altura e largura. O valor é dado em pixel
const footer = document.querySelector("footer");
console.log(footer.offsetWidth);
console.log(footer.offsetHeight);

// pegando a borda

console.log(footer.clientWidth);
console.log(footer.clientHeight);

// ================ 12- POSIÇÃO DO ELEMENTO ============================

// Com o método 'getClientBoudingRect' podemos pegar várias informações do elemento;
// Como: posição no eixo x, y, altura, largura e outros;

const product1 = product[0];
console.log(product1.getBoundingClientRect());

// =============== 13 - ESTILOS COM JS ==================================

// Todos os elementos possui uma propriedade chamada style;
// A partir dai conseguimos alterar as regras de CSS;
// Note que regras separadas por traçoviram camelCase;
// Por exemplo: background-color => backgroundColor;

mainContainer.style.color = "red";
mainContainer.style.backgroundColor = "#333";
mainContainer.style.paddingBotto = "15px"

const corFundo = document.querySelector('body');
console.log(corFundo);
corFundo.style.backgroundColor = "#333";



//  =============== 14- HTMLCollection ==================================

// HMTLCollection aparece quando selecionamos vários elementos de uma vez;
// Podemos passar por cada um dos elementos com um for of, e individualizar cada item;

for(const li of listItens){
    li.style.backgroundColor = "#ffff"
} // O for fará um loop em cada intem da lista e vai alterar o estilo da cor de fundo.


