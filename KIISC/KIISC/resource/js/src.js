function headerPadding() {
    let header = document.querySelector('header');
    if (header) {
        document.style.paddingTop = header.offsetHeight + 'px';
    }
}

$('.navi li').on('mouseenter', function() {
    $(this).children('.submenu').stop().slideDown(300);
});

$('.navi li').on('mouseleave', function() {
    $(this).children('.submenu').stop().slideUp(300);
});

window.addEventListener('load', headerPadding);
window.addEventListener('resize', headerPadding);

$('.mobile > i').on('click', function() {
    $('.mobile .menu').slideToggle(300);
});

$(window).on('resize', function() {
    if ($(window).width() > 767) {
        $('.mobile .menu').removeClass('active').slideUp(300);
        $('.mobile > i').removeClass('fa-times').addClass('fa-bars'); 
        $('.submenu').stop(true, true).slideUp();
        $('.main-menu').removeClass('active');
        $('.main-menu i').removeClass('fa-angle-up').addClass('fa-angle-down');
    }
});

$(document).ready(function() {
    $('.mobile > i').click(function() {
        $('.mobile .menu').toggleClass('active');       
        $(this).toggleClass('fa-bars fa-times'); 

        if (!$('.mobile .menu').hasClass('active')) {
            $('.submenu').stop(true, true).slideUp();   
            $('.main-menu').removeClass('active');      
            $('.main-menu i')
                .removeClass('fa-angle-up')
                .addClass('fa-angle-down');             
        }
    });

    $('.main-menu').click(function() {
        var submenu = $(this).next('.submenu');
        var arrow = $(this).find('i');

        submenu.css({
            'top': $(this).outerHeight(),
            'left': 0
        });
    
        if (submenu.is(':visible')) {
            submenu.stop(true, true).slideUp();
            arrow.removeClass('fa-angle-up').addClass('fa-angle-down');
        } else {
            $('.submenu').stop(true, true).slideUp(); 
            $('.main-menu').removeClass('active');
            $('.main-menu i').removeClass('fa-angle-up').addClass('fa-angle-down');

            submenu.stop(true, true).slideDown();
            $(this).addClass('active');
            arrow.removeClass('fa-angle-down').addClass('fa-angle-up');
        }
    });
});
