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

	(function changeRoomTabs () {
		const roomTabs = document.querySelectorAll('.front-room__tab');
		const roomBlocks = document.querySelectorAll('.front-room__block');

		if (roomTabs && roomBlocks) {
			let activeTab;
			for (let i = 0; i < roomTabs.length; i++) {
				roomTabs[i].addEventListener('click', function() {
					activeTab = i;
					toggleLink(activeTab);
					toggleTab(activeTab);
					
				});
			}
			
			function toggleLink (activeTab) {
				for(let n = 0; n < roomTabs.length; n++) {
					roomTabs[n].classList.remove('front-room__tab--active');
				}
				roomTabs[activeTab].classList.add('front-room__tab--active');
			}

			function toggleTab(activeTab) {
				for (let z = 0; z < roomBlocks.length; z++) {
					roomBlocks[z].classList.add('front-room__block--hidden');
				}
				roomBlocks[activeTab].classList.remove('front-room__block--hidden');
			}
		}
	})();

	(function initRoomSliders() {
		const roomSliders = document.querySelectorAll('.front-room__swiper-container');

		for (let i = 0; i < roomSliders.length; i++) {
			new Swiper (roomSliders[i], {
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
		}
	})();
})();
