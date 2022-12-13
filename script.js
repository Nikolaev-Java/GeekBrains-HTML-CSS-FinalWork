
const menuButton = document.querySelector(".header__menu--main");
const menu = document.querySelector(".full-menu");

menuButton.addEventListener("click", () => {
	menu.classList.toggle("active");
	menuButton.classList.toggle("active");
})