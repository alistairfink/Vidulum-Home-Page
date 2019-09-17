window.onload = function() {
	$('.test-carousel').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true,
    	centerMode: true,
    	autoplay: true,
    	autoplaySpeed: 3000
	});
};