let isHidden = true;
const eventContainer = document.querySelector('.event-container img');

function toggleBoxes() {
    const left = document.querySelectorAll('.event_left');
    const right = document.querySelectorAll('.event_right');
    left.forEach((left) => {
        left.classList.toggle('show');
    });
    right.forEach((right) => {
        right.classList.toggle('show');
    });
    isHidden = !isHidden;

    if (isHidden) {
        eventContainer.style.opacity = '1';
    } else {
        eventContainer.style.opacity = '0.4';
    }
}
