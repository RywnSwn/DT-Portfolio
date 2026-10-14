var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
var prevBtn = document.getElementById("prev-page");
var nextBtn = document.getElementById("next-page");
var pageCount = document.getElementById("page-count");

function showPage(index, moveFocus) {
  tabs.forEach(function (tab, i) {
    var panel = document.getElementById(tab.getAttribute("aria-controls"));
    var selected = i === index;
    tab.setAttribute("aria-selected", selected ? "true" : "false");
    tab.tabIndex = selected ? 0 : -1;
    panel.hidden = !selected;
  });
  if (moveFocus) {
    tabs[index].focus();
  }
  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === tabs.length - 1;
  pageCount.textContent = "Page " + (index + 1) + " of " + tabs.length;
}

function currentPage() {
  for (var i = 0; i < tabs.length; i++) {
    if (tabs[i].getAttribute("aria-selected") === "true") {
      return i;
    }
  }
  return 0;
}

function turnTo(index) {
  showPage(index, false);
  history.replaceState(null, "", "#" + tabs[index].getAttribute("aria-controls"));
  var book = document.querySelector(".chapter-book");
  if (book.getBoundingClientRect().top < 0) {
    book.scrollIntoView();
  }
}

if (tabs.length) {
  document.documentElement.classList.add("js");

  tabs.forEach(function (tab, i) {
    tab.addEventListener("click", function () {
      turnTo(i);
    });
    tab.addEventListener("keydown", function (e) {
      var next = null;
      if (e.key === "ArrowRight") {
        next = (i + 1) % tabs.length;
      } else if (e.key === "ArrowLeft") {
        next = (i - 1 + tabs.length) % tabs.length;
      } else if (e.key === "Home") {
        next = 0;
      } else if (e.key === "End") {
        next = tabs.length - 1;
      }
      if (next !== null) {
        e.preventDefault();
        showPage(next, true);
      }
    });
  });

  prevBtn.addEventListener("click", function () {
    turnTo(currentPage() - 1);
  });

  nextBtn.addEventListener("click", function () {
    turnTo(currentPage() + 1);
  });

  var start = 0;
  if (location.hash) {
    var target = document.getElementById(location.hash.slice(1));
    var panel = target && target.closest('[role="tabpanel"]');
    if (panel) {
      start = tabs.indexOf(document.getElementById(panel.getAttribute("aria-labelledby")));
    }
  }
  showPage(start, false);
}
