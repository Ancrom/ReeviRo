// Animate on scroll initialize
AOS.init();

// lightbox
lightbox();

function lightbox() {
  const lightbox = document.querySelector(".lightbox");
  const galleryItems = document.querySelectorAll(".gallery__item");

  for (let i = 0; i < galleryItems.length; i++) {
    galleryItems[i].onclick = () => {
      // getting path to fullsize clicked image
      const src = galleryItems[i].children[0].getAttribute("src").split("/");
      src.splice(src.indexOf("preview"), 1);
      const newPath = src.join("/");
      // lightbox show
      lightbox.children[0].setAttribute("src", newPath);
      lightbox.classList.add("active");
    };
  }

  // lightbox close
  lightbox.onclick = () => {
    lightbox.classList.remove("active");
  };
  window.onscroll = () => {
    lightbox.classList.remove("active");
  };
}
