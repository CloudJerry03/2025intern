$(document).ready(function () {
    $("#header").load("./resource/include/header.html", function () {
        $('.navi li, .sub-bg-wrap').on('mouseenter', function () {
            $('.sub-menu, .sub-bg-wrap').stop().slideDown(300);
        });

        $('.navi li, .sub-bg-wrap').on('mouseleave', function () {
            $('.sub-menu, .sub-bg-wrap').stop().slideUp(300);
        });
        $('.mobile > i').on('click', function () {
            $('.mobile .menu').slideToggle(300);
            $(this).toggleClass('fa-bars fa-close');
        });

        $('.mobile .menu li .main-menu').on('click', function () {
            $(this).children('i').toggleClass('fa-angle-down fa-angle-up');
            $(this).closest('li').children('.sub-menu').slideToggle(300);
        });

        window.addEventListener('resize', function () {
            if (window.innerWidth > 767) {
                $('.mobile .menu').stop(true, true).hide();
                $('.mobile > i')
                    .removeClass('fa-close')
                    .addClass('fa-bars');
                $('.mobile .sub-menu').hide();
                $('.mobile .menu i')
                    .removeClass('fa-angle-up')
                    .addClass('fa-angle-down');
            }
        });

        function headerPadding() {
            let header = document.querySelector('header')
            if (header) {
                document.body.style.paddingTop = header.offsetHeight + 'px'
            }
        }

        headerPadding()
        window.addEventListener('resize', headerPadding);

    });
    $("#footer").load("./resource/include/footer.html");
});