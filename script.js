document.addEventListener("DOMContentLoaded", function() {
    new Swiper(".similar-goods", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 1,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
})