$(document).ready(function () {
    Breakpoints();
    makeResponsive();
    $(window).on('resize', function(){
        makeResponsive();
    });
});

function makeResponsive(){
    if(Breakpoints.is('xs')){
        $('.slideshow-outer .slidecont').css('max-width', 'initial');
        $('.slideshow-outer .slidecont').css('left', '8px');

        $('.footer .footset').addClass('textcenter');
    } else if(Breakpoints.is('sm')){
        $('.slideshow-outer .slidecont').css('max-width', 'initial');
        $('.slideshow-outer .slidecont').css('left', '15px');

        $('.footer .footset').removeClass('textcenter');
    } else if(Breakpoints.is('md')){
        $('.slideshow-outer .slidecont').css('max-width', ($(window).width() / 2.2) + 'px');
        $('.slideshow-outer .slidecont').css('left', 'initial');

        $('.footer .footset').removeClass('textcenter');
    } else if(Breakpoints.is('lg')){
        $('.slideshow-outer .slidecont').css('max-width', ($(window).width() / 2.2) + 'px');
        $('.slideshow-outer .slidecont').css('left', 'initial');

        $('.footer .footset').removeClass('textcenter');
    } else if(Breakpoints.is('xl')){
        $('.slideshow-outer .slidecont').css('max-width', ($(window).width() / 2.2) + 'px');
        $('.slideshow-outer .slidecont').css('left', 'initial');

        $('.footer .footset').removeClass('textcenter');
    }
}