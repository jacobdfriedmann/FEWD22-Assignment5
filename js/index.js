$(document).ready(function () { 

	// // hide all answers/
	$('#learnMoreText, #readMoreText, #read-less, #learn-less').addClass('hide');

	$("#read-more").click(readMore);
	$("#learn-more").click(learnMore);
	$('#read-less').click(readLess);
	$('#learn-less').click(learnLess);



	function readMore () {
		$("#readMoreText").slideDown();
		$("read-more").slideDown();
		$("#read-more").hide();
		$("#read-less").slideDown();
}

	function readLess () {
		$("#readMoreText").slideUp();
		$("#read-less").slideUp();
		$("#read-less").hide();
		$("#read-more").show();

}

	function learnMore () {
		$("#learnMoreText").slideDown();
		$("#learn-more").slideDown();
		$("#learn-more").hide();

}
function learnLess () {
		$("#learnMoreText").slideUp();
		$("#learn-less").hide();
		$("#learn-more").show();

}

}
)
	
// $('#readless').click(readLess);

	
	// $('#learn-more').click(learnMore);
	


// // 	// show answer 1 on click
// // 	$('post').click(showAnswer1);
// // 	$('sidebar').click(showAnswer2);
// // 	$('#question3').click(showAnswer3);

// // 	function showAnswer1 () {
// // 		$('#answer1').toggleClass('hidden');
// // 	}
// // 	function showAnswer2 () {
// // 		$('#answer2').slideToggle('hidden');
// // 	}

// // 	function showAnswer3 () {
// // 		$('#answer3').css('display', 'block');
// // 	}
// // }
// // )
// }
// )
// // if user clicks 'read more'
// $('#read-more').click(readMore); 

