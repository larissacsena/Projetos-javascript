// Retorne no console todas as imagens do site
//HTML COLLECTION N TEM FOR EACH
let imagem1 = document.getElementsByTagName("img");
//NODELIST TEM FOREACH
let imagem2 = document.querySelectorAll("img");
// Retorne no console apenas as imagens que começaram com a palavra imagem
let imagemcComImagem = document.querySelectorAll('[src ^= "img/imagem"]');

// Selecione todos os links internos (onde o href começa com #)
let linkInterno = document.querySelectorAll('[href^="#"]');
// Selecione o primeiro h2 dentro de .animais-descricao
let animaisDescricao = document.querySelector(".animais-descricao h2");
// Selecione o último p do site
let paragrafos = document.querySelectorAll("p");
let ultimoParagrafo = paragrafos[paragrafos.length - 1];
