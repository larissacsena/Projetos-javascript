// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImagem = document.querySelector("img");
console.log(primeiraImagem.offsetTop);

// Retorne a soma da largura de todas as imagens

setTimeout(() => {
  const imagens = document.querySelectorAll("img");
  let largura = 0;
  imagens.forEach((item) => {
    // console.log(item.offsetWidth, item.currentSrc);
    largura += item.offsetWidth;
  });
  console.log(largura);
}, 1000);

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const itens = document.querySelectorAll("a");
const small = window.matchMedia("(max-width: 600px)");

if (small.matches) {
  itens.forEach((item) => {
    if (item.offsetWidth && item.offsetHeight >= 48) {
      console.log("tem o minimo recomendado");
    } else {
      console.log("Não tem o minimo recomendado");
    }
  });
} else {
  console.log("Tela maior que 600px");
}

// itens.forEach((item) => {
//   console.log(item);
//   if (item.offsetWidth && item.offsetHeight >= 48) {
//     console.log("tem o minimo recomendado");
//   } else {
//     console.log("Não tem o minimo recomendado");
//   }
// });

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
let menu = document.querySelector(".menu");
if (window.innerWidth < 720) {
  menu.classList.add("menu-mobile");
}
