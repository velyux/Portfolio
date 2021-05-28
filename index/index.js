var menu = ['Home','work1', 'work2', 'work3', 'contact'];
var swiper = new Swiper('.horizon', {
    slidesPerView: 1,
    mousewheel: true,
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
    },
    pagination: {
        el: '.swiper-pagination',
              clickable: true,
        renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (menu[index]) + '</span>';
        },
    },
});

//로고 클릭시 스와이퍼 원하는 페이지로 이동
jQuery(document).ready(function(){
    $('.logo').click(function(){
        swiper.slideTo(0);
        //index넘버링으로 처리
    });
});


$(document).ready(function(){
// $(".slidetab .bg").hide().eq(0).show();
$(".slidetab li").click(function(){
    $(this).addClass('on').siblings().removeClass('on');
    $("#"+$(this).data('id')).slideDown(1000)
    .siblings('.bg').slideUp(500);
   });
  });


  $(document).ready(function(){
   
    $(".tabV ul li").click(function(){
      $(this).addClass('on').siblings().removeClass('on');
      $("#"+$(this).data('id')).addClass('on').siblings().removeClass('on');
 
      $(this).parent().siblings().addClass('off');
  
      $("#"+$(this).data('id')).parent().removeClass('off').find('.close').addClass('on');
 
    });
    
    $(".close").click(function(){
      $(".close").removeClass('on');
      $(".tabV, ul, .content").children().removeClass('on off');
    });
});


document.addEventListener('mousemove', function(e) {
    let body = document.querySelector('.swiper-wrapper');
    let circle = document.createElement('span');
    let x = e.offsetX;
    let y = e.offsetY;
    circle.style.left = x + "px";
    circle.style.top = y + "px";
    let size = Math.random() * 100;
    circle.style.width = 20 + size + "px";
    circle.style.height = 20 + size + "px";
    body.appendChild(circle);
    setTimeout(function() {
      circle.remove();
    }, 1800);
  });