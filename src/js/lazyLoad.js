document.addEventListener("DOMContentLoaded", function () {
  const lazyBackgrounds = document.querySelectorAll(".lazy-bg");

  const isMobile = window.innerWidth < 768;
  const isLargeScreen = window.innerWidth > 1023;

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Verifica se a div tem uma classe específica e aplica a imagem correta
        if (entry.target.classList.contains("section-destino")) {
          entry.target.classList.add(
            isMobile ? "bg-custom-bg-nine-mobile" : "bg-custom-bg-nine-descktop"
          );
        } else if (entry.target.classList.contains("section-beneficios")) {
          if (isMobile) {
            entry.target.classList.add("bg-custom-bg-for-mobile");
          } else if (isLargeScreen) {
            entry.target.classList.add("bg-custom-bg-for-descktop");
          } else {
            entry.target.classList.add("bg-custom-bg-for-mobile");
          }
        } else if (entry.target.classList.contains("section-plataforma")) {
          entry.target.classList.add(
            isMobile ? "bg-custom-bg-five-mobile" : "bg-custom-bg-five-descktop"
          );
        }
        observer.unobserve(entry.target);
      }
    });
  });

  lazyBackgrounds.forEach((bg) => {
    observer.observe(bg);
  });
});
