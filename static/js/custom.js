
(function($){
  "use strict";
  var NAY = {};
  var plugin_track = 'static/plugin/index.html';
  $.fn.exists = function () {
        return this.length > 0;
    };

  /* ---------------------------------------------- /*
   * Pre load
  /* ---------------------------------------------- */
  NAY.PreLoad = function() {
    document.getElementById("loading").style.display = "none"; 
  }

    /*--------------------
        * Menu Close
    ----------------------*/
    NAY.MenuClose = function(){
      $('.navbar-nav a').on('click', function() {
       var toggle = $('.navbar-toggler').is(':visible');
       if (toggle) {
         $('.navbar-collapse').collapse('hide');
       }
      });
    }


  NAY.MenuTogglerClose = function(){
    $(".toggler-menu").on('click', function(){
      $(this).toggleClass('open');
      $('.header-left').stop().toggleClass('menu-open menu-open-desk');
    });
    $('.header-left a').on('click', function() {
     var toggle = $('.toggler-menu').is(':visible');
     if (toggle) {
       $('.header-left').removeClass('menu-open');
       $('.toggler-menu').removeClass('open');
     }
    });
  }

  /* ---------------------------------------------- /*
   * Header Fixed
  /* ---------------------------------------------- */
  NAY.HeaderFixd = function() {
    var HscrollTop  = $(window).scrollTop();  
      if (HscrollTop >= 100) {
         $('body').addClass('fixed-header');
      }
      else {
         $('body').removeClass('fixed-header');
      }
  }


    /*--------------------
    * OwlSlider
    ----------------------*/
    NAY.Owl = function () {
      var owlslider = $("div.owl-carousel");
      if(owlslider.length > 0) {  
         loadScript(plugin_track + 'owl-carousel/js/owl.carousel.min.js', function() {
           owlslider.each(function () {
            var $this = $(this),
                $items = ($this.data('items')) ? $this.data('items') : 1,
                $loop = ($this.attr('data-loop')) ? $this.data('loop') : true,
                $navdots = ($this.data('nav-dots')) ? $this.data('nav-dots') : false,
                $navarrow = ($this.data('nav-arrow')) ? $this.data('nav-arrow') : false,
                $autoplay = ($this.attr('data-autoplay')) ? $this.data('autoplay') : true,
                $autospeed = ($this.attr('data-autospeed')) ? $this.data('autospeed') : 5000,
                $smartspeed = ($this.attr('data-smartspeed')) ? $this.data('smartspeed') : 1000,
                $autohgt = ($this.data('autoheight')) ? $this.data('autoheight') : false,
                $CenterSlider = ($this.data('center')) ? $this.data('center') : false,
                $space = ($this.attr('data-space')) ? $this.data('space') : 30;    
           
                $(this).owlCarousel({
                    loop: $loop,
                    items: $items,
                    responsive: {
                      0:{items: $this.data('xx-items') ? $this.data('xx-items') : 1},
                      480:{items: $this.data('xs-items') ? $this.data('xs-items') : 1},
                      768:{items: $this.data('sm-items') ? $this.data('sm-items') : 1},
                      980:{items: $this.data('md-items') ? $this.data('md-items') : 1},
                      1200:{items: $items}
                    },
                    dots: $navdots,
                    autoplayTimeout:$autospeed,
                    smartSpeed: $smartspeed,
                    autoHeight:$autohgt,
                    center:$CenterSlider,
                    margin:$space,
                    nav: $navarrow,
                    navText:["<i class='ti-arrow-left'></i>","<i class='ti-arrow-right'></i>"],
                    autoplay: $autoplay,
                    autoplayHoverPause: true   
                }); 
           }); 
         });
      }
    }

  /* ---------------------------------------------- /*
     * lightbox gallery
    /* ---------------------------------------------- */
    NAY.Gallery = function() {
      if ($(".lightbox-gallery").exists() || $(".popup-youtube, .popup-vimeo, .popup-gmaps").exists()){
        loadScript(plugin_track + 'magnific/jquery.magnific-popup.min.js', function() {
          if($(".lightbox-gallery").exists()){
            $('.lightbox-gallery').magnificPopup({
                delegate: '.gallery-link',
                type: 'image',
                tLoading: 'Loading image #%curr%...',
                mainClass: 'mfp-fade',
                fixedContentPos: true,
                closeBtnInside: false,
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1] // Will preload 0 - before current, and 1 after NAY current image
                }
            }); 
          }
          if ($(".popup-youtube, .popup-vimeo, .popup-gmaps").exists()) {
                $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
                      disableOn: 700,
                      type: 'iframe',
                      mainClass: 'mfp-fade',
                      removalDelay: 160,
                      preloader: false,
                      fixedContentPos: false
                });
            }
        });
      }
    }

     /*--------------------
    * Masonry
    ----------------------*/
    NAY.masonry = function () {
      var portfolioWork = $('.portfolio-content');
      if ($(".portfolio-content").exists()){
        loadScript(plugin_track + 'isotope/isotope.pkgd.min.js', function() {
          if ($(".portfolio-content").exists()){
              $(portfolioWork).isotope({
                resizable: false,
                itemSelector: '.grid-item',
                layoutMode: 'masonry',
                filter: '*'
              });
              //Filtering items on portfolio.html
              var portfolioFilter = $('.filter li');
              // filter items on button click
              $(portfolioFilter).on( 'click', function() {
                var filterValue = $(this).attr('data-filter');
                portfolioWork.isotope({ filter: filterValue });
              });
              //Add/remove class on filter list
              $(portfolioFilter).on( 'click', function() {
                $(this).addClass('active').siblings().removeClass('active');
              });
          }
        });
      }
  }

  /*--------------------
        * Progress Bar 
    ----------------------*/
    NAY.ProgressBar = function(){
        $(".skill-bar .skill-bar-in").each(function () {
          var bottom_object = $(this).offset().top + $(this).outerHeight();
          var bottom_window = $(window).scrollTop() + $(window).height();
          var progressWidth = $(this).attr('aria-valuenow') + '%';
          if(bottom_window > bottom_object) {
            $(this).css({
              width : progressWidth
            });
          }
        });
    }

    /*--------------------
        * particles
    ----------------------*/
    NAY.particles = function() {
      if ($("#particles-box").exists()){
        loadScript(plugin_track + 'particles/particles.min.js', function() {
        });
        loadScript(plugin_track + 'particles/particles-app.js', function() {
        });
      }
    }


    /*--------------------
        * Type It
    ----------------------*/
    NAY.mTypeIt = function() {
      if ($("#type-it").exists()){
            loadScript(plugin_track + 'typeit-master/typeit.min.js', function() {
                new TypeIt('#type-it', {
                speed: 200,
                loop:true,
                strings: [
                  'Designer',
                  'Developer'
                ],
                breakLines: false
            }); 
          });
        }
    }
    NAY.one_page = function() {
        //var HHeight = $('.navbar').outerHeight();
        var $one_page_nav = $('.one-page-nav');
        if($one_page_nav.length > 0) {
            $one_page_nav.each(function(){
                $.scrollIt({
                  upKey: 38,             // key code to navigate to the next section
                  downKey: 40,           // key code to navigate to the previous section
                  easing: 'linear',      // the easing function for animation
                  scrollTime: 600,       // how long (in ms) the animation takes
                  activeClass: 'active', // class given to the active nav element
                  onPageChange: null,    // function(pageIndex) that is called when page is changed
                  topOffset: -70           // offste (in px) for fixed top navigation
                });
            });
        }
    }

  /* ---------------------------------------------- /*
   * All Functions
  /* ---------------------------------------------- */
    // loadScript
  var _arr  = {};
  function loadScript(scriptName, callback) {
      if (!_arr[scriptName]) {
        _arr[scriptName] = true;
        var body    = document.getElementsByTagName('body')[0];
        var script    = document.createElement('script');
        script.type   = 'text/javascript';
        script.src    = scriptName;
        // NAYn bind NAY event to NAY callback function
        // NAYre are several events for cross browser compatibility
        // script.onreadystatechange = callback;
        script.onload = callback;
        // fire NAY loading
        body.appendChild(script);
      } else if (callback) {
        callback();
      }
  };

  // Window on Load
  $(window).on("load", function(){
    NAY.masonry(),
    NAY.PreLoad();
  });
  // Document on Ready
  $(document).ready(function() {
    NAY.particles(),
    NAY.HeaderFixd(),
    NAY.MenuClose(),
    NAY.MenuTogglerClose(),
    NAY.Gallery(),
    NAY.ProgressBar(),
    NAY.mTypeIt(),
    NAY.one_page(),
    NAY.Owl(),
    $('[data-toggle="tooltip"]').tooltip({ trigger: "hover" });
  });

  // Document on Scrool
  $(window).on("scroll", function(){
    NAY.ProgressBar(),
    NAY.HeaderFixd();
  });

  // Window on Resize
  $(window).on("resize", function(){
  });


})(jQuery);

$(document).ready(function() {
    // 1. When ANY 'View Certificate' button is clicked
    $('.cert-btn').on('click', function(e) {
        e.preventDefault(); // Stops the page from jumping to the top

        // Find the image inside the EXACT card that was clicked
        var imgSrc = $(this).closest('.cert-card').find('img').attr('src');
        
        // Put that image source into the popup modal
        $('#certModalImg').attr('src', imgSrc);
        
        // Show the modal (using flex so it stays centered)
        $('#certModal').css('display', 'flex');
    });

    // 2. When the 'X' close button is clicked
    $('.cert-modal-close').on('click', function() {
        $('#certModal').css('display', 'none');
    });

    // 3. Optional: Close the modal if the user clicks anywhere on the dark background
    $('#certModal').on('click', function(e) {
        if (e.target.id === 'certModal') {
            $('#certModal').css('display', 'none');
        }
    });

    // --- Draggable Infinite Marquee Logic ---
    const wrapper = document.querySelector('.cert-marquee-wrapper');
    let isDown = false;
    let startX;
    let scrollLeft;
    let isAutoScrolling = true;
    
    // Adjust this number to make the auto-scroll faster or slower!
    let scrollSpeed = 0.4; 

    // 1. Auto-Scroll Function
    function autoScroll() {
        if (isAutoScrolling) {
            wrapper.scrollLeft += scrollSpeed;
            
            // The Infinite Loop Magic: 
            // If we've scrolled exactly halfway (the end of the first set of certificates), 
            // instantly jump back to 0. Because the sets are identical, it is invisible to the user!
            if (wrapper.scrollLeft >= (wrapper.scrollWidth / 2)) {
                wrapper.scrollLeft = 0;
            }
        }
        requestAnimationFrame(autoScroll);
    }
    autoScroll(); // Start the engine

    // 2. Pause when the user hovers over it to read or click a button
    wrapper.addEventListener('mouseenter', () => isAutoScrolling = false);
    wrapper.addEventListener('mouseleave', () => {
        if (!isDown) isAutoScrolling = true;
    });

    // 3. Mouse Dragging Logic for Desktop
    wrapper.addEventListener('mousedown', (e) => {
        isDown = true;
        isAutoScrolling = false;
        wrapper.classList.add('grabbing');
        startX = e.pageX - wrapper.offsetLeft;
        scrollLeft = wrapper.scrollLeft;
    });

    wrapper.addEventListener('mouseleave', () => {
        isDown = false;
        wrapper.classList.remove('grabbing');
    });

    wrapper.addEventListener('mouseup', () => {
        isDown = false;
        wrapper.classList.remove('grabbing');
        isAutoScrolling = true; // Resume auto-scrolling after letting go
    });

    wrapper.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - wrapper.offsetLeft;
        const walk = (x - startX) * 1.5; // Multiply by 1.5 to make dragging feel responsive
        wrapper.scrollLeft = scrollLeft - walk;
    });
});