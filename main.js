jQuery(document).ready(function ($) {
    let time =2500;
    // duration

    let interval;
    interval = setInterval(function () {
      slideRight();
    },time) ;
    // default moving right on page load
  
    $('.slider').mouseover(function(){
      clearInterval(interval);
    });
    
    $('.slider').mouseleave(function(){
      interval = setInterval(function () {
        slideRight();
        }, time);
    });
    
      let slideNumber = $('.slider ul li').length;
        // number of slide image count

      let slideWidth = $('.slider ul li').width();
        // single slide image width 

      let slideHeight = $('.slider ul li').height();
         //   height of slide img

      let totalWidth = slideNumber * slideWidth;
        //   all slide width



      $('.slider').css({ width: slideWidth, height: slideHeight });
    //   adding hieght and width to slider
      
      $('.slider ul').css({ width: totalWidth, marginLeft: - slideWidth });
    //   sliding right default
      
      $('.slider ul li:last-child').prependTo('.slider ul');
  
      function slideLeft() {
          $('.slider ul').animate({
              left: + slideWidth
          }, 500, function () {
              $('.slider ul li:last-child').prependTo('.slider ul');
            //   before / at begining
              $('.slider ul').css('left', "");
          });
      };
  
      function slideRight() {
          $('.slider ul').animate({
              left: - slideWidth
          }, 500, function () {
              $('.slider ul li:first-child').appendTo('.slider ul');
            //   after / at end
              $('.slider ul').css('left', "");
          });
      };
  
      $('.slider_left').click(function () {
          slideLeft();
      });
  
      $('.slider_right').click(function () {
          slideRight();
      });
  
  });    
   