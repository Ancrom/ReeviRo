/* ==================== ANIMATE ON SCROLL ==================== */
AOS.init();

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
burger();

/* ==================== LIGHTBOX ==================== */
const galleryItems = document.querySelectorAll(".gallery__item");

function lightbox() {
  const lightbox = document.querySelector(".lightbox");

  galleryItems.forEach((item) => {
    item.onclick = () => {
      // changing path to fullsize clicked image
      const src = item.children[0].getAttribute("src").split("/");
      if (src.includes("preview")) {
        src.splice(src.indexOf("preview"), 1);
      }
      lightbox.children[0].setAttribute("src", src.join("/"));
      // lightbox show
      lightbox.classList.add("active");
      if (window.innerWidth < 768) {
        document.body.classList.add("no-scroll");
      }
    };
  });

  // lightbox close
  function lightBoxClose() {
    document.body.classList.remove("no-scroll");
    lightbox.classList.remove("active");
    lightbox.children[0].removeAttribute("src");
  }
  lightbox.onclick = () => lightBoxClose();
  window.onscroll = () => lightBoxClose();
}
lightbox();

/* ==================== CHANGE AOS EFFECT ON TABLET RESOLUTION ==================== */
function changeEffect() {
  const nav = document.querySelector(".nav");
  if (window.innerWidth < 1026) {
    nav.removeAttribute('data-aos')
  }
  if (window.innerWidth < 769) {
    galleryItems.forEach((item) => {
      item.setAttribute("data-aos", "fade-up");
    });
  }
}
changeEffect();
