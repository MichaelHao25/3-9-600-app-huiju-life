$('.main .page-sport-count .data-switch .item').on('click', function() {
	var sClass = $(this).attr('data-class');
	$('.main .page-sport-count .data-switch .wrap').attr('class', 'wrap ' + sClass);

});



$('.main .page-unit-set .select').on('click', '.item', function() {
	$(this).addClass('selected').siblings().removeClass('selected');
});


var dDate = new Date;
var nTime = dDate.getTime()
var jDate = {
	'day': dDate.getDate(),
	'month': dDate.getMonth() + 1,
	'yaer': dDate.getFullYear()
}
$('.main .page-sport .date-range .date').html(jDate.yaer + '-' + jDate.month + '-' + jDate.day)


$('.main .page-sport .date-range').attr('data-time', nTime);
$('.main .page-sport .date-range').on('click', '.left-control', function() {
	var oldTime = parseInt($('.main .page-sport .date-range').attr('data-time'));
	oldTime -= 24 * 60 * 60 * 1000;
	var newTime = new Date;
	newTime.setTime(oldTime)
	var date = {
		'day': newTime.getDate(),
		'month': newTime.getMonth() + 1,
		'yaer': newTime.getFullYear()
	}
	$('.main .page-sport .date-range .date').html(date.yaer + '-' + date.month + '-' + date.day)
	$('.main .page-sport .date-range').attr('data-time', newTime.getTime());
}).on('click', '.right-control', function() {
	var oldTime = parseInt($('.main .page-sport .date-range').attr('data-time'));
	oldTime += 24 * 60 * 60 * 1000;
	var newTime = new Date;
	newTime.setTime(oldTime)
	var date = {
		'day': newTime.getDate(),
		'month': newTime.getMonth() + 1,
		'yaer': newTime.getFullYear()
	}
	$('.main .page-sport .date-range .date').html(date.yaer + '-' + date.month + '-' + date.day)
	$('.main .page-sport .date-range').attr('data-time', newTime.getTime());
});

var media = document.createElement('style')
media.innerHTML = ".cp{cursor: pointer;}";
document.getElementsByTagName('head')[0].appendChild(media);
$('body *[href]').addClass('cp');
$('body *[href]').on('click', function() {
	if ($(this).attr('target')) {
		window.open($(this).attr('href'));
	} else {
		window.location.href = $(this).attr('href');
	}
});

$('.puclic-header .center-menu .nav a').on('click', function() {
	$(this).addClass('active').siblings().removeClass('active');
});
var mySwiper = new Swiper(' .swiper .swiper-container', {
	pagination: ' .swiper .swiper-pagination',
	slidesPerView: 3,
	paginationClickable: true
})
