
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
  
  // $(window).resize(function(){
    $(window).on('load', function(){
    //windowの幅をxに代入
    var x = $(window).width();
    //windowの分岐幅をyに代入
    var y = 767;

    if (x <= y) {
      $('.main__tabsearchitem').removeClass('active');
        $('.main__tabcontents').removeClass('is-active');
    }else{
      return false;
    }
  });

function GethashID (hashIDName){
  if(hashIDName){
    //タブ設定
    $('.main__tabsearchitem').find('a').each(function() { //タブ内のaタグ全てを取得
      var idName = $(this).attr('href'); //タブ内のaタグのリンク名（例）#lunchの値を取得 
      if(idName == hashIDName){ //リンク元の指定されたURLのハッシュタグ
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
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
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


//アコーディオンをクリックした時の動作
$('.room-information__info').on('click', function() {//タイトル要素をクリックしたら
  $('.room-information__itembody').slideUp(400);//クラス名.boxがついたすべてのアコーディオンを閉じる
    
  var findElm = $(this).next(".room-information__itembody");//タイトル直後のアコーディオンを行うエリアを取得
    
  if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
    $(this).removeClass('close');//クラス名を除去    
  }else{//それ以外は
    $('.close').removeClass('close'); //クラス名closeを全て除去した後
    $(this).addClass('close');//クリックしたタイトルにクラス名closeを付与し
    $(findElm).slideDown(400);//アコーディオンを開く
  }
});

//ページが読み込まれた際にopenクラスをつけ、openがついていたら開く動作※不必要なら下記全て削除
$(window).on('load', function(){
  $('.js-accordion li:first-of-type section').addClass("open"); //accordion-areaのはじめのliにあるsectionにopenクラスを追加
  $(".open").each(function(index, element){ //openクラスを取得
    var Title =$(element).children('.room-information__info'); //openクラスの子要素のtitleクラスを取得
    $(Title).addClass('close');       ///タイトルにクラス名closeを付与し
    var Box =$(element).children('.room-information__itembody'); //openクラスの子要素boxクラスを取得
    $(Box).slideDown(400);          //アコーディオンを開く
  });
});

$(function() {
 
  $('.js-close').click(function() {
 
    // もしチェックが入っていたら
    if ($('input[name="pop-up"]').prop('checked')) {
 
      // チェックを外す
      $('input[name="pop-up"]').prop('checked', false);
 
    // もしチェックが外れていたら
    } else {
 
      // チェックを入れる
      $('input[name="pop-up"]').prop('checked', true);
    }
 
  });
});

$(function() {
 
  $('.js-close2').click(function() {
 
    // もしチェックが入っていたら
    if ($('input[name="pop-up2"]').prop('checked')) {
 
      // チェックを外す
      $('input[name="pop-up2"]').prop('checked', false);
 
    // もしチェックが外れていたら
    } else {
 
      // チェックを入れる
      $('input[name="pop-up2"]').prop('checked', true);
    }
 
  });
});

$(function() {
  // 「全選択」する
  $('#allstation1').on('click', function() {
    $("input[name='station1']").prop('checked', this.checked);
  });

  // 「全選択」以外のチェックボックスがクリックされたら、
  $("input[name='station1']").on('click', function() {
    if ($('#popup1 :checked').length == $('#popup1 :input').length) {
      // 全てのチェックボックスにチェックが入っていたら、「全選択」 = checked
      $('#allstation1').prop('checked', true);
    } else {
      // 1つでもチェックが入っていたら、「全選択」 = checked
      $('#allstation1').prop('checked', false);
    }
  });
});

$(function() {
  // 「全選択」する
  $('#allstation2').on('click', function() {
    $("input[name='station2']").prop('checked', this.checked);
  });

  // 「全選択」以外のチェックボックスがクリックされたら、
  $("input[name='station2']").on('click', function() {
    if ($('#popup2 :checked').length == $('#popup2 :input').length) {
      // 全てのチェックボックスにチェックが入っていたら、「全選択」 = checked
      $('#allstation2').prop('checked', true);
    } else {
      // 1つでもチェックが入っていたら、「全選択」 = checked
      $('#allstation2').prop('checked', false);
    }
  });
});

$(function() {
  // 「全選択」する
  $('#allstation3').on('click', function() {
    $("input[name='station3']").prop('checked', this.checked);
  });

  // 「全選択」以外のチェックボックスがクリックされたら、
  $("input[name='station3']").on('click', function() {
    if ($('#popup3 :checked').length == $('#popup3 :input').length) {
      // 全てのチェックボックスにチェックが入っていたら、「全選択」 = checked
      $('#allstation3').prop('checked', true);
    } else {
      // 1つでもチェックが入っていたら、「全選択」 = checked
      $('#allstation3').prop('checked', false);
    }
  });
});
$(function() {
  // 「全選択」する
  $('#allstation4').on('click', function() {
    $("input[name='station4']").prop('checked', this.checked);
  });

  // 「全選択」以外のチェックボックスがクリックされたら、
  $("input[name='station4']").on('click', function() {
    if ($('#popup4 :checked').length == $('#popup4 :input').length) {
      // 全てのチェックボックスにチェックが入っていたら、「全選択」 = checked
      $('#allstation4').prop('checked', true);
    } else {
      // 1つでもチェックが入っていたら、「全選択」 = checked
      $('#allstation4').prop('checked', false);
    }
  });
});
$(function() {
  // 「全選択」する
  $('#allstation5').on('click', function() {
    $("input[name='station5']").prop('checked', this.checked);
  });

  // 「全選択」以外のチェックボックスがクリックされたら、
  $("input[name='station5']").on('click', function() {
    if ($('#popup5 :checked').length == $('#popup5 :input').length) {
      // 全てのチェックボックスにチェックが入っていたら、「全選択」 = checked
      $('#allstation5').prop('checked', true);
    } else {
      // 1つでもチェックが入っていたら、「全選択」 = checked
      $('#allstation5').prop('checked', false);
    }
  });
});
$(function() {
  // 「全選択」する
  $('#allstation6').on('click', function() {
    $("input[name='station6']").prop('checked', this.checked);
  });

  // 「全選択」以外のチェックボックスがクリックされたら、
  $("input[name='station6']").on('click', function() {
    if ($('#popup6 :checked').length == $('#popup6 :input').length) {
      // 全てのチェックボックスにチェックが入っていたら、「全選択」 = checked
      $('#allstation6').prop('checked', true);
    } else {
      // 1つでもチェックが入っていたら、「全選択」 = checked
      $('#allstation6').prop('checked', false);
    }
  });
});
$(function() {
  // 「全選択」する
  $('#allstation7').on('click', function() {
    $("input[name='station7']").prop('checked', this.checked);
  });

  // 「全選択」以外のチェックボックスがクリックされたら、
  $("input[name='station7']").on('click', function() {
    if ($('#popup7 :checked').length == $('#popup7 :input').length) {
      // 全てのチェックボックスにチェックが入っていたら、「全選択」 = checked
      $('#allstation7').prop('checked', true);
    } else {
      // 1つでもチェックが入っていたら、「全選択」 = checked
      $('#allstation7').prop('checked', false);
    }
  });
});
$(function() {
  // 「全選択」する
  $('#allstation8').on('click', function() {
    $("input[name='station8']").prop('checked', this.checked);
  });

  // 「全選択」以外のチェックボックスがクリックされたら、
  $("input[name='station8']").on('click', function() {
    if ($('#popup8 :checked').length == $('#popup8 :input').length) {
      // 全てのチェックボックスにチェックが入っていたら、「全選択」 = checked
      $('#allstation8').prop('checked', true);
    } else {
      // 1つでもチェックが入っていたら、「全選択」 = checked
      $('#allstation8').prop('checked', false);
    }
  });
});

$(function() {
  // 「全選択」する
  $('#allstation9').on('click', function() {
    $("input[name='station9']").prop('checked', this.checked);
  });

  // 「全選択」以外のチェックボックスがクリックされたら、
  $("input[name='station9']").on('click', function() {
    if ($('#popup9 :checked').length == $('#popup9 :input').length) {
      // 全てのチェックボックスにチェックが入っていたら、「全選択」 = checked
      $('#allstation9').prop('checked', true);
    } else {
      // 1つでもチェックが入っていたら、「全選択」 = checked
      $('#allstation9').prop('checked', false);
    }
  });
});
$(function() {
  // 「全選択」する
  $('#allstation10').on('click', function() {
    $("input[name='station10']").prop('checked', this.checked);
  });

  // 「全選択」以外のチェックボックスがクリックされたら、
  $("input[name='station10']").on('click', function() {
    if ($('#popup10 :checked').length == $('#popup10 :input').length) {
      // 全てのチェックボックスにチェックが入っていたら、「全選択」 = checked
      $('#allstation10').prop('checked', true);
    } else {
      // 1つでもチェックが入っていたら、「全選択」 = checked
      $('#allstation10').prop('checked', false);
    }
  });
});
$(function() {
  // 「全選択」する
  $('#allstation11').on('click', function() {
    $("input[name='station11']").prop('checked', this.checked);
  });

  // 「全選択」以外のチェックボックスがクリックされたら、
  $("input[name='station11']").on('click', function() {
    if ($('#popup11 :checked').length == $('#popup11 :input').length) {
      // 全てのチェックボックスにチェックが入っていたら、「全選択」 = checked
      $('#allstation11').prop('checked', true);
    } else {
      // 1つでもチェックが入っていたら、「全選択」 = checked
      $('#allstation11').prop('checked', false);
    }
  });
});

$(function() {
  // 「全選択」する
  $('#allstation12').on('click', function() {
    $("input[name='station12']").prop('checked', this.checked);
  });

  // 「全選択」以外のチェックボックスがクリックされたら、
  $("input[name='station12']").on('click', function() {
    if ($('#popup12 :checked').length == $('#popup12 :input').length) {
      // 全てのチェックボックスにチェックが入っていたら、「全選択」 = checked
      $('#allstation12').prop('checked', true);
    } else {
      // 1つでもチェックが入っていたら、「全選択」 = checked
      $('#allstation12').prop('checked', false);
    }
  });
});
$(function() {
  // 「全選択」する
  $('#allstation13').on('click', function() {
    $("input[name='station13']").prop('checked', this.checked);
  });

  // 「全選択」以外のチェックボックスがクリックされたら、
  $("input[name='station13']").on('click', function() {
    if ($('#popup13 :checked').length == $('#popup13 :input').length) {
      // 全てのチェックボックスにチェックが入っていたら、「全選択」 = checked
      $('#allstation13').prop('checked', true);
    } else {
      // 1つでもチェックが入っていたら、「全選択」 = checked
      $('#allstation13').prop('checked', false);
    }
  });
});
$(function() {
  // 「全選択」する
  $('#allstation14').on('click', function() {
    $("input[name='station14']").prop('checked', this.checked);
  });

  // 「全選択」以外のチェックボックスがクリックされたら、
  $("input[name='station14']").on('click', function() {
    if ($('#popup14 :checked').length == $('#popup14 :input').length) {
      // 全てのチェックボックスにチェックが入っていたら、「全選択」 = checked
      $('#allstation14').prop('checked', true);
    } else {
      // 1つでもチェックが入っていたら、「全選択」 = checked
      $('#allstation14').prop('checked', false);
    }
  });
});
$(function() {
  // 「全選択」する
  $('#allstation15').on('click', function() {
    $("input[name='station15']").prop('checked', this.checked);
  });

  // 「全選択」以外のチェックボックスがクリックされたら、
  $("input[name='station15']").on('click', function() {
    if ($('#popup15 :checked').length == $('#popup15 :input').length) {
      // 全てのチェックボックスにチェックが入っていたら、「全選択」 = checked
      $('#allstation15').prop('checked', true);
    } else {
      // 1つでもチェックが入っていたら、「全選択」 = checked
      $('#allstation15').prop('checked', false);
    }
  });
});
$(function() {
  // 「全選択」する
  $('#allstation16').on('click', function() {
    $("input[name='station16']").prop('checked', this.checked);
  });

  // 「全選択」以外のチェックボックスがクリックされたら、
  $("input[name='station16']").on('click', function() {
    if ($('#popup16 :checked').length == $('#popup16 :input').length) {
      // 全てのチェックボックスにチェックが入っていたら、「全選択」 = checked
      $('#allstation16').prop('checked', true);
    } else {
      // 1つでもチェックが入っていたら、「全選択」 = checked
      $('#allstation16').prop('checked', false);
    }
  });
});
$(function() {
  // 「全選択」する
  $('#allstation17').on('click', function() {
    $("input[name='station17']").prop('checked', this.checked);
  });

  // 「全選択」以外のチェックボックスがクリックされたら、
  $("input[name='station17']").on('click', function() {
    if ($('#popup17 :checked').length == $('#popup17 :input').length) {
      // 全てのチェックボックスにチェックが入っていたら、「全選択」 = checked
      $('#allstation17').prop('checked', true);
    } else {
      // 1つでもチェックが入っていたら、「全選択」 = checked
      $('#allstation17').prop('checked', false);
    }
  });
});
$(function() {
  // 「全選択」する
  $('#allstation18').on('click', function() {
    $("input[name='station18']").prop('checked', this.checked);
  });

  // 「全選択」以外のチェックボックスがクリックされたら、
  $("input[name='station18']").on('click', function() {
    if ($('#popup18 :checked').length == $('#popup18 :input').length) {
      // 全てのチェックボックスにチェックが入っていたら、「全選択」 = checked
      $('#allstation18').prop('checked', true);
    } else {
      // 1つでもチェックが入っていたら、「全選択」 = checked
      $('#allstation18').prop('checked', false);
    }
  });
});
$(function() {
  // 「全選択」する
  $('#allstation19').on('click', function() {
    $("input[name='station19']").prop('checked', this.checked);
  });

  // 「全選択」以外のチェックボックスがクリックされたら、
  $("input[name='station19']").on('click', function() {
    if ($('#popup19 :checked').length == $('#popup19 :input').length) {
      // 全てのチェックボックスにチェックが入っていたら、「全選択」 = checked
      $('#allstation19').prop('checked', true);
    } else {
      // 1つでもチェックが入っていたら、「全選択」 = checked
      $('#allstation19').prop('checked', false);
    }
  });
});
$(function() {
  // 「全選択」する
  $('#allstation20').on('click', function() {
    $("input[name='station20']").prop('checked', this.checked);
  });

  // 「全選択」以外のチェックボックスがクリックされたら、
  $("input[name='station20']").on('click', function() {
    if ($('#popup20 :checked').length == $('#popup20 :input').length) {
      // 全てのチェックボックスにチェックが入っていたら、「全選択」 = checked
      $('#allstation20').prop('checked', true);
    } else {
      // 1つでもチェックが入っていたら、「全選択」 = checked
      $('#allstation20').prop('checked', false);
    }
  });
});

$(function() {
  $(".station-open").click(function () {
    $(this).parent(".main__tabitem").toggleClass("is-active");

    if ($(this).parent(".main__tabitem").hasClass("is-active")) {
      $(this).parent(".main__tabitem").next(".main__popup").addClass("is-active");
    } else {
      $(this).parent(".main__tabitem").next(".main__popup").removeClass("is-active");
    }
  });
  $(".main__popuptitle").click(function () {
    $(".main__tabitem,.main__popup").removeClass("is-active");
  });

});

$(function() {
  $(".js-sidebar-open").click(function () {
    $(this).toggleClass("is-active");

    if ($(this).hasClass("is-active")) {
      $(this).next(".sidebar__form--sp").slideDown(400);
    } else {
      $(this).next(".sidebar__form--sp").slideUp(400);
    }
  });

});


//アコーディオンをクリックした時の動作
$('.service__accordiontitle').on('click', function() {//タイトル要素をクリックしたら
  $('.service__accordionbody').slideUp(400);//クラス名.boxがついたすべてのアコーディオンを閉じる
    
  var findElements = $(this).next(".service__accordionbody");//タイトル直後のアコーディオンを行うエリアを取得
    
  if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
    $(this).removeClass('close');//クラス名を除去    
  }else{//それ以外は
    $('.close').removeClass('close'); //クラス名closeを全て除去した後
    $(this).addClass('close');//クリックしたタイトルにクラス名closeを付与し
    $(findElements).slideDown(400);//アコーディオンを開く
  }
});


$(function() {
  $(".show_more").click(function() {
    var show_text = $(this)
      .parent(".strengths__textbox")
      .find(".strengths__text");
    var small_height = 95; //This is initial height.
    var original_height = show_text.css({ height: "auto" }).height();

    if (show_text.hasClass("open")) {
      /*CLOSE*/
      show_text.height(original_height).animate({ height: small_height }, 300);
      show_text.removeClass("open");
      $(this)
        .removeClass("active");
    } else {
      /*OPEN*/
      show_text
        .height(small_height)
        .animate({ height: original_height }, 300, function() {
          show_text.height("auto");
        });
      show_text.addClass("open");
      $(this)
        .addClass("active");
    }
  });
});