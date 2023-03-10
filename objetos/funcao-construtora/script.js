// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
  nome: "Nome pessoa",
  idade: 0,
  andar() {
    console.log(this.nome + " andou");
  },
};

function Pessoa1(nome, idade) {
  //o nome sera o que vai ser passado em parametro
  (this.nome = nome),
    (this.idade = idade),
    (this.andar = function () {
      console.log(this.nome + " andou");
    });
}
// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

const joao = new Pessoa1();
joao.nome = "João";
joao.idade = 20;

const maria = new Pessoa1();
maria.nome = "Maria";
joao.idade = 25;

const bruno = new Pessoa1("Bruno", 15);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(lista) {
  const listaItens = document.querySelectorAll(lista);
  const classe = "ativo";

  this.elements = listaItens;

  this.addClasse = function (classe1) {
    listaItens.forEach((conteudo) => {
      conteudo.classList.add(classe);
    });
  };

  this.removeClasse = function (classe1) {
    listaItens.forEach((conteudo) => {
      conteudo.classList.remove(classe);
    });
  };
}

const listas = new Dom("li");
