let menuToggler = document.querySelector(".menu-bar");
let menu = document.querySelector(".mobile-nav");
let close = document.querySelectorAll(".close");

function toggleMenu() {
  menuToggler.addEventListener("click", () => {
    menu.classList.add("opacity");
  });
}

function closeMenu() {
  close.forEach(function (closer) {
    closer.addEventListener("click", () => {
      menu.classList.remove("opacity");
    });
  });
}
