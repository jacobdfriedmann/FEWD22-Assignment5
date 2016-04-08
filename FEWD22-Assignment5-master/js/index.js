$(document).ready(function() {

	$('.read-less').click(slideUp);
	$('.read-more').click(slide);
	$('.learn-more').click(learn);

	function slide() {
    	$('#readMoreText').slideDown(400);
    	$('.read-more').hide();
    	$('.hide').show();
	}

	function learn() {
    	$('span').slideDown(400);
    	$('.learn-more').hide();
	}

	function slideUp() {
    	$('#readMoreText').slideUp(400);
    	$('.read-more').show();
    	$('.read-less').hide();
	}

});