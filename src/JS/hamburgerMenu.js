$(document).ready(function() {
   $(".menuToggle").click(function() {
      $(".logo").toggleClass("active");
      $(this).toggleClass("active");
      $('.menu').slideToggle(300, function(){
         
         if($(this).css('display') === "none"){
            $(this).removeAttr('style');
         }
     });
   });
 });