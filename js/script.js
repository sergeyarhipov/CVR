var btnContacts = document.querySelector(".link-menu1");
var btnWorks = document.querySelector(".link-menu2");
var btnNews = document.querySelector(".link-menu3");
var contacts = document.querySelector(".contacts");
var worksTime = document.querySelector(".time-works");
var lastNews = document.querySelector(".last-news");

btnContacts.addEventListener("click", function(event) {
  event.preventDefault();

  if (worksTime.classList.contains("block-show")) {
    worksTime.classList.remove("block-show");
    worksTime.classList.add("block-not-show");
  }

  if (lastNews.classList.contains("block-show")) {
    lastNews.classList.remove("block-show");
    lastNews.classList.add("block-not-show");
  }

  contacts.classList.remove("block-not-show");
  contacts.classList.add("block-show");
});

btnWorks.addEventListener("click", function(event) {
  event.preventDefault();

  if (contacts.classList.contains("block-show")) {
    contacts.classList.remove("block-show");
    contacts.classList.add("block-not-show");
  }

  if (lastNews.classList.contains("block-show")) {
    lastNews.classList.remove("block-show");
    lastNews.classList.add("block-not-show");
  }

  worksTime.classList.remove("block-not-show");
  worksTime.classList.add("block-show");
});

btnNews.addEventListener("click", function(event) {
  event.preventDefault();

  if (contacts.classList.contains("block-show")) {
    contacts.classList.remove("block-show");
    contacts.classList.add("block-not-show");
  }

    if (worksTime.classList.contains("block-show")) {
    worksTime.classList.remove("block-show");
    worksTime.classList.add("block-not-show");
  }

  lastNews.classList.remove("block-not-show");
  lastNews.classList.add("block-show");
});
