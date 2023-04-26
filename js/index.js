/* ==================== BASE ==================== */

AOS.init(); // animate on scroll initialize
changeAOSEffect(); // change AOS effect for some blocks depending on resolution
window.onresize = () => changeAOSEffect();
eventListener(); // lightbox, burger, accordion

/* ==================== CHANGE AOS EFFECT ==================== */

function changeAOSEffect() {
  const galleryItems = document.querySelectorAll(".gallery__item");
  const nav = document.querySelector(".nav");

  if (window.innerWidth < 1026) nav.dataset.aos = "";
  if (window.innerWidth < 769) {
    galleryItems.forEach((item) => {
      item.dataset.aos = "fade-up";
      delete item.dataset.aosDelay;
    });
  }
}

/* ==================== eventListener ==================== */

function eventListener() {
  const lightbox = document.querySelector(".lightbox");
  const lightboxImage = lightbox.querySelector("img");
  const nav = document.querySelector(".nav__menu");
  const burger = document.querySelector(".burger");

  const toggleBurger = () => {
    burger.classList.toggle("active");
    nav.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
  };

  const lightBoxClose = () => {
    document.body.classList.remove("no-scroll");
    lightbox.classList.remove("active");
    lightboxImage.src = "";
    window.onscroll = null;
  };

  const lightboxShow = (target) => {
    lightboxImage.src = target.src.replace("/preview/", "/");
    lightbox.classList.add("active");
    window.onscroll = lightBoxClose;
    if (window.innerWidth < 768) document.body.classList.add("no-scroll");
  };

  const toggleAccordion = (target) => {
    const content = target.nextElementSibling;

    if (target.classList.contains("accordion__btn")) {
      target.classList.toggle("active");
      const btnText = target.querySelector("span");

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        btnText.innerHTML = "Click to expand";
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        btnText.innerHTML = "Click to hide";
      }
    }
  };

  const handleEvent = (e) => {
    const target = e.target;

    if (
      target.classList.contains("gallery__image") ||
      target.classList.contains("accordion__img")
    ) {
      lightboxShow(target);
    } else if (target.classList.contains("lightbox")) {
      lightBoxClose();
    } else if (target.classList.contains("accordion__btn")) {
      toggleAccordion(target);
    } else if (target.classList.contains("burger")) {
      toggleBurger();
    }
  };

  window.addEventListener("click", handleEvent);
}
