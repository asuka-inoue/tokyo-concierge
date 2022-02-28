
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
  
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

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

  $(document).on('click', 'a[href*="#"]', function () {
    let time = 100;
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - 92;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });
  

  $('.faq__searchitem').click(function() {
    var index = $('.faq__searchitem').index(this);
    $('.faq__searchitem, .faq__contents').removeClass('active');
    $(this).addClass('active');
    $('.faq__tabbox .faq__contents').eq(index).addClass('active');
  });



function GethashID (hashIDName){
  if(hashIDName){
    //タブ設定
    $('.main__tabsearchitem').find('a').each(function() { //タブ内のaタグ全てを取得
      var idName = $(this).attr('href'); //タブ内のaタグのリンク名（例）#lunchの値を取得 
      if(idName == hashIDName){ //リンク元の指定されたURLのハッシュタグ（例）http://example.com/#lunch←この#の値とタブ内のリンク名（例）#lunchが同じかをチェック
        var parentElm = $(this).parent(); //タブ内のaタグの親要素（li）を取得
        $('.main__tabsearchitem').removeClass("active"); //タブ内のliについているactiveクラスを取り除き
        $(parentElm).addClass("active"); //リンク元の指定されたURLのハッシュタグとタブ内のリンク名が同じであれば、liにactiveクラスを追加
        //表示させるエリア設定
        $(".main__tabcontents").removeClass("is-active"); //もともとついているis-activeクラスを取り除き
        $(hashIDName).addClass("is-active"); //表示させたいエリアのタブリンク名をクリックしたら、表示エリアにis-activeクラスを追加 
      }
    });
  }
}

//タブをクリックしたら
$('.main__tabsearchitem a').on('click', function() {
  var idName = $(this).attr('href'); //タブ内のリンク名を取得  
  GethashID (idName);//設定したタブの読み込みと
  return false;//aタグを無効にする
});


$(function(){
  var $btn = $('.concept__tag[data-filter]'),
      $list = $('.concept__card[data-category]');
  
  $btn.on('click', function() {
    $btn.removeClass('is-active');
      $(this).addClass('is-active');
    
    var $btnCat = $(this).attr('data-filter');
    $list.removeClass('is-active');


    if ($btnCat == '') {
      $list.show().addClass('is-active');
    } else {
      $list.hide().removeClass('is-active').filter('[data-category = "' + $btnCat + '"]').show().addClass('is-active');
    }
    return false;
  });
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

// swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 17,
  centeredSlides: true,
  loop: true,
  loopedSlides: 8,
  slideToClickedSlide: true,
  autoplay: {
    delay: 3000, //3秒後に次の画像に代わる
    },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    // 768px以上の場合
    768: {
      slidesPerView: 2.2,
    }
  }
});

});

$(function() {
 
//   // チェックボックスをチェックしたら発動
  $('input[name="station"]').change(function() {
 
//     // prop()でチェックの状態を取得
    var check1 = $('#check1').prop('checked');
    var check2 = $('#check2').prop('checked');
    var check3 = $('#check3').prop('checked');
    var check4 = $('#check4').prop('checked');
    var check5 = $('#check5').prop('checked');
    var check6 = $('#check6').prop('checked');
    var check7 = $('#check7').prop('checked');
    var check8 = $('#check8').prop('checked');
    var check9 = $('#check9').prop('checked');
    var check10 = $('#check10').prop('checked');
    var check11 = $('#check11').prop('checked');
    var check12 = $('#check12').prop('checked');
    var check13 = $('#check13').prop('checked');
    var check14 = $('#check14').prop('checked');
    var check15 = $('#check15').prop('checked');
    var check16 = $('#check16').prop('checked');
    var check17 = $('#check17').prop('checked');
    var check18 = $('#check18').prop('checked');
    var check19 = $('#check19').prop('checked');
    var check20 = $('#check20').prop('checked');

    if (check1) {
      // propでチェックと出力
      $('#popup1').css({'display':'block'})
    } else {
      // テキストをリセット
      $('#popup1').css({'display':'none'})
    }
    if (check2) {
      // propでチェックと出力
      $('#popup2').css({'display':'block'})
    } else {
      // テキストをリセット
      $('#popup2').css({'display':'none'})
    }
    if (check3) {
      // propでチェックと出力
      $('#popup3').css({'display':'block'})
    } else {
      // テキストをリセット
      $('#popup3').css({'display':'none'})
    }
    if (check4) {
      // propでチェックと出力
      $('#popup4').css({'display':'block'})
    } else {
      // テキストをリセット
      $('#popup4').css({'display':'none'})
    }
    if (check5) {
      // propでチェックと出力
      $('#popup5').css({'display':'block'})
    } else {
      // テキストをリセット
      $('#popup5').css({'display':'none'})
    }
    if (check6) {
      // propでチェックと出力
      $('#popup6').css({'display':'block'})
    } else {
      // テキストをリセット
      $('#popup6').css({'display':'none'})
    }
    if (check7) {
      // propでチェックと出力
      $('#popup7').css({'display':'block'})
    } else {
      // テキストをリセット
      $('#popup7').css({'display':'none'})
    }
    if (check8) {
      // propでチェックと出力
      $('#popup8').css({'display':'block'})
    } else {
      // テキストをリセット
      $('#popup8').css({'display':'none'})
    }
    if (check9) {
      // propでチェックと出力
      $('#popup9').css({'display':'block'})
    } else {
      // テキストをリセット
      $('#popup9').css({'display':'none'})
    }
    if (check10) {
      // propでチェックと出力
      $('#popup10').css({'display':'block'})
    } else {
      // テキストをリセット
      $('#popup10').css({'display':'none'})
    }
    if (check11) {
      // propでチェックと出力
      $('#popup11').css({'display':'block'})
    } else {
      // テキストをリセット
      $('#popup11').css({'display':'none'})
    }
    if (check12) {
      // propでチェックと出力
      $('#popup12').css({'display':'block'})
    } else {
      // テキストをリセット
      $('#popup12').css({'display':'none'})
    }
    if (check13) {
      // propでチェックと出力
      $('#popup13').css({'display':'block'})
    } else {
      // テキストをリセット
      $('#popup13').css({'display':'none'})
    }
    if (check14) {
      // propでチェックと出力
      $('#popup14').css({'display':'block'})
    } else {
      // テキストをリセット
      $('#popup14').css({'display':'none'})
    }
    if (check15) {
      // propでチェックと出力
      $('#popup15').css({'display':'block'})
    } else {
      // テキストをリセット
      $('#popup15').css({'display':'none'})
    }
    if (check16) {
      // propでチェックと出力
      $('#popup16').css({'display':'block'})
    } else {
      // テキストをリセット
      $('#popup16').css({'display':'none'})
    }
    if (check17) {
      // propでチェックと出力
      $('#popup17').css({'display':'block'})
    } else {
      // テキストをリセット
      $('#popup17').css({'display':'none'})
    }
    if (check18) {
      // propでチェックと出力
      $('#popup18').css({'display':'block'})
    } else {
      // テキストをリセット
      $('#popup18').css({'display':'none'})
    }
    if (check19) {
      // propでチェックと出力
      $('#popup19').css({'display':'block'})
    } else {
      // テキストをリセット
      $('#popup19').css({'display':'none'})
    }
    if (check20) {
      // propでチェックと出力
      $('#popup20').css({'display':'block'})
    } else {
      // テキストをリセット
      $('#popup20').css({'display':'none'})
    }
  });
});


//アコーディオンをクリックした時の動作
$('.room-information__info').on('click', function() {//タイトル要素をクリックしたら
  $('.room-information__itembody').slideUp(500);//クラス名.boxがついたすべてのアコーディオンを閉じる
    
  var findElm = $(this).next(".room-information__itembody");//タイトル直後のアコーディオンを行うエリアを取得
    
  if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
    $(this).removeClass('close');//クラス名を除去    
  }else{//それ以外は
    $('.close').removeClass('close'); //クラス名closeを全て除去した後
    $(this).addClass('close');//クリックしたタイトルにクラス名closeを付与し
    $(findElm).slideDown(500);//アコーディオンを開く
  }
});

//ページが読み込まれた際にopenクラスをつけ、openがついていたら開く動作※不必要なら下記全て削除
$(window).on('load', function(){
  $('.js-accordion li:first-of-type section').addClass("open"); //accordion-areaのはじめのliにあるsectionにopenクラスを追加
  $(".open").each(function(index, element){ //openクラスを取得
    var Title =$(element).children('.room-information__info'); //openクラスの子要素のtitleクラスを取得
    $(Title).addClass('close');       ///タイトルにクラス名closeを付与し
    var Box =$(element).children('.room-information__itembody'); //openクラスの子要素boxクラスを取得
    $(Box).slideDown(500);          //アコーディオンを開く
  });
});