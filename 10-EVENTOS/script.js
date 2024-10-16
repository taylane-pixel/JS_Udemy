// ======================= 1- EVENTOS ==========================

// Ações atreladas a algum comportamento do usuário;
// Por exemplo: click, alguma tecla. movimentos da tela e do mouse;
// Podemos inserir lógica quando estes eventos ocorrem;
// E podemos disparar eventos em certos elementos;
// Esta técnica é conhecida como event handler;
// "event handler" é a função anônima que vai dentro do evento;


// Para adicionar um evento precisamos selecionar o elemento que vai disparar o evento;
// Depois vamos ativar um médoto chamada "addEventListener";
// Nele declaramos qual p topo de evento,e por meio de callback definimos o que acontece;
// Resumindo: add o elemento, depois o tipo de evento, e a função para fazer o evento funcionar;


// ============= 3- ADICONANDO EVENTOS ====================================

const btn = document.querySelector('#my-button');

btn.addEventListener('click', function(){

    console.log("Clicou aqui") 
    // console.log apenas para ver pelo console que o evento foi adiconado 
});

//  ============== 4- REMOVENDO EVENTOS ===================================

// Há situações que vamos querer remover os eventos dos elementos;
// O método para isso é removeEventListener;
// Passamos o evento que queremos remover como argumento;

const secondBtn =document.querySelector("#btn");

//  criando uma função para add ao evento

function imprimirMensagem(){
    console.log('Teste')
};

// como a função foi criada antes, basta adicionar no parametro abaixo o nome da funçãos em os ():
// É necessário ter o evento da função nomeado quando for remover o evento, pois, com funções anonimas não funciona
// É necessário para o js saber o que precisar remover;

secondBtn.addEventListener("click", imprimirMensagem);

// removendo evento

const thirBtn = document.querySelector("#other-btn");

thirBtn.addEventListener("click", () =>{
    console.log('Evento removido');
    secondBtn.removeEventListener("click", imprimirMensagem)
});

// ====================== -5 ARGUMENTO DO EVENTO ===============================================================

// Todo evento possui um argumento especial, que contém informações do mesmo;
// Geralmente chamado de "event" ou "e";

const myTitle = document.querySelector("#my-title");

myTitle.addEventListener("click", (event) => {
    console.log(event); // Evento click que gera um objeto cheio de propriedades no console
    console.log(event.offsetX); // posição do elemento do eixo x
    console.log(event.pointerType); // evento feito pelo mouse
    console.log(event.target); // elemento alvo de forma resumida
});

// ======================== -6 PROPAGAÇÃO ======================================================================

// Quando um elemento de um evento não é claramente definido pode haver propagação;
// Ou seja, um outro elemento pode ativar o evento;
// Para resolver este problema temos o método "stopPropagation";



// exemplo com propagação

const btn1 = document.querySelector("#btn-1");
const areaDiv = document.querySelector("#exemplo");

btn1.addEventListener('click', () =>{
    console.log("com propagação ao clicar");
});

areaDiv.addEventListener("click", () =>{
    console.log('sem propagação ao clicar')
});

// a propagação ocorreu porque o elemento adicinado para o evento foi a ÁREA (div) onde o btn esta inserido 
//  sendo assim quando eu clico no botão por ele estar dentro da div acionar os dois eventos
//  isso da pela falta de clareza da definiçãode um elemento para evento
//  solução add o stopPropagation em um dos elementos do evento;



// exemplo sem propragação
const containerBtn = document.querySelector('#btn-container');
const divBtn = document.querySelector('#div-btn');

// existem abaixo eventos no elemento pai o containerBtn (a area com o fundo verde no html);
// e no elemento filho o divBtn que é o próprio botão

// função do container em volta do botão
containerBtn.addEventListener("click", () => {
    console.log("Evento 1");
});

// evento do botão
divBtn.addEventListener("click", (e) =>{
    // solução para não ocorrer a propagação é add o:
    e.stopPropagation();
    console.log("evento 2");
});

// =========================================== -7 REMOVENDO EVENTO PADRÃO ========================================================

// Muitos elementos tem ações padão no HTML;
// Como os links que nos levam a outras páginas;
// Podemos remover isso com o método "preventDefault"
// pode ocorrer de você querer add um outro evento a esse elemento e o evento padrão atrapalhar;

//  exemplo: um link que ao clicar leva para o site do google tem essa função removida e add outra
const a = document.querySelector('a');

// (e) se refere ao "event" o argumento do evento preciso add ele para cancelar a função padrão
a.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("não alterou a pagina");
});

// =========================================== - 8 EVENTOS DE TECLA ===================================================================

// Os eventos de tecla mapeiam as ações no teclado;
// Temos a disposição "keyup" e "keydown";
// Keyup ativa quando atecla é solta;
// E keydown ativa quando a tecla é pressionada;

