function desincrementar() {
  let valor = document.querySelector(".valor");
  if (valor.innerText > 0) {
    valor.innerText -= 1;
  }
}
function resetar() {
  let valor = document.querySelector(".valor");
  valor.innerText = 0;
}
function incrementar() {
  let valor = document.querySelector(".valor");
  if (valor.innerHTML < 10) {
    valor.innerText = +valor.innerText + 1;
  }
}
