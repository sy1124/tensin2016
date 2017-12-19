jQuery(function(){
	jQuery(window).scroll(function() {
		var imagePos01 = jQuery('#box01').offset().top-50;
		var imagePos02 = jQuery('#box02').offset().top-50;
		var imagePos03 = jQuery('#box03').offset().top-50;
		var imagePos04 = jQuery('#box04').offset().top-50;

		var topOfWindow = jQuery(window).scrollTop();

		if (imagePos01 > topOfWindow) {
			jQuery('ul#nav li a').removeClass('current');
		}
		if (imagePos01 <= topOfWindow) {
			jQuery('ul#nav li a').removeClass('current');
			jQuery('ul#nav > li:first-of-type a').addClass('current');
		}
		if (imagePos02 <= topOfWindow) {
			jQuery('ul#nav li a').removeClass('current');
			jQuery('ul#nav > li:nth-of-type(2) a').addClass('current');
		}
		if (imagePos03 <= topOfWindow) {
			jQuery('ul#nav li a').removeClass('current');
			jQuery('ul#nav > li:nth-of-type(3) a').addClass('current');
		}
		if (imagePos04 <= topOfWindow) {
			jQuery('ul#nav li a').removeClass('current');
			jQuery('ul#nav > li:nth-of-type(4) a').addClass('current');
		}
	});


// PageScroller
	jQuery.easing.easeOutCubic = function(x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	};
	jQuery(document).on('click','#pagetop a, a.goBox', function() {
		var speed = 1000;
		var href= jQuery(this).attr('href');
		var target = jQuery(href === '#' || href === '' ? 'html' : href);
		var position = target.offset().top;
		jQuery('body,html').animate({scrollTop:position+1}, speed, 'easeOutCubic');
		return false;
	});


  // FIXED HEADNAV
    var boxTop = jQuery('#nav').offset().top;
    jQuery(window).scroll(function () {
      if(jQuery(window).scrollTop() >= boxTop) {
        jQuery('#nav').addClass('fixed');
      } else {
        jQuery('#nav').removeClass('fixed');
      }
    });

  // FIXEDMENU X-SCROLL
  	jQuery(window).on('load resize',function(){
  		var ww = window.innerWidth;
  		if(ww < 1070) {
  			jQuery(window).on('scroll',function(){
  				jQuery('.fixed').css('left', -jQuery(window).scrollLeft());
  			});
  		} else {
  			jQuery(window).on('scroll',function(){
  				jQuery('.fixed').css('left', 'auto');
  			});
  		}
  	});
//SP番ここから_________________________________________________

	jQuery(window).on('load resize',function(){
		if(window.matchMedia('(max-width:600px)').matches) {
			jQuery('#box00').bjqs({width:320, height:228});
			jQuery('#box01 p').children('br').remove();
		} else {
			jQuery('#box00').bjqs({width:1070, height:620});
		}
	});

	// Accordion
		jQuery(document).on('click','div#box02_1 > div.b02_right > h2, div#box02_2 > div.b02_right > h2', function() {
			jQuery(this).toggleClass('opened');
			jQuery(this).next('div.b02_right > dl').slideToggle();
			var speed = 1000;
			var position = jQuery(this).offset().top;
			jQuery('body,html').animate({scrollTop:position}, speed, 'easeOutCubic');
			return false;
		});


});
