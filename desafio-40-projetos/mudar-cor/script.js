// function mudarCor(){
//   if (botao===onclick){

function generateColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

console.log(generateColor()); // #8432EA
function mudarCor() {
  const corpo = document.querySelector("body");
  corpo.style.backgroundColor = generateColor();
  const corAtual = generateColor();
const titulo = document.querySelector("h1");
titulo.innerText= "Cor Atual: " + corAtual;

}
