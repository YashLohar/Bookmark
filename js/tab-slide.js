$(document).ready(function(){

  $(".Bookmarking").click(function(){
      $(".box-1").slideToggle(450);

      $(".box-2").css("display","none");
      $(".box-3").css("display","none");
  });

  $(".Speedy").click(function(){
      $(".box-2").slideToggle(450);

      $(".box-1").css("display","none");
      $(".box-3").css("display","none");
  });

  $(".Easy").click(function(){
      $(".box-3").slideToggle(450);

      $(".box-1").css("display","none");
      $(".box-2").css("display","none");
  });

});