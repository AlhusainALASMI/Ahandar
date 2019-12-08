$(document).ready(function() {

	//------------------ Voile OnLoad ---------------------
	$(".voile").delay(200).fadeOut(200);


	//------------------- Fade-in logos -------------------
	$("img.logo").delay(200).animate({
		opacity: 1,
		width: "50%"}, 800);
	$("img.separation").delay(500).animate({opacity: 1}, 1000);

	//----------------- Scroll to anchor ------------------

	//from Index to Presentation
	$("img.separation").click(function (){ //from separation to presentation1
		$("body, html").animate({
			scrollTop: $(".presentation").offset().top -100
		},800);
	});

	//from Presentation to Products Presentation
	$("img.separation2").click(function (){ //from separation to presentation1
		$("body, html").animate({
			scrollTop: $(".presProduits").offset().top -100
		},800);
	});
});




$(window).scroll(function() {

	//------------------- Fade-out scroll -------------------
	$("img.logo").css("opacity", 1 - $(window).scrollTop() / 400); //Logo_home
		

	slideInElements();
});


//-------------------- Slide in based on scroll --------------------
function slideInElements () {
	//Presentation
	if ($(window).scrollTop() >= 300) {
		$(".presentation").animate({
			left: 0}, 1000);
	}

		//Products Prensentation
	if ($(window).scrollTop() >= 1200) {
		$(".presProduits").animate({
			right: 0}, 1000);
		console.log("BIM");
	}
}