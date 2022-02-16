
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

    // var appear = false;
    // var pagetop = $('.pagetop');
    // $(window).scroll(function () {
    //   if ($(this).scrollTop() > 70) {  
    //     if (appear == false) {
    //       appear = true;
    //       pagetop.stop().animate({
    //         'bottom': '33px' 
    //       }, 300); 
    //     }
    //   } else {
    //     if (appear) {
    //       appear = false;
    //       pagetop.stop().animate({
    //         'bottom': '-200px' 
    //       }, 300); 
    //     }
    //   }
    // });
    // pagetop.click(function () {
    //   $('body, html').animate({ scrollTop: 0 }, 300); 
    //   return false;
    // });
  
    //ハンバーガーメニュー
    $(".js-hamburger").click(function () {
      $(this).toggleClass("is-active");
  
      if ($(this).hasClass("is-active")) {
        $(".js-hamburger-nav").addClass("is-active");
      } else {
        $(".js-hamburger-nav").removeClass("is-active");
      }
    });
    $(".js-hamburger-nav a").click(function () {
      $(".js-hamburger-nav,.js-hamburger").removeClass("is-active");
    });
  
    //ヘッダー固定
    // var mainPos = $(".main-view").height();
  
    // $(window).scroll(function () {
    //   if ($(window).scrollTop() > mainPos) {
    //     $(".js-header").addClass("addColor");
    //   } else {
    //     $(".js-header").removeClass("addColor");
    //   }
    // });
  

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });


var searchItem = '.find__searchitem';   // 絞り込む項目を選択するエリア
var listItem = '.find__contents';   // 絞り込み対象のアイテム
var hideClass = 'is-hide';         // 絞り込み対象外の場合に付与されるclass名
var activeClass = 'is-active';     // 選択中のグループに付与されるclass名

$(function() {
  // 絞り込みを変更した時
  $(searchItem).on('click', function() {
    $(searchItem).removeClass(activeClass);
    var group = $(this).addClass(activeClass).data('group');
    search_filter(group);
  });
});

/**
 * リストの絞り込みを行う
 * @param {String} group data属性の値
 */
function search_filter(group) {
  // 非表示状態を解除
  $(listItem).removeClass(hideClass);
  // 値が空の場合はすべて表示
  if(group === '') {
    return;
  }
  // リスト内の各アイテムをチェック
  for (var i = 0; i < $(listItem).length; i++) {
    // アイテムに設定している項目を取得
    var itemData = $(listItem).eq(i).data('group');
    // 絞り込み対象かどうかを調べる
    if(itemData !== group) {
      $(listItem).eq(i).addClass(hideClass);
    }
  }
}
});

// var searchItem = '.search__item';   // 絞り込む項目を選択するエリア
// var listItem = '.works__card';   // 絞り込み対象のアイテム
// var hideClass = 'is-hide';         // 絞り込み対象外の場合に付与されるclass名
// var activeClass = 'is-active';     // 選択中のグループに付与されるclass名

// $(function() {
//   // 絞り込みを変更した時
//   $(searchItem).on('click', function() {
//     $(searchItem).removeClass(activeClass);
//     var group = $(this).addClass(activeClass).data('group');
//     search_filter(group);
//   });
// });

// /**
//  * リストの絞り込みを行う
//  * @param {String} group data属性の値
//  */
// function search_filter(group) {
//   // 非表示状態を解除
//   $(listItem).removeClass(hideClass);
//   // 値が空の場合はすべて表示
//   if(group === '') {
//     return;
//   }
//   // リスト内の各アイテムをチェック
//   for (var i = 0; i < $(listItem).length; i++) {
//     // アイテムに設定している項目を取得
//     var itemData = $(listItem).eq(i).data('group');
//     // 絞り込み対象かどうかを調べる
//     if(itemData !== group) {
//       $(listItem).eq(i).addClass(hideClass);
//     }
//   }
// };


