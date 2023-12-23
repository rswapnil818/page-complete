

 $(document).ready(function(){
   $('.sub-btn').click(function(){

       $(this).next('.sub-menu').slideToggle();
       $(this).find('.dropdown1').toggleClass('rotate');
   });

   //jquary for expand and collapse the sidebar
   $('.menu-btn').click(function(){
       $('.side-bar').addClass('active');
       $('.menu-btn').css("visibility","hidden");
   });

   $('.close-btn').click(function(){
       $('.side-bar').removeClass('active');
       $('.menu-btn').css("visibility","visible");
  
  
   });
});
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    grabCursor:true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets:true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

breakpoints:{
  500:{
    slidesPerView:1
  },
  900:{
    slidesPerView:1
  },
  968:{
    slidesPerView:1
  },
}

});
