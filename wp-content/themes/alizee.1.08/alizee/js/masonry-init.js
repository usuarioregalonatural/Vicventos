
//Masonry init
jQuery(function($) {
	var $container = $('.home-layout');
	$container.imagesLoaded( function() {
		$container.masonry({
			itemSelector: '.hentry',
	        //isAnimated: true,
			isFitWidth: true,
			animationOptions: {
				duration: 500,
				easing: 'linear',
			}
	    });
	});
});


jQuery(function($) {
	infinite_count = 0;
    
    	$(document.body).on('post-load', function() {
   		
	    	var $container = $('.home-layout');
			$container.imagesLoaded( function() {

		    	$container.masonry({
					itemSelector: '.hentry',
					isFitWidth: true,
					animationOptions: {
						duration: 500,
						easing: 'linear',
					}
		    	});
		});
		infinite_count = infinite_count + 1;
		
		var $selector = $('#infinite-view-' + infinite_count);
		
		var $elements = $selector.find('.hentry');
		
		$container.append($elements);
		
		// hide the new posts
		$elements.hide();
				   
		$container.masonry( 'appended', $elements, true );

		$elements.fadeIn();
    });
});