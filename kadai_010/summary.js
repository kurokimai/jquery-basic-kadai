$(function () {
  //id属性がchange-colorの要素がクリックされたら
  $('#change-color').on('click', function() {
    //id属性がtargetの要素のcolorプロパティをredにする
    $('#target').css('color', 'red');
  });

  //id属性がchange-textの要素がクリックされたら
  $('#change-text').on('click', function() {
    //id属性がtargetの要素をHello!に変更する
    $('#target') .text('Hello!');
  });

  //id属性がfade-outの要素がクリックっされたら
  $('#fade-out').on('click', function() {
    //id属性がtargetをフェードアウトする
   $('#target').fadeOut();
  });

   //id属性がfade-inの要素がクリックっされたら
   $('#fade-in').on('click', function() {
    //id属性がtargetをフェードインする
   $('#target').fadeIn();
  });
});