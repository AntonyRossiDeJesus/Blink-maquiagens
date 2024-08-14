const hamburger = document.getElementById("hamburger");
const popupMenu = document.getElementById("popupMenu");
const menuItems = popupMenu.querySelectorAll("a");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  popupMenu.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
});

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.remove("active");
    popupMenu.classList.remove("active");
    document.body.classList.remove("no-scroll");
  });
});
