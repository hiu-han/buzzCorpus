$(document).ready(function () {
  const $body = $('html, body');

  const NOWON_CLASSNAME = 'now-on';

  $('.directInputClicker').on('click', function () {
    const $commuBox = $('#directInputCommu');

    $(this).addClass(NOWON_CLASSNAME);
    $commuBox.addClass(NOWON_CLASSNAME);

    const commuBoxYPos = $commuBox.offset().top;
    console.log(commuBoxYPos);

    $body.stop().animate({
      scrollTop: commuBoxYPos - 250
    }, 500);
  });


})