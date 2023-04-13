/* ==================== ANIMATE ON SCROLL ==================== */
AOS.init();

/* ==================== BURGER ==================== */
burger();

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
lightbox();

function lightbox() {
  const lightbox = document.querySelector(".lightbox");
  const galleryItems = document.querySelectorAll(".gallery__item");

  galleryItems.forEach((item) => {
    item.onclick = () => {
      // getting path to fullsize clicked image
      const src = item.children[0].getAttribute("src").split("/");
      src.splice(src.indexOf("preview"), 1);
      // lightbox show
      lightbox.children[0].setAttribute("src", src.join("/"));
      lightbox.classList.add("active");
    };
  });

  // lightbox close
  lightbox.onclick = () => {
    lightbox.classList.remove("active");
  };
  window.onscroll = () => {
    lightbox.classList.remove("active");
  };
}
