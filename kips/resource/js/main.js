function headerPadding() {
    let header = document.querySelector('header')
    document.body.style.paddingTop = header.offsetHeight + 'px'
}
$('.navi li, .sub-bg-wrap').mouseenter(function() {
    $('.sub-menu, .sub-bg-wrap').stop().slideDown()
})
$('.navi li, .sub-bg-wrap').mouseleave(function() {
    $('.sub-menu, .sub-bg-wrap').stop().slideUp()
})
window.addEventListener('load', headerPadding)
window.addEventListener('resize', headerPadding)
