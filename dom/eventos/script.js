// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linkInterno = document.querySelectorAll('a[href^="#"]');
const allElements = document.querySelectorAll("body > *");

function adicionaClasse(event) {
  linkInterno.forEach((link) => {
    link.classList = " ";
  });
  event.preventDefault();
  const elemento = event.currentTarget;
  elemento.classList.toggle("ativo");
  console.log(elemento);
}

linkInterno.forEach((link) => {
  link.addEventListener("click", adicionaClasse);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

function mostraElementos(event) {
  console.log(event.currentTarget);
}
allElements.forEach((elemento) => {
  elemento.addEventListener("click", mostraElementos);
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
function removeElementos(event) {
  event.currentTarget.remove();
}
allElements.forEach((elemento) => {
  elemento.addEventListener("click", removeElementos);
});

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

function apertaTeclado(event) {
  console.log(event);
  if (event.key === "t") {
    document.body.style.fontSize = "3rem";
  }
}
window.addEventListener("keydown", apertaTeclado);

function mostrarNome(nome) {
  console.log(nome);
}
mostrarNome("Larissa");
