$(function () {
  // navbar changes
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 100) {
      $('#navbar').addClass('notransparent');
    }
    else {
      $('#navbar').removeClass('notransparent');
    }
  });

  // circle progress
  $(".circle").circleProgress({
    Angle: -Math.PI / 2,
    fill: "#0575e6"
  }).on('circle-animation-progress', function (event, progress, stepValue) {
    $(this).find('span').html(Math.round(stepValue * 100) + "%");
  });

  // validation form
  $(function () {
    $("#ContactForm").validate();
  });
});