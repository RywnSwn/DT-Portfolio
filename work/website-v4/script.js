var tabs = document.querySelectorAll(".tab");
var chapters = document.querySelectorAll(".chapter");
var prevBtn = document.getElementById("prev-btn");
var nextBtn = document.getElementById("next-btn");
var chapterCount = document.getElementById("chapter-count");
var current = 0;

function showChapter(n) {
  current = n;
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].setAttribute("aria-selected", i === n ? "true" : "false");
    tabs[i].tabIndex = i === n ? 0 : -1;
    chapters[i].hidden = i !== n;
  }
  prevBtn.disabled = n === 0;
  nextBtn.disabled = n === tabs.length - 1;
  chapterCount.textContent = "Chapter " + (n + 1) + " of " + tabs.length;
}

function goTo(n) {
  showChapter(n);
  history.replaceState(null, "", "#" + chapters[n].id);
  document.querySelector(".tabs").scrollIntoView({ block: "nearest" });
}

if (tabs.length) {
  document.querySelector(".tabs").hidden = false;
  document.querySelector(".chapter-nav").hidden = false;

  for (var t = 0; t < tabs.length; t++) {
    tabs[t].addEventListener("click", function () {
      goTo(Array.prototype.indexOf.call(tabs, this));
    });
    tabs[t].addEventListener("keydown", function (e) {
      var i = Array.prototype.indexOf.call(tabs, this);
      var next = -1;
      if (e.key === "ArrowRight") next = (i + 1) % tabs.length;
      if (e.key === "ArrowLeft") next = (i - 1 + tabs.length) % tabs.length;
      if (next !== -1) {
        e.preventDefault();
        showChapter(next);
        tabs[next].focus();
      }
    });
  }

  prevBtn.addEventListener("click", function () {
    goTo(current - 1);
  });
  nextBtn.addEventListener("click", function () {
    goTo(current + 1);
  });

  var start = 0;
  if (location.hash) {
    var target = document.getElementById(location.hash.slice(1));
    for (var c = 0; c < chapters.length; c++) {
      if (target && chapters[c].contains(target)) {
        start = c;
      }
    }
  }
  showChapter(start);
}
