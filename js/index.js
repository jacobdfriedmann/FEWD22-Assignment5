$(document).ready(function() {


	$('.readMore').click(readMore);
	$('.read-less').click(readLess);
	$('.learn-more').click(learnMore);

	function readMore () {
 		$('.readMore').hide();		
		$('#readMoreText').slideDown();
 		$('.read-less').show(); 
	}
	function readLess (){
		$('.read-less').hide();
		$('#readMoreText').slideUp();
		$('.readMore').show();
 		
	}
	function learnMore () {
		$('.learn-more').hide();
		$('.hide').show();
		$('#learnMoreText').slideDown();

		
	}

});