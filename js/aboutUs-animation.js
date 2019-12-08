$(document).ready(function() {

	//Voile "Qui sommes-nous ?"
	$("img.loadVoile").delay(1000).animate({"top": "100%"}, 1000);



	//HOVER IMAGES > text
	
	//coffee / team
	$("img.coffeeImg").on({
		mouseenter: function() {
			$(".teamTxt").css({"right": "11%"});
			$(".teamTxtFull").css({"opacity": 0.8});
		},
		mouseleave: function() {
			$(".teamTxt").css({"right": "10%"});
			$(".teamTxtFull").css({"opacity": 0});	
		}
	});

	//documents / story
	$("img.document2Img").on({
		mouseenter: function() {
			$(".storyTxt").css({
				"right": "11%",
				"left": "15%"
			});
			$(".storyTxtFull").css({
				"transform": "rotate(-12deg)",
				"opacity": 0.8
			});
		},
		mouseleave: function() {
			$(".storyTxt").css({
				"right": "10%",
				"left": "16%"
			});
			$(".storyTxtFull").css({
				"transform": "rotate(-16deg)",
				"opacity": 0
			});			
		}
	});
});