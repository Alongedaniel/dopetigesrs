let menuToggler = document.querySelector(".menu-bar");
let menu = document.querySelector(".mobile-nav");

function toggleMenu() {
  menuToggler.addEventListener("click", () => {
    menu.classList.toggle('opacity')
  });
}
