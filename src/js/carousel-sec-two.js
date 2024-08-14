const carousel = document.getElementById("carousel");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;
const items = carousel.children.length;
const itemWidth = carousel.children[0].getBoundingClientRect().width;
const gap = 16; // Gap entre os elementos (em pixels)
const transitionDuration = 500;
const intervalTime = 6000;
let autoScroll;

// Função para atualizar o carrossel
function updateCarousel() {
  const offset = -(currentIndex * (itemWidth + gap));
  carousel.style.transform = `translateX(${offset}px)`;
}

// Função para avançar
function goToNext() {
  currentIndex = (currentIndex + 1) % items;
  updateCarousel();
}

// Função para retroceder
function goToPrev() {
  currentIndex = (currentIndex - 1 + items) % items;
  updateCarousel();
}

// Navegação manual
nextBtn.addEventListener("click", goToNext);
prevBtn.addEventListener("click", goToPrev);

// Função para ativar/desativar o auto-scroll com base no tamanho da tela
function checkScreenWidth() {
  const screenWidth = window.innerWidth;

  // Se a tela for menor que 1024px (lg no Tailwind), ativar o auto-scroll
  if (screenWidth < 1024) {
    autoScroll = setInterval(goToNext, intervalTime);
  } else {
    // Se for lg ou maior, desativar o auto-scroll
    clearInterval(autoScroll);
  }
}

// Verificar o tamanho da tela ao carregar a página e ao redimensionar
checkScreenWidth();
window.addEventListener("resize", checkScreenWidth);
