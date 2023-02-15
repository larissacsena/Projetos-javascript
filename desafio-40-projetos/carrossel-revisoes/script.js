window.onload = chamarPessoa;

function chamarPessoa() {
  console.log("oi");
  let container = document.querySelector(".container");
  let pessoa = {
    foto:"https://www.otempo.com.br/image/contentid/policy:1.2792191:1672917572/image.jpg?f=3x2&q=0.6&w=1200&$p$f$q$w=4633e5f",
    nome: "Maura Larissa ",
    cargo: "desenvolvedora",
    descricao:
      "É um bom recurso para se ter em um site de comércio eletrônico para exibir revisões de clientes ou em um portfólio pessoal para exibir as revisões de seus clientes.",
  };
  let fotoPessoa=document.createElement("img");
  //src que no caso é oq tem dentro da tag img
  fotoPessoa.src = pessoa.foto;
  container.appendChild(fotoPessoa);

  let nomePessoa = document.createElement("h1");
  nomePessoa.innerText = pessoa.nome;
  container.appendChild(nomePessoa);

  

  let cargoPessoa = document.createElement("h2");
  //o texto dentro de cargo pessoa que no caso é um h2
  cargoPessoa.innerText = pessoa.cargo;
  //o pai (container) de cargopessoa que no caso é o texto dentro de h2 que contem o atributo cargo de pessoa
  container.appendChild(cargoPessoa);

  let descricaoPessoa = document.createElement("p");
  descricaoPessoa.innerText = pessoa.descricao;
  container.append(descricaoPessoa);
}
