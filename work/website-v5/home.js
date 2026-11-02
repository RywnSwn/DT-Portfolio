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
