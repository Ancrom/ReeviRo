/* ==================== BASE ==================== */

const galleryItems = document.querySelectorAll(".gallery__item"); // using in changeAOSEffect and lightbox
AOS.init(); // animate on scroll initialize
changeAOSEffect(); // change AOS effect for some blocks depending on resolution
window.onresize = () => changeAOSEffect();
burger();
lightbox();
accordion();

/* ==================== CHANGE AOS EFFECT ==================== */

function changeAOSEffect() {
  const nav = document.querySelector(".nav");
  if (window.innerWidth < 1026) nav.dataset.aos = "";
  if (window.innerWidth < 769) {
    galleryItems.forEach((item) => {
      item.dataset.aos = "fade-up";
      delete item.dataset.aosDelay;
    });
  }
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
  const lightboxImage = lightbox.children[0];
  const accordionImages = document.querySelectorAll(".accordion__img");
  const lightboxShow = (item) => {
    // changing scr to fullsize image
    const image = item.children[0];
    const src = image.getAttribute("src");
    const newSrc = src.replace('/preview/', '/')
		lightboxImage.setAttribute('src', newSrc)
    lightbox.classList.add("active");
    if (window.innerWidth < 768) document.body.classList.add("no-scroll");
  };
  const lightBoxClose = () => {
    document.body.classList.remove("no-scroll");
    lightbox.classList.remove("active");
    lightboxImage.removeAttribute("src");
  };
  galleryItems.forEach((item) => (item.onclick = () => lightboxShow(item)));
  accordionImages.forEach((item) => (item.onclick = () => lightboxShow(item)));
  lightbox.onclick = () => lightBoxClose();
  window.onscroll = () => lightBoxClose();
}

/* ==================== ACCORDION ==================== */

function accordion() {
  const accordionBtns = document.querySelectorAll(".accordion__btn");
  accordionBtns.forEach((item) => {
    item.onclick = () => {
      item.classList.toggle("active");
      const content = item.nextElementSibling;
      const btnText = item.children[1];
      // accordion close
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        btnText.innerHTML = "Click to expand";
      }
      // accordion show
      else {
        content.style.maxHeight = content.scrollHeight + "px";
        btnText.innerHTML = "Click to hide";
      }
    };
  });
}
