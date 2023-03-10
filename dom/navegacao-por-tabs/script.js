//é como se fosse botão conteudo
//clica em uma coisa aparece outra relacionada

const tabMenu = document.querySelectorAll(".js-tabmenu li");
const tabContent = document.querySelectorAll(".js-tabcontent section");


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
