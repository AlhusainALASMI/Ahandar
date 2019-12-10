$(document).ready(function() {

	cvImages();

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


	//glasses / projects
	$("img.glassesImg").on({
		mouseenter: function() {
			$(".projectsTxt").css({"left": "22%"});
			$(".projectsTxtFull").css({"opacity": 0.8});
		},
		mouseleave: function() {
			$(".projectsTxt").css({"left": "21%"});
			$(".projectsTxtFull").css({"opacity": 0});			
		}
	});


	//phone / contact
	$("img.phoneImg").on({
		mouseenter: function() {
			$(".phoneTxt").css({"left": "23%"});
			$(".phoneTxtFull").css({"opacity": 0.8});
		},
		mouseleave: function() {
			$(".phoneTxt").css({"left": "22%"});
			$(".phoneTxtFull").css({"opacity": 0});			
		}
	});
});


function cvImages () {

	$(".cvTaha").hide();
	$(".cvHusain").hide();
	$(".cvLeo").hide();

	//show cvTaha
	$(".tabTaha").click(function() {
		$(".cvTaha").show();
		$(".cvHusain").hide();
		$(".cvLeo").hide();
	});

	//show cvHusain
	$(".tabHusain").click(function() {
		$(".cvTaha").hide();
		$(".cvHusain").show();
		$(".cvLeo").hide();
	});

	//show cvLeo
	$(".tabLeo").click(function() {
		$(".cvTaha").hide();
		$(".cvHusain").hide();
		$(".cvLeo").show();
	});
}