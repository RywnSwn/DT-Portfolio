var root = document.documentElement;
var themeBtn = document.getElementById("theme-btn");

function isDark() {
  if (root.dataset.theme) {
    return root.dataset.theme === "dark";
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function updateThemeBtn() {
  themeBtn.textContent = isDark() ? "Light mode" : "Dark mode";
}

try {
  var savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    root.dataset.theme = savedTheme;
  }
} catch (e) {}

if (themeBtn) {
  updateThemeBtn();
  themeBtn.addEventListener("click", function () {
    var newTheme = isDark() ? "light" : "dark";
    root.dataset.theme = newTheme;
    try {
      localStorage.setItem("theme", newTheme);
    } catch (e) {}
    updateThemeBtn();
  });
}

var board = document.getElementById("board");
var foldBtn = document.getElementById("fold-btn");

if (board) {
  var files = "abcdefgh";
  var leftHalf = board.querySelector(".left");
  var rightHalf = board.querySelector(".right");

  for (var row = 0; row < 8; row++) {
    for (var col = 0; col < 8; col++) {
      var sq = document.createElement("div");
      sq.className = "sq " + ((row + col) % 2 === 0 ? "light" : "dark");
      if (col === 0) {
        sq.innerHTML += '<span class="rank">' + (8 - row) + "</span>";
      }
      if (row === 7) {
        sq.innerHTML += '<span class="file">' + files[col] + "</span>";
      }
      if (col < 4) {
        leftHalf.appendChild(sq);
      } else {
        rightHalf.appendChild(sq);
      }
    }
  }

  foldBtn.addEventListener("click", function () {
    var folded = board.classList.toggle("folded");
    foldBtn.textContent = folded ? "Unfold the board" : "Fold the board";
    document.getElementById("fold-status").textContent = folded
      ? "Folded. Now it is half as wide and can slide into the book case."
      : "Unfolded and flat, ready to play.";
  });
}

var daysSpan = document.getElementById("days");

if (daysSpan) {
  var start = new Date(2026, 7, 25);
  var days = Math.floor((new Date() - start) / 86400000);
  daysSpan.textContent = days;
}

var tabs = document.querySelectorAll(".tab");
var chapters = document.querySelectorAll(".chapter");
var prevBtn = document.getElementById("prev-btn");
var nextBtn = document.getElementById("next-btn");
var chapterCount = document.getElementById("chapter-count");
var current = 0;

function showChapter(n, focusTab) {
  current = n;
  for (var i = 0; i < tabs.length; i++) {
    var on = i === n;
    tabs[i].setAttribute("aria-selected", on ? "true" : "false");
    tabs[i].tabIndex = on ? 0 : -1;
    chapters[i].hidden = !on;
  }
  prevBtn.disabled = n === 0;
  nextBtn.disabled = n === tabs.length - 1;
  chapterCount.textContent = "Chapter " + (n + 1) + " of " + tabs.length;
  if (focusTab) {
    tabs[n].focus();
  }
}

function goTo(n) {
  showChapter(n, false);
  history.replaceState(null, "", "#" + chapters[n].id);
  var top = document.querySelector(".tabs").getBoundingClientRect().top;
  if (top < 0) {
    document.querySelector(".tabs").scrollIntoView();
  }
}

if (tabs.length) {
  document.querySelector(".tabs").hidden = false;
  document.querySelector(".chapter-nav").hidden = false;

  for (var t = 0; t < tabs.length; t++) {
    (function (i) {
      tabs[i].addEventListener("click", function () {
        goTo(i);
      });
      tabs[i].addEventListener("keydown", function (e) {
        var next = -1;
        if (e.key === "ArrowRight") next = (i + 1) % tabs.length;
        if (e.key === "ArrowLeft") next = (i - 1 + tabs.length) % tabs.length;
        if (e.key === "Home") next = 0;
        if (e.key === "End") next = tabs.length - 1;
        if (next !== -1) {
          e.preventDefault();
          showChapter(next, true);
        }
      });
    })(t);
  }

  prevBtn.addEventListener("click", function () {
    goTo(current - 1);
  });
  nextBtn.addEventListener("click", function () {
    goTo(current + 1);
  });

  var startChapter = 0;
  if (location.hash) {
    var target = document.getElementById(location.hash.slice(1));
    for (var c = 0; c < chapters.length; c++) {
      if (target && chapters[c].contains(target)) {
        startChapter = c;
      }
    }
  }
  showChapter(startChapter, false);
}

var viewer = document.getElementById("viewer");

if (viewer && viewer.showModal) {
  var viewerImg = viewer.querySelector("img");
  var viewerText = viewer.querySelector("p");
  var pics = document.querySelectorAll("a.pic");

  for (var p = 0; p < pics.length; p++) {
    pics[p].addEventListener("click", function (e) {
      e.preventDefault();
      var img = this.querySelector("img");
      viewerImg.src = this.href;
      viewerImg.alt = img.alt;
      viewerText.textContent = img.alt;
      viewer.showModal();
    });
  }

  viewer.querySelector(".dialog-close").addEventListener("click", function () {
    viewer.close();
  });

  viewer.addEventListener("click", function (e) {
    if (e.target === viewer) {
      viewer.close();
    }
  });
}

var slider = document.getElementById("compare-range");

if (slider) {
  var afterImg = document.querySelector(".compare .after");
  slider.addEventListener("input", function () {
    afterImg.style.clipPath = "inset(0 0 0 " + slider.value + "%)";
  });
}

var toTop = document.getElementById("to-top");

if (toTop) {
  window.addEventListener("scroll", function () {
    toTop.hidden = window.scrollY < 500;
  });
  toTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.getElementById("main-content").focus();
  });
}
