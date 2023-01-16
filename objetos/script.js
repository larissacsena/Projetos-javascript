// var cliente = {
//   //propriedades do objeto
//   nome: "larissa",
//   sobrenome: "Sena",
//   idade: 22,
//   fazFaculdade: true,
//   //quando um objeto recebe uma função, faz algo
//   //é chamado de metodo
// };
// var quadrado = {
//   lados: 4,
//   //posso criar area(){} sem o function, é outra forma de criar um método
//   area: function (lado) {
//     return lado*lado;
//   },
//   //quando coloco this é como se eu tivesse chamando o quadrado
//   perimetro: function (lado) {
//     //return quadrado.lados * lado;
//     return this.lados * lado;
//   },
// };


// Crie um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome
var pessoa = {
  nome: "Maura Larissa",
  sobrenome: "Costa Sena",
  idade: 22,
  nomeCompleto() {
    //sem o this estaria procurando a var fora do objeto
    return `${this.nome} ${this.sobrenome}`;
  },
};
// Crie um método no objeto anterior, que mostre o seu nome completo

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};
//setei um novo valor
carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
  raca: "labrador",
  cor: "preto",
  idade: 10,
  viuHomem(valor) {
    if (!!valor) {
      return "au au";
    } else {
    }
  },
};
