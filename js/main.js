(function ($) {
  "use strict";
  // meanmenu
  $('#mobile-menu').meanmenu({
    meanMenuContainer: '.mobile-menu',
    meanScreenWidth: "991"
  });

  // data - background
  $("[data-background]").each(function () {
    $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
  })



  // sticky
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 200) {
      $(".header-sticky").removeClass("sticky");
    } else {
      $(".header-sticky").addClass("sticky");
    }
  });

  // preloader 

  $(window).on('load',function() {
    $("#loading").fadeOut(500);
  })
      

  // One Page Nav
  var top_offset = $('.header-area').height() - 10;
  $('.main-menu nav ul').onePageNav({
    currentClass: 'active',
    scrollOffset: top_offset,
  });

  // counter
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });

  // popup image  
  $('.popup-img').magnificPopup({
    type: 'image'
  });

  // popup video 
  var t = $(".video-btn");
  t.length && t.magnificPopup({
      type: "iframe"
  })

// Features Carousel 

  $('.features-active').slick({
    infinite: true,
    speed: 300,
    dots:true,
    slidesToShow: 3,
    slidesToScroll:3,
    arrows:false,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          arrows:false,

        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

// testimonial active 

$('.author-active').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.comment-active',
});

$('.comment-active').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.author-active',
  dots: false,
  speed: 300,
  focusOnSelect: true,
  arrows:true,
  prevArrow:'<i class="fal fa-angle-left left-arrow">',
  nextArrow:'<i class="fal fa-angle-right right-arrow">',
  // arrows: ['<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">'],

});

// animation on scroll 

AOS.init({
  easing: 'ease-out-back',
  duration: 1500
});

// back to top 

      var $backToTopBtn = $('.back-to-top');

      if ($backToTopBtn.length) {
          var scrollTrigger = 400, // px
          backToTop = function () {
              var scrollTop = $(window).scrollTop();
              if (scrollTop > scrollTrigger) {
                  $backToTopBtn.addClass('show');
              } else {
                  $backToTopBtn.removeClass('show');
              }
          };

          backToTop();

          $(window).on('scroll', function () {
              backToTop();
          });

          $backToTopBtn.on('click', function (e) {
              e.preventDefault();
              $('html,body').animate({
                  scrollTop: 0
              }, 700);
          });
      }



 


})(jQuery);