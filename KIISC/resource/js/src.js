<<<<<<< HEAD
$(document).ready(function () {
    $("#header").load("./resource/include/header.html", function () {
        function headerPadding() {
    let header = document.querySelector('header');
    if (header) {
        document.style.paddingTop = header.offsetHeight + 'px';
=======
function headerPadding() {
    let header = document.querySelector('header')
    if (header) {
        document.style.paddingTop = header.offsetHeight + 'px'
>>>>>>> ed195c5 (KIISC)
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

<<<<<<< HEAD
$(window).on('resize', function() {
    if ($(window).width() > 1008) {
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
    });
    $("#footer").load("./resource/include/footer.html");
});

// subpage

$(document).ready(function() {

    $('.mobile-list').on('click', function() {
        if ($('.subpage').is(':visible')) {
            $('.subpage').stop().slideUp(300);
        } else {
            $('.subpage').stop().slideDown(300);
        }
    });

    $(window).on('resize', function() {
        if ($(window).width() <= 1008) {
            $('.subpage').stop().slideUp(300);
=======

$(document).ready(function() {
    $('.mobile > i').click(function() {
        $('.mobile .menu').toggleClass('active');
        
        $(this).toggleClass('fa-bars fa-times'); 
    });

    $('.main-menu').click(function() {
        var submenu = $(this).next('.submenu');
        var arrow = $(this).find('i');

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
>>>>>>> ed195c5 (KIISC)
        }
    });

    $(window).on('beforeunload', function() {
        $('.subpage').stop().hide();
    });

});


// topbtn

$(document).ready(function() {
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 200) {
            $('#topbtn').fadeIn();  
        } else {
            $('#topbtn').fadeOut(); 
        }
    });

    $('#topbtn').on('click', function() {
        $('html, body').animate({ scrollTop: 0 }, 500); 
    });
});