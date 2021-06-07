'use strict';

var toggleClassMenu = function toggleClassMenu() {
	var hamburger = document.querySelector('.hamburger');
	var nav = document.querySelector('.navigation');

	hamburger.addEventListener('click', function () {
		hamburger.classList.toggle('is-active');
		nav.classList.toggle('mobile-menu');
	});
};

toggleClassMenu();

$('.testimonials-slider').slick({
	dots: true,
	arrows: false
});

var fixedMenu = function fixedMenu() {
	var menu = document.querySelector('.header-top');
	if (window.scrollY > 0) {
		menu.classList.add('menu--fixed');
	} else {
		menu.classList.remove('menu--fixed');
	}
};

window.addEventListener('scroll', fixedMenu);

var mediaQueryMax599 = window.matchMedia('(max-width:599px)');
var mediaQueryMax899 = window.matchMedia('(min-width:600px) and (max-width:899px)');
var mediaQueryMax1199 = window.matchMedia('(min-width:900px) and (max-width: 1199px)');
var mediaQueryMin1200 = window.matchMedia('(min-width:1200px)');

mediaQueryMax599.offset = 59;
mediaQueryMax899.offset = 72;
mediaQueryMax1199.offset = 86;
mediaQueryMin1200.offset = 98;

var listMediaQuery = [mediaQueryMax599, mediaQueryMax899, mediaQueryMax1199, mediaQueryMin1200];
var hashObj = {
	home: {
		hash: '#home'
	},
	features: {
		hash: '#features'
	},
	about: {
		hash: '#about'
	},
	testimonials: {
		hash: '#testimonials'
	},
	pricing: {
		hash: '#pricing'
	},
	contact: {
		hash: '#contact'
	}
};

var navigation = function navigation(hashObj) {
	var menu = document.querySelector('.navigation');
	var hamburger = document.querySelector('.hamburger');

	$('.menu-item__link').click(function (e) {
		e.preventDefault();
		for (var key in hashObj) {
			if (hashObj.hasOwnProperty(key)) {
				if (this.hash == hashObj[key].hash) {
					for (var i = 0; i < listMediaQuery.length; i++) {
						if (listMediaQuery[i].matches) {
							$('html, body').animate({
								scrollTop: $(this.hash).offset().top - listMediaQuery[i].offset
							}, 1000);
						}
					}
				}
			}
		}
		menu.classList.remove('mobile-menu');
		hamburger.classList.remove('is-active');
	});
};

navigation(hashObj);