$( document ).ready(function() {
    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      initialSlide:0,      
      direction: 'horizontal',
      effect: 'slide',  
      loop: true,
      spaceBetween:30,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',  
      slidesPerView:2  
    })
});