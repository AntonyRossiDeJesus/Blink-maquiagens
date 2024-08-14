const hamburger = document.getElementById("hamburger");
const popupMenu = document.getElementById("popupMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  popupMenu.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
});
