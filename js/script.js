// TOGGLE NAV
$('.nav__icon').on('click', function () {
    $('.nav__icon-bar').toggleClass('close');
    $('.nav__list').slideToggle();
})

// HIDE NAV AFTER CLICK MOBILE
var desktopViewport = window.matchMedia("(min-width: 1024px)");
if (!desktopViewport.matches) {
    $('.nav__link').on('click', function () {
        $('.nav__icon-bar').toggleClass('close');
        $('.nav__list').slideToggle();
    })
}

// CHECKING NAV OFFSET ON RESIZE
var navOffset = $('.nav').offset().top;
$(window).on('resize', function () {
    navOffset = $('.nav').offset().top;
})

$(document).on('scroll', function () {
    if ($(document).scrollTop() > navOffset) {
        $('.nav').addClass('scrolled');
    } else {
        $('.nav').removeClass('scrolled');
    }
})


// SCROLL TO SECTION (BY CLASS)
$('.nav__link, .nav__logo, .arrow-down, .arrow-up').on('click', function () {
    var goTo = $(this).attr('href').replace('#', '');
    var howFar = $('.' + goTo).offset().top;
    $('html, body').animate({
        scrollTop: howFar
    })
})

// SLIDER
$('.review__dot').on('click', function () {
    if ($(this).hasClass('dot__1')) {
        $('.review__dot').not('.dot__1').removeClass('active');
        $('.dot__1').addClass('active');
        $('.review__quote').css('transform', 'translateX(100%)');
    } else if ($(this).hasClass('dot__2')) {
        $('.review__dot').not('.dot__2').removeClass('active');
        $('.dot__2').addClass('active');
        $('.review__quote').css('transform', 'translateX(0)');
    } else if ($(this).hasClass('dot__3')) {
        $('.review__dot').not('.dot__3').removeClass('active');
        $('.dot__3').addClass('active');
        $('.review__quote').css('transform', 'translateX(-100%)');
    }
})