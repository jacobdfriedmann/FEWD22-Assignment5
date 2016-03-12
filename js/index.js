$(document).ready(function() {

	$('.readmore').click(readMore);
	$('.readless').click(readLess);
	$('.learnmore').click(learnMore);

	function readMore() {
 		$('#readMoreText').slideDown();
 		$('.readmore').hide();
 		$('.readless').show();
	}

	function readLess() {
 		$('.readless').hide();
 		$('#readMoreText').slideUp();
 		$('.readmore').show();
	}

	function learnMore() {
		$('.learnmore').hide();
		$('#learnMoreText').slideDown();
	}

});