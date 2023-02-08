console.log("here I am")


function showMobileMenu() {
  const menuMobile = document.getElementsByClassName("mobile")[0];

  if (menuMobile.style.display === "flex") {
    menuMobile.style.display = "none";
  } else {
    menuMobile.style.display = "flex";
  }
}