var toggle = document.getElementById("nav-toggle");
var nav = document.getElementById("site-nav");

if (toggle && nav) {
  toggle.addEventListener("click", function () {
    var isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}
