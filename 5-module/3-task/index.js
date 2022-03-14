function initCarousel() {

    let slideToShow = 0;
    let carouselInner = document.querySelector('.carousel__inner');
    let width = carouselInner.offsetWidth;
    let carouselArrowRight = document.querySelector('.carousel__arrow_right'); // правая кнопка
    let carouselArrowLeft = document.querySelector('.carousel__arrow_left'); //левая кнопка
    carouselArrowLeft.style.display = 'none';

    carouselArrowLeft.addEventListener('click', function() {
        slideToShow--;
        carouselInner.style.transform = `translateX(-${width * slideToShow}px)`;

        if (slideToShow === 0) {
            carouselArrowLeft.style.display = 'none';
        } else {
            carouselArrowRight.style.display = '';
        }

    });

    carouselArrowRight.addEventListener('click', function() {
        //console.log(width);
        slideToShow++;
        carouselInner.style.transform = `translateX(-${width * slideToShow}px)`;

        if (slideToShow === 3) {
            carouselArrowRight.style.display = 'none';
        } else {
            carouselArrowLeft.style.display = '';
        }

    });


}
