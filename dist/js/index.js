'use strict';

$(function () {
  var mySwiper = new Swiper('.swiper-container', {
    // 如果需要分页器
    pagination: '.swiper-pagination'
  });

  //回到顶部
  $('.to-top').click(function () {
    $('body,html').animate({
      scrollTop: 0
    });
  });
});