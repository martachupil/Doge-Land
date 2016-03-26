
$(document).ready( function() {
    $('#backTop').backTop({
        'position' : 800,
        'speed' : 500,
        'color' : 'black',
    });
    $('.time').removeClass('hide');
});

(function($) {

    $.fn.backTop = function(options) {



        var backBtn = this;

        var settings = $.extend({
            'position' : 400,
            'speed' : 500,
            'color' : 'white'
        }, options);

        var position = settings['position'];
        var speed = settings['speed'];
        var color = settings['color'];

            backBtn.addClass('navy');

        backBtn.css({
            'right' : 40,
            'bottom' : 40,
            'position' : 'fixed',
        });

        $(document).scroll(function(){
            var pos = $(window).scrollTop();

            if(pos >= position){
                backBtn.fadeIn(speed);
            } else{
                backBtn.fadeOut(speed);
            }
        });

        backBtn.click(function(){
            $("html, body").animate({
                    scrollTop:0
                },
                {
                    duration: 1200
                });
        });

    }

}(jQuery));

$(document).ready(function () {
    $('.burger').on('click', function() {
        $('header.mobile').addClass('active');
    });
    $('.burger-close').on('click', function() {
        $('header.mobile').removeClass('active');
    });
    $('.row.top a').on('click', function() {
        $('header.mobile').removeClass('active');
    });
    $("a[data-scroll]").click(function (event) {
        event.preventDefault();
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top - 58;
        $('body').animate({ scrollTop: destination }, 1100);
        return false;
    });
});

new WOW().init();