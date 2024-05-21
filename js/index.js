const sliderWrap = document.querySelector('.main_imgbox');
const sliderImg = sliderWrap.querySelector('.imgbox_slide');
const sliderInner = sliderImg;
const slides = sliderInner.querySelectorAll('li');

let currentIndex = 0;
const slideCount = slides.length;
const slideWidth = slides[0].clientWidth;
const intervalTime = 3000;


const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slideCount - 1].cloneNode(true);

sliderInner.appendChild(firstClone);
sliderInner.insertBefore(lastClone, slides[0]);

const totalSlides = document.querySelectorAll('.imgbox_slide li').length;
sliderInner.style.transform = `translateX(${-slideWidth * (currentIndex + 1)}px)`;

setInterval(() => {
    currentIndex++;
    sliderInner.style.transition = 'transform 0.7s ease-in-out';
    sliderInner.style.transform = `translateX(${-slideWidth * (currentIndex + 1)}px)`;
}, intervalTime);

sliderInner.addEventListener('transitionend', () => {
    if (currentIndex >= totalSlides - 1) {
        currentIndex = 0;
        sliderInner.style.transition = 'none';
        sliderInner.style.transform = `translateX(${-slideWidth * (currentIndex + 1)}px)`;
    }
});
