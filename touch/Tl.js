$(document).ready(function() {
    var $menu = $('#menu'),
      $menulink = $('.menuBt');
    
    $menulink.click(function() {
      $menulink.toggleClass('active');
      $menu.toggleClass('active');
    })
    });

    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },speed: 2000,
      parallax: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }, autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });

 //Thumbs gallery loop swiper
var swiper3 = new Swiper(".thumbSlide", {
  direction: "vertical",
  loop: true,
  slidesPerView: 8,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var swiper4 = new Swiper(".mainSlide", {
  loop: true,
  navigation: {
    nextEl: ".mainSlide .swiper-button-next",
    prevEl: ".mainSlide .swiper-button-prev",
  },
  thumbs: {
    swiper: swiper3,
  },
}); 

var spot1 = $("header").offset().top;
  $("#m2").click(function () {
    $("html, body").animate({
      scrollTop: spot1
    }, 500);
  });


 

  var swiper = new Swiper(".blue", {
    autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        }
  });


  window.addEventListener('load', function (event) {
    AOS.init();
  });
  
