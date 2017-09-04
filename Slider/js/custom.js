$(document).ready(function(){

	// mobile detection

	var mobile = 1;
	if( $(window).width() > 767 ){
		mobile = 0;
	}

	if(mobile == 1){
		$('main').addClass('upside');
		$('header').addClass('hidden');
	}

	$('.mobile-menu').click(function() {
		$(this).parent().toggleClass('header__container--active');
		$('body').toggleClass('scroll-off');
	});

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

 	// popup form

 	$('.popup-with-form').magnificPopup({
   		type: 'inline',
   		focus: '#name'
	});
});


	 


