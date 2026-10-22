
  (function ($) {
  
  "use strict";

    var backToTop = document.createElement('button');
    backToTop.type = 'button';
    backToTop.className = 'back-to-top';
    backToTop.hidden = true;
    backToTop.innerHTML = '<i class="bi bi-arrow-up" aria-hidden="true"></i><span>Back to top</span>';
    document.body.appendChild(backToTop);

    function updateBackToTop() {
      backToTop.hidden = window.pageYOffset < 300;
    }

    window.addEventListener('scroll', updateBackToTop, { passive: true });
    updateBackToTop();

    backToTop.addEventListener('click', function () {
      var topLink = document.querySelector('.navbar-brand');
      if (topLink) {
        topLink.focus({ preventScroll: true });
      }
      var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'instant' : 'smooth' });
    });

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
