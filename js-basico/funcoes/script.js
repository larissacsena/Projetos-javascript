// Crie uma função para verificar se um valor é Truthy
function verificarVerdadeiro(valor) {
  if (!!valor) {
    console.log("é verdadeiro");
  } else {
    console.log("é falso");
  }
}
// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function calcularPerimetro(lado) {
  let resultado = lado * 4;
  return resultado;
}

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(a, b) {
  let resultado = `${a} ${b}`;
  return resultado;
}
// Crie uma função que verifica se um número é par
function verificaPar(numero) {
  if (numero % 2 === 0) {
    console.log("É par");
  } else {
    console.log("É impar");
  }
}
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function verificaDado(dado) {
  let tipoDado = typeof dado;
  return tipoDado;
}
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'clique' ocorrer.
addEventListener("click", function () {
  console.log("oi Maura");
});
// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
