/* ==================== BASE ==================== */

const galleryItems = document.querySelectorAll(".gallery__item");
AOS.init(); // animate on scroll initialize
changeAOSEffect(); // change AOS effect for some blocks depending on resolution
window.onresize = () => changeAOSEffect();
burger();
lightbox();

/* ==================== CHANGE AOS EFFECT ==================== */

function changeAOSEffect() {
  const nav = document.querySelector(".nav");
  if (window.innerWidth < 1026) nav.dataset.aos = "";
  if (window.innerWidth < 769)
    galleryItems.forEach((item) => {
      item.dataset.aos = "fade-up";
      item.dataset.aosDelay = "";
    });
}

/* ==================== BURGER ==================== */

function burger() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav__menu");
  // Burger show / close
  burger.onclick = () => {
    burger.classList.toggle("active");
    nav.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
  };
}

/* ==================== LIGHTBOX ==================== */

function lightbox() {
  const lightbox = document.querySelector(".lightbox");
  galleryItems.forEach((item) => {
    item.onclick = () => {
      // changing scr to fullsize image
      const src = item.children[0].getAttribute("src").split("/");
      if (src.includes("preview")) src.splice(src.indexOf("preview"), 1);
      lightbox.children[0].setAttribute("src", src.join("/"));
      // lightbox show
      lightbox.classList.add("active");
      if (window.innerWidth < 768) document.body.classList.add("no-scroll");
    };
  });
  // lightbox close
  const lightBoxClose = () => {
    document.body.classList.remove("no-scroll");
    lightbox.classList.remove("active");
    lightbox.children[0].removeAttribute("src");
  };
  lightbox.onclick = () => lightBoxClose();
  window.onscroll = () => lightBoxClose();
}
