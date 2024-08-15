const carousel = document.getElementById("carousel");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;
const items = carousel.children.length;
const itemWidth = carousel.children[0].getBoundingClientRect().width;
const gap = 16;
const transitionDuration = 500;
const intervalTime = 20000;
let autoScroll;

function updateCarousel() {
  const offset = -(currentIndex * (itemWidth + gap));
  carousel.style.transform = `translateX(${offset}px)`;

  if (currentIndex === 0) {
    prevBtn.classList.add("disabled");
    prevBtn.disabled = true;
  } else {
    prevBtn.classList.remove("disabled");
    prevBtn.disabled = false;
  }
}

function goToNext() {
  if (currentIndex < 2) {
    currentIndex++;
  }
  updateCarousel();
}

function goToPrev() {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
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
