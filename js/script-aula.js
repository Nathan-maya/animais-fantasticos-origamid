const animais = document.getElementById('animais')
console.log(animais)

const gridSection = document.getElementsByClassName('grid-section');

console.log(gridSection[0]);

//QuerySelector retorna o primeiro item encontrado

const primeiraLi = document.querySelector('li');
console.log(primeiraLi);

const primeiraUl = document.querySelector('ul');
console.log(primeiraUl);

const linkInterno = document.querySelector('[href^="#"]');
console.log(linkInterno.href);

//QuerySelector All retorna todos os itens

const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg)

//HTML Collection -> Atualiza ao vivo(ou seja, se alterarmos futuramente, adicionando mais um item em grid-section, a variavel ira mostrar o novo valor adicionado )

const gridSectionHTML = document.getElementsByClassName('grid-section');

//NodeList -> Não atualiza ao vivo (ou seja, se alterarmos futuramente, adicionando mais um item em grid-section, a variavel NÂO ira mostrar o novo valor adicionado)
const gridSectionNode = document.querySelectorAll('.grid-section');

primeiraUl.classList.add('grid-section');

// console.log(gridSectionHTML);
// console.log(gridSectionNode);

gridSectionNode.forEach(function(item,index){
  console.log(item);
})

//Transforma em array estático:
const arrayGrid = Array.from(gridSectionHTML);

//Exercicios

//Retorne no console todas as imagens do site
const imagemAnimais = document.querySelectorAll('img');

console.log(imagemAnimais);

// Retorne no console apenas as imagens que começaram com a palavra imagem;

const inicioImagem = document.querySelectorAll('img[src^="../img/imagem"]')

console.log(inicioImagem);

//Selecione o primeiro h2 dentro de .animais-descricao

const h2Animais = document.querySelector('.animais-descricao h2')

console.log(h2Animais)

// Selecione o ultimo p do site

const paragrafos = document.querySelectorAll('p');

console.log(paragrafos[paragrafos.length - 1])


// * forEach *

const imgs = document.querySelectorAll('img')

imgs.forEach(function(item,index, array){
  //console.log(item, index, array);
});

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

// Arrow Function
titulosArray.forEach((item,index)=> {
  console.log(item,index)//; NÃO É PERMITIDO TER ";"
});

// Mostre no console cada parágrafo do site
const paragrafo = document.querySelectorAll('p')

paragrafo.forEach((item)=>console.log(item));

//Mostre o texto dos parágrafos no console
paragrafo.forEach((item)=>console.log(item.innerText));


//Classes e Atributos

const menu = document.querySelector('.menu');
menu.classList.add('ativo')

if(menu.classList.contains('ativo')){
  menu.classList.add('possui-ativo')
};

const animaisClass = document.querySelector('.animais')
console.log(animaisClass.attributes)

// getAttribute e  setAttribute -> Métodos que retornam ou definem de acordo com o atributo selecionado

const img = document.querySelector('img')
console.log(img.getAttribute('alt'))

const possuiAlt = img.hasAttribute('alt')
console.log(possuiAlt);


const link = document.querySelector('a[href^="http"]');
link.setAttribute('href', 'https://www.google.com/');
console.log(link);

const listaAnimais = document.querySelector('.animais-lista');

const height = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop;
console.log(animaisTop);


const primeiroh2 = document.querySelector('h2');
const rect = primeiroh2.getBoundingClientRect();
console.log(rect);


//VERIFIQUE A DISTÂNCIA DA PRIMEIRA IMAGEM
// EM RELAÇÃO AO TOPO DA PÁGINA 

const imagem = document.querySelector('img');
const imagemTopo = imagem.offsetTop;

console.log(imagemTopo)

//retorne a soma da largura de todas as imagens
function somaImagens(){
  const imagens = document.querySelectorAll('img')
  let soma=0;
  imagens.forEach(imagem => {
    soma += imagem.offsetWidth
    imagem.offsetWidth;
  })
  console.log(soma);
}

window.onload = function(){
  somaImagens();
}

/* Verifique se os links da página possuem o mínimo recomendado para telas utilizadas com o dedo
 */

const links = document.querySelectorAll('a');
links.forEach((link) => {
  let linkWidth = link.offsetWidth;
  let linkHeight = link.offsetHeight;
  if(linkWidth >= 48 && linkHeight >= 48){
    console.log(link,'Possui acessibilidade')
  }
  else{
    console.log(link, 'Não possui boa acessibilidade')
  }
})
console.log(links);

/* Se um browser for menor que 720px, adicione a classe menu-mobile ao menu */

const browserSmall = window.matchMedia('(max-width: 720px').matches

if(browserSmall){
  const menu = document.querySelector('.menu');
  menu.classList.add('menu-mobile');
}

// addEventListener -> adiciona uma função ao elemento, esta chamada de callback, que será ativada assim que certo EVENTO ocorrer neste elemento. ex(Clicar)

const imagemEvent = document.querySelector('img');
//É uma boa prática separar a função de callback do addEventListener,ou seja, declarar uma função ao invés de passar diretamente uma função anônima 
// elemento.addEventListener(event,callback,options)
function callback(){
  console.log('Clicou');
}

imagemEvent.addEventListener('click',callback);

const animaisLista = document.querySelector('.animais-lista');

function callbackLista(event){
  console.log(event.currentTarget);
  console.log(event.target);
  console.log(event.type);
}

animaisLista.addEventListener('click', callbackLista);

//event.preventDefault() - > Previne o comportamento padrao do evento no browser. No caso de um link externo, por exemplo, irá previnir que o link seja ativado

const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(){
  event.preventDefault();
  console.log(event);
}

linkExterno.addEventListener('click',handleLinkExterno);

/* quando o usuario clicar nos links interno do site
adicione a classe ativo ao item clicado e remova dos demais itens caso eles possuam o mesmo. Previna o comportamento padrao desses links*/
const linksInternos = document.querySelectorAll('a[href^="#"')

function handleLink(event){
  event.preventDefault();
  linkInterno.forEach((link)=>{
    link.classList.remove('ativo')
  })
  event.currentTarget.classList.add('ativo');
}

linksInternos.forEach((link) =>{
  link.addEventListener('click',handleLink)
})

//Selecione todos os elementos do site começando a parti do body, ao clique mostre exatamente quais elementos estão sendo clicados

const todosElementos = document.querySelectorAll('body *');

function handleElemento(event){
  console.log(event.currentTarget);
}
todosElementos.forEach((elemento) => {
  elemento.addEventListener('click',handleElemento);
})


// Utilizando o código anterior, ao inves de mostrar no console, remova o elemento que está sendo clicado, método remove() remove um elemento

// function handleElementoRemove(event){
//   event.currentTarget.remove();
// }

// todosElementos.forEach((elemento) => {
//   elemento.addEventListener('click',handleElementoRemove);
// })


//Se o usuário clicar na tecla (T), aumente todo o texto do site;

function handleClickT(event){
  console.log(event.key);
  if(event.key==='t'){
    document.documentElement.classList.toggle('textoMaior')
  }
}

window.addEventListener('keydown',handleClickT)


//Transforme o objeto abaixo em uma constructor function

const pessoa = {
  nome:'Nome Pessoa',
  idade:0,
  andar(){
    console.log(this.nome + ' andou')
  }
}

function Pessoa (nome, idade){
  this.nome = nome;
  this.idade = idade;
  this.andar()= function (){
    console.log(this.nome + ' andou')
  }
}

// Crie 3 pessoas - Joao - 20 anos
// Maria - 25 anos, Bruno - 15 anos

const joao = new Pessoa('João', 20);
const maria = new Pessoa('Maria',25);
const bruno = new Pessoa('Bruno',15);

// Crie uma constructor function(DOM) para manipulação
//de listas de elementos do DOM. Deve conter as seguintes propriedades e metódos:
//elements, retorna nodelist com os elementos selecionados
//addClass(classe), adiciona a classe a todos os elementos
//removeClass(Classe), remove a classe a todos os elementos

function DOM (seletor) {
  const elementList = document.querySelectorAll(seletor)
  this.elements = elementList;
  this.addClass = function(classe){
    elementList.forEach((element) => {
      element.classList.add(classe);
    })
  }
  this.removeClass = function(classe){
    elementList.forEach((element) => {
      element.classList.remove(element);
    })
  }
}
