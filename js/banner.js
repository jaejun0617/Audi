const slider = document.querySelector('.ul_slider');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let slideInterval;

// 슬라이드 이벤트 함수
function slide() {
    const items = document.querySelectorAll('.item-slider');
    slider.append(items[0]);
}

// 다음 버튼 클릭 이벤트
nextBtn.addEventListener('click', () => {
    slide();
    clearInterval(slideInterval); // 자동 슬라이드 중지
});

// 이전 버튼 클릭 이벤트
prevBtn.addEventListener('click', () => {
    const items = document.querySelectorAll('.item-slider');
    slider.prepend(items[items.length - 1]);
    clearInterval(slideInterval); // 자동 슬라이드 중지
});

slideInterval = setInterval(slide, 5000);

document.addEventListener('mouseover', () => {
    clearInterval(slideInterval);
});

document.addEventListener('mouseout', () => {
    slideInterval = setInterval(slide, 2000);
});
