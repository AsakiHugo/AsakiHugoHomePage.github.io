const menuBar = document.querySelector(".menu-bar");
const closeBar = document.querySelector(".close-bar");
const linkages = document.querySelector(".linkages");
const overlay = document.querySelector(".overlay");

menuBar.addEventListener("click", () => {
  menuBar.classList.remove("active");
  closeBar.classList.add("active");
  linkages.classList.add("active");
  overlay.classList.add("active");
});

closeBar.addEventListener("click", () => {
  closeBar.classList.remove("active");
  menuBar.classList.add("active");
  linkages.classList.remove("active");
  overlay.classList.remove("active");
});
