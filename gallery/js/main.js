window.onload = function() {
  var hiddenBtn = document.querySelector("#hidden-btn");
  var header = document.querySelector("#header");
  var icon = document.querySelector('#hidden-btn-icon');
  var searchField = document.querySelector("#search-wrap");

  hiddenBtn.addEventListener("click", function() {
    header.classList.toggle("header--open");
    icon.classList.toggle('hidden-btn__icon--transform');
    searchField.classList.toggle("search-wrap--show");
  })
}
