$(function () {
  theaMsForm();

  var mySwiper = new Swiper('.swiper-container', {
    // 如果需要分页器
    pagination: '.swiper-pagination',
  });

  //回到顶部
  $('.to-top').click(function () {
    $('body,html').animate({
      scrollTop: 0
    });
  });

  // 点击 免费试听 预约试听弹窗 显示
  $('.appoint-btn').click(function () {
    $('.mask').show();
    $('.appoint-popup').show();
  });

  $('.close').click(function () {
    $('.mask').hide();
    $('.appoint-popup').hide();
  });

  // ele: 目标元素, c: 关闭按钮, f: 第一次是多少毫秒显示,
  // a: 第二次是第一次之后多少毫秒显示, n: 一共显示多少次, m: 遮罩层
  function popupHandle(ele, c, f, a, n, m) {
    var $par = $(ele);
    var $num = 1;
    var $m = $(m);
    popupTc(f);
    $(c).click(function () {
      $par.hide();
      $m.hide();
      if ($num < n) {
        popupTc(a);
      }
      $num++;
    });

    function popupTc(d) {
      setTimeout(function () {
        $par.fadeIn(300);
        $m.fadeIn(300);
      }, d);
    }
  }

  // PC 端才执行
  if($(document).width() >= 1366){
    popupHandle('.footer-fixed', '.footer-fixed .close', 15000, 30000, 2, '.footer-fixed-site');
  }
  $('.teachers .thead li').each(function (index) {
    $(this).mouseenter(function () {
      $(this).addClass('active').siblings().removeClass('active');
      $($('.teachers .tbody-item')[index]).addClass('active').siblings().removeClass('active');
    });
  });

});