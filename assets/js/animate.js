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

    function moveLeft() {
        //if (!isRightMousedown) { return; }

        var newPos = parseInt($(".album-list").css("left")) - 10;
        $(".album-list").animate({"left": newPos}, "slow");
            
        //if (isRightMousedown) { moveLeft(); }
    }

    //$("#right-arrow").bind("mousedown", function() {
        //var newPos = parseInt($(".album-list").css("left")) - 10;
        //$(".album-list").animate({"left": newPos}, "slow");
    //});

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

    /*var isRightMousedown = false;
    $("#right-arrow").mousedown(function() {
        isRightMousedown = true;
        moveLeft();
    }).mouseup(function() {
        isRightMousedown = false;
    });*/
    //$("#right-arrow").click(function() {
        //var newPos = parseInt($(".album-list").css("left")) - 10;
        //$(".album-list").animate({"left": newPos}, "slow");
    //})
});