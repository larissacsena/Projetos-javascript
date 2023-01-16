var idade = 15;
var podeBeber =
//ternário
  idade >= 18
    ? "Pode beber"
    : "A venda de bebidas é proibida para menores de 18 anos";
console.log(podeBeber);

var possuiFaculdade = 0;

if (!!possuiFaculdade) 
  console.log("É formado");
else 
  console.log("Não é formado");

// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
//scrol é um nome reservado
var scrolll = 1000;
scrolll += 500;

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = false;
var darCredito;

darCredito = (possuiCarro && possuiCasa);
