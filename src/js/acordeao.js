document.addEventListener("DOMContentLoaded", () => {
  const acordeaoItems = document.querySelectorAll(".item-acordeao");

  acordeaoItems.forEach((item) => {
    const header = item.querySelector(
      ".cabecalho-item, .cabecalho-item--reverse"
    );
    const imgSeta = header.querySelector(".img-seta");

    header.addEventListener("click", () => {
      const isOpen = item.classList.contains("aberto");

      acordeaoItems.forEach((el) => {
        el.classList.remove("aberto");
        const elImgSeta = el.querySelector(".img-seta");
        if (elImgSeta) {
          elImgSeta.src = "src/assets/seta-para-baixo.png";
        }
      });

      if (!isOpen) {
        item.classList.add("aberto");
        imgSeta.src = "src/assets/seta-para-cima.png";
      } else {
        imgSeta.src = "src/assets/seta-para-baixo.png";
      }
    });
  });
});
