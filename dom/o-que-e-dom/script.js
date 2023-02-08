// Retorne o url da página atual utilizando o objeto window
let caminho = window.location.href;
console.log(caminho);
// Seleciona o primeiro elemento da página que
// possua a classe ativo
let ativos = document.querySelector(".ativo");

// Retorne a linguagem do navegador
let linguagem= window.navigator.language
// Retorne a largura da janela
let largura = window.innerWidth