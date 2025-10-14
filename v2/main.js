let openMenu = document.querySelector(".open-menu");
let closeMenu = document.querySelector(".close-menu");
let mobileMenu = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".overlay");

openMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("translate-x-full");
  overlay.classList.remove("hidden");
  overlay.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.add("translate-x-full");
  overlay.classList.add("hidden");
  document.body.style.overflow = "";
});

overlay.addEventListener("click", () => {
  mobileMenu.classList.add("translate-x-full");
  overlay.classList.add("hidden");
  overlay.classList.remove("active");
});
