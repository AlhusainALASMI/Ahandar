$(document).ready(function() {

	//fade in navbar loading page
	$(".navbar").animate({"opacity": 1}, 1000);

//------------------- SEARCH ----------------------------
	$(".searchPanel").hide(); //Cache la recherche pour l'activer plus tard

	//Ouvrir searchPanel
	$("img.loupeImg").click(function() {
		$(".suggest").empty(); //Efface les suggestions
		$(".search").val(""); //Efface le texte de recherche
		$(".searchPanel").slideToggle(400);
		//$(".searchPanel").css({"top": "3vw"});
		$(".search").focus();
	});

	//Fermer searchPanel (perte de focus)
	$(".search").blur(function() {
		$(".searchPanel").slideToggle(400);
		//$(".searchPanel").css({"top": "-10vw"});
	});


//---------------------- MENU --------------------------
	//Ouvrir menuPanel
	$("img.menuImg").click(function() {
		$(".menuPanel").toggleClass("active", 1000);
	});

	//Fermer menuPanel (perte de focus)
	$(".menuPanel").blur(function() {
		$(".menuPanel").toggleClass("active", 1000);
	})
	
//-------------------------------------- Jour / Nuit (checkbox) -----------------------------------
	$(".switch input").prop("checked", false);	//Decoche la checkbox jour/nuit

	$(".switch").click(function() {

			//NIGHT MODE
		if ($(".checkboxClass").is(':checked')) {
			$("img.logo").css({"filter": "invert(1)"}); //logo inverted nuit
			$(".background").css({"background-image": "url(images/index/bg_index_nuit.png)"}); //background nuit
			$(".navbar").css({"filter": "invert(1)"}, 1000);
			$(".switchText").text("Mode nuit: Activé"); //texte slider activé nuit

			//DAY MODE
		} else {
			$("img.logo").css({"filter": "invert(0)"}); //logo normal jour
			$(".background").css({"background-image": "url(images/index/bg_index.png)"}); //background jour
			$(".navbar").css({"filter": "invert(0)"});
			$(".switchText").text("Mode nuit: Désactivé"); //texte slider désactivé jour

		}
	});
});