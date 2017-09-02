$(document).ready(function(){

	// slider
  $('.subpages__slider').slick({
    	infinite: false,
  		slidesToShow: 4,
  		slidesToScroll: 1
	});

  	// popup
  	$('.image-popup-zoom').magnificPopup({
	 type: 'image',
	 zoom: {
	     enabled: true,
	     duration: 300
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

 	// header

 	$('.show-hide-btn').click(function() {
 			$('.show-hide-btn__icon').toggleClass('active');
			$('.header').toggleClass('hidden');
			$('.main').toggleClass('upside');
		});
});


	 


