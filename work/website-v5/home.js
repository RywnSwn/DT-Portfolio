var scene = document.getElementById("scene");
var play = document.getElementById("play");
var calm = window.matchMedia("(prefers-reduced-motion: reduce)");
var timer = null;

function setStep(step) {
  scene.setAttribute("data-step", step);
}

function openCase() {
  clearTimeout(timer);
  play.textContent = "Put it back in the case";
  if (calm.matches) {
    setStep("open");
    return;
  }
  setStep("out");
  timer = setTimeout(function () {
    setStep("open");
  }, 1000);
}

function closeCase() {
  clearTimeout(timer);
  play.textContent = "Take the board out";
  if (calm.matches) {
    setStep("closed");
    return;
  }
  setStep("out");
  timer = setTimeout(function () {
    setStep("closed");
  }, 1000);
}

play.addEventListener("click", function () {
  if (scene.getAttribute("data-step") === "closed") {
    openCase();
  } else {
    closeCase();
  }
});

if (calm.matches) {
  setStep("open");
} else {
  timer = setTimeout(openCase, 700);
}

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
