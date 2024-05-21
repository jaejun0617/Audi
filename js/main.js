const slider = document.querySelector('.ul_slider');
const nextButton = document.querySelector('.next1');
const prevButton = document.querySelector('.prev2');

nextButton.addEventListener('click', () => moveSlider('next'));
prevButton.addEventListener('click', () => moveSlider('prev'));


let intervalId;


function startAutoSlide() {
    intervalId = setInterval(() => moveSlider('next'), 5000);
}


function stopAutoSlide() {
    clearInterval(intervalId);
}


function moveSlider(direction) {
    const items = document.querySelectorAll('.item-slider');

    if (direction === 'next') {
        slider.append(items[0]);
    } else if (direction === 'prev') {
        slider.prepend(items[items.length - 1]);
    }
}

startAutoSlide();


slider.addEventListener('mouseover', stopAutoSlide);
slider.addEventListener('mouseout', startAutoSlide);
