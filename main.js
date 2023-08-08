$(function () {
  let windowHeight = $(window).height();
  let windowWidth = $(window).width();
  let catchPhraseWidth = $('#catchPhrase').outerWidth(true);
  let catchPhraseHeight = $('#catchPhrase').outerHeight(true);
  let titleWidth = $('#title').outerWidth(true);
  let titleHeight = $('#title').outerHeight(true);
  let aboutDetailParentHeight = $('#about-detail-parent').outerHeight(true);
  let aboutDetailHeight = $('#about-detail').outerHeight(true);
  let aboutDetailMarginTop = Math.max((aboutDetailParentHeight - aboutDetailHeight) / 2, 0);
  $('html, body').animate({ scrollTop: 0 }, '1');
  $('header').height(windowHeight);
  $('#catchPhrase').css({
    'top' : windowHeight / 2 - (catchPhraseHeight + titleHeight + 27) / 2,
    'left': - catchPhraseWidth
    });
  $('#title').css({
    'top' : windowHeight / 2 + (catchPhraseHeight + titleHeight + 27) / 2 - titleHeight,
    'left': - titleWidth
    });
  if (windowWidth > 750) {
    $('#about-detail').css('margin-top', aboutDetailMarginTop);
  }

  setTimeout(function(){
    $('#catchPhrase').css('opacity', 1).animate({'left': 0}, 2000);
  }, 1000);

  setTimeout(function(){
    $('#title').css('opacity', 1).animate({'left': 0}, 2000);
  }, 3000);

  $(window).scroll(function() {
    let scroll = $(this).scrollTop() + windowHeight;
    let serviceTop = $('#service').offset().top;
    let worksTop = $('#works').offset().top;
    let aboutTop = $('#about').offset().top;
    let linkTop = $('#link').offset().top;
    let naviWrapHeight = $('#navi-wrap').outerHeight(true);
    if (scroll > serviceTop + 80 && scroll <= worksTop + 80) {
      $('#service-wrap').addClass('appear');
    } else if (scroll > worksTop + 80 && scroll <= aboutTop + 80) {
      $('#works-wrap').addClass('appear');
    } else if (scroll > aboutTop + 80 && scroll <= linkTop + 80) {
      $('#about-wrap').addClass('appear');
    } else if (scroll > linkTop + 80) {
      $('#link-wrap').addClass('appear');
    }

    if (scroll < windowHeight * 2 - naviWrapHeight - 16) {
      $('#navi-wrap').removeClass('navi-fixed').addClass('navi-absolute');
    } else {
      $('#navi-wrap').removeClass('navi-absolute').addClass('navi-fixed');
    }  
  });

  // Worksのポートフォリオサイトのリンククリック時にページをリロード
  $('.PFsite').off('click').on('click', function() {
    window.location.reload();
  });

  // スクロールのアニメーション
  $('.navi-content').off('click').on('click', function() {
    let itemName = $(this).data('navi');
    let position = $('#' + itemName).offset().top;
    let currentpoition = $(window).scrollTop();
    let scrollTime = Math.abs(position - currentpoition);
    $('html, body').animate({scrollTop: position}, scrollTime / 2);
  });
});
