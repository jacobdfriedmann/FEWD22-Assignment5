$(document).ready(function() {

	$('.read-more').click(showMore);
	$('.read-less').click(showLess);

	function showMore() {
		$('#readMoreText').slideDown();
		$('.read-more').hide();
		$('.read-less').show();
	}

	function showLess() {
		$('#readMoreText').slideUp(function() {
			$('.read-less').hide();
			$('.read-more').show();
		});
	}

	$('.learn-more').click(learnMore);

	function learnMore() {
		$('#learnMoreText').slideDown();
		$('.learn-more').hide();
	}

});