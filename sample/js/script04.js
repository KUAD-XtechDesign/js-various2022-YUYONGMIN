$(function(){
  $('.grid').masonry({
    // options
    itemSelector: '.grid-item',
    columnWidth: 200
  });
})

 //スクロールしたりウィンドウサイズを変えた時に実行
 $(window).on("scroll resize load",function(){
  windowH = $(this).height()//ウィンドウの高さ
  documentH = $(document).height()//内容の高さ
  documentW = $(document).width()//内容の幅
  scrollTop = $(this).scrollTop()//何ピクセルスクロールしたか
  scrollRatio = scrollTop/(documentH-windowH)//どれくらいスクロールされたか0から1
  
  separate = documentH / 3;//内容の高さを3分割した数値

  //３分割した数値とどれだけスクロールしたかを比較→bodyにクラスをつける。あとはCSSファイルでデザイン変更
  if(scrollTop < separate){
    $("body").removeClass().addClass("one")
  }else if(scrollTop < separate * 2){
    $("body").removeClass().addClass("two")
  }else{
    $("body").removeClass().addClass("three")
  }

  console.log(windowH,documentH,scrollTop)

  $("#wave").css("background-position-x",scrollTop/10)//右上の背景画像の位置変更(CSS)
  $("#line").css("width",scrollRatio * documentW)//グラデーションラインの幅変更(CSS)

})
