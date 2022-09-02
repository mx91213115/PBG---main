var windowHeight = $(window).innerHeight();

$(window).resize(function () {
  windowHeight = $(window).height();
  location.reload();
});
$(document).ready(function () {
  AOS.init({
    duration: 800,
  });
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
  // 手機影片隱藏 點擊背景反白
  if (check() == false) {
    $('video').hide();
    $('.item').addClass('active');
  }
  //平板點擊背景反白
  if (check() == 'pad') {
    $('.item').addClass('active');
  }
  // 電腦 滑鼠碰到 動畫
  if (check() == true) {
    $('.item').addClass('active_pc');
  }

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
});
