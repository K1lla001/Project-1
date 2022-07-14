const burgerMenu = document.querySelector(".burger-menu");
const navigasiUl = document.querySelector(".navigasi-ul");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  navigasiUl.classList.toggle("active");
});

document.querySelectorAll(".links").forEach((n) =>
  n.addEventListener("click", () => {
    burgerMenu.classList.remove("active");
    navigasiUl.classList.remove("active");
  })
);
