var calm = window.matchMedia("(prefers-reduced-motion: reduce)");
var pins = Array.prototype.slice.call(document.querySelectorAll(".pin[data-speed]"));
var bench = document.getElementById("bench");
var wide = window.matchMedia("(min-width: 901px)");
var ticking = false;

function drift() {
  ticking = false;
  if (calm.matches || !wide.matches) {
    pins.forEach(function (pin) {
      pin.style.transform = "";
    });
    return;
  }
  var box = bench.getBoundingClientRect();
  var offset = Math.max(-500, Math.min(500, box.top + box.height / 2 - window.innerHeight / 2));
  pins.forEach(function (pin) {
    var speed = parseFloat(pin.getAttribute("data-speed"));
    pin.style.transform = "translate3d(0, " + (offset * speed).toFixed(1) + "px, 0)";
  });
}

function requestDrift() {
  if (!ticking) {
    ticking = true;
    requestAnimationFrame(drift);
  }
}

window.addEventListener("scroll", requestDrift, { passive: true });
window.addEventListener("resize", requestDrift);
drift();
