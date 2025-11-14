function headerPadding() {
    let header = document.querySelector('header')
    document.body.style.paddingTop = header.offsetHeight + 'px'
}
$('.navi li, .sub-bg').mouseenter(function() {
    $('.sub-menu, .sub-bg').stop().slideDown()
})
$('.navi li, .sub-bg').mouseleave(function() {
    $('.sub-menu, .sub-bg').stop().slideUp()
})
window.addEventListener('load', headerPadding)
window.addEventListener('resize', headerPadding)
