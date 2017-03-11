$(document).ready(function() {
    // set panels equal to window size
    setPanelSize();

    $(window).resize(function(){
        setPanelSize();
    });

     // function to set panels to window size and constrain video
    function setPanelSize(){
        var windowHeight = $(window).height();
        var windowWidth = $(window).width();
        var windowWidthColor = $('.padd_box').height();
        var textWrap = $('.text_wrap').height();

        //calculate whether the video is too tall for the space
        //resize video and panel

        $('.menu_wrap').css({'padding-top': (windowHeight - windowWidthColor) / 2 + 'px' });
        $('.home_head').css({'height': windowHeight + 'px' });
        $('.text_wrap').css({'margin-top': - textWrap / 2 + 30 + 'px' });
        $('.how_do iframe').css({'height': windowWidth / 2 / 1920 * 1080 + 'px' });

    }
});

$(function() {
			$('.menu_btn').on('click', function(e) {
         $(".menu_box").toggleClass("oppen");
         $(".menu_wrap").toggleClass("oppen");
         $(this).toggleClass("oppen");
      });

});
