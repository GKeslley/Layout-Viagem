const sectionScroll = document.querySelectorAll(".js-scroll");
const metadeWindow = window.innerHeight * 0.6;

function scrollAnimation() {
  sectionScroll.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top - metadeWindow;
    if (sectionTop < 0) {
      section.classList.add("ativo");
    }
  });
}

window.addEventListener("scroll", scrollAnimation);
