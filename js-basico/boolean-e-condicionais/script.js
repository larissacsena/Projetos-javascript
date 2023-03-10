// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
let idadeLarissa=45;
let idadeJohn=5;
if(idadeLarissa< idadeJohn){
  console.log("É menor");
}else if(idadeLarissa===idadeJohn){
console.log("é Igual")
}else{
  console.log("É maior")
}

// Qual valor é retornado na seguinte expressão?
//retorna o ultimo valor verificado pois todos são verdadeiros
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; //true
var idade = 28; //true
var possuiDoutorado = false; //false
var empregoFuturo; //undefined é false
var dinheiroNaConta = 0; //false

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 13;

if (china>brasil){
  console.log("China tem mais");
}else{
  console.log("Brasil tem mais")
}

// O que irá aparecer no console? FALSO
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
  //retorna cão que é o ultimo valor verdadeiro encontrado
} else {
  console.log('Falso');
}