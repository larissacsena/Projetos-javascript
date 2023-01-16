// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var anosVitoria = [1959, 1962, 1970, 1994, 2002];
// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for (var i = 0; i < anosVitoria.length; i++) {
  console.log(`O brasil ganhou a copa de ${anosVitoria[i]}`);
}
anosVitoria.forEach(function (ano, item, arrays) {
  console.log(`O brasil ganhou a copa de ${ano}`);
});
// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
//Não funciona
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melância"];
frutas.forEach(function (fruta, item, arrays) {
  console.log(fruta);
  if (fruta === "Pera") {
  }
});

for (var u = 0; u < frutas.length; u++) {
  console.log(frutas[u]);
  if(frutas[u]==="Pera"){
    break
  }
}
var ultimaFruta = frutas[4];
// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
