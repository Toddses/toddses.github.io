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

    function startScrollingLeft() {
        // contintually increase scroll position, but don't go past 0
        if (parseInt($list.css("left")) >= 0) {
            $list.animate({"left": "0"}, 100, "linear");
        } else {
            $list.animate({"left": "+=50"}, 100, "linear", startScrollingLeft);
        }
    }
    function startScrollingRight() {
        // contintually increase scroll position, but don't go past the total width
        if (parseInt($list.css("left")) <= listWidth) {
            $list.animate({"left": listWidth}, 100, "linear");
        } else {
            $list.animate({"left": "-=50"}, 100, "linear", startScrollingRight);
        }
    }

    function stopScrollingLeft() {
        // stop increasing scroll position
        $list.stop();
    }
    function stopScrollingRight() {
        // stop increasing scroll position
        $list.stop();
    }

    $("#left-arrow").mousedown(startScrollingLeft).mouseup(stopScrollingLeft);
    $("#right-arrow").mousedown(startScrollingRight).mouseup(stopScrollingRight);

    $("#right-arrow").on("touchstart", function() {
        $list.animate({"left": "-=50"}, 100, "linear");
    });
    $("#left-arrow").on("touchstart", function() {
        $list.animate({"left": "+=50"}, 100, "linear");
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