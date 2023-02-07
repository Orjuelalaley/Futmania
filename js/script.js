/* Cambiar color del Menu al hacer scroll*/

window.onscroll = function(){
    scroll = document.documentElement.scrollTop;

    header = document.querySelector("header");

    if(scroll > 50){
        header.classList.add('header__active');
    }else if(scroll<50){
        header.classList.remove('header__active')
    }
}

/** Hacer que los enlaces del menú de navegación reaccionen y cambien dependiendo de la posición de la página*/

const containerScreen = document.querySelectorAll(".div__offset");
const barNavegation = document.querySelectorAll("nav ul li a");
window.addEventListener("scroll", () => {
  containerScreen.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 5) {
      current = section.getAttribute("id");
    }
  });

  barNavegation.forEach((a) => {
    a.classList.remove("active");
    if (a.classList.contains(current)) {
      a.classList.add("active");
    }
  });

});