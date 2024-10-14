const getNavMenu = document.querySelector(".nav__menu");
const getMobileMenu = document.querySelector(".mobile-menu");
const getNavClose = document.querySelector(".mobile-menu__close");
const getCover = document.querySelector(".cover");

getNavMenu.addEventListener("click", () => {
  getMobileMenu.classList.add("mobile-menu--open");
  getCover.classList.add("cover--show");
});

getNavClose.addEventListener("click", () => {
  getMobileMenu.classList.remove("mobile-menu--open");
  getCover.classList.remove("cover--show");
});
