

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
} 


$(document).ready(function(){

	// slider
  	
	$('.subpages__slider').slick({
	    infinite: false,
	  	slidesToShow: 4,
	  	slidesToScroll: 1,

	  	responsive: [
    		{
      			breakpoint: 999,

      			settings: {
        			slidesToShow: 3,
       				slidesToScroll: 1,
        			infinite: false
      			}
      		},

      		{

      			breakpoint: 767,

      			settings: {
        			slidesToShow: 1,
       				slidesToScroll: 1,
        			infinite: false
      			}
    		}
    	]	
	});

   $('.popup-gallery--main-page').magnificPopup({
    delegate: 'a',
    type: 'image',
    removalDelay: 100,
    mainClass: 'my-mfp-zoom-in',
    tLoading: 'Загрузка изображения #%curr%...',
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1]
    }
  });

  	// popup gallery
  	$('.popup-gallery').magnificPopup({
 		delegate: 'a',
 		type: 'image',
 		removalDelay: 100,
 		mainClass: 'my-mfp-zoom-in',
 		tLoading: 'Загрузка изображения #%curr%...',
 		gallery: {
     		enabled: true,
     		navigateByImgClick: true,
    		preload: [0, 1]
 		}
 	});


 	// popup form

 	$('.popup-with-form').magnificPopup({
   		type: 'inline',
   		focus: '#name'
	});
});


	 


