/* ===================================================================
    
    Author          : Spine Theme
    Template Name   : APPNINE - APP Landing Page Template
    Version         : 1.0
    
* ================================================================= */
(function($) {
    "use strict";

    $(document).on('ready', function() {


        // Preloading
        $(window).on('load', function() {
            // Animate loader off screen
            $(".preloading").delay(400).fadeOut();
        });

      /* ================================================
          # App Screenshot carousel active - 
        ================================================== */
         $(".app-screenshots-slide").owlCarousel({
            loop:true,
            margin: 30,
            nav: false,
            autoplay:true,
            dots: false,
            responsive : {
                    // breakpoint from 0 up
                    0 : {
                        items: 1
                    },
                    // breakpoint from 480 up
                    480 : {
                        items: 2
                    },
                    // breakpoint from 768 up
                    768 : {
                        items: 3
                    },
                    // breakpoint from 992 up
                    992 : {
                        items: 4
                    }
                }
             });

        /* ==============================================
            wow initial
         ===============================================*/
         new WOW({ mobile: false }).init();
         
        // sticky nav Scroll
        $("#sticky-nav").sticky({topSpacing:0});

        //# Smooth Scroll
        $('.navbar-nav a, .slide-content a, .call-to-action a').on('click', function(event) {
            var $anchor = $(this);
            var headerH = '70';
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });

        $(document).on('click', '.navbar-collapse.show', function (e) {
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });

        /*==========================
           Count up init
        ============================*/
        $('.app-single-countup span').counterUp({
            delay: 20,
            time: 2000
        });


        /*==========================
           Scroll To Up init
        ============================*/
        $.scrollUp({
          scrollName: 'scrollUp', // Element ID
          topDistance: '500', // Distance from top before showing element (px)
          topSpeed: 900, // Speed back to top (ms)
          animation: 'fade', // Fade, slide, none
          animationInSpeed: 300, // Animation in speed (ms)
          animationOutSpeed: 300, // Animation out speed (ms)
          scrollText: '<i class="ti-angle-up"></i>', // Text for element
          activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        });
        
        // tooltips
         $('[data-toggle="tooltip"]').tooltip();

        //mailchimp This is our Subscriber’s list URL
        $('#mc-form').ajaxChimp({
            url: 'http://blahblah.us1.list-manage.com/subscribe/post?u=5afsdhfuhdsiufdba6f8802&id=4djhfdsh9'
        });
    
    }); // end document ready function
})(jQuery); // End jQuery

