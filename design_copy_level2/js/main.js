$(function () {
  $('#slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 2000,
    dots: true,
    // 以下矢印の変更（CSSで見た目を変更する）
    prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    nextArrow: '<button class="slide-arrow next-arrow"></button>'
  });
    

});