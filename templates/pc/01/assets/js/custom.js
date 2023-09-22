// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// by ExoTheme 2015
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
jQuery(document).ready(function () {
	'use strict'; // use strict mode

	// hide preloader
	jQuery('#preloader').delay(500).fadeOut(500);


	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
	// touch and swipe owl carousel
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
	jQuery("#testi-carousel").owlCarousel({
		slideSpeed: 500,
		autoPlay: 5000,
		stopOnHover: true,
		singleItem: true,
		lazyLoad: true,
		navigation: false
	});

	jQuery("#testi-carousel-2").owlCarousel({
		singleItem: true,
		lazyLoad: true,
		navigation: false,
		pagination: true
	});

	jQuery("#awards-carousel").owlCarousel({
		items: 3,
		navigation: false,
		pagination: false,
	});

	jQuery(".carousel-text").owlCarousel({
		singleItem: true,
		lazyLoad: true,
		navigation: false,
		pagination: false
	});
	
	jQuery(".single-carousel-arrow-nav").owlCarousel({
		singleItem: true,
		lazyLoad: false,
		navigation: false,
		pagination: false
	});

	jQuery(".single-carousel-no-nav").owlCarousel({
		singleItem: true,
		lazyLoad: false,
		navigation: false,
		pagination: false
	});

	jQuery(".client-carousel").owlCarousel({
		slideSpeed: 500,
		autoPlay: 5000,
		stopOnHover: true,
		items: 6,
		navigation: false,
		pagination: false,
	});

	// custom


	jQuery('.owl-custom-nav').each(function () {
		var owl = $('.owl-custom-nav').next();
		var ow = parseInt(owl.css("height"), 10);
		$(this).css("margin-top", (ow / 2) - 25);

		owl.owlCarousel();

		// Custom Navigation Events
		$(".btn-next").on( "click", function() {
			owl.trigger('owl.next');
		});
		$(".btn-prev").on( "click", function() {
			owl.trigger('owl.prev');
		});
	});


	// wow jquery
	new WOW().init();
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
	// fit video
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
	jQuery(".container").fitVids();
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
	// filtering gallery
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
	var $container = jQuery('#gallery-isotope');
	$container.imagesLoaded( function() {
		$container.isotope({
		itemSelector: '.item',
		filter: '*',
		});
	})
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
  //   var $newslist = jQuery('#newslist');
	 // $newslist.imagesLoaded( function() {
  //       $newslist.isotope({
  //       itemSelector: '.item',
  //       filter: '*',
  //       });
  //   })
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
	jQuery('#filters a').on( "click", function() {
		var $this = jQuery(this);
		if ($this.hasClass('selected')) {
			return false;
		}
		var $optionSet = $this.parents();
		$optionSet.find('.selected').removeClass('selected');
		$this.addClass('selected');
		var selector = jQuery(this).attr('data-filter');
		$container.isotope({
			filter: selector,
		});
		return false;
	});
	jQuery('.animated').fadeTo(0, 0);

	// - - - - - - - - - -
	function equalHeight(group) {
		var tallest = 0;
		group.each(function () {
			thisHeight = $(this).parent().height();
			if (thisHeight > tallest) {
				tallest = thisHeight;
			}
		});
		group.height(tallest);
	}
	
	 equalHeight($(".item-blog"));
   
	jQuery('.small-pic').each(function () {
		w = jQuery(this).parent().css("width");
		wd = (parseInt(w, 10) - 40) / 4;
		jQuery(this).css("width", wd);
		jQuery(this).css("height", wd);
	});
	jQuery('.wide-pic').each(function () {
		w = jQuery(this).parent().css("width");
		wd = (parseInt(w, 10) - 40) / 2;
		jQuery(this).css("width", wd + 10);
		jQuery(this).css("height", wd / 2);
	});
	jQuery('.long-pic').each(function () {
		w = jQuery(this).parent().css("width");
		wd = (parseInt(w, 10) - 40) / 4;
		jQuery(this).css("width", wd);
		jQuery(this).css("height", wd * 2 + 10);
	});

	function init() {
		// - - - - - - - - - -
		// gallery overlay autosize
		// - - - - - - - - - -
		jQuery('#gallery .item').each(function () {
			jQuery(this).find(".overlay").fadeTo(1, 0);
			jQuery(this).find("img").css("width", "100%");
			jQuery(this).find("img").css("height", "auto");

			jQuery(this).find("img").on('load', function () {
				var w = jQuery(this).css("width");
				var h = jQuery(this).css("height");
				jQuery(this).parent().find(".overlay").css("width", w);
				jQuery(this).parent().find(".overlay").css("height", h);
				jQuery(this).parent().find(".pf_text").css("width", w);
				jQuery(this).parent().find(".pf_text").css("height", h);
			}).each(function () {
				if (this.complete) $(this).load();
			});
		});

		// - - - - - - - - - -
		// gallery hover
		// - - - - - - - - - -
		jQuery("#gallery .item").on("mouseenter", function () {
			var w = jQuery(this).find("img").css("width");
			var h = jQuery(this).find("img").css("height");
			jQuery(this).find(".overlay").stop().fadeTo(300, 1);
			var margin_top = parseInt(h, 10) / 2 - 10;
			jQuery(this).find(".project-name").stop().animate({
				"margin-top": margin_top + "px"
			}, 400, 'easeOutCubic');
			jQuery(this).find(".small-border").stop().animate({
				"width": "150px"
			}, 600, 'easeOutCubic');
		}).on("mouseleave", function () {
			jQuery(this).find(".overlay").stop().fadeTo(300, 0);
			jQuery(this).find(".project-name").stop().animate({
				"margin-top": "20px"
			}, 400, 'easeOutCubic');
			jQuery(this).find(".small-border").stop().animate({
				"width": "50px"
			}, 600, 'easeOutCubic');
		});

		// - - - - - - - - - -
		jQuery('#gallery-isotope').isotope('reLayout');
		// - - - - - - - - - -


		var wh = jQuery(window).height();
		jQuery("section.autoheight").css("height", wh);

		var ch = jQuery('section.autoheight .center-y').css("height");
		var mt = (parseInt(wh, 10) - parseInt(ch, 10)) / 2;
		mt = Math.floor(mt);
		jQuery('section.autoheight .center-y').css("padding-top", mt);


	}
	init();

	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
	// paralax background
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 	
	var $window = jQuery(window);
	jQuery('section[data-type="background"]').each(function () {
		var $bgobj = jQuery(this); // assigning the object
		jQuery(window).scroll(function () {
			var yPos = -($window.scrollTop() / $bgobj.data(
				'speed'));
			var coords = '50% ' + yPos + 'px';
			$bgobj.css({
				backgroundPosition: coords
			});
		});
	});
	document.createElement("article");
	document.createElement("section");
	
	// --------------------------------------------------
	// portfolio hover
	// --------------------------------------------------
	jQuery(".fx .desc").fadeTo(0, 0);
	jQuery(".fx .item").on("mouseenter", function () {
		speed = 700;
		jQuery(this).find(".desc").stop(true).animate({
			'height': "120px",
			'margin-top': "20px",
			"opacity": "100"
		}, speed, 'easeOutCubic');
		jQuery(this).find(".overlay").stop(true).animate({
			'height': "100%",
			'margin-top': "20px"
		}, speed, 'easeOutCubic');
		jQuery(this).parent().parent().find(".item").not(this).stop(
			true).fadeTo(speed, '.5');
	}).on("mouseleave", function () {
		jQuery(this).find(".desc").stop(true).animate({
			'height': "0px",
			'margin-top': "0px",
			"opacity": "0"
		}, speed, 'easeOutCubic');
		jQuery(this).find(".overlay").stop(true).animate({
			'height': "84px",
			'margin-top': "20px"
		}, speed, 'easeOutCubic');
		jQuery(this).parent().parent().find(".item").not(this).stop(
			true).fadeTo(speed, 1);
	});

	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
	// scroll to top
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 	
	jQuery().UItoTop({
		easingType: 'easeInOutExpo'
	});
	
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
	// gallery hover
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

	jQuery('.img-hover').on("mouseenter", function () {
		jQuery(this).stop().animate({
			opacity: '.5'
		}, 100);
	}).on("mouseleave", function () {
		jQuery(this).stop().animate({
			opacity: 1
		});
	}, 100);
	
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
	// resize
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 	
	window.onresize = function (event) {
		init();
		equalHeight(jQuery(".item-blog"));
	};
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
	// show / hide slider navigation
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 	
	jQuery('.callbacks_nav').hide();
	jQuery('#slider').on("mouseenter", function () {
		jQuery('.callbacks_nav').stop().animate({
			opacity: 1
		}, 100);
	}).on("mouseleave", function () {
		jQuery('.callbacks_nav').stop().animate({
			opacity: 0
		});
	}, 100);
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
	// image hover effect
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 	
	jQuery(".pic-hover .hover").hide();
	jQuery(".pic-hover").on("mouseenter", function () {
		jQuery(this).find(".hover").width(jQuery(this).find(
			"img").css("width"));
		jQuery(this).find(".hover").height(jQuery(this).find(
			"img").css("height"));
		jQuery(this).find(".hover").fadeTo(150, '.9');
		picheight = jQuery(this).find("img").css("height");
		newheight = (picheight.substring(0, picheight.length -
			2) / 2);
		jQuery(this).find(".btn-view-details").css({
			'margin-top': newheight
		}, 'fast');
	}).on("mouseleave", function () {
		jQuery(this).find(".hover").fadeTo(150, 0);
	});

	// --------------------------------------------------
	// tabs
	// --------------------------------------------------
	jQuery('.exo_tab').find('.exo_tab_content div').hide();
	jQuery('.exo_tab').find('.exo_tab_content div:first').show();
	jQuery('.lt_nav li').on( "click", function() {
		jQuery(this).parent().find('li span').removeClass(
			"active");
		jQuery(this).find('span').addClass("active");
		jQuery(this).parent().parent().find(
			'.exo_tab_content div').hide();
		var indexer = jQuery(this).index(); //gets the current index of (this) which is #nav li
		jQuery(this).parent().parent().find(
			'.exo_tab_content div:eq(' + indexer + ')').fadeIn(); //uses whatever index the link has to open the corresponding box 
	});

	jQuery('#track-it').on( "click", function() {
		jQuery('#map-tracking').css("height", "400px");
	});

	jQuery('.expand .title').on( "click", function() {

		jQuery(this).parent().parent().removeClass(".active");

		jQuery(this).parent().parent().find(".content").slideUp();
		jQuery(this).parent().find(".content").slideDown();
		jQuery(this).parent().addClass("active");

	});
	
	// btn track click
	jQuery('#track-it').on( "click", function() {
		jQuery('#section-tracking-result').slideDown();
		jQuery('html,body').scrollTo("#section-tracking-result", "#section-tracking-result"); 
	});

	//  Accordion Panels
	jQuery(".accordion div").show();
	setTimeout("$('.accordion div').slideToggle('slow');", 1000);
		jQuery(".accordion h3").on( "click", function() {
		jQuery(this).next(".pane").slideToggle("slow").siblings(".pane:visible").slideUp("slow");
		jQuery(this).toggleClass("current");
		jQuery(this).siblings("h3").removeClass("current");
	});

	// display the first div by default.
	$(".accordion div").first().css('display', 'block');


	// Get all the links.
	var link = $(".accordion a");

	// On clicking of the links do something.
	link.on('click', function (e) {

		e.preventDefault();

		var a = $(this).next(".content");

		$(a).slideDown('fast');

		//$(a).slideToggle('fast');
		$(".accordion div").not(a).slideUp('fast');

	});

	// magnific popup init

	jQuery('.zoom-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function (item) {
				//return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
				return item.el.attr('title');
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function (element) {
				return element.find('img');
			}
		}

	});

	jQuery('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});


	// stellar plugin
	$.stellar({
		horizontalScrolling: false,
		verticalOffset: 0
	});

	// jquery typed plugin
	$(".typed").typed({
		stringsElement: $('.typed-strings'),
		typeSpeed: 100,
		backDelay: 1500,
		loop: true,
		contentType: 'html', // or text
		// defaults to false for infinite loop
		loopCount: false,
		callback: function () { null; },
		resetCallback: function () { newTyped(); }
	});

	// expand box
	jQuery(".expand-box .btn-expand").on( "click", function() {
		var iteration = $(this).data('iteration') || 1;
		switch (iteration) {
			case 1:
				jQuery(this).parent().find(".hide-content").slideDown(500);
				jQuery(this).parent().parent().find(".btn-fullwidth").stop().fadeTo(100, 1);
				jQuery(this).parent().parent().find(".btn-fullwidth").css("margin-bottom", "30px");
				jQuery(this).addClass('click');
				break;

			case 2:
				jQuery(this).parent().find(".hide-content").slideUp(500);
				jQuery(this).parent().parent().find(".btn-fullwidth").stop().fadeTo(100, 0);
				jQuery(this).parent().parent().find(".btn-fullwidth").css("margin-bottom", "0px");
				jQuery(this).removeClass('click');
				break;
		}
		iteration++;
		if (iteration > 2) iteration = 1;
		$(this).data('iteration', iteration);
	});

	jQuery(".faq .btn-expand").on( "click", function() {
		var iteration = $(this).data('iteration') || 1;
		switch (iteration) {
			case 1:
				jQuery(this).parent().find(".hide-content").slideDown(500);
				jQuery(this).addClass('click');
				break;

			case 2:
				jQuery(this).parent().find(".hide-content").slideUp(500);
				jQuery(this).removeClass('click');
				break;
		}
		iteration++;
		if (iteration > 2) iteration = 1;
		$(this).data('iteration', iteration);
	});

	// clone header

	var $header = jQuery("header"),
		$clone = $header.before($header.clone().addClass("clone"));
	jQuery(window).on("scroll", function () {
		var fromTop = jQuery(window).scrollTop();
		jQuery("body").toggleClass("down", (fromTop > 240));
	});


	// mobile navigation
	var mb;
	jQuery('#menu-btn').on( "click", function() {
		var iteration = $(this).data('iteration') || 1;
		switch (iteration) {
			case 1:
				jQuery('#mainmenu').show();
				jQuery('header').css("height", "auto");
				mb = 1;
				break;

			case 2:
				jQuery('#mainmenu').hide();
				jQuery('header').css("height", "80px");
				mb = 0;
				break;
		}
		iteration++;
		if (iteration > 2) iteration = 1;
		$(this).data('iteration', iteration);
	});
	//--------------------------------------------------------------
	var isRatio43 = 4/3;
	var isRatio34 = 3/4;
	auto_size( ".news-list .news-item .imgthumb", 0, isRatio34);
	fix_size(".idx-service .inner",0);
	//fix_size(".news-list .news-item",0);
	fix_size(".team-profile .text",0);
	//--------------------------------------------------------------

});


//--------------------------------------------------------------
// scroll_to_section
function scroll_to_section(element){
	var offset = -100; //Offset of 20px

	$('html, body').animate({
		scrollTop: $(element).offset().top + offset
	}, 1000);
}
//--------------------------------------------------------------
// scroll_to_section
function scroll_to_section_idx(element){
	var offset = -100; //Offset of 20px

	$('html, body').animate({
		scrollTop: $(element).offset().top + offset
	}, 1000);
	return false;
}
//--------------------------------------------------------------
// Auto size
function auto_size( isBlock, isScale, isRatio) {
	isScale = typeof isScale !== 'undefined' ? isScale : 0; // 0: resize Height, 1: resize Width
	isRatio = typeof isRatio !== 'undefined' ? isRatio : 1;

	$( isBlock ).each(function() {
		isWidth = $( this ).width();
		isHeight = $( this ).height();

		if (isScale=="0") { // resize Height
			$( this ).width(isWidth);
			$( this ).height(isWidth*isRatio);
		} else {
			$( this ).height(isHeight);
			$( this ).width(isHeight*isRatio);
		}
	});
}
//--------------------------------------------------------------
// Fix size
function fix_size( isBlock, isScale) {
	isScale = typeof isScale !== 'undefined' ? isScale : 0; // 0: resize Height, 1: resize Width
	maxValue = 0;
	if (isScale=="0") { // resize Height
		$( isBlock ).each(function() {
			isValue = $( this ).height();
			if (isValue>maxValue) { // resize Height
				maxValue = isValue;
			}
		});
		$( isBlock ).height(maxValue);
	} else { // resize Width
		$( isBlock ).each(function() {
			isValue = $( this ).width();
			if (isValue>maxValue) { // resize Height
				maxValue = isValue;
			}
		});
		$( isBlock ).width(maxValue);
	}
}
/* Open Q & A */
function openQA(qaid) {
	if ($(qaid+" .qa-content").css("display")=="block") {
		$(qaid+" .qa-title a").css({"color":""});
		$(qaid+" .qa-content").hide("fast");
	} else {
		$(qaid+" .qa-title a").css({"color":"#ed1c24"});
		$(qaid+" .qa-content").show("fast");
	}
}

//--------------------------------------------------------------
// Open Dialog
function openDialog(element,title,width,height){
	$( element ).dialog({
		autoOpen: false,
		modal: true,
		title: title,
		width: width,
		//minWidth: width,
		//maxWidth: width,
		height: height,
		//minHeight: height,
		//maxHeight: height,
		position: {
			my: "center center",
			at: "center center",
			of: window
		},
		show: {
			effect: "slideDown",
			duration: 200
		},
		hide: {
			effect: "slideUp",
			duration: 200
		},
		/*
		buttons: {
			"Hủy bỏ": function() { $(this).dialog("close"); },
			"Thực hiện": function() { $("#dialog_form").submit(); }
		},
		*/
		// Close dialog when click outside
		open: function(){
            jQuery('.ui-widget-overlay').bind('click',function(){
                jQuery(element).dialog('close');
            })
        }
	});
	$( element ).dialog( "open" );
}

//--------------------------------------------------------------
// Open Dialog Check In
function openDialog_checkin(element,title,width,height){
	$( element ).dialog({
		autoOpen: false,
		modal: true,
		title: title,
		width: width,
		//minWidth: width,
		//maxWidth: width,
		height: height,
		//minHeight: height,
		//maxHeight: height,
		position: {
			my: "center center",
			at: "center center",
			of: window
		},
		show: {
			effect: "slideDown",
			duration: 200
		},
		hide: {
			effect: "slideUp",
			duration: 200
		},
		buttons: {
			"Hủy bỏ": function() { $(this).dialog("close"); },
			"Check in": function() { $("#dialog_form").submit(); }
		},
		// Close dialog when click outside
		open: function(){
            jQuery('.ui-widget-overlay').bind('click',function(){
                jQuery(element).dialog('close');
            })
        }
	});
	$( element ).dialog( "open" );
}
//--------------------------------------------------------------
// Open Dialog Check Out
function openDialog_checkout(element,title,width,height){
	$( element ).dialog({
		autoOpen: false,
		modal: true,
		title: title,
		width: width,
		//minWidth: width,
		//maxWidth: width,
		height: height,
		//minHeight: height,
		//maxHeight: height,
		position: {
			my: "center center",
			at: "center center",
			of: window
		},
		show: {
			effect: "slideDown",
			duration: 200
		},
		hide: {
			effect: "slideUp",
			duration: 200
		},
		buttons: {
			"Lưu": function() {
				var night_value = $('input[name=night]:checked', '#dialog_form').val()
				$('#night_value').val(night_value);
				
				var calc_value = $('input[name=calc]:checked', '#dialog_form').val()
				$('#calc_value').val(calc_value);
				
				var promotion_value = $( "#promotion" ).val();
				$('#promotion_value').val(promotion_value);
				
				var pay_other_value = $( "#pay_other" ).val();
				$('#pay_other_value').val(pay_other_value);
				
				var content_value = $("#content").val();
				$('#content_value').val(content_value);
				
				postPage("#save_booking_form","#dialog_welcome");
				$(this).dialog("close");
			},
			"Check out": function() {
				var answer = confirm("Bạn có chắc thanh toán phòng ?");
				if (answer){
					$("#dialog_form").submit();
				}
				$(this).dialog("close");
			},
			"In hóa đơn": function() {
				var answer = confirm("Bạn có muốn thanh toán phòng ? Bấm cancel để chỉ in hóa đơn");
				if (answer){
					var promotion_value = $( "#promotion" ).val();
					$('#promotion_value').val(promotion_value);
					
					var content_value = $("#content").val();
					$('#content_value').val(content_value);
					
					$("#print_booking_form").submit();
					$("#dialog_form").submit();
				} else {
					var promotion_value = $( "#promotion" ).val();
					$('#promotion_value').val(promotion_value);
					
					var content_value = $("#content").val();
					$('#content_value').val(content_value);
					
					$("#print_booking_form").submit();
				}
				$(this).dialog("close");
			}
		},
		// Close dialog when click outside
		open: function(){
            jQuery('.ui-widget-overlay').bind('click',function(){
                jQuery(element).dialog('close');
            })
        },
        // Reload page when close
        close: function( event, ui ) {
		  	location.reload();
		}
	});
	$( element ).dialog( "open" );
}










