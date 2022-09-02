var windowWidth = $(window).width();

$(window).resize(function () {
  windowWidth = $(window).width();
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
  // 網頁進入時dot_link設定
  function dotLink() {
    if (window.location.hash == '#index-1' || window.location.hash == '') {
      $('#dot1').addClass('active');
    } else {
      $('#dot1').removeClass('active');
    }
    if (window.location.hash == '#index-2') {
      $('#dot2').addClass('active');
    } else {
      $('#dot2').removeClass('active');
    }
    if (window.location.hash == '#index-3') {
      $('#dot3').addClass('active');
    } else {
      $('#dot3').removeClass('active');
    }
    if (window.location.hash == '#index-4') {
      $('#dot4').addClass('active');
    } else {
      $('#dot4').removeClass('active');
    }
    if (window.location.hash == '#index-5') {
      $('.loading-bar--progress>span').addClass('animate');
      $('#dot5').addClass('active');
    } else {
      $('#dot5').removeClass('active');
      $('#dot5').removeClass('active');
    }
  }
  dotLink();
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
  // one page
  const pageable = new Pageable('.all', {
    freeScroll: true,
    orientation: 'horizontal',
    pips: false,
  });
  pageable.on('scroll.end', data => {
    if (data.index == 0) {
      $('#dot1').addClass('active');
    } else {
      $('#dot1').removeClass('active');
    }
    if (data.index == 1) {
      $('#dot2').addClass('active');
    } else {
      $('#dot2').removeClass('active');
    }
    if (data.index == 2) {
      $('#dot3').addClass('active');
    } else {
      $('#dot3').removeClass('active');
    }
    if (data.index == 3) {
      $('#dot4').addClass('active');
    } else {
      $('#dot4').removeClass('active');
    }
    if (data.index == 4) {
      $('.loading-bar--progress>span').addClass('animate');
      $('#dot5').addClass('active');
      $('.scroll_wrapper').fadeOut(200);
    } else {
      $('.loading-bar--progress>span').removeClass('animate');
      $('#dot5').removeClass('active');
      $('.scroll_wrapper').fadeIn(200);
    }
  });
  //按鈕跳下一頁
  $('.scroll_wrapper').click(function () {
    pageable.next();
  });
  //手機滑動圖示消失
  $(window).scroll({ previousTop: 0 }, function () {
    let currentTop = $(window).scrollTop();
    if (currentTop < this.previousTop) {
      $('.scroll_wrapper_mobile').fadeIn(200);
    } else {
      $('.scroll_wrapper_mobile').fadeOut(200);
    }
    this.previousTop = currentTop;
  });
  // 滾動時按鈕改變
  $(window).scroll(function () {
    var Top = $('.navbar').offset().top;
    var sub1 = Math.trunc($('.index_sub:nth-child(1)').offset().top - 100);
    var sub2 = Math.trunc($('.index_sub:nth-child(2)').offset().top - 100);
    var sub3 = Math.trunc($('.index_sub:nth-child(3)').offset().top - 100);
    var sub4 = Math.trunc($('.index_sub:nth-child(4)').offset().top - 100);
    var sub5 = Math.trunc($('.index_sub:nth-child(5)').offset().top - 100);
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
      $('.loading-bar--progress>span').addClass('animate');
      $('#dot_m5 > span, .side_link_wrapper > a:nth-child(5)').addClass('active');
    } else {
      $('.loading-bar--progress>span').removeClass('animate');
      $('#dot_m5 > span, .side_link_wrapper > a:nth-child(5)').removeClass('active');
    }
  });
  // 停止one page 更改html
  if (window.matchMedia('(max-width: 991.98px)').matches) {
    pageable.destroy();
    $('.open').click(function () {
      $(this).parent('.born_bg,.nft_bg').animate({ maxHeight: '2000px' }, 1000, 'swing');
      $(this).animate({ top: '100%' }, 'swing');
      $(this).animate({ opacity: '0%' }, 500, 'swing');
    });
    // 更改順序
    $('.index_1 .col-xl-auto').html(`
    <h2 class="index_title_brown">畢加索人工智慧加密圖像</h2>
    <h2 class="index_title_s">
    <span class="brown">P</span>icasso
    <br />
    <span class="brown">B</span>oys &
    <br />
    <span class="brown">G</span>irls NFT
  </h2>`);
    $('.index_1 .detail_wrapper .index_title_brown').hide();
  }
});
