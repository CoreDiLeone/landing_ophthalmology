window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  if (window.scrollY > 1000) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    offset: 500, // distancia en px desde el borde inferior de la pantalla
    duration: 700, // duración de la animación
    once: true, // si quieres que la animación solo ocurra una vez
  });
});
