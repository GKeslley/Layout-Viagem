const paisesImg = document.querySelector(".imagens-paises");

function scroll() {
  const alturaImg = paisesImg.offsetHeight;
  const scrollWindow = window.pageYOffset;

  if (scrollWindow >= alturaImg) {
    paisesImg.classList.add("anime", "fadeInDown");
  }
}
window.addEventListener("scroll", scroll);

// Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}
