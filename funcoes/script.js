// Crie uma função para verificar se um valor é Truthy
function verificaValor(valor) {
  if (!!valor) {
    console.log("É verdadeiro");
  } else {
    console.log("É falso");
  }
  return valor;
}
// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function calcularPerimetro(lado1, lado2) {
  // console.log("O perímetro do quadrado é: " + (lado1 + lado1 + lado2 + lado2));
  var perimetro = lado1 * 2 + lado2 * 2;
  return perimetro;
}

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  var meuNome = nome + " " + sobrenome;
  return meuNome;
}

// Crie uma função que verifica se um número é par
function verificaNumero(numero) {
  if (numero % 2 !== 0) {
    console.log("Este numero é impar");
  } else {
    console.log("Este numero é par");
  }
  return numero;
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDeDado(dado) {
  return typeof dado;
}

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

var nomeLarissa = "Maura Larissa Costa Sena";
function exibirNome() {
  console.log(nomeLarissa);
}
addEventListener("click", exibirNome);

// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  var totalPaises = 193;
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);