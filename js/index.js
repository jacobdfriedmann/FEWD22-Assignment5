$(document).ready(function() {

$('.read-more').click(readMore);
	function readMore () {
		$('#readMoreText').slideDown();
		$('.read-less').show();
		$('.read-more').hide();
	}

$('.read-less').click(readLess);
	function readLess () {
		$('#readMoreText').slideUp();
		$('.read-more').show();
		$('.read-less').hide();
	}

$('.learn-more').click(learnMore);
	function learnMore () {
		$('#learnMoreText').slideDown();
		$('.learn-more').hide();
	}

});