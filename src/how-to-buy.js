const openNav = document.getElementById('open-nav-btn');
const closeNav = document.getElementById('close-nav-btn');
const nav = document.getElementById('nav');

openNav.addEventListener("click", () => {
  nav.style.display = "flex";
  closeNav.style.display = "inline-block";
  openNav.style.display = "none";
})

closeNav.addEventListener("click", () => {
  nav.style.display = "none";
  closeNav.style.display = "none";
  openNav.style.display = "inline-block";
})
nav.addEventListener("click", () => {
  nav.style.display = "none";
})