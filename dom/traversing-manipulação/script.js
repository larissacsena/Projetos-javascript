// Duplique o menu e adicione ele em copy
const menu = document.querySelector(".menu");
const cloneMenu = menu.cloneNode(true);
const copy = document.querySelector(".copy");
const animais = document.querySelector(".animais");
copy.appendChild(cloneMenu);

// Selecione o primeiro DT da dl de Faq
const lista = document.querySelector(".faq");
console.log(lista.children[--lista.children.length]);
const dl = lista.children[--lista.children.length];
const dt = dl.children[0];
// Selecione o DD referente ao primeiro DT
const dd = dt.nextElementSibling;

// Substitua o conteúdo html de .faq pelo de .animais

// const conteudoLista = lista.innerHTML;
// document.querySelector("body").replaceChild(lista, animais);

lista.innerHTML = animais.innerHTML;
