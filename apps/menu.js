const btnMenu = document.querySelector(".menu");
const btnMenuClose = document.querySelector("#main .menu");
const iconMenu = document.querySelector("#header label img");
const main = document.querySelector("#main");
const menuVisibleValue = document.querySelector("#menu-value");

const isMenuVisible = menuVisibleValue.classList.value === "true";

btnMenu.addEventListener("click", () => showMenu());

btnMenuClose.addEventListener("click", () => hideMenu());

const showMenu = () => {
  main.classList.add("mostrarMain");
  main.classList.remove("ocultarMain");
  iconMenu.classList.remove("ocultarIconoMenu");
  iconMenu.classList.ad("mostrarIconoMenu");
};

const hideMenu = (value) => {
  main.classList.remove("mostrarMain");
  main.classList.add("ocultarMain");
  iconMenu.classList.add("ocultarIconoMenu");
  iconMenu.classList.remove("mostrarIconoMenu");
};
