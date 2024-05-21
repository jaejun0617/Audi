$(document).ready(function () {
  $(".first_context").children().css({
    margin: "20px",
  });

  $(".second_context").children().css({
    margin: "20px",
  });

  $(".forth_context").children().css({
    margin: "20px",
  });

  // 첫 페이지 로딩 시 글자 효과
  $(".first_context").addClass("show");

  var secondDivOffset = $("#company_second").offset().top;
  var windowHeight = $(window).height();

  $(window).scroll(function () {
    var scrollPos = $(window).scrollTop();

    if (scrollPos > secondDivOffset - windowHeight / 2) {
      $("#company_second img").css({
        opacity: "1",
        transform: "translateY(0)",
      });
      $(".second_context").css({
        opacity: "1",
        transform: "translateY(0)",
      });
    } else {
      $("#company_second img").css({
        opacity: "0",
        transform: "translateY(50px)",
      });
      $(".second_context").css({
        opacity: "0",
        transform: "translateY(50px)", // 초기 위치로 설정
      });
    }
  });
});
