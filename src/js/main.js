const toggleClassMenu = () =>{
	const hamburger = document.querySelector('.hamburger');
	const nav = document.querySelector('.navigation');

	hamburger.addEventListener('click', ()=>{
		hamburger.classList.toggle('is-active');
		nav.classList.toggle('mobile-menu');
	});
};

toggleClassMenu();

$('.testimonials-slider').slick({
	dots: true,
	arrows: false
});


const fixedMenu = () =>{
	const menu = document.querySelector('.header-top');
	if(window.scrollY > 0){
		menu.classList.add('menu--fixed');
	}
	else{
		menu.classList.remove('menu--fixed');
	}
};

window.addEventListener('scroll', fixedMenu);

const mediaQueryMax599 = window.matchMedia('(max-width:599px)');
const mediaQueryMax899 = window.matchMedia('(min-width:600px) and (max-width:899px)');
const mediaQueryMax1199 = window.matchMedia('(min-width:900px) and (max-width: 1199px)');
const mediaQueryMin1200 = window.matchMedia('(min-width:1200px)');

mediaQueryMax599.offset = 59;
mediaQueryMax899.offset = 72;
mediaQueryMax1199.offset = 86;
mediaQueryMin1200.offset = 98;

const listMediaQuery = [mediaQueryMax599, mediaQueryMax899, mediaQueryMax1199, mediaQueryMin1200];
const hashObj = {
	home: {
		hash: '#home',
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

const navigation = (hashObj) =>{
	const menu = document.querySelector('.navigation');
	const hamburger = document.querySelector('.hamburger');

	$('.menu-item__link').click(function (e) {
		e.preventDefault();
		for(let key in hashObj){
			if(hashObj.hasOwnProperty(key)){
				if(this.hash == hashObj[key].hash){
					for(let i=0; i < listMediaQuery.length; i++){
						if(listMediaQuery[i].matches){
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
