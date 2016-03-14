$(document).ready(function() {
	$('#rm1').click(showtext)
	$('.hide').click(hidetext)
	$('.learn-more').click(showlearn)

	function showtext() {
		$('#readMoreText').slideDown()
		$('.read-less').show()
		$('.read-more').hide()
	}

	function hidetext() {
		$('#readMoreText').slideUp()
		$('.read-less').hide()
		$('.read-more').show()
	}

	function showlearn() {
		$('#learnMoreText').slideDown()
		$('.learn-more').hide()
	}

});