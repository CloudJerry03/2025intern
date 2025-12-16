function headerPadding() {
    let header = document.querySelector('header')
    // header가 존재할 때만 paddingTop을 설정
    if (header) {
        document.body.style.paddingTop = header.offsetHeight + 'px'
    }
}

// 데스크톱 서브 메뉴 슬라이드 (jQuery)
$('.navi li, .sub-bg-wrap').on('mouseenter', function () {
    $('.sub-menu, .sub-bg-wrap').stop().slideDown(300); // 300ms 애니메이션 추가
});

$('.navi li, .sub-bg-wrap').on('mouseleave', function () {
    $('.sub-menu, .sub-bg-wrap').stop().slideUp(300); // 300ms 애니메이션 추가
});

// 페이지 로드 및 리사이즈 시 헤더 패딩 설정
window.addEventListener('load', headerPadding);
window.addEventListener('resize', headerPadding);

// 모바일 메뉴 토글 (jQuery)
$('.mobile > i').on('click', function () {
    $('.mobile .menu').slideToggle(300);
    $(this).toggleClass('fa-bars fa-close');
});

// 모바일 서브 메뉴 토글 (jQuery) - .flex-row.align-center 대신 .main-menu.flex-center 사용
$('.mobile .menu li .main-menu').on('click', function () {
    // 자식 아이콘 토글
    $(this).children('i').toggleClass('fa-angle-down fa-angle-up');
    // 가장 가까운 li의 자식 sub-menu 토글
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