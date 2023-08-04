$(function () {
  // ヘッダーのタイトルクリック時にページをリロード
  $('.title').off('click').on('click', function() {
    window.location.reload();
  });

  // Worksのポートフォリオサイトのリンクとフッターのタイトルクリック時にリロード後トップまでスクロール
  $('.PFsite ,.footer-title').off('click').on('click', function() {
    window.location.reload();
    $(window).scrollTop(0);
  });

  // スクロールのアニメーション
  $('.navi-content').off('click').on('click', function() {
    let itemName = $(this).data('navi');
    let position = $('.' + itemName).offset().top;
    let currentpoition = $(window).scrollTop();
    let scrollTime = Math.abs(position - currentpoition);
    $('html, body').animate({scrollTop: position}, scrollTime / 2);
  });
});
