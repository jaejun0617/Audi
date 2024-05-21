let swiper = new Swiper('.mySwiper', {
    spaceBetween: 0,
    slidesPerView: '1',
    cssMode: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
    // loopAdditionalSlides: 1,
});
