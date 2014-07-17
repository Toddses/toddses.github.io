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
/**

 homescript.js
 
 Functionality related to the site design.

**/

// drops down the masthead based on user scrolling
jQuery(function($) {
    $header = $("#header-wrap");

    $(window).scroll(function() {
        if ($header.visible(true)) {
            $(".masthead").slideUp("slow");
        }
        else {
            $(".masthead").slideDown("slow");
        }
    });
});