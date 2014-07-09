jQuery(function($) {
    $(window).scroll(function() {
        //var topHeight = $('.content-wrap').height()-1;
        //var scroll = $(window).scrollTop();

        //if (scroll >= topHeight) {
            //$("#logo-image").attr("src",templateDir+"/assets/img/summitqwest-logo-side.svg");
            
            //$("#masthead").removeClass("home-header").addClass("site-header").delay(11).queue(function() {
                //$(this).addClass("show").dequeue();
            //});
            //$(".testing").css('display', 'block');
        //}
        //if (scroll >= (topHeight)*0.45 && innerWidth >= 800) {
            //$("#Home .header").fadeOut(300);
        //}
        //if (scroll < topHeight) {
            //$("#logo-image").attr("src",templateDir+"/assets/img/summitqwest-logo-side-white.svg");
            //$("#masthead").removeClass("show").delay(1).queue(function() {
                //$(this).removeClass("site-header").addClass("home-header").dequeue();
            //});
            //$(".testing").css('display', 'none');
        //}
        //if (scroll < (topHeight)*0.45 && innerWidth >= 800) {
            //$("#Home .header").fadeIn(1000);
        //}

        if ($('.header-wrap').visible(true)) {
            $(".masthead").slideUp("slow");
        }
        else {
            $(".masthead").slideDown("slow");
        }

    });
});