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