

 (function ($) {
    'use strict';



    // Sticky Menu
    $(window).scroll(function () {
        if ($('.navigation').offset().top > 100) {
            $('.navigation').addClass('nav-bg');
        } else {
            $('.navigation').removeClass('nav-bg');
        }
    });


    // testimonial-slider
    $('.testimonial-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: false,
        adaptiveHeight: true
    });


    // clients logo slider
    $('.client-logo-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Shuffle js filter and masonry
    var Shuffle = window.Shuffle;
    var jQuery = window.jQuery;

    var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
        itemSelector: '.shuffle-item',
        buffer: 1
    });

    jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
        var input = evt.currentTarget;
        if (input.checked) {
            myShuffle.filter(input.value);
        }
    });



})(jQuery);