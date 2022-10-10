const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});

var swiper = new Swiper(".home-swiper", {
  loop: false,
  loopFillGroupWithBlank: true,
  autoplay: false,
  // {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
});

var swiper = new Swiper(".home-carousel", {
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    150: {
      slidesPerView: 1,
      spaceBetween: 10,
      slidesPerGroup: 1,
    },
    200: {
      slidesPerView: 1.25,
      spaceBetween: 10,
      slidesPerGroup: 1,
    },
    210: {
      slidesPerView: 1.25,
      spaceBetween: 10,
      slidesPerGroup: 1,
    },
    220: {
      slidesPerView: 1.25,
      spaceBetween: 10,
      slidesPerGroup: 1,
    },
    230: {
      slidesPerView: 1.5,
      spaceBetween: 10,
      slidesPerGroup: 1,
    },
    250: {
      slidesPerView: 1.5,
      spaceBetween: 10,
      slidesPerGroup: 1,
    },
    270: {
      slidesPerView: 1.5,
      spaceBetween: 10,
      slidesPerGroup: 1,
    },
    300: {
      slidesPerView: 1.5,
      spaceBetween: 10,
      slidesPerGroup: 1,
    },
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
      slidesPerGroup: 1,
    },
    360: {
      slidesPerView: 2,
      spaceBetween: 10,
      slidesPerGroup: 1,
    },
    400: {
      slidesPerView: 2.5,
      spaceBetween: 10,
      slidesPerGroup: 1,
    },
    430: {
      slidesPerView: 2.5,
      spaceBetween: 10,
      slidesPerGroup: 1,
    },
    500: {
      slidesPerView: 3,
      spaceBetween: 10,
      slidesPerGroup: 1,
    },
    540: {
      slidesPerView: 3,
      spaceBetween: 10,
      slidesPerGroup: 1,
    },
    580: {
      slidesPerView: 3,
      spaceBetween: 10,
      slidesPerGroup: 1,
    },
    600: {
      slidesPerView: 3.5,
      spaceBetween: 10,
      slidesPerGroup: 1,
    },
    680: {
      slidesPerView: 4,
      spaceBetween: 10,
      slidesPerGroup: 1,
    },
    720: {
      slidesPerView: 4,
      spaceBetween: 10,
      slidesPerGroup: 1,
    },
    760: {
      slidesPerView: 4.5,
      spaceBetween: 10,
      slidesPerGroup: 1,
    },
    850: {
      slidesPerView: 5,
      spaceBetween: 10,
      slidesPerGroup: 1,
    },
    980: {
      slidesPerView: 5.5,
      spaceBetween: 10,
      slidesPerGroup: 1,
    },
    1080: {
      slidesPerView: 6,
      spaceBetween: 10,
      slidesPerGroup: 1,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 10,
      slidesPerGroup: 1,
    },
    1250: {
      slidesPerView: 6,
      spaceBetween: 10,
      slidesPerGroup: 1,
    },
    1260: {
      slidesPerView: 6.5,
      spaceBetween: 10,
      slidesPerGroup: 1,
    },
    1270: {
      slidesPerView: 6.5,
      spaceBetween: 10,
      slidesPerGroup: 1,
    },
    1320: {
      slidesPerView: 7,
      spaceBetween: 10,
      slidesPerGroup: 1,
    },
    1520: {
      slidesPerView: 10,
      spaceBetween: 10,
      slidesPerGroup: 1,
    },
  }
});

var swiper = new Swiper(".story-scrollbar", {
  direction: "vertical",
  slidesPerView: "auto",
  freeMode: true,
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  mousewheel: true,
});


var swiper = new Swiper(".testimonials-carousel", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  breakpoints: {
    190: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    220: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    250: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    285: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    300: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    325: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    350: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    375: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    420: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    680: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    720: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1240: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
    2000: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  }
});


