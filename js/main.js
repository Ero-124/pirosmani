const swiper = new Swiper('.swiper-banner', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	grabCursor: true,
});


const menuSwiper = new Swiper('.swiper-menu', {
	slidesPerView: 'auto',
	spaceBetween: 63,
	grabCursor: true,


	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

});


const swiperReviews = new Swiper('.slider-reviews', {
	slidesPerView: 2,
	spaceBetween: 16,
	grabCursor: true,

	navigation: {
		nextEl: '.swiper-button-next',
	},

	breakpoints: {
		375: {
			slidesPerView: 'auto',
		},
		376: {
			slidesPerView: 2,
		}
	}
});


/*
jQuery(function () {
	var j = jQuery; //Just a variable for using jQuery without conflicts
	var addInput = '#qty'; //This is the id of the input you are changing
	var n = 1; //n is equal to 1

	//Set default value to n (n = 1)
	j(addInput).val(n + 'шт.');

	//On click add 1 to n
	j('.plus').on('click', function () {
		j(addInput).val(++n + 'шт.');
	})

	j('.min').on('click', function () {
		//If n is bigger or equal to 1 subtract 1 from n
		if (n >= 1) {
			j(addInput).val(--n + 'шт.');
		} else {
			//Otherwise do nothing
		}
	});
});
 */

$(document).ready(function () {
	$('.min').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 + "шт" : count + "шт";
		$input.val(count);
		$input.change();
		return false;
	});
	$('.plus').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1 + "шт");
		$input.change();
		return false;
	});
});


jQuery('.line-block-buttons .tab-b-1').on('click', function () {
	jQuery('.line-block-buttons button').removeClass('active');
	jQuery(this).addClass('active');
	jQuery('.line-tab-1').addClass('active');
	jQuery('.line-tab-2').removeClass('active');
});

jQuery('.line-block-buttons .tab-b-2').on('click', function () {
	jQuery('.line-block-buttons button').removeClass('active');
	jQuery(this).addClass('active');
	jQuery('.line-tab-2').addClass('active');
	jQuery('.line-tab-1').removeClass('active');
});



jQuery('.cart-sum .bt-1').on('click', function () {
	jQuery('.cart-sum button').removeClass('active');
	jQuery(this).addClass('active');
	jQuery('.fr-1').css("display", "block");
	jQuery('.fr-2').css("display", "none");
});

jQuery('.cart-sum .bt-2').on('click', function () {
	jQuery('.cart-sum button').removeClass('active');
	jQuery(this).addClass('active');
	jQuery('.fr-2').css("display", "block");
	jQuery('.fr-1').css("display", "none");
});


jQuery('.comment').on('click', function () {
	jQuery('.comment-inp').css("display", "block");
});


if ($(window).width() <= 767) {
	jQuery('.open-info').on('click', function () {
		jQuery(this).parents('.block-order').find('.order-items').show();
	});

	jQuery('.back-mob').on('click', function () {
		jQuery(this).parents('.block-order').find('.order-items').hide();
	});
}


$('.navbar-toggler').on('click', function () {
	$(this).toggleClass('change-button');
	$('body').toggleClass('lock');
});


$('.cart-mob').on('click', function () {
	$('.cart-popup').toggleClass('active');
	$('body').toggleClass('lock');

	
});


$('.close-cart-popup').on('click', function () {
	$('.cart-popup').removeClass('active');
	$('.mobile-bottom-menu span').removeClass('active');
	$('body').removeClass('lock');
});


$('.mobile-bottom-menu a, .mobile-bottom-menu span').on('click', function () {
	$('.mobile-bottom-menu a,  .mobile-bottom-menu span').removeClass('active');
	$(this).toggleClass('active');
});

