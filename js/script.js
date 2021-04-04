$(document).ready(function(){
    $(".fa-navicon").click(function(){
          $(".navigation").slideToggle(250);
    });

    $(".close").click(function(){
        $(".navigation").toggle(250);
  });

});