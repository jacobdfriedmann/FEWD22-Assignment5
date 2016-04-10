$(document).ready(function() {

	$('.read-more').click(showMore);
	$('.read-less').click(showLess);
	$('.learn-more').click(learnMore);

	function showMore() {
		$('#readMoreText').slideDown();
		$('.read-more').hide();
		$('.read-less').show();
 	}

	function showLess() {
		$('#readMoreText').slideUp();
		$('.read-less').hide();
		$('.read-more').show();

	}
	
	function learnMore() {
	$('#learnMoreText').slideDown();
	$('.learn-more').hide();

	}

});