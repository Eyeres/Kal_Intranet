$(document).ready(
    function () {
        $('.submenulist h6').on('click', function () {
            if ($('.submenu').hasClass('xs') || $('.submenu').hasClass('sm') || $('.submenu').hasClass('md')) {
                $('.menutoggle.closeit').css('display', 'none');
                $('.menutoggle.openit').css('display', 'inline-table');
                $('.sidemenu').css('display', 'none');

                alwaysRes();
            }
        });
    }
);

function alwaysRes() {
    var topGap = 65;
    if ($('.sidemenu').css('display') !== 'none' && $('.sidemenu').offset().top >= 65) {
        topGap += $('.sidemenu').outerHeight();
    }
    $('.submenu, #searchbox').css('top', topGap + 'px');
    $('#page-container').css('top', topGap - 65 + 'px');
}