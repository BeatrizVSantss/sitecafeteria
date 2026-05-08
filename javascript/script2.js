
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {document.body.classList.toggle("show-mobile-menu");});
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

const swiper = new Swiper('.slider-container', {
    
    loop: true,
    spaceBetween: 40,
    slidesPerView: 3,
    centeredSlides: true,
        


    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

  
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
