jQuery(function($) {
    $(window).scroll(function() {
        if ($('.header-wrap').visible(true)) {
            $(".masthead").slideUp("slow");
        }
        else {
            $(".masthead").slideDown("slow");
        }
    });
});