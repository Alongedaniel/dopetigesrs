let menuToggler = document.querySelector(".menu-bar");
let menu = document.querySelector(".mobile-nav");
let close = document.querySelectorAll(".close");
let sampleImage = document.querySelector(".sample-image");
let openImage = document.querySelector(".open-image");
let closeImage = document.querySelector(".close-img");

function toggleMenu() {
  if (menu.classList.add("opacity") === false) {
    menuToggler.addEventListener("click", () => {
      menu.classList.add("opacity");
    });
  }
}

function closeMenu() {
  menu.classList.remove("opacity");
}

function sampleImg() {
  openImage.classList.toggle("see");
}

function closeImg() {
  openImage.classList.remove("see");
}
