jQuery(document).ready(function ($) {
    $(window).scroll(function () {
        if ($(this).scrollTop() < 600) {
            $('#back-to-top').fadeOut();
        } else {
            $('#back-to-top').fadeIn();
        }
    });
    $('#back-to-top').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});