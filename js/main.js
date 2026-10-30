const swiper = new Swiper(".hero-main", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const lenis = new Lenis({
  autoRaf: true,
  lerp: 0.12,
  smoothWheel: true,
  wheelMultiplier: 1,
  syncTouch: false,
  touchMultiplier: 1,
  anchors: true,
  stopInertiaOnNavigate: true,
  respectReducedMotion: true,
});

const topButton = document.querySelector("#footer .top-button");

const header = document.querySelector("#header");
const navigationLinks = document.querySelectorAll("#header .gnb a[href^='#']");

navigationLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));

    if (!target) return;

    event.preventDefault();

    const headerPosition = header ? getComputedStyle(header).position : "static";
    const headerOffset =
      header && (headerPosition === "fixed" || headerPosition === "sticky")
        ? header.getBoundingClientRect().bottom
        : 0;
    lenis.scrollTo(target, {
      offset: -headerOffset,
    });
  });
});

topButton?.addEventListener("click", (event) => {
  event.preventDefault();
  lenis.scrollTo(0);
});
