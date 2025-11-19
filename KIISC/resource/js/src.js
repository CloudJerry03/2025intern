$('.menu li').mouseenter(function(){
    $(this).children('.submenu').stop().slideDown()
})
$('.menu li').mouseleave(function(){
    $(this).children('.submenu').stop().slideUp()
})

$(document).ready(function() {
    $('.hamburger').click(function() {
        $('.navi').toggleClass('open');
    });

    $('.navi li a').click(function(e) {
        e.preventDefault();

        var $li = $(this).parent();
        
        if ($li.hasClass('active')) {
            $li.removeClass('active');
        } else {
            $('.navi li').removeClass('active');
            $li.addClass('active');
        }
    });

    $(document).click(function(event) {
        if (!$(event.target).closest('.navi').length && !$(event.target).closest('.hamburger').length) {
            $('.navi').removeClass('open');
            $('.navi li').removeClass('active');
        }
    });
});