/**

 animate.js
 
 Animation related jQuery

**/

jQuery(document).ready(function($) {
    $("#registry").click(function() {
        $(".registry-wrap").slideToggle("slow");
    });

    $("#events").click(function() {
        $(".events-wrap").slideToggle("slow");
    });
});
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