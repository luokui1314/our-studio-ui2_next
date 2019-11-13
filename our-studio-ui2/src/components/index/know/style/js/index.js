export default params => {
  $(function() {
    var timer = null;
    var num = 0;
    function loop() {
      if (num > 2) {
        num = 0;
      }
      $(".focus li")
        .eq(num)
        .stop()
        .fadeIn()
        .siblings()
        .fadeOut();
      $(".hot li")
        .eq(num)
        .addClass("xuanzhong")
        .siblings()
        .removeClass("xuanzhong");
      num++;
    }
    timer = setInterval(loop, 2000);
    $("#banner").hover(
      function() {
        clearInterval(timer);
        timer = null;
      },
      function() {
        num = $(this).index();
        timer = setInterval(loop, 2500);
      }
    );
    $("#banner .banner_right").click(function() {
      num++;
      if (num > 2) {
        num = 0;
      }
      $(".focus li")
        .eq(num)
        .stop()
        .fadeIn()
        .siblings()
        .fadeOut();
      $(".hot li")
        .eq(num)
        .addClass("xuanzhong")
        .siblings()
        .removeClass("xuanzhong");
    });
    $("#banner .banner_left").click(function() {
      num--;
      if (num < 0) {
        num = 2;
      }
      $(".focus li")
        .eq(num)
        .stop()
        .fadeIn()
        .siblings()
        .fadeOut();
      $(".hot li")
        .eq(num)
        .addClass("xuanzhong")
        .siblings()
        .removeClass("xuanzhong");
    });
    $(".hot li").click(function(e) {
      var xz = $(this).index();
      $(".focus li")
        .eq(xz)
        .stop()
        .fadeIn()
        .siblings()
        .fadeOut();
      $(".hot li")
        .eq(xz)
        .addClass("xuanzhong")
        .siblings()
        .removeClass("xuanzhong");
    });
  });
  function centering(x) {
    var myWidth = ($(x).width() * -1) / 2;
    var myHeight = ($(x).height() * -1) / 2;
    $(x).css({ "margin-left": myWidth + "px", "margin-top": myHeight + "px" });
  }
  centering(".html5_cont");
  centering(".fw_cont");
  centering(".ai_cont");
  centering(".js_cont");
  centering(".fl_cont");
  centering(".ps_cont");
  centering(".dw_cont");
  centering(".css3_cont");
  function xs(e) {
    $(e).mouseover(function() {
      var index = $(this).index();
      var x = $(this).attr("class");
      if (x == "switch_ui") {
        $(".moduleTwo_cont h3").html("UI作品");
      } else {
        if (x == "switch_wy") {
          $(".moduleTwo_cont h3").html("网页作品");
        } else {
          if (x == "switch_pm") {
            $(".moduleTwo_cont h3").html("平面作品");
          }
        }
      }
      $(this)
        .css("background-position", "-18px 0")
        .siblings()
        .css("background-position", "left top");
      $(".moduleTwo_cont ul li")
        .eq(index)
        .show()
        .siblings()
        .hide();
    });
  }
  xs(".switch_ui");
  xs(".switch_wy");
  xs(".switch_pm");
  function shade(i) {
    $(i).hover(
      function() {
        $(this)
          .children("a")
          .stop()
          .animate({ top: 0 }, 333);
      },
      function() {
        $(this)
          .children("a")
          .stop()
          .animate({ top: -247 }, 333);
      }
    );
  }
  shade(".ui_left_l div");
  shade(".ui_left_c div");
  shade(".ui_left_r div");
  function masked() {
    $(".Span").each(function(index, element) {
      $(element).prepend("<span></span>");
    });
    var myWidth;
    var myHeight;
    $(".Span").hover(
      function() {
        $(this)
          .children("img")
          .css({ opacity: 1 });
      },
      function() {
        $(this)
          .children("img")
          .css({ opacity: 0.5 });
      }
    );
    $(".model").click(function() {
      $(this)
        .stop()
        .slideToggle();
    });
    $(".Span").click(function() {
      $(".model")
        .children("img")
        .attr(
          "src",
          $(this)
            .children("img")
            .attr("src")
            .replace("img", "imgs")
        );
      $(".model")
        .stop()
        .slideToggle();
    });
  }
  masked();
  $(window).scroll(function(e) {
    if ($(window).scrollTop() > $(window).height() - 111) {
      $("#step").show();
    } else {
      $("#step").hide();
    }
  });
  function myStep(o) {
    $(o).click(function(e) {
      $(this)
        .children("span")
        .css("backgroundPosition", "-36px 0");
      $("body,html").animate({ scrollTop: coordinate[$(this).index()] }, 1000);
      $(this)
        .siblings()
        .children("span")
        .css("backgroundPosition", "-70px 0");
    });
  }
  myStep("#step ul li");
  var coordinate = [0, 555, 1267, 1979, 2689];
  $(window).scroll(function(e) {
    var that_Top = $(window).scrollTop();
    $("#step ul li").each(function(index, element) {
      if (that_Top >= coordinate[index] - 200) {
        $(this)
          .children("span")
          .css("backgroundPosition", "-36px 0");
        $(this)
          .siblings()
          .children("span")
          .css("backgroundPosition", "-70px 0");
      }
    });
  });
};
