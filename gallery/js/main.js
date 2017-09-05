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
    langBlock.classList.toggle('lang-block--mobile');
    menuItem[0].classList.toggle('menu__item--first');
    menuItem[1].classList.toggle('menu__item--second');
    menuItem[2].classList.toggle('menu__item--third');
  })


  // SORT

  var navItem = document.querySelectorAll(".nav-bottom__link");
  var galleryItem = document.querySelectorAll(".gallery__item");
  var webDesign = document.querySelectorAll(".web-design");
  var pageProofs = document.querySelectorAll(".page-proofs");
  var programming = document.querySelectorAll(".programming");
  var seo = document.querySelectorAll(".seo");

  function resetGallery() {
    for(var i = 0; i < galleryItem.length; i++) {
      galleryItem[i].classList.add("gallery__item--hide");
    }
  }

  function resetNav() {
    for (var i = 0; i < navItem.length; i++) {
      if (navItem[i].classList.contains("nav-bottom__link--active")) {
        navItem[i]. classList.remove("nav-bottom__link--active");
      };
    }
  }

  for(var j = 0; j < navItem.length; j++) {
    navItem[j].addEventListener("click", function(e) {
      resetGallery();
      resetNav();
      e.target.classList.add("nav-bottom__link--active");

      if (e.target.classList.contains("nav-bottom__link--web-design")) {
        for (var k = 0; k < webDesign.length; k++) {
          webDesign[k].classList.remove("gallery__item--hide");
        }
      }

      if (e.target.classList.contains("nav-bottom__link--page-proofs")) {
        for (var k = 0; k < pageProofs.length; k++) {
          pageProofs[k].classList.remove("gallery__item--hide");
        }
      }

      if (e.target.classList.contains("nav-bottom__link--programming")) {
        for (var k = 0; k < programming.length; k++) {
          programming[k].classList.remove("gallery__item--hide");
        }
      }

      if (e.target.classList.contains("nav-bottom__link--seo")) {
        for (var k = 0; k < seo.length; k++) {
          seo[k].classList.remove("gallery__item--hide");
        }
      }
    })
  }
}
