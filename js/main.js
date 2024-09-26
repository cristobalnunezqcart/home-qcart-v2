(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();
    

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.nav-bar').addClass('sticky-top shadow-sm').css('top', '0px');
        } else {
            $('.nav-bar').removeClass('sticky-top shadow-sm').css('top', '-100px');
        }
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        animateOut: 'fadeOut',
        items: 1,
        margin: 0,
        stagePadding: 0,
        autoplay: true,
        smartSpeed: 500,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });



    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: false,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="fa fa-arrow-right"></i>',
            '<i class="fa fa-arrow-left"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:2
            }
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });


   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


})(jQuery);

$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });

    $('.customer-logos-2').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: true,
        rtl: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});


gsap.defaults({ease: "none"});

const tl = gsap.timeline({repeat:-1, repeatDelay:1.5, yoyo:true});
tl
.to("#ch-txt", .7, {
    duration: 2, 
    text:"cualquier producto."
}, "+=1.5")
.to("#ch-txt", .7, {
    duration: 2, 
    text:"todas las industrias."
}, "+=1.5")
.to("#ch-txt", .7, {
    duration: 2, 
    text:"vender en cualquier canal."
}, "+=1.5")
.to("#ch-txt", .7, {
    duration: 2, 
    text:"todas las marcas."
}, "+=1.5")

