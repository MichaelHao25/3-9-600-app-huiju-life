$('.main .page-sport-count .data-switch .item').on('click', function() {
	var sClass = $(this).attr('data-class');
	$('.main .page-sport-count .data-switch .wrap').attr('class', 'wrap ' + sClass);

});



$('.main .page-unit-set .select').on('click', '.item', function() {
	$(this).addClass('selected').siblings().removeClass('selected');
});


var mySwiper = new Swiper(' .swiper .swiper-container', {
	pagination: ' .swiper .swiper-pagination',
	slidesPerView: 3,
	paginationClickable: true
})
