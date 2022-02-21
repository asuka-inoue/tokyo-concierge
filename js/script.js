
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


// var searchItem = '.find__searchitem';   // 絞り込む項目を選択するエリア
// var listItem = '.find__contents';   // 絞り込み対象のアイテム
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
// }


//任意のタブにURLからリンクするための設定
function GethashID (hashIDName){
  if(hashIDName){
    //タブ設定
    $('.faq__searchitem').find('a').each(function() { //タブ内のaタグ全てを取得
      var idName = $(this).attr('href'); //タブ内のaタグのリンク名（例）#lunchの値を取得 
      if(idName == hashIDName){ //リンク元の指定されたURLのハッシュタグ（例）http://example.com/#lunch←この#の値とタブ内のリンク名（例）#lunchが同じかをチェック
        var parentElm = $(this).parent(); //タブ内のaタグの親要素（li）を取得
        $('.faq__searchitem').removeClass("active"); //タブ内のliについているactiveクラスを取り除き
        $(parentElm).addClass("active"); //リンク元の指定されたURLのハッシュタグとタブ内のリンク名が同じであれば、liにactiveクラスを追加
        //表示させるエリア設定
        $(".faq__contents").removeClass("is-active"); //もともとついているis-activeクラスを取り除き
        $(hashIDName).addClass("is-active"); //表示させたいエリアのタブリンク名をクリックしたら、表示エリアにis-activeクラスを追加 
      }
    });
  }
}

//タブをクリックしたら
$('.faq__searchitem a').on('click', function() {
  var idName = $(this).attr('href'); //タブ内のリンク名を取得  
  GethashID (idName);//設定したタブの読み込みと
  return false;//aタグを無効にする
});


// 上記の動きをページが読み込まれたらすぐに動かす
$(window).on('load', function () {
    $('.faq__searchitem:first-of-type').addClass("active"); //最初のliにactiveクラスを追加
    $('#search1').addClass("is-active"); //最初の.areaにis-activeクラスを追加
  var hashName = location.hash; //リンク元の指定されたURLのハッシュタグを取得
  GethashID (hashName);//設定したタブの読み込み
});

var searchItem = '.staff-blog__searchitem';   // 絞り込む項目を選択するエリア
var listItem = '.staff-blog__card';   // 絞り込み対象のアイテム
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

var show = 3; //最初に表示する件数
var num = 3;  //clickごとに表示したい件数
var contents = '.room__content'; // 対象のlist
$(contents + ':nth-child(n + ' + (show + 1) + ')').addClass('is-hidden');
$('.room__more').on('click', function () {
  $(contents + '.is-hidden').slice(0, num).removeClass('is-hidden');
  if ($(contents + '.is-hidden').length == 0) {
    $('.more').fadeOut();
  }
});

});