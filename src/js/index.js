import "./import/modules";
import Swiper from 'swiper';

(function() {
	(function initNewsSlider() {
		const partySwiper = new Swiper ('.front-party__swiper-container', {
			loop: false,
			slidesPerView: 4,
			spaceBetween: 20,
			navigation: {
				nextEl: '.front-news__next',
				prevEl: '.front-news__prev',
				disabledClass: 'front-news__btn--disabled'
			},
			breakpoints: {
				500: {
					slidesPerView: 1,
					spaceBetween: 20
				},
				680: {
					slidesPerView: 3,
					spaceBetween: 20
				},
				900: {
					slidesPerView: 3,
					spaceBetween: 20
				},
				1080: {
					slidesPerView: 4,
					spaceBetween: 20
				}
			}
		});
	})();

	(function initNewsSlider() {
		const newsSwiper = new Swiper ('.front-news__slider', {
			loop: false,
			slidesPerView: 3,
			spaceBetween: 20,
			navigation: {
				nextEl: '.front-news__next',
				prevEl: '.front-news__prev',
				disabledClass: 'front-news__btn--disabled'
			},
			breakpoints: {
				500: {
					slidesPerView: 1,
					spaceBetween: 0
				},
				480: {
					slidesPerView: 2,
					spaceBetween: 20
				},
				900: {
					slidesPerView: 3,
					spaceBetween: 20
				}
			}
		});
	})();
})();

console.log('Привет')
