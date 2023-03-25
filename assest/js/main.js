(fuction($) {
    "use strict";

    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        item: 1,
        dots: true,
        loop: true,
        nav: true,
        navText: [
          '<i class="bi bi-chevron-left"></i>',
          '<i class="bi bi-chevron-right"></i>',
        ]
    });
})(jQuery);