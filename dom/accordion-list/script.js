function iniTabNav() {
  //é como se fosse botão conteudo
  //clica em uma coisa aparece outra relacionada

  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");
  tabContent[0].classList.add("ativo");

  if (tabMenu.length && tabContent.length) {
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
        tabContent[index].classList.add("ativo");
      });
    }

    tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
iniTabNav();

function initAccordion() {
  const perguntas = document.querySelectorAll("dl dt");
  const respostas = document.querySelectorAll("dl dd");
  if (perguntas.length && respostas.length) {
    // respostas[0].classList.add("inativo")

    respostas.forEach((item, index) => {
      respostas[index].classList.add("inativo");
    });
    function ativaResposta(index) {
      respostas[index].classList.toggle("ativo");
      respostas[index].classList.toggle("inativo");
    }

    //dando erro:
    // perguntas.forEach((item, index) => {
    //   item.addEventListener("click", ativaResposta());
    // });
    //Meu erro foi passar ativaResposta como callback ao click, quando na verdade eu só preciso ativar a função dentro da outra função?
    perguntas.forEach((item, index) => {
      item.addEventListener("click", () => {
        ativaResposta(index);
      });
    });
  }
}

initAccordion();
