// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

let pessoa = {
  nome: "Maura",
  sobrenome: "Larissa",
  idade: 22,
  nomeCompleto(nome, sobrenome) {
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
carro.preco = 3000;
// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

let cachorro = {
  raca: "labrador",
  cor: "preto",
  idade: 10,
  verHomem(genero) {
    if (genero === "masculino") {
      console.log("AU AU");
    } else {
    }
  },
};
