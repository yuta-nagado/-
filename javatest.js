/*jQueryを組み込んでいないと以下のコードは使えない（javascriptのライブラリのため）*/
/*トルクボタンの動きをつけるコード*/
$(function(){
  /*クリックした場合、メニュー画面を表示する実行コード*/
 $(".headC").click(function(){
   /*クリックされたらメニューをボトムダウンで表示する。クリックされなかったらボトムアップ（表示しない）。*/
   $(".headB").slideToggle();
  });
});
