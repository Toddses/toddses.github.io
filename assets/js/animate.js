/**

 animate.js
 
 Animation related jQuery

**/

jQuery(document).ready(function($) {
    $("#registry").click(function() {
        $(".registry-wrap").slideToggle("slow");
    });

    $("#album").click(function() {
        $(".album-wrap").slideToggle("slow");
    });

    $("#events").click(function() {
        $(".events-wrap").slideToggle("slow");
    });

    var $list = $(".album-list");
    var listWidth = -5785;

    $("#right-arrow a").click(function() {
        if (parseInt($list.css("left")) <= listWidth) {
            $list.animate({"left": listWidth}, 100, "linear");
        } else {
            $list.animate({"left": "-=304"}, 100, "linear");
        }
    });
    $("#left-arrow a").click(function() {
        if (parseInt($list.css("left")) >= 0) {
            $list.animate({"left": "0"}, 100, "linear");
        } else {
            $list.animate({"left": "+=304"}, 100, "linear");
        }
    });
});