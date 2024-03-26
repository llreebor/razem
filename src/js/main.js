// Sliders
if (document.querySelector('.swiper-logos')) {
	new Swiper('.swiper-logos-1', {
		// Optional parameters
		loop: true,
		speed: 3000,
		spaceBetween: 32,
		autoplay: {
			delay: 0,
		},
		breakpoints: {
			320: {
				slidesPerView: 1.5,
				centered: true,
			},
			480: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 3,
			},
			1024: {
				slidesPerView: 4,
			},
			1200: {
				slidesPerView: 6,
			},
		},
	})
	new Swiper('.swiper-logos-2', {
		// Optional parameters
		loop: true,
		speed: 3000,
		spaceBetween: 32,
		autoplay: {
			delay: 0,
			reverseDirection: true,
		},
		breakpoints: {
			320: {
				slidesPerView: 1.5,
				centered: true,
			},
			480: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 3,
			},
			1024: {
				slidesPerView: 4,
			},
			1200: {
				slidesPerView: 6,
			},
		},
	})
}

// Vacancy slider
if (document.querySelector('.swiper-vacancy')) {
	new Swiper('.swiper-vacancy', {
		// If we need pagination
		pagination: {
			el: '.swiper-pagination-vacancy',
			clickable: true,
		},
		// And if we need scrollbar
		scrollbar: {
			el: '.swiper-scrollbar-vacancy',
		},
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-next',
			prevEl: '.swiper-prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 1.1,
				spaceBetween: 16,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 16,
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 24,
			},
		},
	})
}

// Accordion
if (document.querySelector('.accordion')) {
	function accordion() {
		const items = document.querySelectorAll('.accordion-item')
		const triggers = document.querySelectorAll('.accordion-trigger')
		const contents = document.querySelectorAll('.accordion-content')

		triggers.forEach((trigger) => {
			if (items[0].classList.contains('active')) {
				contents[0].classList.add('active')
			}
			trigger.addEventListener('click', () => {
				const parent = trigger.parentNode

				if (!parent.classList.contains('active')) {
					// If you want only one to be open at a time, and others to close - UNCOMMENT the code below.
					// Если нужно что бы открывался ТОЛЬКО один, а остальные закрывались - РАСКОММЕНТИРУЙ код ниже

					// items.forEach((item, i) => {
					// 	if (i !== idx && item.classList.contains('active')) {
					// 		item.classList.remove('active')
					// 	}
					// })

					// Open the current accordion item
					// Открыть текущий пункт аккордеона
					parent.classList.add('active')
				} else {
					// Close the current accordion item
					// Закрыть текущий пункт аккордеона
					parent.classList.remove('active')
				}
			})
		})
	}

	accordion()
}
