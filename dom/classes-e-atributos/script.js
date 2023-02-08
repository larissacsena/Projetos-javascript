// Adicione a classe ativo a todos os itens do menu
const menuItens = document.querySelectorAll(".menu a");
menuItens.forEach((item) => {
  item.classList.add("ativo");
});
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menuItens.forEach((item) => {
  item.classList.toggle("ativo");
  menuItens[0].classList.add("ativo");
});
// Verifique se as imagens possuem o atributo alt

const imagens = document.querySelectorAll("img");
imagens.forEach((item) => {
  // let possuiAtributo = item.hasAttribute("alt");
  // console.log(possuiAtributo);
  item.setAttribute("alt", "imagem fofinha");
  possuiAtributo = item.hasAttribute("alt");
  console.log(possuiAtributo);
});
// Modifique o href do link externo no menu

const linkExterno = document.querySelector('body [href^="https"]');
linkExterno.setAttribute("href", "https://www.google.com/");
