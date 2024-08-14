const carousel = document.getElementById("carousel");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;
const items = carousel.children.length;
const itemWidth = carousel.children[0].getBoundingClientRect().width;
const gap = 16;
const transitionDuration = 500;
const intervalTime = 6000;
let autoScroll;

function updateCarousel() {
  const offset = -(currentIndex * (itemWidth + gap));
  carousel.style.transform = `translateX(${offset}px)`;
}

function goToNext() {
  currentIndex = (currentIndex + 1) % items;
  updateCarousel();
}

function goToPrev() {
  currentIndex = (currentIndex - 1 + items) % items;
  updateCarousel();
}

nextBtn.addEventListener("click", goToNext);
prevBtn.addEventListener("click", goToPrev);

function checkScreenWidth() {
  const screenWidth = window.innerWidth;

  if (screenWidth < 1024) {
    autoScroll = setInterval(goToNext, intervalTime);
  } else {
    clearInterval(autoScroll);
  }
}

checkScreenWidth();
window.addEventListener("resize", checkScreenWidth);
