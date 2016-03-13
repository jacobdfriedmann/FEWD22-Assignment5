$(document).ready(function() {
	$('#read-more1').click(showMoreText)
	$('#read-more2').click(showMoreText2)
	$('#read-less1').click(hideText)
	$('#read-less2').click(hideText2)
	$('.learn-more').click(learnMoreText)

	function showMoreText() {
		$('#readMoreText1').slideDown();
		$('#read-less1').show();
		$('#read-more1').hide();
	}

	function showMoreText2() {
		$('#readMoreText2').slideDown();
		$('#read-less2').show();
		$('#read-more2').hide();
	}

	function hideText() {
		$('#readMoreText1').slideUp();
		$('#read-less1').hide();
		$('#read-more1').show();
	}

	function hideText2() {
		$('#readMoreText2').slideUp();
		$('#read-less2').hide();
		$('#read-more2').show();
	}

	function learnMoreText() {
		$('#learnMoreText').slideDown();
		$('.learn-more').hide();
	}

});

 