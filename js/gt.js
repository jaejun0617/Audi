function imageGallery(galleryId) {
    const gallery = document.getElementById(galleryId);
    const highlight = gallery.querySelector('.gallery-hightlight');
    const previews = gallery.querySelectorAll('.gt-preview img');

    previews.forEach((preview) => {
        preview.addEventListener('click', function () {
            const smallSrc = this.src;
            const bigSrc = smallSrc.replace('small', 'big');
            previews.forEach((preview) => preview.classList.remove('gt-active'));
            highlight.src = bigSrc;
            this.classList.add('gt-active');
        });
    });
}

// 각 이미지 갤러리에 대해 함수 호출
imageGallery('gallery1');
imageGallery('gallery2');
