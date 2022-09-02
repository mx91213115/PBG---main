var windowHeight = $(window).innerHeight();

$(window).resize(function () {
  windowHeight = $(window).height();
  location.reload();
});

$(document).ready(function () {
  //true表示為pc，false表示為手機,'pad'表示為平板
  function check() {
    var userAgentInfo = navigator.userAgent;
    var Agents = new Array('Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod');
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
        flag = false;
        break;
      }
    }
    if (v >= 4 && v < 6) {
      flag = 'pad';
    }
    //console.log(v, flag);
    return flag;
  }
  check();
  // 手機
  if (check() == false) {
    $('video').hide();
  }
  // 電腦 滑鼠碰到 動畫
  if (check() == true) {
    $('.circle').addClass('active');
  }
  // 進入時side_link設定
  function side_link() {
    if (window.location.hash == '#born-1') {
      $('.side_link_wrapper > a:nth-child(1)').addClass('active');
    } else {
      $('.side_link_wrapper > a:nth-child(1)').removeClass('active');
    }
    if (window.location.hash == '#born-2') {
      $('.side_link_wrapper > a:nth-child(2)').addClass('active');
    } else {
      $('.side_link_wrapper > a:nth-child(2)').removeClass('active');
    }
    if (window.location.hash == '#born-3') {
      $('.side_link_wrapper > a:nth-child(3)').addClass('active');
    } else {
      $('.side_link_wrapper > a:nth-child(3)').removeClass('active');
    }
    if (window.location.hash == '#born-4') {
      $('.side_link_wrapper > a:nth-child(4)').addClass('active');
    } else {
      $('.side_link_wrapper > a:nth-child(4)').removeClass('active');
    }
    if (window.location.hash == '#born-5') {
      $('.side_link_wrapper > a:nth-child(5)').addClass('active');
    } else {
      $('.side_link_wrapper > a:nth-child(5)').removeClass('active');
    }
  }
  side_link();
  //導覽列
  $('.nav_icon').click(function () {
    $(this).toggleClass('open');
    $('.navbar').toggleClass('toggle');
    $('.dot_bottom').toggleClass('active');
  });
  $('.nav-item').click(function () {
    $('.nav-item').not(this).children('.nav').addClass('active');
    $('.nav-item').not(this).removeClass('color');
    $(this).children('.nav').toggleClass('active');
    $(this).toggleClass('color');
  });
  const pageable = new Pageable('.all', {
    freeScroll: true,
    pips: false,
  });
  // 滾動時桌機side_link設定
  pageable.on('scroll.end', data => {
    if (data.index == 0) {
      $('.side_link_wrapper > a:nth-child(1)').addClass('active');
    } else {
      $('.side_link_wrapper > a:nth-child(1)').removeClass('active');
    }
    if (data.index == 1) {
      $('.side_link_wrapper > a:nth-child(2)').addClass('active');
    } else {
      $('.side_link_wrapper > a:nth-child(2)').removeClass('active');
    }
    if (data.index == 2) {
      $('.side_link_wrapper > a:nth-child(3)').addClass('active');
    } else {
      $('.side_link_wrapper > a:nth-child(3)').removeClass('active');
    }
    if (data.index == 3) {
      $('.side_link_wrapper > a:nth-child(4)').addClass('active');
    } else {
      $('.side_link_wrapper > a:nth-child(4)').removeClass('active');
    }
    if (data.index == 4) {
      $('.side_link_wrapper > a:nth-child(5)').addClass('active');
    } else {
      $('.side_link_wrapper > a:nth-child(5)').removeClass('active');
    }
  });
  // 滾動時手機side_link設定
  $(window).scroll(function () {
    var Top = $('.navbar').offset().top;
    var sub1 = Math.trunc($('.sub:nth-child(1)').offset().top - 100);
    var sub2 = Math.trunc($('.sub:nth-child(2)').offset().top - 100);
    var sub3 = Math.trunc($('.sub:nth-child(3)').offset().top - 100);
    var sub4 = Math.trunc($('.sub:nth-child(4)').offset().top - 100);
    var sub5 = Math.trunc($('.sub:nth-child(5)').offset().top - 100);
    //sub1
    if (Top <= sub1 || Top < sub2) {
      $('#dot_m1 > span, .side_link_wrapper > a:nth-child(1)').addClass('active');
    } else {
      $('#dot_m1 > span, .side_link_wrapper > a:nth-child(1)').removeClass('active');
    }
    //sub2
    if (Top >= sub2 && Top < sub3) {
      $('#dot_m2 > span, .side_link_wrapper > a:nth-child(2)').addClass('active');
    } else {
      $('#dot_m2 > span, .side_link_wrapper > a:nth-child(2)').removeClass('active');
    }
    //sub3
    if (Top >= sub3 && Top < sub4) {
      $('#dot_m3 > span, .side_link_wrapper > a:nth-child(3)').addClass('active');
    } else {
      $('#dot_m3 > span, .side_link_wrapper > a:nth-child(3)').removeClass('active');
    }
    //sub4
    if (Top >= sub4 && Top < sub5) {
      $('#dot_m4 > span, .side_link_wrapper > a:nth-child(4)').addClass('active');
    } else {
      $('#dot_m4 > span, .side_link_wrapper > a:nth-child(4)').removeClass('active');
    }
    //sub5
    if (Top >= sub5) {
      $('#dot_m5 > span, .side_link_wrapper > a:nth-child(5)').addClass('active');
    } else {
      $('#dot_m5 > span, .side_link_wrapper > a:nth-child(5)').removeClass('active');
    }
  });
  //手機scroll消失
  $(window).scroll(
    {
      previousTop: 0,
    },
    function () {
      let currentTop = $(window).scrollTop();
      if (currentTop < this.previousTop) {
        $('.scroll_wrapper_mobile').fadeIn(200);
      } else {
        $('.scroll_wrapper_mobile').fadeOut(200);
      }
      this.previousTop = currentTop;
    }
  );
  $('.open').click(function () {
    $(this).parent('.born_bg,.nft_bg').animate({ maxHeight: '2000px' }, 1000, 'swing');
    $(this).animate({ top: '100%' }, 'swing');
    $(this).animate({ opacity: '0%' }, 500, 'swing');
    $(this).toggleClass('active');
  });
  // one page 取消
  if (window.matchMedia('(max-width: 991.98px)').matches) {
    pageable.destroy();
  }
});
