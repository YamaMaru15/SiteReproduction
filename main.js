 
// スライダー
  $('.slider').slick({
    autoplay: false,//自動的に動き出すか。初期値はfalse。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 3,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    centerMode: true,//要素を中央ぞろえにする 
    variableWidth: true,//幅の違う画像の高さを揃えて表示
    dots: true,//下部ドットナビゲーションの表示
  });


//header スクロール途中からヘッダーを出現させるための設定を関数でまとめる

function FixedAnime() {
  var elemTop1 = $('#container-2').offset().top;//#container-2の位置まできたら
  var elemTop2 = $('#container-6').offset().top;//#container-6の位置まできたら
  var scroll = $(window).scrollTop();//スクロール処理を変数に代入
    if (scroll >= elemTop1 && scroll <= elemTop2){//スクロールがelemTop1~elemTop2間なら
      $('#header').removeClass('HiddenHeader');//#headerについているHiddenHeaderというクラス名を除く
      $('#header').removeClass('UpMove');//#headerについているUpMoveというクラス名を除く
      $('#header').addClass('DownMove');//#headerについているDownMoveというクラス名を付与

    }else if(scroll >= elemTop2){ //スクロールがelemToP2を超えたら
      $('#header').removeClass('DownMove');//#headerについているUpMoveというクラス名を除く
      $('#header').addClass('UpMove');//#headerについているDownMoveというクラス名を付与
    }else{//以下はそれ以外の場所でupMoveクラスを付与する処理
      if($('#header').hasClass('DownMove')){//すでに#headerにDownMoveというクラス名がついていたら
        $('#header').removeClass('DownMove');//DownMoveというクラス名を除き
        $('#header').addClass('UpMove');//UpMoveというクラス名を付与
      }
    }
  }


// 画面をスクロールをしたら動かす
$(window).scroll(function () {
  FixedAnime();/* スクロール途中からヘッダーを出現させる関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  FixedAnime();/* スクロール途中からヘッダーを出現させる関数を呼ぶ*/
});




// header スクロール途中からヘッダーを削除させるための設定を関数でまとめる
// function DisappearanceAnime() {
//   var elemTop = $('#container-6').offset().top;//#container-6の位置まできたら
//   var scroll = $(window).scrollTop();
//   if(scroll <= 20){//上から20pxスクロールされたら
//     $('#header').addClass('UpMove');//UpMoveというクラス名を付与
//   } else if (scroll >= elemTop){
//       $('#header').removeClass('DownMove');//#headerについているDownMoveというクラス名を除く
//       $('#header').addClass('UpMove');//#headerについているUpMoveというクラス名を付与

//     }else{
//       if($('#header').hasClass('UpMove')){//すでに#headerにUpMoveというクラス名がついていたら
//         $('#header').removeClass('UpMove');//UpMoveというクラス名を除き
//         $('#header').addClass('DownMove');//Downというクラス名を付与
//       }
//     }
// }

