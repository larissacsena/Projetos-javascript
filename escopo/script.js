// Por qual motivo o código abaixo retorna com erros?
//O unico tipo de variavel que vaza pra fora do bloco é var
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
}
console.log(cor, /*marca, portas*/);

// Como corrigir o erro abaixo?
// ou definir dois fora do bloco, ou transformar em var, ou colocar const nos dois blocos
const dois = 2;
function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x + dois;
}
somarDois(4);
dividirDois(6);

// O que fazer para total retornar 500?
// trocar var por let, pq numero do bloco estava vazando

var numero = 50;

for(let numero = 0; numero <= 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);