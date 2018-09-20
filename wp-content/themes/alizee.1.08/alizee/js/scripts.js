
//Page loader
jQuery(document).ready(function($) {
	$("#page").show();
});

//Menu dropdown animation
jQuery(function($) {
	$('.sub-menu').hide();
	$('.main-navigation .children').hide();
	if ( matchMedia( 'only screen and (min-width: 1024px)' ).matches ) {
		$('.menu-item').hover( 
			function() {
				$(this).children('.sub-menu').slideDown();
			}, 
			function() {
				$(this).children('.sub-menu').hide();
			}
		);
		$('.main-navigation li').hover( 
			function() {
				$(this).children('.main-navigation .children').slideDown();
			}, 
			function() {
				$(this).children('.main-navigation .children').hide();
			}
		);	
	}
});

//Toggle sidebar
jQuery(function($) {
	$('.sidebar-toggle').click(function()
	{
		$('.widget-area').toggle('fast').toggleClass('slide-sidebar');
		$('.content-area').toggleClass('slide-content');
		$('.site-content').toggleClass('clearfix');
		$('.sidebar-toggle').find('i').toggleClass('fa-plus fa-times');
	});
});

//Social toggle
jQuery(function($) {
	$('.social-toggle').toggle(function() {
	  $('.social-navigation').animate({'left':'60px'});
	  $('.social-toggle').find('i').toggleClass('fa-facebook fa-times');
	}, function() {
	 $('.social-navigation').animate({'left':'-600px'});
	 $('.social-toggle').find('i').toggleClass('fa-facebook fa-times');
	});
});

//Fit Vids
jQuery(function($) {
  
  $(document).ready(function(){
    $("body").fitVids();
  });
  
});

//Scroll to top
jQuery(function($) {
	
	$('.scrollup').click(function(){
		$('body').animate({scrollTop : 0},600);
		return false;
	});
	
});

//Mobile
jQuery(function($) {
		var	menuType = 'desktop';

		$(window).on('load resize', function() {
			var currMenuType = 'desktop';

			if ( matchMedia( 'only screen and (max-width: 991px)' ).matches ) {
				currMenuType = 'mobile';
			}

			if ( currMenuType !== menuType ) {
				menuType = currMenuType;

				if ( currMenuType === 'mobile' ) {
					var $mobileMenu = $('.main-navigation .menu').addClass('mainnav-mobi');
					var hasChildMenu = $('.mainnav-mobi').find('li:has(ul)');

					hasChildMenu.children('ul').hide();
					hasChildMenu.children('a').after('<span class="btn-submenu"></span>');
					$('.menu-toggle .fa').removeClass('active');
				} else {
					var $desktopMenu = $('.mainnav-mobi').removeClass('mainnav-mobi').removeAttr('style');

					$desktopMenu.find('.submenu').removeAttr('style');
					$('.btn-submenu').remove();
				}
			}
		});

		$('.menu-toggle').on('click', function() {
			$('.mainnav-mobi').slideToggle(300);
			$(this).toggleClass('active');
		});

		$(document).on('click', '.mainnav-mobi li .btn-submenu', function(e) {
			$(this).toggleClass('active').next('ul').slideToggle(300);
			e.stopImmediatePropagation()
		});	
});