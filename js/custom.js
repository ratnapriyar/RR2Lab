
  (function ($) {
  
  "use strict";

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        if (!offset) {
          return;
        }
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;

        if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          $('html, body').scrollTop(totalScroll);
        } else {
          $('html, body').animate({
            scrollTop: totalScroll
          }, 300);
        }
      }
    });
  
  })(window.jQuery);

