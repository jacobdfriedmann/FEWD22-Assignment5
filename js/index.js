$(document).ready(function(){

	$('.read-more').click(showMore);
	$('.read-less').click(showLess);
	$('.learn-more').click(learnMore);
	$('.learn-less').click(learnLess);


	function showMore(){
		$('#readMoreText').slideDown();
		$('.read-less').show();
		$('.read-more').hide();
	}

	function showLess(){
		$('#readMoreText').slideUp();
		$('.read-more').show();
		$('.read-less').hide();	
	}

	function learnMore(){
		$('#learnMoreText').slideDown();
		$('.learn-less').show();
		$('.learn-more').hide();
	}

	function learnLess(){
		$('#learnMoreText').slideUp();
		$('.learn-more').show();
		$('.learn-less').hide();
	}









});