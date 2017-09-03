window.onload = function() {
  var hiddenBtn = document.querySelector("#hidden-btn");
  var header = document.querySelector("#header");
  var icon = document.querySelector("#hidden-btn-icon")
  var searchField = document.querySelector("#search-wrap");
  var menu = document.querySelector("#menu");
  var logo = document.querySelector("#logo");
  var navigation = document.querySelector("#navigation");
  var langBlock = document.querySelector("#lang-block");
  var menuItem = document.querySelectorAll(".menu__item");


  hiddenBtn.addEventListener("click", function() {
    header.classList.toggle("header--open");
    icon.classList.toggle('hidden-btn__icon--transform');
    searchField.classList.toggle("search-wrap--show");
  })

  menu.addEventListener("click", function() {
    navigation.classList.toggle("nav--open");
    logo.classList.toggle("logo--hide");
    langBlock.classList.toggle('lang-block--hide');
    menuItem[0].classList.toggle('menu__item--first');
    menuItem[1].classList.toggle('menu__item--second');
    menuItem[2].classList.toggle('menu__item--third');
  })
}
