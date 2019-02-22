/**
 * Theme functions file
 */
(function ($) {
    var $document = $(document);
    var $window = $(window);

    /**
    * Document ready (jQuery)
    */
    $(function () {

        /**
         * Activate superfish menu.
         */
        $('.sf-menu').superfish({
            'speed': 'fast',
            'delay' : 0,
            'animation': {
                'height': 'show'
            }
        });

        /**
         * Activate jQuery.mmenu.
         */
        $("#menu-main-slide").mmenu({
            slidingSubmenus: false
        })

    });

})(jQuery);




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