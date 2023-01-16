var nome = "larissa";
var nome2 = "Matheus";
var idade = 55;
var doenca = null;
var comidaFavorita;
var simbolo = Symbol();
var pessoa = {};

console.log(
  typeof nome,
  typeof nome2,
  typeof idade,
  typeof doenca, // "bug que mostra como objeto"
  comidaFavorita,
  simbolo,
  typeof pessoa
);

console.log("eu gosto 'muito' de pudim");
// console.log('eu gosto 'muito' de pudim'); ERRO
console.log('eu gosto "muito" de pudim');
console.log(`eu gosto 'muito' de pudim`);
console.log(`eu gosto "muito" de pudim`);
// console.log(`eu gosto `muito` de pudim`); ERRO

var numero1 = 10;
var unidade = "reais";
console.log(10 + unidade);
//string+number = string
console.log(typeof (10 + unidade));

//TEMPLATE STRING
var animal1 = "Bianca";
var animal2 = "Milady";

console.log(`Eu tenho duas gatinhas ${animal1} e ${animal2}`);
