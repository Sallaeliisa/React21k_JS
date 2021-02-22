let header = document.querySelector("header");
let buttonBackToTop = document.getElementById("backToTop");

window.onscroll = function () {
    scrollFunction();
};

const scrollrFunction = () => {
  if (document.body.scrollTop > 100 || document.documentElement > 100) {
    header.classList.add("bg");
    buttonBackToTop.style.display
  } else {
    header.classList.remove("bg");
  }
};
