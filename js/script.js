//Swiper

let swiper = new Swiper('.popular-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 3000,
    },
    loop: true,
    breakpoints: {
        '@0.00': {
            slidesPerView: 1.3,
            spaceBetween: 20,
        },
        '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        '@1.50': {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});

//Mixitup

let mixerFeatured = mixitup('.featured-content', {
    selectors: {
        target: '.featured-card',
    },
    animation: {
        duration: 300,
    },
});

// Link Featured Active

const featuredLink = document.querySelectorAll('.featured-item');

function activeFeatured() {
    featuredLink.forEach((l) => l.classList.remove('active-featured'));
    this.classList.add('active-featured');
}
featuredLink.forEach((l) => l.addEventListener('click', activeFeatured));
