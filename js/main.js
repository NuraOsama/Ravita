
(function ($) { 
    "use strict";
    //Start wow  .js
    new WOW().init();
    //End wow  .js

 //search box
 $(".search-icon").click(function(){
    $(".search-box").fadeIn(); 
    $(this).css('opacity','0');
});

$(".close-btn").click(function(){
    $(".search-box").fadeOut(); 
    $(".search-icon").css('opacity','1');
});


//fancybox video

$('[data-fancybox]').fancybox({
    youtube : {
        controls : 0,
        showinfo : 0
    }
  });

//modal animated

  $('.modal').on('show.bs.modal', function () {
    $('.modal .modal-dialog').attr('class', 'modal-dialog  zoomIn  animated');
   })
   $('.modal').on('hide.bs.modal', function () {
    $('.modal .modal-dialog').attr('class', 'modal-dialog  zoomOut  animated');
   });
   // news modal
   $(".first_btn").click(function(){

    $(".first_news_img").css("display","block");
    $(".second_news_img").css("display","none");
    $(".third_news_img").css("display","none");

   })
   $(".second_btn").click(function(){

    $(".first_news_img").css("display","none");
    $(".second_news_img").css("display","block");
    $(".third_news_img").css("display","none");
    
   })

   $(".third_btn").click(function(){

    $(".first_news_img").css("display","none");
    $(".second_news_img").css("display","none");
    $(".third_news_img").css("display","block");
    
   })

  //mixitup

  $('#portfolio').mixItUp();

  //scroll to top
  $(window).scroll(function(){
  if($(this).scrollTop() > 300) {

    $(".auto-scroll-to-top").removeClass("non-hover");                 
     $(".auto-scroll-to-top").addClass("visible");  
   } else {

    $(".auto-scroll-to-top").addClass("non-hover");
    $(".auto-scroll-to-top").removeClass("visible");
   }        
   });
   
   $('.auto-scroll-to-top').on('click touchend', function() {
    $("html, body").animate({scrollTop: 0}, 1000);
    var el = $(this);
    var link = el.attr('href');
    window.location = link;
  });
  
  

})(jQuery);
// responsive navbar
function openNav() {
  document.getElementById("myNav").style.height = "100%";
  document.getElementById("toggle").style.visibility = "hidden";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
  document.getElementById("toggle").style.visibility = "visible";

}