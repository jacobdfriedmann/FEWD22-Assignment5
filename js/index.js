$(document).ready(function() {

$('.readmore').click(slideDownMore)
$('.readmore').click(showLess)
$('.readmore').click(hideMore)

function slideDownMore() {
	$('#readMoreText').slideDown();
}

function showLess() {
	$('.readless').css('display', 'block');
}

function hideMore() {
	$('.readmore').addClass('hide');

}

$('.readless').click(slideUpLess)
$('.readless').click(showMore)
$('.readless').click(hideLess)

function slideUpLess() {
	$('#readMoreText').slideUp();
}

function showMore() {
	$('.readmore').removeClass('hide');
}

function hideLess() {
	$('.readless').css('display', 'none');
}

$('.learn-more').click(slideDownText)
$('.learn-more').click(hideLearnText)

function slideDownText() {
	$('#learnMoreText').slideDown();
}

function hideLearnText() {
	$('.learn-more').addClass('hide');
}

});
