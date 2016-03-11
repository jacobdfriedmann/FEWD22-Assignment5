$(document).ready(function() {

	$(".read-more").click(showMore);
	$(".read-less").click(showLess);
	$(".learn-more").click(learnMore);

	function showMore (){
		$('#readMoreText').slideDown();
		$('.read-less').show();
		$('.read-more').hide();
	}
	function showLess(){
		$('#readMoreText').slideUp();
		$('.read-more').show();
		$('.read-less').hide();
	}
	function learnMore (){
		$('#learnMoreText').slideDown();
		$('.learn-more').hide();
	}

})
