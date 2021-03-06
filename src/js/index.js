import "./import/modules";
import Swiper from 'swiper';

(function() {
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

		if (roomSliders) {
			for (let i = 0; i < roomSliders.length; i++) {
				new Swiper (roomSliders[i], {
					loop: false,
					slidesPerView: 'auto',
					spaceBetween: 20,
					freeMode: true,
					navigation: {
						nextEl: '.front-room__swiper-right',
						prevEl: '.front-room__swiper-left',
						disabledClass: 'front-room__btn--disabled'
					}
				});
			}
		}

	})();

	(function initFeaturesSliders() {
		const partySwiper = new Swiper ('.front-features__slider', {
			loop: false,
			slidesPerView: 1,
			spaceBetween: 20,
			direction: 'horizontal',
			navigation: {
				nextEl: '.front-news__next',
				prevEl: '.front-news__prev',
				disabledClass: 'front-news__btn--disabled'
			},
			breakpoints: {
				1080: {
					direction: 'vertical',
					autoplay: {
						delay: 3000,
					}
				}
			},
			pagination: {
				el: '.front-features__pagination',
				renderBullet: function (index, className) {
					return '<span class="' + className + '">0' + (index + 1) + '</span>';
				}
			}
		});
	})();

	(function initPartySlider() {
		const partySwiper = new Swiper ('.front-party__swiper-container', {
			loop: false,
			slidesPerView: 1,
			spaceBetween: 20,
			navigation: {
				prevEl: '.front-party__prev',
				nextEl: '.front-party__next',
				disabledClass: 'front-party__btn--disabled'
			},
			breakpoints: {
				520: {
					slidesPerView: 2,
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
			slidesPerView: 1,
			spaceBetween: 20,
			navigation: {
				nextEl: '.front-news__next',
				prevEl: '.front-news__prev',
				disabledClass: 'front-news__btn--disabled'
			},
			breakpoints: {
				680: {
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

	(function initRoomsSliders() {
		const roomSliders = document.querySelectorAll('.hotels__column-slider');

		if (roomSliders) {
			for (let i = 0; i < roomSliders.length; i++) {
				(function() {
					let galleryThumbs = new Swiper(roomSliders[i].querySelector('.hotels__gallery-thumbs'), {
						spaceBetween: 24,
						slidesPerView: 3,
						watchSlidesVisibility: true,
						watchSlidesProgress: true,
						direction: 'vertical',
						loopedSlides: 1,
						loop: true,
						slideToClickedSlide: true,
						centeredSlides: true,
					});
					let galleryTop = new Swiper(roomSliders[i].querySelector('.hotels__gallery-top'), {
						spaceBetween: 10,
						slidesPerView: 1,
						direction: 'horizontal',
						slideToClickedSlide: true,
						loop: true,
						effect: 'fade',
						navigation: {
							nextEl: '.swiper-button-next',
							prevEl: '.swiper-button-prev',
						},
						1080: {
							direction: 'vertical',
							loop: false,
							effect: false,
						},
					});
					galleryTop.controller.control = galleryThumbs;
					galleryThumbs.controller.control = galleryTop;
				})();
			}
		}

	})();

	(function initSingleNewsSlider() {
		const roomSliders = document.querySelectorAll('.s-news__slider');

		if (roomSliders) {
			for (let i = 0; i < roomSliders.length; i++) {
				(function() {
					let lengthSlider = roomSliders[i].querySelectorAll('.s-news__slide-top').length;
					let loopStatus;
					let paginationInfo;

					if (lengthSlider > 0 && lengthSlider < 5) {
						loopStatus = false;
						paginationInfo = {
							el: '.swiper-pagination',
						};
						roomSliders[i].querySelector('.s-news__slider-thumb').classList.add('s-news__slider-thumb--hidden')
					} else if (lengthSlider > 4) {
						loopStatus = true;
						paginationInfo = false;
					} else {
						return false
					}

					if (lengthSlider > 1) {
						let galleryThumbs = new Swiper(roomSliders[i].querySelector('.s-news__slider-thumb'), {
							spaceBetween: 20,
							slidesPerView: 4,
							watchSlidesVisibility: true,
							watchSlidesProgress: true,
							loopedSlides: 5,
							slideToClickedSlide: true,
							freeMode: true,
							loop: loopStatus,
						});
						let galleryTop = new Swiper(roomSliders[i].querySelector('.s-news__slider-top'), {
							slidesPerView: 1,
							slideToClickedSlide: true,
							loop: loopStatus,
							loopedSlides: 5,
							navigation: {
								nextEl: '.swiper-button-next',
								prevEl: '.swiper-button-prev',
							},
							pagination: paginationInfo,
						});
						galleryTop.controller.control = galleryThumbs;
						galleryThumbs.controller.control = galleryTop;
					} else {
						roomSliders[i].querySelector('.swiper-button-prev').style.display="none";
						roomSliders[i].querySelector('.swiper-button-next').style.display="none";
					}

				})();
			}
		}

	})();

	(function initSingleRoomsSlider() {
		const roomSliders = document.querySelectorAll('.apart__thumbs');

		if (roomSliders) {
			for (let i = 0; i < roomSliders.length; i++) {
				(function() {
					let lengthSlider = roomSliders[i].querySelectorAll('.apart__top-slide').length;
					console.log(lengthSlider)
					let loopStatus;
					let paginationInfo;

					if (lengthSlider > 1 && lengthSlider < 5) {
						loopStatus = false;
						paginationInfo = {
							el: '.swiper-pagination',
						};
						roomSliders[i].querySelector('.apart__thumb-slider').classList.add('apart__thumb-slider--hidden')
					} else if (lengthSlider > 4) {
						loopStatus = true;
						paginationInfo = false;
					} else {
						return false
					}

					if (lengthSlider > 1) {
						let galleryThumbs = new Swiper(roomSliders[i].querySelector('.apart__thumb-slider'), {
							spaceBetween: 20,
							slidesPerView: 4,
							watchSlidesVisibility: true,
							watchSlidesProgress: true,
							loopedSlides: 5,
							slideToClickedSlide: true,
							// freeMode: true,
							loop: loopStatus,
						});
						let galleryTop = new Swiper(roomSliders[i].querySelector('.apart__top-slider'), {
							slidesPerView: 1,
							slideToClickedSlide: true,
							loop: loopStatus,
							loopedSlides: 5,
							navigation: {
								nextEl: '.swiper-button-next',
								prevEl: '.swiper-button-prev',
							},
							pagination: paginationInfo,
						});
						galleryTop.controller.control = galleryThumbs;
						galleryThumbs.controller.control = galleryTop;
					}

				})();
			}
		}

	})();

	(function initSinglePartySlider() {
		const singlePartySwiper = new Swiper ('.s-party__slider', {
			loop: false,
			slidesPerView: 1,
			spaceBetween: 20,
			direction: 'horizontal',
			breakpoints: {
				1080: {
					direction: 'vertical',

				},
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			pagination: {
				el: '.s-party__slider-pagination',
				bulletClass: 's-party__slider-bullet',
				bulletActiveClass: 's-party__slider-bullet--active',
				clickable: true,
				renderBullet: function (index, className) {
					return '<div class="' + className + '"><div class="s-party__slider-line"></div>0' + (index + 1) + '</div>';
				}
			}
		});
	})();

	(function toggleMenu(){
		const burger = document.querySelector('.header__burger');
		const menu = document.querySelector('.mmenu');

		if (burger && menu) {
			burger.addEventListener('click', function() {
				menu.classList.toggle('mmenu--active');
			})

			menu.addEventListener('click', function(e) {
				e.stopPropagation();
				menu.classList.remove('mmenu--active');
			})
		}
	})();

	(function toggleMap(){
		const overlays = document.querySelectorAll('*[map-block]');
		const blocks = document.querySelectorAll('*[map-item]');

		console.log(overlays.length);
		console.log(blocks.length);

		let flagMap = false;

		if (overlays && blocks && overlays.length == blocks.length) {
			
			let activeNumber;

			for (let i = 0; i < overlays.length; i++) {
				overlays[i].addEventListener('mouseover', function() {
					if (flagMap == false) {
						activeNumber = overlays[i].getAttribute('map-block') - 1;
						selectBlocks();
					}
				});

				overlays[i].addEventListener('mouseout', function() {
					if (flagMap == false) {
						hideBlocks();
					}
				});

				overlays[i].addEventListener('click', function() {
					activeNumber = overlays[i].getAttribute('map-block') - 1;
					selectBlocks();
					flagMap = true;
				});
			}

			function selectBlocks() {
				for (let z = 0; z < blocks.length; z++) {
					blocks[z].classList.remove('map__item--active');
				}
				blocks[activeNumber].classList.add('map__item--active');
			}

			function hideBlocks() {
				for (let z = 0; z < blocks.length; z++) {
					blocks[z].classList.remove('map__item--active');
				}
			}
		}
	})();

})();
