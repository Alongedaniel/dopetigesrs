let menuToggler = document.querySelector(".menu-bar");
let menu = document.querySelector(".mobile-nav");
let close = document.querySelectorAll(".close");
let sampleImage = document.querySelector(".sample-image");
let openImage = document.querySelector(".open-image");
let closeImage = document.querySelector(".close-img");

function toggleMenu() {
      menu.classList.add("opacity");
      menuToggler.classList.add("menu-blue")
}

function closeMenu() {
  menu.classList.remove("opacity");
  menuToggler.classList.remove("menu-blue")

}

function sampleImg() {
  openImage.classList.toggle("see");
}

function closeImg() {
  openImage.classList.remove("see");
}

