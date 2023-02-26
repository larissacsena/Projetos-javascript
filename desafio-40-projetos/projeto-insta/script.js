const primeiroContainer = document.querySelector(".primeiro-container");
const segundoContainer = document.querySelector(".segundo-container");
const terceiroContainer = document.querySelector(".terceiro-container");

const botao1 = document.querySelector("#botao1");
const botao2 = document.querySelector("#botao2");
//seleciona o ultimo elemento o tipo
const botao3 = document.querySelector("#botao3");

const input1 = document.querySelector("#username");
const input2 = document.querySelector("#senha");

const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  // Seu código de transição de tela aqui
});

const form2 = document.querySelector(".segundo-container form");
form2.addEventListener("submit", function (event) {
  event.preventDefault();
});

// adiciona o evento de input no input1
input1.addEventListener("input", function () {
  if (input1.value === "") {
    botao1.disabled = true;
  } else {
    botao1.disabled = false;
  }
});
input2.addEventListener("input", function () {
  if (input2.value === "") {
    botao2.disabled = true;
  } else {
    botao2.disabled = false;
  }
});

function verificaClasse() {
  if (primeiroContainer.classList.contains("ativo") === true) {
    console.log("funcionou");
    primeiroContainer.classList.remove("ativo");
    primeiroContainer.classList.add("inativo");
    segundoContainer.classList.remove("inativo");
    segundoContainer.classList.add("ativo");
  }
}

function verificaClasse2() {
  if (segundoContainer.classList.contains("ativo") === true) {
    segundoContainer.classList.remove("ativo");
    segundoContainer.classList.add("inativo");
    terceiroContainer.classList.remove("inativo");
    terceiroContainer.classList.add("ativo");
    input1.value = "";
    input2.value = "";
  }
}

function verificaClasse3() {
  if (terceiroContainer.classList.contains("ativo") === true) {
    terceiroContainer.classList.remove("ativo");
    terceiroContainer.classList.add("inativo");
    primeiroContainer.classList.remove("inativo");
    primeiroContainer.classList.add("ativo");
  }
}

function verificaBotao() {
  if (input1.value === "") {
    botao1.disabled = true;
  } else {
    botao1.disabled = false;
  }
}
function verificaBotao2() {
  if (input2.value === "") {
    botao2.disabled = true;
  } else {
    botao2.disabled = false;
  }
}
// botao2.addEventListener("click", () => {
//   input1.value === "";
//   input2.value === "";
// });
// if (terceiroContainer.classList.contains("inativo")) {
//   input1.addEventListener("input", () => {
//     input1.value === "";
//   });
// }
// if (terceiroContainer.classList.contains("inativo")) {
//   input2.addEventListener("input", () => {
//     input2.value === "";
//   });
// }

// verifica se o input já contém algum valor após a página ser carregada
window.addEventListener("load", function () {
  verificaBotao();
});
window.addEventListener("load", function () {
  verificaBotao2();
});

// chama a função verificaBotao sempre que o input for alterado
input1.addEventListener("input", verificaBotao);

botao1.addEventListener("click", verificaClasse);
botao2.addEventListener("click", verificaClasse2);
botao3.addEventListener("click", verificaClasse3);
