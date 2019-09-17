window.onload = function() {
	$('.main-carousel').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true,
    	centerMode: true,
    	autoplay: true,
    	autoplaySpeed: 6000,
    	variableWidth: true
	});
};