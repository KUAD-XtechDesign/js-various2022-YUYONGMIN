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
})